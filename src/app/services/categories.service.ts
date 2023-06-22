import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient:HttpClient) { }

  path:string = "http://localhost:3000/categories"

  getCategories(){
    return this.httpClient.get<Categories[]>(this.path)
  }

  add(data: Categories){
    return this.httpClient.post<Categories>(this.path, data)
  }

  delete(data: any){
    return this.httpClient.delete<Categories>(this.path + "/" + data.id)
  }
}
