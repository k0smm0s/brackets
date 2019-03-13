/**
 * Merge open and close brackets
 * @param {Array} bracketsConfig Array of brackets open and close
 * @returns {Array} arrBracketsStr Array of string open + close
 */
function formBracketsArr(bracketsConfig){
  var arrBracketsStr = [];
  var bracketsStr = "";
  for (var i=0; i < bracketsConfig.length; i++){
    bracketsStr = "";
    for (var j=0; j < bracketsConfig[i].length; j++){
      bracketsStr += bracketsConfig[i][j];
    }
    arrBracketsStr.push(bracketsStr);
  }
  return arrBracketsStr;
}

/**
 * Main function use str.replace for delete correctly brackets
 */
module.exports = function check(str, bracketsConfig) {
  // your solution
  var bracketsArr = formBracketsArr(bracketsConfig);
  while(str != ""){
    strOld = str;
    for (var i=0; i<bracketsArr.length; i++){
      str = str.replace(bracketsArr[i],"");
    }
    if (strOld == str)
      return false;
  }
  return true;

}
