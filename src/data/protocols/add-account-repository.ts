import { IAccount } from '../../domain/models/iaccount'
import { IAddAccountModel } from '../../domain/usecases/iadd-account'

export interface AddAccountRepository {
  add: (accountData: IAddAccountModel) => Promise<IAccount>
}
