import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "src/app/Services/shared.service";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'add-edit-details',
  templateUrl: './add-edit-details.component.html',
  styleUrls: ['./add-edit-details.component.css']
})
export class AddEditDetailsComponent implements OnInit {

  //form: FormGroup;
  LookupName: any =[];
  // public minDate: Date = new Date ("05/07/2017 2:00 AM");


  @Input() lookupdetail:any;
  Lookup_Details_Id: string ="";
  Lookup_Name: string ="";
  Lookup_Id: string="";
  Description: string ="";

  url: any; 
	msg = "";
  constructor(private service: SharedService, private formBuilder: FormBuilder) { 
    // this.form = this.formBuilder.group({
    //   LookupName: ['']
    // });

    // of(this.LookupDetailsList()).subscribe(orders => {
    //   this.LookupName = orders;
    //   this.form.controls.orders.patchValue(this.LookupName[0].Lookup_Id);
    // });
  }

  ngOnInit(): void {
    this.Lookup_Details_Id = this.lookupdetail.Lookup_Details_Id;
    this.Lookup_Name = this.lookupdetail.Lookup_Name;
    this.Lookup_Id = this.lookupdetail.Lookup_Id;
    this.Description = this.lookupdetail.Description;
    this.LookupDetailsList();
  }

  LookupDetailsList() {
    this.service.GetLookupNameDropDown().subscribe(data =>
      this.LookupName = data);
  } 
  
  form = new FormGroup({
    LookupName: new FormControl('', Validators.required)
  });


  addLookupDetails(){
    var val = {
      Lookup_Details_Id:this.Lookup_Details_Id,
      Lookup_Name:this.Lookup_Name,
      Lookup_Id:this.Lookup_Id,
      Description:this.Description,
    };

      this.service.addLookupDetails(val).subscribe(res =>{
        alert(res.toString());
      })
  }

  updateLookupDetails(){
    var val = {Lookup_Details_Id:this.Lookup_Details_Id,
      Lookup_Name:this.Lookup_Name,
      Lookup_Id:this.Lookup_Id,
      Description:this.Description,
    };
      this.service.updateLookupDetails(val).subscribe(res =>{
        alert(res.toString());
    })
  }
}
