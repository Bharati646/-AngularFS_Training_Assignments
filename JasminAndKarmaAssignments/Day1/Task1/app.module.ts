import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { MymaterialModule } from './mymaterial/mymaterial.module';
@NgModule({
  declarations: [AppComponent, DemoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MymaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
