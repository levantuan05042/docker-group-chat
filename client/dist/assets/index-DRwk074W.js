(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const go="170",sl=0,Wo=1,rl=2,rc=1,oc=2,gn=3,Dn=0,De=1,Ze=2,In=0,mi=1,Is=2,Xo=3,qo=4,ol=5,Xn=100,al=101,cl=102,ll=103,hl=104,ul=200,dl=201,fl=202,pl=203,Sr=204,wr=205,ml=206,gl=207,_l=208,vl=209,xl=210,yl=211,Ml=212,Sl=213,wl=214,Er=0,Tr=1,br=2,vi=3,Ar=4,Cr=5,Rr=6,Pr=7,ac=0,El=1,Tl=2,Ln=0,bl=1,Al=2,Cl=3,cc=4,Rl=5,Pl=6,Il=7,lc=300,xi=301,yi=302,Ir=303,Lr=304,Ns=306,nn=1e3,Yn=1001,Dr=1002,Qe=1003,Ll=1004,Ki=1005,rn=1006,Gs=1007,Kn=1008,yn=1009,hc=1010,uc=1011,Gi=1012,_o=1013,$n=1014,_n=1015,Hi=1016,vo=1017,xo=1018,Mi=1020,dc=35902,fc=1021,pc=1022,Je=1023,mc=1024,gc=1025,gi=1026,Si=1027,_c=1028,yo=1029,vc=1030,Mo=1031,So=1033,ys=33776,Ms=33777,Ss=33778,ws=33779,Nr=35840,Ur=35841,Fr=35842,Br=35843,Or=36196,kr=37492,zr=37496,Gr=37808,Hr=37809,Vr=37810,Wr=37811,Xr=37812,qr=37813,Yr=37814,Kr=37815,$r=37816,Zr=37817,jr=37818,Jr=37819,Qr=37820,to=37821,Es=36492,eo=36494,no=36495,xc=36283,io=36284,so=36285,ro=36286,Dl=3200,Nl=3201,yc=0,Ul=1,Pn="",ge="srgb",Ei="srgb-linear",Us="linear",se="srgb",Jn=7680,Yo=519,Fl=512,Bl=513,Ol=514,Mc=515,kl=516,zl=517,Gl=518,Hl=519,Ko=35044,$o="300 es",vn=2e3,Ls=2001;class Ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,oo=180/Math.PI;function Vi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Le(s,t,e){return Math.max(t,Math.min(e,s))}function Vl(s,t){return(s%t+t)%t}function Vs(s,t,e){return(1-e)*s+e*t}function Ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(t=0,e=0){Yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,r,o,a,c,l){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=i[0],m=i[3],d=i[6],M=i[1],x=i[4],_=i[7],R=i[2],b=i[5],C=i[8];return r[0]=o*v+a*M+c*R,r[3]=o*m+a*x+c*b,r[6]=o*d+a*_+c*C,r[1]=l*v+h*M+u*R,r[4]=l*m+h*x+u*b,r[7]=l*d+h*_+u*C,r[2]=f*v+p*M+g*R,r[5]=f*m+p*x+g*b,r[8]=f*d+p*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=f*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ws.makeScale(t,e)),this}rotate(t){return this.premultiply(Ws.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ws.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ws=new Vt;function Sc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wl(){const s=Ds("canvas");return s.style.display="block",s}const Zo={};function Oi(s){s in Zo||(Zo[s]=!0,console.warn(s))}function Xl(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ql(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yl(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pn?Us:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _i(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const jo=[.64,.33,.3,.6,.15,.06],Jo=[.2126,.7152,.0722],Qo=[.3127,.329],ta=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ea=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[Ei]:{primaries:jo,whitePoint:Qo,transfer:Us,toXYZ:ta,fromXYZ:ea,luminanceCoefficients:Jo,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:jo,whitePoint:Qo,transfer:se,toXYZ:ta,fromXYZ:ea,luminanceCoefficients:Jo,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});let Qn;class Kl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=Ds("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=xn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $l=0;class wc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xs(i[o].image)):r.push(Xs(i[o]))}else r=Xs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zl=0;class Re extends Ti{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Yn,i=Yn,r=rn,o=Kn,a=Je,c=yn,l=Re.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Vi(),this.name="",this.source=new wc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nn:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case Dr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nn:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case Dr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=lc;Re.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,_=(p+1)/2,R=(d+1)/2,b=(h+f)/4,C=(u+v)/4,I=(g+m)/4;return x>_&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=C/n):_>R?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=b/i,r=I/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=I/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(f-h)/M,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jl extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Re(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends jl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ec extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jl extends Re{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*v,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const R=Math.sqrt(x),b=Math.atan2(R,d*M);m=Math.sin(m*b)/R,a=Math.sin(a*b)/R}const _=a*M;if(c=c*m+f*_,l=l*m+p*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(na.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(na.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qs.copy(this).projectOnVector(t),this.sub(qs)}reflect(t){return this.sub(qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new N,na=new Wi;class Xi{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(r,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$i.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(t.matrixWorld),this.union($i)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),Zi.subVectors(this.max,Li),ti.subVectors(t.a,Li),ei.subVectors(t.b,Li),ni.subVectors(t.c,Li),wn.subVectors(ei,ti),En.subVectors(ni,ei),Fn.subVectors(ti,ni);let e=[0,-wn.z,wn.y,0,-En.z,En.y,0,-Fn.z,Fn.y,wn.z,0,-wn.x,En.z,0,-En.x,Fn.z,0,-Fn.x,-wn.y,wn.x,0,-En.y,En.x,0,-Fn.y,Fn.x,0];return!Ys(e,ti,ei,ni,Zi)||(e=[1,0,0,0,1,0,0,0,1],!Ys(e,ti,ei,ni,Zi))?!1:(ji.crossVectors(wn,En),e=[ji.x,ji.y,ji.z],Ys(e,ti,ei,ni,Zi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new N,new N,new N,new N,new N,new N,new N,new N],Xe=new N,$i=new Xi,ti=new N,ei=new N,ni=new N,wn=new N,En=new N,Fn=new N,Li=new N,Zi=new N,ji=new N,Bn=new N;function Ys(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Bn.fromArray(s,r);const a=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=t.dot(Bn),l=e.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ql=new Xi,Di=new N,Ks=new N;class Fs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ql.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);const e=Di.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add(Ks)),this.expandByPoint(Di.copy(t.center).sub(Ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new N,$s=new N,Ji=new N,Tn=new N,Zs=new N,Qi=new N,js=new N;class wo{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$s.copy(t).add(e).multiplyScalar(.5),Ji.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub($s);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ji),a=Tn.dot(this.direction),c=-Tn.dot(Ji),l=Tn.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($s).addScaledVector(Ji,f),p}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,r){Zs.subVectors(e,t),Qi.subVectors(n,t),js.crossVectors(Zs,Qi);let o=this.direction.dot(js),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Tn.subVectors(this.origin,t);const c=a*this.direction.dot(Qi.crossVectors(Tn,Qi));if(c<0)return null;const l=a*this.direction.dot(Zs.cross(Tn));if(l<0||c+l>o)return null;const h=-a*Tn.dot(js);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,r,o,a,c,l,h,u,f,p,g,v,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,p,g,v,m)}set(t,e,n,i,r,o,a,c,l,h,u,f,p,g,v,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),o=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,v=l*u;e[0]=f+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,v=l*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(th,t,eh)}lookAt(t,e,n){const i=this.elements;return Fe.subVectors(t,e),Fe.lengthSq()===0&&(Fe.z=1),Fe.normalize(),bn.crossVectors(n,Fe),bn.lengthSq()===0&&(Math.abs(n.z)===1?Fe.x+=1e-4:Fe.z+=1e-4,Fe.normalize(),bn.crossVectors(n,Fe)),bn.normalize(),ts.crossVectors(Fe,bn),i[0]=bn.x,i[4]=ts.x,i[8]=Fe.x,i[1]=bn.y,i[5]=ts.y,i[9]=Fe.y,i[2]=bn.z,i[6]=ts.z,i[10]=Fe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],M=n[3],x=n[7],_=n[11],R=n[15],b=i[0],C=i[4],I=i[8],T=i[12],S=i[1],P=i[5],k=i[9],O=i[13],V=i[2],X=i[6],H=i[10],J=i[14],W=i[3],$=i[7],st=i[11],ht=i[15];return r[0]=o*b+a*S+c*V+l*W,r[4]=o*C+a*P+c*X+l*$,r[8]=o*I+a*k+c*H+l*st,r[12]=o*T+a*O+c*J+l*ht,r[1]=h*b+u*S+f*V+p*W,r[5]=h*C+u*P+f*X+p*$,r[9]=h*I+u*k+f*H+p*st,r[13]=h*T+u*O+f*J+p*ht,r[2]=g*b+v*S+m*V+d*W,r[6]=g*C+v*P+m*X+d*$,r[10]=g*I+v*k+m*H+d*st,r[14]=g*T+v*O+m*J+d*ht,r[3]=M*b+x*S+_*V+R*W,r[7]=M*C+x*P+_*X+R*$,r[11]=M*I+x*k+_*H+R*st,r[15]=M*T+x*O+_*J+R*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*p-n*c*p)+v*(+e*c*p-e*l*f+r*o*f-i*o*p+i*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+d*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],M=u*m*l-v*f*l+v*c*p-a*m*p-u*c*d+a*f*d,x=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,_=h*v*l-g*u*l+g*a*p-o*v*p-h*a*d+o*u*d,R=g*u*c-h*v*c-g*a*f+o*v*f+h*a*m-o*u*m,b=e*M+n*x+i*_+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=M*C,t[1]=(v*f*r-u*m*r-v*i*p+n*m*p+u*i*d-n*f*d)*C,t[2]=(a*m*r-v*c*r+v*i*l-n*m*l-a*i*d+n*c*d)*C,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*p-n*c*p)*C,t[4]=x*C,t[5]=(h*m*r-g*f*r+g*i*p-e*m*p-h*i*d+e*f*d)*C,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*d-e*c*d)*C,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*p+e*c*p)*C,t[8]=_*C,t[9]=(g*u*r-h*v*r-g*n*p+e*v*p+h*n*d-e*u*d)*C,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*d+e*a*d)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*C,t[12]=R*C,t[13]=(h*v*i-g*u*i+g*n*f-e*v*f-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,v=o*h,m=o*u,d=a*u,M=c*l,x=c*h,_=c*u,R=n.x,b=n.y,C=n.z;return i[0]=(1-(v+d))*R,i[1]=(p+_)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(p-_)*b,i[5]=(1-(f+d))*b,i[6]=(m+M)*b,i[7]=0,i[8]=(g+x)*C,i[9]=(m-M)*C,i[10]=(1-(f+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ii.set(i[0],i[1],i[2]).length();const o=ii.set(i[4],i[5],i[6]).length(),a=ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const l=1/r,h=1/o,u=1/a;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=u,qe.elements[9]*=u,qe.elements[10]*=u,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=vn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,g;if(a===vn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ls)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=vn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,p=(n+i)*h;let g,v;if(a===vn)g=(o+r)*u,v=-2*u;else if(a===Ls)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new N,qe=new oe,th=new N(0,0,0),eh=new N(1,1,1),bn=new N,ts=new N,Fe=new N,ia=new oe,sa=new Wi;class an{constructor(t=0,e=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ia.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ia,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sa.setFromEuler(this),this.setFromQuaternion(sa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Eo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nh=0;const ra=new N,si=new Wi,fn=new oe,es=new N,Ni=new N,ih=new N,sh=new Wi,oa=new N(1,0,0),aa=new N(0,1,0),ca=new N(0,0,1),la={type:"added"},rh={type:"removed"},ri={type:"childadded",child:null},Js={type:"childremoved",child:null};class we extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new N,e=new an,n=new Wi,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Vt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(oa,t)}rotateY(t){return this.rotateOnAxis(aa,t)}rotateZ(t){return this.rotateOnAxis(ca,t)}translateOnAxis(t,e){return ra.copy(t).applyQuaternion(this.quaternion),this.position.add(ra.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oa,t)}translateY(t){return this.translateOnAxis(aa,t)}translateZ(t){return this.translateOnAxis(ca,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?es.copy(t):es.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Ni,es,this.up):fn.lookAt(es,Ni,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),si.setFromRotationMatrix(fn),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(la),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rh),Js.child=t,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(la),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,ih),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new N(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new N,pn=new N,Qs=new N,mn=new N,oi=new N,ai=new N,ha=new N,tr=new N,er=new N,nr=new N,ir=new re,sr=new re,rr=new re;class je{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ye.subVectors(t,e),i.cross(Ye);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ye.subVectors(i,e),pn.subVectors(n,e),Qs.subVectors(t,e);const o=Ye.dot(Ye),a=Ye.dot(pn),c=Ye.dot(Qs),l=pn.dot(pn),h=pn.dot(Qs),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(o,mn.y),c.addScaledVector(a,mn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return ir.setScalar(0),sr.setScalar(0),rr.setScalar(0),ir.fromBufferAttribute(t,e),sr.fromBufferAttribute(t,n),rr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ir,r.x),o.addScaledVector(sr,r.y),o.addScaledVector(rr,r.z),o}static isFrontFacing(t,e,n,i){return Ye.subVectors(n,e),pn.subVectors(t,e),Ye.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),Ye.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;oi.subVectors(i,n),ai.subVectors(r,n),tr.subVectors(t,n);const c=oi.dot(tr),l=ai.dot(tr);if(c<=0&&l<=0)return e.copy(n);er.subVectors(t,i);const h=oi.dot(er),u=ai.dot(er);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(oi,o);nr.subVectors(t,r);const p=oi.dot(nr),g=ai.dot(nr);if(g>=0&&p<=g)return e.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ai,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ha.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(ha,a);const d=1/(m+v+f);return o=v*d,a=f*d,e.copy(n).addScaledVector(oi,o).addScaledVector(ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},ns={h:0,s:0,l:0};function or(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=Vl(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=or(o,r,t+1/3),this.g=or(o,r,t),this.b=or(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){const n=Tc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Jt.fromWorkingColorSpace(be.copy(this),t),Math.round(Le(be.r*255,0,255))*65536+Math.round(Le(be.g*255,0,255))*256+Math.round(Le(be.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,i=be.g,r=be.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ge){Jt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,i=be.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(ns);const n=Vs(An.h,ns.h,e),i=Vs(An.s,ns.s,e),r=Vs(An.l,ns.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Zt;Zt.NAMES=Tc;let oh=0;class bi extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=Vi(),this.name="",this.blending=mi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=wr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==wr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class de extends bi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new N,is=new Yt;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ko,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ko&&(t.usage=this.usage),t}}class bc extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ac extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class pe extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ah=0;const ze=new oe,ar=new we,ci=new N,Be=new Xi,Ui=new Xi,Se=new N;class Ne extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sc(t)?Ac:bc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return ar.lookAt(t),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ui.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Be.min,Ui.min),Be.expandByPoint(Se),Se.addVectors(Be.max,Ui.max),Be.expandByPoint(Se)):(Be.expandByPoint(Ui.min),Be.expandByPoint(Ui.max))}Be.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Se.fromBufferAttribute(a,l),c&&(ci.fromBufferAttribute(t,l),Se.add(ci)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new N,c[I]=new N;const l=new N,h=new N,u=new N,f=new Yt,p=new Yt,g=new Yt,v=new N,m=new N;function d(I,T,S){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(v),a[T].add(v),a[S].add(v),c[I].add(m),c[T].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,T=M.length;I<T;++I){const S=M[I],P=S.start,k=S.count;for(let O=P,V=P+k;O<V;O+=3)d(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new N,_=new N,R=new N,b=new N;function C(I){R.fromBufferAttribute(i,I),b.copy(R);const T=a[I];x.copy(T),x.sub(R.multiplyScalar(R.dot(T))).normalize(),_.crossVectors(b,T);const P=_.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,T=M.length;I<T;++I){const S=M[I],P=S.start,k=S.count;for(let O=P,V=P+k;O<V;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new He(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ua=new oe,On=new wo,ss=new Fs,da=new N,rs=new N,os=new N,as=new N,cr=new N,cs=new N,fa=new N,ls=new N;class E extends we{constructor(t=new Ne,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){cs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(cr.fromBufferAttribute(u,t),o?cs.addScaledVector(cr,h):cs.addScaledVector(cr.sub(e),h))}e.add(cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),On.copy(t.ray).recast(t.near),!(ss.containsPoint(On.origin)===!1&&(On.intersectSphere(ss,da)===null||On.origin.distanceToSquared(da)>(t.far-t.near)**2))&&(ua.copy(r).invert(),On.copy(t.ray).applyMatrix4(ua),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,R=x;_<R;_+=3){const b=a.getX(_),C=a.getX(_+1),I=a.getX(_+2);i=hs(this,d,t,n,l,h,u,b,C,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const M=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);i=hs(this,o,t,n,l,h,u,M,x,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=M,R=x;_<R;_+=3){const b=_,C=_+1,I=_+2;i=hs(this,d,t,n,l,h,u,b,C,I),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const M=m,x=m+1,_=m+2;i=hs(this,o,t,n,l,h,u,M,x,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function ch(s,t,e,n,i,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Dn,a),c===null)return null;ls.copy(a),ls.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ls);return l<e.near||l>e.far?null:{distance:l,point:ls.clone(),object:s}}function hs(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,rs),s.getVertexPosition(c,os),s.getVertexPosition(l,as);const h=ch(s,t,e,n,rs,os,as,fa);if(h){const u=new N;je.getBarycoord(fa,rs,os,as,u),i&&(h.uv=je.getInterpolatedAttribute(i,a,c,l,u,new Yt)),r&&(h.uv1=je.getInterpolatedAttribute(r,a,c,l,u,new Yt)),o&&(h.normal=je.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};je.getNormal(rs,os,as,f.normal),h.face=f,h.barycoord=u}return h}class ct extends Ne{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function g(v,m,d,M,x,_,R,b,C,I,T){const S=_/C,P=R/I,k=_/2,O=R/2,V=b/2,X=C+1,H=I+1;let J=0,W=0;const $=new N;for(let st=0;st<H;st++){const ht=st*P-O;for(let Ct=0;Ct<X;Ct++){const qt=Ct*S-k;$[v]=qt*M,$[m]=ht*x,$[d]=V,l.push($.x,$.y,$.z),$[v]=0,$[m]=0,$[d]=b>0?1:-1,h.push($.x,$.y,$.z),u.push(Ct/C),u.push(1-st/I),J+=1}}for(let st=0;st<I;st++)for(let ht=0;ht<C;ht++){const Ct=f+ht+X*st,qt=f+ht+X*(st+1),Q=f+(ht+1)+X*(st+1),it=f+(ht+1)+X*st;c.push(Ct,qt,it),c.push(qt,Q,it),W+=6}a.addGroup(p,W,T),p+=W,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ct(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function wi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const n=wi(s[e]);for(const i in n)t[i]=n[i]}return t}function lh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Cc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const hh={clone:wi,merge:Ae};var uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends bi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uh,this.fragmentShader=dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wi(t.uniforms),this.uniformsGroups=lh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rc extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new N,pa=new Yt,ma=new Yt;class Oe extends Rc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,pa,ma),e.subVectors(ma,pa)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,hi=1;class fh extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(li,hi,t,e);i.layers=this.layers,this.add(i);const r=new Oe(li,hi,t,e);r.layers=this.layers,this.add(r);const o=new Oe(li,hi,t,e);o.layers=this.layers,this.add(o);const a=new Oe(li,hi,t,e);a.layers=this.layers,this.add(a);const c=new Oe(li,hi,t,e);c.layers=this.layers,this.add(c);const l=new Oe(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pc extends Re{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:xi,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ph extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ct(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:In});r.uniforms.tEquirect.value=e;const o=new E(i,r),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=rn),new fh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const lr=new N,mh=new N,gh=new Vt;class Rn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=lr.subVectors(n,e).cross(mh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gh.getNormalMatrix(t),i=this.coplanarPoint(lr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Fs,us=new N;class To{constructor(t=new Rn,e=new Rn,n=new Rn,i=new Rn,r=new Rn,o=new Rn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],v=i[10],m=i[11],d=i[12],M=i[13],x=i[14],_=i[15];if(n[0].setComponents(c-r,f-l,m-p,_-d).normalize(),n[1].setComponents(c+r,f+l,m+p,_+d).normalize(),n[2].setComponents(c+o,f+h,m+g,_+M).normalize(),n[3].setComponents(c-o,f-h,m-g,_-M).normalize(),n[4].setComponents(c-a,f-u,m-v,_-x).normalize(),e===vn)n[5].setComponents(c+a,f+u,m+v,_+x).normalize();else if(e===Ls)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(us.x=i.normal.x>0?t.max.x:t.min.x,us.y=i.normal.y>0?t.max.y:t.min.y,us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ic(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function _h(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],v=u[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const v=u[p];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Ke extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const M=d*f-o;for(let x=0;x<l;x++){const _=x*u-r;g.push(_,-M,0),v.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){const x=M+l*d,_=M+l*(d+1),R=M+1+l*(d+1),b=M+1+l*d;p.push(x,_,b),p.push(_,R,b)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.widthSegments,t.heightSegments)}}var vh=`#ifdef USE_ALPHAHASH
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
#endif`,yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eh=`#ifdef USE_AOMAP
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
#endif`,Th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bh=`#ifdef USE_BATCHING
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
#endif`,Ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ph=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ih=`#ifdef USE_IRIDESCENCE
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
#endif`,Lh=`#ifdef USE_BUMPMAP
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
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gh=`#define PI 3.141592653589793
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
} // validated`,Hh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vh=`vec3 transformedNormal = objectNormal;
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
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kh="gl_FragColor = linearToOutputTexel( gl_FragColor );",$h=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jh=`#ifdef USE_ENVMAP
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
#endif`,Qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tu=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,su=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ru=`#ifdef USE_GRADIENTMAP
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
}`,ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,au=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lu=`uniform bool receiveShadow;
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
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,uu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,du=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mu=`PhysicalMaterial material;
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
#endif`,gu=`struct PhysicalMaterial {
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
}`,_u=`
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
#endif`,vu=`#if defined( RE_IndirectDiffuse )
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
#endif`,yu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Au=`#if defined( USE_POINTS_UV )
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
#endif`,Cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Iu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Du=`#ifdef USE_MORPHTARGETS
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
#endif`,Nu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bu=`#ifndef FLAT_SHADED
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
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zu=`#ifdef USE_NORMALMAP
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
#endif`,Gu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$u=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,td=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nd=`float getShadowMask() {
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
}`,id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sd=`#ifdef USE_SKINNING
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
#endif`,rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,od=`#ifdef USE_SKINNING
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
#endif`,ad=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ud=`#ifdef USE_TRANSMISSION
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
#endif`,dd=`#ifdef USE_TRANSMISSION
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
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vd=`uniform sampler2D t2D;
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
}`,yd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`#include <common>
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
}`,Ed=`#if DEPTH_PACKING == 3200
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
}`,Td=`#define DISTANCE
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
}`,bd=`#define DISTANCE
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
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`uniform float scale;
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
}`,Pd=`uniform vec3 diffuse;
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
}`,Id=`#include <common>
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Dd=`#define LAMBERT
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
}`,Nd=`#define LAMBERT
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
}`,Ud=`#define MATCAP
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
}`,Fd=`#define MATCAP
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
}`,Bd=`#define NORMAL
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
}`,kd=`#define PHONG
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
}`,zd=`#define PHONG
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
}`,Gd=`#define STANDARD
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
}`,Hd=`#define STANDARD
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
}`,Vd=`#define TOON
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
}`,Wd=`#define TOON
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
}`,Xd=`uniform float size;
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
}`,qd=`uniform vec3 diffuse;
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
}`,Yd=`#include <common>
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
}`,Kd=`uniform vec3 color;
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
}`,Zd=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:vh,alphahash_pars_fragment:xh,alphamap_fragment:yh,alphamap_pars_fragment:Mh,alphatest_fragment:Sh,alphatest_pars_fragment:wh,aomap_fragment:Eh,aomap_pars_fragment:Th,batching_pars_vertex:bh,batching_vertex:Ah,begin_vertex:Ch,beginnormal_vertex:Rh,bsdfs:Ph,iridescence_fragment:Ih,bumpmap_pars_fragment:Lh,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Nh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Fh,color_fragment:Bh,color_pars_fragment:Oh,color_pars_vertex:kh,color_vertex:zh,common:Gh,cube_uv_reflection_fragment:Hh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Wh,displacementmap_vertex:Xh,emissivemap_fragment:qh,emissivemap_pars_fragment:Yh,colorspace_fragment:Kh,colorspace_pars_fragment:$h,envmap_fragment:Zh,envmap_common_pars_fragment:jh,envmap_pars_fragment:Jh,envmap_pars_vertex:Qh,envmap_physical_pars_fragment:hu,envmap_vertex:tu,fog_vertex:eu,fog_pars_vertex:nu,fog_fragment:iu,fog_pars_fragment:su,gradientmap_pars_fragment:ru,lightmap_pars_fragment:ou,lights_lambert_fragment:au,lights_lambert_pars_fragment:cu,lights_pars_begin:lu,lights_toon_fragment:uu,lights_toon_pars_fragment:du,lights_phong_fragment:fu,lights_phong_pars_fragment:pu,lights_physical_fragment:mu,lights_physical_pars_fragment:gu,lights_fragment_begin:_u,lights_fragment_maps:vu,lights_fragment_end:xu,logdepthbuf_fragment:yu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:Su,logdepthbuf_vertex:wu,map_fragment:Eu,map_pars_fragment:Tu,map_particle_fragment:bu,map_particle_pars_fragment:Au,metalnessmap_fragment:Cu,metalnessmap_pars_fragment:Ru,morphinstance_vertex:Pu,morphcolor_vertex:Iu,morphnormal_vertex:Lu,morphtarget_pars_vertex:Du,morphtarget_vertex:Nu,normal_fragment_begin:Uu,normal_fragment_maps:Fu,normal_pars_fragment:Bu,normal_pars_vertex:Ou,normal_vertex:ku,normalmap_pars_fragment:zu,clearcoat_normal_fragment_begin:Gu,clearcoat_normal_fragment_maps:Hu,clearcoat_pars_fragment:Vu,iridescence_pars_fragment:Wu,opaque_fragment:Xu,packing:qu,premultiplied_alpha_fragment:Yu,project_vertex:Ku,dithering_fragment:$u,dithering_pars_fragment:Zu,roughnessmap_fragment:ju,roughnessmap_pars_fragment:Ju,shadowmap_pars_fragment:Qu,shadowmap_pars_vertex:td,shadowmap_vertex:ed,shadowmask_pars_fragment:nd,skinbase_vertex:id,skinning_pars_vertex:sd,skinning_vertex:rd,skinnormal_vertex:od,specularmap_fragment:ad,specularmap_pars_fragment:cd,tonemapping_fragment:ld,tonemapping_pars_fragment:hd,transmission_fragment:ud,transmission_pars_fragment:dd,uv_pars_fragment:fd,uv_pars_vertex:pd,uv_vertex:md,worldpos_vertex:gd,background_vert:_d,background_frag:vd,backgroundCube_vert:xd,backgroundCube_frag:yd,cube_vert:Md,cube_frag:Sd,depth_vert:wd,depth_frag:Ed,distanceRGBA_vert:Td,distanceRGBA_frag:bd,equirect_vert:Ad,equirect_frag:Cd,linedashed_vert:Rd,linedashed_frag:Pd,meshbasic_vert:Id,meshbasic_frag:Ld,meshlambert_vert:Dd,meshlambert_frag:Nd,meshmatcap_vert:Ud,meshmatcap_frag:Fd,meshnormal_vert:Bd,meshnormal_frag:Od,meshphong_vert:kd,meshphong_frag:zd,meshphysical_vert:Gd,meshphysical_frag:Hd,meshtoon_vert:Vd,meshtoon_frag:Wd,points_vert:Xd,points_frag:qd,shadow_vert:Yd,shadow_frag:Kd,sprite_vert:$d,sprite_frag:Zd},ut={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},sn={basic:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ae([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ae([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ae([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ae([ut.points,ut.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ae([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ae([ut.common,ut.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ae([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ae([ut.sprite,ut.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ae([ut.common,ut.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ae([ut.lights,ut.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};sn.physical={uniforms:Ae([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ds={r:0,b:0,g:0},zn=new an,jd=new oe;function Jd(s,t,e,n,i,r,o){const a=new Zt(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1;const _=g(M);_===null?d(a,c):_&&_.isColor&&(d(_,1),x=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,x){const _=g(x);_&&(_.isCubeTexture||_.mapping===Ns)?(h===void 0&&(h=new E(new ct(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:wi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zn.copy(x.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jd.makeRotationFromEuler(zn)),h.material.toneMapped=Jt.getTransfer(_.colorSpace)!==se,(u!==_||f!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new E(new Ke(2,2),new Nn({name:"BackgroundMaterial",uniforms:wi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(_.colorSpace)!==se,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,p=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,x){M.getRGB(ds,Cc(s)),n.buffers.color.setClear(ds.r,ds.g,ds.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(a,c)},render:v,addToRenderList:m}}function Qd(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,P,k,O,V){let X=!1;const H=u(O,k,P);r!==H&&(r=H,l(r.object)),X=p(S,O,k,V),X&&g(S,O,k,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(S,P,k,O),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,P,k){const O=k.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let X=V[P.id];X===void 0&&(X={},V[P.id]=X);let H=X[O];return H===void 0&&(H=f(c()),X[O]=H),H}function f(S){const P=[],k=[],O=[];for(let V=0;V<e;V++)P[V]=0,k[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,P,k,O){const V=r.attributes,X=P.attributes;let H=0;const J=k.getAttributes();for(const W in J)if(J[W].location>=0){const st=V[W];let ht=X[W];if(ht===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor)),st===void 0||st.attribute!==ht||ht&&st.data!==ht.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function g(S,P,k,O){const V={},X=P.attributes;let H=0;const J=k.getAttributes();for(const W in J)if(J[W].location>=0){let st=X[W];st===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(st=S.instanceColor));const ht={};ht.attribute=st,st&&st.data&&(ht.data=st.data),V[W]=ht,H++}r.attributes=V,r.attributesNum=H,r.index=O}function v(){const S=r.newAttributes;for(let P=0,k=S.length;P<k;P++)S[P]=0}function m(S){d(S,0)}function d(S,P){const k=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;k[S]=1,O[S]===0&&(s.enableVertexAttribArray(S),O[S]=1),V[S]!==P&&(s.vertexAttribDivisor(S,P),V[S]=P)}function M(){const S=r.newAttributes,P=r.enabledAttributes;for(let k=0,O=P.length;k<O;k++)P[k]!==S[k]&&(s.disableVertexAttribArray(k),P[k]=0)}function x(S,P,k,O,V,X,H){H===!0?s.vertexAttribIPointer(S,P,k,V,X):s.vertexAttribPointer(S,P,k,O,V,X)}function _(S,P,k,O){v();const V=O.attributes,X=k.getAttributes(),H=P.defaultAttributeValues;for(const J in X){const W=X[J];if(W.location>=0){let $=V[J];if($===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const st=$.normalized,ht=$.itemSize,Ct=t.get($);if(Ct===void 0)continue;const qt=Ct.buffer,Q=Ct.type,it=Ct.bytesPerElement,mt=Q===s.INT||Q===s.UNSIGNED_INT||$.gpuType===_o;if($.isInterleavedBufferAttribute){const rt=$.data,St=rt.stride,Rt=$.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<W.locationSize;Ft++)d(W.location+Ft,rt.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<W.locationSize;Ft++)m(W.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let Ft=0;Ft<W.locationSize;Ft++)x(W.location+Ft,ht/W.locationSize,Q,st,St*it,(Rt+ht/W.locationSize*Ft)*it,mt)}else{if($.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)d(W.location+rt,$.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let rt=0;rt<W.locationSize;rt++)m(W.location+rt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let rt=0;rt<W.locationSize;rt++)x(W.location+rt,ht/W.locationSize,Q,st,ht*it,ht/W.locationSize*rt*it,mt)}}else if(H!==void 0){const st=H[J];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(W.location,st);break;case 3:s.vertexAttrib3fv(W.location,st);break;case 4:s.vertexAttrib4fv(W.location,st);break;default:s.vertexAttrib1fv(W.location,st)}}}}M()}function R(){I();for(const S in n){const P=n[S];for(const k in P){const O=P[k];for(const V in O)h(O[V].object),delete O[V];delete P[k]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const k in P){const O=P[k];for(const V in O)h(O[V].object),delete O[V];delete P[k]}delete n[S.id]}function C(S){for(const P in n){const k=n[P];if(k[S.id]===void 0)continue;const O=k[S.id];for(const V in O)h(O[V].object),delete O[V];delete k[S.id]}}function I(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function tf(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ef(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==Je&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==yn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_n&&!I)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:R,maxSamples:b}}function nf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Rn,a=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,x=M*4;let _=d.clippingState||null;c.value=_,_=h(g,f,x,p);for(let R=0;R!==x;++R)_[R]=e[R];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const d=p+v*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,_=p;x!==v;++x,_+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function sf(s){let t=new WeakMap;function e(o,a){return a===Ir?o.mapping=xi:a===Lr&&(o.mapping=yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ir||a===Lr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ph(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Lc extends Rc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const pi=4,ga=[.125,.215,.35,.446,.526,.582],qn=20,hr=new Lc,_a=new Zt;let ur=null,dr=0,fr=0,pr=!1;const Wn=(1+Math.sqrt(5))/2,ui=1/Wn,va=[new N(-Wn,ui,0),new N(Wn,ui,0),new N(-ui,0,Wn),new N(ui,0,Wn),new N(0,Wn,-ui),new N(0,Wn,ui),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ur=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ur,dr,fr),this._renderer.xr.enabled=pr,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ur=this._renderer.getRenderTarget(),dr=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Hi,format:Je,colorSpace:Ei,depthBuffer:!1},i=ya(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ya(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rf(r)),this._blurMaterial=of(r,t,e)}return i}_compileMaterial(t){const e=new E(this._lodPlanes[0],t);this._renderer.compile(e,hr)}_sceneToCubeUV(t,e,n,i){const a=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(_a),h.toneMapping=Ln,h.autoClear=!1;const p=new de({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new E(new ct,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(_a),v=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):M===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const x=this._cubeSize;fs(i,M*x,d>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===xi||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new E(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;fs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,hr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=va[(i-r-1)%va.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new E(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const d=[];let M=0;for(let C=0;C<qn;++C){const I=C/v,T=Math.exp(-I*I/2);d.push(T),C===0?M+=T:C<m&&(M+=2*T)}for(let C=0;C<d.length;C++)d[C]=d[C]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const _=this._sizeLods[i],R=3*_*(i>x-pi?i-x+pi:0),b=4*(this._cubeSize-_);fs(e,R,b,3*_,2*_),c.setRenderTarget(e),c.render(u,hr)}}function rf(s){const t=[],e=[],n=[];let i=s;const r=s-pi+1+ga.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-pi?c=ga[o-s+pi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,M=new Float32Array(v*g*p),x=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,I=b>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];M.set(T,v*g*b),x.set(f,m*g*b);const S=[b,b,b,b,b,b];_.set(S,d*g*b)}const R=new Ne;R.setAttribute("position",new He(M,v)),R.setAttribute("uv",new He(x,m)),R.setAttribute("faceIndex",new He(_,d)),t.push(R),i>pi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ya(s,t,e){const n=new Zn(s,t,e);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function of(s,t,e){const n=new Float32Array(qn),i=new N(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ma(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Sa(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function bo(){return`

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
	`}function af(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ir||c===Lr,h=c===xi||c===yi;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new xa(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new xa(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function cf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Oi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lf(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)t.update(v[m],s.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const M=p.array;v=p.version;for(let x=0,_=M.length;x<_;x+=3){const R=M[x+0],b=M[x+1],C=M[x+2];f.push(R,b,b,C,C,R)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,_=M.length/3-1;x<_;x+=3){const R=x+0,b=x+1,C=x+2;f.push(R,b,b,C,C,R)}}else return;const m=new(Sc(f)?Ac:bc)(f,1);m.version=v;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function hf(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){s.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let M=0;M<g;M++)d+=p[M]*v[M];e.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function uf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function df(s,t,e){const n=new WeakMap,i=new re;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let R=a.attributes.position.count*_,b=1;R>t.maxTextureSize&&(b=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const C=new Float32Array(R*b*4*u),I=new Ec(C,R,b,u);I.type=_n,I.needsUpdate=!0;const T=_*4;for(let P=0;P<u;P++){const k=d[P],O=M[P],V=x[P],X=R*b*4*P;for(let H=0;H<k.count;H++){const J=H*T;g===!0&&(i.fromBufferAttribute(k,H),C[X+J+0]=i.x,C[X+J+1]=i.y,C[X+J+2]=i.z,C[X+J+3]=0),v===!0&&(i.fromBufferAttribute(O,H),C[X+J+4]=i.x,C[X+J+5]=i.y,C[X+J+6]=i.z,C[X+J+7]=0),m===!0&&(i.fromBufferAttribute(V,H),C[X+J+8]=i.x,C[X+J+9]=i.y,C[X+J+10]=i.z,C[X+J+11]=V.itemSize===4?i.w:1)}}f={count:u,texture:I,size:new Yt(R,b)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function ff(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Dc extends Re{constructor(t,e,n,i,r,o,a,c,l,h=gi){if(h!==gi&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gi&&(n=$n),n===void 0&&h===Si&&(n=Mi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nc=new Re,wa=new Dc(1,1),Uc=new Ec,Fc=new Jl,Bc=new Pc,Ea=[],Ta=[],ba=new Float32Array(16),Aa=new Float32Array(9),Ca=new Float32Array(4);function Ai(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ea[i];if(r===void 0&&(r=new Float32Array(i),Ea[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Bs(s,t){let e=Ta[t];e===void 0&&(e=new Int32Array(t),Ta[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function pf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function vf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Ca.set(n),s.uniformMatrix2fv(this.addr,!1,Ca),Me(e,n)}}function xf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Aa.set(n),s.uniformMatrix3fv(this.addr,!1,Aa),Me(e,n)}}function yf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;ba.set(n),s.uniformMatrix4fv(this.addr,!1,ba),Me(e,n)}}function Mf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function Tf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function Af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function Rf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wa.compareFunction=Mc,r=wa):r=Nc,e.setTexture2D(t||r,i)}function Pf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fc,i)}function If(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bc,i)}function Lf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Uc,i)}function Df(s){switch(s){case 5126:return pf;case 35664:return mf;case 35665:return gf;case 35666:return _f;case 35674:return vf;case 35675:return xf;case 35676:return yf;case 5124:case 35670:return Mf;case 35667:case 35671:return Sf;case 35668:case 35672:return wf;case 35669:case 35673:return Ef;case 5125:return Tf;case 36294:return bf;case 36295:return Af;case 36296:return Cf;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return Lf}}function Nf(s,t){s.uniform1fv(this.addr,t)}function Uf(s,t){const e=Ai(t,this.size,2);s.uniform2fv(this.addr,e)}function Ff(s,t){const e=Ai(t,this.size,3);s.uniform3fv(this.addr,e)}function Bf(s,t){const e=Ai(t,this.size,4);s.uniform4fv(this.addr,e)}function Of(s,t){const e=Ai(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function kf(s,t){const e=Ai(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function zf(s,t){const e=Ai(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gf(s,t){s.uniform1iv(this.addr,t)}function Hf(s,t){s.uniform2iv(this.addr,t)}function Vf(s,t){s.uniform3iv(this.addr,t)}function Wf(s,t){s.uniform4iv(this.addr,t)}function Xf(s,t){s.uniform1uiv(this.addr,t)}function qf(s,t){s.uniform2uiv(this.addr,t)}function Yf(s,t){s.uniform3uiv(this.addr,t)}function Kf(s,t){s.uniform4uiv(this.addr,t)}function $f(s,t,e){const n=this.cache,i=t.length,r=Bs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Nc,r[o])}function Zf(s,t,e){const n=this.cache,i=t.length,r=Bs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Fc,r[o])}function jf(s,t,e){const n=this.cache,i=t.length,r=Bs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Bc,r[o])}function Jf(s,t,e){const n=this.cache,i=t.length,r=Bs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Uc,r[o])}function Qf(s){switch(s){case 5126:return Nf;case 35664:return Uf;case 35665:return Ff;case 35666:return Bf;case 35674:return Of;case 35675:return kf;case 35676:return zf;case 5124:case 35670:return Gf;case 35667:case 35671:return Hf;case 35668:case 35672:return Vf;case 35669:case 35673:return Wf;case 5125:return Xf;case 36294:return qf;case 36295:return Yf;case 36296:return Kf;case 35678:case 36198:case 36298:case 36306:case 35682:return $f;case 35679:case 36299:case 36307:return Zf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Jf}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Df(e.type)}}class ep{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qf(e.type)}}class np{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const mr=/(\w+)(\])?(\[|\.)?/g;function Ra(s,t){s.seq.push(t),s.map[t.id]=t}function ip(s,t,e){const n=s.name,i=n.length;for(mr.lastIndex=0;;){const r=mr.exec(n),o=mr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ra(e,l===void 0?new tp(a,s,t):new ep(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new np(a),Ra(e,u)),e=u}}}class Ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);ip(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Pa(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const sp=37297;let rp=0;function op(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ia=new Vt;function ap(s){Jt._getMatrix(Ia,Jt.workingColorSpace,s);const t=`mat3( ${Ia.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case Us:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function La(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+op(s.getShaderSource(t),o)}else return i}function cp(s,t){const e=ap(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lp(s,t){let e;switch(t){case bl:e="Linear";break;case Al:e="Reinhard";break;case Cl:e="Cineon";break;case cc:e="ACESFilmic";break;case Pl:e="AgX";break;case Il:e="Neutral";break;case Rl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ps=new N;function hp(){Jt.getLuminanceCoefficients(ps);const s=ps.x.toFixed(4),t=ps.y.toFixed(4),e=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function up(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function dp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ki(s){return s!==""}function Da(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Na(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(s){return s.replace(pp,gp)}const mp=new Map;function gp(s,t){let e=Xt[t];if(e===void 0){const n=mp.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ao(e)}const _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ua(s){return s.replace(_p,vp)}function vp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fa(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function yp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case xi:case yi:t="ENVMAP_TYPE_CUBE";break;case Ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Sp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ac:t="ENVMAP_BLENDING_MULTIPLY";break;case El:t="ENVMAP_BLENDING_MIX";break;case Tl:t="ENVMAP_BLENDING_ADD";break}return t}function wp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ep(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=xp(e),l=yp(e),h=Mp(e),u=Sp(e),f=wp(e),p=up(e),g=dp(r),v=i.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),d.length>0&&(d+=`
`)):(m=[Fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),d=[Fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?lp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,cp("linearToOutputTexel",e.outputColorSpace),hp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ki).join(`
`)),o=ao(o),o=Da(o,e),o=Na(o,e),a=ao(a),a=Da(a,e),a=Na(a,e),o=Ua(o),a=Ua(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===$o?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=M+m+o,_=M+d+a,R=Pa(i,i.VERTEX_SHADER,x),b=Pa(i,i.FRAGMENT_SHADER,_);i.attachShader(v,R),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(P){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(v).trim(),O=i.getShaderInfoLog(R).trim(),V=i.getShaderInfoLog(b).trim();let X=!0,H=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,R,b);else{const J=La(i,R,"vertex"),W=La(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+J+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||V==="")&&(H=!1);H&&(P.diagnostics={runnable:X,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:d}})}i.deleteShader(R),i.deleteShader(b),I=new Ts(i,v),T=fp(i,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,sp)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=b,this}let Tp=0;class bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ap(t),e.set(t,n)),n}}class Ap{constructor(t){this.id=Tp++,this.code=t,this.usedTimes=0}}function Cp(s,t,e,n,i,r,o){const a=new Eo,c=new bp,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,S,P,k,O){const V=k.fog,X=O.geometry,H=T.isMeshStandardMaterial?k.environment:null,J=(T.isMeshStandardMaterial?e:t).get(T.envMap||H),W=J&&J.mapping===Ns?J.image.height:null,$=g[T.type];T.precision!==null&&(p=i.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const st=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ht=st!==void 0?st.length:0;let Ct=0;X.morphAttributes.position!==void 0&&(Ct=1),X.morphAttributes.normal!==void 0&&(Ct=2),X.morphAttributes.color!==void 0&&(Ct=3);let qt,Q,it,mt;if($){const ie=sn[$];qt=ie.vertexShader,Q=ie.fragmentShader}else qt=T.vertexShader,Q=T.fragmentShader,c.update(T),it=c.getVertexShaderID(T),mt=c.getFragmentShaderID(T);const rt=s.getRenderTarget(),St=s.state.buffers.depth.getReversed(),Rt=O.isInstancedMesh===!0,Ft=O.isBatchedMesh===!0,jt=!!T.map,Ut=!!T.matcap,Qt=!!J,L=!!T.aoMap,me=!!T.lightMap,zt=!!T.bumpMap,Bt=!!T.normalMap,Mt=!!T.displacementMap,Lt=!!T.emissiveMap,xt=!!T.metalnessMap,A=!!T.roughnessMap,y=T.anisotropy>0,B=T.clearcoat>0,Y=T.dispersion>0,tt=T.iridescence>0,q=T.sheen>0,lt=T.transmission>0,at=y&&!!T.anisotropyMap,vt=B&&!!T.clearcoatMap,Dt=B&&!!T.clearcoatNormalMap,nt=B&&!!T.clearcoatRoughnessMap,gt=tt&&!!T.iridescenceMap,It=tt&&!!T.iridescenceThicknessMap,Ot=q&&!!T.sheenColorMap,yt=q&&!!T.sheenRoughnessMap,$t=!!T.specularMap,Wt=!!T.specularColorMap,ae=!!T.specularIntensityMap,D=lt&&!!T.transmissionMap,dt=lt&&!!T.thicknessMap,Z=!!T.gradientMap,et=!!T.alphaMap,_t=T.alphaTest>0,ft=!!T.alphaHash,Gt=!!T.extensions;let fe=Ln;T.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(fe=s.toneMapping);const Ee={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:qt,fragmentShader:Q,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&O._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&O.instanceColor!==null,instancingMorph:Rt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ei,alphaToCoverage:!!T.alphaToCoverage,map:jt,matcap:Ut,envMap:Qt,envMapMode:Qt&&J.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:me,bumpMap:zt,normalMap:Bt,displacementMap:f&&Mt,emissiveMap:Lt,normalMapObjectSpace:Bt&&T.normalMapType===Ul,normalMapTangentSpace:Bt&&T.normalMapType===yc,metalnessMap:xt,roughnessMap:A,anisotropy:y,anisotropyMap:at,clearcoat:B,clearcoatMap:vt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:nt,dispersion:Y,iridescence:tt,iridescenceMap:gt,iridescenceThicknessMap:It,sheen:q,sheenColorMap:Ot,sheenRoughnessMap:yt,specularMap:$t,specularColorMap:Wt,specularIntensityMap:ae,transmission:lt,transmissionMap:D,thicknessMap:dt,gradientMap:Z,opaque:T.transparent===!1&&T.blending===mi&&T.alphaToCoverage===!1,alphaMap:et,alphaTest:_t,alphaHash:ft,combine:T.combine,mapUv:jt&&v(T.map.channel),aoMapUv:L&&v(T.aoMap.channel),lightMapUv:me&&v(T.lightMap.channel),bumpMapUv:zt&&v(T.bumpMap.channel),normalMapUv:Bt&&v(T.normalMap.channel),displacementMapUv:Mt&&v(T.displacementMap.channel),emissiveMapUv:Lt&&v(T.emissiveMap.channel),metalnessMapUv:xt&&v(T.metalnessMap.channel),roughnessMapUv:A&&v(T.roughnessMap.channel),anisotropyMapUv:at&&v(T.anisotropyMap.channel),clearcoatMapUv:vt&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:It&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:yt&&v(T.sheenRoughnessMap.channel),specularMapUv:$t&&v(T.specularMap.channel),specularColorMapUv:Wt&&v(T.specularColorMap.channel),specularIntensityMapUv:ae&&v(T.specularIntensityMap.channel),transmissionMapUv:D&&v(T.transmissionMap.channel),thicknessMapUv:dt&&v(T.thicknessMap.channel),alphaMapUv:et&&v(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Bt||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(jt||et),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:St,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:jt&&T.map.isVideoTexture===!0&&Jt.getTransfer(T.map.colorSpace)===se,decodeVideoTextureEmissive:Lt&&T.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(T.emissiveMap.colorSpace)===se,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ze,flipSided:T.side===De,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Gt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&T.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(M(S,T),x(S,T),S.push(s.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function M(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function x(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function _(T){const S=g[T.type];let P;if(S){const k=sn[S];P=hh.clone(k.uniforms)}else P=T.uniforms;return P}function R(T,S){let P;for(let k=0,O=h.length;k<O;k++){const V=h[k];if(V.cacheKey===S){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Ep(s,S,T,r),h.push(P)),P}function b(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function C(T){c.remove(T)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:R,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:I}}function Rp(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Pp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ba(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Oa(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,p,g,v,m){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),t++,d}function a(u,f,p,g,v,m){const d=o(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function c(u,f,p,g,v,m){const d=o(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Pp),n.length>1&&n.sort(f||Ba),i.length>1&&i.sort(f||Ba)}function h(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function Ip(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Oa,s.set(n,[o])):i>=r.length?(o=new Oa,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Lp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Zt};break;case"SpotLight":e={position:new N,direction:new N,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Dp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Np=0;function Up(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Fp(s){const t=new Lp,e=Dp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,r=new oe,o=new oe;function a(l){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,M=0,x=0,_=0,R=0,b=0,C=0;l.sort(Up);for(let T=0,S=l.length;T<S;T++){const P=l[T],k=P.color,O=P.intensity,V=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*O,u+=k.g*O,f+=k.b*O;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],O);C++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,W=e.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=H,p++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(k).multiplyScalar(O),H.distance=V,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[v]=H;const J=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[v]=J.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=X,_++}v++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(k).multiplyScalar(O),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const J=P.shadow,W=e.get(P);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(O),H.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[d]=H,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==M||I.numPointShadows!==x||I.numSpotShadows!==_||I.numSpotMaps!==R||I.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,I.directionalLength=p,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=M,I.numPointShadows=x,I.numSpotShadows=_,I.numSpotMaps=R,I.numLightProbes=C,n.version=Np++)}function c(l,h){let u=0,f=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){const x=l[d];if(x.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function ka(s){const t=new Fp(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Bp(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ka(s),t.set(i,[a])):r>=o.length?(a=new ka(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Op extends bi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kp extends bi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gp=`uniform sampler2D shadow_pass;
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
}`;function Hp(s,t,e){let n=new To;const i=new Yt,r=new Yt,o=new re,a=new Op({depthPacking:Nl}),c=new kp,l={},h=e.maxTextureSize,u={[Dn]:De,[De]:Dn,[Ze]:Ze},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:zp,fragmentShader:Gp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new E(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let d=this.type;this.render=function(b,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const T=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),k=s.state;k.setBlending(In),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=d!==gn&&this.type===gn,V=d===gn&&this.type!==gn;for(let X=0,H=b.length;X<H;X++){const J=b[X],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const $=W.getFrameExtents();if(i.multiply($),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/$.x),i.x=r.x*$.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/$.y),i.y=r.y*$.y,W.mapSize.y=r.y)),W.map===null||O===!0||V===!0){const ht=this.type!==gn?{minFilter:Qe,magFilter:Qe}:{};W.map!==null&&W.map.dispose(),W.map=new Zn(i.x,i.y,ht),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const st=W.getViewportCount();for(let ht=0;ht<st;ht++){const Ct=W.getViewport(ht);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),k.viewport(o),W.updateMatrices(J,ht),n=W.getFrustum(),_(C,I,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===gn&&M(W,I),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(T,S,P)};function M(b,C){const I=t.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Zn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,I,f,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,I,p,v,null)}function x(b,C,I,T){let S=null;const P=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)S=P;else if(S=I.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=S.uuid,O=C.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let X=V[O];X===void 0&&(X=S.clone(),V[O]=X,C.addEventListener("dispose",R)),S=X}if(S.visible=C.visible,S.wireframe=C.wireframe,T===gn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=s.properties.get(S);k.light=I}return S}function _(b,C,I,T,S){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===gn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const O=t.update(b),V=b.material;if(Array.isArray(V)){const X=O.groups;for(let H=0,J=X.length;H<J;H++){const W=X[H],$=V[W.materialIndex];if($&&$.visible){const st=x(b,$,T,S);b.onBeforeShadow(s,b,C,I,O,st,W),s.renderBufferDirect(I,null,O,st,b,W),b.onAfterShadow(s,b,C,I,O,st,W)}}}else if(V.visible){const X=x(b,V,T,S);b.onBeforeShadow(s,b,C,I,O,X,null),s.renderBufferDirect(I,null,O,X,b,null),b.onAfterShadow(s,b,C,I,O,X,null)}}const k=b.children;for(let O=0,V=k.length;O<V;O++)_(k[O],C,I,T,S)}function R(b){b.target.removeEventListener("dispose",R);for(const I in l){const T=l[I],S=b.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const Vp={[Er]:Tr,[br]:Rr,[Ar]:Pr,[vi]:Cr,[Tr]:Er,[Rr]:br,[Pr]:Ar,[Cr]:vi};function Wp(s,t){function e(){let D=!1;const dt=new re;let Z=null;const et=new re(0,0,0,0);return{setMask:function(_t){Z!==_t&&!D&&(s.colorMask(_t,_t,_t,_t),Z=_t)},setLocked:function(_t){D=_t},setClear:function(_t,ft,Gt,fe,Ee){Ee===!0&&(_t*=fe,ft*=fe,Gt*=fe),dt.set(_t,ft,Gt,fe),et.equals(dt)===!1&&(s.clearColor(_t,ft,Gt,fe),et.copy(dt))},reset:function(){D=!1,Z=null,et.set(-1,0,0,0)}}}function n(){let D=!1,dt=!1,Z=null,et=null,_t=null;return{setReversed:function(ft){if(dt!==ft){const Gt=t.get("EXT_clip_control");dt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const fe=_t;_t=null,this.setClear(fe)}dt=ft},getReversed:function(){return dt},setTest:function(ft){ft?rt(s.DEPTH_TEST):St(s.DEPTH_TEST)},setMask:function(ft){Z!==ft&&!D&&(s.depthMask(ft),Z=ft)},setFunc:function(ft){if(dt&&(ft=Vp[ft]),et!==ft){switch(ft){case Er:s.depthFunc(s.NEVER);break;case Tr:s.depthFunc(s.ALWAYS);break;case br:s.depthFunc(s.LESS);break;case vi:s.depthFunc(s.LEQUAL);break;case Ar:s.depthFunc(s.EQUAL);break;case Cr:s.depthFunc(s.GEQUAL);break;case Rr:s.depthFunc(s.GREATER);break;case Pr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=ft}},setLocked:function(ft){D=ft},setClear:function(ft){_t!==ft&&(dt&&(ft=1-ft),s.clearDepth(ft),_t=ft)},reset:function(){D=!1,Z=null,et=null,_t=null,dt=!1}}}function i(){let D=!1,dt=null,Z=null,et=null,_t=null,ft=null,Gt=null,fe=null,Ee=null;return{setTest:function(ie){D||(ie?rt(s.STENCIL_TEST):St(s.STENCIL_TEST))},setMask:function(ie){dt!==ie&&!D&&(s.stencilMask(ie),dt=ie)},setFunc:function(ie,Ve,ln){(Z!==ie||et!==Ve||_t!==ln)&&(s.stencilFunc(ie,Ve,ln),Z=ie,et=Ve,_t=ln)},setOp:function(ie,Ve,ln){(ft!==ie||Gt!==Ve||fe!==ln)&&(s.stencilOp(ie,Ve,ln),ft=ie,Gt=Ve,fe=ln)},setLocked:function(ie){D=ie},setClear:function(ie){Ee!==ie&&(s.clearStencil(ie),Ee=ie)},reset:function(){D=!1,dt=null,Z=null,et=null,_t=null,ft=null,Gt=null,fe=null,Ee=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,M=null,x=null,_=null,R=null,b=null,C=new Zt(0,0,0),I=0,T=!1,S=null,P=null,k=null,O=null,V=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,J=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=J>=2);let $=null,st={};const ht=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),qt=new re().fromArray(ht),Q=new re().fromArray(Ct);function it(D,dt,Z,et){const _t=new Uint8Array(4),ft=s.createTexture();s.bindTexture(D,ft),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<Z;Gt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(dt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return ft}const mt={};mt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(vi),zt(!1),Bt(Wo),rt(s.CULL_FACE),L(In);function rt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function St(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Rt(D,dt){return u[D]!==dt?(s.bindFramebuffer(D,dt),u[D]=dt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ft(D,dt){let Z=p,et=!1;if(D){Z=f.get(dt),Z===void 0&&(Z=[],f.set(dt,Z));const _t=D.textures;if(Z.length!==_t.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Gt=_t.length;ft<Gt;ft++)Z[ft]=s.COLOR_ATTACHMENT0+ft;Z.length=_t.length,et=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,et=!0);et&&s.drawBuffers(Z)}function jt(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Ut={[Xn]:s.FUNC_ADD,[al]:s.FUNC_SUBTRACT,[cl]:s.FUNC_REVERSE_SUBTRACT};Ut[ll]=s.MIN,Ut[hl]=s.MAX;const Qt={[ul]:s.ZERO,[dl]:s.ONE,[fl]:s.SRC_COLOR,[Sr]:s.SRC_ALPHA,[xl]:s.SRC_ALPHA_SATURATE,[_l]:s.DST_COLOR,[ml]:s.DST_ALPHA,[pl]:s.ONE_MINUS_SRC_COLOR,[wr]:s.ONE_MINUS_SRC_ALPHA,[vl]:s.ONE_MINUS_DST_COLOR,[gl]:s.ONE_MINUS_DST_ALPHA,[yl]:s.CONSTANT_COLOR,[Ml]:s.ONE_MINUS_CONSTANT_COLOR,[Sl]:s.CONSTANT_ALPHA,[wl]:s.ONE_MINUS_CONSTANT_ALPHA};function L(D,dt,Z,et,_t,ft,Gt,fe,Ee,ie){if(D===In){v===!0&&(St(s.BLEND),v=!1);return}if(v===!1&&(rt(s.BLEND),v=!0),D!==ol){if(D!==m||ie!==T){if((d!==Xn||_!==Xn)&&(s.blendEquation(s.FUNC_ADD),d=Xn,_=Xn),ie)switch(D){case mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Is:s.blendFunc(s.ONE,s.ONE);break;case Xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Is:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,x=null,R=null,b=null,C.set(0,0,0),I=0,m=D,T=ie}return}_t=_t||dt,ft=ft||Z,Gt=Gt||et,(dt!==d||_t!==_)&&(s.blendEquationSeparate(Ut[dt],Ut[_t]),d=dt,_=_t),(Z!==M||et!==x||ft!==R||Gt!==b)&&(s.blendFuncSeparate(Qt[Z],Qt[et],Qt[ft],Qt[Gt]),M=Z,x=et,R=ft,b=Gt),(fe.equals(C)===!1||Ee!==I)&&(s.blendColor(fe.r,fe.g,fe.b,Ee),C.copy(fe),I=Ee),m=D,T=!1}function me(D,dt){D.side===Ze?St(s.CULL_FACE):rt(s.CULL_FACE);let Z=D.side===De;dt&&(Z=!Z),zt(Z),D.blending===mi&&D.transparent===!1?L(In):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const et=D.stencilWrite;a.setTest(et),et&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):St(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){S!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),S=D)}function Bt(D){D!==sl?(rt(s.CULL_FACE),D!==P&&(D===Wo?s.cullFace(s.BACK):D===rl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):St(s.CULL_FACE),P=D}function Mt(D){D!==k&&(H&&s.lineWidth(D),k=D)}function Lt(D,dt,Z){D?(rt(s.POLYGON_OFFSET_FILL),(O!==dt||V!==Z)&&(s.polygonOffset(dt,Z),O=dt,V=Z)):St(s.POLYGON_OFFSET_FILL)}function xt(D){D?rt(s.SCISSOR_TEST):St(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+X-1),$!==D&&(s.activeTexture(D),$=D)}function y(D,dt,Z){Z===void 0&&($===null?Z=s.TEXTURE0+X-1:Z=$);let et=st[Z];et===void 0&&(et={type:void 0,texture:void 0},st[Z]=et),(et.type!==D||et.texture!==dt)&&($!==Z&&(s.activeTexture(Z),$=Z),s.bindTexture(D,dt||mt[D]),et.type=D,et.texture=dt)}function B(){const D=st[$];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(D){qt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),qt.copy(D))}function yt(D){Q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Q.copy(D))}function $t(D,dt){let Z=l.get(dt);Z===void 0&&(Z=new WeakMap,l.set(dt,Z));let et=Z.get(D);et===void 0&&(et=s.getUniformBlockIndex(dt,D.name),Z.set(D,et))}function Wt(D,dt){const et=l.get(dt).get(D);c.get(dt)!==et&&(s.uniformBlockBinding(dt,et,D.__bindingPointIndex),c.set(dt,et))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},$=null,st={},u={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,M=null,x=null,_=null,R=null,b=null,C=new Zt(0,0,0),I=0,T=!1,S=null,P=null,k=null,O=null,V=null,qt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:St,bindFramebuffer:Rt,drawBuffers:Ft,useProgram:jt,setBlending:L,setMaterial:me,setFlipSided:zt,setCullFace:Bt,setLineWidth:Mt,setPolygonOffset:Lt,setScissorTest:xt,activeTexture:A,bindTexture:y,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:tt,texImage2D:gt,texImage3D:It,updateUBOMapping:$t,uniformBlockBinding:Wt,texStorage2D:Dt,texStorage3D:nt,texSubImage2D:q,texSubImage3D:lt,compressedTexSubImage2D:at,compressedTexSubImage3D:vt,scissor:Ot,viewport:yt,reset:ae}}function za(s,t,e,n){const i=Xp(n);switch(e){case fc:return s*t;case mc:return s*t;case gc:return s*t*2;case _c:return s*t/i.components*i.byteLength;case yo:return s*t/i.components*i.byteLength;case vc:return s*t*2/i.components*i.byteLength;case Mo:return s*t*2/i.components*i.byteLength;case pc:return s*t*3/i.components*i.byteLength;case Je:return s*t*4/i.components*i.byteLength;case So:return s*t*4/i.components*i.byteLength;case ys:case Ms:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ss:case ws:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ur:case Br:return Math.max(s,16)*Math.max(t,8)/4;case Nr:case Fr:return Math.max(s,8)*Math.max(t,8)/2;case Or:case kr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Vr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case qr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Yr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Kr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case $r:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Zr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case jr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Jr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Qr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case to:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Es:case eo:case no:return Math.ceil(s/4)*Math.ceil(t/4)*16;case xc:case io:return Math.ceil(s/4)*Math.ceil(t/4)*8;case so:case ro:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xp(s){switch(s){case yn:case hc:return{byteLength:1,components:1};case Gi:case uc:case Hi:return{byteLength:2,components:1};case vo:case xo:return{byteLength:2,components:4};case $n:case _o:case _n:return{byteLength:4,components:1};case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function qp(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Yt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return p?new OffscreenCanvas(A,y):Ds("canvas")}function v(A,y,B){let Y=1;const tt=xt(A);if((tt.width>B||tt.height>B)&&(Y=B/Math.max(tt.width,tt.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(Y*tt.width),lt=Math.floor(Y*tt.height);u===void 0&&(u=g(q,lt));const at=y?g(q,lt):u;return at.width=q,at.height=lt,at.getContext("2d").drawImage(A,0,0,q,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+q+"x"+lt+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){s.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(A,y,B,Y,tt=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=y;if(y===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),y===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),y===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),y===s.RGBA){const lt=tt?Us:Jt.getTransfer(Y);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=lt===se?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(A,y){let B;return A?y===null||y===$n||y===Mi?B=s.DEPTH24_STENCIL8:y===_n?B=s.DEPTH32F_STENCIL8:y===Gi&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===$n||y===Mi?B=s.DEPTH_COMPONENT24:y===_n?B=s.DEPTH_COMPONENT32F:y===Gi&&(B=s.DEPTH_COMPONENT16),B}function R(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Qe&&A.minFilter!==rn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function b(A){const y=A.target;y.removeEventListener("dispose",b),I(y),y.isVideoTexture&&h.delete(y)}function C(A){const y=A.target;y.removeEventListener("dispose",C),S(y)}function I(A){const y=n.get(A);if(y.__webglInit===void 0)return;const B=A.source,Y=f.get(B);if(Y){const tt=Y[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&T(A),Object.keys(Y).length===0&&f.delete(B)}n.remove(A)}function T(A){const y=n.get(A);s.deleteTexture(y.__webglTexture);const B=A.source,Y=f.get(B);delete Y[y.__cacheKey],o.memory.textures--}function S(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(y.__webglFramebuffer[Y]))for(let tt=0;tt<y.__webglFramebuffer[Y].length;tt++)s.deleteFramebuffer(y.__webglFramebuffer[Y][tt]);else s.deleteFramebuffer(y.__webglFramebuffer[Y]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Y])}else{if(Array.isArray(y.__webglFramebuffer))for(let Y=0;Y<y.__webglFramebuffer.length;Y++)s.deleteFramebuffer(y.__webglFramebuffer[Y]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Y=0;Y<y.__webglColorRenderbuffer.length;Y++)y.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=A.textures;for(let Y=0,tt=B.length;Y<tt;Y++){const q=n.get(B[Y]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(B[Y])}n.remove(A)}let P=0;function k(){P=0}function O(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){const B=n.get(A);if(A.isVideoTexture&&Mt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(B,A,y);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function H(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Q(B,A,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function J(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){Q(B,A,y);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function W(A,y){const B=n.get(A);if(A.version>0&&B.__version!==A.version){it(B,A,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}const $={[nn]:s.REPEAT,[Yn]:s.CLAMP_TO_EDGE,[Dr]:s.MIRRORED_REPEAT},st={[Qe]:s.NEAREST,[Ll]:s.NEAREST_MIPMAP_NEAREST,[Ki]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[Gs]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},ht={[Fl]:s.NEVER,[Hl]:s.ALWAYS,[Bl]:s.LESS,[Mc]:s.LEQUAL,[Ol]:s.EQUAL,[Gl]:s.GEQUAL,[kl]:s.GREATER,[zl]:s.NOTEQUAL};function Ct(A,y){if(y.type===_n&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===Gs||y.magFilter===Ki||y.magFilter===Kn||y.minFilter===rn||y.minFilter===Gs||y.minFilter===Ki||y.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,$[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,$[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,$[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,st[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ht[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Qe||y.minFilter!==Ki&&y.minFilter!==Kn||y.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function qt(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",b));const Y=y.source;let tt=f.get(Y);tt===void 0&&(tt={},f.set(Y,tt));const q=V(y);if(q!==A.__cacheKey){tt[q]===void 0&&(tt[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[q].usedTimes++;const lt=tt[A.__cacheKey];lt!==void 0&&(tt[A.__cacheKey].usedTimes--,lt.usedTimes===0&&T(y)),A.__cacheKey=q,A.__webglTexture=tt[q].texture}return B}function Q(A,y,B){let Y=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Y=s.TEXTURE_3D);const tt=qt(A,y),q=y.source;e.bindTexture(Y,A.__webglTexture,s.TEXTURE0+B);const lt=n.get(q);if(q.version!==lt.__version||tt===!0){e.activeTexture(s.TEXTURE0+B);const at=Jt.getPrimaries(Jt.workingColorSpace),vt=y.colorSpace===Pn?null:Jt.getPrimaries(y.colorSpace),Dt=y.colorSpace===Pn||at===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let nt=v(y.image,!1,i.maxTextureSize);nt=Lt(y,nt);const gt=r.convert(y.format,y.colorSpace),It=r.convert(y.type);let Ot=x(y.internalFormat,gt,It,y.colorSpace,y.isVideoTexture);Ct(Y,y);let yt;const $t=y.mipmaps,Wt=y.isVideoTexture!==!0,ae=lt.__version===void 0||tt===!0,D=q.dataReady,dt=R(y,nt);if(y.isDepthTexture)Ot=_(y.format===Si,y.type),ae&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Ot,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Ot,nt.width,nt.height,0,gt,It,null));else if(y.isDataTexture)if($t.length>0){Wt&&ae&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,$t[0].width,$t[0].height);for(let Z=0,et=$t.length;Z<et;Z++)yt=$t[Z],Wt?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,yt.width,yt.height,gt,It,yt.data):e.texImage2D(s.TEXTURE_2D,Z,Ot,yt.width,yt.height,0,gt,It,yt.data);y.generateMipmaps=!1}else Wt?(ae&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,nt.width,nt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,It,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Ot,nt.width,nt.height,0,gt,It,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,$t[0].width,$t[0].height,nt.depth);for(let Z=0,et=$t.length;Z<et;Z++)if(yt=$t[Z],y.format!==Je)if(gt!==null)if(Wt){if(D)if(y.layerUpdates.size>0){const _t=za(yt.width,yt.height,y.format,y.type);for(const ft of y.layerUpdates){const Gt=yt.data.subarray(ft*_t/yt.data.BYTES_PER_ELEMENT,(ft+1)*_t/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,ft,yt.width,yt.height,1,gt,Gt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,nt.depth,gt,yt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Ot,yt.width,yt.height,nt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,yt.width,yt.height,nt.depth,gt,It,yt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Ot,yt.width,yt.height,nt.depth,0,gt,It,yt.data)}else{Wt&&ae&&e.texStorage2D(s.TEXTURE_2D,dt,Ot,$t[0].width,$t[0].height);for(let Z=0,et=$t.length;Z<et;Z++)yt=$t[Z],y.format!==Je?gt!==null?Wt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,yt.width,yt.height,gt,yt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Ot,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,yt.width,yt.height,gt,It,yt.data):e.texImage2D(s.TEXTURE_2D,Z,Ot,yt.width,yt.height,0,gt,It,yt.data)}else if(y.isDataArrayTexture)if(Wt){if(ae&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,Ot,nt.width,nt.height,nt.depth),D)if(y.layerUpdates.size>0){const Z=za(nt.width,nt.height,y.format,y.type);for(const et of y.layerUpdates){const _t=nt.data.subarray(et*Z/nt.data.BYTES_PER_ELEMENT,(et+1)*Z/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,nt.width,nt.height,1,gt,It,_t)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,It,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ot,nt.width,nt.height,nt.depth,0,gt,It,nt.data);else if(y.isData3DTexture)Wt?(ae&&e.texStorage3D(s.TEXTURE_3D,dt,Ot,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,It,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Ot,nt.width,nt.height,nt.depth,0,gt,It,nt.data);else if(y.isFramebufferTexture){if(ae)if(Wt)e.texStorage2D(s.TEXTURE_2D,dt,Ot,nt.width,nt.height);else{let Z=nt.width,et=nt.height;for(let _t=0;_t<dt;_t++)e.texImage2D(s.TEXTURE_2D,_t,Ot,Z,et,0,gt,It,null),Z>>=1,et>>=1}}else if($t.length>0){if(Wt&&ae){const Z=xt($t[0]);e.texStorage2D(s.TEXTURE_2D,dt,Ot,Z.width,Z.height)}for(let Z=0,et=$t.length;Z<et;Z++)yt=$t[Z],Wt?D&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,gt,It,yt):e.texImage2D(s.TEXTURE_2D,Z,Ot,gt,It,yt);y.generateMipmaps=!1}else if(Wt){if(ae){const Z=xt(nt);e.texStorage2D(s.TEXTURE_2D,dt,Ot,Z.width,Z.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,It,nt)}else e.texImage2D(s.TEXTURE_2D,0,Ot,gt,It,nt);m(y)&&d(Y),lt.__version=q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function it(A,y,B){if(y.image.length!==6)return;const Y=qt(A,y),tt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const q=n.get(tt);if(tt.version!==q.__version||Y===!0){e.activeTexture(s.TEXTURE0+B);const lt=Jt.getPrimaries(Jt.workingColorSpace),at=y.colorSpace===Pn?null:Jt.getPrimaries(y.colorSpace),vt=y.colorSpace===Pn||lt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Dt=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let et=0;et<6;et++)!Dt&&!nt?gt[et]=v(y.image[et],!0,i.maxCubemapSize):gt[et]=nt?y.image[et].image:y.image[et],gt[et]=Lt(y,gt[et]);const It=gt[0],Ot=r.convert(y.format,y.colorSpace),yt=r.convert(y.type),$t=x(y.internalFormat,Ot,yt,y.colorSpace),Wt=y.isVideoTexture!==!0,ae=q.__version===void 0||Y===!0,D=tt.dataReady;let dt=R(y,It);Ct(s.TEXTURE_CUBE_MAP,y);let Z;if(Dt){Wt&&ae&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,$t,It.width,It.height);for(let et=0;et<6;et++){Z=gt[et].mipmaps;for(let _t=0;_t<Z.length;_t++){const ft=Z[_t];y.format!==Je?Ot!==null?Wt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,0,0,ft.width,ft.height,Ot,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,$t,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,0,0,ft.width,ft.height,Ot,yt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t,$t,ft.width,ft.height,0,Ot,yt,ft.data)}}}else{if(Z=y.mipmaps,Wt&&ae){Z.length>0&&dt++;const et=xt(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,$t,et.width,et.height)}for(let et=0;et<6;et++)if(nt){Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,gt[et].width,gt[et].height,Ot,yt,gt[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,gt[et].width,gt[et].height,0,Ot,yt,gt[et].data);for(let _t=0;_t<Z.length;_t++){const Gt=Z[_t].image[et].image;Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,0,0,Gt.width,Gt.height,Ot,yt,Gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,$t,Gt.width,Gt.height,0,Ot,yt,Gt.data)}}else{Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ot,yt,gt[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,$t,Ot,yt,gt[et]);for(let _t=0;_t<Z.length;_t++){const ft=Z[_t];Wt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,0,0,Ot,yt,ft.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t+1,$t,Ot,yt,ft.image[et])}}}m(y)&&d(s.TEXTURE_CUBE_MAP),q.__version=tt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function mt(A,y,B,Y,tt,q){const lt=r.convert(B.format,B.colorSpace),at=r.convert(B.type),vt=x(B.internalFormat,lt,at,B.colorSpace),Dt=n.get(y),nt=n.get(B);if(nt.__renderTarget=y,!Dt.__hasExternalTextures){const gt=Math.max(1,y.width>>q),It=Math.max(1,y.height>>q);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,q,vt,gt,It,y.depth,0,lt,at,null):e.texImage2D(tt,q,vt,gt,It,0,lt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Bt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,tt,nt.__webglTexture,0,zt(y)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,tt,nt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(A,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){const Y=y.depthTexture,tt=Y&&Y.isDepthTexture?Y.type:null,q=_(y.stencilBuffer,tt),lt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=zt(y);Bt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,q,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,q,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,q,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,A)}else{const Y=y.textures;for(let tt=0;tt<Y.length;tt++){const q=Y[tt],lt=r.convert(q.format,q.colorSpace),at=r.convert(q.type),vt=x(q.internalFormat,lt,at,q.colorSpace),Dt=zt(y);B&&Bt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,vt,y.width,y.height):Bt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,vt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,vt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(y.depthTexture);Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);const tt=Y.__webglTexture,q=zt(y);if(y.depthTexture.format===gi)Bt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(y.depthTexture.format===Si)Bt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Rt(A){const y=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Y){const tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Y.removeEventListener("dispose",tt)};Y.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=Y}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");St(y.__webglFramebuffer,A)}else if(B){y.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Y]),y.__webglDepthbuffer[Y]===void 0)y.__webglDepthbuffer[Y]=s.createRenderbuffer(),rt(y.__webglDepthbuffer[Y],A,!1);else{const tt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),rt(y.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(A,y,B){const Y=n.get(A);y!==void 0&&mt(Y.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Rt(A)}function jt(A){const y=A.texture,B=n.get(A),Y=n.get(y);A.addEventListener("dispose",C);const tt=A.textures,q=A.isWebGLCubeRenderTarget===!0,lt=tt.length>1;if(lt||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=y.version,o.memory.textures++),q){B.__webglFramebuffer=[];for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[at]=[];for(let vt=0;vt<y.mipmaps.length;vt++)B.__webglFramebuffer[at][vt]=s.createFramebuffer()}else B.__webglFramebuffer[at]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)B.__webglFramebuffer[at]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(lt)for(let at=0,vt=tt.length;at<vt;at++){const Dt=n.get(tt[at]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Bt(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let at=0;at<tt.length;at++){const vt=tt[at];B.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[at]);const Dt=r.convert(vt.format,vt.colorSpace),nt=r.convert(vt.type),gt=x(vt.internalFormat,Dt,nt,vt.colorSpace,A.isXRRenderTarget===!0),It=zt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,gt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,B.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,y);for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)mt(B.__webglFramebuffer[at][vt],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,vt);else mt(B.__webglFramebuffer[at],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(y)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let at=0,vt=tt.length;at<vt;at++){const Dt=tt[at],nt=n.get(Dt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),Ct(s.TEXTURE_2D,Dt),mt(B.__webglFramebuffer,A,Dt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),m(Dt)&&d(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),Ct(at,y),y.mipmaps&&y.mipmaps.length>0)for(let vt=0;vt<y.mipmaps.length;vt++)mt(B.__webglFramebuffer[vt],A,y,s.COLOR_ATTACHMENT0,at,vt);else mt(B.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,at,0);m(y)&&d(at),e.unbindTexture()}A.depthBuffer&&Rt(A)}function Ut(A){const y=A.textures;for(let B=0,Y=y.length;B<Y;B++){const tt=y[B];if(m(tt)){const q=M(A),lt=n.get(tt).__webglTexture;e.bindTexture(q,lt),d(q),e.unbindTexture()}}}const Qt=[],L=[];function me(A){if(A.samples>0){if(Bt(A)===!1){const y=A.textures,B=A.width,Y=A.height;let tt=s.COLOR_BUFFER_BIT;const q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(A),at=y.length>1;if(at)for(let vt=0;vt<y.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[vt]);const Dt=n.get(y[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Dt,0)}s.blitFramebuffer(0,0,B,Y,0,0,B,Y,tt,s.NEAREST),c===!0&&(Qt.length=0,L.length=0,Qt.push(s.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Qt.push(q),L.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let vt=0;vt<y.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[vt]);const Dt=n.get(y[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function zt(A){return Math.min(i.maxSamples,A.samples)}function Bt(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(A){const y=o.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Lt(A,y){const B=A.colorSpace,Y=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ei&&B!==Pn&&(Jt.getTransfer(B)===se?(Y!==Je||tt!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function xt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=Ft,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Bt}function Yp(s,t){function e(n,i=Pn){let r;const o=Jt.getTransfer(i);if(n===yn)return s.UNSIGNED_BYTE;if(n===vo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hc)return s.BYTE;if(n===uc)return s.SHORT;if(n===Gi)return s.UNSIGNED_SHORT;if(n===_o)return s.INT;if(n===$n)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===Hi)return s.HALF_FLOAT;if(n===fc)return s.ALPHA;if(n===pc)return s.RGB;if(n===Je)return s.RGBA;if(n===mc)return s.LUMINANCE;if(n===gc)return s.LUMINANCE_ALPHA;if(n===gi)return s.DEPTH_COMPONENT;if(n===Si)return s.DEPTH_STENCIL;if(n===_c)return s.RED;if(n===yo)return s.RED_INTEGER;if(n===vc)return s.RG;if(n===Mo)return s.RG_INTEGER;if(n===So)return s.RGBA_INTEGER;if(n===ys||n===Ms||n===Ss||n===ws)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nr||n===Ur||n===Fr||n===Br)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Or||n===kr||n===zr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Or||n===kr)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gr||n===Hr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===Kr||n===$r||n===Zr||n===jr||n===Jr||n===Qr||n===to)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$r)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qr)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===to)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Es||n===eo||n===no)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Es)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===no)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===io||n===so||n===ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Es)return r.COMPRESSED_RED_RGTC1_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===so)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Kp extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pt extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $p={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($p)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jp=`
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

}`;class Jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Re,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Nn({vertexShader:Zp,fragmentShader:jp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new E(new Ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qp extends Ti{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const v=new Jp,m=e.getContextAttributes();let d=null,M=null;const x=[],_=[],R=new Yt;let b=null;const C=new Oe;C.viewport=new re;const I=new Oe;I.viewport=new re;const T=[C,I],S=new Kp;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let it=x[Q];return it===void 0&&(it=new gr,x[Q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Q){let it=x[Q];return it===void 0&&(it=new gr,x[Q]=it),it.getGripSpace()},this.getHand=function(Q){let it=x[Q];return it===void 0&&(it=new gr,x[Q]=it),it.getHandSpace()};function O(Q){const it=_.indexOf(Q.inputSource);if(it===-1)return;const mt=x[it];mt!==void 0&&(mt.update(Q.inputSource,Q.frame,l||o),mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let Q=0;Q<x.length;Q++){const it=_[Q];it!==null&&(_[Q]=null,x[Q].disconnect(it))}P=null,k=null,v.reset(),t.setRenderTarget(d),p=null,f=null,u=null,i=null,M=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Je,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,mt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Si:gi,mt=m.stencil?Mi:$n);const St={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(St),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Zn(f.textureWidth,f.textureHeight,{format:Je,type:yn,depthTexture:new Dc(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(Q){for(let it=0;it<Q.removed.length;it++){const mt=Q.removed[it],rt=_.indexOf(mt);rt>=0&&(_[rt]=null,x[rt].disconnect(mt))}for(let it=0;it<Q.added.length;it++){const mt=Q.added[it];let rt=_.indexOf(mt);if(rt===-1){for(let Rt=0;Rt<x.length;Rt++)if(Rt>=_.length){_.push(mt),rt=Rt;break}else if(_[Rt]===null){_[Rt]=mt,rt=Rt;break}if(rt===-1)break}const St=x[rt];St&&St.connect(mt)}}const H=new N,J=new N;function W(Q,it,mt){H.setFromMatrixPosition(it.matrixWorld),J.setFromMatrixPosition(mt.matrixWorld);const rt=H.distanceTo(J),St=it.projectionMatrix.elements,Rt=mt.projectionMatrix.elements,Ft=St[14]/(St[10]-1),jt=St[14]/(St[10]+1),Ut=(St[9]+1)/St[5],Qt=(St[9]-1)/St[5],L=(St[8]-1)/St[0],me=(Rt[8]+1)/Rt[0],zt=Ft*L,Bt=Ft*me,Mt=rt/(-L+me),Lt=Mt*-L;if(it.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Lt),Q.translateZ(Mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),St[10]===-1)Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const xt=Ft+Mt,A=jt+Mt,y=zt-Lt,B=Bt+(rt-Lt),Y=Ut*jt/A*xt,tt=Qt*jt/A*xt;Q.projectionMatrix.makePerspective(y,B,Y,tt,xt,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function $(Q,it){it===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(it.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let it=Q.near,mt=Q.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(mt=v.depthFar)),S.near=I.near=C.near=it,S.far=I.far=C.far=mt,(P!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,k=S.far),C.layers.mask=Q.layers.mask|2,I.layers.mask=Q.layers.mask|4,S.layers.mask=C.layers.mask|I.layers.mask;const rt=Q.parent,St=S.cameras;$(S,rt);for(let Rt=0;Rt<St.length;Rt++)$(St[Rt],rt);St.length===2?W(S,C,I):S.projectionMatrix.copy(C.projectionMatrix),st(Q,S,rt)};function st(Q,it,mt){mt===null?Q.matrix.copy(it.matrixWorld):(Q.matrix.copy(mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(it.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=oo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ht=null;function Ct(Q,it){if(h=it.getViewerPose(l||o),g=it,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let rt=!1;mt.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let Rt=0;Rt<mt.length;Rt++){const Ft=mt[Rt];let jt=null;if(p!==null)jt=p.getViewport(Ft);else{const Qt=u.getViewSubImage(f,Ft);jt=Qt.viewport,Rt===0&&(t.setRenderTargetTextures(M,Qt.colorTexture,f.ignoreDepthValues?void 0:Qt.depthStencilTexture),t.setRenderTarget(M))}let Ut=T[Rt];Ut===void 0&&(Ut=new Oe,Ut.layers.enable(Rt),Ut.viewport=new re,T[Rt]=Ut),Ut.matrix.fromArray(Ft.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Ft.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(jt.x,jt.y,jt.width,jt.height),Rt===0&&(S.matrix.copy(Ut.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(Ut)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")){const Rt=u.getDepthInformation(mt[0]);Rt&&Rt.isValid&&Rt.texture&&v.init(t,Rt,i.renderState)}}for(let mt=0;mt<x.length;mt++){const rt=_[mt],St=x[mt];rt!==null&&St!==void 0&&St.update(rt,it,l||o)}ht&&ht(Q,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const qt=new Ic;qt.setAnimationLoop(Ct),this.setAnimationLoop=function(Q){ht=Q},this.dispose=function(){}}}const Gn=new an,tm=new oe;function em(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Cc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,M,x,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===De&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===De&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),x=M.envMap,_=M.envMapRotation;x&&(m.envMap.value=x,Gn.copy(_),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(tm.makeRotationFromEuler(Gn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===De&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function nm(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const _=x.program;n.uniformBlockBinding(M,_)}function l(M,x){let _=i[M.id];_===void 0&&(g(M),_=h(M),i[M.id]=_,M.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(M,R);const b=t.render.frame;r[M.id]!==b&&(f(M),r[M.id]=b)}function h(M){const x=u();M.__bindingPointIndex=x;const _=s.createBuffer(),R=M.__size,b=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,R,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=i[M.id],_=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,C=_.length;b<C;b++){const I=Array.isArray(_[b])?_[b]:[_[b]];for(let T=0,S=I.length;T<S;T++){const P=I[T];if(p(P,b,T,R)===!0){const k=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let X=0;X<O.length;X++){const H=O[X],J=v(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,k+V,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,V),V+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,x,_,R){const b=M.value,C=x+"_"+_;if(R[C]===void 0)return typeof b=="number"||typeof b=="boolean"?R[C]=b:R[C]=b.clone(),!0;{const I=R[C];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return R[C]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(M){const x=M.uniforms;let _=0;const R=16;for(let C=0,I=x.length;C<I;C++){const T=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,P=T.length;S<P;S++){const k=T[S],O=Array.isArray(k.value)?k.value:[k.value];for(let V=0,X=O.length;V<X;V++){const H=O[V],J=v(H),W=_%R,$=W%J.boundary,st=W+$;_+=$,st!==0&&R-st<J.storage&&(_+=R-st),k.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=J.storage}}}const b=_%R;return b>0&&(_+=R-b),M.__size=_,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}class im{constructor(t={}){const{canvas:e=Wl(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=Ln,this.toneMappingExposure=1;const _=this;let R=!1,b=0,C=0,I=null,T=-1,S=null;const P=new re,k=new re;let O=null;const V=new Zt(0);let X=0,H=e.width,J=e.height,W=1,$=null,st=null;const ht=new re(0,0,H,J),Ct=new re(0,0,H,J);let qt=!1;const Q=new To;let it=!1,mt=!1;const rt=new oe,St=new oe,Rt=new N,Ft=new re,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Qt(){return I===null?W:1}let L=n;function me(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${go}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",ft,!1),L===null){const U="webgl2";if(L=me(U,w),L===null)throw me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let zt,Bt,Mt,Lt,xt,A,y,B,Y,tt,q,lt,at,vt,Dt,nt,gt,It,Ot,yt,$t,Wt,ae,D;function dt(){zt=new cf(L),zt.init(),Wt=new Yp(L,zt),Bt=new ef(L,zt,t,Wt),Mt=new Wp(L,zt),Bt.reverseDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),Lt=new uf(L),xt=new Rp,A=new qp(L,zt,Mt,xt,Bt,Wt,Lt),y=new sf(_),B=new af(_),Y=new _h(L),ae=new Qd(L,Y),tt=new lf(L,Y,Lt,ae),q=new ff(L,tt,Y,Lt),Ot=new df(L,Bt,A),nt=new nf(xt),lt=new Cp(_,y,B,zt,Bt,ae,nt),at=new em(_,xt),vt=new Ip,Dt=new Bp(zt),It=new Jd(_,y,B,Mt,q,p,c),gt=new Hp(_,q,Bt),D=new nm(L,Lt,Bt,Mt),yt=new tf(L,zt,Lt),$t=new hf(L,zt,Lt),Lt.programs=lt.programs,_.capabilities=Bt,_.extensions=zt,_.properties=xt,_.renderLists=vt,_.shadowMap=gt,_.state=Mt,_.info=Lt}dt();const Z=new Qp(_,L);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(H,J,!1))},this.getSize=function(w){return w.set(H,J)},this.setSize=function(w,U,z=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,J=U,e.width=Math.floor(w*W),e.height=Math.floor(U*W),z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(H*W,J*W).floor()},this.setDrawingBufferSize=function(w,U,z){H=w,J=U,W=z,e.width=Math.floor(w*z),e.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ht)},this.setViewport=function(w,U,z,G){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,U,z,G),Mt.viewport(P.copy(ht).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(Ct)},this.setScissor=function(w,U,z,G){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,U,z,G),Mt.scissor(k.copy(Ct).multiplyScalar(W).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(w){Mt.setScissorTest(qt=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){st=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,U=!0,z=!0){let G=0;if(w){let F=!1;if(I!==null){const ot=I.texture.format;F=ot===So||ot===Mo||ot===yo}if(F){const ot=I.texture.type,pt=ot===yn||ot===$n||ot===Gi||ot===Mi||ot===vo||ot===xo,wt=It.getClearColor(),Et=It.getClearAlpha(),kt=wt.r,Ht=wt.g,Tt=wt.b;pt?(g[0]=kt,g[1]=Ht,g[2]=Tt,g[3]=Et,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=kt,v[1]=Ht,v[2]=Tt,v[3]=Et,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT),z&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),vt.dispose(),Dt.dispose(),xt.dispose(),y.dispose(),B.dispose(),q.dispose(),ae.dispose(),D.dispose(),lt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Fo),Z.removeEventListener("sessionend",Bo),Un.stop()};function et(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=Lt.autoReset,U=gt.enabled,z=gt.autoUpdate,G=gt.needsUpdate,F=gt.type;dt(),Lt.autoReset=w,gt.enabled=U,gt.autoUpdate=z,gt.needsUpdate=G,gt.type=F}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Gt(w){const U=w.target;U.removeEventListener("dispose",Gt),fe(U)}function fe(w){Ee(w),xt.remove(w)}function Ee(w){const U=xt.get(w).programs;U!==void 0&&(U.forEach(function(z){lt.releaseProgram(z)}),w.isShaderMaterial&&lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,G,F,ot){U===null&&(U=jt);const pt=F.isMesh&&F.matrixWorld.determinant()<0,wt=el(w,U,z,G,F);Mt.setMaterial(G,pt);let Et=z.index,kt=1;if(G.wireframe===!0){if(Et=tt.getWireframeAttribute(z),Et===void 0)return;kt=2}const Ht=z.drawRange,Tt=z.attributes.position;let te=Ht.start*kt,ce=(Ht.start+Ht.count)*kt;ot!==null&&(te=Math.max(te,ot.start*kt),ce=Math.min(ce,(ot.start+ot.count)*kt)),Et!==null?(te=Math.max(te,0),ce=Math.min(ce,Et.count)):Tt!=null&&(te=Math.max(te,0),ce=Math.min(ce,Tt.count));const le=ce-te;if(le<0||le===1/0)return;ae.setup(F,G,wt,z,Et);let Pe,ee=yt;if(Et!==null&&(Pe=Y.get(Et),ee=$t,ee.setIndex(Pe)),F.isMesh)G.wireframe===!0?(Mt.setLineWidth(G.wireframeLinewidth*Qt()),ee.setMode(L.LINES)):ee.setMode(L.TRIANGLES);else if(F.isLine){let bt=G.linewidth;bt===void 0&&(bt=1),Mt.setLineWidth(bt*Qt()),F.isLineSegments?ee.setMode(L.LINES):F.isLineLoop?ee.setMode(L.LINE_LOOP):ee.setMode(L.LINE_STRIP)}else F.isPoints?ee.setMode(L.POINTS):F.isSprite&&ee.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ee.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))ee.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,hn=F._multiDrawCounts,ne=F._multiDrawCount,We=Et?Y.get(Et).bytesPerElement:1,jn=xt.get(G).currentProgram.getUniforms();for(let Ue=0;Ue<ne;Ue++)jn.setValue(L,"_gl_DrawID",Ue),ee.render(bt[Ue]/We,hn[Ue])}else if(F.isInstancedMesh)ee.renderInstances(te,le,F.count);else if(z.isInstancedBufferGeometry){const bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,hn=Math.min(z.instanceCount,bt);ee.renderInstances(te,le,hn)}else ee.render(te,le)};function ie(w,U,z){w.transparent===!0&&w.side===Ze&&w.forceSinglePass===!1?(w.side=De,w.needsUpdate=!0,Yi(w,U,z),w.side=Dn,w.needsUpdate=!0,Yi(w,U,z),w.side=Ze):Yi(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),d=Dt.get(z),d.init(U),x.push(d),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),w!==z&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const G=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ot=F.material;if(ot)if(Array.isArray(ot))for(let pt=0;pt<ot.length;pt++){const wt=ot[pt];ie(wt,z,F),G.add(wt)}else ie(ot,z,F),G.add(ot)}),x.pop(),d=null,G},this.compileAsync=function(w,U,z=null){const G=this.compile(w,U,z);return new Promise(F=>{function ot(){if(G.forEach(function(pt){xt.get(pt).currentProgram.isReady()&&G.delete(pt)}),G.size===0){F(w);return}setTimeout(ot,10)}zt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Ve=null;function ln(w){Ve&&Ve(w)}function Fo(){Un.stop()}function Bo(){Un.start()}const Un=new Ic;Un.setAnimationLoop(ln),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(w){Ve=w,Z.setAnimationLoop(w),w===null?Un.stop():Un.start()},Z.addEventListener("sessionstart",Fo),Z.addEventListener("sessionend",Bo),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,U,I),d=Dt.get(w,x.length),d.init(U),x.push(d),St.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(St),mt=this.localClippingEnabled,it=nt.init(this.clippingPlanes,mt),m=vt.get(w,M.length),m.init(),M.push(m),Z.enabled===!0&&Z.isPresenting===!0){const ot=_.xr.getDepthSensingMesh();ot!==null&&zs(ot,U,-1/0,_.sortObjects)}zs(w,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort($,st),Ut=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Ut&&It.addToRenderList(m,w),this.info.render.frame++,it===!0&&nt.beginShadows();const z=d.state.shadowsArray;gt.render(z,w,U),it===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(d.setupLights(),U.isArrayCamera){const ot=U.cameras;if(F.length>0)for(let pt=0,wt=ot.length;pt<wt;pt++){const Et=ot[pt];ko(G,F,w,Et)}Ut&&It.render(w);for(let pt=0,wt=ot.length;pt<wt;pt++){const Et=ot[pt];Oo(m,w,Et,Et.viewport)}}else F.length>0&&ko(G,F,w,U),Ut&&It.render(w),Oo(m,w,U);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(_,w,U),ae.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?(d=x[x.length-1],it===!0&&nt.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function zs(w,U,z,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){G&&Ft.setFromMatrixPosition(w.matrixWorld).applyMatrix4(St);const pt=q.update(w),wt=w.material;wt.visible&&m.push(w,pt,wt,z,Ft.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const pt=q.update(w),wt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ft.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Ft.copy(pt.boundingSphere.center)),Ft.applyMatrix4(w.matrixWorld).applyMatrix4(St)),Array.isArray(wt)){const Et=pt.groups;for(let kt=0,Ht=Et.length;kt<Ht;kt++){const Tt=Et[kt],te=wt[Tt.materialIndex];te&&te.visible&&m.push(w,pt,te,z,Ft.z,Tt)}}else wt.visible&&m.push(w,pt,wt,z,Ft.z,null)}}const ot=w.children;for(let pt=0,wt=ot.length;pt<wt;pt++)zs(ot[pt],U,z,G)}function Oo(w,U,z,G){const F=w.opaque,ot=w.transmissive,pt=w.transparent;d.setupLightsView(z),it===!0&&nt.setGlobalState(_.clippingPlanes,z),G&&Mt.viewport(P.copy(G)),F.length>0&&qi(F,U,z),ot.length>0&&qi(ot,U,z),pt.length>0&&qi(pt,U,z),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function ko(w,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Zn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Hi:yn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const ot=d.state.transmissionRenderTarget[G.id],pt=G.viewport||P;ot.setSize(pt.z,pt.w);const wt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(V),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Ut&&It.render(z);const Et=_.toneMapping;_.toneMapping=Ln;const kt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),it===!0&&nt.setGlobalState(_.clippingPlanes,G),qi(w,z,G),A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Tt=0,te=U.length;Tt<te;Tt++){const ce=U[Tt],le=ce.object,Pe=ce.geometry,ee=ce.material,bt=ce.group;if(ee.side===Ze&&le.layers.test(G.layers)){const hn=ee.side;ee.side=De,ee.needsUpdate=!0,zo(le,z,G,Pe,ee,bt),ee.side=hn,ee.needsUpdate=!0,Ht=!0}}Ht===!0&&(A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot))}_.setRenderTarget(wt),_.setClearColor(V,X),kt!==void 0&&(G.viewport=kt),_.toneMapping=Et}function qi(w,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ot=w.length;F<ot;F++){const pt=w[F],wt=pt.object,Et=pt.geometry,kt=G===null?pt.material:G,Ht=pt.group;wt.layers.test(z.layers)&&zo(wt,U,z,Et,kt,Ht)}}function zo(w,U,z,G,F,ot){w.onBeforeRender(_,U,z,G,F,ot),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(_,U,z,G,w,ot),F.transparent===!0&&F.side===Ze&&F.forceSinglePass===!1?(F.side=De,F.needsUpdate=!0,_.renderBufferDirect(z,U,G,F,w,ot),F.side=Dn,F.needsUpdate=!0,_.renderBufferDirect(z,U,G,F,w,ot),F.side=Ze):_.renderBufferDirect(z,U,G,F,w,ot),w.onAfterRender(_,U,z,G,F,ot)}function Yi(w,U,z){U.isScene!==!0&&(U=jt);const G=xt.get(w),F=d.state.lights,ot=d.state.shadowsArray,pt=F.state.version,wt=lt.getParameters(w,F.state,ot,U,z),Et=lt.getProgramCacheKey(wt);let kt=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?B:y).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,kt===void 0&&(w.addEventListener("dispose",Gt),kt=new Map,G.programs=kt);let Ht=kt.get(Et);if(Ht!==void 0){if(G.currentProgram===Ht&&G.lightsStateVersion===pt)return Ho(w,wt),Ht}else wt.uniforms=lt.getUniforms(w),w.onBeforeCompile(wt,_),Ht=lt.acquireProgram(wt,Et),kt.set(Et,Ht),G.uniforms=wt.uniforms;const Tt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),Ho(w,wt),G.needsLights=il(w),G.lightsStateVersion=pt,G.needsLights&&(Tt.ambientLightColor.value=F.state.ambient,Tt.lightProbe.value=F.state.probe,Tt.directionalLights.value=F.state.directional,Tt.directionalLightShadows.value=F.state.directionalShadow,Tt.spotLights.value=F.state.spot,Tt.spotLightShadows.value=F.state.spotShadow,Tt.rectAreaLights.value=F.state.rectArea,Tt.ltc_1.value=F.state.rectAreaLTC1,Tt.ltc_2.value=F.state.rectAreaLTC2,Tt.pointLights.value=F.state.point,Tt.pointLightShadows.value=F.state.pointShadow,Tt.hemisphereLights.value=F.state.hemi,Tt.directionalShadowMap.value=F.state.directionalShadowMap,Tt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Tt.spotShadowMap.value=F.state.spotShadowMap,Tt.spotLightMatrix.value=F.state.spotLightMatrix,Tt.spotLightMap.value=F.state.spotLightMap,Tt.pointShadowMap.value=F.state.pointShadowMap,Tt.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ht,G.uniformsList=null,Ht}function Go(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Ts.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Ho(w,U){const z=xt.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function el(w,U,z,G,F){U.isScene!==!0&&(U=jt),A.resetTextureUnits();const ot=U.fog,pt=G.isMeshStandardMaterial?U.environment:null,wt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ei,Et=(G.isMeshStandardMaterial?B:y).get(G.envMap||pt),kt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ht=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!z.morphAttributes.position,te=!!z.morphAttributes.normal,ce=!!z.morphAttributes.color;let le=Ln;G.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(le=_.toneMapping);const Pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ee=Pe!==void 0?Pe.length:0,bt=xt.get(G),hn=d.state.lights;if(it===!0&&(mt===!0||w!==S)){const ke=w===S&&G.id===T;nt.setState(G,w,ke)}let ne=!1;G.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==hn.state.version||bt.outputColorSpace!==wt||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==Et||G.fog===!0&&bt.fog!==ot||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==kt||bt.vertexTangents!==Ht||bt.morphTargets!==Tt||bt.morphNormals!==te||bt.morphColors!==ce||bt.toneMapping!==le||bt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,bt.__version=G.version);let We=bt.currentProgram;ne===!0&&(We=Yi(G,U,F));let jn=!1,Ue=!1,Ri=!1;const he=We.getUniforms(),tn=bt.uniforms;if(Mt.useProgram(We.program)&&(jn=!0,Ue=!0,Ri=!0),G.id!==T&&(T=G.id,Ue=!0),jn||S!==w){Mt.buffers.depth.getReversed()?(rt.copy(w.projectionMatrix),ql(rt),Yl(rt),he.setValue(L,"projectionMatrix",rt)):he.setValue(L,"projectionMatrix",w.projectionMatrix),he.setValue(L,"viewMatrix",w.matrixWorldInverse);const Mn=he.map.cameraPosition;Mn!==void 0&&Mn.setValue(L,Rt.setFromMatrixPosition(w.matrixWorld)),Bt.logarithmicDepthBuffer&&he.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&he.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,Ue=!0,Ri=!0)}if(F.isSkinnedMesh){he.setOptional(L,F,"bindMatrix"),he.setOptional(L,F,"bindMatrixInverse");const ke=F.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),he.setValue(L,"boneTexture",ke.boneTexture,A))}F.isBatchedMesh&&(he.setOptional(L,F,"batchingTexture"),he.setValue(L,"batchingTexture",F._matricesTexture,A),he.setOptional(L,F,"batchingIdTexture"),he.setValue(L,"batchingIdTexture",F._indirectTexture,A),he.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(L,"batchingColorTexture",F._colorsTexture,A));const Pi=z.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Ot.update(F,z,We),(Ue||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,he.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(tn.envMap.value=Et,tn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(tn.envMapIntensity.value=U.environmentIntensity),Ue&&(he.setValue(L,"toneMappingExposure",_.toneMappingExposure),bt.needsLights&&nl(tn,Ri),ot&&G.fog===!0&&at.refreshFogUniforms(tn,ot),at.refreshMaterialUniforms(tn,G,W,J,d.state.transmissionRenderTarget[w.id]),Ts.upload(L,Go(bt),tn,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ts.upload(L,Go(bt),tn,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&he.setValue(L,"center",F.center),he.setValue(L,"modelViewMatrix",F.modelViewMatrix),he.setValue(L,"normalMatrix",F.normalMatrix),he.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const ke=G.uniformsGroups;for(let Mn=0,Sn=ke.length;Mn<Sn;Mn++){const Vo=ke[Mn];D.update(Vo,We),D.bind(Vo,We)}}return We}function nl(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function il(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,U,z){xt.get(w.texture).__webglTexture=U,xt.get(w.depthTexture).__webglTexture=z;const G=xt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const z=xt.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,z=0){I=w,b=U,C=z;let G=!0,F=null,ot=!1,pt=!1;if(w){const Et=xt.get(w);if(Et.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(Et.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(Et.__hasExternalTextures)A.rebindTextures(w,xt.get(w.texture).__webglTexture,xt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Tt=w.depthTexture;if(Et.__boundDepthTexture!==Tt){if(Tt!==null&&xt.has(Tt)&&(w.width!==Tt.image.width||w.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const kt=w.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(pt=!0);const Ht=xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?F=Ht[U][z]:F=Ht[U],ot=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?F=xt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ht)?F=Ht[z]:F=Ht,P.copy(w.viewport),k.copy(w.scissor),O=w.scissorTest}else P.copy(ht).multiplyScalar(W).floor(),k.copy(Ct).multiplyScalar(W).floor(),O=qt;if(Mt.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&Mt.drawBuffers(w,F),Mt.viewport(P),Mt.scissor(k),Mt.setScissorTest(O),ot){const Et=xt.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,z)}else if(pt){const Et=xt.get(w.texture),kt=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,z||0,kt)}T=-1},this.readRenderTargetPixels=function(w,U,z,G,F,ot,pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){Mt.bindFramebuffer(L.FRAMEBUFFER,wt);try{const Et=w.texture,kt=Et.format,Ht=Et.type;if(!Bt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&z>=0&&z<=w.height-F&&L.readPixels(U,z,G,F,Wt.convert(kt),Wt.convert(Ht),ot)}finally{const Et=I!==null?xt.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,G,F,ot,pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){const Et=w.texture,kt=Et.format,Ht=Et.type;if(!Bt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&z>=0&&z<=w.height-F){Mt.bindFramebuffer(L.FRAMEBUFFER,wt);const Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,ot.byteLength,L.STREAM_READ),L.readPixels(U,z,G,F,Wt.convert(kt),Wt.convert(Ht),0);const te=I!==null?xt.get(I).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,te);const ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Xl(L,ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ot),L.deleteBuffer(Tt),L.deleteSync(ce),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,z=0){w.isTexture!==!0&&(Oi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-z),F=Math.floor(w.image.width*G),ot=Math.floor(w.image.height*G),pt=U!==null?U.x:0,wt=U!==null?U.y:0;A.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,pt,wt,F,ot),Mt.unbindTexture()},this.copyTextureToTexture=function(w,U,z=null,G=null,F=0){w.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],F=arguments[3]||0,z=null);let ot,pt,wt,Et,kt,Ht,Tt,te,ce;const le=w.isCompressedTexture?w.mipmaps[F]:w.image;z!==null?(ot=z.max.x-z.min.x,pt=z.max.y-z.min.y,wt=z.isBox3?z.max.z-z.min.z:1,Et=z.min.x,kt=z.min.y,Ht=z.isBox3?z.min.z:0):(ot=le.width,pt=le.height,wt=le.depth||1,Et=0,kt=0,Ht=0),G!==null?(Tt=G.x,te=G.y,ce=G.z):(Tt=0,te=0,ce=0);const Pe=Wt.convert(U.format),ee=Wt.convert(U.type);let bt;U.isData3DTexture?(A.setTexture3D(U,0),bt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),bt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),bt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const hn=L.getParameter(L.UNPACK_ROW_LENGTH),ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),We=L.getParameter(L.UNPACK_SKIP_PIXELS),jn=L.getParameter(L.UNPACK_SKIP_ROWS),Ue=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Et),L.pixelStorei(L.UNPACK_SKIP_ROWS,kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ht);const Ri=w.isDataArrayTexture||w.isData3DTexture,he=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const tn=xt.get(w),Pi=xt.get(U),ke=xt.get(tn.__renderTarget),Mn=xt.get(Pi.__renderTarget);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,ke.__webglFramebuffer),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let Sn=0;Sn<wt;Sn++)Ri&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(w).__webglTexture,F,Ht+Sn),w.isDepthTexture?(he&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.get(U).__webglTexture,F,ce+Sn),L.blitFramebuffer(Et,kt,ot,pt,Tt,te,ot,pt,L.DEPTH_BUFFER_BIT,L.NEAREST)):he?L.copyTexSubImage3D(bt,F,Tt,te,ce+Sn,Et,kt,ot,pt):L.copyTexSubImage2D(bt,F,Tt,te,ce+Sn,Et,kt,ot,pt);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else he?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(bt,F,Tt,te,ce,ot,pt,wt,Pe,ee,le.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,F,Tt,te,ce,ot,pt,wt,Pe,le.data):L.texSubImage3D(bt,F,Tt,te,ce,ot,pt,wt,Pe,ee,le):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Tt,te,ot,pt,Pe,ee,le.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Tt,te,le.width,le.height,Pe,le.data):L.texSubImage2D(L.TEXTURE_2D,F,Tt,te,ot,pt,Pe,ee,le);L.pixelStorei(L.UNPACK_ROW_LENGTH,hn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,We),L.pixelStorei(L.UNPACK_SKIP_ROWS,jn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ue),F===0&&U.generateMipmaps&&L.generateMipmap(bt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,G=null,F=0){return w.isTexture!==!0&&(Oi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],F=arguments[4]||0),Oi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,z,G,F)},this.initRenderTarget=function(w){xt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Mt.unbindTexture()},this.resetState=function(){b=0,C=0,I=null,Mt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class Ao{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new Ao(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sm extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Oc extends bi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ga=new oe,co=new wo,ms=new Fs,gs=new N;class rm extends we{constructor(t=new Ne,e=new Oc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(i),ms.radius+=r,t.ray.intersectsSphere(ms)===!1)return;Ga.copy(i).invert(),co.copy(t.ray).applyMatrix4(Ga);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const m=l.getX(g);gs.fromBufferAttribute(u,m),Ha(gs,m,c,i,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,v=p;g<v;g++)gs.fromBufferAttribute(u,g),Ha(gs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ha(s,t,e,n,i,r,o){const a=co.distanceSqToPoint(s);if(a<e){const c=new N;co.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class en extends Re{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Co extends Ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new N,h=new Yt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class j extends Ne{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const v=[],m=n/2;let d=0;M(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(p,2));function M(){const _=new N,R=new N;let b=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const T=[],S=I/r,P=S*(e-t)+t;for(let k=0;k<=i;k++){const O=k/i,V=O*c+a,X=Math.sin(V),H=Math.cos(V);R.x=P*X,R.y=-S*n+m,R.z=P*H,u.push(R.x,R.y,R.z),_.set(X,C,H).normalize(),f.push(_.x,_.y,_.z),p.push(O,1-S),T.push(g++)}v.push(T)}for(let I=0;I<i;I++)for(let T=0;T<r;T++){const S=v[T][I],P=v[T+1][I],k=v[T+1][I+1],O=v[T][I+1];(t>0||T!==0)&&(h.push(S,P,O),b+=3),(e>0||T!==r-1)&&(h.push(P,k,O),b+=3)}l.addGroup(d,b,0),d+=b}function x(_){const R=g,b=new Yt,C=new N;let I=0;const T=_===!0?t:e,S=_===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*S,0),f.push(0,S,0),p.push(.5,.5),g++;const P=g;for(let k=0;k<=i;k++){const V=k/i*c+a,X=Math.cos(V),H=Math.sin(V);C.x=T*H,C.y=m*S,C.z=T*X,u.push(C.x,C.y,C.z),f.push(0,S,0),b.x=X*.5+.5,b.y=H*.5*S+.5,p.push(b.x,b.y),g++}for(let k=0;k<i;k++){const O=R+k,V=P+k;_===!0?h.push(V,V+1,O):h.push(V+1,V,O),I+=3}l.addGroup(d,I,_===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new j(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ce extends j{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ce(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ro extends Ne{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/i,p=new N,g=new Yt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const d=r+m/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let v=0;v<i;v++){const m=v*(n+1);for(let d=0;d<n;d++){const M=d+m,x=M,_=M+n+1,R=M+n+2,b=M+1;a.push(x,_,b),a.push(_,R,b)}}this.setIndex(a),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class At extends Ne{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new N,f=new N,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){const M=[],x=d/n;let _=0;d===0&&o===0?_=.5/e:d===n&&c===Math.PI&&(_=-.5/e);for(let R=0;R<=e;R++){const b=R/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(b+_,1-x),M.push(l++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const x=h[d][M+1],_=h[d][M],R=h[d+1][M],b=h[d+1][M+1];(d!==0||o>0)&&p.push(x,_,b),(d!==n-1||c<Math.PI)&&p.push(_,R,b)}this.setIndex(p),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(v,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new At(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ue extends Ne{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new N,u=new N,f=new N;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,M=(i+1)*p+g;o.push(v,m,M),o.push(m,d,M)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class K extends bi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new Yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Po extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const _r=new oe,Va=new N,Wa=new N;class kc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Va.setFromMatrixPosition(t.matrixWorld),e.position.copy(Va),Wa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wa),e.updateMatrixWorld(),_r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xa=new oe,Fi=new N,vr=new N;class om extends kc{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Yt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fi),vr.copy(n.position),vr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(vr),n.updateMatrixWorld(),i.makeTranslation(-Fi.x,-Fi.y,-Fi.z),Xa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa)}}class Hn extends Po{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new om}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class am extends kc{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qa extends Po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new am}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cm extends Po{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ya(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ya();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ya(){return performance.now()}const Ka=new oe;class lm{constructor(t,e,n=0,i=1/0){this.ray=new wo(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ka.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ka),this}intersectObject(t,e=!0,n=[]){return lo(t,this,n,e),n.sort($a),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)lo(t[i],this,n,e);return n.sort($a),n}}function $a(s,t){return s.distance-t.distance}function lo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)lo(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);class hm extends we{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Yt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const di=new N,Za=new oe,ja=new oe,Ja=new N,Qa=new N;class um{constructor(t={}){const e=this;let n,i,r,o;const a={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:i}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Za.copy(v.matrixWorldInverse),ja.multiplyMatrices(v.projectionMatrix,Za),h(g,g,v),p(g)},this.setSize=function(g,v){n=g,i=v,r=n/2,o=i/2,c.style.width=g+"px",c.style.height=v+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,m=g.children.length;v<m;v++)l(g.children[v])}function h(g,v,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){di.setFromMatrixPosition(g.matrixWorld),di.applyMatrix4(ja);const d=di.z>=-1&&di.z<=1&&g.layers.test(m.layers)===!0,M=g.element;M.style.display=d===!0?"":"none",d===!0&&(g.onBeforeRender(e,v,m),M.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(di.x*r+r)+"px,"+(-di.y*o+o)+"px)",M.parentNode!==c&&c.appendChild(M),g.onAfterRender(e,v,m));const x={distanceToCameraSquared:u(m,g)};a.objects.set(g,x)}for(let d=0,M=g.children.length;d<M;d++)h(g.children[d],v,m)}function u(g,v){return Ja.setFromMatrixPosition(g.matrixWorld),Qa.setFromMatrixPosition(v.matrixWorld),Ja.distanceToSquared(Qa)}function f(g){const v=[];return g.traverseVisible(function(m){m.isCSS2DObject&&v.push(m)}),v}function p(g){const v=f(g).sort(function(d,M){if(d.renderOrder!==M.renderOrder)return M.renderOrder-d.renderOrder;const x=a.objects.get(d).distanceToCameraSquared,_=a.objects.get(M).distanceToCameraSquared;return x-_}),m=v.length;for(let d=0,M=v.length;d<M;d++)v[d].element.style.zIndex=m-d}}}const cn=Object.create(null);cn.open="0";cn.close="1";cn.ping="2";cn.pong="3";cn.message="4";cn.upgrade="5";cn.noop="6";const bs=Object.create(null);Object.keys(cn).forEach(s=>{bs[cn[s]]=s});const ho={type:"error",data:"parser error"},Gc=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Hc=typeof ArrayBuffer=="function",Vc=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Io=({type:s,data:t},e,n)=>Gc&&t instanceof Blob?e?n(t):tc(t,n):Hc&&(t instanceof ArrayBuffer||Vc(t))?e?n(t):tc(new Blob([t]),n):n(cn[s]+(t||"")),tc=(s,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(s)};function ec(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}let xr;function dm(s,t){if(Gc&&s.data instanceof Blob)return s.data.arrayBuffer().then(ec).then(t);if(Hc&&(s.data instanceof ArrayBuffer||Vc(s.data)))return t(ec(s.data));Io(s,!1,e=>{xr||(xr=new TextEncoder),t(xr.encode(e))})}const nc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",zi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let s=0;s<nc.length;s++)zi[nc.charCodeAt(s)]=s;const fm=s=>{let t=s.length*.75,e=s.length,n,i=0,r,o,a,c;s[s.length-1]==="="&&(t--,s[s.length-2]==="="&&t--);const l=new ArrayBuffer(t),h=new Uint8Array(l);for(n=0;n<e;n+=4)r=zi[s.charCodeAt(n)],o=zi[s.charCodeAt(n+1)],a=zi[s.charCodeAt(n+2)],c=zi[s.charCodeAt(n+3)],h[i++]=r<<2|o>>4,h[i++]=(o&15)<<4|a>>2,h[i++]=(a&3)<<6|c&63;return l},pm=typeof ArrayBuffer=="function",Lo=(s,t)=>{if(typeof s!="string")return{type:"message",data:Wc(s,t)};const e=s.charAt(0);return e==="b"?{type:"message",data:mm(s.substring(1),t)}:bs[e]?s.length>1?{type:bs[e],data:s.substring(1)}:{type:bs[e]}:ho},mm=(s,t)=>{if(pm){const e=fm(s);return Wc(e,t)}else return{base64:!0,data:s}},Wc=(s,t)=>{switch(t){case"blob":return s instanceof Blob?s:new Blob([s]);case"arraybuffer":default:return s instanceof ArrayBuffer?s:s.buffer}},Xc="",gm=(s,t)=>{const e=s.length,n=new Array(e);let i=0;s.forEach((r,o)=>{Io(r,!1,a=>{n[o]=a,++i===e&&t(n.join(Xc))})})},_m=(s,t)=>{const e=s.split(Xc),n=[];for(let i=0;i<e.length;i++){const r=Lo(e[i],t);if(n.push(r),r.type==="error")break}return n};function vm(){return new TransformStream({transform(s,t){dm(s,e=>{const n=e.length;let i;if(n<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,n);else if(n<65536){i=new Uint8Array(3);const r=new DataView(i.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{i=new Uint8Array(9);const r=new DataView(i.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}s.data&&typeof s.data!="string"&&(i[0]|=128),t.enqueue(i),t.enqueue(e)})}})}let yr;function _s(s){return s.reduce((t,e)=>t+e.length,0)}function vs(s,t){if(s[0].length===t)return s.shift();const e=new Uint8Array(t);let n=0;for(let i=0;i<t;i++)e[i]=s[0][n++],n===s[0].length&&(s.shift(),n=0);return s.length&&n<s[0].length&&(s[0]=s[0].slice(n)),e}function xm(s,t){yr||(yr=new TextDecoder);const e=[];let n=0,i=-1,r=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(n===0){if(_s(e)<1)break;const c=vs(e,1);r=(c[0]&128)===128,i=c[0]&127,i<126?n=3:i===126?n=1:n=2}else if(n===1){if(_s(e)<2)break;const c=vs(e,2);i=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(_s(e)<8)break;const c=vs(e,8),l=new DataView(c.buffer,c.byteOffset,c.length),h=l.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(ho);break}i=h*Math.pow(2,32)+l.getUint32(4),n=3}else{if(_s(e)<i)break;const c=vs(e,i);a.enqueue(Lo(r?c:yr.decode(c),t)),n=0}if(i===0||i>s){a.enqueue(ho);break}}}})}const qc=4;function xe(s){if(s)return ym(s)}function ym(s){for(var t in xe.prototype)s[t]=xe.prototype[t];return s}xe.prototype.on=xe.prototype.addEventListener=function(s,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(t),this};xe.prototype.once=function(s,t){function e(){this.off(s,e),t.apply(this,arguments)}return e.fn=t,this.on(s,e),this};xe.prototype.off=xe.prototype.removeListener=xe.prototype.removeAllListeners=xe.prototype.removeEventListener=function(s,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+s];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var n,i=0;i<e.length;i++)if(n=e[i],n===t||n.fn===t){e.splice(i,1);break}return e.length===0&&delete this._callbacks["$"+s],this};xe.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+s],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,i=e.length;n<i;++n)e[n].apply(this,t)}return this};xe.prototype.emitReserved=xe.prototype.emit;xe.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};xe.prototype.hasListeners=function(s){return!!this.listeners(s).length};const Os=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),Ge=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Mm="arraybuffer";function Yc(s,...t){return t.reduce((e,n)=>(s.hasOwnProperty(n)&&(e[n]=s[n]),e),{})}const Sm=Ge.setTimeout,wm=Ge.clearTimeout;function ks(s,t){t.useNativeTimers?(s.setTimeoutFn=Sm.bind(Ge),s.clearTimeoutFn=wm.bind(Ge)):(s.setTimeoutFn=Ge.setTimeout.bind(Ge),s.clearTimeoutFn=Ge.clearTimeout.bind(Ge))}const Em=1.33;function Tm(s){return typeof s=="string"?bm(s):Math.ceil((s.byteLength||s.size)*Em)}function bm(s){let t=0,e=0;for(let n=0,i=s.length;n<i;n++)t=s.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Kc(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Am(s){let t="";for(let e in s)s.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(s[e]));return t}function Cm(s){let t={},e=s.split("&");for(let n=0,i=e.length;n<i;n++){let r=e[n].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class Rm extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class Do extends xe{constructor(t){super(),this.writable=!1,ks(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new Rm(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=Lo(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=Am(t);return e.length?"?"+e:""}}class Pm extends Do{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};_m(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,gm(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=Kc()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let $c=!1;try{$c=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Im=$c;function Lm(){}class Dm extends Pm{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(i,r)=>{this.onError("xhr post error",i,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class on extends xe{constructor(t,e,n){super(),this.createRequest=t,ks(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=Yc(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let i in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this._opts.extraHeaders[i])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var i;n.readyState===3&&((i=this._opts.cookieJar)===null||i===void 0||i.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(i){this.setTimeoutFn(()=>{this._onError(i)},0);return}typeof document<"u"&&(this._index=on.requestsCount++,on.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Lm,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete on.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}on.requestsCount=0;on.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ic);else if(typeof addEventListener=="function"){const s="onpagehide"in Ge?"pagehide":"unload";addEventListener(s,ic,!1)}}function ic(){for(let s in on.requests)on.requests.hasOwnProperty(s)&&on.requests[s].abort()}const Nm=(function(){const s=Zc({xdomain:!1});return s&&s.responseType!==null})();class Um extends Dm{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=Nm&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new on(Zc,this.uri(),t)}}function Zc(s){const t=s.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Im))return new XMLHttpRequest}catch{}if(!t)try{return new Ge[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const jc=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Fm extends Do{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=jc?{}:Yc(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],i=e===t.length-1;Io(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}i&&Os(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=Kc()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const Mr=Ge.WebSocket||Ge.MozWebSocket;class Bm extends Fm{createSocket(t,e,n){return jc?new Mr(t,e,n):e?new Mr(t,e):new Mr(t)}doWrite(t,e){this.ws.send(e)}}class Om extends Do{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=xm(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),i=vm();i.readable.pipeTo(t.writable),this._writer=i.writable.getWriter();const r=()=>{n.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],i=e===t.length-1;this._writer.write(n).then(()=>{i&&Os(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const km={websocket:Bm,webtransport:Om,polling:Um},zm=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Gm=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function uo(s){if(s.length>8e3)throw"URI too long";const t=s,e=s.indexOf("["),n=s.indexOf("]");e!=-1&&n!=-1&&(s=s.substring(0,e)+s.substring(e,n).replace(/:/g,";")+s.substring(n,s.length));let i=zm.exec(s||""),r={},o=14;for(;o--;)r[Gm[o]]=i[o]||"";return e!=-1&&n!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Hm(r,r.path),r.queryKey=Vm(r,r.query),r}function Hm(s,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Vm(s,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,i,r){i&&(e[i]=r)}),e}const fo=typeof addEventListener=="function"&&typeof removeEventListener=="function",As=[];fo&&addEventListener("offline",()=>{As.forEach(s=>s())},!1);let Jc=class fi extends xe{constructor(t,e={}){var n,i;if(super(),this.binaryType=Mm,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const r=uo(t);e.hostname=r.host,e.secure=r.protocol==="https"||r.protocol==="wss",e.port=r.port,r.query&&(e.query=r.query)}else e.host&&(e.hostname=uo(e.host).host);if(ks(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),e.transportImplementations&&e.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");e.transportImplementations||!((n=e.transports)===null||n===void 0)&&n.length&&typeof e.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((i=e.transportImplementations)!==null&&i!==void 0?i:e.transports).forEach(r=>{const o=r.prototype.name;this.transports.push(o),this._transportsByName[o]=r})):(this.transports=e.transports?[...e.transports]:["polling","websocket","webtransport"],this._transportsByName=km),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Cm(this.opts.query)),fo&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},As.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=qc,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&fi.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}_probe(t){let e=this.createTransport(t),n=!1;fi.priorWebsocketSuccess=!1;const i=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",u=>{if(!n)if(u.type==="pong"&&u.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;fi.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=e.name,this.emitReserved("upgradeError",f)}}))};function r(){n||(n=!0,h(),e.close(),e=null)}const o=u=>{const f=new Error("probe error: "+u);f.transport=e.name,r(),this.emitReserved("upgradeError",f)};function a(){o("transport closed")}function c(){o("socket closed")}function l(u){e&&u.name!==e.name&&r()}const h=()=>{e.removeListener("open",i),e.removeListener("error",o),e.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};e.once("open",i),e.once("error",o),e.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onOpen(){if(this.readyState="open",fi.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._upgrades=this._filterUpgrades(t.upgrades),this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const i=this.writeBuffer[n].data;if(i&&(e+=Tm(i)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Os(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,i){if(typeof e=="function"&&(i=e,e=void 0),typeof n=="function"&&(i=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:t,data:e,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(fi.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),fo&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=As.indexOf(this._offlineEventListener);n!==-1&&As.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}};Jc.protocol=qc;function Wm(s,t="",e){let n=s;e=e||typeof location<"u"&&location,s==null&&(s=e.protocol+"//"+e.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=e.protocol+s:s=e.host+s),/^(https?|wss?):\/\//.test(s)||(typeof e<"u"?s=e.protocol+"//"+s:s="https://"+s),n=uo(s)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+t,n.href=n.protocol+"://"+r+(e&&e.port===n.port?"":":"+n.port),n}const Xm=typeof ArrayBuffer=="function",qm=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,Qc=Object.prototype.toString,Ym=typeof Blob=="function"||typeof Blob<"u"&&Qc.call(Blob)==="[object BlobConstructor]",Km=typeof File=="function"||typeof File<"u"&&Qc.call(File)==="[object FileConstructor]";function No(s){return Xm&&(s instanceof ArrayBuffer||qm(s))||Ym&&s instanceof Blob||Km&&s instanceof File}function Cs(s,t){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let e=0,n=s.length;e<n;e++)if(Cs(s[e]))return!0;return!1}if(No(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return Cs(s.toJSON(),!0);for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e)&&Cs(s[e]))return!0;return!1}function $m(s){const t=[],e=s.data,n=s;return n.data=Rs(e,t),n.attachments=t.length,{packet:n,buffers:t}}function Rs(s,t,e){if(!s)return s;if(No(s)){const n={_placeholder:!0,num:t.length};return t.push(s),n}else if(Array.isArray(s)){const n=new Array(s.length);for(let i=0;i<s.length;i++)n[i]=Rs(s[i],t);return n}else if(typeof s=="object"&&!(s instanceof Date)){if(s.toJSON&&typeof s.toJSON=="function"&&!e)return Rs(s.toJSON(),t,!0);const n={};for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&(n[i]=Rs(s[i],t));return n}return s}function Zm(s,t){return s.data=po(s.data,t),delete s.attachments,s}function po(s,t){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<t.length)return t[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let e=0;e<s.length;e++)s[e]=po(s[e],t);else if(typeof s=="object")for(const e in s)Object.prototype.hasOwnProperty.call(s,e)&&(s[e]=po(s[e],t));return s}const jm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Kt;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(Kt||(Kt={}));class Jm{constructor(t){this.replacer=t}encode(t){return(t.type===Kt.EVENT||t.type===Kt.ACK)&&Cs(t)?this.encodeAsBinary({type:t.type===Kt.EVENT?Kt.BINARY_EVENT:Kt.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===Kt.BINARY_EVENT||t.type===Kt.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=$m(t),n=this.encodeAsString(e.packet),i=e.buffers;return i.unshift(n),i}}class Uo extends xe{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===Kt.BINARY_EVENT;n||e.type===Kt.BINARY_ACK?(e.type=n?Kt.EVENT:Kt.ACK,this.reconstructor=new Qm(e)):super.emitReserved("decoded",e)}else if(No(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(Kt[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Kt.BINARY_EVENT||n.type===Kt.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!t0(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(r,e)}else n.nsp="/";const i=t.charAt(e+1);if(i!==""&&Number(i)==i){const r=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(Uo.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case Kt.CONNECT:return sc(e);case Kt.DISCONNECT:return e===void 0;case Kt.CONNECT_ERROR:return typeof e=="string"||sc(e);case Kt.EVENT:case Kt.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&jm.indexOf(e[0])===-1);case Kt.ACK:case Kt.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Qm{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Zm(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const t0=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function sc(s){return Object.prototype.toString.call(s)==="[object Object]"}const e0=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Uo,Encoder:Jm,get PacketType(){return Kt}},Symbol.toStringTag,{value:"Module"}));function $e(s,t,e){return s.on(t,e),function(){s.off(t,e)}}const n0=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class tl extends xe{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[$e(t,"open",this.onopen.bind(this)),$e(t,"packet",this.onpacket.bind(this)),$e(t,"error",this.onerror.bind(this)),$e(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,i,r;if(n0.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:Kt.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const h=this.ids++,u=e.pop();this._registerAckCallback(h,u),o.id=h}const a=(i=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||i===void 0?void 0:i.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var n;const i=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(i===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},i),o=(...a)=>{this.io.clearTimeoutFn(r),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((n,i)=>{const r=(o,a)=>o?i(o):n(a);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((i,...r)=>(this._queue[0],i!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(i)):(this._queue.shift(),e&&e(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Kt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Kt.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Kt.EVENT:case Kt.BINARY_EVENT:this.onevent(t);break;case Kt.ACK:case Kt.BINARY_ACK:this.onack(t);break;case Kt.DISCONNECT:this.ondisconnect();break;case Kt.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...i){n||(n=!0,e.packet({type:Kt.ACK,id:t,data:i}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Kt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function Ci(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}Ci.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*s);s=(Math.floor(t*10)&1)==0?s-e:s+e}return Math.min(s,this.max)|0};Ci.prototype.reset=function(){this.attempts=0};Ci.prototype.setMin=function(s){this.ms=s};Ci.prototype.setMax=function(s){this.max=s};Ci.prototype.setJitter=function(s){this.jitter=s};class mo extends xe{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,ks(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ci({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const i=e.parser||e0;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new Jc(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const i=$e(e,"open",function(){n.onopen(),t&&t()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=$e(e,"error",r);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{i(),r(new Error("timeout")),e.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(i),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push($e(t,"ping",this.onping.bind(this)),$e(t,"data",this.ondata.bind(this)),$e(t,"error",this.onerror.bind(this)),$e(t,"close",this.onclose.bind(this)),$e(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Os(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new tl(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(i=>{i?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",i)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Bi={};function Ps(s,t){typeof s=="object"&&(t=s,s=void 0),t=t||{};const e=Wm(s,t.path||"/socket.io"),n=e.source,i=e.id,r=e.path,o=Bi[i]&&r in Bi[i].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let c;return a?c=new mo(n,t):(Bi[i]||(Bi[i]=new mo(n,t)),c=Bi[i]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(Ps,{Manager:mo,Socket:tl,io:Ps,connect:Ps});class i0{constructor(t){this.scene=t,this.candleLights=[],this.smokeParticles=null,this.haloMesh=null,this.buddhaAuraLight=null,this.clock=new zc,this.ripples=[],this.cushionPositions=[],this.interactiveStations={woodfish:{x:5.6,z:-1.05,rotY:Math.PI},bell:{x:-5.6,z:-1.48,rotY:Math.PI},incenseTable:{x:-2.8,z:-.95,rotY:Math.PI},incenseCandle:{x:-.65,z:-2.75,rotY:Math.PI},incenseBurner:{x:0,z:-2.75,rotY:Math.PI},incenseBow:{x:0,z:-1.2,rotY:Math.PI},fortuneTable:{x:2.8,z:-.95,rotY:Math.PI},pond:{x:-8.5,z:23,rotY:0},chess:{x:8.5,z:24.6,rotY:0},chess2:{x:8.5,z:27.4,rotY:Math.PI},tea:{x:9.8,z:26,rotY:-Math.PI/2}},this.pondFish=[],this.floatingLanterns=[],this.waterMesh=null,this.teaSteamParticles=null,this.textures={woodFloor:this.generateWoodFloorTexture(),carpet:this.generateCarpetTexture(),cushion:this.generatePlushCushionTexture(),pillar:this.generatePillarTexture(),wall:this.generateWallTexture(),chessBoard:this.generateChessBoardTexture()},this.createEnvironment(),this.createArchitecture(),this.createCourtyard(),this.createTamQuanGate(),this.createGrandBuddhaAltar(),this.createGrandOfferingAltar(),this.createSideAltars(),this.createEighteenArhats(),this.createAuthenticCushionsGrid(),this.createInteractiveStations(),this.createLotusPond(),this.createChessPavilion(),this.createAtmosphericLighting(),this.createParticleSystems()}generateWoodFloorTexture(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.fillStyle="#261309",e.fillRect(0,0,1024,1024);const n=16,i=1024/n;for(let o=0;o<n;o++){const a=o*i,c=28+Math.floor(Math.sin(o*1.7)*12);e.fillStyle=`rgb(${c+18}, ${c+4}, ${c-8})`,e.fillRect(0,a,1024,i-2),e.strokeStyle="rgba(15, 6, 2, 0.45)",e.lineWidth=1;for(let h=0;h<18;h++){const u=a+Math.random()*i;e.beginPath(),e.moveTo(0,u),e.bezierCurveTo(300,u+(Math.random()-.5)*6,700,u+(Math.random()-.5)*6,1024,u),e.stroke()}e.fillStyle="#110502",e.fillRect(0,a+i-2,1024,2);const l=e.createLinearGradient(0,a,0,a+i);l.addColorStop(0,"rgba(255, 230, 190, 0.08)"),l.addColorStop(.5,"rgba(255, 230, 190, 0.02)"),l.addColorStop(1,"rgba(0, 0, 0, 0.15)"),e.fillStyle=l,e.fillRect(0,a,1024,i-2)}const r=new en(t);return r.wrapS=nn,r.wrapT=nn,r.repeat.set(5,5),r.colorSpace=ge,r}generateCarpetTexture(){const t=document.createElement("canvas");t.width=512,t.height=1024;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,512,0);n.addColorStop(0,"#5a0a0f"),n.addColorStop(.12,"#851218"),n.addColorStop(.5,"#99151c"),n.addColorStop(.88,"#851218"),n.addColorStop(1,"#5a0a0f"),e.fillStyle=n,e.fillRect(0,0,512,1024),e.fillStyle="rgba(0, 0, 0, 0.08)";for(let a=0;a<1024;a+=4)e.fillRect(0,a,512,1.5);e.fillStyle="#f5c33b",e.fillRect(16,0,14,1024),e.fillRect(482,0,14,1024),e.fillStyle="#ffd700",e.fillRect(36,0,6,1024),e.fillRect(470,0,6,1024);const i=8,r=1024/i;for(let a=0;a<i;a++){const c=a*r+r/2,l=256;e.save(),e.translate(l,c),e.strokeStyle="#e6b12a",e.lineWidth=3,e.beginPath(),e.arc(0,0,36,0,Math.PI*2),e.stroke(),e.fillStyle="#ffdf79";for(let h=0;h<8;h++){const u=h/8*Math.PI*2;e.beginPath(),e.ellipse(Math.cos(u)*22,Math.sin(u)*22,12,6,u,0,Math.PI*2),e.fill()}e.fillStyle="#ffd700",e.beginPath(),e.arc(0,0,9,0,Math.PI*2),e.fill(),e.restore()}const o=new en(t);return o.wrapS=nn,o.wrapT=nn,o.repeat.set(1,4),o.colorSpace=ge,o}generatePlushCushionTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createRadialGradient(256,256,10,256,256,256);n.addColorStop(0,"#4e4e55"),n.addColorStop(.65,"#3a3a40"),n.addColorStop(.92,"#2b2b30"),n.addColorStop(1,"#1e1e22"),e.fillStyle=n,e.fillRect(0,0,512,512),e.strokeStyle="rgba(255, 255, 255, 0.04)",e.lineWidth=1;for(let o=0;o<512;o+=6)e.beginPath(),e.moveTo(o,0),e.lineTo(o,512),e.stroke();for(let o=0;o<512;o+=6)e.beginPath(),e.moveTo(0,o),e.lineTo(512,o),e.stroke();const i=e.createRadialGradient(256,256,2,256,256,32);i.addColorStop(0,"#151518"),i.addColorStop(.4,"#242428"),i.addColorStop(.85,"#3e3e44"),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.beginPath(),e.arc(256,256,32,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(215, 185, 130, 0.65)",e.lineWidth=6,e.strokeRect(16,16,480,480);const r=new en(t);return r.colorSpace=ge,r}generatePillarTexture(){const t=document.createElement("canvas");t.width=256,t.height=1024;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,256,0);n.addColorStop(0,"#1e0804"),n.addColorStop(.35,"#3b1209"),n.addColorStop(.7,"#48170c"),n.addColorStop(1,"#1e0804"),e.fillStyle=n,e.fillRect(0,0,256,1024),e.strokeStyle="rgba(15, 4, 2, 0.4)",e.lineWidth=1.5;for(let r=0;r<256;r+=10)e.beginPath(),e.moveTo(r+(Math.random()-.5)*4,0),e.lineTo(r+(Math.random()-.5)*4,1024),e.stroke();[60,964].forEach(r=>{e.fillStyle="#f5c33b",e.fillRect(0,r-12,256,24),e.fillStyle="#ffd700",e.fillRect(0,r-4,256,8)});const i=new en(t);return i.wrapT=nn,i.repeat.set(1,2),i.colorSpace=ge,i}generateWallTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d");e.fillStyle="#8f6838",e.fillRect(0,0,512,512);for(let i=0;i<4e3;i++){const r=Math.random()*512,o=Math.random()*512,a=(Math.random()-.5)*24;e.fillStyle=`rgba(${140+a}, ${100+a}, ${55+a}, 0.25)`,e.fillRect(r,o,3,3)}const n=new en(t);return n.wrapS=nn,n.wrapT=nn,n.repeat.set(4,2),n.colorSpace=ge,n}generateSignboardTexture(t,e=""){const n=document.createElement("canvas");n.width=1024,n.height=256;const i=n.getContext("2d"),r=i.createLinearGradient(0,0,0,256);r.addColorStop(0,"#380406"),r.addColorStop(.5,"#6a0f13"),r.addColorStop(1,"#2c0305"),i.fillStyle=r,i.fillRect(0,0,1024,256),i.strokeStyle="#f5c33b",i.lineWidth=14,i.strokeRect(16,16,992,224),i.strokeStyle="#8f640a",i.lineWidth=4,i.strokeRect(28,28,968,200),i.font='bold 92px "Playfair Display", "Times New Roman", "Noto Serif", serif',i.textAlign="center",i.textBaseline="middle",i.shadowColor="#000000",i.shadowBlur=12,i.shadowOffsetX=3,i.shadowOffsetY=3;const o=i.createLinearGradient(0,30,0,220);o.addColorStop(0,"#fff6bd"),o.addColorStop(.35,"#ffd700"),o.addColorStop(.75,"#d49b18"),o.addColorStop(1,"#9e6e08"),i.fillStyle=o,i.fillText(t,512,e?104:128),e&&(i.font='italic 34px "Playfair Display", "Times New Roman", serif',i.fillStyle="#ffd680",i.fillText(e,512,184));const a=new en(n);return a.colorSpace=ge,a}generateCoupletTexture(t){const e=document.createElement("canvas");e.width=256,e.height=1024;const n=e.getContext("2d"),i=n.createLinearGradient(0,0,256,0);i.addColorStop(0,"#2e0405"),i.addColorStop(.5,"#610c10"),i.addColorStop(1,"#2e0405"),n.fillStyle=i,n.fillRect(0,0,256,1024),n.strokeStyle="#f5c33b",n.lineWidth=10,n.strokeRect(14,14,228,996),n.textAlign="center",n.textBaseline="middle",n.shadowColor="#000000",n.shadowBlur=8,n.shadowOffsetX=3,n.shadowOffsetY=3;const r=t.split(""),o=r.length,a=Math.min(58,Math.floor(860/(o+.5)));n.font=`bold ${a}px "Playfair Display", "Times New Roman", "Noto Serif", serif`;const c=70,l=884/o,h=n.createLinearGradient(0,0,256,0);h.addColorStop(0,"#fff6bd"),h.addColorStop(.4,"#ffd700"),h.addColorStop(.85,"#c98e14"),n.fillStyle=h,r.forEach((f,p)=>{n.fillText(f,128,c+p*l+l/2)});const u=new en(e);return u.colorSpace=ge,u}generateChessBoardTexture(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,512,512);n.addColorStop(0,"#c9934a"),n.addColorStop(.5,"#b8813a"),n.addColorStop(1,"#a6702c"),e.fillStyle=n,e.fillRect(0,0,512,512),e.strokeStyle="rgba(70, 40, 10, 0.15)",e.lineWidth=1;for(let p=0;p<40;p++){e.beginPath();const g=Math.random()*512;e.moveTo(0,g),e.bezierCurveTo(170,g+(Math.random()-.5)*12,340,g+(Math.random()-.5)*12,512,g),e.stroke()}e.strokeStyle="#3a1a08",e.lineWidth=8,e.strokeRect(16,16,480,480),e.strokeStyle="#e0a943",e.lineWidth=2,e.strokeRect(22,22,468,468);const i=36,r=32,o=512-i*2,a=512-r*2,c=o/8,l=a/9;e.strokeStyle="#2d1405",e.lineWidth=1.8;for(let p=0;p<10;p++){const g=r+p*l;e.beginPath(),e.moveTo(i,g),e.lineTo(i+o,g),e.stroke()}for(let p=0;p<9;p++){const g=i+p*c;p===0||p===8?(e.beginPath(),e.moveTo(g,r),e.lineTo(g,r+a),e.stroke()):(e.beginPath(),e.moveTo(g,r),e.lineTo(g,r+4*l),e.stroke(),e.beginPath(),e.moveTo(g,r+5*l),e.lineTo(g,r+a),e.stroke())}e.beginPath(),e.moveTo(i+3*c,r+0*l),e.lineTo(i+5*c,r+2*l),e.moveTo(i+5*c,r+0*l),e.lineTo(i+3*c,r+2*l),e.stroke(),e.beginPath(),e.moveTo(i+3*c,r+7*l),e.lineTo(i+5*c,r+9*l),e.moveTo(i+5*c,r+7*l),e.lineTo(i+3*c,r+9*l),e.stroke(),e.save(),e.font='bold 22px "Playfair Display", "Times New Roman", serif',e.fillStyle="#4a250e",e.textAlign="center",e.textBaseline="middle";const h=r+4.5*l;e.fillText("楚  河",i+2*c,h),e.fillText("漢  界",i+6*c,h),e.restore();const u=(p,g,v=!1,m=!1)=>{const d=i+p*c,M=r+g*l,x=3.5,_=6;e.lineWidth=1.2,e.strokeStyle="#2d1405",v||(e.beginPath(),e.moveTo(d-x,M-x-_),e.lineTo(d-x,M-x),e.lineTo(d-x-_,M-x),e.stroke(),e.beginPath(),e.moveTo(d-x,M+x+_),e.lineTo(d-x,M+x),e.lineTo(d-x-_,M+x),e.stroke()),m||(e.beginPath(),e.moveTo(d+x,M-x-_),e.lineTo(d+x,M-x),e.lineTo(d+x+_,M-x),e.stroke(),e.beginPath(),e.moveTo(d+x,M+x+_),e.lineTo(d+x,M+x),e.lineTo(d+x+_,M+x),e.stroke())};[[1,2],[7,2],[1,7],[7,7]].forEach(([p,g])=>u(p,g)),[3,6].forEach(p=>{u(0,p,!0,!1),u(2,p),u(4,p),u(6,p),u(8,p,!1,!0)});const f=new en(t);return f.colorSpace=ge,f}createEnvironment(){this.scene.background=new Zt(3546900),this.scene.fog=new Ao(3546900,28,75)}createArchitecture(){const t=new Pt,e=new Ke(24,28,16,16),n=new K({map:this.textures.woodFloor,roughness:.18,metalness:.08}),i=new E(e,n);i.rotation.x=-Math.PI/2,i.position.set(0,0,3.5),i.receiveShadow=!0,t.add(i);const r=new Ke(3,26),o=new K({map:this.textures.carpet,roughness:.65,metalness:.04}),a=new E(r,o);a.rotation.x=-Math.PI/2,a.position.set(0,.02,3.5),a.receiveShadow=!0,t.add(a);const c=new K({map:this.textures.wall,roughness:.85}),l=new K({color:2362887,roughness:.45,metalness:.05}),h=new E(new ct(24,12,.8),c);h.position.set(0,6,-8.5);const u=new E(new ct(24.2,2.8,.95),l);u.position.set(0,1.4,-8.45),t.add(h,u),[-11.5,11.5].forEach(I=>{const T=new E(new ct(.8,12,28),c);T.position.set(I,6,3.5);const S=new E(new ct(.95,2.8,28),l);S.position.set(I,1.4,3.5),t.add(T,S),[-2,5,12].forEach(P=>{const k=new E(new ue(1.3,.12,10,24),new K({color:4854283,roughness:.45}));k.rotation.y=I>0?-Math.PI/2:Math.PI/2,k.position.set(I>0?I-.35:I+.35,6.2,P),t.add(k)})});const f=new E(new ct(8.5,12,.8),l);f.position.set(-7.25,6,17.5);const p=new E(new ct(8.5,12,.8),l);p.position.set(7.25,6,17.5);const g=new E(new ct(7,4,.9),l);g.position.set(0,10,17.5),t.add(f,p,g);const v=new j(.52,.58,11,24),m=new K({map:this.textures.pillar,roughness:.28,metalness:.15}),d=new j(.82,.95,.45,16),M=new K({color:2039586,roughness:.85});[[-3.8,-2.5],[3.8,-2.5],[-7.5,4],[7.5,4],[-7.5,11],[7.5,11]].forEach(([I,T])=>{const S=new E(v,m);S.position.set(I,5.5,T),S.castShadow=!0;const P=new E(d,M);P.position.set(I,.225,T),t.add(S,P)});const _=new E(new ct(.68,5.4,.04),new K({map:this.generateCoupletTexture("TẬN LỰC CÀY CUỐC PHƯỚC ĐỨC TĂNG HUY")}));_.position.set(-3.8,4.8,-1.9);const R=new E(new ct(.68,5.4,.04),new K({map:this.generateCoupletTexture("CHÁNH NIỆM TU TÂM DEADLINE KHÔNG QUẠU")}));R.position.set(3.8,4.8,-1.9),t.add(_,R);const b=new E(new ct(6.2,1.45,.15),new K({map:this.generateSignboardTexture("CHÙA VỪA LÀM VỪA TU","LÀM VIỆC CHÁNH NIỆM • VỪA CÀY DEADLINE VỪA TU TÂM")}));b.position.set(0,10.2,-4.2),t.add(b);const C=new K({color:2821382,roughness:.5});[-2.5,4,11].forEach(I=>{const T=new E(new ct(23,.55,.55),C);T.position.set(0,10.8,I),t.add(T)}),this.scene.add(t)}createGrandBuddhaAltar(){const t=new Pt;t.position.set(0,0,-6.2);const e=new K({color:16103978,metalness:.9,roughness:.18,emissive:5913864,emissiveIntensity:.35}),n=new K({color:13210654,metalness:.85,roughness:.28}),i=new K({color:1713200,roughness:.7}),r=new K({color:16638927,roughness:.4}),o=new K({color:2230789,roughness:.4}),a=new K({color:10165276,roughness:.6}),c=new E(new j(2.8,3.2,.4,8),o);c.position.y=.2;const l=new E(new j(2.5,2.8,.5,24),e);l.position.y=.65;const h=new E(new j(2.1,2.4,.45,24),n);h.position.y=1.1;const u=new E(new j(1.8,1.6,.4,24),e);u.position.y=1.5,t.add(c,l,h,u);for(let q=0;q<20;q++){const lt=q/20*Math.PI*2,at=new E(new At(.35,12,10),e);at.scale.set(1.4,.55,.85),at.position.set(Math.cos(lt)*1.95,1.55,Math.sin(lt)*1.95),at.rotation.y=-lt,at.rotation.z=Math.PI/6,t.add(at)}const f=new Pt;f.position.set(0,1.65,.1);const p=new E(new j(1.35,1.55,.5,24),n);p.position.y=.25,[-1.25,1.25].forEach(q=>{const lt=new E(new At(.38,12,12),n);lt.scale.set(1.1,.75,1.3),lt.position.set(q,.25,.15),f.add(lt)}),[-.45,.45].forEach(q=>{const lt=new E(new ct(.25,.12,.4),r);lt.position.set(q,.46,.22),lt.rotation.x=-.3,f.add(lt)});const g=new E(new j(.68,.95,1.65,24),e);g.position.y=1.25;const v=new E(new j(.72,.98,1.66,24,1,!1,Math.PI*.4,Math.PI*1.2),a);v.position.y=1.25;const m=new E(new ct(1.9,.46,.72),e);m.position.y=1.95;const d=new E(new j(.18,.22,1.1,14),a);d.position.set(-.95,1.5,.05),d.rotation.z=Math.PI/5.5;const M=new E(new j(.16,.18,.95,14),r);M.position.set(-.45,.75,.45),M.rotation.set(-Math.PI/2.2,0,-Math.PI/3);const x=new E(new At(.2,14,14,0,Math.PI*2,0,Math.PI*.65),new K({color:2233095,metalness:.9,roughness:.2}));x.position.set(-.05,.78,.52);const _=new E(new j(.18,.22,1.1,14),e);_.position.set(.95,1.5,.05),_.rotation.z=-Math.PI/5.5;const R=new E(new j(.16,.18,.95,14),r);R.position.set(1.05,.68,.35),R.rotation.set(Math.PI/4,0,-.2);const b=new E(new ct(.18,.28,.08),r);b.position.set(1.15,.32,.52),b.rotation.x=.35;const C=new E(new At(.56,24,24),r);C.scale.set(.92,1.15,.95),C.position.set(0,2.75,0);const I=new E(new At(.57,24,18,0,Math.PI*2,0,Math.PI*.58),i);I.position.set(0,2.85,0);const T=new E(new At(.24,16,16),i);T.position.set(0,3.42,.02);const S=new E(new At(.045,8,8),new de({color:16726832}));S.position.set(0,2.85,.53),[-.56,.56].forEach(q=>{const lt=new E(new j(.04,.045,.52,10),r);lt.position.set(q,2.65,0),f.add(lt)});const P=new E(new ue(.85,.06,12,32),e);P.position.set(0,2.9,-.25),f.add(p,g,v,m,d,M,x,_,R,b,C,I,T,S,P),t.add(f);const k=new Pt;k.position.set(-2.6,0,.35),k.rotation.y=Math.PI/6;const O=new E(new j(.55,.65,.45,18),o);O.position.y=.225;const V=new E(new j(.58,.5,.2,18),e);V.position.y=.55;const X=new E(new j(.32,.48,1.95,16),new K({color:5203061,roughness:.6}));X.position.y=1.55;const H=new E(new ct(.24,1.8,.05),e);H.position.set(-.08,1.55,.22),H.rotation.z=-.15;const J=new E(new At(.12,10,10),r);J.scale.set(.6,1.5,.8),J.position.set(0,1.85,.35);const W=new E(new At(.25,16,16),r);W.position.set(0,2.7,0);const $=new E(new ue(.38,.03,8,24),e);$.position.set(0,2.75,-.15);const st=new E(new ct(1.2,.24,.03),new K({map:this.generateSignboardTexture("Tôn Giả A Nan")}));st.position.set(0,.25,.65),k.add(O,V,X,H,J,W,$,st),t.add(k);const ht=new Pt;ht.position.set(2.6,0,.35),ht.rotation.y=-Math.PI/6;const Ct=new E(new j(.55,.65,.45,18),o);Ct.position.y=.225;const qt=new E(new j(.58,.5,.2,18),e);qt.position.y=.55;const Q=new E(new j(.32,.48,1.95,16),new K({color:8140823,roughness:.6}));Q.position.y=1.55;const it=new E(new ct(.24,1.8,.05),e);it.position.set(-.08,1.55,.22),it.rotation.z=-.15;const mt=new E(new At(.12,10,10),r);mt.position.set(0,1.8,.35);const rt=new E(new At(.12,10,10,0,Math.PI*2,0,Math.PI*.65),o);rt.position.set(0,1.88,.4);const St=new E(new At(.25,16,16),r);St.position.set(0,2.7,0);const Rt=new E(new j(.12,.05,.22,10),new de({color:15658734}));Rt.position.set(0,2.45,.16);const Ft=new E(new ue(.38,.03,8,24),e);Ft.position.set(0,2.75,-.15);const jt=new E(new ct(1.2,.24,.03),new K({map:this.generateSignboardTexture("Tôn Giả Ca Diếp")}));jt.position.set(0,.25,.65),ht.add(Ct,qt,Q,it,mt,rt,St,Rt,Ft,jt),t.add(ht);const Ut=5.6,Qt=7.6,L=new E(new ct(Ut+.8,Qt+.8,.2),o);L.position.set(0,5,-.35);const me=new E(new ct(Ut+.28,Qt+.28,.12),e);me.position.set(0,5,-.3);const zt=new E(new ct(Ut+1.8,.55,1.2),new K({color:9053212,roughness:.55}));zt.position.set(0,9.1,0);const Bt=new E(new ct(Ut+2.2,.18,1.4),e);Bt.position.set(0,9.4,0),t.add(L,me,zt,Bt);const Mt=document.createElement("canvas");Mt.width=512,Mt.height=512;const Lt=Mt.getContext("2d");Lt.translate(256,256);const xt=Lt.createRadialGradient(0,0,50,0,0,250);xt.addColorStop(0,"rgba(255, 248, 200, 0.95)"),xt.addColorStop(.35,"rgba(255, 215, 90, 0.75)"),xt.addColorStop(.75,"rgba(255, 140, 0, 0.35)"),xt.addColorStop(1,"rgba(180, 40, 0, 0)"),Lt.fillStyle=xt,Lt.beginPath(),Lt.arc(0,0,250,0,Math.PI*2),Lt.fill();const A=["#ff3b30","#ff9500","#ffcc00","#34c759","#00c7be","#007aff","#af52de","#ff2d55"];for(let q=0;q<48;q++){const lt=q/48*Math.PI*2;Lt.save(),Lt.rotate(lt),Lt.fillStyle=A[q%A.length],Lt.globalAlpha=.35,Lt.beginPath(),Lt.moveTo(-12,60),Lt.lineTo(12,60),Lt.lineTo(24,250),Lt.lineTo(-24,250),Lt.closePath(),Lt.fill(),Lt.restore()}const y=new en(Mt),B=new de({map:y,transparent:!0,side:Ze,blending:Is,depthWrite:!1}),Y=new E(new Ke(11,11),B);Y.position.set(0,5,-.28),t.add(Y),this.haloMesh=Y;const tt=new E(new ct(2.4,.45,.05),new K({map:this.generateSignboardTexture("Đức Bổn Sư Thích Ca Mâu Ni Phật")}));tt.position.set(0,.7,1.85),t.add(tt),this.buddhaAuraLight=new Hn(16769154,4.5,24),this.buddhaAuraLight.position.set(0,5.5,1.2),t.add(this.buddhaAuraLight),this.scene.add(t)}createGrandOfferingAltar(){const t=new Pt;t.position.set(0,0,-3.8);const e=new K({color:2755846,roughness:.35}),n=new K({color:16103978,metalness:.88,roughness:.22}),i=new K({color:11897660,metalness:.85,roughness:.24,emissive:2233604,emissiveIntensity:.15}),r=new E(new ct(4.2,.95,1.2),e);r.position.y=.475,r.castShadow=!0,r.receiveShadow=!0;const o=new E(new ct(4.3,.16,1.25),n);o.position.y=.85;const a=new E(new ct(4,.03,1.1),new K({color:9704472,roughness:.6}));a.position.y=.965,t.add(r,o,a);const c=new Pt;c.position.set(0,.98,.12);const l=new E(new j(.42,.34,.46,20),i);l.position.y=.23;const h=new E(new ue(.44,.045,10,24),n);h.rotation.x=Math.PI/2,h.position.y=.46;for(let g=0;g<3;g++){const v=new E(new j(.045,.065,.22,8),i),m=g/3*Math.PI*2;v.position.set(Math.cos(m)*.3,.09,Math.sin(m)*.3),c.add(v)}const u=new E(new j(.4,.4,.05,18),new K({color:13938811,roughness:.9}));u.position.y=.43;for(let g=-1;g<=1;g++){const v=new E(new j(.008,.008,.65),new de({color:11149841}));v.position.set(g*.09,.72,0);const m=new E(new At(.02,8,8),new de({color:16726784}));m.position.set(g*.09,1.02,0),c.add(v,m)}c.add(l,h,u),t.add(c),[-1.15,1.15].forEach((g,v)=>{const m=new Pt;m.position.set(g,.98,-.1),m.rotation.y=v===0?Math.PI/6:-Math.PI/6;const d=new E(new At(.13,10,8),i);d.scale.set(1.3,.52,1),d.position.y=.06;const M=new E(new j(.018,.018,.52,8),i);M.position.y=.34;const x=new E(new At(.11,10,10),i);x.scale.set(.9,1.4,.9),x.position.set(0,.66,0);const _=new E(new j(.016,.022,.4,8),i);_.position.set(0,.92,.06);const R=new E(new At(.04,8,8),i);R.position.set(0,1.14,.09),m.add(d,M,x,_,R),t.add(m)}),[-.65,.65].forEach(g=>{const v=new E(new j(.07,.11,.3,10),i);v.position.set(g,1.12,.22);const m=new E(new j(.03,.03,.26,10),new K({color:13375512}));m.position.set(g,1.36,.22);const d=new E(new At(.022,6,6),new de({color:16755200}));d.scale.set(.6,1.8,.6),d.position.set(g,1.52,.22);const M=new Hn(16750592,1.6,6);M.position.set(g,1.55,.22),this.candleLights.push(M),t.add(v,m,d,M)}),[-1.7,1.7].forEach(g=>{const v=new E(new j(.1,.16,.42,12),new K({color:19776}));v.position.set(g,1.18,0);for(let m=0;m<3;m++){const d=new E(new Ce(.055,.15,8),new K({color:15753874}));d.position.set(g+(m-1)*.05,1.45,m%2*.03),t.add(d)}t.add(v)});const f=new E(new j(.3,.22,.07,16),n);f.position.set(0,1.01,.4);const p=new E(new At(.07,8,8),new K({color:16754470}));p.position.set(0,1.14,.4),t.add(f,p),this.scene.add(t)}createSideAltars(){const t=new K({color:16103978,metalness:.9,roughness:.18,emissive:4862470,emissiveIntensity:.25}),e=new K({color:2230789,roughness:.4}),n=new K({color:16638927,roughness:.42}),i=new K({color:10165276,roughness:.55}),r=new Pt;r.position.set(-7.6,0,-4),r.rotation.y=Math.PI/4.2;const o=new E(new j(1.2,1.4,.4,16),e);o.position.y=.2;const a=new E(new j(1,1.15,.35,16),t);a.position.y=.55;const c=new E(new j(.85,.7,.3,16),t);c.position.y=.85,r.add(o,a,c);const l=new K({color:15753874,roughness:.45,emissive:4852514,emissiveIntensity:.2});for(let B=0;B<16;B++){const Y=B/16*Math.PI*2,tt=new E(new At(.22,10,8),l);tt.scale.set(1.2,.45,.75),tt.position.set(Math.cos(Y)*.95,.92,Math.sin(Y)*.95),tt.rotation.y=-Y,tt.rotation.z=Math.PI/5.5,r.add(tt)}const h=new K({color:16251644,roughness:.35,metalness:.05}),u=new E(new j(.42,.68,1.6,20),h);u.position.y=1.75;const f=new E(new j(.34,.44,1.1,18),h);f.position.y=2.95;const p=new E(new ue(.28,.025,8,20),t);p.position.set(0,3.05,.24),p.rotation.x=Math.PI/3;const g=new E(new j(.09,.12,.75,10),h);g.position.set(-.42,3.05,.08),g.rotation.z=Math.PI/6;const v=new E(new j(.08,.09,.65,10),n);v.position.set(-.24,2.65,.3),v.rotation.set(-Math.PI/3,0,-Math.PI/6);const m=new K({color:14742257,roughness:.15,metalness:.2}),d=new E(new At(.12,12,12),m);d.scale.set(1,1.45,1),d.position.set(-.16,2.7,.48);const M=new E(new j(.03,.05,.22,10),m);M.position.set(-.16,2.88,.48),M.rotation.z=-.2;const x=new E(new j(.09,.12,.75,10),h);x.position.set(.42,3.05,.08),x.rotation.z=-Math.PI/5.5;const _=new E(new j(.08,.09,.65,10),n);_.position.set(.35,3.25,.32),_.rotation.set(Math.PI/4,0,Math.PI/8);const R=new K({color:5025616,roughness:.5}),b=new E(new j(.012,.018,.45,8),R);b.position.set(.36,3.65,.38),b.rotation.z=-.35;const C=new E(new At(.06,6,6),R);C.scale.set(.4,1.8,.4),C.position.set(.46,3.82,.38);const I=new E(new At(.28,20,20),n);I.position.set(0,3.7,0);const T=new E(new j(.22,.3,.38,16),t);T.position.set(0,4.02,0);const S=new E(new At(.07,8,8),t);S.position.set(0,4.15,.22);const P=new E(new j(.29,.42,1.2,16,1,!0,Math.PI*.3,Math.PI*1.4),h);P.position.set(0,3.55,-.05);const k=new E(new ue(.72,.05,10,28),new K({color:8445674,emissive:48340,emissiveIntensity:.85}));k.position.set(0,3.8,-.22);const O=new Hn(11725810,2.2,8);O.position.set(0,3.9,.6);const V=new E(new ct(2.2,.35,.04),new K({map:this.generateSignboardTexture("Nam Mô Quán Thế Âm Bồ Tát")}));V.position.set(0,.4,1.25);const X=new E(new ct(1.6,.7,.65),e);X.position.set(0,.35,1.85);const H=new E(new j(.12,.1,.15,12),t);H.position.set(0,.78,1.85),r.add(u,f,p,g,v,d,M,x,_,b,C,I,T,S,P,k,O,V,X,H),this.scene.add(r);const J=new Pt;J.position.set(7.6,0,-4),J.rotation.y=-Math.PI/4.2;const W=new E(new j(1.2,1.4,.4,16),e);W.position.y=.2;const $=new E(new j(1,1.15,.35,16),t);$.position.y=.55;const st=new E(new j(.85,.7,.3,16),t);st.position.y=.85,J.add(W,$,st);const ht=new K({color:13840175,roughness:.45,emissive:4849664,emissiveIntensity:.25});for(let B=0;B<16;B++){const Y=B/16*Math.PI*2,tt=new E(new At(.22,10,8),ht);tt.scale.set(1.2,.45,.75),tt.position.set(Math.cos(Y)*.95,.92,Math.sin(Y)*.95),tt.rotation.y=-Y,tt.rotation.z=Math.PI/5.5,J.add(tt)}const Ct=new K({color:15094016,roughness:.5}),qt=new K({color:16498733,roughness:.35,metalness:.3}),Q=new E(new j(.44,.7,1.6,20),Ct);Q.position.y=1.75;const it=new E(new j(.36,.46,1.1,18),Ct);it.position.y=2.95;const mt=new E(new j(.38,.48,1.12,18,1,!1,0,Math.PI*1.1),qt);mt.position.y=2.95;const rt=new E(new j(.09,.12,.75,10),Ct);rt.position.set(-.42,3.05,.08),rt.rotation.z=Math.PI/6;const St=new E(new j(.08,.09,.65,10),n);St.position.set(-.25,2.75,.32),St.rotation.set(-Math.PI/3,0,-Math.PI/6);const Rt=new E(new At(.13,16,16),new K({color:16774557,emissive:16766464,emissiveIntensity:1.2,roughness:.15}));Rt.position.set(-.16,2.85,.5);const Ft=new Hn(16771584,2.6,7);Ft.position.set(-.16,2.85,.5);const jt=new E(new j(.09,.12,.75,10),Ct);jt.position.set(.42,3.05,.08),jt.rotation.z=-Math.PI/6;const Ut=new E(new j(.08,.09,.65,10),n);Ut.position.set(.4,2.85,.3),Ut.rotation.set(.1,0,0);const Qt=new Pt;Qt.position.set(.5,0,.32);const L=new E(new j(.022,.022,3.4,10),t);L.position.y=2.4;const me=new E(new ue(.18,.025,8,20),t);me.position.y=4.15;const zt=new E(new Ce(.06,.22,8),t);zt.position.y=4.42;for(let B=0;B<6;B++){const Y=new E(new ue(.05,.012,6,12),t),tt=B%2===0?-1:1,q=Math.floor(B/2);Y.position.set(tt*.16,4.05+q*.09,0),Y.rotation.y=Math.PI/2,Qt.add(Y)}Qt.add(L,me,zt);const Bt=new E(new At(.28,20,20),n);Bt.position.set(0,3.7,0);const Mt=new E(new j(.26,.3,.28,16),t);Mt.position.set(0,3.96,0);for(let B=-2;B<=2;B++){const Y=new E(new Ce(.065,.2,6),t);Y.position.set(B*.09,4.18,.2-Math.abs(B)*.04),J.add(Y)}[-.3,.3].forEach(B=>{const Y=new E(new ct(.08,.95,.02),i);Y.position.set(B,3.45,-.05),J.add(Y)});const Lt=new E(new ue(.72,.05,10,28),new K({color:16763432,emissive:16748288,emissiveIntensity:.85}));Lt.position.set(0,3.8,-.22);const xt=new E(new ct(2.2,.35,.04),new K({map:this.generateSignboardTexture("Nam Mô Địa Tạng Vương Bồ Tát")}));xt.position.set(0,.4,1.25);const A=new E(new ct(1.6,.7,.65),e);A.position.set(0,.35,1.85);const y=new E(new j(.12,.1,.15,12),t);y.position.set(0,.78,1.85),J.add(Q,it,mt,rt,St,Rt,Ft,jt,Ut,Qt,Bt,Mt,Lt,xt,A,y),this.scene.add(J)}createEighteenArhats(){const t=new Pt,e=new K({color:10383922,metalness:.82,roughness:.28,emissive:3021059,emissiveIntensity:.15}),n=new K({color:16103978,metalness:.88,roughness:.2}),i=new K({color:1710620,roughness:.85}),r=new K({color:15519927,roughness:.45}),o=[{id:"hanglong",name:"Hàng Long La Hán",desc:"Thu phục rồng vàng"},{id:"truongmi",name:"Trường Mi La Hán",desc:"Lông mày dài từ bi"},{id:"thacthap",name:"Thác Tháp La Hán",desc:"Nâng bảo tháp 7 tầng"},{id:"bodai",name:"Bố Đại La Hán",desc:"Khoác túi vải hoan hỉ"},{id:"tinhtoa",name:"Tĩnh Tọa La Hán",desc:"Nhập định kiết già"},{id:"kytuong",name:"Kỵ Tượng La Hán",desc:"Thu phục bạch tượng"},{id:"khaimtam",name:"Khai Tâm La Hán",desc:"Phật hiện trong tâm"},{id:"batieu",name:"Ba Tiêu La Hán",desc:"Cầm quạt ba tiêu"},{id:"toaloc",name:"Tọa Lộc La Hán",desc:"Tĩnh tọa bên nai ngọc"}],a=[{id:"phucho",name:"Phục Hổ La Hán",desc:"Hàng phục mãnh hổ"},{id:"cubat",name:"Cử Bát La Hán",desc:"Nâng bát hóa duyên"},{id:"hoanhi",name:"Hoan Hỉ La Hán",desc:"Nụ cười giác ngộ"},{id:"thamthu",name:"Thám Thủ La Hán",desc:"Vươn tay tự tại"},{id:"tramtu",name:"Trầm Tư La Hán",desc:"Chiêm nghiệm diệu pháp"},{id:"hikhanh",name:"Hỉ Khánh La Hán",desc:"Gõ khánh ngọc trừ tà"},{id:"quagiang",name:"Quá Giang La Hán",desc:"Vượt biển sanh tử"},{id:"tieusu",name:"Tiếu Sư La Hán",desc:"Đùa vui cùng sư tử"},{id:"khanmon",name:"Khán Môn La Hán",desc:"Giữ gậy trượng thiền gia"}],c=[-1.5,.3,2.1,3.9,5.7,7.5,9.3,11.1,12.9],l=(h,u,f,p)=>{const g=new Pt;g.position.set(u,0,f),g.rotation.y=p?Math.PI/2:-Math.PI/2;const v=new E(new j(.7,.78,.35,8),i);v.position.y=.175;const m=new E(new j(.65,.58,.18,16),n);m.position.y=.44,g.add(v,m);const d=new E(new j(.28,.44,.95,14),e);d.position.y=.98;const M=new E(new j(.48,.55,.32,14),e);M.position.y=.65;const x=new E(new At(.18,14,14),r);x.position.set(0,1.58,.02);const _=new E(new ue(.28,.025,8,20),n);switch(_.position.set(0,1.62,-.12),g.add(d,M,x,_),h.id){case"hanglong":{const b=new E(new ue(.38,.045,8,24),n);b.position.set(0,1.05,.05),b.rotation.x=Math.PI/4;const C=new E(new Ce(.08,.18,8),n);C.position.set(.28,1.35,.22),C.rotation.z=-Math.PI/3,g.add(b,C);break}case"phucho":{const b=new E(new ct(.32,.18,.45),n);b.position.set(.18,.62,.32);const C=new E(new At(.11,8,8),n);C.position.set(.18,.72,.52),g.add(b,C);break}case"truongmi":{[-.08,.08].forEach(b=>{const C=new E(new j(.012,.005,.52,6),new de({color:16777215}));C.position.set(b,1.35,.18),C.rotation.x=.25,g.add(C)});break}case"thacthap":{const b=new E(new j(.02,.07,.35,8),n);b.position.set(.22,1.25,.25);const C=new Hn(16771899,1.2,3);C.position.set(.22,1.35,.25),g.add(b,C);break}case"cubat":{const b=new E(new At(.11,10,10,0,Math.PI*2,0,Math.PI*.65),n);b.position.set(0,1.15,.28),g.add(b);break}case"bodai":{const b=new E(new At(.26,12,12),new K({color:9268835}));b.scale.set(1.1,1.3,.9),b.position.set(-.35,.72,.15),g.add(b);break}case"batieu":{const b=new E(new Co(.18,12),n);b.position.set(.24,1.15,.24),b.rotation.y=Math.PI/4,g.add(b);break}case"khaimtam":{const b=new Hn(16750592,1.5,2.5);b.position.set(0,1.12,.22),g.add(b);break}default:{const b=new E(new ue(.14,.02,6,16),n);b.position.set(0,1.05,.24),g.add(b);break}}const R=new E(new ct(1,.2,.03),new K({map:this.generateSignboardTexture(h.name)}));return R.position.set(0,.2,.52),g.add(R),g};o.forEach((h,u)=>{const f=l(h,-9.6,c[u],!0);t.add(f)}),a.forEach((h,u)=>{const f=l(h,9.6,c[u],!1);t.add(f)}),this.scene.add(t)}createAuthenticCushionsGrid(){const t=new Pt;this.cushionPositions=[];const e=new j(.48,.52,.14,20),n=new K({map:this.textures.cushion,roughness:.75,metalness:.05}),i=[-3.6,-2,2,3.6],r=[.5,3.2,5.9,8.6,11.3];i.forEach(o=>{r.forEach(a=>{const c=new E(e,n);c.position.set(o,.07,a),c.receiveShadow=!0,c.castShadow=!0;const l=new E(new j(.5,.54,.03,20),new K({color:2039586,roughness:.85}));l.position.set(o,.015,a),t.add(c,l),this.cushionPositions.push({x:o,z:a})})}),this.scene.add(t)}findNearestCushion(t,e){if(!this.cushionPositions.length)return{x:0,z:2};let n=this.cushionPositions[0],i=1/0;for(const r of this.cushionPositions){const o=Math.hypot(r.x-t,r.z-e);o<i&&(i=o,n=r)}return{...n}}createInteractiveStations(){const t=new K({color:4003599,roughness:.65}),e=new Pt;e.position.set(-5.6,0,-1.8);const n=new E(new j(.18,.22,5,16),t);n.position.set(-1.1,2.5,0);const i=n.clone();i.position.set(1.1,2.5,0);const r=new E(new ct(2.8,.35,.35),t);r.position.set(0,4.8,0);const o=new E(new ct(2.4,.18,.18),t);o.position.set(0,4.35,0);const a=new K({color:10385982,metalness:.85,roughness:.25}),c=new E(new ue(.16,.04,12,24),a);c.position.set(0,4.2,0);const l=new Pt;l.position.set(0,4.05,0);const h=new K({color:12558414,metalness:.88,roughness:.22,emissive:2234117,emissiveIntensity:.15}),u=new E(new At(.55,24,16,0,Math.PI*2,0,Math.PI*.5),h);u.position.y=-.15;const f=new E(new j(.55,.58,.8,24),h);f.position.y=-.55;const p=new E(new j(.58,.84,.85,24),h);p.position.y=-1.375;const g=new E(new ue(.84,.06,12,32),h);g.rotation.x=Math.PI/2,g.position.y=-1.8;const v=new E(new ue(.56,.025,8,32),a);v.rotation.x=Math.PI/2,v.position.y=-.55;const m=new E(new ue(.68,.03,8,32),a);m.rotation.x=Math.PI/2,m.position.y=-1.35,l.add(u,f,p,g,v,m),this.bellMesh=l;const d=new Pt;d.position.set(0,-.6,0);const M=new E(new At(.14,14,14),a);M.position.y=-.6;const x=new K({color:9069116,roughness:.9}),_=new E(new j(.022,.022,1.8,10),x);_.position.y=-1.5;const R=new K({color:12000284,roughness:.6}),b=new E(new j(.045,.045,.45,12),R);b.position.y=-2.4;const C=new E(new ue(.05,.015,8,16),a);C.rotation.x=Math.PI/2,C.position.y=-2.175;const I=C.clone();I.position.y=-2.625;const T=new E(new j(.01,.045,.3,8),new de({color:12986408}));T.position.y=-2.8,d.add(M,_,b,C,I,T),l.add(d),this.bellRope=d;const S=new E(new ct(1.5,.3,.04),new K({map:this.generateSignboardTexture("Đại Hồng Chung")}));S.position.set(0,5.25,0),e.add(n,i,r,o,c,l,S),this.scene.add(e);const P=new Pt;P.position.set(5.6,0,-1.8);const k=new K({color:4001287,roughness:.45}),O=new E(new j(.46,.52,.55,24),k);O.position.y=.275;const V=new E(new j(.38,.42,.14,24),new K({color:10361370,roughness:.7}));V.position.y=.62;const X=new E(new At(.25,24,24),new K({color:8140823,roughness:.32,metalness:.15}));X.scale.set(1.18,.82,1.05),X.position.set(0,.88,0),this.woodfishMesh=X;const H=new E(new ct(1,.22,.03),new K({map:this.generateSignboardTexture("Mõ Gỗ Bát Nhã")}));H.position.set(0,1.45,-.1),P.add(O,V,X,H),this.scene.add(P);const J=new Pt;J.position.set(2.8,0,-1.8);const W=new E(new ct(1.2,.9,.8),t);W.position.y=.45;const $=new E(new j(.11,.1,.42,12),new K({color:12558360,roughness:.4}));$.position.set(0,1.11,0);const st=new E(new ct(1.3,.26,.04),new K({map:this.generateSignboardTexture("Xin Xăm Quẻ")}));st.position.set(0,1.45,0),J.add(W,$,st),this.scene.add(J);const ht=new Pt;ht.position.set(-2.8,0,-1.8);const Ct=new E(new ct(1.2,.9,.8),t);Ct.position.y=.45;const qt=new E(new ct(.5,.08,.35),new K({color:2231046,roughness:.4}));qt.position.set(0,.94,.05);const Q=new E(new j(.09,.07,.3,12),new K({color:11897660,metalness:.8}));Q.position.set(-.2,1.05,.05);for(let rt=-2;rt<=2;rt++){const St=new E(new j(.005,.005,.38),new de({color:11149841}));St.position.set(-.2+rt*.015,1.25,.05+rt%2*.01),ht.add(St)}const it=new E(new j(.006,.006,.32),new de({color:13379860}));it.rotation.z=Math.PI/2,it.position.set(.12,.99,.05);const mt=new E(new ct(1.3,.26,.04),new K({map:this.generateSignboardTexture("Bàn Thỉnh Hương")}));mt.position.set(0,1.45,0),ht.add(Ct,qt,Q,it,mt),this.scene.add(ht)}createCourtyard(){const t=new Pt,e=new Ke(32,19),n=new K({color:3352093,roughness:.85,metalness:.05}),i=new E(e,n);i.rotation.x=-Math.PI/2,i.position.set(0,-.01,27),i.receiveShadow=!0,t.add(i);const r=new Ke(4,19),o=new K({color:4863784,roughness:.7,metalness:.08}),a=new E(r,o);a.rotation.x=-Math.PI/2,a.position.set(0,.01,27),t.add(a);const c=new E(new Ke(2.4,18.5),new K({map:this.textures.carpet,roughness:.65}));c.rotation.x=-Math.PI/2,c.position.set(0,.02,27),t.add(c);for(let R=0;R<3;R++){const b=new E(new ct(6.6+R*.4,.08,.45),new K({color:2825750,roughness:.8}));b.position.set(0,.04+R*.06,17.5+(2-R)*.4),t.add(b)}const l=new Pt;l.position.set(0,0,21);const h=new K({color:7227423,roughness:.4,metalness:.7}),u=new E(new j(.55,.65,.4,16),h);u.position.y=.2;const f=new E(new At(.6,16,14),h);f.scale.set(1,.75,1),f.position.y=.75;const p=new E(new j(.58,.58,.15,16),h);p.position.y=1.15;for(let R=-1;R<=1;R++){const b=new E(new j(.015,.015,.95),new de({color:11149841}));b.position.set(R*.14,1.5,0);const C=new E(new At(.025,6,6),new de({color:16729344}));C.position.set(R*.14,1.95,0),l.add(b,C)}l.add(u,f,p),t.add(l);const g=new K({color:2232584,roughness:.7}),v=new K({color:16754470,emissive:16748288,emissiveIntensity:.85});[-14.5,14.5].forEach(R=>{[20,26,32].forEach(b=>{const C=new E(new j(.12,.15,3.8,8),g);C.position.set(R,1.9,b);const I=new E(new j(.24,.32,.65,8),v);I.position.set(R,3.8,b),t.add(C,I)})});const m=new Pt;m.position.set(-13,0,32.5);const d=new E(new j(.48,.82,4.6,10),new K({color:4007702,roughness:.9}));d.position.y=2.3;const M=new K({color:3046706,roughness:.8}),x=new E(new At(2.5,12,10),M);x.position.set(0,5,0);const _=new E(new At(1.9,10,8),M);_.position.set(.9,5.7,-.6),m.add(d,x,_),t.add(m),this.scene.add(t)}createTamQuanGate(){const t=new Pt;t.position.set(0,0,35.8);const e=new K({color:3024160,roughness:.85,metalness:.05}),n=new K({color:2363656,roughness:.45}),i=new K({color:8133140,roughness:.55}),r=new K({color:5905940,roughness:.65}),o=new K({color:13938487,roughness:.25,metalness:.85}),a=new K({color:4336159,roughness:.9}),c=new E(new ct(26,.4,4.2),e);c.position.y=.2,c.receiveShadow=!0,t.add(c);for(let M=0;M<3;M++){const x=new E(new ct(10+M*.4,.12,.45),e);x.position.set(0,.06+M*.1,2.3+(2-M)*.42),t.add(x)}[-2.6,2.6].forEach((M,x)=>{const _=new E(new j(.55,.68,.6,16),e);_.position.set(M,.65,0);const R=new E(new j(.38,.42,6.8,16),n);R.position.set(M,4.1,0),R.castShadow=!0;const b=new E(new ct(1.1,.45,1.1),n);b.position.set(M,7.65,0);const C=x===0?"PHẬT PHÁP VÔ BIÊN ĐỘ CHÚNG SINH ĐỒNG QUY GIÁC NGẠN":"THIỀN TÂM TỰ TẠI VỪA LÀM VỪA TU VẠN SỰ AN NHIÊN",I=new E(new ct(.55,4.8,.04),new K({map:this.generateCoupletTexture(C)}));I.position.set(M,4.1,-.42),t.add(_,R,b,I)}),[-6.2,6.2].forEach(M=>{const x=new E(new j(.44,.54,.5,16),e);x.position.set(M,.6,0);const _=new E(new j(.28,.32,5,16),n);_.position.set(M,3.25,0),_.castShadow=!0;const R=new E(new ct(.85,.38,.85),n);R.position.set(M,5.85,0),t.add(x,_,R)}),[-1.15,1.15].forEach((M,x)=>{const _=new E(new ct(1.95,4.2,.12),i),R=x===0?.45:-.45;_.position.set(M+(x===0?-.4:.4),2.5,-.35),_.rotation.y=R,_.castShadow=!0;const b=new E(new ue(.12,.025,8,16),o);b.position.set(M+(x===0?.3:-.3),2.5,-.25),t.add(_,b)});const l=new E(new ct(5.6,.65,.7),n);l.position.set(0,4.95,0),t.add(l),[-4.4,4.4].forEach(M=>{const x=new E(new ct(2.1,3.2,.1),i);x.position.set(M,2,0);const _=new E(new ct(2.8,.45,.55),n);_.position.set(M,3.8,0);const R=new E(new ct(3.6,.45,2.4),r);R.position.set(M,4.35,0);const b=new E(new At(.15,10,8),o);b.position.set(M,4.85,0),t.add(x,_,R,b)});const h=new E(new ct(7.6,.55,3.2),r);h.position.set(0,5.5,0),h.castShadow=!0,[-3.8,3.8].forEach(M=>{[-1.6,1.6].forEach(x=>{const _=new E(new Ce(.22,.75,4),r);_.rotation.x=x>0?-.45:.45,_.rotation.z=M>0?.45:-.45,_.position.set(M,5.8,x),t.add(_)})});const u=new E(new ct(5,1.35,2.1),n);u.position.set(0,6.4,0);const f=new E(new ct(6.4,.55,2.6),r);f.position.set(0,7.3,0),f.castShadow=!0,[-3.2,3.2].forEach(M=>{[-1.3,1.3].forEach(x=>{const _=new E(new Ce(.2,.65,4),r);_.rotation.x=x>0?-.45:.45,_.rotation.z=M>0?.45:-.45,_.position.set(M,7.55,x),t.add(_)})});const p=new E(new At(.32,16,12),o);p.position.set(0,8,0);const g=new E(new Ce(.18,.85,12),o);g.position.set(0,8.55,0),t.add(h,u,f,p,g);const v=new E(new ct(3.6,1.05,.12),new K({map:this.generateSignboardTexture("VỪA LÀM VỪA TU TỰ","CHÙA VỪA LÀM VỪA TU • CỔNG TAM QUAN")}));v.position.set(0,6.4,-1.08);const m=new E(new ct(3.6,1.05,.12),new K({map:this.generateSignboardTexture("VỪA LÀM VỪA TU TỰ","CHÙA VỪA LÀM VỪA TU • CỔNG TAM QUAN")}));m.position.set(0,6.4,1.08),m.rotation.y=Math.PI,t.add(v,m),[-8.2,8.2].forEach(M=>{const x=new E(new j(.65,.78,.55,8),e);x.position.set(M,.55,-1);const _=new E(new j(.35,.45,1.6,12),e);_.position.set(M,1.55,-1);const R=new E(new At(.28,12,12),e);R.position.set(M,2.5,-1);const b=new E(new Ce(.24,.55,8),o);b.position.set(M,2.9,-1),t.add(x,_,R,b)}),[-11.1,11.1].forEach(M=>{const x=new E(new ct(9.8,2.8,.45),a);x.position.set(M,1.4,0);const _=new E(new ct(10.2,.22,.7),r);_.position.set(M,2.9,0),t.add(x,_)}),[-16,16].forEach(M=>{const x=new E(new ct(.45,2.8,18.5),a);x.position.set(M,1.4,-9.2);const _=new E(new ct(.7,.22,18.8),r);_.position.set(M,2.9,-9.2),t.add(x,_)});const d=new K({color:16727296,emissive:16727296,emissiveIntensity:.85});[-2.6,2.6,-4.4,4.4].forEach(M=>{const x=new E(new j(.18,.26,.55,8),d);x.position.set(M,4.6,-1.4),t.add(x)}),this.scene.add(t)}createLotusPond(){const t=new Pt;t.position.set(-8.5,0,25.5);const e=new K({color:3555389,roughness:.88,metalness:.1}),n=new E(new j(2.4,2.65,.42,28,1,!0),e);n.position.y=.21,n.receiveShadow=!0;const i=new E(new ue(2.4,.14,12,32),e);i.rotation.x=Math.PI/2,i.position.y=.42;const r=new K({color:1713699,roughness:.95}),o=new E(new j(2.35,2.35,.05,28),r);o.position.y=.025;const a=new K({color:941398,roughness:.06,metalness:.15,transparent:!0,opacity:.82,emissive:207655,emissiveIntensity:.25}),c=new E(new j(2.32,2.32,.04,32),a);c.position.y=.32,this.waterMesh=c;const l=new K({color:3046706,roughness:.65});[{x:-1.05,z:-.55,r:.42,rot:.2},{x:-.5,z:.95,r:.38,rot:1.1},{x:.9,z:.55,r:.46,rot:2.3},{x:.75,z:-.85,r:.4,rot:3.5},{x:-.25,z:-1.1,r:.32,rot:.8},{x:1.15,z:-.2,r:.3,rot:1.7}].forEach(_=>{const R=new E(new j(_.r,_.r,.015,16),l);R.position.set(_.x,.34,_.z),R.rotation.y=_.rot,t.add(R)});const u=new K({color:16027569,emissive:15277667,emissiveIntensity:.3,roughness:.4}),f=new de({color:16771899});[{x:-1,z:-.5},{x:.85,z:.5}].forEach(_=>{const R=new Pt;R.position.set(_.x,.38,_.z);for(let C=0;C<8;C++){const I=C/8*Math.PI*2,T=new E(new Ce(.05,.14,5),u);T.position.set(Math.cos(I)*.06,.02,Math.sin(I)*.06),T.rotation.set(.4*Math.sin(I),I,.4*Math.cos(I)),R.add(T)}const b=new E(new j(.035,.035,.04,8),f);R.add(b),t.add(R)});const p=new E(new j(.12,.16,.9,8),e);p.position.set(-2.2,.45,-1.5);const g=new E(new ct(.38,.32,.38),new K({color:16766287,emissive:16750592,emissiveIntensity:.6}));g.position.set(-2.2,.95,-1.5);const v=new E(new Ce(.46,.24,4),e);v.position.set(-2.2,1.2,-1.5),v.rotation.y=Math.PI/4,t.add(p,g,v);const m=new K({color:5597999,roughness:.6}),d=new E(new j(.05,.05,.85,8),m);d.position.set(-1.8,.425,1.2);const M=new E(new j(.035,.035,.65,8),m);M.rotation.z=-Math.PI/3,M.position.set(-1.58,.72,1.2),t.add(d,M);const x=new E(new ct(1.6,.3,.04),new K({map:this.generateSignboardTexture("Hồ Sen Phóng Sinh","Tích Đức Phóng Sinh • Tâm An Phúc Lạc")}));x.position.set(0,1.25,-2.6),t.add(n,i,o,c,x),this.scene.add(t),this.pondGroup=t,this.createInitialPondFish()}createInitialPondFish(){["koi","goldfish","carp","turtle"].forEach((e,n)=>{this.spawnPondFish(e,n*(Math.PI/2),.85+n*.35)})}spawnPondFish(t,e=0,n=1.1){const i=new Pt,r=t==="turtle";let o;if(t==="koi"?o=new K({color:16739584,roughness:.3,metalness:.2}):t==="goldfish"?o=new K({color:16757504,roughness:.25,metalness:.3}):t==="carp"?o=new K({color:13959168,roughness:.3,metalness:.2}):o=new K({color:3046706,roughness:.7,metalness:.1}),r){const c=new E(new At(.12,10,8),o);c.scale.set(1,.55,1.2);const l=new E(new At(.045,8,8),o);l.position.set(0,.01,.15);const h=new K({color:3706428});[-.1,.1].forEach(u=>{[-.09,.09].forEach(f=>{const p=new E(new ct(.05,.02,.08),h);p.position.set(u,-.02,f),c.add(p)})}),i.add(c,l)}else{const c=new E(new At(.08,12,8),o);if(c.scale.set(.65,.85,2.2),t==="koi"){const p=new E(new At(.045,8,8),new de({color:16777215}));p.position.set(0,.055,.02),p.scale.set(.8,.3,1.4),c.add(p)}const l=new Pt;l.position.set(0,0,-.16);const h=new Ce(.075,.18,6),u=new E(h,o);u.rotation.x=-Math.PI/2,u.scale.set(.2,1,.9),l.add(u),c.add(l);const f=new de({color:16769154,transparent:!0,opacity:.75});[-.06,.06].forEach((p,g)=>{const v=new E(new Ke(.07,.1),f);v.position.set(p,-.01,.04),v.rotation.set(Math.PI/4,0,g===0?.6:-.6),c.add(v)}),i.add(c),i.tailPivot=l}i.position.set(-8.5+Math.cos(e)*n,.24,25.5+Math.sin(e)*n),this.scene.add(i);const a={group:i,tailPivot:i.tailPivot||null,type:t,angle:e,radius:n,speed:.45+Math.random()*.35,yBase:.22+Math.random()*.05,seed:Math.random()*10};return this.pondFish.push(a),a}createChessPavilion(){const t=new Pt;t.position.set(8.5,0,25.5);const e=new K({color:2363656,roughness:.45}),n=new K({color:3352093,roughness:.85}),i=new K({color:3806990,roughness:.55}),r=new K({color:13938487,roughness:.25,metalness:.85}),o=new E(new j(2.35,2.5,.28,8),n);o.position.y=.14,o.receiveShadow=!0,t.add(o);const a=new j(.12,.14,3.2,12);[[-1.35,-1.35],[1.35,-1.35],[-1.35,1.35],[1.35,1.35]].forEach(([V,X])=>{const H=new E(a,e);H.position.set(V,1.74,X),H.castShadow=!0,t.add(H)});const c=new E(new Ce(2.8,1.35,8),i);c.position.y=3.9,c.castShadow=!0;const l=new E(new At(.16,12,10),r);l.position.y=4.65,t.add(c,l);const h=new E(new Ce(.08,.14,8),r);h.position.set(0,3.15,0),t.add(h);const u=new E(new j(.24,.38,.62,16),e);u.position.y=.45;const f=new E(new j(.85,.85,.08,24),e);f.position.y=.8;const p=new E(new ue(.85,.016,8,32),r);p.rotation.x=Math.PI/2,p.position.y=.8;const g=new ct(.64,.034,.72),v=new K({map:this.textures.chessBoard,roughness:.28,metalness:.06}),m=new E(g,v);m.position.set(-.06,.856,0);const d=new K({color:10365467,roughness:.35,metalness:.2}),M=new K({color:2236962,roughness:.4,metalness:.15}),x=new K({color:14596231,roughness:.3});[{x:-.06,z:.26,c:"r"},{x:-.22,z:.26,c:"r"},{x:.1,z:.26,c:"r"},{x:-.16,z:.12,c:"r"},{x:-.06,z:.05,c:"r"},{x:-.06,z:-.26,c:"b"},{x:.1,z:-.26,c:"b"},{x:-.28,z:-.26,c:"b"},{x:.1,z:-.12,c:"b"},{x:.1,z:-.05,c:"b"}].forEach(V=>{const X=new Pt,H=new E(new j(.024,.025,.012,16),x),J=new E(new ue(.023,.0025,8,16),V.c==="r"?d:M);J.rotation.x=Math.PI/2,J.position.y=.006,X.add(H,J),X.position.set(V.x,.88,V.z),t.add(X)});const R=new Pt;R.position.set(.48,.84,0);const b=new K({color:6105114,roughness:.65}),C=new E(new At(.065,12,10),b);C.scale.set(1,.75,1);const I=new E(new j(.03,.03,.02,10),b);I.position.y=.055;const T=new E(new j(.012,.018,.06,8),b);T.rotation.z=-Math.PI/3,T.position.set(-.06,.02,0),R.add(C,I,T);const S=new K({color:10868391,roughness:.2});[-.06,.06].forEach(V=>{const X=new E(new j(.028,.018,.035,10),S);X.position.set(.02,.018,V),R.add(X)}),t.add(R);const P=new K({color:2035464,roughness:.6}),k=new K({color:9051156,roughness:.75,map:this.textures.cushion});[-1.15,1.15].forEach(V=>{const X=new E(new j(.24,.28,.28,16),P);X.position.set(0,.28,V);const H=new E(new j(.28,.28,.1,16),k);H.position.set(0,.47,V),t.add(X,H)});const O=new E(new ct(1.6,.3,.04),new K({map:this.generateSignboardTexture("Kỳ Đài Chánh Niệm","Kỳ Đạo Đàm Đạo • Tâm Tĩnh Trí Minh")}));O.position.set(0,2.85,-1.35),t.add(u,f,p,m,O),this.scene.add(t)}spawnReleasedFish(t,e=""){const n=Math.random()*Math.PI*2,i=this.spawnPondFish(t,n,.95+Math.random()*.45);return this.spawnClickRipple(-8.5+Math.cos(n)*i.radius,25.5+Math.sin(n)*i.radius),i}spawnFloatingLantern(t=""){const e=new Pt,n=new K({color:16754470,emissive:16739584,emissiveIntensity:.85,roughness:.3}),i=new E(new j(.12,.08,.04,8),n),r=new E(new j(.09,.11,.12,6),new de({color:16769154}));r.position.y=.08;const o=new E(new At(.02,6,6),new de({color:16727296}));o.position.y=.14,e.add(i,r,o);const a=Math.random()*Math.PI*2,c=.6+Math.random()*.9;e.position.set(-8.5+Math.cos(a)*c,.34,25.5+Math.sin(a)*c),this.scene.add(e),this.floatingLanterns.push({group:e,angle:a,radius:c,driftSpeed:.12+Math.random()*.08,seed:Math.random()*10})}createAtmosphericLighting(){const t=new cm(16774118,1.75);this.scene.add(t);const e=new qa(16775920,2.3);e.position.set(0,18,6),e.castShadow=!0,e.shadow.mapSize.width=1024,e.shadow.mapSize.height=1024,e.shadow.camera.near=.5,e.shadow.camera.far=35,this.scene.add(e);const n=new qa(16766287,1.25);n.position.set(0,14,-3.5),this.scene.add(n);const i=new K({color:16754470,emissive:16748288,emissiveIntensity:.95,roughness:.25});[-7.5,7.5].forEach(r=>{[0,6,12].forEach(o=>{const a=new E(new j(.22,.3,.6,10),i);a.position.set(r,6,o);const c=new Hn(16758605,1.5,9.5);c.position.set(r,6,o),this.candleLights.push(c),this.scene.add(a,c)})})}createParticleSystems(){const e=new Ne,n=new Float32Array(150),i=new Float32Array(50);for(let o=0;o<50;o++)n[o*3]=(Math.random()-.5)*.18,n[o*3+1]=1.8+Math.random()*2.6,n[o*3+2]=-3.68+(Math.random()-.5)*.18,i[o]=Math.random();e.setAttribute("position",new He(n,3)),e.setAttribute("alpha",new He(i,1));const r=new Oc({color:15718584,size:.2,transparent:!0,opacity:.45,blending:Is,depthWrite:!1});this.smokeParticles=new rm(e,r),this.scene.add(this.smokeParticles)}spawnDroppingFortuneStick(t,e,n){const i=new j(.012,.012,.45,8),r=new K({color:13938811,roughness:.4}),o=new E(i,r);o.position.set(t,1.35,e),o.rotation.z=Math.PI/4,this.scene.add(o);const a=Date.now(),c=750,l=()=>{const h=Date.now()-a,u=Math.min(1,h/c);o.position.y=1.35-u*1.3,o.rotation.x+=.08,o.rotation.z+=.05,u<1?requestAnimationFrame(l):(this.spawnClickRipple(t,e),setTimeout(()=>{this.scene.remove(o),i.dispose(),r.dispose()},1500),n&&n())};l()}ringBell(){this.bellRingTimer=2.8}spawnClickRipple(t,e){const n=new Ro(.1,.25,24),i=new de({color:16766287,side:Ze,transparent:!0,opacity:.95}),r=new E(n,i);r.rotation.x=-Math.PI/2,r.position.set(t,.025,e),this.scene.add(r),this.ripples.push({mesh:r,scale:1,maxScale:4.5,life:1})}update(t){const e=this.clock.getElapsedTime();if(this.candleLights.forEach((n,i)=>{n.intensity=1.2+Math.sin(e*7+i*2.1)*.28+(Math.random()-.5)*.08}),this.haloMesh&&(this.haloMesh.rotation.z=e*.12),this.bellRingTimer>0){this.bellRingTimer-=t;const n=Math.sin(this.bellRingTimer*8.5)*Math.min(1,this.bellRingTimer/1.5);this.bellRope&&(this.bellRope.rotation.x=n*.22,this.bellRope.rotation.z=n*.08),this.bellMesh&&(this.bellMesh.rotation.z=n*.04)}else this.bellRope&&this.bellRope.rotation.set(0,0,0),this.bellMesh&&this.bellMesh.rotation.set(0,0,0);if(this.smokeParticles){const n=this.smokeParticles.geometry.attributes.position.array;for(let i=0;i<n.length/3;i++)n[i*3+1]+=t*.45,n[i*3]+=Math.sin(e*2+i)*.003,n[i*3+1]>4.5&&(n[i*3+1]=1.8,n[i*3]=(Math.random()-.5)*.16,n[i*3+2]=-3.68+(Math.random()-.5)*.16);this.smokeParticles.geometry.attributes.position.needsUpdate=!0}for(let n=this.ripples.length-1;n>=0;n--){const i=this.ripples[n];i.scale+=t*3.8,i.life-=t*1.35,i.mesh.scale.set(i.scale,i.scale,i.scale),i.mesh.material.opacity=Math.max(0,i.life),i.life<=0&&(this.scene.remove(i.mesh),i.mesh.geometry.dispose(),i.mesh.material.dispose(),this.ripples.splice(n,1))}this.pondFish&&this.pondFish.length>0&&this.pondFish.forEach(n=>{n.angle+=n.speed*t,n.group.position.x=-8.5+Math.cos(n.angle)*n.radius,n.group.position.z=25.5+Math.sin(n.angle)*n.radius,n.group.position.y=n.yBase+Math.sin(e*2.8+n.seed)*.015,n.group.rotation.y=-n.angle+Math.PI/2,n.group.rotation.z=Math.sin(e*3.5+n.seed)*.08,n.tailPivot&&(n.tailPivot.rotation.y=Math.sin(e*8.5+n.seed)*.42)}),this.floatingLanterns&&this.floatingLanterns.length>0&&this.floatingLanterns.forEach(n=>{n.angle+=n.driftSpeed*t*.25,n.group.position.x=-8.5+Math.cos(n.angle)*n.radius,n.group.position.z=25.5+Math.sin(n.angle)*n.radius,n.group.position.y=.34+Math.sin(e*2.2+n.seed)*.012,n.group.rotation.y=e*.15}),this.waterMesh&&(this.waterMesh.rotation.y=e*.015)}}class s0{constructor(t){this.scene=t,this.avatars=new Map,this.localPlayerId=null,this.monkFaceTexture=this.generateChibiMonkFaceTexture()}setLocalPlayerId(t){this.localPlayerId=t}generateChibiMonkFaceTexture(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.fillStyle="#fae3d2",e.fillRect(0,0,1024,1024);const n=e.createLinearGradient(0,0,0,420);n.addColorStop(0,"#a2b4c2"),n.addColorStop(.55,"#c5d3dc"),n.addColorStop(.85,"#e8ded7"),n.addColorStop(1,"#fae3d2"),e.fillStyle=n,e.fillRect(0,0,1024,420);const i=512,r=560,o=e.createRadialGradient(i-165,r+45,5,i-165,r+45,95);o.addColorStop(0,"rgba(255, 115, 125, 0.42)"),o.addColorStop(1,"rgba(255, 115, 125, 0)"),e.fillStyle=o,e.beginPath(),e.arc(i-165,r+45,95,0,Math.PI*2),e.fill();const a=e.createRadialGradient(i+165,r+45,5,i+165,r+45,95);a.addColorStop(0,"rgba(255, 115, 125, 0.42)"),a.addColorStop(1,"rgba(255, 115, 125, 0)"),e.fillStyle=a,e.beginPath(),e.arc(i+165,r+45,95,0,Math.PI*2),e.fill(),e.strokeStyle="#362117",e.lineWidth=14,e.lineCap="round",e.beginPath(),e.arc(i-140,r-10,56,Math.PI*1.15,Math.PI*1.85),e.stroke(),e.beginPath(),e.arc(i+140,r-10,56,Math.PI*1.15,Math.PI*1.85),e.stroke(),e.lineWidth=8,e.beginPath(),e.arc(i-140,r-90,75,Math.PI*1.25,Math.PI*1.75),e.stroke(),e.beginPath(),e.arc(i+140,r-90,75,Math.PI*1.25,Math.PI*1.75),e.stroke(),e.strokeStyle="#ab4040",e.lineWidth=12,e.beginPath(),e.arc(i,r+85,48,Math.PI*.2,Math.PI*.8),e.stroke(),e.fillStyle="#b71c1c";const c=[i-45,i+45],l=[280,340,400];c.forEach(u=>{l.forEach(f=>{e.beginPath(),e.arc(u,f,12,0,Math.PI*2),e.fill()})});const h=new en(t);return h.colorSpace=ge,h}createAvatar(t){if(this.avatars.has(t.id))return this.updateAvatarProfile(t.id,t),this.avatars.get(t.id);const e=new Pt;e.position.set(t.x||0,t.y||0,t.z||0),typeof t.rotY=="number"&&(e.rotation.y=t.rotY);const n=parseInt((t.robeColor||"#E69500").replace("#","0x"),16),i=new K({color:5203061,roughness:.65,metalness:.05}),r=new K({color:3359824,roughness:.6}),o=new K({color:n,roughness:.52,metalness:.08}),a=new K({color:16442322,roughness:.45,metalness:0}),c=new K({map:this.monkFaceTexture,roughness:.42,metalness:0}),l=new K({color:4858897,roughness:.4}),h=new K({color:5515283,roughness:.32}),u=new K({color:16103978,metalness:.85,roughness:.22}),f=new K({color:16119285,roughness:.6}),p=new K({color:2825236,roughness:.75}),g=new Pt;g.position.y=.5,e.add(g);const v=new j(.24,.36,.44,20),m=new E(v,i);m.position.y=-.1,m.castShadow=!0,g.add(m);const d=new E(new ct(.16,.4,.03),o);d.position.set(-.08,-.1,.14),d.rotation.z=-.08,g.add(d);const M=new j(.07,.065,.34,12),x=new ct(.09,.065,.18),_=new Pt;_.position.set(-.1,-.16,0);const R=new E(M,f);R.position.y=-.12;const b=new E(x,p);b.position.set(0,-.28,.03),_.add(R,b);const C=new Pt;C.position.set(.1,-.16,0);const I=new E(M,f);I.position.y=-.12;const T=new E(x,p);T.position.set(0,-.28,.03),C.add(I,T),g.add(_,C);const S=new Pt;S.position.y=.08,g.add(S);const P=new j(.22,.25,.42,20),k=new E(P,i);k.position.y=.2,k.castShadow=!0,S.add(k);const O=new E(new ct(.035,.24,.02),r);O.rotation.z=-Math.PI/4.8,O.position.set(-.04,.32,.21);const V=new E(new ct(.035,.24,.02),r);V.rotation.z=Math.PI/4.8,V.position.set(.04,.32,.21),S.add(O,V);const X=new E(new ct(.14,.4,.025),o);X.position.set(-.03,.2,.19),X.rotation.z=-.4;const H=new E(new ct(.14,.4,.025),o);H.position.set(-.03,.2,-.19),H.rotation.z=-.4;const J=new E(new ct(.14,.035,.36),o);J.position.set(-.13,.375,0);const W=new E(new ue(.028,.008,8,16),u);W.position.set(-.13,.34,.2),S.add(X,H,J,W);const $=new Pt;$.position.set(0,.34,.11);for(let Dt=0;Dt<18;Dt++){const nt=Dt/18*Math.PI*2,gt=new E(new At(.016,8,8),h);gt.position.set(Math.cos(nt)*.15,-Math.sin(nt)*.18,Math.sin(nt)*.05),$.add(gt)}const st=new E(new j(.006,.014,.11,6),new de({color:11147288}));st.position.set(0,-.24,.09),$.add(st),S.add($);const ht=new Pt;ht.position.y=.4,S.add(ht);const Ct=new Pt;Ct.position.y=.18,ht.add(Ct);const qt=new E(new At(.28,32,32),c);qt.rotation.y=-Math.PI/2,qt.castShadow=!0,Ct.add(qt),[-.26,.26].forEach(Dt=>{const nt=new E(new At(.045,10,10),a);nt.scale.set(.35,.8,.55),nt.position.set(Dt,.02,-.02),Ct.add(nt)});const Q=new j(.09,.12,.2,14),it=new j(.08,.13,.18,14),mt=()=>{const Dt=new Pt,nt=new E(new At(.04,12,12),a);return nt.scale.set(.75,1.3,.45),nt.position.y=-.035,Dt.add(nt),Dt},rt=new Pt;rt.position.set(-.2,.02,0);const St=new E(Q,o);St.position.set(0,-.1,0);const Rt=new Pt;Rt.position.set(0,-.2,0);const Ft=new E(it,o);Ft.position.set(0,-.09,0);const jt=mt();jt.position.set(0,-.18,0),Rt.add(Ft,jt),rt.add(St,Rt);const Ut=new Pt;Ut.position.set(.2,.02,0);const Qt=new E(Q,i);Qt.position.set(0,-.1,0);const L=new Pt;L.position.set(0,-.2,0);const me=new E(it,i);me.position.set(0,-.09,0);const zt=mt();zt.position.set(0,-.18,0),L.add(me,zt),Ut.add(Qt,L),ht.add(rt,Ut);const Bt=new Pt,Mt=new E(new j(.012,.015,.38,8),l);Mt.rotation.x=Math.PI/2.2,Mt.position.set(0,-.18,.14);const Lt=new E(new At(.045,12,12),new K({color:10165019,roughness:.35}));Lt.position.set(0,-.18,.32),Bt.add(Mt,Lt),Bt.visible=!1,L.add(Bt);const xt=new Pt;xt.visible=!1,L.add(xt);const A=new Pt;A.position.set(0,-.06,.28);for(let Dt=-1;Dt<=1;Dt++){const nt=new E(new j(.005,.005,.26,8),new de({color:11149841}));nt.rotation.set(-.08,0,Dt*.06),nt.position.set(Dt*.015,.13,0);const gt=new E(new At(.009,8,8),new de({color:16729344}));gt.position.set(Dt*.015,.26,.01);const It=new E(new At(.012,6,6),new de({color:15132390,transparent:!0,opacity:.45}));It.position.set(Dt*.015,.29,.01),A.add(nt,gt,It)}A.visible=!1,ht.add(A);const y=new Pt;y.position.set(0,.07,.24);const B=new E(new j(.09,.08,.4,12),new K({color:10581818,roughness:.5}));y.add(B),y.visible=!1,ht.add(y);const Y=new E(new j(.44,.48,.12,20),new K({color:3816e3,roughness:.85}));Y.position.y=.06,Y.visible=!1,e.add(Y);const tt=document.createElement("div");tt.className="avatar-ui-container";const q=document.createElement("div");q.className="avatar-speech-bubble hidden",q.innerHTML='<div class="bubble-text"></div><div class="bubble-tail"></div>';const lt=document.createElement("div");lt.className="avatar-nametag meme-style"+(t.id===this.localPlayerId?" is-me":""),lt.innerHTML=`<span class="nametag-text">${this.escapeHtml(t.name||"Thích thì nhích")}</span>`,tt.appendChild(q),tt.appendChild(lt);const at=new hm(tt);at.position.set(0,1.65,0),e.add(at),this.scene.add(e);const vt={id:t.id,name:t.name,robeColor:t.robeColor,group:e,pelvis:g,skirt:m,legLGroup:_,legRGroup:C,spineGroup:S,chestGroup:ht,headGroup:Ct,armLGroup:rt,armRGroup:Ut,foreArmL:Rt,foreArmR:L,cushion:Y,css2dObject:at,uiContainer:tt,bubbleEl:q,tagEl:lt,bubbleTimeout:null,targetX:t.x||0,targetZ:t.z||0,targetRotY:t.rotY||0,action:t.action||"stand",actionTimer:0,walkCycle:Math.random()*10,isMoving:!1,merit:t.merit||0,sashRobeMat:o,props:{mallet:Bt,bellStriker:xt,incense:A,fortune:y}};return this.avatars.set(t.id,vt),t.currentBubble&&t.currentBubble.text&&this.showBubble(t.id,t.currentBubble.text,5e3),vt}setAction(t,e){const n=this.avatars.get(t);n&&(n.action=e,n.actionTimer=0,n.props&&(n.props.mallet.visible=e==="strikeWoodfish",n.props.bellStriker.visible=e==="strikeBell",n.props.incense.visible=e==="takeIncense"||e==="lightCandle"||e==="incense"||e==="plantIncense",n.props.fortune.visible=e==="shakeFortune"),e==="sit"?n.cushion.visible=!0:n.cushion.visible=!1)}showBubble(t,e,n=5e3){const i=this.avatars.get(t);if(!i)return;const r=i.bubbleEl.querySelector(".bubble-text");r&&(r.textContent=e),i.bubbleEl.classList.remove("hidden"),i.bubbleTimeout&&clearTimeout(i.bubbleTimeout),i.bubbleTimeout=setTimeout(()=>{i.bubbleEl.classList.add("hidden")},n)}updateAvatarData(t,e){const n=this.avatars.get(t);n&&(typeof e.x=="number"&&(n.targetX=e.x),typeof e.z=="number"&&(n.targetZ=e.z),typeof e.rotY=="number"&&(n.targetRotY=e.rotY),e.action&&e.action!==n.action&&this.setAction(t,e.action),(e.name||e.robeColor)&&this.updateAvatarProfile(t,e))}updateAvatarProfile(t,{name:e,robeColor:n}){const i=this.avatars.get(t);if(i){if(e&&(i.name=e,i.tagEl)){const r=i.tagEl.querySelector(".nametag-text");r?r.textContent=e:i.tagEl.innerHTML=`<span class="nametag-text">${this.escapeHtml(e)}</span>`}if(n&&i.sashRobeMat){i.robeColor=n;const r=parseInt(n.replace("#","0x"),16);i.sashRobeMat.color.setHex(r)}}}removeAvatar(t){const e=this.avatars.get(t);e&&(this.scene.remove(e.group),this.avatars.delete(t))}update(t){const e=Date.now()*.003;this.avatars.forEach(n=>{n.actionTimer+=t;const i=n.targetX-n.group.position.x,r=n.targetZ-n.group.position.z,o=Math.hypot(i,r);if(o>.04&&n.action!=="sit"){n.isMoving=!0;const _=Math.min(1,t*12);n.group.position.x+=i*_,n.group.position.z+=r*_}else if(n.isMoving=!1,n.action==="sit"){const _=Math.min(1,t*14);n.group.position.x+=(n.targetX-n.group.position.x)*_,n.group.position.z+=(n.targetZ-n.group.position.z)*_}else if(o>.001){const _=Math.min(1,t*12);n.group.position.x+=i*_,n.group.position.z+=r*_}let a=n.targetRotY-n.group.rotation.y;for(;a<-Math.PI;)a+=Math.PI*2;for(;a>Math.PI;)a-=Math.PI*2;n.group.rotation.y+=a*Math.min(1,t*14);let c=.5,l={x:0,y:0,z:0},h={x:0,y:0,z:0},u={x:0,y:0,z:0},f={x:0,y:0,z:0},p={x:0,y:0,z:0},g={x:.02,y:0,z:-.09},v={x:.02,y:0,z:.09},m={x:-.02,y:0,z:0},d={x:-.02,y:0,z:0},M={x:1,y:1,z:1};if(n.isMoving){n.walkCycle+=t*9.5;const _=n.walkCycle,R=Math.sin(_)*.4;f.x=-R,p.x=R,c=.5+Math.abs(Math.sin(_))*.028,l.y=Math.sin(_)*.04,l.z=Math.cos(_)*.02,h.y=-Math.sin(_)*.04,h.x=.04;const b=Math.sin(_)*.32;g={x:b,y:0,z:-.09},v={x:-b,y:0,z:.09},m.x=b<0?b*.35-.03:-.03,d.x=b>0?-b*.35-.03:-.03,u.x=-Math.sin(_*2)*.02,u.y=Math.sin(_)*.02}else if(n.action==="sit"){c=.16,l={x:0,y:0,z:0},f={x:-Math.PI/2.2,y:.35,z:-.2},p={x:-Math.PI/2.2,y:-.35,z:.2},h={x:0,y:0,z:0},g={x:-.45,y:.05,z:.18},v={x:-.45,y:-.05,z:-.18},m={x:-.65,y:.08,z:.08},d={x:-.65,y:-.08,z:-.08},u={x:.06,y:0,z:0};const _=Math.sin(e*1.5)*.02;M={x:1+_,y:1+_*.6,z:1+_}}else if(n.action==="bow"||n.action==="bow3Times"){const R=n.actionTimer%2.4/2.4;let b=0;R<.4?b=Math.sin(R/.4*(Math.PI/2)):R<.65?b=1:b=Math.cos((R-.65)/.35*(Math.PI/2)),b=Math.max(0,Math.min(1,b)),c=.5-b*.32,f.x=-b*1.15,p.x=-b*1.15,h.x=b*.88,u.x=b*.35,g={x:-.55,y:.1,z:.5},v={x:-.55,y:-.1,z:-.5},m={x:-1.25,y:0,z:.25},d={x:-1.25,y:0,z:-.25}}else if(n.action==="strikeWoodfish"){c=.5,h.x=.04,g={x:-.55,y:.1,z:.5},m={x:-1.25,y:0,z:.25};const _=n.actionTimer*6%(Math.PI*2),R=Math.max(0,Math.sin(_));v={x:-.38-R*.22,y:-.08,z:-.08},d={x:-.72-R*.4,y:-.1,z:-.05},u.x=.05+(1-R)*.04}else if(n.action==="strikeBell"){c=.5;const _=Math.sin(n.actionTimer*7.5),R=Math.sin(Math.min(Math.PI,n.actionTimer*2.2));h.x=.05+_*.1*R,h.y=_*.04*R;const b=-.55+_*.18*R;g={x:b,y:.1,z:.35},v={x:b,y:-.1,z:-.35},m={x:-.95+_*.15*R,y:0,z:.12},d={x:-.95+_*.15*R,y:0,z:-.12},u.x=-.12+Math.max(0,_)*.06}else if(n.action==="takeIncense")c=.5,h.x=.12,g={x:-.52,y:.12,z:.4},m={x:-1.18,y:0,z:.2},v={x:-.52,y:-.12,z:-.4},d={x:-1.18,y:0,z:-.2},u.x=.08;else if(n.action==="lightCandle")c=.5,h.x=.14,g={x:-.55,y:.1,z:.38},m={x:-1.15,y:0,z:.18},v={x:-.55,y:-.1,z:-.38},d={x:-1.15,y:0,z:-.18},u.x=.1;else if(n.action==="incense"||n.action==="plantIncense"){c=.5;const _=n.actionTimer;if(_<1.2){const R=Math.sin(_/1.2*(Math.PI/2));h.x=.08+R*.08,u.x=.05+R*.06,g={x:-.58-R*.1,y:.1,z:.38},v={x:-.58-R*.1,y:-.1,z:-.38},m={x:-1.18-R*.12,y:0,z:.18},d={x:-1.18-R*.12,y:0,z:-.18},n.props&&n.props.incense&&(n.props.incense.visible=!0)}else{const R=Math.sin(Math.min(Math.PI,(_-1.2)*2));h.x=.18+R*.18,u.x=.1+R*.06,g={x:-.45-R*.15,y:.05,z:.22},v={x:-.45-R*.15,y:-.05,z:-.22},m={x:-.85+R*.15,y:0,z:.1},d={x:-.85+R*.15,y:0,z:-.1},n.props&&n.props.incense&&_>1.8&&(n.props.incense.visible=!1)}}else if(n.action==="shakeFortune"){c=.5;const _=Math.sin(n.actionTimer*16)*.08;h.x=.08+_*.5,g={x:-.5+_,y:.1,z:.35},v={x:-.5+_,y:-.1,z:-.35},m={x:-1.1,y:0,z:.15},d={x:-1.1,y:0,z:-.15}}else{c=.5;const _=Math.sin(e*2)*.015;h.x=_*.3,u.x=_*.2,g={x:.02,y:0,z:-.09-_*.2},v={x:.02,y:0,z:.09+_*.2},m={x:-.02,y:0,z:0},d={x:-.02,y:0,z:0},M={x:1+_*.6,y:1+_*.4,z:1+_*.6}}const x=Math.min(1,t*14);n.pelvis.position.y+=(c-n.pelvis.position.y)*x,n.pelvis.rotation.x+=(l.x-n.pelvis.rotation.x)*x,n.pelvis.rotation.y+=(l.y-n.pelvis.rotation.y)*x,n.pelvis.rotation.z+=(l.z-n.pelvis.rotation.z)*x,n.spineGroup.rotation.x+=(h.x-n.spineGroup.rotation.x)*x,n.spineGroup.rotation.y+=(h.y-n.spineGroup.rotation.y)*x,n.spineGroup.rotation.z+=(h.z-n.spineGroup.rotation.z)*x,n.headGroup.rotation.x+=(u.x-n.headGroup.rotation.x)*x,n.headGroup.rotation.y+=(u.y-n.headGroup.rotation.y)*x,n.headGroup.rotation.z+=(u.z-n.headGroup.rotation.z)*x,n.legLGroup.rotation.x+=(f.x-n.legLGroup.rotation.x)*x,n.legLGroup.rotation.y+=(f.y-n.legLGroup.rotation.y)*x,n.legLGroup.rotation.z+=(f.z-n.legLGroup.rotation.z)*x,n.legRGroup.rotation.x+=(p.x-n.legRGroup.rotation.x)*x,n.legRGroup.rotation.y+=(p.y-n.legRGroup.rotation.y)*x,n.legRGroup.rotation.z+=(p.z-n.legRGroup.rotation.z)*x,n.armLGroup.rotation.x+=(g.x-n.armLGroup.rotation.x)*x,n.armLGroup.rotation.y+=(g.y-n.armLGroup.rotation.y)*x,n.armLGroup.rotation.z+=(g.z-n.armLGroup.rotation.z)*x,n.armRGroup.rotation.x+=(v.x-n.armRGroup.rotation.x)*x,n.armRGroup.rotation.y+=(v.y-n.armRGroup.rotation.y)*x,n.armRGroup.rotation.z+=(v.z-n.armRGroup.rotation.z)*x,n.foreArmL.rotation.x+=(m.x-n.foreArmL.rotation.x)*x,n.foreArmL.rotation.y+=(m.y-n.foreArmL.rotation.y)*x,n.foreArmL.rotation.z+=(m.z-n.foreArmL.rotation.z)*x,n.foreArmR.rotation.x+=(d.x-n.foreArmR.rotation.x)*x,n.foreArmR.rotation.y+=(d.y-n.foreArmR.rotation.y)*x,n.foreArmR.rotation.z+=(d.z-n.foreArmR.rotation.z)*x,n.chestGroup.scale.x+=(M.x-n.chestGroup.scale.x)*x,n.chestGroup.scale.y+=(M.y-n.chestGroup.scale.y)*x,n.chestGroup.scale.z+=(M.z-n.chestGroup.scale.z)*x})}escapeHtml(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}}class r0{constructor(t,e,n,i,r){this.camera=t,this.domElement=e,this.onMoveCallback=n,this.temple=i,this.app=r,this.position=new N(0,0,4.5),this.rotationY=Math.PI,this.moveSpeed=4.5,this.keys={forward:!1,backward:!1,left:!1,right:!1},this.camDistance=7,this.targetCamDistance=7,this.camHeight=2.6,this.targetCamHeight=2.6,this.camPitch=.26,this.targetCamPitch=.26,this.camYaw=0,this.targetCamYaw=0,this.isDragging=!1,this.dragStart={x:0,y:0},this.lastPointer={x:0,y:0},this.dragStartTime=0,this.dragMoved=0,this.targetMovePoint=null,this.targetRotYArrival=Math.PI,this.onArriveCallback=null,this.onCancelCallback=null,this.raycaster=new lm,this.mouseVec=new Yt,this.lastSentTime=0,this.sendInterval=1e3/30,this.initEventListeners()}runToTarget(t,e,n,i){this.targetMovePoint=new N(t,0,e),this.targetRotYArrival=typeof n=="number"?n:Math.PI,this.onArriveCallback=i||null}cancelAutoMovement(){this.targetMovePoint=null,this.onArriveCallback=null,this.onCancelCallback&&this.onCancelCallback()}resetToIconicView(){this.setCameraMainHall()}setCameraMainHall(){this.targetCamYaw=0,this.targetCamPitch=.26,this.targetCamDistance=7.2,this.targetCamHeight=2.8}setCameraBuddhaCloseUp(){this.targetCamYaw=0,this.targetCamPitch=.12,this.targetCamDistance=5.2,this.targetCamHeight=2.2}setCameraFollow(){this.targetCamYaw=0,this.targetCamPitch=.3,this.targetCamDistance=5,this.targetCamHeight=2.4}setCameraGate(){this.targetCamYaw=Math.PI,this.targetCamPitch=.22,this.targetCamDistance=7,this.targetCamHeight=2.5}initEventListeners(){window.addEventListener("keydown",n=>this.handleKeyDown(n)),window.addEventListener("keyup",n=>this.handleKeyUp(n)),this.domElement.addEventListener("pointerdown",n=>{n.target.closest(".interactive-ui")||n.target.closest(".modal-overlay")||n.target.closest(".modal-card")||n.target.closest("button")||n.target.closest("input")||n.target.closest("select")||(this.isDragging=!0,this.dragStart={x:n.clientX,y:n.clientY},this.lastPointer={x:n.clientX,y:n.clientY},this.dragStartTime=Date.now(),this.dragMoved=0)}),window.addEventListener("pointermove",n=>{if(!this.isDragging)return;const i=n.clientX-this.lastPointer.x,r=n.clientY-this.lastPointer.y;this.dragMoved+=Math.hypot(i,r),this.dragMoved>10&&(this.targetCamYaw-=i*.005,this.targetCamPitch=Math.max(.05,Math.min(Math.PI/2.3,this.targetCamPitch+r*.004))),this.lastPointer={x:n.clientX,y:n.clientY}}),window.addEventListener("pointerup",n=>{this.isDragging&&(Date.now()-(this.dragStartTime||0)<450&&this.dragMoved<25&&this.handleFloorClick(n),this.isDragging=!1)});let t=null,e=null;this.domElement.addEventListener("touchstart",n=>{n.touches.length===2&&(t=Math.hypot(n.touches[0].clientX-n.touches[1].clientX,n.touches[0].clientY-n.touches[1].clientY),e=this.targetCamDistance)},{passive:!0}),this.domElement.addEventListener("touchmove",n=>{if(n.touches.length===2&&t&&e){const i=Math.hypot(n.touches[0].clientX-n.touches[1].clientX,n.touches[0].clientY-n.touches[1].clientY);if(i>10){const r=t/i;this.targetCamDistance=Math.max(2.6,Math.min(10.5,e*r))}}},{passive:!0}),this.domElement.addEventListener("touchend",n=>{n.touches.length<2&&(t=null,e=null)},{passive:!0}),this.domElement.addEventListener("wheel",n=>{this.targetCamDistance=Math.max(2.6,Math.min(10.5,this.targetCamDistance+n.deltaY*.004))},{passive:!0})}initVirtualDpad(){const t=(n,i)=>{const r=document.getElementById(n);if(!r)return;const o=c=>{c.preventDefault(),this.keys[i]=!0,this.cancelAutoMovement()},a=c=>{c.preventDefault(),this.keys[i]=!1};r.addEventListener("pointerdown",o),r.addEventListener("pointerup",a),r.addEventListener("pointerleave",a),r.addEventListener("pointercancel",a)};t("dpad-up","forward"),t("dpad-down","backward"),t("dpad-left","left"),t("dpad-right","right");const e=document.getElementById("dpad-center");e&&e.addEventListener("click",n=>{n.preventDefault(),this.cancelAutoMovement(),this.keys.forward=!1,this.keys.backward=!1,this.keys.left=!1,this.keys.right=!1})}handleKeyDown(t){if(!["input","textarea","select"].includes(document.activeElement.tagName.toLowerCase()))switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!0,this.cancelAutoMovement();break;case"KeyS":case"ArrowDown":this.keys.backward=!0,this.cancelAutoMovement();break;case"KeyA":case"ArrowLeft":this.keys.left=!0,this.cancelAutoMovement();break;case"KeyD":case"ArrowRight":this.keys.right=!0,this.cancelAutoMovement();break}}handleKeyUp(t){switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break}}handleFloorClick(t){if(t.target.closest(".interactive-ui")||t.target.closest(".modal-overlay")||t.target.closest(".modal-card")||t.target.closest("button")||t.target.closest("input")||t.target.closest("select"))return;const e=this.domElement.getBoundingClientRect();this.mouseVec.x=(t.clientX-e.left)/e.width*2-1,this.mouseVec.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.mouseVec,this.camera);const n=new Rn(new N(0,1,0),0),i=new N;if(this.raycaster.ray.intersectPlane(n,i)){const o=this.temple.interactiveStations;if(o&&o.woodfish&&Math.hypot(i.x-o.woodfish.x,i.z-o.woodfish.z)<2&&this.app&&this.app.fsm){this.app.fsm.startWoodfish();return}if(o&&o.bell&&Math.hypot(i.x-o.bell.x,i.z-o.bell.z)<2.2&&this.app&&this.app.fsm){this.app.fsm.startBell();return}if(o&&o.fortuneTable&&Math.hypot(i.x-o.fortuneTable.x,i.z-o.fortuneTable.z)<2&&this.app&&this.app.fsm){this.app.fsm.startFortune();return}if(o&&o.incenseBurner&&Math.hypot(i.x-o.incenseBurner.x,i.z-o.incenseBurner.z)<2&&this.app&&this.app.fsm){this.app.fsm.startIncense();return}if(o&&o.pond&&Math.hypot(i.x-o.pond.x,i.z-25.5)<3.2&&this.app&&this.app.openFishReleaseModal){this.app.openFishReleaseModal();return}if(o&&o.chess&&Math.hypot(i.x-o.chess.x,i.z-25.5)<3&&this.app&&this.app.openChessModal){this.app.openChessModal();return}if(o&&o.tea&&Math.hypot(i.x-o.tea.x,i.z-o.tea.z)<2.2&&this.app&&this.app.drinkTea){this.app.drinkTea();return}if(Math.hypot(i.x,i.z- -3.8)<2.5&&this.app&&this.app.fsm){this.app.fsm.startBowing();return}if(this.temple.cushionPositions){for(const c of this.temple.cushionPositions)if(Math.hypot(i.x-c.x,i.z-c.z)<.85&&this.app&&this.app.fsm){this.app.fsm.startMeditation();return}}this.cancelAutoMovement();const a=this.clampPosition(i.x,i.z);this.targetMovePoint=new N(a.x,0,a.z),this.temple&&this.temple.spawnClickRipple&&this.temple.spawnClickRipple(a.x,a.z)}}clampPosition(t,e){let n=t,i=Math.max(-2.5,Math.min(34.8,e));return i<17.2?n=Math.max(-9.8,Math.min(9.8,n)):i>17.8?n=Math.max(-15,Math.min(15,n)):n=Math.max(-2.8,Math.min(2.8,n)),{x:n,z:i}}setPosition(t,e,n,i){this.position.set(t,e,n),typeof i=="number"&&(this.rotationY=i)}update(t,e,n){this.camYaw+=(this.targetCamYaw-this.camYaw)*.15,this.camPitch+=(this.targetCamPitch-this.camPitch)*.15,this.camDistance+=(this.targetCamDistance-this.camDistance)*.15,this.camHeight+=(this.targetCamHeight-this.camHeight)*.15;let i=0,r=0;const o=new N(0,0,-1).applyAxisAngle(new N(0,1,0),this.camYaw),a=new N(1,0,0).applyAxisAngle(new N(0,1,0),this.camYaw);let c=!1;if(this.keys.forward&&(i+=o.x,r+=o.z,c=!0),this.keys.backward&&(i-=o.x,r-=o.z,c=!0),this.keys.left&&(i-=a.x,r-=a.z,c=!0),this.keys.right&&(i+=a.x,r+=a.z,c=!0),this.targetMovePoint&&!c){const f=this.targetMovePoint.x-this.position.x,p=this.targetMovePoint.z-this.position.z,g=Math.hypot(f,p);if(g>.16)i=f/g,r=p/g,c=!0;else if(this.targetMovePoint=null,this.rotationY=this.targetRotYArrival||Math.PI,this.onArriveCallback){const v=this.onArriveCallback;this.onArriveCallback=null,v()}}if(c){const f=Math.hypot(i,r);if(f>0){i/=f,r/=f;const p=this.clampPosition(this.position.x+i*this.moveSpeed*t,this.position.z+r*this.moveSpeed*t);this.position.x=p.x,this.position.z=p.z,this.rotationY=Math.atan2(i,r)}}n&&e&&e.updateAvatarData(n,{x:this.position.x,y:this.position.y,z:this.position.z,rotY:this.rotationY});const l=new N(Math.sin(this.camYaw)*Math.cos(this.camPitch)*this.camDistance,Math.sin(this.camPitch)*this.camDistance+this.camHeight,Math.cos(this.camYaw)*Math.cos(this.camPitch)*this.camDistance);this.camera.position.copy(this.position).add(l);const h=new N(this.position.x*.5,this.position.y+1.85,this.position.z-3.2);this.camera.lookAt(h);const u=Date.now();u-this.lastSentTime>this.sendInterval&&c&&(this.lastSentTime=u,this.onMoveCallback&&this.onMoveCallback({x:parseFloat(this.position.x.toFixed(3)),y:parseFloat(this.position.y.toFixed(3)),z:parseFloat(this.position.z.toFixed(3)),rotY:parseFloat(this.rotationY.toFixed(3))}))}}class o0{constructor(){this.ctx=null,this.isPlaying=!1,this.currentTrack="woodfish-chant",this.volume=.55,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.lowPassFilter=null,this.musicTimers=[],this.activeNodes=[],this.chantAudio=new Audio,this.chantAudio.loop=!0,this.chantAudio.crossOrigin="anonymous",this.chantAudio.volume=this.volume,this.chantUrls=["https://media.dieuphapam.net/data/1486/Luc%20Tu%20Di%20Da.mp3","https://ph.tinhtong.vn/Audio/PhatHoc/NiemPhat/01_NamMoADiDaPhat_6Chu_Nhanh.mp3"],this.currentUrlIdx=0}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.lowPassFilter=this.ctx.createBiquadFilter(),this.lowPassFilter.type="lowpass",this.lowPassFilter.frequency.setValueAtTime(1200,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1,this.ctx.currentTime),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(this.volume,this.ctx.currentTime),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(.75,this.ctx.currentTime),this.musicGain.connect(this.lowPassFilter),this.sfxGain.connect(this.lowPassFilter),this.lowPassFilter.connect(this.masterGain),this.masterGain.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.musicGain&&this.ctx&&this.musicGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05),this.chantAudio&&(this.chantAudio.volume=this.volume)}playWoodfish(){this.init();const t=this.ctx,e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(720,e),n.frequency.exponentialRampToValueAtTime(280,e+.09),i.gain.setValueAtTime(.7,e),i.gain.exponentialRampToValueAtTime(.001,e+.15),n.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+.16);const r=t.createOscillator(),o=t.createGain();r.type="triangle",r.frequency.setValueAtTime(1100,e),r.frequency.exponentialRampToValueAtTime(350,e+.02),o.gain.setValueAtTime(.35,e),o.gain.exponentialRampToValueAtTime(.001,e+.03),r.connect(o),o.connect(this.sfxGain),r.start(e),r.stop(e+.03)}playBell(){this.init();const t=this.ctx,e=t.currentTime,n=216;[{ratio:1,gain:.6,decay:7},{ratio:1.414,gain:.35,decay:5.5},{ratio:2,gain:.25,decay:4.5}].forEach(({ratio:r,gain:o,decay:a})=>{const c=t.createOscillator(),l=t.createGain();c.frequency.setValueAtTime(n*r,e),c.type="sine",l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(o*.4,e+.03),l.gain.exponentialRampToValueAtTime(1e-4,e+a),c.connect(l),l.connect(this.sfxGain),c.start(e),c.stop(e+a)})}playChessClack(){this.init();const t=this.ctx,e=t.currentTime,n=t.createOscillator(),i=t.createGain();n.type="sine",n.frequency.setValueAtTime(480,e),n.frequency.exponentialRampToValueAtTime(140,e+.045),i.gain.setValueAtTime(.55,e),i.gain.exponentialRampToValueAtTime(.001,e+.05),n.connect(i),i.connect(this.sfxGain),n.start(e),n.stop(e+.055);const r=t.createOscillator(),o=t.createGain();r.type="triangle",r.frequency.setValueAtTime(220,e),o.gain.setValueAtTime(.25,e),o.gain.exponentialRampToValueAtTime(.001,e+.12),r.connect(o),o.connect(this.sfxGain),r.start(e),r.stop(e+.13)}playWaterSplash(){this.init();const t=this.ctx,e=t.currentTime,n=t.sampleRate*.25,i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let u=0;u<n;u++)r[u]=(Math.random()*2-1)*Math.exp(-u/(t.sampleRate*.08));const o=t.createBufferSource();o.buffer=i;const a=t.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(600,e),a.frequency.exponentialRampToValueAtTime(350,e+.22),a.Q.value=2.5;const c=t.createGain();c.gain.setValueAtTime(.4,e),c.gain.exponentialRampToValueAtTime(.001,e+.25),o.connect(a),a.connect(c),c.connect(this.sfxGain),o.start(e),o.stop(e+.26);const l=t.createOscillator(),h=t.createGain();l.type="sine",l.frequency.setValueAtTime(540,e+.04),l.frequency.exponentialRampToValueAtTime(860,e+.15),h.gain.setValueAtTime(.001,e),h.gain.linearRampToValueAtTime(.25,e+.05),h.gain.exponentialRampToValueAtTime(.001,e+.22),l.connect(h),h.connect(this.sfxGain),l.start(e+.04),l.stop(e+.24)}playTeaPour(){this.init();const t=this.ctx,e=t.currentTime;for(let n=0;n<4;n++){const i=e+n*.09,r=t.createOscillator(),o=t.createGain();r.type="sine",r.frequency.setValueAtTime(800+n*150+Math.random()*50,i),r.frequency.exponentialRampToValueAtTime(1100+n*120,i+.07),o.gain.setValueAtTime(.18,i),o.gain.exponentialRampToValueAtTime(.001,i+.075),r.connect(o),o.connect(this.sfxGain),r.start(i),r.stop(i+.08)}}playFanfare(){this.init();const t=this.ctx,e=t.currentTime;[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const o=e+r*.12,a=t.createOscillator(),c=t.createGain();a.type="sine",a.frequency.setValueAtTime(i,o),c.gain.setValueAtTime(.001,o),c.gain.linearRampToValueAtTime(.35,o+.03),c.gain.exponentialRampToValueAtTime(.001,o+1.2),a.connect(c),c.connect(this.sfxGain),a.start(o),a.stop(o+1.25)})}selectTrack(t){this.currentTrack=t,this.isPlaying&&(this.stopMusic(),this.startMusic())}toggleMusic(){return this.isPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}startMusic(){switch(this.init(),this.stopMusic(),this.isPlaying=!0,this.musicGain&&(this.musicGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.musicGain.gain.linearRampToValueAtTime(this.volume,this.ctx.currentTime+1.2)),this.currentTrack){case"woodfish-chant":this.startWoodfishChantTrack();break;case"singing-bowl":this.startSingingBowlTrack();break;case"temple-rain":this.startTempleRainTrack();break;case"nam-mo-a-di-da-phat":this.startNamMoADiDaPhatTrack();break;default:this.startWoodfishChantTrack();break}}startWoodfishChantTrack(){if(!this.isPlaying||!this.ctx)return;let t=0;const e=1080,n=()=>{if(!this.isPlaying||!this.ctx)return;const r=this.ctx.currentTime;t++;const o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=.85+Math.sin(t*1.5)*.08;o.type="sine",o.frequency.setValueAtTime(680,r),o.frequency.exponentialRampToValueAtTime(260,r+.11),a.gain.setValueAtTime(.68*c,r),a.gain.exponentialRampToValueAtTime(.001,r+.16),o.connect(a),a.connect(this.musicGain),o.start(r),o.stop(r+.17);const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="triangle",l.frequency.setValueAtTime(980,r),l.frequency.exponentialRampToValueAtTime(320,r+.025),h.gain.setValueAtTime(.32*c,r),h.gain.exponentialRampToValueAtTime(.001,r+.035),l.connect(h),h.connect(this.musicGain),l.start(r),l.stop(r+.04),t%8===0&&this.playGentleBellAccent()};n();const i=setInterval(()=>{n()},e);this.musicTimers.push(i)}playGentleBellAccent(){if(!this.ctx||!this.isPlaying)return;const t=this.ctx,e=t.currentTime,n=220;[1,1.414,2.76].forEach((i,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="sine",o.frequency.setValueAtTime(n*i,e);const c=.28/(r+1);a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(c,e+.04),a.gain.exponentialRampToValueAtTime(1e-4,e+6.5),o.connect(a),a.connect(this.musicGain),o.start(e),o.stop(e+6.6)})}stopMusic(){if(this.isPlaying=!1,this.chantAudio)try{this.chantAudio.pause(),this.chantAudio.currentTime=0}catch{}this.musicTimers.forEach(t=>clearInterval(t)),this.musicTimers=[],this.activeNodes.forEach(t=>{try{t.stop&&t.stop(),t.disconnect&&t.disconnect()}catch{}}),this.activeNodes=[]}startNamMoADiDaPhatTrack(){if(this.chantUrls[this.currentUrlIdx]){this.chantAudio.src=this.chantUrls[this.currentUrlIdx],this.chantAudio.volume=this.volume;const t=this.chantAudio.play();t!==void 0&&t.then(()=>{}).catch(e=>{this.playWarmChantSynth()})}else this.playWarmChantSynth();setTimeout(()=>{this.isPlaying&&this.chantAudio.paused&&this.playWarmChantSynth()},2500)}playWarmChantSynth(){const t=this.ctx;if(!this.isPlaying)return;const e=t.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(650,t.currentTime),e.connect(this.musicGain),[87.31,130.81].forEach(a=>{const c=t.createOscillator(),l=t.createGain();c.type="sine",c.frequency.setValueAtTime(a,t.currentTime),l.gain.setValueAtTime(.045,t.currentTime),c.connect(l),l.connect(e),c.start(),this.activeNodes.push(c,l)});const n=[{text:"Nam",freq:174.61,dur:1.6},{text:"Mô",freq:196,dur:1.6},{text:"A",freq:233.08,dur:1.8},{text:"Di",freq:261.63,dur:1.8},{text:"Đà",freq:233.08,dur:2},{text:"Phật",freq:174.61,dur:2.4}];let i=0;const r=()=>{if(!this.isPlaying)return;const a=n[i],c=t.currentTime,l=t.createOscillator(),h=t.createGain();if(l.type="sine",l.frequency.setValueAtTime(a.freq,c),h.gain.setValueAtTime(1e-4,c),h.gain.linearRampToValueAtTime(.085,c+.4),h.gain.setValueAtTime(.08,c+a.dur-.5),h.gain.exponentialRampToValueAtTime(1e-4,c+a.dur),l.connect(h),h.connect(e),l.start(c),l.stop(c+a.dur),a.text==="Phật"){const u=t.createOscillator(),f=t.createGain();u.type="sine",u.frequency.setValueAtTime(432,c),f.gain.setValueAtTime(.02,c),f.gain.exponentialRampToValueAtTime(1e-4,c+3.5),u.connect(f),f.connect(e),u.start(c),u.stop(c+3.5)}i=(i+1)%n.length};r();const o=setInterval(r,1950);this.musicTimers.push(o)}startSingingBowlTrack(){const t=this.ctx,e=216,n=()=>{if(!this.isPlaying)return;const r=t.currentTime;[{mult:1,gain:.12,decay:8.5},{mult:2,gain:.06,decay:6}].forEach(({mult:a,gain:c,decay:l})=>{const h=t.createOscillator(),u=t.createGain();h.type="sine",h.frequency.setValueAtTime(e*a,r),u.gain.setValueAtTime(1e-4,r),u.gain.linearRampToValueAtTime(c*.7,r+.1),u.gain.exponentialRampToValueAtTime(1e-4,r+l),h.connect(u),u.connect(this.musicGain),h.start(r),h.stop(r+l)})};n();const i=setInterval(n,7e3);this.musicTimers.push(i)}startTempleRainTrack(){const t=this.ctx,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0);let r=0;for(let l=0;l<e;l++){const h=Math.random()*2-1;i[l]=(r+.02*h)/1.02,r=i[l],i[l]*=.12}const o=t.createBufferSource();o.buffer=n,o.loop=!0;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(750,t.currentTime);const c=t.createGain();c.gain.setValueAtTime(.06,t.currentTime),o.connect(a),a.connect(c),c.connect(this.musicGain),o.start(),this.activeNodes.push(o,a,c)}}const ve=new o0,Nt={IDLE:"IDLE",NAVIGATING_TO_CUSHION:"NAVIGATING_TO_CUSHION",MEDITATING:"MEDITATING",BOWING_3_TIMES:"BOWING_3_TIMES",NAVIGATING_TO_WOODFISH:"NAVIGATING_TO_WOODFISH",STRIKING_WOODFISH:"STRIKING_WOODFISH",NAVIGATING_TO_BELL:"NAVIGATING_TO_BELL",STRIKING_BELL:"STRIKING_BELL",INCENSE_FETCH:"INCENSE_FETCH",INCENSE_LIGHT_CANDLE:"INCENSE_LIGHT_CANDLE",INCENSE_PLANT:"INCENSE_PLANT",INCENSE_BOWING:"INCENSE_BOWING",FORTUNE_WALK:"FORTUNE_WALK",FORTUNE_SHAKE:"FORTUNE_SHAKE",FORTUNE_DROP:"FORTUNE_DROP"};class a0{constructor(t){this.app=t,this.currentState=Nt.IDLE,this.stateTimer=0,this.bowCount=0,this.woodfishInterval=null,this.targetPoint=null,this.targetRotY=Math.PI,this.onArriveCallback=null}getState(){return this.currentState}isBusyWithRitual(){return[Nt.NAVIGATING_TO_CUSHION,Nt.MEDITATING,Nt.BOWING_3_TIMES,Nt.NAVIGATING_TO_WOODFISH,Nt.STRIKING_WOODFISH,Nt.NAVIGATING_TO_BELL,Nt.STRIKING_BELL,Nt.INCENSE_FETCH,Nt.INCENSE_LIGHT_CANDLE,Nt.INCENSE_PLANT,Nt.INCENSE_BOWING,Nt.FORTUNE_WALK,Nt.FORTUNE_SHAKE,Nt.FORTUNE_DROP].includes(this.currentState)}cancelRitual(){this.clearTimers(),this.targetPoint=null,this.onArriveCallback=null,this.currentState=Nt.IDLE,this.app.avatarManager&&this.app.myId&&this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),this.app.hideRitualStatus&&this.app.hideRitualStatus()}clearTimers(){this.woodfishInterval&&(clearInterval(this.woodfishInterval),this.woodfishInterval=null)}startMeditation(){if(this.currentState===Nt.MEDITATING){this.cancelRitual(),this.app.showToast("Đã xuất thiền, đứng dậy trang nghiêm 🙏");return}this.clearTimers();const t=this.app.controller.position.x,e=this.app.controller.position.z,n=this.app.temple.findNearestCushion(t,e);this.currentState=Nt.NAVIGATING_TO_CUSHION,this.stateTimer=0,this.app.showToast("Đang bước lại bồ đoàn tọa thiền..."),this.app.updateActionButtonsUI("sit"),this.app.showRitualStatus&&this.app.showRitualStatus("🧘","Đang bước lại bồ đoàn tọa thiền...",!0),this.navigateTo(n.x,n.z,Math.PI,()=>{this.currentState=Nt.MEDITATING,this.stateTimer=0,this.app.avatarManager.setAction(this.app.myId,"sit"),this.app.socket&&this.app.socket.emit("action",{action:"sit"}),this.app.showToast("Đã an tọa thiền định kiết già trên bồ đoàn 🙏"),this.app.showFloatingMerit("+1 Thiền Định",this.app.controller.position),this.app.showRitualStatus&&this.app.showRitualStatus("🧘","Đang an tọa thiền định kiết già (Bấm di chuyển hoặc Dừng để xuất thiền)",!0)})}startBowing(){this.clearTimers(),this.currentState=Nt.BOWING_3_TIMES,this.stateTimer=0,this.bowCount=1,this.app.controller.rotationY=Math.PI,this.app.avatarManager.setAction(this.app.myId,"bow3Times"),this.app.socket&&this.app.socket.emit("action",{action:"bow3Times"}),this.app.updateActionButtonsUI("bow"),this.app.showToast("Thành tâm chắp tay đảnh lễ Tam Bảo: Lạy 1/3 🙏"),this.app.playTempleChime(),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Thành tâm đảnh lễ Phật: Lạy 1/3 🙏",!1),setTimeout(()=>{this.currentState===Nt.BOWING_3_TIMES&&(this.bowCount=2,this.app.showToast("Thành tâm đảnh lễ Chánh Pháp: Lạy 2/3 🙏"),this.app.playTempleChime(),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Thành tâm đảnh lễ Pháp: Lạy 2/3 🙏",!1))},2400),setTimeout(()=>{this.currentState===Nt.BOWING_3_TIMES&&(this.bowCount=3,this.app.showToast("Thành tâm đảnh lễ Tăng Bảo: Lạy 3/3 🙏"),this.app.playTempleChime(),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Thành tâm đảnh lễ Tăng: Lạy 3/3 🙏",!1))},4800),setTimeout(()=>{this.currentState===Nt.BOWING_3_TIMES&&(this.currentState=Nt.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),this.app.showToast("Tam bái viên mãn, công đức vô lượng! 🙏"),this.app.showFloatingMerit("+3 Lễ Phật",this.app.controller.position),this.app.hideRitualStatus&&this.app.hideRitualStatus())},7200)}startWoodfish(){if(this.currentState===Nt.STRIKING_WOODFISH){this.cancelRitual(),this.app.showToast("Đã dừng gõ mõ 🙏");return}this.clearTimers();const t=this.app.temple.interactiveStations.woodfish;this.currentState=Nt.NAVIGATING_TO_WOODFISH,this.stateTimer=0,this.app.showToast("Đang bước lại kệ Mõ Gỗ Bát Nhã..."),this.app.updateActionButtonsUI("woodfish"),this.app.showRitualStatus&&this.app.showRitualStatus("🪵","Đang bước lại kệ Mõ Gỗ Bát Nhã...",!0),this.navigateTo(t.x,t.z,t.rotY,()=>{this.currentState=Nt.STRIKING_WOODFISH,this.stateTimer=0,this.app.avatarManager.setAction(this.app.myId,"strikeWoodfish"),this.app.socket&&this.app.socket.emit("action",{action:"strikeWoodfish"}),this.app.showToast("Đang gõ mõ tụng kinh liên tục... (Bấm di chuyển để dừng)"),this.app.showRitualStatus&&this.app.showRitualStatus("🪵","Đang gõ mõ tụng kinh liên tục (+1 Công đức) • Bấm di chuyển để dừng",!0),this.executeWoodfishStrike(),this.woodfishInterval=setInterval(()=>{if(this.currentState!==Nt.STRIKING_WOODFISH){this.clearTimers();return}this.executeWoodfishStrike()},1050)})}executeWoodfishStrike(){this.app.audio.playWoodfish(),this.app.socket&&this.app.socket.emit("strikeWoodfish"),this.app.temple.spawnClickRipple(5.6,-1.8),this.app.showFloatingMerit("+1 Công Đức",this.app.controller.position)}startBell(){this.clearTimers();const t=this.app.temple.interactiveStations.bell;this.currentState=Nt.NAVIGATING_TO_BELL,this.stateTimer=0,this.app.showToast("Đang bước lại Đại Hồng Chung..."),this.app.updateActionButtonsUI("bell"),this.app.showRitualStatus&&this.app.showRitualStatus("🔔","Đang bước lại Đại Hồng Chung...",!0),this.navigateTo(t.x,t.z,t.rotY,()=>{this.currentState=Nt.STRIKING_BELL,this.stateTimer=0,this.app.avatarManager.setAction(this.app.myId,"strikeBell"),this.app.socket&&this.app.socket.emit("action",{action:"strikeBell"}),this.app.showRitualStatus&&this.app.showRitualStatus("🔔","Đang cầm dây lắc thỉnh Đại Hồng Chung...",!1),this.app.temple&&this.app.temple.ringBell&&this.app.temple.ringBell(),setTimeout(()=>{this.currentState===Nt.STRIKING_BELL&&(this.app.audio.playBell(),this.app.temple.spawnClickRipple(-5.6,-1.8),this.app.socket&&this.app.socket.emit("strikeBell"),this.app.showToast("Đại Hồng Chung ngân vang rền mười phương! 🙏 (+5 Công đức)"),this.app.showFloatingMerit("+5 Thỉnh Chuông",this.app.controller.position),this.app.showRitualStatus&&this.app.showRitualStatus("🔔","Đại Hồng Chung ngân vang rền mười phương! 🙏 (+5 Công đức)",!1),setTimeout(()=>{this.currentState===Nt.STRIKING_BELL&&(this.currentState=Nt.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),this.app.hideRitualStatus&&this.app.hideRitualStatus())},1500))},900)})}startIncense(){this.clearTimers();const t=this.app.temple.interactiveStations.incenseTable,e=this.app.temple.interactiveStations.incenseCandle,n=this.app.temple.interactiveStations.incenseBurner,i=this.app.temple.interactiveStations.incenseBow;this.currentState=Nt.INCENSE_FETCH,this.stateTimer=0,this.app.showToast("Bước 1/4: Đang bước lại Bàn Thỉnh Hương lấy 3 nén hương trầm..."),this.app.updateActionButtonsUI("incense"),this.app.showRitualStatus&&this.app.showRitualStatus("🪔","Bước 1/4: Đang bước lại Bàn Thỉnh Hương...",!0),this.navigateTo(t.x,t.z,t.rotY,()=>{this.app.avatarManager.setAction(this.app.myId,"takeIncense"),this.app.socket&&this.app.socket.emit("action",{action:"takeIncense"}),this.app.showToast("Đã thỉnh 3 nén hương trầm trên bàn lễ 🙏"),this.app.showRitualStatus&&this.app.showRitualStatus("🪔","Bước 2/4: Đang bước lại cây nến đỏ để châm hương...",!1),setTimeout(()=>{this.currentState===Nt.INCENSE_FETCH&&(this.currentState=Nt.INCENSE_LIGHT_CANDLE,this.navigateTo(e.x,e.z,e.rotY,()=>{this.app.avatarManager.setAction(this.app.myId,"lightCandle"),this.app.socket&&this.app.socket.emit("action",{action:"lightCandle"}),this.app.showToast("Đang châm lửa bén 3 nén tâm hương từ ngọn nến thiêng... 🕯️"),this.app.showRitualStatus&&this.app.showRitualStatus("🕯️","Đang châm lửa 3 nén hương bên ngọn nến...",!1),setTimeout(()=>{this.currentState===Nt.INCENSE_LIGHT_CANDLE&&(this.currentState=Nt.INCENSE_PLANT,this.app.showToast("Hương đã bén lửa đỏ! Tiến đến Lư Hương dâng cắm..."),this.app.showRitualStatus&&this.app.showRitualStatus("🪔","Bước 3/4: Đang bước lại Lư Đồng dâng và cắm hương...",!1),this.navigateTo(n.x,n.z,n.rotY,()=>{this.app.avatarManager.setAction(this.app.myId,"plantIncense"),this.app.socket&&this.app.socket.emit("action",{action:"plantIncense"}),this.app.showToast("Dâng hương ngang trán và cắm vào Lư Đồng Tam Bảo 🙏"),setTimeout(()=>{this.currentState===Nt.INCENSE_PLANT&&(this.app.temple.spawnClickRipple(0,-3.68),this.app.socket&&this.app.socket.emit("lightIncense"),this.currentState=Nt.INCENSE_BOWING,this.app.showToast("Đã cắm hương! Cung kính lùi lại đảnh lễ 3 lạy trước Phật Tổ 🙏"),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Bước 4/4: Đảnh lễ Tam Bảo: Lạy 1/3 🙏",!1),this.navigateTo(i.x,i.z,i.rotY,()=>{this.app.avatarManager.setAction(this.app.myId,"bow3Times"),this.app.socket&&this.app.socket.emit("action",{action:"bow3Times"}),this.app.showToast("Thành tâm chắp tay đảnh lễ Phật Bảo: Lạy 1/3 🙏"),this.app.playTempleChime(),setTimeout(()=>{this.currentState===Nt.INCENSE_BOWING&&(this.app.showToast("Thành tâm chắp tay đảnh lễ Chánh Pháp: Lạy 2/3 🙏"),this.app.playTempleChime(),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Bước 4/4: Đảnh lễ Tam Bảo: Lạy 2/3 🙏",!1))},2400),setTimeout(()=>{this.currentState===Nt.INCENSE_BOWING&&(this.app.showToast("Thành tâm chắp tay đảnh lễ Tăng Bảo: Lạy 3/3 🙏"),this.app.playTempleChime(),this.app.showRitualStatus&&this.app.showRitualStatus("🙇","Bước 4/4: Đảnh lễ Tam Bảo: Lạy 3/3 🙏",!1))},4800),setTimeout(()=>{this.currentState===Nt.INCENSE_BOWING&&(this.currentState=Nt.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),this.app.showToast("Thắp hương và đảnh lễ Tam Bảo viên mãn! Công đức vô lượng 🙏 (+5 Công đức)"),this.app.showFloatingMerit("+5 Thắp Hương & Đảnh Lễ",this.app.controller.position),this.app.hideRitualStatus&&this.app.hideRitualStatus())},7200)}))},2200)}))},1800)}))},1200)})}startFortune(){this.clearTimers();const t=this.app.temple.interactiveStations.fortuneTable;this.currentState=Nt.FORTUNE_WALK,this.stateTimer=0,this.app.showToast("Bước đến bàn xin xăm Quán Thế Âm..."),this.app.updateActionButtonsUI("fortune"),this.app.showRitualStatus&&this.app.showRitualStatus("🎋","Bước đến bàn xin xăm Quán Thế Âm...",!0),this.navigateTo(t.x,t.z,t.rotY,()=>{this.currentState=Nt.FORTUNE_SHAKE,this.app.avatarManager.setAction(this.app.myId,"shakeFortune"),this.app.socket&&this.app.socket.emit("action",{action:"shakeFortune"}),this.app.showToast("Thành tâm nâng ống xăm... Lắc xóc đều tay..."),this.app.playFortuneRattleAudio(),this.app.showRitualStatus&&this.app.showRitualStatus("🎋","Thành tâm nâng ống xăm... Lắc xóc đều tay...",!1),setTimeout(()=>{this.currentState===Nt.FORTUNE_SHAKE&&(this.currentState=Nt.FORTUNE_DROP,this.app.showRitualStatus&&this.app.showRitualStatus("🎋","Que xăm linh ứng đang rơi xuống sàn...",!1),this.app.temple.spawnDroppingFortuneStick(t.x,t.z-.8,()=>{this.app.audio.playWoodfish(),this.app.socket&&this.app.socket.emit("drawFortune"),this.app.showFloatingMerit("+2 Gieo Quẻ",this.app.controller.position),this.app.showRitualStatus&&this.app.showRitualStatus("📜","Quẻ xăm đã rơi! Đang mở thông điệp...",!1),this.currentState=Nt.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),setTimeout(()=>{this.app.hideRitualStatus&&this.app.hideRitualStatus()},1200)}))},2600)})}navigateTo(t,e,n,i){this.targetPoint={x:t,z:e},this.targetRotY=n,this.onArriveCallback=i}update(t){if(this.stateTimer+=t,this.targetPoint){const e=this.app.controller.position,n=this.targetPoint.x-e.x,i=this.targetPoint.z-e.z,r=Math.hypot(n,i);if(r>.12){const a=Math.min(r,4.8*t);e.x+=n/r*a,e.z+=i/r*a,this.app.controller.rotationY=Math.atan2(n,i),this.app.sendLocalPosition()}else{e.x=this.targetPoint.x,e.z=this.targetPoint.z,this.app.controller.rotationY=this.targetRotY,this.app.sendLocalPosition();const o=this.onArriveCallback;this.targetPoint=null,this.onArriveCallback=null,o&&o()}}}}const Vn={red:{k:{char:"帥",sub:"Tướng",val:1e4},a:{char:"仕",sub:"Sĩ",val:200},e:{char:"相",sub:"Tượng",val:220},h:{char:"傌",sub:"Mã",val:400},r:{char:"俥",sub:"Xe",val:900},c:{char:"炮",sub:"Pháo",val:450},p:{char:"兵",sub:"Binh",val:100}},black:{k:{char:"將",sub:"Tướng",val:1e4},a:{char:"士",sub:"Sĩ",val:200},e:{char:"象",sub:"Tượng",val:220},h:{char:"馬",sub:"Mã",val:400},r:{char:"車",sub:"Xe",val:900},c:{char:"砲",sub:"Pháo",val:450},p:{char:"卒",sub:"Tốt",val:100}}};class c0{constructor(t){this.app=t,this.socket=t.socket,this.board=this.createInitialBoard(),this.currentTurn="red",this.mySide="red",this.gameMode="ai",this.aiDifficulty="easy",this.isGameOver=!1,this.selectedSquare=null,this.validMoves=[],this.lastMove=null,this.moveHistory=[],this.capturedPieces={red:[],black:[]},this.activeOpponentId=null,this.activeOpponentName="Thiền Sư AI",this.pendingInviteFrom=null,this.turnTimer=null,this.timeLeft=60,this.selectedCreature="carp",this.initDOM()}createInitialBoard(){const t=Array(10).fill(null).map(()=>Array(9).fill(null));return t[0][0]={type:"r",color:"black"},t[0][1]={type:"h",color:"black"},t[0][2]={type:"e",color:"black"},t[0][3]={type:"a",color:"black"},t[0][4]={type:"k",color:"black"},t[0][5]={type:"a",color:"black"},t[0][6]={type:"e",color:"black"},t[0][7]={type:"h",color:"black"},t[0][8]={type:"r",color:"black"},t[2][1]={type:"c",color:"black"},t[2][7]={type:"c",color:"black"},t[3][0]={type:"p",color:"black"},t[3][2]={type:"p",color:"black"},t[3][4]={type:"p",color:"black"},t[3][6]={type:"p",color:"black"},t[3][8]={type:"p",color:"black"},t[6][0]={type:"p",color:"red"},t[6][2]={type:"p",color:"red"},t[6][4]={type:"p",color:"red"},t[6][6]={type:"p",color:"red"},t[6][8]={type:"p",color:"red"},t[7][1]={type:"c",color:"red"},t[7][7]={type:"c",color:"red"},t[9][0]={type:"r",color:"red"},t[9][1]={type:"h",color:"red"},t[9][2]={type:"e",color:"red"},t[9][3]={type:"a",color:"red"},t[9][4]={type:"k",color:"red"},t[9][5]={type:"a",color:"red"},t[9][6]={type:"e",color:"red"},t[9][7]={type:"h",color:"red"},t[9][8]={type:"r",color:"red"},t}initDOM(){this.buildXiangqiBoard(),this.setupChessEvents(),this.setupFishEvents(),this.setupSocketEvents(),this.renderBoard()}buildXiangqiBoard(){const t=document.getElementById("chess-board-grid");if(t){t.innerHTML="";for(let e=0;e<10;e++)for(let n=0;n<9;n++){const i=document.createElement("div");i.className="xiangqi-cell",i.dataset.row=e,i.dataset.col=n,(e===4||e===5)&&(n===0||n===8?i.classList.add("river-edge"):i.classList.add("river-cell")),e===0&&n===3&&i.classList.add("diag-tl-br"),e===0&&n===5&&i.classList.add("diag-tr-bl"),e===1&&n===4&&i.classList.add("palace-center"),e===2&&n===3&&i.classList.add("diag-tr-bl"),e===2&&n===5&&i.classList.add("diag-tl-br"),e===7&&n===3&&i.classList.add("diag-tl-br"),e===7&&n===5&&i.classList.add("diag-tr-bl"),e===8&&n===4&&i.classList.add("palace-center"),e===9&&n===3&&i.classList.add("diag-tr-bl"),e===9&&n===5&&i.classList.add("diag-tl-br"),i.addEventListener("click",()=>this.handleCellClick(e,n)),t.appendChild(i)}}}setupChessEvents(){var a,c,l,h,u,f,p,g;const t=document.getElementById("tab-chess-ai"),e=document.getElementById("tab-chess-pvp"),n=document.getElementById("section-chess-ai"),i=document.getElementById("section-chess-pvp");t==null||t.addEventListener("click",()=>{t.classList.add("active"),e==null||e.classList.remove("active"),n&&(n.style.display="block"),i&&(i.style.display="none"),this.gameMode="ai",this.activeOpponentName="Thiền Sư AI",this.resetChessGame()}),e==null||e.addEventListener("click",()=>{e.classList.add("active"),t==null||t.classList.remove("active"),n&&(n.style.display="none"),i&&(i.style.display="block"),this.gameMode="pvp",this.refreshOnlinePlayersList()});const r=document.getElementById("side-btn-red"),o=document.getElementById("side-btn-black");r==null||r.addEventListener("click",()=>{r.classList.add("active"),o==null||o.classList.remove("active"),this.mySide="red",this.resetChessGame()}),o==null||o.addEventListener("click",()=>{o.classList.add("active"),r==null||r.classList.remove("active"),this.mySide="black",this.resetChessGame()}),document.querySelectorAll(".diff-btn").forEach(v=>{v.addEventListener("click",()=>{document.querySelectorAll(".diff-btn").forEach(m=>m.classList.remove("active")),v.classList.add("active"),this.aiDifficulty=v.dataset.diff||"easy",this.app.showToast(`Đã chọn cấp độ Thiền Sư: ${v.textContent.trim()}`)})}),(a=document.getElementById("btn-chess-reset"))==null||a.addEventListener("click",()=>this.resetChessGame()),(c=document.getElementById("btn-chess-undo"))==null||c.addEventListener("click",()=>this.undoMove()),(l=document.getElementById("btn-chess-hint"))==null||l.addEventListener("click",()=>this.showHint()),(h=document.getElementById("btn-close-chess"))==null||h.addEventListener("click",()=>this.closeChessModal()),(u=document.getElementById("btn-chess-resign"))==null||u.addEventListener("click",()=>this.resignGame()),(f=document.getElementById("btn-chess-draw"))==null||f.addEventListener("click",()=>this.requestDraw()),(p=document.getElementById("btn-accept-chess"))==null||p.addEventListener("click",()=>{this.pendingInviteFrom&&this.socket&&(this.socket.emit("chessRespondInvite",{inviterId:this.pendingInviteFrom.id,accept:!0}),this.startPvPMatch(this.pendingInviteFrom.id,this.pendingInviteFrom.name,"black"),this.pendingInviteFrom=null,document.getElementById("chess-invite-modal").style.display="none")}),(g=document.getElementById("btn-decline-chess"))==null||g.addEventListener("click",()=>{this.pendingInviteFrom&&this.socket&&(this.socket.emit("chessRespondInvite",{inviterId:this.pendingInviteFrom.id,accept:!1}),this.pendingInviteFrom=null,document.getElementById("chess-invite-modal").style.display="none")})}openChessModal(){const t=document.getElementById("chess-modal");if(t){if(t.style.display="flex",this.app.controller&&this.app.temple){const e=this.app.temple.interactiveStations.chess;this.app.controller.runToTarget(e.x,e.z,e.rotY)}this.gameMode==="ai"&&this.moveHistory.length===0?this.resetChessGame():this.gameMode==="pvp"&&this.refreshOnlinePlayersList()}}closeChessModal(){const t=document.getElementById("chess-modal");t&&(t.style.display="none"),this.stopTurnTimer()}resetChessGame(){this.board=this.createInitialBoard(),this.currentTurn="red",this.isGameOver=!1,this.selectedSquare=null,this.validMoves=[],this.lastMove=null,this.moveHistory=[],this.capturedPieces={red:[],black:[]};const t=document.getElementById("chess-hint-box");t&&(t.style.display="none");const e=document.getElementById("chess-alert-banner");e&&(e.style.display="none"),this.renderBoard(),this.renderCapturedTray(),this.updateStatusBar(),this.startTurnTimer(),this.gameMode==="ai"&&this.mySide==="black"&&setTimeout(()=>this.makeAiMove(),600)}startTurnTimer(){this.stopTurnTimer(),this.timeLeft=60;const t=document.getElementById("chess-timer");t&&(t.textContent=`${this.timeLeft}s`),this.turnTimer=setInterval(()=>{this.timeLeft--,t&&(t.textContent=`${this.timeLeft}s`),this.timeLeft<=0&&(this.stopTurnTimer(),this.gameMode==="ai"&&this.currentTurn===this.mySide&&(this.app.showToast("Hết thời gian lượt đi! Thiền Sư đi giúp bạn 1 nước chánh niệm."),this.makeAiMove()))},1e3)}stopTurnTimer(){this.turnTimer&&(clearInterval(this.turnTimer),this.turnTimer=null)}inBounds(t,e){return t>=0&&t<10&&e>=0&&e<9}inPalace(t,e,n){return n==="red"?t>=7&&t<=9&&e>=3&&e<=5:t>=0&&t<=2&&e>=3&&e<=5}getLegalMoves(t,e,n=this.board){const i=n[t][e];if(!i)return[];const r=this.getPseudoMoves(t,e,n),o=[];for(const a of r){const c=n.map(l=>l.slice());c[a.r][a.c]=c[t][e],c[t][e]=null,!this.isKingInCheck(i.color,c)&&!this.areKingsFacing(c)&&o.push(a)}return o}getPseudoMoves(t,e,n){const i=n[t][e];if(!i)return[];const r=[],o=i.color,a=o==="red"?"black":"red";switch(i.type){case"k":{[[-1,0],[1,0],[0,-1],[0,1]].forEach(([l,h])=>{const u=t+l,f=e+h;if(this.inPalace(u,f,o)){const p=n[u][f];(!p||p.color===a)&&r.push({r:u,c:f})}});break}case"a":{[[-1,-1],[-1,1],[1,-1],[1,1]].forEach(([l,h])=>{const u=t+l,f=e+h;if(this.inPalace(u,f,o)){const p=n[u][f];(!p||p.color===a)&&r.push({r:u,c:f})}});break}case"e":{[{dr:-2,dc:-2,eyeR:-1,eyeC:-1},{dr:-2,dc:2,eyeR:-1,eyeC:1},{dr:2,dc:-2,eyeR:1,eyeC:-1},{dr:2,dc:2,eyeR:1,eyeC:1}].forEach(({dr:l,dc:h,eyeR:u,eyeC:f})=>{const p=t+l,g=e+h;if(!(o==="red"?p<5:p>4)&&this.inBounds(p,g)&&n[t+u][e+f]===null){const m=n[p][g];(!m||m.color===a)&&r.push({r:p,c:g})}});break}case"h":{[{dr:-2,dc:-1,legR:-1,legC:0},{dr:-2,dc:1,legR:-1,legC:0},{dr:2,dc:-1,legR:1,legC:0},{dr:2,dc:1,legR:1,legC:0},{dr:-1,dc:-2,legR:0,legC:-1},{dr:1,dc:-2,legR:0,legC:-1},{dr:-1,dc:2,legR:0,legC:1},{dr:1,dc:2,legR:0,legC:1}].forEach(({dr:l,dc:h,legR:u,legC:f})=>{const p=t+l,g=e+h;if(this.inBounds(p,g)&&n[t+u][e+f]===null){const v=n[p][g];(!v||v.color===a)&&r.push({r:p,c:g})}});break}case"r":{[[-1,0],[1,0],[0,-1],[0,1]].forEach(([l,h])=>{let u=1;for(;;){const f=t+l*u,p=e+h*u;if(!this.inBounds(f,p))break;const g=n[f][p];if(!g)r.push({r:f,c:p});else{g.color===a&&r.push({r:f,c:p,capture:!0});break}u++}});break}case"c":{[[-1,0],[1,0],[0,-1],[0,1]].forEach(([l,h])=>{let u=1,f=!1;for(;;){const p=t+l*u,g=e+h*u;if(!this.inBounds(p,g))break;const v=n[p][g];if(!f)v?f=!0:r.push({r:p,c:g});else if(v){v.color===a&&r.push({r:p,c:g,capture:!0});break}u++}});break}case"p":{const c=o==="red"?-1:1,l=o==="red"?t<=4:t>=5,h=t+c;if(this.inBounds(h,e)){const u=n[h][e];(!u||u.color===a)&&r.push({r:h,c:e})}l&&[-1,1].forEach(u=>{const f=e+u;if(this.inBounds(t,f)){const p=n[t][f];(!p||p.color===a)&&r.push({r:t,c:f})}});break}}return r}areKingsFacing(t){let e=null,n=null;for(let a=0;a<10;a++)for(let c=0;c<9;c++){const l=t[a][c];l&&l.type==="k"&&(l.color==="red"?e={r:a,c}:n={r:a,c})}if(!e||!n||e.c!==n.c)return!1;const i=e.c,r=Math.min(e.r,n.r)+1,o=Math.max(e.r,n.r)-1;for(let a=r;a<=o;a++)if(t[a][i]!==null)return!1;return!0}isKingInCheck(t,e=this.board){let n=null;for(let r=0;r<10;r++){for(let o=0;o<9;o++){const a=e[r][o];if(a&&a.type==="k"&&a.color===t){n={r,c:o};break}}if(n)break}if(!n)return!0;const i=t==="red"?"black":"red";for(let r=0;r<10;r++)for(let o=0;o<9;o++){const a=e[r][o];if(a&&a.color===i&&this.getPseudoMoves(r,o,e).some(l=>l.r===n.r&&l.c===n.c))return!0}return!1}handleCellClick(t,e){if(this.isGameOver||this.gameMode==="ai"&&this.currentTurn!==this.mySide)return;const n=this.board[t][e];if(this.selectedSquare){const i=this.selectedSquare.r,r=this.selectedSquare.c;if(i===t&&r===e){this.selectedSquare=null,this.validMoves=[],this.renderBoard();return}if(this.validMoves.find(a=>a.r===t&&a.c===e)){this.executeMove(i,r,t,e);return}if(n&&n.color===this.currentTurn){this.selectedSquare={r:t,c:e},this.validMoves=this.getLegalMoves(t,e),this.renderBoard();return}this.selectedSquare=null,this.validMoves=[],this.renderBoard();return}n&&n.color===this.currentTurn&&(this.selectedSquare={r:t,c:e},this.validMoves=this.getLegalMoves(t,e),this.renderBoard())}executeMove(t,e,n,i,r=!1){const o=this.board[t][e],a=this.board[n][i];this.moveHistory.push({from:{r:t,c:e},to:{r:n,c:i},piece:{...o},captured:a?{...a}:null}),a?(this.capturedPieces[a.color].push(a),this.renderCapturedTray(),this.app.audio&&this.app.audio.playWoodfish&&this.app.audio.playWoodfish()):this.app.audio&&this.app.audio.playWoodfish&&this.app.audio.playWoodfish(),this.board[n][i]=o,this.board[t][e]=null,this.lastMove={from:{r:t,c:e},to:{r:n,c:i}},this.selectedSquare=null,this.validMoves=[];const c=this.currentTurn==="red"?"black":"red";this.currentTurn=c,this.gameMode==="pvp"&&!r&&this.socket&&this.activeOpponentId&&this.socket.emit("chessMove",{targetPlayerId:this.activeOpponentId,fromR:t,fromC:e,toR:n,toC:i,pieceType:o.type,color:o.color});const l=this.isKingInCheck(c,this.board),h=this.hasAnyLegalMoves(c),u=document.getElementById("chess-alert-banner"),f=document.getElementById("chess-alert-text");if(l&&h){if(u&&f){const p=c==="red"?"ĐỎ":"ĐEN";f.textContent=`⚠️ CHIẾU TƯỚNG! Phe ${p} hãy định tâm ứng biến.`,u.style.display="block"}this.app.audio&&this.app.audio.playBell&&this.app.audio.playBell()}else u&&(u.style.display="none");if(!h){this.endGame(o.color,l?`CHIẾU BÍ TUYỆT THẾ! Phe ${o.color==="red"?"ĐỎ":"ĐEN"} giành chiến thắng!`:`HẾT NƯỚC ĐI! Phe ${o.color==="red"?"ĐỎ":"ĐEN"} giành chiến thắng!`),this.renderBoard();return}this.renderBoard(),this.updateStatusBar(),this.startTurnTimer(),this.gameMode==="ai"&&this.currentTurn!==this.mySide&&!this.isGameOver&&setTimeout(()=>this.makeAiMove(),450)}hasAnyLegalMoves(t){for(let e=0;e<10;e++)for(let n=0;n<9;n++){const i=this.board[e][n];if(i&&i.color===t&&this.getLegalMoves(e,n,this.board).length>0)return!0}return!1}makeAiMove(){if(this.isGameOver)return;const t=this.currentTurn,e=[];for(let i=0;i<10;i++)for(let r=0;r<9;r++){const o=this.board[i][r];o&&o.color===t&&this.getLegalMoves(i,r,this.board).forEach(c=>{e.push({from:{r:i,c:r},to:{r:c.r,c:c.c},capture:c.capture})})}if(e.length===0)return;let n=null;if(this.aiDifficulty==="easy"){const i=e.filter(r=>r.capture);i.length>0&&Math.random()<.6?(i.sort((r,o)=>{const a=this.board[r.to.r][r.to.c],c=this.board[o.to.r][o.to.c],l=a?Vn[a.color][a.type].val:0;return(c?Vn[c.color][c.type].val:0)-l}),n=i[0]):n=e[Math.floor(Math.random()*e.length)]}else this.aiDifficulty==="med"?n=this.getBestMoveMinimax(2,t):n=this.getBestMoveMinimax(3,t);n&&this.executeMove(n.from.r,n.from.c,n.to.r,n.to.c)}getBestMoveMinimax(t,e){let n=null,i=-1/0;const r=e==="red"?"black":"red",o=this.getAllMovesForColor(e,this.board);o.sort(()=>Math.random()-.5);for(const a of o){const c=this.cloneBoard(this.board);c[a.to.r][a.to.c]=c[a.from.r][a.from.c],c[a.from.r][a.from.c]=null;const l=this.minimax(c,t-1,-1/0,1/0,!1,e,r);l>i&&(i=l,n=a)}return n||o[0]}minimax(t,e,n,i,r,o,a){if(e===0)return this.evaluateBoard(t,o);const c=r?o:a,l=this.getAllMovesForColor(c,t);if(l.length===0)return r?-99999:99999;if(r){let h=-1/0;for(const u of l){const f=this.cloneBoard(t);f[u.to.r][u.to.c]=f[u.from.r][u.from.c],f[u.from.r][u.from.c]=null;const p=this.minimax(f,e-1,n,i,!1,o,a);if(h=Math.max(h,p),n=Math.max(n,p),i<=n)break}return h}else{let h=1/0;for(const u of l){const f=this.cloneBoard(t);f[u.to.r][u.to.c]=f[u.from.r][u.from.c],f[u.from.r][u.from.c]=null;const p=this.minimax(f,e-1,n,i,!0,o,a);if(h=Math.min(h,p),i=Math.min(i,p),i<=n)break}return h}}getAllMovesForColor(t,e){const n=[];for(let i=0;i<10;i++)for(let r=0;r<9;r++){const o=e[i][r];o&&o.color===t&&this.getLegalMoves(i,r,e).forEach(c=>{n.push({from:{r:i,c:r},to:{r:c.r,c:c.c}})})}return n}cloneBoard(t){return t.map(e=>e.map(n=>n?{...n}:null))}evaluateBoard(t,e){let n=0;for(let i=0;i<10;i++)for(let r=0;r<9;r++){const o=t[i][r];if(!o)continue;let a=Vn[o.color][o.type].val;o.type==="p"?((o.color==="red"?i<=4:i>=5)&&(a+=120),o.color==="red"&&i<=2&&r>=3&&r<=5&&(a+=150),o.color==="black"&&i>=7&&r>=3&&r<=5&&(a+=150)):o.type==="h"?r>=2&&r<=6&&i>=2&&i<=7&&(a+=30):o.type==="r"&&(a+=40),o.color===e?n+=a:n-=a}return n}showHint(){if(this.isGameOver||this.getAllMovesForColor(this.currentTurn,this.board).length===0)return;const e=this.getBestMoveMinimax(2,this.currentTurn);if(!e)return;this.selectedSquare={r:e.from.r,c:e.from.c},this.validMoves=[{r:e.to.r,c:e.to.c}],this.renderBoard();const n=this.board[e.from.r][e.from.c],i=n?Vn[n.color][n.type].sub:"Quân cờ",r=[`Thiền Sư: "${i} điều phối uyển chuyển như mây bay nước chảy, thủ tĩnh để chế động."`,`Thiền Sư: "Nước cờ ${i} này khai mở trung lộ, tâm an nhiên thì vạn sự tự hanh thông."`,`Thiền Sư: "Lùi một bước biển rộng trời cao. Điều ${i} về vị trí này giữ vững giềng mối."`,`Thiền Sư: "Dĩ bất biến ứng vạn biến. Nước cờ ${i} giúp tâm không tán loạn trước thế vây."`,'Thiền Sư: "Binh quý ở chỗ hòa hợp, không nóng vội công sát, lấy đức phục người."'],o=document.getElementById("chess-hint-box"),a=document.getElementById("chess-hint-text");o&&a&&(a.textContent=r[Math.floor(Math.random()*r.length)],o.style.display="flex")}undoMove(){if(this.moveHistory.length===0||this.isGameOver){this.app.showToast("Chưa có nước cờ nào để hối kỳ!");return}const t=this.gameMode==="ai"&&this.moveHistory.length>=2?2:1;for(let e=0;e<t;e++){const n=this.moveHistory.pop();if(!n)break;if(this.board[n.from.r][n.from.c]=n.piece,this.board[n.to.r][n.to.c]=n.captured,n.captured){const i=this.capturedPieces[n.captured.color],r=i.findIndex(o=>o.type===n.captured.type);r!==-1&&i.splice(r,1)}}this.currentTurn=this.mySide,this.selectedSquare=null,this.validMoves=[],this.lastMove=this.moveHistory.length>0?this.moveHistory[this.moveHistory.length-1]:null,this.renderBoard(),this.renderCapturedTray(),this.updateStatusBar(),this.app.showToast("Đã hối kỳ một nước đi! Hãy tĩnh tâm cân nhắc thế cờ mới 🙏")}renderBoard(){const t=document.querySelectorAll(".xiangqi-cell"),e=this.isKingInCheck("red",this.board),n=this.isKingInCheck("black",this.board);t.forEach(i=>{const r=parseInt(i.dataset.row,10),o=parseInt(i.dataset.col,10);i.innerHTML="",i.classList.remove("last-move-src","last-move-dst"),this.lastMove&&(this.lastMove.from.r===r&&this.lastMove.from.c===o&&i.classList.add("last-move-src"),this.lastMove.to.r===r&&this.lastMove.to.c===o&&i.classList.add("last-move-dst"));const a=this.board[r][o];if(a){const c=document.createElement("div");c.className=`xiangqi-piece ${a.color}`;const l=Vn[a.color][a.type];c.innerHTML=`
          <span class="piece-char">${l.char}</span>
          <span class="piece-sub">${l.sub}</span>
        `,this.selectedSquare&&this.selectedSquare.r===r&&this.selectedSquare.c===o&&c.classList.add("selected"),a.type==="k"&&(a.color==="red"&&e||a.color==="black"&&n)&&c.classList.add("in-check"),this.validMoves.some(u=>u.r===r&&u.c===o)&&c.classList.add("can-capture"),i.appendChild(c)}else if(this.validMoves.some(l=>l.r===r&&l.c===o)){const l=document.createElement("div");l.className="xiangqi-dest-indicator",i.appendChild(l)}})}renderCapturedTray(){const t=document.getElementById("captured-pieces-tray");t&&(t.innerHTML="",["red","black"].forEach(e=>{this.capturedPieces[e].forEach(n=>{const i=document.createElement("span");i.className=`captured-chip ${n.color}`,i.textContent=Vn[n.color][n.type].char,i.title=`${n.color==="red"?"Đỏ":"Đen"} ${Vn[n.color][n.type].sub}`,t.appendChild(i)})}))}updateStatusBar(){const t=document.getElementById("chess-player-red"),e=document.getElementById("chess-player-black"),n=document.getElementById("name-red"),i=document.getElementById("name-black");this.gameMode==="ai"?(n&&(n.textContent=this.mySide==="red"?"Bạn (Đỏ - 帥)":"Thiền Sư AI (Đỏ - 帥)"),i&&(i.textContent=this.mySide==="black"?"Bạn (Đen - 將)":"Thiền Sư AI (Đen - 將)")):(n&&(n.textContent=this.mySide==="red"?"Bạn (Đỏ - 帥)":`${this.activeOpponentName} (Đỏ)`),i&&(i.textContent=this.mySide==="black"?"Bạn (Đen - 將)":`${this.activeOpponentName} (Đen)`)),this.currentTurn==="red"?(t==null||t.classList.add("active"),e==null||e.classList.remove("active")):(e==null||e.classList.add("active"),t==null||t.classList.remove("active"))}endGame(t,e){var r,o,a;this.isGameOver=!0,this.stopTurnTimer();const n=t===this.mySide,i=t===0?"HÒA CỜ CHÁNH NIỆM":n?"🎉 THẮNG TRẬN KỲ ĐÀO!":"🙏 HOÀN TẤT VÁN CỜ";this.app.audio&&this.app.audio.playBell&&this.app.audio.playBell(),n&&(this.app.showFloatingMerit("+50 Kỳ Đạo ♟️",(r=this.app.controller)==null?void 0:r.position),this.socket&&this.socket.emit("chessGameOver",{winnerId:this.socket.id,winnerName:((a=(o=this.app.avatarManager)==null?void 0:o.avatars.get(this.app.myId))==null?void 0:a.name)||"Kỳ thủ",reason:e})),setTimeout(()=>{alert(`${i}

${e}

“Thắng không kiêu, bại không quạu. Cờ như dòng đời, buông xả là an vui!”`)},200)}refreshOnlinePlayersList(){var n;const t=document.getElementById("chess-players-list");if(!t)return;t.innerHTML="";const e=(n=this.app.avatarManager)==null?void 0:n.avatars;if(!e||e.size<=1){t.innerHTML='<div class="empty-list-notice">Chưa có đồng tu nào khác xung quanh. Bạn có thể mở tab "Học Cùng Thiền Sư AI" để đàm đạo cờ tướng!</div>';return}e.forEach((i,r)=>{var a;if(r===this.app.myId)return;const o=document.createElement("div");o.className="player-invite-item",o.innerHTML=`
        <div class="player-invite-info">
          <span class="player-invite-name">${this.escapeHtml(i.name||"Đồng tu")}</span>
          <span class="player-invite-merit">✨ ${i.merit||0} Công đức</span>
        </div>
        <button class="gold-tool-btn invite-btn" data-id="${r}">Kính Mời ♟️</button>
      `,(a=o.querySelector(".invite-btn"))==null||a.addEventListener("click",()=>{this.invitePlayerToChess(r,i.name)}),t.appendChild(o)})}invitePlayerToChess(t,e){this.socket&&(this.socket.emit("chessInvite",{targetPlayerId:t}),this.app.showToast(`Đã gửi lời mời giao lưu cờ tướng tới [${e}]... Đang chờ hồi đáp!`))}startPvPMatch(t,e,n){this.activeOpponentId=t,this.activeOpponentName=e,this.mySide=n,this.gameMode="pvp";const i=document.getElementById("pvp-match-controls");i&&(i.style.display="flex"),this.resetChessGame(),this.app.showToast(`Trận cờ tướng với đồng tu [${e}] đã bắt đầu! Bạn cầm quân ${n==="red"?"ĐỎ (帥 - Đi trước)":"ĐEN (將 - Đi sau)"}.`)}resignGame(){if(!(!this.activeOpponentId||this.isGameOver)&&confirm("Bạn có chắc chắn muốn xin nhận thua ván cờ này để học hỏi không?")){const t=this.mySide==="red"?"black":"red";this.socket&&this.socket.emit("chessResign",{targetPlayerId:this.activeOpponentId}),this.endGame(t,"Bạn đã xin nhận thua ván cờ để học hỏi kỳ đạo.")}}requestDraw(){!this.activeOpponentId||this.isGameOver||this.socket&&(this.socket.emit("chessDrawRequest",{targetPlayerId:this.activeOpponentId}),this.app.showToast("Đã gửi lời cầu hòa tới đồng tu đối thủ..."))}setupFishEvents(){var t,e;document.querySelectorAll(".creature-card").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".creature-card").forEach(i=>i.classList.remove("selected")),n.classList.add("selected"),this.selectedCreature=n.dataset.type||"carp"})}),document.querySelectorAll(".prayer-chip").forEach(n=>{n.addEventListener("click",()=>{const i=document.getElementById("input-prayer");i&&(i.value=n.textContent.trim())})}),(t=document.getElementById("btn-close-fish"))==null||t.addEventListener("click",()=>this.closeFishModal()),(e=document.getElementById("btn-do-release"))==null||e.addEventListener("click",()=>this.executeRelease())}openFishReleaseModal(){const t=document.getElementById("fish-modal");if(t&&(t.style.display="flex",this.app.controller&&this.app.temple)){const e=this.app.temple.interactiveStations.pond;this.app.controller.runToTarget(e.x,e.z,e.rotY)}}closeFishModal(){const t=document.getElementById("fish-modal");t&&(t.style.display="none")}executeRelease(){var i;const t=document.getElementById("input-prayer"),e=((i=t==null?void 0:t.value)==null?void 0:i.trim())||"Cầu muôn loài an lạc, deadline không quạu!",n=this.selectedCreature||"carp";this.app.audio&&this.app.audio.playWaterSplash&&this.app.audio.playWaterSplash(),this.app.temple&&(n==="lantern"?this.app.temple.spawnFloatingLantern(e):this.app.temple.spawnReleasedFish(n,e)),this.socket&&this.socket.emit("releaseCreature",{creatureType:n,prayerText:e}),this.closeFishModal()}drinkTea(){if(this.app.controller&&this.app.temple){const t=this.app.temple.interactiveStations.tea;this.app.controller.runToTarget(t.x,t.z,t.rotY,()=>{this.app.audio&&this.app.audio.playTeaPour&&this.app.audio.playTeaPour(),this.socket&&this.socket.emit("drinkTea"),this.app.showToast("Đang thưởng thức chén trà sen ấm áp... Tâm an vạn sự an! 🍵")})}}setupSocketEvents(){this.socket&&(this.socket.on("chessInviteReceived",({inviterId:t,inviterName:e})=>{this.pendingInviteFrom={id:t,name:e};const n=document.getElementById("chess-invite-modal"),i=document.getElementById("chess-invite-text");i&&(i.textContent=`Đồng tu [${e}] kính mời bạn giao lưu một ván Cờ Tướng chánh niệm! Bạn có sẵn lòng không?`),n&&(n.style.display="flex"),this.app.audio&&this.app.audio.playBell&&this.app.audio.playBell()}),this.socket.on("chessInviteResponse",({opponentId:t,opponentName:e,accept:n})=>{n?this.startPvPMatch(t,e,"red"):this.app.showToast(`Đồng tu [${e}] hẹn bạn dịp khác giao lưu kỳ đạo.`)}),this.socket.on("chessMoveMade",t=>{this.gameMode==="pvp"&&!this.isGameOver&&this.executeMove(t.fromR,t.fromC,t.toR,t.toC,!0)}),this.socket.on("chessOpponentResigned",()=>{this.gameMode==="pvp"&&!this.isGameOver&&this.endGame(this.mySide,`Đồng tu [${this.activeOpponentName}] đã xin nhận thua!`)}),this.socket.on("chessDrawRequested",({fromId:t,fromName:e})=>{confirm(`Đồng tu [${e}] đề nghị hòa ván cờ. Bạn có đồng ý không?`)?(this.socket.emit("chessDrawResponse",{targetPlayerId:t,accept:!0}),this.endGame(0,"Hai bên đồng ý hòa cờ trong chánh niệm!")):this.socket.emit("chessDrawResponse",{targetPlayerId:t,accept:!1})}),this.socket.on("chessDrawResponded",({accept:t})=>{t?this.endGame(0,"Hai bên đồng ý hòa cờ trong chánh niệm!"):this.app.showToast("Đối thủ từ chối lời đề nghị hòa cờ. Ván cờ tiếp tục!")}),this.socket.on("creatureReleased",t=>{var n,i;this.app.temple&&t.playerId!==this.socket.id&&(t.creatureType==="lantern"?this.app.temple.spawnFloatingLantern(t.prayerText):this.app.temple.spawnReleasedFish(t.creatureType,t.prayerText)),this.app.showFloatingMerit(`+${t.earnedMerit} Phóng Sinh 🐟`,(n=this.app.controller)==null?void 0:n.position);const e=document.getElementById("total-merit-display");e&&(e.textContent=t.totalMerit.toLocaleString()),(i=this.app.avatarManager)==null||i.updateMerit(t.playerId,t.playerMerit)}),this.socket.on("teaDrunk",t=>{var n,i;this.app.showFloatingMerit("+5 Trà Đạo 🍵",(n=this.app.controller)==null?void 0:n.position);const e=document.getElementById("total-merit-display");e&&(e.textContent=t.totalMerit.toLocaleString()),(i=this.app.avatarManager)==null||i.updateMerit(t.playerId,t.playerMerit)}))}escapeHtml(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"):""}}const xs=["Thích thì nhích","Thích ăn chực","Thích đủ thứ","Thích tạo nghiệp","Thích ngủ nướng","Thích ăn vặt","Thích nhiều chuyện","Thích cúng dường","Thích an lạc","Thích buông bỏ","Thích tĩnh tâm","Thích trà đạo","Thích tàu hủ","Thích ăn nhậu","Thích trúng số","Thích thì chìu","Thích im lặng","Thích drama","Thích sống ảo","Thích vô đây"];class l0{constructor(){this.canvasContainer=document.getElementById("canvas-container"),this.css2dContainer=document.getElementById("css2d-container"),this.socket=null,this.myId=null,this.myName=xs[Math.floor(Math.random()*xs.length)],this.myRoomId="dai-hung-bao-dien",this.currentAction="stand",this.selectedRobeColor="#E69500",this.audio=ve,this.fsm=null,this.zenGames=null,this.initThree(),this.fsm=new a0(this),this.controller.initVirtualDpad(),this.initUI(),this.initMusicControls(),this.autoJoinTemple()}initThree(){this.scene=new sm,this.camera=new Oe(50,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,3,10),this.renderer=new im({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=oc,this.renderer.toneMapping=cc,this.renderer.toneMappingExposure=1.18,this.canvasContainer.appendChild(this.renderer.domElement),this.css2dRenderer=new um,this.css2dRenderer.setSize(window.innerWidth,window.innerHeight),this.css2dRenderer.domElement.style.position="absolute",this.css2dRenderer.domElement.style.top="0",this.css2dRenderer.domElement.style.left="0",this.css2dRenderer.domElement.style.pointerEvents="none",this.css2dContainer.appendChild(this.css2dRenderer.domElement),this.temple=new i0(this.scene),this.avatarManager=new s0(this.scene),this.controller=new r0(this.camera,this.renderer.domElement,t=>{this.socket&&this.myId&&this.socket.emit("move",t)},this.temple,this),window.addEventListener("resize",()=>this.onWindowResize()),this.clock=new zc,this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.css2dRenderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1);this.temple.update(t),this.avatarManager.update(t),this.fsm&&this.fsm.update(t),this.controller.update(t,this.avatarManager,this.myId),this.renderer.render(this.scene,this.camera),this.css2dRenderer.render(this.scene,this.camera)}initMusicControls(){const t=document.getElementById("btn-toggle-music"),e=document.getElementById("music-state-text"),n=document.getElementById("audio-wave"),i=document.getElementById("select-track"),r=document.getElementById("volume-slider"),o=c=>{c?(t.classList.add("playing"),e.textContent="Đang Gõ Mõ",n.classList.add("active")):(t.classList.remove("playing"),e.textContent="Bật Mõ Thiền",n.classList.remove("active"))};t.addEventListener("click",()=>{const c=ve.toggleMusic();o(c)}),i.addEventListener("change",c=>{ve.selectTrack(c.target.value),ve.isPlaying||ve.startMusic(),o(!0)}),r.addEventListener("input",c=>{const l=parseFloat(c.target.value)/100;ve.setVolume(l)}),this.updateMusicUI=o;const a=()=>{ve.isPlaying||(ve.startMusic(),o(!0)),window.removeEventListener("pointerdown",a),window.removeEventListener("keydown",a)};window.addEventListener("pointerdown",a),window.addEventListener("keydown",a)}initUI(){var R,b,C,I,T,S,P,k,O,V,X,H,J,W;const e=new URLSearchParams(window.location.search).get("room");if(e){this.myRoomId=e;const $=document.getElementById("input-room");$&&($.value=e)}document.getElementById("header-my-name").textContent=this.myName,document.getElementById("input-name").value=this.myName,document.getElementById("header-avatar-dot").style.background=this.selectedRobeColor;const n=document.getElementById("cam-view-hall"),i=document.getElementById("cam-view-buddha"),r=document.getElementById("cam-view-gate"),o=document.getElementById("cam-view-follow"),a=$=>{[n,i,r,o].forEach(st=>{st&&st.classList.remove("active")}),$&&$.classList.add("active")};n&&n.addEventListener("click",()=>{this.controller.setCameraMainHall(),a(n),this.showToast("🏛️ Góc nhìn Chánh Điện uy nghiêm!")}),i&&i.addEventListener("click",()=>{this.controller.setCameraBuddhaCloseUp(),a(i),this.showToast("🪷 Chiêm bái tôn tượng Đức Bổn Sư Thích Ca!")}),r&&r.addEventListener("click",()=>{this.controller.setCameraGate(),a(r),this.showToast("⛩️ Chiêm ngưỡng Cổng Tam Quan cổ kính!")}),o&&o.addEventListener("click",()=>{this.controller.setCameraFollow(),a(o),this.showToast("🧘 Góc nhìn theo sau nhân vật!")});const c=document.getElementById("btn-cancel-ritual");c&&c.addEventListener("click",()=>{this.fsm.cancelRitual()});const l=document.getElementById("profile-modal");(R=document.getElementById("btn-open-profile"))==null||R.addEventListener("click",()=>{l&&(l.style.display="flex")}),(b=document.getElementById("btn-close-profile"))==null||b.addEventListener("click",()=>{l&&(l.style.display="none")}),l==null||l.addEventListener("click",$=>{$.target===l&&(l.style.display="none")});const h=document.getElementById("fortune-modal");(C=document.getElementById("btn-close-fortune-x"))==null||C.addEventListener("click",()=>{h&&(h.style.display="none")}),h==null||h.addEventListener("click",$=>{$.target===h&&(h.style.display="none")}),(I=document.getElementById("btn-save-profile"))==null||I.addEventListener("click",()=>{const $=document.getElementById("input-name").value.trim(),st=document.getElementById("input-room").value.trim()||"dai-hung-bao-dien";$&&(this.myName=$),document.getElementById("header-my-name").textContent=this.myName,document.getElementById("header-avatar-dot").style.background=this.selectedRobeColor,this.myId&&this.avatarManager.updateAvatarProfile(this.myId,{name:this.myName,robeColor:this.selectedRobeColor}),l&&(l.style.display="none"),st!==this.myRoomId?window.location.search=`?room=${encodeURIComponent(st)}`:this.socket&&this.socket.emit("updateProfile",{name:this.myName,robeColor:this.selectedRobeColor}),this.showToast(`✨ Đã cập nhật pháp danh: ${this.myName}`)});const u=document.getElementById("btn-random-name"),f=document.getElementById("input-name");u.addEventListener("click",()=>{const $=xs[Math.floor(Math.random()*xs.length)];f.value=$}),document.querySelectorAll(".name-tag").forEach($=>{$.addEventListener("click",()=>{f.value=$.textContent})});const p=document.querySelectorAll(".robe-color-opt");p.forEach($=>{$.addEventListener("click",()=>{p.forEach(ht=>ht.classList.remove("selected")),$.classList.add("selected"),this.selectedRobeColor=$.getAttribute("data-color");const st=document.getElementById("avatar-preview-badge");st&&(st.style.borderColor=this.selectedRobeColor)})});const g=document.getElementById("btn-sound");g.addEventListener("click",()=>{if(ve.sfxGain){const $=ve.sfxGain.gain.value===0;ve.sfxGain.gain.setValueAtTime($?.85:0,ve.ctx.currentTime),g.textContent=$?"🔔":"🔕",g.title=$?"Tắt Hiệu Ứng":"Bật Hiệu Ứng"}}),document.getElementById("btn-share").addEventListener("click",()=>{const $=new URL(window.location.href);$.searchParams.set("room",this.myRoomId),navigator.clipboard.writeText($.href).then(()=>{this.showToast("🔗 Đã copy link phòng! Gửi cho bạn bè để cùng vào chùa.")}).catch(()=>{this.showToast(`Link phòng: ${$.href}`)})});const m=document.getElementById("chat-panel-toggle"),d=document.getElementById("chat-panel"),M=document.getElementById("chat-toggle-icon");m&&d&&m.addEventListener("click",()=>{d.classList.toggle("collapsed"),M&&(M.textContent=d.classList.contains("collapsed")?"▲":"▼")});const x=document.getElementById("chat-form"),_=document.getElementById("chat-input");x&&_&&x.addEventListener("submit",$=>{$.preventDefault();const st=_.value.trim();!st||!this.socket||(this.socket.emit("chat",{text:st}),_.value="")}),document.querySelectorAll(".preset-chip").forEach($=>{$.addEventListener("click",()=>{const st=$.getAttribute("data-msg");st&&this.socket&&this.socket.emit("chat",{text:st})})}),(T=document.getElementById("act-sit"))==null||T.addEventListener("click",()=>this.fsm.startMeditation()),(S=document.getElementById("act-bow"))==null||S.addEventListener("click",()=>this.fsm.startBowing()),(P=document.getElementById("act-woodfish"))==null||P.addEventListener("click",()=>this.fsm.startWoodfish()),(k=document.getElementById("act-bell"))==null||k.addEventListener("click",()=>this.fsm.startBell()),(O=document.getElementById("act-incense"))==null||O.addEventListener("click",()=>this.fsm.startIncense()),(V=document.getElementById("act-fortune"))==null||V.addEventListener("click",()=>this.fsm.startFortune()),(X=document.getElementById("act-fish"))==null||X.addEventListener("click",()=>this.openFishReleaseModal()),(H=document.getElementById("act-chess"))==null||H.addEventListener("click",()=>this.openChessModal()),(J=document.getElementById("act-tea"))==null||J.addEventListener("click",()=>this.drinkTea()),window.addEventListener("keydown",$=>{if(!["input","textarea","select"].includes(document.activeElement.tagName.toLowerCase()))switch($.key){case"1":this.fsm.startMeditation();break;case"2":this.fsm.startBowing();break;case"3":this.fsm.startWoodfish();break;case"4":this.fsm.startBell();break;case"5":this.fsm.startIncense();break;case"6":this.fsm.startFortune();break;case"7":this.openFishReleaseModal();break;case"8":this.openChessModal();break;case"9":this.drinkTea();break;case"Escape":this.fsm.cancelRitual(),document.getElementById("fortune-modal").style.display="none",document.getElementById("profile-modal").style.display="none",document.getElementById("chess-modal").style.display="none",document.getElementById("fish-modal").style.display="none",document.getElementById("chess-invite-modal").style.display="none";break;case"Enter":$.preventDefault(),_.focus();break}}),(W=document.getElementById("btn-close-fortune"))==null||W.addEventListener("click",()=>{const $=document.getElementById("fortune-modal");$&&($.style.display="none")}),this.controller&&(this.controller.onCancelCallback=()=>{this.fsm.cancelRitual()})}openChessModal(){this.zenGames&&this.zenGames.openChessModal()}openFishReleaseModal(){this.zenGames&&this.zenGames.openFishReleaseModal()}drinkTea(){this.zenGames&&this.zenGames.drinkTea()}sendLocalPosition(){this.socket&&this.myId&&(this.socket.emit("move",{x:this.controller.position.x,y:this.controller.position.y,z:this.controller.position.z,rotationY:this.controller.rotationY}),this.avatarManager.updateAvatarData(this.myId,{x:this.controller.position.x,y:this.controller.position.y,z:this.controller.position.z,rotationY:this.controller.rotationY}))}updateActionButtonsUI(t){this.currentAction=t,["sit","bow","woodfish","bell","incense","fortune","fish","chess","tea"].forEach(e=>{const n=document.getElementById(`act-${e}`);n&&(t===e||e==="bow"&&t==="bow3Times"||e==="woodfish"&&t==="strikeWoodfish"?n.classList.add("active"):n.classList.remove("active"))})}showRitualStatus(t,e,n=!0){const i=document.getElementById("ritual-status-banner"),r=document.getElementById("ritual-status-icon"),o=document.getElementById("ritual-status-text"),a=document.getElementById("btn-cancel-ritual");i&&r&&o&&(r.textContent=t,o.textContent=e,a&&(a.style.display=n?"inline-block":"none"),i.style.display="flex")}hideRitualStatus(){const t=document.getElementById("ritual-status-banner");t&&(t.style.display="none")}playTempleChime(){ve.playGentleBellAccent()}showFloatingMerit(t,e){if(!this.camera)return;const n=e?e.clone():this.controller.position.clone();if(n.y+=2.1,n.project(this.camera),n.z>1)return;const i=(n.x*.5+.5)*window.innerWidth,r=(-n.y*.5+.5)*window.innerHeight,o=document.createElement("div");o.className="floating-merit-badge",o.textContent=t,o.style.left=`${i}px`,o.style.top=`${r}px`,document.body.appendChild(o),setTimeout(()=>o.remove(),1300)}playFortuneRattleAudio(){if(!ve||!ve.ctx)return;const t=ve.ctx;for(let e=0;e<7;e++)setTimeout(()=>{if(!t)return;const n=t.currentTime,i=t.createOscillator(),r=t.createGain();i.type="triangle",i.frequency.setValueAtTime(620+Math.random()*260,n),i.frequency.exponentialRampToValueAtTime(200,n+.04),r.gain.setValueAtTime(.3,n),r.gain.exponentialRampToValueAtTime(.001,n+.05),i.connect(r),r.connect(t.destination),i.start(n),i.stop(n+.05)},e*340)}setAction(t){this.currentAction=t,this.updateActionButtonsUI(t),this.avatarManager&&this.myId&&this.avatarManager.setAction(this.myId,this.currentAction),this.socket&&this.socket.emit("action",{action:this.currentAction})}autoJoinTemple(){this.socket=Ps({transports:["websocket","polling"]}),this.zenGames=new c0(this),this.socket.on("connect",()=>{this.socket.emit("join",{name:this.myName,roomId:this.myRoomId,robeColor:this.selectedRobeColor})}),this.socket.on("initRoom",t=>{this.myId=t.yourId,this.avatarManager.setLocalPlayerId(this.myId),document.getElementById("room-name-display").textContent=t.roomName||"Chùa Vừa Làm Vừa Tu",document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),document.getElementById("online-count-display").textContent=t.players.length,t.players.forEach(e=>{this.avatarManager.createAvatar(e),e.id===this.myId&&this.controller.setPosition(e.x,e.y,e.z,e.rotY),e.action&&this.avatarManager.setAction(e.id,e.action)}),t.chatHistory&&t.chatHistory.forEach(e=>this.appendChatMessage(e)),this.showToast(`🙏 A Di Đà Phật! Đã vào Chùa Vừa Làm Vừa Tu với pháp danh: [${this.myName}]`)}),this.socket.on("playerJoined",t=>{this.avatarManager.createAvatar(t),this.updateOnlineCount(1)}),this.socket.on("playerProfileUpdated",t=>{this.avatarManager.updateAvatarProfile(t.id,t),t.id===this.myId&&(t.name&&(this.myName=t.name,document.getElementById("header-my-name").textContent=this.myName),t.robeColor&&(this.selectedRobeColor=t.robeColor,document.getElementById("header-avatar-dot").style.background=t.robeColor))}),this.socket.on("playerMoved",t=>{this.avatarManager.updateAvatarData(t.id,t)}),this.socket.on("playerActionChanged",({id:t,action:e})=>{this.avatarManager.setAction(t,e)}),this.socket.on("newChatMessage",t=>{this.appendChatMessage(t)}),this.socket.on("showBubble",({playerId:t,text:e,duration:n})=>{this.avatarManager.showBubble(t,e,n)}),this.socket.on("woodfishStruck",t=>{ve.playWoodfish(),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),this.avatarManager.updateMerit(t.playerId,t.playerMerit),this.triggerFloatingMerit("+1 Công Đức 🪷",t.playerId)}),this.socket.on("bellStruck",t=>{ve.playBell(),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),this.avatarManager.updateMerit(t.playerId,t.playerMerit),this.triggerFloatingMerit("+5 Công Đức 🔔",t.playerId)}),this.socket.on("incenseLit",t=>{ve.playBell(),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),this.triggerFloatingMerit("+3 Công Đức 🪔",t.playerId)}),this.socket.on("fortuneResult",t=>{ve.playBell(),this.showFortuneModal(t)}),this.socket.on("playerLeft",t=>{this.avatarManager.removeAvatar(t.id),this.updateOnlineCount(-1),this.appendChatMessage({senderName:"Chính Điện",text:`Đồng tu [${t.name}] đã rời bước. Chúc vạn sự bình yên!`})})}appendChatMessage(t){const e=document.getElementById("chat-messages");if(!e)return;const n=document.createElement("div");t.senderId==="system"?(n.className="chat-msg system",n.textContent=t.text):(n.className="chat-msg",n.innerHTML=`<span class="sender">${this.avatarManager.escapeHtml(t.senderName)}:</span> ${this.avatarManager.escapeHtml(t.text)}`),e.appendChild(n),e.scrollTop=e.scrollHeight}showFortuneModal(t){document.getElementById("fortune-title").textContent=t.title,document.getElementById("fortune-poem").textContent=t.poem,document.getElementById("fortune-advice").textContent=`💡 Lời Phật dạy: ${t.advice}`,document.getElementById("fortune-modal").style.display="flex"}triggerFloatingMerit(t,e){const n=this.avatarManager.avatars.get(e);let i=window.innerWidth/2,r=window.innerHeight/2;if(n){const a=n.group.position.clone();a.y+=2.25,a.project(this.camera),i=(a.x*.5+.5)*window.innerWidth,r=(-(a.y*.5)+.5)*window.innerHeight}const o=document.createElement("div");o.className="floating-merit",o.textContent=t,o.style.left=`${i}px`,o.style.top=`${r}px`,document.body.appendChild(o),setTimeout(()=>o.remove(),1200)}showToast(t){const e=document.createElement("div");e.className="toast-notice",e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.remove(),2800)}updateOnlineCount(t){const e=document.getElementById("online-count-display"),n=parseInt(e.textContent)||1;e.textContent=Math.max(1,n+t)}}window.addEventListener("DOMContentLoaded",()=>{new l0});
