const num = 5;

var intToRoman = function(num) {
    const roman = "";
    
    if(num<5){
        
    }else if(num<10){

    }else if(num<50){

    }else if(num<100){

    }else if(num<500){

    }else if(num<1000){

    }else{
        if(num == 1){
            roman = "I"
        }else if(num == 5){
            roman = "V"
        }else if(num == 10){
            roman = "X"
        }else if(num == 50){
            roman = "L"
        }else if(num == 100){
            roman = "L"
        }else if(num == 500){
            roman = "D"
        }else if(num == 1000){
            roman = "M"
        }
    }
    console.log(roman)
};

intToRoman(num)