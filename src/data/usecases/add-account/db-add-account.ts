import { Encrypter, IAccount, IAddAccountModel, IAddAccount } from './db-add-account-protocols'

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
