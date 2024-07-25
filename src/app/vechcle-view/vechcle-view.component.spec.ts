import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechcleViewComponent } from './vechcle-view.component';

describe('VechcleViewComponent', () => {
  let component: VechcleViewComponent;
  let fixture: ComponentFixture<VechcleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VechcleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VechcleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
