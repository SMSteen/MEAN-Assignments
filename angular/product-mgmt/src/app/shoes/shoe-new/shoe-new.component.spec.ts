import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeNewComponent } from './shoe-new.component';

describe('ShoeNewComponent', () => {
  let component: ShoeNewComponent;
  let fixture: ComponentFixture<ShoeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
