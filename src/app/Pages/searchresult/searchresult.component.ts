import { Component, Input, OnInit } from '@angular/core';
import { DataService } from "src/app/Services/Api/Data/data.service";
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from "src/app/Services/Api/User/user.service";

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css'],
  providers: [DataService]
})
export class SearchresultComponent implements OnInit {

  // @Input()
  SearchText: any;

  SearchResult : any = [];

  constructor(private userService: UserService, private router :Router, private param :ActivatedRoute,) { }

  ngOnInit(): void {
    this.SearchText = this.param.snapshot.paramMap.get('search');
    this.userService.getsearchResult(this.SearchText).subscribe(data => {
      this.SearchResult = data;
    });
  }
  
  onClick(product: any){
    this.router.navigate(['product-details/', product.Product_Id]);

  }
}
