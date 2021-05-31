import { Component, OnInit } from '@angular/core';
import { FetchApiService} from '../fetch-api.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


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
  public showResult = false;
  public centerinfo;
  ngOnInit() {
    this.form = this.fb.group({
      "pin":["",[Validators.required,Validators.minLength(6)]],
      "date":["",Validators.required]
    })
  }
  get pin(){return this.form.get('pin')}
  get date(){return this.form.get('date')}

onSubmit(){
  let pin = this.form.value.pin
  let date = this.form.value.date.day+ "-" + this.form.value.date.month + "-" + this.form.value.date.year

  this.fetchApiService.fetchData(pin, date).subscribe(
    data => {
      this.showResult = true
      this.centerinfo = data
      console.log(this.centerinfo.centers);
    },
    error => {

    }
  )
  console.log("form");
  console.log(this.form)
}
}
