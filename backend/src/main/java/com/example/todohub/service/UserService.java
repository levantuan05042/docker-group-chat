package com.example.todohub.service;

import com.example.todohub.dto.AuthResponse;
import com.example.todohub.dto.LoginRequest;
import com.example.todohub.dto.RegisterRequest;
import com.example.todohub.entity.User;
import com.example.todohub.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public AuthResponse register(RegisterRequest req) {
        if (userRepository.existsByUsername(req.getUsername())) {
            throw new IllegalArgumentException("Tên đăng nhập '" + req.getUsername() + "' đã tồn tại!");
        }

        User user = new User(
                req.getUsername().trim(),
                req.getPassword(), // Để đơn giản cho demo web nhỏ, lưu trực tiếp hoặc băm mật khẩu
                req.getFullName() != null ? req.getFullName().trim() : req.getUsername(),
                req.getEmail() != null ? req.getEmail().trim() : ""
        );

        User saved = userRepository.save(user);
        return new AuthResponse(saved.getId(), saved.getUsername(), saved.getFullName(), saved.getEmail(), "Đăng ký thành công!");
    }

    public AuthResponse login(LoginRequest req) {
        Optional<User> userOpt = userRepository.findByUsername(req.getUsername().trim());
        if (userOpt.isEmpty()) {
            throw new IllegalArgumentException("Tài khoản không tồn tại!");
        }

        User user = userOpt.get();
        if (!user.getPassword().equals(req.getPassword())) {
            throw new IllegalArgumentException("Mật khẩu không chính xác!");
        }

        return new AuthResponse(user.getId(), user.getUsername(), user.getFullName(), user.getEmail(), "Đăng nhập thành công!");
    }

    public User getById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy người dùng!"));
    }
}
