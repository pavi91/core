import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskService } from './task.service';
import { ModalNotificationComponent } from './modal-notification/modal-notification.component';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskCardComponent,
    AddTaskComponent,
    EditTaskComponent,
    ConfirmDialogComponent,
    NavbarComponent,
    ModalNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
