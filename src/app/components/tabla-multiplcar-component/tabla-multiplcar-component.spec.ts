import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplcarComponent } from './tabla-multiplcar-component';

describe('TablaMultiplcarComponent', () => {
  let component: TablaMultiplcarComponent;
  let fixture: ComponentFixture<TablaMultiplcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplcarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplcarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
