import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../students.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() student: Student;
  @Output() studentFullName: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  emitStudentFullName(): void {
    this.studentFullName.emit(`${this.student.name} ${this.student.surname}`);
  }
}
