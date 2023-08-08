// notification.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private showNotification = false;
  private readonly notificationDuration = 3000; // Duration in milliseconds (adjust as needed)

  constructor() { }

  show(): void {
    this.showNotification = true;

    // Automatically hide the notification after the specified duration
    setTimeout(() => {
      this.hide();
    }, this.notificationDuration);
  }

  hide(): void {
    this.showNotification = false;
  }

  isShown(): boolean {
    return this.showNotification;
  }
}
