function justInvoke(fn) {
 return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  fn(thisValue, arg)
  return fn.call(arg)
}