import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  // courseService: CoursesService;

  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog) {
    // this.courses = [];
    // this.courseService = new CoursesService();
    this.courses$ = this.courseService.list()
      .pipe(catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      }));

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }


}
