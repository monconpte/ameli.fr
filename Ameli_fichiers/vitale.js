var vitale={data:{},pages:{commandeChoixBeneficaire:{},commandeConfirmation:{},demandepvd:{}}};vitale.pages.commandeChoixBeneficaire.activateBouton=function(){var b=true;var a=$("beneficiaire_vitale").getElements('[id^="portlet_commandeVitaleselectionBenefId"]');a.forEach(function(c){var d=c.id;if(document.getElementById(d).checked){b=false}});$(vitale.data.pC+"bouton-submit").disabled=b};function activateBtnPjVitale(){var a=false;var b=$(vitale.data.pC+"idFichier");if(b.value===""||b.parentNode.hasClass("erreur_champ")){a=true}$(vitale.data.pC+"bouton-submit").disabled=a}function selectPhotoPpiVitale(){document.location.href="#";var a=document.createEvent("MouseEvents");a.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);$(vitale.data.pC+"idFichier").dispatchEvent(a)}vitale.pages.commandeConfirmation.activateBouton=function(){var a=true;if($(vitale.data.pC+"honneurId").checked){a=false}$(vitale.data.pC+"bouton-submit").disabled=a};vitale.pages.demandepvd.activateBouton=function(){var d=true;var c=false;var e=false;var a=false;var b=$("pvd_choix_benef").getElements('[id^="portletInstance_perteVolVitale_1selectionBenefId"]');b.forEach(function(f){var g=f.id;if($(g).checked){c=true}});if($(vitale.data.pC+"Perte").checked||$(vitale.data.pC+"Vol").checked||$(vitale.data.pC+"Dysfonctionnement").checked){e=true}if($(vitale.data.pC+"honneurId").checked){a=true}if(a&&c&&e){d=false}$(vitale.data.pC+"bouton-submit").disabled=d};