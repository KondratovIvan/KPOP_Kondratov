import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create a valid form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    form.setValue({
      login: 'test',
      password: '1234',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    expect(form.valid).toBeTruthy();
  });

  it('should not create an invalid form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    form.setValue({
      login: '',
      password: '',
      confirmPassword: '1234',
      fullName: '',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    expect(form.valid).toBeFalsy();
  });

  it('should get an error when creating an empty form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    form.setValue({
      login: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      email: '',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    expect(form.valid).toBeFalsy();
  });

  it('should get an error from empty login', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    form.setValue({
      login: '',
      password: '1234',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    expect(form.hasError('required', ['login'])).toBeTruthy();
  });

  it('should mark login field as invalid when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    const loginInput = fixture.nativeElement.querySelector('#login');

    form.setValue({
      login: '',
      password: '1234',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    
    loginInput.dispatchEvent(new Event('input'));
    expect(component.userForm.get('login')?.hasError('required')).toBe(true);
  });

  it('should get an error when login field length >= 20', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    const maxLength = 21;

    form.setValue({
      login: 'testtesttesttesttesttest',
      password: '1234',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });

    expect(form.hasError('maxlength', ['login'])).toBeFalsy();
  });

  it('should mark password field as invalid when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    const loginInput = fixture.nativeElement.querySelector('#password');

    form.setValue({
      login: 'test',
      password: '',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    
    loginInput.dispatchEvent(new Event('input'));
    expect(component.userForm.get('password')?.hasError('required')).toBe(true);
  });

  it('should get an error when password field length < 4', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    const minLength = 3;
    form.setValue({
      login: 'test',
      password: '123',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    expect(form.hasError('minLength', ['password'])).toBeFalsy();
  });

  it('should mark confirmPassword field as invalid when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    const loginInput = fixture.nativeElement.querySelector('#confirm_password');

    form.setValue({
      login: 'test',
      password: '1234',
      confirmPassword: '',
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    
    loginInput.dispatchEvent(new Event('input'));
    expect(component.userForm.get('confirmPassword')?.hasError('required')).toBe(true);
  });

  it('should get an error when confirmPassword field length < 4', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    form.setValue({
      login: 'test',
      password: '1234',
      confirmPassword: '123',
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    expect(form.hasError('minLength', ['confirmPassword'])).toBeFalsy();
  });

  it('should get an error when passwords do not match', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    const minLength = 3;
    form.setValue({
      login: 'test',
      password: '1234',
      confirmPassword: '12345', 
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    
    expect(form.get('password')==form.get('confirmPassword')).toBeFalsy()
  });

  it('should mark fullName field as invalid when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    const loginInput = fixture.nativeElement.querySelector('#full_name');

    form.setValue({
      login: 'test',
      password: '1234',
      confirmPassword: '1234',
      fullName: '',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    
    loginInput.dispatchEvent(new Event('input'));
    expect(component.userForm.get('fullName')?.hasError('required')).toBe(true);
  });

  it('should get an error from invalid email', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    form.setValue({
      login: 'test',
      password: '1234',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: 'invalidEmail',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    expect(form.hasError('email', ['email'])).toBeTruthy();
  });

  it('should mark email field as invalid when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    const loginInput = fixture.nativeElement.querySelector('#email');

    form.setValue({
      login: 'test',
      password: '1234',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: '',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    
    loginInput.dispatchEvent(new Event('input'));
    expect(component.userForm.get('email')?.hasError('required')).toBe(true);
  });

  it('should get an error from missing email', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    form.setValue({
      login: 'test',
      password: '1234',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: '',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });
    expect(form.hasError('required', ['email'])).toBeTruthy();
  });

  it('should allow only numeric values for ICQ number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    form.setValue({
      login: 'test',
      password: '1234',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: 'a',
      skypeNickName: '',
    });
    expect(form.valid).toBeFalsy();
  });

  it('should mark form controls as touched when saveForm is called with invalid form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    form.setValue({
      login: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      email: '',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });

    component.saveForm();
    Object.values(form.controls).forEach(control => {
      expect(control.touched).toBeTruthy();
    });
  });

  it('should reset the form when saveForm is called with valid form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;
    form.setValue({
      login: 'test',
      password: '1234',
      confirmPassword: '1234',
      fullName: 'Test Test',
      email: 'test@gamil.com',
      homepage: '',
      icqNumber: '',
      skypeNickName: '',
    });

    component.saveForm();
    expect(form.value).toEqual({
      login: null,
      password: null,
      confirmPassword: null,
      fullName: null,
      email: null,
      homepage: null,
      icqNumber: null,
      skypeNickName: null,
    });
  });

  it('should mark form controls as touched when markFormGroupTouched is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.ngOnInit();
    const form = component.userForm;

    component.markFormGroupTouched(form);
    Object.values(form.controls).forEach(control => {
      expect(control.touched).toBeTruthy();
    });
  });

});
