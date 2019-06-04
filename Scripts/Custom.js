//Hide the div math div
$("#divCodeMath").hide();

$("#divCodeFactorial").hide();

$("#divCodeFizzBuzz").hide();

$("#divCodePal").hide();

$("#btnCodeMath").click(function () {
    $("#divCodeMath").toggle();
    
});

$("#btnCodeFactorial").click(function () {
    $("#divCodeFactorial").toggle();

});

$("#btnCodeFizzBuzz").click(function () {
    $("#divCodeFizzBuzz").toggle();

});

$("#btnCodePal").click(function () {
    $("#divCodePal").toggle();

});


// FizzBuzz Script

$("#btnClear2").click(function () {
    $("#num1").val("");
    $("#num2").val("");
    $("#output2").text("");
});

$("#btnStart").click(function () {

    //Step 1: Get Data
    var input1 = Number($("#num1").val());
    var input2 = Number($("#num2").val());
    var output = "";

    //Step 2: Make a Calc
    for (var loop = 1; loop <= 100; loop++) {
        var fizzCondition = loop % input1 == 0 ? true : false;
        var buzzCondition = loop % input2 == 0 ? true : false;

        if (fizzCondition && buzzCondition) {
            output += "Fizz-Buzz, ";
        }
        else if (fizzCondition) {
            output += "Fizz, ";
        }
        else if (buzzCondition) {
            output += "Buzz, ";
        }
        else {
            output += loop + ", ";
        }
    }

    output = output.substr(0, output.length - 2)

    //Step 3: Output
    $("#output2").text(output);
});

//JS Factorial Script

$("#btnClear").click(function () {
    $("#inputFactorial").val("");
    $("#output").text("");
});

$("#btnCalc").click(function () {
    //Step 1: Get the user data
    var input = Number($("#inputFactorial").val());

    //Step 2: Do something with it
    var output = input;

    if (input > 0) {
        for (var loop = input - 1; loop > 1; loop--) {
            output *= loop;
        }

    }
    else if (input == 0) {
        output = 1;
    }
    else {
        output = "undefined";
    }

    //Step 3: Inform the user
    $("#output").text("The Factorial of " + input + " is " + output);
});

// JS Math

$("#btnMath").click(function () {
    //Step 1: Acquire the user input

    //var number1 = Number($("#number1").val());
    var strNumber1 = $("#number1").val();
    var number1 = Number(strNumber1);

    //var number2 = Number($("#number2").val());
    var strNumber2 = $("#number2").val();
    var number2 = Number(strNumber2);

    var number3 = Number($("#number3").val());
    var number4 = Number($("#number4").val());
    var number5 = Number($("#number5").val());
  
    ////Step 2: Do something with it
    //    //Calculate the Sum 
         var sum = number1 + number2 + number3 + number4 + number5;
    //    Calculate the Product
        var product = number1 * number2 * number3 * number4 * number5;
    //    Calculate the Average
        var avg = sum / 5;
    //    //Calculate the Largest
        var max = Math.max(number1, number2, number3, number4, number5);
    //    //Calculate the Smallest
        var min = Math.min(number1, number2, number3, number4, number5);

        //Step 3: Out the results to the screen
    $("#sum").text("The sum of your input is: " + sum);
    $("#product").text("The product of your input is: " + product);
    $("#avg").text("The average of your input is: " + avg);
    $("#max").text("The max of your input is: " + max);
    $("#min").text("The min of your input is: " + min);

});

$("#btnClear3").click(function () { 
    $("#sum").text("");
    $("#number1, #number2, #number3, #number4, #number5").val("");
    $("#sum, #product, #avg, #max, #min").text("");
});

function DoMath() {
    //Step 1: Acquire the user input

    //var number1 = Number($("#number1").val());
    var strNumber1 = $("#number1").val();
    var number1 = Number(strNumber1);

    //var number2 = Number($("#number2").val());
    var strNumber2 = $("#number2").val();
    var number2 = Number(strNumber2);

    var number3 = Number($("#number3").val());
    var number4 = Number($("#number4").val());
    var number5 = Number($("#number5").val());

    //Step 2: Do something with it
    var sum = number1 + number2 + number3 + number4 + number5;
    //var sum2 = strNumber1 + strNumber2

    //Step 3: Out the results to the screen
    $("#sum").text("The sum of your input is: " + sum);
    //$("#sum2").text("The sum of your string input is: " + sum2);
   
}

//input validation

$("#inputFactorial, #num1, #num2, #number1, #number2, #number3, #number4, #number5").keypress(function (key) {
    var char = key.which;
    if (char >= 48 && char <= 57 || char === 45 && $(this).val() === "") {
        return true;
    }
    return false;
});

//input cant be type=number

//$("#inputFactorial, #input2, #input3").keypress(function (key) {
//    var char = key.which;
//    if (char >= 48 && char <= 57 || char === 45 && $(this).val() === "") {
//        return true;
//    }
//    return false;
//});

//Palindrome

$("#btnInputPal").click(function () {
    let reversed = "";
    let nospaces_str = "";
    let nospaces_rev = "";

    //get value
    let str = document.getElementById('value').value;
    nospaces_str = str.replace(/\s+/g, '').toLowerCase();
    nospaces_rev = Reverse(nospaces_str).toLowerCase();

    //reverse the value
    reversed = Reverse(str);

    //compare values
    if (nospaces_str == nospaces_rev) {
        document.getElementById('IsPalindrome').checked = true;
    }
    else
        document.getElementById('IsPalindrome').checked = false;

    var message1 = str + " reversed is " + reversed;
    var message2 = str === reversed ? " therefore " + str + " is a Palindrome. " : " therefore " + str + " is not a Palindrome. ";
    document.getElementById('result').innerText = message1 + message2;


    function Reverse(str) {
        let reversed = "";
        for (var i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }

});

$("#btnClearPal").click(function () {
    $("#value").val("");
    $("#result").text("");
    $("#IsPalindrome").prop("checked", false);
});

