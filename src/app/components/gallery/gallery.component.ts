import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  galleryImages: string[] = [];
  @ViewChild('galleryScroll', { static: false }) galleryScroll!: ElementRef;
  private autoSlideInterval: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/general.json').subscribe(data => {
      this.galleryImages = data.content.gallery;
    });
  }

  ngAfterViewInit() {
    this.startAutoSlide();
  }

  scrollGallery(direction: number) {
    const scrollAmount = this.galleryScroll.nativeElement.clientWidth; 
    this.galleryScroll.nativeElement.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.scrollGallery(1); 
    }, 3000); 
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }
}
