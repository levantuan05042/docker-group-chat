package com.example.todohub.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "game_rooms")
public class GameRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 20)
    private String roomCode;

    @Column(nullable = false, length = 30)
    private String gameType; // caro, chess, xiangqi, ludo

    @Column(nullable = false)
    private Long hostUserId;

    @Column(nullable = false, length = 50)
    private String hostUsername;

    @Column(length = 100)
    private String hostFullName;

    private Long guestUserId;

    @Column(length = 50)
    private String guestUsername;

    @Column(length = 100)
    private String guestFullName;

    private Long invitedUserId;

    @Column(length = 50)
    private String invitedUsername;

    @Column(length = 100)
    private String invitedFullName;

    @Column(nullable = false)
    private int hostScore = 0; // Tỷ số chủ phòng

    @Column(nullable = false)
    private int guestScore = 0; // Tỷ số khách

    @Column(nullable = false, length = 20)
    private String status = "WAITING"; // WAITING, PLAYING, FINISHED

    @Column(columnDefinition = "TEXT")
    private String gameState; // Dữ liệu trạng thái cờ đồng bộ realtime

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(name = "updated_at")
    private LocalDateTime updatedAt = LocalDateTime.now();

    public GameRoom() {}

    public GameRoom(String roomCode, String gameType, Long hostUserId, String hostUsername, String hostFullName) {
        this.roomCode = roomCode;
        this.gameType = gameType;
        this.hostUserId = hostUserId;
        this.hostUsername = hostUsername;
        this.hostFullName = hostFullName;
        this.status = "WAITING";
        this.hostScore = 0;
        this.guestScore = 0;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    public void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getRoomCode() { return roomCode; }
    public void setRoomCode(String roomCode) { this.roomCode = roomCode; }

    public String getGameType() { return gameType; }
    public void setGameType(String gameType) { this.gameType = gameType; }

    public Long getHostUserId() { return hostUserId; }
    public void setHostUserId(Long hostUserId) { this.hostUserId = hostUserId; }

    public String getHostUsername() { return hostUsername; }
    public void setHostUsername(String hostUsername) { this.hostUsername = hostUsername; }

    public String getHostFullName() { return hostFullName; }
    public void setHostFullName(String hostFullName) { this.hostFullName = hostFullName; }

    public Long getGuestUserId() { return guestUserId; }
    public void setGuestUserId(Long guestUserId) { this.guestUserId = guestUserId; }

    public String getGuestUsername() { return guestUsername; }
    public void setGuestUsername(String guestUsername) { this.guestUsername = guestUsername; }

    public String getGuestFullName() { return guestFullName; }
    public void setGuestFullName(String guestFullName) { this.guestFullName = guestFullName; }

    public Long getInvitedUserId() { return invitedUserId; }
    public void setInvitedUserId(Long invitedUserId) { this.invitedUserId = invitedUserId; }

    public String getInvitedUsername() { return invitedUsername; }
    public void setInvitedUsername(String invitedUsername) { this.invitedUsername = invitedUsername; }

    public String getInvitedFullName() { return invitedFullName; }
    public void setInvitedFullName(String invitedFullName) { this.invitedFullName = invitedFullName; }

    public int getHostScore() { return hostScore; }
    public void setHostScore(int hostScore) { this.hostScore = hostScore; }

    public int getGuestScore() { return guestScore; }
    public void setGuestScore(int guestScore) { this.guestScore = guestScore; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getGameState() { return gameState; }
    public void setGameState(String gameState) { this.gameState = gameState; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
