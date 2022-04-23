import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryRemoveComponent } from './entry-remove.component';

describe('EntryRemoveComponent', () => {
  let component: EntryRemoveComponent;
  let fixture: ComponentFixture<EntryRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
