lien = []
test = []

mat = ["H-G", "Anglais", "Allemand", "Espagnol","HGGSP","SVT", "ES", "Philo", "EPS", "EMC", "MATH", "SES", "Pas de cours"]

realmat = ["HISTOIRE-GEOGRAPHIE", "ANGLAIS", "ALLEMAND", "ESPAGNOL","HIST.GEO.GEOPOL.S.P.","SCIENCES VIE & TERRE", "ENSEIGN.SCIENTIFIQUE", "PHILOSOPHIE", "ED.PHYSIQUE & SPORT.", "ENS. MORAL & CIVIQUE", "MATHEMATIQUES", "SC. ECONO.& SOCIALES", "Pas de cours"]

nb = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"]

clr = ["#A12A5F", "#4031CC", "#F1C57D", "#906000", "#3FC488", "#C8E484", "#D3F719", "#56D487", "#698C50", "#2B1600", "#B3ABDA", "#596E05", "Pas de cours"]

bruh = ["Anglais", "Allemand", "Espagnol", "EPS", "EMC", "MATH", "SES","HGGSP","SVT"]

function avoirdate(act) {
  jour = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."]
  mois = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
  tps = new Date()
  tpsj = tps.getDay()
  tpsn = tps.getDate()
  tpsm = tps.getMonth()
  if (act == "date") {
    return jour[tpsj] + " " + tpsn + " " + mois[tpsm]
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
}




function placement() {
  
  lien = localStorage.getItem("lienedt").split(',') 
  
  jr = 0
  try {
    if (lien[1].indexOf("-") == -1 && lien[1].indexOf(" ") == -1) {
      document.getElementById("lenom").innerHTML = lien[0].toUpperCase() + " " + lien[1].charAt(0).toUpperCase() + lien[1].slice(1).toLowerCase()     
    }
     else if (lien[1].indexOf("-") > -1 && lien[1] != "") {  
       document.getElementById("lenom").innerHTML = lien[0].toUpperCase() + " " + lien[1].charAt(0).toUpperCase() + lien[1].slice(1,lien[1].indexOf("-")) + "-" + lien[1].charAt(lien[1].indexOf("-") + 1).toUpperCase() + lien[1].slice(lien[1].indexOf("-") + 2)
    }
    else if (lien[1].indexOf(" ") > -1 && lien[1] != "") {
      document.getElementById("lenom").innerHTML = lien[0].toUpperCase() + " " + lien[1].charAt(0).toUpperCase() + lien[1].slice(1,lien[1].indexOf(" ")) + " " + lien[1].charAt(lien[1].indexOf(" ") + 1).toUpperCase() + lien[1].slice(lien[1].indexOf(" ") + 2)
    }
  }
  catch {
    document.getElementById("lenom").innerHTML = "RIMARO Sacha"
  }

  while (jr != 3) {
    lien = localStorage.getItem("lienedt").split(',')
    if (jr == 0) {
      lien = lien.slice(0,lien.indexOf("dem"))
        if (lien == "" || lien.indexOf("ajd") == -1) {
              lien = "a,a,ajd,un,8H00,10H00,Philo,ruchon,g,118,deux,10H00,11H00,H-G,stehlin,m,128,trois,11H00,12H00,ES,bendali,m,321,quatre,12H00,13H00,Pas de cours,cinq,13H00,15H00,EPS,descombes,m,EPS -1,Teps-1,six,15H00,17H00,SES,boisset,n,119,tses12".split(",") 
      }
    }
    else if (jr == 1) {
      lien = lien.slice(lien.indexOf("dem"), lien.indexOf("hier"))
      if (lien == "" || lien.indexOf("dem") == -1) {
        lien = "a,a,dem,un,8H00,10H00,MATH,abello,c,218,tmaths3,deux,10H00,11H00,Pas de cours,trois,11H00,12H00,Anglais,latournerie,k,310,tagl10,quatre,12H00,14H00,Pas de cours,cinq,14H00,15H00,H-G,stehlin,m,131,six,15H00,17H00,SES,boisset,n,122,tses12".split(",")
      }
    }
    else if (jr == 2) {
      lien = lien.slice(lien.indexOf("hier"))
      if (lien == "" || lien.indexOf("hier") == -1) {
        lien = "a,a,hier,un,8H00,9H00,Pas de cours,deux,9H00,10H00,Allemand,schleich,l,315,t04all2_2,trois,10H00,11H00,Philo,ruchon,g,131,quatre,11H00,12H00,Pas de cours,cinq,12H00,13H00,Anglais,latournerie,k,315,tagl10,six,13H00,15H00,MATH,abello,c,221,tmaths3".split(",")
      }
    }
    
    test = []
    cours = 0
    
      while (cours < 8) {
        posi = lien.indexOf(nb[cours])
        
        if (lien[posi + 3] == "Pas de cours" && test[cours - 1] != "Pas de cours") {
          var pdc = document.createElement("li") 
          pdc.className = "collection-item collection-absencecours"
          if (jr == 0) {
            document.getElementById("edtajd").insertBefore(pdc, document.getElementById("cours" + jr + nb[cours + 1]))
          }
          else if (jr == 1) {
            document.getElementById("edtsui").insertBefore(pdc, document.getElementById("cours" + jr + nb[cours + 1]))
          }
          else if (jr == 2) {
            document.getElementById("edtpre").insertBefore(pdc, document.getElementById("cours" + jr + nb[cours + 1]))
          }          document.getElementById("cours" + jr + nb[cours]).classList.add("hide")
          test.push("Pas de cours")
        }
        else if (lien[posi + 3] == "Pas de cours" && test[cours - 1] == "Pas de cours") {
          test.push("Pas de cours")
        }
        else if (posi != -1 && lien[posi + 3] != "Pas de cours") {
          test.push(lien[posi + 3])
          document.getElementById("cours" + jr + nb[cours]).classList.remove("hide")
          document.getElementById("heure" + jr + nb[cours]).innerHTML = lien[posi + 1]
          document.getElementById("heure" + jr + nb[cours] + "bis").innerHTML = lien[posi + 2]
          document.getElementById("color" + jr + nb[cours]).style = "border-color:" + clr[mat.indexOf(lien[posi + 3])]
          document.getElementById("mati" + jr + nb[cours]).innerHTML = realmat[mat.indexOf(lien[posi + 3])]
          document.getElementById("prof" + jr + nb[cours]).innerHTML = lien[posi + 4].toUpperCase() + " " + lien[posi + 5].toUpperCase() + "."
          document.getElementById("salle" + jr + nb[cours]).innerHTML = lien[posi + 6]
          if (bruh.indexOf(lien[posi + 3]) != -1) {
            document.getElementById("grp" + jr + nb[cours]).classList.remove("hide")
            if (lien[posi + 3] == "EPS") {
              document.getElementById("grp" + jr + nb[cours]).innerHTML = "[" + lien[posi + 7] + "]"
            }
            else {
              document.getElementById("grp" + jr + nb[cours]).innerHTML = "[" + lien[posi + 7].toUpperCase() + "]"
            }
            
          }
        }
        cours += 1
      }
      if (test[test.length - 1] != "Pas de cours") {
        var pdc = document.createElement("li") 
          pdc.className = "collection-item collection-absencecours"
          if (jr == 0) {
            document.getElementById("edtajd").insertBefore(pdc, document.getElementById("cours" + jr + nb[cours + 1]))
          }
          else if (jr == 1) {
            document.getElementById("edtsui").insertBefore(pdc, document.getElementById("cours" + jr + nb[cours + 1]))
          }
          else if (jr == 2) {
            document.getElementById("edtpre").insertBefore(pdc, document.getElementById("cours" + jr + nb[cours + 1]))
          }      }
    
    jr += 1
  }
}






window.addEventListener("load", function(event) {
document.getElementById("datee").innerHTML = avoirdate("date")
document.getElementById("ima").src = localStorage.getItem('phot')
  placement()
})

function changer(sens) {
 if (sens == "s" &&  document.getElementById("edtpre").classList.contains("hide") == false) {
document.getElementById("edtpre").classList.add("hide")
document.getElementById("edtajd").classList.remove("hide")
document.getElementById("datee").innerHTML = avoirdate("date")
 }
  else if (sens == "s" &&  document.getElementById("edtajd").classList.contains("hide") == false) {
    document.getElementById("edtajd").classList.add("hide")
    document.getElementById("edtsui").classList.remove("hide")
    document.getElementById("datee").innerHTML = avoirdate("sui")
  }

  if (sens == "p" &&  document.getElementById("edtsui").classList.contains("hide") == false) {
document.getElementById("edtsui").classList.add("hide")
document.getElementById("edtajd").classList.remove("hide")
    document.getElementById("datee").innerHTML = avoirdate("date")
 }
  else if (sens == "p" &&  document.getElementById("edtajd").classList.contains("hide") == false) {
    document.getElementById("edtajd").classList.add("hide")
    document.getElementById("edtpre").classList.remove("hide")
    document.getElementById("datee").innerHTML = avoirdate("pre")
  }
}
