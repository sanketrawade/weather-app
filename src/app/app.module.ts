import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader/loader.component';
import { CelciusPipe } from './celcius.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoaderComponent,
    CelciusPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
