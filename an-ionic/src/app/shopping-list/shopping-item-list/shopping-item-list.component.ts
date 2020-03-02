import {Component, Input, OnInit} from '@angular/core';
import {ShoppingItem} from '../shared/ShoppingItem';
import {ShoppingItemType} from '../shared/ShoppingItemType';

@Component({
  selector: 'app-shopping-item-list',
  templateUrl: './shopping-item-list.component.html',
  styleUrls: ['./shopping-item-list.component.scss'],
})
export class ShoppingItemListComponent implements OnInit {


  shoppingItems: ShoppingItem[] = [];

  constructor() { }

  ngOnInit() {}

  addItem(shoppingItem: ShoppingItem) {
    this.shoppingItems.push(shoppingItem);
  }


}
