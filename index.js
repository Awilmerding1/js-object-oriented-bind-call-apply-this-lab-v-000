function justInvoke(fn) {
 return fn()
}

function setThisWithCall(fn, thisValue, arg) {
  fn(arg)
  
  this.thisValue = thisValue
  
  return fn.call(thisValue)
}