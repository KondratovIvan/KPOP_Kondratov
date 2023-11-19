import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskModel } from 'src/models/task_model'; 
import { SelectedService } from 'src/services/selected/selected.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public selectedService: SelectedService,
    @Inject(MAT_DIALOG_DATA) public data: TaskModel
  ) {}
}
