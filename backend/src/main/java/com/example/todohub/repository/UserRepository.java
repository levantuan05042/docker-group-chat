package com.example.todohub.repository;

import com.example.todohub.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    boolean existsByUsername(String username);
    java.util.List<User> findTop20ByOrderByScoreDesc();
    java.util.List<User> findTop50ByOrderByIdDesc();
    java.util.List<User> findByLastActiveAtAfter(java.time.LocalDateTime cutoff);
}
