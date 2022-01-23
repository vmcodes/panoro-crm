//= Structures & Data
// Own
import { AccountType } from './AccountType';

export const AccountTypeValues = Object.values(AccountType).filter((x) => Number.isInteger(x));
