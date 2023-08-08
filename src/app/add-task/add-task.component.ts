// add-task.component.ts

import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  newTask: any = {
    id: 0, // Add an initial ID. This will be replaced with a unique ID when saving the task.
    title: '',
    description: '',
    dueDate: null,
    completed: false,
  };

  constructor(private taskService: TaskService, private notificationService: NotificationService) {}

  onSubmit(): void {
    // Generate a unique ID for the new task (replace 0 with a proper ID generation logic)
    this.newTask.id = this.generateUniqueId();

    // Save the new task using the TaskService
    this.taskService.addTask(this.newTask);

    // Show the modal notification
    this.notificationService.show();

    // Clear the form fields after submission
    this.newTask = {
      id: 0,
      title: '',
      description: '',
      dueDate: null,
      completed: false,
    };
  }

  private generateUniqueId(): number {
    // Replace this with a proper unique ID generation logic (e.g., using UUID or a counter)
    return Math.floor(Math.random() * 1000000);
  }
}
