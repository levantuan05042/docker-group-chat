package com.example.todohub.service;

import com.example.todohub.dto.TodoRequest;
import com.example.todohub.dto.TodoStatsResponse;
import com.example.todohub.entity.Todo;
import com.example.todohub.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getTodosByUserId(Long userId, String status) {
        if (status != null && !status.isBlank() && !status.equalsIgnoreCase("ALL")) {
            return todoRepository.findByUserIdAndStatusOrderByCreatedAtDesc(userId, status.toUpperCase());
        }
        return todoRepository.findByUserIdOrderByCreatedAtDesc(userId);
    }

    public Todo createTodo(TodoRequest req) {
        Todo todo = new Todo(
                req.getTitle(),
                req.getDescription(),
                req.getStatus() != null ? req.getStatus().toUpperCase() : "TODO",
                req.getPriority() != null ? req.getPriority().toUpperCase() : "MEDIUM",
                req.getDueDate(),
                req.getUserId()
        );
        return todoRepository.save(todo);
    }

    public Todo updateTodo(Long id, TodoRequest req) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy công việc với id: " + id));

        todo.setTitle(req.getTitle());
        todo.setDescription(req.getDescription());
        if (req.getStatus() != null) todo.setStatus(req.getStatus().toUpperCase());
        if (req.getPriority() != null) todo.setPriority(req.getPriority().toUpperCase());
        todo.setDueDate(req.getDueDate());

        return todoRepository.save(todo);
    }

    public Todo updateStatus(Long id, String status) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy công việc với id: " + id));
        todo.setStatus(status.toUpperCase());
        return todoRepository.save(todo);
    }

    public void deleteTodo(Long id) {
        if (!todoRepository.existsById(id)) {
            throw new IllegalArgumentException("Không tìm thấy công việc với id: " + id);
        }
        todoRepository.deleteById(id);
    }

    public TodoStatsResponse getStats(Long userId) {
        long total = todoRepository.countByUserId(userId);
        long todo = todoRepository.countByUserIdAndStatus(userId, "TODO");
        long inProgress = todoRepository.countByUserIdAndStatus(userId, "IN_PROGRESS");
        long completed = todoRepository.countByUserIdAndStatus(userId, "COMPLETED");

        return new TodoStatsResponse(total, todo, inProgress, completed);
    }
}
