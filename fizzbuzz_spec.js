var should = chai.should()

describe('Test fizzBuzz function', function (){
	// [case 1] input: 9, expect output : Fizz
	it('should return Fizz when input is divisible by 3', function() {
		let input = 9
		let output = 'Fizz'
		let result = fizzBuzz(input)
		result.should.be.equal(output)
	})
	// [case 2] input: 10, expect output : Buzz
	it('should return Buzz when input is divisible by 5', function() {
		let input = 10
		let output = 'Buzz'
		let result = fizzBuzz(input)
		result.should.be.equal(output)
	})
	// [case 3] input: 15, expect output : FizzBuzz
	it('should return FizzBuzz when input is divisible by 3 and 5', function() {
		let input = 15
		let output = 'FizzBuzz'
		let result = fizzBuzz(input)
		result.should.be.equal(output)
	})
	// [case 4] input: 7, expect output : 7
	it('should return input when input is not divisible by 3 or 5', function() {
		let input = 7
		let output = 7
		let result = fizzBuzz(input)
		result.should.be.equal(output)
	})
})



