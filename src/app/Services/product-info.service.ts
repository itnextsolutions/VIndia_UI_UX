import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  constructor() { }

  //Products

  ProductngDetails = [
    {
      id:1,
      productName:"Fresh Tomato",
      productDetails:"Pan-fried masala paneer.Pan-fried masala paneer.Pan-fried masala paneer.",
      productPrice:19,
      productImg:"assets/img/product-1.jpg"
    },
    {
      id:2,
      productName:"Fresh Pineapple",
      productDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      productPrice:19,
      productImg:"assets/img/product-2.jpg"
    },
    {
      id:3,
      productName:"Fresh Red Chilli",
      productDetails:"panner",
      productPrice:19,
      productImg:"assets/img/product-3.jpg"
    },
    {
      id:4,
      productName:"Fresh Strawberry",
      priductDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      productPrice:19,
      productImg:"assets/img/product-4.jpg"
    },
    {
      id:5,
      productName:"Fresh C",
      productDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      productPrice:19,
      productImg:"assets/img/product-5.jpg"
    },
    {
      id:6,
      productName:"Fresh Tomato",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/product-6.jpg"
    },
    {
      id:7,
      productName:"Fresh C",
      productDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      productPrice:19,
      productImg:"assets/img/product-5.jpg"
    },
    {
      id:8,
      productName:"Fresh Tomato",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/product-6.jpg"
    }
  ]


  t_shirts =[

    {
      categoryId : 1,
      id:1,
      productName:"Round Neck",
      productDetails:"A polo t-shirt is perfect balance between casual and formal wear. It’s a formal than a crew neck tee and casual than a dress shirt. And works perfectly for summers. We have collared polo t-shirt available 48 colours for both men and women with size varying from small to 5XL. We guarantee colour fastness.http://www.vastraindia.com/plain-collared.html",
      productPrice:19,
      productImg:"assets/img/t_shirts/product-2.jpg"
    },
    {
      categoryId : 1,
      id:2,
      productName:"V-Neck",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/t_shirts/product-3.jfif"
    },
    {
      categoryId : 1,
      id:3,
      productName:"Collar",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/t_shirts/product-1.jpg"
    }
  ]


  shirts =[
    {
      categoryId : 2,
      id:1,
      productName:"Full Sleeve",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/Shirts/product-1.jpg"
    },
    {
      categoryId : 2,
      id:2,
      productName:"Half Sleeve",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/Shirts/product-2.jpg"
    },
    {
      categoryId : 2,
      id:3,
      productName:"Full Sleeve Denim",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/Shirts/product-3.jpg"
    },
    {
      categoryId : 2,
      id:4,
      productName:"Half Sleeve Denim",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/Shirts/product-4.jpg"
    }
  ]


  sweatshirts =[
    {
      categoryId : 3,
      id:1,
      productName:"Sweat Shirt with Hood & Pocket",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/sweatshirts/product-1.jpg"
    },
    {
      categoryId : 3,
      id:2,
      productName:"Sweat Shirt Rib Neck",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/sweatshirts/product-2.jpg"
    },
    {
      categoryId : 3,
      id:3,
      productName:"Sweat Shirt with Collar & Zip",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/sweatshirts/product-3.jpg"
    },
    {
      categoryId : 3,
      id:4,
      productName:"Sweat Shirt with Hood, Full zip & pocket",
      productDetails:"Oreo ice cream",
      productPrice:19,
      productImg:"assets/img/sweatshirts/product-4.jpg"
    }
  ]

  

}

