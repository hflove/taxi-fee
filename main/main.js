"use strict";

function main(inputs) {
    let price = allPrice(waitPrice(cacuBase(format_userInput(inputs))));
    let result = "应付车费：" + price + "元";
    return result;
};

/*将用户输入规整化*/
function format_userInput(input){
    let formated_userinput = [];
    formated_userinput.push({distance:input[0],waitTime:input[1]});
    // console.log(formated_userinput[0]);
    return formated_userinput;
}

//计算底价
function cacuBase(formated_userinput){
    let basePrice = 0;
    // console.log(formated_userinput[0].distance);
    if(formated_userinput[0].distance < 2)
        basePrice = 6;
    else if(formated_userinput[0].distance>2 && formated_userinput[0].distance<8)
        basePrice = 6 + 0.8 * (formated_userinput[0].distance - 2);
    else
        basePrice = 10.8 + 1.2 * (formated_userinput[0].distance - 8);
    // console.log(basePrice);
    formated_userinput[0].basePrice = basePrice;
    // console.log(formated_userinput);
    return formated_userinput;
}

function waitPrice(formated_userinput){
    let waitPrice = formated_userinput[0].waitTime * 0.25;
    formated_userinput[0].waitPrice = waitPrice;
    console.log(formated_userinput);
    return formated_userinput;
}

//四舍五入
function allPrice(formated_userinput){
    let allPrice = Math.round((formated_userinput[0].basePrice + formated_userinput[0].waitPrice));
    return allPrice;
}

module.exports=main;