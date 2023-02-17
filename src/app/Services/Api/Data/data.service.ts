import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
 
    allPassedData: any = "";
    constructor() {}
   
    storePassedObject(passedData : any[]) {
      if(!passedData)
      {
        this.allPassedData = passedData;
      }
       
    }

    retrievePassedObject() {
        return this.allPassedData;
    }
}