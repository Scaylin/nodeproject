import { Component, OnInit } from '@angular/core';
import { LessonPackage } from './lessonPackage.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    console.log('AppComponent.ngOnInit()');
  }
  constructor() {
    console.log('AppComponent.constructor()');
  }
  title = 'tp3final';
  lessonPackage: LessonPackage = {
    title: '',
    description: '',
    category: '',
    level: '',
    prerequisite: [],
    tags: [],
    copyright: ''
  };
}


