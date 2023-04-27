import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { format, startOfWeek, endOfWeek } from 'date-fns';
import KeenSlider, { KeenSliderInstance } from "keen-slider"

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

  slides = [
    {
      id: 'r7B7ef3aBDbpXxuc9uAj',
      imageUrl: '../../../../assets/aula-1.png',
      alt: 'Aula 1 slide thumbnail',
      title: 'Aula 1: Corrida espacial',
    },
    {
      id: 'yWvAku6rpoKKokxRJUAv',
      imageUrl: '../../../../assets/aula-2.png',
      alt: 'Aula 2 slide thumbnail',
      title: 'Aula 2: Independência',
    },
    {
      id: 'EGSumWSrADbpfYNzwpnm',
      imageUrl: '../../../../assets/aula-3.png',
      alt: 'Aula 3 slide thumbnail',
      title: 'Aula 3: Biologia',
    },
    {
      id: 'xj5uEGYGn5Q4bd9Rfvwa',
      imageUrl: '../../../../assets/aula-4.png',
      alt: 'Aula 4 slide thumbnail',
      title: 'Aula 4: Revolução industrial',
    },
    {
      id: 'JW07cZ46QpmkR01sQB0f',
      imageUrl: '../../../../assets/aula-5.png',
      alt: 'Aula 5 slide thumbnail',
      title: 'Aula 5: A história de Tiradentes',
    },
    {
      id: 'DcxAmeVkAWUzFzNrqosv',
      imageUrl: '../../../../assets/aula-6.png',
      alt: 'Aula 6 slide thumbnail',
      title: 'Aula 6: Pontos cardeais',
    },
    {
      id: 'SwM0QkYOck81JkQfnzFB',
      imageUrl: '../../../../assets/aula-7.png',
      alt: 'Aula 7 slide thumbnail',
      title: 'Aula 7: Sistema solar',
    },
    {
      id: '5xvo3hMF1SMBhEw0KyPi',
      imageUrl: '../../../../assets/aula-8.png',
      alt: 'Aula 8 slide thumbnail',
      title: 'Aula 8: Roma e Grécia antiga',
    },
    {
      id: 'dslzbQ3WMetvCbULhdFN',
      imageUrl: '../../../../assets/aula-9.png',
      alt: 'Aula 9 slide thumbnail',
      title: 'Aula 9: A importância da ética na advocacia',
    },
    {
      id: 'jasHvpR5isY4u5wx05dn',
      imageUrl: '../../../../assets/aula-10.png',
      alt: 'Aula 10 slide thumbnail',
      title: 'Aula 10: Tutoriais de tecnologia',
    },
  ];

  thumbnails = [
    {
      src: '../../../../assets/video-1.png',
      alt: 'Thumbnail origem da espécie',
      url: 'DPrJm6lOOGE&ab',
    },
    {
      src: '../../../../assets/video-2.png',
      alt: 'Thumbnail figuras de linguagem',
      url: 'xfjSzZf6JA4&ab',
    },
    {
      src: '../../../../assets/video-3.png',
      alt: 'Thumbnail saúde auditiva e visual',
      url: 'NPDMf5J99Ug&ab',
    },
    {
      src: '../../../../assets/video-4.png',
      alt: 'Thumbnail fluência da leitura',
      url: '0IlSseIvHsg&ab',
    },
    {
      src: '../../../../assets/video-5.png',
      alt: 'Thumbnail morfossintaxe',
      url: 'vE9D-fx7jJ8&ab',
    },
    {
      src: '../../../../assets/video-1.png',
      alt: 'Thumbnail origem da espécie',
      url: 'DPrJm6lOOGE&ab',
    },
    {
      src: '../../../../assets/video-2.png',
      alt: 'Thumbnail figuras de linguagem',
      url: 'xfjSzZf6JA4&ab',
    },
    {
      src: '../../../../assets/video-3.png',
      alt: 'Thumbnail saúde auditiva e visual',
      url: 'NPDMf5J99Ug&ab',
    },
    {
      src: '../../../../assets/video-4.png',
      alt: 'Thumbnail fluência da leitura',
      url: '0IlSseIvHsg&ab',
    },
    {
      src: '../../../../assets/video-5.png',
      alt: 'Thumbnail morfossintaxe',
      url: 'vE9D-fx7jJ8&ab',
    },
  ]

  constructor(private router: Router) { }

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
