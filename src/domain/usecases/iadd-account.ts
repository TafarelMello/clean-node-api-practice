import { IAccount } from '../models/iaccount'

// ver essa inteface se é msm necessaria
export interface IAddAccountModel {
  name: string
  email: string
  password: string
}

export interface IAddAccount {
  add: (account: IAddAccountModel) => Promise<IAccount>
}
