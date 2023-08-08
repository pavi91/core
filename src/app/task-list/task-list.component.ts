import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit(): void {
    // Subscribe to the task list observable to get updates from the TaskService.
    this.taskService.getTaskList().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  toggleTaskCompletion(task: any): void {
    // Toggle the completion status of the task
    task.completed = !task.completed;

    // Update the task in the TaskService after toggling completion status.
    this.taskService.updateTask(task);
  }

  editTask(task: any): void {
    // Navigate to the EditTaskComponent with the task's id as a parameter
    this.router.navigate(['/edit-task', task.id]);
  }

  deleteTask(task: any): void {
    // Call the deleteTask() method from the TaskService to delete the task.
    this.taskService.deleteTask(task);
  }
}
