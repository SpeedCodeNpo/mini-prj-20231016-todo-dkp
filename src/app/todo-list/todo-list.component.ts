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
    console.log(form);
    
  }

}
