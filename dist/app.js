(()=>{"use strict";function i(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function t(i,t){for(var s=0;s<t.length;s++){var e=t[s];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}var s=function(){function s(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,h=arguments.length>4&&void 0!==arguments[4]?arguments[4]:13;i(this,s),this.radius=n,this.speedX=h,this.speedY=h,this.color=o,this.diameter=2*this.radius,this.pos={x:Math.random()*(t-2*this.diameter)+this.diameter,y:Math.random()*(e-2*this.diameter)+this.diameter}}var e,o;return e=s,(o=[{key:"posAdjust",value:function(i,t){this.pos.x-this.radius<0?this.pos.x=this.radius:this.pos.x+this.radius>=i&&(this.pos.x=i-this.radius),this.pos.y-this.raidus<0?this.pos.y=this.radius:this.pos.y+this.radius>=t&&(this.pos.y=t-this.radius)}},{key:"clear",value:function(i){i.clearRect(this.pos.x-this.radius-1,this.pos.y-this.radius-1,2*this.radius+2,2*this.radius+2)}},{key:"draw",value:function(i,t,s){this.pos.x+=this.speedX,this.pos.y+=this.speedY,this.bounceEdge(t,s),i.fillStyle=this.color,i.beginPath(),i.arc(this.pos.x,this.pos.y,this.radius,0,2*Math.PI),i.fill()}},{key:"bounceEdge",value:function(i,t){var s=this.radius,e=i-this.radius,o=t-this.radius;this.pos.x<=s||this.pos.x>=e?(this.speedX*=-1,this.pos.x+=this.speedX):(this.pos.y<=s||this.pos.y>=o)&&(this.speedY*=-1,this.pos.y+=this.speedY)}}])&&t(e.prototype,o),s}(),e=0,o=0,n=null,h=null,d=document.createElement("canvas"),a=d.getContext("2d"),r=function(){var i,t,s;e=null===(i=n)||void 0===i?void 0:i.clientWidth,o=null===(t=n)||void 0===t?void 0:t.clientHeight,d.width=e,d.height=o,null===(s=h)||void 0===s||s.posAdjust(e,o)},l=function i(){var t,s;requestAnimationFrame(i),null===(t=h)||void 0===t||t.clear(a),null===(s=h)||void 0===s||s.draw(a,e,o)};onload=function(){var i=document.createElement("div");i.setAttribute("id","animationWrapper"),i.style.width="50vw",i.style.height="50vh",i.style.backgroundColor="#aa1e1e",i.style.overFlow="hidden",document.body.appendChild(i),function(){var i,t,a,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,v=arguments.length>3&&void 0!==arguments[3]?arguments[3]:30;e=null===(i=n=u)||void 0===i?void 0:i.clientWidth,o=null===(t=n)||void 0===t?void 0:t.clientHeight,null===(a=n)||void 0===a||a.appendChild(d),h=new s(e,o,p,c,v),addEventListener("resize",r,!1),requestAnimationFrame(l),r()}(i,"#eee",50,13)}})();