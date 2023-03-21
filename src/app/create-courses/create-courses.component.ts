import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent implements OnInit {

  @Output() courseAdded = new EventEmitter<Course>();

  addCourseRequest: Course = {
    moduleId: 0,
    name: '',
    description: '',
    duration: ''
  }

  constructor(private courseService: CoursesService, private router: Router) { }

  ngOnInit(): void {}

  addCourse() {
    console.log(this.addCourseRequest);
    this.courseService.addCourse(this.addCourseRequest).subscribe({
      next: (course) => {
        console.log(course);
        this.courseAdded.emit(course); // emit courseAdded event
        this.router.navigate(['/courses']);
      }
    })
  }
}
