import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let authToken = 'randomToken';
  let reqWithHeaders = req.clone({
    setHeaders: {
      Authorization: `Bearer ${authToken}`
    }
  })
  return next(reqWithHeaders);
};
