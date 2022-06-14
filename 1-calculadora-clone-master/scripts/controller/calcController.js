    // variavel dentro de class, são chamadas de ATRIBUTOS
     //function dentro de class,são chamadas de MÉTODOS
     //sempre que precisar chamar uma class, precisa ser feito um OBJ, que essa ação é chamada de INSTANCIA

     // this. é utilizado para chamar os atributos em qualquer lugar da class. 

     ////teste teste

class CalcController {

    constructor(){
        this._displayCalc = '0';
        this._currentDate;
        this.initialize()
    }

    initialize(){
        
        let displayCalcEl = document.querySelector('#display');
        let dateEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');

        displayCalcEl.innerHTML = "3456";
        dateEl.innerHTML = "08/06/2022";
        timeEl.innerHTML = "15:25";
    }

    get displayCalc (){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate (){
        return this.currentDate;
    }

    set currentDate(valor){
        this.currentDate = valor;
    }

}