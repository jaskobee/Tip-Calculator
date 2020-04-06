console.log("connected");

let button = document.querySelector("#calc");

function calcTip(){
let amount = document.querySelector("#prijs").value;
let service = document.querySelector("#optie").value;
let numOfPeople = document.getElementById("share").value;
let totalTip = document.getElementById("totalTip");
let tip = document.getElementById("tip");
let each = document.getElementById("each");

    if (amount === "" || service == 0) {
        tip.innerHTML = "Make sure to fill in all the fields.";
        document.querySelector("#totalTip i").className = "fas " + "fa-exclamation-triangle";
        return;
    }

    //Calculate tip
    var total = (amount * service) / numOfPeople;
    //Math.round op total
    total = Math.round(total * 100) / 100;
    //altijd 2 getallen na de coma met toFixed(2)
    total = total.toFixed(2);
    //Display tip
    totalTip.style.display = "block";
    tip.innerHTML = "The tip is " + total + " $";

    // Kijken of de input van numOfPeople is ingevuld, zo niet maken we er sowieso 1 persoon van en else each bijvoegen.

    /* HIER KLOPT IETS NIET, PAKT DE numOfPeople = 1 niet na de IF .. toont "Infinity" aan. **************************************************************************************  */

    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        each.style.display = "none";
        tip.style.display = "block";
    } else {
        each.style.display = "block";
        tip.style.display = "none";
        each.innerHTML = "Each have to tip " + total + " $";
    }



    // Smileys tonen onder de totale tip
    if(service === "0.3"){
        console.log("hearts");
        document.querySelector("#totalTip i").className = "fas " + " fa-grin-hearts";
    }else if(service == "0.2"){
        console.log("happy");
        document.querySelector("#totalTip i").className = "fas " + " fa-smile-beam";
    } else if (service == "0.15") {
        console.log("smile");
        document.querySelector("#totalTip i").className = "fas " + " fa-smile";
    } else if (service == "0.1") {
        console.log("sad");
        document.querySelector("#totalTip i").className = "fas " + " fa-frown";
    } else if (service == "0.05") {
        console.log("angry");
        document.querySelector("#totalTip i").className = "fas " + " fa-angry";
    }

} // einde calc function

// Arrow Up & Down switch
let select = document.querySelector("select");

select.addEventListener("click", function(){
    select.classList.toggle('selectUp');
});

//click to call function
// button.onclick = function () {
//     calcTip();
// };   OR  ----- >

button.addEventListener("click", calcTip);


