import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material.module';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent, SidebarComponent, FooterComponent],
})
export class SharedModule {}
