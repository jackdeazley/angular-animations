import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { BlockParagraph } from 'src/models/blockParagraph.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlockComponent implements OnInit {
  @Input() blockData: BlockParagraph;

  public svgPoints: string;

  ngOnInit(): void {
    this.svgPoints = this.generateRandomSvgPoints();
  }

  public generateRandomNumber(maxNumber: number): number {
    return Math.floor(Math.random() * maxNumber);
  }
  public generateRandomSvgPoints(): string {
    const pointA = this.generateRandomNumber(100);
    const pointB = this.generateRandomNumber(100);
    const pointC = this.generateRandomNumber(100);
    const pointD = this.generateRandomNumber(100);
    const pointE = this.generateRandomNumber(100);

    return `M50.8,-16.3C57.3,3.3,47.9,${pointB},${pointA},${pointD}C13.4,52.5,-11.9,51.9,-28.5,39.7C-${pointB},27.6,-52.9,3.9,-46.7,-15.3C-${pointC},-${pointE},-20.2,-49.5,1,-49.8C22.2,-50.1,${pointA},-35.9,50.8,-16.3Z`;
  }
}
