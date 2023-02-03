module.exports = function (str) {
   str = str.replace(/\W/g, "");
  let str2=str.split("").reverse().join();
  if(str===str2){
    return true;
  }else{
    return false;
  }
}
