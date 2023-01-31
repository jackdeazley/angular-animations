import { BlockParagraph } from 'src/models/blockParagraph.model';

export const paragraphData$: BlockParagraph[] = [
  {
    title: 'Heating your home, not the planet',
    description: 'The future of green sustainable heating is already here',
    imageUrl: 'imageOne.png',
    reverseLayout: false,
    highlightedWords: ['not the planet', 'future', 'green sustainable heating'],
  },
  {
    title: 'The future of heating is clean, green and affordable',
    description:
      'Our patent pending Zero Emission Boiler (ZEB) technology is revolutionising the way we heat our homes',
    imageUrl: 'imageTwo.png',
    reverseLayout: true,
    highlightedWords: ['clean', 'green', 'affordable', 'Zero Emission Boiler'],
  },
  {
    title: 'Use the power you generate',
    description:
      'If you have rooftop solar PV a ZEB can automatically store excess electricity produced so you dont unnecessarily export it to the grid',
    imageUrl: 'imageThree.png',
    reverseLayout: false,
    highlightedWords: ['power you generate', 'automatically store'],
  },
];
