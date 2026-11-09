(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mo="170",il=0,Vo=1,sl=2,sc=1,rc=2,pn=3,Dn=0,Le=1,$e=2,In=0,pi=1,Ps=2,Wo=3,Xo=4,rl=5,Wn=100,ol=101,al=102,cl=103,ll=104,hl=200,ul=201,dl=202,fl=203,Mr=204,Sr=205,pl=206,ml=207,gl=208,_l=209,xl=210,vl=211,yl=212,Ml=213,Sl=214,wr=0,Er=1,Tr=2,_i=3,br=4,Ar=5,Cr=6,Rr=7,oc=0,wl=1,El=2,Ln=0,Tl=1,bl=2,Al=3,ac=4,Cl=5,Rl=6,Pl=7,cc=300,xi=301,vi=302,Pr=303,Ir=304,Ds=306,tn=1e3,qn=1001,Lr=1002,je=1003,Il=1004,Yi=1005,nn=1006,zs=1007,Yn=1008,vn=1009,lc=1010,hc=1011,zi=1012,go=1013,$n=1014,gn=1015,Gi=1016,_o=1017,xo=1018,yi=1020,uc=35902,dc=1021,fc=1022,Ze=1023,pc=1024,mc=1025,mi=1026,Mi=1027,gc=1028,vo=1029,_c=1030,yo=1031,Mo=1033,vs=33776,ys=33777,Ms=33778,Ss=33779,Dr=35840,Nr=35841,Ur=35842,Fr=35843,Or=36196,Br=37492,kr=37496,zr=37808,Gr=37809,Hr=37810,Vr=37811,Wr=37812,Xr=37813,qr=37814,Yr=37815,$r=37816,Kr=37817,Zr=37818,jr=37819,Jr=37820,Qr=37821,ws=36492,to=36494,eo=36495,xc=36283,no=36284,io=36285,so=36286,Ll=3200,Dl=3201,vc=0,Nl=1,Rn="",ge="srgb",wi="srgb-linear",Ns="linear",se="srgb",jn=7680,qo=519,Ul=512,Fl=513,Ol=514,yc=515,Bl=516,kl=517,zl=518,Gl=519,Yo=35044,$o="300 es",_n=2e3,Is=2001;class Ei{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gs=Math.PI/180,ro=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function Hl(i,t){return(i%t+t)%t}function Hs(i,t,e){return(1-e)*i+e*t}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,s,r,o,a,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],u=s[6],E=s[1],w=s[4],x=s[7],R=s[2],T=s[5],C=s[8];return r[0]=o*_+a*E+c*R,r[3]=o*p+a*w+c*T,r[6]=o*u+a*x+c*C,r[1]=l*_+h*E+d*R,r[4]=l*p+h*w+d*T,r[7]=l*u+h*x+d*C,r[2]=f*_+m*E+g*R,r[5]=f*p+m*w+g*T,r[8]=f*u+m*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,f=a*c-h*r,m=l*r-o*c,g=e*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vs.makeScale(t,e)),this}rotate(t){return this.premultiply(Vs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vs=new Vt;function Mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vl(){const i=Ls("canvas");return i.style.display="block",i}const Ko={};function Oi(i){i in Ko||(Ko[i]=!0,console.warn(i))}function Wl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ql(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(i.r=xn(i.r),i.g=xn(i.g),i.b=xn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rn?Ns:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Zo=[.64,.33,.3,.6,.15,.06],jo=[.2126,.7152,.0722],Jo=[.3127,.329],Qo=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ta=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[wi]:{primaries:Zo,whitePoint:Jo,transfer:Ns,toXYZ:Qo,fromXYZ:ta,luminanceCoefficients:jo,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:Zo,whitePoint:Jo,transfer:se,toXYZ:Qo,fromXYZ:ta,luminanceCoefficients:jo,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});let Jn;class Yl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Jn===void 0&&(Jn=Ls("canvas")),Jn.width=t.width,Jn.height=t.height;const n=Jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $l=0;class Sc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ws(s[o].image)):r.push(Ws(s[o]))}else r=Ws(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ws(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kl=0;class Ce extends Ei{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=qn,s=qn,r=nn,o=Yn,a=Ze,c=vn,l=Ce.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Hi(),this.name="",this.source=new Sc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tn:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tn:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=cc;Ce.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,x=(m+1)/2,R=(u+1)/2,T=(h+f)/4,C=(d+_)/4,I=(g+p)/4;return w>x&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=C/n):x>R?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(f-h)/E,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zl extends Ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wc extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jl extends Ce{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==f||l!==m||h!==g){let p=1-a;const u=c*f+l*m+h*g+d*_,E=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){const R=Math.sqrt(w),T=Math.atan2(R,u*E);p=Math.sin(p*T)/R,a=Math.sin(a*T)/R}const x=a*E;if(c=c*p+f*x,l=l*p+m*x,h=h*p+g*x,d=d*p+_*x,p===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=R,l*=R,h*=R,d*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*m-l*f,t[e+1]=c*g+h*f+l*d-a*m,t[e+2]=l*g+h*m+a*f-c*d,t[e+3]=h*g-a*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),f=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ea.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ea.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xs.copy(this).projectOnVector(t),this.sub(Xs)}reflect(t){return this.sub(Xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new N,ea=new Vi;class Wi{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,We):We.fromBufferAttribute(r,o),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$i.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(t.matrixWorld),this.union($i)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),Ki.subVectors(this.max,Ii),Qn.subVectors(t.a,Ii),ti.subVectors(t.b,Ii),ei.subVectors(t.c,Ii),Sn.subVectors(ti,Qn),wn.subVectors(ei,ti),Fn.subVectors(Qn,ei);let e=[0,-Sn.z,Sn.y,0,-wn.z,wn.y,0,-Fn.z,Fn.y,Sn.z,0,-Sn.x,wn.z,0,-wn.x,Fn.z,0,-Fn.x,-Sn.y,Sn.x,0,-wn.y,wn.x,0,-Fn.y,Fn.x,0];return!qs(e,Qn,ti,ei,Ki)||(e=[1,0,0,0,1,0,0,0,1],!qs(e,Qn,ti,ei,Ki))?!1:(Zi.crossVectors(Sn,wn),e=[Zi.x,Zi.y,Zi.z],qs(e,Qn,ti,ei,Ki))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new N,new N,new N,new N,new N,new N,new N,new N],We=new N,$i=new Wi,Qn=new N,ti=new N,ei=new N,Sn=new N,wn=new N,Fn=new N,Ii=new N,Ki=new N,Zi=new N,On=new N;function qs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){On.fromArray(i,r);const a=s.x*Math.abs(On.x)+s.y*Math.abs(On.y)+s.z*Math.abs(On.z),c=t.dot(On),l=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Jl=new Wi,Li=new N,Ys=new N;class Us{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Li.subVectors(t,this.center);const e=Li.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Li,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ys.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Li.copy(t.center).add(Ys)),this.expandByPoint(Li.copy(t.center).sub(Ys))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new N,$s=new N,ji=new N,En=new N,Ks=new N,Ji=new N,Zs=new N;class So{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$s.copy(t).add(e).multiplyScalar(.5),ji.copy(e).sub(t).normalize(),En.copy(this.origin).sub($s);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ji),a=En.dot(this.direction),c=-En.dot(ji),l=En.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*c-a,f=o*a-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy($s).addScaledVector(ji,f),m}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),s=hn.dot(hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,s,r){Ks.subVectors(e,t),Ji.subVectors(n,t),Zs.crossVectors(Ks,Ji);let o=this.direction.dot(Zs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);const c=a*this.direction.dot(Ji.crossVectors(En,Ji));if(c<0)return null;const l=a*this.direction.dot(Ks.cross(En));if(l<0||c+l>o)return null;const h=-a*En.dot(Zs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,o,a,c,l,h,d,f,m,g,_,p){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,f,m,g,_,p)}set(t,e,n,s,r,o,a,c,l,h,d,f,m,g,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ni.setFromMatrixColumn(t,0).length(),r=1/ni.setFromMatrixColumn(t,1).length(),o=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,m=c*d,g=l*h,_=l*d;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,m=c*d,g=l*h,_=l*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,m=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*c,m=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+_,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ql,t,th)}lookAt(t,e,n){const s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Tn.crossVectors(n,Ue),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Tn.crossVectors(n,Ue)),Tn.normalize(),Qi.crossVectors(Ue,Tn),s[0]=Tn.x,s[4]=Qi.x,s[8]=Ue.x,s[1]=Tn.y,s[5]=Qi.y,s[9]=Ue.y,s[2]=Tn.z,s[6]=Qi.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],E=n[3],w=n[7],x=n[11],R=n[15],T=s[0],C=s[4],I=s[8],S=s[12],y=s[1],P=s[5],z=s[9],k=s[13],q=s[2],$=s[6],X=s[10],j=s[14],U=s[3],nt=s[7],at=s[11],ht=s[15];return r[0]=o*T+a*y+c*q+l*U,r[4]=o*C+a*P+c*$+l*nt,r[8]=o*I+a*z+c*X+l*at,r[12]=o*S+a*k+c*j+l*ht,r[1]=h*T+d*y+f*q+m*U,r[5]=h*C+d*P+f*$+m*nt,r[9]=h*I+d*z+f*X+m*at,r[13]=h*S+d*k+f*j+m*ht,r[2]=g*T+_*y+p*q+u*U,r[6]=g*C+_*P+p*$+u*nt,r[10]=g*I+_*z+p*X+u*at,r[14]=g*S+_*k+p*j+u*ht,r[3]=E*T+w*y+x*q+R*U,r[7]=E*C+w*P+x*$+R*nt,r[11]=E*I+w*z+x*X+R*at,r[15]=E*S+w*k+x*j+R*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*m-n*c*m)+_*(+e*c*m-e*l*f+r*o*f-s*o*m+s*l*h-r*c*h)+p*(+e*l*d-e*a*m-r*o*d+n*o*m+r*a*h-n*l*h)+u*(-s*a*h-e*c*d+e*a*f+s*o*d-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],E=d*p*l-_*f*l+_*c*m-a*p*m-d*c*u+a*f*u,w=g*f*l-h*p*l-g*c*m+o*p*m+h*c*u-o*f*u,x=h*_*l-g*d*l+g*a*m-o*_*m-h*a*u+o*d*u,R=g*d*c-h*_*c-g*a*f+o*_*f+h*a*p-o*d*p,T=e*E+n*w+s*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=E*C,t[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*u-n*f*u)*C,t[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*u+n*c*u)*C,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*m-n*c*m)*C,t[4]=w*C,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*C,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*u-e*c*u)*C,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*m+e*c*m)*C,t[8]=x*C,t[9]=(g*d*r-h*_*r-g*n*m+e*_*m+h*n*u-e*d*u)*C,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*u+e*a*u)*C,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*m-e*a*m)*C,t[12]=R*C,t[13]=(h*_*s-g*d*s+g*n*f-e*_*f-h*n*p+e*d*p)*C,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*p-e*a*p)*C,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,f=r*l,m=r*h,g=r*d,_=o*h,p=o*d,u=a*d,E=c*l,w=c*h,x=c*d,R=n.x,T=n.y,C=n.z;return s[0]=(1-(_+u))*R,s[1]=(m+x)*R,s[2]=(g-w)*R,s[3]=0,s[4]=(m-x)*T,s[5]=(1-(f+u))*T,s[6]=(p+E)*T,s[7]=0,s[8]=(g+w)*C,s[9]=(p-E)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ni.set(s[0],s[1],s[2]).length();const o=ni.set(s[4],s[5],s[6]).length(),a=ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xe.copy(this);const l=1/r,h=1/o,d=1/a;return Xe.elements[0]*=l,Xe.elements[1]*=l,Xe.elements[2]*=l,Xe.elements[4]*=h,Xe.elements[5]*=h,Xe.elements[6]*=h,Xe.elements[8]*=d,Xe.elements[9]*=d,Xe.elements[10]*=d,e.setFromRotationMatrix(Xe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=_n){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let m,g;if(a===_n)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Is)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_n){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*l,m=(n+s)*h;let g,_;if(a===_n)g=(o+r)*d,_=-2*d;else if(a===Is)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new N,Xe=new oe,Ql=new N(0,0,0),th=new N(1,1,1),Tn=new N,Qi=new N,Ue=new N,na=new oe,ia=new Vi;class rn{constructor(t=0,e=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return na.makeRotationFromQuaternion(t),this.setFromRotationMatrix(na,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ia.setFromEuler(this),this.setFromQuaternion(ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class wo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eh=0;const sa=new N,ii=new Vi,un=new oe,ts=new N,Di=new N,nh=new N,ih=new Vi,ra=new N(1,0,0),oa=new N(0,1,0),aa=new N(0,0,1),ca={type:"added"},sh={type:"removed"},si={type:"childadded",child:null},js={type:"childremoved",child:null};class we extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new N,e=new rn,n=new Vi,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Vt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(ra,t)}rotateY(t){return this.rotateOnAxis(oa,t)}rotateZ(t){return this.rotateOnAxis(aa,t)}translateOnAxis(t,e){return sa.copy(t).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ra,t)}translateY(t){return this.translateOnAxis(oa,t)}translateZ(t){return this.translateOnAxis(aa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ts.copy(t):ts.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Di,ts,this.up):un.lookAt(ts,Di,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),ii.setFromRotationMatrix(un),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ca),si.child=t,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sh),js.child=t,this.dispatchEvent(js),js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ca),si.child=t,this.dispatchEvent(si),si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,ih,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}we.DEFAULT_UP=new N(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new N,dn=new N,Js=new N,fn=new N,ri=new N,oi=new N,la=new N,Qs=new N,tr=new N,er=new N,nr=new re,ir=new re,sr=new re;class Ke{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qe.subVectors(t,e),s.cross(qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qe.subVectors(s,e),dn.subVectors(n,e),Js.subVectors(t,e);const o=qe.dot(qe),a=qe.dot(dn),c=qe.dot(Js),l=dn.dot(dn),h=dn.dot(Js),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(o,fn.y),c.addScaledVector(a,fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return nr.setScalar(0),ir.setScalar(0),sr.setScalar(0),nr.fromBufferAttribute(t,e),ir.fromBufferAttribute(t,n),sr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(nr,r.x),o.addScaledVector(ir,r.y),o.addScaledVector(sr,r.z),o}static isFrontFacing(t,e,n,s){return qe.subVectors(n,e),dn.subVectors(t,e),qe.cross(dn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),qe.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ri.subVectors(s,n),oi.subVectors(r,n),Qs.subVectors(t,n);const c=ri.dot(Qs),l=oi.dot(Qs);if(c<=0&&l<=0)return e.copy(n);tr.subVectors(t,s);const h=ri.dot(tr),d=oi.dot(tr);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ri,o);er.subVectors(t,r);const m=ri.dot(er),g=oi.dot(er);if(g>=0&&m<=g)return e.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(oi,a);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return la.subVectors(r,s),a=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(la,a);const u=1/(p+_+f);return o=_*u,a=f*u,e.copy(n).addScaledVector(ri,o).addScaledVector(oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},es={h:0,s:0,l:0};function rr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Hl(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=rr(o,r,t+1/3),this.g=rr(o,r,t),this.b=rr(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=Ec[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Jt.fromWorkingColorSpace(be.copy(this),t),Math.round(Ie(be.r*255,0,255))*65536+Math.round(Ie(be.g*255,0,255))*256+Math.round(Ie(be.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,s=be.g,r=be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ge){Jt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,s=be.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(es);const n=Hs(bn.h,es.h,e),s=Hs(bn.s,es.s,e),r=Hs(bn.l,es.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Zt;Zt.NAMES=Ec;let rh=0;class Ti extends Ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=Hi(),this.name="",this.blending=pi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mr,this.blendDst=Sr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mr&&(n.blendSrc=this.blendSrc),this.blendDst!==Sr&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class me extends Ti{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new N,ns=new Yt;class Ge{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yo,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ns.fromBufferAttribute(this,e),ns.applyMatrix3(t),this.setXY(e,ns.x,ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yo&&(t.usage=this.usage),t}}class Tc extends Ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bc extends Ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends Ge{constructor(t,e,n){super(new Float32Array(t),e,n)}}let oh=0;const ke=new oe,or=new we,ai=new N,Fe=new Wi,Ni=new Wi,Se=new N;class De extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mc(t)?bc:Tc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return or.lookAt(t),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ni.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Fe.min,Ni.min),Fe.expandByPoint(Se),Se.addVectors(Fe.max,Ni.max),Fe.expandByPoint(Se)):(Fe.expandByPoint(Ni.min),Fe.expandByPoint(Ni.max))}Fe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Se.fromBufferAttribute(a,l),c&&(ai.fromBufferAttribute(t,l),Se.add(ai)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ge(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new N,c[I]=new N;const l=new N,h=new N,d=new N,f=new Yt,m=new Yt,g=new Yt,_=new N,p=new N;function u(I,S,y){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(l),d.sub(l),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(P),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(_),a[S].add(_),a[y].add(_),c[I].add(p),c[S].add(p),c[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,S=E.length;I<S;++I){const y=E[I],P=y.start,z=y.count;for(let k=P,q=P+z;k<q;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new N,x=new N,R=new N,T=new N;function C(I){R.fromBufferAttribute(s,I),T.copy(R);const S=a[I];w.copy(S),w.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(T,S);const P=x.dot(c[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,P)}for(let I=0,S=E.length;I<S;++I){const y=E[I],P=y.start,z=y.count;for(let k=P,q=P+z;k<q;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,d=new N;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new Ge(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new oe,Bn=new So,is=new Us,ua=new N,ss=new N,rs=new N,os=new N,ar=new N,as=new N,da=new N,cs=new N;class A extends we{constructor(t=new De,e=new me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){as.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(ar.fromBufferAttribute(d,t),o?as.addScaledVector(ar,h):as.addScaledVector(ar.sub(e),h))}e.add(as)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(is.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(is,ua)===null||Bn.origin.distanceToSquared(ua)>(t.far-t.near)**2))&&(ha.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(ha),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=E,R=w;x<R;x+=3){const T=a.getX(x),C=a.getX(x+1),I=a.getX(x+2);s=ls(this,u,t,n,l,h,d,T,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const E=a.getX(p),w=a.getX(p+1),x=a.getX(p+2);s=ls(this,o,t,n,l,h,d,E,w,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let x=E,R=w;x<R;x+=3){const T=x,C=x+1,I=x+2;s=ls(this,u,t,n,l,h,d,T,C,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const E=p,w=p+1,x=p+2;s=ls(this,o,t,n,l,h,d,E,w,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function ah(i,t,e,n,s,r,o,a){let c;if(t.side===Le?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Dn,a),c===null)return null;cs.copy(a),cs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(cs);return l<e.near||l>e.far?null:{distance:l,point:cs.clone(),object:i}}function ls(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ss),i.getVertexPosition(c,rs),i.getVertexPosition(l,os);const h=ah(i,t,e,n,ss,rs,os,da);if(h){const d=new N;Ke.getBarycoord(da,ss,rs,os,d),s&&(h.uv=Ke.getInterpolatedAttribute(s,a,c,l,d,new Yt)),r&&(h.uv1=Ke.getInterpolatedAttribute(r,a,c,l,d,new Yt)),o&&(h.normal=Ke.getInterpolatedAttribute(o,a,c,l,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};Ke.getNormal(ss,rs,os,f.normal),h.face=f,h.barycoord=d}return h}class St extends De{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(d,2));function g(_,p,u,E,w,x,R,T,C,I,S){const y=x/C,P=R/I,z=x/2,k=R/2,q=T/2,$=C+1,X=I+1;let j=0,U=0;const nt=new N;for(let at=0;at<X;at++){const ht=at*P-k;for(let At=0;At<$;At++){const qt=At*y-z;nt[_]=qt*E,nt[p]=ht*w,nt[u]=q,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[p]=0,nt[u]=T>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(At/C),d.push(1-at/I),j+=1}}for(let at=0;at<I;at++)for(let ht=0;ht<C;ht++){const At=f+ht+$*at,qt=f+ht+$*(at+1),K=f+(ht+1)+$*(at+1),it=f+(ht+1)+$*at;c.push(At,qt,it),c.push(qt,K,it),U+=6}a.addGroup(m,U,S),m+=U,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new St(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){const t={};for(let e=0;e<i.length;e++){const n=Si(i[e]);for(const s in n)t[s]=n[s]}return t}function ch(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ac(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const lh={clone:Si,merge:Ae};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Ti{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cc extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new N,fa=new Yt,pa=new Yt;class Oe extends Cc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,fa,pa),e.subVectors(pa,fa)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ci=-90,li=1;class dh extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Oe(ci,li,t,e);s.layers=this.layers,this.add(s);const r=new Oe(ci,li,t,e);r.layers=this.layers,this.add(r);const o=new Oe(ci,li,t,e);o.layers=this.layers,this.add(o);const a=new Oe(ci,li,t,e);a.layers=this.layers,this.add(a);const c=new Oe(ci,li,t,e);c.layers=this.layers,this.add(c);const l=new Oe(ci,li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rc extends Ce{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:xi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fh extends Kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Rc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new St(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:In});r.uniforms.tEquirect.value=e;const o=new A(s,r),a=e.minFilter;return e.minFilter===Yn&&(e.minFilter=nn),new dh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const cr=new N,ph=new N,mh=new Vt;class Cn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=cr.subVectors(n,e).cross(ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(cr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mh.getNormalMatrix(t),s=this.coplanarPoint(cr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Us,hs=new N;class Eo{constructor(t=new Cn,e=new Cn,n=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],u=s[12],E=s[13],w=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,p-m,x-u).normalize(),n[1].setComponents(c+r,f+l,p+m,x+u).normalize(),n[2].setComponents(c+o,f+h,p+g,x+E).normalize(),n[3].setComponents(c-o,f-h,p-g,x-E).normalize(),n[4].setComponents(c-a,f-d,p-_,x-w).normalize(),e===_n)n[5].setComponents(c+a,f+d,p+_,x+w).normalize();else if(e===Is)n[5].setComponents(a,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(hs.x=s.normal.x>0?t.max.x:t.min.x,hs.y=s.normal.y>0?t.max.y:t.min.y,hs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gh(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Pn extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,f=e/c,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const E=u*f-o;for(let w=0;w<l;w++){const x=w*d-r;g.push(x,-E,0),_.push(0,0,1),p.push(w/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<a;E++){const w=E+l*u,x=E+l*(u+1),R=E+1+l*(u+1),T=E+1+l*u;m.push(w,x,T),m.push(x,R,T)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.width,t.height,t.widthSegments,t.heightSegments)}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Th=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ah=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ch=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ph=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ih=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ou=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,du=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_u=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ru=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ku=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ku=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,id=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ld=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ud=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,md=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ed=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Td=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ud=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Od=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$d=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:_h,alphahash_pars_fragment:xh,alphamap_fragment:vh,alphamap_pars_fragment:yh,alphatest_fragment:Mh,alphatest_pars_fragment:Sh,aomap_fragment:wh,aomap_pars_fragment:Eh,batching_pars_vertex:Th,batching_vertex:bh,begin_vertex:Ah,beginnormal_vertex:Ch,bsdfs:Rh,iridescence_fragment:Ph,bumpmap_pars_fragment:Ih,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Dh,clipping_planes_pars_vertex:Nh,clipping_planes_vertex:Uh,color_fragment:Fh,color_pars_fragment:Oh,color_pars_vertex:Bh,color_vertex:kh,common:zh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Hh,displacementmap_pars_vertex:Vh,displacementmap_vertex:Wh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:$h,envmap_fragment:Kh,envmap_common_pars_fragment:Zh,envmap_pars_fragment:jh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:lu,envmap_vertex:Qh,fog_vertex:tu,fog_pars_vertex:eu,fog_fragment:nu,fog_pars_fragment:iu,gradientmap_pars_fragment:su,lightmap_pars_fragment:ru,lights_lambert_fragment:ou,lights_lambert_pars_fragment:au,lights_pars_begin:cu,lights_toon_fragment:hu,lights_toon_pars_fragment:uu,lights_phong_fragment:du,lights_phong_pars_fragment:fu,lights_physical_fragment:pu,lights_physical_pars_fragment:mu,lights_fragment_begin:gu,lights_fragment_maps:_u,lights_fragment_end:xu,logdepthbuf_fragment:vu,logdepthbuf_pars_fragment:yu,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:Su,map_fragment:wu,map_pars_fragment:Eu,map_particle_fragment:Tu,map_particle_pars_fragment:bu,metalnessmap_fragment:Au,metalnessmap_pars_fragment:Cu,morphinstance_vertex:Ru,morphcolor_vertex:Pu,morphnormal_vertex:Iu,morphtarget_pars_vertex:Lu,morphtarget_vertex:Du,normal_fragment_begin:Nu,normal_fragment_maps:Uu,normal_pars_fragment:Fu,normal_pars_vertex:Ou,normal_vertex:Bu,normalmap_pars_fragment:ku,clearcoat_normal_fragment_begin:zu,clearcoat_normal_fragment_maps:Gu,clearcoat_pars_fragment:Hu,iridescence_pars_fragment:Vu,opaque_fragment:Wu,packing:Xu,premultiplied_alpha_fragment:qu,project_vertex:Yu,dithering_fragment:$u,dithering_pars_fragment:Ku,roughnessmap_fragment:Zu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Ju,shadowmap_pars_vertex:Qu,shadowmap_vertex:td,shadowmask_pars_fragment:ed,skinbase_vertex:nd,skinning_pars_vertex:id,skinning_vertex:sd,skinnormal_vertex:rd,specularmap_fragment:od,specularmap_pars_fragment:ad,tonemapping_fragment:cd,tonemapping_pars_fragment:ld,transmission_fragment:hd,transmission_pars_fragment:ud,uv_pars_fragment:dd,uv_pars_vertex:fd,uv_vertex:pd,worldpos_vertex:md,background_vert:gd,background_frag:_d,backgroundCube_vert:xd,backgroundCube_frag:vd,cube_vert:yd,cube_frag:Md,depth_vert:Sd,depth_frag:wd,distanceRGBA_vert:Ed,distanceRGBA_frag:Td,equirect_vert:bd,equirect_frag:Ad,linedashed_vert:Cd,linedashed_frag:Rd,meshbasic_vert:Pd,meshbasic_frag:Id,meshlambert_vert:Ld,meshlambert_frag:Dd,meshmatcap_vert:Nd,meshmatcap_frag:Ud,meshnormal_vert:Fd,meshnormal_frag:Od,meshphong_vert:Bd,meshphong_frag:kd,meshphysical_vert:zd,meshphysical_frag:Gd,meshtoon_vert:Hd,meshtoon_frag:Vd,points_vert:Wd,points_frag:Xd,shadow_vert:qd,shadow_frag:Yd,sprite_vert:$d,sprite_frag:Kd},lt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},en={basic:{uniforms:Ae([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ae([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ae([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ae([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ae([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ae([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ae([lt.points,lt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ae([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ae([lt.common,lt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ae([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ae([lt.sprite,lt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ae([lt.common,lt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ae([lt.lights,lt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};en.physical={uniforms:Ae([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const us={r:0,b:0,g:0},zn=new rn,Zd=new oe;function jd(i,t,e,n,s,r,o){const a=new Zt(0);let c=r===!0?0:1,l,h,d=null,f=0,m=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?e:t).get(w)),w}function _(E){let w=!1;const x=g(E);x===null?u(a,c):x&&x.isColor&&(u(x,1),w=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,w){const x=g(w);x&&(x.isCubeTexture||x.mapping===Ds)?(h===void 0&&(h=new A(new St(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Si(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),zn.copy(w.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(zn)),h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==se,(d!==x||f!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new A(new Pn(2,2),new Nn({name:"BackgroundMaterial",uniforms:Si(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,f=x.version,m=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,w){E.getRGB(us,Ac(i)),n.buffers.color.setClear(us.r,us.g,us.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),c=w,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(a,c)},render:_,addToRenderList:p}}function Jd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,P,z,k,q){let $=!1;const X=d(k,z,P);r!==X&&(r=X,l(r.object)),$=m(y,k,z,q),$&&g(y,k,z,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(y,P,z,k),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,P,z){const k=z.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let $=q[P.id];$===void 0&&($={},q[P.id]=$);let X=$[k];return X===void 0&&(X=f(c()),$[k]=X),X}function f(y){const P=[],z=[],k=[];for(let q=0;q<e;q++)P[q]=0,z[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:k,object:y,attributes:{},index:null}}function m(y,P,z,k){const q=r.attributes,$=P.attributes;let X=0;const j=z.getAttributes();for(const U in j)if(j[U].location>=0){const at=q[U];let ht=$[U];if(ht===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),at===void 0||at.attribute!==ht||ht&&at.data!==ht.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(y,P,z,k){const q={},$=P.attributes;let X=0;const j=z.getAttributes();for(const U in j)if(j[U].location>=0){let at=$[U];at===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(at=y.instanceColor));const ht={};ht.attribute=at,at&&at.data&&(ht.data=at.data),q[U]=ht,X++}r.attributes=q,r.attributesNum=X,r.index=k}function _(){const y=r.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function p(y){u(y,0)}function u(y,P){const z=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;z[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),q[y]!==P&&(i.vertexAttribDivisor(y,P),q[y]=P)}function E(){const y=r.newAttributes,P=r.enabledAttributes;for(let z=0,k=P.length;z<k;z++)P[z]!==y[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function w(y,P,z,k,q,$,X){X===!0?i.vertexAttribIPointer(y,P,z,q,$):i.vertexAttribPointer(y,P,z,k,q,$)}function x(y,P,z,k){_();const q=k.attributes,$=z.getAttributes(),X=P.defaultAttributeValues;for(const j in $){const U=$[j];if(U.location>=0){let nt=q[j];if(nt===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const at=nt.normalized,ht=nt.itemSize,At=t.get(nt);if(At===void 0)continue;const qt=At.buffer,K=At.type,it=At.bytesPerElement,pt=K===i.INT||K===i.UNSIGNED_INT||nt.gpuType===go;if(nt.isInterleavedBufferAttribute){const st=nt.data,Mt=st.stride,Ct=nt.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<U.locationSize;Ft++)u(U.location+Ft,st.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<U.locationSize;Ft++)p(U.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Ft=0;Ft<U.locationSize;Ft++)w(U.location+Ft,ht/U.locationSize,K,at,Mt*it,(Ct+ht/U.locationSize*Ft)*it,pt)}else{if(nt.isInstancedBufferAttribute){for(let st=0;st<U.locationSize;st++)u(U.location+st,nt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<U.locationSize;st++)p(U.location+st);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let st=0;st<U.locationSize;st++)w(U.location+st,ht/U.locationSize,K,at,ht*it,ht/U.locationSize*st*it,pt)}}else if(X!==void 0){const at=X[j];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(U.location,at);break;case 3:i.vertexAttrib3fv(U.location,at);break;case 4:i.vertexAttrib4fv(U.location,at);break;default:i.vertexAttrib1fv(U.location,at)}}}}E()}function R(){I();for(const y in n){const P=n[y];for(const z in P){const k=P[z];for(const q in k)h(k[q].object),delete k[q];delete P[z]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const z in P){const k=P[z];for(const q in k)h(k[q].object),delete k[q];delete P[z]}delete n[y.id]}function C(y){for(const P in n){const z=n[P];if(z[y.id]===void 0)continue;const k=z[y.id];for(const q in k)h(k[q].object),delete k[q];delete z[y.id]}}function I(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:E}}function Qd(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function c(l,h,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Ze&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==vn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gn&&!I)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function ef(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Cn,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const E=r?0:n,w=E*4;let x=u.clippingState||null;c.value=x,x=h(g,f,w,m);for(let R=0;R!==w;++R)x[R]=e[R];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const u=m+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let w=0,x=m;w!==_;++w,x+=4)o.copy(d[w]).applyMatrix4(E,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function nf(i){let t=new WeakMap;function e(o,a){return a===Pr?o.mapping=xi:a===Ir&&(o.mapping=vi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pr||a===Ir)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ic extends Cc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fi=4,ma=[.125,.215,.35,.446,.526,.582],Xn=20,lr=new Ic,ga=new Zt;let hr=null,ur=0,dr=0,fr=!1;const Vn=(1+Math.sqrt(5))/2,hi=1/Vn,_a=[new N(-Vn,hi,0),new N(Vn,hi,0),new N(-hi,0,Vn),new N(hi,0,Vn),new N(0,Vn,-hi),new N(0,Vn,hi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ma(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hr,ur,dr),this._renderer.xr.enabled=fr,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),dr=this._renderer.getActiveMipmapLevel(),fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Gi,format:Ze,colorSpace:wi,depthBuffer:!1},s=va(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=va(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sf(r)),this._blurMaterial=rf(r,t,e)}return s}_compileMaterial(t){const e=new A(this._lodPlanes[0],t);this._renderer.compile(e,lr)}_sceneToCubeUV(t,e,n,s){const a=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ga),h.toneMapping=Ln,h.autoClear=!1;const m=new me({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new A(new St,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(ga),_=!0);for(let u=0;u<6;u++){const E=u%3;E===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):E===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const w=this._cubeSize;ds(s,E*w,u>2?w:0,w,w),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xi||t.mapping===vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ma()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ya());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new A(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ds(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_a[(s-r-1)%_a.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new A(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Xn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Xn;p>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);const u=[];let E=0;for(let C=0;C<Xn;++C){const I=C/_,S=Math.exp(-I*I/2);u.push(S),C===0?E+=S:C<p&&(E+=2*S)}for(let C=0;C<u.length;C++)u[C]=u[C]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const x=this._sizeLods[s],R=3*x*(s>w-fi?s-w+fi:0),T=4*(this._cubeSize-x);ds(e,R,T,3*x,2*x),c.setRenderTarget(e),c.render(d,lr)}}function sf(i){const t=[],e=[],n=[];let s=i;const r=i-fi+1+ma.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-fi?c=ma[o-i+fi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,E=new Float32Array(_*g*m),w=new Float32Array(p*g*m),x=new Float32Array(u*g*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,I=T>2?0:-1,S=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];E.set(S,_*g*T),w.set(f,p*g*T);const y=[T,T,T,T,T,T];x.set(y,u*g*T)}const R=new De;R.setAttribute("position",new Ge(E,_)),R.setAttribute("uv",new Ge(w,p)),R.setAttribute("faceIndex",new Ge(x,u)),t.push(R),s>fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function va(i,t,e){const n=new Kn(i,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rf(i,t,e){const n=new Float32Array(Xn),s=new N(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ya(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ma(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function of(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Pr||c===Ir,h=c===xi||c===vi;if(l||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new xa(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new xa(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function af(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cf(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let w=0,x=E.length;w<x;w+=3){const R=E[w+0],T=E[w+1],C=E[w+2];f.push(R,T,T,C,C,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let w=0,x=E.length/3-1;w<x;w+=3){const R=w+0,T=w+1,C=w+2;f.push(R,T,T,C,C,R)}}else return;const p=new(Mc(f)?bc:Tc)(f,1);p.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function lf(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function d(f,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)l(f[u]/o,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let u=0;for(let E=0;E<g;E++)u+=m[E]*_[E];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function hf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function uf(i,t,e){const n=new WeakMap,s=new re;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let R=a.attributes.position.count*x,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*T*4*d),I=new wc(C,R,T,d);I.type=gn,I.needsUpdate=!0;const S=x*4;for(let P=0;P<d;P++){const z=u[P],k=E[P],q=w[P],$=R*T*4*P;for(let X=0;X<z.count;X++){const j=X*S;g===!0&&(s.fromBufferAttribute(z,X),C[$+j+0]=s.x,C[$+j+1]=s.y,C[$+j+2]=s.z,C[$+j+3]=0),_===!0&&(s.fromBufferAttribute(k,X),C[$+j+4]=s.x,C[$+j+5]=s.y,C[$+j+6]=s.z,C[$+j+7]=0),p===!0&&(s.fromBufferAttribute(q,X),C[$+j+8]=s.x,C[$+j+9]=s.y,C[$+j+10]=s.z,C[$+j+11]=q.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new Yt(R,T)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function df(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Lc extends Ce{constructor(t,e,n,s,r,o,a,c,l,h=mi){if(h!==mi&&h!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mi&&(n=$n),n===void 0&&h===Mi&&(n=yi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:je,this.minFilter=c!==void 0?c:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Dc=new Ce,Sa=new Lc(1,1),Nc=new wc,Uc=new jl,Fc=new Rc,wa=[],Ea=[],Ta=new Float32Array(16),ba=new Float32Array(9),Aa=new Float32Array(4);function bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=wa[s];if(r===void 0&&(r=new Float32Array(s),wa[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fs(i,t){let e=Ea[t];e===void 0&&(e=new Int32Array(t),Ea[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ff(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function _f(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Aa.set(n),i.uniformMatrix2fv(this.addr,!1,Aa),Me(e,n)}}function xf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;ba.set(n),i.uniformMatrix3fv(this.addr,!1,ba),Me(e,n)}}function vf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Ta.set(n),i.uniformMatrix4fv(this.addr,!1,Ta),Me(e,n)}}function yf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Ef(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function Cf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sa.compareFunction=yc,r=Sa):r=Dc,e.setTexture2D(t||r,s)}function Rf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uc,s)}function Pf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fc,s)}function If(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nc,s)}function Lf(i){switch(i){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return xf;case 35676:return vf;case 5124:case 35670:return yf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return wf;case 5125:return Ef;case 36294:return Tf;case 36295:return bf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return If}}function Df(i,t){i.uniform1fv(this.addr,t)}function Nf(i,t){const e=bi(t,this.size,2);i.uniform2fv(this.addr,e)}function Uf(i,t){const e=bi(t,this.size,3);i.uniform3fv(this.addr,e)}function Ff(i,t){const e=bi(t,this.size,4);i.uniform4fv(this.addr,e)}function Of(i,t){const e=bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bf(i,t){const e=bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kf(i,t){const e=bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zf(i,t){i.uniform1iv(this.addr,t)}function Gf(i,t){i.uniform2iv(this.addr,t)}function Hf(i,t){i.uniform3iv(this.addr,t)}function Vf(i,t){i.uniform4iv(this.addr,t)}function Wf(i,t){i.uniform1uiv(this.addr,t)}function Xf(i,t){i.uniform2uiv(this.addr,t)}function qf(i,t){i.uniform3uiv(this.addr,t)}function Yf(i,t){i.uniform4uiv(this.addr,t)}function $f(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Dc,r[o])}function Kf(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uc,r[o])}function Zf(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fc,r[o])}function jf(i,t,e){const n=this.cache,s=t.length,r=Fs(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nc,r[o])}function Jf(i){switch(i){case 5126:return Df;case 35664:return Nf;case 35665:return Uf;case 35666:return Ff;case 35674:return Of;case 35675:return Bf;case 35676:return kf;case 5124:case 35670:return zf;case 35667:case 35671:return Gf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Kf;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return jf}}class Qf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lf(e.type)}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jf(e.type)}}class ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const pr=/(\w+)(\])?(\[|\.)?/g;function Ca(i,t){i.seq.push(t),i.map[t.id]=t}function np(i,t,e){const n=i.name,s=n.length;for(pr.lastIndex=0;;){const r=pr.exec(n),o=pr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ca(e,l===void 0?new Qf(a,i,t):new tp(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ep(a),Ca(e,d)),e=d}}}class Es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);np(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ra(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ip=37297;let sp=0;function rp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Pa=new Vt;function op(i){Jt._getMatrix(Pa,Jt.workingColorSpace,i);const t=`mat3( ${Pa.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Ns:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ia(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+rp(i.getShaderSource(t),o)}else return s}function ap(i,t){const e=op(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cp(i,t){let e;switch(t){case Tl:e="Linear";break;case bl:e="Reinhard";break;case Al:e="Cineon";break;case ac:e="ACESFilmic";break;case Rl:e="AgX";break;case Pl:e="Neutral";break;case Cl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fs=new N;function lp(){Jt.getLuminanceCoefficients(fs);const i=fs.x.toFixed(4),t=fs.y.toFixed(4),e=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function up(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Bi(i){return i!==""}function La(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Da(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(i){return i.replace(fp,mp)}const pp=new Map;function mp(i,t){let e=Xt[t];if(e===void 0){const n=pp.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oo(e)}const gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Na(i){return i.replace(gp,_p)}function _p(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ua(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function vp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xi:case vi:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vi:t="ENVMAP_MODE_REFRACTION";break}return t}function Mp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oc:t="ENVMAP_BLENDING_MULTIPLY";break;case wl:t="ENVMAP_BLENDING_MIX";break;case El:t="ENVMAP_BLENDING_ADD";break}return t}function Sp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wp(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=xp(e),l=vp(e),h=yp(e),d=Mp(e),f=Sp(e),m=hp(e),g=up(r),_=s.createProgram();let p,u,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bi).join(`
`),u.length>0&&(u+=`
`)):(p=[Ua(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),u=[Ua(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?cp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,ap("linearToOutputTexel",e.outputColorSpace),lp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),o=oo(o),o=La(o,e),o=Da(o,e),a=oo(a),a=La(a,e),a=Da(a,e),o=Na(o),a=Na(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===$o?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=E+p+o,x=E+u+a,R=Ra(s,s.VERTEX_SHADER,w),T=Ra(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(R).trim(),q=s.getShaderInfoLog(T).trim();let $=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const j=Ia(s,R,"vertex"),U=Ia(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+j+`
`+U)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||q==="")&&(X=!1);X&&(P.diagnostics={runnable:$,programLog:z,vertexShader:{log:k,prefix:p},fragmentShader:{log:q,prefix:u}})}s.deleteShader(R),s.deleteShader(T),I=new Es(s,_),S=dp(s,_)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,ip)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Ep=0;class Tp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bp(t),e.set(t,n)),n}}class bp{constructor(t){this.id=Ep++,this.code=t,this.usedTimes=0}}function Ap(i,t,e,n,s,r,o){const a=new wo,c=new Tp,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,y,P,z,k){const q=z.fog,$=k.geometry,X=S.isMeshStandardMaterial?z.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),U=j&&j.mapping===Ds?j.image.height:null,nt=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const at=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=at!==void 0?at.length:0;let At=0;$.morphAttributes.position!==void 0&&(At=1),$.morphAttributes.normal!==void 0&&(At=2),$.morphAttributes.color!==void 0&&(At=3);let qt,K,it,pt;if(nt){const ie=en[nt];qt=ie.vertexShader,K=ie.fragmentShader}else qt=S.vertexShader,K=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),pt=c.getFragmentShaderID(S);const st=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Ct=k.isInstancedMesh===!0,Ft=k.isBatchedMesh===!0,jt=!!S.map,Nt=!!S.matcap,Qt=!!j,L=!!S.aoMap,pe=!!S.lightMap,zt=!!S.bumpMap,Ot=!!S.normalMap,yt=!!S.displacementMap,Rt=!!S.emissiveMap,xt=!!S.metalnessMap,b=!!S.roughnessMap,v=S.anisotropy>0,B=S.clearcoat>0,W=S.dispersion>0,Z=S.iridescence>0,V=S.sheen>0,ct=S.transmission>0,ot=v&&!!S.anisotropyMap,_t=B&&!!S.clearcoatMap,It=B&&!!S.clearcoatNormalMap,et=B&&!!S.clearcoatRoughnessMap,mt=Z&&!!S.iridescenceMap,Lt=Z&&!!S.iridescenceThicknessMap,Bt=V&&!!S.sheenColorMap,vt=V&&!!S.sheenRoughnessMap,Kt=!!S.specularMap,Wt=!!S.specularColorMap,ae=!!S.specularIntensityMap,D=ct&&!!S.transmissionMap,ut=ct&&!!S.thicknessMap,Y=!!S.gradientMap,tt=!!S.alphaMap,gt=S.alphaTest>0,dt=!!S.alphaHash,Gt=!!S.extensions;let de=Ln;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(de=i.toneMapping);const Ee={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:qt,fragmentShader:K,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:pt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ft,batchingColor:Ft&&k._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&k.instanceColor!==null,instancingMorph:Ct&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:wi,alphaToCoverage:!!S.alphaToCoverage,map:jt,matcap:Nt,envMap:Qt,envMapMode:Qt&&j.mapping,envMapCubeUVHeight:U,aoMap:L,lightMap:pe,bumpMap:zt,normalMap:Ot,displacementMap:f&&yt,emissiveMap:Rt,normalMapObjectSpace:Ot&&S.normalMapType===Nl,normalMapTangentSpace:Ot&&S.normalMapType===vc,metalnessMap:xt,roughnessMap:b,anisotropy:v,anisotropyMap:ot,clearcoat:B,clearcoatMap:_t,clearcoatNormalMap:It,clearcoatRoughnessMap:et,dispersion:W,iridescence:Z,iridescenceMap:mt,iridescenceThicknessMap:Lt,sheen:V,sheenColorMap:Bt,sheenRoughnessMap:vt,specularMap:Kt,specularColorMap:Wt,specularIntensityMap:ae,transmission:ct,transmissionMap:D,thicknessMap:ut,gradientMap:Y,opaque:S.transparent===!1&&S.blending===pi&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:dt,combine:S.combine,mapUv:jt&&_(S.map.channel),aoMapUv:L&&_(S.aoMap.channel),lightMapUv:pe&&_(S.lightMap.channel),bumpMapUv:zt&&_(S.bumpMap.channel),normalMapUv:Ot&&_(S.normalMap.channel),displacementMapUv:yt&&_(S.displacementMap.channel),emissiveMapUv:Rt&&_(S.emissiveMap.channel),metalnessMapUv:xt&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:ot&&_(S.anisotropyMap.channel),clearcoatMapUv:_t&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(S.sheenRoughnessMap.channel),specularMapUv:Kt&&_(S.specularMap.channel),specularColorMapUv:Wt&&_(S.specularColorMap.channel),specularIntensityMapUv:ae&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:ut&&_(S.thicknessMap.channel),alphaMapUv:tt&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ot||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(jt||tt),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Mt,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:At,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:jt&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:Rt&&S.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===$e,flipSided:S.side===Le,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&S.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function u(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(y,S),w(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function w(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const y=g[S.type];let P;if(y){const z=en[y];P=lh.clone(z.uniforms)}else P=S.uniforms;return P}function R(S,y){let P;for(let z=0,k=h.length;z<k;z++){const q=h[z];if(q.cacheKey===y){P=q,++P.usedTimes;break}}return P===void 0&&(P=new wp(i,y,S,r),h.push(P)),P}function T(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function I(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:I}}function Cp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Rp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Oa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,m,g,_,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function a(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(d,f,m,g,_,p){const u=o(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||Rp),n.length>1&&n.sort(f||Fa),s.length>1&&s.sort(f||Fa)}function h(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Pp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Oa,i.set(n,[o])):s>=r.length?(o=new Oa,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ip(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Zt};break;case"SpotLight":e={position:new N,direction:new N,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Lp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dp=0;function Np(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Up(i){const t=new Ip,e=Lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new oe,o=new oe;function a(l){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,_=0,p=0,u=0,E=0,w=0,x=0,R=0,T=0,C=0;l.sort(Np);for(let S=0,y=l.length;S<y;S++){const P=l[S],z=P.color,k=P.intensity,q=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*k,d+=z.g*k,f+=z.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);C++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,U=e.get(P);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=X,m++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(z).multiplyScalar(k),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const j=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,j.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=j.matrix,P.castShadow){const U=e.get(P);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,n.spotShadow[_]=U,n.spotShadowMap[_]=$,x++}_++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(z).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=X,p++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const j=P.shadow,U=e.get(P);U.shadowIntensity=j.intensity,U.shadowBias=j.bias,U.shadowNormalBias=j.normalBias,U.shadowRadius=j.radius,U.shadowMapSize=j.mapSize,U.shadowCameraNear=j.camera.near,U.shadowCameraFar=j.camera.far,n.pointShadow[g]=U,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[u]=X,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==u||I.numDirectionalShadows!==E||I.numPointShadows!==w||I.numSpotShadows!==x||I.numSpotMaps!==R||I.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=u,I.numDirectionalShadows=E,I.numPointShadows=w,I.numSpotShadows=x,I.numSpotMaps=R,I.numLightProbes=C,n.version=Dp++)}function c(l,h){let d=0,f=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){const w=l[u];if(w.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(w.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Ba(i){const t=new Up(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Fp(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ba(i),t.set(s,[a])):r>=o.length?(a=new Ba(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Op extends Ti{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ll,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bp extends Ti{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gp(i,t,e){let n=new Eo;const s=new Yt,r=new Yt,o=new re,a=new Op({depthPacking:Dl}),c=new Bp,l={},h=e.maxTextureSize,d={[Dn]:Le,[Le]:Dn,[$e]:$e},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:kp,fragmentShader:zp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new De;g.setAttribute("position",new Ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new A(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let u=this.type;this.render=function(T,C,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(In),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=u!==pn&&this.type===pn,q=u===pn&&this.type!==pn;for(let $=0,X=T.length;$<X;$++){const j=T[$],U=j.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const nt=U.getFrameExtents();if(s.multiply(nt),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,U.mapSize.y=r.y)),U.map===null||k===!0||q===!0){const ht=this.type!==pn?{minFilter:je,magFilter:je}:{};U.map!==null&&U.map.dispose(),U.map=new Kn(s.x,s.y,ht),U.map.texture.name=j.name+".shadowMap",U.camera.updateProjectionMatrix()}i.setRenderTarget(U.map),i.clear();const at=U.getViewportCount();for(let ht=0;ht<at;ht++){const At=U.getViewport(ht);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),z.viewport(o),U.updateMatrices(j,ht),n=U.getFrustum(),x(C,I,U.camera,j,this.type)}U.isPointLightShadow!==!0&&this.type===pn&&E(U,I),U.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,y,P)};function E(T,C){const I=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Kn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,I,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,I,m,_,null)}function w(T,C,I,S){let y=null;const P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=I.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=y.uuid,k=C.uuid;let q=l[z];q===void 0&&(q={},l[z]=q);let $=q[k];$===void 0&&($=y.clone(),q[k]=$,C.addEventListener("dispose",R)),y=$}if(y.visible=C.visible,y.wireframe=C.wireframe,S===pn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=I}return y}function x(T,C,I,S,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===pn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const k=t.update(T),q=T.material;if(Array.isArray(q)){const $=k.groups;for(let X=0,j=$.length;X<j;X++){const U=$[X],nt=q[U.materialIndex];if(nt&&nt.visible){const at=w(T,nt,S,y);T.onBeforeShadow(i,T,C,I,k,at,U),i.renderBufferDirect(I,null,k,at,T,U),T.onAfterShadow(i,T,C,I,k,at,U)}}}else if(q.visible){const $=w(T,q,S,y);T.onBeforeShadow(i,T,C,I,k,$,null),i.renderBufferDirect(I,null,k,$,T,null),T.onAfterShadow(i,T,C,I,k,$,null)}}const z=T.children;for(let k=0,q=z.length;k<q;k++)x(z[k],C,I,S,y)}function R(T){T.target.removeEventListener("dispose",R);for(const I in l){const S=l[I],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Hp={[wr]:Er,[Tr]:Cr,[br]:Rr,[_i]:Ar,[Er]:wr,[Cr]:Tr,[Rr]:br,[Ar]:_i};function Vp(i,t){function e(){let D=!1;const ut=new re;let Y=null;const tt=new re(0,0,0,0);return{setMask:function(gt){Y!==gt&&!D&&(i.colorMask(gt,gt,gt,gt),Y=gt)},setLocked:function(gt){D=gt},setClear:function(gt,dt,Gt,de,Ee){Ee===!0&&(gt*=de,dt*=de,Gt*=de),ut.set(gt,dt,Gt,de),tt.equals(ut)===!1&&(i.clearColor(gt,dt,Gt,de),tt.copy(ut))},reset:function(){D=!1,Y=null,tt.set(-1,0,0,0)}}}function n(){let D=!1,ut=!1,Y=null,tt=null,gt=null;return{setReversed:function(dt){if(ut!==dt){const Gt=t.get("EXT_clip_control");ut?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const de=gt;gt=null,this.setClear(de)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?st(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(dt){Y!==dt&&!D&&(i.depthMask(dt),Y=dt)},setFunc:function(dt){if(ut&&(dt=Hp[dt]),tt!==dt){switch(dt){case wr:i.depthFunc(i.NEVER);break;case Er:i.depthFunc(i.ALWAYS);break;case Tr:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case br:i.depthFunc(i.EQUAL);break;case Ar:i.depthFunc(i.GEQUAL);break;case Cr:i.depthFunc(i.GREATER);break;case Rr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=dt}},setLocked:function(dt){D=dt},setClear:function(dt){gt!==dt&&(ut&&(dt=1-dt),i.clearDepth(dt),gt=dt)},reset:function(){D=!1,Y=null,tt=null,gt=null,ut=!1}}}function s(){let D=!1,ut=null,Y=null,tt=null,gt=null,dt=null,Gt=null,de=null,Ee=null;return{setTest:function(ie){D||(ie?st(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(ie){ut!==ie&&!D&&(i.stencilMask(ie),ut=ie)},setFunc:function(ie,He,an){(Y!==ie||tt!==He||gt!==an)&&(i.stencilFunc(ie,He,an),Y=ie,tt=He,gt=an)},setOp:function(ie,He,an){(dt!==ie||Gt!==He||de!==an)&&(i.stencilOp(ie,He,an),dt=ie,Gt=He,de=an)},setLocked:function(ie){D=ie},setClear:function(ie){Ee!==ie&&(i.clearStencil(ie),Ee=ie)},reset:function(){D=!1,ut=null,Y=null,tt=null,gt=null,dt=null,Gt=null,de=null,Ee=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,u=null,E=null,w=null,x=null,R=null,T=null,C=new Zt(0,0,0),I=0,S=!1,y=null,P=null,z=null,k=null,q=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(U)[1]),X=j>=1):U.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),X=j>=2);let nt=null,at={};const ht=i.getParameter(i.SCISSOR_BOX),At=i.getParameter(i.VIEWPORT),qt=new re().fromArray(ht),K=new re().fromArray(At);function it(D,ut,Y,tt){const gt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(D,dt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Gt=0;Gt<Y;Gt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(ut+Gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return dt}const pt={};pt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),pt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(_i),zt(!1),Ot(Vo),st(i.CULL_FACE),L(In);function st(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Mt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ct(D,ut){return d[D]!==ut?(i.bindFramebuffer(D,ut),d[D]=ut,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ut),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ft(D,ut){let Y=m,tt=!1;if(D){Y=f.get(ut),Y===void 0&&(Y=[],f.set(ut,Y));const gt=D.textures;if(Y.length!==gt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Gt=gt.length;dt<Gt;dt++)Y[dt]=i.COLOR_ATTACHMENT0+dt;Y.length=gt.length,tt=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Y)}function jt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Nt={[Wn]:i.FUNC_ADD,[ol]:i.FUNC_SUBTRACT,[al]:i.FUNC_REVERSE_SUBTRACT};Nt[cl]=i.MIN,Nt[ll]=i.MAX;const Qt={[hl]:i.ZERO,[ul]:i.ONE,[dl]:i.SRC_COLOR,[Mr]:i.SRC_ALPHA,[xl]:i.SRC_ALPHA_SATURATE,[gl]:i.DST_COLOR,[pl]:i.DST_ALPHA,[fl]:i.ONE_MINUS_SRC_COLOR,[Sr]:i.ONE_MINUS_SRC_ALPHA,[_l]:i.ONE_MINUS_DST_COLOR,[ml]:i.ONE_MINUS_DST_ALPHA,[vl]:i.CONSTANT_COLOR,[yl]:i.ONE_MINUS_CONSTANT_COLOR,[Ml]:i.CONSTANT_ALPHA,[Sl]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,ut,Y,tt,gt,dt,Gt,de,Ee,ie){if(D===In){_===!0&&(Mt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),D!==rl){if(D!==p||ie!==S){if((u!==Wn||x!==Wn)&&(i.blendEquation(i.FUNC_ADD),u=Wn,x=Wn),ie)switch(D){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.ONE,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,w=null,R=null,T=null,C.set(0,0,0),I=0,p=D,S=ie}return}gt=gt||ut,dt=dt||Y,Gt=Gt||tt,(ut!==u||gt!==x)&&(i.blendEquationSeparate(Nt[ut],Nt[gt]),u=ut,x=gt),(Y!==E||tt!==w||dt!==R||Gt!==T)&&(i.blendFuncSeparate(Qt[Y],Qt[tt],Qt[dt],Qt[Gt]),E=Y,w=tt,R=dt,T=Gt),(de.equals(C)===!1||Ee!==I)&&(i.blendColor(de.r,de.g,de.b,Ee),C.copy(de),I=Ee),p=D,S=!1}function pe(D,ut){D.side===$e?Mt(i.CULL_FACE):st(i.CULL_FACE);let Y=D.side===Le;ut&&(Y=!Y),zt(Y),D.blending===pi&&D.transparent===!1?L(In):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const tt=D.stencilWrite;a.setTest(tt),tt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function Ot(D){D!==il?(st(i.CULL_FACE),D!==P&&(D===Vo?i.cullFace(i.BACK):D===sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),P=D}function yt(D){D!==z&&(X&&i.lineWidth(D),z=D)}function Rt(D,ut,Y){D?(st(i.POLYGON_OFFSET_FILL),(k!==ut||q!==Y)&&(i.polygonOffset(ut,Y),k=ut,q=Y)):Mt(i.POLYGON_OFFSET_FILL)}function xt(D){D?st(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+$-1),nt!==D&&(i.activeTexture(D),nt=D)}function v(D,ut,Y){Y===void 0&&(nt===null?Y=i.TEXTURE0+$-1:Y=nt);let tt=at[Y];tt===void 0&&(tt={type:void 0,texture:void 0},at[Y]=tt),(tt.type!==D||tt.texture!==ut)&&(nt!==Y&&(i.activeTexture(Y),nt=Y),i.bindTexture(D,ut||pt[D]),tt.type=D,tt.texture=ut)}function B(){const D=at[nt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(D){qt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),qt.copy(D))}function vt(D){K.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Kt(D,ut){let Y=l.get(ut);Y===void 0&&(Y=new WeakMap,l.set(ut,Y));let tt=Y.get(D);tt===void 0&&(tt=i.getUniformBlockIndex(ut,D.name),Y.set(D,tt))}function Wt(D,ut){const tt=l.get(ut).get(D);c.get(ut)!==tt&&(i.uniformBlockBinding(ut,tt,D.__bindingPointIndex),c.set(ut,tt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,at={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,u=null,E=null,w=null,x=null,R=null,T=null,C=new Zt(0,0,0),I=0,S=!1,y=null,P=null,z=null,k=null,q=null,qt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Mt,bindFramebuffer:Ct,drawBuffers:Ft,useProgram:jt,setBlending:L,setMaterial:pe,setFlipSided:zt,setCullFace:Ot,setLineWidth:yt,setPolygonOffset:Rt,setScissorTest:xt,activeTexture:b,bindTexture:v,unbindTexture:B,compressedTexImage2D:W,compressedTexImage3D:Z,texImage2D:mt,texImage3D:Lt,updateUBOMapping:Kt,uniformBlockBinding:Wt,texStorage2D:It,texStorage3D:et,texSubImage2D:V,texSubImage3D:ct,compressedTexSubImage2D:ot,compressedTexSubImage3D:_t,scissor:Bt,viewport:vt,reset:ae}}function ka(i,t,e,n){const s=Wp(n);switch(e){case dc:return i*t;case pc:return i*t;case mc:return i*t*2;case gc:return i*t/s.components*s.byteLength;case vo:return i*t/s.components*s.byteLength;case _c:return i*t*2/s.components*s.byteLength;case yo:return i*t*2/s.components*s.byteLength;case fc:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case Mo:return i*t*4/s.components*s.byteLength;case vs:case ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ms:case Ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nr:case Fr:return Math.max(i,16)*Math.max(t,8)/4;case Dr:case Ur:return Math.max(i,8)*Math.max(t,8)/2;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case $r:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Jr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ws:case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xc:case no:return Math.ceil(i/4)*Math.ceil(t/4)*8;case io:case so:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(i){switch(i){case vn:case lc:return{byteLength:1,components:1};case zi:case hc:case Gi:return{byteLength:2,components:1};case _o:case xo:return{byteLength:2,components:4};case $n:case go:case gn:return{byteLength:4,components:1};case uc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xp(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Yt,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return m?new OffscreenCanvas(b,v):Ls("canvas")}function _(b,v,B){let W=1;const Z=xt(b);if((Z.width>B||Z.height>B)&&(W=B/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const V=Math.floor(W*Z.width),ct=Math.floor(W*Z.height);d===void 0&&(d=g(V,ct));const ot=v?g(V,ct):d;return ot.width=V,ot.height=ct,ot.getContext("2d").drawImage(b,0,0,V,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+ct+")."),ot}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function p(b){return b.generateMipmaps}function u(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,v,B,W,Z=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let V=v;if(v===i.RED&&(B===i.FLOAT&&(V=i.R32F),B===i.HALF_FLOAT&&(V=i.R16F),B===i.UNSIGNED_BYTE&&(V=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(V=i.R8UI),B===i.UNSIGNED_SHORT&&(V=i.R16UI),B===i.UNSIGNED_INT&&(V=i.R32UI),B===i.BYTE&&(V=i.R8I),B===i.SHORT&&(V=i.R16I),B===i.INT&&(V=i.R32I)),v===i.RG&&(B===i.FLOAT&&(V=i.RG32F),B===i.HALF_FLOAT&&(V=i.RG16F),B===i.UNSIGNED_BYTE&&(V=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(V=i.RG8UI),B===i.UNSIGNED_SHORT&&(V=i.RG16UI),B===i.UNSIGNED_INT&&(V=i.RG32UI),B===i.BYTE&&(V=i.RG8I),B===i.SHORT&&(V=i.RG16I),B===i.INT&&(V=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(V=i.RGB8UI),B===i.UNSIGNED_SHORT&&(V=i.RGB16UI),B===i.UNSIGNED_INT&&(V=i.RGB32UI),B===i.BYTE&&(V=i.RGB8I),B===i.SHORT&&(V=i.RGB16I),B===i.INT&&(V=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),B===i.UNSIGNED_INT&&(V=i.RGBA32UI),B===i.BYTE&&(V=i.RGBA8I),B===i.SHORT&&(V=i.RGBA16I),B===i.INT&&(V=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),v===i.RGBA){const ct=Z?Ns:Jt.getTransfer(W);B===i.FLOAT&&(V=i.RGBA32F),B===i.HALF_FLOAT&&(V=i.RGBA16F),B===i.UNSIGNED_BYTE&&(V=ct===se?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function x(b,v){let B;return b?v===null||v===$n||v===yi?B=i.DEPTH24_STENCIL8:v===gn?B=i.DEPTH32F_STENCIL8:v===zi&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===$n||v===yi?B=i.DEPTH_COMPONENT24:v===gn?B=i.DEPTH_COMPONENT32F:v===zi&&(B=i.DEPTH_COMPONENT16),B}function R(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==je&&b.minFilter!==nn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function T(b){const v=b.target;v.removeEventListener("dispose",T),I(v),v.isVideoTexture&&h.delete(v)}function C(b){const v=b.target;v.removeEventListener("dispose",C),y(v)}function I(b){const v=n.get(b);if(v.__webglInit===void 0)return;const B=b.source,W=f.get(B);if(W){const Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(b),Object.keys(W).length===0&&f.delete(B)}n.remove(b)}function S(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const B=b.source,W=f.get(B);delete W[v.__cacheKey],o.memory.textures--}function y(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=b.textures;for(let W=0,Z=B.length;W<Z;W++){const V=n.get(B[W]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(B[W])}n.remove(b)}let P=0;function z(){P=0}function k(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function q(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function $(b,v){const B=n.get(b);if(b.isVideoTexture&&yt(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,b,v);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function X(b,v){const B=n.get(b);if(b.version>0&&B.__version!==b.version){K(B,b,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function j(b,v){const B=n.get(b);if(b.version>0&&B.__version!==b.version){K(B,b,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function U(b,v){const B=n.get(b);if(b.version>0&&B.__version!==b.version){it(B,b,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const nt={[tn]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Lr]:i.MIRRORED_REPEAT},at={[je]:i.NEAREST,[Il]:i.NEAREST_MIPMAP_NEAREST,[Yi]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[zs]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},ht={[Ul]:i.NEVER,[Gl]:i.ALWAYS,[Fl]:i.LESS,[yc]:i.LEQUAL,[Ol]:i.EQUAL,[zl]:i.GEQUAL,[Bl]:i.GREATER,[kl]:i.NOTEQUAL};function At(b,v){if(v.type===gn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===nn||v.magFilter===zs||v.magFilter===Yi||v.magFilter===Yn||v.minFilter===nn||v.minFilter===zs||v.minFilter===Yi||v.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,nt[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,nt[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,nt[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,at[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ht[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Yi&&v.minFilter!==Yn||v.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function qt(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",T));const W=v.source;let Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));const V=q(v);if(V!==b.__cacheKey){Z[V]===void 0&&(Z[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[V].usedTimes++;const ct=Z[b.__cacheKey];ct!==void 0&&(Z[b.__cacheKey].usedTimes--,ct.usedTimes===0&&S(v)),b.__cacheKey=V,b.__webglTexture=Z[V].texture}return B}function K(b,v,B){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);const Z=qt(b,v),V=v.source;e.bindTexture(W,b.__webglTexture,i.TEXTURE0+B);const ct=n.get(V);if(V.version!==ct.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const ot=Jt.getPrimaries(Jt.workingColorSpace),_t=v.colorSpace===Rn?null:Jt.getPrimaries(v.colorSpace),It=v.colorSpace===Rn||ot===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let et=_(v.image,!1,s.maxTextureSize);et=Rt(v,et);const mt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type);let Bt=w(v.internalFormat,mt,Lt,v.colorSpace,v.isVideoTexture);At(W,v);let vt;const Kt=v.mipmaps,Wt=v.isVideoTexture!==!0,ae=ct.__version===void 0||Z===!0,D=V.dataReady,ut=R(v,et);if(v.isDepthTexture)Bt=x(v.format===Mi,v.type),ae&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Bt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Bt,et.width,et.height,0,mt,Lt,null));else if(v.isDataTexture)if(Kt.length>0){Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,ut,Bt,Kt[0].width,Kt[0].height);for(let Y=0,tt=Kt.length;Y<tt;Y++)vt=Kt[Y],Wt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,vt.width,vt.height,mt,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,Y,Bt,vt.width,vt.height,0,mt,Lt,vt.data);v.generateMipmaps=!1}else Wt?(ae&&e.texStorage2D(i.TEXTURE_2D,ut,Bt,et.width,et.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,mt,Lt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,et.width,et.height,0,mt,Lt,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Bt,Kt[0].width,Kt[0].height,et.depth);for(let Y=0,tt=Kt.length;Y<tt;Y++)if(vt=Kt[Y],v.format!==Ze)if(mt!==null)if(Wt){if(D)if(v.layerUpdates.size>0){const gt=ka(vt.width,vt.height,v.format,v.type);for(const dt of v.layerUpdates){const Gt=vt.data.subarray(dt*gt/vt.data.BYTES_PER_ELEMENT,(dt+1)*gt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,dt,vt.width,vt.height,1,mt,Gt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,et.depth,mt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Bt,vt.width,vt.height,et.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,et.depth,mt,Lt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Bt,vt.width,vt.height,et.depth,0,mt,Lt,vt.data)}else{Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,ut,Bt,Kt[0].width,Kt[0].height);for(let Y=0,tt=Kt.length;Y<tt;Y++)vt=Kt[Y],v.format!==Ze?mt!==null?Wt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,vt.width,vt.height,mt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Bt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,vt.width,vt.height,mt,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,Y,Bt,vt.width,vt.height,0,mt,Lt,vt.data)}else if(v.isDataArrayTexture)if(Wt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Bt,et.width,et.height,et.depth),D)if(v.layerUpdates.size>0){const Y=ka(et.width,et.height,v.format,v.type);for(const tt of v.layerUpdates){const gt=et.data.subarray(tt*Y/et.data.BYTES_PER_ELEMENT,(tt+1)*Y/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,et.width,et.height,1,mt,Lt,gt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,et.width,et.height,et.depth,0,mt,Lt,et.data);else if(v.isData3DTexture)Wt?(ae&&e.texStorage3D(i.TEXTURE_3D,ut,Bt,et.width,et.height,et.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,et.width,et.height,et.depth,0,mt,Lt,et.data);else if(v.isFramebufferTexture){if(ae)if(Wt)e.texStorage2D(i.TEXTURE_2D,ut,Bt,et.width,et.height);else{let Y=et.width,tt=et.height;for(let gt=0;gt<ut;gt++)e.texImage2D(i.TEXTURE_2D,gt,Bt,Y,tt,0,mt,Lt,null),Y>>=1,tt>>=1}}else if(Kt.length>0){if(Wt&&ae){const Y=xt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Bt,Y.width,Y.height)}for(let Y=0,tt=Kt.length;Y<tt;Y++)vt=Kt[Y],Wt?D&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,mt,Lt,vt):e.texImage2D(i.TEXTURE_2D,Y,Bt,mt,Lt,vt);v.generateMipmaps=!1}else if(Wt){if(ae){const Y=xt(et);e.texStorage2D(i.TEXTURE_2D,ut,Bt,Y.width,Y.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,Bt,mt,Lt,et);p(v)&&u(W),ct.__version=V.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function it(b,v,B){if(v.image.length!==6)return;const W=qt(b,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const V=n.get(Z);if(Z.version!==V.__version||W===!0){e.activeTexture(i.TEXTURE0+B);const ct=Jt.getPrimaries(Jt.workingColorSpace),ot=v.colorSpace===Rn?null:Jt.getPrimaries(v.colorSpace),_t=v.colorSpace===Rn||ct===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const It=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let tt=0;tt<6;tt++)!It&&!et?mt[tt]=_(v.image[tt],!0,s.maxCubemapSize):mt[tt]=et?v.image[tt].image:v.image[tt],mt[tt]=Rt(v,mt[tt]);const Lt=mt[0],Bt=r.convert(v.format,v.colorSpace),vt=r.convert(v.type),Kt=w(v.internalFormat,Bt,vt,v.colorSpace),Wt=v.isVideoTexture!==!0,ae=V.__version===void 0||W===!0,D=Z.dataReady;let ut=R(v,Lt);At(i.TEXTURE_CUBE_MAP,v);let Y;if(It){Wt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Kt,Lt.width,Lt.height);for(let tt=0;tt<6;tt++){Y=mt[tt].mipmaps;for(let gt=0;gt<Y.length;gt++){const dt=Y[gt];v.format!==Ze?Bt!==null?Wt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,dt.width,dt.height,Bt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,Kt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,dt.width,dt.height,Bt,vt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,Kt,dt.width,dt.height,0,Bt,vt,dt.data)}}}else{if(Y=v.mipmaps,Wt&&ae){Y.length>0&&ut++;const tt=xt(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Kt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(et){Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,mt[tt].width,mt[tt].height,Bt,vt,mt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,mt[tt].width,mt[tt].height,0,Bt,vt,mt[tt].data);for(let gt=0;gt<Y.length;gt++){const Gt=Y[gt].image[tt].image;Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Gt.width,Gt.height,Bt,vt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,Kt,Gt.width,Gt.height,0,Bt,vt,Gt.data)}}else{Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Bt,vt,mt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Kt,Bt,vt,mt[tt]);for(let gt=0;gt<Y.length;gt++){const dt=Y[gt];Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Bt,vt,dt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,Kt,Bt,vt,dt.image[tt])}}}p(v)&&u(i.TEXTURE_CUBE_MAP),V.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function pt(b,v,B,W,Z,V){const ct=r.convert(B.format,B.colorSpace),ot=r.convert(B.type),_t=w(B.internalFormat,ct,ot,B.colorSpace),It=n.get(v),et=n.get(B);if(et.__renderTarget=v,!It.__hasExternalTextures){const mt=Math.max(1,v.width>>V),Lt=Math.max(1,v.height>>V);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,V,_t,mt,Lt,v.depth,0,ct,ot,null):e.texImage2D(Z,V,_t,mt,Lt,0,ct,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Ot(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,et.__webglTexture,0,zt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,et.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(b,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,V=x(v.stencilBuffer,Z),ct=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=zt(v);Ot(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,V,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,V,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,V,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,b)}else{const W=v.textures;for(let Z=0;Z<W.length;Z++){const V=W[Z],ct=r.convert(V.format,V.colorSpace),ot=r.convert(V.type),_t=w(V.internalFormat,ct,ot,V.colorSpace),It=zt(v);B&&Ot(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,_t,v.width,v.height):Ot(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,_t,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,_t,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const Z=W.__webglTexture,V=zt(v);if(v.depthTexture.format===mi)Ot(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Mi)Ot(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ct(b){const v=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Mt(v.__webglFramebuffer,b)}else if(B){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),st(v.__webglDepthbuffer[W],b,!1);else{const Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,V)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),st(v.__webglDepthbuffer,b,!1);else{const W=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(b,v,B){const W=n.get(b);v!==void 0&&pt(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ct(b)}function jt(b){const v=b.texture,B=n.get(b),W=n.get(v);b.addEventListener("dispose",C);const Z=b.textures,V=b.isWebGLCubeRenderTarget===!0,ct=Z.length>1;if(ct||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,o.memory.textures++),V){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let _t=0;_t<v.mipmaps.length;_t++)B.__webglFramebuffer[ot][_t]=i.createFramebuffer()}else B.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)B.__webglFramebuffer[ot]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ct)for(let ot=0,_t=Z.length;ot<_t;ot++){const It=n.get(Z[ot]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Ot(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const _t=Z[ot];B.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const It=r.convert(_t.format,_t.colorSpace),et=r.convert(_t.type),mt=w(_t.internalFormat,It,et,_t.colorSpace,b.isXRRenderTarget===!0),Lt=zt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,mt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),st(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),At(i.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)pt(B.__webglFramebuffer[ot][_t],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,_t);else pt(B.__webglFramebuffer[ot],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let ot=0,_t=Z.length;ot<_t;ot++){const It=Z[ot],et=n.get(It);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),At(i.TEXTURE_2D,It),pt(B.__webglFramebuffer,b,It,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),p(It)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ot=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,W.__webglTexture),At(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let _t=0;_t<v.mipmaps.length;_t++)pt(B.__webglFramebuffer[_t],b,v,i.COLOR_ATTACHMENT0,ot,_t);else pt(B.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,ot,0);p(v)&&u(ot),e.unbindTexture()}b.depthBuffer&&Ct(b)}function Nt(b){const v=b.textures;for(let B=0,W=v.length;B<W;B++){const Z=v[B];if(p(Z)){const V=E(b),ct=n.get(Z).__webglTexture;e.bindTexture(V,ct),u(V),e.unbindTexture()}}}const Qt=[],L=[];function pe(b){if(b.samples>0){if(Ot(b)===!1){const v=b.textures,B=b.width,W=b.height;let Z=i.COLOR_BUFFER_BIT;const V=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(b),ot=v.length>1;if(ot)for(let _t=0;_t<v.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let _t=0;_t<v.length;_t++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[_t]);const It=n.get(v[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,Z,i.NEAREST),c===!0&&(Qt.length=0,L.length=0,Qt.push(i.COLOR_ATTACHMENT0+_t),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Qt.push(V),L.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let _t=0;_t<v.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,ct.__webglColorRenderbuffer[_t]);const It=n.get(v[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function zt(b){return Math.min(s.maxSamples,b.samples)}function Ot(b){const v=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function yt(b){const v=o.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function Rt(b,v){const B=b.colorSpace,W=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==wi&&B!==Rn&&(Jt.getTransfer(B)===se?(W!==Ze||Z!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function xt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=U,this.rebindTextures=Ft,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ot}function qp(i,t){function e(n,s=Rn){let r;const o=Jt.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===_o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lc)return i.BYTE;if(n===hc)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===dc)return i.ALPHA;if(n===fc)return i.RGB;if(n===Ze)return i.RGBA;if(n===pc)return i.LUMINANCE;if(n===mc)return i.LUMINANCE_ALPHA;if(n===mi)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===gc)return i.RED;if(n===vo)return i.RED_INTEGER;if(n===_c)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===Mo)return i.RGBA_INTEGER;if(n===vs||n===ys||n===Ms||n===Ss)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dr||n===Nr||n===Ur||n===Fr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Or||n===Br||n===kr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Or||n===Br)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zr||n===Gr||n===Hr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===$r||n===Kr||n===Zr||n===jr||n===Jr||n===Qr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$r)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ws||n===to||n===eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ws)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===no||n===io||n===so)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ws)return r.COMPRESSED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===so)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Yp extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Dt extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($p)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Kp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ce,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:Kp,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new A(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jp extends Ei{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const _=new jp,p=e.getContextAttributes();let u=null,E=null;const w=[],x=[],R=new Yt;let T=null;const C=new Oe;C.viewport=new re;const I=new Oe;I.viewport=new re;const S=[C,I],y=new Yp;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let it=w[K];return it===void 0&&(it=new mr,w[K]=it),it.getTargetRaySpace()},this.getControllerGrip=function(K){let it=w[K];return it===void 0&&(it=new mr,w[K]=it),it.getGripSpace()},this.getHand=function(K){let it=w[K];return it===void 0&&(it=new mr,w[K]=it),it.getHandSpace()};function k(K){const it=x.indexOf(K.inputSource);if(it===-1)return;const pt=w[it];pt!==void 0&&(pt.update(K.inputSource,K.frame,l||o),pt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",$);for(let K=0;K<w.length;K++){const it=x[K];it!==null&&(x[K]=null,w[K].disconnect(it))}P=null,z=null,_.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,E=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",q),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const it={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Kn(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let it=null,pt=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?Mi:mi,pt=p.stencil?yi:$n);const Mt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Kn(f.textureWidth,f.textureHeight,{format:Ze,type:vn,depthTexture:new Lc(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(K){for(let it=0;it<K.removed.length;it++){const pt=K.removed[it],st=x.indexOf(pt);st>=0&&(x[st]=null,w[st].disconnect(pt))}for(let it=0;it<K.added.length;it++){const pt=K.added[it];let st=x.indexOf(pt);if(st===-1){for(let Ct=0;Ct<w.length;Ct++)if(Ct>=x.length){x.push(pt),st=Ct;break}else if(x[Ct]===null){x[Ct]=pt,st=Ct;break}if(st===-1)break}const Mt=w[st];Mt&&Mt.connect(pt)}}const X=new N,j=new N;function U(K,it,pt){X.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(pt.matrixWorld);const st=X.distanceTo(j),Mt=it.projectionMatrix.elements,Ct=pt.projectionMatrix.elements,Ft=Mt[14]/(Mt[10]-1),jt=Mt[14]/(Mt[10]+1),Nt=(Mt[9]+1)/Mt[5],Qt=(Mt[9]-1)/Mt[5],L=(Mt[8]-1)/Mt[0],pe=(Ct[8]+1)/Ct[0],zt=Ft*L,Ot=Ft*pe,yt=st/(-L+pe),Rt=yt*-L;if(it.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Rt),K.translateZ(yt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Mt[10]===-1)K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const xt=Ft+yt,b=jt+yt,v=zt-Rt,B=Ot+(st-Rt),W=Nt*jt/b*xt,Z=Qt*jt/b*xt;K.projectionMatrix.makePerspective(v,B,W,Z,xt,b),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function nt(K,it){it===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(it.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let it=K.near,pt=K.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(pt=_.depthFar)),y.near=I.near=C.near=it,y.far=I.far=C.far=pt,(P!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,z=y.far),C.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,y.layers.mask=C.layers.mask|I.layers.mask;const st=K.parent,Mt=y.cameras;nt(y,st);for(let Ct=0;Ct<Mt.length;Ct++)nt(Mt[Ct],st);Mt.length===2?U(y,C,I):y.projectionMatrix.copy(C.projectionMatrix),at(K,y,st)};function at(K,it,pt){pt===null?K.matrix.copy(it.matrixWorld):(K.matrix.copy(pt.matrixWorld),K.matrix.invert(),K.matrix.multiply(it.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(it.projectionMatrix),K.projectionMatrixInverse.copy(it.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ro*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ht=null;function At(K,it){if(h=it.getViewerPose(l||o),g=it,h!==null){const pt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let st=!1;pt.length!==y.cameras.length&&(y.cameras.length=0,st=!0);for(let Ct=0;Ct<pt.length;Ct++){const Ft=pt[Ct];let jt=null;if(m!==null)jt=m.getViewport(Ft);else{const Qt=d.getViewSubImage(f,Ft);jt=Qt.viewport,Ct===0&&(t.setRenderTargetTextures(E,Qt.colorTexture,f.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(E))}let Nt=S[Ct];Nt===void 0&&(Nt=new Oe,Nt.layers.enable(Ct),Nt.viewport=new re,S[Ct]=Nt),Nt.matrix.fromArray(Ft.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ft.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(jt.x,jt.y,jt.width,jt.height),Ct===0&&(y.matrix.copy(Nt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),st===!0&&y.cameras.push(Nt)}const Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){const Ct=d.getDepthInformation(pt[0]);Ct&&Ct.isValid&&Ct.texture&&_.init(t,Ct,s.renderState)}}for(let pt=0;pt<w.length;pt++){const st=x[pt],Mt=w[pt];st!==null&&Mt!==void 0&&Mt.update(st,it,l||o)}ht&&ht(K,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const qt=new Pc;qt.setAnimationLoop(At),this.setAnimationLoop=function(K){ht=K},this.dispose=function(){}}}const Gn=new rn,Qp=new oe;function tm(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Ac(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,E,w,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,x)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,E,w):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Le&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Le&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const E=t.get(u),w=E.envMap,x=E.envMapRotation;w&&(p.envMap.value=w,Gn.copy(x),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),p.envMapRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(Gn)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,E,w){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=w*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Le&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const E=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function em(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,w){const x=w.program;n.uniformBlockBinding(E,x)}function l(E,w){let x=s[E.id];x===void 0&&(g(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",p));const R=w.program;n.updateUBOMapping(E,R);const T=t.render.frame;r[E.id]!==T&&(f(E),r[E.id]=T)}function h(E){const w=d();E.__bindingPointIndex=w;const x=i.createBuffer(),R=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const w=s[E.id],x=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,C=x.length;T<C;T++){const I=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,y=I.length;S<y;S++){const P=I[S];if(m(P,T,S,R)===!0){const z=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let $=0;$<k.length;$++){const X=k[$],j=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,z+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,w,x,R){const T=E.value,C=w+"_"+x;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{const I=R[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(E){const w=E.uniforms;let x=0;const R=16;for(let C=0,I=w.length;C<I;C++){const S=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,P=S.length;y<P;y++){const z=S[y],k=Array.isArray(z.value)?z.value:[z.value];for(let q=0,$=k.length;q<$;q++){const X=k[q],j=_(X),U=x%R,nt=U%j.boundary,at=U+nt;x+=nt,at!==0&&R-at<j.storage&&(x+=R-at),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=j.storage}}}const T=x%R;return T>0&&(x+=R-T),E.__size=x,E.__cache={},this}function _(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function p(E){const w=E.target;w.removeEventListener("dispose",p);const x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function u(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}class nm{constructor(t={}){const{canvas:e=Vl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,u=null;const E=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=Ln,this.toneMappingExposure=1;const x=this;let R=!1,T=0,C=0,I=null,S=-1,y=null;const P=new re,z=new re;let k=null;const q=new Zt(0);let $=0,X=e.width,j=e.height,U=1,nt=null,at=null;const ht=new re(0,0,X,j),At=new re(0,0,X,j);let qt=!1;const K=new Eo;let it=!1,pt=!1;const st=new oe,Mt=new oe,Ct=new N,Ft=new re,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Qt(){return I===null?U:1}let L=n;function pe(M,F){return e.getContext(M,F)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mo}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),L===null){const F="webgl2";if(L=pe(F,M),L===null)throw pe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let zt,Ot,yt,Rt,xt,b,v,B,W,Z,V,ct,ot,_t,It,et,mt,Lt,Bt,vt,Kt,Wt,ae,D;function ut(){zt=new af(L),zt.init(),Wt=new qp(L,zt),Ot=new tf(L,zt,t,Wt),yt=new Vp(L,zt),Ot.reverseDepthBuffer&&f&&yt.buffers.depth.setReversed(!0),Rt=new hf(L),xt=new Cp,b=new Xp(L,zt,yt,xt,Ot,Wt,Rt),v=new nf(x),B=new of(x),W=new gh(L),ae=new Jd(L,W),Z=new cf(L,W,Rt,ae),V=new df(L,Z,W,Rt),Bt=new uf(L,Ot,b),et=new ef(xt),ct=new Ap(x,v,B,zt,Ot,ae,et),ot=new tm(x,xt),_t=new Pp,It=new Fp(zt),Lt=new jd(x,v,B,yt,V,m,c),mt=new Gp(x,V,Ot),D=new em(L,Rt,Ot,yt),vt=new Qd(L,zt,Rt),Kt=new lf(L,zt,Rt),Rt.programs=ct.programs,x.capabilities=Ot,x.extensions=zt,x.properties=xt,x.renderLists=_t,x.shadowMap=mt,x.state=yt,x.info=Rt}ut();const Y=new Jp(x,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=zt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=zt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(M){M!==void 0&&(U=M,this.setSize(X,j,!1))},this.getSize=function(M){return M.set(X,j)},this.setSize=function(M,F,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,j=F,e.width=Math.floor(M*U),e.height=Math.floor(F*U),G===!0&&(e.style.width=M+"px",e.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(X*U,j*U).floor()},this.setDrawingBufferSize=function(M,F,G){X=M,j=F,U=G,e.width=Math.floor(M*G),e.height=Math.floor(F*G),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ht)},this.setViewport=function(M,F,G,H){M.isVector4?ht.set(M.x,M.y,M.z,M.w):ht.set(M,F,G,H),yt.viewport(P.copy(ht).multiplyScalar(U).round())},this.getScissor=function(M){return M.copy(At)},this.setScissor=function(M,F,G,H){M.isVector4?At.set(M.x,M.y,M.z,M.w):At.set(M,F,G,H),yt.scissor(z.copy(At).multiplyScalar(U).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(M){yt.setScissorTest(qt=M)},this.setOpaqueSort=function(M){nt=M},this.setTransparentSort=function(M){at=M},this.getClearColor=function(M){return M.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(M=!0,F=!0,G=!0){let H=0;if(M){let O=!1;if(I!==null){const rt=I.texture.format;O=rt===Mo||rt===yo||rt===vo}if(O){const rt=I.texture.type,ft=rt===vn||rt===$n||rt===zi||rt===yi||rt===_o||rt===xo,wt=Lt.getClearColor(),Et=Lt.getClearAlpha(),kt=wt.r,Ht=wt.g,Tt=wt.b;ft?(g[0]=kt,g[1]=Ht,g[2]=Tt,g[3]=Et,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=kt,_[1]=Ht,_[2]=Tt,_[3]=Et,L.clearBufferiv(L.COLOR,0,_))}else H|=L.COLOR_BUFFER_BIT}F&&(H|=L.DEPTH_BUFFER_BIT),G&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),It.dispose(),xt.dispose(),v.dispose(),B.dispose(),V.dispose(),ae.dispose(),D.dispose(),ct.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Uo),Y.removeEventListener("sessionend",Fo),Un.stop()};function tt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=Rt.autoReset,F=mt.enabled,G=mt.autoUpdate,H=mt.needsUpdate,O=mt.type;ut(),Rt.autoReset=M,mt.enabled=F,mt.autoUpdate=G,mt.needsUpdate=H,mt.type=O}function dt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Gt(M){const F=M.target;F.removeEventListener("dispose",Gt),de(F)}function de(M){Ee(M),xt.remove(M)}function Ee(M){const F=xt.get(M).programs;F!==void 0&&(F.forEach(function(G){ct.releaseProgram(G)}),M.isShaderMaterial&&ct.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,G,H,O,rt){F===null&&(F=jt);const ft=O.isMesh&&O.matrixWorld.determinant()<0,wt=tl(M,F,G,H,O);yt.setMaterial(H,ft);let Et=G.index,kt=1;if(H.wireframe===!0){if(Et=Z.getWireframeAttribute(G),Et===void 0)return;kt=2}const Ht=G.drawRange,Tt=G.attributes.position;let te=Ht.start*kt,ce=(Ht.start+Ht.count)*kt;rt!==null&&(te=Math.max(te,rt.start*kt),ce=Math.min(ce,(rt.start+rt.count)*kt)),Et!==null?(te=Math.max(te,0),ce=Math.min(ce,Et.count)):Tt!=null&&(te=Math.max(te,0),ce=Math.min(ce,Tt.count));const le=ce-te;if(le<0||le===1/0)return;ae.setup(O,H,wt,G,Et);let Re,ee=vt;if(Et!==null&&(Re=W.get(Et),ee=Kt,ee.setIndex(Re)),O.isMesh)H.wireframe===!0?(yt.setLineWidth(H.wireframeLinewidth*Qt()),ee.setMode(L.LINES)):ee.setMode(L.TRIANGLES);else if(O.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),yt.setLineWidth(bt*Qt()),O.isLineSegments?ee.setMode(L.LINES):O.isLineLoop?ee.setMode(L.LINE_LOOP):ee.setMode(L.LINE_STRIP)}else O.isPoints?ee.setMode(L.POINTS):O.isSprite&&ee.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ee.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ee.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const bt=O._multiDrawStarts,cn=O._multiDrawCounts,ne=O._multiDrawCount,Ve=Et?W.get(Et).bytesPerElement:1,Zn=xt.get(H).currentProgram.getUniforms();for(let Ne=0;Ne<ne;Ne++)Zn.setValue(L,"_gl_DrawID",Ne),ee.render(bt[Ne]/Ve,cn[Ne])}else if(O.isInstancedMesh)ee.renderInstances(te,le,O.count);else if(G.isInstancedBufferGeometry){const bt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,cn=Math.min(G.instanceCount,bt);ee.renderInstances(te,le,cn)}else ee.render(te,le)};function ie(M,F,G){M.transparent===!0&&M.side===$e&&M.forceSinglePass===!1?(M.side=Le,M.needsUpdate=!0,qi(M,F,G),M.side=Dn,M.needsUpdate=!0,qi(M,F,G),M.side=$e):qi(M,F,G)}this.compile=function(M,F,G=null){G===null&&(G=M),u=It.get(G),u.init(F),w.push(u),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),M!==G&&M.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const H=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const rt=O.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const wt=rt[ft];ie(wt,G,O),H.add(wt)}else ie(rt,G,O),H.add(rt)}),w.pop(),u=null,H},this.compileAsync=function(M,F,G=null){const H=this.compile(M,F,G);return new Promise(O=>{function rt(){if(H.forEach(function(ft){xt.get(ft).currentProgram.isReady()&&H.delete(ft)}),H.size===0){O(M);return}setTimeout(rt,10)}zt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let He=null;function an(M){He&&He(M)}function Uo(){Un.stop()}function Fo(){Un.start()}const Un=new Pc;Un.setAnimationLoop(an),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(M){He=M,Y.setAnimationLoop(M),M===null?Un.stop():Un.start()},Y.addEventListener("sessionstart",Uo),Y.addEventListener("sessionend",Fo),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,F,I),u=It.get(M,w.length),u.init(F),w.push(u),Mt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(Mt),pt=this.localClippingEnabled,it=et.init(this.clippingPlanes,pt),p=_t.get(M,E.length),p.init(),E.push(p),Y.enabled===!0&&Y.isPresenting===!0){const rt=x.xr.getDepthSensingMesh();rt!==null&&ks(rt,F,-1/0,x.sortObjects)}ks(M,F,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(nt,at),Nt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Nt&&Lt.addToRenderList(p,M),this.info.render.frame++,it===!0&&et.beginShadows();const G=u.state.shadowsArray;mt.render(G,M,F),it===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=p.opaque,O=p.transmissive;if(u.setupLights(),F.isArrayCamera){const rt=F.cameras;if(O.length>0)for(let ft=0,wt=rt.length;ft<wt;ft++){const Et=rt[ft];Bo(H,O,M,Et)}Nt&&Lt.render(M);for(let ft=0,wt=rt.length;ft<wt;ft++){const Et=rt[ft];Oo(p,M,Et,Et.viewport)}}else O.length>0&&Bo(H,O,M,F),Nt&&Lt.render(M),Oo(p,M,F);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(x,M,F),ae.resetDefaultState(),S=-1,y=null,w.pop(),w.length>0?(u=w[w.length-1],it===!0&&et.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function ks(M,F,G,H){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){H&&Ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Mt);const ft=V.update(M),wt=M.material;wt.visible&&p.push(M,ft,wt,G,Ft.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const ft=V.update(M),wt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ft.copy(M.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ft.copy(ft.boundingSphere.center)),Ft.applyMatrix4(M.matrixWorld).applyMatrix4(Mt)),Array.isArray(wt)){const Et=ft.groups;for(let kt=0,Ht=Et.length;kt<Ht;kt++){const Tt=Et[kt],te=wt[Tt.materialIndex];te&&te.visible&&p.push(M,ft,te,G,Ft.z,Tt)}}else wt.visible&&p.push(M,ft,wt,G,Ft.z,null)}}const rt=M.children;for(let ft=0,wt=rt.length;ft<wt;ft++)ks(rt[ft],F,G,H)}function Oo(M,F,G,H){const O=M.opaque,rt=M.transmissive,ft=M.transparent;u.setupLightsView(G),it===!0&&et.setGlobalState(x.clippingPlanes,G),H&&yt.viewport(P.copy(H)),O.length>0&&Xi(O,F,G),rt.length>0&&Xi(rt,F,G),ft.length>0&&Xi(ft,F,G),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Bo(M,F,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Kn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Gi:vn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const rt=u.state.transmissionRenderTarget[H.id],ft=H.viewport||P;rt.setSize(ft.z,ft.w);const wt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(q),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Nt&&Lt.render(G);const Et=x.toneMapping;x.toneMapping=Ln;const kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),it===!0&&et.setGlobalState(x.clippingPlanes,H),Xi(M,G,H),b.updateMultisampleRenderTarget(rt),b.updateRenderTargetMipmap(rt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Tt=0,te=F.length;Tt<te;Tt++){const ce=F[Tt],le=ce.object,Re=ce.geometry,ee=ce.material,bt=ce.group;if(ee.side===$e&&le.layers.test(H.layers)){const cn=ee.side;ee.side=Le,ee.needsUpdate=!0,ko(le,G,H,Re,ee,bt),ee.side=cn,ee.needsUpdate=!0,Ht=!0}}Ht===!0&&(b.updateMultisampleRenderTarget(rt),b.updateRenderTargetMipmap(rt))}x.setRenderTarget(wt),x.setClearColor(q,$),kt!==void 0&&(H.viewport=kt),x.toneMapping=Et}function Xi(M,F,G){const H=F.isScene===!0?F.overrideMaterial:null;for(let O=0,rt=M.length;O<rt;O++){const ft=M[O],wt=ft.object,Et=ft.geometry,kt=H===null?ft.material:H,Ht=ft.group;wt.layers.test(G.layers)&&ko(wt,F,G,Et,kt,Ht)}}function ko(M,F,G,H,O,rt){M.onBeforeRender(x,F,G,H,O,rt),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(x,F,G,H,M,rt),O.transparent===!0&&O.side===$e&&O.forceSinglePass===!1?(O.side=Le,O.needsUpdate=!0,x.renderBufferDirect(G,F,H,O,M,rt),O.side=Dn,O.needsUpdate=!0,x.renderBufferDirect(G,F,H,O,M,rt),O.side=$e):x.renderBufferDirect(G,F,H,O,M,rt),M.onAfterRender(x,F,G,H,O,rt)}function qi(M,F,G){F.isScene!==!0&&(F=jt);const H=xt.get(M),O=u.state.lights,rt=u.state.shadowsArray,ft=O.state.version,wt=ct.getParameters(M,O.state,rt,F,G),Et=ct.getProgramCacheKey(wt);let kt=H.programs;H.environment=M.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(M.isMeshStandardMaterial?B:v).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,kt===void 0&&(M.addEventListener("dispose",Gt),kt=new Map,H.programs=kt);let Ht=kt.get(Et);if(Ht!==void 0){if(H.currentProgram===Ht&&H.lightsStateVersion===ft)return Go(M,wt),Ht}else wt.uniforms=ct.getUniforms(M),M.onBeforeCompile(wt,x),Ht=ct.acquireProgram(wt,Et),kt.set(Et,Ht),H.uniforms=wt.uniforms;const Tt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=et.uniform),Go(M,wt),H.needsLights=nl(M),H.lightsStateVersion=ft,H.needsLights&&(Tt.ambientLightColor.value=O.state.ambient,Tt.lightProbe.value=O.state.probe,Tt.directionalLights.value=O.state.directional,Tt.directionalLightShadows.value=O.state.directionalShadow,Tt.spotLights.value=O.state.spot,Tt.spotLightShadows.value=O.state.spotShadow,Tt.rectAreaLights.value=O.state.rectArea,Tt.ltc_1.value=O.state.rectAreaLTC1,Tt.ltc_2.value=O.state.rectAreaLTC2,Tt.pointLights.value=O.state.point,Tt.pointLightShadows.value=O.state.pointShadow,Tt.hemisphereLights.value=O.state.hemi,Tt.directionalShadowMap.value=O.state.directionalShadowMap,Tt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Tt.spotShadowMap.value=O.state.spotShadowMap,Tt.spotLightMatrix.value=O.state.spotLightMatrix,Tt.spotLightMap.value=O.state.spotLightMap,Tt.pointShadowMap.value=O.state.pointShadowMap,Tt.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ht,H.uniformsList=null,Ht}function zo(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Es.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function Go(M,F){const G=xt.get(M);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function tl(M,F,G,H,O){F.isScene!==!0&&(F=jt),b.resetTextureUnits();const rt=F.fog,ft=H.isMeshStandardMaterial?F.environment:null,wt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wi,Et=(H.isMeshStandardMaterial?B:v).get(H.envMap||ft),kt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ht=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Tt=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color;let le=Ln;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(le=x.toneMapping);const Re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=Re!==void 0?Re.length:0,bt=xt.get(H),cn=u.state.lights;if(it===!0&&(pt===!0||M!==y)){const Be=M===y&&H.id===S;et.setState(H,M,Be)}let ne=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==cn.state.version||bt.outputColorSpace!==wt||O.isBatchedMesh&&bt.batching===!1||!O.isBatchedMesh&&bt.batching===!0||O.isBatchedMesh&&bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&bt.instancing===!1||!O.isInstancedMesh&&bt.instancing===!0||O.isSkinnedMesh&&bt.skinning===!1||!O.isSkinnedMesh&&bt.skinning===!0||O.isInstancedMesh&&bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&bt.instancingMorph===!1&&O.morphTexture!==null||bt.envMap!==Et||H.fog===!0&&bt.fog!==rt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==et.numPlanes||bt.numIntersection!==et.numIntersection)||bt.vertexAlphas!==kt||bt.vertexTangents!==Ht||bt.morphTargets!==Tt||bt.morphNormals!==te||bt.morphColors!==ce||bt.toneMapping!==le||bt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,bt.__version=H.version);let Ve=bt.currentProgram;ne===!0&&(Ve=qi(H,F,O));let Zn=!1,Ne=!1,Ci=!1;const he=Ve.getUniforms(),Je=bt.uniforms;if(yt.useProgram(Ve.program)&&(Zn=!0,Ne=!0,Ci=!0),H.id!==S&&(S=H.id,Ne=!0),Zn||y!==M){yt.buffers.depth.getReversed()?(st.copy(M.projectionMatrix),Xl(st),ql(st),he.setValue(L,"projectionMatrix",st)):he.setValue(L,"projectionMatrix",M.projectionMatrix),he.setValue(L,"viewMatrix",M.matrixWorldInverse);const yn=he.map.cameraPosition;yn!==void 0&&yn.setValue(L,Ct.setFromMatrixPosition(M.matrixWorld)),Ot.logarithmicDepthBuffer&&he.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ne=!0,Ci=!0)}if(O.isSkinnedMesh){he.setOptional(L,O,"bindMatrix"),he.setOptional(L,O,"bindMatrixInverse");const Be=O.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),he.setValue(L,"boneTexture",Be.boneTexture,b))}O.isBatchedMesh&&(he.setOptional(L,O,"batchingTexture"),he.setValue(L,"batchingTexture",O._matricesTexture,b),he.setOptional(L,O,"batchingIdTexture"),he.setValue(L,"batchingIdTexture",O._indirectTexture,b),he.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&he.setValue(L,"batchingColorTexture",O._colorsTexture,b));const Ri=G.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Bt.update(O,G,Ve),(Ne||bt.receiveShadow!==O.receiveShadow)&&(bt.receiveShadow=O.receiveShadow,he.setValue(L,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Je.envMap.value=Et,Je.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(Je.envMapIntensity.value=F.environmentIntensity),Ne&&(he.setValue(L,"toneMappingExposure",x.toneMappingExposure),bt.needsLights&&el(Je,Ci),rt&&H.fog===!0&&ot.refreshFogUniforms(Je,rt),ot.refreshMaterialUniforms(Je,H,U,j,u.state.transmissionRenderTarget[M.id]),Es.upload(L,zo(bt),Je,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Es.upload(L,zo(bt),Je,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(L,"center",O.center),he.setValue(L,"modelViewMatrix",O.modelViewMatrix),he.setValue(L,"normalMatrix",O.normalMatrix),he.setValue(L,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Be=H.uniformsGroups;for(let yn=0,Mn=Be.length;yn<Mn;yn++){const Ho=Be[yn];D.update(Ho,Ve),D.bind(Ho,Ve)}}return Ve}function el(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function nl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,F,G){xt.get(M.texture).__webglTexture=F,xt.get(M.depthTexture).__webglTexture=G;const H=xt.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,F){const G=xt.get(M);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,G=0){I=M,T=F,C=G;let H=!0,O=null,rt=!1,ft=!1;if(M){const Et=xt.get(M);if(Et.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Et.__webglFramebuffer===void 0)b.setupRenderTarget(M);else if(Et.__hasExternalTextures)b.rebindTextures(M,xt.get(M.texture).__webglTexture,xt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Tt=M.depthTexture;if(Et.__boundDepthTexture!==Tt){if(Tt!==null&&xt.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(M)}}const kt=M.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(ft=!0);const Ht=xt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ht[F])?O=Ht[F][G]:O=Ht[F],rt=!0):M.samples>0&&b.useMultisampledRTT(M)===!1?O=xt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ht)?O=Ht[G]:O=Ht,P.copy(M.viewport),z.copy(M.scissor),k=M.scissorTest}else P.copy(ht).multiplyScalar(U).floor(),z.copy(At).multiplyScalar(U).floor(),k=qt;if(yt.bindFramebuffer(L.FRAMEBUFFER,O)&&H&&yt.drawBuffers(M,O),yt.viewport(P),yt.scissor(z),yt.setScissorTest(k),rt){const Et=xt.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Et.__webglTexture,G)}else if(ft){const Et=xt.get(M.texture),kt=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,G||0,kt)}S=-1},this.readRenderTargetPixels=function(M,F,G,H,O,rt,ft){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(wt=wt[ft]),wt){yt.bindFramebuffer(L.FRAMEBUFFER,wt);try{const Et=M.texture,kt=Et.format,Ht=Et.type;if(!Ot.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-H&&G>=0&&G<=M.height-O&&L.readPixels(F,G,H,O,Wt.convert(kt),Wt.convert(Ht),rt)}finally{const Et=I!==null?xt.get(I).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(M,F,G,H,O,rt,ft){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ft!==void 0&&(wt=wt[ft]),wt){const Et=M.texture,kt=Et.format,Ht=Et.type;if(!Ot.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=M.width-H&&G>=0&&G<=M.height-O){yt.bindFramebuffer(L.FRAMEBUFFER,wt);const Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,rt.byteLength,L.STREAM_READ),L.readPixels(F,G,H,O,Wt.convert(kt),Wt.convert(Ht),0);const te=I!==null?xt.get(I).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,te);const ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Wl(L,ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,rt),L.deleteBuffer(Tt),L.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,F=null,G=0){M.isTexture!==!0&&(Oi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1]);const H=Math.pow(2,-G),O=Math.floor(M.image.width*H),rt=Math.floor(M.image.height*H),ft=F!==null?F.x:0,wt=F!==null?F.y:0;b.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,G,0,0,ft,wt,O,rt),yt.unbindTexture()},this.copyTextureToTexture=function(M,F,G=null,H=null,O=0){M.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let rt,ft,wt,Et,kt,Ht,Tt,te,ce;const le=M.isCompressedTexture?M.mipmaps[O]:M.image;G!==null?(rt=G.max.x-G.min.x,ft=G.max.y-G.min.y,wt=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,kt=G.min.y,Ht=G.isBox3?G.min.z:0):(rt=le.width,ft=le.height,wt=le.depth||1,Et=0,kt=0,Ht=0),H!==null?(Tt=H.x,te=H.y,ce=H.z):(Tt=0,te=0,ce=0);const Re=Wt.convert(F.format),ee=Wt.convert(F.type);let bt;F.isData3DTexture?(b.setTexture3D(F,0),bt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(b.setTexture2DArray(F,0),bt=L.TEXTURE_2D_ARRAY):(b.setTexture2D(F,0),bt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const cn=L.getParameter(L.UNPACK_ROW_LENGTH),ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ve=L.getParameter(L.UNPACK_SKIP_PIXELS),Zn=L.getParameter(L.UNPACK_SKIP_ROWS),Ne=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Et),L.pixelStorei(L.UNPACK_SKIP_ROWS,kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);const Ci=M.isDataArrayTexture||M.isData3DTexture,he=F.isDataArrayTexture||F.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Je=xt.get(M),Ri=xt.get(F),Be=xt.get(Je.__renderTarget),yn=xt.get(Ri.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,Be.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Mn=0;Mn<wt;Mn++)Ci&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(M).__webglTexture,O,Ht+Mn),M.isDepthTexture?(he&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(F).__webglTexture,O,ce+Mn),L.blitFramebuffer(Et,kt,rt,ft,Tt,te,rt,ft,L.DEPTH_BUFFER_BIT,L.NEAREST)):he?L.copyTexSubImage3D(bt,O,Tt,te,ce+Mn,Et,kt,rt,ft):L.copyTexSubImage2D(bt,O,Tt,te,ce+Mn,Et,kt,rt,ft);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else he?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(bt,O,Tt,te,ce,rt,ft,wt,Re,ee,le.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,O,Tt,te,ce,rt,ft,wt,Re,le.data):L.texSubImage3D(bt,O,Tt,te,ce,rt,ft,wt,Re,ee,le):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Tt,te,rt,ft,Re,ee,le.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Tt,te,le.width,le.height,Re,le.data):L.texSubImage2D(L.TEXTURE_2D,O,Tt,te,rt,ft,Re,ee,le);L.pixelStorei(L.UNPACK_ROW_LENGTH,cn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,Zn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ne),O===0&&F.generateMipmaps&&L.generateMipmap(bt),yt.unbindTexture()},this.copyTextureToTexture3D=function(M,F,G=null,H=null,O=0){return M.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,M=arguments[2],F=arguments[3],O=arguments[4]||0),Oi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,F,G,H,O)},this.initRenderTarget=function(M){xt.get(M).__webglFramebuffer===void 0&&b.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),yt.unbindTexture()},this.resetState=function(){T=0,C=0,I=null,yt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class bo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new bo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class im extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Oc extends Ti{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const za=new oe,ao=new So,ps=new Us,ms=new N;class sm extends we{constructor(t=new De,e=new Oc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),ps.radius+=r,t.ray.intersectsSphere(ps)===!1)return;za.copy(s).invert(),ao.copy(t.ray).applyMatrix4(za);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=l.getX(g);ms.fromBufferAttribute(d,p),Ga(ms,p,c,s,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)ms.fromBufferAttribute(d,g),Ga(ms,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ga(i,t,e,n,s,r,o){const a=ao.distanceSqToPoint(i);if(a<e){const c=new N;ao.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Qe extends Ce{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ao extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new N,h=new Yt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const m=n+d/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class J extends De{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=n/2;let u=0;E(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new fe(d,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(m,2));function E(){const x=new N,R=new N;let T=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const S=[],y=I/r,P=y*(e-t)+t;for(let z=0;z<=s;z++){const k=z/s,q=k*c+a,$=Math.sin(q),X=Math.cos(q);R.x=P*$,R.y=-y*n+p,R.z=P*X,d.push(R.x,R.y,R.z),x.set($,C,X).normalize(),f.push(x.x,x.y,x.z),m.push(k,1-y),S.push(g++)}_.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const y=_[S][I],P=_[S+1][I],z=_[S+1][I+1],k=_[S][I+1];(t>0||S!==0)&&(h.push(y,P,k),T+=3),(e>0||S!==r-1)&&(h.push(P,z,k),T+=3)}l.addGroup(u,T,0),u+=T}function w(x){const R=g,T=new Yt,C=new N;let I=0;const S=x===!0?t:e,y=x===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),g++;const P=g;for(let z=0;z<=s;z++){const q=z/s*c+a,$=Math.cos(q),X=Math.sin(q);C.x=S*X,C.y=p*y,C.z=S*$,d.push(C.x,C.y,C.z),f.push(0,y,0),T.x=$*.5+.5,T.y=X*.5*y+.5,m.push(T.x,T.y),g++}for(let z=0;z<s;z++){const k=R+z,q=P+z;x===!0?h.push(q,q+1,k):h.push(q+1,q,k),I+=3}l.addGroup(u,I,x===!0?1:2),u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new J(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mn extends J{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new mn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Co extends De{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const f=(e-t)/s,m=new N,g=new Yt;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const u=r+p/n*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const p=_*(n+1);for(let u=0;u<n;u++){const E=u+p,w=E,x=E+n+1,R=E+n+2,T=E+1;a.push(w,x,T),a.push(x,R,T)}}this.setIndex(a),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ut extends De{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new N,f=new N,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const E=[],w=u/n;let x=0;u===0&&o===0?x=.5/e:u===n&&c===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const T=R/e;d.x=-t*Math.cos(s+T*r)*Math.sin(o+w*a),d.y=t*Math.cos(o+w*a),d.z=t*Math.sin(s+T*r)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(T+x,1-w),E.push(l++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<e;E++){const w=h[u][E+1],x=h[u][E],R=h[u+1][E],T=h[u+1][E+1];(u!==0||o>0)&&m.push(w,x,T),(u!==n-1||c<Math.PI)&&m.push(x,R,T)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ue extends De{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new N,d=new N,f=new N;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const _=g/s*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,u=(s+1)*(m-1)+g,E=(s+1)*m+g;o.push(_,p,E),o.push(p,u,E)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Q extends Ti{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ro extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const gr=new oe,Ha=new N,Va=new N;class Bc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ha.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ha),Va.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Va),e.updateMatrixWorld(),gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Wa=new oe,Ui=new N,_r=new N;class rm extends Bc{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ui.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ui),_r.copy(n.position),_r.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_r),n.updateMatrixWorld(),s.makeTranslation(-Ui.x,-Ui.y,-Ui.z),Wa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa)}}class Hn extends Ro{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class om extends Bc{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xa extends Ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new om}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class am extends Ro{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class kc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qa(){return performance.now()}const Ya=new oe;class cm{constructor(t,e,n=0,s=1/0){this.ray=new So(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ya.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ya),this}intersectObject(t,e=!0,n=[]){return co(t,this,n,e),n.sort($a),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)co(t[s],this,n,e);return n.sort($a),n}}function $a(i,t){return i.distance-t.distance}function co(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)co(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);class lm extends we{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Yt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const ui=new N,Ka=new oe,Za=new oe,ja=new N,Ja=new N;class hm{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Ka.copy(_.matrixWorldInverse),Za.multiplyMatrices(_.projectionMatrix,Ka),h(g,g,_),m(g)},this.setSize=function(g,_){n=g,s=_,r=n/2,o=s/2,c.style.width=g+"px",c.style.height=_+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,p=g.children.length;_<p;_++)l(g.children[_])}function h(g,_,p){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){ui.setFromMatrixPosition(g.matrixWorld),ui.applyMatrix4(Za);const u=ui.z>=-1&&ui.z<=1&&g.layers.test(p.layers)===!0,E=g.element;E.style.display=u===!0?"":"none",u===!0&&(g.onBeforeRender(e,_,p),E.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(ui.x*r+r)+"px,"+(-ui.y*o+o)+"px)",E.parentNode!==c&&c.appendChild(E),g.onAfterRender(e,_,p));const w={distanceToCameraSquared:d(p,g)};a.objects.set(g,w)}for(let u=0,E=g.children.length;u<E;u++)h(g.children[u],_,p)}function d(g,_){return ja.setFromMatrixPosition(g.matrixWorld),Ja.setFromMatrixPosition(_.matrixWorld),ja.distanceToSquared(Ja)}function f(g){const _=[];return g.traverseVisible(function(p){p.isCSS2DObject&&_.push(p)}),_}function m(g){const _=f(g).sort(function(u,E){if(u.renderOrder!==E.renderOrder)return E.renderOrder-u.renderOrder;const w=a.objects.get(u).distanceToCameraSquared,x=a.objects.get(E).distanceToCameraSquared;return w-x}),p=_.length;for(let u=0,E=_.length;u<E;u++)_[u].element.style.zIndex=p-u}}}const on=Object.create(null);on.open="0";on.close="1";on.ping="2";on.pong="3";on.message="4";on.upgrade="5";on.noop="6";const Ts=Object.create(null);Object.keys(on).forEach(i=>{Ts[on[i]]=i});const lo={type:"error",data:"parser error"},zc=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Gc=typeof ArrayBuffer=="function",Hc=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,Po=({type:i,data:t},e,n)=>zc&&t instanceof Blob?e?n(t):Qa(t,n):Gc&&(t instanceof ArrayBuffer||Hc(t))?e?n(t):Qa(new Blob([t]),n):n(on[i]+(t||"")),Qa=(i,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(i)};function tc(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let xr;function um(i,t){if(zc&&i.data instanceof Blob)return i.data.arrayBuffer().then(tc).then(t);if(Gc&&(i.data instanceof ArrayBuffer||Hc(i.data)))return t(tc(i.data));Po(i,!1,e=>{xr||(xr=new TextEncoder),t(xr.encode(e))})}const ec="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ki=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<ec.length;i++)ki[ec.charCodeAt(i)]=i;const dm=i=>{let t=i.length*.75,e=i.length,n,s=0,r,o,a,c;i[i.length-1]==="="&&(t--,i[i.length-2]==="="&&t--);const l=new ArrayBuffer(t),h=new Uint8Array(l);for(n=0;n<e;n+=4)r=ki[i.charCodeAt(n)],o=ki[i.charCodeAt(n+1)],a=ki[i.charCodeAt(n+2)],c=ki[i.charCodeAt(n+3)],h[s++]=r<<2|o>>4,h[s++]=(o&15)<<4|a>>2,h[s++]=(a&3)<<6|c&63;return l},fm=typeof ArrayBuffer=="function",Io=(i,t)=>{if(typeof i!="string")return{type:"message",data:Vc(i,t)};const e=i.charAt(0);return e==="b"?{type:"message",data:pm(i.substring(1),t)}:Ts[e]?i.length>1?{type:Ts[e],data:i.substring(1)}:{type:Ts[e]}:lo},pm=(i,t)=>{if(fm){const e=dm(i);return Vc(e,t)}else return{base64:!0,data:i}},Vc=(i,t)=>{switch(t){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},Wc="",mm=(i,t)=>{const e=i.length,n=new Array(e);let s=0;i.forEach((r,o)=>{Po(r,!1,a=>{n[o]=a,++s===e&&t(n.join(Wc))})})},gm=(i,t)=>{const e=i.split(Wc),n=[];for(let s=0;s<e.length;s++){const r=Io(e[s],t);if(n.push(r),r.type==="error")break}return n};function _m(){return new TransformStream({transform(i,t){um(i,e=>{const n=e.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let vr;function gs(i){return i.reduce((t,e)=>t+e.length,0)}function _s(i,t){if(i[0].length===t)return i.shift();const e=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)e[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),e}function xm(i,t){vr||(vr=new TextDecoder);const e=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(n===0){if(gs(e)<1)break;const c=_s(e,1);r=(c[0]&128)===128,s=c[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(gs(e)<2)break;const c=_s(e,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(gs(e)<8)break;const c=_s(e,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(lo);break}s=h*Math.pow(2,32)+l.getUint32(4),n=3}else{if(gs(e)<s)break;const c=_s(e,s);a.enqueue(Io(r?c:vr.decode(c),t)),n=0}if(s===0||s>i){a.enqueue(lo);break}}}})}const Xc=4;function ve(i){if(i)return vm(i)}function vm(i){for(var t in ve.prototype)i[t]=ve.prototype[t];return i}ve.prototype.on=ve.prototype.addEventListener=function(i,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(t),this};ve.prototype.once=function(i,t){function e(){this.off(i,e),t.apply(this,arguments)}return e.fn=t,this.on(i,e),this};ve.prototype.off=ve.prototype.removeListener=ve.prototype.removeAllListeners=ve.prototype.removeEventListener=function(i,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+i];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<e.length;s++)if(n=e[s],n===t||n.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+i],this};ve.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+i],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,s=e.length;n<s;++n)e[n].apply(this,t)}return this};ve.prototype.emitReserved=ve.prototype.emit;ve.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};ve.prototype.hasListeners=function(i){return!!this.listeners(i).length};const Os=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),ze=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),ym="arraybuffer";function qc(i,...t){return t.reduce((e,n)=>(i.hasOwnProperty(n)&&(e[n]=i[n]),e),{})}const Mm=ze.setTimeout,Sm=ze.clearTimeout;function Bs(i,t){t.useNativeTimers?(i.setTimeoutFn=Mm.bind(ze),i.clearTimeoutFn=Sm.bind(ze)):(i.setTimeoutFn=ze.setTimeout.bind(ze),i.clearTimeoutFn=ze.clearTimeout.bind(ze))}const wm=1.33;function Em(i){return typeof i=="string"?Tm(i):Math.ceil((i.byteLength||i.size)*wm)}function Tm(i){let t=0,e=0;for(let n=0,s=i.length;n<s;n++)t=i.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Yc(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function bm(i){let t="";for(let e in i)i.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(i[e]));return t}function Am(i){let t={},e=i.split("&");for(let n=0,s=e.length;n<s;n++){let r=e[n].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class Cm extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class Lo extends ve{constructor(t){super(),this.writable=!1,Bs(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new Cm(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=Io(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=bm(t);return e.length?"?"+e:""}}class Rm extends Lo{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};gm(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,mm(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=Yc()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let $c=!1;try{$c=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Pm=$c;function Im(){}class Lm extends Rm{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class sn extends ve{constructor(t,e,n){super(),this.createRequest=t,Bs(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=qc(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=sn.requestsCount++,sn.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Im,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete sn.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}sn.requestsCount=0;sn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",nc);else if(typeof addEventListener=="function"){const i="onpagehide"in ze?"pagehide":"unload";addEventListener(i,nc,!1)}}function nc(){for(let i in sn.requests)sn.requests.hasOwnProperty(i)&&sn.requests[i].abort()}const Dm=(function(){const i=Kc({xdomain:!1});return i&&i.responseType!==null})();class Nm extends Lm{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=Dm&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new sn(Kc,this.uri(),t)}}function Kc(i){const t=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Pm))return new XMLHttpRequest}catch{}if(!t)try{return new ze[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Zc=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Um extends Lo{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=Zc?{}:qc(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;Po(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&Os(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=Yc()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const yr=ze.WebSocket||ze.MozWebSocket;class Fm extends Um{createSocket(t,e,n){return Zc?new yr(t,e,n):e?new yr(t,e):new yr(t)}doWrite(t,e){this.ws.send(e)}}class Om extends Lo{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=xm(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),s=_m();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;this._writer.write(n).then(()=>{s&&Os(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const Bm={websocket:Fm,webtransport:Om,polling:Nm},km=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,zm=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ho(i){if(i.length>8e3)throw"URI too long";const t=i,e=i.indexOf("["),n=i.indexOf("]");e!=-1&&n!=-1&&(i=i.substring(0,e)+i.substring(e,n).replace(/:/g,";")+i.substring(n,i.length));let s=km.exec(i||""),r={},o=14;for(;o--;)r[zm[o]]=s[o]||"";return e!=-1&&n!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Gm(r,r.path),r.queryKey=Hm(r,r.query),r}function Gm(i,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Hm(i,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(e[s]=r)}),e}const uo=typeof addEventListener=="function"&&typeof removeEventListener=="function",bs=[];uo&&addEventListener("offline",()=>{bs.forEach(i=>i())},!1);let jc=class di extends ve{constructor(t,e={}){var n,s;if(super(),this.binaryType=ym,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const r=ho(t);e.hostname=r.host,e.secure=r.protocol==="https"||r.protocol==="wss",e.port=r.port,r.query&&(e.query=r.query)}else e.host&&(e.hostname=ho(e.host).host);if(Bs(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),e.transportImplementations&&e.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");e.transportImplementations||!((n=e.transports)===null||n===void 0)&&n.length&&typeof e.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((s=e.transportImplementations)!==null&&s!==void 0?s:e.transports).forEach(r=>{const o=r.prototype.name;this.transports.push(o),this._transportsByName[o]=r})):(this.transports=e.transports?[...e.transports]:["polling","websocket","webtransport"],this._transportsByName=Bm),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Am(this.opts.query)),uo&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},bs.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=Xc,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&di.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}_probe(t){let e=this.createTransport(t),n=!1;di.priorWebsocketSuccess=!1;const s=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;di.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=e.name,this.emitReserved("upgradeError",f)}}))};function r(){n||(n=!0,h(),e.close(),e=null)}const o=d=>{const f=new Error("probe error: "+d);f.transport=e.name,r(),this.emitReserved("upgradeError",f)};function a(){o("transport closed")}function c(){o("socket closed")}function l(d){e&&d.name!==e.name&&r()}const h=()=>{e.removeListener("open",s),e.removeListener("error",o),e.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};e.once("open",s),e.once("error",o),e.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onOpen(){if(this.readyState="open",di.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._upgrades=this._filterUpgrades(t.upgrades),this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(e+=Em(s)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Os(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,s){if(typeof e=="function"&&(s=e,e=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:t,data:e,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(di.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),uo&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=bs.indexOf(this._offlineEventListener);n!==-1&&bs.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}};jc.protocol=Xc;function Vm(i,t="",e){let n=i;e=e||typeof location<"u"&&location,i==null&&(i=e.protocol+"//"+e.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=e.protocol+i:i=e.host+i),/^(https?|wss?):\/\//.test(i)||(typeof e<"u"?i=e.protocol+"//"+i:i="https://"+i),n=ho(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+t,n.href=n.protocol+"://"+r+(e&&e.port===n.port?"":":"+n.port),n}const Wm=typeof ArrayBuffer=="function",Xm=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,Jc=Object.prototype.toString,qm=typeof Blob=="function"||typeof Blob<"u"&&Jc.call(Blob)==="[object BlobConstructor]",Ym=typeof File=="function"||typeof File<"u"&&Jc.call(File)==="[object FileConstructor]";function Do(i){return Wm&&(i instanceof ArrayBuffer||Xm(i))||qm&&i instanceof Blob||Ym&&i instanceof File}function As(i,t){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let e=0,n=i.length;e<n;e++)if(As(i[e]))return!0;return!1}if(Do(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return As(i.toJSON(),!0);for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e)&&As(i[e]))return!0;return!1}function $m(i){const t=[],e=i.data,n=i;return n.data=Cs(e,t),n.attachments=t.length,{packet:n,buffers:t}}function Cs(i,t,e){if(!i)return i;if(Do(i)){const n={_placeholder:!0,num:t.length};return t.push(i),n}else if(Array.isArray(i)){const n=new Array(i.length);for(let s=0;s<i.length;s++)n[s]=Cs(i[s],t);return n}else if(typeof i=="object"&&!(i instanceof Date)){if(i.toJSON&&typeof i.toJSON=="function"&&!e)return Cs(i.toJSON(),t,!0);const n={};for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=Cs(i[s],t));return n}return i}function Km(i,t){return i.data=fo(i.data,t),delete i.attachments,i}function fo(i,t){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<t.length)return t[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let e=0;e<i.length;e++)i[e]=fo(i[e],t);else if(typeof i=="object")for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=fo(i[e],t));return i}const Zm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var $t;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})($t||($t={}));class jm{constructor(t){this.replacer=t}encode(t){return(t.type===$t.EVENT||t.type===$t.ACK)&&As(t)?this.encodeAsBinary({type:t.type===$t.EVENT?$t.BINARY_EVENT:$t.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===$t.BINARY_EVENT||t.type===$t.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=$m(t),n=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(n),s}}class No extends ve{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===$t.BINARY_EVENT;n||e.type===$t.BINARY_ACK?(e.type=n?$t.EVENT:$t.ACK,this.reconstructor=new Jm(e)):super.emitReserved("decoded",e)}else if(Do(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if($t[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===$t.BINARY_EVENT||n.type===$t.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!Qm(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(r,e)}else n.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(No.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case $t.CONNECT:return ic(e);case $t.DISCONNECT:return e===void 0;case $t.CONNECT_ERROR:return typeof e=="string"||ic(e);case $t.EVENT:case $t.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Zm.indexOf(e[0])===-1);case $t.ACK:case $t.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Jm{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Km(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const Qm=Number.isInteger||function(i){return typeof i=="number"&&isFinite(i)&&Math.floor(i)===i};function ic(i){return Object.prototype.toString.call(i)==="[object Object]"}const t0=Object.freeze(Object.defineProperty({__proto__:null,Decoder:No,Encoder:jm,get PacketType(){return $t}},Symbol.toStringTag,{value:"Module"}));function Ye(i,t,e){return i.on(t,e),function(){i.off(t,e)}}const e0=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Qc extends ve{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[Ye(t,"open",this.onopen.bind(this)),Ye(t,"packet",this.onpacket.bind(this)),Ye(t,"error",this.onerror.bind(this)),Ye(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,s,r;if(e0.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:$t.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const h=this.ids++,d=e.pop();this._registerAckCallback(h,d),o.id=h}const a=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((n,s)=>{const r=(o,a)=>o?s(o):n(a);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:$t.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case $t.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case $t.EVENT:case $t.BINARY_EVENT:this.onevent(t);break;case $t.ACK:case $t.BINARY_ACK:this.onack(t);break;case $t.DISCONNECT:this.ondisconnect();break;case $t.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...s){n||(n=!0,e.packet({type:$t.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:$t.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function Ai(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}Ai.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*i);i=(Math.floor(t*10)&1)==0?i-e:i+e}return Math.min(i,this.max)|0};Ai.prototype.reset=function(){this.attempts=0};Ai.prototype.setMin=function(i){this.ms=i};Ai.prototype.setMax=function(i){this.max=i};Ai.prototype.setJitter=function(i){this.jitter=i};class po extends ve{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Bs(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ai({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||t0;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new jc(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=Ye(e,"open",function(){n.onopen(),t&&t()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=Ye(e,"error",r);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(Ye(t,"ping",this.onping.bind(this)),Ye(t,"data",this.ondata.bind(this)),Ye(t,"error",this.onerror.bind(this)),Ye(t,"close",this.onclose.bind(this)),Ye(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Os(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Qc(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Fi={};function Rs(i,t){typeof i=="object"&&(t=i,i=void 0),t=t||{};const e=Vm(i,t.path||"/socket.io"),n=e.source,s=e.id,r=e.path,o=Fi[s]&&r in Fi[s].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let c;return a?c=new po(n,t):(Fi[s]||(Fi[s]=new po(n,t)),c=Fi[s]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(Rs,{Manager:po,Socket:Qc,io:Rs,connect:Rs});class n0{constructor(t){this.scene=t,this.candleLights=[],this.smokeParticles=null,this.haloMesh=null,this.buddhaAuraLight=null,this.clock=new kc,this.ripples=[],this.cushionPositions=[],this.interactiveStations={woodfish:{x:5.6,z:-1.05,rotY:Math.PI},bell:{x:-5.6,z:-1.48,rotY:Math.PI},incenseTable:{x:-2.8,z:-.95,rotY:Math.PI},incenseCandle:{x:-.65,z:-2.75,rotY:Math.PI},incenseBurner:{x:0,z:-2.75,rotY:Math.PI},incenseBow:{x:0,z:-1.2,rotY:Math.PI},fortuneTable:{x:2.8,z:-.95,rotY:Math.PI},pond:{x:-6.8,z:8.6,rotY:0},chess:{x:6.8,z:9.2,rotY:0},chess2:{x:6.8,z:11.8,rotY:Math.PI},tea:{x:7.7,z:10.5,rotY:-Math.PI/2}},this.pondFish=[],this.floatingLanterns=[],this.waterMesh=null,this.teaSteamParticles=null,this.textures={woodFloor:this.generateWoodFloorTexture(),carpet:this.generateCarpetTexture(),cushion:this.generatePlushCushionTexture(),pillar:this.generatePillarTexture(),wall:this.generateWallTexture(),chessBoard:this.generateChessBoardTexture()},this.createEnvironment(),this.createArchitecture(),this.createGrandBuddhaAltar(),this.createGrandOfferingAltar(),this.createSideAltars(),this.createEighteenArhats(),this.createAuthenticCushionsGrid(),this.createInteractiveStations(),this.createLotusPond(),this.createChessPavilion(),this.createAtmosphericLighting(),this.createParticleSystems()}generateWoodFloorTexture(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.fillStyle="#261309",e.fillRect(0,0,1024,1024);const n=16,s=1024/n;for(let o=0;o<n;o++){const a=o*s,c=28+Math.floor(Math.sin(o*1.7)*12);e.fillStyle=`rgb(${c+18}, ${c+4}, ${c-8})`,e.fillRect(0,a,1024,s-2),e.strokeStyle="rgba(15, 6, 2, 0.45)",e.lineWidth=1;for(let h=0;h<18;h++){const d=a+Math.random()*s;e.beginPath(),e.moveTo(0,d),e.bezierCurveTo(300,d+(Math.random()-.5)*6,700,d+(Math.random()-.5)*6,1024,d),e.stroke()}e.fillStyle="#110502",e.fillRect(0,a+s-2,1024,2);const l=e.createLinearGradient(0,a,0,a+s);l.addColorStop(0,"rgba(255, 230, 190, 0.08)"),l.addColorStop(.5,"rgba(255, 230, 190, 0.02)"),l.addColorStop(1,"rgba(0, 0, 0, 0.15)"),e.fillStyle=l,e.fillRect(0,a,1024,s-2)}const r=new Qe(t);return r.wrapS=tn,r.wrapT=tn,r.repeat.set(5,5),r.colorSpace=ge,r}generateCarpetTexture(){const t=document.createElement("canvas");t.width=512,t.height=1024;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,512,0);n.addColorStop(0,"#5a0a0f"),n.addColorStop(.12,"#851218"),n.addColorStop(.5,"#99151c"),n.addColorStop(.88,"#851218"),n.addColorStop(1,"#5a0a0f"),e.fillStyle=n,e.fillRect(0,0,512,1024),e.fillStyle="rgba(0, 0, 0, 0.08)";for(let a=0;a<1024;a+=4)e.fillRect(0,a,512,1.5);e.fillStyle="#f5c33b",e.fillRect(16,0,14,1024),e.fillRect(482,0,14,1024),e.fillStyle="#ffd700",e.fillRect(36,0,6,1024),e.fillRect(470,0,6,1024);const s=8,r=1024/s;for(let a=0;a<s;a++){const c=a*r+r/2,l=256;e.save(),e.translate(l,c),e.strokeStyle="#e6b12a",e.lineWidth=3,e.beginPath(),e.arc(0,0,36,0,Math.PI*2),e.stroke(),e.fillStyle="#ffdf79";for(let h=0;h<8;h++){const d=h/8*Math.PI*2;e.beginPath(),e.ellipse(Math.cos(d)*22,Math.sin(d)*22,12,6,d,0,Math.PI*2),e.fill()}e.fillStyle="#ffd700",e.beginPath(),e.arc(0,0,9,0,Math.PI*2),e.fill(),e.restore()}const o=new Qe(t);return o.wrapS=tn,o.wrapT=tn,o.repeat.set(1,4),o.colorSpace=ge,o}generatePlushCushionTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createRadialGradient(256,256,10,256,256,256);n.addColorStop(0,"#4e4e55"),n.addColorStop(.65,"#3a3a40"),n.addColorStop(.92,"#2b2b30"),n.addColorStop(1,"#1e1e22"),e.fillStyle=n,e.fillRect(0,0,512,512),e.strokeStyle="rgba(255, 255, 255, 0.04)",e.lineWidth=1;for(let o=0;o<512;o+=6)e.beginPath(),e.moveTo(o,0),e.lineTo(o,512),e.stroke();for(let o=0;o<512;o+=6)e.beginPath(),e.moveTo(0,o),e.lineTo(512,o),e.stroke();const s=e.createRadialGradient(256,256,2,256,256,32);s.addColorStop(0,"#151518"),s.addColorStop(.4,"#242428"),s.addColorStop(.85,"#3e3e44"),s.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=s,e.beginPath(),e.arc(256,256,32,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(215, 185, 130, 0.65)",e.lineWidth=6,e.strokeRect(16,16,480,480);const r=new Qe(t);return r.colorSpace=ge,r}generatePillarTexture(){const t=document.createElement("canvas");t.width=256,t.height=1024;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,256,0);n.addColorStop(0,"#1e0804"),n.addColorStop(.35,"#3b1209"),n.addColorStop(.7,"#48170c"),n.addColorStop(1,"#1e0804"),e.fillStyle=n,e.fillRect(0,0,256,1024),e.strokeStyle="rgba(15, 4, 2, 0.4)",e.lineWidth=1.5;for(let r=0;r<256;r+=10)e.beginPath(),e.moveTo(r+(Math.random()-.5)*4,0),e.lineTo(r+(Math.random()-.5)*4,1024),e.stroke();[60,964].forEach(r=>{e.fillStyle="#f5c33b",e.fillRect(0,r-12,256,24),e.fillStyle="#ffd700",e.fillRect(0,r-4,256,8)});const s=new Qe(t);return s.wrapT=tn,s.repeat.set(1,2),s.colorSpace=ge,s}generateWallTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#8f6838",e.fillRect(0,0,512,512);for(let s=0;s<4e3;s++){const r=Math.random()*512,o=Math.random()*512,a=(Math.random()-.5)*24;e.fillStyle=`rgba(${140+a}, ${100+a}, ${55+a}, 0.25)`,e.fillRect(r,o,3,3)}const n=new Qe(t);return n.wrapS=tn,n.wrapT=tn,n.repeat.set(4,2),n.colorSpace=ge,n}generateSignboardTexture(t,e=""){const n=document.createElement("canvas");n.width=1024,n.height=256;const s=n.getContext("2d"),r=s.createLinearGradient(0,0,0,256);r.addColorStop(0,"#380406"),r.addColorStop(.5,"#6a0f13"),r.addColorStop(1,"#2c0305"),s.fillStyle=r,s.fillRect(0,0,1024,256),s.strokeStyle="#f5c33b",s.lineWidth=14,s.strokeRect(16,16,992,224),s.strokeStyle="#8f640a",s.lineWidth=4,s.strokeRect(28,28,968,200),s.font='bold 92px "Times New Roman", "Palatino Linotype", "Noto Serif", serif',s.textAlign="center",s.textBaseline="middle",s.shadowColor="#000000",s.shadowBlur=12,s.shadowOffsetX=3,s.shadowOffsetY=3;const o=s.createLinearGradient(0,30,0,220);o.addColorStop(0,"#fff6bd"),o.addColorStop(.35,"#ffd700"),o.addColorStop(.75,"#d49b18"),o.addColorStop(1,"#9e6e08"),s.fillStyle=o,s.fillText(t,512,e?104:128),e&&(s.font='italic 32px "Times New Roman", serif',s.fillStyle="#ffd680",s.fillText(e,512,184));const a=new Qe(n);return a.colorSpace=ge,a}generateCoupletTexture(t){const e=document.createElement("canvas");e.width=256,e.height=1024;const n=e.getContext("2d"),s=n.createLinearGradient(0,0,256,0);s.addColorStop(0,"#2e0405"),s.addColorStop(.5,"#610c10"),s.addColorStop(1,"#2e0405"),n.fillStyle=s,n.fillRect(0,0,256,1024),n.strokeStyle="#f5c33b",n.lineWidth=10,n.strokeRect(14,14,228,996),n.textAlign="center",n.textBaseline="middle",n.shadowColor="#000000",n.shadowBlur=8,n.shadowOffsetX=3,n.shadowOffsetY=3;const r=t.split(""),o=r.length,a=Math.min(58,Math.floor(860/(o+.5)));n.font=`bold ${a}px "Times New Roman", "Palatino Linotype", "Noto Serif", serif`;const c=70,l=884/o,h=n.createLinearGradient(0,0,256,0);h.addColorStop(0,"#fff6bd"),h.addColorStop(.4,"#ffd700"),h.addColorStop(.85,"#c98e14"),n.fillStyle=h,r.forEach((f,m)=>{n.fillText(f,128,c+m*l+l/2)});const d=new Qe(e);return d.colorSpace=ge,d}generateChessBoardTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,512,512);n.addColorStop(0,"#c9934a"),n.addColorStop(.5,"#b8813a"),n.addColorStop(1,"#a6702c"),e.fillStyle=n,e.fillRect(0,0,512,512),e.strokeStyle="rgba(70, 40, 10, 0.15)",e.lineWidth=1;for(let l=0;l<40;l++){e.beginPath();const h=Math.random()*512;e.moveTo(0,h),e.bezierCurveTo(170,h+(Math.random()-.5)*12,340,h+(Math.random()-.5)*12,512,h),e.stroke()}e.strokeStyle="#3a1a08",e.lineWidth=8,e.strokeRect(16,16,480,480),e.strokeStyle="#e0a943",e.lineWidth=2,e.strokeRect(22,22,468,468);const s=42,r=512-s*2,o=r/14;e.strokeStyle="#2d1405",e.lineWidth=1.8;for(let l=0;l<15;l++){const h=s+l*o;e.beginPath(),e.moveTo(s,h),e.lineTo(s+r,h),e.stroke(),e.beginPath(),e.moveTo(h,s),e.lineTo(h,s+r),e.stroke()}const a=[[3,3],[11,3],[7,7],[3,11],[11,11]];e.fillStyle="#2d1405",a.forEach(([l,h])=>{const d=s+l*o,f=s+h*o;e.beginPath(),e.arc(d,f,4.5,0,Math.PI*2),e.fill()});const c=new Qe(t);return c.colorSpace=ge,c}createEnvironment(){this.scene.background=new Zt(3546900),this.scene.fog=new bo(3546900,28,75)}createArchitecture(){const t=new Dt,e=new Pn(24,28,16,16),n=new Q({map:this.textures.woodFloor,roughness:.18,metalness:.08}),s=new A(e,n);s.rotation.x=-Math.PI/2,s.position.set(0,0,3.5),s.receiveShadow=!0,t.add(s);const r=new Pn(3,26),o=new Q({map:this.textures.carpet,roughness:.65,metalness:.04}),a=new A(r,o);a.rotation.x=-Math.PI/2,a.position.set(0,.02,3.5),a.receiveShadow=!0,t.add(a);const c=new Q({map:this.textures.wall,roughness:.85}),l=new Q({color:2362887,roughness:.45,metalness:.05}),h=new A(new St(24,12,.8),c);h.position.set(0,6,-8.5);const d=new A(new St(24.2,2.8,.95),l);d.position.set(0,1.4,-8.45),t.add(h,d),[-11.5,11.5].forEach(I=>{const S=new A(new St(.8,12,28),c);S.position.set(I,6,3.5);const y=new A(new St(.95,2.8,28),l);y.position.set(I,1.4,3.5),t.add(S,y),[-2,5,12].forEach(P=>{const z=new A(new ue(1.3,.12,10,24),new Q({color:4854283,roughness:.45}));z.rotation.y=I>0?-Math.PI/2:Math.PI/2,z.position.set(I>0?I-.35:I+.35,6.2,P),t.add(z)})});const f=new A(new St(8.5,12,.8),l);f.position.set(-7.25,6,17.5);const m=new A(new St(8.5,12,.8),l);m.position.set(7.25,6,17.5);const g=new A(new St(7,4,.9),l);g.position.set(0,10,17.5),t.add(f,m,g);const _=new J(.52,.58,11,24),p=new Q({map:this.textures.pillar,roughness:.28,metalness:.15}),u=new J(.82,.95,.45,16),E=new Q({color:2039586,roughness:.85});[[-3.8,-2.5],[3.8,-2.5],[-7.5,4],[7.5,4],[-7.5,11],[7.5,11]].forEach(([I,S])=>{const y=new A(_,p);y.position.set(I,5.5,S),y.castShadow=!0;const P=new A(u,E);P.position.set(I,.225,S),t.add(y,P)});const x=new A(new St(.68,5.4,.04),new Q({map:this.generateCoupletTexture("TẬN LỰC CÀY CUỐC PHƯỚC ĐỨC TĂNG HUY")}));x.position.set(-3.8,4.8,-1.9);const R=new A(new St(.68,5.4,.04),new Q({map:this.generateCoupletTexture("CHÁNH NIỆM TU TÂM DEADLINE KHÔNG QUẠU")}));R.position.set(3.8,4.8,-1.9),t.add(x,R);const T=new A(new St(6.2,1.45,.15),new Q({map:this.generateSignboardTexture("CHÙA VỪA LÀM VỪA TU","LÀM VIỆC CHÁNH NIỆM • VỪA CÀY DEADLINE VỪA TU TÂM")}));T.position.set(0,8.8,-3.5),t.add(T);const C=new Q({color:2821382,roughness:.5});[-2.5,4,11].forEach(I=>{const S=new A(new St(23,.55,.55),C);S.position.set(0,10.8,I),t.add(S)}),this.scene.add(t)}createGrandBuddhaAltar(){const t=new Dt;t.position.set(0,0,-6.2);const e=new Q({color:16103978,metalness:.9,roughness:.18,emissive:5913864,emissiveIntensity:.35}),n=new Q({color:13210654,metalness:.85,roughness:.28}),s=new Q({color:1713200,roughness:.7}),r=new Q({color:16638927,roughness:.4}),o=new Q({color:2230789,roughness:.4}),a=new Q({color:10165276,roughness:.6}),c=new A(new J(2.8,3.2,.4,8),o);c.position.y=.2;const l=new A(new J(2.5,2.8,.5,24),e);l.position.y=.65;const h=new A(new J(2.1,2.4,.45,24),n);h.position.y=1.1;const d=new A(new J(1.8,1.6,.4,24),e);d.position.y=1.5,t.add(c,l,h,d);for(let V=0;V<20;V++){const ct=V/20*Math.PI*2,ot=new A(new Ut(.35,12,10),e);ot.scale.set(1.4,.55,.85),ot.position.set(Math.cos(ct)*1.95,1.55,Math.sin(ct)*1.95),ot.rotation.y=-ct,ot.rotation.z=Math.PI/6,t.add(ot)}const f=new Dt;f.position.set(0,1.65,.1);const m=new A(new J(1.35,1.55,.5,24),n);m.position.y=.25,[-1.25,1.25].forEach(V=>{const ct=new A(new Ut(.38,12,12),n);ct.scale.set(1.1,.75,1.3),ct.position.set(V,.25,.15),f.add(ct)}),[-.45,.45].forEach(V=>{const ct=new A(new St(.25,.12,.4),r);ct.position.set(V,.46,.22),ct.rotation.x=-.3,f.add(ct)});const g=new A(new J(.68,.95,1.65,24),e);g.position.y=1.25;const _=new A(new J(.72,.98,1.66,24,1,!1,Math.PI*.4,Math.PI*1.2),a);_.position.y=1.25;const p=new A(new St(1.9,.46,.72),e);p.position.y=1.95;const u=new A(new J(.18,.22,1.1,14),a);u.position.set(-.95,1.5,.05),u.rotation.z=Math.PI/5.5;const E=new A(new J(.16,.18,.95,14),r);E.position.set(-.45,.75,.45),E.rotation.set(-Math.PI/2.2,0,-Math.PI/3);const w=new A(new Ut(.2,14,14,0,Math.PI*2,0,Math.PI*.65),new Q({color:2233095,metalness:.9,roughness:.2}));w.position.set(-.05,.78,.52);const x=new A(new J(.18,.22,1.1,14),e);x.position.set(.95,1.5,.05),x.rotation.z=-Math.PI/5.5;const R=new A(new J(.16,.18,.95,14),r);R.position.set(1.05,.68,.35),R.rotation.set(Math.PI/4,0,-.2);const T=new A(new St(.18,.28,.08),r);T.position.set(1.15,.32,.52),T.rotation.x=.35;const C=new A(new Ut(.56,24,24),r);C.scale.set(.92,1.15,.95),C.position.set(0,2.75,0);const I=new A(new Ut(.57,24,18,0,Math.PI*2,0,Math.PI*.58),s);I.position.set(0,2.85,0);const S=new A(new Ut(.24,16,16),s);S.position.set(0,3.42,.02);const y=new A(new Ut(.045,8,8),new me({color:16726832}));y.position.set(0,2.85,.53),[-.56,.56].forEach(V=>{const ct=new A(new J(.04,.045,.52,10),r);ct.position.set(V,2.65,0),f.add(ct)});const P=new A(new ue(.85,.06,12,32),e);P.position.set(0,2.9,-.25),f.add(m,g,_,p,u,E,w,x,R,T,C,I,S,y,P),t.add(f);const z=new Dt;z.position.set(-2.6,0,.35),z.rotation.y=Math.PI/6;const k=new A(new J(.55,.65,.45,18),o);k.position.y=.225;const q=new A(new J(.58,.5,.2,18),e);q.position.y=.55;const $=new A(new J(.32,.48,1.95,16),new Q({color:5203061,roughness:.6}));$.position.y=1.55;const X=new A(new St(.24,1.8,.05),e);X.position.set(-.08,1.55,.22),X.rotation.z=-.15;const j=new A(new Ut(.12,10,10),r);j.scale.set(.6,1.5,.8),j.position.set(0,1.85,.35);const U=new A(new Ut(.25,16,16),r);U.position.set(0,2.7,0);const nt=new A(new ue(.38,.03,8,24),e);nt.position.set(0,2.75,-.15);const at=new A(new St(1.2,.24,.03),new Q({map:this.generateSignboardTexture("Tôn Giả A Nan")}));at.position.set(0,.25,.65),z.add(k,q,$,X,j,U,nt,at),t.add(z);const ht=new Dt;ht.position.set(2.6,0,.35),ht.rotation.y=-Math.PI/6;const At=new A(new J(.55,.65,.45,18),o);At.position.y=.225;const qt=new A(new J(.58,.5,.2,18),e);qt.position.y=.55;const K=new A(new J(.32,.48,1.95,16),new Q({color:8140823,roughness:.6}));K.position.y=1.55;const it=new A(new St(.24,1.8,.05),e);it.position.set(-.08,1.55,.22),it.rotation.z=-.15;const pt=new A(new Ut(.12,10,10),r);pt.position.set(0,1.8,.35);const st=new A(new Ut(.12,10,10,0,Math.PI*2,0,Math.PI*.65),o);st.position.set(0,1.88,.4);const Mt=new A(new Ut(.25,16,16),r);Mt.position.set(0,2.7,0);const Ct=new A(new J(.12,.05,.22,10),new me({color:15658734}));Ct.position.set(0,2.45,.16);const Ft=new A(new ue(.38,.03,8,24),e);Ft.position.set(0,2.75,-.15);const jt=new A(new St(1.2,.24,.03),new Q({map:this.generateSignboardTexture("Tôn Giả Ca Diếp")}));jt.position.set(0,.25,.65),ht.add(At,qt,K,it,pt,st,Mt,Ct,Ft,jt),t.add(ht);const Nt=5.6,Qt=7.6,L=new A(new St(Nt+.8,Qt+.8,.2),o);L.position.set(0,5,-.35);const pe=new A(new St(Nt+.28,Qt+.28,.12),e);pe.position.set(0,5,-.3);const zt=new A(new St(Nt+1.8,.55,1.2),new Q({color:9053212,roughness:.55}));zt.position.set(0,9.1,0);const Ot=new A(new St(Nt+2.2,.18,1.4),e);Ot.position.set(0,9.4,0),t.add(L,pe,zt,Ot);const yt=document.createElement("canvas");yt.width=512,yt.height=512;const Rt=yt.getContext("2d");Rt.translate(256,256);const xt=Rt.createRadialGradient(0,0,50,0,0,250);xt.addColorStop(0,"rgba(255, 248, 200, 0.95)"),xt.addColorStop(.35,"rgba(255, 215, 90, 0.75)"),xt.addColorStop(.75,"rgba(255, 140, 0, 0.35)"),xt.addColorStop(1,"rgba(180, 40, 0, 0)"),Rt.fillStyle=xt,Rt.beginPath(),Rt.arc(0,0,250,0,Math.PI*2),Rt.fill();const b=["#ff3b30","#ff9500","#ffcc00","#34c759","#00c7be","#007aff","#af52de","#ff2d55"];for(let V=0;V<48;V++){const ct=V/48*Math.PI*2;Rt.save(),Rt.rotate(ct),Rt.fillStyle=b[V%b.length],Rt.globalAlpha=.35,Rt.beginPath(),Rt.moveTo(-12,60),Rt.lineTo(12,60),Rt.lineTo(24,250),Rt.lineTo(-24,250),Rt.closePath(),Rt.fill(),Rt.restore()}const v=new Qe(yt),B=new me({map:v,transparent:!0,side:$e,blending:Ps,depthWrite:!1}),W=new A(new Pn(11,11),B);W.position.set(0,5,-.28),t.add(W),this.haloMesh=W;const Z=new A(new St(2.4,.45,.05),new Q({map:this.generateSignboardTexture("Đức Bổn Sư Thích Ca Mâu Ni Phật")}));Z.position.set(0,.7,1.85),t.add(Z),this.buddhaAuraLight=new Hn(16769154,4.5,24),this.buddhaAuraLight.position.set(0,5.5,1.2),t.add(this.buddhaAuraLight),this.scene.add(t)}createGrandOfferingAltar(){const t=new Dt;t.position.set(0,0,-3.8);const e=new Q({color:2755846,roughness:.35}),n=new Q({color:16103978,metalness:.88,roughness:.22}),s=new Q({color:11897660,metalness:.85,roughness:.24,emissive:2233604,emissiveIntensity:.15}),r=new A(new St(4.2,.95,1.2),e);r.position.y=.475,r.castShadow=!0,r.receiveShadow=!0;const o=new A(new St(4.3,.16,1.25),n);o.position.y=.85;const a=new A(new St(4,.03,1.1),new Q({color:9704472,roughness:.6}));a.position.y=.965,t.add(r,o,a);const c=new Dt;c.position.set(0,.98,.12);const l=new A(new J(.42,.34,.46,20),s);l.position.y=.23;const h=new A(new ue(.44,.045,10,24),n);h.rotation.x=Math.PI/2,h.position.y=.46;for(let g=0;g<3;g++){const _=new A(new J(.045,.065,.22,8),s),p=g/3*Math.PI*2;_.position.set(Math.cos(p)*.3,.09,Math.sin(p)*.3),c.add(_)}const d=new A(new J(.4,.4,.05,18),new Q({color:13938811,roughness:.9}));d.position.y=.43;for(let g=-1;g<=1;g++){const _=new A(new J(.008,.008,.65),new me({color:11149841}));_.position.set(g*.09,.72,0);const p=new A(new Ut(.02,8,8),new me({color:16726784}));p.position.set(g*.09,1.02,0),c.add(_,p)}c.add(l,h,d),t.add(c),[-1.15,1.15].forEach((g,_)=>{const p=new Dt;p.position.set(g,.98,-.1),p.rotation.y=_===0?Math.PI/6:-Math.PI/6;const u=new A(new Ut(.13,10,8),s);u.scale.set(1.3,.52,1),u.position.y=.06;const E=new A(new J(.018,.018,.52,8),s);E.position.y=.34;const w=new A(new Ut(.11,10,10),s);w.scale.set(.9,1.4,.9),w.position.set(0,.66,0);const x=new A(new J(.016,.022,.4,8),s);x.position.set(0,.92,.06);const R=new A(new Ut(.04,8,8),s);R.position.set(0,1.14,.09),p.add(u,E,w,x,R),t.add(p)}),[-.65,.65].forEach(g=>{const _=new A(new J(.07,.11,.3,10),s);_.position.set(g,1.12,.22);const p=new A(new J(.03,.03,.26,10),new Q({color:13375512}));p.position.set(g,1.36,.22);const u=new A(new Ut(.022,6,6),new me({color:16755200}));u.scale.set(.6,1.8,.6),u.position.set(g,1.52,.22);const E=new Hn(16750592,1.6,6);E.position.set(g,1.55,.22),this.candleLights.push(E),t.add(_,p,u,E)}),[-1.7,1.7].forEach(g=>{const _=new A(new J(.1,.16,.42,12),new Q({color:19776}));_.position.set(g,1.18,0);for(let p=0;p<3;p++){const u=new A(new mn(.055,.15,8),new Q({color:15753874}));u.position.set(g+(p-1)*.05,1.45,p%2*.03),t.add(u)}t.add(_)});const f=new A(new J(.3,.22,.07,16),n);f.position.set(0,1.01,.4);const m=new A(new Ut(.07,8,8),new Q({color:16754470}));m.position.set(0,1.14,.4),t.add(f,m),this.scene.add(t)}createSideAltars(){const t=new Q({color:16103978,metalness:.9,roughness:.18,emissive:4862470,emissiveIntensity:.25}),e=new Q({color:2230789,roughness:.4}),n=new Q({color:16638927,roughness:.42}),s=new Q({color:10165276,roughness:.55}),r=new Dt;r.position.set(-7.6,0,-4),r.rotation.y=Math.PI/4.2;const o=new A(new J(1.2,1.4,.4,16),e);o.position.y=.2;const a=new A(new J(1,1.15,.35,16),t);a.position.y=.55;const c=new A(new J(.85,.7,.3,16),t);c.position.y=.85,r.add(o,a,c);const l=new Q({color:15753874,roughness:.45,emissive:4852514,emissiveIntensity:.2});for(let B=0;B<16;B++){const W=B/16*Math.PI*2,Z=new A(new Ut(.22,10,8),l);Z.scale.set(1.2,.45,.75),Z.position.set(Math.cos(W)*.95,.92,Math.sin(W)*.95),Z.rotation.y=-W,Z.rotation.z=Math.PI/5.5,r.add(Z)}const h=new Q({color:16251644,roughness:.35,metalness:.05}),d=new A(new J(.42,.68,1.6,20),h);d.position.y=1.75;const f=new A(new J(.34,.44,1.1,18),h);f.position.y=2.95;const m=new A(new ue(.28,.025,8,20),t);m.position.set(0,3.05,.24),m.rotation.x=Math.PI/3;const g=new A(new J(.09,.12,.75,10),h);g.position.set(-.42,3.05,.08),g.rotation.z=Math.PI/6;const _=new A(new J(.08,.09,.65,10),n);_.position.set(-.24,2.65,.3),_.rotation.set(-Math.PI/3,0,-Math.PI/6);const p=new Q({color:14742257,roughness:.15,metalness:.2}),u=new A(new Ut(.12,12,12),p);u.scale.set(1,1.45,1),u.position.set(-.16,2.7,.48);const E=new A(new J(.03,.05,.22,10),p);E.position.set(-.16,2.88,.48),E.rotation.z=-.2;const w=new A(new J(.09,.12,.75,10),h);w.position.set(.42,3.05,.08),w.rotation.z=-Math.PI/5.5;const x=new A(new J(.08,.09,.65,10),n);x.position.set(.35,3.25,.32),x.rotation.set(Math.PI/4,0,Math.PI/8);const R=new Q({color:5025616,roughness:.5}),T=new A(new J(.012,.018,.45,8),R);T.position.set(.36,3.65,.38),T.rotation.z=-.35;const C=new A(new Ut(.06,6,6),R);C.scale.set(.4,1.8,.4),C.position.set(.46,3.82,.38);const I=new A(new Ut(.28,20,20),n);I.position.set(0,3.7,0);const S=new A(new J(.22,.3,.38,16),t);S.position.set(0,4.02,0);const y=new A(new Ut(.07,8,8),t);y.position.set(0,4.15,.22);const P=new A(new J(.29,.42,1.2,16,1,!0,Math.PI*.3,Math.PI*1.4),h);P.position.set(0,3.55,-.05);const z=new A(new ue(.72,.05,10,28),new Q({color:8445674,emissive:48340,emissiveIntensity:.85}));z.position.set(0,3.8,-.22);const k=new Hn(11725810,2.2,8);k.position.set(0,3.9,.6);const q=new A(new St(2.2,.35,.04),new Q({map:this.generateSignboardTexture("Nam Mô Quán Thế Âm Bồ Tát")}));q.position.set(0,.4,1.25);const $=new A(new St(1.6,.7,.65),e);$.position.set(0,.35,1.85);const X=new A(new J(.12,.1,.15,12),t);X.position.set(0,.78,1.85),r.add(d,f,m,g,_,u,E,w,x,T,C,I,S,y,P,z,k,q,$,X),this.scene.add(r);const j=new Dt;j.position.set(7.6,0,-4),j.rotation.y=-Math.PI/4.2;const U=new A(new J(1.2,1.4,.4,16),e);U.position.y=.2;const nt=new A(new J(1,1.15,.35,16),t);nt.position.y=.55;const at=new A(new J(.85,.7,.3,16),t);at.position.y=.85,j.add(U,nt,at);const ht=new Q({color:13840175,roughness:.45,emissive:4849664,emissiveIntensity:.25});for(let B=0;B<16;B++){const W=B/16*Math.PI*2,Z=new A(new Ut(.22,10,8),ht);Z.scale.set(1.2,.45,.75),Z.position.set(Math.cos(W)*.95,.92,Math.sin(W)*.95),Z.rotation.y=-W,Z.rotation.z=Math.PI/5.5,j.add(Z)}const At=new Q({color:15094016,roughness:.5}),qt=new Q({color:16498733,roughness:.35,metalness:.3}),K=new A(new J(.44,.7,1.6,20),At);K.position.y=1.75;const it=new A(new J(.36,.46,1.1,18),At);it.position.y=2.95;const pt=new A(new J(.38,.48,1.12,18,1,!1,0,Math.PI*1.1),qt);pt.position.y=2.95;const st=new A(new J(.09,.12,.75,10),At);st.position.set(-.42,3.05,.08),st.rotation.z=Math.PI/6;const Mt=new A(new J(.08,.09,.65,10),n);Mt.position.set(-.25,2.75,.32),Mt.rotation.set(-Math.PI/3,0,-Math.PI/6);const Ct=new A(new Ut(.13,16,16),new Q({color:16774557,emissive:16766464,emissiveIntensity:1.2,roughness:.15}));Ct.position.set(-.16,2.85,.5);const Ft=new Hn(16771584,2.6,7);Ft.position.set(-.16,2.85,.5);const jt=new A(new J(.09,.12,.75,10),At);jt.position.set(.42,3.05,.08),jt.rotation.z=-Math.PI/6;const Nt=new A(new J(.08,.09,.65,10),n);Nt.position.set(.4,2.85,.3),Nt.rotation.set(.1,0,0);const Qt=new Dt;Qt.position.set(.5,0,.32);const L=new A(new J(.022,.022,3.4,10),t);L.position.y=2.4;const pe=new A(new ue(.18,.025,8,20),t);pe.position.y=4.15;const zt=new A(new mn(.06,.22,8),t);zt.position.y=4.42;for(let B=0;B<6;B++){const W=new A(new ue(.05,.012,6,12),t),Z=B%2===0?-1:1,V=Math.floor(B/2);W.position.set(Z*.16,4.05+V*.09,0),W.rotation.y=Math.PI/2,Qt.add(W)}Qt.add(L,pe,zt);const Ot=new A(new Ut(.28,20,20),n);Ot.position.set(0,3.7,0);const yt=new A(new J(.26,.3,.28,16),t);yt.position.set(0,3.96,0);for(let B=-2;B<=2;B++){const W=new A(new mn(.065,.2,6),t);W.position.set(B*.09,4.18,.2-Math.abs(B)*.04),j.add(W)}[-.3,.3].forEach(B=>{const W=new A(new St(.08,.95,.02),s);W.position.set(B,3.45,-.05),j.add(W)});const Rt=new A(new ue(.72,.05,10,28),new Q({color:16763432,emissive:16748288,emissiveIntensity:.85}));Rt.position.set(0,3.8,-.22);const xt=new A(new St(2.2,.35,.04),new Q({map:this.generateSignboardTexture("Nam Mô Địa Tạng Vương Bồ Tát")}));xt.position.set(0,.4,1.25);const b=new A(new St(1.6,.7,.65),e);b.position.set(0,.35,1.85);const v=new A(new J(.12,.1,.15,12),t);v.position.set(0,.78,1.85),j.add(K,it,pt,st,Mt,Ct,Ft,jt,Nt,Qt,Ot,yt,Rt,xt,b,v),this.scene.add(j)}createEighteenArhats(){const t=new Dt,e=new Q({color:10383922,metalness:.82,roughness:.28,emissive:3021059,emissiveIntensity:.15}),n=new Q({color:16103978,metalness:.88,roughness:.2}),s=new Q({color:1710620,roughness:.85}),r=new Q({color:15519927,roughness:.45}),o=[{id:"hanglong",name:"Hàng Long La Hán",desc:"Thu phục rồng vàng"},{id:"truongmi",name:"Trường Mi La Hán",desc:"Lông mày dài từ bi"},{id:"thacthap",name:"Thác Tháp La Hán",desc:"Nâng bảo tháp 7 tầng"},{id:"bodai",name:"Bố Đại La Hán",desc:"Khoác túi vải hoan hỉ"},{id:"tinhtoa",name:"Tĩnh Tọa La Hán",desc:"Nhập định kiết già"},{id:"kytuong",name:"Kỵ Tượng La Hán",desc:"Thu phục bạch tượng"},{id:"khaimtam",name:"Khai Tâm La Hán",desc:"Phật hiện trong tâm"},{id:"batieu",name:"Ba Tiêu La Hán",desc:"Cầm quạt ba tiêu"},{id:"toaloc",name:"Tọa Lộc La Hán",desc:"Tĩnh tọa bên nai ngọc"}],a=[{id:"phucho",name:"Phục Hổ La Hán",desc:"Hàng phục mãnh hổ"},{id:"cubat",name:"Cử Bát La Hán",desc:"Nâng bát hóa duyên"},{id:"hoanhi",name:"Hoan Hỉ La Hán",desc:"Nụ cười giác ngộ"},{id:"thamthu",name:"Thám Thủ La Hán",desc:"Vươn tay tự tại"},{id:"tramtu",name:"Trầm Tư La Hán",desc:"Chiêm nghiệm diệu pháp"},{id:"hikhanh",name:"Hỉ Khánh La Hán",desc:"Gõ khánh ngọc trừ tà"},{id:"quagiang",name:"Quá Giang La Hán",desc:"Vượt biển sanh tử"},{id:"tieusu",name:"Tiếu Sư La Hán",desc:"Đùa vui cùng sư tử"},{id:"khanmon",name:"Khán Môn La Hán",desc:"Giữ gậy trượng thiền gia"}],c=[-1.5,.3,2.1,3.9,5.7,7.5,9.3,11.1,12.9],l=(h,d,f,m)=>{const g=new Dt;g.position.set(d,0,f),g.rotation.y=m?Math.PI/2:-Math.PI/2;const _=new A(new J(.7,.78,.35,8),s);_.position.y=.175;const p=new A(new J(.65,.58,.18,16),n);p.position.y=.44,g.add(_,p);const u=new A(new J(.28,.44,.95,14),e);u.position.y=.98;const E=new A(new J(.48,.55,.32,14),e);E.position.y=.65;const w=new A(new Ut(.18,14,14),r);w.position.set(0,1.58,.02);const x=new A(new ue(.28,.025,8,20),n);switch(x.position.set(0,1.62,-.12),g.add(u,E,w,x),h.id){case"hanglong":{const T=new A(new ue(.38,.045,8,24),n);T.position.set(0,1.05,.05),T.rotation.x=Math.PI/4;const C=new A(new mn(.08,.18,8),n);C.position.set(.28,1.35,.22),C.rotation.z=-Math.PI/3,g.add(T,C);break}case"phucho":{const T=new A(new St(.32,.18,.45),n);T.position.set(.18,.62,.32);const C=new A(new Ut(.11,8,8),n);C.position.set(.18,.72,.52),g.add(T,C);break}case"truongmi":{[-.08,.08].forEach(T=>{const C=new A(new J(.012,.005,.52,6),new me({color:16777215}));C.position.set(T,1.35,.18),C.rotation.x=.25,g.add(C)});break}case"thacthap":{const T=new A(new J(.02,.07,.35,8),n);T.position.set(.22,1.25,.25);const C=new Hn(16771899,1.2,3);C.position.set(.22,1.35,.25),g.add(T,C);break}case"cubat":{const T=new A(new Ut(.11,10,10,0,Math.PI*2,0,Math.PI*.65),n);T.position.set(0,1.15,.28),g.add(T);break}case"bodai":{const T=new A(new Ut(.26,12,12),new Q({color:9268835}));T.scale.set(1.1,1.3,.9),T.position.set(-.35,.72,.15),g.add(T);break}case"batieu":{const T=new A(new Ao(.18,12),n);T.position.set(.24,1.15,.24),T.rotation.y=Math.PI/4,g.add(T);break}case"khaimtam":{const T=new Hn(16750592,1.5,2.5);T.position.set(0,1.12,.22),g.add(T);break}default:{const T=new A(new ue(.14,.02,6,16),n);T.position.set(0,1.05,.24),g.add(T);break}}const R=new A(new St(1,.2,.03),new Q({map:this.generateSignboardTexture(h.name)}));return R.position.set(0,.2,.52),g.add(R),g};o.forEach((h,d)=>{const f=l(h,-9.6,c[d],!0);t.add(f)}),a.forEach((h,d)=>{const f=l(h,9.6,c[d],!1);t.add(f)}),this.scene.add(t)}createAuthenticCushionsGrid(){const t=new Dt;this.cushionPositions=[];const e=new J(.48,.52,.14,20),n=new Q({map:this.textures.cushion,roughness:.75,metalness:.05}),s=[-3.6,-2,2,3.6],r=[.5,3.2,5.9,8.6,11.3];s.forEach(o=>{r.forEach(a=>{const c=new A(e,n);c.position.set(o,.07,a),c.receiveShadow=!0,c.castShadow=!0;const l=new A(new J(.5,.54,.03,20),new Q({color:2039586,roughness:.85}));l.position.set(o,.015,a),t.add(c,l),this.cushionPositions.push({x:o,z:a})})}),this.scene.add(t)}findNearestCushion(t,e){if(!this.cushionPositions.length)return{x:0,z:2};let n=this.cushionPositions[0],s=1/0;for(const r of this.cushionPositions){const o=Math.hypot(r.x-t,r.z-e);o<s&&(s=o,n=r)}return{...n}}createInteractiveStations(){const t=new Q({color:4003599,roughness:.65}),e=new Dt;e.position.set(-5.6,0,-1.8);const n=new A(new J(.18,.22,5,16),t);n.position.set(-1.1,2.5,0);const s=n.clone();s.position.set(1.1,2.5,0);const r=new A(new St(2.8,.35,.35),t);r.position.set(0,4.8,0);const o=new A(new St(2.4,.18,.18),t);o.position.set(0,4.35,0);const a=new Q({color:10385982,metalness:.85,roughness:.25}),c=new A(new ue(.16,.04,12,24),a);c.position.set(0,4.2,0);const l=new Dt;l.position.set(0,4.05,0);const h=new Q({color:12558414,metalness:.88,roughness:.22,emissive:2234117,emissiveIntensity:.15}),d=new A(new Ut(.55,24,16,0,Math.PI*2,0,Math.PI*.5),h);d.position.y=-.15;const f=new A(new J(.55,.58,.8,24),h);f.position.y=-.55;const m=new A(new J(.58,.84,.85,24),h);m.position.y=-1.375;const g=new A(new ue(.84,.06,12,32),h);g.rotation.x=Math.PI/2,g.position.y=-1.8;const _=new A(new ue(.56,.025,8,32),a);_.rotation.x=Math.PI/2,_.position.y=-.55;const p=new A(new ue(.68,.03,8,32),a);p.rotation.x=Math.PI/2,p.position.y=-1.35,l.add(d,f,m,g,_,p),this.bellMesh=l;const u=new Dt;u.position.set(0,-.6,0);const E=new A(new Ut(.14,14,14),a);E.position.y=-.6;const w=new Q({color:9069116,roughness:.9}),x=new A(new J(.022,.022,1.8,10),w);x.position.y=-1.5;const R=new Q({color:12000284,roughness:.6}),T=new A(new J(.045,.045,.45,12),R);T.position.y=-2.4;const C=new A(new ue(.05,.015,8,16),a);C.rotation.x=Math.PI/2,C.position.y=-2.175;const I=C.clone();I.position.y=-2.625;const S=new A(new J(.01,.045,.3,8),new me({color:12986408}));S.position.y=-2.8,u.add(E,x,T,C,I,S),l.add(u),this.bellRope=u;const y=new A(new St(1.5,.3,.04),new Q({map:this.generateSignboardTexture("Đại Hồng Chung")}));y.position.set(0,5.25,0),e.add(n,s,r,o,c,l,y),this.scene.add(e);const P=new Dt;P.position.set(5.6,0,-1.8);const z=new Q({color:4001287,roughness:.45}),k=new A(new J(.46,.52,.55,24),z);k.position.y=.275;const q=new A(new J(.38,.42,.14,24),new Q({color:10361370,roughness:.7}));q.position.y=.62;const $=new A(new Ut(.25,24,24),new Q({color:8140823,roughness:.32,metalness:.15}));$.scale.set(1.18,.82,1.05),$.position.set(0,.88,0),this.woodfishMesh=$;const X=new A(new St(1,.22,.03),new Q({map:this.generateSignboardTexture("Mõ Gỗ Bát Nhã")}));X.position.set(0,1.45,-.1),P.add(k,q,$,X),this.scene.add(P);const j=new Dt;j.position.set(2.8,0,-1.8);const U=new A(new St(1.2,.9,.8),t);U.position.y=.45;const nt=new A(new J(.11,.1,.42,12),new Q({color:12558360,roughness:.4}));nt.position.set(0,1.11,0);const at=new A(new St(1.3,.26,.04),new Q({map:this.generateSignboardTexture("Xin Xăm Quẻ")}));at.position.set(0,1.45,0),j.add(U,nt,at),this.scene.add(j);const ht=new Dt;ht.position.set(-2.8,0,-1.8);const At=new A(new St(1.2,.9,.8),t);At.position.y=.45;const qt=new A(new St(.5,.08,.35),new Q({color:2231046,roughness:.4}));qt.position.set(0,.94,.05);const K=new A(new J(.09,.07,.3,12),new Q({color:11897660,metalness:.8}));K.position.set(-.2,1.05,.05);for(let st=-2;st<=2;st++){const Mt=new A(new J(.005,.005,.38),new me({color:11149841}));Mt.position.set(-.2+st*.015,1.25,.05+st%2*.01),ht.add(Mt)}const it=new A(new J(.006,.006,.32),new me({color:13379860}));it.rotation.z=Math.PI/2,it.position.set(.12,.99,.05);const pt=new A(new St(1.3,.26,.04),new Q({map:this.generateSignboardTexture("Bàn Thỉnh Hương")}));pt.position.set(0,1.45,0),ht.add(At,qt,K,it,pt),this.scene.add(ht)}createLotusPond(){const t=new Dt;t.position.set(-6.8,0,10.5);const e=new Q({color:3555389,roughness:.88,metalness:.1}),n=new A(new J(2,2.2,.42,28,1,!0),e);n.position.y=.21,n.receiveShadow=!0;const s=new A(new ue(2,.12,12,32),e);s.rotation.x=Math.PI/2,s.position.y=.42;const r=new Q({color:1713699,roughness:.95}),o=new A(new J(1.95,1.95,.05,28),r);o.position.y=.025;const a=new Q({color:941398,roughness:.06,metalness:.15,transparent:!0,opacity:.82,emissive:207655,emissiveIntensity:.25}),c=new A(new J(1.92,1.92,.04,32),a);c.position.y=.32,this.waterMesh=c;const l=new Q({color:3046706,roughness:.65});[{x:-.85,z:-.45,r:.38,rot:.2},{x:-.4,z:.8,r:.32,rot:1.1},{x:.75,z:.45,r:.42,rot:2.3},{x:.6,z:-.7,r:.35,rot:3.5},{x:-.2,z:-.9,r:.28,rot:.8},{x:.95,z:-.15,r:.26,rot:1.7}].forEach(x=>{const R=new A(new J(x.r,x.r,.015,16),l);R.position.set(x.x,.34,x.z),R.rotation.y=x.rot,t.add(R)});const d=new Q({color:16027569,emissive:15277667,emissiveIntensity:.3,roughness:.4}),f=new me({color:16771899});[{x:-.82,z:-.42},{x:.72,z:.42}].forEach(x=>{const R=new Dt;R.position.set(x.x,.38,x.z);for(let C=0;C<8;C++){const I=C/8*Math.PI*2,S=new A(new mn(.045,.12,5),d);S.position.set(Math.cos(I)*.05,.02,Math.sin(I)*.05),S.rotation.set(.4*Math.sin(I),I,.4*Math.cos(I)),R.add(S)}const T=new A(new J(.03,.03,.04,8),f);R.add(T),t.add(R)});const m=new A(new J(.12,.16,.9,8),e);m.position.set(-1.8,.45,-1.2);const g=new A(new St(.35,.3,.35),new Q({color:16766287,emissive:16750592,emissiveIntensity:.6}));g.position.set(-1.8,.95,-1.2);const _=new A(new mn(.42,.22,4),e);_.position.set(-1.8,1.2,-1.2),_.rotation.y=Math.PI/4,t.add(m,g,_);const p=new Q({color:5597999,roughness:.6}),u=new A(new J(.05,.05,.75,8),p);u.position.set(-1.5,.375,1);const E=new A(new J(.035,.035,.55,8),p);E.rotation.z=-Math.PI/3,E.position.set(-1.32,.62,1),t.add(u,E);const w=new A(new St(1.4,.26,.04),new Q({map:this.generateSignboardTexture("Hồ Sen Phóng Sinh","Tích Đức Phóng Sinh • Tâm An Phúc Lạc")}));w.position.set(0,1.25,-2.1),t.add(n,s,o,c,w),this.scene.add(t),this.pondGroup=t,this.createInitialPondFish()}createInitialPondFish(){["koi","goldfish","carp","turtle"].forEach((e,n)=>{this.spawnPondFish(e,n*(Math.PI/2),.65+n*.25)})}spawnPondFish(t,e=0,n=.9){const s=new Dt,r=t==="turtle";let o;if(t==="koi"?o=new Q({color:16739584,roughness:.3,metalness:.2}):t==="goldfish"?o=new Q({color:16757504,roughness:.25,metalness:.3}):t==="carp"?o=new Q({color:13959168,roughness:.3,metalness:.2}):o=new Q({color:3046706,roughness:.7,metalness:.1}),r){const c=new A(new Ut(.11,10,8),o);c.scale.set(1,.55,1.2);const l=new A(new Ut(.04,8,8),o);l.position.set(0,.01,.14);const h=new Q({color:3706428});[-.09,.09].forEach(d=>{[-.08,.08].forEach(f=>{const m=new A(new St(.045,.02,.07),h);m.position.set(d,-.02,f),c.add(m)})}),s.add(c,l)}else{const c=new A(new Ut(.07,12,8),o);if(c.scale.set(.65,.85,2.2),t==="koi"){const m=new A(new Ut(.04,8,8),new me({color:16777215}));m.position.set(0,.05,.02),m.scale.set(.8,.3,1.4),c.add(m)}const l=new Dt;l.position.set(0,0,-.14);const h=new mn(.065,.16,6),d=new A(h,o);d.rotation.x=-Math.PI/2,d.scale.set(.2,1,.9),l.add(d),c.add(l);const f=new me({color:16769154,transparent:!0,opacity:.75});[-.05,.05].forEach((m,g)=>{const _=new A(new Pn(.06,.09),f);_.position.set(m,-.01,.04),_.rotation.set(Math.PI/4,0,g===0?.6:-.6),c.add(_)}),s.add(c),s.tailPivot=l}s.position.set(-6.8+Math.cos(e)*n,.24,10.5+Math.sin(e)*n),this.scene.add(s);const a={group:s,tailPivot:s.tailPivot||null,type:t,angle:e,radius:n,speed:.45+Math.random()*.35,yBase:.22+Math.random()*.05,seed:Math.random()*10};return this.pondFish.push(a),a}createChessPavilion(){const t=new Dt;t.position.set(6.8,0,10.5);const e=new Q({color:2363656,roughness:.45}),n=new Q({color:13938487,roughness:.25,metalness:.85}),s=new A(new J(.24,.38,.62,16),e);s.position.y=.31;const r=new A(new J(.85,.85,.08,24),e);r.position.y=.66;const o=new A(new ue(.85,.016,8,32),n);o.rotation.x=Math.PI/2,o.position.y=.66;const a=new St(.7,.032,.7),c=new Q({map:this.textures.chessBoard,roughness:.32,metalness:.08}),l=new A(a,c);l.position.set(-.08,.716,0);const h=new Q({color:1118481,roughness:.2,metalness:.3}),d=new Q({color:16119285,roughness:.15,metalness:.2});[{x:-.08,z:0,c:"b"},{x:-.04,z:.04,c:"w"},{x:-.12,z:-.04,c:"b"},{x:-.08,z:.08,c:"w"},{x:-.04,z:-.08,c:"b"}].forEach(T=>{const C=new A(new J(.018,.018,.012,12),T.c==="b"?h:d);C.position.set(T.x,.738,T.z),t.add(C)});const m=new Dt;m.position.set(.48,.7,0);const g=new Q({color:6105114,roughness:.65}),_=new A(new Ut(.065,12,10),g);_.scale.set(1,.75,1);const p=new A(new J(.03,.03,.02,10),g);p.position.y=.055;const u=new A(new J(.012,.018,.06,8),g);u.rotation.z=-Math.PI/3,u.position.set(-.06,.02,0),m.add(_,p,u);const E=new Q({color:10868391,roughness:.2});[-.06,.06].forEach(T=>{const C=new A(new J(.028,.018,.035,10),E);C.position.set(.02,.018,T),m.add(C)}),t.add(m);const w=new Q({color:2035464,roughness:.6}),x=new Q({color:9051156,roughness:.75,map:this.textures.cushion});[-1.15,1.15].forEach(T=>{const C=new A(new J(.24,.28,.28,16),w);C.position.set(0,.14,T);const I=new A(new J(.28,.28,.1,16),x);I.position.set(0,.33,T),t.add(C,I)});const R=new A(new St(1.5,.28,.04),new Q({map:this.generateSignboardTexture("Kỳ Đài Chánh Niệm","Kỳ Đạo Đàm Đạo • Tâm Tĩnh Trí Minh")}));R.position.set(0,1.35,1.85),t.add(s,r,o,l,R),this.scene.add(t)}spawnReleasedFish(t,e=""){const n=Math.random()*Math.PI*2,s=this.spawnPondFish(t,n,.75+Math.random()*.45);return this.spawnClickRipple(-6.8+Math.cos(n)*s.radius,10.5+Math.sin(n)*s.radius),s}spawnFloatingLantern(t=""){const e=new Dt,n=new Q({color:16754470,emissive:16739584,emissiveIntensity:.85,roughness:.3}),s=new A(new J(.12,.08,.04,8),n),r=new A(new J(.09,.11,.12,6),new me({color:16769154}));r.position.y=.08;const o=new A(new Ut(.02,6,6),new me({color:16727296}));o.position.y=.14,e.add(s,r,o);const a=Math.random()*Math.PI*2,c=.5+Math.random()*.7;e.position.set(-6.8+Math.cos(a)*c,.34,10.5+Math.sin(a)*c),this.scene.add(e),this.floatingLanterns.push({group:e,angle:a,radius:c,driftSpeed:.12+Math.random()*.08,seed:Math.random()*10})}createAtmosphericLighting(){const t=new am(16774118,1.75);this.scene.add(t);const e=new Xa(16775920,2.3);e.position.set(0,18,6),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.near=.5,e.shadow.camera.far=35,this.scene.add(e);const n=new Xa(16766287,1.25);n.position.set(0,14,-3.5),this.scene.add(n);const s=new Q({color:16754470,emissive:16748288,emissiveIntensity:.95,roughness:.25});[-7.5,7.5].forEach(r=>{[0,6,12].forEach(o=>{const a=new A(new J(.22,.3,.6,10),s);a.position.set(r,6,o);const c=new Hn(16758605,1.5,9.5);c.position.set(r,6,o),this.candleLights.push(c),this.scene.add(a,c)})})}createParticleSystems(){const e=new De,n=new Float32Array(150),s=new Float32Array(50);for(let o=0;o<50;o++)n[o*3]=(Math.random()-.5)*.18,n[o*3+1]=1.8+Math.random()*2.6,n[o*3+2]=-3.68+(Math.random()-.5)*.18,s[o]=Math.random();e.setAttribute("position",new Ge(n,3)),e.setAttribute("alpha",new Ge(s,1));const r=new Oc({color:15718584,size:.2,transparent:!0,opacity:.45,blending:Ps,depthWrite:!1});this.smokeParticles=new sm(e,r),this.scene.add(this.smokeParticles)}spawnDroppingFortuneStick(t,e,n){const s=new J(.012,.012,.45,8),r=new Q({color:13938811,roughness:.4}),o=new A(s,r);o.position.set(t,1.35,e),o.rotation.z=Math.PI/4,this.scene.add(o);const a=Date.now(),c=750,l=()=>{const h=Date.now()-a,d=Math.min(1,h/c);o.position.y=1.35-d*1.3,o.rotation.x+=.08,o.rotation.z+=.05,d<1?requestAnimationFrame(l):(this.spawnClickRipple(t,e),setTimeout(()=>{this.scene.remove(o),s.dispose(),r.dispose()},1500),n&&n())};l()}ringBell(){this.bellRingTimer=2.8}spawnClickRipple(t,e){const n=new Co(.1,.25,24),s=new me({color:16766287,side:$e,transparent:!0,opacity:.95}),r=new A(n,s);r.rotation.x=-Math.PI/2,r.position.set(t,.025,e),this.scene.add(r),this.ripples.push({mesh:r,scale:1,maxScale:4.5,life:1})}update(t){const e=this.clock.getElapsedTime();if(this.candleLights.forEach((n,s)=>{n.intensity=1.2+Math.sin(e*7+s*2.1)*.28+(Math.random()-.5)*.08}),this.haloMesh&&(this.haloMesh.rotation.z=e*.12),this.bellRingTimer>0){this.bellRingTimer-=t;const n=Math.sin(this.bellRingTimer*8.5)*Math.min(1,this.bellRingTimer/1.5);this.bellRope&&(this.bellRope.rotation.x=n*.22,this.bellRope.rotation.z=n*.08),this.bellMesh&&(this.bellMesh.rotation.z=n*.04)}else this.bellRope&&this.bellRope.rotation.set(0,0,0),this.bellMesh&&this.bellMesh.rotation.set(0,0,0);if(this.smokeParticles){const n=this.smokeParticles.geometry.attributes.position.array;for(let s=0;s<n.length/3;s++)n[s*3+1]+=t*.45,n[s*3]+=Math.sin(e*2+s)*.003,n[s*3+1]>4.5&&(n[s*3+1]=1.8,n[s*3]=(Math.random()-.5)*.16,n[s*3+2]=-3.68+(Math.random()-.5)*.16);this.smokeParticles.geometry.attributes.position.needsUpdate=!0}for(let n=this.ripples.length-1;n>=0;n--){const s=this.ripples[n];s.scale+=t*3.8,s.life-=t*1.35,s.mesh.scale.set(s.scale,s.scale,s.scale),s.mesh.material.opacity=Math.max(0,s.life),s.life<=0&&(this.scene.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose(),this.ripples.splice(n,1))}this.pondFish&&this.pondFish.length>0&&this.pondFish.forEach(n=>{n.angle+=n.speed*t,n.group.position.x=-6.8+Math.cos(n.angle)*n.radius,n.group.position.z=10.5+Math.sin(n.angle)*n.radius,n.group.position.y=n.yBase+Math.sin(e*2.8+n.seed)*.015,n.group.rotation.y=-n.angle+Math.PI/2,n.group.rotation.z=Math.sin(e*3.5+n.seed)*.08,n.tailPivot&&(n.tailPivot.rotation.y=Math.sin(e*8.5+n.seed)*.42)}),this.floatingLanterns&&this.floatingLanterns.length>0&&this.floatingLanterns.forEach(n=>{n.angle+=n.driftSpeed*t*.25,n.group.position.x=-6.8+Math.cos(n.angle)*n.radius,n.group.position.z=10.5+Math.sin(n.angle)*n.radius,n.group.position.y=.34+Math.sin(e*2.2+n.seed)*.012,n.group.rotation.y=e*.15}),this.waterMesh&&(this.waterMesh.rotation.y=e*.015)}}class i0{constructor(t){this.scene=t,this.avatars=new Map,this.localPlayerId=null,this.monkFaceTexture=this.generateChibiMonkFaceTexture()}setLocalPlayerId(t){this.localPlayerId=t}generateChibiMonkFaceTexture(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.fillStyle="#fae3d2",e.fillRect(0,0,1024,1024);const n=e.createLinearGradient(0,0,0,420);n.addColorStop(0,"#a2b4c2"),n.addColorStop(.55,"#c5d3dc"),n.addColorStop(.85,"#e8ded7"),n.addColorStop(1,"#fae3d2"),e.fillStyle=n,e.fillRect(0,0,1024,420);const s=512,r=560,o=e.createRadialGradient(s-165,r+45,5,s-165,r+45,95);o.addColorStop(0,"rgba(255, 115, 125, 0.42)"),o.addColorStop(1,"rgba(255, 115, 125, 0)"),e.fillStyle=o,e.beginPath(),e.arc(s-165,r+45,95,0,Math.PI*2),e.fill();const a=e.createRadialGradient(s+165,r+45,5,s+165,r+45,95);a.addColorStop(0,"rgba(255, 115, 125, 0.42)"),a.addColorStop(1,"rgba(255, 115, 125, 0)"),e.fillStyle=a,e.beginPath(),e.arc(s+165,r+45,95,0,Math.PI*2),e.fill(),e.strokeStyle="#362117",e.lineWidth=14,e.lineCap="round",e.beginPath(),e.arc(s-140,r-10,56,Math.PI*1.15,Math.PI*1.85),e.stroke(),e.beginPath(),e.arc(s+140,r-10,56,Math.PI*1.15,Math.PI*1.85),e.stroke(),e.lineWidth=8,e.beginPath(),e.arc(s-140,r-90,75,Math.PI*1.25,Math.PI*1.75),e.stroke(),e.beginPath(),e.arc(s+140,r-90,75,Math.PI*1.25,Math.PI*1.75),e.stroke(),e.strokeStyle="#ab4040",e.lineWidth=12,e.beginPath(),e.arc(s,r+85,48,Math.PI*.2,Math.PI*.8),e.stroke(),e.fillStyle="#b71c1c";const c=[s-45,s+45],l=[280,340,400];c.forEach(d=>{l.forEach(f=>{e.beginPath(),e.arc(d,f,12,0,Math.PI*2),e.fill()})});const h=new Qe(t);return h.colorSpace=ge,h}createAvatar(t){if(this.avatars.has(t.id))return this.updateAvatarProfile(t.id,t),this.avatars.get(t.id);const e=new Dt;e.position.set(t.x||0,t.y||0,t.z||0),typeof t.rotY=="number"&&(e.rotation.y=t.rotY);const n=parseInt((t.robeColor||"#E69500").replace("#","0x"),16),s=new Q({color:5203061,roughness:.65,metalness:.05}),r=new Q({color:3359824,roughness:.6}),o=new Q({color:n,roughness:.52,metalness:.08}),a=new Q({color:16442322,roughness:.45,metalness:0}),c=new Q({map:this.monkFaceTexture,roughness:.42,metalness:0}),l=new Q({color:4858897,roughness:.4}),h=new Q({color:5515283,roughness:.32}),d=new Q({color:16103978,metalness:.85,roughness:.22}),f=new Q({color:16119285,roughness:.6}),m=new Q({color:2825236,roughness:.75}),g=new Dt;g.position.y=.5,e.add(g);const _=new J(.24,.36,.44,20),p=new A(_,s);p.position.y=-.1,p.castShadow=!0,g.add(p);const u=new A(new St(.16,.4,.03),o);u.position.set(-.08,-.1,.14),u.rotation.z=-.08,g.add(u);const E=new J(.07,.065,.34,12),w=new St(.09,.065,.18),x=new Dt;x.position.set(-.1,-.16,0);const R=new A(E,f);R.position.y=-.12;const T=new A(w,m);T.position.set(0,-.28,.03),x.add(R,T);const C=new Dt;C.position.set(.1,-.16,0);const I=new A(E,f);I.position.y=-.12;const S=new A(w,m);S.position.set(0,-.28,.03),C.add(I,S),g.add(x,C);const y=new Dt;y.position.y=.08,g.add(y);const P=new J(.22,.25,.42,20),z=new A(P,s);z.position.y=.2,z.castShadow=!0,y.add(z);const k=new A(new St(.035,.24,.02),r);k.rotation.z=-Math.PI/4.8,k.position.set(-.04,.32,.21);const q=new A(new St(.035,.24,.02),r);q.rotation.z=Math.PI/4.8,q.position.set(.04,.32,.21),y.add(k,q);const $=new A(new St(.14,.4,.025),o);$.position.set(-.03,.2,.19),$.rotation.z=-.4;const X=new A(new St(.14,.4,.025),o);X.position.set(-.03,.2,-.19),X.rotation.z=-.4;const j=new A(new St(.14,.035,.36),o);j.position.set(-.13,.375,0);const U=new A(new ue(.028,.008,8,16),d);U.position.set(-.13,.34,.2),y.add($,X,j,U);const nt=new Dt;nt.position.set(0,.34,.11);for(let It=0;It<18;It++){const et=It/18*Math.PI*2,mt=new A(new Ut(.016,8,8),h);mt.position.set(Math.cos(et)*.15,-Math.sin(et)*.18,Math.sin(et)*.05),nt.add(mt)}const at=new A(new J(.006,.014,.11,6),new me({color:11147288}));at.position.set(0,-.24,.09),nt.add(at),y.add(nt);const ht=new Dt;ht.position.y=.4,y.add(ht);const At=new Dt;At.position.y=.18,ht.add(At);const qt=new A(new Ut(.28,32,32),c);qt.rotation.y=-Math.PI/2,qt.castShadow=!0,At.add(qt),[-.26,.26].forEach(It=>{const et=new A(new Ut(.045,10,10),a);et.scale.set(.35,.8,.55),et.position.set(It,.02,-.02),At.add(et)});const K=new J(.09,.12,.2,14),it=new J(.08,.13,.18,14),pt=()=>{const It=new Dt,et=new A(new Ut(.04,12,12),a);return et.scale.set(.75,1.3,.45),et.position.y=-.035,It.add(et),It},st=new Dt;st.position.set(-.2,.02,0);const Mt=new A(K,o);Mt.position.set(0,-.1,0);const Ct=new Dt;Ct.position.set(0,-.2,0);const Ft=new A(it,o);Ft.position.set(0,-.09,0);const jt=pt();jt.position.set(0,-.18,0),Ct.add(Ft,jt),st.add(Mt,Ct);const Nt=new Dt;Nt.position.set(.2,.02,0);const Qt=new A(K,s);Qt.position.set(0,-.1,0);const L=new Dt;L.position.set(0,-.2,0);const pe=new A(it,s);pe.position.set(0,-.09,0);const zt=pt();zt.position.set(0,-.18,0),L.add(pe,zt),Nt.add(Qt,L),ht.add(st,Nt);const Ot=new Dt,yt=new A(new J(.012,.015,.38,8),l);yt.rotation.x=Math.PI/2.2,yt.position.set(0,-.18,.14);const Rt=new A(new Ut(.045,12,12),new Q({color:10165019,roughness:.35}));Rt.position.set(0,-.18,.32),Ot.add(yt,Rt),Ot.visible=!1,L.add(Ot);const xt=new Dt;xt.visible=!1,L.add(xt);const b=new Dt;b.position.set(0,-.18,.04);for(let It=-1;It<=1;It++){const et=new A(new J(.005,.005,.3,8),new me({color:11149841}));et.rotation.set(Math.PI/2-.08,0,It*.08),et.position.set(It*.016,0,.14);const mt=new A(new Ut(.011,8,8),new me({color:16729344}));mt.position.set(It*.024,0,.28),b.add(et,mt)}b.visible=!1,L.add(b);const v=new Dt;v.position.set(0,.07,.24);const B=new A(new J(.09,.08,.4,12),new Q({color:10581818,roughness:.5}));v.add(B),v.visible=!1,ht.add(v);const W=new A(new J(.44,.48,.12,20),new Q({color:3816e3,roughness:.85}));W.position.y=.06,W.visible=!1,e.add(W);const Z=document.createElement("div");Z.className="avatar-ui-container";const V=document.createElement("div");V.className="avatar-speech-bubble hidden",V.innerHTML='<div class="bubble-text"></div><div class="bubble-tail"></div>';const ct=document.createElement("div");ct.className="avatar-nametag meme-style"+(t.id===this.localPlayerId?" is-me":""),ct.innerHTML=`<span class="nametag-text">${this.escapeHtml(t.name||"Thích thì nhích")}</span>`,Z.appendChild(V),Z.appendChild(ct);const ot=new lm(Z);ot.position.set(0,1.65,0),e.add(ot),this.scene.add(e);const _t={id:t.id,name:t.name,robeColor:t.robeColor,group:e,pelvis:g,skirt:p,legLGroup:x,legRGroup:C,spineGroup:y,chestGroup:ht,headGroup:At,armLGroup:st,armRGroup:Nt,foreArmL:Ct,foreArmR:L,cushion:W,css2dObject:ot,uiContainer:Z,bubbleEl:V,tagEl:ct,bubbleTimeout:null,targetX:t.x||0,targetZ:t.z||0,targetRotY:t.rotY||0,action:t.action||"stand",actionTimer:0,walkCycle:Math.random()*10,isMoving:!1,merit:t.merit||0,sashRobeMat:o,props:{mallet:Ot,bellStriker:xt,incense:b,fortune:v}};return this.avatars.set(t.id,_t),t.currentBubble&&t.currentBubble.text&&this.showBubble(t.id,t.currentBubble.text,5e3),_t}setAction(t,e){const n=this.avatars.get(t);n&&(n.action=e,n.actionTimer=0,n.props&&(n.props.mallet.visible=e==="strikeWoodfish",n.props.bellStriker.visible=e==="strikeBell",n.props.incense.visible=e==="takeIncense"||e==="lightCandle"||e==="incense"||e==="plantIncense",n.props.fortune.visible=e==="shakeFortune"),e==="sit"?n.cushion.visible=!0:n.cushion.visible=!1)}showBubble(t,e,n=5e3){const s=this.avatars.get(t);if(!s)return;const r=s.bubbleEl.querySelector(".bubble-text");r&&(r.textContent=e),s.bubbleEl.classList.remove("hidden"),s.bubbleTimeout&&clearTimeout(s.bubbleTimeout),s.bubbleTimeout=setTimeout(()=>{s.bubbleEl.classList.add("hidden")},n)}updateAvatarData(t,e){const n=this.avatars.get(t);n&&(typeof e.x=="number"&&(n.targetX=e.x),typeof e.z=="number"&&(n.targetZ=e.z),typeof e.rotY=="number"&&(n.targetRotY=e.rotY),e.action&&e.action!==n.action&&this.setAction(t,e.action),(e.name||e.robeColor)&&this.updateAvatarProfile(t,e))}updateAvatarProfile(t,{name:e,robeColor:n}){const s=this.avatars.get(t);if(s){if(e&&(s.name=e,s.tagEl)){const r=s.tagEl.querySelector(".nametag-text");r?r.textContent=e:s.tagEl.innerHTML=`<span class="nametag-text">${this.escapeHtml(e)}</span>`}if(n&&s.sashRobeMat){s.robeColor=n;const r=parseInt(n.replace("#","0x"),16);s.sashRobeMat.color.setHex(r)}}}removeAvatar(t){const e=this.avatars.get(t);e&&(this.scene.remove(e.group),this.avatars.delete(t))}update(t){const e=Date.now()*.003;this.avatars.forEach(n=>{n.actionTimer+=t;const s=n.targetX-n.group.position.x,r=n.targetZ-n.group.position.z,o=Math.hypot(s,r);if(o>.04&&n.action!=="sit"){n.isMoving=!0;const x=Math.min(1,t*12);n.group.position.x+=s*x,n.group.position.z+=r*x}else if(n.isMoving=!1,n.action==="sit"){const x=Math.min(1,t*14);n.group.position.x+=(n.targetX-n.group.position.x)*x,n.group.position.z+=(n.targetZ-n.group.position.z)*x}else if(o>.001){const x=Math.min(1,t*12);n.group.position.x+=s*x,n.group.position.z+=r*x}let a=n.targetRotY-n.group.rotation.y;for(;a<-Math.PI;)a+=Math.PI*2;for(;a>Math.PI;)a-=Math.PI*2;n.group.rotation.y+=a*Math.min(1,t*14);let c=.5,l={x:0,y:0,z:0},h={x:0,y:0,z:0},d={x:0,y:0,z:0},f={x:0,y:0,z:0},m={x:0,y:0,z:0},g={x:.02,y:0,z:-.09},_={x:.02,y:0,z:.09},p={x:-.02,y:0,z:0},u={x:-.02,y:0,z:0},E={x:1,y:1,z:1};if(n.isMoving){n.walkCycle+=t*9.5;const x=n.walkCycle,R=Math.sin(x)*.4;f.x=-R,m.x=R,c=.5+Math.abs(Math.sin(x))*.028,l.y=Math.sin(x)*.04,l.z=Math.cos(x)*.02,h.y=-Math.sin(x)*.04,h.x=.04;const T=Math.sin(x)*.32;g={x:T,y:0,z:-.09},_={x:-T,y:0,z:.09},p.x=T<0?T*.35-.03:-.03,u.x=T>0?-T*.35-.03:-.03,d.x=-Math.sin(x*2)*.02,d.y=Math.sin(x)*.02}else if(n.action==="sit"){c=.16,l={x:0,y:0,z:0},f={x:-Math.PI/2.2,y:.35,z:-.2},m={x:-Math.PI/2.2,y:-.35,z:.2},h={x:0,y:0,z:0},g={x:-.45,y:.05,z:.18},_={x:-.45,y:-.05,z:-.18},p={x:-.65,y:.08,z:.08},u={x:-.65,y:-.08,z:-.08},d={x:.06,y:0,z:0};const x=Math.sin(e*1.5)*.02;E={x:1+x,y:1+x*.6,z:1+x}}else if(n.action==="bow"||n.action==="bow3Times"){const R=n.actionTimer%2.4/2.4;let T=0;R<.4?T=Math.sin(R/.4*(Math.PI/2)):R<.65?T=1:T=Math.cos((R-.65)/.35*(Math.PI/2)),T=Math.max(0,Math.min(1,T)),c=.5-T*.32,f.x=-T*1.15,m.x=-T*1.15,h.x=T*.88,d.x=T*.35,g={x:-.55,y:.1,z:.5},_={x:-.55,y:-.1,z:-.5},p={x:-1.25,y:0,z:.25},u={x:-1.25,y:0,z:-.25}}else if(n.action==="strikeWoodfish"){c=.5,h.x=.04,g={x:-.55,y:.1,z:.5},p={x:-1.25,y:0,z:.25};const x=n.actionTimer*6%(Math.PI*2),R=Math.max(0,Math.sin(x));_={x:-.38-R*.22,y:-.08,z:-.08},u={x:-.72-R*.4,y:-.1,z:-.05},d.x=.05+(1-R)*.04}else if(n.action==="strikeBell"){c=.5;const x=Math.sin(n.actionTimer*7.5),R=Math.sin(Math.min(Math.PI,n.actionTimer*2.2));h.x=.05+x*.1*R,h.y=x*.04*R;const T=-.55+x*.18*R;g={x:T,y:.1,z:.35},_={x:T,y:-.1,z:-.35},p={x:-.95+x*.15*R,y:0,z:.12},u={x:-.95+x*.15*R,y:0,z:-.12},d.x=-.12+Math.max(0,x)*.06}else if(n.action==="takeIncense")c=.5,h.x=.14,g={x:-.55,y:.1,z:.5},p={x:-1.25,y:0,z:.25},_={x:-.45,y:-.08,z:-.15},u={x:-.7,y:0,z:-.05},d.x=.12;else if(n.action==="lightCandle")c=.5,h.x=.06,g={x:-.55,y:.1,z:.5},p={x:-1.25,y:0,z:.25},_={x:-.52,y:-.08,z:-.15},u={x:-.9,y:0,z:-.08},d.x=.05;else if(n.action==="incense"||n.action==="plantIncense"){c=.5;const x=n.actionTimer;if(x<1.2){const R=Math.sin(x/1.2*(Math.PI/2));h.x=.08+R*.1,d.x=.05+R*.08,g={x:-.58-R*.12,y:.1,z:.4},_={x:-.58-R*.12,y:-.1,z:-.4},p={x:-1.2-R*.15,y:0,z:.2},u={x:-1.2-R*.15,y:0,z:-.2}}else{const R=Math.sin(Math.min(Math.PI,(x-1.2)*2));h.x=.18+R*.2,d.x=.12+R*.08,g={x:-.45-R*.15,y:.05,z:.25},_={x:-.45-R*.15,y:-.05,z:-.25},p={x:-.85+R*.15,y:0,z:.1},u={x:-.85+R*.15,y:0,z:-.1}}}else if(n.action==="shakeFortune"){c=.5;const x=Math.sin(n.actionTimer*16)*.08;h.x=.08+x*.5,g={x:-.5+x,y:.1,z:.35},_={x:-.5+x,y:-.1,z:-.35},p={x:-1.1,y:0,z:.15},u={x:-1.1,y:0,z:-.15}}else{c=.5;const x=Math.sin(e*2)*.015;h.x=x*.3,d.x=x*.2,g={x:.02,y:0,z:-.09-x*.2},_={x:.02,y:0,z:.09+x*.2},p={x:-.02,y:0,z:0},u={x:-.02,y:0,z:0},E={x:1+x*.6,y:1+x*.4,z:1+x*.6}}const w=Math.min(1,t*14);n.pelvis.position.y+=(c-n.pelvis.position.y)*w,n.pelvis.rotation.x+=(l.x-n.pelvis.rotation.x)*w,n.pelvis.rotation.y+=(l.y-n.pelvis.rotation.y)*w,n.pelvis.rotation.z+=(l.z-n.pelvis.rotation.z)*w,n.spineGroup.rotation.x+=(h.x-n.spineGroup.rotation.x)*w,n.spineGroup.rotation.y+=(h.y-n.spineGroup.rotation.y)*w,n.spineGroup.rotation.z+=(h.z-n.spineGroup.rotation.z)*w,n.headGroup.rotation.x+=(d.x-n.headGroup.rotation.x)*w,n.headGroup.rotation.y+=(d.y-n.headGroup.rotation.y)*w,n.headGroup.rotation.z+=(d.z-n.headGroup.rotation.z)*w,n.legLGroup.rotation.x+=(f.x-n.legLGroup.rotation.x)*w,n.legLGroup.rotation.y+=(f.y-n.legLGroup.rotation.y)*w,n.legLGroup.rotation.z+=(f.z-n.legLGroup.rotation.z)*w,n.legRGroup.rotation.x+=(m.x-n.legRGroup.rotation.x)*w,n.legRGroup.rotation.y+=(m.y-n.legRGroup.rotation.y)*w,n.legRGroup.rotation.z+=(m.z-n.legRGroup.rotation.z)*w,n.armLGroup.rotation.x+=(g.x-n.armLGroup.rotation.x)*w,n.armLGroup.rotation.y+=(g.y-n.armLGroup.rotation.y)*w,n.armLGroup.rotation.z+=(g.z-n.armLGroup.rotation.z)*w,n.armRGroup.rotation.x+=(_.x-n.armRGroup.rotation.x)*w,n.armRGroup.rotation.y+=(_.y-n.armRGroup.rotation.y)*w,n.armRGroup.rotation.z+=(_.z-n.armRGroup.rotation.z)*w,n.foreArmL.rotation.x+=(p.x-n.foreArmL.rotation.x)*w,n.foreArmL.rotation.y+=(p.y-n.foreArmL.rotation.y)*w,n.foreArmL.rotation.z+=(p.z-n.foreArmL.rotation.z)*w,n.foreArmR.rotation.x+=(u.x-n.foreArmR.rotation.x)*w,n.foreArmR.rotation.y+=(u.y-n.foreArmR.rotation.y)*w,n.foreArmR.rotation.z+=(u.z-n.foreArmR.rotation.z)*w,n.chestGroup.scale.x+=(E.x-n.chestGroup.scale.x)*w,n.chestGroup.scale.y+=(E.y-n.chestGroup.scale.y)*w,n.chestGroup.scale.z+=(E.z-n.chestGroup.scale.z)*w})}escapeHtml(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}}class s0{constructor(t,e,n,s,r){this.camera=t,this.domElement=e,this.onMoveCallback=n,this.temple=s,this.app=r,this.position=new N(0,0,4.5),this.rotationY=Math.PI,this.moveSpeed=4.5,this.keys={forward:!1,backward:!1,left:!1,right:!1},this.camDistance=7,this.targetCamDistance=7,this.camHeight=2.6,this.targetCamHeight=2.6,this.camPitch=.26,this.targetCamPitch=.26,this.camYaw=0,this.targetCamYaw=0,this.isDragging=!1,this.dragStart={x:0,y:0},this.lastPointer={x:0,y:0},this.dragStartTime=0,this.dragMoved=0,this.targetMovePoint=null,this.targetRotYArrival=Math.PI,this.onArriveCallback=null,this.onCancelCallback=null,this.raycaster=new cm,this.mouseVec=new Yt,this.lastSentTime=0,this.sendInterval=1e3/30,this.initEventListeners()}runToTarget(t,e,n,s){this.targetMovePoint=new N(t,0,e),this.targetRotYArrival=typeof n=="number"?n:Math.PI,this.onArriveCallback=s||null}cancelAutoMovement(){this.targetMovePoint=null,this.onArriveCallback=null,this.onCancelCallback&&this.onCancelCallback()}resetToIconicView(){this.setCameraMainHall()}setCameraMainHall(){this.targetCamYaw=0,this.targetCamPitch=.26,this.targetCamDistance=7.2,this.targetCamHeight=2.8}setCameraBuddhaCloseUp(){this.targetCamYaw=0,this.targetCamPitch=.12,this.targetCamDistance=5.2,this.targetCamHeight=2.2}setCameraFollow(){this.targetCamYaw=0,this.targetCamPitch=.3,this.targetCamDistance=5,this.targetCamHeight=2.4}initEventListeners(){window.addEventListener("keydown",t=>this.handleKeyDown(t)),window.addEventListener("keyup",t=>this.handleKeyUp(t)),this.domElement.addEventListener("pointerdown",t=>{t.target.closest(".interactive-ui")||t.target.closest("button")||t.target.closest("input")||t.target.closest("select")||(this.isDragging=!0,this.dragStart={x:t.clientX,y:t.clientY},this.lastPointer={x:t.clientX,y:t.clientY},this.dragStartTime=Date.now(),this.dragMoved=0)}),window.addEventListener("pointermove",t=>{if(!this.isDragging)return;const e=t.clientX-this.lastPointer.x,n=t.clientY-this.lastPointer.y;this.dragMoved+=Math.hypot(e,n),this.dragMoved>10&&(this.targetCamYaw-=e*.005,this.targetCamPitch=Math.max(.05,Math.min(Math.PI/2.3,this.targetCamPitch+n*.004))),this.lastPointer={x:t.clientX,y:t.clientY}}),window.addEventListener("pointerup",t=>{this.isDragging&&(Date.now()-(this.dragStartTime||0)<450&&this.dragMoved<25&&this.handleFloorClick(t),this.isDragging=!1)}),this.domElement.addEventListener("wheel",t=>{this.targetCamDistance=Math.max(2.6,Math.min(10.5,this.targetCamDistance+t.deltaY*.004))},{passive:!0})}initVirtualDpad(){const t=(n,s)=>{const r=document.getElementById(n);if(!r)return;const o=c=>{c.preventDefault(),this.keys[s]=!0,this.cancelAutoMovement()},a=c=>{c.preventDefault(),this.keys[s]=!1};r.addEventListener("pointerdown",o),r.addEventListener("pointerup",a),r.addEventListener("pointerleave",a),r.addEventListener("pointercancel",a)};t("dpad-up","forward"),t("dpad-down","backward"),t("dpad-left","left"),t("dpad-right","right");const e=document.getElementById("dpad-center");e&&e.addEventListener("click",n=>{n.preventDefault(),this.cancelAutoMovement(),this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1})}handleKeyDown(t){if(!["input","textarea","select"].includes(document.activeElement.tagName.toLowerCase()))switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!0,this.cancelAutoMovement();break;case"KeyS":case"ArrowDown":this.keys.backward=!0,this.cancelAutoMovement();break;case"KeyA":case"ArrowLeft":this.keys.left=!0,this.cancelAutoMovement();break;case"KeyD":case"ArrowRight":this.keys.right=!0,this.cancelAutoMovement();break}}handleKeyUp(t){switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break}}handleFloorClick(t){if(t.target.closest(".interactive-ui")||t.target.closest("button")||t.target.closest("input")||t.target.closest("select"))return;const e=this.domElement.getBoundingClientRect();this.mouseVec.x=(t.clientX-e.left)/e.width*2-1,this.mouseVec.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.mouseVec,this.camera);const n=new Cn(new N(0,1,0),0),s=new N;if(this.raycaster.ray.intersectPlane(n,s)){const o=this.temple.interactiveStations;if(o&&o.woodfish&&Math.hypot(s.x-o.woodfish.x,s.z-o.woodfish.z)<2&&this.app&&this.app.fsm){this.app.fsm.startWoodfish();return}if(o&&o.bell&&Math.hypot(s.x-o.bell.x,s.z-o.bell.z)<2.2&&this.app&&this.app.fsm){this.app.fsm.startBell();return}if(o&&o.fortuneTable&&Math.hypot(s.x-o.fortuneTable.x,s.z-o.fortuneTable.z)<2&&this.app&&this.app.fsm){this.app.fsm.startFortune();return}if(o&&o.incenseBurner&&Math.hypot(s.x-o.incenseBurner.x,s.z-o.incenseBurner.z)<2&&this.app&&this.app.fsm){this.app.fsm.startIncense();return}if(o&&o.pond&&Math.hypot(s.x-o.pond.x,s.z-o.pond.z)<2.6&&this.app&&this.app.openFishReleaseModal){this.app.openFishReleaseModal();return}if(o&&o.chess&&Math.hypot(s.x-o.chess.x,s.z-10.5)<2.4&&this.app&&this.app.openChessModal){this.app.openChessModal();return}if(o&&o.tea&&Math.hypot(s.x-o.tea.x,s.z-o.tea.z)<1.8&&this.app&&this.app.drinkTea){this.app.drinkTea();return}if(Math.hypot(s.x,s.z- -3.8)<2.5&&this.app&&this.app.fsm){this.app.fsm.startBowing();return}if(this.temple.cushionPositions){for(const l of this.temple.cushionPositions)if(Math.hypot(s.x-l.x,s.z-l.z)<.85&&this.app&&this.app.fsm){this.app.fsm.startMeditation();return}}this.cancelAutoMovement();const a=Math.max(-9.8,Math.min(9.8,s.x)),c=Math.max(-2.5,Math.min(15.5,s.z));this.targetMovePoint=new N(a,0,c),this.temple&&this.temple.spawnClickRipple&&this.temple.spawnClickRipple(a,c)}}setPosition(t,e,n,s){this.position.set(t,e,n),typeof s=="number"&&(this.rotationY=s)}update(t,e,n){this.camYaw+=(this.targetCamYaw-this.camYaw)*.15,this.camPitch+=(this.targetCamPitch-this.camPitch)*.15,this.camDistance+=(this.targetCamDistance-this.camDistance)*.15,this.camHeight+=(this.targetCamHeight-this.camHeight)*.15;let s=0,r=0;const o=new N(0,0,-1).applyAxisAngle(new N(0,1,0),this.camYaw),a=new N(1,0,0).applyAxisAngle(new N(0,1,0),this.camYaw);let c=!1;if(this.keys.forward&&(s+=o.x,r+=o.z,c=!0),this.keys.backward&&(s-=o.x,r-=o.z,c=!0),this.keys.left&&(s-=a.x,r-=a.z,c=!0),this.keys.right&&(s+=a.x,r+=a.z,c=!0),this.targetMovePoint&&!c){const f=this.targetMovePoint.x-this.position.x,m=this.targetMovePoint.z-this.position.z,g=Math.hypot(f,m);if(g>.16)s=f/g,r=m/g,c=!0;else if(this.targetMovePoint=null,this.rotationY=this.targetRotYArrival||Math.PI,this.onArriveCallback){const _=this.onArriveCallback;this.onArriveCallback=null,_()}}if(c){const f=Math.hypot(s,r);if(f>0){s/=f,r/=f;const m=this.position.x+s*this.moveSpeed*t,g=this.position.z+r*this.moveSpeed*t;this.position.x=Math.max(-9.8,Math.min(9.8,m)),this.position.z=Math.max(-2.5,Math.min(15.5,g)),this.rotationY=Math.atan2(s,r)}}n&&e&&e.updateAvatarData(n,{x:this.position.x,y:this.position.y,z:this.position.z,rotY:this.rotationY});const l=new N(Math.sin(this.camYaw)*Math.cos(this.camPitch)*this.camDistance,Math.sin(this.camPitch)*this.camDistance+this.camHeight,Math.cos(this.camYaw)*Math.cos(this.camPitch)*this.camDistance);this.camera.position.copy(this.position).add(l);const h=new N(this.position.x*.5,this.position.y+1.85,this.position.z-3.2);this.camera.lookAt(h);const d=Date.now();d-this.lastSentTime>this.sendInterval&&c&&(this.lastSentTime=d,this.onMoveCallback&&this.onMoveCallback({x:parseFloat(this.position.x.toFixed(3)),y:parseFloat(this.position.y.toFixed(3)),z:parseFloat(this.position.z.toFixed(3)),rotY:parseFloat(this.rotationY.toFixed(3))}))}}class r0{constructor(){this.ctx=null,this.isPlaying=!1,this.currentTrack="woodfish-chant",this.volume=.55,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.lowPassFilter=null,this.musicTimers=[],this.activeNodes=[],this.chantAudio=new Audio,this.chantAudio.loop=!0,this.chantAudio.crossOrigin="anonymous",this.chantAudio.volume=this.volume,this.chantUrls=["https://media.dieuphapam.net/data/1486/Luc%20Tu%20Di%20Da.mp3","https://ph.tinhtong.vn/Audio/PhatHoc/NiemPhat/01_NamMoADiDaPhat_6Chu_Nhanh.mp3"],this.currentUrlIdx=0}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.lowPassFilter=this.ctx.createBiquadFilter(),this.lowPassFilter.type="lowpass",this.lowPassFilter.frequency.setValueAtTime(1200,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1,this.ctx.currentTime),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(this.volume,this.ctx.currentTime),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(.75,this.ctx.currentTime),this.musicGain.connect(this.lowPassFilter),this.sfxGain.connect(this.lowPassFilter),this.lowPassFilter.connect(this.masterGain),this.masterGain.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.musicGain&&this.ctx&&this.musicGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05),this.chantAudio&&(this.chantAudio.volume=this.volume)}playWoodfish(){this.init();const t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(720,e),n.frequency.exponentialRampToValueAtTime(280,e+.09),s.gain.setValueAtTime(.7,e),s.gain.exponentialRampToValueAtTime(.001,e+.15),n.connect(s),s.connect(this.sfxGain),n.start(e),n.stop(e+.16);const r=t.createOscillator(),o=t.createGain();r.type="triangle",r.frequency.setValueAtTime(1100,e),r.frequency.exponentialRampToValueAtTime(350,e+.02),o.gain.setValueAtTime(.35,e),o.gain.exponentialRampToValueAtTime(.001,e+.03),r.connect(o),o.connect(this.sfxGain),r.start(e),r.stop(e+.03)}playBell(){this.init();const t=this.ctx,e=t.currentTime,n=216;[{ratio:1,gain:.6,decay:7},{ratio:1.414,gain:.35,decay:5.5},{ratio:2,gain:.25,decay:4.5}].forEach(({ratio:r,gain:o,decay:a})=>{const c=t.createOscillator(),l=t.createGain();c.frequency.setValueAtTime(n*r,e),c.type="sine",l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(o*.4,e+.03),l.gain.exponentialRampToValueAtTime(1e-4,e+a),c.connect(l),l.connect(this.sfxGain),c.start(e),c.stop(e+a)})}playChessClack(){this.init();const t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(480,e),n.frequency.exponentialRampToValueAtTime(140,e+.045),s.gain.setValueAtTime(.55,e),s.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(s),s.connect(this.sfxGain),n.start(e),n.stop(e+.055);const r=t.createOscillator(),o=t.createGain();r.type="triangle",r.frequency.setValueAtTime(220,e),o.gain.setValueAtTime(.25,e),o.gain.exponentialRampToValueAtTime(.001,e+.12),r.connect(o),o.connect(this.sfxGain),r.start(e),r.stop(e+.13)}playWaterSplash(){this.init();const t=this.ctx,e=t.currentTime,n=t.sampleRate*.25,s=t.createBuffer(1,n,t.sampleRate),r=s.getChannelData(0);for(let d=0;d<n;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(t.sampleRate*.08));const o=t.createBufferSource();o.buffer=s;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(600,e),a.frequency.exponentialRampToValueAtTime(350,e+.22),a.Q.value=2.5;const c=t.createGain();c.gain.setValueAtTime(.4,e),c.gain.exponentialRampToValueAtTime(.001,e+.25),o.connect(a),a.connect(c),c.connect(this.sfxGain),o.start(e),o.stop(e+.26);const l=t.createOscillator(),h=t.createGain();l.type="sine",l.frequency.setValueAtTime(540,e+.04),l.frequency.exponentialRampToValueAtTime(860,e+.15),h.gain.setValueAtTime(.001,e),h.gain.linearRampToValueAtTime(.25,e+.05),h.gain.exponentialRampToValueAtTime(.001,e+.22),l.connect(h),h.connect(this.sfxGain),l.start(e+.04),l.stop(e+.24)}playTeaPour(){this.init();const t=this.ctx,e=t.currentTime;for(let n=0;n<4;n++){const s=e+n*.09,r=t.createOscillator(),o=t.createGain();r.type="sine",r.frequency.setValueAtTime(800+n*150+Math.random()*50,s),r.frequency.exponentialRampToValueAtTime(1100+n*120,s+.07),o.gain.setValueAtTime(.18,s),o.gain.exponentialRampToValueAtTime(.001,s+.075),r.connect(o),o.connect(this.sfxGain),r.start(s),r.stop(s+.08)}}playFanfare(){this.init();const t=this.ctx,e=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((s,r)=>{const o=e+r*.12,a=t.createOscillator(),c=t.createGain();a.type="sine",a.frequency.setValueAtTime(s,o),c.gain.setValueAtTime(.001,o),c.gain.linearRampToValueAtTime(.35,o+.03),c.gain.exponentialRampToValueAtTime(.001,o+1.2),a.connect(c),c.connect(this.sfxGain),a.start(o),a.stop(o+1.25)})}selectTrack(t){this.currentTrack=t,this.isPlaying&&(this.stopMusic(),this.startMusic())}toggleMusic(){return this.isPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}startMusic(){switch(this.init(),this.stopMusic(),this.isPlaying=!0,this.musicGain&&(this.musicGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.musicGain.gain.linearRampToValueAtTime(this.volume,this.ctx.currentTime+1.2)),this.currentTrack){case"woodfish-chant":this.startWoodfishChantTrack();break;case"singing-bowl":this.startSingingBowlTrack();break;case"temple-rain":this.startTempleRainTrack();break;case"nam-mo-a-di-da-phat":this.startNamMoADiDaPhatTrack();break;default:this.startWoodfishChantTrack();break}}startWoodfishChantTrack(){if(!this.isPlaying||!this.ctx)return;let t=0;const e=1080,n=()=>{if(!this.isPlaying||!this.ctx)return;const r=this.ctx.currentTime;t++;const o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=.85+Math.sin(t*1.5)*.08;o.type="sine",o.frequency.setValueAtTime(680,r),o.frequency.exponentialRampToValueAtTime(260,r+.11),a.gain.setValueAtTime(.68*c,r),a.gain.exponentialRampToValueAtTime(.001,r+.16),o.connect(a),a.connect(this.musicGain),o.start(r),o.stop(r+.17);const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="triangle",l.frequency.setValueAtTime(980,r),l.frequency.exponentialRampToValueAtTime(320,r+.025),h.gain.setValueAtTime(.32*c,r),h.gain.exponentialRampToValueAtTime(.001,r+.035),l.connect(h),h.connect(this.musicGain),l.start(r),l.stop(r+.04),t%8===0&&this.playGentleBellAccent()};n();const s=setInterval(()=>{n()},e);this.musicTimers.push(s)}playGentleBellAccent(){if(!this.ctx||!this.isPlaying)return;const t=this.ctx,e=t.currentTime,n=220;[1,1.414,2.76].forEach((s,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="sine",o.frequency.setValueAtTime(n*s,e);const c=.28/(r+1);a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(c,e+.04),a.gain.exponentialRampToValueAtTime(1e-4,e+6.5),o.connect(a),a.connect(this.musicGain),o.start(e),o.stop(e+6.6)})}stopMusic(){if(this.isPlaying=!1,this.chantAudio)try{this.chantAudio.pause(),this.chantAudio.currentTime=0}catch{}this.musicTimers.forEach(t=>clearInterval(t)),this.musicTimers=[],this.activeNodes.forEach(t=>{try{t.stop&&t.stop(),t.disconnect&&t.disconnect()}catch{}}),this.activeNodes=[]}startNamMoADiDaPhatTrack(){if(this.chantUrls[this.currentUrlIdx]){this.chantAudio.src=this.chantUrls[this.currentUrlIdx],this.chantAudio.volume=this.volume;const t=this.chantAudio.play();t!==void 0&&t.then(()=>{}).catch(e=>{this.playWarmChantSynth()})}else this.playWarmChantSynth();setTimeout(()=>{this.isPlaying&&this.chantAudio.paused&&this.playWarmChantSynth()},2500)}playWarmChantSynth(){const t=this.ctx;if(!this.isPlaying)return;const e=t.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(650,t.currentTime),e.connect(this.musicGain),[87.31,130.81].forEach(a=>{const c=t.createOscillator(),l=t.createGain();c.type="sine",c.frequency.setValueAtTime(a,t.currentTime),l.gain.setValueAtTime(.045,t.currentTime),c.connect(l),l.connect(e),c.start(),this.activeNodes.push(c,l)});const n=[{text:"Nam",freq:174.61,dur:1.6},{text:"Mô",freq:196,dur:1.6},{text:"A",freq:233.08,dur:1.8},{text:"Di",freq:261.63,dur:1.8},{text:"Đà",freq:233.08,dur:2},{text:"Phật",freq:174.61,dur:2.4}];let s=0;const r=()=>{if(!this.isPlaying)return;const a=n[s],c=t.currentTime,l=t.createOscillator(),h=t.createGain();if(l.type="sine",l.frequency.setValueAtTime(a.freq,c),h.gain.setValueAtTime(1e-4,c),h.gain.linearRampToValueAtTime(.085,c+.4),h.gain.setValueAtTime(.08,c+a.dur-.5),h.gain.exponentialRampToValueAtTime(1e-4,c+a.dur),l.connect(h),h.connect(e),l.start(c),l.stop(c+a.dur),a.text==="Phật"){const d=t.createOscillator(),f=t.createGain();d.type="sine",d.frequency.setValueAtTime(432,c),f.gain.setValueAtTime(.02,c),f.gain.exponentialRampToValueAtTime(1e-4,c+3.5),d.connect(f),f.connect(e),d.start(c),d.stop(c+3.5)}s=(s+1)%n.length};r();const o=setInterval(r,1950);this.musicTimers.push(o)}startSingingBowlTrack(){const t=this.ctx,e=216,n=()=>{if(!this.isPlaying)return;const r=t.currentTime;[{mult:1,gain:.12,decay:8.5},{mult:2,gain:.06,decay:6}].forEach(({mult:a,gain:c,decay:l})=>{const h=t.createOscillator(),d=t.createGain();h.type="sine",h.frequency.setValueAtTime(e*a,r),d.gain.setValueAtTime(1e-4,r),d.gain.linearRampToValueAtTime(c*.7,r+.1),d.gain.exponentialRampToValueAtTime(1e-4,r+l),h.connect(d),d.connect(this.musicGain),h.start(r),h.stop(r+l)})};n();const s=setInterval(n,7e3);this.musicTimers.push(s)}startTempleRainTrack(){const t=this.ctx,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),s=n.getChannelData(0);let r=0;for(let l=0;l<e;l++){const h=Math.random()*2-1;s[l]=(r+.02*h)/1.02,r=s[l],s[l]*=.12}const o=t.createBufferSource();o.buffer=n,o.loop=!0;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(750,t.currentTime);const c=t.createGain();c.gain.setValueAtTime(.06,t.currentTime),o.connect(a),a.connect(c),c.connect(this.musicGain),o.start(),this.activeNodes.push(o,a,c)}}const xe=new r0,Pt={IDLE:"IDLE",NAVIGATING_TO_CUSHION:"NAVIGATING_TO_CUSHION",MEDITATING:"MEDITATING",BOWING_3_TIMES:"BOWING_3_TIMES",NAVIGATING_TO_WOODFISH:"NAVIGATING_TO_WOODFISH",STRIKING_WOODFISH:"STRIKING_WOODFISH",NAVIGATING_TO_BELL:"NAVIGATING_TO_BELL",STRIKING_BELL:"STRIKING_BELL",INCENSE_FETCH:"INCENSE_FETCH",INCENSE_LIGHT_CANDLE:"INCENSE_LIGHT_CANDLE",INCENSE_PLANT:"INCENSE_PLANT",INCENSE_BOWING:"INCENSE_BOWING",FORTUNE_WALK:"FORTUNE_WALK",FORTUNE_SHAKE:"FORTUNE_SHAKE",FORTUNE_DROP:"FORTUNE_DROP"};class o0{constructor(t){this.app=t,this.currentState=Pt.IDLE,this.stateTimer=0,this.bowCount=0,this.woodfishInterval=null,this.targetPoint=null,this.targetRotY=Math.PI,this.onArriveCallback=null}getState(){return this.currentState}isBusyWithRitual(){return[Pt.NAVIGATING_TO_CUSHION,Pt.MEDITATING,Pt.BOWING_3_TIMES,Pt.NAVIGATING_TO_WOODFISH,Pt.STRIKING_WOODFISH,Pt.NAVIGATING_TO_BELL,Pt.STRIKING_BELL,Pt.INCENSE_FETCH,Pt.INCENSE_LIGHT_CANDLE,Pt.INCENSE_PLANT,Pt.INCENSE_BOWING,Pt.FORTUNE_WALK,Pt.FORTUNE_SHAKE,Pt.FORTUNE_DROP].includes(this.currentState)}cancelRitual(){this.clearTimers(),this.targetPoint=null,this.onArriveCallback=null,this.currentState=Pt.IDLE,this.app.avatarManager&&this.app.myId&&this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),this.app.hideRitualStatus&&this.app.hideRitualStatus()}clearTimers(){this.woodfishInterval&&(clearInterval(this.woodfishInterval),this.woodfishInterval=null)}startMeditation(){if(this.currentState===Pt.MEDITATING){this.cancelRitual(),this.app.showToast("Đã xuất thiền, đứng dậy trang nghiêm 🙏");return}this.clearTimers();const t=this.app.controller.position.x,e=this.app.controller.position.z,n=this.app.temple.findNearestCushion(t,e);this.currentState=Pt.NAVIGATING_TO_CUSHION,this.stateTimer=0,this.app.showToast("Đang bước lại bồ đoàn tọa thiền..."),this.app.updateActionButtonsUI("sit"),this.app.showRitualStatus&&this.app.showRitualStatus("🧘","Đang bước lại bồ đoàn tọa thiền...",!0),this.navigateTo(n.x,n.z,Math.PI,()=>{this.currentState=Pt.MEDITATING,this.stateTimer=0,this.app.avatarManager.setAction(this.app.myId,"sit"),this.app.socket&&this.app.socket.emit("action",{action:"sit"}),this.app.showToast("Đã an tọa thiền định kiết già trên bồ đoàn 🙏"),this.app.showFloatingMerit("+1 Thiền Định",this.app.controller.position),this.app.showRitualStatus&&this.app.showRitualStatus("🧘","Đang an tọa thiền định kiết già (Bấm di chuyển hoặc Dừng để xuất thiền)",!0)})}startBowing(){this.clearTimers(),this.currentState=Pt.BOWING_3_TIMES,this.stateTimer=0,this.bowCount=1,this.app.controller.rotationY=Math.PI,this.app.avatarManager.setAction(this.app.myId,"bow3Times"),this.app.socket&&this.app.socket.emit("action",{action:"bow3Times"}),this.app.updateActionButtonsUI("bow"),this.app.showToast("Thành tâm chắp tay đảnh lễ Tam Bảo: Lạy 1/3 🙏"),this.app.playTempleChime(),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Thành tâm đảnh lễ Phật: Lạy 1/3 🙏",!1),setTimeout(()=>{this.currentState===Pt.BOWING_3_TIMES&&(this.bowCount=2,this.app.showToast("Thành tâm đảnh lễ Chánh Pháp: Lạy 2/3 🙏"),this.app.playTempleChime(),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Thành tâm đảnh lễ Pháp: Lạy 2/3 🙏",!1))},2400),setTimeout(()=>{this.currentState===Pt.BOWING_3_TIMES&&(this.bowCount=3,this.app.showToast("Thành tâm đảnh lễ Tăng Bảo: Lạy 3/3 🙏"),this.app.playTempleChime(),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Thành tâm đảnh lễ Tăng: Lạy 3/3 🙏",!1))},4800),setTimeout(()=>{this.currentState===Pt.BOWING_3_TIMES&&(this.currentState=Pt.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),this.app.showToast("Tam bái viên mãn, công đức vô lượng! 🙏"),this.app.showFloatingMerit("+3 Lễ Phật",this.app.controller.position),this.app.hideRitualStatus&&this.app.hideRitualStatus())},7200)}startWoodfish(){if(this.currentState===Pt.STRIKING_WOODFISH){this.cancelRitual(),this.app.showToast("Đã dừng gõ mõ 🙏");return}this.clearTimers();const t=this.app.temple.interactiveStations.woodfish;this.currentState=Pt.NAVIGATING_TO_WOODFISH,this.stateTimer=0,this.app.showToast("Đang bước lại kệ Mõ Gỗ Bát Nhã..."),this.app.updateActionButtonsUI("woodfish"),this.app.showRitualStatus&&this.app.showRitualStatus("🪵","Đang bước lại kệ Mõ Gỗ Bát Nhã...",!0),this.navigateTo(t.x,t.z,t.rotY,()=>{this.currentState=Pt.STRIKING_WOODFISH,this.stateTimer=0,this.app.avatarManager.setAction(this.app.myId,"strikeWoodfish"),this.app.socket&&this.app.socket.emit("action",{action:"strikeWoodfish"}),this.app.showToast("Đang gõ mõ tụng kinh liên tục... (Bấm di chuyển để dừng)"),this.app.showRitualStatus&&this.app.showRitualStatus("🪵","Đang gõ mõ tụng kinh liên tục (+1 Công đức) • Bấm di chuyển để dừng",!0),this.executeWoodfishStrike(),this.woodfishInterval=setInterval(()=>{if(this.currentState!==Pt.STRIKING_WOODFISH){this.clearTimers();return}this.executeWoodfishStrike()},1050)})}executeWoodfishStrike(){this.app.audio.playWoodfish(),this.app.socket&&this.app.socket.emit("strikeWoodfish"),this.app.temple.spawnClickRipple(5.6,-1.8),this.app.showFloatingMerit("+1 Công Đức",this.app.controller.position)}startBell(){this.clearTimers();const t=this.app.temple.interactiveStations.bell;this.currentState=Pt.NAVIGATING_TO_BELL,this.stateTimer=0,this.app.showToast("Đang bước lại Đại Hồng Chung..."),this.app.updateActionButtonsUI("bell"),this.app.showRitualStatus&&this.app.showRitualStatus("🔔","Đang bước lại Đại Hồng Chung...",!0),this.navigateTo(t.x,t.z,t.rotY,()=>{this.currentState=Pt.STRIKING_BELL,this.stateTimer=0,this.app.avatarManager.setAction(this.app.myId,"strikeBell"),this.app.socket&&this.app.socket.emit("action",{action:"strikeBell"}),this.app.showRitualStatus&&this.app.showRitualStatus("🔔","Đang cầm dây lắc thỉnh Đại Hồng Chung...",!1),this.app.temple&&this.app.temple.ringBell&&this.app.temple.ringBell(),setTimeout(()=>{this.currentState===Pt.STRIKING_BELL&&(this.app.audio.playBell(),this.app.temple.spawnClickRipple(-5.6,-1.8),this.app.socket&&this.app.socket.emit("strikeBell"),this.app.showToast("Đại Hồng Chung ngân vang rền mười phương! 🙏 (+5 Công đức)"),this.app.showFloatingMerit("+5 Thỉnh Chuông",this.app.controller.position),this.app.showRitualStatus&&this.app.showRitualStatus("🔔","Đại Hồng Chung ngân vang rền mười phương! 🙏 (+5 Công đức)",!1),setTimeout(()=>{this.currentState===Pt.STRIKING_BELL&&(this.currentState=Pt.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),this.app.hideRitualStatus&&this.app.hideRitualStatus())},1500))},900)})}startIncense(){this.clearTimers();const t=this.app.temple.interactiveStations.incenseTable,e=this.app.temple.interactiveStations.incenseCandle,n=this.app.temple.interactiveStations.incenseBurner,s=this.app.temple.interactiveStations.incenseBow;this.currentState=Pt.INCENSE_FETCH,this.stateTimer=0,this.app.showToast("Bước 1/4: Đang bước lại Bàn Thỉnh Hương lấy 3 nén hương trầm..."),this.app.updateActionButtonsUI("incense"),this.app.showRitualStatus&&this.app.showRitualStatus("🪔","Bước 1/4: Đang bước lại Bàn Thỉnh Hương...",!0),this.navigateTo(t.x,t.z,t.rotY,()=>{this.app.avatarManager.setAction(this.app.myId,"takeIncense"),this.app.socket&&this.app.socket.emit("action",{action:"takeIncense"}),this.app.showToast("Đã thỉnh 3 nén hương trầm trên bàn lễ 🙏"),this.app.showRitualStatus&&this.app.showRitualStatus("🪔","Bước 2/4: Đang bước lại cây nến đỏ để châm hương...",!1),setTimeout(()=>{this.currentState===Pt.INCENSE_FETCH&&(this.currentState=Pt.INCENSE_LIGHT_CANDLE,this.navigateTo(e.x,e.z,e.rotY,()=>{this.app.avatarManager.setAction(this.app.myId,"lightCandle"),this.app.socket&&this.app.socket.emit("action",{action:"lightCandle"}),this.app.showToast("Đang châm lửa bén 3 nén tâm hương từ ngọn nến thiêng... 🕯️"),this.app.showRitualStatus&&this.app.showRitualStatus("🕯️","Đang châm lửa 3 nén hương bên ngọn nến...",!1),setTimeout(()=>{this.currentState===Pt.INCENSE_LIGHT_CANDLE&&(this.currentState=Pt.INCENSE_PLANT,this.app.showToast("Hương đã bén lửa đỏ! Tiến đến Lư Hương dâng cắm..."),this.app.showRitualStatus&&this.app.showRitualStatus("🪔","Bước 3/4: Đang bước lại Lư Đồng dâng và cắm hương...",!1),this.navigateTo(n.x,n.z,n.rotY,()=>{this.app.avatarManager.setAction(this.app.myId,"plantIncense"),this.app.socket&&this.app.socket.emit("action",{action:"plantIncense"}),this.app.showToast("Dâng hương ngang trán và cắm vào Lư Đồng Tam Bảo 🙏"),setTimeout(()=>{this.currentState===Pt.INCENSE_PLANT&&(this.app.temple.spawnClickRipple(0,-3.68),this.app.socket&&this.app.socket.emit("lightIncense"),this.currentState=Pt.INCENSE_BOWING,this.app.showToast("Đã cắm hương! Cung kính lùi lại đảnh lễ 3 lạy trước Phật Tổ 🙏"),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Bước 4/4: Đảnh lễ Tam Bảo: Lạy 1/3 🙏",!1),this.navigateTo(s.x,s.z,s.rotY,()=>{this.app.avatarManager.setAction(this.app.myId,"bow3Times"),this.app.socket&&this.app.socket.emit("action",{action:"bow3Times"}),this.app.showToast("Thành tâm chắp tay đảnh lễ Phật Bảo: Lạy 1/3 🙏"),this.app.playTempleChime(),setTimeout(()=>{this.currentState===Pt.INCENSE_BOWING&&(this.app.showToast("Thành tâm chắp tay đảnh lễ Chánh Pháp: Lạy 2/3 🙏"),this.app.playTempleChime(),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Bước 4/4: Đảnh lễ Tam Bảo: Lạy 2/3 🙏",!1))},2400),setTimeout(()=>{this.currentState===Pt.INCENSE_BOWING&&(this.app.showToast("Thành tâm chắp tay đảnh lễ Tăng Bảo: Lạy 3/3 🙏"),this.app.playTempleChime(),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Bước 4/4: Đảnh lễ Tam Bảo: Lạy 3/3 🙏",!1))},4800),setTimeout(()=>{this.currentState===Pt.INCENSE_BOWING&&(this.currentState=Pt.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),this.app.showToast("Thắp hương và đảnh lễ Tam Bảo viên mãn! Công đức vô lượng 🙏 (+5 Công đức)"),this.app.showFloatingMerit("+5 Thắp Hương & Đảnh Lễ",this.app.controller.position),this.app.hideRitualStatus&&this.app.hideRitualStatus())},7200)}))},2200)}))},1800)}))},1200)})}startFortune(){this.clearTimers();const t=this.app.temple.interactiveStations.fortuneTable;this.currentState=Pt.FORTUNE_WALK,this.stateTimer=0,this.app.showToast("Bước đến bàn xin xăm Quán Thế Âm..."),this.app.updateActionButtonsUI("fortune"),this.app.showRitualStatus&&this.app.showRitualStatus("🎋","Bước đến bàn xin xăm Quán Thế Âm...",!0),this.navigateTo(t.x,t.z,t.rotY,()=>{this.currentState=Pt.FORTUNE_SHAKE,this.app.avatarManager.setAction(this.app.myId,"shakeFortune"),this.app.socket&&this.app.socket.emit("action",{action:"shakeFortune"}),this.app.showToast("Thành tâm nâng ống xăm... Lắc xóc đều tay..."),this.app.playFortuneRattleAudio(),this.app.showRitualStatus&&this.app.showRitualStatus("🎋","Thành tâm nâng ống xăm... Lắc xóc đều tay...",!1),setTimeout(()=>{this.currentState===Pt.FORTUNE_SHAKE&&(this.currentState=Pt.FORTUNE_DROP,this.app.showRitualStatus&&this.app.showRitualStatus("🎋","Que xăm linh ứng đang rơi xuống sàn...",!1),this.app.temple.spawnDroppingFortuneStick(t.x,t.z-.8,()=>{this.app.audio.playWoodfish(),this.app.socket&&this.app.socket.emit("drawFortune"),this.app.showFloatingMerit("+2 Gieo Quẻ",this.app.controller.position),this.app.showRitualStatus&&this.app.showRitualStatus("📜","Quẻ xăm đã rơi! Đang mở thông điệp...",!1),this.currentState=Pt.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),setTimeout(()=>{this.app.hideRitualStatus&&this.app.hideRitualStatus()},1200)}))},2600)})}navigateTo(t,e,n,s){this.targetPoint={x:t,z:e},this.targetRotY=n,this.onArriveCallback=s}update(t){if(this.stateTimer+=t,this.targetPoint){const e=this.app.controller.position,n=this.targetPoint.x-e.x,s=this.targetPoint.z-e.z,r=Math.hypot(n,s);if(r>.12){const a=Math.min(r,4.8*t);e.x+=n/r*a,e.z+=s/r*a,this.app.controller.rotationY=Math.atan2(n,s),this.app.sendLocalPosition()}else{e.x=this.targetPoint.x,e.z=this.targetPoint.z,this.app.controller.rotationY=this.targetRotY,this.app.sendLocalPosition();const o=this.onArriveCallback;this.targetPoint=null,this.onArriveCallback=null,o&&o()}}}}class a0{constructor(t){this.app=t,this.socket=t.socket,this.boardSize=15,this.board=Array(15).fill(null).map(()=>Array(15).fill(0)),this.currentTurn=1,this.myColor=1,this.gameMode="ai",this.aiDifficulty="med",this.moveHistory=[],this.isGameOver=!1,this.activeOpponentId=null,this.activeOpponentName="Thiền Sư AI",this.turnTimer=null,this.timeLeft=45,this.pendingInviteFrom=null,this.selectedCreature="carp",this.initDOM()}initDOM(){this.buildChessBoard(),this.setupChessEvents(),this.setupFishEvents(),this.setupSocketEvents()}buildChessBoard(){const t=document.getElementById("chess-board-grid");if(!t)return;t.innerHTML="";const e=new Set(["3,3","11,3","7,7","3,11","11,11"]);for(let n=0;n<this.boardSize;n++)for(let s=0;s<this.boardSize;s++){const r=document.createElement("div");r.className="chess-cell",r.dataset.row=n,r.dataset.col=s,e.has(`${s},${n}`)&&r.classList.add("star-point"),r.addEventListener("click",()=>this.handleCellClick(n,s)),t.appendChild(r)}}setupChessEvents(){var r,o,a,c,l,h,d,f;const t=document.getElementById("tab-chess-ai"),e=document.getElementById("tab-chess-pvp"),n=document.getElementById("section-chess-ai"),s=document.getElementById("section-chess-pvp");t==null||t.addEventListener("click",()=>{t.classList.add("active"),e==null||e.classList.remove("active"),n&&(n.style.display="block"),s&&(s.style.display="none"),this.gameMode="ai",this.activeOpponentName="Thiền Sư AI",this.resetChessGame()}),e==null||e.addEventListener("click",()=>{e.classList.add("active"),t==null||t.classList.remove("active"),n&&(n.style.display="none"),s&&(s.style.display="block"),this.gameMode="pvp",this.refreshOnlinePlayersList()}),document.querySelectorAll(".diff-btn").forEach(m=>{m.addEventListener("click",()=>{document.querySelectorAll(".diff-btn").forEach(g=>g.classList.remove("active")),m.classList.add("active"),this.aiDifficulty=m.dataset.diff||"med"})}),(r=document.getElementById("btn-chess-reset"))==null||r.addEventListener("click",()=>this.resetChessGame()),(o=document.getElementById("btn-chess-undo"))==null||o.addEventListener("click",()=>this.undoMove()),(a=document.getElementById("btn-chess-hint"))==null||a.addEventListener("click",()=>this.showHint()),(c=document.getElementById("btn-close-chess"))==null||c.addEventListener("click",()=>this.closeChessModal()),(l=document.getElementById("btn-chess-resign"))==null||l.addEventListener("click",()=>this.resignGame()),(h=document.getElementById("btn-chess-draw"))==null||h.addEventListener("click",()=>this.requestDraw()),(d=document.getElementById("btn-accept-chess"))==null||d.addEventListener("click",()=>{this.pendingInviteFrom&&this.socket&&(this.socket.emit("chessRespondInvite",{inviterId:this.pendingInviteFrom.id,accept:!0}),this.startPvPMatch(this.pendingInviteFrom.id,this.pendingInviteFrom.name,2),this.pendingInviteFrom=null,document.getElementById("chess-invite-modal").style.display="none")}),(f=document.getElementById("btn-decline-chess"))==null||f.addEventListener("click",()=>{this.pendingInviteFrom&&this.socket&&(this.socket.emit("chessRespondInvite",{inviterId:this.pendingInviteFrom.id,accept:!1}),this.pendingInviteFrom=null,document.getElementById("chess-invite-modal").style.display="none")})}openChessModal(){const t=document.getElementById("chess-modal");if(t){if(t.style.display="flex",this.app.controller&&this.app.temple){const e=this.app.temple.interactiveStations.chess;this.app.controller.runToTarget(e.x,e.z,e.rotY)}this.gameMode==="ai"&&this.moveHistory.length===0?this.resetChessGame():this.gameMode==="pvp"&&this.refreshOnlinePlayersList()}}closeChessModal(){const t=document.getElementById("chess-modal");t&&(t.style.display="none"),this.stopTurnTimer()}resetChessGame(){this.board=Array(15).fill(null).map(()=>Array(15).fill(0)),this.currentTurn=1,this.isGameOver=!1,this.moveHistory=[],document.querySelectorAll(".chess-cell").forEach(e=>{const n=e.querySelector(".stone");n&&n.remove()});const t=document.getElementById("chess-hint-box");t&&(t.style.display="none"),this.updateStatusBar(),this.startTurnTimer()}startTurnTimer(){this.stopTurnTimer(),this.timeLeft=45;const t=document.getElementById("chess-timer");t&&(t.textContent=`${this.timeLeft}s`),this.turnTimer=setInterval(()=>{this.timeLeft--,t&&(t.textContent=`${this.timeLeft}s`),this.timeLeft<=0&&(this.stopTurnTimer(),this.gameMode==="ai"&&this.currentTurn===1&&(this.app.showToast("Hết thời gian lượt đi! Thiền Sư đi giúp bạn 1 nước chánh niệm."),this.makeAiMove()))},1e3)}stopTurnTimer(){this.turnTimer&&(clearInterval(this.turnTimer),this.turnTimer=null)}updateStatusBar(){const t=document.getElementById("chess-player-black"),e=document.getElementById("chess-player-white"),n=document.getElementById("name-black"),s=document.getElementById("name-white");this.gameMode==="ai"?(n&&(n.textContent=`${this.app.localPlayerName||"Bạn"} (Đen)`),s&&(s.textContent=`Thiền Sư AI (${this.aiDifficulty.toUpperCase()})`)):this.myColor===1?(n&&(n.textContent=`${this.app.localPlayerName||"Bạn"} (Đen)`),s&&(s.textContent=`${this.activeOpponentName} (Trắng)`)):(n&&(n.textContent=`${this.activeOpponentName} (Đen)`),s&&(s.textContent=`${this.app.localPlayerName||"Bạn"} (Trắng)`)),this.currentTurn===1?(t==null||t.classList.add("active"),e==null||e.classList.remove("active")):(e==null||e.classList.add("active"),t==null||t.classList.remove("active"))}handleCellClick(t,e){if(!this.isGameOver&&this.board[t][e]===0){if(this.gameMode==="ai"){if(this.currentTurn!==1)return;if(this.placeStone(t,e,1),this.checkWin(t,e,1)){this.endGame(1,"Bạn đã chiến thắng Thiền Sư AI!");return}this.currentTurn=2,this.updateStatusBar(),this.startTurnTimer(),setTimeout(()=>this.makeAiMove(),550)}else if(this.gameMode==="pvp"){if(this.currentTurn!==this.myColor){this.app.showToast("Chưa tới lượt đi của bạn! Hãy quán chiếu tâm nhẫn nại.");return}if(this.placeStone(t,e,this.myColor),this.socket&&this.activeOpponentId&&this.socket.emit("chessMove",{targetPlayerId:this.activeOpponentId,row:t,col:e,player:this.myColor}),this.checkWin(t,e,this.myColor)){this.endGame(this.myColor,"Bạn đã chiến thắng đồng tu!"),this.socket&&this.socket.emit("chessGameOver",{winnerId:this.socket.id,winnerName:this.app.localPlayerName,loserId:this.activeOpponentId});return}this.currentTurn=this.myColor===1?2:1,this.updateStatusBar(),this.startTurnTimer()}}}placeStone(t,e,n){this.board[t][e]=n,this.moveHistory.push({r:t,c:e,player:n}),document.querySelectorAll(".chess-cell .stone.last-move").forEach(r=>r.classList.remove("last-move"));const s=document.querySelector(`.chess-cell[data-row="${t}"][data-col="${e}"]`);if(s){const r=document.createElement("div");r.className=`stone ${n===1?"black":"white"} last-move`,s.appendChild(r)}this.app.audio&&this.app.audio.playChessClack&&this.app.audio.playChessClack()}undoMove(){if(!(this.isGameOver||this.moveHistory.length===0))if(this.gameMode==="ai"){const t=this.currentTurn===1?2:1;for(let e=0;e<t&&this.moveHistory.length!==0;e++){const n=this.moveHistory.pop();this.board[n.r][n.c]=0;const s=document.querySelector(`.chess-cell[data-row="${n.r}"][data-col="${n.c}"]`),r=s==null?void 0:s.querySelector(".stone");r&&r.remove()}this.currentTurn=1,this.updateStatusBar(),this.startTurnTimer(),this.app.showToast("Đã hối kỳ thành công! Hãy quán xét lại nước đi.")}else this.app.showToast("Chế độ thi đấu cùng đồng tu không hỗ trợ hối kỳ.")}showHint(){if(this.isGameOver||this.currentTurn!==1)return;const t=this.getBestMove(1),e=document.getElementById("chess-hint-box"),n=document.getElementById("chess-hint-text");if(t&&e&&n){const s=String.fromCharCode(65+t.c),r=15-t.r,o=[`Nước cờ tại [${s}${r}] mở ra thế trận liên hoàn ba quân, tăng sức ép công thủ.`,`Đặt quân tại [${s}${r}] ngăn chặn trước mũi tấn công tiềm ẩn của đối phương.`,`Thế cờ tại [${s}${r}] hòa hợp giữa tấn công và phòng thủ, tự tại an nhiên.`];n.textContent=o[Math.floor(Math.random()*o.length)],e.style.display="flex";const a=document.querySelector(`.chess-cell[data-row="${t.r}"][data-col="${t.c}"]`);a&&(a.style.boxShadow="inset 0 0 10px #ffd700",setTimeout(()=>a.style.boxShadow="",2500))}}makeAiMove(){if(this.isGameOver)return;const t=this.getBestMove(2);if(t){if(this.placeStone(t.r,t.c,2),this.checkWin(t.r,t.c,2)){this.endGame(2,"Thiền Sư AI đã giành chiến thắng!");return}this.currentTurn=1,this.updateStatusBar(),this.startTurnTimer()}}getBestMove(t){const e=t===1?2:1;let n=-1/0,s=null;const r=[];for(let o=0;o<15;o++)for(let a=0;a<15;a++)this.board[o][a]===0&&this.hasNeighbor(o,a)&&r.push({r:o,c:a});return r.length===0?{r:7,c:7}:(r.forEach(({r:o,c:a})=>{const c=this.evaluatePoint(o,a,t),l=this.evaluatePoint(o,a,e);let h=c*1.1+l*1;this.aiDifficulty==="easy"?h+=(Math.random()-.5)*50:this.aiDifficulty==="hard"&&(c>=1e4&&(h+=5e4),l>=1e4&&(h+=3e4)),h>n&&(n=h,s={r:o,c:a})}),s||r[Math.floor(Math.random()*r.length)])}hasNeighbor(t,e){for(let n=-2;n<=2;n++)for(let s=-2;s<=2;s++){if(n===0&&s===0)continue;const r=t+n,o=e+s;if(r>=0&&r<15&&o>=0&&o<15&&this.board[r][o]!==0)return!0}return!1}evaluatePoint(t,e,n){const s=[[0,1],[1,0],[1,1],[1,-1]];let r=0;return s.forEach(([o,a])=>{let c=1,l=0,h=t+o,d=e+a;for(;h>=0&&h<15&&d>=0&&d<15&&this.board[h][d]===n;)c++,h+=o,d+=a;h>=0&&h<15&&d>=0&&d<15&&this.board[h][d]===0&&l++;let f=t-o,m=e-a;for(;f>=0&&f<15&&m>=0&&m<15&&this.board[f][m]===n;)c++,f-=o,m-=a;f>=0&&f<15&&m>=0&&m<15&&this.board[f][m]===0&&l++,c>=5?r+=1e5:c===4?l===2?r+=1e4:l===1&&(r+=1e3):c===3?l===2?r+=1500:l===1&&(r+=200):c===2&&(l===2?r+=100:l===1&&(r+=20))}),r}checkWin(t,e,n){const s=[[0,1],[1,0],[1,1],[1,-1]];for(const[r,o]of s){let a=1;const c=[{r:t,c:e}];let l=t+r,h=e+o;for(;l>=0&&l<15&&h>=0&&h<15&&this.board[l][h]===n;)a++,c.push({r:l,c:h}),l+=r,h+=o;let d=t-r,f=e-o;for(;d>=0&&d<15&&f>=0&&f<15&&this.board[d][f]===n;)a++,c.push({r:d,c:f}),d-=r,f-=o;if(a>=5)return c.forEach(m=>{const g=document.querySelector(`.chess-cell[data-row="${m.r}"][data-col="${m.c}"]`),_=g==null?void 0:g.querySelector(".stone");_&&_.classList.add("win-stone")}),!0}return!1}endGame(t,e){var n;this.isGameOver=!0,this.stopTurnTimer(),this.app.audio&&this.app.audio.playFanfare&&this.app.audio.playFanfare(),t===1||this.gameMode==="pvp"&&t===this.myColor?(this.app.showFloatingMerit("+50 Công Đức Kỳ Vương 👑",(n=this.app.controller)==null?void 0:n.position),this.app.showToast(`🎉 CHÚC MỪNG: ${e} (+50 Công Đức)`)):this.app.showToast(`🙏 KẾT THÚC: ${e}`)}refreshOnlinePlayersList(){var n;const t=document.getElementById("chess-players-list");if(!t)return;t.innerHTML="";const e=(n=this.app.avatarManager)==null?void 0:n.avatars;if(!e||e.size<=1){t.innerHTML='<div class="empty-list-notice">Chưa có đồng tu nào khác trong phòng. Mời bạn chuyển tab Tự Học hoặc rủ bạn bè vào cùng phòng!</div>';return}e.forEach((s,r)=>{if(r===this.app.myId)return;const o=document.createElement("div");o.className="player-item-row",o.innerHTML=`
        <span class="p-name">🧘 ${s.name||"Đồng tu"}</span>
        <button class="invite-btn" data-id="${r}">Mời Tỉ Thí ⚔️</button>
      `,o.querySelector(".invite-btn").addEventListener("click",()=>{this.sendChessInvite(r,s.name)}),t.appendChild(o)})}sendChessInvite(t,e){this.socket&&(this.socket.emit("chessInvite",{targetPlayerId:t}),this.app.showToast(`Đã gửi lời mời giao lưu cờ tới [${e}]... Đang chờ hồi đáp!`))}startPvPMatch(t,e,n){this.gameMode="pvp",this.activeOpponentId=t,this.activeOpponentName=e,this.myColor=n,this.currentTurn=1;const s=document.getElementById("pvp-match-controls");s&&(s.style.display="flex"),this.resetChessGame(),this.openChessModal(),this.app.showToast(`Trận cờ với đồng tu [${e}] đã bắt đầu! Bạn cầm quân ${n===1?"ĐEN (đi trước)":"TRẮNG (đi sau)"}.`)}resignGame(){!this.activeOpponentId||this.isGameOver||confirm("Bạn có chắc chắn muốn xin nhận thua ván cờ này để học hỏi không?")&&(this.socket&&this.socket.emit("chessResign",{targetPlayerId:this.activeOpponentId}),this.endGame(this.myColor===1?2:1,"Bạn đã xin nhận thua. Tâm nhẫn nại là cội nguồn của trí tuệ!"))}requestDraw(){!this.activeOpponentId||this.isGameOver||this.socket&&(this.socket.emit("chessDrawRequest",{targetPlayerId:this.activeOpponentId}),this.app.showToast("Đã gửi lời cầu hòa tới đồng tu đối thủ..."))}setupFishEvents(){var t,e;document.querySelectorAll(".creature-card").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".creature-card").forEach(s=>s.classList.remove("selected")),n.classList.add("selected"),this.selectedCreature=n.dataset.type||"carp"})}),document.querySelectorAll(".prayer-chip").forEach(n=>{n.addEventListener("click",()=>{const s=document.getElementById("input-prayer");s&&(s.value=n.textContent.trim())})}),(t=document.getElementById("btn-close-fish"))==null||t.addEventListener("click",()=>this.closeFishModal()),(e=document.getElementById("btn-do-release"))==null||e.addEventListener("click",()=>this.executeRelease())}openFishReleaseModal(){const t=document.getElementById("fish-modal");if(t&&(t.style.display="flex",this.app.controller&&this.app.temple)){const e=this.app.temple.interactiveStations.pond;this.app.controller.runToTarget(e.x,e.z,e.rotY)}}closeFishModal(){const t=document.getElementById("fish-modal");t&&(t.style.display="none")}executeRelease(){var s;const t=document.getElementById("input-prayer"),e=((s=t==null?void 0:t.value)==null?void 0:s.trim())||"Cầu muôn loài an lạc, deadline không quạu!",n=this.selectedCreature||"carp";this.app.audio&&this.app.audio.playWaterSplash&&this.app.audio.playWaterSplash(),this.app.temple&&(n==="lantern"?this.app.temple.spawnFloatingLantern(e):this.app.temple.spawnReleasedFish(n,e)),this.socket&&this.socket.emit("releaseCreature",{creatureType:n,prayerText:e}),this.closeFishModal()}drinkTea(){if(this.app.controller&&this.app.temple){const t=this.app.temple.interactiveStations.tea;this.app.controller.runToTarget(t.x,t.z,t.rotY,()=>{this.app.audio&&this.app.audio.playTeaPour&&this.app.audio.playTeaPour(),this.socket&&this.socket.emit("drinkTea"),this.app.showToast("Đang thưởng thức chén trà sen ấm áp... Tâm an vạn sự an! 🍵")})}}setupSocketEvents(){this.socket&&(this.socket.on("chessInviteReceived",({inviterId:t,inviterName:e})=>{this.pendingInviteFrom={id:t,name:e};const n=document.getElementById("chess-invite-modal"),s=document.getElementById("chess-invite-text");s&&(s.textContent=`Đồng tu [${e}] kính mời bạn giao lưu một ván cờ chánh niệm! Bạn có sẵn lòng không?`),n&&(n.style.display="flex"),this.app.audio&&this.app.audio.playBell&&this.app.audio.playBell()}),this.socket.on("chessInviteResponse",({opponentId:t,opponentName:e,accept:n})=>{n?this.startPvPMatch(t,e,1):this.app.showToast(`Đồng tu [${e}] hẹn bạn dịp khác giao lưu kỳ đạo.`)}),this.socket.on("chessMoveMade",({row:t,col:e,player:n})=>{if(this.gameMode==="pvp"&&!this.isGameOver){if(this.placeStone(t,e,n),this.checkWin(t,e,n)){this.endGame(n,`Đồng tu [${this.activeOpponentName}] đã giành chiến thắng!`);return}this.currentTurn=this.myColor,this.updateStatusBar(),this.startTurnTimer()}}),this.socket.on("chessOpponentResigned",()=>{this.gameMode==="pvp"&&!this.isGameOver&&this.endGame(this.myColor,`Đồng tu [${this.activeOpponentName}] đã xin nhận thua!`)}),this.socket.on("chessDrawRequested",({fromId:t,fromName:e})=>{confirm(`Đồng tu [${e}] đề nghị hòa ván cờ. Bạn có đồng ý không?`)?(this.socket.emit("chessDrawResponse",{targetPlayerId:t,accept:!0}),this.endGame(0,"Hai bên đồng ý hòa cờ trong chánh niệm!")):this.socket.emit("chessDrawResponse",{targetPlayerId:t,accept:!1})}),this.socket.on("chessDrawResponded",({accept:t})=>{t?this.endGame(0,"Hai bên đồng ý hòa cờ trong chánh niệm!"):this.app.showToast("Đối thủ từ chối lời đề nghị hòa cờ. Ván cờ tiếp tục!")}),this.socket.on("creatureReleased",t=>{var e,n;this.app.temple&&t.playerId!==this.socket.id&&(t.creatureType==="lantern"?this.app.temple.spawnFloatingLantern(t.prayerText):this.app.temple.spawnReleasedFish(t.creatureType,t.prayerText)),this.app.showFloatingMerit(`+${t.earnedMerit} Phóng Sinh 🐟`,(e=this.app.controller)==null?void 0:e.position),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),(n=this.app.avatarManager)==null||n.updateMerit(t.playerId,t.playerMerit)}),this.socket.on("teaDrunk",t=>{var e,n;this.app.showFloatingMerit("+5 Trà Đạo 🍵",(e=this.app.controller)==null?void 0:e.position),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),(n=this.app.avatarManager)==null||n.updateMerit(t.playerId,t.playerMerit)}))}}const xs=["Thích thì nhích","Thích ăn chực","Thích đủ thứ","Thích tạo nghiệp","Thích ngủ nướng","Thích ăn vặt","Thích nhiều chuyện","Thích cúng dường","Thích an lạc","Thích buông bỏ","Thích tĩnh tâm","Thích trà đạo","Thích tàu hủ","Thích ăn nhậu","Thích trúng số","Thích thì chìu","Thích im lặng","Thích drama","Thích sống ảo","Thích vô đây"];class c0{constructor(){this.canvasContainer=document.getElementById("canvas-container"),this.css2dContainer=document.getElementById("css2d-container"),this.socket=null,this.myId=null,this.myName=xs[Math.floor(Math.random()*xs.length)],this.myRoomId="dai-hung-bao-dien",this.currentAction="stand",this.selectedRobeColor="#E69500",this.audio=xe,this.fsm=null,this.zenGames=null,this.initThree(),this.fsm=new o0(this),this.controller.initVirtualDpad(),this.initUI(),this.initMusicControls(),this.autoJoinTemple()}initThree(){this.scene=new im,this.camera=new Oe(50,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,3,10),this.renderer=new nm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=rc,this.renderer.toneMapping=ac,this.renderer.toneMappingExposure=1.18,this.canvasContainer.appendChild(this.renderer.domElement),this.css2dRenderer=new hm,this.css2dRenderer.setSize(window.innerWidth,window.innerHeight),this.css2dRenderer.domElement.style.position="absolute",this.css2dRenderer.domElement.style.top="0",this.css2dRenderer.domElement.style.left="0",this.css2dRenderer.domElement.style.pointerEvents="none",this.css2dContainer.appendChild(this.css2dRenderer.domElement),this.temple=new n0(this.scene),this.avatarManager=new i0(this.scene),this.controller=new s0(this.camera,this.renderer.domElement,t=>{this.socket&&this.myId&&this.socket.emit("move",t)},this.temple,this),window.addEventListener("resize",()=>this.onWindowResize()),this.clock=new kc,this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.css2dRenderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1);this.temple.update(t),this.avatarManager.update(t),this.fsm&&this.fsm.update(t),this.controller.update(t,this.avatarManager,this.myId),this.renderer.render(this.scene,this.camera),this.css2dRenderer.render(this.scene,this.camera)}initMusicControls(){const t=document.getElementById("btn-toggle-music"),e=document.getElementById("music-state-text"),n=document.getElementById("audio-wave"),s=document.getElementById("select-track"),r=document.getElementById("volume-slider"),o=c=>{c?(t.classList.add("playing"),e.textContent="Đang Gõ Mõ",n.classList.add("active")):(t.classList.remove("playing"),e.textContent="Bật Mõ Thiền",n.classList.remove("active"))};t.addEventListener("click",()=>{const c=xe.toggleMusic();o(c)}),s.addEventListener("change",c=>{xe.selectTrack(c.target.value),xe.isPlaying||xe.startMusic(),o(!0)}),r.addEventListener("input",c=>{const l=parseFloat(c.target.value)/100;xe.setVolume(l)}),this.updateMusicUI=o;const a=()=>{xe.isPlaying||(xe.startMusic(),o(!0)),window.removeEventListener("pointerdown",a),window.removeEventListener("keydown",a)};window.addEventListener("pointerdown",a),window.addEventListener("keydown",a)}initUI(){var x,R,T,C,I,S,y,P,z,k,q,$,X,j;const e=new URLSearchParams(window.location.search).get("room");if(e){this.myRoomId=e;const U=document.getElementById("input-room");U&&(U.value=e)}document.getElementById("header-my-name").textContent=this.myName,document.getElementById("input-name").value=this.myName,document.getElementById("header-avatar-dot").style.background=this.selectedRobeColor;const n=document.getElementById("cam-view-hall"),s=document.getElementById("cam-view-buddha"),r=document.getElementById("cam-view-follow"),o=U=>{[n,s,r].forEach(nt=>{nt&&nt.classList.remove("active")}),U&&U.classList.add("active")};n&&n.addEventListener("click",()=>{this.controller.setCameraMainHall(),o(n),this.showToast("🏛️ Góc nhìn Chánh Điện uy nghiêm!")}),s&&s.addEventListener("click",()=>{this.controller.setCameraBuddhaCloseUp(),o(s),this.showToast("🪷 Chiêm bái tôn tượng Đức Bổn Sư Thích Ca!")}),r&&r.addEventListener("click",()=>{this.controller.setCameraFollow(),o(r),this.showToast("🧘 Góc nhìn theo sau nhân vật!")});const a=document.getElementById("btn-cancel-ritual");a&&a.addEventListener("click",()=>{this.fsm.cancelRitual()});const c=document.getElementById("profile-modal");(x=document.getElementById("btn-open-profile"))==null||x.addEventListener("click",()=>{c&&(c.style.display="flex")}),(R=document.getElementById("btn-close-profile"))==null||R.addEventListener("click",()=>{c&&(c.style.display="none")}),c==null||c.addEventListener("click",U=>{U.target===c&&(c.style.display="none")});const l=document.getElementById("fortune-modal");(T=document.getElementById("btn-close-fortune-x"))==null||T.addEventListener("click",()=>{l&&(l.style.display="none")}),l==null||l.addEventListener("click",U=>{U.target===l&&(l.style.display="none")}),(C=document.getElementById("btn-save-profile"))==null||C.addEventListener("click",()=>{const U=document.getElementById("input-name").value.trim(),nt=document.getElementById("input-room").value.trim()||"dai-hung-bao-dien";U&&(this.myName=U),document.getElementById("header-my-name").textContent=this.myName,document.getElementById("header-avatar-dot").style.background=this.selectedRobeColor,this.myId&&this.avatarManager.updateAvatarProfile(this.myId,{name:this.myName,robeColor:this.selectedRobeColor}),c&&(c.style.display="none"),nt!==this.myRoomId?window.location.search=`?room=${encodeURIComponent(nt)}`:this.socket&&this.socket.emit("updateProfile",{name:this.myName,robeColor:this.selectedRobeColor}),this.showToast(`✨ Đã cập nhật pháp danh: ${this.myName}`)});const h=document.getElementById("btn-random-name"),d=document.getElementById("input-name");h.addEventListener("click",()=>{const U=xs[Math.floor(Math.random()*xs.length)];d.value=U}),document.querySelectorAll(".name-tag").forEach(U=>{U.addEventListener("click",()=>{d.value=U.textContent})});const f=document.querySelectorAll(".robe-color-opt");f.forEach(U=>{U.addEventListener("click",()=>{f.forEach(at=>at.classList.remove("selected")),U.classList.add("selected"),this.selectedRobeColor=U.getAttribute("data-color");const nt=document.getElementById("avatar-preview-badge");nt&&(nt.style.borderColor=this.selectedRobeColor)})});const m=document.getElementById("btn-sound");m.addEventListener("click",()=>{if(xe.sfxGain){const U=xe.sfxGain.gain.value===0;xe.sfxGain.gain.setValueAtTime(U?.85:0,xe.ctx.currentTime),m.textContent=U?"🔔":"🔕",m.title=U?"Tắt Hiệu Ứng":"Bật Hiệu Ứng"}}),document.getElementById("btn-share").addEventListener("click",()=>{const U=new URL(window.location.href);U.searchParams.set("room",this.myRoomId),navigator.clipboard.writeText(U.href).then(()=>{this.showToast("🔗 Đã copy link phòng! Gửi cho bạn bè để cùng vào chùa.")}).catch(()=>{this.showToast(`Link phòng: ${U.href}`)})});const _=document.getElementById("chat-panel-toggle"),p=document.getElementById("chat-panel"),u=document.getElementById("chat-toggle-icon");_&&p&&_.addEventListener("click",()=>{p.classList.toggle("collapsed"),u&&(u.textContent=p.classList.contains("collapsed")?"▲":"▼")});const E=document.getElementById("chat-form"),w=document.getElementById("chat-input");E&&w&&E.addEventListener("submit",U=>{U.preventDefault();const nt=w.value.trim();!nt||!this.socket||(this.socket.emit("chat",{text:nt}),w.value="")}),document.querySelectorAll(".preset-chip").forEach(U=>{U.addEventListener("click",()=>{const nt=U.getAttribute("data-msg");nt&&this.socket&&this.socket.emit("chat",{text:nt})})}),(I=document.getElementById("act-sit"))==null||I.addEventListener("click",()=>this.fsm.startMeditation()),(S=document.getElementById("act-bow"))==null||S.addEventListener("click",()=>this.fsm.startBowing()),(y=document.getElementById("act-woodfish"))==null||y.addEventListener("click",()=>this.fsm.startWoodfish()),(P=document.getElementById("act-bell"))==null||P.addEventListener("click",()=>this.fsm.startBell()),(z=document.getElementById("act-incense"))==null||z.addEventListener("click",()=>this.fsm.startIncense()),(k=document.getElementById("act-fortune"))==null||k.addEventListener("click",()=>this.fsm.startFortune()),(q=document.getElementById("act-fish"))==null||q.addEventListener("click",()=>this.openFishReleaseModal()),($=document.getElementById("act-chess"))==null||$.addEventListener("click",()=>this.openChessModal()),(X=document.getElementById("act-tea"))==null||X.addEventListener("click",()=>this.drinkTea()),window.addEventListener("keydown",U=>{if(!["input","textarea","select"].includes(document.activeElement.tagName.toLowerCase()))switch(U.key){case"1":this.fsm.startMeditation();break;case"2":this.fsm.startBowing();break;case"3":this.fsm.startWoodfish();break;case"4":this.fsm.startBell();break;case"5":this.fsm.startIncense();break;case"6":this.fsm.startFortune();break;case"7":this.openFishReleaseModal();break;case"8":this.openChessModal();break;case"9":this.drinkTea();break;case"Escape":this.fsm.cancelRitual(),document.getElementById("fortune-modal").style.display="none",document.getElementById("profile-modal").style.display="none",document.getElementById("chess-modal").style.display="none",document.getElementById("fish-modal").style.display="none",document.getElementById("chess-invite-modal").style.display="none";break;case"Enter":U.preventDefault(),w.focus();break}}),(j=document.getElementById("btn-close-fortune"))==null||j.addEventListener("click",()=>{const U=document.getElementById("fortune-modal");U&&(U.style.display="none")}),this.controller&&(this.controller.onCancelCallback=()=>{this.fsm.cancelRitual()})}openChessModal(){this.zenGames&&this.zenGames.openChessModal()}openFishReleaseModal(){this.zenGames&&this.zenGames.openFishReleaseModal()}drinkTea(){this.zenGames&&this.zenGames.drinkTea()}sendLocalPosition(){this.socket&&this.myId&&(this.socket.emit("move",{x:this.controller.position.x,y:this.controller.position.y,z:this.controller.position.z,rotationY:this.controller.rotationY}),this.avatarManager.updateAvatarData(this.myId,{x:this.controller.position.x,y:this.controller.position.y,z:this.controller.position.z,rotationY:this.controller.rotationY}))}updateActionButtonsUI(t){this.currentAction=t,["sit","bow","woodfish","bell","incense","fortune","fish","chess","tea"].forEach(e=>{const n=document.getElementById(`act-${e}`);n&&(t===e||e==="bow"&&t==="bow3Times"||e==="woodfish"&&t==="strikeWoodfish"?n.classList.add("active"):n.classList.remove("active"))})}showRitualStatus(t,e,n=!0){const s=document.getElementById("ritual-status-banner"),r=document.getElementById("ritual-status-icon"),o=document.getElementById("ritual-status-text"),a=document.getElementById("btn-cancel-ritual");s&&r&&o&&(r.textContent=t,o.textContent=e,a&&(a.style.display=n?"inline-block":"none"),s.style.display="flex")}hideRitualStatus(){const t=document.getElementById("ritual-status-banner");t&&(t.style.display="none")}playTempleChime(){xe.playGentleBellAccent()}showFloatingMerit(t,e){if(!this.camera)return;const n=e?e.clone():this.controller.position.clone();if(n.y+=2.1,n.project(this.camera),n.z>1)return;const s=(n.x*.5+.5)*window.innerWidth,r=(-n.y*.5+.5)*window.innerHeight,o=document.createElement("div");o.className="floating-merit-badge",o.textContent=t,o.style.left=`${s}px`,o.style.top=`${r}px`,document.body.appendChild(o),setTimeout(()=>o.remove(),1300)}playFortuneRattleAudio(){if(!xe||!xe.ctx)return;const t=xe.ctx;for(let e=0;e<7;e++)setTimeout(()=>{if(!t)return;const n=t.currentTime,s=t.createOscillator(),r=t.createGain();s.type="triangle",s.frequency.setValueAtTime(620+Math.random()*260,n),s.frequency.exponentialRampToValueAtTime(200,n+.04),r.gain.setValueAtTime(.3,n),r.gain.exponentialRampToValueAtTime(.001,n+.05),s.connect(r),r.connect(t.destination),s.start(n),s.stop(n+.05)},e*340)}setAction(t){this.currentAction=t,this.updateActionButtonsUI(t),this.avatarManager&&this.myId&&this.avatarManager.setAction(this.myId,this.currentAction),this.socket&&this.socket.emit("action",{action:this.currentAction})}autoJoinTemple(){this.socket=Rs({transports:["websocket","polling"]}),this.zenGames=new a0(this),this.socket.on("connect",()=>{this.socket.emit("join",{name:this.myName,roomId:this.myRoomId,robeColor:this.selectedRobeColor})}),this.socket.on("initRoom",t=>{this.myId=t.yourId,this.avatarManager.setLocalPlayerId(this.myId),document.getElementById("room-name-display").textContent=t.roomName||"Chùa Vừa Làm Vừa Tu",document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),document.getElementById("online-count-display").textContent=t.players.length,t.players.forEach(e=>{this.avatarManager.createAvatar(e),e.id===this.myId&&this.controller.setPosition(e.x,e.y,e.z,e.rotY),e.action&&this.avatarManager.setAction(e.id,e.action)}),t.chatHistory&&t.chatHistory.forEach(e=>this.appendChatMessage(e)),this.showToast(`🙏 A Di Đà Phật! Đã vào Chùa Vừa Làm Vừa Tu với pháp danh: [${this.myName}]`)}),this.socket.on("playerJoined",t=>{this.avatarManager.createAvatar(t),this.updateOnlineCount(1)}),this.socket.on("playerProfileUpdated",t=>{this.avatarManager.updateAvatarProfile(t.id,t),t.id===this.myId&&(t.name&&(this.myName=t.name,document.getElementById("header-my-name").textContent=this.myName),t.robeColor&&(this.selectedRobeColor=t.robeColor,document.getElementById("header-avatar-dot").style.background=t.robeColor))}),this.socket.on("playerMoved",t=>{this.avatarManager.updateAvatarData(t.id,t)}),this.socket.on("playerActionChanged",({id:t,action:e})=>{this.avatarManager.setAction(t,e)}),this.socket.on("newChatMessage",t=>{this.appendChatMessage(t)}),this.socket.on("showBubble",({playerId:t,text:e,duration:n})=>{this.avatarManager.showBubble(t,e,n)}),this.socket.on("woodfishStruck",t=>{xe.playWoodfish(),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),this.avatarManager.updateMerit(t.playerId,t.playerMerit),this.triggerFloatingMerit("+1 Công Đức 🪷",t.playerId)}),this.socket.on("bellStruck",t=>{xe.playBell(),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),this.avatarManager.updateMerit(t.playerId,t.playerMerit),this.triggerFloatingMerit("+5 Công Đức 🔔",t.playerId)}),this.socket.on("incenseLit",t=>{xe.playBell(),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),this.triggerFloatingMerit("+3 Công Đức 🪔",t.playerId)}),this.socket.on("fortuneResult",t=>{xe.playBell(),this.showFortuneModal(t)}),this.socket.on("playerLeft",t=>{this.avatarManager.removeAvatar(t.id),this.updateOnlineCount(-1),this.appendChatMessage({senderName:"Chính Điện",text:`Đồng tu [${t.name}] đã rời bước. Chúc vạn sự bình yên!`})})}appendChatMessage(t){const e=document.getElementById("chat-messages");if(!e)return;const n=document.createElement("div");t.senderId==="system"?(n.className="chat-msg system",n.textContent=t.text):(n.className="chat-msg",n.innerHTML=`<span class="sender">${this.avatarManager.escapeHtml(t.senderName)}:</span> ${this.avatarManager.escapeHtml(t.text)}`),e.appendChild(n),e.scrollTop=e.scrollHeight}showFortuneModal(t){document.getElementById("fortune-title").textContent=t.title,document.getElementById("fortune-poem").textContent=t.poem,document.getElementById("fortune-advice").textContent=`💡 Lời Phật dạy: ${t.advice}`,document.getElementById("fortune-modal").style.display="flex"}triggerFloatingMerit(t,e){const n=this.avatarManager.avatars.get(e);let s=window.innerWidth/2,r=window.innerHeight/2;if(n){const a=n.group.position.clone();a.y+=2.25,a.project(this.camera),s=(a.x*.5+.5)*window.innerWidth,r=(-(a.y*.5)+.5)*window.innerHeight}const o=document.createElement("div");o.className="floating-merit",o.textContent=t,o.style.left=`${s}px`,o.style.top=`${r}px`,document.body.appendChild(o),setTimeout(()=>o.remove(),1200)}showToast(t){const e=document.createElement("div");e.className="toast-notice",e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.remove(),2800)}updateOnlineCount(t){const e=document.getElementById("online-count-display"),n=parseInt(e.textContent)||1;e.textContent=Math.max(1,n+t)}}window.addEventListener("DOMContentLoaded",()=>{new c0});
