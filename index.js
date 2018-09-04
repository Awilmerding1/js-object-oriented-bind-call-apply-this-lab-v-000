function justInvoke(fn) {
 return fn()
}

function setThisWithCall(fn, thisValue, arg) {
 
  this.thisValue = thisValue
  
  return fn.call(thisValue)
}