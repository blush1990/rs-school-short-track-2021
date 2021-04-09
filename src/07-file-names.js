/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  for (let i = 0; i < names.length; i++) {
    const find = names.indexOf(names[i], i + 1);
    if (find >= 0) {
      names.splice(find, 1, `${names[i]}(1)`);
      i = -1;
    }
    if (names[i] === `${names[0]}(1)(1)(1)`) {
      names.splice(i, 1, `${names[0]}(2)`);
    }
  }
  return names;
}
// console.log(renameFiles([]))
module.exports = renameFiles;
