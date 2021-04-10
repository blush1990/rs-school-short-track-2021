/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = email.split('@');
  const res = [];
  res.push(arr[arr.length - 1]);
  return res.join('');
}
// console.log(getEmailDomain('prettyandsimple@example.com'));
module.exports = getEmailDomain;
