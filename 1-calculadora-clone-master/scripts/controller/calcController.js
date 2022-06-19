class CalcController {

    constructor(){
        // dentro do construtor ficam os atributos ( variaveis)
        this._oparation = []
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

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    clearAll(){

        this._oparation = [];

    }
    clearEntry(){

        this._oparation.pop();

    }
    addOperation(value){
        this._oparation.push(value);

        console.log(this._oparation);
    }
    setError(){
        
        this.displayCalc = "Error"
    }
    execBtn(value){

        switch(value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                
                break;
            case 'subtracao':
                
                break;
            case 'divisao':
                
                break;
            case 'multiplicacao':
                
                break;
            case 'porcento':
                
                break;
            case 'igual':
                
                break;
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':

                this.addOperation(parseInt(value));
                break
            default:
                this.setError();
                break;
            
        }
    }

    initButtonsvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            
            this.addEventListenerAll(btn ,'click drag ', e => {
                
                let textBtn = btn.className.baseVal.replace('btn-','');

                this.execBtn(textBtn);

            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
                btn.style.cursor='pointer';
            })
        });
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