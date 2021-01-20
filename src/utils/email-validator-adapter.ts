import { IEmailValidator } from '../presentation/protocols/iemail-validator'

export class EmailValidatorAdapter implements IEmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
