import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDashboardComponent } from './sidebar-dashboard/sidebar-dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarDashboardComponent
  ],
  providers:[
    
  ]
})
export class SharedDashboardModule { }
