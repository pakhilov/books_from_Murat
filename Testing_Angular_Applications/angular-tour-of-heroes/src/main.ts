import './testing/global-jasmine';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

declare var jasmine;

import './polyfills';

import 'zone.js/dist/zone-testing';

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Spec files to include in the Stackblitz tests
import './tests.sb.ts';

//

bootstrap();

//

function bootstrap() {
  if ((window as any).jasmineRef) {
    location.reload();
    return;
  } else {
    window.onload(undefined);
    (window as any).jasmineRef = jasmine.getEnv();
  }

  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/