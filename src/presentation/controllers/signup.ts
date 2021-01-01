import { IHttpResponse, IHttpRequest } from './protocols/ihttp'
import { MissingParamError } from './errors/missing-param-error'
import { badRequest } from './helpers/helper'
import { IController } from './protocols/icontroller'
import { IEmailValidator } from './protocols/iemail-validator'
import { InvalidParamError } from './errors/invalid-param-error'

export class SignUpController implements IController {
  private readonly emailValidator: IEmailValidator

  constructor (emailValidator: IEmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: IHttpRequest): IHttpResponse {
    const requireFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    const isValidEmail = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValidEmail) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
