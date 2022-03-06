import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../amazon';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;
  @Output() redirect = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
