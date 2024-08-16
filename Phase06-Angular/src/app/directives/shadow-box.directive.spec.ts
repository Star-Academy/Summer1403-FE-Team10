import { ShadowBoxDirective } from './shadow-box.directive';
import { ElementRef } from '@angular/core';

describe('ShadowBoxDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = new ElementRef(
      document.createElement('div')
    );
    const directive = new ShadowBoxDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
