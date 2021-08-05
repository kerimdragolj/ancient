import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxDetailsComponent } from './box-details/box-details.component';
import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app-routing.module';
import { BoxesService } from './boxes.service';
import { HttpClientModule } from '@angular/common/http';
import { BoxComponent } from './box/box.component';
import { RouterModule } from '@angular/router';
import { BoxesComponent } from './boxes/boxes.component';
import { SlotComponent } from './slot/slot.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxDetailsComponent,
    BoxComponent,
    BoxesComponent,
    SlotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    BoxesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
