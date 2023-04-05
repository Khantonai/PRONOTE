
mat = ["H-G", "Anglais", "Allemand", "Espagnol","HGGSP","SVT", "ES", "Philo", "EPS", "EMC", "MATH", "SES", "Pas de cours"]

bruh = ["Anglais", "Allemand", "Espagnol", "EPS", "EMC", "MATH", "SES","HGGSP","SVT"]

nb = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"]

lien = []
poss = 0
ipo = 0
groupo = 1

function chg() {
  po = document.getElementById("change")

  if (ipo == 2 && poss == 1) {
    localStorage.setItem("edt3", lien)
    po.classList.add("yes")
    po.value = "Terminé"
    document.getElementById("acopie").value = localStorage.getItem("edt1") + "," + localStorage.getItem("edt2") + "," + localStorage.getItem("edt3")
    blu = 8
    while (blu > 0) {
      if (document.getElementById("horaire" + nb[blu]).classList.contains("hide") == false) {
        document.getElementById("horaire" + nb[blu]).classList.add("hide")
        document.getElementById("liste" + nb[blu]).classList.add("hide")
      }
      blu -= 1
    }
    document.getElementById("horaireun").classList.add("hide")
    document.getElementById("listeun").classList.add("hide")
    poss = 0
  }
  else if (ipo == 2 && poss == 0) {
    po.classList.add("no")
    po.value = "Incomplet"
    setTimeout(() => {  po.classList.remove("no"); po.value = "Jour précédent" }, 3000);
  }


  if (ipo == 1 && poss == 1) {
    localStorage.setItem("edt2", lien)
    po.classList.add("yes")
    po.value = "Ajouté"
    setTimeout(() => {  po.classList.remove("yes"); po.value = "Jour précédent" }, 3000);
    document.getElementById("acopie").value = localStorage.getItem("edt1") + "," + localStorage.getItem("edt2") + ","
    blu = 8
    while (blu > 0) {
      if (document.getElementById("horaire" + nb[blu]).classList.contains("hide") == false) {
        document.getElementById("horaire" + nb[blu]).classList.add("hide")
        document.getElementById("cours" + nb[blu]).value = "H-G"
        document.getElementById("nom" + nb[blu]).value = ""
        document.getElementById("prenom" + nb[blu]).value = ""
        document.getElementById("salle" + nb[blu]).value = ""
        document.getElementById("duree" + nb[blu]).value = "1h"
        document.getElementById("grp" + nb[blu]).value = ""
        document.getElementById("nom" + nb[blu]).classList.remove("hide")
        document.getElementById("prenom" + nb[blu]).classList.remove("hide")
        document.getElementById("salle" + nb[blu]).classList.remove("hide")
        document.getElementById("liste" + nb[blu]).classList.replace("pio", "oua")
        document.getElementById("liste" + nb[blu]).classList.add("hide")
      }
      blu -= 1
    }
    document.getElementById("coursun").value = "H-G"
        document.getElementById("nomun").value = ""
        document.getElementById("prenomun").value = ""
        document.getElementById("salleun").value = ""
        document.getElementById("dureeun").value = "1h"
    document.getElementById("grpun").value = ""
        document.getElementById("nomun").classList.remove("hide")
        document.getElementById("prenomun").classList.remove("hide")
        document.getElementById("salleun").classList.remove("hide")
        document.getElementById("listeun").classList.replace("pio", "oua")
    ipo = 2
    poss = 0
  }
  else if (ipo == 1 && poss == 0) {
    po.classList.add("no")
    po.value = "Incomplet"
    setTimeout(() => {  po.classList.remove("no"); po.value = "Jour suivant" }, 3000);
  }


  if (ipo == 0 && poss == 1 && document.getElementById("nomuser").value != "" && document.getElementById("prenomuser").value != "") {
    localStorage.setItem("edt1", lien)
    po.classList.add("yes")
    po.value = "Ajouté"
    setTimeout(() => {  po.classList.remove("yes"); po.value = "Jour suivant" }, 3000);
    document.getElementById("acopie").value = localStorage.getItem("edt1") + ","
    blu = 8
    while (blu > 0) {
      if (document.getElementById("horaire" + nb[blu]).classList.contains("hide") == false) {
        document.getElementById("horaire" + nb[blu]).classList.add("hide")
        document.getElementById("cours" + nb[blu]).value = "H-G"
        document.getElementById("nom" + nb[blu]).value = ""
        document.getElementById("prenom" + nb[blu]).value = ""
        document.getElementById("salle" + nb[blu]).value = ""
        document.getElementById("duree" + nb[blu]).value = "1h"
        document.getElementById("grp" + nb[blu]).value = ""
        document.getElementById("nom" + nb[blu]).classList.remove("hide")
        document.getElementById("prenom" + nb[blu]).classList.remove("hide")
        document.getElementById("salle" + nb[blu]).classList.remove("hide")
        document.getElementById("liste" + nb[blu]).classList.replace("pio", "oua")
        document.getElementById("liste" + nb[blu]).classList.add("hide")
      }
      blu -= 1
    }
    document.getElementById("coursun").value = "H-G"
        document.getElementById("nomun").value = ""
        document.getElementById("prenomun").value = ""
        document.getElementById("salleun").value = ""
        document.getElementById("dureeun").value = "1h"
    document.getElementById("grpun").value = ""
        document.getElementById("nomun").classList.remove("hide")
        document.getElementById("prenomun").classList.remove("hide")
        document.getElementById("salleun").classList.remove("hide")
        document.getElementById("listeun").classList.replace("pio", "oua")
    ipo = 1
    poss = 0
    document.getElementById("nomuser").readOnly = true
    document.getElementById("prenomuser").readOnly = true
  }
  else if (ipo == 0 && poss == 0 || ipo == 0 && document.getElementById("nomuser").value == "" || ipo == 0 && document.getElementById("prenomuser").value == "") {
    po.classList.add("no")
    po.value = "Incomplet"
    setTimeout(() => {  po.classList.remove("no"); po.value = "Aujourd'hui" }, 3000);
  }
}


function glien() {
  poss = 1
  lien = []
  cpt = 0
  if (ipo == 0) {
    lien.push(document.getElementById("nomuser").value)
    lien.push(document.getElementById("prenomuser").value)
    lien.push("ajd")
  }
  else if (ipo == 1) {
    lien.push("dem")
  }
  else if (ipo == 2) {
    lien.push("hier")
  }
  while (document.getElementById("horaire" + nb[cpt]).classList.contains("hide") == false && parseInt(document.getElementById("heure" + nb[cpt]).innerHTML.slice(0, 2)) < 17) {
    if (document.getElementById("horaire" + nb[cpt]).classList.contains("hide") == false && parseInt(document.getElementById("heure" + nb[cpt]).innerHTML.slice(0, 2)) <= 17) {
      lien.push(nb[cpt])
      lien.push(document.getElementById("heure" + nb[cpt]).innerHTML)
      lien.push(document.getElementById("heure" + nb[cpt] + "bis").innerHTML)
      lien.push(document.getElementById("cours" + nb[cpt]).value)
      if (document.getElementById("nom" + nb[cpt]).value != "") {
        lien.push(document.getElementById("nom" + nb[cpt]).value)
      }
      if (document.getElementById("prenom" + nb[cpt]).value != "") {
        lien.push(document.getElementById("prenom" + nb[cpt]).value)
      }
      if (document.getElementById("salle" + nb[cpt]).value != "") {
        lien.push(document.getElementById("salle" + nb[cpt]).value)
      }
      if (document.getElementById("grp" + nb[cpt]).classList.contains("hide") == false && document.getElementById("grp" + nb[cpt]).value != "") {
        lien.push(document.getElementById("grp" + nb[cpt]).value)
      }
    }
    cpt += 1
  }
  if (lien[lien.indexOf("17H00") + 1] == "Pas de cours") {
    poss = 1
  }
  else if (lien.indexOf("17H00") == -1 || lien[lien.indexOf("17H00") + 4] == undefined) {
    poss = 0
  }
}





function ajour(num) {
  if (document.getElementById("cours" + num).value == "EPS") {
    document.getElementById("salle" + num).type = "text"
    document.getElementById("salle" + num).value = "EPS -1"
    document.getElementById("salle" + num).readOnly = true
    document.getElementById("grp" + num).value = "Teps-1"
    document.getElementById("grp" + num).readOnly = true
  }
  else {
    document.getElementById("salle" + num).type = "number"
    document.getElementById("salle" + num).readOnly = false
    document.getElementById("grp" + num).readOnly = false
  }

  if (bruh.indexOf(document.getElementById("cours" + num).value) != -1) {
    document.getElementById("grp" + num).classList.remove("hide")
    groupo = 0
  }
  else {
    document.getElementById("grp" + num).classList.add("hide")
    groupo = 1
  }
  if (groupo == 0 && document.getElementById("grp" + num).value != "") {
    groupo = 1
  }

  if (document.getElementById("heure" + num).innerHTML == "16H00") {
    document.getElementById("2h" + num).classList.add("hide")
    document.getElementById("duree" + num).value = "1h"
  }
  else {
    try {
      koi = nb.indexOf(num)
      while (document.getElementById("heure" + nb[koi]).innerHTML != "16H00") {
        koi += 1
      }
      document.getElementById("2h" + nb[koi]).classList.remove("hide")
      document.getElementById("liste" + nb[koi + 1]).classList.add("hide")
    }
    catch {}
  }
  if (document.getElementById("cours" + num).value == "Pas de cours") {
    document.getElementById("nom" + num).classList.add("hide")
    document.getElementById("nom" + num).value = ""
    document.getElementById("prenom" + num).classList.add("hide")
    document.getElementById("prenom" + num).value = ""
    document.getElementById("salle" + num).classList.add("hide")
    document.getElementById("salle" + num).value = ""
    document.getElementById("liste" + num).classList.replace("oua", "pio")
  }
  else {
    document.getElementById("nom" + num).classList.remove("hide")
    document.getElementById("prenom" + num).classList.remove("hide")
    document.getElementById("salle" + num).classList.remove("hide")
    document.getElementById("liste" + num).classList.replace("pio", "oua")
  }

  if (num == "un") {
    document.getElementById("heureunbis").innerHTML = "9H00"
    if (document.getElementById("dureeun").value == "2h") {
      document.getElementById("heureunbis").innerHTML = "10H00"
    }
    else {
      document.getElementById("heureunbis").innerHTML = "9H00"
    }
    document.getElementById("heure" + nb[nb.indexOf(num) + 1]).innerHTML = document.getElementById("heure" + num + "bis").innerHTML
  }

  else {
    if (document.getElementById("duree" + num).value == "2h") {
      document.getElementById("heure" + num + "bis").innerHTML = parseInt(document.getElementById("heure" + num).innerHTML.slice(0, 2)) + 2 + "H00"
    }
    else {
      document.getElementById("heure" + num + "bis").innerHTML = parseInt(document.getElementById("heure" + num).innerHTML.slice(0, 2)) + 1 + "H00"
    }
  }
      
  biz = nb.indexOf(num)
  while (biz < 8) {
    biz += 1
    document.getElementById("heure" + nb[biz]).innerHTML = document.getElementById("heure" + nb[biz - 1] + "bis").innerHTML
    if (document.getElementById("duree" + nb[biz]).value == "2h") {
      document.getElementById("heure" + nb[biz] + "bis").innerHTML = parseInt(document.getElementById("heure" + nb[biz]).innerHTML.slice(0, 2)) + 2 + "H00"
    }
    else {
      document.getElementById("heure" + nb[biz] + "bis").innerHTML = parseInt(document.getElementById("heure" + nb[biz]).innerHTML.slice(0, 2)) + 1 + "H00"
    }
  }
  
  try {
      zui = nb.indexOf(num)
      while (document.getElementById("heure" + nb[zui]).innerHTML != "16H00") {
        zui += 1
      }
      document.getElementById("duree" + nb[zui]).value = "1h"
      document.getElementById("heure" + nb[zui] + "bis").innerHTML = "17H00"
    }
    catch {}

  if (document.getElementById("nom" + num).value != "" && document.getElementById("prenom" + num).value != "" && document.getElementById("salle" + num).value != "" && document.getElementById("heure" + num + "bis").innerHTML != "17H00" && groupo == 1 || document.getElementById("cours" + num).value == "Pas de cours" && document.getElementById("heure" + num + "bis").innerHTML != "17H00") {
    document.getElementById("liste" + nb[nb.indexOf(num) + 1]).classList.remove("hide")
    document.getElementById("horaire" + nb[nb.indexOf(num) + 1]).classList.remove("hide")
    lop = nb.indexOf(num)
    while (document.getElementById("nom" + nb[lop + 1]).value != "" && document.getElementById("prenom" + nb[lop + 1]).value != "" && document.getElementById("salle" + nb[lop + 1]).value != "" && groupo == 1 || document.getElementById("cours" + nb[lop + 1]).value == "Pas de cours") {
      if (document.getElementById("nom" + nb[lop + 1]).value != "" && document.getElementById("prenom" + nb[lop + 1]).value != "" && document.getElementById("salle" + nb[lop + 1]).value != "" && groupo == 1 || document.getElementById("cours" + nb[lop + 1]).value == "Pas de cours") {
        document.getElementById("liste" + nb[lop + 1]).classList.remove("hide")
        document.getElementById("horaire" + nb[lop + 1]).classList.remove("hide")
        lop += 1
      }
      document.getElementById("liste" + nb[lop + 1]).classList.remove("hide")
      document.getElementById("horaire" + nb[lop + 1]).classList.remove("hide")  
    }
  }
  else {
    lol = 8
    while (lol != nb.indexOf(num)) {
      document.getElementById("liste" + nb[lol]).classList.add("hide")
      document.getElementById("horaire" + nb[lol]).classList.add("hide")
      lol -= 1
    }
  }
  glien() 
}


function copie() {
  ce = document.getElementById("bcopie")
  var copyTextarea = document.getElementById("acopie");
  
  if (document.getElementById("acopie").value == "") {
    ce.classList.add("no")
    ce.value = "Vide"
    setTimeout(() => {  ce.classList.remove("no"); ce.value = "Copier" }, 3000);
  }
  else {
    copyTextarea.select();
    document.execCommand("copy");
    ce.classList.add("yes")
    ce.value = "Copié !"
    setTimeout(() => {  ce.classList.remove("yes"); ce.value = "Copier" }, 3000);
    }
}