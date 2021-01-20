import { IHttpRequest, IHttpResponse } from './ihttp'

export interface IController {
  handle: (httpRequest: IHttpRequest) => Promise<IHttpResponse>
}
