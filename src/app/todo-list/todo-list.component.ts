import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  taskArray = [{ taskName: 'Brush my teeth', isCompleted: false }];

  onSubmitTask(form: NgForm) {
    //console.log(form);
    this.taskArray.push({
      taskName: form.controls['taskControl'].value,
      isCompleted: false,
    });
    form.reset();
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);
  }

  onClickCompleted(index: number) {
    //console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;

    //   if (this.taskArray[index].isCompleted === false) { this.taskArray[index].isCompleted = true} else {
    // this.taskArray[index].isCompleted = false;
    //}
  }
}
