import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCalendarComponent } from './equipment-calendar.component';

describe('EquipmentCalendarComponent', () => {
  let component: EquipmentCalendarComponent;
  let fixture: ComponentFixture<EquipmentCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
