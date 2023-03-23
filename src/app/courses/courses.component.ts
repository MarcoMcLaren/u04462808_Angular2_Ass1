import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  searchName: string = '';

  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  //GET ALL COURSES to display in table
  getCourses() {
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        if (this.searchName.trim() !== '') {
          courses = courses.filter(course => course.name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1);
        }
        this.courses = courses;
      },
      error: err => console.log(err)  
    })
  }

  //DELETE COURSES by ID
  deleteCourse(id: number) {
    this.coursesService.deleteCourse(id).subscribe({
      next: (response) => {
        console.log(response);
        this.getCourses();
      },
      error: err => console.log(err)
    })
  }

    //Search for COURSES by name
  onSearchNameChanged(name: string) {
    this.searchName = name;
    this.getCourses();
  }

  onCourseAdded(course: Course) { 
    this.courses.push(course); // add newly added course to courses array
    window.location.reload();
  }
}
