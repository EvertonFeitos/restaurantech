"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[233],{233:(B,p,i)=>{i.r(p),i.d(p,{QrCodeReaderPage:()=>Q});var u=i(467),v=i(177),h=i(4341),m=i(4613),d=i(4742),C=i(224),O=i(5079),E=i(5873),P=i(1109),R=i(8313),e=i(3953),y=i(4847),M=i(6828),I=i(6193),T=i(9313);const b=["action"];function A(l,f){if(1&l){const g=e.RV6();e.j41(0,"ion-buttons",18)(1,"ion-button",19),e.bIt("click",function(){e.eBV(g);const n=e.XpG();return e.Njj(n.closeCamera())}),e.EFF(2," Fechar "),e.k0s()()}}function S(l,f){1&l&&(e.j41(0,"p",20),e.EFF(1,"\u231b Carregando..."),e.k0s())}function x(l,f){if(1&l){const g=e.RV6();e.qex(0),e.j41(1,"p"),e.EFF(2,"Para ler um QR Code, clique no bot\xe3o da camera."),e.k0s(),e.j41(3,"ion-button",21),e.bIt("click",function(){e.eBV(g);const n=e.XpG(),o=e.sdS(9);return e.Njj(n.handle(o,"start"))}),e.nrm(4,"ion-icon",22),e.k0s(),e.bVm()}}let Q=(()=>{var l;class f{constructor(t,n,o,a,s,r){this.loaddingCtrl=t,this.alertSrv=n,this.router=o,this.sessionStorageService=a,this.tokenSrv=s,this.loginSrv=r,this.config={constraints:{}},this.readQrcode=!1,this.typeCode=!1,this.scannerTrue=!1,(0,O.a)({camera:E.UIk,sync:E.OH5})}ngOnInit(){this.nomeUsuario=this.tokenSrv.uniqueName}ionViewWillEnter(){var t=this;return(0,u.A)(function*(){const n=document.querySelector(".logo-footer");n&&n.style.setProperty("--background","none transparent"),yield t.handle(t.action,"start")})()}scanEvent(t,n){return 64===t[0].type&&(this.scannerTrue=!0,this.action.pause(),this.scannerTrue=!1,this.action.stop(),this.scanResult(t[0].value))}clickButtonTypeCod(){this.typeCode=!0}handle(t,n){return(0,u.A)(function*(){const o=r=>{"NotFoundError"===r.name&&(console.error("Erro: C\xe2mera n\xe3o encontrada. Verifique as permiss\xf5es do aplicativo"),alert("C\xe2mera n\xe3o encontrada. Verifique as permiss\xf5es do aplicativo"))};"start"===n?t[n](r=>{const c=r.find(_=>/back|rear|environment/gi.test(_.label));/iPad|iPhone|iPod/.test(navigator.userAgent)?t.playDevice(r[1]?r[1].deviceId:r[0].deviceId):t.playDevice(c?c.deviceId:r[0].deviceId)}).subscribe(r=>{console.log(n,r)},o):t[n]().subscribe(r=>console.log(n,r),o)})()}toggleCamera(){var t=this;return(0,u.A)(function*(){const n=t.action,a=t.action.devices.value,s=a[t.action.deviceIndexActive];if(s&&a.length>1){const r=a.find(c=>c.deviceId!==s.deviceId);if(r){const c=yield t.loaddingCtrl.create({message:"Trocando de c\xe2mera..."});yield c.present();try{n.stop();const _=()=>{n.playDevice(r.deviceId)};n.start(_).subscribe(),yield c.dismiss()}catch(_){console.error(_),yield c.dismiss(),yield(yield t.alertSrv.create({header:"Erro!",message:_.message?null==_?void 0:_.message:"Erro desconhecido, tente novamente",buttons:["Ok"]})).present()}}}})()}scanResult(t){var n=this;return(0,u.A)(function*(){var o;yield(0,R.h)(n.loaddingCtrl,n.alertSrv,{mainAction:(o=(0,u.A)(function*(){const a=n.parseDataString(t);if(yield n.validarDataPedido(a),yield n.validarFornecedorPedido(a),!(yield n.saveQrCodeData(a)))throw new Error("Erro ao Salvar QR Code");n.router.navigate(["/form"])}),function(){return o.apply(this,arguments)}),onError:o=>{console.error(o)},onClickButtonDialogError:()=>{}})})()}closeCamera(){this.handle(this.action,"stop"),this.router.navigate(["/qrcode-reader"])}parseDataString(t){const n={};if(t.substring(1).split("#").forEach((a,s)=>{const[r,c]=a.split(":");if(!r||!c)throw new Error(`Invalid part: ${a}`);switch(r){case"func_id":case"ped_ref_id":case"item_ped_ref_id":case"forn_id":n[r]=Number(c);break;case"func_data_nasc":case"ped_ref_data":case"func_nome":n[r]=c;break;default:throw new Error(`Unexpected key: ${r}`)}}),void 0===n.func_id||void 0===n.func_data_nasc||void 0===n.ped_ref_id||void 0===n.ped_ref_data||void 0===n.item_ped_ref_id||void 0===n.func_nome||void 0===n.forn_id)throw new Error("QR Code incorreto");return n}isToday(t){const o=t.slice(0,10),s=function n(r){return`${String(r.getDate()).padStart(2,"0")}/${String(r.getMonth()+1).padStart(2,"0")}/${r.getFullYear()}`}(new Date);return console.log(`Data de hoje formatada: ${s}`),o===s}saveQrCodeData(t){var n=this;return(0,u.A)(function*(){return yield n.sessionStorageService.setItem(P.p.QRCODEDATA,JSON.stringify(t)),!!(yield n.sessionStorageService.getItem(P.p.QRCODEDATA))})()}validarDataPedido(t){var n=this;return(0,u.A)(function*(){if(!n.isToday(t.ped_ref_data))throw new Error("Data do QRCode expirou!")})()}validarFornecedorPedido(t){var n=this;return(0,u.A)(function*(){var o;let s=1;var r;if(null!==(o=n.tokenSrv.authUser)&&void 0!==o&&null!==(o=o.fornecedor)&&void 0!==o&&o.id&&(s=null===(r=n.tokenSrv.authUser)||void 0===r||null===(r=r.fornecedor)||void 0===r?void 0:r.id),t.forn_id!==s)throw new Error("Ticket inv\xe1lido para este restaurante.")})()}alertLogout(){var t=this;return(0,u.A)(function*(){yield(yield t.alertSrv.create({header:"Sair do App",message:"Deseja deslogar do App Restaurantech?",buttons:[{text:"Continuar no App",role:"cancel"},{text:"Sair do App",role:"",handler:()=>t.logout()}]})).present()})()}logout(){this.loginSrv.logout()}}return(l=f).\u0275fac=function(t){return new(t||l)(e.rXU(y.Xi),e.rXU(d.hG),e.rXU(m.Ix),e.rXU(M.R),e.rXU(I.B),e.rXU(T.H))},l.\u0275cmp=e.VBU({type:l,selectors:[["app-qrCode-reader"]],viewQuery:function(t,n){if(1&t&&e.GBs(b,5),2&t){let o;e.mGM(o=e.lsd())&&(n.action=o.first)}},standalone:!0,features:[e.aNF],decls:26,vars:11,consts:[["action","scanner"],[3,"translucent"],["slot","end",4,"ngIf"],[3,"fullscreen"],[1,"scanner",3,"src","hidden"],[1,"scan",3,"hidden"],[1,"box-shadow",3,"event","config"],[1,"changing-camera"],["shape","round","size","large",3,"click"],["slot","icon-only","name","sync"],["class","ion-text-center",4,"ngIf"],[3,"hidden"],[1,"ion-justify-content-center"],["size-md","6","size-lg","4","size-xl","3"],[4,"ngIf"],["slot","start"],["text","Sair",3,"click"],["mode","ios"],["slot","end"],[3,"click"],[1,"ion-text-center"],["size","large","color","light",1,"full-btn",3,"click"],["slot","icon-only","size","large","name","camera"]],template:function(t,n){if(1&t){const o=e.RV6();e.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3,"Ler QR Code"),e.k0s(),e.DNE(4,A,3,0,"ion-buttons",2),e.k0s()(),e.j41(5,"ion-content",3),e.nrm(6,"img",4),e.j41(7,"div",5)(8,"ngx-scanner-qrcode",6,0),e.bIt("event",function(s){e.eBV(o);const r=e.sdS(9);return e.Njj(n.scanEvent(s,r))}),e.k0s(),e.j41(10,"div",7)(11,"ion-button",8),e.bIt("click",function(){return e.eBV(o),e.Njj(n.toggleCamera())}),e.nrm(12,"ion-icon",9),e.k0s()()(),e.DNE(13,S,2,0,"p",10),e.j41(14,"div",11)(15,"ion-grid")(16,"ion-row",12)(17,"ion-col",13),e.DNE(18,x,5,0,"ng-container",14),e.k0s()()()()(),e.j41(19,"ion-footer")(20,"ion-toolbar")(21,"ion-buttons",15)(22,"ion-button",16),e.bIt("click",function(){return e.eBV(o),e.Njj(n.alertLogout())}),e.EFF(23,"Sair"),e.k0s()(),e.j41(24,"ion-title",17),e.EFF(25),e.k0s()()()}if(2&t){const o=e.sdS(9);e.Y8G("translucent",!0),e.R7$(4),e.Y8G("ngIf",o.isStart),e.R7$(),e.Y8G("fullscreen",!0),e.R7$(),e.Y8G("src",n.scannerTrue?"assets/img/scanner-true.png":"assets/img/scanner.png",e.B4B)("hidden",!o.isStart),e.R7$(),e.Y8G("hidden",!o.isStart),e.R7$(),e.Y8G("config",n.config),e.R7$(5),e.Y8G("ngIf",o.isLoading),e.R7$(),e.Y8G("hidden",o.isStart||o.isLoading),e.R7$(4),e.Y8G("ngIf",!n.readQrcode),e.R7$(7),e.SpI(" ",n.nomeUsuario,"")}},dependencies:[d.bv,d.Jm,d.QW,d.hU,d.W9,d.M0,d.lO,d.eU,d.iq,d.ln,d.BC,d.ai,v.MD,v.bT,h.YN,m.iI,C.gq,C.tc,h.X1],styles:["[_nghost-%COMP%]   .full-btn[_ngcontent-%COMP%]{width:100%;height:220px}[_nghost-%COMP%]   .full-btn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:72px;height:72px}[_nghost-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:8px}[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .scanner[_ngcontent-%COMP%]{opacity:.8;height:300px;width:381px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:1}[_nghost-%COMP%]   .box-shadow[_ngcontent-%COMP%]{height:215px;width:300px;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 0 0 5000px #0000004d;border-radius:36px}[_nghost-%COMP%]   .changing-camera[_ngcontent-%COMP%]{position:fixed;bottom:0;padding-bottom:20px;left:15%;transform:translate(-50%,-50%)}[_nghost-%COMP%]     ngx-scanner-qrcode .origin-video{border-radius:36px!important;top:50%;left:50%;transform:translate(-50%,-50%);position:absolute}"]}),f})()}}]);