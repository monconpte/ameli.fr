function appelActionRevocationInfoPerso(){disableButtonsAndLink();var a={};new Request({method:"POST",url:"/PortailAS/portlets/procuration/procuration.do?actionEvt=revoquerProcurationInfoPerso",data:a,onSuccess:function(b){var c=JSON.parse(b);if(c.codeRetour==="OK"){gestionRetourRevocationInfoPerso()}else{gestionErreurRetourRevocationInfoPerso()}},onFailure:function(b){enableButtonsAndLink();gestionErreurRetourRevocationInfoPerso()}}).send()}function disableButtonsAndLink(){$(context+"btnRetour").disabled=true;$(context+"btnRevoquer").disabled=true;$("popinSupprimerFermer").addClass("inactif")}function enableButtonsAndLink(){$(context+"btnRetour").disabled=false;$(context+"btnRevoquer").disabled=false;$("popinSupprimerFermer").removeClass("inactif")}function gestionRetourRevocationInfoPerso(){window.location.href="#";window.location.reload()}function gestionErreurRetourRevocationInfoPerso(){var a=window.location.href.split("#")[0]+"&"+context+"actionEvt=afficherErreur";window.location.assign(a)}function appelActionRevocation(a){disableButtonsAndLink();var b={};new Request({method:"POST",url:"/PortailAS/portlets/procuration/procuration.do?actionEvt=revoquerProcuration",data:b,onSuccess:function(c){var d=JSON.parse(c);if(d.codeRetour==="OK"){gestionRetourRevocation(a)}else{gestionErreurRetourRevocation()}},onFailure:function(c){enableButtonsAndLink();gestionErreurRetourRevocation()}}).send()}function gestionRetourRevocation(a){window.location.href=a}function gestionErreurRetourRevocation(){var a=window.location.href.split("#")[0]+"&"+context+"actionEvt=afficherErreur";window.location.assign(a)}function updateSaisieInformationBtnStatus(){var a=false;if($(context+"civiliteSelect").value.length===0){a=true}if(($(context+"saisieNom").value.trim().length==0)||($(context+"saisiePrenom").value.trim().length==0)){a=true}if(!validateDateProcuration($(context+"dateNaissance").value.trim())){a=true;if(!($(context+"dateNaissance").value.trim().length==0)){updateErrorDateProcuration(false)}}else{updateErrorDateProcuration(true)}$(context+"suivant").disabled=a}function validateDateProcuration(e){var h=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;var a=true;if(e.match(h)){var f=e.split("/");var i=parseInt(f[0]);var c=parseInt(f[1]);var g=parseInt(f[2]);var d=[31,28,31,30,31,30,31,31,30,31,30,31];if(c==1||c>2){if(i>d[c-1]){a=false}}if(c==2){var b=false;if((!(g%4)&&g%100)||!(g%400)){b=true}if((b==false)&&(i>=29)){a=false}if((b==true)&&(i>29)){a=false}}}else{a=false}return a}function updateErrorDateProcuration(c){var b=$(context+"dateNaissance");var a=$(context+"idDateNaissanceErreur");b.removeClass("erreur-champ-procuration-ddn");$("saisieDateNaissanceProc").removeClass("hasErrorProc");if(c){b.removeClass("erreur-champ-procuration-ddn");$("saisieDateNaissanceProc").removeClass("hasErrorProc");a.textContent="";a.addClass("hidden")}else{b.addClass("erreur-champ-procuration-ddn");$("saisieDateNaissanceProc").addClass("hasErrorProc");a.textContent=erreurDateMessage;a.removeClass("hidden")}}function autoriserBoutonValidationProcuration(a){$(context+"suivant").disabled=!($(a).checked)};