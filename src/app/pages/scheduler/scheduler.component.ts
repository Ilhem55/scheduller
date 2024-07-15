import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { TaskControllerService } from 'src/app/services/services';

@Component({
  selector: 'app-scheduler',
  templateUrl: 'scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent implements AfterViewInit {

  @ViewChild('scheduleObj', { static: false }) scheduleObj!: ScheduleComponent;

  ngAfterViewInit(): void {
    // Now you can safely use this.scheduleObj
    if (this.scheduleObj) {
      // Example: this.scheduleObj.refresh();
    }
  }
}
