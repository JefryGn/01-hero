import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageDbzComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddPjDbzComponent } from './components/add-pj-dbz/add-pj-dbz.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageDbzComponent,
    ListComponent,
    AddPjDbzComponent,
  ],
  exports: [
    MainPageDbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
