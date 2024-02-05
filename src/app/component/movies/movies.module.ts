import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatPaginatorModule,
    FormsModule,
    CarouselModule,
    MatIconModule,
    PaginatorModule,
  ],
  declarations: [MoviesComponent],
})
export class MoviesModule {}
