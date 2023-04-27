import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  private slides = [
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

  constructor() { }

  getSlides() {
    return this.slides;
  }

}
