import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringsecurityPrComponent } from './springsecurity-pr.component';

describe('SpringsecurityPrComponent', () => {
  let component: SpringsecurityPrComponent;
  let fixture: ComponentFixture<SpringsecurityPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringsecurityPrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringsecurityPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
