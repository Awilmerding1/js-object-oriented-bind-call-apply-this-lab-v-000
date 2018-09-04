function justInvoke(fn) {
 return fn()
}

function setThisWithCall(fn, thisValue, args) {
  fn()
  this.thisValue = thisValue
  this.args = args
}