const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelector(".price-input input"),
progress = document.querySelectorAll(".slider .progress");
let priceGap = 1000;
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap;
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            progress.style.left(minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
