import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { QuestionsComponent } from './questions/questions/questions.component';
import { LeraningMaterialComponent } from './leraning-material/leraning-material.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '' , component:LayoutComponent, children: [
    {path: 'home' , component:HomeComponent },
    {path: 'questions', component: QuestionsComponent},
    {path: 'learning', component: LeraningMaterialComponent}

  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
