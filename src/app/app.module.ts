import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockModule } from './components/block/block.module';
import { HighlightPipe } from './shared/highlight.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BlockModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
