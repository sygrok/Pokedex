import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokelist } from 'src/app/models/pokelist';
import { PokelistService } from 'src/app/services/pokelist.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokelist-detail',
  templateUrl: './pokelist-detail.component.html',
  styleUrls: ['./pokelist-detail.component.css']
})
export class PokelistDetailComponent implements OnInit {

  constructor(private pokelistService:PokelistService, private activatedRoute:ActivatedRoute) { }
  pokemons:Pokelist[]=[]
  pokemon:Pokelist

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getPokemonsById(params["id"])
    })
  }

  getPokemonsById(id){
    this.pokelistService.getPokemonsById(id).subscribe((data)=>(this.pokemon = data))
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
          this.pokemons = this.pokemons.filter((x)=> x !== data)
          this.pokelistService.delete(data).subscribe(()=>{
            swalWithBootstrapButtons.fire(
              'Deleted',
              'Data is deleted',
              'success'
              
            );
            window.location.reload();
    window.location.replace('');
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

