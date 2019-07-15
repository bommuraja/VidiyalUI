import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterComponent } from './center.component';
import { CenterListComponent } from './center-list/center-list.component';
import { CenterAddComponent} from './center-add/center-add.component';
import {CenterEditComponent} from './center-edit/center-edit.component';
import {CenterViewComponent} from './center-view/center-view.component';
import {CenterDeleteComponent} from './center-delete/center-delete.component';

const routes: Routes = [
  {
      path: '',
      component: CenterComponent,
      children: [
        { path: '', redirectTo: 'center'},
        { path: 'center-list', component: CenterListComponent},
        { path: 'center-add/:id/:PageType', component: CenterAddComponent},
        { path: 'center-edit/:id', component: CenterEditComponent},
        { path: 'center-view/:id', component: CenterViewComponent},
        { path: 'center-delete/:id', component: CenterDeleteComponent},
        { path: 'center', component: CenterListComponent}
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CenterRoutingModule { }
