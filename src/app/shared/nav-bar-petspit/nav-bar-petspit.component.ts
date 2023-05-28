import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/model/Category';
import { SubCategory } from 'src/app/models/model/SubCategory';
import { LoginService } from 'src/app/services/auth/login.service';
import { PublicCategoryService } from 'src/app/services/public/category/public-category.service';
import { PublicSubCategoryService } from 'src/app/services/public/subCategory/public-sub-category.service';
import { SharedInformationService } from 'src/app/services/shared-information/shared-information.service';

@Component({
  selector: 'app-nav-bar-petspit',
  templateUrl: './nav-bar-petspit.component.html',
  styleUrls: ['./nav-bar-petspit.component.css']
})
export class NavBarPetspitComponent implements OnInit {
  categories: Category[] = [];
  Subcategories: SubCategory[] = [];

  constructor(public shared :SharedInformationService,public loginServices:LoginService,private publicCategoryServices: PublicCategoryService, private publicSubCategoryService: PublicSubCategoryService,private router:Router){ }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllSubCategories();
  }

  getAllCategories(): void {
    this.publicCategoryServices.getAllCategories()
      .subscribe({
        next: (response) => {
          this.categories = response;
          console.log(response);
        },
        error: (error) => { console.log(error) }
      });
  }


  getAllSubCategories(){

    this.publicSubCategoryService.getAllSubCategories()
    .subscribe({
      next:(response)=>{
          this.Subcategories = response;
      },
      error:(error)=>{console.log(error)}
    });
  }

  routerOfCategory(descripcion:string){

    this.router.navigate(['/products'],{queryParams :{category : descripcion}});
  }

  routerOfSubCategory(descripcion:string){
    this.router.navigate(['/products'],{queryParams :{subCategory : descripcion}});
  }

  routerOfAllProducts(){
    this.router.navigate(['/products'],{queryParams :{todas : "all"}});
  }
}
