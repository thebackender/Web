import { Component, Input } from '@angular/core';

import { products } from '../products';
import { amazon_products } from '../amazon';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  amazon = amazon_products;
  @Input() cat!: number;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
  redirect(link?:string, description?:string){
    window.location.href = 'https://t.me/share/url?url='+link+'&text='+description;
  }
  open(id?:any){
    this.amazon[id-1].open_gallery = !this.amazon[id-1].open_gallery;
  }
  remove(id?:any){
    this.amazon[id-1].hide = !this.amazon[id-1].hide;
  }
  like(id?:any){
    this.amazon[id-1].likes += 1;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/