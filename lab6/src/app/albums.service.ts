import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Album, Photo} from './models';
import {ALBUMS} from './fake-db';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client:HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }
  getAlbum(id:number):Observable<Album>{
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  } 
}
