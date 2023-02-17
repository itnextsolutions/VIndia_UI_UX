import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { FeaturesComponent } from './Pages/features/features.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductDetailsComponent } from './Pages/product-details/product-details.component';
import { ProductsComponent } from './Pages/products/products.component';
import { TestimonialComponent } from './Pages/testimonial/testimonial.component';
import { CategoryComponent } from './Pages/category/category.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { BlogContentComponent } from './Pages/blog/blog-content/blog-content.component';
import { SearchresultComponent } from './Pages/searchresult/searchresult.component';
import { FaqComponent } from './Pages/faq/faq.component';
import { SubcategoryComponent } from './Pages/subcategory/subcategory.component';


import { LoginComponent } from './Admin/login/login.component';
import { ProductCategoryComponent } from './Admin/product-category/product-category.component';
import { LookupmasterComponent } from './Admin/lookupmaster/lookupmaster.component';
import { LookupvalueComponent } from './Admin/lookupvalue/lookupvalue.component';
import { ProductMasterComponent } from './Admin/product-master/product-master.component';
import { BlogmasterComponent } from './Admin/blogmaster/blogmaster.component';
import { CustomerReviewMasterComponent } from './Admin/customer-review-master/customer-review-master.component';
import { ProductSubcategoryMasterComponent } from './Admin/product-subcategory-master/product-subcategory-master.component';
import { NotificationMasterComponent } from './Admin/notification-master/notification-master.component';
import { FaqMasterComponent } from './Admin/faq-master/faq-master.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'products',component:ProductsComponent},
  {path:'contact',component:ContactComponent},
  {path:'testimonial',component:TestimonialComponent},
  {path:'features',component:FeaturesComponent},
  {path:'category', component: CategoryComponent }, 
  {path:'subcategory/:category_id/:subcategory_id', component: SubcategoryComponent },
  {path:'product-details',component:ProductDetailsComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'products/:category_id/:categoryName',component:ProductsComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog/:blog_Id',component:BlogContentComponent},
  {path:'search-result/:search',component:SearchresultComponent},
  {path:'faq',component:FaqComponent},

  {path:'admin/login',component:LoginComponent},
  {path:'admin/product-category',component:ProductCategoryComponent},
  {path:'admin/lookup-master',component:LookupmasterComponent},
  {path:'admin/lookup-value',component:LookupvalueComponent},
  {path:'admin/product-master',component:ProductMasterComponent},
  {path:'admin/blog-master',component:BlogmasterComponent},
  {path:'admin/customer-review',component:CustomerReviewMasterComponent}, 
  {path:'admin/subcategory',component:ProductSubcategoryMasterComponent},
  {path:'admin/notification-master',component:NotificationMasterComponent},
  {path:'admin/faq-master',component:FaqMasterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
