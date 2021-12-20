//= Structures & Data
// Own
import { BusinessActivity } from "./BusinessActivity";

export const BusinessActivityValues =  Object.values(BusinessActivity).filter(x => Number.isInteger(x));

