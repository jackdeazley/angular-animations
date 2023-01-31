import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockComponent } from './block.component';

describe('BlockComponent', () => {
  let component: BlockComponent;
  let fixture: ComponentFixture<BlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('BC001 - ngONInit() will generate random svg points', () => {
    // arrange
    const spyOnGenerateSvgPoints = spyOn(
      component,
      `generateRandomSvgPoints`
    ).and.returnValue('svg points');
    //act
    component.ngOnInit();

    //assert
    expect(spyOnGenerateSvgPoints).toHaveBeenCalled();
    expect(component.svgPoints).toEqual('svg points');
  });

  it('BC002 - generateRandomSvgPoints wil generate random svg path string', () => {
    // arrange
    const spyOnGenerateNumber = spyOn(
      component,
      `generateRandomNumber`
    ).and.returnValue(50);
    const svgPath = `M50.8,-16.3C57.3,3.3,47.9,50,50,50C13.4,52.5,-11.9,51.9,-28.5,39.7C-50,27.6,-52.9,3.9,-46.7,-15.3C-50,-50,-20.2,-49.5,1,-49.8C22.2,-50.1,50,-35.9,50.8,-16.3Z`;
    // act
    const result = component.generateRandomSvgPoints();

    // assert
    expect(spyOnGenerateNumber).toHaveBeenCalledTimes(5);
    expect(result).toEqual(svgPath);
  });
});
