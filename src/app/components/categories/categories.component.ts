import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { PokelistService } from 'src/app/services/pokelist.service';
import { Router } from '@angular/router';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService:CategoriesService, private pokelistService:PokelistService, private router:Router, ) { }

  categories:Categories[] = []
  currentCategory:Categories

  ngOnInit(): void {
    this.getCategories()
  }

  reloadPageAndNavigate(){
    window.location.reload();
    window.location.replace('');
  }

  getCategories(){
    this.categoriesService.getCategories().subscribe((data)=> (this.categories=data))
  }

  selectCategory(category){
    this.currentCategory = category
    this.pokelistService.setSelectedCategory(category)
  }

  delete(data:any){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass:{
        confirmButton: 'btn bg-gradient-info active ms-3',
        cancelButton: 'btn bg-gradient-primary active',
      },
      buttonsStyling: false,
    })
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: 'This action cannot be undone',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true,
      })
      .then((result)=> {
        if(result.isConfirmed){
          this.categories = this.categories.filter((x)=> x !== data)
          this.categoriesService.delete(data).subscribe(()=>{
            swalWithBootstrapButtons.fire(
              'Deleted',
              'Data is deleted',
              'success'
            );
          }),
            setTimeout(() => {
              window.location.reload();
            }, 1000);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Data is safe',
            'error'
          );
          }
          })
        }
      }
    
  


  





