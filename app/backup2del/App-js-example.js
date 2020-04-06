import '../../assets/styles/styles.css'
import Person from './modules/Person'

if(module.hot) {
    module.hot.accept();
}
//alert("Hello, this is just a test - - - -")

/* Lesson example code below this line */

/*
console.log("Hello, my name is John-Doe and my favorite color is blue.");
console.log("Hello, my name is Jane-Smith and my favorite color is green.");

function person(name, favColor) {
    console.log("Hello, my name is " + name + " and my favorite color is " + favColor + ".");
}

person("Avraham", "lightBlue");
person("Moshe", "coolWhite");
*/
/*========================================================================*/
class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes zero tax.");
    }
}

let John = new Person("John_$$_Doe", "purple");
    John.greet();

let Jane = new Adult("Jane % Smith", "Green");
    Jane.payTaxes();
    Jane.greet();