import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AgendaService, DayService, EventSettingsModel, MonthAgendaService, MonthService, ScheduleComponent, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { TaskControllerService } from './services/services';
import { TaskRequest } from './services/models';

@Component({
  selector: 'app-root',
  // Uncomment these lines if you have external template and styles
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  template: `<ejs-schedule #scheduleObj width='100%' height='550px' [selectedDate]='selectedDate' [eventSettings]='eventSettings'></ejs-schedule>
    <button (click)="addEvent()">Add Event</button>`
})
export class AppComponent {
  @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;

  constructor(private taskControllerService: TaskControllerService) { }


  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(),
    EndTime: new Date(),
    IsAllDay: false
  }];

  public selectedDate: Date = new Date();

  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      id: 'Id',
      subject: { name: 'Subject' },
      isAllDay: { name: 'IsAllDay' },
      StartTime: { name: 'StartTime' },
      EndTime: { name: 'EndTime' },
    }
  };



  addEvent(): void {
    const newEvent: TaskRequest = {
    body:{
      title: 'New Event',
      description : ' decription of the event ',
      startDate: new Date(),
      endDate: new Date(),
      isAllDay: false
    }
    };

    this.taskControllerService.saveTask(newEvent).subscribe(
      (response) => {
        const eventData = this.scheduleObj.eventSettings.dataSource as object[];
        eventData.push(newEvent);
        this.scheduleObj.eventSettings = { dataSource: eventData };
        this.scheduleObj.refreshEvents();
      },
      (error) => {
        console.error('Error creating event', error);
      }
    );
  }

  ngOnInit(): void {
    // No need to call generateEvents here since we have predefined data
  }
}





  


