import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "src/app/Services/shared.service";
// import { FormGroup, FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})  
export class AddEditProductComponent implements OnInit {

  form = new FormGroup({
    ColorData: new FormControl('', Validators.required),
  });

  public ProductForm = new FormGroup({
  });
  
  public submitted = false;

  CategoryName: any =[];
  ColorData: Array<any> = [];
  SizeData : Array<any> = [];
  selectedcolor : any = [];
  selectedsize : any = [];
  i :any =[];

  @Input() product:any;
  Product_Id:string = "";
  Category_Id: string ="";
  SubCategory_Id: string ="";
  Product_Title: string ="";
  Product_Description : string ="";
  ColorId: Array<any> =[];
  SizeId: Array<any> =[]; 
  Image_Name : string ="";
  
  @Input() ColorIdList:any;
  Color_CodeId : Array<any> =[];

  url: any; 
	msg = "";

  constructor(private service: SharedService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      checkArray: this.formBuilder.array([])
    })
  }
  
  ngOnInit(): void {
    
    this.ProductForm = this.formBuilder.group({
      Category_Id: ["", [Validators.required]],
      SubCategory_Id: ["", [Validators.required]],
      Product_Title: ["",[ Validators.required]],
       Image_Name: ["",[ Validators.required]],
       ColorId: ["",[ Validators.required]],
      SizeId: ["",[ Validators.required]],
       i :["",[ Validators.required]],
       Product_Description: ["",[ Validators.required]],
   });
    this.Product_Id=this.product.Product_Id,
    this.Category_Id = this.product.Category_Id;
    this.SubCategory_Id=this.product.Sub_Cat_Id;
    this.Product_Title = this.product.Product_Title;
    this.Product_Description=this.product.Product_Description;
    this.Image_Name = this.product.Category_Photo;
    this.ColorId=this.ColorId;
    this.SizeId=this.SizeId;
    

    this.CategoryNameList();
    this.GetColorList();
    this.GetSizeList();
    this.SubCatLists();
  }

  get formControl() {
    return this.ProductForm.controls;
  }

  CategoryNameList() {
    this.service.GetProductCatDropDown().subscribe(data =>
      this.CategoryName = data);
  } 

  GetColorList() {
    this.service.GetColor().subscribe(data =>
      this.ColorData = data);
  } 

  GetSizeList() {
    this.service.GetSize().subscribe(data =>
      this.SizeData = data);
  } 
  
  SubCatList:any = [];

  SubCatLists() {
    this.service.GetSubCatByCatid(this.product.Category_Id).subscribe(data =>{
      this.SubCatList = data;
    });
  } 
  
  // form = new FormGroup({
  //   ColorData: new FormControl('', Validators.required),
  //   SizeData : new FormControl('', Validators.required),
  // });
  onOptionsSelected(id:any){
    console.log("the selected value is " + id);

      this.service.GetSubCatByCatid(id).subscribe(data =>{
        this.SubCatList = data;
      });
}

  onSelectChange(e:any){
    let index = this.selectedcolor.indexOf(e.target.value);
    if (index == -1)
    {
      this.selectedcolor.push(e.target.value);
    }
    else{
      this.selectedcolor.splice(index,1);
    }
  }
  
  onSelectSizeChange(e:any){
    let index = this.selectedsize.indexOf(e.target.value);
    if (index == -1)
    {
      this.selectedsize.push(e.target.value);
    }
    else{
      this.selectedsize.splice(index,1);
    }
  }


  addProductDetails(){
    //  this.submitted = true;
    //  if (this.ProductForm.valid){
     var val = {
      Category_Id:this.Category_Id,
      SubCategory_Id:this.SubCategory_Id,
      Product_Title:this.Product_Title,
      Product_Description:this.Product_Description,
      ColorId:this.selectedcolor,
      SizeId:this.selectedsize,
      Image_Name:this.Image_Name.replace(/.*[\/\\]/, ''),
    };
      this.service.addProductDetails(val).subscribe(res =>{
        alert(res.toString());
      })
    //}
  }

  updateProductDetails(){
    debugger;
    var val = {
      Product_Id:this.Product_Id,
      Category_Id:this.Category_Id,
      SubCategory_Id:this.SubCategory_Id,
      Product_Title:this.Product_Title,
      Product_Description:this.Product_Description,
      ColorId:this.selectedcolor,
      SizeId:this.selectedsize,
      Image_Name:this.Image_Name.replace(/.*[\/\\]/, ''),
    };
      this.service.updateProductDetails(val).subscribe(res =>{
        alert(res.toString());
    })
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
