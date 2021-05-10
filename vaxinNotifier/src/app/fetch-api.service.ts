import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  constructor(private http : HttpClient) { }

  public fetchData(){
    return this.http.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByPin?pincode=411007&date=10-05-2021")
  }
}
