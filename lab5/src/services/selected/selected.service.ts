import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModel } from 'src/models/task_model';

@Injectable({
  providedIn: 'root',
})
export class SelectedService {
  constructor(public dialog: MatDialog,) {}

  selectedTasks: Array<TaskModel> = [];

  handleSelected(task: TaskModel) {
    if (!this.selectedTasks.includes(task)) {
      this.selectedTasks = [...this.selectedTasks, task];
    } 
    else{
      const index = this.selectedTasks.indexOf(task, 0);
      this.selectedTasks.splice(index, 1);
      this.selectedTasks = [...this.selectedTasks]; 
    }

    this.dialog.closeAll();
  }
}
