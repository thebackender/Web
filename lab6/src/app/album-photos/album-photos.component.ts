import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Photo } from '../models';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(public location: Location, private route: ActivatedRoute, private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getPhotos();
  }
  getPhotos(){
    this.route.paramMap.subscribe((params) => {
      const id = +(params.get('id') || '');
      this.albumsService.getPhotos(id).subscribe((res) => {
        this.photos = res;
      });
    });
  }
}
