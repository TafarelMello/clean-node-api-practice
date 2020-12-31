import { IHttpResponse } from '../protocols/ihttp'

export const badRequest = (error: Error): IHttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}
