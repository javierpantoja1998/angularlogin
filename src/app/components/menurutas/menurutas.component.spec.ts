import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenurutasComponent } from './menurutas.component';

describe('MenurutasComponent', () => {
  let component: MenurutasComponent;
  let fixture: ComponentFixture<MenurutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenurutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenurutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
