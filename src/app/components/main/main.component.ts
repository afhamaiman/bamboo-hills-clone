import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { LocationComponent } from '../location/location.component';
import { FeaturesComponent } from '../features/features.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { FacilitiesComponent } from '../facilities/facilities.component';
import { LayoutPlanComponent } from '../layout-plan/layout-plan.component';
import { ResidenceComponent } from '../residence/residence.component';
import { ContactComponent } from '../contact/contact.component';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HomeComponent,
    LocationComponent,
    FeaturesComponent,
    GalleryComponent,
    FacilitiesComponent,
    ResidenceComponent,
    ContactComponent,
    CommonModule,
    HeaderComponent,
    LayoutPlanComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  backgroundImage: string = "url('assets/images/home-bg.jpg')";
}