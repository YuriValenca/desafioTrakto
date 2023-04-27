import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraktoEduPageComponent } from './trakto-edu-page.component';

describe('TraktoEduPageComponent', () => {
  let component: TraktoEduPageComponent;
  let fixture: ComponentFixture<TraktoEduPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraktoEduPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraktoEduPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
