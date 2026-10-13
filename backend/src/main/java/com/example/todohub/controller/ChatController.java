package com.example.todohub.controller;

import com.example.todohub.entity.ChatMessage;
import com.example.todohub.entity.User;
import com.example.todohub.service.ChatService;
import com.example.todohub.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ChatController {

    private final ChatService chatService;
    private final UserService userService;

    public ChatController(ChatService chatService, UserService userService) {
        this.chatService = chatService;
        this.userService = userService;
    }

    @GetMapping("/chat/messages")
    public ResponseEntity<List<ChatMessage>> getMessages() {
        return ResponseEntity.ok(chatService.getRecentMessages());
    }

    @PostMapping("/chat/messages")
    public ResponseEntity<?> sendMessage(@RequestBody Map<String, Object> body) {
        try {
            Long userId = Long.valueOf(body.get("userId").toString());
            String username = (String) body.get("username");
            String fullName = (String) body.get("fullName");
            String avatar = (String) body.get("avatar");
            String message = (String) body.get("message");
            String gameTag = (String) body.get("gameTag");

            ChatMessage saved = chatService.sendMessage(userId, username, fullName, avatar, message, gameTag);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/games/win")
    public ResponseEntity<?> reportGameWin(@RequestBody Map<String, Object> body) {
        try {
            Long userId = Long.valueOf(body.get("userId").toString());
            String gameName = (String) body.getOrDefault("gameName", "Trò chơi");
            int bonus = Integer.parseInt(body.getOrDefault("score", "20").toString());

            User updatedUser = userService.recordGameResult(userId, true, bonus);

            // Gửi tin nhắn hệ thống chúc mừng vào phòng chat
            String winMsg = "🏆 Vừa chiến thắng vang dội tại [" + gameName + "] và nhận +" + bonus + " điểm thưởng!";
            chatService.sendMessage(userId, updatedUser.getUsername(), updatedUser.getFullName(), "👑", winMsg, "Hệ Thống");

            return ResponseEntity.ok(Map.of(
                    "score", updatedUser.getScore(),
                    "wins", updatedUser.getWins(),
                    "message", "Chúc mừng bạn đã chiến thắng!"
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/leaderboard")
    public ResponseEntity<List<User>> getLeaderboard() {
        return ResponseEntity.ok(userService.getLeaderboard());
    }
}
