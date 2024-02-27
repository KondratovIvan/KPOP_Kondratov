import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModel } from 'src/models/task_model';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class SelectedService {
  private _storage: Storage | null = null;

  constructor(public dialog: MatDialog, private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.fetchTasks();
  }

  selectedTasks: Array<TaskModel> = [];

  async fetchTasks() {
    let tasks: Array<TaskModel> = [];
    await this.storage.forEach((value) => {
      tasks.push(value);
    });
    this.selectedTasks = tasks;
  }

  async handleSelected(task: TaskModel) {
    if (!this.selectedTasks.includes(task)) {
      await this.storage.set(task.id.toString(), task);
    } 
    else{
      await this.storage.remove(task.id.toString());
    }
    
    await this.fetchTasks();
    this.dialog.closeAll();
  }
}
