import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes,RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import {MatRadioModule} from '@angular/material/radio';


const routes: Routes = [
  {path:'one',component:OneComponent},
  {path:'two',component:TwoComponent},
  
];


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
    
  ],
  imports: [
    BrowserModule,MatRadioModule,
    AppRoutingModule,MatFormFieldModule,MatInputModule,MatSelectModule,
    BrowserAnimationsModule,MatCardModule,MatIconModule,MatToolbarModule,MatSidenavModule,RouterModule.forRoot(routes),
    MatButtonModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
