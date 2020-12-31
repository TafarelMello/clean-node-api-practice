import { IHttpResponse, IHttpRequest } from './protocols/ihttp'
import { MissingParamError } from './errors/missing-param-error'
import { badRequest } from './helpers/helper'

export class SignUpController {
  handle (httpRequest: IHttpRequest): IHttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError('email'))
    }
  }
}
