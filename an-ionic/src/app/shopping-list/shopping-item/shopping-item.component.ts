import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShoppingItem} from '../shared/ShoppingItem';
import {ShoppingItemType} from '../shared/ShoppingItemType';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
})
export class ShoppingItemComponent implements OnInit {

  @Output()
  onShoppingItemAdd = new EventEmitter<ShoppingItem>();
  currentShoppingItem: ShoppingItem;

  constructor() { }

  ngOnInit() {
    this.currentShoppingItem = new ShoppingItem();
  }

  add() {
    this.onShoppingItemAdd.emit(this.currentShoppingItem);
    this.currentShoppingItem = new ShoppingItem();
  }
}
