function controlEmail(f,e,c){var b=f.value;var d=false;var a=new RegExp(c,"g");if(a.test(b)){ChampSaisieTag.champOK(f);d=false}else{if(b.length===0){ChampSaisieTag.champOK(f);d=true}else{ChampSaisieTag.erreurChamp(f,e.pattern);d=true}}return d}function controlDateNaissance(d,g,i){var f=false;var e=new RegExp("^[0-9]{2}/[0-9]{2}/([0-9]{4})$","g");var c=$("div_connexioncompte_2_date_naissance");if(d.value.length===0){if(!i){ChampSaisieTag.champOK(d);if(c){c.removeClass("no-background")}}f=true}else{if(!e.test(d.value)){if(!i){ChampSaisieTag.erreurChamp(d,g.pattern);if(c){c.addClass("no-background")}}f=true}else{var h=d.value.split("/");var b=new Date();var a=new Date(h[2],h[1]-1,h[0]);if(a>=b){if(!i){ChampSaisieTag.erreurChamp(d,g.anterieur);if(c){c.addClass("no-background")}}f=true}else{if(!i){ChampSaisieTag.champOK(d)}if(c){c.removeClass("no-background")}f=false}}}return f}function controlNir(h,d,b){var e=h.value;var a=false;var c=$("div_connexioncompte_2_nir_as");var f=e.split(" ").join("");if(f.length!==13&&f.length>0){a=true;if(!b){ChampSaisieTag.erreurChamp(h,d.length);if(c){c.addClass("no-background")}}}else{var g=new RegExp("^[0-9]{6}[0-9ABab][0-9]{6}$","g");if(g.test(f)){if(!b){ChampSaisieTag.champOK(h);if(c){c.removeClass("no-background")}}a=false}else{if(e.length===0){if(!b){ChampSaisieTag.champOK(h);if(c){c.removeClass("no-background")}}a=true}else{if(!b){ChampSaisieTag.erreurChamp(h,d.pattern);if(c){c.addClass("no-background")}}a=true}}}return a}function controlCodePostal(g,e,d){var f=g.value;var c=false;var b=$(g.id+"_messageErreur");var a=new RegExp("^[0-9]{5}$","g");if(a.test(f)){if(!d){ChampSaisieTag.champOK(g)}c=false}else{if(f.length===0){if(!d){ChampSaisieTag.champOK(g)}c=true}else{if(!d){ChampSaisieTag.erreurChamp(g,e.pattern)}c=true}}return c}function controlNom(d,b,a){var c=false;if(d.value.length>0){if(!a){ChampSaisieTag.champOK(d)}c=false}else{c=true;if(!a){ChampSaisieTag.erreurChamp(d,b.length)}}return c}function enableBoutonDDC(a,b){var c=false;if(controlNir($(a+"idNir"),errors[a+"idNir"],true)){c=true}else{if(controlDateNaissance($(a+"idDna"),errors[a+"idDna"],true)){c=true}}$(a+"id_r_cnx_btn_submit").disabled=c}function enableBoutonCIC(a){var b=false;if(controlNir($(a+"idNir"),errors[a+"idNir"],false)){b=true}if(controlDateNaissance($(a+"idDna"),errors[a+"idDna"])){b=true}if(controlCodePostal($(a+"idCp"),errors[a+"idCp"])){b=true}if(controlNom($(a+"idNom"),errors[a+"idNom"])){b=true}$(a+"id_r_cnx_btn_submit").disabled=b}function focusDateNaissance(a){var b=$(a+"idDna");if(b.value.length===0){initCalendarWithNir($(a+"idNir"),b,"","${creationImmediateForm.dateToday}",true)}if(b.value.length===8){$(b.id).setCaretPosition(0)}}function eventInfoBulle(a){$("bulleAideSaisieNom").addEventListener("keydown",function(b){b=b||window.event;if(b.keyCode===32||b.keyCode===13){Fenetre.components[a+"AideSaisieNom"].open()}});$(a+"AideSaisieNom_close").addEventListener("keydown",function(b){b=b||window.event;if(b.keyCode===32||b.keyCode===13){Fenetre.components[a+"AideSaisieNom"].close();document.getElementById("bulleAideSaisieNom").focus()}});$("bulleAideSaisieNir").addEventListener("keydown",function(b){b=b||window.event;if(b.keyCode===32||b.keyCode===13){Fenetre.components[a+"AideSaisieNir"].open()}});$(a+"AideSaisieNir_close").addEventListener("keydown",function(b){b=b||window.event;if(b.keyCode===32||b.keyCode===13){Fenetre.components[a+"AideSaisieNir"].close();document.getElementById("bulleAideSaisieNir").focus()}});$("bulleAideSaisieCp").addEventListener("keydown",function(b){b=b||window.event;if(b.keyCode===32||b.keyCode===13){Fenetre.components[a+"AideSaisieCp"].open()}});$(a+"AideSaisieCp_close").addEventListener("keydown",function(b){b=b||window.event;if(b.keyCode===32||b.keyCode===13){Fenetre.components[a+"AideSaisieCp"].close();document.getElementById("bulleAideSaisieCp").focus()}})};