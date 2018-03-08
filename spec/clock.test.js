var {Clock} = require('../clock.js')

describe("Clock", () => {
	let clock, callback

	beforeEach(() => {
		callback = function() { console.log('gorajski') }
		clock = new Clock(callback, 3)
	})
	it("has a duration", () => {
		expect(clock.duration).toBe(3)
	})
	it("has an onFinish callback", () => {
		expect(clock.onFinish).toBe(callback)
	})

	it("calls a callback after expiration", () => {
		let spyCallback = jasmine.createSpy("Clock.onFinish")
		jasmine.clock().install()

		let mockClock = new Clock(spyCallback, 3)
		mockClock.go()
		expect(mockClock.onFinish).not.toHaveBeenCalled()
		jasmine.clock().tick(3)
		expect(mockClock.onFinish).toHaveBeenCalled()

		jasmine.clock().uninstall()
	})

	it("does not call a callback when paused", () => {
		let spyCallback = jasmine.createSpy("Clock.onFinish")
		jasmine.clock().install()

		let mockClock = new Clock(spyCallback, 30)
		mockClock.go()
		expect(mockClock.onFinish).not.toHaveBeenCalled()
		jasmine.clock().tick(1)
		mockClock.pause()
		jasmine.clock().tick(2)
		expect(mockClock.onFinish).not.toHaveBeenCalled()
		// mockClock.go()
		// jasmine.clock().tick(1)
		// expect(mockClock.onFinish).toHaveBeenCalled()

		jasmine.clock().uninstall()
	})
})