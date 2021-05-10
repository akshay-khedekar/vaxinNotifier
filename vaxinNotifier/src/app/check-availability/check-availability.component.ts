import { Component, OnInit } from '@angular/core';
import { FetchApiService} from '../fetch-api.service';

@Component({
  selector: 'app-check-availability',
  templateUrl: './check-availability.component.html',
  styleUrls: ['./check-availability.component.css']
})
export class CheckAvailabilityComponent implements OnInit {

  constructor(private fetchApiService:FetchApiService) { }

  ngOnInit() {
    this.fetchApiService.fetchData().subscribe(
      data => {
        console.log("data");
        console.log(data);
      },
      error => {

      }
    )
  }

}
