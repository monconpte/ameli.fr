function boutonDisabledDeclarationEnfant(){var d=$(pcNouveauNe+"idPremierPrenom").value.length>0;var a=$(pcNouveauNe+"idNomFamille").value.length>0;var c=$(pcNouveauNe+"idDateNaissance").value.length>0;var b=$(pcNouveauNe+"idDepartementNaissance").value.length>0;if(d&&a&&c&&b&&verifDepartementListe()){$(pcNouveauNe+"validerDeclarationNN").disabled=false}else{$(pcNouveauNe+"validerDeclarationNN").disabled=true}}function ouvrirAutrePrenom(){var b=$(pcNouveauNe+"Prenom2");var a=$(pcNouveauNe+"Prenom3");if(b.hasClass("hidden")){effect.tweenShowInline(b)}else{effect.tweenShowInline(a);$("idAjoutprenom").addClass("hidden")}}function supprimerPrenom2(){var b=$(pcNouveauNe+"idPrenom2");var a=$(pcNouveauNe+"idPrenom3");if($(pcNouveauNe+"Prenom3").hasClass("hidden")){effect.tweenHide($(pcNouveauNe+"Prenom2"));b.value=""}else{effect.tweenHide($(pcNouveauNe+"Prenom3"));b.value=a.value;a.value="";$("idAjoutprenom").removeClass("hidden")}}function supprimerPrenom3(){effect.tweenHide($(pcNouveauNe+"Prenom3"));$("idAjoutprenom").removeClass("hidden");$(pcNouveauNe+"idPrenom3").value=""}function afficheErreurDepartement(){var a=$(pcNouveauNe+"idDepartementNaissance");if(verifDepartementListe()){ChampSaisieTag.champOK(a)}else{ChampSaisieTag.erreurChamp(a,msgErreurDepartement)}}function verifDepartementListe(){var a=false;var c=listeDepartement.split("|");for(var b=0;b<c.length;b++){if(c[b]===$(pcNouveauNe+"idDepartementNaissance").value){a=true;break}}return a}function activerBoutonSuivantSecondParent(){var d=$(pcNouveauNe+"idPrenom").value.length>0;var a=$(pcNouveauNe+"idNom").value.length>0;var c=$(pcNouveauNe+"idNumSecu").value.length>0;var b=$(pcNouveauNe+"idCle").value.length>0;if(d&&a&&c&&b){$(pcNouveauNe+"bouton-suivant").disabled=false}else{$(pcNouveauNe+"bouton-suivant").disabled=true}}function autoTabNir(d){const a=/^[a-zA-Z0-9]{1}$/;var c=d.event.key.toString().match(a);var b=$(pcNouveauNe+"idNumSecu").value.length===$(pcNouveauNe+"idNumSecu").maxLength;if(c&&b){$(pcNouveauNe+"idCle").focus();$(pcNouveauNe+"idCle").select()}}function afficherSuitePJNouveauNe(){if($(pcNouveauNe+"idChampFichier").classList.contains("r_file_selected")||$(pcNouveauNe+"idFichier_messageErreur").innerHTML==""){$("introPJ").addClass("hidden");$("titreIntroPj").addClass("hidden");$("pjTelecharge").removeClass("hidden")}}function afficherParentsDoubleRattachement(){if($("switchcheckbox").checked){effect.tweenShowInline($("choixParent"));if(!$(pcNouveauNe+"utilisateurConnecte").checked&&!$(pcNouveauNe+"autreParent").checked){$(pcNouveauNe+"utilisateurConnecte").checked=true}}else{effect.tweenHide($("choixParent"))}}function activerBoutonSuivantDoubleRattachement(){var c=$("switchcheckbox").checked;var b=$(pcNouveauNe+"utilisateurConnecte").checked;var a=$(pcNouveauNe+"autreParent").checked;if(c){if(b||secondParent){$(pcNouveauNe+"bouton-valider").disabled=false}else{$(pcNouveauNe+"bouton-valider").disabled=true}}else{$(pcNouveauNe+"bouton-valider").disabled=false}};