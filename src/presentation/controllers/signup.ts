import { IHttpResponse, IHttpRequest } from './protocols/ihttp'
import { MissingParamError } from './errors/missing-param-error'
import { badRequest } from './helpers/helper'
import { IController } from './protocols/icontroller'

export class SignUpController implements IController {
  handle (httpRequest: IHttpRequest): IHttpResponse {
    const requireFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
