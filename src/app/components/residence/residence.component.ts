import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-residence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
  propertyInfo: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/general.json').subscribe(data => {
      this.propertyInfo = data.content.propertyInfo;
    });
  }
}
