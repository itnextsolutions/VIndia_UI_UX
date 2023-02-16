import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "src/app/Services/shared.service";
import {AbstractControl,FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'add-edit-product-category',
  templateUrl: './add-edit-product-category.component.html',
  styleUrls: ['./add-edit-product-category.component.css']
})
export class AddEditProductCategoryComponent implements OnInit {
  public Pro_CatForm = new FormGroup({
  });
  public submitted = false;

  @Input() productcategory:any;
  Category_Id:string = "";
  Category_Name: string ="";
  Category_Description: string ="";
  Category_Photo: string ="";

 
  url: any; 
	msg = "";

  constructor(private service: SharedService, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.Pro_CatForm = this.formBuilder.group({
      Category_Name: ["", [Validators.required]],
      Category_Description: ["",[ Validators.required]],
      Category_Photo: ["",[ Validators.required]],
    });
    this.Category_Id = this.productcategory.Category_Id;
    this.Category_Name = this.productcategory.Category_Name;
    this.Category_Description = this.productcategory.Category_Description;
    this.Category_Photo = this.productcategory.Category_Photo;
  }

  get formControl() {
    return this.Pro_CatForm.controls;
  }
  addProductCategory(){
    debugger;
    this.submitted = true;
    if (this.Pro_CatForm.valid){
    var val = {Category_Id:this.Category_Id,
      Category_Name:this.Category_Name,
      Category_Description:this.Category_Description,
      Category_Photo:this.Category_Photo.replace(/.*[\/\\]/, '')
    };
      this.service.addProductcategory(val).subscribe(res =>{
        alert(res.toString());
      })
    }
  }

  updateProductCategory(){
    this.submitted = true;
    if (this.Pro_CatForm.valid){
    var val = {Category_Id:this.Category_Id,
      Category_Name:this.Category_Name,
      Category_Description:this.Category_Description,
      Category_Photo:this.Category_Photo,
    };
      this.service.updateProductcategory(val).subscribe(res =>{
        alert(res.toString());
    })
  }
  }
	
	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		}
  }
}