function Testinputsempty (){
    CasefirstName = document.getElementById("inputfirstName").value
    if( CasefirstName ===""){
    alert('Case du Nom est vide ! ') }


    CasesecondName = document.getElementById("inputsecondName").value
    if ( CasesecondName ==="") { 
        alert('Case du Prénom est vide ! '); 
    }

    CaseAddress = document.getElementById("inputAdress").value
    if ( CaseAddress ==="" ) { 
        alert('Case d adresse est vide ! '); 
    }
    CaseEmail = document.getElementById("inputEmail").value
    if ( CaseEmail ==="") { 
        alert('Case d Email est vide !'); 
    }
    var  re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    testemail = document.getElementById("inputEmail").value
    if ( testemail == '' || !re.test( testemail)){
        alert('S il vous plait récrire votre Email correctement ');
        return false;
}

}