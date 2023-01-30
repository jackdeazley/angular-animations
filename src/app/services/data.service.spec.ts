import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { paragraphData$ } from 'src/data/data';
import { BlockParagraph } from 'src/models/blockParagraph.model';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('DS001 - getParagraphData will return an observable of data', () => {
    // arrange

    // act
    const result = service.getParagraphData();

    // assert
    result.subscribe((data) => {
      expect(data).toEqual(paragraphData$);
    });
  });
});
