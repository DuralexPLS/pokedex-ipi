import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminViewComponent } from './admin-view/admin-view.component';



const routes: Routes = [
  {path: 'admin', component: AdminViewComponent, canActivate: [AuthGuard],
   children: [
    {path: 'edit', component: AdminEditComponent},
   ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
