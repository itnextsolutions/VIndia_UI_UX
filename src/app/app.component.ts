import { Component } from '@angular/core';
// import {GetApiService} from './Services/Api/get-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vastra';
  users:any;

  constructor(private http:HttpClient)
  {
    
  }
  ngOnInit(){
    

  }
}
