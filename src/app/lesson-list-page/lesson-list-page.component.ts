// lesson-list-page.component.ts

import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserSettingsService } from "../user-settings.service";
import { LessonPackage } from '../lessonPackage.interface';

@Component({
  selector: 'app-lesson-list-page',
  templateUrl: './lesson-list-page.component.html',
  styleUrls: ['./lesson-list-page.component.css']
})
export class LessonListPageComponent implements OnInit, OnDestroy {
  storedLessons: LessonPackage[] = [];

  constructor(private userSettingsService: UserSettingsService) {}

  ngOnDestroy(): void {
    console.log("LessonListPageComponent.ngOnDestroy()");
  }

  ngOnInit(): void {
    console.log("LessonListPageComponent.ngOnInit()");
    this.storedLessons = this.userSettingsService.getStoredLessons();
  }
}

