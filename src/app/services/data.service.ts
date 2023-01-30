import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { paragraphData$ } from 'src/data/data';
import { BlockParagraph } from 'src/models/blockParagraph.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  public getParagraphData(): Observable<BlockParagraph[]> {
    return of(paragraphData$);
  }
}
