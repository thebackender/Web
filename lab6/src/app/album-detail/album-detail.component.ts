import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;


  constructor(private albumsService: AlbumsService, private route: ActivatedRoute, public location: Location) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    this.route.paramMap.subscribe((params) => {
      const id = +(params.get('id') || '');
      this.albumsService.getAlbum(id).subscribe((res) => {
        this.album = res;
      });
    });
  }
}
