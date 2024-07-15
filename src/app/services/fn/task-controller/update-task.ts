/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Task } from '../../models/task';

export interface UpdateTask$Params {
  task: Task;
}

export function updateTask(http: HttpClient, rootUrl: string, params: UpdateTask$Params, context?: HttpContext): Observable<StrictHttpResponse<Task>> {
  const rb = new RequestBuilder(rootUrl, updateTask.PATH, 'get');
  if (params) {
    rb.query('task', params.task, {});
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

updateTask.PATH = '/tasks/update/task';
