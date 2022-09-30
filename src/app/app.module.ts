import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormShowComponent } from './form-show/form-show.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputformComponent } from './inputform/inputform.component';

@NgModule({
  declarations: [
    AppComponent,
    FormShowComponent,
    HeaderComponent,
    FooterComponent,
    InputformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, InputformComponent, HeaderComponent, FooterComponent, FormShowComponent]
})
export class AppModule { }
