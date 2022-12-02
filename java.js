
    var menu=document.getElementById("menu");
    function closemenu(){
        menu.style.right="-200px";
    }
    function openmenu(){
        menu.style.right="0";
    }
    const benefit=document.getElementById('benefit');
    const payme_container=document.getElementById('payme_container');
    const close=document.getElementById('close');
    
    benefit.addEventListener('click',()=> {
        payme_container.classList.add('show');
    });
    close.addEventListener('click',()=>{
        payme_container.classList.remove('show');
    });