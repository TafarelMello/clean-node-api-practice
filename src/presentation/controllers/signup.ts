import { IHttpResponse, IHttpRequest, IEmailValidator, IController } from './protocols'
import { badRequest, serverError } from './helpers/helper'
import { MissingParamError, InvalidParamError } from './errors'

export class SignUpController implements IController {
  private readonly emailValidator: IEmailValidator

  constructor (emailValidator: IEmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: IHttpRequest): IHttpResponse {
    try {
      const requireFields = ['name', 'email', 'password', 'passwordConfirmation']

      for (const field of requireFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { email, password, passwordConfirmation } = httpRequest.body

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      const isValidEmail = this.emailValidator.isValid(email)
      if (!isValidEmail) {
        return badRequest(new InvalidParamError('email'))
      }

      // criar a conta delegada por outra classe
    } catch (error) {
      // pegar o error depois pra criar um log
      return serverError()
    }
  }
}
