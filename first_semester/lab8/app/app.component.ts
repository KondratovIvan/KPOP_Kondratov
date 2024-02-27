import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFacadeService } from './task-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskFacadeService],
})
export class AppComponent implements OnInit {
  todos: any[] = [];
  favoriteTasks: any[] = [];

  constructor(
    private taskFacadeService: TaskFacadeService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.taskFacadeService.initDatabase();
    this.taskFacadeService.getTodos().subscribe(todos => {
      this.todos = todos.map(task => this.taskFacadeService.decorateTask(task));
    });
    this.loadFavoriteTasks();
  }

  openDetailsDialog(task: any): void {
    const dialogRef = this.dialog.open(TaskDetailsComponent, {
      width: '250px',
      data: task,
    });

    dialogRef.componentInstance.addToFavoritesClicked.subscribe((taskData: any) => {
      this.addToFavorites(taskData);
    });
  }

  async loadFavoriteTasks() {
    this.favoriteTasks = await this.taskFacadeService.getFavoriteTasks();
    console.log(this.favoriteTasks);
  }

  async addToFavorites(task: any) {
    await this.taskFacadeService.addToFavorites(task);
    this.loadFavoriteTasks();
  }
}
