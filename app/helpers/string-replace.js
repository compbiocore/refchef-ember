import { helper } from '@ember/component/helper';

export default helper(function stringReplace(params/*, hash*/) {
  const inputString = params[0]
  const remove = params[1]
  const add = params[2]
  return inputString.replace(remove, add)
});
