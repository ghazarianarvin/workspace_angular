import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {DogInformationComponent} from './dog-information/dog-information.component';
import {DogDetailComponent} from './dog-information/dog-detail/dog-detail.component';
import {ObservableExampleComponent} from './observable-example/observable-example.component';

const routes: Routes = [
    {
        path: 'menu', component: MenuComponent,
        children: [
            {path: 'shoppingList', component: ShoppingListComponent},
            {path: 'dogApi', component: DogInformationComponent},
            {path: 'observable', component: ObservableExampleComponent}
        ]
    },
    {path: '', redirectTo: '/menu', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
