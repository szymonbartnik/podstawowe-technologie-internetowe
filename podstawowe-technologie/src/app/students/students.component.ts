import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student: Student;

  constructor() {
  }

  ngOnInit(): void {
    this.student = new Student('Agata', 'Stanisławska', 2233);
  }

}

export class Student {
  constructor(public name: string,
              public surname: string,
              public id: number) {
  }
}
