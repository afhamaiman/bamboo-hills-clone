import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  descriptionTitle: string = '';
  descriptionSubTitle: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/general.json').subscribe(data => {
      this.descriptionTitle = data.content.descriptionTitle;
      this.descriptionSubTitle = data.content.descriptionSubTitle;
    });
  }
}
