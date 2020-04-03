import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';
import { Course } from '../model/Course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmmiter =  new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onSaveClicked(description:string){
    this.courseEmmiter.emit({...this.course, description});
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  cardClasses(){
    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
  }

  onCourseViewed(){
    console.log("card component - button clicked ... ");
    this.courseEmmiter.emit(this.course);
  }

  cardStyles(){
    return {
      'background-image':'url(' + this.course.iconUrl +')'
    }
  }

}
