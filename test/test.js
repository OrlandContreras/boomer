const expect = require('chai').expect;
const boomer = require('..').default;

describe('#boomer', function () {
	
	it('Si la palabra termina con "ar", se le quitan esas dos letras', function () {
		const translation = boomer("Programar");
		expect(translation).to.equal("Program");
	})

	it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
		const translation1 = boomer("Zorro");
		const translation2 = boomer("Zarpar");

		expect(translation1).to.equal("Zorrope");
		expect(translation2).to.equal("Zarppe");
	})

	it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con guión al medio', function () {
		const translation = boomer("abecedario");
		expect(translation).to.equal("abece-dario");
	})

	it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function () {
		const translation = boomer("sometemos");
		expect(translation).to.equal("SoMeTeMoS");
	})
})