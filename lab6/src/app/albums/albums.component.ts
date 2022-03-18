import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  newAlbum: string = '';

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums();
  }
  getAlbums(){
    this.albumsService.getAlbums().subscribe((res) => {
      this.albums = res
    })
  }
  deleteAlbum(id:number){
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }
  addAlbum(){
    this.albumsService.addAlbum({title: this.newAlbum} as Album).subscribe((res)=>{
      this.albums.push(res);
      this.newAlbum = '';
    })
  }

}
