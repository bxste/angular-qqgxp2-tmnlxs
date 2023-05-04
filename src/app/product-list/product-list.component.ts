import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  //   The code products = [...products] is using the spread syntax to create a new array products that contains all the items from the original products array. This is a common way to create a new array with the same contents as an existing array.

  // One important thing to note is that this code creates a new array that is a copy of the original products array. This means that changes made to the new products array will not affect the original products array, and vice versa.

  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
