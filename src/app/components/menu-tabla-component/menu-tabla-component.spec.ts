import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuTablaComponent } from './menu-tabla-component';

describe('MenuTablaComponent', () => {
  let component: MenuTablaComponent;
  let fixture: ComponentFixture<MenuTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuTablaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTablaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
