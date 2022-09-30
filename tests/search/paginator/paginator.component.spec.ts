import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PaginatorComponent } from '../../../src/app/search/paginator/paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
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

  it('should change page size', () => {
    const selects = compiled.querySelectorAll('select');
    const select = selects[0];
    select.value = '20';
    select.dispatchEvent(new Event('change'));
    const pageSize = +component.changeSizePageControl.value;
    expect(pageSize).toBe(20);
  });

  it('should backward/forward page', () => {
    const buttons = compiled.querySelectorAll('button');
    const prevBtn = buttons[0];
    const nextBtn = buttons[1];
    nextBtn.click();
    nextBtn.dispatchEvent(new Event('click'));
    expect(component.page).toBe(2);

    prevBtn.click();
    prevBtn.dispatchEvent(new Event('click'));
    expect(component.page).toBe(1);
  });
  
  it('should emit onChangePage', () => {
    jest.spyOn(component.onChangePage, 'emit');
    component.onNext();
    expect(component.onChangePage.emit).toHaveBeenCalledWith(2);

    component.onPrev();
    expect(component.onChangePage.emit).toHaveBeenCalledWith(1);
  });
});
