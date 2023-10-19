import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  taskArray = [
    {taskName: 'Brush my teeth', isCompleted: false}
  ]; 

  onSubmitTask(form: NgForm){
    this.taskArray.push({
      taskName: form.controls['taskControl'].value,
      isCompleted: false
    })
  }

  onDelete(index: number){
    this.taskArray.splice(index,1);

  }

}
