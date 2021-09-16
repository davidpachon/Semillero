const checkboxes = document.querySelectorAll('input[type="checkbox"]');


let ultimoCheck;
function controladorCheck(event){
    if(event.shiftKey){
        console.log(this);
        let estaEntre= false;
        checkboxes.forEach(check => {
            if(check === this || check === ultimoCheck){
                estaEntre = !estaEntre;
            }
            if(estaEntre){
                check.checked = true;
            }

        })
    }
    ultimoCheck = this;
}

checkboxes.forEach(function(check){
    check.addEventListener('click', controladorCheck)
})