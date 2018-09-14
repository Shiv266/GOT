import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterviewComponent } from './characterview.component';

describe('CharacterviewComponent', () => {
  let component: CharacterviewComponent;
  let fixture: ComponentFixture<CharacterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
