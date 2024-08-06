import { TestBed } from '@angular/core/testing';

import { XsrfInterceptorInterceptor } from './xsrf-interceptor.interceptor';

describe('XsrfInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      XsrfInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: XsrfInterceptorInterceptor = TestBed.inject(XsrfInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
