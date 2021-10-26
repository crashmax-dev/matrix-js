!function(t,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var s=i();for(var e in s)("object"==typeof exports?exports:t)[e]=s[e]}}(this,(function(){return(()=>{"use strict";var t={665:function(t,i,s){var e=this&&this.__awaiter||function(t,i,s,e){return new(s||(s=Promise))((function(n,a){function o(t){try{h(e.next(t))}catch(t){a(t)}}function r(t){try{h(e.throw(t))}catch(t){a(t)}}function h(t){var i;t.done?n(t.value):(i=t.value,i instanceof s?i:new s((function(t){t(i)}))).then(o,r)}h((e=e.apply(t,i||[])).next())}))};Object.defineProperty(i,"__esModule",{value:!0}),i.Entity=void 0;var n=s(335);i.Entity=class{constructor(t,i){this.options={files:[],size:[32,32],rotate:[-30,30],opacity:.5,speed:30,count:30},this.flyingEntities=[],this.images=[],this.matrix=t,this.options=Object.assign(Object.assign({},this.options),i),this.loadImages()}loadImages(){return e(this,void 0,void 0,(function*(){var t=this,i=function*(i){t.images.push(yield new Promise(((s,e)=>{var n=new Image(t.options.size[0],t.options.size[1]);n.src=i,n.onload=()=>s(n),n.onerror=e})))};for(var s of this.options.files)yield*i(s)}))}randomImage(){return this.images[(0,n.randomInt)(0,this.images.length-1)].src}start(){this.interval||(this.interval=setInterval((()=>{this.render()}),this.options.speed))}stop(){this.interval&&(clearInterval(this.interval),this.interval=null)}clear(){this.flyingEntities.forEach((t=>t.img.remove())),this.flyingEntities=[]}createEntity(){for(;this.flyingEntities.length!==this.options.count;){var t=new Image;t.src=this.randomImage(),t.style.userSelect="none",t.style.position="absolute",t.style.width=(0,n.randomInt)(this.options.size[0],this.options.size[1])/window.devicePixelRatio+"px",t.style.opacity=this.options.opacity.toString(),document.body.appendChild(t),this.flyingEntities.push({dx:0,x:Math.random()*(this.matrix.canvas.width-this.options.size[0]),y:Math.random()>.8?-this.options.size[0]:Math.random()*this.matrix.canvas.height,am:20*Math.random(),stepX:.02+Math.random()/10,stepY:.7+Math.random(),rotate:(0,n.randomInt)(this.options.rotate[0],this.options.rotate[1]),img:t})}}render(){if(this.matrix.ctx&&this.matrix.running&&this.images.length===this.options.files.length){this.createEntity();for(var t=this.flyingEntities,i=0;i<t.length;++i)t[i].y+=t[i].stepY,t[i].y>this.matrix.canvas.height+this.options.size[0]&&(t[i].x=Math.random()*(this.matrix.canvas.width-t[i].am-this.options.size[0]),t[i].y=-this.options.size[0],t[i].stepX=.02+Math.random()/10,t[i].stepY=.7+Math.random()),t[i].dx+=t[i].stepX,t[i].img.style.top=t[i].y+"px",t[i].img.style.left=t[i].x+t[i].am*Math.sin(t[i].dx)+"px",(this.options.rotate[0]||this.options.rotate[1])&&(t[i].img.style.transform="rotate("+(t[i].rotate+30*Math.sin(t[i].dx))+"deg)")}}}},698:(t,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.Matrix=void 0;var e=s(335),n=s(665),a=s(231);i.Matrix=class{constructor(t,i){var s;this.running=!1,this.traces=[],this.target=t,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.target.appendChild(this.canvas),this.entity=new n.Entity(this,i.entity),this.splash=new a.Splash(this,i.splash),this.font=new FontFace(i.font.family,"url(".concat(i.font.file,")")),this.fontSize=i.font.size,this.tracesCount=Math.round(window.innerWidth/10),this.autoresize=null===(s=i.autoresize)||void 0===s||s,this.symbols=i.symbols,this.colors=i.font.colors||["#225400","#66FF00","#155400","#395410","#7FFF00","#005400","#2A5400","#3FFF00","#00FF00","#ADFF2F"],this.autoresize&&window.addEventListener("resize",(()=>{this.setSize()})),this.setSize()}start(){this.running||this.font.load().then((()=>{this.running=!0,this.render(),this.splash.start(),this.entity.start()})).catch((()=>{throw new Error("Failed loading `font.file`")}))}stop(){this.running=!1,this.clear()}clear(){this.ctx&&(this.traces=[],this.ctx.save(),this.ctx.globalCompositeOperation="copy",this.ctx.lineTo(0,0),this.ctx.stroke(),this.ctx.restore(),this.entity.clear())}pause(){this.running=!this.running,this.running&&this.render()}randomColor(){return this.colors[(0,e.randomInt)(0,this.colors.length-1)]}setSize(){var{width:t=this.target.clientWidth,height:i=this.target.clientHeight}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.canvas.width=t,this.canvas.height=i}initTraces(){for(;this.traces.length!==this.tracesCount;)this.traces.push((0,e.randomInt)(0,1e3))}render(){this.ctx&&this.running&&(this.traces.length!==this.tracesCount&&this.initTraces(),window.requestAnimationFrame((()=>this.render())),this.ctx.fillStyle="rgba(0, 0, 0, .05)",this.ctx.fillRect(0,0,this.canvas.width-window.devicePixelRatio,this.canvas.height-window.devicePixelRatio),this.ctx.fillStyle=this.randomColor(),this.ctx.font="".concat(this.fontSize,"pt ").concat(this.font.family),this.traces.map(((t,i)=>{var s,e=(null===(s=this.symbols)||void 0===s?void 0:s.call(this))||String.fromCharCode(100+28*Math.random()),n=i*this.fontSize+this.fontSize;this.ctx.fillText(e,n,t),t>100+1e4*Math.random()?this.traces[i]=0:this.traces[i]=t+10})))}}},231:(t,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.Splash=void 0;var e=s(335);i.Splash=class{constructor(t,i){this.options={interval:200,enable:!1,colors:[],texts:[],size:40},this.isVisible=!0,this.matrix=t,this.options=Object.assign(Object.assign({},this.options),i)}randomSplash(){return this.options.texts[(0,e.randomInt)(0,this.options.texts.length-1)]}updateVisibleState(){this.isVisible="hidden"!==document.visibilityState}start(){this.interval||(this.interval=setInterval((()=>{this.updateVisibleState(),this.render()}),this.options.interval))}stop(){this.interval&&(clearInterval(this.interval),this.interval=null)}render(){this.isVisible&&this.matrix.ctx&&this.matrix.running&&(this.matrix.ctx.save(),this.matrix.ctx.fillStyle=this.matrix.randomColor(),this.matrix.ctx.font="".concat(this.options.size/window.devicePixelRatio,"pt ").concat(this.matrix.font.family),this.matrix.ctx.rotate((0,e.randomInt)(0,360)),this.matrix.ctx.fillText(this.randomSplash(),(0,e.randomInt)(200,this.matrix.canvas.width-200),(0,e.randomInt)(200,this.matrix.canvas.height-200)),this.matrix.ctx.restore())}}},335:(t,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.randomInt=void 0;var e=s(888);Object.defineProperty(i,"randomInt",{enumerable:!0,get:function(){return e.randomInt}})},888:(t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.randomInt=void 0,i.randomInt=function(t,i){return Math.floor(t+Math.random()*(i+1-t))}}},i={};function s(e){var n=i[e];if(void 0!==n)return n.exports;var a=i[e]={exports:{}};return t[e].call(a.exports,a,a.exports,s),a.exports}var e={};return(()=>{var t=e;Object.defineProperty(t,"__esModule",{value:!0}),t.Matrix=void 0;var i=s(698);t.Matrix=class{constructor(t,s){this._=new i.Matrix(t,s)}get isRunning(){return this._.running}start(){this._.start()}stop(){this._.stop()}clear(){this._.clear()}pause(){this._.pause()}}})(),e})()}));