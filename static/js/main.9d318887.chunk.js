(this["webpackJsonpgoit-react-hw02-feedback"]=this["webpackJsonpgoit-react-hw02-feedback"]||[]).push([[0],{16:function(e,t,n){e.exports=n(24)},21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),l=(n(21),n(8)),o=n(9),u=n(10),s=n(15),d=n(14),f=function(e){var t=e.title,n=e.children;return r.a.createElement("section",null,r.a.createElement("h2",null,t),n)},p=function(e){var t=e.message;return r.a.createElement("h2",null,t)},b=n(1),h=n(2);function m(){var e=Object(b.a)(["\n  width: 90%;\n  display: flex;\n  flex-direction: space-between;\n  justify-content: center;\n  height: 50px;\n  font-size: 14px;\n  line-height: 50px;\n"]);return m=function(){return e},e}function v(){var e=Object(b.a)(["\n  list-style-type: none;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return v=function(){return e},e}function g(){var e=Object(b.a)(["\n  width: 90px;\n  align-self: center;\n  height: 30px;\n  border: 2px grey solid;\n  border-radius: 15px;\n"]);return g=function(){return e},e}function x(){var e=Object(b.a)(["\n  border: 2px grey solid;\n  height: 30px;\n  border-radius: 20px;\n"]);return x=function(){return e},e}function y(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return y=function(){return e},e}function k(){var e=Object(b.a)(["\n  width: 250px;\n  display: flex;\n  height: 120px;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n"]);return k=function(){return e},e}function E(){var e=Object(b.a)(['\n  font-family: "Arial";\n  font-size: 16px;\n  width: 400px;\n  margin: auto;\n  padding-inline-start: 0;\n  border: 2px grey solid;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n']);return E=function(){return e},e}var j=h.a.div(E()),O=(h.a.form(k()),h.a.label(y()),h.a.input(x()),h.a.button(g())),w=(h.a.li(v()),h.a.li(m()),function(e){var t=e.options,n=e.onLeaveFeedback;return r.a.createElement("div",{className:"FeedbackOptions"},t.map((function(e){return r.a.createElement(O,{key:e,onClick:function(){return n(e)}},e)})))}),P=function(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,c=e.positivePercentage;return r.a.createElement("ul",null,r.a.createElement("li",null,"Good: ",t),r.a.createElement("li",null,"Neutral: ",n),r.a.createElement("li",null,"Bad: ",a),r.a.createElement("li",null,"Total: ",i),r.a.createElement("li",null,"Positive persentage: ",c,"%"))},F=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.buttonHandlers=function(t,n){for(n in e.state)if(n===t){var a=e.state[n];e.setState(Object(l.a)({},n,a+e.props.step))}},e}return Object(u.a)(n,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}),0)}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.round(this.state.good/this.countTotalFeedback()*100)}},{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage();return r.a.createElement(j,null,r.a.createElement(f,{title:"Please leave feedback"},r.a.createElement(w,{options:Object.keys(this.state),onLeaveFeedback:this.buttonHandlers})),isNaN(t)?r.a.createElement(p,{message:"No feedback given"}):r.a.createElement(f,{title:"Statisics"},r.a.createElement(P,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:t})))}}]),n}(a.Component);F.defaultProps={step:1};var N=F;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9d318887.chunk.js.map