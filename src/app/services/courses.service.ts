import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { Course } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseApiUrl: string = environment.baseApiUrl;
  
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseApiUrl + 'api/courses');
  }

  addCourse(addCourseRequest: Course): Observable<Course>{
    return this.http.post<Course>(this.baseApiUrl + 'api/courses/create', addCourseRequest);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(this.baseApiUrl + 'api/courses/' + id);
  }

  deleteCourse(id: number): Observable<Course> {
    return this.http.delete<Course>(this.baseApiUrl + 'api/courses/delete/' + id);
  }
}
