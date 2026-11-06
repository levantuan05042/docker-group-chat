(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mo="170",il=0,Vo=1,sl=2,rc=1,oc=2,dn=3,Pn=0,Ie=1,Ke=2,Rn=0,hi=1,Ho=2,Wo=3,Xo=4,rl=5,zn=100,ol=101,al=102,cl=103,ll=104,hl=200,ul=201,dl=202,fl=203,xr=204,Mr=205,pl=206,ml=207,gl=208,_l=209,vl=210,xl=211,Ml=212,yl=213,Sl=214,yr=0,Sr=1,Er=2,fi=3,Tr=4,wr=5,br=6,Ar=7,ac=0,El=1,Tl=2,Cn=0,wl=1,bl=2,Al=3,cc=4,Rl=5,Cl=6,Pl=7,lc=300,pi=301,mi=302,Rr=303,Cr=304,Ps=306,Pr=1e3,Vn=1001,Ir=1002,je=1003,Il=1004,Wi=1005,tn=1006,Bs=1007,Hn=1008,gn=1009,hc=1010,uc=1011,Oi=1012,go=1013,Wn=1014,fn=1015,Bi=1016,_o=1017,vo=1018,gi=1020,dc=35902,fc=1021,pc=1022,Ze=1023,mc=1024,gc=1025,ui=1026,_i=1027,_c=1028,xo=1029,vc=1030,Mo=1031,yo=1033,_s=33776,vs=33777,xs=33778,Ms=33779,Lr=35840,Dr=35841,Ur=35842,Nr=35843,Fr=36196,Or=37492,Br=37496,kr=37808,zr=37809,Gr=37810,Vr=37811,Hr=37812,Wr=37813,Xr=37814,qr=37815,Yr=37816,Kr=37817,$r=37818,Zr=37819,jr=37820,Jr=37821,ys=36492,Qr=36494,to=36495,xc=36283,eo=36284,no=36285,io=36286,Ll=3200,Dl=3201,Mc=0,Ul=1,An="",Be="srgb",Mi="srgb-linear",Is="linear",ne="srgb",Yn=7680,qo=519,Nl=512,Fl=513,Ol=514,yc=515,Bl=516,kl=517,zl=518,Gl=519,Yo=35044,Ko="300 es",pn=2e3,Rs=2001;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ks=Math.PI/180,so=180/Math.PI;function ki(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Vl(i,t){return(i%t+t)%t}function zs(i,t,e){return(1-e)*i+e*t}function Ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],h=s[6],T=s[1],w=s[4],y=s[7],N=s[2],R=s[5],A=s[8];return r[0]=o*_+a*T+c*N,r[3]=o*m+a*w+c*R,r[6]=o*h+a*y+c*A,r[1]=l*_+u*T+d*N,r[4]=l*m+u*w+d*R,r[7]=l*h+u*y+d*A,r[2]=f*_+p*T+g*N,r[5]=f*m+p*w+g*R,r[8]=f*h+p*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=e*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gs.makeScale(t,e)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new kt;function Sc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hl(){const i=Cs("canvas");return i.style.display="block",i}const $o={};function Ui(i){i in $o||($o[i]=!0,console.warn(i))}function Wl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Xl(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ql(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=mn(i.r),i.g=mn(i.g),i.b=mn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=di(i.r),i.g=di(i.g),i.b=di(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===An?Is:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Zo=[.64,.33,.3,.6,.15,.06],jo=[.2126,.7152,.0722],Jo=[.3127,.329],Qo=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ta=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Mi]:{primaries:Zo,whitePoint:Jo,transfer:Is,toXYZ:Qo,fromXYZ:ta,luminanceCoefficients:jo,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Zo,whitePoint:Jo,transfer:ne,toXYZ:Qo,fromXYZ:ta,luminanceCoefficients:jo,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});let Kn;class Yl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Kn===void 0&&(Kn=Cs("canvas")),Kn.width=t.width,Kn.height=t.height;const n=Kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mn(e[n]/255)*255):e[n]=mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kl=0;class Ec{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vs(s[o].image)):r.push(Vs(s[o]))}else r=Vs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Vs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $l=0;class we extends yi{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Vn,s=Vn,r=tn,o=Hn,a=Ze,c=gn,l=we.DEFAULT_ANISOTROPY,u=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$l++}),this.uuid=ki(),this.name="",this.source=new Ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pr:t.x=t.x-Math.floor(t.x);break;case Vn:t.x=t.x<0?0:1;break;case Ir:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pr:t.y=t.y-Math.floor(t.y);break;case Vn:t.y=t.y<0?0:1;break;case Ir:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=lc;we.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,y=(p+1)/2,N=(h+1)/2,R=(u+f)/4,A=(d+_)/4,L=(g+m)/4;return w>y&&w>N?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=R/n,r=A/n):y>N?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=L/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=A/r,s=L/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(f-u)/T,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zl extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ec(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Zl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tc extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jl extends we{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==f||l!==p||u!==g){let m=1-a;const h=c*f+l*p+u*g+d*_,T=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){const N=Math.sqrt(w),R=Math.atan2(N,h*T);m=Math.sin(m*R)/N,a=Math.sin(a*R)/N}const y=a*T;if(c=c*m+f*y,l=l*m+p*y,u=u*m+g*y,d=d*m+_*y,m===1-a){const N=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=N,l*=N,u*=N,d*=N}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*d+c*p-l*f,t[e+1]=c*g+u*f+l*d-a*p,t[e+2]=l*g+u*p+a*f-c*d,t[e+3]=u*g-a*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),d=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d+f*p*g;break;case"YZX":this._x=f*u*d+l*p*g,this._y=l*p*d+f*u*g,this._z=l*u*g-f*p*d,this._w=l*u*d-f*p*g;break;case"XZY":this._x=f*u*d-l*p*g,this._y=l*p*d-f*u*g,this._z=l*u*g+f*p*d,this._w=l*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ea.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ea.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hs.copy(this).projectOnVector(t),this.sub(Hs)}reflect(t){return this.sub(Hs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hs=new I,ea=new zi;class Gi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,He):He.fromBufferAttribute(r,o),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xi.copy(n.boundingBox)),Xi.applyMatrix4(t.matrixWorld),this.union(Xi)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),qi.subVectors(this.max,Ri),$n.subVectors(t.a,Ri),Zn.subVectors(t.b,Ri),jn.subVectors(t.c,Ri),xn.subVectors(Zn,$n),Mn.subVectors(jn,Zn),Dn.subVectors($n,jn);let e=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-Dn.z,Dn.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,Dn.z,0,-Dn.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-Dn.y,Dn.x,0];return!Ws(e,$n,Zn,jn,qi)||(e=[1,0,0,0,1,0,0,0,1],!Ws(e,$n,Zn,jn,qi))?!1:(Yi.crossVectors(xn,Mn),e=[Yi.x,Yi.y,Yi.z],Ws(e,$n,Zn,jn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(an),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const an=[new I,new I,new I,new I,new I,new I,new I,new I],He=new I,Xi=new Gi,$n=new I,Zn=new I,jn=new I,xn=new I,Mn=new I,Dn=new I,Ri=new I,qi=new I,Yi=new I,Un=new I;function Ws(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Un.fromArray(i,r);const a=s.x*Math.abs(Un.x)+s.y*Math.abs(Un.y)+s.z*Math.abs(Un.z),c=t.dot(Un),l=e.dot(Un),u=n.dot(Un);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Jl=new Gi,Ci=new I,Xs=new I;class Ls{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ci.subVectors(t,this.center);const e=Ci.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ci,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ci.copy(t.center).add(Xs)),this.expandByPoint(Ci.copy(t.center).sub(Xs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new I,qs=new I,Ki=new I,yn=new I,Ys=new I,$i=new I,Ks=new I;class So{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cn.copy(this.origin).addScaledVector(this.direction,e),cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){qs.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),yn.copy(this.origin).sub(qs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ki),a=yn.dot(this.direction),c=-yn.dot(Ki),l=yn.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*c-a,f=o*a-c,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qs).addScaledVector(Ki,f),p}intersectSphere(t,e){cn.subVectors(t.center,this.origin);const n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,cn)!==null}intersectTriangle(t,e,n,s,r){Ys.subVectors(e,t),$i.subVectors(n,t),Ks.crossVectors(Ys,$i);let o=this.direction.dot(Ks),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yn.subVectors(this.origin,t);const c=a*this.direction.dot($i.crossVectors(yn,$i));if(c<0)return null;const l=a*this.direction.dot(Ys.cross(yn));if(l<0||c+l>o)return null;const u=-a*yn.dot(Ks);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,c,l,u,d,f,p,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,d,f,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,u,d,f,p,g,_,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),o=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,p=c*d,g=l*u,_=l*d;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,p=c*d,g=l*u,_=l*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,p=o*d,g=a*u,_=a*d;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+_,e[5]=o*u,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ql,t,th)}lookAt(t,e,n){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),Sn.crossVectors(n,De),Sn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),Sn.crossVectors(n,De)),Sn.normalize(),Zi.crossVectors(De,Sn),s[0]=Sn.x,s[4]=Zi.x,s[8]=De.x,s[1]=Sn.y,s[5]=Zi.y,s[9]=De.y,s[2]=Sn.z,s[6]=Zi.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],h=n[14],T=n[3],w=n[7],y=n[11],N=n[15],R=s[0],A=s[4],L=s[8],S=s[12],M=s[1],b=s[5],B=s[9],F=s[13],W=s[2],Y=s[6],X=s[10],j=s[14],V=s[3],tt=s[7],ot=s[11],Mt=s[15];return r[0]=o*R+a*M+c*W+l*V,r[4]=o*A+a*b+c*Y+l*tt,r[8]=o*L+a*B+c*X+l*ot,r[12]=o*S+a*F+c*j+l*Mt,r[1]=u*R+d*M+f*W+p*V,r[5]=u*A+d*b+f*Y+p*tt,r[9]=u*L+d*B+f*X+p*ot,r[13]=u*S+d*F+f*j+p*Mt,r[2]=g*R+_*M+m*W+h*V,r[6]=g*A+_*b+m*Y+h*tt,r[10]=g*L+_*B+m*X+h*ot,r[14]=g*S+_*F+m*j+h*Mt,r[3]=T*R+w*M+y*W+N*V,r[7]=T*A+w*b+y*Y+N*tt,r[11]=T*L+w*B+y*X+N*ot,r[15]=T*S+w*F+y*j+N*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],h=t[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*p-n*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*u-n*l*u)+h*(-s*a*u-e*c*d+e*a*f+s*o*d-n*o*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],h=t[15],T=d*m*l-_*f*l+_*c*p-a*m*p-d*c*h+a*f*h,w=g*f*l-u*m*l-g*c*p+o*m*p+u*c*h-o*f*h,y=u*_*l-g*d*l+g*a*p-o*_*p-u*a*h+o*d*h,N=g*d*c-u*_*c-g*a*f+o*_*f+u*a*m-o*d*m,R=e*T+n*w+s*y+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=T*A,t[1]=(_*f*r-d*m*r-_*s*p+n*m*p+d*s*h-n*f*h)*A,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*h+n*c*h)*A,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*p-n*c*p)*A,t[4]=w*A,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*h+e*f*h)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*h-e*c*h)*A,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*p+e*c*p)*A,t[8]=y*A,t[9]=(g*d*r-u*_*r-g*n*p+e*_*p+u*n*h-e*d*h)*A,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*h+e*a*h)*A,t[11]=(u*a*r-o*d*r-u*n*l+e*d*l+o*n*p-e*a*p)*A,t[12]=N*A,t[13]=(u*_*s-g*d*s+g*n*f-e*_*f-u*n*m+e*d*m)*A,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*A,t[15]=(o*d*s-u*a*s+u*n*c-e*d*c-o*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,d=a+a,f=r*l,p=r*u,g=r*d,_=o*u,m=o*d,h=a*d,T=c*l,w=c*u,y=c*d,N=n.x,R=n.y,A=n.z;return s[0]=(1-(_+h))*N,s[1]=(p+y)*N,s[2]=(g-w)*N,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(f+h))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+w)*A,s[9]=(m-T)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Jn.set(s[0],s[1],s[2]).length();const o=Jn.set(s[4],s[5],s[6]).length(),a=Jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],We.copy(this);const l=1/r,u=1/o,d=1/a;return We.elements[0]*=l,We.elements[1]*=l,We.elements[2]*=l,We.elements[4]*=u,We.elements[5]*=u,We.elements[6]*=u,We.elements[8]*=d,We.elements[9]*=d,We.elements[10]*=d,e.setFromRotationMatrix(We),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=pn){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===pn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Rs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=pn){const c=this.elements,l=1/(e-t),u=1/(n-s),d=1/(o-r),f=(e+t)*l,p=(n+s)*u;let g,_;if(a===pn)g=(o+r)*d,_=-2*d;else if(a===Rs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new I,We=new se,Ql=new I(0,0,0),th=new I(1,1,1),Sn=new I,Zi=new I,De=new I,na=new se,ia=new zi;class nn{constructor(t=0,e=0,n=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Pe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return na.makeRotationFromQuaternion(t),this.setFromRotationMatrix(na,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ia.setFromEuler(this),this.setFromQuaternion(ia,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class Eo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eh=0;const sa=new I,Qn=new zi,ln=new se,ji=new I,Pi=new I,nh=new I,ih=new zi,ra=new I(1,0,0),oa=new I(0,1,0),aa=new I(0,0,1),ca={type:"added"},sh={type:"removed"},ti={type:"childadded",child:null},$s={type:"childremoved",child:null};class _e extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new I,e=new nn,n=new zi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(ra,t)}rotateY(t){return this.rotateOnAxis(oa,t)}rotateZ(t){return this.rotateOnAxis(aa,t)}translateOnAxis(t,e){return sa.copy(t).applyQuaternion(this.quaternion),this.position.add(sa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ra,t)}translateY(t){return this.translateOnAxis(oa,t)}translateZ(t){return this.translateOnAxis(aa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ji.copy(t):ji.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Pi,ji,this.up):ln.lookAt(ji,Pi,this.up),this.quaternion.setFromRotationMatrix(ln),s&&(ln.extractRotation(s.matrixWorld),Qn.setFromRotationMatrix(ln),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ca),ti.child=t,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sh),$s.child=t,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ca),ti.child=t,this.dispatchEvent(ti),ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,nh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,ih,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new I(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xe=new I,hn=new I,Zs=new I,un=new I,ei=new I,ni=new I,la=new I,js=new I,Js=new I,Qs=new I,tr=new ie,er=new ie,nr=new ie;class $e{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xe.subVectors(t,e),s.cross(Xe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xe.subVectors(s,e),hn.subVectors(n,e),Zs.subVectors(t,e);const o=Xe.dot(Xe),a=Xe.dot(hn),c=Xe.dot(Zs),l=hn.dot(hn),u=hn.dot(Zs),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,un.x),c.addScaledVector(o,un.y),c.addScaledVector(a,un.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return tr.setScalar(0),er.setScalar(0),nr.setScalar(0),tr.fromBufferAttribute(t,e),er.fromBufferAttribute(t,n),nr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(tr,r.x),o.addScaledVector(er,r.y),o.addScaledVector(nr,r.z),o}static isFrontFacing(t,e,n,s){return Xe.subVectors(n,e),hn.subVectors(t,e),Xe.cross(hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xe.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Xe.cross(hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ei.subVectors(s,n),ni.subVectors(r,n),js.subVectors(t,n);const c=ei.dot(js),l=ni.dot(js);if(c<=0&&l<=0)return e.copy(n);Js.subVectors(t,s);const u=ei.dot(Js),d=ni.dot(Js);if(u>=0&&d<=u)return e.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ei,o);Qs.subVectors(t,r);const p=ei.dot(Qs),g=ni.dot(Qs);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ni,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return la.subVectors(r,s),a=(d-u)/(d-u+(p-g)),e.copy(s).addScaledVector(la,a);const h=1/(m+_+f);return o=_*h,a=f*h,e.copy(n).addScaledVector(ei,o).addScaledVector(ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function ir(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Vl(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ir(o,r,t+1/3),this.g=ir(o,r,t),this.b=ir(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){const n=wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return Zt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Pe(Ee.r*255,0,255))*65536+Math.round(Pe(Ee.g*255,0,255))*256+Math.round(Pe(Ee.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ee.copy(this),e);const n=Ee.r,s=Ee.g,r=Ee.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Be){Zt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,s=Ee.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(Ji);const n=zs(En.h,Ji.h,e),s=zs(En.s,Ji.s,e),r=zs(En.l,Ji.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new qt;qt.NAMES=wc;let rh=0;class Si extends yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=ki(),this.name="",this.blending=hi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xr,this.blendDst=Mr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xr&&(n.blendSrc=this.blendSrc),this.blendDst!==Mr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ye extends Si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new I,Qi=new Wt;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yo,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),s=Re(s,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yo&&(t.usage=this.usage),t}}class bc extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ac extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let oh=0;const Oe=new se,sr=new _e,ii=new I,Ue=new Gi,Ii=new Gi,Me=new I;class be extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sc(t)?Ac:bc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return sr.lookAt(t),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ii.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ue.min,Ii.min),Ue.expandByPoint(Me),Me.addVectors(Ue.max,Ii.max),Ue.expandByPoint(Me)):(Ue.expandByPoint(Ii.min),Ue.expandByPoint(Ii.max))}Ue.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Me.fromBufferAttribute(a,l),c&&(ii.fromBufferAttribute(t,l),Me.add(ii)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new I,c[L]=new I;const l=new I,u=new I,d=new I,f=new Wt,p=new Wt,g=new Wt,_=new I,m=new I;function h(L,S,M){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(l),d.sub(l),p.sub(f),g.sub(f);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(b),a[L].add(_),a[S].add(_),a[M].add(_),c[L].add(m),c[S].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,S=T.length;L<S;++L){const M=T[L],b=M.start,B=M.count;for(let F=b,W=b+B;F<W;F+=3)h(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const w=new I,y=new I,N=new I,R=new I;function A(L){N.fromBufferAttribute(s,L),R.copy(N);const S=a[L];w.copy(S),w.sub(N.multiplyScalar(N.dot(S))).normalize(),y.crossVectors(R,S);const b=y.dot(c[L])<0?-1:1;o.setXYZW(L,w.x,w.y,w.z,b)}for(let L=0,S=T.length;L<S;++L){const M=T[L],b=M.start,B=M.count;for(let F=b,W=b+B;F<W;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let h=0;h<u;h++)f[g++]=l[p++]}return new ze(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ha=new se,Nn=new So,ts=new Ls,ua=new I,es=new I,ns=new I,is=new I,rr=new I,ss=new I,da=new I,rs=new I;class G extends _e{constructor(t=new be,e=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ss.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(rr.fromBufferAttribute(d,t),o?ss.addScaledVector(rr,u):ss.addScaledVector(rr.sub(e),u))}e.add(ss)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(ts.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(ts,ua)===null||Nn.origin.distanceToSquared(ua)>(t.far-t.near)**2))&&(ha.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(ha),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,N=w;y<N;y+=3){const R=a.getX(y),A=a.getX(y+1),L=a.getX(y+2);s=os(this,h,t,n,l,u,d,R,A,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const T=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);s=os(this,o,t,n,l,u,d,T,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=T,N=w;y<N;y+=3){const R=y,A=y+1,L=y+2;s=os(this,h,t,n,l,u,d,R,A,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const T=m,w=m+1,y=m+2;s=os(this,o,t,n,l,u,d,T,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ah(i,t,e,n,s,r,o,a){let c;if(t.side===Ie?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Pn,a),c===null)return null;rs.copy(a),rs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(rs);return l<e.near||l>e.far?null:{distance:l,point:rs.clone(),object:i}}function os(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,es),i.getVertexPosition(c,ns),i.getVertexPosition(l,is);const u=ah(i,t,e,n,es,ns,is,da);if(u){const d=new I;$e.getBarycoord(da,es,ns,is,d),s&&(u.uv=$e.getInterpolatedAttribute(s,a,c,l,d,new Wt)),r&&(u.uv1=$e.getInterpolatedAttribute(r,a,c,l,d,new Wt)),o&&(u.normal=$e.getInterpolatedAttribute(o,a,c,l,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};$e.getNormal(es,ns,is,f.normal),u.face=f,u.barycoord=d}return u}class Vt extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(d,2));function g(_,m,h,T,w,y,N,R,A,L,S){const M=y/A,b=N/L,B=y/2,F=N/2,W=R/2,Y=A+1,X=L+1;let j=0,V=0;const tt=new I;for(let ot=0;ot<X;ot++){const Mt=ot*b-F;for(let It=0;It<Y;It++){const Kt=It*M-B;tt[_]=Kt*T,tt[m]=Mt*w,tt[h]=W,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[h]=R>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(It/A),d.push(1-ot/L),j+=1}}for(let ot=0;ot<L;ot++)for(let Mt=0;Mt<A;Mt++){const It=f+Mt+Y*ot,Kt=f+Mt+Y*(ot+1),q=f+(Mt+1)+Y*(ot+1),Q=f+(Mt+1)+Y*ot;c.push(It,Kt,Q),c.push(Kt,q,Q),V+=6}a.addGroup(p,V,S),p+=V,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){const t={};for(let e=0;e<i.length;e++){const n=vi(i[e]);for(const s in n)t[s]=n[s]}return t}function ch(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const lh={clone:vi,merge:Te};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends Si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cc extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new I,fa=new Wt,pa=new Wt;class Ne extends Cc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=so*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return so*2*Math.atan(Math.tan(ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,fa,pa),e.subVectors(pa,fa)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ri=1;class dh extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ne(si,ri,t,e);s.layers=this.layers,this.add(s);const r=new Ne(si,ri,t,e);r.layers=this.layers,this.add(r);const o=new Ne(si,ri,t,e);o.layers=this.layers,this.add(o);const a=new Ne(si,ri,t,e);a.layers=this.layers,this.add(a);const c=new Ne(si,ri,t,e);c.layers=this.layers,this.add(c);const l=new Ne(si,ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pc extends we{constructor(t,e,n,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:pi,super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fh extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Pc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:tn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Rn});r.uniforms.tEquirect.value=e;const o=new G(s,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=tn),new dh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const or=new I,ph=new I,mh=new kt;class wn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=or.subVectors(n,e).cross(ph.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(or),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mh.getNormalMatrix(t),s=this.coplanarPoint(or).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Ls,as=new I;class To{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],h=s[12],T=s[13],w=s[14],y=s[15];if(n[0].setComponents(c-r,f-l,m-p,y-h).normalize(),n[1].setComponents(c+r,f+l,m+p,y+h).normalize(),n[2].setComponents(c+o,f+u,m+g,y+T).normalize(),n[3].setComponents(c-o,f-u,m-g,y-T).normalize(),n[4].setComponents(c-a,f-d,m-_,y-w).normalize(),e===pn)n[5].setComponents(c+a,f+d,m+_,y+w).normalize();else if(e===Rs)n[5].setComponents(a,d,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(as.x=s.normal.x>0?t.max.x:t.min.x,as.y=s.normal.y>0?t.max.y:t.min.y,as.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(as)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ic(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gh(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class xi extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,d=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const T=h*f-o;for(let w=0;w<l;w++){const y=w*d-r;g.push(y,-T,0),_.push(0,0,1),m.push(w/a),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let T=0;T<a;T++){const w=T+l*h,y=T+l*(h+1),N=T+1+l*(h+1),R=T+1+l*h;p.push(w,y,R),p.push(y,N,R)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.width,t.height,t.widthSegments,t.heightSegments)}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
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
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sh=`#ifdef USE_ALPHATEST
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
#endif`,wh=`#ifdef USE_BATCHING
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
#endif`,Rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ch=`float G_BlinnPhong_Implicit( ) {
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
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,Yh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$h=`#ifdef USE_ENVMAP
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
#endif`,vu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Su=`#ifdef USE_LOGDEPTHBUF
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
#endif`,wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cu=`#ifdef USE_INSTANCING_MORPH
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
vec3 nonPerturbedNormal = normal;`,Nu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hu=`#ifdef USE_IRIDESCENCEMAP
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
gl_Position = projectionMatrix * mvPosition;`,Ku=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$u=`#ifdef DITHERING
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
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yd=`uniform samplerCube tCube;
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
}`,wd=`#define DISTANCE
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
}`,Cd=`uniform vec3 diffuse;
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
}`,Nd=`#define MATCAP
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
}`,Hd=`#define TOON
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
}`,Kd=`uniform float rotation;
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
}`,$d=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:_h,alphahash_pars_fragment:vh,alphamap_fragment:xh,alphamap_pars_fragment:Mh,alphatest_fragment:yh,alphatest_pars_fragment:Sh,aomap_fragment:Eh,aomap_pars_fragment:Th,batching_pars_vertex:wh,batching_vertex:bh,begin_vertex:Ah,beginnormal_vertex:Rh,bsdfs:Ch,iridescence_fragment:Ph,bumpmap_pars_fragment:Ih,clipping_planes_fragment:Lh,clipping_planes_pars_fragment:Dh,clipping_planes_pars_vertex:Uh,clipping_planes_vertex:Nh,color_fragment:Fh,color_pars_fragment:Oh,color_pars_vertex:Bh,color_vertex:kh,common:zh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Wh,emissivemap_fragment:Xh,emissivemap_pars_fragment:qh,colorspace_fragment:Yh,colorspace_pars_fragment:Kh,envmap_fragment:$h,envmap_common_pars_fragment:Zh,envmap_pars_fragment:jh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:lu,envmap_vertex:Qh,fog_vertex:tu,fog_pars_vertex:eu,fog_fragment:nu,fog_pars_fragment:iu,gradientmap_pars_fragment:su,lightmap_pars_fragment:ru,lights_lambert_fragment:ou,lights_lambert_pars_fragment:au,lights_pars_begin:cu,lights_toon_fragment:hu,lights_toon_pars_fragment:uu,lights_phong_fragment:du,lights_phong_pars_fragment:fu,lights_physical_fragment:pu,lights_physical_pars_fragment:mu,lights_fragment_begin:gu,lights_fragment_maps:_u,lights_fragment_end:vu,logdepthbuf_fragment:xu,logdepthbuf_pars_fragment:Mu,logdepthbuf_pars_vertex:yu,logdepthbuf_vertex:Su,map_fragment:Eu,map_pars_fragment:Tu,map_particle_fragment:wu,map_particle_pars_fragment:bu,metalnessmap_fragment:Au,metalnessmap_pars_fragment:Ru,morphinstance_vertex:Cu,morphcolor_vertex:Pu,morphnormal_vertex:Iu,morphtarget_pars_vertex:Lu,morphtarget_vertex:Du,normal_fragment_begin:Uu,normal_fragment_maps:Nu,normal_pars_fragment:Fu,normal_pars_vertex:Ou,normal_vertex:Bu,normalmap_pars_fragment:ku,clearcoat_normal_fragment_begin:zu,clearcoat_normal_fragment_maps:Gu,clearcoat_pars_fragment:Vu,iridescence_pars_fragment:Hu,opaque_fragment:Wu,packing:Xu,premultiplied_alpha_fragment:qu,project_vertex:Yu,dithering_fragment:Ku,dithering_pars_fragment:$u,roughnessmap_fragment:Zu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Ju,shadowmap_pars_vertex:Qu,shadowmap_vertex:td,shadowmask_pars_fragment:ed,skinbase_vertex:nd,skinning_pars_vertex:id,skinning_vertex:sd,skinnormal_vertex:rd,specularmap_fragment:od,specularmap_pars_fragment:ad,tonemapping_fragment:cd,tonemapping_pars_fragment:ld,transmission_fragment:hd,transmission_pars_fragment:ud,uv_pars_fragment:dd,uv_pars_vertex:fd,uv_vertex:pd,worldpos_vertex:md,background_vert:gd,background_frag:_d,backgroundCube_vert:vd,backgroundCube_frag:xd,cube_vert:Md,cube_frag:yd,depth_vert:Sd,depth_frag:Ed,distanceRGBA_vert:Td,distanceRGBA_frag:wd,equirect_vert:bd,equirect_frag:Ad,linedashed_vert:Rd,linedashed_frag:Cd,meshbasic_vert:Pd,meshbasic_frag:Id,meshlambert_vert:Ld,meshlambert_frag:Dd,meshmatcap_vert:Ud,meshmatcap_frag:Nd,meshnormal_vert:Fd,meshnormal_frag:Od,meshphong_vert:Bd,meshphong_frag:kd,meshphysical_vert:zd,meshphysical_frag:Gd,meshtoon_vert:Vd,meshtoon_frag:Hd,points_vert:Wd,points_frag:Xd,shadow_vert:qd,shadow_frag:Yd,sprite_vert:Kd,sprite_frag:$d},rt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Qe={basic:{uniforms:Te([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Te([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Te([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Te([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Te([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Te([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Te([rt.points,rt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Te([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Te([rt.common,rt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Te([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Te([rt.sprite,rt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Te([rt.common,rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Te([rt.lights,rt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Qe.physical={uniforms:Te([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const cs={r:0,b:0,g:0},On=new nn,Zd=new se;function jd(i,t,e,n,s,r,o){const a=new qt(0);let c=r===!0?0:1,l,u,d=null,f=0,p=null;function g(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?e:t).get(w)),w}function _(T){let w=!1;const y=g(T);y===null?h(a,c):y&&y.isColor&&(h(y,1),w=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,w){const y=g(w);y&&(y.isCubeTexture||y.mapping===Ps)?(u===void 0&&(u=new G(new Vt(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:vi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),On.copy(w.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Zd.makeRotationFromEuler(On)),u.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ne,(d!==y||f!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new G(new xi(2,2),new In({name:"BackgroundMaterial",uniforms:vi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(y.colorSpace)!==ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,f=y.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,w){T.getRGB(cs,Rc(i)),n.buffers.color.setClear(cs.r,cs.g,cs.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),c=w,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(a,c)},render:_,addToRenderList:m}}function Jd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,b,B,F,W){let Y=!1;const X=d(F,B,b);r!==X&&(r=X,l(r.object)),Y=p(M,F,B,W),Y&&g(M,F,B,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(M,b,B,F),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,b,B){const F=B.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let Y=W[b.id];Y===void 0&&(Y={},W[b.id]=Y);let X=Y[F];return X===void 0&&(X=f(c()),Y[F]=X),X}function f(M){const b=[],B=[],F=[];for(let W=0;W<e;W++)b[W]=0,B[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:F,object:M,attributes:{},index:null}}function p(M,b,B,F){const W=r.attributes,Y=b.attributes;let X=0;const j=B.getAttributes();for(const V in j)if(j[V].location>=0){const ot=W[V];let Mt=Y[V];if(Mt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor)),ot===void 0||ot.attribute!==Mt||Mt&&ot.data!==Mt.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function g(M,b,B,F){const W={},Y=b.attributes;let X=0;const j=B.getAttributes();for(const V in j)if(j[V].location>=0){let ot=Y[V];ot===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor));const Mt={};Mt.attribute=ot,ot&&ot.data&&(Mt.data=ot.data),W[V]=Mt,X++}r.attributes=W,r.attributesNum=X,r.index=F}function _(){const M=r.newAttributes;for(let b=0,B=M.length;b<B;b++)M[b]=0}function m(M){h(M,0)}function h(M,b){const B=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;B[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),W[M]!==b&&(i.vertexAttribDivisor(M,b),W[M]=b)}function T(){const M=r.newAttributes,b=r.enabledAttributes;for(let B=0,F=b.length;B<F;B++)b[B]!==M[B]&&(i.disableVertexAttribArray(B),b[B]=0)}function w(M,b,B,F,W,Y,X){X===!0?i.vertexAttribIPointer(M,b,B,W,Y):i.vertexAttribPointer(M,b,B,F,W,Y)}function y(M,b,B,F){_();const W=F.attributes,Y=B.getAttributes(),X=b.defaultAttributeValues;for(const j in Y){const V=Y[j];if(V.location>=0){let tt=W[j];if(tt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const ot=tt.normalized,Mt=tt.itemSize,It=t.get(tt);if(It===void 0)continue;const Kt=It.buffer,q=It.type,Q=It.bytesPerElement,dt=q===i.INT||q===i.UNSIGNED_INT||tt.gpuType===go;if(tt.isInterleavedBufferAttribute){const it=tt.data,At=it.stride,Rt=tt.offset;if(it.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)h(V.location+Ft,it.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)m(V.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Ft=0;Ft<V.locationSize;Ft++)w(V.location+Ft,Mt/V.locationSize,q,ot,At*Q,(Rt+Mt/V.locationSize*Ft)*Q,dt)}else{if(tt.isInstancedBufferAttribute){for(let it=0;it<V.locationSize;it++)h(V.location+it,tt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let it=0;it<V.locationSize;it++)m(V.location+it);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let it=0;it<V.locationSize;it++)w(V.location+it,Mt/V.locationSize,q,ot,Mt*Q,Mt/V.locationSize*it*Q,dt)}}else if(X!==void 0){const ot=X[j];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(V.location,ot);break;case 3:i.vertexAttrib3fv(V.location,ot);break;case 4:i.vertexAttrib4fv(V.location,ot);break;default:i.vertexAttrib1fv(V.location,ot)}}}}T()}function N(){L();for(const M in n){const b=n[M];for(const B in b){const F=b[B];for(const W in F)u(F[W].object),delete F[W];delete b[B]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const B in b){const F=b[B];for(const W in F)u(F[W].object),delete F[W];delete b[B]}delete n[M.id]}function A(M){for(const b in n){const B=n[b];if(B[M.id]===void 0)continue;const F=B[M.id];for(const W in F)u(F[W].object),delete F[W];delete B[M.id]}}function L(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Qd(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function a(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];e.update(p,n,1)}function c(l,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Ze&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==fn&&!L)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:N,maxSamples:R}}function ef(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new wn,a=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const T=r?0:n,w=T*4;let y=h.clippingState||null;c.value=y,y=u(g,f,w,p);for(let N=0;N!==w;++N)y[N]=e[N];h.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const h=p+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let w=0,y=p;w!==_;++w,y+=4)o.copy(d[w]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function nf(i){let t=new WeakMap;function e(o,a){return a===Rr?o.mapping=pi:a===Cr&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Rr||a===Cr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fh(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Lc extends Cc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const li=4,ma=[.125,.215,.35,.446,.526,.582],Gn=20,ar=new Lc,ga=new qt;let cr=null,lr=0,hr=0,ur=!1;const kn=(1+Math.sqrt(5))/2,oi=1/kn,_a=[new I(-kn,oi,0),new I(kn,oi,0),new I(-oi,0,kn),new I(oi,0,kn),new I(0,kn,-oi),new I(0,kn,oi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class va{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){cr=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cr,lr,hr),this._renderer.xr.enabled=ur,t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cr=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),hr=this._renderer.getActiveMipmapLevel(),ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Bi,format:Ze,colorSpace:Mi,depthBuffer:!1},s=xa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sf(r)),this._blurMaterial=rf(r,t,e)}return s}_compileMaterial(t){const e=new G(this._lodPlanes[0],t);this._renderer.compile(e,ar)}_sceneToCubeUV(t,e,n,s){const a=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ga),u.toneMapping=Cn,u.autoClear=!1;const p=new Ye({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new G(new Vt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ga),_=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):T===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const w=this._cubeSize;ls(s,T*w,h>2?w:0,w,w),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===pi||t.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new G(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ls(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_a[(s-r-1)%_a.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new G(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const h=[];let T=0;for(let A=0;A<Gn;++A){const L=A/_,S=Math.exp(-L*L/2);h.push(S),A===0?T+=S:A<m&&(T+=2*S)}for(let A=0;A<h.length;A++)h[A]=h[A]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const y=this._sizeLods[s],N=3*y*(s>w-li?s-w+li:0),R=4*(this._cubeSize-y);ls(e,N,R,3*y,2*y),c.setRenderTarget(e),c.render(d,ar)}}function sf(i){const t=[],e=[],n=[];let s=i;const r=i-li+1+ma.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-li?c=ma[o-i+li-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,T=new Float32Array(_*g*p),w=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,L=R>2?0:-1,S=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];T.set(S,_*g*R),w.set(f,m*g*R);const M=[R,R,R,R,R,R];y.set(M,h*g*R)}const N=new be;N.setAttribute("position",new ze(T,_)),N.setAttribute("uv",new ze(w,m)),N.setAttribute("faceIndex",new ze(y,h)),t.push(N),s>li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xa(i,t,e){const n=new Xn(i,t,e);return n.texture.mapping=Ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function rf(i,t,e){const n=new Float32Array(Gn),s=new I(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ma(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ya(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function wo(){return`

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
	`}function of(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Rr||c===Cr,u=c===pi||c===mi;if(l||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new va(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new va(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function af(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ui("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cf(i,t,e,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let w=0,y=T.length;w<y;w+=3){const N=T[w+0],R=T[w+1],A=T[w+2];f.push(N,R,R,A,A,N)}}else if(g!==void 0){const T=g.array;_=g.version;for(let w=0,y=T.length/3-1;w<y;w+=3){const N=w+0,R=w+1,A=w+2;f.push(N,R,R,A,A,N)}}else return;const m=new(Sc(f)?Ac:bc)(f,1);m.version=_;const h=r.get(d);h&&t.remove(h),r.set(d,m)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function lf(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];e.update(m,n,1)}function d(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)l(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let h=0;for(let T=0;T<g;T++)h+=p[T]*_[T];e.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function uf(i,t,e){const n=new WeakMap,s=new ie;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let N=a.attributes.position.count*y,R=1;N>t.maxTextureSize&&(R=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const A=new Float32Array(N*R*4*d),L=new Tc(A,N,R,d);L.type=fn,L.needsUpdate=!0;const S=y*4;for(let b=0;b<d;b++){const B=h[b],F=T[b],W=w[b],Y=N*R*4*b;for(let X=0;X<B.count;X++){const j=X*S;g===!0&&(s.fromBufferAttribute(B,X),A[Y+j+0]=s.x,A[Y+j+1]=s.y,A[Y+j+2]=s.z,A[Y+j+3]=0),_===!0&&(s.fromBufferAttribute(F,X),A[Y+j+4]=s.x,A[Y+j+5]=s.y,A[Y+j+6]=s.z,A[Y+j+7]=0),m===!0&&(s.fromBufferAttribute(W,X),A[Y+j+8]=s.x,A[Y+j+9]=s.y,A[Y+j+10]=s.z,A[Y+j+11]=W.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Wt(N,R)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function df(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Dc extends we{constructor(t,e,n,s,r,o,a,c,l,u=ui){if(u!==ui&&u!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ui&&(n=Wn),n===void 0&&u===_i&&(n=gi),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:je,this.minFilter=c!==void 0?c:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uc=new we,Sa=new Dc(1,1),Nc=new Tc,Fc=new jl,Oc=new Pc,Ea=[],Ta=[],wa=new Float32Array(16),ba=new Float32Array(9),Aa=new Float32Array(4);function Ei(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ea[s];if(r===void 0&&(r=new Float32Array(s),Ea[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ds(i,t){let e=Ta[t];e===void 0&&(e=new Int32Array(t),Ta[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ff(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function mf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function _f(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Aa.set(n),i.uniformMatrix2fv(this.addr,!1,Aa),xe(e,n)}}function vf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;ba.set(n),i.uniformMatrix3fv(this.addr,!1,ba),xe(e,n)}}function xf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;wa.set(n),i.uniformMatrix4fv(this.addr,!1,wa),xe(e,n)}}function Mf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function yf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function Sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function Ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function Tf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function Rf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sa.compareFunction=yc,r=Sa):r=Uc,e.setTexture2D(t||r,s)}function Cf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Fc,s)}function Pf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Oc,s)}function If(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nc,s)}function Lf(i){switch(i){case 5126:return ff;case 35664:return pf;case 35665:return mf;case 35666:return gf;case 35674:return _f;case 35675:return vf;case 35676:return xf;case 5124:case 35670:return Mf;case 35667:case 35671:return yf;case 35668:case 35672:return Sf;case 35669:case 35673:return Ef;case 5125:return Tf;case 36294:return wf;case 36295:return bf;case 36296:return Af;case 35678:case 36198:case 36298:case 36306:case 35682:return Rf;case 35679:case 36299:case 36307:return Cf;case 35680:case 36300:case 36308:case 36293:return Pf;case 36289:case 36303:case 36311:case 36292:return If}}function Df(i,t){i.uniform1fv(this.addr,t)}function Uf(i,t){const e=Ei(t,this.size,2);i.uniform2fv(this.addr,e)}function Nf(i,t){const e=Ei(t,this.size,3);i.uniform3fv(this.addr,e)}function Ff(i,t){const e=Ei(t,this.size,4);i.uniform4fv(this.addr,e)}function Of(i,t){const e=Ei(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Bf(i,t){const e=Ei(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function kf(i,t){const e=Ei(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function zf(i,t){i.uniform1iv(this.addr,t)}function Gf(i,t){i.uniform2iv(this.addr,t)}function Vf(i,t){i.uniform3iv(this.addr,t)}function Hf(i,t){i.uniform4iv(this.addr,t)}function Wf(i,t){i.uniform1uiv(this.addr,t)}function Xf(i,t){i.uniform2uiv(this.addr,t)}function qf(i,t){i.uniform3uiv(this.addr,t)}function Yf(i,t){i.uniform4uiv(this.addr,t)}function Kf(i,t,e){const n=this.cache,s=t.length,r=Ds(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Uc,r[o])}function $f(i,t,e){const n=this.cache,s=t.length,r=Ds(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Fc,r[o])}function Zf(i,t,e){const n=this.cache,s=t.length,r=Ds(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Oc,r[o])}function jf(i,t,e){const n=this.cache,s=t.length,r=Ds(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nc,r[o])}function Jf(i){switch(i){case 5126:return Df;case 35664:return Uf;case 35665:return Nf;case 35666:return Ff;case 35674:return Of;case 35675:return Bf;case 35676:return kf;case 5124:case 35670:return zf;case 35667:case 35671:return Gf;case 35668:case 35672:return Vf;case 35669:case 35673:return Hf;case 5125:return Wf;case 36294:return Xf;case 36295:return qf;case 36296:return Yf;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Zf;case 36289:case 36303:case 36311:case 36292:return jf}}class Qf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Lf(e.type)}}class tp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jf(e.type)}}class ep{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const dr=/(\w+)(\])?(\[|\.)?/g;function Ra(i,t){i.seq.push(t),i.map[t.id]=t}function np(i,t,e){const n=i.name,s=n.length;for(dr.lastIndex=0;;){const r=dr.exec(n),o=dr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ra(e,l===void 0?new Qf(a,i,t):new tp(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ep(a),Ra(e,d)),e=d}}}class Ss{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);np(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ca(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ip=37297;let sp=0;function rp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Pa=new kt;function op(i){Zt._getMatrix(Pa,Zt.workingColorSpace,i);const t=`mat3( ${Pa.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Is:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ia(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+rp(i.getShaderSource(t),o)}else return s}function ap(i,t){const e=op(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cp(i,t){let e;switch(t){case wl:e="Linear";break;case bl:e="Reinhard";break;case Al:e="Cineon";break;case cc:e="ACESFilmic";break;case Cl:e="AgX";break;case Pl:e="Neutral";break;case Rl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hs=new I;function lp(){Zt.getLuminanceCoefficients(hs);const i=hs.x.toFixed(4),t=hs.y.toFixed(4),e=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function up(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ni(i){return i!==""}function La(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Da(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ro(i){return i.replace(fp,mp)}const pp=new Map;function mp(i,t){let e=Gt[t];if(e===void 0){const n=pp.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ro(e)}const gp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ua(i){return i.replace(gp,_p)}function _p(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Na(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function vp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(t="SHADOWMAP_TYPE_VSM"),t}function xp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:t="ENVMAP_TYPE_CUBE";break;case Ps:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Mp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function yp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ac:t="ENVMAP_BLENDING_MULTIPLY";break;case El:t="ENVMAP_BLENDING_MIX";break;case Tl:t="ENVMAP_BLENDING_ADD";break}return t}function Sp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ep(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=vp(e),l=xp(e),u=Mp(e),d=yp(e),f=Sp(e),p=hp(e),g=up(r),_=s.createProgram();let m,h,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ni).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ni).join(`
`),h.length>0&&(h+=`
`)):(m=[Na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),h=[Na(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?cp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,ap("linearToOutputTexel",e.outputColorSpace),lp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),o=ro(o),o=La(o,e),o=Da(o,e),a=ro(a),a=La(a,e),a=Da(a,e),o=Ua(o),a=Ua(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const w=T+m+o,y=T+h+a,N=Ca(s,s.VERTEX_SHADER,w),R=Ca(s,s.FRAGMENT_SHADER,y);s.attachShader(_,N),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(b){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(N).trim(),W=s.getShaderInfoLog(R).trim();let Y=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,N,R);else{const j=Ia(s,N,"vertex"),V=Ia(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+B+`
`+j+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||W==="")&&(X=!1);X&&(b.diagnostics={runnable:Y,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:h}})}s.deleteShader(N),s.deleteShader(R),L=new Ss(s,_),S=dp(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,ip)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=R,this}let Tp=0;class wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bp(t),e.set(t,n)),n}}class bp{constructor(t){this.id=Tp++,this.code=t,this.usedTimes=0}}function Ap(i,t,e,n,s,r,o){const a=new Eo,c=new wp,l=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,b,B,F){const W=B.fog,Y=F.geometry,X=S.isMeshStandardMaterial?B.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),V=j&&j.mapping===Ps?j.image.height:null,tt=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ot=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mt=ot!==void 0?ot.length:0;let It=0;Y.morphAttributes.position!==void 0&&(It=1),Y.morphAttributes.normal!==void 0&&(It=2),Y.morphAttributes.color!==void 0&&(It=3);let Kt,q,Q,dt;if(tt){const ee=Qe[tt];Kt=ee.vertexShader,q=ee.fragmentShader}else Kt=S.vertexShader,q=S.fragmentShader,c.update(S),Q=c.getVertexShaderID(S),dt=c.getFragmentShaderID(S);const it=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Rt=F.isInstancedMesh===!0,Ft=F.isBatchedMesh===!0,jt=!!S.map,Pt=!!S.matcap,ae=!!j,P=!!S.aoMap,fe=!!S.lightMap,gt=!!S.bumpMap,xt=!!S.normalMap,ft=!!S.displacementMap,Ht=!!S.emissiveMap,st=!!S.metalnessMap,E=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,$=S.dispersion>0,J=S.iridescence>0,K=S.sheen>0,Tt=S.transmission>0,ct=v&&!!S.anisotropyMap,mt=O&&!!S.clearcoatMap,$t=O&&!!S.clearcoatNormalMap,et=O&&!!S.clearcoatRoughnessMap,_t=J&&!!S.iridescenceMap,Ct=J&&!!S.iridescenceThicknessMap,Lt=K&&!!S.sheenColorMap,vt=K&&!!S.sheenRoughnessMap,Yt=!!S.specularMap,zt=!!S.specularColorMap,re=!!S.specularIntensityMap,C=Tt&&!!S.transmissionMap,at=Tt&&!!S.thicknessMap,H=!!S.gradientMap,Z=!!S.alphaMap,ut=S.alphaTest>0,lt=!!S.alphaHash,Ot=!!S.extensions;let ue=Cn;S.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ue=i.toneMapping);const ye={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:Kt,fragmentShader:q,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&F._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&F.instanceColor!==null,instancingMorph:Rt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Mi,alphaToCoverage:!!S.alphaToCoverage,map:jt,matcap:Pt,envMap:ae,envMapMode:ae&&j.mapping,envMapCubeUVHeight:V,aoMap:P,lightMap:fe,bumpMap:gt,normalMap:xt,displacementMap:f&&ft,emissiveMap:Ht,normalMapObjectSpace:xt&&S.normalMapType===Ul,normalMapTangentSpace:xt&&S.normalMapType===Mc,metalnessMap:st,roughnessMap:E,anisotropy:v,anisotropyMap:ct,clearcoat:O,clearcoatMap:mt,clearcoatNormalMap:$t,clearcoatRoughnessMap:et,dispersion:$,iridescence:J,iridescenceMap:_t,iridescenceThicknessMap:Ct,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:Yt,specularColorMap:zt,specularIntensityMap:re,transmission:Tt,transmissionMap:C,thicknessMap:at,gradientMap:H,opaque:S.transparent===!1&&S.blending===hi&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:lt,combine:S.combine,mapUv:jt&&_(S.map.channel),aoMapUv:P&&_(S.aoMap.channel),lightMapUv:fe&&_(S.lightMap.channel),bumpMapUv:gt&&_(S.bumpMap.channel),normalMapUv:xt&&_(S.normalMap.channel),displacementMapUv:ft&&_(S.displacementMap.channel),emissiveMapUv:Ht&&_(S.emissiveMap.channel),metalnessMapUv:st&&_(S.metalnessMap.channel),roughnessMapUv:E&&_(S.roughnessMap.channel),anisotropyMapUv:ct&&_(S.anisotropyMap.channel),clearcoatMapUv:mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(S.sheenRoughnessMap.channel),specularMapUv:Yt&&_(S.specularMap.channel),specularColorMapUv:zt&&_(S.specularColorMap.channel),specularIntensityMapUv:re&&_(S.specularIntensityMap.channel),transmissionMapUv:C&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:Z&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(xt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(jt||Z),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:At,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:It,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:jt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ne,decodeVideoTextureEmissive:Ht&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ke,flipSided:S.side===Ie,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ot&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&S.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function h(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)M.push(b),M.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(T(M,S),w(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=g[S.type];let b;if(M){const B=Qe[M];b=lh.clone(B.uniforms)}else b=S.uniforms;return b}function N(S,M){let b;for(let B=0,F=u.length;B<F;B++){const W=u[B];if(W.cacheKey===M){b=W,++b.usedTimes;break}}return b===void 0&&(b=new Ep(i,M,S,r),u.push(b)),b}function R(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function A(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:N,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:L}}function Rp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Cp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Oa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,p,g,_,m){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),t++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function c(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function l(d,f){e.length>1&&e.sort(d||Cp),n.length>1&&n.sort(f||Fa),s.length>1&&s.sort(f||Fa)}function u(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Pp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Oa,i.set(n,[o])):s>=r.length?(o=new Oa,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ip(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new qt};break;case"SpotLight":e={position:new I,direction:new I,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Lp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Dp=0;function Up(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Np(i){const t=new Ip,e=Lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new se,o=new se;function a(l){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,T=0,w=0,y=0,N=0,R=0,A=0;l.sort(Up);for(let S=0,M=l.length;S<M;S++){const b=l[S],B=b.color,F=b.intensity,W=b.distance,Y=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=B.r*F,d+=B.g*F,f+=B.b*F;else if(b.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(b.sh.coefficients[X],F);A++}else if(b.isDirectionalLight){const X=t.get(b);if(X.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const j=b.shadow,V=e.get(b);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=b.shadow.matrix,T++}n.directional[p]=X,p++}else if(b.isSpotLight){const X=t.get(b);X.position.setFromMatrixPosition(b.matrixWorld),X.color.copy(B).multiplyScalar(F),X.distance=W,X.coneCos=Math.cos(b.angle),X.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),X.decay=b.decay,n.spot[_]=X;const j=b.shadow;if(b.map&&(n.spotLightMap[N]=b.map,N++,j.updateMatrices(b),b.castShadow&&R++),n.spotLightMatrix[_]=j.matrix,b.castShadow){const V=e.get(b);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Y,y++}_++}else if(b.isRectAreaLight){const X=t.get(b);X.color.copy(B).multiplyScalar(F),X.halfWidth.set(b.width*.5,0,0),X.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=X,m++}else if(b.isPointLight){const X=t.get(b);if(X.color.copy(b.color).multiplyScalar(b.intensity),X.distance=b.distance,X.decay=b.decay,b.castShadow){const j=b.shadow,V=e.get(b);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=b.shadow.matrix,w++}n.point[g]=X,g++}else if(b.isHemisphereLight){const X=t.get(b);X.skyColor.copy(b.color).multiplyScalar(F),X.groundColor.copy(b.groundColor).multiplyScalar(F),n.hemi[h]=X,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==h||L.numDirectionalShadows!==T||L.numPointShadows!==w||L.numSpotShadows!==y||L.numSpotMaps!==N||L.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=h,L.numDirectionalShadows=T,L.numPointShadows=w,L.numSpotShadows=y,L.numSpotMaps=N,L.numLightProbes=A,n.version=Dp++)}function c(l,u){let d=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,T=l.length;h<T;h++){const w=l[h];if(w.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(w.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ba(i){const t=new Np(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Fp(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ba(i),t.set(s,[a])):r>=o.length?(a=new Ba(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Op extends Si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ll,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bp extends Si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kp=`void main() {
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
}`;function Gp(i,t,e){let n=new To;const s=new Wt,r=new Wt,o=new ie,a=new Op({depthPacking:Dl}),c=new Bp,l={},u=e.maxTextureSize,d={[Pn]:Ie,[Ie]:Pn,[Ke]:Ke},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:kp,fragmentShader:zp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new G(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let h=this.type;this.render=function(R,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Rn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=h!==dn&&this.type===dn,W=h===dn&&this.type!==dn;for(let Y=0,X=R.length;Y<X;Y++){const j=R[Y],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const tt=V.getFrameExtents();if(s.multiply(tt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/tt.x),s.x=r.x*tt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/tt.y),s.y=r.y*tt.y,V.mapSize.y=r.y)),V.map===null||F===!0||W===!0){const Mt=this.type!==dn?{minFilter:je,magFilter:je}:{};V.map!==null&&V.map.dispose(),V.map=new Xn(s.x,s.y,Mt),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ot=V.getViewportCount();for(let Mt=0;Mt<ot;Mt++){const It=V.getViewport(Mt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),B.viewport(o),V.updateMatrices(j,Mt),n=V.getFrustum(),y(A,L,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===dn&&T(V,L),V.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,b)};function T(R,A){const L=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,L,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,L,p,_,null)}function w(R,A,L,S){let M=null;const b=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(b!==void 0)M=b;else if(M=L.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=M.uuid,F=A.uuid;let W=l[B];W===void 0&&(W={},l[B]=W);let Y=W[F];Y===void 0&&(Y=M.clone(),W[F]=Y,A.addEventListener("dispose",N)),M=Y}if(M.visible=A.visible,M.wireframe=A.wireframe,S===dn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=i.properties.get(M);B.light=L}return M}function y(R,A,L,S,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===dn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const F=t.update(R),W=R.material;if(Array.isArray(W)){const Y=F.groups;for(let X=0,j=Y.length;X<j;X++){const V=Y[X],tt=W[V.materialIndex];if(tt&&tt.visible){const ot=w(R,tt,S,M);R.onBeforeShadow(i,R,A,L,F,ot,V),i.renderBufferDirect(L,null,F,ot,R,V),R.onAfterShadow(i,R,A,L,F,ot,V)}}}else if(W.visible){const Y=w(R,W,S,M);R.onBeforeShadow(i,R,A,L,F,Y,null),i.renderBufferDirect(L,null,F,Y,R,null),R.onAfterShadow(i,R,A,L,F,Y,null)}}const B=R.children;for(let F=0,W=B.length;F<W;F++)y(B[F],A,L,S,M)}function N(R){R.target.removeEventListener("dispose",N);for(const L in l){const S=l[L],M=R.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Vp={[yr]:Sr,[Er]:br,[Tr]:Ar,[fi]:wr,[Sr]:yr,[br]:Er,[Ar]:Tr,[wr]:fi};function Hp(i,t){function e(){let C=!1;const at=new ie;let H=null;const Z=new ie(0,0,0,0);return{setMask:function(ut){H!==ut&&!C&&(i.colorMask(ut,ut,ut,ut),H=ut)},setLocked:function(ut){C=ut},setClear:function(ut,lt,Ot,ue,ye){ye===!0&&(ut*=ue,lt*=ue,Ot*=ue),at.set(ut,lt,Ot,ue),Z.equals(at)===!1&&(i.clearColor(ut,lt,Ot,ue),Z.copy(at))},reset:function(){C=!1,H=null,Z.set(-1,0,0,0)}}}function n(){let C=!1,at=!1,H=null,Z=null,ut=null;return{setReversed:function(lt){if(at!==lt){const Ot=t.get("EXT_clip_control");at?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const ue=ut;ut=null,this.setClear(ue)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?it(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(lt){H!==lt&&!C&&(i.depthMask(lt),H=lt)},setFunc:function(lt){if(at&&(lt=Vp[lt]),Z!==lt){switch(lt){case yr:i.depthFunc(i.NEVER);break;case Sr:i.depthFunc(i.ALWAYS);break;case Er:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case Tr:i.depthFunc(i.EQUAL);break;case wr:i.depthFunc(i.GEQUAL);break;case br:i.depthFunc(i.GREATER);break;case Ar:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=lt}},setLocked:function(lt){C=lt},setClear:function(lt){ut!==lt&&(at&&(lt=1-lt),i.clearDepth(lt),ut=lt)},reset:function(){C=!1,H=null,Z=null,ut=null,at=!1}}}function s(){let C=!1,at=null,H=null,Z=null,ut=null,lt=null,Ot=null,ue=null,ye=null;return{setTest:function(ee){C||(ee?it(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(ee){at!==ee&&!C&&(i.stencilMask(ee),at=ee)},setFunc:function(ee,Ge,rn){(H!==ee||Z!==Ge||ut!==rn)&&(i.stencilFunc(ee,Ge,rn),H=ee,Z=Ge,ut=rn)},setOp:function(ee,Ge,rn){(lt!==ee||Ot!==Ge||ue!==rn)&&(i.stencilOp(ee,Ge,rn),lt=ee,Ot=Ge,ue=rn)},setLocked:function(ee){C=ee},setClear:function(ee){ye!==ee&&(i.clearStencil(ee),ye=ee)},reset:function(){C=!1,at=null,H=null,Z=null,ut=null,lt=null,Ot=null,ue=null,ye=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,T=null,w=null,y=null,N=null,R=null,A=new qt(0,0,0),L=0,S=!1,M=null,b=null,B=null,F=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=j>=2);let tt=null,ot={};const Mt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Kt=new ie().fromArray(Mt),q=new ie().fromArray(It);function Q(C,at,H,Z){const ut=new Uint8Array(4),lt=i.createTexture();i.bindTexture(C,lt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<H;Ot++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(at+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return lt}const dt={};dt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),dt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),dt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(fi),gt(!1),xt(Vo),it(i.CULL_FACE),P(Rn);function it(C){u[C]!==!0&&(i.enable(C),u[C]=!0)}function At(C){u[C]!==!1&&(i.disable(C),u[C]=!1)}function Rt(C,at){return d[C]!==at?(i.bindFramebuffer(C,at),d[C]=at,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Ft(C,at){let H=p,Z=!1;if(C){H=f.get(at),H===void 0&&(H=[],f.set(at,H));const ut=C.textures;if(H.length!==ut.length||H[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ot=ut.length;lt<Ot;lt++)H[lt]=i.COLOR_ATTACHMENT0+lt;H.length=ut.length,Z=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,Z=!0);Z&&i.drawBuffers(H)}function jt(C){return g!==C?(i.useProgram(C),g=C,!0):!1}const Pt={[zn]:i.FUNC_ADD,[ol]:i.FUNC_SUBTRACT,[al]:i.FUNC_REVERSE_SUBTRACT};Pt[cl]=i.MIN,Pt[ll]=i.MAX;const ae={[hl]:i.ZERO,[ul]:i.ONE,[dl]:i.SRC_COLOR,[xr]:i.SRC_ALPHA,[vl]:i.SRC_ALPHA_SATURATE,[gl]:i.DST_COLOR,[pl]:i.DST_ALPHA,[fl]:i.ONE_MINUS_SRC_COLOR,[Mr]:i.ONE_MINUS_SRC_ALPHA,[_l]:i.ONE_MINUS_DST_COLOR,[ml]:i.ONE_MINUS_DST_ALPHA,[xl]:i.CONSTANT_COLOR,[Ml]:i.ONE_MINUS_CONSTANT_COLOR,[yl]:i.CONSTANT_ALPHA,[Sl]:i.ONE_MINUS_CONSTANT_ALPHA};function P(C,at,H,Z,ut,lt,Ot,ue,ye,ee){if(C===Rn){_===!0&&(At(i.BLEND),_=!1);return}if(_===!1&&(it(i.BLEND),_=!0),C!==rl){if(C!==m||ee!==S){if((h!==zn||y!==zn)&&(i.blendEquation(i.FUNC_ADD),h=zn,y=zn),ee)switch(C){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFunc(i.ONE,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,w=null,N=null,R=null,A.set(0,0,0),L=0,m=C,S=ee}return}ut=ut||at,lt=lt||H,Ot=Ot||Z,(at!==h||ut!==y)&&(i.blendEquationSeparate(Pt[at],Pt[ut]),h=at,y=ut),(H!==T||Z!==w||lt!==N||Ot!==R)&&(i.blendFuncSeparate(ae[H],ae[Z],ae[lt],ae[Ot]),T=H,w=Z,N=lt,R=Ot),(ue.equals(A)===!1||ye!==L)&&(i.blendColor(ue.r,ue.g,ue.b,ye),A.copy(ue),L=ye),m=C,S=!1}function fe(C,at){C.side===Ke?At(i.CULL_FACE):it(i.CULL_FACE);let H=C.side===Ie;at&&(H=!H),gt(H),C.blending===hi&&C.transparent===!1?P(Rn):P(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),r.setMask(C.colorWrite);const Z=C.stencilWrite;a.setTest(Z),Z&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ht(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(C){M!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),M=C)}function xt(C){C!==il?(it(i.CULL_FACE),C!==b&&(C===Vo?i.cullFace(i.BACK):C===sl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),b=C}function ft(C){C!==B&&(X&&i.lineWidth(C),B=C)}function Ht(C,at,H){C?(it(i.POLYGON_OFFSET_FILL),(F!==at||W!==H)&&(i.polygonOffset(at,H),F=at,W=H)):At(i.POLYGON_OFFSET_FILL)}function st(C){C?it(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function E(C){C===void 0&&(C=i.TEXTURE0+Y-1),tt!==C&&(i.activeTexture(C),tt=C)}function v(C,at,H){H===void 0&&(tt===null?H=i.TEXTURE0+Y-1:H=tt);let Z=ot[H];Z===void 0&&(Z={type:void 0,texture:void 0},ot[H]=Z),(Z.type!==C||Z.texture!==at)&&(tt!==H&&(i.activeTexture(H),tt=H),i.bindTexture(C,at||dt[C]),Z.type=C,Z.texture=at)}function O(){const C=ot[tt];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Lt(C){Kt.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Kt.copy(C))}function vt(C){q.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),q.copy(C))}function Yt(C,at){let H=l.get(at);H===void 0&&(H=new WeakMap,l.set(at,H));let Z=H.get(C);Z===void 0&&(Z=i.getUniformBlockIndex(at,C.name),H.set(C,Z))}function zt(C,at){const Z=l.get(at).get(C);c.get(at)!==Z&&(i.uniformBlockBinding(at,Z,C.__bindingPointIndex),c.set(at,Z))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},tt=null,ot={},d={},f=new WeakMap,p=[],g=null,_=!1,m=null,h=null,T=null,w=null,y=null,N=null,R=null,A=new qt(0,0,0),L=0,S=!1,M=null,b=null,B=null,F=null,W=null,Kt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:At,bindFramebuffer:Rt,drawBuffers:Ft,useProgram:jt,setBlending:P,setMaterial:fe,setFlipSided:gt,setCullFace:xt,setLineWidth:ft,setPolygonOffset:Ht,setScissorTest:st,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:_t,texImage3D:Ct,updateUBOMapping:Yt,uniformBlockBinding:zt,texStorage2D:$t,texStorage3D:et,texSubImage2D:K,texSubImage3D:Tt,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Lt,viewport:vt,reset:re}}function ka(i,t,e,n){const s=Wp(n);switch(e){case fc:return i*t;case mc:return i*t;case gc:return i*t*2;case _c:return i*t/s.components*s.byteLength;case xo:return i*t/s.components*s.byteLength;case vc:return i*t*2/s.components*s.byteLength;case Mo:return i*t*2/s.components*s.byteLength;case pc:return i*t*3/s.components*s.byteLength;case Ze:return i*t*4/s.components*s.byteLength;case yo:return i*t*4/s.components*s.byteLength;case _s:case vs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xs:case Ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dr:case Nr:return Math.max(i,16)*Math.max(t,8)/4;case Lr:case Ur:return Math.max(i,8)*Math.max(t,8)/2;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Wr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $r:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Zr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case jr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ys:case Qr:case to:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xc:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case no:case io:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(i){switch(i){case gn:case hc:return{byteLength:1,components:1};case Oi:case uc:case Bi:return{byteLength:2,components:1};case _o:case vo:return{byteLength:2,components:4};case Wn:case go:case fn:return{byteLength:4,components:1};case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Xp(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):Cs("canvas")}function _(E,v,O){let $=1;const J=st(E);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const K=Math.floor($*J.width),Tt=Math.floor($*J.height);d===void 0&&(d=g(K,Tt));const ct=v?g(K,Tt):d;return ct.width=K,ct.height=Tt,ct.getContext("2d").drawImage(E,0,0,K,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+Tt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),E;return E}function m(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(E,v,O,$,J=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=v;if(v===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),v===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGB8UI),O===i.UNSIGNED_SHORT&&(K=i.RGB16UI),O===i.UNSIGNED_INT&&(K=i.RGB32UI),O===i.BYTE&&(K=i.RGB8I),O===i.SHORT&&(K=i.RGB16I),O===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),O===i.UNSIGNED_INT&&(K=i.RGBA32UI),O===i.BYTE&&(K=i.RGBA8I),O===i.SHORT&&(K=i.RGBA16I),O===i.INT&&(K=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),v===i.RGBA){const Tt=J?Is:Zt.getTransfer($);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=Tt===ne?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(E,v){let O;return E?v===null||v===Wn||v===gi?O=i.DEPTH24_STENCIL8:v===fn?O=i.DEPTH32F_STENCIL8:v===Oi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wn||v===gi?O=i.DEPTH_COMPONENT24:v===fn?O=i.DEPTH_COMPONENT32F:v===Oi&&(O=i.DEPTH_COMPONENT16),O}function N(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==je&&E.minFilter!==tn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function R(E){const v=E.target;v.removeEventListener("dispose",R),L(v),v.isVideoTexture&&u.delete(v)}function A(E){const v=E.target;v.removeEventListener("dispose",A),M(v)}function L(E){const v=n.get(E);if(v.__webglInit===void 0)return;const O=E.source,$=f.get(O);if($){const J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(E),Object.keys($).length===0&&f.delete(O)}n.remove(E)}function S(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const O=E.source,$=f.get(O);delete $[v.__cacheKey],o.memory.textures--}function M(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[$][J]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=E.textures;for(let $=0,J=O.length;$<J;$++){const K=n.get(O[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(E)}let b=0;function B(){b=0}function F(){const E=b;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),b+=1,E}function W(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Y(E,v){const O=n.get(E);if(E.isVideoTexture&&ft(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,E,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function X(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function j(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function V(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Q(O,E,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const tt={[Pr]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},ot={[je]:i.NEAREST,[Il]:i.NEAREST_MIPMAP_NEAREST,[Wi]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Bs]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},Mt={[Nl]:i.NEVER,[Gl]:i.ALWAYS,[Fl]:i.LESS,[yc]:i.LEQUAL,[Ol]:i.EQUAL,[zl]:i.GEQUAL,[Bl]:i.GREATER,[kl]:i.NOTEQUAL};function It(E,v){if(v.type===fn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===tn||v.magFilter===Bs||v.magFilter===Wi||v.magFilter===Hn||v.minFilter===tn||v.minFilter===Bs||v.minFilter===Wi||v.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,tt[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,tt[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,tt[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ot[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ot[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===je||v.minFilter!==Wi&&v.minFilter!==Hn||v.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Kt(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",R));const $=v.source;let J=f.get($);J===void 0&&(J={},f.set($,J));const K=W(v);if(K!==E.__cacheKey){J[K]===void 0&&(J[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[K].usedTimes++;const Tt=J[E.__cacheKey];Tt!==void 0&&(J[E.__cacheKey].usedTimes--,Tt.usedTimes===0&&S(v)),E.__cacheKey=K,E.__webglTexture=J[K].texture}return O}function q(E,v,O){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const J=Kt(E,v),K=v.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+O);const Tt=n.get(K);if(K.version!==Tt.__version||J===!0){e.activeTexture(i.TEXTURE0+O);const ct=Zt.getPrimaries(Zt.workingColorSpace),mt=v.colorSpace===An?null:Zt.getPrimaries(v.colorSpace),$t=v.colorSpace===An||ct===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let et=_(v.image,!1,s.maxTextureSize);et=Ht(v,et);const _t=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type);let Lt=w(v.internalFormat,_t,Ct,v.colorSpace,v.isVideoTexture);It($,v);let vt;const Yt=v.mipmaps,zt=v.isVideoTexture!==!0,re=Tt.__version===void 0||J===!0,C=K.dataReady,at=N(v,et);if(v.isDepthTexture)Lt=y(v.format===_i,v.type),re&&(zt?e.texStorage2D(i.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Lt,et.width,et.height,0,_t,Ct,null));else if(v.isDataTexture)if(Yt.length>0){zt&&re&&e.texStorage2D(i.TEXTURE_2D,at,Lt,Yt[0].width,Yt[0].height);for(let H=0,Z=Yt.length;H<Z;H++)vt=Yt[H],zt?C&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,vt.width,vt.height,_t,Ct,vt.data):e.texImage2D(i.TEXTURE_2D,H,Lt,vt.width,vt.height,0,_t,Ct,vt.data);v.generateMipmaps=!1}else zt?(re&&e.texStorage2D(i.TEXTURE_2D,at,Lt,et.width,et.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,_t,Ct,et.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,et.width,et.height,0,_t,Ct,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Lt,Yt[0].width,Yt[0].height,et.depth);for(let H=0,Z=Yt.length;H<Z;H++)if(vt=Yt[H],v.format!==Ze)if(_t!==null)if(zt){if(C)if(v.layerUpdates.size>0){const ut=ka(vt.width,vt.height,v.format,v.type);for(const lt of v.layerUpdates){const Ot=vt.data.subarray(lt*ut/vt.data.BYTES_PER_ELEMENT,(lt+1)*ut/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,lt,vt.width,vt.height,1,_t,Ot)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,vt.width,vt.height,et.depth,_t,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Lt,vt.width,vt.height,et.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,vt.width,vt.height,et.depth,_t,Ct,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,Lt,vt.width,vt.height,et.depth,0,_t,Ct,vt.data)}else{zt&&re&&e.texStorage2D(i.TEXTURE_2D,at,Lt,Yt[0].width,Yt[0].height);for(let H=0,Z=Yt.length;H<Z;H++)vt=Yt[H],v.format!==Ze?_t!==null?zt?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?C&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,vt.width,vt.height,_t,Ct,vt.data):e.texImage2D(i.TEXTURE_2D,H,Lt,vt.width,vt.height,0,_t,Ct,vt.data)}else if(v.isDataArrayTexture)if(zt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,Lt,et.width,et.height,et.depth),C)if(v.layerUpdates.size>0){const H=ka(et.width,et.height,v.format,v.type);for(const Z of v.layerUpdates){const ut=et.data.subarray(Z*H/et.data.BYTES_PER_ELEMENT,(Z+1)*H/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,_t,Ct,ut)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,_t,Ct,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,_t,Ct,et.data);else if(v.isData3DTexture)zt?(re&&e.texStorage3D(i.TEXTURE_3D,at,Lt,et.width,et.height,et.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,_t,Ct,et.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,_t,Ct,et.data);else if(v.isFramebufferTexture){if(re)if(zt)e.texStorage2D(i.TEXTURE_2D,at,Lt,et.width,et.height);else{let H=et.width,Z=et.height;for(let ut=0;ut<at;ut++)e.texImage2D(i.TEXTURE_2D,ut,Lt,H,Z,0,_t,Ct,null),H>>=1,Z>>=1}}else if(Yt.length>0){if(zt&&re){const H=st(Yt[0]);e.texStorage2D(i.TEXTURE_2D,at,Lt,H.width,H.height)}for(let H=0,Z=Yt.length;H<Z;H++)vt=Yt[H],zt?C&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,_t,Ct,vt):e.texImage2D(i.TEXTURE_2D,H,Lt,_t,Ct,vt);v.generateMipmaps=!1}else if(zt){if(re){const H=st(et);e.texStorage2D(i.TEXTURE_2D,at,Lt,H.width,H.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ct,et)}else e.texImage2D(i.TEXTURE_2D,0,Lt,_t,Ct,et);m(v)&&h($),Tt.__version=K.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Q(E,v,O){if(v.image.length!==6)return;const $=Kt(E,v),J=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const K=n.get(J);if(J.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+O);const Tt=Zt.getPrimaries(Zt.workingColorSpace),ct=v.colorSpace===An?null:Zt.getPrimaries(v.colorSpace),mt=v.colorSpace===An||Tt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const $t=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,_t=[];for(let Z=0;Z<6;Z++)!$t&&!et?_t[Z]=_(v.image[Z],!0,s.maxCubemapSize):_t[Z]=et?v.image[Z].image:v.image[Z],_t[Z]=Ht(v,_t[Z]);const Ct=_t[0],Lt=r.convert(v.format,v.colorSpace),vt=r.convert(v.type),Yt=w(v.internalFormat,Lt,vt,v.colorSpace),zt=v.isVideoTexture!==!0,re=K.__version===void 0||$===!0,C=J.dataReady;let at=N(v,Ct);It(i.TEXTURE_CUBE_MAP,v);let H;if($t){zt&&re&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Yt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){H=_t[Z].mipmaps;for(let ut=0;ut<H.length;ut++){const lt=H[ut];v.format!==Ze?Lt!==null?zt?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,lt.width,lt.height,Lt,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,lt.width,lt.height,Lt,vt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Yt,lt.width,lt.height,0,Lt,vt,lt.data)}}}else{if(H=v.mipmaps,zt&&re){H.length>0&&at++;const Z=st(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Yt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){zt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,_t[Z].width,_t[Z].height,Lt,vt,_t[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,_t[Z].width,_t[Z].height,0,Lt,vt,_t[Z].data);for(let ut=0;ut<H.length;ut++){const Ot=H[ut].image[Z].image;zt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Ot.width,Ot.height,Lt,vt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Yt,Ot.width,Ot.height,0,Lt,vt,Ot.data)}}else{zt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Lt,vt,_t[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,Lt,vt,_t[Z]);for(let ut=0;ut<H.length;ut++){const lt=H[ut];zt?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Lt,vt,lt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Yt,Lt,vt,lt.image[Z])}}}m(v)&&h(i.TEXTURE_CUBE_MAP),K.__version=J.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function dt(E,v,O,$,J,K){const Tt=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),mt=w(O.internalFormat,Tt,ct,O.colorSpace),$t=n.get(v),et=n.get(O);if(et.__renderTarget=v,!$t.__hasExternalTextures){const _t=Math.max(1,v.width>>K),Ct=Math.max(1,v.height>>K);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,K,mt,_t,Ct,v.depth,0,Tt,ct,null):e.texImage2D(J,K,mt,_t,Ct,0,Tt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),xt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,et.__webglTexture,0,gt(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,et.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,K=y(v.stencilBuffer,J),Tt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=gt(v);xt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,K,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,E)}else{const $=v.textures;for(let J=0;J<$.length;J++){const K=$[J],Tt=r.convert(K.format,K.colorSpace),ct=r.convert(K.type),mt=w(K.internalFormat,Tt,ct,K.colorSpace),$t=gt(v);O&&xt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,mt,v.width,v.height):xt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,mt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,mt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const J=$.__webglTexture,K=gt(v);if(v.depthTexture.format===ui)xt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===_i)xt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Rt(E){const v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");At(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),it(v.__webglDepthbuffer[$],E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),it(v.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(E,v,O){const $=n.get(E);v!==void 0&&dt($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Rt(E)}function jt(E){const v=E.texture,O=n.get(E),$=n.get(v);E.addEventListener("dispose",A);const J=E.textures,K=E.isWebGLCubeRenderTarget===!0,Tt=J.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,o.memory.textures++),K){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let mt=0;mt<v.mipmaps.length;mt++)O.__webglFramebuffer[ct][mt]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ct=0,mt=J.length;ct<mt;ct++){const $t=n.get(J[ct]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&xt(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const mt=J[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const $t=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),_t=w(mt.internalFormat,$t,et,mt.colorSpace,E.isXRRenderTarget===!0),Ct=gt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,_t,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),it(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),It(i.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)dt(O.__webglFramebuffer[ct][mt],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else dt(O.__webglFramebuffer[ct],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ct=0,mt=J.length;ct<mt;ct++){const $t=J[ct],et=n.get($t);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),It(i.TEXTURE_2D,$t),dt(O.__webglFramebuffer,E,$t,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m($t)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),It(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let mt=0;mt<v.mipmaps.length;mt++)dt(O.__webglFramebuffer[mt],E,v,i.COLOR_ATTACHMENT0,ct,mt);else dt(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ct,0);m(v)&&h(ct),e.unbindTexture()}E.depthBuffer&&Rt(E)}function Pt(E){const v=E.textures;for(let O=0,$=v.length;O<$;O++){const J=v[O];if(m(J)){const K=T(E),Tt=n.get(J).__webglTexture;e.bindTexture(K,Tt),h(K),e.unbindTexture()}}}const ae=[],P=[];function fe(E){if(E.samples>0){if(xt(E)===!1){const v=E.textures,O=E.width,$=E.height;let J=i.COLOR_BUFFER_BIT;const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(E),ct=v.length>1;if(ct)for(let mt=0;mt<v.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let mt=0;mt<v.length;mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[mt]);const $t=n.get(v[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,J,i.NEAREST),c===!0&&(ae.length=0,P.length=0,ae.push(i.COLOR_ATTACHMENT0+mt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ae.push(K),P.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<v.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[mt]);const $t=n.get(v[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function gt(E){return Math.min(s.maxSamples,E.samples)}function xt(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ft(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function Ht(E,v){const O=E.colorSpace,$=E.format,J=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Mi&&O!==An&&(Zt.getTransfer(O)===ne?($!==Ze||J!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function st(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=xt}function qp(i,t){function e(n,s=An){let r;const o=Zt.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===_o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hc)return i.BYTE;if(n===uc)return i.SHORT;if(n===Oi)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===Bi)return i.HALF_FLOAT;if(n===fc)return i.ALPHA;if(n===pc)return i.RGB;if(n===Ze)return i.RGBA;if(n===mc)return i.LUMINANCE;if(n===gc)return i.LUMINANCE_ALPHA;if(n===ui)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===_c)return i.RED;if(n===xo)return i.RED_INTEGER;if(n===vc)return i.RG;if(n===Mo)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===_s||n===vs||n===xs||n===Ms)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lr||n===Dr||n===Ur||n===Nr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ur)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fr||n===Or||n===Br)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fr||n===Or)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Br)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kr||n===zr||n===Gr||n===Vr||n===Hr||n===Wr||n===Xr||n===qr||n===Yr||n===Kr||n===$r||n===Zr||n===jr||n===Jr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$r)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jr)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ys||n===Qr||n===to)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ys)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===to)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===eo||n===no||n===io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ys)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===no)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Yp extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Nt extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kp={type:"move"};class fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),h=this._getHandJoint(l,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const $p=`
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

}`;class jp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new we,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:$p,fragmentShader:Zp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new G(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jp extends yi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,p=null,g=null;const _=new jp,m=e.getContextAttributes();let h=null,T=null;const w=[],y=[],N=new Wt;let R=null;const A=new Ne;A.viewport=new ie;const L=new Ne;L.viewport=new ie;const S=[A,L],M=new Yp;let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=w[q];return Q===void 0&&(Q=new fr,w[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=w[q];return Q===void 0&&(Q=new fr,w[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=w[q];return Q===void 0&&(Q=new fr,w[q]=Q),Q.getHandSpace()};function F(q){const Q=y.indexOf(q.inputSource);if(Q===-1)return;const dt=w[Q];dt!==void 0&&(dt.update(q.inputSource,q.frame,l||o),dt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Y);for(let q=0;q<w.length;q++){const Q=y[q];Q!==null&&(y[q]=null,w[q].disconnect(Q))}b=null,B=null,_.reset(),t.setRenderTarget(h),p=null,f=null,d=null,s=null,T=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Xn(p.framebufferWidth,p.framebufferHeight,{format:Ze,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,dt=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?_i:ui,dt=m.stencil?gi:Wn);const At={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new Xn(f.textureWidth,f.textureHeight,{format:Ze,type:gn,depthTexture:new Dc(f.textureWidth,f.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(q){for(let Q=0;Q<q.removed.length;Q++){const dt=q.removed[Q],it=y.indexOf(dt);it>=0&&(y[it]=null,w[it].disconnect(dt))}for(let Q=0;Q<q.added.length;Q++){const dt=q.added[Q];let it=y.indexOf(dt);if(it===-1){for(let Rt=0;Rt<w.length;Rt++)if(Rt>=y.length){y.push(dt),it=Rt;break}else if(y[Rt]===null){y[Rt]=dt,it=Rt;break}if(it===-1)break}const At=w[it];At&&At.connect(dt)}}const X=new I,j=new I;function V(q,Q,dt){X.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(dt.matrixWorld);const it=X.distanceTo(j),At=Q.projectionMatrix.elements,Rt=dt.projectionMatrix.elements,Ft=At[14]/(At[10]-1),jt=At[14]/(At[10]+1),Pt=(At[9]+1)/At[5],ae=(At[9]-1)/At[5],P=(At[8]-1)/At[0],fe=(Rt[8]+1)/Rt[0],gt=Ft*P,xt=Ft*fe,ft=it/(-P+fe),Ht=ft*-P;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ht),q.translateZ(ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),At[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const st=Ft+ft,E=jt+ft,v=gt-Ht,O=xt+(it-Ht),$=Pt*jt/E*st,J=ae*jt/E*st;q.projectionMatrix.makePerspective(v,O,$,J,st,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function tt(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,dt=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),M.near=L.near=A.near=Q,M.far=L.far=A.far=dt,(b!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),b=M.near,B=M.far),A.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,M.layers.mask=A.layers.mask|L.layers.mask;const it=q.parent,At=M.cameras;tt(M,it);for(let Rt=0;Rt<At.length;Rt++)tt(At[Rt],it);At.length===2?V(M,A,L):M.projectionMatrix.copy(A.projectionMatrix),ot(q,M,it)};function ot(q,Q,dt){dt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(dt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=so*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Mt=null;function It(q,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){const dt=u.views;p!==null&&(t.setRenderTargetFramebuffer(T,p.framebuffer),t.setRenderTarget(T));let it=!1;dt.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let Rt=0;Rt<dt.length;Rt++){const Ft=dt[Rt];let jt=null;if(p!==null)jt=p.getViewport(Ft);else{const ae=d.getViewSubImage(f,Ft);jt=ae.viewport,Rt===0&&(t.setRenderTargetTextures(T,ae.colorTexture,f.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(T))}let Pt=S[Rt];Pt===void 0&&(Pt=new Ne,Pt.layers.enable(Rt),Pt.viewport=new ie,S[Rt]=Pt),Pt.matrix.fromArray(Ft.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Ft.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(jt.x,jt.y,jt.width,jt.height),Rt===0&&(M.matrix.copy(Pt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(Pt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Rt=d.getDepthInformation(dt[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,s.renderState)}}for(let dt=0;dt<w.length;dt++){const it=y[dt],At=w[dt];it!==null&&At!==void 0&&At.update(it,Q,l||o)}Mt&&Mt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Kt=new Ic;Kt.setAnimationLoop(It),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const Bn=new nn,Qp=new se;function tm(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,Rc(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,T,w,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),g(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),_(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?c(m,h,T,w):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ie&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ie&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=t.get(h),w=T.envMap,y=T.envMapRotation;w&&(m.envMap.value=w,Bn.copy(y),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),m.envMapRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(Bn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,T,w){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=w*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ie&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const T=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function em(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,w){const y=w.program;n.uniformBlockBinding(T,y)}function l(T,w){let y=s[T.id];y===void 0&&(g(T),y=u(T),s[T.id]=y,T.addEventListener("dispose",m));const N=w.program;n.updateUBOMapping(T,N);const R=t.render.frame;r[T.id]!==R&&(f(T),r[T.id]=R)}function u(T){const w=d();T.__bindingPointIndex=w;const y=i.createBuffer(),N=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,N,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const w=s[T.id],y=T.uniforms,N=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,A=y.length;R<A;R++){const L=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,M=L.length;S<M;S++){const b=L[S];if(p(b,R,S,N)===!0){const B=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let Y=0;Y<F.length;Y++){const X=F[Y],j=_(X);typeof X=="number"||typeof X=="boolean"?(b.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+W,b.__data)):X.isMatrix3?(b.__data[0]=X.elements[0],b.__data[1]=X.elements[1],b.__data[2]=X.elements[2],b.__data[3]=0,b.__data[4]=X.elements[3],b.__data[5]=X.elements[4],b.__data[6]=X.elements[5],b.__data[7]=0,b.__data[8]=X.elements[6],b.__data[9]=X.elements[7],b.__data[10]=X.elements[8],b.__data[11]=0):(X.toArray(b.__data,W),W+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,w,y,N){const R=T.value,A=w+"_"+y;if(N[A]===void 0)return typeof R=="number"||typeof R=="boolean"?N[A]=R:N[A]=R.clone(),!0;{const L=N[A];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return N[A]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(T){const w=T.uniforms;let y=0;const N=16;for(let A=0,L=w.length;A<L;A++){const S=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,b=S.length;M<b;M++){const B=S[M],F=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Y=F.length;W<Y;W++){const X=F[W],j=_(X),V=y%N,tt=V%j.boundary,ot=V+tt;y+=tt,ot!==0&&N-ot<j.storage&&(y+=N-ot),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=j.storage}}}const R=y%N;return R>0&&(y+=N-R),T.__size=y,T.__cache={},this}function _(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function h(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}class nm{constructor(t={}){const{canvas:e=Hl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,h=null;const T=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=Cn,this.toneMappingExposure=1;const y=this;let N=!1,R=0,A=0,L=null,S=-1,M=null;const b=new ie,B=new ie;let F=null;const W=new qt(0);let Y=0,X=e.width,j=e.height,V=1,tt=null,ot=null;const Mt=new ie(0,0,X,j),It=new ie(0,0,X,j);let Kt=!1;const q=new To;let Q=!1,dt=!1;const it=new se,At=new se,Rt=new I,Ft=new ie,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function ae(){return L===null?V:1}let P=n;function fe(x,D){return e.getContext(x,D)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mo}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),P===null){const D="webgl2";if(P=fe(D,x),P===null)throw fe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let gt,xt,ft,Ht,st,E,v,O,$,J,K,Tt,ct,mt,$t,et,_t,Ct,Lt,vt,Yt,zt,re,C;function at(){gt=new af(P),gt.init(),zt=new qp(P,gt),xt=new tf(P,gt,t,zt),ft=new Hp(P,gt),xt.reverseDepthBuffer&&f&&ft.buffers.depth.setReversed(!0),Ht=new hf(P),st=new Rp,E=new Xp(P,gt,ft,st,xt,zt,Ht),v=new nf(y),O=new of(y),$=new gh(P),re=new Jd(P,$),J=new cf(P,$,Ht,re),K=new df(P,J,$,Ht),Lt=new uf(P,xt,E),et=new ef(st),Tt=new Ap(y,v,O,gt,xt,re,et),ct=new tm(y,st),mt=new Pp,$t=new Fp(gt),Ct=new jd(y,v,O,ft,K,p,c),_t=new Gp(y,K,xt),C=new em(P,Ht,xt,ft),vt=new Qd(P,gt,Ht),Yt=new lf(P,gt,Ht),Ht.programs=Tt.programs,y.capabilities=xt,y.extensions=gt,y.properties=st,y.renderLists=mt,y.shadowMap=_t,y.state=ft,y.info=Ht}at();const H=new Jp(y,P);this.xr=H,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=gt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=gt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(X,j,!1))},this.getSize=function(x){return x.set(X,j)},this.setSize=function(x,D,k=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=x,j=D,e.width=Math.floor(x*V),e.height=Math.floor(D*V),k===!0&&(e.style.width=x+"px",e.style.height=D+"px"),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(X*V,j*V).floor()},this.setDrawingBufferSize=function(x,D,k){X=x,j=D,V=k,e.width=Math.floor(x*k),e.height=Math.floor(D*k),this.setViewport(0,0,x,D)},this.getCurrentViewport=function(x){return x.copy(b)},this.getViewport=function(x){return x.copy(Mt)},this.setViewport=function(x,D,k,z){x.isVector4?Mt.set(x.x,x.y,x.z,x.w):Mt.set(x,D,k,z),ft.viewport(b.copy(Mt).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(It)},this.setScissor=function(x,D,k,z){x.isVector4?It.set(x.x,x.y,x.z,x.w):It.set(x,D,k,z),ft.scissor(B.copy(It).multiplyScalar(V).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(x){ft.setScissorTest(Kt=x)},this.setOpaqueSort=function(x){tt=x},this.setTransparentSort=function(x){ot=x},this.getClearColor=function(x){return x.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(x=!0,D=!0,k=!0){let z=0;if(x){let U=!1;if(L!==null){const nt=L.texture.format;U=nt===yo||nt===Mo||nt===xo}if(U){const nt=L.texture.type,ht=nt===gn||nt===Wn||nt===Oi||nt===gi||nt===_o||nt===vo,yt=Ct.getClearColor(),St=Ct.getClearAlpha(),Dt=yt.r,Bt=yt.g,Et=yt.b;ht?(g[0]=Dt,g[1]=Bt,g[2]=Et,g[3]=St,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Dt,_[1]=Bt,_[2]=Et,_[3]=St,P.clearBufferiv(P.COLOR,0,_))}else z|=P.COLOR_BUFFER_BIT}D&&(z|=P.DEPTH_BUFFER_BIT),k&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),mt.dispose(),$t.dispose(),st.dispose(),v.dispose(),O.dispose(),K.dispose(),re.dispose(),C.dispose(),Tt.dispose(),H.dispose(),H.removeEventListener("sessionstart",Uo),H.removeEventListener("sessionend",No),Ln.stop()};function Z(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const x=Ht.autoReset,D=_t.enabled,k=_t.autoUpdate,z=_t.needsUpdate,U=_t.type;at(),Ht.autoReset=x,_t.enabled=D,_t.autoUpdate=k,_t.needsUpdate=z,_t.type=U}function lt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ot(x){const D=x.target;D.removeEventListener("dispose",Ot),ue(D)}function ue(x){ye(x),st.remove(x)}function ye(x){const D=st.get(x).programs;D!==void 0&&(D.forEach(function(k){Tt.releaseProgram(k)}),x.isShaderMaterial&&Tt.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,k,z,U,nt){D===null&&(D=jt);const ht=U.isMesh&&U.matrixWorld.determinant()<0,yt=tl(x,D,k,z,U);ft.setMaterial(z,ht);let St=k.index,Dt=1;if(z.wireframe===!0){if(St=J.getWireframeAttribute(k),St===void 0)return;Dt=2}const Bt=k.drawRange,Et=k.attributes.position;let Jt=Bt.start*Dt,oe=(Bt.start+Bt.count)*Dt;nt!==null&&(Jt=Math.max(Jt,nt.start*Dt),oe=Math.min(oe,(nt.start+nt.count)*Dt)),St!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,St.count)):Et!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,Et.count));const ce=oe-Jt;if(ce<0||ce===1/0)return;re.setup(U,z,yt,k,St);let Ae,Qt=vt;if(St!==null&&(Ae=$.get(St),Qt=Yt,Qt.setIndex(Ae)),U.isMesh)z.wireframe===!0?(ft.setLineWidth(z.wireframeLinewidth*ae()),Qt.setMode(P.LINES)):Qt.setMode(P.TRIANGLES);else if(U.isLine){let wt=z.linewidth;wt===void 0&&(wt=1),ft.setLineWidth(wt*ae()),U.isLineSegments?Qt.setMode(P.LINES):U.isLineLoop?Qt.setMode(P.LINE_LOOP):Qt.setMode(P.LINE_STRIP)}else U.isPoints?Qt.setMode(P.POINTS):U.isSprite&&Qt.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const wt=U._multiDrawStarts,on=U._multiDrawCounts,te=U._multiDrawCount,Ve=St?$.get(St).bytesPerElement:1,qn=st.get(z).currentProgram.getUniforms();for(let Le=0;Le<te;Le++)qn.setValue(P,"_gl_DrawID",Le),Qt.render(wt[Le]/Ve,on[Le])}else if(U.isInstancedMesh)Qt.renderInstances(Jt,ce,U.count);else if(k.isInstancedBufferGeometry){const wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,on=Math.min(k.instanceCount,wt);Qt.renderInstances(Jt,ce,on)}else Qt.render(Jt,ce)};function ee(x,D,k){x.transparent===!0&&x.side===Ke&&x.forceSinglePass===!1?(x.side=Ie,x.needsUpdate=!0,Hi(x,D,k),x.side=Pn,x.needsUpdate=!0,Hi(x,D,k),x.side=Ke):Hi(x,D,k)}this.compile=function(x,D,k=null){k===null&&(k=x),h=$t.get(k),h.init(D),w.push(h),k.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),x!==k&&x.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const z=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const nt=U.material;if(nt)if(Array.isArray(nt))for(let ht=0;ht<nt.length;ht++){const yt=nt[ht];ee(yt,k,U),z.add(yt)}else ee(nt,k,U),z.add(nt)}),w.pop(),h=null,z},this.compileAsync=function(x,D,k=null){const z=this.compile(x,D,k);return new Promise(U=>{function nt(){if(z.forEach(function(ht){st.get(ht).currentProgram.isReady()&&z.delete(ht)}),z.size===0){U(x);return}setTimeout(nt,10)}gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ge=null;function rn(x){Ge&&Ge(x)}function Uo(){Ln.stop()}function No(){Ln.start()}const Ln=new Ic;Ln.setAnimationLoop(rn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(x){Ge=x,H.setAnimationLoop(x),x===null?Ln.stop():Ln.start()},H.addEventListener("sessionstart",Uo),H.addEventListener("sessionend",No),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(D),D=H.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,D,L),h=$t.get(x,w.length),h.init(D),w.push(h),At.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(At),dt=this.localClippingEnabled,Q=et.init(this.clippingPlanes,dt),m=mt.get(x,T.length),m.init(),T.push(m),H.enabled===!0&&H.isPresenting===!0){const nt=y.xr.getDepthSensingMesh();nt!==null&&Os(nt,D,-1/0,y.sortObjects)}Os(x,D,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(tt,ot),Pt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Pt&&Ct.addToRenderList(m,x),this.info.render.frame++,Q===!0&&et.beginShadows();const k=h.state.shadowsArray;_t.render(k,x,D),Q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(h.setupLights(),D.isArrayCamera){const nt=D.cameras;if(U.length>0)for(let ht=0,yt=nt.length;ht<yt;ht++){const St=nt[ht];Oo(z,U,x,St)}Pt&&Ct.render(x);for(let ht=0,yt=nt.length;ht<yt;ht++){const St=nt[ht];Fo(m,x,St,St.viewport)}}else U.length>0&&Oo(z,U,x,D),Pt&&Ct.render(x),Fo(m,x,D);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(y,x,D),re.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(h=w[w.length-1],Q===!0&&et.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Os(x,D,k,z){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){z&&Ft.setFromMatrixPosition(x.matrixWorld).applyMatrix4(At);const ht=K.update(x),yt=x.material;yt.visible&&m.push(x,ht,yt,k,Ft.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){const ht=K.update(x),yt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ft.copy(x.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ft.copy(ht.boundingSphere.center)),Ft.applyMatrix4(x.matrixWorld).applyMatrix4(At)),Array.isArray(yt)){const St=ht.groups;for(let Dt=0,Bt=St.length;Dt<Bt;Dt++){const Et=St[Dt],Jt=yt[Et.materialIndex];Jt&&Jt.visible&&m.push(x,ht,Jt,k,Ft.z,Et)}}else yt.visible&&m.push(x,ht,yt,k,Ft.z,null)}}const nt=x.children;for(let ht=0,yt=nt.length;ht<yt;ht++)Os(nt[ht],D,k,z)}function Fo(x,D,k,z){const U=x.opaque,nt=x.transmissive,ht=x.transparent;h.setupLightsView(k),Q===!0&&et.setGlobalState(y.clippingPlanes,k),z&&ft.viewport(b.copy(z)),U.length>0&&Vi(U,D,k),nt.length>0&&Vi(nt,D,k),ht.length>0&&Vi(ht,D,k),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Oo(x,D,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[z.id]===void 0&&(h.state.transmissionRenderTarget[z.id]=new Xn(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Bi:gn,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const nt=h.state.transmissionRenderTarget[z.id],ht=z.viewport||b;nt.setSize(ht.z,ht.w);const yt=y.getRenderTarget();y.setRenderTarget(nt),y.getClearColor(W),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Pt&&Ct.render(k);const St=y.toneMapping;y.toneMapping=Cn;const Dt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),h.setupLightsView(z),Q===!0&&et.setGlobalState(y.clippingPlanes,z),Vi(x,k,z),E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Et=0,Jt=D.length;Et<Jt;Et++){const oe=D[Et],ce=oe.object,Ae=oe.geometry,Qt=oe.material,wt=oe.group;if(Qt.side===Ke&&ce.layers.test(z.layers)){const on=Qt.side;Qt.side=Ie,Qt.needsUpdate=!0,Bo(ce,k,z,Ae,Qt,wt),Qt.side=on,Qt.needsUpdate=!0,Bt=!0}}Bt===!0&&(E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt))}y.setRenderTarget(yt),y.setClearColor(W,Y),Dt!==void 0&&(z.viewport=Dt),y.toneMapping=St}function Vi(x,D,k){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,nt=x.length;U<nt;U++){const ht=x[U],yt=ht.object,St=ht.geometry,Dt=z===null?ht.material:z,Bt=ht.group;yt.layers.test(k.layers)&&Bo(yt,D,k,St,Dt,Bt)}}function Bo(x,D,k,z,U,nt){x.onBeforeRender(y,D,k,z,U,nt),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(y,D,k,z,x,nt),U.transparent===!0&&U.side===Ke&&U.forceSinglePass===!1?(U.side=Ie,U.needsUpdate=!0,y.renderBufferDirect(k,D,z,U,x,nt),U.side=Pn,U.needsUpdate=!0,y.renderBufferDirect(k,D,z,U,x,nt),U.side=Ke):y.renderBufferDirect(k,D,z,U,x,nt),x.onAfterRender(y,D,k,z,U,nt)}function Hi(x,D,k){D.isScene!==!0&&(D=jt);const z=st.get(x),U=h.state.lights,nt=h.state.shadowsArray,ht=U.state.version,yt=Tt.getParameters(x,U.state,nt,D,k),St=Tt.getProgramCacheKey(yt);let Dt=z.programs;z.environment=x.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(x.isMeshStandardMaterial?O:v).get(x.envMap||z.environment),z.envMapRotation=z.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Dt===void 0&&(x.addEventListener("dispose",Ot),Dt=new Map,z.programs=Dt);let Bt=Dt.get(St);if(Bt!==void 0){if(z.currentProgram===Bt&&z.lightsStateVersion===ht)return zo(x,yt),Bt}else yt.uniforms=Tt.getUniforms(x),x.onBeforeCompile(yt,y),Bt=Tt.acquireProgram(yt,St),Dt.set(St,Bt),z.uniforms=yt.uniforms;const Et=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Et.clippingPlanes=et.uniform),zo(x,yt),z.needsLights=nl(x),z.lightsStateVersion=ht,z.needsLights&&(Et.ambientLightColor.value=U.state.ambient,Et.lightProbe.value=U.state.probe,Et.directionalLights.value=U.state.directional,Et.directionalLightShadows.value=U.state.directionalShadow,Et.spotLights.value=U.state.spot,Et.spotLightShadows.value=U.state.spotShadow,Et.rectAreaLights.value=U.state.rectArea,Et.ltc_1.value=U.state.rectAreaLTC1,Et.ltc_2.value=U.state.rectAreaLTC2,Et.pointLights.value=U.state.point,Et.pointLightShadows.value=U.state.pointShadow,Et.hemisphereLights.value=U.state.hemi,Et.directionalShadowMap.value=U.state.directionalShadowMap,Et.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Et.spotShadowMap.value=U.state.spotShadowMap,Et.spotLightMatrix.value=U.state.spotLightMatrix,Et.spotLightMap.value=U.state.spotLightMap,Et.pointShadowMap.value=U.state.pointShadowMap,Et.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Bt,z.uniformsList=null,Bt}function ko(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=Ss.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function zo(x,D){const k=st.get(x);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function tl(x,D,k,z,U){D.isScene!==!0&&(D=jt),E.resetTextureUnits();const nt=D.fog,ht=z.isMeshStandardMaterial?D.environment:null,yt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Mi,St=(z.isMeshStandardMaterial?O:v).get(z.envMap||ht),Dt=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Bt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!k.morphAttributes.position,Jt=!!k.morphAttributes.normal,oe=!!k.morphAttributes.color;let ce=Cn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ce=y.toneMapping);const Ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Qt=Ae!==void 0?Ae.length:0,wt=st.get(z),on=h.state.lights;if(Q===!0&&(dt===!0||x!==M)){const Fe=x===M&&z.id===S;et.setState(z,x,Fe)}let te=!1;z.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==on.state.version||wt.outputColorSpace!==yt||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==St||z.fog===!0&&wt.fog!==nt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==et.numPlanes||wt.numIntersection!==et.numIntersection)||wt.vertexAlphas!==Dt||wt.vertexTangents!==Bt||wt.morphTargets!==Et||wt.morphNormals!==Jt||wt.morphColors!==oe||wt.toneMapping!==ce||wt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,wt.__version=z.version);let Ve=wt.currentProgram;te===!0&&(Ve=Hi(z,D,U));let qn=!1,Le=!1,wi=!1;const le=Ve.getUniforms(),Je=wt.uniforms;if(ft.useProgram(Ve.program)&&(qn=!0,Le=!0,wi=!0),z.id!==S&&(S=z.id,Le=!0),qn||M!==x){ft.buffers.depth.getReversed()?(it.copy(x.projectionMatrix),Xl(it),ql(it),le.setValue(P,"projectionMatrix",it)):le.setValue(P,"projectionMatrix",x.projectionMatrix),le.setValue(P,"viewMatrix",x.matrixWorldInverse);const _n=le.map.cameraPosition;_n!==void 0&&_n.setValue(P,Rt.setFromMatrixPosition(x.matrixWorld)),xt.logarithmicDepthBuffer&&le.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&le.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Le=!0,wi=!0)}if(U.isSkinnedMesh){le.setOptional(P,U,"bindMatrix"),le.setOptional(P,U,"bindMatrixInverse");const Fe=U.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),le.setValue(P,"boneTexture",Fe.boneTexture,E))}U.isBatchedMesh&&(le.setOptional(P,U,"batchingTexture"),le.setValue(P,"batchingTexture",U._matricesTexture,E),le.setOptional(P,U,"batchingIdTexture"),le.setValue(P,"batchingIdTexture",U._indirectTexture,E),le.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&le.setValue(P,"batchingColorTexture",U._colorsTexture,E));const bi=k.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&Lt.update(U,k,Ve),(Le||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,le.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Je.envMap.value=St,Je.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(Je.envMapIntensity.value=D.environmentIntensity),Le&&(le.setValue(P,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&el(Je,wi),nt&&z.fog===!0&&ct.refreshFogUniforms(Je,nt),ct.refreshMaterialUniforms(Je,z,V,j,h.state.transmissionRenderTarget[x.id]),Ss.upload(P,ko(wt),Je,E)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ss.upload(P,ko(wt),Je,E),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&le.setValue(P,"center",U.center),le.setValue(P,"modelViewMatrix",U.modelViewMatrix),le.setValue(P,"normalMatrix",U.normalMatrix),le.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Fe=z.uniformsGroups;for(let _n=0,vn=Fe.length;_n<vn;_n++){const Go=Fe[_n];C.update(Go,Ve),C.bind(Go,Ve)}}return Ve}function el(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function nl(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,D,k){st.get(x.texture).__webglTexture=D,st.get(x.depthTexture).__webglTexture=k;const z=st.get(x);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,D){const k=st.get(x);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,k=0){L=x,R=D,A=k;let z=!0,U=null,nt=!1,ht=!1;if(x){const St=st.get(x);if(St.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(St.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(St.__hasExternalTextures)E.rebindTextures(x,st.get(x.texture).__webglTexture,st.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Et=x.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&st.has(Et)&&(x.width!==Et.image.width||x.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const Dt=x.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ht=!0);const Bt=st.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Bt[D])?U=Bt[D][k]:U=Bt[D],nt=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?U=st.get(x).__webglMultisampledFramebuffer:Array.isArray(Bt)?U=Bt[k]:U=Bt,b.copy(x.viewport),B.copy(x.scissor),F=x.scissorTest}else b.copy(Mt).multiplyScalar(V).floor(),B.copy(It).multiplyScalar(V).floor(),F=Kt;if(ft.bindFramebuffer(P.FRAMEBUFFER,U)&&z&&ft.drawBuffers(x,U),ft.viewport(b),ft.scissor(B),ft.setScissorTest(F),nt){const St=st.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,k)}else if(ht){const St=st.get(x.texture),Dt=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,St.__webglTexture,k||0,Dt)}S=-1},this.readRenderTargetPixels=function(x,D,k,z,U,nt,ht){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=st.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(yt=yt[ht]),yt){ft.bindFramebuffer(P.FRAMEBUFFER,yt);try{const St=x.texture,Dt=St.format,Bt=St.type;if(!xt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-z&&k>=0&&k<=x.height-U&&P.readPixels(D,k,z,U,zt.convert(Dt),zt.convert(Bt),nt)}finally{const St=L!==null?st.get(L).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(x,D,k,z,U,nt,ht){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=st.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(yt=yt[ht]),yt){const St=x.texture,Dt=St.format,Bt=St.type;if(!xt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=x.width-z&&k>=0&&k<=x.height-U){ft.bindFramebuffer(P.FRAMEBUFFER,yt);const Et=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(D,k,z,U,zt.convert(Dt),zt.convert(Bt),0);const Jt=L!==null?st.get(L).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,Jt);const oe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wl(P,oe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt),P.deleteBuffer(Et),P.deleteSync(oe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,D=null,k=0){x.isTexture!==!0&&(Ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,x=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(x.image.width*z),nt=Math.floor(x.image.height*z),ht=D!==null?D.x:0,yt=D!==null?D.y:0;E.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,ht,yt,U,nt),ft.unbindTexture()},this.copyTextureToTexture=function(x,D,k=null,z=null,U=0){x.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,x=arguments[1],D=arguments[2],U=arguments[3]||0,k=null);let nt,ht,yt,St,Dt,Bt,Et,Jt,oe;const ce=x.isCompressedTexture?x.mipmaps[U]:x.image;k!==null?(nt=k.max.x-k.min.x,ht=k.max.y-k.min.y,yt=k.isBox3?k.max.z-k.min.z:1,St=k.min.x,Dt=k.min.y,Bt=k.isBox3?k.min.z:0):(nt=ce.width,ht=ce.height,yt=ce.depth||1,St=0,Dt=0,Bt=0),z!==null?(Et=z.x,Jt=z.y,oe=z.z):(Et=0,Jt=0,oe=0);const Ae=zt.convert(D.format),Qt=zt.convert(D.type);let wt;D.isData3DTexture?(E.setTexture3D(D,0),wt=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),wt=P.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),wt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const on=P.getParameter(P.UNPACK_ROW_LENGTH),te=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ve=P.getParameter(P.UNPACK_SKIP_PIXELS),qn=P.getParameter(P.UNPACK_SKIP_ROWS),Le=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ce.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,St),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Bt);const wi=x.isDataArrayTexture||x.isData3DTexture,le=D.isDataArrayTexture||D.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const Je=st.get(x),bi=st.get(D),Fe=st.get(Je.__renderTarget),_n=st.get(bi.__renderTarget);ft.bindFramebuffer(P.READ_FRAMEBUFFER,Fe.__webglFramebuffer),ft.bindFramebuffer(P.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let vn=0;vn<yt;vn++)wi&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,st.get(x).__webglTexture,U,Bt+vn),x.isDepthTexture?(le&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,st.get(D).__webglTexture,U,oe+vn),P.blitFramebuffer(St,Dt,nt,ht,Et,Jt,nt,ht,P.DEPTH_BUFFER_BIT,P.NEAREST)):le?P.copyTexSubImage3D(wt,U,Et,Jt,oe+vn,St,Dt,nt,ht):P.copyTexSubImage2D(wt,U,Et,Jt,oe+vn,St,Dt,nt,ht);ft.bindFramebuffer(P.READ_FRAMEBUFFER,null),ft.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else le?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(wt,U,Et,Jt,oe,nt,ht,yt,Ae,Qt,ce.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(wt,U,Et,Jt,oe,nt,ht,yt,Ae,ce.data):P.texSubImage3D(wt,U,Et,Jt,oe,nt,ht,yt,Ae,Qt,ce):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Et,Jt,nt,ht,Ae,Qt,ce.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Et,Jt,ce.width,ce.height,Ae,ce.data):P.texSubImage2D(P.TEXTURE_2D,U,Et,Jt,nt,ht,Ae,Qt,ce);P.pixelStorei(P.UNPACK_ROW_LENGTH,on),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,te),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,qn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Le),U===0&&D.generateMipmaps&&P.generateMipmap(wt),ft.unbindTexture()},this.copyTextureToTexture3D=function(x,D,k=null,z=null,U=0){return x.isTexture!==!0&&(Ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,x=arguments[2],D=arguments[3],U=arguments[4]||0),Ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,D,k,z,U)},this.initRenderTarget=function(x){st.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),ft.unbindTexture()},this.resetState=function(){R=0,A=0,L=null,ft.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class bo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new qt(t),this.density=e}clone(){return new bo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class im extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class oo extends Si{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const za=new se,ao=new So,us=new Ls,ds=new I;class Ga extends _e{constructor(t=new be,e=new oo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),us.radius+=r,t.ray.intersectsSphere(us)===!1)return;za.copy(s).invert(),ao.copy(t.ray).applyMatrix4(za);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);ds.fromBufferAttribute(d,m),Va(ds,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)ds.fromBufferAttribute(d,g),Va(ds,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Va(i,t,e,n,s,r,o){const a=ao.distanceSqToPoint(i);if(a<e){const c=new I;ao.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class sm extends we{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ao extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,u=new Wt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class bt extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],p=[];let g=0;const _=[],m=n/2;let h=0;T(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new de(d,3)),this.setAttribute("normal",new de(f,3)),this.setAttribute("uv",new de(p,2));function T(){const y=new I,N=new I;let R=0;const A=(e-t)/n;for(let L=0;L<=r;L++){const S=[],M=L/r,b=M*(e-t)+t;for(let B=0;B<=s;B++){const F=B/s,W=F*c+a,Y=Math.sin(W),X=Math.cos(W);N.x=b*Y,N.y=-M*n+m,N.z=b*X,d.push(N.x,N.y,N.z),y.set(Y,A,X).normalize(),f.push(y.x,y.y,y.z),p.push(F,1-M),S.push(g++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const M=_[S][L],b=_[S+1][L],B=_[S+1][L+1],F=_[S][L+1];(t>0||S!==0)&&(u.push(M,b,F),R+=3),(e>0||S!==r-1)&&(u.push(b,B,F),R+=3)}l.addGroup(h,R,0),h+=R}function w(y){const N=g,R=new Wt,A=new I;let L=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const b=g;for(let B=0;B<=s;B++){const W=B/s*c+a,Y=Math.cos(W),X=Math.sin(W);A.x=S*X,A.y=m*M,A.z=S*Y,d.push(A.x,A.y,A.z),f.push(0,M,0),R.x=Y*.5+.5,R.y=X*.5*M+.5,p.push(R.x,R.y),g++}for(let B=0;B<s;B++){const F=N+B,W=b+B;y===!0?u.push(W,W+1,F):u.push(W+1,W,F),L+=3}l.addGroup(h,L,y===!0?1:2),h+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bn extends bt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new bn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ro extends be{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=t;const f=(e-t)/s,p=new I,g=new Wt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const h=r+m/n*o;p.x=d*Math.cos(h),p.y=d*Math.sin(h),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let h=0;h<n;h++){const T=h+m,w=T,y=T+n+1,N=T+n+2,R=T+1;a.push(w,y,R),a.push(y,N,R)}}this.setIndex(a),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ro(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class he extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new I,f=new I,p=[],g=[],_=[],m=[];for(let h=0;h<=n;h++){const T=[],w=h/n;let y=0;h===0&&o===0?y=.5/e:h===n&&c===Math.PI&&(y=-.5/e);for(let N=0;N<=e;N++){const R=N/e;d.x=-t*Math.cos(s+R*r)*Math.sin(o+w*a),d.y=t*Math.cos(o+w*a),d.z=t*Math.sin(s+R*r)*Math.sin(o+w*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(R+y,1-w),T.push(l++)}u.push(T)}for(let h=0;h<n;h++)for(let T=0;T<e;T++){const w=u[h][T+1],y=u[h][T],N=u[h+1][T],R=u[h+1][T+1];(h!==0||o>0)&&p.push(w,y,R),(h!==n-1||c<Math.PI)&&p.push(y,N,R)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ce extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new I,d=new I,f=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,h=(s+1)*(p-1)+g,T=(s+1)*p+g;o.push(_,m,T),o.push(m,h,T)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pt extends Si{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Us extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rm extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const pr=new se,Ha=new I,Wa=new I;class Bc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ha.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ha),Wa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wa),e.updateMatrixWorld(),pr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Xa=new se,Li=new I,mr=new I;class om extends Bc{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Wt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Li.setFromMatrixPosition(t.matrixWorld),n.position.copy(Li),mr.copy(n.position),mr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(mr),n.updateMatrixWorld(),s.makeTranslation(-Li.x,-Li.y,-Li.z),Xa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa)}}class fs extends Us{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new om}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class am extends Bc{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qa extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new am}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cm extends Us{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class kc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ya(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ya();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ya(){return performance.now()}const Ka=new se;class lm{constructor(t,e,n=0,s=1/0){this.ray=new So(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Eo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ka.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ka),this}intersectObject(t,e=!0,n=[]){return co(t,this,n,e),n.sort($a),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)co(t[s],this,n,e);return n.sort($a),n}}function $a(i,t){return i.distance-t.distance}function co(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)co(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);class hm extends _e{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Wt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}const ai=new I,Za=new se,ja=new se,Ja=new I,Qa=new I;class um{constructor(t={}){const e=this;let n,s,r,o;const a={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.getSize=function(){return{width:n,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),Za.copy(_.matrixWorldInverse),ja.multiplyMatrices(_.projectionMatrix,Za),u(g,g,_),p(g)},this.setSize=function(g,_){n=g,s=_,r=n/2,o=s/2,c.style.width=g+"px",c.style.height=_+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)l(g.children[_])}function u(g,_,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){ai.setFromMatrixPosition(g.matrixWorld),ai.applyMatrix4(ja);const h=ai.z>=-1&&ai.z<=1&&g.layers.test(m.layers)===!0,T=g.element;T.style.display=h===!0?"":"none",h===!0&&(g.onBeforeRender(e,_,m),T.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(ai.x*r+r)+"px,"+(-ai.y*o+o)+"px)",T.parentNode!==c&&c.appendChild(T),g.onAfterRender(e,_,m));const w={distanceToCameraSquared:d(m,g)};a.objects.set(g,w)}for(let h=0,T=g.children.length;h<T;h++)u(g.children[h],_,m)}function d(g,_){return Ja.setFromMatrixPosition(g.matrixWorld),Qa.setFromMatrixPosition(_.matrixWorld),Ja.distanceToSquared(Qa)}function f(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function p(g){const _=f(g).sort(function(h,T){if(h.renderOrder!==T.renderOrder)return T.renderOrder-h.renderOrder;const w=a.objects.get(h).distanceToCameraSquared,y=a.objects.get(T).distanceToCameraSquared;return w-y}),m=_.length;for(let h=0,T=_.length;h<T;h++)_[h].element.style.zIndex=m-h}}}const sn=Object.create(null);sn.open="0";sn.close="1";sn.ping="2";sn.pong="3";sn.message="4";sn.upgrade="5";sn.noop="6";const Es=Object.create(null);Object.keys(sn).forEach(i=>{Es[sn[i]]=i});const lo={type:"error",data:"parser error"},zc=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Gc=typeof ArrayBuffer=="function",Vc=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,Co=({type:i,data:t},e,n)=>zc&&t instanceof Blob?e?n(t):tc(t,n):Gc&&(t instanceof ArrayBuffer||Vc(t))?e?n(t):tc(new Blob([t]),n):n(sn[i]+(t||"")),tc=(i,t)=>{const e=new FileReader;return e.onload=function(){const n=e.result.split(",")[1];t("b"+(n||""))},e.readAsDataURL(i)};function ec(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let gr;function dm(i,t){if(zc&&i.data instanceof Blob)return i.data.arrayBuffer().then(ec).then(t);if(Gc&&(i.data instanceof ArrayBuffer||Vc(i.data)))return t(ec(i.data));Co(i,!1,e=>{gr||(gr=new TextEncoder),t(gr.encode(e))})}const nc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Fi=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<nc.length;i++)Fi[nc.charCodeAt(i)]=i;const fm=i=>{let t=i.length*.75,e=i.length,n,s=0,r,o,a,c;i[i.length-1]==="="&&(t--,i[i.length-2]==="="&&t--);const l=new ArrayBuffer(t),u=new Uint8Array(l);for(n=0;n<e;n+=4)r=Fi[i.charCodeAt(n)],o=Fi[i.charCodeAt(n+1)],a=Fi[i.charCodeAt(n+2)],c=Fi[i.charCodeAt(n+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|c&63;return l},pm=typeof ArrayBuffer=="function",Po=(i,t)=>{if(typeof i!="string")return{type:"message",data:Hc(i,t)};const e=i.charAt(0);return e==="b"?{type:"message",data:mm(i.substring(1),t)}:Es[e]?i.length>1?{type:Es[e],data:i.substring(1)}:{type:Es[e]}:lo},mm=(i,t)=>{if(pm){const e=fm(i);return Hc(e,t)}else return{base64:!0,data:i}},Hc=(i,t)=>{switch(t){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},Wc="",gm=(i,t)=>{const e=i.length,n=new Array(e);let s=0;i.forEach((r,o)=>{Co(r,!1,a=>{n[o]=a,++s===e&&t(n.join(Wc))})})},_m=(i,t)=>{const e=i.split(Wc),n=[];for(let s=0;s<e.length;s++){const r=Po(e[s],t);if(n.push(r),r.type==="error")break}return n};function vm(){return new TransformStream({transform(i,t){dm(i,e=>{const n=e.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),t.enqueue(s),t.enqueue(e)})}})}let _r;function ps(i){return i.reduce((t,e)=>t+e.length,0)}function ms(i,t){if(i[0].length===t)return i.shift();const e=new Uint8Array(t);let n=0;for(let s=0;s<t;s++)e[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),e}function xm(i,t){_r||(_r=new TextDecoder);const e=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(e.push(o);;){if(n===0){if(ps(e)<1)break;const c=ms(e,1);r=(c[0]&128)===128,s=c[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(ps(e)<2)break;const c=ms(e,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(ps(e)<8)break;const c=ms(e,8),l=new DataView(c.buffer,c.byteOffset,c.length),u=l.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(lo);break}s=u*Math.pow(2,32)+l.getUint32(4),n=3}else{if(ps(e)<s)break;const c=ms(e,s);a.enqueue(Po(r?c:_r.decode(c),t)),n=0}if(s===0||s>i){a.enqueue(lo);break}}}})}const Xc=4;function ge(i){if(i)return Mm(i)}function Mm(i){for(var t in ge.prototype)i[t]=ge.prototype[t];return i}ge.prototype.on=ge.prototype.addEventListener=function(i,t){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(t),this};ge.prototype.once=function(i,t){function e(){this.off(i,e),t.apply(this,arguments)}return e.fn=t,this.on(i,e),this};ge.prototype.off=ge.prototype.removeListener=ge.prototype.removeAllListeners=ge.prototype.removeEventListener=function(i,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+i];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<e.length;s++)if(n=e[s],n===t||n.fn===t){e.splice(s,1);break}return e.length===0&&delete this._callbacks["$"+i],this};ge.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var t=new Array(arguments.length-1),e=this._callbacks["$"+i],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(e){e=e.slice(0);for(var n=0,s=e.length;n<s;++n)e[n].apply(this,t)}return this};ge.prototype.emitReserved=ge.prototype.emit;ge.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};ge.prototype.hasListeners=function(i){return!!this.listeners(i).length};const Ns=typeof Promise=="function"&&typeof Promise.resolve=="function"?t=>Promise.resolve().then(t):(t,e)=>e(t,0),ke=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),ym="arraybuffer";function qc(i,...t){return t.reduce((e,n)=>(i.hasOwnProperty(n)&&(e[n]=i[n]),e),{})}const Sm=ke.setTimeout,Em=ke.clearTimeout;function Fs(i,t){t.useNativeTimers?(i.setTimeoutFn=Sm.bind(ke),i.clearTimeoutFn=Em.bind(ke)):(i.setTimeoutFn=ke.setTimeout.bind(ke),i.clearTimeoutFn=ke.clearTimeout.bind(ke))}const Tm=1.33;function wm(i){return typeof i=="string"?bm(i):Math.ceil((i.byteLength||i.size)*Tm)}function bm(i){let t=0,e=0;for(let n=0,s=i.length;n<s;n++)t=i.charCodeAt(n),t<128?e+=1:t<2048?e+=2:t<55296||t>=57344?e+=3:(n++,e+=4);return e}function Yc(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Am(i){let t="";for(let e in i)i.hasOwnProperty(e)&&(t.length&&(t+="&"),t+=encodeURIComponent(e)+"="+encodeURIComponent(i[e]));return t}function Rm(i){let t={},e=i.split("&");for(let n=0,s=e.length;n<s;n++){let r=e[n].split("=");t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}class Cm extends Error{constructor(t,e,n){super(t),this.description=e,this.context=n,this.type="TransportError"}}class Io extends ge{constructor(t){super(),this.writable=!1,Fs(this,t),this.opts=t,this.query=t.query,this.socket=t.socket,this.supportsBinary=!t.forceBase64}onError(t,e,n){return super.emitReserved("error",new Cm(t,e,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(t){this.readyState==="open"&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=Po(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}createUri(t,e={}){return t+"://"+this._hostname()+this._port()+this.opts.path+this._query(e)}_hostname(){const t=this.opts.hostname;return t.indexOf(":")===-1?t:"["+t+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(t){const e=Am(t);return e.length?"?"+e:""}}class Pm extends Io{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||e()})),this.writable||(n++,this.once("drain",function(){--n||e()}))}else e()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){const e=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};_m(t,this.socket.binaryType).forEach(e),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const t=()=>{this.write([{type:"close"}])};this.readyState==="open"?t():this.once("open",t)}write(t){this.writable=!1,gm(t,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const t=this.opts.secure?"https":"http",e=this.query||{};return this.opts.timestampRequests!==!1&&(e[this.opts.timestampParam]=Yc()),!this.supportsBinary&&!e.sid&&(e.b64=1),this.createUri(t,e)}}let Kc=!1;try{Kc=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const Im=Kc;function Lm(){}class Dm extends Pm{constructor(t){if(super(t),typeof location<"u"){const e=location.protocol==="https:";let n=location.port;n||(n=e?"443":"80"),this.xd=typeof location<"u"&&t.hostname!==location.hostname||n!==t.port}}doWrite(t,e){const n=this.request({method:"POST",data:t});n.on("success",e),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(e,n)=>{this.onError("xhr poll error",e,n)}),this.pollXhr=t}}class en extends ge{constructor(t,e,n){super(),this.createRequest=t,Fs(this,n),this._opts=n,this._method=n.method||"GET",this._uri=e,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var t;const e=qc(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");e.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(e);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(t=this._opts.cookieJar)===null||t===void 0||t.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=en.requestsCount++,en.requests[this._index]=this)}_onError(t){this.emitReserved("error",t,this._xhr),this._cleanup(!0)}_cleanup(t){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Lm,t)try{this._xhr.abort()}catch{}typeof document<"u"&&delete en.requests[this._index],this._xhr=null}}_onLoad(){const t=this._xhr.responseText;t!==null&&(this.emitReserved("data",t),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}en.requestsCount=0;en.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",ic);else if(typeof addEventListener=="function"){const i="onpagehide"in ke?"pagehide":"unload";addEventListener(i,ic,!1)}}function ic(){for(let i in en.requests)en.requests.hasOwnProperty(i)&&en.requests[i].abort()}const Um=(function(){const i=$c({xdomain:!1});return i&&i.responseType!==null})();class Nm extends Dm{constructor(t){super(t);const e=t&&t.forceBase64;this.supportsBinary=Um&&!e}request(t={}){return Object.assign(t,{xd:this.xd},this.opts),new en($c,this.uri(),t)}}function $c(i){const t=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!t||Im))return new XMLHttpRequest}catch{}if(!t)try{return new ke[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Zc=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class Fm extends Io{get name(){return"websocket"}doOpen(){const t=this.uri(),e=this.opts.protocols,n=Zc?{}:qc(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(t,e,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;Co(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&Ns(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const t=this.opts.secure?"wss":"ws",e=this.query||{};return this.opts.timestampRequests&&(e[this.opts.timestampParam]=Yc()),this.supportsBinary||(e.b64=1),this.createUri(t,e)}}const vr=ke.WebSocket||ke.MozWebSocket;class Om extends Fm{createSocket(t,e,n){return Zc?new vr(t,e,n):e?new vr(t,e):new vr(t)}doWrite(t,e){this.ws.send(e)}}class Bm extends Io{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(t){return this.emitReserved("error",t)}this._transport.closed.then(()=>{this.onClose()}).catch(t=>{this.onError("webtransport error",t)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(t=>{const e=xm(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=t.readable.pipeThrough(e).getReader(),s=vm();s.readable.pipeTo(t.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const n=t[e],s=e===t.length-1;this._writer.write(n).then(()=>{s&&Ns(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var t;(t=this._transport)===null||t===void 0||t.close()}}const km={websocket:Om,webtransport:Bm,polling:Nm},zm=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Gm=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function ho(i){if(i.length>8e3)throw"URI too long";const t=i,e=i.indexOf("["),n=i.indexOf("]");e!=-1&&n!=-1&&(i=i.substring(0,e)+i.substring(e,n).replace(/:/g,";")+i.substring(n,i.length));let s=zm.exec(i||""),r={},o=14;for(;o--;)r[Gm[o]]=s[o]||"";return e!=-1&&n!=-1&&(r.source=t,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Vm(r,r.path),r.queryKey=Hm(r,r.query),r}function Vm(i,t){const e=/\/{2,9}/g,n=t.replace(e,"/").split("/");return(t.slice(0,1)=="/"||t.length===0)&&n.splice(0,1),t.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Hm(i,t){const e={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(e[s]=r)}),e}const uo=typeof addEventListener=="function"&&typeof removeEventListener=="function",Ts=[];uo&&addEventListener("offline",()=>{Ts.forEach(i=>i())},!1);let jc=class ci extends ge{constructor(t,e={}){var n,s;if(super(),this.binaryType=ym,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,t&&typeof t=="object"&&(e=t,t=null),t){const r=ho(t);e.hostname=r.host,e.secure=r.protocol==="https"||r.protocol==="wss",e.port=r.port,r.query&&(e.query=r.query)}else e.host&&(e.hostname=ho(e.host).host);if(Fs(this,e),this.secure=e.secure!=null?e.secure:typeof location<"u"&&location.protocol==="https:",e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=e.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),e.transportImplementations&&e.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");e.transportImplementations||!((n=e.transports)===null||n===void 0)&&n.length&&typeof e.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((s=e.transportImplementations)!==null&&s!==void 0?s:e.transports).forEach(r=>{const o=r.prototype.name;this.transports.push(o),this._transportsByName[o]=r})):(this.transports=e.transports?[...e.transports]:["polling","websocket","webtransport"],this._transportsByName=km),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Rm(this.opts.query)),uo&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Ts.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=Xc,e.transport=t,this.id&&(e.sid=this.id);const n=Object.assign({},this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[t]);return new this._transportsByName[t](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const t=this.opts.rememberUpgrade&&ci.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const e=this.createTransport(t);e.open(),this.setTransport(e)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",e=>this._onClose("transport close",e))}_probe(t){let e=this.createTransport(t),n=!1;ci.priorWebsocketSuccess=!1;const s=()=>{n||(e.send([{type:"ping",data:"probe"}]),e.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;ci.priorWebsocketSuccess=e.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())})}else{const f=new Error("probe error");f.transport=e.name,this.emitReserved("upgradeError",f)}}))};function r(){n||(n=!0,u(),e.close(),e=null)}const o=d=>{const f=new Error("probe error: "+d);f.transport=e.name,r(),this.emitReserved("upgradeError",f)};function a(){o("transport closed")}function c(){o("socket closed")}function l(d){e&&d.name!==e.name&&r()}const u=()=>{e.removeListener("open",s),e.removeListener("error",o),e.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};e.once("open",s),e.once("error",o),e.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&t!=="webtransport"?this.setTimeoutFn(()=>{n||e.open()},200):e.open()}onOpen(){if(this.readyState="open",ci.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let t=0;t<this._upgrades.length;t++)this._probe(this._upgrades[t])}_onPacket(t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const e=new Error("server error");e.code=t.data,this._onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data);break}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this._upgrades=this._filterUpgrades(t.upgrades),this._pingInterval=t.pingInterval,this._pingTimeout=t.pingTimeout,this._maxPayload=t.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const t=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+t,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},t),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this._getWritablePackets();this.transport.send(t),this._prevBufferLen=t.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(e+=wm(s)),n>0&&e>this._maxPayload)return this.writeBuffer.slice(0,n);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const t=Date.now()>this._pingTimeoutTime;return t&&(this._pingTimeoutTime=0,Ns(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),t}write(t,e,n){return this._sendPacket("message",t,e,n),this}send(t,e,n){return this._sendPacket("message",t,e,n),this}_sendPacket(t,e,n,s){if(typeof e=="function"&&(s=e,e=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:t,data:e,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const t=()=>{this._onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},n=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():t()}):this.upgrading?n():t()),this}_onError(t){if(ci.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",t),this._onClose("transport error",t)}_onClose(t,e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),uo&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Ts.indexOf(this._offlineEventListener);n!==-1&&Ts.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(t){const e=[];for(let n=0;n<t.length;n++)~this.transports.indexOf(t[n])&&e.push(t[n]);return e}};jc.protocol=Xc;function Wm(i,t="",e){let n=i;e=e||typeof location<"u"&&location,i==null&&(i=e.protocol+"//"+e.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=e.protocol+i:i=e.host+i),/^(https?|wss?):\/\//.test(i)||(typeof e<"u"?i=e.protocol+"//"+i:i="https://"+i),n=ho(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+t,n.href=n.protocol+"://"+r+(e&&e.port===n.port?"":":"+n.port),n}const Xm=typeof ArrayBuffer=="function",qm=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,Jc=Object.prototype.toString,Ym=typeof Blob=="function"||typeof Blob<"u"&&Jc.call(Blob)==="[object BlobConstructor]",Km=typeof File=="function"||typeof File<"u"&&Jc.call(File)==="[object FileConstructor]";function Lo(i){return Xm&&(i instanceof ArrayBuffer||qm(i))||Ym&&i instanceof Blob||Km&&i instanceof File}function ws(i,t){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let e=0,n=i.length;e<n;e++)if(ws(i[e]))return!0;return!1}if(Lo(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return ws(i.toJSON(),!0);for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e)&&ws(i[e]))return!0;return!1}function $m(i){const t=[],e=i.data,n=i;return n.data=bs(e,t),n.attachments=t.length,{packet:n,buffers:t}}function bs(i,t,e){if(!i)return i;if(Lo(i)){const n={_placeholder:!0,num:t.length};return t.push(i),n}else if(Array.isArray(i)){const n=new Array(i.length);for(let s=0;s<i.length;s++)n[s]=bs(i[s],t);return n}else if(typeof i=="object"&&!(i instanceof Date)){if(i.toJSON&&typeof i.toJSON=="function"&&!e)return bs(i.toJSON(),t,!0);const n={};for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=bs(i[s],t));return n}return i}function Zm(i,t){return i.data=fo(i.data,t),delete i.attachments,i}function fo(i,t){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<t.length)return t[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let e=0;e<i.length;e++)i[e]=fo(i[e],t);else if(typeof i=="object")for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&(i[e]=fo(i[e],t));return i}const jm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var Xt;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(Xt||(Xt={}));class Jm{constructor(t){this.replacer=t}encode(t){return(t.type===Xt.EVENT||t.type===Xt.ACK)&&ws(t)?this.encodeAsBinary({type:t.type===Xt.EVENT?Xt.BINARY_EVENT:Xt.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===Xt.BINARY_EVENT||t.type===Xt.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&t.nsp!=="/"&&(e+=t.nsp+","),t.id!=null&&(e+=t.id),t.data!=null&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=$m(t),n=this.encodeAsString(e.packet),s=e.buffers;return s.unshift(n),s}}class Do extends ge{constructor(t){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof t=="function"?{reviver:t}:t)}add(t){let e;if(typeof t=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);const n=e.type===Xt.BINARY_EVENT;n||e.type===Xt.BINARY_ACK?(e.type=n?Xt.EVENT:Xt.ACK,this.reconstructor=new Qm(e)):super.emitReserved("decoded",e)}else if(Lo(t)||t.base64)if(this.reconstructor)e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+t)}decodeString(t){let e=0;const n={type:Number(t.charAt(0))};if(Xt[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===Xt.BINARY_EVENT||n.type===Xt.BINARY_ACK){const r=e+1;for(;t.charAt(++e)!=="-"&&e!=t.length;);const o=t.substring(r,e);if(o!=Number(o)||t.charAt(e)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!tg(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(t.charAt(e+1)==="/"){const r=e+1;for(;++e&&!(t.charAt(e)===","||e===t.length););n.nsp=t.substring(r,e)}else n.nsp="/";const s=t.charAt(e+1);if(s!==""&&Number(s)==s){const r=e+1;for(;++e;){const o=t.charAt(e);if(o==null||Number(o)!=o){--e;break}if(e===t.length)break}n.id=Number(t.substring(r,e+1))}if(t.charAt(++e)){const r=this.tryParse(t.substr(e));if(Do.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(t){try{return JSON.parse(t,this.opts.reviver)}catch{return!1}}static isPayloadValid(t,e){switch(t){case Xt.CONNECT:return sc(e);case Xt.DISCONNECT:return e===void 0;case Xt.CONNECT_ERROR:return typeof e=="string"||sc(e);case Xt.EVENT:case Xt.BINARY_EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&jm.indexOf(e[0])===-1);case Xt.ACK:case Xt.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class Qm{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const e=Zm(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const tg=Number.isInteger||function(i){return typeof i=="number"&&isFinite(i)&&Math.floor(i)===i};function sc(i){return Object.prototype.toString.call(i)==="[object Object]"}const eg=Object.freeze(Object.defineProperty({__proto__:null,Decoder:Do,Encoder:Jm,get PacketType(){return Xt}},Symbol.toStringTag,{value:"Module"}));function qe(i,t,e){return i.on(t,e),function(){i.off(t,e)}}const ng=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class Qc extends ge{constructor(t,e,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[qe(t,"open",this.onopen.bind(this)),qe(t,"packet",this.onpacket.bind(this)),qe(t,"error",this.onerror.bind(this)),qe(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){var n,s,r;if(ng.hasOwnProperty(t))throw new Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;const o={type:Xt.EVENT,data:e};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof e[e.length-1]=="function"){const u=this.ids++,d=e.pop();this._registerAckCallback(u,d),o.id=u}const a=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(t,e){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[t]=e;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===t&&this.sendBuffer.splice(a,1);e.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),e.apply(this,a)};o.withError=!0,this.acks[t]=o}emitWithAck(t,...e){return new Promise((n,s)=>{const r=(o,a)=>o?s(o):n(a);r.withError=!0,e.push(r),this.emit(t,...e)})}_addToQueue(t){let e;typeof t[t.length-1]=="function"&&(e=t.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(s)):(this._queue.shift(),e&&e(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||this._queue.length===0)return;const e=this._queue[0];e.pending&&!t||(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){typeof this.auth=="function"?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:Xt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(t=>{if(!this.sendBuffer.some(n=>String(n.id)===t)){const n=this.acks[t];delete this.acks[t],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Xt.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Xt.EVENT:case Xt.BINARY_EVENT:this.onevent(t);break;case Xt.ACK:case Xt.BINARY_ACK:this.onack(t);break;case Xt.DISCONNECT:this.ondisconnect();break;case Xt.CONNECT_ERROR:this.destroy();const n=new Error(t.data.message);n.data=t.data.data,this.emitReserved("connect_error",n);break}}onevent(t){const e=t.data||[];t.id!=null&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const n of e)n.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&typeof t[t.length-1]=="string"&&(this._lastOffset=t[t.length-1])}ack(t){const e=this;let n=!1;return function(...s){n||(n=!0,e.packet({type:Xt.ACK,id:t,data:s}))}}onack(t){const e=this.acks[t.id];typeof e=="function"&&(delete this.acks[t.id],e.withError&&t.data.unshift(null),e.apply(this,t.data))}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Xt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let n=0;n<e.length;n++)if(t===e[n])return e.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const n of e)n.apply(this,t.data)}}}function Ti(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}Ti.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var t=Math.random(),e=Math.floor(t*this.jitter*i);i=(Math.floor(t*10)&1)==0?i-e:i+e}return Math.min(i,this.max)|0};Ti.prototype.reset=function(){this.attempts=0};Ti.prototype.setMin=function(i){this.ms=i};Ti.prototype.setMax=function(i){this.max=i};Ti.prototype.setJitter=function(i){this.jitter=i};class po extends ge{constructor(t,e){var n;super(),this.nsps={},this.subs=[],t&&typeof t=="object"&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.opts=e,Fs(this,e),this.reconnection(e.reconnection!==!1),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor((n=e.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Ti({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(e.timeout==null?2e4:e.timeout),this._readyState="closed",this.uri=t;const s=e.parser||eg;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=e.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,t||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(t){return t===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return t===void 0?this._reconnectionDelay:(this._reconnectionDelay=t,(e=this.backoff)===null||e===void 0||e.setMin(t),this)}randomizationFactor(t){var e;return t===void 0?this._randomizationFactor:(this._randomizationFactor=t,(e=this.backoff)===null||e===void 0||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return t===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,(e=this.backoff)===null||e===void 0||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new jc(this.uri,this.opts);const e=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=qe(e,"open",function(){n.onopen(),t&&t()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),t?t(a):this.maybeReconnectOnOpen()},o=qe(e,"error",r);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),e.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(o),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(qe(t,"ping",this.onping.bind(this)),qe(t,"data",this.ondata.bind(this)),qe(t,"error",this.onerror.bind(this)),qe(t,"close",this.onclose.bind(this)),qe(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){Ns(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let n=this.nsps[t];return n?this._autoConnect&&!n.active&&n.connect():(n=new Qc(this,t,e),this.nsps[t]=n),n}_destroy(t){const e=Object.keys(this.nsps);for(const n of e)if(this.nsps[n].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let n=0;n<e.length;n++)this.engine.write(e[n],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(t,e){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),!t.skipReconnect&&t.open(s=>{s?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",s)):t.onreconnect()}))},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const Di={};function As(i,t){typeof i=="object"&&(t=i,i=void 0),t=t||{};const e=Wm(i,t.path||"/socket.io"),n=e.source,s=e.id,r=e.path,o=Di[s]&&r in Di[s].nsps,a=t.forceNew||t["force new connection"]||t.multiplex===!1||o;let c;return a?c=new po(n,t):(Di[s]||(Di[s]=new po(n,t)),c=Di[s]),e.query&&!t.query&&(t.query=e.queryKey),c.socket(e.path,t)}Object.assign(As,{Manager:po,Socket:Qc,io:As,connect:As});class ig{constructor(t){this.scene=t,this.candleLights=[],this.smokeParticles=null,this.petalParticles=null,this.haloMesh=null,this.buddhaAuraLight=null,this.clock=new kc,this.ripples=[],this.cushionPositions=[],this.interactiveStations={woodfish:{x:6.8,z:-2,rotY:-Math.PI/2},bell:{x:-6.8,z:-2,rotY:Math.PI/2},incenseTable:{x:-3.6,z:-4.3,rotY:Math.PI},incenseBurner:{x:0,z:-4.8,rotY:Math.PI},fortuneTable:{x:3.6,z:-4.3,rotY:Math.PI}},this.createEnvironment(),this.createArchitecture(),this.createTempleEntranceDoors(),this.createGrandBuddhaAltar(),this.createVenerablesAndBodhisattvas(),this.createEighteenArhats(),this.createAuthenticCushionsGrid(),this.createInteractiveStations(),this.createAtmosphericLighting(),this.createParticleSystems()}createEnvironment(){this.scene.background=new qt(2956308),this.scene.fog=new bo(2956308,.008);const t=new pt({color:1708050,roughness:.95,flatShading:!0});for(let e=-5;e<=5;e++){const n=new bn(38+Math.random()*8,28+Math.random()*6,6),s=new G(n,t);s.position.set(e*22+(Math.random()-.5)*6,3,-32-Math.abs(e)*3),s.scale.set(.9,.9+Math.random()*.3,.9),this.scene.add(s)}}createArchitecture(){const t=new Nt,e=new xi(36,48,16,16),n=new pt({color:4007194,roughness:.32,metalness:.12}),s=new G(e,n);s.rotation.x=-Math.PI/2,s.position.set(0,0,5),s.receiveShadow=!0,t.add(s);const r=new bt(.65,.7,12,20),o=new pt({color:3871758,roughness:.45}),a=new bt(.9,1,.5,16),c=new pt({color:2039583,roughness:.8}),l=new pt({color:13938487,metalness:.75,roughness:.25});[[-9,-2],[-9,5],[-9,12],[9,-2],[9,5],[9,12]].forEach(([h,T])=>{const w=new G(r,o);w.position.set(h,6,T),w.castShadow=!0,w.receiveShadow=!0;const y=new G(a,c);y.position.set(h,.25,T);const N=new G(new Ce(.72,.08,8,24),l);N.rotation.x=Math.PI/2,N.position.set(h,10.5,T),t.add(w,y,N)});const d=new G(new Vt(36,14,1),new pt({color:1707271,roughness:.8}));d.position.set(0,7,-10),d.receiveShadow=!0;const f=document.createElement("canvas");f.width=1024,f.height=1024;const p=f.getContext("2d"),g=p.createRadialGradient(512,460,40,512,460,540);g.addColorStop(0,"#78201b"),g.addColorStop(.45,"#451614"),g.addColorStop(.8,"#1c1626"),g.addColorStop(1,"#0e080f"),p.fillStyle=g,p.fillRect(0,0,1024,1024),p.strokeStyle="#d4af37",p.lineWidth=14,p.strokeRect(20,20,984,984),p.strokeStyle="#f5d77f",p.lineWidth=4,p.strokeRect(36,36,952,952),p.save(),p.translate(512,460),p.strokeStyle="rgba(245, 215, 127, 0.25)",p.lineWidth=3;for(let h=0;h<64;h++){p.beginPath(),p.moveTo(0,0);const T=h/64*Math.PI*2;p.lineTo(Math.cos(T)*440,Math.sin(T)*440),p.stroke()}[100,180,260,340,420].forEach((h,T)=>{p.beginPath(),p.arc(0,0,h,0,Math.PI*2),p.strokeStyle=T%2===0?"rgba(245, 195, 66, 0.5)":"rgba(255, 255, 255, 0.25)",p.lineWidth=T%2===0?5:2,p.stroke()});for(let h=0;h<16;h++)p.save(),p.rotate(h/16*Math.PI*2),p.fillStyle="rgba(235, 110, 135, 0.38)",p.beginPath(),p.ellipse(0,-180,24,60,0,0,Math.PI*2),p.fill(),p.strokeStyle="#f5d77f",p.lineWidth=2,p.stroke(),p.restore();p.restore();const _=new sm(f),m=new G(new xi(16,11),new pt({map:_,roughness:.65,metalness:.1}));m.position.set(0,7.5,-9.45),t.add(d,m),[-18,18].forEach(h=>{const T=new G(new Vt(.8,14,46),new pt({color:1444871,roughness:.8}));T.position.set(h,7,6),t.add(T);for(let w=-4;w<=16;w+=5.5){const y=new G(new Vt(.9,7,4),new pt({color:984836,roughness:.6}));y.position.set(h,6.5,w),t.add(y)}});for(let h=-8;h<=20;h+=4.5){const T=new G(new Vt(36,.5,.7),new pt({color:3019018,roughness:.6}));T.position.set(0,11.5,h),t.add(T)}this.scene.add(t)}createTempleEntranceDoors(){const t=new Nt;t.position.set(0,0,19.5);const e=new pt({color:2362376,roughness:.6});new pt({color:4659218,roughness:.5});const n=new pt({color:16036890,metalness:.75,roughness:.25}),s=new G(new Vt(13.5,14,.8),e);s.position.set(-11.25,7,0);const r=new G(new Vt(13.5,14,.8),e);r.position.set(11.25,7,0);const o=new G(new Vt(9,5,.9),e);o.position.set(0,11.5,0);const a=new G(new Vt(5.4,1.4,.2),new pt({color:8524566,roughness:.4}));a.position.set(0,9.2,.55);const c=new G(new Vt(5.6,1.55,.15),n);c.position.set(0,9.2,.5);const l=new G(new Vt(3.6,8.5,.18),new pt({color:5904401,roughness:.45}));l.position.set(-3.2,4.35,-1.2),l.rotation.y=Math.PI/3.2;const u=new G(new Vt(3.6,8.5,.18),new pt({color:5904401,roughness:.45}));u.position.set(3.2,4.35,-1.2),u.rotation.y=-Math.PI/3.2;const d=new G(new Vt(9,.22,.6),new pt({color:4008736,roughness:.8}));d.position.set(0,.11,0);for(let f=1;f<=3;f++){const p=new G(new Vt(9+f*.4,.18,.8),new pt({color:3352610,roughness:.85}));p.position.set(0,-f*.18+.05,f*.8),t.add(p)}t.add(s,r,o,a,c,l,u,d),this.scene.add(t)}createGrandBuddhaAltar(){const t=new Nt;t.position.set(0,0,-8);const e=new G(new Vt(11,.8,6.5),new pt({color:2362631,roughness:.4}));e.position.y=.4,e.receiveShadow=!0,t.add(e);const n=new pt({color:16103466,roughness:.22,metalness:.82,emissive:5059077,emissiveIntensity:.35}),s=new pt({color:14653719,roughness:.3,metalness:.62,emissive:4006659,emissiveIntensity:.28}),r=new pt({color:16771189,roughness:.16,metalness:.88,emissive:5914119,emissiveIntensity:.42}),o=new G(new bt(3.6,4.3,.9,28),n);o.position.y=1.15,t.add(o);const a=new G(new Ce(3.65,.08,12,36),r);a.rotation.x=Math.PI/2,a.position.y=1.6,t.add(a);for(let gt=0;gt<2;gt++){const xt=3.65-gt*.3,ft=1.45+gt*.4,Ht=18-gt*2;for(let st=0;st<Ht;st++){const E=st/Ht*Math.PI*2+gt*Math.PI/Ht,v=new G(new bn(.55,1.35,5),gt===1?r:n);v.position.set(Math.cos(E)*xt,ft,Math.sin(E)*xt),v.rotation.x=Math.PI/4.4,v.rotation.y=-E+Math.PI/2,v.scale.set(1.15,1,.45),t.add(v)}}const c=new Nt;c.position.set(0,2.15,.1);const l=new G(new bt(.56,.72,2.8,18),s);l.rotation.z=Math.PI/2.3,l.rotation.y=Math.PI/5.8,l.position.set(-1,.12,.22);const u=new G(new bt(.56,.72,2.8,18),s);u.rotation.z=-Math.PI/2.3,u.rotation.y=-Math.PI/5.8,u.position.set(1,.12,.22);const d=new G(new Vt(.5,.22,.85),n);d.rotation.x=Math.PI/3,d.rotation.z=-.15,d.position.set(-.38,.42,.95);const f=new G(new Vt(.48,.2,.8),n);f.rotation.x=Math.PI/3.2,f.rotation.z=.15,f.position.set(.38,.38,.92);const p=new G(new bt(1.5,1.8,.6,20),s);p.rotation.x=.4,p.position.set(0,.15,.45),c.add(l,u,d,f,p),t.add(c);const g=new Nt;g.position.set(0,3.85,0);const _=new G(new bt(1.15,1.45,1.6,22),s);_.position.y=-.3;const m=new G(new he(1.42,24,24),n);m.scale.set(1.32,.98,1.05),m.position.y=.6;const h=new Nt;h.position.set(0,.72,1.15);const T=r,w=new G(new Vt(.32,.07,.04),T),y=new G(new Vt(.07,.32,.04),T),N=new G(new Vt(.12,.07,.04),T);N.position.set(-.125,.125,0);const R=new G(new Vt(.12,.07,.04),T);R.position.set(.125,-.125,0);const A=new G(new Vt(.07,.12,.04),T);A.position.set(.125,.125,0);const L=new G(new Vt(.07,.12,.04),T);L.position.set(-.125,-.125,0),h.add(w,y,N,R,A,L),h.scale.set(1.2,1.2,1.2),g.add(h);const S=new G(new Ce(1.42,.2,14,30,Math.PI),s);S.rotation.z=-Math.PI/4.2,S.rotation.x=Math.PI/9,S.position.set(-.2,.52,.32),g.add(_,m,S),t.add(g);const M=new G(new bt(.34,.44,1.65,16),s);M.rotation.z=Math.PI/3.1,M.position.set(-1.22,3.85,.22);const b=new G(new bt(.29,.35,1.45,16),n);b.rotation.x=Math.PI/2.2,b.rotation.z=-Math.PI/4.2,b.position.set(-.68,2.92,.62);const B=new Nt;B.position.set(-.14,2.76,1);const F=new G(new Vt(.36,.11,.46),n);B.add(F);const W=new G(new bt(.34,.44,1.55,16),n);W.rotation.z=-Math.PI/4.6,W.position.set(1.26,4.05,.12);const Y=new G(new bt(.28,.34,1.45,16),n);Y.rotation.x=-Math.PI/5.2,Y.rotation.z=Math.PI/7.2,Y.position.set(1.22,4.75,.58);const X=new Nt;X.position.set(1.12,5.35,.82),X.rotation.y=-Math.PI/7.5;const j=new G(new Vt(.34,.46,.12),n),V=new G(new Ce(.11,.038,8,16),n);V.position.set(.12,.22,.08),X.add(j,V),t.add(M,b,B,W,Y,X);const tt=new Nt;tt.position.set(0,5.92,.08);const ot=new G(new bt(.55,.68,.65,20),n);ot.position.y=-.55,tt.add(ot);const Mt=new G(new he(.92,28,28),n);Mt.scale.set(.95,1.08,.98),tt.add(Mt);const It=new G(new he(.48,22,22),n);It.position.set(0,.98,-.05),tt.add(It);const Kt=new G(new he(.14,16,16),new pt({color:16724736,emissive:16729344,emissiveIntensity:.95,roughness:.15}));Kt.position.set(0,1.58,-.05),tt.add(Kt);const q=new G(new he(.94,24,24),new pt({color:14653719,roughness:.35,metalness:.65}));q.position.set(0,.22,-.06),q.scale.set(.96,1,.96),tt.add(q);const Q=new G(new he(.055,12,12),new pt({color:16777215,emissive:16775910,emissiveIntensity:1.2}));Q.position.set(0,.15,.94),tt.add(Q);const dt=new G(new bn(.08,.35,6),n);dt.rotation.x=-.25,dt.position.set(0,-.05,.96),tt.add(dt);const it=new G(new Ce(.12,.035,8,16,Math.PI),r);it.rotation.x=Math.PI/2,it.rotation.z=Math.PI,it.position.set(0,-.28,.93),tt.add(it);const At=new Ye({color:4006925});[-.26,.26].forEach(gt=>{const xt=new G(new Ce(.11,.022,6,16,Math.PI),At);xt.rotation.z=Math.PI,xt.position.set(gt,.02,.9),tt.add(xt)}),[-.96,.96].forEach(gt=>{const xt=new Nt;xt.position.set(gt,-.15,0);const ft=new G(new bt(.05,.06,.95,10),n);ft.position.set(0,-.2,0),xt.add(ft),tt.add(xt)}),t.add(tt);const Rt=new pt({color:16766287,roughness:.18,metalness:.85,emissive:7228936,emissiveIntensity:.45,side:Ke}),Ft=new G(new Ao(3.2,36),Rt);Ft.position.set(0,5.8,-1.1);const jt=new G(new Ce(3.3,.15,16,48),r);jt.position.set(0,5.8,-1.05),t.add(Ft,jt),[-4.8,4.8].forEach(gt=>{const xt=new Nt;xt.position.set(gt,1.35,1.1);const ft=new G(new bt(.24,.32,1.2,16),new pt({color:8234140,roughness:.2,metalness:.1}));xt.add(ft);const Ht=new pt({color:16092584,roughness:.4});for(let st=0;st<8;st++){const E=new G(new bn(.12,.38,4),Ht),v=st/8*Math.PI*2;E.position.set(Math.cos(v)*.14,.72,Math.sin(v)*.14),E.rotation.x=.35,E.rotation.y=-v,xt.add(E)}t.add(xt)}),[-3.8,3.8].forEach(gt=>{const xt=new G(new bt(.18,.28,1.4,12),new pt({color:12558360,metalness:.8,roughness:.25}));xt.position.set(gt,1.5,1.2);const ft=new G(new bt(.08,.08,.6,12),new pt({color:16777215,roughness:.3}));ft.position.set(gt,2.4,1.2);const Ht=new G(new bn(.06,.2,8),new Ye({color:16750848}));Ht.position.set(gt,2.75,1.2);const st=new fs(16750882,1.8,10);st.position.set(gt,2.8,1.2),this.candleLights.push(st),t.add(xt,ft,Ht,st)});const Pt=new Nt;Pt.position.set(0,1.1,1.8);const ae=new G(new bt(.72,.58,.65,20),new pt({color:10386242,metalness:.82,roughness:.28})),P=new G(new Ce(.74,.08,12,28),r);P.rotation.x=Math.PI/2,P.position.y=.32,Pt.add(ae,P);const fe=new G(new bt(.68,.68,.1,18),new pt({color:13938811,roughness:.9}));fe.position.y=.28,Pt.add(fe);for(let gt=-1;gt<=1;gt++){const xt=new G(new bt(.012,.012,.85),new Ye({color:11149841}));xt.position.set(gt*.14,.75,0);const ft=new G(new he(.035,8,8),new Ye({color:16729344}));ft.position.set(gt*.14,1.18,0),Pt.add(xt,ft)}this.burnerGroup=Pt,t.add(Pt),this.buddhaAuraLight=new fs(16760397,5,22),this.buddhaAuraLight.position.set(0,6,1.8),t.add(this.buddhaAuraLight),this.scene.add(t)}createVenerablesAndBodhisattvas(){const t=new pt({color:14059792,roughness:.45}),e=new pt({color:16448250,roughness:.35}),n=new pt({color:16768958,roughness:.45}),s=new pt({color:11897088,metalness:.5,roughness:.3}),r=new Nt;r.position.set(-3.2,0,-6.8);const o=new G(new bt(.75,.85,.7,16),s);o.position.y=.35;const a=new G(new bt(.42,.6,2.6,16),t);a.position.y=2;const c=new G(new he(.38,16,16),n);c.position.y=3.55;const l=new G(new he(.16,10,10),n);l.scale.set(1,1.6,.8),l.position.set(.12,2.6,.35),r.add(o,a,c,l),r.rotation.y=Math.PI/6,this.scene.add(r);const u=new Nt;u.position.set(3.2,0,-6.8);const d=new G(new bt(.75,.85,.7,16),s);d.position.y=.35;const f=new G(new bt(.42,.6,2.6,16),t);f.position.y=2;const p=new G(new he(.38,16,16),n);p.position.y=3.55;const g=new G(new he(.16,10,10),n);g.scale.set(1,1.6,.8),g.position.set(-.12,2.6,.35),u.add(d,f,p,g),u.rotation.y=-Math.PI/6,this.scene.add(u);const _=new Nt;_.position.set(-6.2,0,-4.5);const m=new G(new bt(1.1,1.25,.9,16),s);m.position.y=.45;const h=new G(new bt(.5,.75,2.9,16),e);h.position.y=2.3;const T=new G(new he(.42,16,16),n);T.position.y=3.95;const w=new G(new bt(.38,.35,.5,12),s);w.position.y=4.35;const y=new G(new bt(.1,.16,.45,8),s);y.position.set(.25,2.7,.5),_.add(m,h,T,w,y),_.rotation.y=Math.PI/4,this.scene.add(_)}createEighteenArhats(){const t=new Nt,e=new pt({color:3350548,roughness:.8}),n=new pt({color:9069356,metalness:.65,roughness:.35});for(let s=0;s<9;s++){const r=-1+s*2,o=new Nt;o.position.set(-13.5,0,r);const a=new G(new bt(.5,.6,.6,12),e);a.position.y=.3;const c=new G(new bt(.3,.45,1.3,10),e);c.position.y=1.25;const l=new G(new he(.26,12,12),n);l.position.y=2.05,o.add(a,c,l),o.rotation.y=Math.PI/2,t.add(o);const u=new Nt;u.position.set(13.5,0,r);const d=new G(new bt(.5,.6,.6,12),e);d.position.y=.3;const f=new G(new bt(.3,.45,1.3,10),e);f.position.y=1.25;const p=new G(new he(.26,12,12),n);p.position.y=2.05,u.add(d,f,p),u.rotation.y=-Math.PI/2,t.add(u)}this.scene.add(t)}createAuthenticCushionsGrid(){const t=new Nt;this.cushionPositions=[];const e=new Vt(.95,.12,.95),n=new pt({color:4013378,roughness:.85}),s=new Vt(.98,.04,.98),r=new pt({color:5921378,roughness:.9}),o=6,a=6;for(let c=0;c<o;c++)for(let l=0;l<a;l++){const u=(l-(a-1)/2)*2.5;if(Math.abs(u)<1.4)continue;const d=.5+c*2.8;this.cushionPositions.push({x:u,z:d});const f=new G(e,n);f.position.set(u,.06,d),f.receiveShadow=!0;const p=new G(s,r);p.position.set(u,.06,d),t.add(f,p)}this.scene.add(t)}findNearestCushion(t,e){if(!this.cushionPositions||this.cushionPositions.length===0)return{x:0,z:2};let n=this.cushionPositions[0],s=1/0;for(const r of this.cushionPositions){const o=Math.hypot(r.x-t,r.z-e);o<s&&(s=o,n=r)}return n}createInteractiveStations(){const t=new Nt;t.position.set(-8.2,0,-2);const e=new pt({color:4003599,roughness:.65}),n=new G(new bt(.22,.26,6.2,14),e);n.position.set(-1.3,3.1,0);const s=n.clone();s.position.set(1.3,3.1,0);const r=new G(new Vt(3.6,.45,.45),e);r.position.set(0,5.9,0);const o=new pt({color:11044423,metalness:.88,roughness:.22,emissive:3022857,emissiveIntensity:.2}),a=new G(new bt(.95,1.55,2.6,28),o);a.position.set(0,4,0),this.bellMesh=a;const c=new G(new bt(.12,.12,2.2,12),new pt({color:5907218,roughness:.5}));c.rotation.z=Math.PI/2,c.position.set(1.4,3.8,0),this.bellStrikerMesh=c,t.add(n,s,r,a,c),this.scene.add(t);const l=new Nt;l.position.set(8.2,0,-2);const u=new pt({color:4001287,roughness:.45}),d=new G(new bt(1.2,1.35,1.2,20),u);d.position.y=.6;const f=new G(new bt(1.05,1.15,.35,20),new pt({color:10361370,roughness:.75}));f.position.y=1.35;const p=new G(new he(.72,20,20),new pt({color:8140823,roughness:.32,metalness:.15}));p.scale.set(1.25,.88,1.05),p.position.set(0,1.9,0),this.woodfishMesh=p;const g=new G(new bt(.04,.04,1.1,10),new pt({color:13933398,roughness:.4}));g.rotation.z=Math.PI/3,g.position.set(-.3,1.95,.6);const _=new G(new he(.12,12,12),new pt({color:9049365,roughness:.6}));_.position.set(-.75,2.2,.6),l.add(d,f,p,g,_),this.scene.add(l);const m=new Nt;m.position.set(-3.6,0,-5.5);const h=new G(new Vt(1.4,1.1,.9),new pt({color:4003599,roughness:.5}));h.position.y=.55;const T=new G(new Vt(1.1,.08,.6),new pt({color:12558360,metalness:.85,roughness:.25}));T.position.y=1.14;const w=new G(new bt(.14,.14,.8,14),new pt({color:9380372,roughness:.8}));w.rotation.z=Math.PI/2,w.position.set(0,1.25,0);const y=new G(new bt(.06,.06,.35,10),new pt({color:16777215}));y.position.set(.42,1.3,.15);const N=new G(new bn(.04,.12,8),new Ye({color:16737792}));N.position.set(.42,1.54,.15),m.add(h,T,w,y,N),this.scene.add(m);const R=new Nt;R.position.set(3.6,0,-5.5);const A=new G(new Vt(1.4,1.1,.9),new pt({color:4003599,roughness:.5}));A.position.y=.55;const L=new G(new Vt(1.25,.04,.75),new pt({color:15116311,roughness:.65}));L.position.y=1.12;const S=new Nt;S.position.set(0,1.14,0);const M=new G(new bt(.18,.16,.75,16),new pt({color:10581818,roughness:.55}));M.position.y=.38,S.add(M);for(let b=0;b<12;b++){const B=new G(new bt(.015,.015,.85,6),new pt({color:13938811,roughness:.6})),F=b/12*Math.PI*2,W=.09*(b%2===0?.7:1);B.position.set(Math.cos(F)*W,.52+b%3*.04,Math.sin(F)*W),B.rotation.z=(Math.random()-.5)*.12,S.add(B)}this.tableFortuneTube=S,R.add(A,L,S),this.scene.add(R)}spawnDroppingFortuneStick(t,e,n){const s=new G(new Vt(.04,.012,.38),new pt({color:14660710,roughness:.4}));s.position.set(t,1.3,e),s.rotation.set(.5,.8,.3),this.scene.add(s);let r=0;const o=()=>{r+=.018,s.position.y-=r,s.rotation.x+=.15,s.rotation.z+=.18,s.position.y<=.03?(s.position.y=.03,s.rotation.set(Math.PI/2,0,Math.random()*Math.PI),n&&n(),setTimeout(()=>{this.scene.remove(s)},6e3)):requestAnimationFrame(o)};o()}createAtmosphericLighting(){const t=new cm(16773856,1.45);this.scene.add(t);const e=new rm(16775914,5913381,1.35);this.scene.add(e);const n=new qa(16772818,2.1);n.position.set(-20,16,6),n.castShadow=!0,n.shadow.mapSize.width=1024,n.shadow.mapSize.height=1024,n.shadow.bias=-.001,this.scene.add(n);const s=new qa(16769727,1.25);s.position.set(0,14,24),this.scene.add(s);const r=new fs(16759637,1.8,35);r.position.set(0,9.5,4),this.scene.add(r);const o=new fs(16755251,2,14);o.position.set(0,5.5,18.5),this.scene.add(o)}createParticleSystems(){const e=new be,n=new Float32Array(390),s=[];for(let l=0;l<130;l++)n[l*3]=(Math.random()-.5)*.25,n[l*3+1]=2.1+Math.random()*2.6,n[l*3+2]=-6.2+(Math.random()-.5)*.25,s.push({vx:(Math.random()-.5)*.016,vy:.012+Math.random()*.01,vz:(Math.random()-.5)*.016});e.setAttribute("position",new ze(n,3)),this.smokeParticles=new Ga(e,new oo({color:14540253,size:.28,transparent:!0,opacity:.38,depthWrite:!1})),this.smokeVel=s,this.scene.add(this.smokeParticles);const r=80,o=new be,a=new Float32Array(r*3),c=[];for(let l=0;l<r;l++)a[l*3]=(Math.random()-.5)*30,a[l*3+1]=.5+Math.random()*8.5,a[l*3+2]=(Math.random()-.5)*26,c.push({vx:(Math.random()-.5)*.008,vy:-.006-Math.random()*.008,vz:.005+Math.random()*.005});o.setAttribute("position",new ze(a,3)),this.petalParticles=new Ga(o,new oo({color:16765286,size:.16,transparent:!0,opacity:.65,depthWrite:!1})),this.petalVel=c,this.scene.add(this.petalParticles)}spawnClickRipple(t,e){const n=new Ro(.1,.22,24),s=new Ye({color:16036890,side:Ke,transparent:!0,opacity:.95}),r=new G(n,s);r.rotation.x=-Math.PI/2,r.position.set(t,.035,e),this.scene.add(r),this.ripples.push({mesh:r,scale:1,opacity:.95})}update(t){const e=this.clock.getElapsedTime();if(this.candleLights.forEach((n,s)=>{n.intensity=1.2+Math.sin(e*9+s*2.5)*.3}),this.buddhaAuraLight&&(this.buddhaAuraLight.intensity=4.2+Math.sin(e*2.5)*.4),this.smokeParticles){const n=this.smokeParticles.geometry.attributes.position.array;for(let s=0;s<this.smokeVel.length;s++)n[s*3+1]+=this.smokeVel[s].vy,n[s*3]+=Math.sin(e*3+s)*.004+this.smokeVel[s].vx,n[s*3+1]>5.2&&(n[s*3]=(Math.random()-.5)*.16,n[s*3+1]=2.1,n[s*3+2]=-6.2+(Math.random()-.5)*.16);this.smokeParticles.geometry.attributes.position.needsUpdate=!0}if(this.petalParticles){const n=this.petalParticles.geometry.attributes.position.array;for(let s=0;s<this.petalVel.length;s++)n[s*3+1]+=this.petalVel[s].vy,n[s*3]+=Math.sin(e*1.5+s)*.007,n[s*3+2]+=this.petalVel[s].vz,n[s*3+1]<.1&&(n[s*3+1]=8,n[s*3]=(Math.random()-.5)*30,n[s*3+2]=(Math.random()-.5)*26);this.petalParticles.geometry.attributes.position.needsUpdate=!0}for(let n=this.ripples.length-1;n>=0;n--){const s=this.ripples[n];s.scale+=t*3.5,s.opacity-=t*1.6,s.mesh.scale.set(s.scale,s.scale,1),s.mesh.material.opacity=Math.max(0,s.opacity),s.opacity<=0&&(this.scene.remove(s.mesh),this.ripples.splice(n,1))}}}class sg{constructor(t){this.scene=t,this.avatars=new Map,this.localPlayerId=null}setLocalPlayerId(t){this.localPlayerId=t}createAvatar(t){const e=new Nt;e.position.set(t.x||0,t.y||0,t.z||0),typeof t.rotY=="number"&&(e.rotation.y=t.rotY);const n=parseInt((t.robeColor||"#f5a623").replace("#","0x"),16),s=new pt({color:14606054,roughness:.65,metalness:.05}),r=new pt({color:n,roughness:.52,metalness:.08}),o=new pt({color:16768958,roughness:.38,metalness:0}),a=new pt({color:4858897,roughness:.5}),c=new pt({color:2234129,roughness:.75}),l=new Nt;l.position.y=.66,e.add(l);const u=new bt(.32,.45,.56,20),d=new G(u,s);d.position.y=-.15,l.add(d);const f=new G(new Vt(.18,.46,.06),r);f.position.set(-.1,-.12,-.22),l.add(f);const p=new bt(.09,.08,.44,12),g=new Vt(.13,.085,.23),_=new Nt;_.position.set(-.14,-.22,0);const m=new G(p,s);m.position.y=-.18;const h=new G(g,c);h.position.set(0,-.4,.04),_.add(m,h);const T=new Nt;T.position.set(.14,-.22,0);const w=new G(p,s);w.position.y=-.18;const y=new G(g,c);y.position.set(0,-.4,.04),T.add(w,y),l.add(_,T);const N=new Nt;N.position.y=.08,l.add(N);const R=new bt(.28,.32,.52,20),A=new G(R,s);A.position.y=.26,A.castShadow=!0,N.add(A);const L=new Ce(.34,.08,12,24,Math.PI*1.25),S=new G(L,r);S.rotation.z=-Math.PI/3.2,S.rotation.y=Math.PI/12,S.position.set(.04,.32,.06),N.add(S);const M=new G(new Ce(.2,.02,8,24),a);M.rotation.x=Math.PI/2.6,M.position.set(0,.44,.12),N.add(M);const b=new Nt;b.position.y=.48,N.add(b);const B=new Nt;B.position.y=.22,b.add(B);const F=new G(new he(.32,28,28),o);F.scale.set(1,1.05,1),F.position.y=.18,F.castShadow=!0,B.add(F);const W=new Ye({color:2825233});[-.1,.1].forEach(st=>{const E=new G(new Ce(.045,.012,6,12,Math.PI),W);E.rotation.z=Math.PI,E.position.set(st,.19,.3),B.add(E)});const Y=new G(new Ce(.035,.009,6,10,Math.PI*.8),W);Y.rotation.x=Math.PI/2.4,Y.rotation.z=Math.PI,Y.position.set(0,.08,.31),B.add(Y),[-.32,.32].forEach(st=>{const E=new G(new he(.065,10,10),o);E.scale.set(.5,1,.8),E.position.set(st,.17,.02),B.add(E)});const X=new bt(.09,.12,.38,14),j=()=>{const st=new G(new he(.075,12,12),o);return st.scale.set(.9,1,.8),st},V=new Nt;V.position.set(-.32,.1,0);const tt=new G(X,r);tt.position.set(0,-.16,0);const ot=new Nt;ot.position.set(0,-.32,0);const Mt=j();Mt.position.set(0,-.05,.12),ot.add(Mt),V.add(tt,ot);const It=new Nt;It.position.set(.32,.1,0);const Kt=new G(X,s);Kt.position.set(0,-.16,0);const q=new Nt;q.position.set(0,-.32,0);const Q=j();Q.position.set(0,-.05,.12),q.add(Q),It.add(Kt,q),b.add(V,It);const dt=new Nt,it=new G(new bt(.02,.02,.55,8),a),At=new G(new he(.065,10,10),new pt({color:9049365,roughness:.4}));At.position.y=.28,dt.add(it,At),dt.rotation.x=Math.PI/2,dt.position.set(0,.08,.22),dt.visible=!1,q.add(dt);const Rt=new Nt,Ft=new G(new bt(.035,.035,.7,8),a);Rt.add(Ft),Rt.rotation.x=Math.PI/2.2,Rt.position.set(0,.08,.25),Rt.visible=!1,q.add(Rt);const jt=new Nt;jt.position.set(0,.16,.3);for(let st=-1;st<=1;st++){const E=new G(new bt(.008,.008,.5),new Ye({color:11149841}));E.position.set(st*.04,.15,0);const v=new G(new he(.02,6,6),new Ye({color:16729344}));v.position.set(st*.04,.4,0),jt.add(E,v)}jt.visible=!1,b.add(jt);const Pt=new Nt;Pt.position.set(0,.12,.32);const ae=new G(new bt(.12,.11,.48,14),new pt({color:10581818,roughness:.5}));Pt.add(ae);for(let st=0;st<6;st++){const E=new G(new bt(.01,.01,.54),new pt({color:13938811}));E.position.set((Math.random()-.5)*.12,.18,(Math.random()-.5)*.12),Pt.add(E)}Pt.visible=!1,b.add(Pt);const P=new G(new Vt(.92,.12,.92),new pt({color:4013378,roughness:.85}));P.position.y=.06,P.visible=!1,e.add(P);const fe=document.createElement("div");fe.className="avatar-ui-container";const gt=document.createElement("div");gt.className="avatar-speech-bubble hidden",gt.innerHTML='<div class="bubble-text"></div><div class="bubble-tail"></div>';const xt=document.createElement("div");xt.className="avatar-nametag meme-style"+(t.id===this.localPlayerId?" is-me":""),xt.innerHTML=`<span class="nametag-text">${this.escapeHtml(t.name||"Thích thì nhích")}</span>`,fe.appendChild(gt),fe.appendChild(xt);const ft=new hm(fe);ft.position.set(0,1.88,0),e.add(ft),this.scene.add(e);const Ht={id:t.id,name:t.name,robeColor:t.robeColor,group:e,pelvis:l,skirt:d,legLGroup:_,legRGroup:T,spineGroup:N,chestGroup:b,headGroup:B,armLGroup:V,armRGroup:It,foreArmL:ot,foreArmR:q,cushion:P,css2dObject:ft,uiContainer:fe,bubbleEl:gt,tagEl:xt,bubbleTimeout:null,targetX:t.x||0,targetZ:t.z||0,targetRotY:t.rotY||0,action:t.action||"stand",actionTimer:0,walkCycle:Math.random()*10,isMoving:!1,merit:t.merit||0,props:{mallet:dt,bellStriker:Rt,incense:jt,fortune:Pt}};return this.avatars.set(t.id,Ht),t.currentBubble&&t.currentBubble.text&&this.showBubble(t.id,t.currentBubble.text,5e3),Ht}setAction(t,e){const n=this.avatars.get(t);n&&(n.action=e,n.actionTimer=0,n.props&&(n.props.mallet.visible=e==="strikeWoodfish",n.props.bellStriker.visible=e==="strikeBell",n.props.incense.visible=e==="incense"||e==="plantIncense",n.props.fortune.visible=e==="shakeFortune"),e==="sit"?n.cushion.visible=!0:n.cushion.visible=!1)}showBubble(t,e,n=5e3){const s=this.avatars.get(t);if(!s)return;const r=s.bubbleEl.querySelector(".bubble-text");r&&(r.textContent=e),s.bubbleEl.classList.remove("hidden"),s.bubbleTimeout&&clearTimeout(s.bubbleTimeout),s.bubbleTimeout=setTimeout(()=>{s.bubbleEl.classList.add("hidden")},n)}updateAvatarData(t,e){const n=this.avatars.get(t);n&&(typeof e.x=="number"&&(n.targetX=e.x),typeof e.z=="number"&&(n.targetZ=e.z),typeof e.rotY=="number"&&(n.targetRotY=e.rotY),e.action&&e.action!==n.action&&this.setAction(t,e.action))}removeAvatar(t){const e=this.avatars.get(t);e&&(this.scene.remove(e.group),this.avatars.delete(t))}update(t){const e=Date.now()*.003;this.avatars.forEach(n=>{n.actionTimer+=t;const s=n.targetX-n.group.position.x,r=n.targetZ-n.group.position.z;Math.hypot(s,r)>.05&&n.action!=="sit"?(n.isMoving=!0,n.group.position.x+=s*.25,n.group.position.z+=r*.25):n.isMoving=!1;let a=n.targetRotY-n.group.rotation.y;for(;a<-Math.PI;)a+=Math.PI*2;for(;a>Math.PI;)a-=Math.PI*2;if(n.group.rotation.y+=a*.25,n.isMoving){n.walkCycle+=t*11;const l=n.walkCycle,u=Math.sin(l)*.55;n.legLGroup.rotation.x=u,n.legRGroup.rotation.x=-u,n.pelvis.position.y=.64+Math.abs(Math.sin(l))*.04,n.pelvis.rotation.y=Math.sin(l)*.06,n.pelvis.rotation.z=Math.cos(l)*.025,n.spineGroup.rotation.y=-Math.sin(l)*.08,n.spineGroup.rotation.x=.08,n.armLGroup.rotation.x=-Math.sin(l)*.45,n.armLGroup.rotation.z=-.15,n.armRGroup.rotation.x=Math.sin(l)*.45,n.armRGroup.rotation.z=.15,n.foreArmL.rotation.x=.2+Math.max(0,-Math.sin(l)*.25),n.foreArmR.rotation.x=.2+Math.max(0,Math.sin(l)*.25),n.headGroup.rotation.x=Math.sin(l*2)*.03,n.headGroup.rotation.y=0;return}if(n.action==="sit"){n.pelvis.position.y=.26,n.pelvis.rotation.set(0,0,0),n.legLGroup.rotation.set(Math.PI/2.3,.35,-.2),n.legRGroup.rotation.set(Math.PI/2.3,-.35,.2),n.spineGroup.rotation.set(0,0,0),n.armLGroup.rotation.set(.4,0,-.3),n.armRGroup.rotation.set(.4,0,.3),n.foreArmL.rotation.set(.7,.4,0),n.foreArmR.rotation.set(.7,-.4,0),n.headGroup.rotation.set(.06,0,0);const l=Math.sin(e*1.6)*.025;n.chestGroup.scale.set(1+l,1+l*.8,1+l);return}if(n.action==="bow"||n.action==="bow3Times"){const u=n.actionTimer%2.4/2.4,d=Math.sin(u*Math.PI);n.pelvis.position.y=.65-d*.45,n.spineGroup.rotation.x=d*1.05,n.headGroup.rotation.x=d*.45,n.legLGroup.rotation.x=-d*.6,n.legRGroup.rotation.x=-d*.6,n.armLGroup.rotation.set(.7+d*.5,0,-.2-d*.3),n.armRGroup.rotation.set(.7+d*.5,0,.2+d*.3),n.foreArmL.rotation.set(1+d*.3,.6,0),n.foreArmR.rotation.set(1+d*.3,-.6,0);return}if(n.action==="strikeWoodfish"){n.pelvis.position.y=.65,n.pelvis.rotation.set(0,0,0),n.legLGroup.rotation.set(0,0,0),n.legRGroup.rotation.set(0,0,0),n.spineGroup.rotation.set(.12,0,0),n.armLGroup.rotation.set(.5,0,-.25),n.foreArmL.rotation.set(.7,.3,0);const l=n.actionTimer*6%(Math.PI*2),u=Math.sin(l);n.armRGroup.rotation.set(.75+Math.max(0,u)*.28,0,.05),n.foreArmR.rotation.set(.85+Math.max(0,u)*.35,0,0),n.headGroup.rotation.x=Math.max(0,u)*.08;return}if(n.action==="strikeBell"){if(n.pelvis.position.y=.65,n.legLGroup.rotation.set(0,0,0),n.legRGroup.rotation.set(0,0,0),n.actionTimer<1){const l=n.actionTimer/1;n.spineGroup.rotation.set(0,-l*.3,0),n.armRGroup.rotation.set(1.2*l,0,.3),n.foreArmR.rotation.set(.8*l,0,0)}else if(n.actionTimer<1.8){const l=(n.actionTimer-1)/.8;n.spineGroup.rotation.set(.15,.2,0),n.armRGroup.rotation.set(1.4-l*.6,0,-.2),n.foreArmR.rotation.set(1.2-l*.5,0,0)}return}if(n.action==="incense"||n.action==="plantIncense"){if(n.pelvis.position.y=.65,n.legLGroup.rotation.set(0,0,0),n.legRGroup.rotation.set(0,0,0),n.actionTimer<3.8){const l=Math.sin(n.actionTimer*4.5);n.spineGroup.rotation.x=.15+Math.max(0,l)*.35,n.headGroup.rotation.x=Math.max(0,l)*.2,n.armLGroup.rotation.set(.85,0,-.2),n.armRGroup.rotation.set(.85,0,.2),n.foreArmL.rotation.set(1.1,.5,0),n.foreArmR.rotation.set(1.1,-.5,0)}else if(n.actionTimer<5.5){const l=Math.sin((n.actionTimer-3.8)/1.7*Math.PI);n.spineGroup.rotation.x=l*.55,n.armLGroup.rotation.set(1+l*.3,0,-.1),n.armRGroup.rotation.set(1+l*.3,0,.1)}return}if(n.action==="shakeFortune"){n.pelvis.position.y=.65,n.spineGroup.rotation.set(.1,0,0);const l=Math.sin(n.actionTimer*18);n.armLGroup.rotation.set(.85+l*.15,0,-.25),n.armRGroup.rotation.set(.85+l*.15,0,.25),n.foreArmL.rotation.set(1.15+l*.2,.4,0),n.foreArmR.rotation.set(1.15+l*.2,-.4,0),n.headGroup.rotation.x=.1+Math.abs(l)*.05;return}n.pelvis.position.y=.65,n.pelvis.rotation.set(0,0,0),n.legLGroup.rotation.set(0,0,0),n.legRGroup.rotation.set(0,0,0),n.spineGroup.rotation.set(0,0,0),n.armLGroup.rotation.set(.65,0,-.35),n.armRGroup.rotation.set(.65,0,.35),n.foreArmL.rotation.set(.95,.55,0),n.foreArmR.rotation.set(.95,-.55,0);const c=Math.sin(e*1.8)*.015;n.chestGroup.scale.set(1+c,1+c*.6,1+c),n.headGroup.rotation.x=Math.sin(e*1.2)*.02,n.headGroup.rotation.y=Math.sin(e*.8)*.025})}escapeHtml(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}}class rg{constructor(t,e,n,s){this.camera=t,this.domElement=e,this.onMoveCallback=n,this.temple=s,this.position=new I(0,0,18.2),this.rotationY=Math.PI,this.moveSpeed=5.2,this.keys={forward:!1,backward:!1,left:!1,right:!1},this.camDistance=6.2,this.targetCamDistance=6.2,this.camHeight=2.3,this.camPitch=.32,this.targetCamPitch=.32,this.camYaw=Math.PI,this.targetCamYaw=Math.PI,this.isDragging=!1,this.dragStart={x:0,y:0},this.dragMoved=0,this.targetMovePoint=null,this.targetRotYArrival=Math.PI,this.onArriveCallback=null,this.onCancelCallback=null,this.raycaster=new lm,this.mouseVec=new Wt,this.lastSentTime=0,this.sendInterval=1e3/30,this.initEventListeners()}runToTarget(t,e,n,s){this.targetMovePoint=new I(t,0,e),this.targetRotYArrival=typeof n=="number"?n:Math.PI,this.onArriveCallback=s||null}cancelAutoMovement(){this.targetMovePoint=null,this.onArriveCallback=null,this.onCancelCallback&&this.onCancelCallback()}resetToIconicView(){this.targetCamYaw=Math.PI,this.targetCamPitch=.32,this.targetCamDistance=6.2}initEventListeners(){window.addEventListener("keydown",t=>this.handleKeyDown(t)),window.addEventListener("keyup",t=>this.handleKeyUp(t)),this.domElement.addEventListener("pointerdown",t=>{t.target.closest(".interactive-ui")||t.target.closest("button")||t.target.closest("input")||t.target.closest("select")||(this.isDragging=!0,this.dragStart={x:t.clientX,y:t.clientY},this.dragMoved=0)}),window.addEventListener("pointermove",t=>{if(!this.isDragging)return;const e=t.clientX-this.dragStart.x,n=t.clientY-this.dragStart.y;this.dragMoved+=Math.hypot(e,n),this.targetCamYaw-=e*.005,this.targetCamPitch=Math.max(.08,Math.min(Math.PI/2.3,this.targetCamPitch+n*.004)),this.dragStart={x:t.clientX,y:t.clientY}}),window.addEventListener("pointerup",t=>{this.isDragging&&(this.dragMoved<8&&this.handleFloorClick(t),this.isDragging=!1)}),this.domElement.addEventListener("wheel",t=>{this.targetCamDistance=Math.max(2.6,Math.min(10.5,this.targetCamDistance+t.deltaY*.004))},{passive:!0})}handleKeyDown(t){if(!["input","textarea","select"].includes(document.activeElement.tagName.toLowerCase()))switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!0,this.cancelAutoMovement();break;case"KeyS":case"ArrowDown":this.keys.backward=!0,this.cancelAutoMovement();break;case"KeyA":case"ArrowLeft":this.keys.left=!0,this.cancelAutoMovement();break;case"KeyD":case"ArrowRight":this.keys.right=!0,this.cancelAutoMovement();break}}handleKeyUp(t){switch(t.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break}}handleFloorClick(t){if(t.target.closest(".interactive-ui")||t.target.closest("button")||t.target.closest("input")||t.target.closest("select"))return;this.cancelAutoMovement();const e=this.domElement.getBoundingClientRect();this.mouseVec.x=(t.clientX-e.left)/e.width*2-1,this.mouseVec.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.mouseVec,this.camera);const n=new wn(new I(0,1,0),0),s=new I;if(this.raycaster.ray.intersectPlane(n,s)){const o=Math.max(-15,Math.min(15,s.x)),a=Math.max(-6,Math.min(18,s.z));this.targetMovePoint=new I(o,0,a),this.temple&&this.temple.spawnClickRipple&&this.temple.spawnClickRipple(o,a)}}setPosition(t,e,n,s){this.position.set(t,e,n),typeof s=="number"&&(this.rotationY=s)}update(t,e,n){this.camYaw+=(this.targetCamYaw-this.camYaw)*.15,this.camPitch+=(this.targetCamPitch-this.camPitch)*.15,this.camDistance+=(this.targetCamDistance-this.camDistance)*.15;let s=0,r=0;const o=new I(0,0,-1).applyAxisAngle(new I(0,1,0),this.camYaw),a=new I(1,0,0).applyAxisAngle(new I(0,1,0),this.camYaw);let c=!1;if(this.keys.forward&&(s+=o.x,r+=o.z,c=!0),this.keys.backward&&(s-=o.x,r-=o.z,c=!0),this.keys.left&&(s-=a.x,r-=a.z,c=!0),this.keys.right&&(s+=a.x,r+=a.z,c=!0),this.targetMovePoint&&!c){const d=this.targetMovePoint.x-this.position.x,f=this.targetMovePoint.z-this.position.z,p=Math.hypot(d,f);if(p>.16)s=d/p,r=f/p,c=!0;else if(this.targetMovePoint=null,this.rotationY=this.targetRotYArrival||Math.PI,this.onArriveCallback){const g=this.onArriveCallback;this.onArriveCallback=null,g()}}if(c){const d=Math.hypot(s,r);if(d>0){s/=d,r/=d;const f=this.position.x+s*this.moveSpeed*t,p=this.position.z+r*this.moveSpeed*t;this.position.x=Math.max(-15.5,Math.min(15.5,f)),this.position.z=Math.max(-6.2,Math.min(19.2,p)),this.rotationY=Math.atan2(s,r)}}n&&e&&e.updateAvatarData(n,{x:this.position.x,y:this.position.y,z:this.position.z,rotY:this.rotationY});const l=new I(Math.sin(this.camYaw)*Math.cos(this.camPitch)*this.camDistance,Math.sin(this.camPitch)*this.camDistance+this.camHeight,Math.cos(this.camYaw)*Math.cos(this.camPitch)*this.camDistance);this.camera.position.copy(this.position).add(l),this.camera.lookAt(this.position.x,this.position.y+1.25,this.position.z);const u=Date.now();u-this.lastSentTime>this.sendInterval&&c&&(this.lastSentTime=u,this.onMoveCallback&&this.onMoveCallback({x:parseFloat(this.position.x.toFixed(3)),y:parseFloat(this.position.y.toFixed(3)),z:parseFloat(this.position.z.toFixed(3)),rotY:parseFloat(this.rotationY.toFixed(3))}))}}class og{constructor(){this.ctx=null,this.isPlaying=!1,this.currentTrack="woodfish-chant",this.volume=.55,this.masterGain=null,this.musicGain=null,this.sfxGain=null,this.lowPassFilter=null,this.musicTimers=[],this.activeNodes=[],this.chantAudio=new Audio,this.chantAudio.loop=!0,this.chantAudio.crossOrigin="anonymous",this.chantAudio.volume=this.volume,this.chantUrls=["https://media.dieuphapam.net/data/1486/Luc%20Tu%20Di%20Da.mp3","https://ph.tinhtong.vn/Audio/PhatHoc/NiemPhat/01_NamMoADiDaPhat_6Chu_Nhanh.mp3"],this.currentUrlIdx=0}init(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.lowPassFilter=this.ctx.createBiquadFilter(),this.lowPassFilter.type="lowpass",this.lowPassFilter.frequency.setValueAtTime(1200,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1,this.ctx.currentTime),this.musicGain=this.ctx.createGain(),this.musicGain.gain.setValueAtTime(this.volume,this.ctx.currentTime),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.setValueAtTime(.75,this.ctx.currentTime),this.musicGain.connect(this.lowPassFilter),this.sfxGain.connect(this.lowPassFilter),this.lowPassFilter.connect(this.masterGain),this.masterGain.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.musicGain&&this.ctx&&this.musicGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05),this.chantAudio&&(this.chantAudio.volume=this.volume)}playWoodfish(){this.init();const t=this.ctx,e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(720,e),n.frequency.exponentialRampToValueAtTime(280,e+.09),s.gain.setValueAtTime(.7,e),s.gain.exponentialRampToValueAtTime(.001,e+.15),n.connect(s),s.connect(this.sfxGain),n.start(e),n.stop(e+.16);const r=t.createOscillator(),o=t.createGain();r.type="triangle",r.frequency.setValueAtTime(1100,e),r.frequency.exponentialRampToValueAtTime(350,e+.02),o.gain.setValueAtTime(.35,e),o.gain.exponentialRampToValueAtTime(.001,e+.03),r.connect(o),o.connect(this.sfxGain),r.start(e),r.stop(e+.03)}playBell(){this.init();const t=this.ctx,e=t.currentTime,n=216;[{ratio:1,gain:.6,decay:7},{ratio:1.414,gain:.35,decay:5.5},{ratio:2,gain:.25,decay:4.5}].forEach(({ratio:r,gain:o,decay:a})=>{const c=t.createOscillator(),l=t.createGain();c.frequency.setValueAtTime(n*r,e),c.type="sine",l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(o*.4,e+.03),l.gain.exponentialRampToValueAtTime(1e-4,e+a),c.connect(l),l.connect(this.sfxGain),c.start(e),c.stop(e+a)})}selectTrack(t){this.currentTrack=t,this.isPlaying&&(this.stopMusic(),this.startMusic())}toggleMusic(){return this.isPlaying?(this.stopMusic(),!1):(this.startMusic(),!0)}startMusic(){switch(this.init(),this.stopMusic(),this.isPlaying=!0,this.musicGain&&(this.musicGain.gain.setValueAtTime(.001,this.ctx.currentTime),this.musicGain.gain.linearRampToValueAtTime(this.volume,this.ctx.currentTime+1.2)),this.currentTrack){case"woodfish-chant":this.startWoodfishChantTrack();break;case"singing-bowl":this.startSingingBowlTrack();break;case"temple-rain":this.startTempleRainTrack();break;case"nam-mo-a-di-da-phat":this.startNamMoADiDaPhatTrack();break;default:this.startWoodfishChantTrack();break}}startWoodfishChantTrack(){if(!this.isPlaying||!this.ctx)return;let t=0;const e=1080,n=()=>{if(!this.isPlaying||!this.ctx)return;const r=this.ctx.currentTime;t++;const o=this.ctx.createOscillator(),a=this.ctx.createGain(),c=.85+Math.sin(t*1.5)*.08;o.type="sine",o.frequency.setValueAtTime(680,r),o.frequency.exponentialRampToValueAtTime(260,r+.11),a.gain.setValueAtTime(.68*c,r),a.gain.exponentialRampToValueAtTime(.001,r+.16),o.connect(a),a.connect(this.musicGain),o.start(r),o.stop(r+.17);const l=this.ctx.createOscillator(),u=this.ctx.createGain();l.type="triangle",l.frequency.setValueAtTime(980,r),l.frequency.exponentialRampToValueAtTime(320,r+.025),u.gain.setValueAtTime(.32*c,r),u.gain.exponentialRampToValueAtTime(.001,r+.035),l.connect(u),u.connect(this.musicGain),l.start(r),l.stop(r+.04),t%8===0&&this.playGentleBellAccent()};n();const s=setInterval(()=>{n()},e);this.musicTimers.push(s)}playGentleBellAccent(){if(!this.ctx||!this.isPlaying)return;const t=this.ctx,e=t.currentTime,n=220;[1,1.414,2.76].forEach((s,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="sine",o.frequency.setValueAtTime(n*s,e);const c=.28/(r+1);a.gain.setValueAtTime(.001,e),a.gain.linearRampToValueAtTime(c,e+.04),a.gain.exponentialRampToValueAtTime(1e-4,e+6.5),o.connect(a),a.connect(this.musicGain),o.start(e),o.stop(e+6.6)})}stopMusic(){if(this.isPlaying=!1,this.chantAudio)try{this.chantAudio.pause(),this.chantAudio.currentTime=0}catch{}this.musicTimers.forEach(t=>clearInterval(t)),this.musicTimers=[],this.activeNodes.forEach(t=>{try{t.stop&&t.stop(),t.disconnect&&t.disconnect()}catch{}}),this.activeNodes=[]}startNamMoADiDaPhatTrack(){if(this.chantUrls[this.currentUrlIdx]){this.chantAudio.src=this.chantUrls[this.currentUrlIdx],this.chantAudio.volume=this.volume;const t=this.chantAudio.play();t!==void 0&&t.then(()=>{}).catch(e=>{this.playWarmChantSynth()})}else this.playWarmChantSynth();setTimeout(()=>{this.isPlaying&&this.chantAudio.paused&&this.playWarmChantSynth()},2500)}playWarmChantSynth(){const t=this.ctx;if(!this.isPlaying)return;const e=t.createBiquadFilter();e.type="lowpass",e.frequency.setValueAtTime(650,t.currentTime),e.connect(this.musicGain),[87.31,130.81].forEach(a=>{const c=t.createOscillator(),l=t.createGain();c.type="sine",c.frequency.setValueAtTime(a,t.currentTime),l.gain.setValueAtTime(.045,t.currentTime),c.connect(l),l.connect(e),c.start(),this.activeNodes.push(c,l)});const n=[{text:"Nam",freq:174.61,dur:1.6},{text:"Mô",freq:196,dur:1.6},{text:"A",freq:233.08,dur:1.8},{text:"Di",freq:261.63,dur:1.8},{text:"Đà",freq:233.08,dur:2},{text:"Phật",freq:174.61,dur:2.4}];let s=0;const r=()=>{if(!this.isPlaying)return;const a=n[s],c=t.currentTime,l=t.createOscillator(),u=t.createGain();if(l.type="sine",l.frequency.setValueAtTime(a.freq,c),u.gain.setValueAtTime(1e-4,c),u.gain.linearRampToValueAtTime(.085,c+.4),u.gain.setValueAtTime(.08,c+a.dur-.5),u.gain.exponentialRampToValueAtTime(1e-4,c+a.dur),l.connect(u),u.connect(e),l.start(c),l.stop(c+a.dur),a.text==="Phật"){const d=t.createOscillator(),f=t.createGain();d.type="sine",d.frequency.setValueAtTime(432,c),f.gain.setValueAtTime(.02,c),f.gain.exponentialRampToValueAtTime(1e-4,c+3.5),d.connect(f),f.connect(e),d.start(c),d.stop(c+3.5)}s=(s+1)%n.length};r();const o=setInterval(r,1950);this.musicTimers.push(o)}startSingingBowlTrack(){const t=this.ctx,e=216,n=()=>{if(!this.isPlaying)return;const r=t.currentTime;[{mult:1,gain:.12,decay:8.5},{mult:2,gain:.06,decay:6}].forEach(({mult:a,gain:c,decay:l})=>{const u=t.createOscillator(),d=t.createGain();u.type="sine",u.frequency.setValueAtTime(e*a,r),d.gain.setValueAtTime(1e-4,r),d.gain.linearRampToValueAtTime(c*.7,r+.1),d.gain.exponentialRampToValueAtTime(1e-4,r+l),u.connect(d),d.connect(this.musicGain),u.start(r),u.stop(r+l)})};n();const s=setInterval(n,7e3);this.musicTimers.push(s)}startTempleRainTrack(){const t=this.ctx,e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),s=n.getChannelData(0);let r=0;for(let l=0;l<e;l++){const u=Math.random()*2-1;s[l]=(r+.02*u)/1.02,r=s[l],s[l]*=.12}const o=t.createBufferSource();o.buffer=n,o.loop=!0;const a=t.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(750,t.currentTime);const c=t.createGain();c.gain.setValueAtTime(.06,t.currentTime),o.connect(a),a.connect(c),c.connect(this.musicGain),o.start(),this.activeNodes.push(o,a,c)}}const me=new og,Ut={IDLE:"IDLE",NAVIGATING_TO_CUSHION:"NAVIGATING_TO_CUSHION",MEDITATING:"MEDITATING",BOWING_3_TIMES:"BOWING_3_TIMES",NAVIGATING_TO_WOODFISH:"NAVIGATING_TO_WOODFISH",STRIKING_WOODFISH:"STRIKING_WOODFISH",NAVIGATING_TO_BELL:"NAVIGATING_TO_BELL",STRIKING_BELL:"STRIKING_BELL",INCENSE_FETCH:"INCENSE_FETCH",INCENSE_WALK_TO_ALTAR:"INCENSE_WALK_TO_ALTAR",INCENSE_PLANT:"INCENSE_PLANT",FORTUNE_WALK:"FORTUNE_WALK",FORTUNE_SHAKE:"FORTUNE_SHAKE",FORTUNE_DROP:"FORTUNE_DROP"};class ag{constructor(t){this.app=t,this.currentState=Ut.IDLE,this.stateTimer=0,this.bowCount=0,this.woodfishInterval=null,this.targetPoint=null,this.targetRotY=Math.PI,this.onArriveCallback=null}getState(){return this.currentState}isBusyWithRitual(){return[Ut.NAVIGATING_TO_CUSHION,Ut.MEDITATING,Ut.BOWING_3_TIMES,Ut.NAVIGATING_TO_WOODFISH,Ut.STRIKING_WOODFISH,Ut.NAVIGATING_TO_BELL,Ut.STRIKING_BELL,Ut.INCENSE_FETCH,Ut.INCENSE_WALK_TO_ALTAR,Ut.INCENSE_PLANT,Ut.FORTUNE_WALK,Ut.FORTUNE_SHAKE,Ut.FORTUNE_DROP].includes(this.currentState)}cancelRitual(){this.clearTimers(),this.targetPoint=null,this.onArriveCallback=null,this.currentState=Ut.IDLE,this.app.avatarManager&&this.app.myId&&this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand")}clearTimers(){this.woodfishInterval&&(clearInterval(this.woodfishInterval),this.woodfishInterval=null)}startMeditation(){if(this.currentState===Ut.MEDITATING){this.cancelRitual(),this.app.showToast("Đã xuất thiền, đứng dậy trang nghiêm 🙏");return}this.clearTimers();const t=this.app.controller.position.x,e=this.app.controller.position.z,n=this.app.temple.findNearestCushion(t,e);this.currentState=Ut.NAVIGATING_TO_CUSHION,this.stateTimer=0,this.app.showToast("Đang bước lại bồ đoàn tọa thiền..."),this.app.updateActionButtonsUI("sit"),this.navigateTo(n.x,n.z,Math.PI,()=>{this.currentState=Ut.MEDITATING,this.stateTimer=0,this.app.avatarManager.setAction(this.app.myId,"sit"),this.app.socket&&this.app.socket.emit("action",{action:"sit"}),this.app.showToast("Đã an tọa thiền định kiết già trên bồ đoàn 🙏"),this.app.showFloatingMerit("+1 Thiền Định",this.app.controller.position)})}startBowing(){this.clearTimers(),this.currentState=Ut.BOWING_3_TIMES,this.stateTimer=0,this.bowCount=1,this.app.controller.rotationY=Math.PI,this.app.avatarManager.setAction(this.app.myId,"bow3Times"),this.app.socket&&this.app.socket.emit("action",{action:"bow3Times"}),this.app.updateActionButtonsUI("bow"),this.app.showToast("Thành tâm chắp tay đảnh lễ Tam Bảo: Lạy 1/3 🙏"),this.app.playTempleChime(),setTimeout(()=>{this.currentState===Ut.BOWING_3_TIMES&&(this.bowCount=2,this.app.showToast("Thành tâm đảnh lễ Chánh Pháp: Lạy 2/3 🙏"),this.app.playTempleChime())},2400),setTimeout(()=>{this.currentState===Ut.BOWING_3_TIMES&&(this.bowCount=3,this.app.showToast("Thành tâm đảnh lễ Tăng Bảo: Lạy 3/3 🙏"),this.app.playTempleChime())},4800),setTimeout(()=>{this.currentState===Ut.BOWING_3_TIMES&&(this.currentState=Ut.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"),this.app.showToast("Tam bái viên mãn, công đức vô lượng! 🙏"),this.app.showFloatingMerit("+3 Lễ Phật",this.app.controller.position))},7200)}startWoodfish(){if(this.currentState===Ut.STRIKING_WOODFISH){this.cancelRitual(),this.app.showToast("Đã dừng gõ mõ 🙏");return}this.clearTimers();const t=this.app.temple.interactiveStations.woodfish;this.currentState=Ut.NAVIGATING_TO_WOODFISH,this.stateTimer=0,this.app.showToast("Đang bước lại kệ Mõ Gỗ Bát Nhã..."),this.app.updateActionButtonsUI("woodfish"),this.navigateTo(t.x,t.z,t.rotY,()=>{this.currentState=Ut.STRIKING_WOODFISH,this.stateTimer=0,this.app.avatarManager.setAction(this.app.myId,"strikeWoodfish"),this.app.socket&&this.app.socket.emit("action",{action:"strikeWoodfish"}),this.app.showToast("Đang gõ mõ tụng kinh liên tục... (Nhấn di chuyển để dừng)"),this.executeWoodfishStrike(),this.woodfishInterval=setInterval(()=>{if(this.currentState!==Ut.STRIKING_WOODFISH){this.clearTimers();return}this.executeWoodfishStrike()},1050)})}executeWoodfishStrike(){this.app.audio.playWoodfish(),this.app.socket&&this.app.socket.emit("strikeWoodfish");const t=this.app.temple.interactiveStations.woodfish;this.app.temple.spawnClickRipple(t.x+1.2,t.z),this.app.showFloatingMerit("+1 Công Đức",this.app.controller.position)}startBell(){this.clearTimers();const t=this.app.temple.interactiveStations.bell;this.currentState=Ut.NAVIGATING_TO_BELL,this.stateTimer=0,this.app.showToast("Đang bước lại Đại Hồng Chung..."),this.app.updateActionButtonsUI("bell"),this.navigateTo(t.x,t.z,t.rotY,()=>{this.currentState=Ut.STRIKING_BELL,this.stateTimer=0,this.app.avatarManager.setAction(this.app.myId,"strikeBell"),this.app.socket&&this.app.socket.emit("action",{action:"strikeBell"}),setTimeout(()=>{this.currentState===Ut.STRIKING_BELL&&(this.app.audio.playBell(),this.app.temple.spawnClickRipple(t.x-1.4,t.z),this.app.socket&&this.app.socket.emit("strikeBell"),this.app.showToast("Đại Hồng Chung ngân vang rền mười phương! 🙏 (+5 Công đức)"),this.app.showFloatingMerit("+5 Thỉnh Chuông",this.app.controller.position),setTimeout(()=>{this.currentState===Ut.STRIKING_BELL&&(this.currentState=Ut.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"))},1200))},1e3)})}startIncense(){this.clearTimers();const t=this.app.temple.interactiveStations.incenseTable,e=this.app.temple.interactiveStations.incenseBurner;this.currentState=Ut.INCENSE_FETCH,this.stateTimer=0,this.app.showToast("Bước đến bàn thỉnh 3 nén hương trầm..."),this.app.updateActionButtonsUI("incense"),this.navigateTo(t.x,t.z,t.rotY,()=>{this.app.avatarManager.setAction(this.app.myId,"incense"),this.app.socket&&this.app.socket.emit("action",{action:"incense"}),this.app.showToast("Đã thỉnh và châm 3 nén tâm hương. Cung kính tiến về trước Phật điện..."),this.app.audio.playWoodfish(),setTimeout(()=>{this.currentState===Ut.INCENSE_FETCH&&(this.currentState=Ut.INCENSE_WALK_TO_ALTAR,this.navigateTo(e.x,e.z,e.rotY,()=>{this.currentState=Ut.INCENSE_PLANT,this.app.showToast("Cung kính vái 3 vái và cắm hương vào lư đồng..."),setTimeout(()=>{this.currentState===Ut.INCENSE_PLANT&&(this.app.socket&&this.app.socket.emit("lightIncense"),this.app.showToast("Đã dâng 3 nén tâm hương cúng dường Phật Tổ! 🙏 (+3 Công đức)"),this.app.showFloatingMerit("+3 Dâng Hương",this.app.controller.position),this.app.playTempleChime(),setTimeout(()=>{this.currentState===Ut.INCENSE_PLANT&&(this.currentState=Ut.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand"))},1e3))},4500)}))},1200)})}startFortune(){this.clearTimers();const t=this.app.temple.interactiveStations.fortuneTable;this.currentState=Ut.FORTUNE_WALK,this.stateTimer=0,this.app.showToast("Bước đến bàn xin xăm Quán Thế Âm..."),this.app.updateActionButtonsUI("fortune"),this.navigateTo(t.x,t.z,t.rotY,()=>{this.currentState=Ut.FORTUNE_SHAKE,this.app.avatarManager.setAction(this.app.myId,"shakeFortune"),this.app.socket&&this.app.socket.emit("action",{action:"shakeFortune"}),this.app.showToast("Thành tâm nâng ống xăm... Lắc xóc đều tay..."),this.app.playFortuneRattleAudio(),setTimeout(()=>{this.currentState===Ut.FORTUNE_SHAKE&&(this.currentState=Ut.FORTUNE_DROP,this.app.temple.spawnDroppingFortuneStick(t.x,t.z+.5,()=>{this.app.audio.playWoodfish(),this.app.socket&&this.app.socket.emit("drawFortune"),this.app.showFloatingMerit("+2 Gieo Quẻ",this.app.controller.position),this.currentState=Ut.IDLE,this.app.avatarManager.setAction(this.app.myId,"stand"),this.app.socket&&this.app.socket.emit("action",{action:"stand"}),this.app.updateActionButtonsUI("stand")}))},2600)})}navigateTo(t,e,n,s){this.targetPoint={x:t,z:e},this.targetRotY=n,this.onArriveCallback=s}update(t){if(this.stateTimer+=t,this.targetPoint){const e=this.app.controller.position,n=this.targetPoint.x-e.x,s=this.targetPoint.z-e.z,r=Math.hypot(n,s);if(r>.12){const a=Math.min(r,4.8*t);e.x+=n/r*a,e.z+=s/r*a,this.app.controller.rotationY=Math.atan2(n,s),this.app.sendLocalPosition()}else{e.x=this.targetPoint.x,e.z=this.targetPoint.z,this.app.controller.rotationY=this.targetRotY,this.app.sendLocalPosition();const o=this.onArriveCallback;this.targetPoint=null,this.onArriveCallback=null,o&&o()}}}}const gs=["Thích thì nhích","Thích ăn chực","Thích đủ thứ","Thích tạo nghiệp","Thích ngủ nướng","Thích ăn vặt","Thích nhiều chuyện","Thích cúng dường","Thích an lạc","Thích buông bỏ","Thích tĩnh tâm","Thích trà đạo","Thích tàu hủ","Thích ăn nhậu","Thích trúng số","Thích thì chìu","Thích im lặng","Thích drama","Thích sống ảo","Thích vô đây"];class cg{constructor(){this.canvasContainer=document.getElementById("canvas-container"),this.css2dContainer=document.getElementById("css2d-container"),this.socket=null,this.myId=null,this.myName=gs[Math.floor(Math.random()*gs.length)],this.myRoomId="dai-hung-bao-dien",this.currentAction="stand",this.selectedRobeColor="#E69500",this.audio=me,this.fsm=null,this.initThree(),this.fsm=new ag(this),this.initUI(),this.initMusicControls(),this.autoJoinTemple()}initThree(){this.scene=new im,this.camera=new Ne(50,window.innerWidth/window.innerHeight,.1,200),this.camera.position.set(0,3,10),this.renderer=new nm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=oc,this.renderer.toneMapping=cc,this.renderer.toneMappingExposure=1.38,this.canvasContainer.appendChild(this.renderer.domElement),this.css2dRenderer=new um,this.css2dRenderer.setSize(window.innerWidth,window.innerHeight),this.css2dRenderer.domElement.style.position="absolute",this.css2dRenderer.domElement.style.top="0",this.css2dRenderer.domElement.style.left="0",this.css2dRenderer.domElement.style.pointerEvents="none",this.css2dContainer.appendChild(this.css2dRenderer.domElement),this.temple=new ig(this.scene),this.avatarManager=new sg(this.scene),this.controller=new rg(this.camera,this.renderer.domElement,t=>{this.socket&&this.myId&&this.socket.emit("move",t)},this.temple),window.addEventListener("resize",()=>this.onWindowResize()),this.clock=new kc,this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.css2dRenderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1);this.temple.update(t),this.avatarManager.update(t),this.fsm&&this.fsm.update(t),this.controller.update(t,this.avatarManager,this.myId),this.renderer.render(this.scene,this.camera),this.css2dRenderer.render(this.scene,this.camera)}initMusicControls(){const t=document.getElementById("btn-toggle-music"),e=document.getElementById("music-state-text"),n=document.getElementById("audio-wave"),s=document.getElementById("select-track"),r=document.getElementById("volume-slider"),o=c=>{c?(t.classList.add("playing"),e.textContent="Đang Gõ Mõ",n.classList.add("active")):(t.classList.remove("playing"),e.textContent="Bật Mõ Thiền",n.classList.remove("active"))};t.addEventListener("click",()=>{const c=me.toggleMusic();o(c)}),s.addEventListener("change",c=>{me.selectTrack(c.target.value),me.isPlaying||me.startMusic(),o(!0)}),r.addEventListener("input",c=>{const l=parseFloat(c.target.value)/100;me.setVolume(l)}),this.updateMusicUI=o;const a=()=>{me.isPlaying||(me.startMusic(),o(!0)),window.removeEventListener("pointerdown",a),window.removeEventListener("keydown",a)};window.addEventListener("pointerdown",a),window.addEventListener("keydown",a)}initUI(){const e=new URLSearchParams(window.location.search).get("room");if(e){this.myRoomId=e;const g=document.getElementById("input-room");g&&(g.value=e)}document.getElementById("header-my-name").textContent=this.myName,document.getElementById("input-name").value=this.myName,document.getElementById("header-avatar-dot").style.background=this.selectedRobeColor,document.getElementById("btn-reset-cam").addEventListener("click",()=>{this.controller.resetToIconicView(),this.showToast("📷 Đã quay về góc nhìn Chánh Điện!")});const n=document.getElementById("profile-modal");document.getElementById("btn-open-profile").addEventListener("click",()=>{n.style.display="flex"}),document.getElementById("btn-save-profile").addEventListener("click",()=>{const g=document.getElementById("input-name").value.trim(),_=document.getElementById("input-room").value.trim()||"dai-hung-bao-dien";g&&(this.myName=g),document.getElementById("header-my-name").textContent=this.myName,document.getElementById("header-avatar-dot").style.background=this.selectedRobeColor,n.style.display="none",_!==this.myRoomId?window.location.search=`?room=${encodeURIComponent(_)}`:this.socket&&this.socket.emit("join",{name:this.myName,roomId:this.myRoomId,robeColor:this.selectedRobeColor}),this.showToast(`✨ Đã cập nhật pháp danh: ${this.myName}`)});const s=document.getElementById("btn-random-name"),r=document.getElementById("input-name");s.addEventListener("click",()=>{const g=gs[Math.floor(Math.random()*gs.length)];r.value=g}),document.querySelectorAll(".name-tag").forEach(g=>{g.addEventListener("click",()=>{r.value=g.textContent})});const o=document.querySelectorAll(".robe-color-opt");o.forEach(g=>{g.addEventListener("click",()=>{o.forEach(m=>m.classList.remove("selected")),g.classList.add("selected"),this.selectedRobeColor=g.getAttribute("data-color");const _=document.getElementById("avatar-preview-badge");_&&(_.style.borderColor=this.selectedRobeColor)})});const a=document.getElementById("btn-sound");a.addEventListener("click",()=>{if(me.sfxGain){const g=me.sfxGain.gain.value===0;me.sfxGain.gain.setValueAtTime(g?.85:0,me.ctx.currentTime),a.textContent=g?"🔔":"🔕",a.title=g?"Tắt Hiệu Ứng":"Bật Hiệu Ứng"}}),document.getElementById("btn-share").addEventListener("click",()=>{const g=new URL(window.location.href);g.searchParams.set("room",this.myRoomId),navigator.clipboard.writeText(g.href).then(()=>{this.showToast("🔗 Đã copy link phòng! Gửi cho bạn bè để cùng vào chùa.")}).catch(()=>{this.showToast(`Link phòng: ${g.href}`)})});const l=document.getElementById("chat-panel-toggle"),u=document.getElementById("chat-panel"),d=document.getElementById("chat-toggle-icon");l.addEventListener("click",()=>{u.classList.toggle("collapsed"),d.textContent=u.classList.contains("collapsed")?"▲":"▼"});const f=document.getElementById("chat-form"),p=document.getElementById("chat-input");f.addEventListener("submit",g=>{g.preventDefault();const _=p.value.trim();!_||!this.socket||(this.socket.emit("chat",{text:_}),p.value="")}),document.querySelectorAll(".preset-chip").forEach(g=>{g.addEventListener("click",()=>{const _=g.getAttribute("data-msg");_&&this.socket&&this.socket.emit("chat",{text:_})})}),document.getElementById("act-sit").addEventListener("click",()=>this.fsm.startMeditation()),document.getElementById("act-bow").addEventListener("click",()=>this.fsm.startBowing()),document.getElementById("act-woodfish").addEventListener("click",()=>this.fsm.startWoodfish()),document.getElementById("act-bell").addEventListener("click",()=>this.fsm.startBell()),document.getElementById("act-incense").addEventListener("click",()=>this.fsm.startIncense()),document.getElementById("act-fortune").addEventListener("click",()=>this.fsm.startFortune()),window.addEventListener("keydown",g=>{if(!["input","textarea","select"].includes(document.activeElement.tagName.toLowerCase()))switch(g.key){case"1":this.fsm.startMeditation();break;case"2":this.fsm.startBowing();break;case"3":this.fsm.startWoodfish();break;case"4":this.fsm.startBell();break;case"5":this.fsm.startIncense();break;case"6":this.fsm.startFortune();break;case"Enter":g.preventDefault(),p.focus();break}}),document.getElementById("btn-close-fortune").addEventListener("click",()=>{document.getElementById("fortune-modal").style.display="none"}),this.controller&&(this.controller.onCancelCallback=()=>{this.fsm.cancelRitual()})}sendLocalPosition(){this.socket&&this.myId&&(this.socket.emit("move",{x:this.controller.position.x,y:this.controller.position.y,z:this.controller.position.z,rotationY:this.controller.rotationY}),this.avatarManager.updateAvatarData(this.myId,{x:this.controller.position.x,y:this.controller.position.y,z:this.controller.position.z,rotationY:this.controller.rotationY}))}updateActionButtonsUI(t){this.currentAction=t,["sit","bow","woodfish","bell","incense","fortune"].forEach(e=>{const n=document.getElementById(`act-${e}`);n&&(t===e||e==="bow"&&t==="bow3Times"||e==="woodfish"&&t==="strikeWoodfish"?n.classList.add("active"):n.classList.remove("active"))})}playTempleChime(){me.playGentleBellAccent()}showFloatingMerit(t,e){if(!this.camera)return;const n=e?e.clone():this.controller.position.clone();if(n.y+=2.1,n.project(this.camera),n.z>1)return;const s=(n.x*.5+.5)*window.innerWidth,r=(-n.y*.5+.5)*window.innerHeight,o=document.createElement("div");o.className="floating-merit-badge",o.textContent=t,o.style.left=`${s}px`,o.style.top=`${r}px`,document.body.appendChild(o),setTimeout(()=>o.remove(),1300)}playFortuneRattleAudio(){if(!me||!me.ctx)return;const t=me.ctx;for(let e=0;e<7;e++)setTimeout(()=>{if(!t)return;const n=t.currentTime,s=t.createOscillator(),r=t.createGain();s.type="triangle",s.frequency.setValueAtTime(620+Math.random()*260,n),s.frequency.exponentialRampToValueAtTime(200,n+.04),r.gain.setValueAtTime(.3,n),r.gain.exponentialRampToValueAtTime(.001,n+.05),s.connect(r),r.connect(t.destination),s.start(n),s.stop(n+.05)},e*340)}setAction(t){this.currentAction=t,this.updateActionButtonsUI(t),this.avatarManager&&this.myId&&this.avatarManager.setAction(this.myId,this.currentAction),this.socket&&this.socket.emit("action",{action:this.currentAction})}autoJoinTemple(){this.socket=As({transports:["websocket","polling"]}),this.socket.on("connect",()=>{this.socket.emit("join",{name:this.myName,roomId:this.myRoomId,robeColor:this.selectedRobeColor})}),this.socket.on("initRoom",t=>{this.myId=t.yourId,this.avatarManager.setLocalPlayerId(this.myId),document.getElementById("room-name-display").textContent=t.roomName||"Đại Hùng Bảo Điện",document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),document.getElementById("online-count-display").textContent=t.players.length,t.players.forEach(e=>{this.avatarManager.createAvatar(e),e.id===this.myId&&this.controller.setPosition(e.x,e.y,e.z,e.rotY),e.action&&this.avatarManager.setAction(e.id,e.action)}),t.chatHistory&&t.chatHistory.forEach(e=>this.appendChatMessage(e)),this.showToast(`🙏 A Di Đà Phật! Đã vào chùa với pháp danh: [${this.myName}]`)}),this.socket.on("playerJoined",t=>{this.avatarManager.createAvatar(t),this.updateOnlineCount(1)}),this.socket.on("playerMoved",t=>{this.avatarManager.updateAvatarData(t.id,t)}),this.socket.on("playerActionChanged",({id:t,action:e})=>{this.avatarManager.setAction(t,e)}),this.socket.on("newChatMessage",t=>{this.appendChatMessage(t)}),this.socket.on("showBubble",({playerId:t,text:e,duration:n})=>{this.avatarManager.showBubble(t,e,n)}),this.socket.on("woodfishStruck",t=>{me.playWoodfish(),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),this.avatarManager.updateMerit(t.playerId,t.playerMerit),this.triggerFloatingMerit("+1 Công Đức 🪷",t.playerId)}),this.socket.on("bellStruck",t=>{me.playBell(),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),this.avatarManager.updateMerit(t.playerId,t.playerMerit),this.triggerFloatingMerit("+5 Công Đức 🔔",t.playerId)}),this.socket.on("incenseLit",t=>{me.playBell(),document.getElementById("total-merit-display").textContent=t.totalMerit.toLocaleString(),this.triggerFloatingMerit("+3 Công Đức 🪔",t.playerId)}),this.socket.on("fortuneResult",t=>{me.playBell(),this.showFortuneModal(t)}),this.socket.on("playerLeft",t=>{this.avatarManager.removeAvatar(t.id),this.updateOnlineCount(-1),this.appendChatMessage({senderName:"Chính Điện",text:`Đồng tu [${t.name}] đã rời bước. Chúc vạn sự bình yên!`})})}appendChatMessage(t){const e=document.getElementById("chat-messages");if(!e)return;const n=document.createElement("div");t.senderId==="system"?(n.className="chat-msg system",n.textContent=t.text):(n.className="chat-msg",n.innerHTML=`<span class="sender">${this.avatarManager.escapeHtml(t.senderName)}:</span> ${this.avatarManager.escapeHtml(t.text)}`),e.appendChild(n),e.scrollTop=e.scrollHeight}showFortuneModal(t){document.getElementById("fortune-title").textContent=t.title,document.getElementById("fortune-poem").textContent=t.poem,document.getElementById("fortune-advice").textContent=`💡 Lời Phật dạy: ${t.advice}`,document.getElementById("fortune-modal").style.display="flex"}triggerFloatingMerit(t,e){const n=this.avatarManager.avatars.get(e);let s=window.innerWidth/2,r=window.innerHeight/2;if(n){const a=n.group.position.clone();a.y+=2.25,a.project(this.camera),s=(a.x*.5+.5)*window.innerWidth,r=(-(a.y*.5)+.5)*window.innerHeight}const o=document.createElement("div");o.className="floating-merit",o.textContent=t,o.style.left=`${s}px`,o.style.top=`${r}px`,document.body.appendChild(o),setTimeout(()=>o.remove(),1200)}showToast(t){const e=document.createElement("div");e.className="toast-notice",e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.remove(),2800)}updateOnlineCount(t){const e=document.getElementById("online-count-display"),n=parseInt(e.textContent)||1;e.textContent=Math.max(1,n+t)}}window.addEventListener("DOMContentLoaded",()=>{new cg});
