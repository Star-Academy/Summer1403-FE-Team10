import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleModeSwitchComponent } from './toggle-mode-switch.component';

describe('ToggleModeSwitchComponent', () => {
  let component: ToggleModeSwitchComponent;
  let fixture: ComponentFixture<ToggleModeSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleModeSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleModeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
