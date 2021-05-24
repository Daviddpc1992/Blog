import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Blog1Component } from './blog1/blog1.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/blog'},
  { path: 'blog', component: Blog1Component },
  { path: 'new', component: FormularioComponent },
  { path:'**', redirectTo:'/blog'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
