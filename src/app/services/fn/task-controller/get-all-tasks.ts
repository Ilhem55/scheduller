/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Task } from '../../models/task';

export interface GetAllTasks$Params {
}

export function getAllTasks(http: HttpClient, rootUrl: string, params?: GetAllTasks$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Task>>> {
  const rb = new RequestBuilder(rootUrl, getAllTasks.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Task>>;
    })
  );
}

getAllTasks.PATH = '/tasks/findAlltasks';