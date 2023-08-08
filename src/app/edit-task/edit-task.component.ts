import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {}

  ngOnInit(): void {
    // Get the task id from the URL parameter and fetch the task from the TaskService
    const taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.getTaskById(Number(taskId));
  }

  saveTask(): void {
    // Save the updated task to the TaskService
    this.taskService.updateTask(this.task);
    // Navigate back to the TaskListComponent after saving
    this.router.navigate(['/task-list']);
  }
}
