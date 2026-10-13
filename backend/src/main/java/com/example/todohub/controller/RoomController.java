package com.example.todohub.controller;

import com.example.todohub.entity.GameRoom;
import com.example.todohub.service.ChatService;
import com.example.todohub.service.GameRoomService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    private final GameRoomService roomService;
    private final ChatService chatService;

    public RoomController(GameRoomService roomService, ChatService chatService) {
        this.roomService = roomService;
        this.chatService = chatService;
    }

    @PostMapping("/create")
    public ResponseEntity<?> createRoom(@RequestBody Map<String, Object> body) {
        try {
            String gameType = (String) body.get("gameType");
            Long hostUserId = Long.valueOf(body.get("hostUserId").toString());
            String hostUsername = (String) body.get("hostUsername");
            String hostFullName = (String) body.getOrDefault("hostFullName", hostUsername);

            GameRoom room = roomService.createRoom(gameType, hostUserId, hostUsername, hostFullName);
            return ResponseEntity.ok(room);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/{code}/invite")
    public ResponseEntity<?> inviteUser(@PathVariable String code, @RequestBody Map<String, Object> body) {
        try {
            Long targetUserId = Long.valueOf(body.get("targetUserId").toString());
            String targetUsername = (String) body.get("targetUsername");
            String targetFullName = (String) body.getOrDefault("targetFullName", targetUsername);

            GameRoom room = roomService.setInvitedUser(code, targetUserId, targetUsername, targetFullName);

            // Gửi lời mời RIÊNG TƯ (chỉ targetUserId và host mới thấy trong Chat)
            String inviteMsg = "⚔️ [LỜI MỜI RIÊNG]: " + room.getHostFullName() + " mời bạn vào thách đấu phòng [" + room.getRoomCode() + "] trò " + room.getGameType().toUpperCase() + "! Bấm để vào chiến ngay!";
            chatService.sendPrivateInvite(room.getHostUserId(), room.getHostUsername(), room.getHostFullName(), "🎯", inviteMsg, "Thách Đấu Riêng", targetUserId);

            return ResponseEntity.ok(room);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/join")
    public ResponseEntity<?> joinRoom(@RequestBody Map<String, Object> body) {
        try {
            String roomCode = (String) body.get("roomCode");
            Long guestUserId = Long.valueOf(body.get("guestUserId").toString());
            String guestUsername = (String) body.get("guestUsername");
            String guestFullName = (String) body.getOrDefault("guestFullName", guestUsername);

            GameRoom room = roomService.joinRoom(roomCode, guestUserId, guestUsername, guestFullName);
            return ResponseEntity.ok(room);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/{code}")
    public ResponseEntity<?> getRoom(@PathVariable String code) {
        try {
            GameRoom room = roomService.getRoom(code);
            return ResponseEntity.ok(room);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/{code}/sync")
    public ResponseEntity<?> syncRoom(@PathVariable String code, @RequestBody Map<String, Object> body) {
        try {
            Integer hostScore = body.get("hostScore") != null ? Integer.parseInt(body.get("hostScore").toString()) : null;
            Integer guestScore = body.get("guestScore") != null ? Integer.parseInt(body.get("guestScore").toString()) : null;
            String gameState = (String) body.get("gameState");
            String status = (String) body.get("status");

            GameRoom updated = roomService.updateScoreAndState(code, hostScore, guestScore, gameState, status);
            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/waiting")
    public ResponseEntity<List<GameRoom>> getWaitingRooms() {
        return ResponseEntity.ok(roomService.getWaitingRooms());
    }
}
