package com.example.todohub.service;

import com.example.todohub.entity.GameRoom;
import com.example.todohub.repository.GameRoomRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class GameRoomService {

    private final GameRoomRepository roomRepository;
    private final Random random = new Random();

    public GameRoomService(GameRoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public GameRoom createRoom(String gameType, Long hostUserId, String hostUsername, String hostFullName) {
        String code = "ROOM-" + (1000 + random.nextInt(9000));
        while (roomRepository.findByRoomCode(code).isPresent()) {
            code = "ROOM-" + (1000 + random.nextInt(9000));
        }

        GameRoom room = new GameRoom(code, gameType, hostUserId, hostUsername, hostFullName);
        return roomRepository.save(room);
    }

    public GameRoom joinRoom(String roomCode, Long guestUserId, String guestUsername, String guestFullName) {
        GameRoom room = roomRepository.findByRoomCode(roomCode)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy phòng với mã: " + roomCode));

        if (room.getHostUserId().equals(guestUserId)) {
            return room; // Chủ phòng vào lại phòng của mình
        }

        if (room.getGuestUserId() != null && !room.getGuestUserId().equals(guestUserId)) {
            throw new IllegalArgumentException("Phòng này đã đủ 2 người chơi!");
        }

        // Kiểm tra phòng riêng tư (lời mời riêng)
        if (room.getInvitedUserId() != null && !room.getInvitedUserId().equals(guestUserId)) {
            String target = room.getInvitedFullName() != null ? room.getInvitedFullName() : "người khác";
            throw new IllegalArgumentException("Phòng này là lời mời riêng dành cho " + target + "! Bạn không có quyền tham gia.");
        }

        room.setGuestUserId(guestUserId);
        room.setGuestUsername(guestUsername);
        room.setGuestFullName(guestFullName);
        room.setStatus("PLAYING");

        return roomRepository.save(room);
    }

    public GameRoom setInvitedUser(String roomCode, Long targetUserId, String targetUsername, String targetFullName) {
        GameRoom room = getRoom(roomCode);
        room.setInvitedUserId(targetUserId);
        room.setInvitedUsername(targetUsername);
        room.setInvitedFullName(targetFullName);
        return roomRepository.save(room);
    }

    public GameRoom getRoom(String roomCode) {
        return roomRepository.findByRoomCode(roomCode)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy phòng với mã: " + roomCode));
    }

    public GameRoom updateScoreAndState(String roomCode, Integer hostScore, Integer guestScore, String gameState, String status) {
        GameRoom room = getRoom(roomCode);
        if (hostScore != null) room.setHostScore(hostScore);
        if (guestScore != null) room.setGuestScore(guestScore);
        if (gameState != null) room.setGameState(gameState);
        if (status != null) room.setStatus(status);

        return roomRepository.save(room);
    }

    public List<GameRoom> getWaitingRooms() {
        return roomRepository.findTop20ByStatusOrderByIdDesc("WAITING");
    }
}
