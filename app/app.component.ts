import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileImageComponent } from "./image/profile-image/profile-image.component"; 
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DetailsComponent } from './details/details/details.component';
import { FooterComponent } from './footer/footer/footer.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProfileImageComponent, MatMenuModule,MatDividerModule,MatButtonModule,MatIconModule,MatTabsModule,MatCardModule, MatProgressBarModule, DetailsComponent, FooterComponent]
})
export class AppComponent {
  title = 'portfolio-website';
  
}
