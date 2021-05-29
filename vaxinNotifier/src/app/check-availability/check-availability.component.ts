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
  public showResult = false;
  public centerinfo;
  ngOnInit() {
    this.form = this.fb.group({
      "pin":[""],
      "date":[""]
    })
  }
onSubmit(){
  let pin = this.form.value.pin
  let date = this.form.value.date.day+ "-" + this.form.value.date.month + "-" + this.form.value.date.year

  this.fetchApiService.fetchData(pin, date).subscribe(
    data => {
      this.showResult = true
      console.log("data");
      console.log(data);
      this.centerinfo = data
    
    },
    error => {

    }
  )
  console.log("form");
  console.log(this.form)
}
}
