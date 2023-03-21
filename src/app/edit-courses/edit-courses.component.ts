import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})
export class EditCoursesComponent implements OnInit {

  // courseId: number | null = null;
  moduleId: number | null = null;
  
  course: Course = {
    moduleId: 0,
    name: '',
    description: '',
    duration: ''
  };

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }

  ngOnInit(): void {

    //Check if the ID was passed through correctly
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (isNaN(id)) {
        console.log('Invalid course ID');
      } else {
        this.moduleId = id;
        console.log(`Course ID: ${this.moduleId}`);
        this.getCourse();
      }
    });

  }

  getCourse(): void {
    if (this.moduleId) {
      this.coursesService.getCourseById(this.moduleId)
        .subscribe(course => this.course = course);
    }
  }

  updateCourse() {
    if (this.moduleId) {
      this.coursesService.updateCourse(this.moduleId, this.course).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/courses']);
        },
        error: err => console.log(err)
      })
    }
  }
}
