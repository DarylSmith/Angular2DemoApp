import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsComponent } from "./listings/listings.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path:'events',
    component:ListingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
