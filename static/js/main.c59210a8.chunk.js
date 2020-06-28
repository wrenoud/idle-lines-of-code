(this["webpackJsonpidle-programmer"]=this["webpackJsonpidle-programmer"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),i=n.n(o),s=(n(13),n(2)),l=n(3),c=n(1),h=n(4),u=n(5),_=(n(14),n(15),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={character_count:0,line:0,text:[],current_history:[],current_prompt:"",visible_history:0},a.handleChange=a.handleChange.bind(Object(c.a)(a)),a.focus=a.focus.bind(Object(c.a)(a)),a.selfRef=r.a.createRef(),a.promptRef=r.a.createRef(),a}return Object(l.a)(n,[{key:"computeVisibleHistory",value:function(){var e=this.selfRef.current,t=e.clientHeight,n=parseInt(document.defaultView.getComputedStyle(e,null).getPropertyValue("line-height"));this.setState({visible_history:Math.floor(t/n)-1})}},{key:"componentDidMount",value:function(){var e=this;this.computeVisibleHistory(),fetch("/client.php.txt").then((function(e){return e.text()})).then((function(t){e.setState({text:t.split(/\r?\n/)})}))}},{key:"focus",value:function(e){e.preventDefault(),this.promptRef.current.focus(),this.typeCode(5*this.props.typingRate)}},{key:"typeCode",value:function(e){if(0!==this.state.text.length){var t=this.state.character_count,n=this.state.line;if(t+e>=this.state.text[n].length){var a=t+e-this.state.text[n].length;for(n+=1;n<this.state.text.length&&a>=this.state.text[n].length;)a-=this.state.text[n].length,n+=1;this.props.onAddLOC(n-this.state.line),n>=this.state.text.length?this.setState({character_count:a,line:0,current_history:this.getHistoryText(0),current_prompt:this.getPromptText(0,a)}):this.setState({character_count:a,line:n,current_history:this.getHistoryText(n),current_prompt:this.getPromptText(n,a)})}else this.setState({character_count:t+e,current_prompt:this.getPromptText(n,t+e)})}}},{key:"handleChange",value:function(e){e.preventDefault(),this.typeCode(this.props.typingRate)}},{key:"getPromptText",value:function(e,t){return this.state.text.length>0?this.state.text[e].substring(0,t):""}},{key:"getHistoryText",value:function(e){if(this.state.text.length>0){var t=e>this.state.visible_history?e-this.state.visible_history:0;return this.state.text.slice(t,e)}return[]}},{key:"render",value:function(){return r.a.createElement("div",{className:"Console",onClick:this.focus,ref:this.selfRef},r.a.createElement("div",{className:"History"},this.state.current_history.map((function(e,t){return r.a.createElement("div",{key:t},e,"\xa0")})),r.a.createElement("div",{className:"Prompt"},this.state.current_prompt,r.a.createElement("input",{ref:this.promptRef,className:"Cursor",onChange:this.handleChange,value:""}))))}}]),n}(r.a.Component)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={achievements:[{name:"A Good Days Work",description:r.a.createElement(r.a.Fragment,null,"You made 10 lines of code (LoC). In the 1975 software project management book,"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://en.wikipedia.org/wiki/The_Mythical_Man-Month"},"The Mythical Man Month: Essays on Software Engineering"),", Fred Brooks states that, no matter the programming language chosen, a professional developer will write an average 10 lines of code (LoC) per day."),threshold:10},{name:"A Better Days Work",description:r.a.createElement(r.a.Fragment,null,"You made 100 lines of code (LoC). In the Codding Horror blog post"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://blog.codinghorror.com/diseconomies-of-scale-and-lines-of-code/"},"Diseconomies of Scale and Lines of Code")," ",'Jeff Attwood cites a table from Steve McConnell\'s book that gives an upper bound of 25,000 LoC per year. Attwood goes on to quote McConnell, "The LOC measure is a terrible way to measure software size, except that all the other ways to measure size are worse."'),threshold:100},{name:"First code year",description:"You made 40 lines of code. The average programmer is said to write 10,000 lines of new code in a year. At this rate you'll be a superstar programmer in no time.",threshold:1e4}],upgrades:[{name:"Coding Camp",description:"You won't learn much, but at least you'll get some typing practice and a portfolio.",effect:"doubles your typing speed",cost:100},{name:"Discover stackoverflow.com",description:"Why write what you can copy.",effect:"doubles your typing speed",cost:100}],typingRate:1,nloc:0,lifetime_nloc:0},a.addLOC=a.addLOC.bind(Object(c.a)(a)),a}return Object(l.a)(n,[{key:"addLOC",value:function(e){this.setState({nloc:this.state.nloc+e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"App"},r.a.createElement("div",null,r.a.createElement("pre",null,"\xa0\xa0\xa0____\xa0\xa0\xa0____\xa0\xa0\xa0\xa0\xa0\xa0___",r.a.createElement("br",null),"\xa0\xa0/\xa0\xa0_/__/\xa0/\xa0/__\xa0\xa0\xa0/\xa0_\xa0\\_______\xa0\xa0___\xa0________\xa0___\xa0_\xa0\xa0__\xa0_\xa0\xa0___\xa0____",r.a.createElement("br",null),"\xa0_/\xa0//\xa0_\xa0\xa0/\xa0/\xa0-_)\xa0/\xa0___/\xa0__/\xa0_\xa0\\/\xa0_\xa0`/\xa0__/\xa0_\xa0`/\xa0\xa0'\xa0\\/\xa0\xa0'\xa0\\/\xa0-_)\xa0__/",r.a.createElement("br",null),"/___/\\_,_/_/\\__/\xa0/_/\xa0\xa0/_/\xa0\xa0\\___/\\_,\xa0/_/\xa0\xa0\\_,_/_/_/_/_/_/_/\\__/_/",r.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/___/",r.a.createElement("br",null))),r.a.createElement("div",null,r.a.createElement("h1",null,"NLoC: ",this.state.nloc)),r.a.createElement(_,{onAddLOC:this.addLOC,typingRate:this.state.typingRate}),r.a.createElement("div",null,r.a.createElement("h1",null,"Upgrades")),r.a.createElement("div",{className:"Achievements"},r.a.createElement("h1",null,"Achievements"),r.a.createElement("div",{className:"AchievementList"},this.state.achievements.filter((function(t){return t.threshold<e.state.nloc})).map((function(e,t){return r.a.createElement("div",{className:"Achievement",key:t},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,e.description))})))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c59210a8.chunk.js.map