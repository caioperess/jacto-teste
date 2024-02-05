import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { PipeModule } from '../../pipe/pipe.module';
import { MovieDetailsComponent } from './movie-details.component';
import { MoviesRoutingModule } from './movies-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CarouselModule,
    MatIconModule,
    TabViewModule,
    PipeModule,
    DialogModule,
  ],
  declarations: [MovieDetailsComponent],
})
export class MoviesDetailsModule {}
