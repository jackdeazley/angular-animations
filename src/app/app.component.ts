import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlockParagraph } from 'src/models/blockParagraph.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public blockData$: Observable<BlockParagraph[]>;
  public isLightMode: boolean = true;
  public userPreference: string | null;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // instead of this, I could save blockData$ as BlockParagraph[] and assign it in the subscribe of getParagraphData()
    this.blockData$ = this.dataService.getParagraphData();
    this.userPreference = localStorage.getItem('themePref');

    this.isLightMode =
      this.userPreference === 'dark' || this.userPreference === null
        ? true
        : false;
  }

  toggleUserPref(): void {
    const themePref = this.isLightMode ? 'light' : 'dark';

    localStorage.setItem('themePref', themePref);
    this.isLightMode = !this.isLightMode;
  }
}
