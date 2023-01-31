import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './block.component';
import { HighlightPipe } from 'src/app/shared/highlight.pipe';

@NgModule({
  declarations: [BlockComponent, HighlightPipe],
  imports: [CommonModule],
  exports: [BlockComponent],
})
export class BlockModule {}
