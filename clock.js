let Clock = function(onFinish, duration) {
	this.onFinish = onFinish
	this.duration = duration
	this.timeoutId = null
	this.startedAt = null
}

Clock.prototype.go = function() {
	this.startedAt = new Date()
	this.timeoutId = setTimeout(this.onFinish, this.duration)
}

Clock.prototype.pause = function() {
	this.timeoutId && clearTimeout(this.timeoutId)
	this.duration = new Date() - this.startedAt
	this.timeoutId = null
}



module.exports = {
	Clock: Clock
}