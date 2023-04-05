nb = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"]
jrn = []
mat = ["H-G", "Anglais", "Allemand", "Espagnol", "HGGSP","SVT", "ES", "Philo", "EPS", "EMC", "MATH", "SES", "Pas de cours"]

realmat = ["HISTOIRE-GEOGRAPHIE", "ANGLAIS", "ALLEMAND", "ESPAGNOL","HIST.GEO.GEOPOL.S.P.","SCIENCES VIE & TERRE", "ENSEIGN.SCIENTIFIQUE", "PHILOSOPHIE", "ED.PHYSIQUE & SPORT.", "ENS. MORAL & CIVIQUE", "MATHEMATIQUES", "SC. ECONO.& SOCIALES", "Pas de cours"]

clr = ["#A12A5F", "#4031CC", "#F1C57D", "#906000", "#3FC488", "#C8E484", "#D3F719", "#56D487", "#698C50", "#2B1600", "#B3ABDA", "#596E05", "Pas de cours"]

bruh = ["Anglais", "Allemand", "Espagnol", "EPS", "EMC", "MATH", "SES"]

function avoirdate(act, nop) {
  jour = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."]
  mois = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
  tps = new Date()
  tpsj = tps.getDay()
  tpsn = tps.getDate()
  tpsm = tps.getMonth()
  if (act == "date") {
    return jour[tpsj] + " " + tpsn + " " + mois[tpsm]
  }
  else if (act == "court") {
    return tpsn + " " + mois[tpsm]
  }
  else if (act == "sui") {
    if (tpsj == 5) {
      var nextDay = new Date(tps);
      nextDay.setDate(tps.getDate() + 3)
      return jour[nextDay.getDay()] + " " + nextDay.getDate() + " " + mois[nextDay.getMonth()]
    }
    else {
      var nextDay = new Date(tps);
      nextDay.setDate(tps.getDate() + 1)
      return jour[nextDay.getDay()] + " " + nextDay.getDate() + " " + mois[nextDay.getMonth()]
    }
  }
  else if (act == "pre") {
    if (tpsj == 1) {
      var nextDay = new Date(tps);
      nextDay.setDate(tps.getDate() - 3)
      return jour[nextDay.getDay()] + " " + nextDay.getDate() + " " + mois[nextDay.getMonth()]
    }
    else {
      var nextDay = new Date(tps);
      nextDay.setDate(tps.getDate() - 1)
      return jour[nextDay.getDay()] + " " + nextDay.getDate() + " " + mois[nextDay.getMonth()]
    }
  }
  else {
    if (tpsj == 1) {
      var nextDay = new Date(tps);
      nextDay.setDate(tps.getDate() - (3 + act))
      return nop + " " + nextDay.getDate() + " " + mois[nextDay.getMonth()]
    }
    else {
      var nextDay = new Date(tps);
      nextDay.setDate(tps.getDate() - (1 + act))
      return nop + " " + nextDay.getDate() + " " + mois[nextDay.getMonth()]
    }
  }
}





window.addEventListener("load", function(event) {
document.getElementById("daate").innerHTML = avoirdate("date")
document.getElementById("datte").innerHTML = avoirdate("sui")
document.getElementById("note0").innerHTML = avoirdate(0, "le")
document.getElementById("note1").innerHTML = avoirdate(2, "le")
document.getElementById("note2").innerHTML = avoirdate(7, "le")
document.getElementById("note3").innerHTML = avoirdate(11, "le")
document.getElementById("abs").innerHTML = "du" + " " + avoirdate(2, "") + " " + "à 8h00 au " + avoirdate(0, "") + " à 17h00"
lien = localStorage.getItem("lienedt").split(',') 
  try {
    if (lien[1].indexOf("-") == -1) {
      document.getElementById("lenom").innerHTML = lien[0].toUpperCase() + " " + lien[1].charAt(0).toUpperCase() + lien[1].slice(1).toLowerCase()     }
     else if (lien[1] != "") {  
       document.getElementById("lenom").innerHTML = lien[0].toUpperCase() + " " + lien[1].charAt(0).toUpperCase() + lien[1].slice(1,lien[1].indexOf("-")) + "-" + lien[1].charAt(lien[1].indexOf("-") + 1).toUpperCase() + lien[1].slice(lien[1].indexOf("-") + 2)
   }
  }
  catch {
    document.getElementById("lenom").innerHTML = "RIMARO Sacha"
  }
  document.getElementById("ima").src = localStorage.getItem('phot')

  comp = 0
  sel = 0
  selbis = 2
  acti = false
  lie = localStorage.getItem("lienedt").split(',')
  lien = lie.slice(0,lien.indexOf("dem"))
  lienbis = lie.slice(lien.indexOf("dem"))
  if (lien == "" || lien.indexOf("ajd") == -1) {
    lien = "a,a,ajd,un,8H00,10H00,Philo,ruchon,g,118,deux,10H00,11H00,H-G,stehlin,m,128,trois,11H00,12H00,ES,bendali,m,321,quatre,12H00,13H00,Pas de cours,cinq,13H00,15H00,EPS,descombes,m,EPS -1,Teps-1,six,15H00,17H00,SES,boisset,n,119,tses12".split(",") 
  }
  if (lienbis == "" || lien.indexOf("dem") == -1) {
    lienbis = "a,a,dem,un,8H00,10H00,MATH,abello,c,218,tmaths3,deux,10H00,11H00,Pas de cours,trois,11H00,12H00,Anglais,latournerie,k,310,tagl10,quatre,12H00,14H00,Pas de cours,cinq,14H00,15H00,H-G,stehlin,m,131,six,15H00,17H00,SES,boisset,n,122,tses12".split(",")
  }

  
  while (lien[lien.indexOf(nb[comp]) + 1] != "12H00") {
    comp += 1
  }

  while (jrn.length < 3) {
    if (lien[lien.indexOf(nb[comp]) + 3] != "Pas de cours" && lien.indexOf(nb[comp]) != -1 && selbis <= 2) {
      jrn.push(lien[lien.indexOf(nb[comp]) + 3])
      document.getElementById("c" + nb[sel]).classList.remove("hide")
      document.getElementById("heure" + nb[sel]).innerHTML = lien[lien.indexOf(nb[comp]) + 1]
      document.getElementById("heure" + nb[sel] + "bis").innerHTML = lien[lien.indexOf(nb[comp]) + 2]
      document.getElementById("color" + nb[sel]).style = "border-color:" + clr[mat.indexOf(lien[lien.indexOf(nb[comp]) + 3])]
      document.getElementById("mati" + nb[sel]).innerHTML = realmat[mat.indexOf(lien[lien.indexOf(nb[comp]) + 3])]
      document.getElementById("prof" + nb[sel]).innerHTML = lien[lien.indexOf(nb[comp]) + 4].toUpperCase() + " " + lien[lien.indexOf(nb[comp]) + 5].toUpperCase() + "."
      document.getElementById("salle" + nb[sel]).innerHTML = lien[lien.indexOf(nb[comp]) + 6]
      if (bruh.indexOf(lien[lien.indexOf(nb[comp]) + 3]) != -1) {
        document.getElementById("grp" + nb[sel]).classList.remove("hide")
        if (lien[lien.indexOf(nb[comp]) + 3] == "EPS") {
          document.getElementById("grp" + nb[sel]).innerHTML = "[" + lien[lien.indexOf(nb[comp]) + 7] + "]"
        }
        else {
          document.getElementById("grp" + nb[sel]).innerHTML = "[" + lien[lien.indexOf(nb[comp]) + 7].toUpperCase() + "]"
        }
        
      }
      sel += 1
    }
    else if (lien[lien.indexOf(nb[comp])] == undefined && selbis <= 2) {
      selbis += 1
      comp = 0
      document.getElementById("demdem").classList.remove("hide")
    }
    
    if (selbis >= 3) {
      if (lienbis[lienbis.indexOf(nb[comp]) + 3] != "Pas de cours" && lienbis.indexOf(nb[comp]) != undefined) {
        jrn.push(lienbis[lienbis.indexOf(nb[selbis]) + 3])
        document.getElementById("c" + nb[selbis]).classList.remove("hide")
        document.getElementById("heure" + nb[selbis]).innerHTML = lienbis[lienbis.indexOf(nb[comp]) + 1]
        document.getElementById("heure" + nb[selbis] + "bis").innerHTML = lienbis[lienbis.indexOf(nb[comp]) + 2]
        document.getElementById("color" + nb[selbis]).style = "border-color:" + clr[mat.indexOf(lienbis[lienbis.indexOf(nb[comp]) + 3])]
        document.getElementById("mati" + nb[selbis]).innerHTML = realmat[mat.indexOf(lienbis[lienbis.indexOf(nb[comp]) + 3])]
        document.getElementById("prof" + nb[selbis]).innerHTML = lienbis[lienbis.indexOf(nb[comp]) + 4].toUpperCase() + " " + lienbis[lienbis.indexOf(nb[comp]) + 5].toUpperCase() + "."
        document.getElementById("salle" + nb[selbis]).innerHTML = lienbis[lienbis.indexOf(nb[comp]) + 6]
      if (bruh.indexOf(lienbis[lienbis.indexOf(nb[comp]) + 3]) != -1) {
        document.getElementById("grp" + nb[selbis]).classList.remove("hide")
        if (lienbis[lienbis.indexOf(nb[comp]) + 3] == "EPS") {
          document.getElementById("grp" + nb[selbis]).innerHTML = "[" + lienbis[lienbis.indexOf(nb[comp]) + 7] + "]"
        }
        else {
          document.getElementById("grp" + nb[selbis]).innerHTML = "[" + lienbis[lienbis.indexOf(nb[comp]) + 7].toUpperCase() + "]"
        }
        
      }
        selbis += 1
      }
    }
    comp += 1
  }
})


