// -----------------------------------------------------------------------------------
// vanillajs-heart-animation by Smart Tech Mukesh (v1.0.0) - https://github.com/smarttechmukesh/vanillajs-heart-animation/
// -----------------------------------------------------------------------------------
!function(e,t){var a,r=[];e.requestAnimationFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},function e(a){var r=t.createElement("style");r.type="text/css";try{r.appendChild(t.createTextNode(a))}catch(o){r.styleSheet.cssText=a}t.getElementsByTagName("head")[0].appendChild(r)}(".hearts{width:10px;height:10px;position:fixed;background:#f00;transform:rotate(45deg);-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg)}.hearts:after,.hearts:before{content:'';width:inherit;height:inherit;background:inherit;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;position:fixed}.hearts:after{top:-5px}.hearts:before{left:-5px}"),a="function"==typeof e.onclick&&e.onclick,e.onclick=function(e){var o,n;a&&a(),o=e,(n=t.createElement("div")).className="hearts",r.push({el:n,x:o.clientX-5,y:o.clientY-5,scale:1,alpha:1,color:"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}),t.body.appendChild(n)},function e(){for(var a=0;a<r.length;a++)r[a].alpha<=0?(t.body.removeChild(r[a].el),r.splice(a,1)):(r[a].y--,r[a].scale+=.004,r[a].alpha-=.013,r[a].el.style.cssText="left:"+r[a].x+"px;top:"+r[a].y+"px;opacity:"+r[a].alpha+";transform:scale("+r[a].scale+","+r[a].scale+") rotate(45deg);background:"+r[a].color+";z-index:99999");requestAnimationFrame(e)}()}(window,document);
