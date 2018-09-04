function justInvoke(fn) {
 return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  fn()
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  fn()
  
}