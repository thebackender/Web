import { Component } from '@angular/core';

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

  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
  redirect(id?:any){
    window.alert(id);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/