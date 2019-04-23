'use strict'

import { Student } from '.student';
import { Mentor } from '.mentor';

class Cohort {
  name: string;
  students: any[];
  mentors: any[];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.size()} `);
    
  }
}