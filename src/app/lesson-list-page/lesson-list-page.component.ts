import { Component, OnDestroy, OnInit } from '@angular/core';
import {UserSettingsService} from "../user-settings.service";

@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html',
  styleUrls: ['./lesson-list-page.component.css']
})
export class LessonListPageComponent implements OnInit, OnDestroy {

  constructor(private userSettingsService: UserSettingsService){
    console.log("get lastLessonId:", userSettingsService.lastLessonId)
  }
  ngOnDestroy(): void {
    console.log("LessonListPageComponent.ngOnInit()")
  }

  ngOnInit(): void {
    console.log("LessonListPageComponent.ngOnDestroy()")
  }

}
