package com.example.todohub.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "chat_messages")
public class ChatMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(nullable = false, length = 50)
    private String username;

    @Column(length = 100)
    private String fullName;

    @Column(length = 50)
    private String avatar = "🎮";

    @Column(nullable = false, length = 1000)
    private String message;

    @Column(length = 50)
    private String gameTag = "Phòng Chung";

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    public ChatMessage() {}

    public ChatMessage(Long userId, String username, String fullName, String avatar, String message, String gameTag) {
        this.userId = userId;
        this.username = username;
        this.fullName = fullName;
        this.avatar = avatar != null ? avatar : "🎮";
        this.message = message;
        this.gameTag = gameTag != null ? gameTag : "Phòng Chung";
        this.createdAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getAvatar() { return avatar; }
    public void setAvatar(String avatar) { this.avatar = avatar; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public String getGameTag() { return gameTag; }
    public void setGameTag(String gameTag) { this.gameTag = gameTag; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
