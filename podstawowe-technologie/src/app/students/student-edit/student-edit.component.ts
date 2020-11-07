import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../students.component';
import {StudentService} from '../student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  studentId = 0;
  studentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    id: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor(private studentService: StudentService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(x => {
      const studentIdFromParams = x.get('id');
      if (studentIdFromParams) {
        this.studentId = parseInt(studentIdFromParams, 0);
        const student = this.studentService.getStudentById(this.studentId);
        this.studentForm.get('name').patchValue(student.name);
        this.studentForm.get('surname').patchValue(student.surname);
        this.studentForm.get('id').patchValue(student.id);
      }
    });
  }

  assignStudent(): void {
    const student = new Student(
      this.studentForm.get('name').value,
      this.studentForm.get('surname').value,
      this.studentForm.get('id').value
    );

    if (this.studentId === 0) {
      this.studentService.addStudent(student);
    } else {
      this.studentService.updateStudent(student);
    }
  }


}
