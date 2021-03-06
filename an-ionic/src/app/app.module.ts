import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppRoutingModule } from './app-routing.module';
import {ShoppingItemComponent} from './shopping-list/shopping-item/shopping-item.component';
import {FormsModule} from '@angular/forms';
import {ShoppingItemListComponent} from './shopping-list/shopping-item-list/shopping-item-list.component';
import {DogInformationComponent} from './dog-information/dog-information.component';
import {DogApiService} from './dog-information/shared/dog-api.service';
import {DogDetailComponent} from './dog-information/dog-detail/dog-detail.component';
import {ObservableExampleComponent} from './observable-example/observable-example.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, ShoppingListComponent,
    ShoppingItemComponent, ShoppingItemListComponent, DogInformationComponent,
    DogDetailComponent, ObservableExampleComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
      DogApiService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
