import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskDecoratorService {
  decorateTask(task: any): any {
    if (task.userId === 1) {
      return { ...task, title: task.title + " (admin)" };
    } else {
      return task;
    }
  }
}
