import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(stringValue: string, ...highlightText: any) {
    if (!highlightText) return stringValue;

    for (const text of highlightText[0]) {
      const re = new RegExp('\\b(' + text + '\\b)', 'igm');
      stringValue = stringValue.replace(
        re,
        '<span class="highlighted-text animated animatedFadeInUp fadeInUp" >$1</span>'
      );
    }

    return stringValue;
  }
}
