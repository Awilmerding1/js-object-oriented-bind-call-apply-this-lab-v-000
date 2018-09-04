function justInvoke(fn) {
 return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  fn(arg)
  this.thisValue = thisValue
  this.arg = arg
  
  return fn.call(thisValue)
}