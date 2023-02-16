import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
 
    allPassedData: any = "";
    constructor() {}
   
    storePassedObject(passedData : any[]) {
      debugger;
      if(!passedData)
      {
        this.allPassedData = passedData;
      }
       
    }

    retrievePassedObject() {
      debugger;
        return this.allPassedData;
    }
}