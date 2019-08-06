const CharacterCond = /((any )?(character)(s)?( except)?( between)?( [a-zA-Z])+((-)|( through )|( to )|( and )){1}[a-zA-Z]){1}/;
const CharacterSimp = /((any )?((uppercase )?|(lowercase )?)(character)(s)?){1}/;

const DigitCond = /((any )?((digit)|(number))(s)?( except)?( between)?( [0-9])(0)*((-)|( through )|( to )|( and )){1}([0-9])(0)*){1}/;
const DigitSimp = /(any ((digit)|(number))(s)?){1}/;

const AtCond = /( at )((start)|(end))( of )((line)|(string))/;

export default class Regeng {
	plain: string;
	re: RegExp;

	constructor(phrase: string) {
		this.new(phrase);
	}

	public new(phrase: string): RegExp {
		this.plain = phrase;

		let pattern: string = this._expression();

		this.re = new RegExp(pattern);
		return this.re;
	}

	private _expression(): string {
		const phrase = this.plain;
		let pattern = "";
		switch (true) {
			case CharacterCond.test(phrase):
				pattern = this._characterCond();
				break;

			case CharacterSimp.test(phrase):
				pattern = this._characterSimp();
				break;

			case DigitCond.test(phrase):
				console.log("this is true");
				break;

			case DigitSimp.test(phrase):
				console.log("this is true");
				break;

			default:
				break;
		}

		return pattern;
	}

	private _characterCond(): string {
		const phrase = this.plain.replace(/( through )|( to )/, "-");
		const except = /(except)/.test(phrase) ? "^" : "";
		const multiples = /(character)(s)/.test(phrase) ? "+" : "";
    let characters = "";
    
    if (/[a-z]-[a-z]/.test(phrase)) {
      characters = phrase.match(/[a-z]-[a-z]/)[0];
    } else if (/(between )([a-z] )+(and )([a-z])/.test(phrase)) {
      characters = phrase.replace(/( and )/, '-').match(/[a-z]-[a-z]/)[0];
    } else if (/( ([a-z] )+(and )([a-z]))/.test(phrase)) {
      characters = phrase.match(/( ([a-z] )+(and )([a-z]))/)[0].replace(/( )|(and)/g, '');
    }

		return `${except}[${characters}]${multiples}`;
	}

	private _characterSimp(): string {
		const phrase = this.plain;
		const multiples = /(character)(s)/.test(phrase) ? "+" : "";
		let characters = "A-Za-z";

		if (/(uppercase)/.test(phrase)) {
			characters = "A-Z";
		} else if (/(lowercase)/.test(phrase)) {
			characters = "a-z";
		}

		return `[${characters}]${multiples}`;
	}
}
