(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1141:function(e,t,a){"use strict";a.r(t);var n=a(227),l=a(228),r=a(230),o=a(229),s=a(232),c=a(231),p=a(3),i=a.n(p),m=a(896),u=a(35),g=a(884),v=a.n(g),d=a(984),b=function(e){var t=v()("popover","show"),a=v()("popover-inner",e.innerClassName);return i.a.createElement(d.a,Object(u.a)({},e,{popperClassName:t,innerClassName:a}))};b.propTypes=d.b,b.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"};var h=b,f=a(100),O=a(112),E=a.n(O),j=a(885),N={tag:j.p,className:E.a.string,cssModule:E.a.object},P=function(e){var t=e.className,a=e.cssModule,n=e.tag,l=Object(f.a)(e,["className","cssModule","tag"]),r=Object(j.l)(v()(t,"popover-header"),a);return i.a.createElement(n,Object(u.a)({},l,{className:r}))};P.propTypes=N,P.defaultProps={tag:"h3"};var y=P,k={tag:j.p,className:E.a.string,cssModule:E.a.object},w=function(e){var t=e.className,a=e.cssModule,n=e.tag,l=Object(f.a)(e,["className","cssModule","tag"]),r=Object(j.l)(v()(t,"popover-body"),a);return i.a.createElement(n,Object(u.a)({},l,{className:r}))};w.propTypes=k,w.defaultProps={tag:"div"};var x=w,C=a(892),q=a(894),M=a(893),T=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).toggle=a.toggle.bind(Object(s.a)(a)),a.state={popoverOpen:!1},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return i.a.createElement("span",null,i.a.createElement(m.a,{className:"mr-1",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),i.a.createElement(h,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle,trigger:"legacy",delay:0},i.a.createElement(y,null,"Popover Title"),i.a.createElement(x,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),t}(p.Component),S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).toggle=a.toggle.bind(Object(s.a)(a)),a.state={popoverOpen:!1,popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(C.a,null,i.a.createElement(q.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Popovers"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/popovers/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(M.a,null,i.a.createElement(m.a,{id:"Popover1",onClick:this.toggle},"Launch Popover"),i.a.createElement(h,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},i.a.createElement(y,null,"Popover Title"),i.a.createElement(x,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))),i.a.createElement(C.a,null,i.a.createElement(q.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Popovers"),i.a.createElement("small",null," list")),i.a.createElement(M.a,null,this.state.popovers.map(function(e,t){return i.a.createElement(T,{key:t,item:e,id:t})}))))}}]),t}(p.Component);t.default=S}}]);
//# sourceMappingURL=50.e4630ba4.chunk.js.map