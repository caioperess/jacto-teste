import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DatePipe } from './date.pipe';
import { NumberWithCommasPipe } from './numberWithCommas.pipe';

@NgModule({
  declarations: [NumberWithCommasPipe, DatePipe],
  exports: [DatePipe, NumberWithCommasPipe],
  imports: [CommonModule],
})
export class PipeModule {}
