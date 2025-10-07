import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmgSideMenu } from './dmg-side-menu';

describe('DmgSideMenu', () => {
  let component: DmgSideMenu;
  let fixture: ComponentFixture<DmgSideMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DmgSideMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmgSideMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
