(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(24)},20:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(11),l=t.n(i),c=(t(20),t(1)),o=t(2),s=t(4),d=t(3),u=t(5),h=t(6),m=t.n(h),p=t(7),f=t.n(p),b=t(8),C=t.n(b),v=t(9),y=t.n(v),E={billCraveyClipArray:[m.a,f.a,C.a,y.a],howardLevisClipArray:[f.a,C.a,y.a,m.a],toddPadreClipArray:[C.a,y.a,m.a,f.a],samWeathermanClipArray:[y.a,m.a,f.a,C.a],searchableClips:[{clipUrl:m.a,clipLabel:"Oh My God Somebody's Jealous",tags:["Bill Cravey","Ridiculous Voice"]},{clipUrl:f.a,clipLabel:"I'm a Michael Jackson",tags:["Todd Padre","Burger King","Crafty Freakout"]},{clipUrl:C.a,clipLabel:"I've Always Wanted a Fuck Pad",tags:["Sam Weatherman"]},{clipUrl:y.a,clipLabel:"I'm the Most Semitic",tags:["Howard Levi's","Jews"]}]},S=t(12),g=t.n(S),w=t(13),k=t.n(w),j=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=k.a.scale(["#ffffff","#000000"]).mode("lch").colors(2);return r.a.createElement("div",{className:"audio-clip-bar"},r.a.createElement("div",{className:"audio-clip-bar__play-icon"},r.a.createElement(g.a,{url:this.props.audioClipSource,colorScale:e})),r.a.createElement("div",{className:"audio-clip-bar__clip-title"},r.a.createElement("h6",null,this.props.clipTitle)),r.a.createElement("div",{className:"audio-clip-bar__clip-tags"},this.props.children))}}]),a}(n.Component),x=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=this.props.tagText;return r.a.createElement("p",{onClick:function(){return e.props.handleTagClick(a)}},a)}}]),a}(n.Component),O=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"search-input",placeholder:"Search",type:"text",value:this.props.audioClipSearchValue,onChange:this.props.onSearchInputChange}),this.props.hasSearchValue?r.a.createElement("div",{className:"clear-search",onClick:this.props.clearSearch},r.a.createElement("i",{className:"fas fa-times"})):r.a.createElement("i",{className:"fas fa-search"}))}}]),a}(n.Component),N=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).handleModalVisibility=function(){t.state.infoModal?t.setState({infoModal:!1}):t.setState({infoModal:!0})},t.handleTeacherAudio=function(e,a){var t=a[e];return new Audio(t).play()},t.updateAudioClipSearch=function(e){t.setState({audioClipSearch:e.target.value.substr(0,30)})},t.handleTagClick=function(e){t.setState({tagText:e,audioClipSearch:e})},t.clearSearch=function(){t.setState({audioClipSearch:""})},t.state={billCraveyIndex:0,howardLevisIndex:0,toddPadreIndex:0,samWeathermanIndex:0,searchableClipAudio:null,audioClipSearch:"",tagText:"",infoModal:!0},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this,a=E.searchableClips.filter(function(a){return a.clipLabel.toLocaleLowerCase().includes(e.state.audioClipSearch.toLocaleLowerCase())||a.tags.some(function(a){return a.toLocaleLowerCase().includes(e.state.audioClipSearch.toLocaleLowerCase())})}).map(function(a,t){var n=a.tags.map(function(a,t){return r.a.createElement(x,{handleTagClick:e.handleTagClick,tagTitle:a,tagText:a,key:t})});return r.a.createElement(j,{audioClipSource:a.clipUrl,onTagClick:function(){return e.onTagClick},clipTitle:a.clipLabel,key:t},n)});return r.a.createElement("div",{className:"app"},r.a.createElement("div",{onClick:this.handleModalVisibility,className:"info-icon"},this.state.infoModal?r.a.createElement("i",{className:"fas fa-times"}):r.a.createElement("i",{className:"fas fa-info"})),this.state.infoModal&&r.a.createElement("div",{className:"info-modal"},r.a.createElement("div",{className:"info-modal__inner"},r.a.createElement("h5",null,"Teacher Pictures"),r.a.createElement("p",null,"Click on a teacher to play a clip featuring them. A new clip loads when the old one finishes so you can loop through for endless fun."),"\xa0",r.a.createElement("h5",null,"Clip List"),r.a.createElement("p",null,"Search by clip title, or tag. You can click on a tag to show every clip with the same tag. Know the timestamp for a clip or want to submit a clip? ",r.a.createElement("a",{href:"mailto:rnrhdev@gmail.com"},"Email me.")))),r.a.createElement("div",{className:"soundboard-wrapper"},r.a.createElement("div",{className:"soundboard"},r.a.createElement("div",{onClick:function(){return e.handleTeacherAudio(e.state.billCraveyIndex,E.billCraveyClipArray,e.setState({billCraveyIndex:e.state.billCraveyIndex+1}))},className:"soundboard__bill-cravey"}),r.a.createElement("div",{onClick:function(){return e.handleTeacherAudio(e.state.howardLevisIndex,E.howardLevisClipArray,e.setState({howardLevisIndex:e.state.howardLevisIndex+1}))},className:"soundboard__howard-levis"}),r.a.createElement("div",{onClick:function(){return e.handleTeacherAudio(e.state.toddPadreIndex,E.toddPadreClipArray,e.setState({toddPadreIndex:e.state.toddPadreIndex+1}))},className:"soundboard__todd-padre"}),r.a.createElement("div",{onClick:function(){return e.handleTeacherAudio(e.state.samWeathermanIndex,E.samWeathermanClipArray,e.setState({samWeathermanIndex:e.state.samWeathermanIndex+1}))},className:"soundboard__sam-weatherman"})),r.a.createElement(O,{audioClipSearchValue:this.state.audioClipSearch,onSearchInputChange:this.updateAudioClipSearch.bind(this),hasSearchValue:this.state.audioClipSearch,clearSearch:this.clearSearch}),a),r.a.createElement("footer",{className:"footer"},r.a.createElement("a",{href:"mailto:rnrhdev@gmail.com"},r.a.createElement("h6",null,"made with ",r.a.createElement("i",{className:"fas fa-heart"})," by rnrh"))))}}]),a}(n.Component),I=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null)}}]),a}(n.Component);l.a.render(r.a.createElement(I,null),document.getElementById("root"))},6:function(e,a,t){e.exports=t.p+"static/media/bill-cravey-jealous.24c9d266.m4a"},7:function(e,a,t){e.exports=t.p+"static/media/todd-michael-jackson.68ddf2c7.m4a"},8:function(e,a,t){e.exports=t.p+"static/media/sam-weatherman-fuck-pad.f6090cf4.m4a"},9:function(e,a,t){e.exports=t.p+"static/media/howard-semetic.703debc6.m4a"}},[[14,2,1]]]);
//# sourceMappingURL=main.9d3ed8f4.chunk.js.map