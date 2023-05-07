import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepairComponent } from './repair/repair.component';
import { AddItemComponent } from './add-item/add-item.component';
import { HomeComponent } from './inside/home/home.component';
import { HeaderComponent } from './inside/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RepairComponent,
    AddItemComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
