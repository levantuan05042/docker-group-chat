package com.example.todohub.dto;

public class AuthResponse {
    private Long id;
    private String username;
    private String fullName;
    private String email;
    private String avatar;
    private int score;
    private int wins;
    private String message;

    public AuthResponse() {}

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getAvatar() { return avatar; }
    public void setAvatar(String avatar) { this.avatar = avatar; }

    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }

    public int getWins() { return wins; }
    public void setWins(int wins) { this.wins = wins; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
