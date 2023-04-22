function DefinirMatriz(){
    var peso = document.getElementById("peso").value;
    var forr = document.getElementById("forragens").value;
    var mes = document.getElementById("mes").value;

    if (forr == "Braquiarão") {
        primeiro = 1
    }else if (forr == "MG 12 Paredão"){
        primeiro = 2
    }else if (forr == "BRS Capiaçu"){
        primeiro = 3
    }else if (forr == "Silagem"){
        primeiro = 4
    }

    if (mes == "Dezembro" || mes == "Janeiro" || mes == "Fevereiro"){
        segundo = 1
    }else if (mes == "Novembro" || mes == "Outubro" || mes == "Setembro"){
        segundo = 2
    }else if (mes == "Agosto" || mes == "Julho" || mes == "Junho"){
        segundo = 3
    }else{
        segundo = 4
    }

    var quarto = Math.round((peso-150)/50)
    var quartocima = Math.ceil((peso-150)/50)
    var quartobaixo = Math.floor((peso-150)/50)
    var resto = (peso-150)%50
    
    document.getElementById("quantidades").style.display="none"
    document.getElementById("ok").style.display="none"
    document.getElementById("ul_3").style.display="none"

    if (primeiro ==1 || primeiro ==2 ){
        document.getElementById("ul_4").style.display="block"
        document.getElementById("cap").style.display="none"

        var fubacima=document.getElementById(primeiro.toString()+segundo.toString()+"1"+quartocima.toString()).textContent
        var fubabaixo=document.getElementById(primeiro.toString()+segundo.toString()+"1"+quartobaixo.toString()).textContent
        var fuba = Math.round(((50-resto)*fubabaixo+resto*fubacima)/50)
    
        var ureiacima=document.getElementById(primeiro.toString()+segundo.toString()+"2"+quartocima.toString()).textContent
        var ureiabaixo=document.getElementById(primeiro.toString()+segundo.toString()+"2"+quartobaixo.toString()).textContent
        var ureia = Math.round(((50-resto)*ureiabaixo+resto*ureiacima)/50)
        
        var gmdcima=document.getElementById(primeiro.toString()+segundo.toString()+"6"+quartocima.toString()).textContent
        var gmdbaixo=document.getElementById(primeiro.toString()+segundo.toString()+"6"+quartobaixo.toString()).textContent
        var gmd = Math.round(((50-resto)*gmdbaixo+resto*gmdcima)/50)

        var salm=document.getElementById(primeiro.toString()+segundo.toString()+"3"+quarto.toString())
        var tiposal=document.getElementById(primeiro.toString()+segundo.toString()+"4"+quarto.toString())
        var salb=document.getElementById(primeiro.toString()+segundo.toString()+"5"+quarto.toString())
        document.getElementById("fuba").innerHTML+=" "+fuba+" g"
        document.getElementById("ureia").innerHTML+=" "+ureia+" g"
        document.getElementById("salm").innerHTML+=" "+salm.textContent+" g"
        document.getElementById("tiposal").innerHTML+=" "+tiposal.textContent
        document.getElementById("salb").innerHTML+=" "+salb.textContent+" g"
        document.getElementById("gmd").innerHTML+=" "+gmd+" g"
    } else{
        document.getElementById("ul_4").style.display="block"
        var capcima = parseFloat(document.getElementById(primeiro.toString()+segundo.toString()+"1"+quartocima.toString()).textContent)
        var capbaixo = parseFloat(document.getElementById(primeiro.toString()+segundo.toString()+"1"+quartobaixo.toString()).textContent)
        cap = (((50-resto)*capbaixo+resto*capcima)/50).toFixed(1)
        console.log(capcima, capbaixo, cap)

        var fubacima=document.getElementById(primeiro.toString()+segundo.toString()+"2"+quartocima.toString()).textContent
        var fubabaixo=document.getElementById(primeiro.toString()+segundo.toString()+"2"+quartobaixo.toString()).textContent
        var fuba = Math.round(((50-resto)*fubabaixo+resto*fubacima)/50)
    
        var ureiacima=document.getElementById(primeiro.toString()+segundo.toString()+"3"+quartocima.toString()).textContent
        var ureiabaixo=document.getElementById(primeiro.toString()+segundo.toString()+"3"+quartobaixo.toString()).textContent
        var ureia = Math.round(((50-resto)*ureiabaixo+resto*ureiacima)/50)

        var salm=document.getElementById(primeiro.toString()+segundo.toString()+"4"+quarto.toString())
        var tiposal=document.getElementById(primeiro.toString()+segundo.toString()+"5"+quarto.toString())
        var salb=document.getElementById(primeiro.toString()+segundo.toString()+"6"+quarto.toString())

        var gmdcima=document.getElementById(primeiro.toString()+segundo.toString()+"7"+quartocima.toString()).textContent
        var gmdbaixo=document.getElementById(primeiro.toString()+segundo.toString()+"7"+quartobaixo.toString()).textContent
        var gmd = Math.round(((50-resto)*gmdbaixo+resto*gmdcima)/50)

        document.getElementById("cap").innerHTML+=" "+cap+" Kg"
        document.getElementById("fuba").innerHTML+=" "+fuba+" g"
        document.getElementById("ureia").innerHTML+=" "+ureia+" g"
        document.getElementById("salm").innerHTML+=" "+salm.textContent+" g"
        document.getElementById("tiposal").innerHTML+=" "+tiposal.textContent
        document.getElementById("salb").innerHTML+=" "+salb.textContent+" g"
        document.getElementById("gmd").innerHTML+=" "+gmd+" g"
    }

}
