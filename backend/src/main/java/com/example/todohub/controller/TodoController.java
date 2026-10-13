package com.example.todohub.controller;

import com.example.todohub.dto.TodoRequest;
import com.example.todohub.dto.TodoStatsResponse;
import com.example.todohub.entity.Todo;
import com.example.todohub.service.TodoService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/todos")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public ResponseEntity<List<Todo>> getTodos(
            @RequestParam Long userId,
            @RequestParam(required = false) String status) {
        return ResponseEntity.ok(todoService.getTodosByUserId(userId, status));
    }

    @PostMapping
    public ResponseEntity<?> createTodo(@Valid @RequestBody TodoRequest req) {
        try {
            Todo created = todoService.createTodo(req);
            return ResponseEntity.ok(created);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTodo(@PathVariable Long id, @Valid @RequestBody TodoRequest req) {
        try {
            Todo updated = todoService.updateTodo(id, req);
            return ResponseEntity.ok(updated);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestBody Map<String, String> body) {
        try {
            String status = body.get("status");
            if (status == null) {
                return ResponseEntity.badRequest().body(Map.of("error", "Thiếu trường 'status'"));
            }
            Todo updated = todoService.updateStatus(id, status);
            return ResponseEntity.ok(updated);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable Long id) {
        try {
            todoService.deleteTodo(id);
            return ResponseEntity.ok(Map.of("message", "Đã xóa công việc thành công!"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/stats")
    public ResponseEntity<TodoStatsResponse> getStats(@RequestParam Long userId) {
        return ResponseEntity.ok(todoService.getStats(userId));
    }
}
