import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TemplateModule } from './template/template.module';
import { QuestionsModule } from './questions/questions.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    TemplateModule,
    QuestionsModule,
    
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
