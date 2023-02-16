import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/Api/User/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  [x: string]: any;
  route: any;

  constructor(private param: ActivatedRoute, private userService: UserService) { }

  getCategory: any ;
  product: any;
  sizes: any = [];
  colors: any = [];
  simillarProducts: any = [];
 
  ngOnInit(): void {
    this.productId =this.param.snapshot.paramMap.get('id');
    this.getProduct();
    this.getSimillarProduct();
  }

  getSimillarProduct()
  {
    this.userService.getSimillarProduct(this.productId).subscribe(data =>{
      this.simillarProducts = data;
    });
  }

  getProduct()
  {
      this.userService.getProductById(this.productId).subscribe(data =>{
      this.product = data;
     });

     this.userService.getColorListById(this.productId).subscribe(data =>{
      this.color =data;
     });

     this.userService.getSizeListById(this.productId).subscribe(data =>{
      this.size = data;
     });
  }

}




