import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent {
  @Input() moduleTitle: string = '';
  @Input() moduleColor: string = '';
  @Input() moduleImage: string = '';
}
