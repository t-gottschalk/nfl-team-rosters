(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(t,e,a){t.exports=a(272)},150:function(t,e,a){},270:function(t,e,a){},272:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),i=a(27),c=a.n(i),o=(a(150),a(56)),r=a(57),l=a(62),g=a(58),m=a(63),v=function(t){var e=t.years,a=t.name,s=t.position,i=t.id,c=t.number;return n.a.createElement("div",{className:"tc bg-color dib br3 pa3 ma2 grow bw2 shadow-5 card"},n.a.createElement("p",{className:"num"},"No. ",c),n.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/".concat(i,".png"),alt:"players"}),n.a.createElement("div",null,n.a.createElement("h2",null,a),n.a.createElement("p",null,"Position: ",s),n.a.createElement("p",null,"Experience: ",e)))},h=function(t){var e=t.team;return n.a.createElement("div",{className:"card-container"},e.map(function(t,a){return n.a.createElement(v,{key:a,id:"https://s3-us-west-2.amazonaws.com/static.fantasydata.com/headshots/nfl/low-res/0.png"!==e[a].PhotoUrl?e[a].PlayerID:0,name:e[a].Name,position:e[a].Position,years:e[a].Experience,number:e[a].Number})}))},u=function(t){t.searchfield;var e=t.searchChange;return n.a.createElement("div",{className:"pa2"},n.a.createElement("input",{className:"pa3 ba b--red",type:"search",placeholder:"search player's name",onChange:e}))},p=function(t){return n.a.createElement("div",{className:"scroll"},t.children)},f=a(278),d=[{key:"Arizona Cardinals",text:"Arizona Cardinals",value:"ari",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/ARI.svg"}},{key:"Atlanta Falcons",text:"Atlanta Falcons",value:"atl",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/ATL.svg"}},{key:"Baltimore Ravens",text:"Baltimore Ravens",value:"bal",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/BAL.svg"}},{key:"Buffalo Bills",text:"Buffalo Bills",value:"buf",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/BUF.svg"}},{key:"Carolina Panthers",text:"Carolina Panthers",value:"car",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/CAR.svg"}},{key:"Chicago Bears",text:"Chicago Bears",value:"chi",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/CHI.svg"}},{key:"Cincinnati Bengals",text:"Cincinnati Bengals",value:"cin",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/CIN.svg"}},{key:"Cleveland Browns",text:"Cleveland Browns",value:"cle",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/CLE.svg"}},{key:"Dallas Cowboys",text:"Dallas Cowboys",value:"dal",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/DAL.svg"}},{key:"Denver Broncos",text:"Denver Broncos",value:"den",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/DEN.svg"}},{key:"Detroit Lions",text:"Detroit Lions",value:"det",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/DET.svg"}},{key:"Green Bay Packers",text:"Green Bay Packers",value:"gb",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/GB.svg"}},{key:"Houston Texans",text:"Houston Texans",value:"hou",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/HOU.svg"}},{key:"Indianapolis Colts",text:"Indianapolis Colts",value:"ind",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/IND.svg"}},{key:"Jacksonville Jaguars",text:"Jacksonville Jaguars",value:"jax",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/JAX.svg"}},{key:"Kansas City Chiefs",text:"Kansas City Chiefs",value:"kc",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/KC.svg"}},{key:"Los Angeles Chargers",text:"Los Angeles Chargers",value:"lac",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/LAC.svg"}},{key:"Los Angeles Rams",text:"Los Angeles Rams",value:"lar",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/LA.svg"}},{key:"Miami Dolphins",text:"Miami Dolphins",value:"mia",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/MIA.svg"}},{key:"Minnesota Vikings",text:"Minnesota Vikings",value:"min",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/MIN.svg"}},{key:"New England Patriots",text:"New England Patriots",value:"ne",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/NE.svg"}},{key:"New Orleans Saints",text:"New Orleans Saints",value:"no",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/NO.svg"}},{key:"New York Giants",text:"New York Giants",value:"nyg",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/NYG.svg"}},{key:"New York Jets",text:"New York Jets",value:"nyj",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/NYJ.svg"}},{key:"Oakland Raiders",text:"Oakland Raiders",value:"oak",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/OAK.svg"}},{key:"Philadelphia Eagles",text:"Philadelphia Eagles",value:"phi",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/PHI.svg"}},{key:"Pittsburgh Steelers",text:"Pittsburgh Steelers",value:"pit",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/PIT.svg"}},{key:"San Francisco 49ers",text:"San Francisco 49ers",value:"sf",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/SF.svg"}},{key:"Seattle Seahawks",text:"Seattle Seahawks",value:"sea",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/SEA.svg"}},{key:"Tampa Bay Buccaneers",text:"Tampa Bay Buccaneers",value:"tb",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/TB.svg"}},{key:"Tennessee Titans",text:"Tennessee Titans",value:"ten",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/TEN.svg"}},{key:"Washington Redskins",text:"Washington Redskins",value:"was",image:{avatar:!0,src:"https://static.nfl.com/static/site/img/logos/svg/teams/WAS.svg"}}],y=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(g.a)(e).call(this,t))).onChange=function(t,e){var s=a.props.onDropDownChange;a.setState({selected:e.value},function(){return s(a.state.selected)})},a.onSearchChange=function(t,e){console.log(e.searchQuery),a.setState({searchQuery:e.searchQuery})},a.state={searchQuery:"",selected:null},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.state,e=t.searchQuery,a=t.selected;return n.a.createElement("div",null,n.a.createElement(f.a,{className:"w-20",button:!0,fluid:!0,options:d,placeholder:"Select Team",search:!0,text:e,searchQuery:e,value:a,onChange:this.onChange,onSearchChange:this.onSearchChange}))}}]),e}(n.a.Component),k=(a(270),function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(g.a)(e).call(this))).onSearchChange=function(t){a.setState({searchfield:t.target.value})},a.state={team:[],searchfield:""},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"doTeamFetch",value:function(t){var e=this;fetch("https://api.sportsdata.io/v3/nfl/scores/json/Players/".concat(t,"?key=680357673cd14ef28c1bd63359aa9c48")).then(function(t){return t.json()}).then(function(t){return e.setState({team:t})})}},{key:"onDropDownChange",value:function(t){this.doTeamFetch(t)}},{key:"render",value:function(){var t=this,e=this.state,a=e.team,s=e.searchfield,i=a.filter(function(t){return t.Name.toLowerCase().includes(s.toLowerCase())});return a.length?n.a.createElement("div",{className:"tc"},n.a.createElement("h1",{className:"f1"},"NFL Rosters"),n.a.createElement("div",{className:"inputs"},n.a.createElement(y,{onDropDownChange:function(e){return t.onDropDownChange(e)}}),n.a.createElement(u,{searchChange:this.onSearchChange})),n.a.createElement(p,null,n.a.createElement(h,{team:i}))):n.a.createElement("div",{className:"tc"},n.a.createElement("h1",{className:"f1"},"NFL Rosters"),n.a.createElement("div",{className:"center"},n.a.createElement(y,{onDropDownChange:function(e){return t.onDropDownChange(e)}})))}}]),e}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(271);c.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[145,1,2]]]);
//# sourceMappingURL=main.e97c5c6e.chunk.js.map