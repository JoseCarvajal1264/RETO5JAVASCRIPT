const panels = document.querySelectorAll('.panel');

panels.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('open');
    })
    item.addEventListener('transitionend',(e)=>{
        if(e.propertyName.includes('flex')){  
            item.classList.toggle('active');  
        }
    })
})