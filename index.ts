const CHARACTER_COND = /((any )?(character)(s)?( except)?( between)?( [a-zA-Z])+((-)|( through )|( to )|( and )){1}[a-zA-Z]){1}/g
const CHARACTER_SIMP = /((any )?((uppercase )?|(lowercase )?)(character)(s)?){1}/g

const DIGIT_COND = /((any )?((digit)|(number))(s)?( except)?( between)?( [0-9])(0)*((-)|( through )|( to )|( and )){1}([0-9])(0)*){1}/g
const DIGIT_SIMP = /(any ((digit)|(number))(s)?){1}/g

const AT_COND = /( at )((start)|(end))( of )((line)|(string))/g

class Regeng {
  plain: string;
  re: RegExp;

  constructor(phrase: string) {
    this.plain = phrase;

    let pattern: string = this.expression(phrase);

    this.re = new RegExp(pattern);
  }

  public expression(phrase: string): string {
    let pattern = ''
    switch (true) {
      case CHARACTER_COND.test(phrase):
        console.log('this is true')
        break;
        
      case CHARACTER_SIMP.test(phrase):
        pattern = this.character_simp(phrase)
        break;

      case DIGIT_COND.test(phrase):
        console.log('this is true')
        break;

      case DIGIT_SIMP.test(phrase):
        console.log('this is true')
        break;
    
      default:
        break;
    }

    return pattern;
  }

  private character_simp(phrase: string): string {
    let character_mod = 'A-Za-z'
    const multiples = /(character)(s)/.test(phrase) ? '+' : ''
    
    if (/(uppercase)/.test(phrase)){
      character_mod = 'A-Z'
    } else if (/(lowercase)/.test(phrase)){
      character_mod = 'a-z'
    }
    
    return `[${character_mod}]${multiples}`
  }

}

const regeng = new Regeng('any character');
console.log(regeng.plain)
console.log(regeng.re)