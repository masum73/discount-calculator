//easy discount calculator

document.getElementById('btn-apply').addEventListener('click',function(){
    let discount =  (1000*30)/100; 
    const textareaField = document.getElementById('textareaFieldOne');
    textareaField.value = discount;
})

document.getElementById('btn-clear').addEventListener('click',function(){
    const textareaField = document.getElementById('textareaFieldOne');
    textareaField.value = '';
})

//almost easy discount calculator



/* document.getElementById('btn-clear').addEventListener('click',function(){
    const textareaField = document.getElementById('textareaFieldTwo');
    textareaField.value = '';
}) */