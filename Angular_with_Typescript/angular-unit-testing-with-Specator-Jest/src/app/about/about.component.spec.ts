import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AboutComponent } from './about.component';
import { HighlightDirective } from '../shared/highlight.directive';


// [6] testing directives, very similar to testing components [1]
// use NO_ERRORS_SCHEMA (6.1)
// you may need to cast selectors as HTMLElement, instead of the default Element (6.2)
describe('[6] Testing directives: very similar to components', () => {
  let component: AboutComponent;
  let spectator: Spectator<AboutComponent>;

  const createComponent = createComponentFactory({
    component: AboutComponent,
    declarations: [HighlightDirective],
    schemas: [ NO_ERRORS_SCHEMA ] // use NO_ERRORS_SCHEMA (6.1)
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('Use NO_ERRORS_SCHEMA and may need to cast selectors as HTMLElement', () => {
    // IMPORTANT: you may need to cast selectors as HTMLElement, instead of the default Element
    const h2: HTMLElement = spectator.query('h2');
    expect(h2).toBeTruthy();
    expect(h2.style.backgroundColor).toBe('skyblue');
  });

});
