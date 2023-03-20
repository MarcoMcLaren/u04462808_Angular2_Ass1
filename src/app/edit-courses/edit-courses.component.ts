import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/courses';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.css']
})

export class EditCoursesComponent implements OnInit {

  courseId: number | null = null;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit(): void {

    //Check if the ID was passed through correctly
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (isNaN(id)) {
        console.log('Invalid course ID');
      } else {
        this.courseId = id;
        console.log(`Course ID: ${this.courseId}`);
      }
    });

  }
}