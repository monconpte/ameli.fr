var effect={};effect.fadeIn=function fadeIn(b,c,d){if(typeof c==="function"){c()}var a=new Fx.Tween(b,{duration:700,transition:Fx.Transitions.Quad.easeInOut,property:"opacity",onComplete:function(){b.setAttribute("aria-hidden","false");if(typeof d==="function"){d()}}});a.start("0","1");(function(){this.removeClass("invisible")}).delay(50,b)};effect.toggleShow=function(a){if(a.style.display==="none"){effect.tweenShow(a)}else{effect.tweenHide(a)}};effect.tweenShow=function(b){b.setStyle("height","auto");b.setStyle("overflow","hidden");var a=new Fx.Tween(b,{duration:500,transition:Fx.Transitions.Quad.easeInOut,property:"height",onComplete:function(){b.setAttribute("aria-hidden","false");b.style.height="auto";b.style.overflow="";b.removeClass("hidden")}});b.show();var c=b.getDimensions().y;b.hide();a.start("0",c);(function(){this.style.display="block"}).delay(50,b)};effect.tweenShowInline=function(b){b.setStyle("height","auto");b.setStyle("overflow","hidden");var a=new Fx.Tween(b,{duration:500,transition:Fx.Transitions.Quad.easeInOut,property:"height",onComplete:function(){b.setAttribute("aria-hidden","false");b.style.height="auto";b.setStyle("overflow","");b.removeClass("hidden")}});b.show();var c=b.getDimensions().y;b.hide();a.start("0",c);(function(){this.setStyle("display","inline-block")}).delay(50,b)};effect.tweenHide=function(b,c){b.setStyle("overflow","hidden");var a=new Fx.Tween(b,{duration:500,transition:Fx.Transitions.Quad.easeInOut,property:"height",onComplete:function(){b.setAttribute("aria-hidden","true");b.style.height="auto";b.setStyle("display","none");b.setStyle("overflow","");b.addClass("hidden");if(c){c()}}});a.start(b.getDimensions().y,"0")};