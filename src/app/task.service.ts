import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: any[] = [];
  private taskSubject = new BehaviorSubject<any[]>(this.tasks);

  constructor() {
    // Load tasks from localStorage on service initialization
    const storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks ? JSON.parse(storedTasks) : [];
    this.taskSubject.next(this.tasks);
  }

  getTaskList(): Observable<any[]> {
    return this.taskSubject.asObservable();
  }

  addTask(task: any): void {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.taskSubject.next(this.tasks);
  }

  updateTask(task: any): void {
    // Find the index of the task in the tasks array using the task's id
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);

    if (taskIndex !== -1) {
      // Update the task at the found index
      this.tasks[taskIndex] = task;
      // Save the updated tasks to localStorage
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      // Notify subscribers about the updated task list
      this.taskSubject.next(this.tasks);
    }
  }

  deleteTask(task: any): void {
    const taskIndex = this.tasks.findIndex(t => t.id === task.id);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.taskSubject.next(this.tasks);
    }
  }

  getTaskById(id: number): any {
    // Find the task with the given id in the tasks array
    return this.tasks.find((task) => task.id === id);
  }
}
