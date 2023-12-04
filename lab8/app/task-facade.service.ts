import { Injectable } from '@angular/core';
import { TodoService } from './todo.service';
import { FavoriteTasksService } from './favorite-tasks.service';
import { Observable } from 'rxjs';
import {TaskDecoratorService} from "./decorator.service";

@Injectable({
  providedIn: 'root',
})
export class TaskFacadeService {
  constructor(
    private todoService: TodoService,
    private favoriteTasksService: FavoriteTasksService,
    private taskDecoratorService: TaskDecoratorService
  ) {}

  decorateTask(task: any): any {
    return this.taskDecoratorService.decorateTask(task)
  }
  getTodos(): Observable<any[]> {
    return this.todoService.getTodos();
  }

  addToFavorites(task: any): Promise<void> {
    return this.favoriteTasksService.addToFavorites(task);
  }

  async getFavoriteTasks(): Promise<any[]> {
    return this.favoriteTasksService.getFavoriteTasks();
  }

  async initDatabase(): Promise<void> {
    await this.favoriteTasksService.initDatabase();
  }
}
