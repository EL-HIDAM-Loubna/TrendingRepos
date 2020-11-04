import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReposComponent } from './item-repos.component';

describe('ItemReposComponent', () => {
  let component: ItemReposComponent;
  let fixture: ComponentFixture<ItemReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
