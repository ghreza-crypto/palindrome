module.exports = function (str) {
  let replaced = str.replace( /([^\w]+|\s+)/g, '').toLowerCase();
  let noSpace = replaced.replace('_', '')
  let split = noSpace.split("");
  let backwards = split.reverse();
  let joined = backwards.join('');
  if (joined === noSpace){
    return true
  } else { return false}
}