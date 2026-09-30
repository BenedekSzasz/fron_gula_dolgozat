/*
* File: gula.component.ts
* Author: Szász Benedek
* Copyright: 2026, Szász Benedek
* Group: Szoft II N
* Date: 2026-09-30
* Github: https://github.com/benedekszasz7/
* Licenc: GNU GPL
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GulaComponent } from './gula.component';

describe('GulaComponent', () => {
  let component: GulaComponent;
  let fixture: ComponentFixture<GulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
