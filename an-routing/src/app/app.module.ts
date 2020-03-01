import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: 'one', component: ComponentOneComponent},
  { path: 'oneOnTop', component: ComponentOneComponent, outlet: 'topOutlet'},
  { path: 'two/:param', component: ComponentTwoComponent},
  { path: 'twoOnTop/:param', component: ComponentTwoComponent, outlet: 'topOutlet'},
  { path: 'two', component: ComponentTwoComponent},
  { path: 'twoOnTop', component: ComponentTwoComponent, outlet: 'topOutlet'},

];

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
