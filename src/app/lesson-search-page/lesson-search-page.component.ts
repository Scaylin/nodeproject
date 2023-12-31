// lesson-search-page.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserSettingsService } from '../user-settings.service';
import { LessonPackage } from '../lessonPackage.interface';

@Component({
  selector: 'app-lesson-search-page',
  templateUrl: './lesson-search-page.component.html',
  styleUrls: ['./lesson-search-page.component.css']
})
export class LessonSearchPageComponent {
  lessonSearchForm: FormGroup;
  searchResults: LessonPackage[] = [];
  noResultsFound: boolean = false;

  constructor(
      private formBuilder: FormBuilder,
      private userSettingsService: UserSettingsService
  ) {
    this.lessonSearchForm = this.formBuilder.group({
      title: [''],
      category: [''],

      // Ajoutez ici d'autres champs de formulaire selon vos besoins
    });
  }

  onSubmit() {
    console.log('Search button clicked');
    console.log('Search criteria:', this.lessonSearchForm.value);
    this.searchLessons();
  }

  searchLessons() {
    this.searchResults = this.userSettingsService.searchLessons(this.lessonSearchForm.value);
    this.noResultsFound = this.searchResults.length === 0;
  }
}





