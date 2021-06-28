
function validForm(event) {
    let tab =[];
    let nom = document.getElementById("name"); //ou let ou const à la place de var
    let prenom = document.getElementById("firstname");
    let tel = document.getElementById("phone");
   
    let error = document.getElementById("errors"); //ou let ou const à la place de var
    let mail = document.getElementById("email");
    let listcanal= document.getElementById("listcanal");
    let message= document.getElementById("message");
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhoneNumber = /^((\+)33|0)[1-9](\d{2}){4}$/; 
  

   

   
 
    if (nom.value.length < 4   || nom.value == "") {
        tab.push("<li>Le nom doit être d'au moins 4 caractères</li>");
    }
    if (prenom.value.length < 4  || prenom.value == "") {
        tab.push("<li>Le prenom doit être d'au moins 4 caractères</li>");
      
    }
    if (age.value < age.value == "" ) {
        tab.push("<li>Vous devez avoir au moins 18 ans</li>");
    }
    if (!mail.value.match(regexEmail) || mail.value == "") {
        tab.push("<li>Le format n est pas respecter</li>");
      }
      if (!tel.value.match(regexPhoneNumber)|| tel.length != 10 ) {
        tab.push("<li>Veuillez entre un numero valide</li>");
      }

      if(listcanal.value ==""){
        tab.push("<li>Veuillez saisir une valeur</li>");
      }
   

    if (message.value.length >50 ) {
        tab.push("<li>Le nombre maximum de caractere est de 50 caractères</li>");
    }
  
      
if(tab.length>0){
    error.innerHTML =`<ul>${tab.join("<br>")}</ul>`
    event.preventDefault();
}
   else {
        error.innerHTML = "";

    }

    

 
}






