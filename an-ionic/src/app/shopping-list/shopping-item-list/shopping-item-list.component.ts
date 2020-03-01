import {Component, Input, OnInit} from '@angular/core';
import {ShoppingItem} from '../shared/ShoppingItem';

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

  // TODO encapsulte into categories enum
  getColorFor(itemType: string) {
    if (itemType === 'meat') {
      return 'Salmon';
    } else if (itemType === 'grains') {
      return 'GoldenRod';
    } else if (itemType === 'vegetables') {
      return 'GreenYellow';
    } else if (itemType === 'fruit') {
      return 'Orange';
    }
  }
}
