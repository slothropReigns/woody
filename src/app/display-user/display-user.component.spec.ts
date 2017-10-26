/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AuthService } from '../shared/auth.service';
import { AuthServiceStub } from '../shared/auth.service.stub';
import { DisplayUserComponent } from './display-user.component';

describe('DisplayUserComponent', () => {

  let component: DisplayUserComponent;
  let fixture: ComponentFixture<DisplayUserComponent>;

  beforeEach(async(() => {
    let authServiceStub = new AuthServiceStub(true);

    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ DisplayUserComponent ],
      providers: [
        { provide: AuthService, useValue: authServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display userinfo when logged in', () => {
    expect(component).toBeTruthy();
    let elements = fixture.debugElement.queryAll(By.css('.list-group-item'));
    expect(elements[ 0 ].nativeElement.textContent).toContain('Email: my-email');
    expect(elements[ 1 ].nativeElement.textContent).toContain('Display Name: my-display-name');
    expect(elements[ 2 ].nativeElement.textContent).toContain('Uid: my-uid');
    expect(elements[ 3 ].nativeElement.textContent).toContain('Provider Id: my-provider-id');
  });
});
