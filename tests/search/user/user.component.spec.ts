import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from '../../../src/app/search/user/user.component';
import { usersMock } from '../../../src/app/mock/users';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserComponent);
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

  it('should render user', () => {
    component.user = usersMock[0];
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  });

  it('should open user on _blank', () => {
    component.user = usersMock[0];
    fixture.detectChanges();
    const a = compiled.querySelector('a');
    expect(a?.target).toBe('_blank');
  });
});
