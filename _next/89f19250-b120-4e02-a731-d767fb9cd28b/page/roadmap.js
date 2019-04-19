
          window.__NEXT_REGISTER_PAGE('/roadmap', function() {
            var comp = module.exports=webpackJsonp([38],{121:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),o=r(n),l=a(68),s=r(l),d=[{done:!0,doneDate:"1st January 2018",title:"Core Wallet 4.0 Release Stage 2",description:"Tor Integration & Optional Stealth Addressing",progress:100,progressState:""},{done:!0,doneDate:"24th March 2018",title:"New website",description:"New look, guides, updated roadmap, list of official core members, blog with official news, mobile friendly",progress:100,progressState:""},{done:!0,doneDate:"9th June 2018",title:"First Verge Meetup",description:"First verge meetup in Netherlands, Amsterdam",progress:100,progressState:""},{done:!0,doneDate:"17th January 2019",title:"BlackPaper Version 5.0",description:"5th revision of the BlackPaper",progress:100,progressState:""},{done:!0,doneDate:"11th April 2019",title:"Merchandise Online Store",description:"Verge branded apparel that can be purchased with XVG and BTC.",progress:100,progressState:"https://vergecurrency.store"},{done:!1,doneDate:"",title:"Mining Update",description:"XVGui Miner for Windows, Official Mining Pool & Mining Guide",progress:80,progressState:"Work in progress"},{done:!1,doneDate:"",title:"Rebased Codebase",description:"Rebasing the entire codebase to include the newest standards shared by bitcoin.",progress:97,progressState:"Public beta"},{done:!1,doneDate:"",title:"Desktop Wallet",description:"Electron based wallet with better performance and minimalistic UI design",progress:85,progressState:"Preparing release"},{done:!1,doneDate:"",title:"RingCT Integration",description:"Ring Confidential Transactions - advanced masking of transaction amounts",progress:45,progressState:"Work in progress"},{done:!1,doneDate:"",title:"RSK",description:"RSK Smart Contract Integration",progress:25,progressState:"Investigating integration"},{done:!1,doneDate:"",title:"Official iOS wallet",description:"iOS wallet with full-fledged feature set like a normal wallet.",progress:80,progressState:"Preparing release"},{done:!1,doneDate:"",title:"Official Android wallet update",description:"Freshly redesigned wallet to match our corporate design and feature set.",progress:15,progressState:"Work in progress"}];t.default=function(e){var t=e.start,a=void 0===t?0:t,r=e.maxLength,n=void 0===r?d.length:r;return d.slice(a,a+n).map(function(e){return o.default.createElement("li",{className:"roadmap__item roadmap__item--"+(e.done?"done":"planned")},o.default.createElement("h3",null,e.title),e.description," ",o.default.createElement("br",null),e.done?o.default.createElement("div",{className:"roadmap-update-progress"},o.default.createElement("span",null,"Released")," ",o.default.createElement("div",{className:"progress progress-text"},e.doneDate)):o.default.createElement(s.default,{percentage:e.progress,text:e.progressState}))})}},408:function(e,t,a){e.exports=a(409)},409:function(e,t,a){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.t;return l.default.createElement(c.default,null,l.default.createElement(d.default,null,l.default.createElement("title",{key:"title"},t("common:meta.roadmap.title",{defaultValue:"Roadmap - VergeCurrency.com"}))),l.default.createElement("div",{className:"roadmap"},l.default.createElement("div",{className:"themed-container__gray themed-container__gray--roadmap"},l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"row center-xs roadmap"},l.default.createElement("div",{className:"col-xs-11 col-sm-8 col-lg-6 start-xs center-sm"},l.default.createElement("h6",null,t("roadmap:body.title",{defaultValue:"Roadmap"})),l.default.createElement("h2",{dangerouslySetInnerHTML:{__html:t("roadmap:body.text1",{defaultValue:"A roadmap with great features to come.<br /> Join us while we're still growing!"})}}),l.default.createElement("p",null,t("roadmap:body.text2",{defaultValue:"As an open-source community and volunteer-driven project, our roadmap is meant as a general guideline for how we are developing Verge into one of the best cryptocurrency options out there."})),l.default.createElement("p",null,t("roadmap:body.text3",{defaultValue:"In the spirit of transparency and in good faith to the community, we want this roadmap to be made public. However, please keep in mind that this roadmap is subject to change based on priorities, unplanned developments and new ideas."})),l.default.createElement("div",{className:"row start-xs center-sm pt"},l.default.createElement("div",{className:"col-xs-10 col-xs-offset-2 col-sm-12 col-sm-offset-0 col-md-10 col-lg-9 start-xs"},l.default.createElement("ul",{className:"roadmap__timeline"},l.default.createElement("li",{className:"roadmap__year roadmap__year--current"},l.default.createElement("span",null)),l.default.createElement(g.default,null),l.default.createElement("li",{className:"roadmap__year roadmap__year--next"},l.default.createElement("span",null)))))))))))}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),l=r(o),s=a(8),d=r(s),i=a(2),c=r(i),u=a(7),p=a(9),m=r(p),f=a(121),g=r(f),h=(0,u.translate)(["common","roadmap"],{i18n:m.default,wait:e.browser})(n);t.default=h}).call(t,a(6))},68:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),n=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default=function(e){var t=e.size,a=void 0===t?25:t,r=e.percentage,o=e.text,l=r/100;return n.default.createElement("div",{className:"roadmap-update-progress"},n.default.createElement("svg",{className:"progress",width:a,height:a,viewBox:"0 0 120 120"},n.default.createElement("circle",{className:"progress__meter",cx:"60",cy:"60",r:"54",strokeWidth:"12"}),n.default.createElement("circle",{className:"progress__value",cx:"60",cy:"60",r:"54",strokeWidth:"12",style:{strokeDashoffset:2*Math.PI*54*(1-l),strokeDasharray:2*Math.PI*54}})),n.default.createElement("p",{className:"progress progress-text"},r,"% - ",o))}}},[408]);
            return { page: comp.default }
          })
        