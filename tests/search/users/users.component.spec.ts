import { ComponentFixture, TestBed } from '@angular/core/testing';
import { usersMock } from '../../../src/app/mock/users';
import { UserComponent } from '../../../src/app/search/user/user.component';
import { UsersComponent } from '../../../src/app/search/users/users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersComponent, UserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
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

  it('should render users', () => {
    component.users = usersMock;
    fixture.detectChanges();
    expect(compiled).toMatchSnapshot();
  });
});
