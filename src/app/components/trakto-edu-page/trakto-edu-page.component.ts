import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import KeenSlider, { KeenSliderInstance } from "keen-slider"
import { SlidesService } from '../../services/slide.service';
import { ThumbnailsService } from '../../services/thumbnail.service';

@Component({
  selector: 'app-trakto-edu-page',
  templateUrl: './trakto-edu-page.component.html',
  styleUrls: [
    './trakto-edu-page.component.scss',
    '../../../../node_modules/keen-slider/keen-slider.min.css'
  ]
})
export class TraktoEduPageComponent implements OnInit {
  currentWeek: string | null = null;
  slider: KeenSliderInstance = null as any;
  sliderVideo: KeenSliderInstance = null as any;
  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement> = null as any;
  @ViewChild("sliderVideo") sliderRefVideo: ElementRef = null as any;

  slides: { id: string, imageUrl: string, alt: string, title: string }[] = [];
  thumbnails: { src: string, alt: string, url: string }[] = [];

  constructor(
      private router: Router,
      private slidesService: SlidesService,
      private thumbnailsService: ThumbnailsService
    ) {
    this.slides = this.slidesService.getSlides();
    this.thumbnails = this.thumbnailsService.getThumbnails();
  }

  openMaterial() {
    this.router.navigate(['/material-didatico']);
  }

  openTraktoChannel() {
    window.open('https://www.youtube.com/@Trakto', '_blank');
  }

  nextSlide() {
    this.slider.next();
  }
  
  prevSlide() {
    this.slider.prev();
  }

  prevThumbnail() {
    this.sliderVideo.prev();
  }

  nextThumbnail() {
    this.sliderVideo.next();
  }

  goToDocument(documentId: string) {
    window.open(`https://editor.trakto.io/presentation/p/${documentId}`, '_blank');
  }

  goToVideo(videoId: string) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      slides: {
        perView: 5,
        number: 10,
      },
    })
    this.sliderVideo = new KeenSlider(this.sliderRefVideo.nativeElement, {
      slides: {
        perView: 5,
        number: 10,
      }
    })
  }

  ngOnInit(): void {
    const today = new Date();
    const start = startOfWeek(today, { weekStartsOn: 0 });
    const end = endOfWeek(today, { weekStartsOn: 0 });
    const startFormatted = format(start, 'dd/MM');
    const endFormatted = format(end, 'dd/MM');
    this.currentWeek = `Semana ${startFormatted} até ${endFormatted}`;
  }

}
