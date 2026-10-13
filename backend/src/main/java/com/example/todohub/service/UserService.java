package com.example.todohub.service;

import com.example.todohub.dto.AuthResponse;
import com.example.todohub.dto.LoginRequest;
import com.example.todohub.dto.RegisterRequest;
import com.example.todohub.entity.User;
import com.example.todohub.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public AuthResponse register(RegisterRequest req) {
        if (userRepository.existsByUsername(req.getUsername().trim())) {
            throw new IllegalArgumentException("Tên đăng nhập '" + req.getUsername() + "' đã tồn tại!");
        }

        // Mã hóa mật khẩu bằng thuật toán BCrypt siêu an toàn
        String encodedPassword = passwordEncoder.encode(req.getPassword());

        User user = new User(
                req.getUsername().trim(),
                encodedPassword,
                req.getFullName() != null && !req.getFullName().isBlank() ? req.getFullName().trim() : req.getUsername().trim(),
                req.getEmail() != null ? req.getEmail().trim() : ""
        );
        user.setAvatar("🎮");
        user.setScore(100);
        user.setWins(0);

        User saved = userRepository.save(user);
        return mapToAuthResponse(saved, "Đăng ký thành công!");
    }

    public AuthResponse login(LoginRequest req) {
        Optional<User> userOpt = userRepository.findByUsername(req.getUsername().trim());
        if (userOpt.isEmpty()) {
            throw new IllegalArgumentException("Tài khoản không tồn tại!");
        }

        User user = userOpt.get();
        boolean passwordMatches = false;

        // Kiểm tra khớp mật khẩu mã hóa BCrypt (hoặc khớp trực tiếp nếu là tài khoản cũ trước đây)
        if (user.getPassword().startsWith("$2a$") || user.getPassword().startsWith("$2b$")) {
            passwordMatches = passwordEncoder.matches(req.getPassword(), user.getPassword());
        } else if (user.getPassword().equals(req.getPassword())) {
            passwordMatches = true;
            // Tự động nâng cấp mã hóa mật khẩu cũ sang BCrypt
            user.setPassword(passwordEncoder.encode(req.getPassword()));
            userRepository.save(user);
        }

        if (!passwordMatches) {
            throw new IllegalArgumentException("Mật khẩu không chính xác!");
        }

        return mapToAuthResponse(user, "Đăng nhập thành công!");
    }

    public User recordGameResult(Long userId, boolean isWin, int scoreChange) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy người dùng!"));

        if (isWin) {
            user.setWins(user.getWins() + 1);
            user.setScore(user.getScore() + Math.max(scoreChange, 10));
        } else {
            user.setScore(Math.max(user.getScore() - 5, 0));
        }

        return userRepository.save(user);
    }

    public List<User> getLeaderboard() {
        return userRepository.findTop20ByOrderByScoreDesc();
    }

    public User getById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy người dùng!"));
    }

    private AuthResponse mapToAuthResponse(User user, String msg) {
        AuthResponse res = new AuthResponse();
        res.setId(user.getId());
        res.setUsername(user.getUsername());
        res.setFullName(user.getFullName());
        res.setEmail(user.getEmail());
        res.setAvatar(user.getAvatar());
        res.setScore(user.getScore());
        res.setWins(user.getWins());
        res.setMessage(msg);
        return res;
    }
}
