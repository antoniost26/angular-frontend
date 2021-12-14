import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityGeneratorModalComponent } from './entity-generator-modal.component';

describe('EntityGeneratorModalComponent', () => {
  let component: EntityGeneratorModalComponent<any>;
  let fixture: ComponentFixture<EntityGeneratorModalComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityGeneratorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityGeneratorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
