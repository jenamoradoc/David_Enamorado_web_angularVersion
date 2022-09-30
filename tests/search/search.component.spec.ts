import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchComponent } from '../../src/app/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginatorComponent } from '../../src/app/search/paginator/paginator.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent, PaginatorComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should search users on submit', () => {
    component.onSubmit();
    expect(component.showSplash).toBeFalsy();
  });
});
