(self.webpackChunkangularposts=self.webpackChunkangularposts||[]).push([[660],{660:(e,r,o)=>{"use strict";o.r(r),o.d(r,{LoginModule:()=>p});var n=o(116),s=o(462),t=o(319),i=o(619),a=o(243);function u(e,r){if(1&e){const e=i.EpF();i.TgZ(0,"form",3),i.NdJ("ngSubmit",function(){i.CHM(e);const r=i.oxw();return r.Login(r.loginForm.value)}),i.TgZ(1,"h2"),i._uU(2,"Create a new post."),i.qZA(),i.TgZ(3,"p"),i._uU(4,"Fill the form to add a new post to the database."),i.qZA(),i.TgZ(5,"div"),i.TgZ(6,"label",4),i._uU(7,"Username"),i.qZA(),i._UZ(8,"input",5),i.TgZ(9,"label",6),i._uU(10,"Password"),i.qZA(),i._UZ(11,"input",7),i.qZA(),i._UZ(12,"input",8),i.qZA()}if(2&e){const e=i.oxw();i.Q6J("formGroup",e.loginForm),i.xp6(12),i.Q6J("disabled",!e.loginForm.valid)}}function c(e,r){1&e&&(i.TgZ(0,"div",9),i.TgZ(1,"p"),i._uU(2,"That username already exists, Please choose a different one."),i.qZA(),i.qZA())}function l(e,r){1&e&&(i.TgZ(0,"div",10),i.TgZ(1,"p"),i._uU(2,"Processing request, please stand by, you will be redirected soon..."),i.qZA(),i.TgZ(3,"div",11),i._uU(4,"Loading..."),i.qZA(),i.qZA())}const g=[{path:"",component:(()=>{class e{constructor(e,r){this.flaskApiService=e,this.router=r,this.loginForm=new s.cw({username:new s.NI("",[s.kI.required,s.kI.minLength(3),s.kI.maxLength(30)]),password:new s.NI("",[s.kI.required,s.kI.minLength(8)])})}Login(e){this.usererr=!1,this.flaskApiService.Login(e).subscribe(e=>{console.log("username incorrect"===e.data),"username incorrect"===e.data?(this.usererr=!0,this.busy=!1,console.log("errorcheck")):(this.busy=!0,console.log(e.data),this.router.navigate(["/"]))})}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)(i.Y36(a.P),i.Y36(t.F0))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-login"]],decls:4,vars:3,consts:[["class","editform",3,"formGroup","ngSubmit",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],["class","processing",4,"ngIf"],[1,"editform",3,"formGroup","ngSubmit"],["for","username",1,"form-label"],["type","text","formControlName","username","required","",1,"form-control"],["for","password",1,"form-label"],["type","password","formControlName","password","required","",1,"form-control"],["type","submit","value","Submit",1,"btn","btn-success",3,"disabled"],[1,"alert","alert-danger"],[1,"processing"],[1,"loader"]],template:function(e,r){1&e&&(i.TgZ(0,"section"),i.YNc(1,u,13,2,"form",0),i.YNc(2,c,3,0,"div",1),i.YNc(3,l,5,0,"div",2),i.qZA()),2&e&&(i.xp6(1),i.Q6J("ngIf",!r.busy),i.xp6(1),i.Q6J("ngIf",r.usererr),i.xp6(1),i.Q6J("ngIf",r.busy))},directives:[n.O5,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,s.Q7],styles:[""]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[t.Bz.forChild(g)],t.Bz]}),e})(),p=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({providers:[],imports:[[d,n.ez,s.UX]]}),e})()}}]);