import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NumberWithCommasPipe } from './numberWithCommas.pipe';

@NgModule({
  declarations: [NumberWithCommasPipe],
  exports: [NumberWithCommasPipe],
  imports: [CommonModule],
})
export class PipeModule {}
