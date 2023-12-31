// user-settings.service.ts

import { Injectable } from '@angular/core';
import { LessonPackage } from './lessonPackage.interface';

@Injectable({
  providedIn: 'root',
})
export class UserSettingsService {
  private storedLessons: LessonPackage[] = [];
  private storageKey = 'storedLessons';

  constructor() {
    const storedLessonsStr = localStorage.getItem(this.storageKey);
    if (storedLessonsStr) {
      this.storedLessons = JSON.parse(storedLessonsStr);
    }
  }

  storeLesson(lesson: LessonPackage) {
    this.storedLessons.push(lesson);
    this.saveToLocalStorage();
  }

  getStoredLessons(): LessonPackage[] {
    return this.storedLessons;
  }

  searchLessons(criteria: any): LessonPackage[] {
    return this.storedLessons.filter((lesson) =>
      (criteria.title ? lesson.title.toLowerCase().includes(criteria.title.toLowerCase()) : true) &&
      (criteria.category ? lesson.category.toLowerCase().includes(criteria.category.toLowerCase()) : true)
    );
  }



  private arrayContainsTags(tags: string[], searchTags: string): boolean {
    return tags.some((tag) => tag.toLowerCase() === searchTags);
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.storedLessons));
  }
}




