// modal-notification.component.ts

import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.component.html',
  styleUrls: ['./modal-notification.component.css']
})
export class ModalNotificationComponent {
  constructor(private notificationService: NotificationService) {}

  // Method to check if the notification is shown
  isShown(): boolean {
    return this.notificationService.isShown();
  }
}
