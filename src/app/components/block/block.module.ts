import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockComponent } from './block.component';
import { HighlightPipe } from 'src/app/shared/highlight.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [BlockComponent, HighlightPipe],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
  providers: [HighlightPipe],
  exports: [BlockComponent],
})
export class BlockModule {}
