import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './bills/bills.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bills/',
    pathMatch: 'full',
  },
  {
    path: 'bills/:type',
    component: BillsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
