import { Component, Input } from '@angular/core';
import { SelectedService } from 'src/services/selected/selected.service';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css'],
})
export class SelectedComponent {
  constructor(
    public selectedService: SelectedService,
    public tasksComponent: TasksComponent
  ) {}
}
