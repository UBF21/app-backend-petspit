import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarDashboardComponent } from './sidebar-dashboard/sidebar-dashboard.component';



@NgModule({
  declarations: [
    SidebarDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarDashboardComponent
  ],
  providers:[
    
  ]
})
export class SharedDashboardModule { }
