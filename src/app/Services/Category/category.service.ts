import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }


  category =[
    {
      categoryId :1,
      categoryName :"T-Shirts",
      categoryImg:"assets/img/Category/t_shirt.jfif"

    },
    {
      categoryId :2,
      categoryName : "Shirts",
      categoryImg:"assets/img/Category/t_shirt.jfif"
    },
  
    {
      categoryId :3,
      categoryName : "Sweatshirts & Hoodies",
      categoryImg:"assets/img/Category/t_shirt.jfif"
    },
   
    {
      categoryId :4,
      categoryName : "Uniforms",
      categoryImg:"assets/img/Category/t_shirt.jfif"
    }
    ,
    {
      categoryId :5,
      categoryName : "Dryfits",
      categoryImg:"assets/img/Category/t_shirt.jfif"
    },
    
    {
      categoryId :6,
      categoryName : "Caps",
      categoryImg:"assets/img/Category/t_shirt.jfif"
    },
    {
      categoryId :7,
      categoryName : "Umbrella",
      categoryImg:"assets/img/Category/t_shirt.jfif"
    },
    {
      categoryId :8,
      categoryName :"Jackets",
      categoryImg :"assets/img/Category/t_shirt.jfif"
    }

  ]
}
