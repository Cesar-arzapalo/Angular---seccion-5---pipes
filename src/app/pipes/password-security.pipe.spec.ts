import { PasswordSecurityPipe } from './password-security.pipe';

describe('PasswordSecurityPipe', () => {
  it('create an instance', () => {
    const pipe = new PasswordSecurityPipe();
    expect(pipe).toBeTruthy();
  });
});
