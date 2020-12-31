import { IHttpResponse, IHttpRequest } from './protocols/ihttp'
import { MissingParamError } from './errors/missing-param-error'
import { badRequest } from './helpers/helper'

export class SignUpController {
  handle (httpRequest: IHttpRequest): IHttpResponse {
    const requireFields = ['name', 'email', 'password']
    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
