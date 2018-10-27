import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CalculateService } from './services/calculator.service';
import { TriangleService } from './services/triangle.service';
import { ParameterService } from './services/parameter.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CalculateService,TriangleService,ParameterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
