import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-plan.component.html',
  styleUrls: ['./layout-plan.component.css']
})
export class LayoutPlanComponent implements OnInit {
  layouts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/general.json').subscribe(data => {
      this.layouts = data.content.layouts; // Fetch layout data
    });
  }
}
