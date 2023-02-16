import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "src/app/Services/Api/User/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productcategoryList:any = [];
  blogList:any = [];
  customerReview:any = [];
  modalTitle:any;
  productcategory:any;
  blogno:any=0;  
 
  constructor(private userService: UserService, private router : Router) { }

  ngOnInit(): void {
    this.refreshproductcategoryList();
    this.refreshblogList();
    this.getCustomerReviews();
  }

  refreshproductcategoryList() {
    this.userService.getproductcategoryList().subscribe(data =>{
      this.productcategoryList = data;
    });
  }

  refreshblogList() 
  {
    this.blogno = 3;
    this.userService.getbloglist(this.blogno).subscribe(data =>{
      this.blogList = data;
    });
  }

  getCustomerReviews()
  {
    this.userService.getCustomerReviews().subscribe(data =>{
      this.customerReview = data;
    });
  }

  onCategoryClick(data: any){
    debugger;
    this.router.navigate(['products/',data.Category_Id,data.Category_Name]);
  }

  onClick(data: any){
    debugger;
    this.router.navigate(['blog/', data.Blog_Id]);
  }

}
