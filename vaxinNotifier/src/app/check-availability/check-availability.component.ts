import { Component, OnInit } from '@angular/core';
import { FetchApiService} from '../fetch-api.service';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-check-availability',
  templateUrl: './check-availability.component.html',
  styleUrls: ['./check-availability.component.css']
})
export class CheckAvailabilityComponent implements OnInit {

  constructor(private fetchApiService:FetchApiService,
              private fb: FormBuilder 
  ) { }
  public form: FormGroup;
  public date;
  ngOnInit() {
    this.form = this.fb.group({
      "pin":[""],
      "date":[""]
    })
    this.fetchApiService.fetchData().subscribe(
      data => {
        console.log("data");
        console.log(data);
      },
      error => {

      }
    )
  }
onSubmit(){
  console.log("form");
  console.log(this.form)
}
}
