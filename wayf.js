
chx = 0

function choix(nb) {   
  chx = nb
  if (nb != 4) {
    document.getElementById("info").classList.add("hide")
  }
  if (nb != 2) {
    document.getElementById("infobis").classList.add("hide")
  }
  if (nb != 6) {
    document.getElementById("sauver").classList.add("hide")
  }
  if (nb != 7) {
    document.getElementById("lol").classList.add("hide")
  }

  if (nb != 2 && nb != 3 && nb != 4) {
    document.getElementById("listun").classList.add("hide")
    document.getElementById("plusun").classList.replace("icon--minus", "icon--plus")
  }
  if (nb != 6 && nb != 7) {
    document.getElementById("listdeux").classList.add("hide")
    document.getElementById("plusdeux").classList.replace("icon--minus", "icon--plus")
  }
}

  
function appa(id) {
  document.getElementById(id).classList.remove("hide")
  }



function afficher(idlist, idplus) {
  if (document.getElementById(idlist).classList.contains("hide") == true) {
    document.getElementById(idlist).classList.remove("hide")
    document.getElementById(idplus).classList.replace("icon--plus", "icon--minus")
  }
  else {
    document.getElementById(idlist).classList.add("hide")
    document.getElementById(idplus).classList.replace("icon--minus", "icon--plus")
  }
  if (idlist == "listun") {
    document.getElementById("listdeux").classList.add("hide")
    document.getElementById("plusdeux").classList.replace("icon--minus", "icon--plus")
  }
  else if (idlist == "listdeux") {
    document.getElementById("listun").classList.add("hide")
    document.getElementById("plusun").classList.replace("icon--minus", "icon--plus")
  }
}

function svgd() {
  ce = document.getElementById("save")
  if (document.getElementById("lisave").value == "" || document.getElementById("fphotobis").files[0] == undefined || document.getElementById("namesave").value == "") {
    ce.classList.replace("ok","no")
    ce.value = "Erreur"
    setTimeout(() => {  ce.classList.replace("no", "ok"); ce.value = "Sauvegarder" }, 3000);
  }
  else {
    tc = document.getElementById("lisave").value
    if (tc[tc.indexOf(",") + 1] == " ") {
      localStorage.setItem("save", document.getElementById("namesave").value + ":" + tc.slice(0, tc.indexOf(",") + 1) + tc.slice(tc.indexOf(",") + 2))
    }
    else {
      localStorage.setItem("save", document.getElementById("namesave").value + ":" + tc)
    }
    const filebis = document.getElementById("fphotobis").files[0];
    const readerbis = new FileReader();

    readerbis.addEventListener("load", function () {
      // convert image file to base64 string
      localStorage.setItem("photbis", readerbis.result);
    }, false);

    if (filebis) {
      readerbis.readAsDataURL(filebis);
    }
    document.getElementById("ns").innerHTML = localStorage.getItem("save").slice(0, localStorage.getItem("save").indexOf(":"))
    document.getElementById("cc").classList.remove("hide")
    ce.classList.replace("ok", "yes")
    ce.value = "Sauvegardé !"
    setTimeout(() => {  ce.classList.replace("yes", "ok"); ce.value = "Sauvegarder" }, 3000);
    }
}

function charger() {
  if (document.getElementById("paste").classList.contains("yes") == false) {
    document.getElementById("paste").classList.add("yes")
    document.getElementById("paste").value = "Sélectionné"
  }
  else {
    document.getElementById("paste").classList.remove("yes")
    document.getElementById("paste").value = "Sélectionner"
  }
}


function crhgfi(callback) {
  tb = document.getElementById("lipro").value
  if (tb[tb.indexOf(",") + 1] == " ") {
    localStorage.setItem("lienedt", tb.slice(0, tb.indexOf(",") + 1) + tb.slice(tb.indexOf(",") + 2))
  }
  else {
    localStorage.setItem("lienedt", tb)
  }
    
    const file = document.getElementById("fphoto").files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      // convert image file to base64 string
      localStorage.setItem("phot", reader.result);
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
    setTimeout(callback(), 5000)
    
}

function ouvrir() {
  window.open("edt/edt.html", "_self")
}

function valid() {
  if (chx == 1) { window.open("https://cas.ent.auvergnerhonealpes.fr/delegate/redirect/EDU")
  }
  else if (chx == 3) { 
    window.open("https://cas.ent.auvergnerhonealpes.fr/login?selection=GRE-ATS_parent_eleve&service=https%3A%2F%2F0740046Y.index-education.net%2Fpronote%2Feleve.html&submit=Valider")
  }
  else if (chx == 2) { 
    crhgfi(ouvrir)
    
  }
  else if (chx == 5) { window.open("cdp/cdp.html", "_self")
  }
  else if (chx == 7) {
    if (document.getElementById("paste").classList.contains("yes") == true) {
      localStorage.setItem("lienedt", localStorage.getItem("save").slice(localStorage.getItem("save").indexOf(":")+1))
      localStorage.setItem("phot", localStorage.getItem("photbis"))
      window.open("edt/edt.html", "_self")
    }
  }
}


window.addEventListener("load", function(event) {
  try {
    document.getElementById("ns").innerHTML = localStorage.getItem("save").slice(0,localStorage.getItem("save").indexOf(":"))
    document.getElementById("cc").classList.remove("hide")
  }
  catch {
    document.getElementById("cc").classList.add("hide")
  }
  localStorage.removeItem('phot')})
