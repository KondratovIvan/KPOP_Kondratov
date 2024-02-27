import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { TaskModel } from 'src/models/task_model';
import { HttpService } from 'src/services/http/http.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    public dialog: MatDialog
  ) {}

  columns: Array<string> = ['id', 'title', 'completed'];

  tasks: Array<TaskModel> = [];

  ngOnInit(): void {
    this.httpService.fetchTasks().subscribe((response) => {
      this.tasks = response as Array<TaskModel>;
    });
  }

  showDialog(task: TaskModel) {
    this.dialog.open(DialogComponent, {
      data: task,
    });
  }
}
