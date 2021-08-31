import { Component } from '@angular/core';
import { CommonService } from './Services/common.service';
import { ServerhttpService } from './Services/serverhttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bai1';
  public totalStudents = 0;

  constructor(
    private common: CommonService,
    private serverHttp: ServerhttpService
  ) {}

  ngOnInit(): void {
    this.common.totalStudents$.subscribe((total) => {
      this.totalStudents = total;
    });
    if (this.common.totalStudents === 0) {
      this.serverHttp.getStudents().subscribe((data) => {
        this.common.setTotalStudents(data.length);
      });
    }
  }
}

