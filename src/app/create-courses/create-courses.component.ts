import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent implements OnInit{

  addCourseRequest: Course = {
    moduleId: 0,
    name: '',
    description: '',
    duration: ''
  }

  constructor(private courseService: CoursesService, private router: Router) { }
    ngOnInit(): void {

    }

    addCourse() { //new method created to add course
      console.log(this.addCourseRequest);
      this.courseService.addCourse(this.addCourseRequest).subscribe({
        next: (course) => {
          console.log(course); //displays course added in console
          this.router.navigate(['']); //goes back to course list when added
        }
      })
    }

}
