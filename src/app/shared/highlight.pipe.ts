import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(stringValue: string, ...highlightText: any) {
    if (!highlightText) return stringValue;
    const re = new RegExp('\\b(' + highlightText + '\\b)', 'igm');
    stringValue = stringValue.replace(
      re,
      '<span class="highlighted-text" >$1</span>'
    );
    return stringValue;
  }
}
