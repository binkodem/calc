const buttons = document.querySelectorAll('button')

const numbers = ["0","1","2","3","4","5","6","7","8","9"]

let firstNumber = 0
let operator = 0
let secondNumber = 0


buttons.forEach(button =>{
    button.addEventListener('click', x =>{
        v=x.target.value
        let display = document.querySelector('.display')
        console.log(firstNumber)
        
        if(firstNumber==0){
            if(display.textContent.length>7){
                //pass
            }
            else{
                if (numbers.includes(v)===true){
                    if(display.textContent=="0"){
                        display.innerHTML=""
                        display.innerHTML+=v
                    }
                    else{
                        display.innerHTML+=v
                    }
                }
                else if(v=="AC"){
                    firstNumber=0
                    secondNumber=0
                    operator=0
                    display.innerHTML=0
                }
                else if(v=="C" && display.textContent!=0){
                    dis=display.textContent
                    dis=dis.slice(0, -1)
                    display.innerHTML=dis
                }
                else if(v=="+"){
                    operator = v
                    firstNumber = parseInt(display.textContent)
                    console.log(firstNumber, v)
                    display.innerHTML=0
                }
                else if(v=="/"){
                    operator = v
                    firstNumber = parseInt(display.textContent)
                    console.log(firstNumber, v)
                    display.innerHTML=0
                }
                else if(v=="x"){
                    operator = v
                    firstNumber = parseInt(display.textContent)
                    console.log(firstNumber, v)
                    display.innerHTML=0
                }
                else if(v=="-"){
                    operator = v
                    firstNumber = parseInt(display.textContent)
                    console.log(firstNumber, v)
                    display.innerHTML=0
                }
                else if(v=='.'){
                    display.innerHTML+=v
                }
            }
        }
        else{
            if(display.textContent.length>7){
                //pass
            }
            else if (numbers.includes(v)===true){
                if(display.textContent==0){
                    display.innerHTML=""
                    display.innerHTML+=v
                }
                else{
                    display.innerHTML+=v
                }
            }
            else if(v=="AC"){
                firstNumber=0
                secondNumber=0
                operator=0
                display.innerHTML=0
            }
            else if(v=="C" && display.textContent!=0){
                dis=display.textContent
                dis=dis.slice(0, -1)
                display.innerHTML=dis
            }
            else if(v=="+"){
                operator = v
                console.log(firstNumber, v)
                display.innerHTML=0
            }
            else if(v=="/"){
                operator = v
                console.log(firstNumber, v)
                display.innerHTML=0
            }
            else if(v=="x"){
                operator = v
                console.log(firstNumber, v)
                display.innerHTML=0
            }
            else if(v=="-"){
                operator = v
                console.log(firstNumber, v)
                display.innerHTML=0
            }
            else if(v=="="){
                secondNumber=parseInt(display.textContent)
                if(operator=="+"){
                    let display = document.querySelector('.display')
                    display.innerHTML=""
                    x=firstNumber+secondNumber   
                    display.textContent=x
                    firstNumber=x     
                    operator=0   
                    console.log(firstNumber)    
                    secondNumber=0
                }
                if(operator=="-"){
                    let display = document.querySelector('.display')
                    display.innerHTML=""
                    x=firstNumber-secondNumber   
                    display.textContent=x
                    firstNumber=x     
                    operator=0   
                    console.log(firstNumber)    
                    secondNumber=0
                }
                if(operator=="x"){
                    let display = document.querySelector('.display')
                    display.innerHTML=""
                    x=firstNumber*secondNumber   
                    display.textContent=x
                    firstNumber=x     
                    operator=0   
                    console.log(firstNumber)    
                    secondNumber=0
                }
                if(operator=="/"){
                    let display = document.querySelector('.display')
                    display.innerHTML=""
                    x=Math.round(firstNumber/secondNumber*100)/100
                    display.textContent=x
                    firstNumber=x     
                    operator=0   
                    console.log(firstNumber)    
                    secondNumber=0
                }
                
            }
            
        }
        
        
    })
    }
)
