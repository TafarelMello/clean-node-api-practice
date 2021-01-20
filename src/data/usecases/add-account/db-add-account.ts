import {
  Encrypter,
  IAccount,
  IAddAccountModel,
  IAddAccount,
  AddAccountRepository
} from './db-add-account-protocols'

export class DbAddAccount implements IAddAccount {
  private readonly encrypter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (
    encrypter: Encrypter,
    addAccountRepository: AddAccountRepository
  ) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add (accountData: IAddAccountModel): Promise<IAccount> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    await this.addAccountRepository.add(
      Object.assign({}, accountData, { password: hashedPassword })
    )
    return await new Promise((resolve) => resolve(null))
  }
}
