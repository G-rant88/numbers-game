(this["webpackJsonpnumers-app"]=this["webpackJsonpnumers-app"]||[]).push([[0],{16:function(e,t,n){e.exports=n(31)},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"updateNumbers",(function(){return f})),n.d(a,"updateMoves",(function(){return p})),n.d(a,"updateHighscore",(function(){return b}));var r=n(0),s=n.n(r),c=n(3),o=n.n(c),i=n(1),u=n(7),m=(n(27),n(4)),l=n(5),h=n(9),d=n(8),f=function(e){return{type:"UPDATE_NUMBERS",payload:e}},p=function(e){return{type:"UPDATE_MOVES",payload:e}},b=function(e){return{type:"UPDATE_HIGHSCORE",payload:e}},v=n(6),E=(n(28),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).win=function(){a.setState({numbers:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,"",15]})},a.checkIfWin=function(){var e=a.state.numbers,t=e.indexOf("");e[t]=16;for(var n=0;n<e.length;n++){if(n===e.length-1){var r=e.indexOf(16);return e[r]="",!0}if(!(e[n]<e[n+1])){var s=e.indexOf(16);return e[s]="",!1}}},a.boxUpdate=function(e,t,n){a.setState({moves:a.state.moves+1}),setTimeout(function(){var a=this.state.numbers.indexOf(e),r=this.state.numbers.indexOf(""),s=this.state.numbers;s[a]="",s[r]=e,t.style="",n.style="",this.setState({numbers:s}),this.checkIfWin()&&(this.props.updateHighscore(this.state.moves),this.setState({win:"CONGRATS! YOU WON IN ".concat(this.state.moves," MOVES!!")}))}.bind(Object(v.a)(a)),0)},a.animateBox=function(e,t,n,a,r){a?(e.style="transform:translate".concat(n,"(").concat(r,"px);"),t.style="transform:translate".concat(n,"(-").concat(r,"px);")):(e.style="transform:translate".concat(n,"(-").concat(r,"px);"),t.style="transform:translate".concat(n,"(").concat(r,"px);"))},a.moveBox=function(e){var t=document.getElementById(e),n=document.getElementById("empty-box"),r=(t.currentStyle||window.getComputedStyle(t)).marginTop.split("px"),s=t.offsetHeight+2*r[0],c=t.offsetWidth+2*r[0],o=a.state.numbers.indexOf(""),i=a.state.numbers.indexOf(e);o-4===i&&(a.animateBox(t,n,"Y",!0,s),a.boxUpdate(e,t,n)),o+4===i&&(a.animateBox(t,n,"Y",!1,s),a.boxUpdate(e,t,n)),o-1===i&&(a.animateBox(t,n,"X",!0,c),a.boxUpdate(e,t,n)),o+1===i&&(a.animateBox(t,n,"X",!1,c),a.boxUpdate(e,t,n))},a.state={numbers:[],win:"",moves:0},a}return Object(l.a)(n,[{key:"shuffle",value:function(e){this.setState({win:""}),this.setState({moves:0});for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;this.setState({numbers:e})}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=this.props.gameNumbers;e.gameNumbers!==t&&t&&this.shuffle(t)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h1",null,"Numbers Game"),s.a.createElement("div",{className:"container"},""!==this.state.win&&s.a.createElement("div",null,s.a.createElement("h2",null,this.state.win),s.a.createElement("button",{className:"newGameBtn",onClick:function(){e.shuffle(e.state.numbers)}},"NEW GAME")),this.props.highScore.length>0&&s.a.createElement(O,{highScores:this.props.highScore}),s.a.createElement("div",{className:"gameContainer"},s.a.createElement("div",{className:"top"},s.a.createElement("button",{id:"reset",onClick:function(){return e.shuffle(e.state.numbers)}},"Reset"),s.a.createElement("h4",{className:"moves"},"Moves: ",this.state.moves),s.a.createElement("button",{id:"cheat",onClick:function(){return e.win(e.state.numbers)}},"Cheat")),s.a.createElement("div",{className:"row"},this.state.numbers.map((function(t,n){return Number.isInteger(t)?s.a.createElement("div",{key:n,onClick:function(){return e.moveBox(t)},id:t,className:"box"},t):s.a.createElement("div",{key:n,id:"empty-box",className:"box"},t)}))))))}}]),n}(s.a.Component)),O=(n(29),function(e){var t=e.highScores;return s.a.createElement("div",{className:"highScore"},s.a.createElement("h4",null,"High Scores"),s.a.createElement("div",null,t.map((function(e,t){return s.a.createElement("div",{key:t,className:"score"},e)}))))}),g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.actions.updateNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,""])}},{key:"render",value:function(){var e=this.props,t=e.actions,n=e.numbers,a=e.highScore;return s.a.createElement("div",{className:"home"},s.a.createElement(E,{updateHighscore:t.updateHighscore,updateNumbers:t.updateNumbers,highScore:a,gameNumbers:n}))}}]),n}(r.Component),y=Object(u.b)((function(e){return{numbers:e.numbersGameReducer.numbers,highScore:e.numbersGameReducer.highScore.sort((function(e,t){return e-t}))}}),(function(e){return{actions:Object(i.a)(a,e)}}))(g);n(30);var S=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(y,null))},x=n(15),N=n(2),j={numbers:[],moves:0,highScore:[133,80]},k=Object(i.b)({numbersGameReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NUMBERS":return Object(N.a)(Object(N.a)({},e),{},{numbers:t.payload});case"UPDATE_MOVES":return Object(N.a)(Object(N.a)({},e),{},{moves:t.payload});case"UPDATE_HIGHSCORE":return Object(N.a)(Object(N.a)({},e),{},{highScore:[t.payload].concat(Object(x.a)(e.highScore))});default:return e}}}),U=Object(i.c)(k);o.a.render(s.a.createElement(u.a,{store:U},s.a.createElement(S,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.505046ad.chunk.js.map