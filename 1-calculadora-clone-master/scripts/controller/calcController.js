class CalcController {

    constructor(){
        // dentro do construtor ficam os atributos ( variaveis)
        this._locale = 'pt-br';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this.initButtonsvents();
        
        this._currentDate;
        this.initialize();

    }
    // fora do constructor ficam os metodos ( funcões )
    initialize(){

        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();

        }, 1000);
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale );
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale );

    }
E
    initButtonsvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            
            btn.addEventListener('click', e => {
                console.log(btn.className.baseVal.replace('btn-',''));
            });
        })
    }

    // get transmitem informações e set recuperam informações
    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }
    get displayTime(){
        return this._timeEl.innerHTML;
    }
    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(value){

        this._currentDate = value;

    }

}