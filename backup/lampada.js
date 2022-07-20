var quebrada=false
const lampada=window.document.getElementById('lampada')

function mudarlampada(valor){
    if(valor==1){
        lampada.src='dados do curso/_imagens/lampada-acesa.jpg'  
    }else if(valor==2){
        lampada.src='dados do curso/_imagens/lampada-apagada.jpg' 
    }else if(valor==3){
        lampada.src='dados do curso/_imagens/lampada-quebrada.jpg'
        quebrada=true
    }
    // nao consegui fazer a função do quebrado e tals tentar depois
} 


        
        
       