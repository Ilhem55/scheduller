/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Task } from '../../models/task';

export interface UpdateTask5$Params {
      body: Task
}

export function updateTask5(http: HttpClient, rootUrl: string, params: UpdateTask5$Params, context?: HttpContext): Observable<StrictHttpResponse<Task>> {
  const rb = new RequestBuilder(rootUrl, updateTask5.PATH, 'delete');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Task>;
    })
  );
}

updateTask5.PATH = '/tasks/update/task';
