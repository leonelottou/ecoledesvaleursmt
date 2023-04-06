import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AproposComponent } from './apropos/apropos.component';
import { LapresidenteComponent } from './lapresidente/lapresidente.component';
import { TeamComponent } from './team/team.component';
import { ApplicationComponent } from './application/application.component';
import { ContactComponent } from './contact/contact.component';
import { Header2Component } from './header2/header2.component';

const routes: Routes = [



  {
    path: '', 
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent, },
      { path: 'apropos', component: AproposComponent },
      { path: 'lapresidente', component: LapresidenteComponent},
      { path: 'lequipe', component: TeamComponent },
      { path: 'lapplication', component: ApplicationComponent },
      { path: 'contact', component: ContactComponent},
    
    
    
    ]
  
},


]



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AproposComponent,
    LapresidenteComponent,
    TeamComponent,
    ApplicationComponent,
    ContactComponent,
    Header2Component
 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MainModule { }
