import Regeng from "../index";

test("Regeng initialization", () => {
	const regeng = new Regeng("any characters");
	expect(regeng.plain).toBe("any characters");
	expect(regeng.re).toStrictEqual(/[A-Za-z]+/);
});

test("using regeng.new", () => {
	const regeng = new Regeng("any characters");
	expect(regeng.plain).toBe("any characters");
	expect(regeng.re).toStrictEqual(/[A-Za-z]+/);

	regeng.new("any lowercase characters");
	expect(regeng.plain).toBe("any lowercase characters");
	expect(regeng.re).toStrictEqual(/[a-z]+/);
});

test("simple characters", () => {
	let regeng = new Regeng("any character");
	expect(regeng.plain).toBe("any character");
	expect(regeng.re).toStrictEqual(/[A-Za-z]/);

	regeng = new Regeng("any characters");
	expect(regeng.plain).toBe("any characters");
	expect(regeng.re).toStrictEqual(/[A-Za-z]+/);

	regeng = new Regeng("any uppercase character");
	expect(regeng.plain).toBe("any uppercase character");
	expect(regeng.re).toStrictEqual(/[A-Z]/);

	regeng = new Regeng("any uppercase characters");
	expect(regeng.plain).toBe("any uppercase characters");
	expect(regeng.re).toStrictEqual(/[A-Z]+/);

	regeng = new Regeng("any lowercase character");
	expect(regeng.plain).toBe("any lowercase character");
	expect(regeng.re).toStrictEqual(/[a-z]/);

	regeng = new Regeng("any lowercase characters");
	expect(regeng.plain).toBe("any lowercase characters");
	expect(regeng.re).toStrictEqual(/[a-z]+/);
});

test("conditional characters", () => {
	let regeng = new Regeng("any character e-z");
	expect(regeng.plain).toBe("any character e-z");
	expect(regeng.re).toStrictEqual(/[E-Ze-z]/);

	regeng = new Regeng("any characters e-z");
	expect(regeng.plain).toBe("any characters e-z");
	expect(regeng.re).toStrictEqual(/[E-Ze-z]+/);

	regeng = new Regeng("any uppercase character e-z");
	expect(regeng.plain).toBe("any uppercase character e-z");
	expect(regeng.re).toStrictEqual(/[E-Z]/);

	regeng = new Regeng("any uppercase characters e-z");
	expect(regeng.plain).toBe("any uppercase characters e-z");
	expect(regeng.re).toStrictEqual(/[E-Z]+/);

	regeng = new Regeng("any lowercase character e-z");
	expect(regeng.plain).toBe("any lowercase character e-z");
	expect(regeng.re).toStrictEqual(/[e-z]/);

	regeng = new Regeng("any lowercase characters e-z");
	expect(regeng.plain).toBe("any lowercase characters e-z");
	expect(regeng.re).toStrictEqual(/[e-z]+/);

	regeng = new Regeng("any character e through z");
	expect(regeng.plain).toBe("any character e through z");
	expect(regeng.re).toStrictEqual(/[E-Ze-z]/);

	regeng = new Regeng("any characters e through z");
	expect(regeng.plain).toBe("any characters e through z");
	expect(regeng.re).toStrictEqual(/[E-Ze-z]+/);

	regeng = new Regeng("any uppercase character e through z");
	expect(regeng.plain).toBe("any uppercase character e through z");
	expect(regeng.re).toStrictEqual(/[E-Z]/);

	regeng = new Regeng("any uppercase characters e through z");
	expect(regeng.plain).toBe("any uppercase characters e through z");
	expect(regeng.re).toStrictEqual(/[E-Z]+/);

	regeng = new Regeng("any lowercase character e through z");
	expect(regeng.plain).toBe("any lowercase character e through z");
	expect(regeng.re).toStrictEqual(/[e-z]/);

	regeng = new Regeng("any lowercase characters e through z");
	expect(regeng.plain).toBe("any lowercase characters e through z");
	expect(regeng.re).toStrictEqual(/[e-z]+/);

	regeng = new Regeng("any character between e and z");
	expect(regeng.plain).toBe("any character between e and z");
	expect(regeng.re).toStrictEqual(/[E-Ze-z]/);

	regeng = new Regeng("any characters between e and z");
	expect(regeng.plain).toBe("any characters between e and z");
	expect(regeng.re).toStrictEqual(/[E-Ze-z]+/);

	regeng = new Regeng("any uppercase character between e and z");
	expect(regeng.plain).toBe("any uppercase character between e and z");
	expect(regeng.re).toStrictEqual(/[E-Z]/);

	regeng = new Regeng("any uppercase characters between e and z");
	expect(regeng.plain).toBe("any uppercase characters between e and z");
	expect(regeng.re).toStrictEqual(/[E-Z]+/);

	regeng = new Regeng("any lowercase character between e and z");
	expect(regeng.plain).toBe("any lowercase character between e and z");
	expect(regeng.re).toStrictEqual(/[e-z]/);

	regeng = new Regeng("any lowercase characters between e and z");
	expect(regeng.plain).toBe("any lowercase characters between e and z");
	expect(regeng.re).toStrictEqual(/[e-z]+/);
});

test("simple digits", () => {
	let regeng = new Regeng("any number");
	expect(regeng.plain).toBe("any number");
	expect(regeng.re).toStrictEqual(/[\d]+/);

	regeng = new Regeng("any numbers");
	expect(regeng.plain).toBe("any numbers");
	expect(regeng.re).toStrictEqual(/[\d]+/);
});
