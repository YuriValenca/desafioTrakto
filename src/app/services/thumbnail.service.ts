import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThumbnailsService {

  private thumbnails = [
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

  constructor() { }

  getThumbnails() {
    return this.thumbnails;
  }

}
