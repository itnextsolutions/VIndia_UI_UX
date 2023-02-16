import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "src/app/Services/Api/User/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  productMenuBarList: any = [];
  productcategoryList: any = [];
  categorySubcategory: any = [];
  productcategory: any;
  searchdata: any = [];
  search: any;
  Notification: any = [];

  constructor(private userService: UserService, private router :Router) { }

  ngOnInit(): void {
    this.refreshproductcategoryList();
  }

  refreshproductcategoryList() {
   this.getproductmenubar();
   this.getNotification();
  }

  getproductmenubar(){
  this.userService.getproductmenubar().subscribe(data => {
    this.productMenuBarList = data;

    if (this.productMenuBarList != null) {
      this.productMenuBarList.forEach((element:any) => {
        let ct = this.categorySubcategory.find((x:any)=>x.Category_Id == element.Category_Id);
        if (!ct) {
            this.categorySubcategory.push({
            Category_Id:    element.Category_Id,
            Category_Name:  element.Category_Name,
              subCat: [{
                SubCategory_Id: element.SubCategory_Id,
                SubCategory:    element.SubCategory
              }]
          })
        }
        else {
            ct.subCat.push({
            SubCategory_Id: element.SubCategory_Id,
            SubCategory: element.SubCategory
          });
        }
      });
    }
    console.log(this.categorySubcategory);
    });
  }

  getNotification(){
    this.userService.getNotification().subscribe(data => {
      this.Notification = data;
    });
  }

  onSearch(){
    debugger;
    this.router.navigate(['search-result/', this.search]);
  }

  onSubCategoryClick(data: any, item: any){
    debugger;
    this.router.navigate(['subcategory/', data.Category_Id, item.SubCategory_Id]);
  }
  

}
