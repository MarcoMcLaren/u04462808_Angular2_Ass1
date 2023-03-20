import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  courses: Course[] = [];


  constructor(private coursesService: CoursesService, private router: Router) { }
  ngOnInit(): void {
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        console.log(this.courses);
      },
      error: err => console.log(err)
    })
  }
  deleteCourse(id: number) {
    this.coursesService.deleteCourse(id).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: err => console.log(err)
    })
  }
}
