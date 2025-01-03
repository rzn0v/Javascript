let calculation = '';
if(calculation === null){
    calculation = '';
}
calculation = JSON.parse(localStorage.getItem('calculation'));
textBox();
function textBox(){
    document.querySelector('.answer').innerHTML = calculation;
}