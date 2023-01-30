import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { paragraphData$ } from 'src/data/data';
import { BlockParagraph } from 'src/models/blockParagraph.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public blockData$: Observable<BlockParagraph[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // instead of this, I could save blockData$ as BlockParagraph[] and assign it in the subscribe of getParagraphData()
    this.blockData$ = this.dataService.getParagraphData();
  }
}
