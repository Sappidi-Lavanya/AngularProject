import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertorsComponent } from './opertors.component';

describe('OpertorsComponent', () => {
  let component: OpertorsComponent;
  let fixture: ComponentFixture<OpertorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpertorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpertorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
