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

document.getElementById('coupon-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    const applyButton = document.getElementById('btn-apply-coupon');
    
    if(text==='DISC30'){
        applyButton.removeAttribute('disabled');
        
        applyButton.addEventListener('click',function(){
            let discount =  (1000*30)/100; 
            const textareaField = document.getElementById('textareaFieldTwo');
            textareaField.value = discount;
        })
    }else{
        applyButton.setAttribute('disabled',true);
    }
})

document.getElementById('btn-clear-two').addEventListener('click',function(){
    const couponField = document.getElementById('coupon-field');
    couponField.value = '';
    
    const textareaField = document.getElementById('textareaFieldTwo');
    textareaField.value = '';
    
    const applyButton = document.getElementById('btn-apply-coupon');
    applyButton.setAttribute('disabled',true);
})