import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BlockParagraph } from 'src/models/blockParagraph.model';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [DataService],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('AC001 - ngOnInit will assign the observable data', () => {
    // arrange
    const mockData: BlockParagraph[] = [
      {
        title: 'Test title',
        description: 'Test description',
        imageUrl: 'image.png',
      },
    ];
    const spyOnGetData = spyOn(
      component['dataService'],
      'getParagraphData'
    ).and.returnValue(of(mockData));

    // act
    component.ngOnInit();

    // assert
    expect(spyOnGetData).toHaveBeenCalled();
    component.blockData$.subscribe((blockData) => {
      expect(blockData).toEqual(mockData);
    });
  });
});
