package com.example.todohub.dto;

public class TodoStatsResponse {
    private long total;
    private long todoCount;
    private long inProgressCount;
    private long completedCount;

    public TodoStatsResponse() {}

    public TodoStatsResponse(long total, long todoCount, long inProgressCount, long completedCount) {
        this.total = total;
        this.todoCount = todoCount;
        this.inProgressCount = inProgressCount;
        this.completedCount = completedCount;
    }

    public long getTotal() { return total; }
    public void setTotal(long total) { this.total = total; }

    public long getTodoCount() { return todoCount; }
    public void setTodoCount(long todoCount) { this.todoCount = todoCount; }

    public long getInProgressCount() { return inProgressCount; }
    public void setInProgressCount(long inProgressCount) { this.inProgressCount = inProgressCount; }

    public long getCompletedCount() { return completedCount; }
    public void setCompletedCount(long completedCount) { this.completedCount = completedCount; }
}
