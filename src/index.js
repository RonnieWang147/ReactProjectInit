var A = "5";
var b = 100;

var c = b + A;

function ugly(arg1, arg2) {
  if (arg1 === 'undefined') {
    arg1 = 'frog';
  } else {
    arg2 = 'raccoon';
  }

  return arg1 + arg2;
}
console.log(c);
