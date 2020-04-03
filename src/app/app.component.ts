import { Component, OnInit } from '@angular/core';
import { COURSES } from "../db-data";
import { Course } from './model/Course';
import { Observable } from 'rxjs';
import { CoursesService } from './service/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  corses$ : Observable<Course[]>;
  //corses;
  
  startDate = new Date(2000,0,1);


  coreCourse = COURSES[0];

  rxjsCourse = COURSES[1];
  
  ngrxCourse = COURSES[2];

  data = {
    title : 'Angular Core Deep Dive!',
    price: 9.9915163132,
    rate: 0.67
  };
  constructor(private coursesService: CoursesService){

  }
  ngOnInit() {
    
  this.corses$ = this.coursesService.loadCourses(); 
      
  }

  save(course: Course){
    this.coursesService.saveCourse(course)
        .subscribe(() => console.log("Course saved!"));
  }
  
  onLogoClicked(){
    alert("Hello world");
  }

  onKeyUp(newTitle: string){
    this.data.title = newTitle;
  }

  onCourseSelected(course:Course){

    console.log("App component - click event bubbled..", course);

  }
}
