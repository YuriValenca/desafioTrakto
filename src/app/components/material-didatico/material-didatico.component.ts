import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../../services/slide.service';

@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.scss']
})
export class MaterialDidaticoComponent implements OnInit {
  slides: { id: string, imageUrl: string, alt: string, title: string }[] = [];

  constructor(private slidesService: SlidesService) {
    this.slides = this.slidesService.getSlides();
  }

  goToDocument(documentId: string) {
    window.open(`https://editor.trakto.io/presentation/p/${documentId}`, '_blank');
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
