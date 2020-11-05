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
  }

  assignStudent(name: string, surname: string, id: number): void {
    this.student = new Student(name, surname, id);
  }

}

export class Student {
  constructor(public name: string,
              public surname: string,
              public id: number) {
  }
}
