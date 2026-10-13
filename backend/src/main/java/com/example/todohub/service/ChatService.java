package com.example.todohub.service;

import com.example.todohub.entity.ChatMessage;
import com.example.todohub.repository.ChatMessageRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ChatService {

    private final ChatMessageRepository chatMessageRepository;

    public ChatService(ChatMessageRepository chatMessageRepository) {
        this.chatMessageRepository = chatMessageRepository;
    }

    public ChatMessage sendMessage(Long userId, String username, String fullName, String avatar, String message, String gameTag) {
        if (message == null || message.trim().isEmpty()) {
            throw new IllegalArgumentException("Nội dung tin nhắn không được để trống!");
        }

        ChatMessage chat = new ChatMessage(
                userId,
                username,
                fullName,
                avatar,
                message.trim(),
                gameTag
        );
        return chatMessageRepository.save(chat);
    }

    public List<ChatMessage> getRecentMessages() {
        List<ChatMessage> list = chatMessageRepository.findTop60ByOrderByIdDesc();
        Collections.reverse(list); // Trả về theo thứ tự thời gian tăng dần từ cũ đến mới
        return list;
    }
}
