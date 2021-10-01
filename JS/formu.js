
function vali(){
    var zname, zlname, zemail, zmessage, zexpre, zexpre1;
    zname = document.getElementById("nname").value;
    zlname = document.getElementById("llname").value;
    zemail = document.getElementById("eemail").value;
    zmessage = document.getElementById("mmessage").value;
    zexpre = /\w+@\w+.+[a-z]/;
    zexpre1 = /[a-z]/;


    // campos que no deben ser enviados vacios
    if (zname === "" || zlname=== "" || zemail === "" || zmessage === "" ){
        alert("all data must be filled");
        return false;
    }

    // largo y caracteres no numéricos en el nombre
    else if (zname.lengh>35) {
        alert("Name so large");
        return false;
    }
       
    else if (!zexpre1.test(zname)) {
        alert("no valid characters in Name");
        return false;
    }
    

    // largo y caracteres no numéricos en el Apellido
    else if (zlname.lengh>35) {
        alert("Last Name so large");
        return false;
    }

    else if (!zexpre1.test(zlname)) {
        alert("no valid characters in Last Name");
        return false;
    }
    // largo y caracteres no válidos en el mail
    else if (zemail.lengh>100) {
        alert("Email so large");
        return false;
    }
        else if (!zexpre.test(zemail)) {
        alert("no valid Email");
        return false;
    }

    // largo del mensaje
    else if (zmessage.lengh>255) {
        alert("Message so large");
        return false;
    }

}

// chequear el largo de los inputs con la DB!!!
// cargar a la db....

