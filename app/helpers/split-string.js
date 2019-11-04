import { helper } from '@ember/component/helper';

export default helper(function splitString(params/*, hash*/) {
  const inputString = params[1]
  const separator = params[0]
  const stringArray = inputString.split(separator);
  return stringArray;
});
