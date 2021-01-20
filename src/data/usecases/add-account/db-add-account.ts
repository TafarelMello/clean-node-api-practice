import { IAccount } from '../../../domain/models/iaccount'
import { IAddAccount, IAddAccountModel } from '../../../domain/usecases/iadd-account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements IAddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: IAddAccountModel): Promise<IAccount> {
    await this.encrypter.encrypt(account.password)
    return await new Promise(resolve => resolve(null))
  }
}
