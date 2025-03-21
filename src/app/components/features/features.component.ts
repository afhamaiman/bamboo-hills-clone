import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface ProjectDetail {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  projectDetails: ProjectDetail[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/general.json').subscribe(data => {
      this.projectDetails = data.content.projectDetails.slice(0, 4); // Fetch only 4 items
    });
  }
}
