
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
    function sendEmail(){
        Email.send({
            Host : "smtp.elasticmail.com",
            Username : "cmcislyfe@gmail.com",
            Password : "cmc2005^_^",
            To : 'chuamengc@gmail.com',
            From : document.getElementById("email").value,
            Subject : "New contact",
            Body : "Name : " + document.getElementById("name").value +"<br> Email:"+ document.getElementById("email").value + "<br> Message: "
        }).then(
          message => alert("Thank you for the message")
        );
        
    }