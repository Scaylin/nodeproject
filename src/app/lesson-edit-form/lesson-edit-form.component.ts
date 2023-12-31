import { Component } from '@angular/core';
import { LessonPackage } from '../lessonPackage.interface';
import { Router } from '@angular/router';
import { UserSettingsService } from '../user-settings.service';

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
})
export class LessonEditFormComponent {
  lessonPackage: LessonPackage = {
    title: '',
    description: '',
    category: '',
    level: '',
    prerequisite: [],
    tags: [],
    copyright: '',
  };

  constructor(
      private router: Router,
      private userSettingsService: UserSettingsService
  ) {
  }

  onClickSubmit() {
    this.userSettingsService.storeLesson(this.lessonPackage);
    this.router.navigate(['lesson-list-page']).then((res) => {
    });
  }
}
