/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteTask } from '../fn/task-controller/delete-task';
import { DeleteTask$Params } from '../fn/task-controller/delete-task';
import { getAllTasks } from '../fn/task-controller/get-all-tasks';
import { GetAllTasks$Params } from '../fn/task-controller/get-all-tasks';
import { getTask } from '../fn/task-controller/get-task';
import { GetTask$Params } from '../fn/task-controller/get-task';
import { saveTask } from '../fn/task-controller/save-task';
import { SaveTask$Params } from '../fn/task-controller/save-task';
import { Task } from '../models/task';
import { updateTask } from '../fn/task-controller/update-task';
import { UpdateTask$Params } from '../fn/task-controller/update-task';
import { updateTask1 } from '../fn/task-controller/update-task-1';
import { UpdateTask1$Params } from '../fn/task-controller/update-task-1';
import { updateTask2 } from '../fn/task-controller/update-task-2';
import { UpdateTask2$Params } from '../fn/task-controller/update-task-2';
import { updateTask3 } from '../fn/task-controller/update-task-3';
import { UpdateTask3$Params } from '../fn/task-controller/update-task-3';
import { updateTask4 } from '../fn/task-controller/update-task-4';
import { UpdateTask4$Params } from '../fn/task-controller/update-task-4';
import { updateTask5 } from '../fn/task-controller/update-task-5';
import { UpdateTask5$Params } from '../fn/task-controller/update-task-5';
import { updateTask6 } from '../fn/task-controller/update-task-6';
import { UpdateTask6$Params } from '../fn/task-controller/update-task-6';
import { TaskRequest } from '../models';

@Injectable({ providedIn: 'root' })
export class TaskControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `saveTask()` */
  static readonly SaveTaskPath = '/tasks/savetask';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveTask()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveTask$Response(params: SaveTask$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return saveTask(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveTask$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveTask(params: SaveTask$Params, context?: HttpContext): Observable<string> {
    return this.saveTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /*createEvent(taskRequest: TaskRequest): Observable<string> {
    const params: SaveTask$Params = { body: taskRequest };
    return this.saveTask(params); // Utilise saveTask pour créer un événement
  }
*/


  /** Path part for operation `getAllTasks()` */
  static readonly GetAllTasksPath = '/tasks/findAlltasks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTasks()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTasks$Response(params?: GetAllTasks$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Task>>> {
    return getAllTasks(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTasks$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTasks(params?: GetAllTasks$Params, context?: HttpContext): Observable<Array<Task>> {
    return this.getAllTasks$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Task>>): Array<Task> => r.body)
    );
  }

  /** Path part for operation `getTask()` */
  static readonly GetTaskPath = '/tasks/findAlltasks/{taskById}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTask()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTask$Response(params: GetTask$Params, context?: HttpContext): Observable<StrictHttpResponse<Task>> {
    return getTask(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTask$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTask(params: GetTask$Params, context?: HttpContext): Observable<Task> {
    return this.getTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>): Task => r.body)
    );
  }

  /** Path part for operation `deleteTask()` */
  static readonly DeleteTaskPath = '/tasks/delete/{deleteById}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTask()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTask$Response(params: DeleteTask$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return deleteTask(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTask$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTask(params: DeleteTask$Params, context?: HttpContext): Observable<string> {
    return this.deleteTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `updateTask()` */
  static readonly UpdateTaskPath = '/tasks/update/task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTask$Response(params: UpdateTask$Params, context?: HttpContext): Observable<StrictHttpResponse<Task>> {
    return updateTask(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateTask(params: UpdateTask$Params, context?: HttpContext): Observable<Task> {
    return this.updateTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>): Task => r.body)
    );
  }

  /** Path part for operation `updateTask3()` */
  static readonly UpdateTask3Path = '/tasks/update/task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask3()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask3$Response(params: UpdateTask3$Params, context?: HttpContext): Observable<StrictHttpResponse<Task>> {
    return updateTask3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask3$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask3(params: UpdateTask3$Params, context?: HttpContext): Observable<Task> {
    return this.updateTask3$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>): Task => r.body)
    );
  }

  /** Path part for operation `updateTask2()` */
  static readonly UpdateTask2Path = '/tasks/update/task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask2$Response(params: UpdateTask2$Params, context?: HttpContext): Observable<StrictHttpResponse<Task>> {
    return updateTask2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask2(params: UpdateTask2$Params, context?: HttpContext): Observable<Task> {
    return this.updateTask2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>): Task => r.body)
    );
  }

  /** Path part for operation `updateTask5()` */
  static readonly UpdateTask5Path = '/tasks/update/task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask5()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask5$Response(params: UpdateTask5$Params, context?: HttpContext): Observable<StrictHttpResponse<Task>> {
    return updateTask5(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask5$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask5(params: UpdateTask5$Params, context?: HttpContext): Observable<Task> {
    return this.updateTask5$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>): Task => r.body)
    );
  }

  /** Path part for operation `updateTask6()` */
  static readonly UpdateTask6Path = '/tasks/update/task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask6()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask6$Response(params: UpdateTask6$Params, context?: HttpContext): Observable<StrictHttpResponse<Task>> {
    return updateTask6(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask6$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask6(params: UpdateTask6$Params, context?: HttpContext): Observable<Task> {
    return this.updateTask6$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>): Task => r.body)
    );
  }

  /** Path part for operation `updateTask1()` */
  static readonly UpdateTask1Path = '/tasks/update/task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask1$Response(params: UpdateTask1$Params, context?: HttpContext): Observable<StrictHttpResponse<Task>> {
    return updateTask1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask1(params: UpdateTask1$Params, context?: HttpContext): Observable<Task> {
    return this.updateTask1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>): Task => r.body)
    );
  }

  /** Path part for operation `updateTask4()` */
  static readonly UpdateTask4Path = '/tasks/update/task';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask4()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask4$Response(params: UpdateTask4$Params, context?: HttpContext): Observable<StrictHttpResponse<Task>> {
    return updateTask4(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask4$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask4(params: UpdateTask4$Params, context?: HttpContext): Observable<Task> {
    return this.updateTask4$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>): Task => r.body)
    );
  }

}
