import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent {
  @Input() moduleTitle: string = '';
  @Input() moduleColor: string = '';
  @Input() moduleImage: string = '';
  @Output() moduleClick = new EventEmitter<void>();

  onClick() {
    this.moduleClick.emit();
  }

}
