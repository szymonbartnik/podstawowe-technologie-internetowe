import {Injectable} from '@angular/core';
import {Student} from './students.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() {
    this.createStorageItemIfNotExist();
  }

  addStudent(student: Student): void {
    const students = JSON.parse(localStorage.getItem('students')) as Student[];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
  }

  updateStudent(student: Student): void {
    const students = JSON.parse(localStorage.getItem('students')) as Student[];
    const studentToEdit = students.find(x => x.id === student.id);
    if (!studentToEdit){
      throw new Error(`Student with id: ${student.id} doesn't exist`);
    }

    const indexOfStudent = students.indexOf(studentToEdit);
    students[indexOfStudent] = student;

    localStorage.setItem('students', JSON.stringify(students));
  }

  getStudentById(id: number): Student {
    const students = JSON.parse(localStorage.getItem('students')) as Student[];
    return students.find(x => x.id === id);
  }

  getStudents(): Student[] {
    return JSON.parse(localStorage.getItem('students')) as Student[];
  }

  private createStorageItemIfNotExist(): void {
    const students = localStorage.getItem('students');
    if (!students){
      localStorage.setItem('students', JSON.stringify([]));
    }
  }
}
