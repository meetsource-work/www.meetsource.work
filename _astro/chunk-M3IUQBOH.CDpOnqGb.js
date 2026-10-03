import{g as ee}from"./chunk-NDIOYS4C.RQgea4vJ.js";import{_ as f,l as m,c as F,y as se,z as ie,a as re,b as ae,g as ne,s as oe,n as le,o as ce,U as he,i as z,p as ue,R as de}from"./render-O7CIS3YK.CyYePrsb.js";import{s as fe}from"./chunk-ISA7TJRJ.05nrWUu3.js";import{f as pe}from"./chunk-LV3HUYFY.CMe9AMc0.js";import{_}from"./mermaid-layout-elk.core.C7YgWsA-.js";import{s as Dt}from"./transform.gSNGMBKD.js";var At=function(){var t=f(function(M,a,u,r){for(u=u||{},r=M.length;r--;u[M[r]]=a);return u},"o"),e=[1,2],o=[1,3],s=[1,4],c=[2,4],h=[1,9],p=[1,11],y=[1,16],n=[1,17],T=[1,18],b=[1,19],N=[1,33],L=[1,20],D=[1,21],d=[1,22],I=[1,23],$=[1,24],C=[1,26],P=[1,27],A=[1,28],B=[1,29],w=[1,30],H=[1,31],nt=[1,32],ot=[1,35],lt=[1,36],ct=[1,37],ht=[1,38],K=[1,34],S=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],ut=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],Rt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],gt={trace:f(_(function(){},"trace"),"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:f(_(function(a,u,r,g,E,i,Y){var l=i.length-1;switch(E){case 3:return g.setRootDoc(i[l]),i[l];case 4:this.$=[];break;case 5:i[l]!="nl"&&(i[l-1].push(i[l]),this.$=i[l-1]);break;case 6:case 7:this.$=i[l];break;case 8:this.$="nl";break;case 12:this.$=i[l];break;case 13:const et=i[l-1];et.description=g.trimColon(i[l]),this.$=et;break;case 14:this.$={stmt:"relation",state1:i[l-2],state2:i[l]};break;case 15:const Tt=g.trimColon(i[l]);this.$={stmt:"relation",state1:i[l-3],state2:i[l-1],description:Tt};break;case 19:this.$={stmt:"state",id:i[l-3],type:"default",description:"",doc:i[l-1]};break;case 20:var G=i[l],X=i[l-2].trim();if(i[l].match(":")){var dt=i[l].split(":");G=dt[0],X=[X,dt[1]]}this.$={stmt:"state",id:G,type:"default",description:X};break;case 21:this.$={stmt:"state",id:i[l-3],type:"default",description:i[l-5],doc:i[l-1]};break;case 22:this.$={stmt:"state",id:i[l],type:"fork"};break;case 23:this.$={stmt:"state",id:i[l],type:"join"};break;case 24:this.$={stmt:"state",id:i[l],type:"choice"};break;case 25:this.$={stmt:"state",id:g.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:i[l-1].trim(),note:{position:i[l-2].trim(),text:i[l].trim()}};break;case 29:this.$=i[l].trim(),g.setAccTitle(this.$);break;case 30:case 31:this.$=i[l].trim(),g.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:i[l-3],url:i[l-2],tooltip:i[l-1]};break;case 33:this.$={stmt:"click",id:i[l-3],url:i[l-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:i[l-1].trim(),classes:i[l].trim()};break;case 36:this.$={stmt:"style",id:i[l-1].trim(),styleClass:i[l].trim()};break;case 37:this.$={stmt:"applyClass",id:i[l-1].trim(),styleClass:i[l].trim()};break;case 38:g.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:g.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:g.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:g.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:i[l].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:i[l-2].trim(),classes:[i[l].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:i[l-2].trim(),classes:[i[l].trim()],type:"default",description:""};break}},"anonymous"),"anonymous"),table:[{3:1,4:e,5:o,6:s},{1:[3]},{3:5,4:e,5:o,6:s},{3:6,4:e,5:o,6:s},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],c,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:h,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:y,17:n,19:T,22:b,24:N,25:L,26:D,27:d,28:I,29:$,32:25,33:C,35:P,37:A,38:B,41:w,45:H,48:nt,51:ot,52:lt,53:ct,54:ht,57:K},t(S,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:y,17:n,19:T,22:b,24:N,25:L,26:D,27:d,28:I,29:$,32:25,33:C,35:P,37:A,38:B,41:w,45:H,48:nt,51:ot,52:lt,53:ct,54:ht,57:K},t(S,[2,7]),t(S,[2,8]),t(S,[2,9]),t(S,[2,10]),t(S,[2,11]),t(S,[2,12],{14:[1,40],15:[1,41]}),t(S,[2,16]),{18:[1,42]},t(S,[2,18],{20:[1,43]}),{23:[1,44]},t(S,[2,22]),t(S,[2,23]),t(S,[2,24]),t(S,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(S,[2,28]),{34:[1,49]},{36:[1,50]},t(S,[2,31]),{13:51,24:N,57:K},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(ut,[2,44],{58:[1,56]}),t(ut,[2,45],{58:[1,57]}),t(S,[2,38]),t(S,[2,39]),t(S,[2,40]),t(S,[2,41]),t(S,[2,6]),t(S,[2,13]),{13:58,24:N,57:K},t(S,[2,17]),t(Rt,c,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(S,[2,29]),t(S,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(S,[2,14],{14:[1,71]}),{4:h,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:y,17:n,19:T,21:[1,72],22:b,24:N,25:L,26:D,27:d,28:I,29:$,32:25,33:C,35:P,37:A,38:B,41:w,45:H,48:nt,51:ot,52:lt,53:ct,54:ht,57:K},t(S,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(S,[2,34]),t(S,[2,35]),t(S,[2,36]),t(S,[2,37]),t(ut,[2,46]),t(ut,[2,47]),t(S,[2,15]),t(S,[2,19]),t(Rt,c,{7:78}),t(S,[2,26]),t(S,[2,27]),{5:[1,79]},{5:[1,80]},{4:h,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:y,17:n,19:T,21:[1,81],22:b,24:N,25:L,26:D,27:d,28:I,29:$,32:25,33:C,35:P,37:A,38:B,41:w,45:H,48:nt,51:ot,52:lt,53:ct,54:ht,57:K},t(S,[2,32]),t(S,[2,33]),t(S,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:f(_(function(a,u){if(u.recoverable)this.trace(a);else{var r=new Error(a);throw r.hash=u,r}},"parseError"),"parseError"),parse:f(_(function(a){var u=this,r=[0],g=[],E=[null],i=[],Y=this.table,l="",G=0,X=0,dt=2,et=1,Tt=i.slice.call(arguments,1),k=Object.create(this.lexer),W={yy:{}};for(var Et in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Et)&&(W.yy[Et]=this.yy[Et]);k.setInput(a,W.yy),W.yy.lexer=k,W.yy.parser=this,typeof k.yylloc>"u"&&(k.yylloc={});var _t=k.yylloc;i.push(_t);var te=k.options&&k.options.ranges;typeof W.yy.parseError=="function"?this.parseError=W.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Nt(R){r.length=r.length-2*R,E.length=E.length-R,i.length=i.length-R}_(Nt,"popStack"),f(Nt,"popStack");function mt(){var R;return R=g.pop()||k.lex()||et,typeof R!="number"&&(R instanceof Array&&(g=R,R=g.pop()),R=u.symbols_[R]||R),R}_(mt,"lex"),f(mt,"lex");for(var x,j,O,bt,J={},ft,V,Ot,pt;;){if(j=r[r.length-1],this.defaultActions[j]?O=this.defaultActions[j]:((x===null||typeof x>"u")&&(x=mt()),O=Y[j]&&Y[j][x]),typeof O>"u"||!O.length||!O[0]){var kt="";pt=[];for(ft in Y[j])this.terminals_[ft]&&ft>dt&&pt.push("'"+this.terminals_[ft]+"'");k.showPosition?kt="Parse error on line "+(G+1)+`:
`+k.showPosition()+`
Expecting `+pt.join(", ")+", got '"+(this.terminals_[x]||x)+"'":kt="Parse error on line "+(G+1)+": Unexpected "+(x==et?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(kt,{text:k.match,token:this.terminals_[x]||x,line:k.yylineno,loc:_t,expected:pt})}if(O[0]instanceof Array&&O.length>1)throw new Error("Parse Error: multiple actions possible at state: "+j+", token: "+x);switch(O[0]){case 1:r.push(x),E.push(k.yytext),i.push(k.yylloc),r.push(O[1]),x=null,X=k.yyleng,l=k.yytext,G=k.yylineno,_t=k.yylloc;break;case 2:if(V=this.productions_[O[1]][1],J.$=E[E.length-V],J._$={first_line:i[i.length-(V||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(V||1)].first_column,last_column:i[i.length-1].last_column},te&&(J._$.range=[i[i.length-(V||1)].range[0],i[i.length-1].range[1]]),bt=this.performAction.apply(J,[l,X,G,W.yy,O[1],E,i].concat(Tt)),typeof bt<"u")return bt;V&&(r=r.slice(0,-1*V*2),E=E.slice(0,-1*V),i=i.slice(0,-1*V)),r.push(this.productions_[O[1]][0]),E.push(J.$),i.push(J._$),Ot=Y[r[r.length-2]][r[r.length-1]],r.push(Ot);break;case 3:return!0}}return!0},"parse"),"parse")},Zt=function(){var M={EOF:1,parseError:f(_(function(u,r){if(this.yy.parser)this.yy.parser.parseError(u,r);else throw new Error(u)},"parseError"),"parseError"),setInput:f(function(a,u){return this.yy=u||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:f(function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var u=a.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},"input"),unput:f(function(a){var u=a.length,r=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var g=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var E=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===g.length?this.yylloc.first_column:0)+g[g.length-r.length].length-r[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[E[0],E[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:f(function(){return this._more=!0,this},"more"),reject:f(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:f(function(a){this.unput(this.match.slice(a))},"less"),pastInput:f(function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:f(function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:f(function(){var a=this.pastInput(),u=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:f(function(a,u){var r,g,E;if(this.options.backtrack_lexer&&(E={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(E.yylloc.range=this.yylloc.range.slice(0))),g=a[0].match(/(?:\r\n?|\n).*/g),g&&(this.yylineno+=g.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:g?g[g.length-1].length-g[g.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],r=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var i in E)this[i]=E[i];return!1}return!1},"test_match"),next:f(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,u,r,g;this._more||(this.yytext="",this.match="");for(var E=this._currentRules(),i=0;i<E.length;i++)if(r=this._input.match(this.rules[E[i]]),r&&(!u||r[0].length>u[0].length)){if(u=r,g=i,this.options.backtrack_lexer){if(a=this.test_match(r,E[i]),a!==!1)return a;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(a=this.test_match(u,E[g]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:f(_(function(){var u=this.next();return u||this.lex()},"lex"),"lex"),begin:f(_(function(u){this.conditionStack.push(u)},"begin"),"begin"),popState:f(_(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),"popState"),_currentRules:f(_(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),"_currentRules"),topState:f(_(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),"topState"),pushState:f(_(function(u){this.begin(u)},"pushState"),"pushState"),stateStackSize:f(_(function(){return this.conditionStack.length},"stateStackSize"),"stateStackSize"),options:{"case-insensitive":!0},performAction:f(_(function(u,r,g,E){function i(){const Y=r.yytext.indexOf("%%");if(Y===0)return!1;if(Y>0){const l=r.yytext.slice(0,Y),G=r.yytext.slice(Y);G&&u.lexer.unput(G),r.yytext=l}return!0}switch(_(i,"processId"),f(i,"processId"),g){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:break;case 13:return this.pushState("SCALE"),17;case 14:return 18;case 15:this.popState();break;case 16:return this.begin("acc_title"),33;case 17:return this.popState(),"acc_title_value";case 18:return this.begin("acc_descr"),35;case 19:return this.popState(),"acc_descr_value";case 20:this.begin("acc_descr_multiline");break;case 21:this.popState();break;case 22:return"acc_descr_multiline_value";case 23:return this.pushState("CLASSDEF"),41;case 24:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 25:return this.popState(),this.pushState("CLASSDEFID"),42;case 26:return this.popState(),43;case 27:return this.pushState("CLASS"),48;case 28:return this.popState(),this.pushState("CLASS_STYLE"),49;case 29:return this.popState(),50;case 30:return this.pushState("STYLE"),45;case 31:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 32:return this.popState(),47;case 33:return this.pushState("SCALE"),17;case 34:return 18;case 35:this.popState();break;case 36:this.pushState("STATE");break;case 37:return this.popState(),r.yytext=r.yytext.slice(0,-8).trim(),25;case 38:return this.popState(),r.yytext=r.yytext.slice(0,-8).trim(),26;case 39:return this.popState(),r.yytext=r.yytext.slice(0,-10).trim(),27;case 40:return this.popState(),r.yytext=r.yytext.slice(0,-8).trim(),25;case 41:return this.popState(),r.yytext=r.yytext.slice(0,-8).trim(),26;case 42:return this.popState(),r.yytext=r.yytext.slice(0,-10).trim(),27;case 43:return 51;case 44:return 52;case 45:return 53;case 46:return 54;case 47:this.pushState("STATE_STRING");break;case 48:return this.pushState("STATE_ID"),"AS";case 49:return i()?(this.popState(),"ID"):void 0;case 50:this.popState();break;case 51:return"STATE_DESCR";case 52:throw new Error('Error: State name must be a single word. Found: "'+r.yytext.trim()+'"');case 53:return 19;case 54:this.popState();break;case 55:return this.popState(),this.pushState("struct"),20;case 56:return this.popState(),21;case 57:break;case 58:return this.begin("NOTE"),29;case 59:return this.popState(),this.pushState("NOTE_ID"),59;case 60:return this.popState(),this.pushState("NOTE_ID"),60;case 61:this.popState(),this.pushState("FLOATING_NOTE");break;case 62:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 63:break;case 64:return"NOTE_TEXT";case 65:return i()?(this.popState(),"ID"):void 0;case 66:return i()?(this.popState(),this.pushState("NOTE_TEXT"),24):void 0;case 67:return this.popState(),r.yytext=r.yytext.substr(2).trim(),31;case 68:return this.popState(),r.yytext=r.yytext.slice(0,-8).trim(),31;case 69:return 6;case 70:return 6;case 71:return 16;case 72:return 57;case 73:return i()?24:void 0;case 74:return r.yytext=r.yytext.trim(),14;case 75:return 15;case 76:return 28;case 77:return 58;case 78:return 5;case 79:return"INVALID"}},"anonymous"),"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\w+\s+\w+.*?\{)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?\n\s*end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:(?:[^:\n;]|:[^:\n;])+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[10,11,12],inclusive:!1},struct:{rules:[10,11,12,23,27,30,36,43,44,45,46,56,57,58,72,73,74,75,76,77],inclusive:!1},FLOATING_NOTE_ID:{rules:[65],inclusive:!1},FLOATING_NOTE:{rules:[62,63,64],inclusive:!1},NOTE_TEXT:{rules:[67,68],inclusive:!1},NOTE_ID:{rules:[66],inclusive:!1},NOTE:{rules:[59,60,61],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[32],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[31],inclusive:!1},CLASS_STYLE:{rules:[29],inclusive:!1},CLASS:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[26],inclusive:!1},CLASSDEF:{rules:[24,25],inclusive:!1},acc_descr_multiline:{rules:[21,22],inclusive:!1},acc_descr:{rules:[19],inclusive:!1},acc_title:{rules:[17],inclusive:!1},SCALE:{rules:[14,15,34,35],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[49],inclusive:!1},STATE_STRING:{rules:[50,51],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[10,11,12,37,38,39,40,41,42,47,48,52,53,54,55],inclusive:!1},ID:{rules:[10,11,12],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,11,12,13,16,18,20,23,27,30,33,36,55,58,69,70,71,72,73,74,75,77,78,79],inclusive:!0}}};return M}();gt.lexer=Zt;function tt(){this.yy={}}return _(tt,"Parser"),f(tt,"Parser"),tt.prototype=gt,gt.Parser=tt,new tt}();At.parser=At;var ze=At,Se="TB",Mt="TB",$t="dir",Q="state",q="root",xt="relation",ye="classDef",ge="style",Te="applyClass",it="default",Ut="divider",Wt="fill:none",jt="fill: #333",zt="c",Ht="markdown",Kt="normal",vt="rect",Ct="rectWithTitle",Ee="stateStart",_e="stateEnd",Ft="divider",Pt="roundedWithTitle",me="note",be="noteGroup",at="statediagram",ke="state",De=`${at}-${ke}`,Xt="transition",ve="note",Ce="note-edge",Ae=`${Xt} ${Ce}`,xe=`${at}-${ve}`,Le="cluster",Ie=`${at}-${Le}`,we="cluster-alt",Re=`${at}-${we}`,Jt="parent",qt="note",Ne="state",Lt="----",Oe=`${Lt}${qt}`,Bt=`${Lt}${Jt}`,Qt=f((t,e=Mt)=>{if(!t.doc)return e;let o=e;for(const s of t.doc)s.stmt==="dir"&&(o=s.value);return o},"getDir"),$e=f(function(t,e){return e.db.getClasses()},"getClasses"),Fe=f(async function(t,e,o,s){m.info("REF0:"),m.info("Drawing state diagram (v2)",e);const{securityLevel:c,state:h,layout:p}=F();s.db.extract(s.db.getRootDocV2());const y=s.db.getData(),n=ee(e,c);y.type=s.type,y.layoutAlgorithm=p,y.nodeSpacing=h?.nodeSpacing||50,y.rankSpacing=h?.rankSpacing||50,F().look==="neo"?y.markers=["barbNeo"]:y.markers=["barb"],y.diagramId=e,await se(y,n);const b=8;try{(typeof s.db.getLinks=="function"?s.db.getLinks():new Map).forEach((L,D)=>{const d=typeof D=="string"?D:typeof D?.id=="string"?D.id:"",I=y.nodes.find(w=>w.id===d);if(!d){m.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(D));return}const $=n.node()?.querySelectorAll("g.node, g.rough-node");let C;if($?.forEach(w=>{const H=w.textContent?.trim();(w.id===I?.domId||H===d)&&(C=w)}),!C){m.warn("⚠️ Could not find node matching text:",d);return}const P=C.parentNode;if(!P){m.warn("⚠️ Node has no parent, cannot wrap:",d);return}const A=document.createElementNS("http://www.w3.org/2000/svg","a"),B=L.url.replace(/^"+|"+$/g,"");if(A.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",B),A.setAttribute("target","_blank"),L.tooltip){const w=L.tooltip.replace(/^"+|"+$/g,"");A.setAttribute("title",w),C.setAttribute("title",w)}P.replaceChild(A,C),A.appendChild(C),m.info("🔗 Wrapped node in <a> tag for:",d,L.url)})}catch(N){m.error("❌ Error injecting clickable links:",N)}ie.insertTitle(n,"statediagramTitleText",h?.titleTopMargin??25,s.db.getDiagramTitle()),fe(n,b,at,h?.useMaxWidth??!0)},"draw"),He={getClasses:$e,draw:Fe,getDir:Qt},yt=new Map,U=0;function rt(t="",e=0,o="",s=Lt){const c=o!==null&&o.length>0?`${s}${o}`:"";return`${Ne}-${t}${c}-${e}`}_(rt,"stateDomId");f(rt,"stateDomId");var Pe=f((t,e,o,s,c,h,p,y)=>{m.trace("items",e),e.forEach(n=>{switch(n.stmt){case Q:st(t,n,o,s,c,h,p,y);break;case it:st(t,n,o,s,c,h,p,y);break;case xt:{st(t,n.state1,o,s,c,h,p,y),st(t,n.state2,o,s,c,h,p,y);const T=p==="neo",b={id:"edge"+U,start:n.state1.id,end:n.state2.id,arrowhead:"normal",arrowTypeEnd:T?"arrow_barb_neo":"arrow_barb",style:Wt,labelStyle:"",label:z.sanitizeText(n.description??"",F()),arrowheadStyle:jt,labelpos:zt,labelType:Ht,thickness:Kt,classes:Xt,look:p};c.push(b),U++}break}})},"setupDoc"),Yt=f((t,e=Mt)=>{let o=e;if(t.doc)for(const s of t.doc)s.stmt==="dir"&&(o=s.value);return o},"getDir");function Z(t,e,o){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(c=>{const h=o.get(c);h&&(e.cssCompiledStyles=[...e.cssCompiledStyles??[],...h.styles])}));const s=t.find(c=>c.id===e.id);s?Object.assign(s,e):t.push(e)}_(Z,"insertOrUpdateNode");f(Z,"insertOrUpdateNode");function It(t){return t?.classes?.join(" ")??""}_(It,"getClassesFromDbInfo");f(It,"getClassesFromDbInfo");function wt(t){return t?.styles??[]}_(wt,"getStylesFromDbInfo");f(wt,"getStylesFromDbInfo");var st=f((t,e,o,s,c,h,p,y)=>{const n=e.id,T=o.get(n),b=It(T),N=wt(T),L=F();if(m.info("dataFetcher parsedItem",e,T,N),n!=="root"){let D=vt;e.start===!0?D=Ee:e.start===!1&&(D=_e),e.type!==it&&(D=e.type),yt.get(n)||yt.set(n,{id:n,shape:D,description:z.sanitizeText(n,L),cssClasses:`${b} ${De}`,cssStyles:N});const d=yt.get(n);e.description&&(Array.isArray(d.description)?(d.shape=Ct,d.description.push(e.description)):d.description?.length&&d.description.length>0?(d.shape=Ct,d.description===n?d.description=[e.description]:d.description=[d.description,e.description]):(d.shape=vt,d.description=e.description),d.description=z.sanitizeTextOrArray(d.description,L)),d.description?.length===1&&d.shape===Ct&&(d.type==="group"?d.shape=Pt:d.shape=vt),!d.type&&e.doc&&(m.info("Setting cluster for XCX",n,Yt(e)),d.type="group",d.isGroup=!0,d.dir=Yt(e),d.shape=e.type===Ut?Ft:Pt,d.cssClasses=`${d.cssClasses} ${Ie} ${h?Re:""}`);const I={labelStyle:"",shape:d.shape,label:d.description,cssClasses:d.cssClasses,cssCompiledStyles:[],cssStyles:d.cssStyles,id:n,dir:d.dir,domId:rt(n,U),type:d.type,isGroup:d.type==="group",padding:8,rx:10,ry:10,look:p,labelType:"markdown"};if(I.shape===Ft&&(I.label=""),t&&t.id!=="root"&&(m.trace("Setting node ",n," to be child of its parent ",t.id),I.parentId=t.id),I.centerLabel=!0,e.note){const $={labelStyle:"",shape:me,label:e.note.text,labelType:"markdown",cssClasses:xe,cssStyles:[],cssCompiledStyles:[],id:n+Oe+"-"+U,domId:rt(n,U,qt),type:d.type,isGroup:d.type==="group",padding:L.flowchart?.padding,look:p,position:e.note.position},C=n+Bt,P={labelStyle:"",shape:be,label:e.note.text,cssClasses:d.cssClasses,cssStyles:[],id:n+Bt,domId:rt(n,U,Jt),type:"group",isGroup:!0,padding:16,look:p,position:e.note.position};U++,P.id=C,$.parentId=C,Z(s,P,y),Z(s,$,y),Z(s,I,y);let A=n,B=$.id;e.note.position==="left of"&&(A=$.id,B=n),c.push({id:A+"-"+B,start:A,end:B,arrowhead:"none",arrowTypeEnd:"",style:Wt,labelStyle:"",classes:Ae,arrowheadStyle:jt,labelpos:zt,labelType:Ht,thickness:Kt,look:p})}else Z(s,I,y)}e.doc&&(m.trace("Adding nodes children "),Pe(e,e.doc,o,s,c,!h,p,y))},"dataFetcher"),Be=f(()=>{yt.clear(),U=0},"reset"),v={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},Gt=f(()=>new Map,"newClassesList"),Vt=f(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),St=f(t=>JSON.parse(JSON.stringify(t)),"clone"),Ke=class{static{_(this,"StateDB")}constructor(t){this.version=t,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Gt(),this.documents={root:Vt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.funs=[],this.getAccTitle=re,this.setAccTitle=ae,this.getAccDescription=ne,this.setAccDescription=oe,this.setDiagramTitle=le,this.getDiagramTitle=ce,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this),this.bindFunctions=this.bindFunctions.bind(this)}static{f(this,"StateDB")}static{this.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3}}extract(t){this.clear(!0);for(const s of Array.isArray(t)?t:t.doc)switch(s.stmt){case Q:this.addState(s.id.trim(),s.type,s.doc,s.description,s.note);break;case xt:this.addRelation(s.state1,s.state2,s.description);break;case ye:this.addStyleClass(s.id.trim(),s.classes);break;case ge:this.handleStyleDef(s);break;case Te:this.setCssClass(s.id.trim(),s.styleClass);break;case"click":this.addLink(s.id,s.url,s.tooltip);break}const e=this.getStates(),o=F();Be(),st(void 0,this.getRootDocV2(),e,this.nodes,this.edges,!0,o.look,this.classes);for(const s of this.nodes)if(Array.isArray(s.label)){if(s.description=s.label.slice(1),s.isGroup&&s.description.length>0)throw new Error(`Group nodes can only have label. Remove the additional description for node [${s.id}]`);s.label=s.label[0]}}handleStyleDef(t){const e=t.id.trim().split(","),o=t.styleClass.split(",");for(const s of e){let c=this.getState(s);if(!c){const h=s.trim();this.addState(h),c=this.getState(h)}c&&(c.styles=o.map(h=>h.replace(/;/g,"")?.trim()))}}setRootDoc(t){m.info("Setting root doc",t),this.rootDoc=t,this.version===1?this.extract(t):this.extract(this.getRootDocV2())}docTranslator(t,e,o){if(e.stmt===xt){this.docTranslator(t,e.state1,!0),this.docTranslator(t,e.state2,!1);return}if(e.stmt===Q&&(e.id===v.START_NODE?(e.id=t.id+(o?"_start":"_end"),e.start=o):e.id=e.id.trim()),e.stmt!==q&&e.stmt!==Q||!e.doc)return;const s=[];let c=[];for(const h of e.doc)if(h.type===Ut){const p=St(h);p.doc=St(c),s.push(p),c=[]}else c.push(h);if(s.length>0&&c.length>0){const h={stmt:Q,id:he(),type:"divider",doc:St(c)};s.push(St(h)),e.doc=s}e.doc.forEach(h=>this.docTranslator(e,h,!0))}getRootDocV2(){return this.docTranslator({id:q,stmt:q},{id:q,stmt:q,doc:this.rootDoc},!0),{id:q,doc:this.rootDoc}}addState(t,e=it,o=void 0,s=void 0,c=void 0,h=void 0,p=void 0,y=void 0){const n=t?.trim();if(!this.currentDocument.states.has(n))m.info("Adding state ",n,s),this.currentDocument.states.set(n,{stmt:Q,id:n,descriptions:[],type:e,doc:o,note:c,classes:[],styles:[],textStyles:[]});else{const T=this.currentDocument.states.get(n);if(!T)throw new Error(`State not found: ${n}`);T.doc||(T.doc=o),T.type||(T.type=e)}if(s&&(m.info("Setting state description",n,s),(Array.isArray(s)?s:[s]).forEach(b=>this.addDescription(n,b.trim()))),c){const T=this.currentDocument.states.get(n);if(!T)throw new Error(`State not found: ${n}`);T.note=c,T.note.text=z.sanitizeText(T.note.text,F())}h&&(m.info("Setting state classes",n,h),(Array.isArray(h)?h:[h]).forEach(b=>this.setCssClass(n,b.trim()))),p&&(m.info("Setting state styles",n,p),(Array.isArray(p)?p:[p]).forEach(b=>this.setStyle(n,b.trim()))),y&&(m.info("Setting state styles",n,p),(Array.isArray(y)?y:[y]).forEach(b=>this.setTextStyle(n,b.trim())))}clear(t){this.nodes=[],this.edges=[],this.funs=[this.setupToolTips.bind(this)],this.documents={root:Vt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Gt(),t||(this.links=new Map,ue())}getState(t){return this.currentDocument.states.get(t)}getStates(){return this.currentDocument.states}logDocuments(){m.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(t,e,o){this.links.set(t,{url:e,tooltip:o}),m.warn("Adding link",t,e,o)}getLinks(){return this.links}startIdIfNeeded(t=""){return t===v.START_NODE?(this.startEndCount++,`${v.START_TYPE}${this.startEndCount}`):t}startTypeIfNeeded(t="",e=it){return t===v.START_NODE?v.START_TYPE:e}endIdIfNeeded(t=""){return t===v.END_NODE?(this.startEndCount++,`${v.END_TYPE}${this.startEndCount}`):t}endTypeIfNeeded(t="",e=it){return t===v.END_NODE?v.END_TYPE:e}addRelationObjs(t,e,o=""){const s=this.startIdIfNeeded(t.id.trim()),c=this.startTypeIfNeeded(t.id.trim(),t.type),h=this.startIdIfNeeded(e.id.trim()),p=this.startTypeIfNeeded(e.id.trim(),e.type);this.addState(s,c,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),this.addState(h,p,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.currentDocument.relations.push({id1:s,id2:h,relationTitle:z.sanitizeText(o,F())})}addRelation(t,e,o){if(typeof t=="object"&&typeof e=="object")this.addRelationObjs(t,e,o);else if(typeof t=="string"&&typeof e=="string"){const s=this.startIdIfNeeded(t.trim()),c=this.startTypeIfNeeded(t),h=this.endIdIfNeeded(e.trim()),p=this.endTypeIfNeeded(e);this.addState(s,c),this.addState(h,p),this.currentDocument.relations.push({id1:s,id2:h,relationTitle:o?z.sanitizeText(o,F()):void 0})}}addDescription(t,e){const o=this.currentDocument.states.get(t),s=e.startsWith(":")?e.replace(":","").trim():e;o?.descriptions?.push(z.sanitizeText(s,F()))}cleanupLabel(t){return t.startsWith(":")?t.slice(2).trim():t.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(t,e=""){this.classes.has(t)||this.classes.set(t,{id:t,styles:[],textStyles:[]});const o=this.classes.get(t);e&&o&&e.split(v.STYLECLASS_SEP).forEach(s=>{const c=s.replace(/([^;]*);/,"$1").trim();if(RegExp(v.COLOR_KEYWORD).exec(s)){const p=c.replace(v.FILL_KEYWORD,v.BG_FILL).replace(v.COLOR_KEYWORD,v.FILL_KEYWORD);o.textStyles.push(p)}o.styles.push(c)})}getClasses(){return this.classes}setupToolTips(t){const e=pe();Dt(t).select("svg").selectAll("g.node, g.rough-node").on("mouseover",c=>{const h=Dt(c.currentTarget),p=h.attr("title");if(p===null)return;const y=c.currentTarget?.getBoundingClientRect();e.transition().duration(200).style("opacity",".9"),e.style("left",window.scrollX+y.left+(y.right-y.left)/2+"px").style("top",window.scrollY+y.bottom+"px"),e.html(de.sanitize(p)),h.classed("hover",!0)}).on("mouseout",c=>{e.transition().duration(500).style("opacity",0),Dt(c.currentTarget).classed("hover",!1)})}setCssClass(t,e){t.split(",").forEach(o=>{let s=this.getState(o);if(!s){const c=o.trim();this.addState(c),s=this.getState(c)}s?.classes?.push(e)})}setStyle(t,e){this.getState(t)?.styles?.push(e)}setTextStyle(t,e){this.getState(t)?.textStyles?.push(e)}bindFunctions(t){this.funs.forEach(e=>{e(t)})}getDirectionStatement(){return this.rootDoc.find(t=>t.stmt===$t)}getDirection(){return this.getDirectionStatement()?.value??Se}setDirection(t){const e=this.getDirectionStatement();e?e.value=t:this.rootDoc.unshift({stmt:$t,value:t})}trimColon(t){return t.startsWith(":")?t.slice(1).trim():t.trim()}getData(){const t=F();return{nodes:this.nodes,edges:this.edges,other:{},config:t,direction:Qt(this.getRootDocV2())}}getConfig(){return F().state}},Ye=f(t=>`
defs [id$="-barbEnd"] {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: ${t.strokeWidth||1};
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: ${t.strokeWidth||1};
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth||1}px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: ${t.strokeWidth||1}px;
}
[id$="-barbEnd"] {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth||1}px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

[id$="-dependencyStart"], [id$="-dependencyEnd"] {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: ${t.strokeWidth||1};
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}

[data-look="neo"].statediagram-cluster rect {
  fill: ${t.mainBkg};
  stroke: ${t.useGradient?"url("+t.svgId+"-gradient)":t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth??1};
}
[data-look="neo"].statediagram-cluster rect.outer {
  rx: ${t.radius}px;
  ry: ${t.radius}px;
  filter: ${t.dropShadow?t.dropShadow.replace("url(#drop-shadow)",`url(${t.svgId}-drop-shadow)`):"none"}
}
`,"getStyles"),Xe=Ye;export{Ke as S,ze as a,He as b,Xe as s};
