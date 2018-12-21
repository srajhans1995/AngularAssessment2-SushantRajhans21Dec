import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/ToDo';
import { ToDoservice } from 'src/app/services/to-do.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],

})
export class CreateComponent implements OnInit {

  name: string = "";
  category: string = "";
  status: boolean = false;

  toDoService: ToDoservice;
  constructor(toDoService: ToDoservice, private toastr: ToastrService) {
    this.toDoService = toDoService;
  }
  ngOnInit() {

  }

  clearSearch() {
    this.name = null;
    this.category = null;
    this.status = null;
  }

  onSubmitClicked() {
    this.toDoService.tasks.push(
      new ToDo(this.name, this.category, this.status)
    );

    this.name = "";
    this.category = "";
    this.status = false;
    this.toastr.success('ToDo Added Sucessfully');
  }
}





  

