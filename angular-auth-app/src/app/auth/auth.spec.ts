import { Auth } from './auth';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('Auth Component (Jest)', () => {
  let component: Auth;
  let mockAuthService: jest.Mocked<AuthService>;
  let mockRouter: jest.Mocked<Router>;

  beforeEach(() => {
    mockAuthService = {
      login: jest.fn(),
      logout: jest.fn(),
      getToken: jest.fn(),
      isLoggedIn: jest.fn(),
      token$: of(null)
    } as any;

    mockRouter = {
      navigate: jest.fn()
    } as any;

    component = new Auth(mockRouter, mockAuthService);
  });

  it('should call login and navigate to /home on success', () => {
    mockAuthService.login.mockReturnValue(of({ token: 'abc' }));

    component.email = 'test@mail.com';
    component.password = '123456';
    component.onLogin();

    expect(mockAuthService.login).toHaveBeenCalledWith('test@mail.com', '123456');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
    expect(component.error).toBe('');
  });

  it('should set error message on login failure', () => {
    mockAuthService.login.mockReturnValue(throwError(() => new Error('Unauthorized')));

    component.onLogin();

    expect(component.error).toBe('Invalid credentials');
  });
});
