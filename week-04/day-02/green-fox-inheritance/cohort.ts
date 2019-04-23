'use strict'

import { Student } from './student';
import { Mentor } from './mentor';

class Cohort {
  name: string;
  students: string[];
  mentors: string[];

  constructor(name: string) {
    this.students = [];
    this.mentors = [];
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  info(): void {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

export { Cohort };