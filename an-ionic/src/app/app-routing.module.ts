import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'shoppingList', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
