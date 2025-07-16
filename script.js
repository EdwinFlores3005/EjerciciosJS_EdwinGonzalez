/* EJERCICIO 1*/
const click = document.getElementById('ConfirmAgebtn')

click.addEventListener("click", ()=> {
const age = document.getElementById('age').value

 function Verify(num){
    const result = num >= 18 ? "Mayor de edad" : "Menor de edad";
    return result;
 }

document.getElementById('result-ej1').textContent = Verify(age)
 
})

/*EJERCICIO 2*/

const btnejer2 = document.getElementById('ej2btn')

btnejer2.addEventListener("click", () =>{
    const name = document.getElementById('name-ej2').value
    const idUni = document.getElementById('carnet-ej2').value
    var test = document.getElementById('test-ej2').value * 0.2
    var hwork = document.getElementById('hwork-ej2').value * 0.4
    var attndn = document.getElementById('attendance-ej2').value * 0.1
    var research = document.getElementById('research-ej2').value * 0.3

    var grade = test+ hwork + attndn + research

    document.getElementById('result-ej2').textContent = "El estudiante " + name + ". Con número de carnet " + idUni + " obtuvo como nota final " + grade.toFixed(1) + "."
})

/*EJERCICIO 3*/

const btnejer3 = document.getElementById('ej3btn')

btnejer3.addEventListener("click", ()=> {
    const name = document.getElementById('name-ej3').value
    const wage = document.getElementById('wage-ej3').value
    const category = document.querySelector('input[name = category]:checked').value

    function newWage(wage, cat){
        var newwage

        if(cat == "A"){
            newwage = wage * 1.15 
        }else if(cat == "B"){
            newwage = wage * 1.3
        }else if(cat == "C"){
            newwage = wage * 1.10
        }else if(cat == "D"){
            newwage = wage * 1.2
        }

        return newwage.toFixed(2)

    }

    const newSalary = newWage(wage, category)

    document.getElementById('result-ej3').textContent = "El empleado " + name + ". Con categoria " + category + " tendrá un salario de " + newSalary+ "."


})

/*EJERCICIO 4*/
const btnejer4 = document.getElementById('ej4btn')

btnejer4.addEventListener("click", () =>{
    var num1 = parseInt(document.getElementById('num1-ej4').value)
    var num2 = parseInt(document.getElementById('num2-ej4').value)

    

    function compare(num, numm){
        if(num > numm){
            return num
        }else if(numm > num){
            return numm
        }
    }

    var result = compare(num1, num2)

    document.getElementById('result-ej4').textContent = result
})


   
