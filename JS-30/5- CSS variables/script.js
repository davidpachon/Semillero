const inputColor = document.querySelector('#base');
inputColor.addEventListener('change', function(){//el evento change funciona cuando el color de algo cambia
    document.documentElement.style.setProperty(`--${this.name}`,this.value);
});

const inputSpacing = document.querySelector('#spacing');
inputSpacing.addEventListener('change', function(){
    document.documentElement.style.setProperty(`--${this.name}`,this.value+this.dataset.sizing);
});

const inputBlur = document.querySelector('#blur');
inputBlur.addEventListener('change', function(){
    document.documentElement.style.setProperty(`--${this.name}`,this.value+this.dataset.sizing);
});

