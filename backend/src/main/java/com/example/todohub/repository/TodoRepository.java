package com.example.todohub.repository;

import com.example.todohub.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Todo> findByUserIdOrderByCreatedAtDesc(Long userId);
    List<Todo> findByUserIdAndStatusOrderByCreatedAtDesc(Long userId, String status);
    long countByUserId(Long userId);
    long countByUserIdAndStatus(Long userId, String status);
}
