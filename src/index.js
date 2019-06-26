function test(a, b) {
  console.log(a);
  const c = 123;
  console.log(c);
  function a() {}
  console.log(b);
  var b = function c() {};

  console.log(b);
}

test(1, 2);
