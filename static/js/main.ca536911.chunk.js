(this["webpackJsonppstagram-by-pdl39"]=this["webpackJsonppstagram-by-pdl39"]||[]).push([[0],Array(21).concat([function(e,t,a){e.exports=a(49)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(18),i=a.n(s),r=a(1),c=a(2),l=a(4),m=a(3),p=a(12),d=a(5),u=(a(26),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{className:"Ad"},o.a.createElement("img",{className:"phone-frame-img",src:"images/login/login_page_phones.png",alt:"two phones overlapped showing auto transitioning images"}),o.a.createElement("div",{className:"phone-screen"}))}}]),a}(o.a.Component)),g=a(19),h=(a(27),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState(Object(g.a)({},e.target.id,e.target.value))},n.goToMain=function(){if(0==="".length){var e=n.state,t=e.idInput,a=e.pwInput;"peterdlee"===t&&"donghun1"===a?n.props.history.push("/pstagram/main"):alert("Invalid username and/or password")}else fetch("",{method:"POST",body:JSON.stringify({username:n.state.idInput,password:n.state.pwInput})}).then((function(e){return e.json()})).then((function(e){console.log("==========================="),console.log("Server response: ",e)}))},n.goToMainOnEnter=function(e){"Enter"===e.key&&n.goToMain()},n.state={idInput:"",pwInput:""},n}return Object(c.a)(a,[{key:"render",value:function(){console.log(this.props.history);var e=this.state,t=e.idInput,a=e.pwInput,n=t.length>0&&a.length>5;return o.a.createElement("section",{className:"LoginBox"},o.a.createElement("div",{className:"login-box"},o.a.createElement("img",{className:"logo",src:"images/login/logo_text.png",alt:"pstagram text logo"}),o.a.createElement("input",{className:"username-box",id:"idInput",type:"text",placeholder:"Phone number, username, or email",onChange:this.handleInput}),o.a.createElement("input",{className:"pw-box",id:"pwInput",type:"password",placeholder:"Password",onChange:this.handleInput,onKeyPress:this.goToMainOnEnter}),o.a.createElement("button",{className:n?"login-button activated":"login-button",disabled:!1,onClick:this.goToMain},"Log In"),o.a.createElement("div",{className:"or-box"},o.a.createElement("span",{className:"or-line left"}),o.a.createElement("span",{className:"or"},o.a.createElement("p",null,"OR")),o.a.createElement("span",{className:"or-line right"})),o.a.createElement("div",{className:"login-with-facebook"},o.a.createElement("img",{className:"fb-logo",src:"images/login/facebook_logo.png",alt:"facebook logo"}),o.a.createElement("a",{href:"#",className:"fb-text"},o.a.createElement("p",null,"Log in with Facebook"))),o.a.createElement("div",{className:"forgot-pw"},o.a.createElement("a",{href:"#"},o.a.createElement("p",null,"Forgot password?")))),o.a.createElement("div",{className:"signup-box"},o.a.createElement("p",{className:"no-account-question"},"Don't have an account?"," ",o.a.createElement("span",{class:"signup-text"},o.a.createElement("a",{href:"#"},"Sign up")))),o.a.createElement("p",{className:"get-the-app"},"Get the app."),o.a.createElement("div",{className:"download"},o.a.createElement("a",{href:"https://apps.apple.com/app/instagram/id389801252?vt=lo",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"images/login/app_store_button.png",alt:"download on the app store button",className:"app-store-button"})),o.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D4EC185CE-2123-432F-A390-38000A457199%26utm_content%3Dlo%26utm_medium%3Dbadge",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:"images/login/play_store_button.png",alt:"download from google play button",className:"play-store-button"}))))}}]),a}(o.a.Component)),f=Object(d.f)(h),v=(a(33),[{id:"1",urlTo:"https://github.com/pdl39",content:"ABOUT"},{id:"2",urlTo:"https://github.com/pdl39",content:"HELP"},{id:"3",urlTo:"https://github.com/pdl39",content:"PRESS"},{id:"4",urlTo:"https://github.com/pdl39",content:"API"},{id:"5",urlTo:"https://github.com/pdl39",content:"JOBS"},{id:"6",urlTo:"https://github.com/pdl39",content:"PRIVACY"},{id:"7",urlTo:"https://github.com/pdl39",content:"TERMS"},{id:"8",urlTo:"https://github.com/pdl39",className:"footer-item-link",content:"LOCATIONS"},{id:"9",urlTo:"https://github.com/pdl39",content:"TOP ACCOUNTS"},{id:"10",urlTo:"https://github.com/pdl39",content:"HASHTAGS"},{id:"11",urlTo:"https://github.com/pdl39",content:"LANGUAGE"}]),N=(new Date).getFullYear(),E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",{className:"LoginFooter"},o.a.createElement("ul",{className:"footer-menus"},v.map((function(e){return o.a.createElement("li",{className:"footer-menu",key:e.id},o.a.createElement("p",null,o.a.createElement("a",{href:e.urlTo,target:"_blank",rel:"noopener noreferrer"},e.content)))}))),o.a.createElement("p",{className:"footer-copyright"},"\xa9 ",N," PSTAGRAM BY pdl39"))}}]),a}(o.a.Component),b=(a(34),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Login"},o.a.createElement("section",{className:"login-main"},o.a.createElement(u,null),o.a.createElement(f,null)),o.a.createElement(E,null))}}]),a}(o.a.Component)),y={agt_14:{detail:"Song",pic:"agt_14.png"},alssa_bbe:{detail:"Alssa Bun",pic:"alssa_bbe.png"},aroee:{detail:"Arold",pic:"aroee.png"},askny:{detail:"Ashley",pic:"askny.png"},blcq_san:{detail:"Sohwan Jag",pic:"blcq_san.png"},byaun:{detail:"\uc740",pic:"byaun.png"},chnjini:{detail:"\uc9d5",pic:"chnjini.png"},cliresyyoo25:{detail:"Soeon Clar Yo",pic:"cliresyyoo25.png"},dogkyun_oo:{detail:"Daniel",pic:"dogkyun_oo.png"},esheryn:{detail:"Esher\u2728",pic:"esheryn.png"},hain_stela:{detail:"Hain Stel Kim",pic:"hain_stela.png"},hoo92:{detail:"Hwon Sog",pic:"hoo92.png"},ieeqyu:{detail:"Wil C",pic:"ieeqyu.png"},juo_prk:{detail:"Hog Ju Pak",pic:"juo_prk.png"},kecb:{detail:"Ken Cebals",pic:"kecb.png"},khn8_gb:{detail:"Ki oong Abert Hn",pic:"khn8_gb.png"},knparabem:{detail:"",pic:"knparabem.png"},ldsy:{detail:"\ub2e4\uc774",pic:"ldsy.png"},mioonoo:{detail:"\uac15\uc6b0",pic:"mioonoo.png"},palcho24:{detail:"Pal Jiwook Chi",pic:"palcho24.png"},ph_coi:{detail:"",pic:"ph_coi.png"},se_nni:{detail:"N Eun So",pic:"se_nni.png"},sejuhyu_s:{detail:"SEHYUN(SE JU HYN)",pic:"sejuhyu_s.png"},sk7rna:{detail:"SoJin Kataria",pic:"sk7rna.png"},stvele_jh:{detail:"Seve Le",pic:"stvele_jh.png"},sughopai89:{detail:"Sng o",pic:"sughopai89.png"},swetpotats2:{detail:"Janne Shn",pic:"swetpotats2.png"},thsisdkee:{detail:"\uc774\uacbd",pic:"thsisdkee.png"},yuegu:{detail:"YEER G\ud83d\udc8b",pic:"yuegu.png"},weode_bootcmp:{detail:">wcode | \uc704\ub4dc",pic:"weode_bootcmp.png"}},w={role:{detail:"ROLE",pic:"role.png"},wewor:{detail:"WeWor",pic:"wewor.png"},nusr_e:{detail:"Nusr_e#Salbae",pic:"nusr_e.png"},davidbeckha:{detail:"David Beckha",pic:"davidbeckha.png"},lamborghin:{detail:"Lamborghin",pic:"lamborghin.png"},ferrar:{detail:"Ferrar",pic:"ferrar.png"},seojidail:{detail:"seo ji \u1109\u1165\u110c\u1175 \u5f90\u77e5",pic:"seojidail.png"},porsch:{detail:"Porsch",pic:"porsch.png"},victoriassecre:{detail:"Victoria's Secre",pic:"victoriassecre.png"},disne:{detail:"Disne",pic:"disne.png"},bentlemotor:{detail:"Bentle Motor Official",pic:"bentlemotor.png"},cristian:{detail:"Cristian Ronald",pic:"cristian.png"},herme:{detail:"Herm\xe8",pic:"herme.png"},palacskateboard:{detail:"PALAC",pic:"palacskateboard.png"},nik:{detail:"Nik",pic:"nik.png"},rogerfedere:{detail:"Roger Federe",pic:"rogerfedere.png"},kingjame:{detail:"LeBon Jame",pic:"kingjame.png"},lucascheo:{detail:"\ucc9c\uc6b0",pic:"lucascheo.png"},googl:{detail:"Googl",pic:"googl.png"},appl:{detail:"appl",pic:"appl.png"},corneluniversit:{detail:"Cornel Universit",pic:"corneluniversit.png"},teslmotor:{detail:"Tesl",pic:"teslmotor.png"},thisisbillgate:{detail:"Bill Gate",pic:"thisisbillgate.png"},momstouc_lov:{detail:"\ub9d8\uc2a4\ud130",pic:"momstouc_love.png"},subwa:{detail:"Official Subwa",pic:"subwa.png"},kakafriends_official:{detail:"\u110f\u1161\u110f\u1161\u1111\u1173\u1105\u1166\u11ab\u110c\u1173 \u2022 KAKA FRIENDS",pic:"kakafriends_official.png"},hublo:{detail:"Hublo",pic:"hublo.png"},patephilippe:{detail:"Pate Philippe",pic:"patephilippe.png"},audemarspigut:{detail:"Audemars Pigut",pic:"audemarspigut.png"},yjo_oh:{detail:"\uc624\uc8fc",pic:"yjo_oh.png"},y_loves:{detail:"\uc815\uc9c4",pic:"y_loves.png"}},k={};for(var _ in y)k[_]=y[_];for(var C in w)k[C]=w[C];var S=[],I=[];for(var j in y)S.push(j),I.push(y[j].pic);var O=[],A=[];for(var x in w)O.push(x),A.push(w[x].pic);var L=[],B=[],T=[];for(var P in k)L.push(P),B.push(k[P].detail),T.push(k[P].pic);var M=["","Seoul","Yeouido","Hannam-dong","Euljiro","Yongsan-gu","Seocho-gu","Gangnam-gu","Chungdam-dong","Incheon","Busan","Jeju","Tokyo","Osaka","Kyoto","Hokkaido, Japan","Shanghai","Beijing","Chengdu","Hong Kong","New York","Ithaca","Los Angeles","San Francisco","Mountain View, California","Cupertino, California","Miami","Boston","Seattle","Portland, Oregon","Chicago","Milano","Napoli","London","Paris","Geneva","Frankfurt","Barcelona","Madrid","Praha"],D=["beef.png","beef2.png","homeparty.png","pizza2.png","sushi.png","sushi2.png","wines.png","risotto.png","asianfood.png","roomservice.png","snack.png","macchiato.png","porterhouse2.png","barbeque.png","steak.png","chuseok.png","chinesefood.png","chicken.png","uniandsoju.png","fishandsake.png"],U=["les girit~","sooooo good","love it!","in love \ud83e\udde1","rockin the day","this is so good","yeaaaaaaaa","let's begin!","the best there is","rollin on","can't resist","\ud83e\udde1\ud83e\udde1\ud83e\udde1","\ud83d\udd25","\ud83d\udd25\ud83d\udd25\ud83d\udd25","\ud83d\ude0d","\ud83d\ude0d\ud83d\ude0d\ud83d\ude0d","\ud83d\ude18","so good it's dizzifying\ud83e\udd2a","yeessssssss\ud83d\udd25","carpe diem!"],R=["woahhh where is this??","awesome!!!","omg!!!!!!!!","looks amazing! ><","that looks soooooooo nice","woah that looks fly","wowwowowow","wowowowow\ud83d\ude0d","wowowow\ud83d\udd25","woah!\ud83e\udde1","looks so goooooood\ud83e\udde1","i'll join you next time!","hey hit me up!","omg\ud83e\udde1","\ud83d\udd25\ud83d\udd25\ud83d\udd25","\ud83d\ude0d\ud83e\udde1","\ud83d\udc4d\ud83d\udc4d\ud83d\udc4d","\ud83d\ude18","\ud83d\ude06","\ud83d\udc4d\ud83e\udde1","nice~~~~","awesome\ud83e\udde1"],H=(a(35),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).handleSearchInput=function(t){e.setState({searchInput:t.target.value}),e.setState({searchBoxSelected:!0})},e.searchBoxSelect=function(){e.setState({searchBoxClassName:"nav-search-box selected"}),e.setState({searchIconClassName:"nav-search-icon selected"}),e.setState({searchClearIconClassName:"nav-search-clear-icon selected"}),e.setState({searchBoxSelected:!0})},e.searchBoxUnselect=function(){e.setState({searchBoxClassName:"nav-search-box"}),e.setState({searchIconClassName:"nav-search-icon"}),e.setState({searchClearIconClassName:"nav-search-clear-icon"}),e.setState({searchBoxSelected:!1})},e.clearSearch=function(){e.setState({searchInput:""}),e.searchBoxUnselect()},e.renderSearchSuggestionItem=function(e){return o.a.createElement("li",{className:"nav-search-suggestion-item",key:e},o.a.createElement("div",{className:"search-suggested-profile-pic-outer-glow"},o.a.createElement("div",{className:"search-suggested-profile-pic-mid-white"},o.a.createElement("div",{className:"search-suggested-profile-pic"},o.a.createElement("img",{src:function(e){return S.includes(e)?"images/main/user_followers/".concat(k[e].pic):O.includes(e)?"images/main/suggested/".concat(k[e].pic):void 0}(e),alt:"search suggested user profile",className:"search-suggested-profile-pic"})))),o.a.createElement("div",{className:"search-suggested-profile-id-n-detail"},o.a.createElement("p",{className:"search-suggested-profile-id"},e),o.a.createElement("p",{className:"search-suggested-profile-detail"},k[e].detail)))},e.state={searchInput:"",searchBoxSelected:!1,searchBoxClassName:"nav-search-box",searchIconClassName:"nav-search-icon",searchClearIconClassName:"nav-search-clear-icon",searchSuggestionsBoxClassName:"nav-search-suggestions-box"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.searchInput.length>0&&!0===this.state.searchBoxSelected?L.sort().filter((function(t){return t.includes(e.state.searchInput)})):[],a=t.map((function(t){return e.renderSearchSuggestionItem(t)})),n=t.length>0?"nav-search-suggestions-box active":"nav-search-suggestions-box";return o.a.createElement("div",{className:"NavSearch"},o.a.createElement("div",{className:"nav-search-box-container",tabIndex:0,onFocus:this.searchBoxSelect,onBlur:this.searchBoxUnselect},o.a.createElement("input",{className:this.state.searchBoxClassName,type:"text",placeholder:"Search",value:this.state.searchInput,onChange:this.handleSearchInput}),o.a.createElement("img",{className:this.state.searchIconClassName,src:"images/main/nav_search_icon.png",alt:"search icon"}),o.a.createElement("img",{className:this.state.searchClearIconClassName,src:"images/main/nav_search_clear_icon.png",alt:"search close icon",onClick:this.clearSearch})),o.a.createElement("div",{className:n},o.a.createElement("ul",{className:"nav-search-suggestions"},a),o.a.createElement("div",{className:"nav-search-suggestions-connector-figure"})))}}]),a}(o.a.Component)),F=(a(36),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).toggleNavMenuDropdown=function(){console.log("toggle");var t=e.state.isDropdownActive;e.setState(t?{isDropdownActive:!1}:{isDropdownActive:!0})},e.hideNavMenuDropdown=function(t){setTimeout((function(){return e.setState({isDropdownActive:!1})}),100)},e.componentDidMount=function(){console.log(e.isHideExceptionTriggered)},e.state={isDropdownActive:!1,isHideExceptionTriggered:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.isDropdownActive;return o.a.createElement("div",{className:"NavMenu"},o.a.createElement("div",{className:"nav-menu"},o.a.createElement("div",{className:"nav-menu-item home"},o.a.createElement("img",{className:e?"menu-item-icon home-icon active":"menu-item-icon home-icon",src:e?"images/main/onclick_icons/nav_menu_home_icon_white.png":"images/main/nav_menu_home_icon.png",alt:"nav bar home menu icon"})),[{divClassName:"nav-menu-item dm",imgClassName:"menu-item-icon dm-icon",src:"images/main/nav_menu_dm_icon.png",alt:"nav bar dm icon"},{divClassName:"nav-menu-item explore",imgClassName:"menu-item-icon explore-icon",src:"images/main/nav_menu_explore_icon.png",alt:"nav bar explore menu icon"},{divClassName:"nav-menu-item heart",imgClassName:"menu-item-icon heart-icon",src:"images/main/nav_menu_heart_icon.png",alt:"nav bar heart menu icon"}].map((function(e){return o.a.createElement("div",{className:e.divClassName},o.a.createElement("img",{className:e.imgClassName,src:e.src,alt:e.alt}))})),o.a.createElement("div",{className:e?"nav-menu-item avatar active":"nav-menu-item avatar",tabIndex:"0",onClick:this.toggleNavMenuDropdown,onBlur:this.hideNavMenuDropdown},o.a.createElement("img",{className:"menu-item-icon avatar-icon",src:"images/main/account_profile_pic.png",alt:"nav bar avatar profile"})),o.a.createElement("div",{className:e?"nav-menu-item avatar-outer-border active":"nav-menu-item avatar-outer-border"})),o.a.createElement("div",{className:e?"nav-menu-dropdown active":"nav-menu-dropdown",tabIndex:"0"},o.a.createElement("ul",{className:"nav-menu-dropdown-items",onClick:this.triggerHideException},[{liClassName:"nav-menu-dropdown-item profile",aClassName:"nav-menu-dropdown-item profile",divClassName:"nav-dropdown-item-img avatar-img",imgClassName:"nav-dropdown-item-img avatar-img",src:"images/main/nav_menu_dropdown_avatar.png",alt:"nav bar menu dropdown avatar",pClassName:"nav-dropdown-item-text profile-text",content:"Profile"},{liClassName:"nav-menu-dropdown-item saved",aClassName:"nav-menu-dropdown-item saved",divClassName:"nav-dropdown-item-img tag-img",imgClassName:"nav-dropdown-item-img tag-img",src:"images/main/nav_menu_tag_icon.png",alt:"nav bar menu dropdown tag",pClassName:"nav-dropdown-item-text saved-text",content:"Saved"},{liClassName:"nav-menu-dropdown-item settings",aClassName:"nav-menu-dropdown-item settings",divClassName:"nav-dropdown-item-img settings-img",imgClassName:"nav-dropdown-item-img settings-img",src:"images/main/nav_menu_settings_icon.png",alt:"nav bar menu dropdown settings",pClassName:"nav-dropdown-item-text settings-text",content:"Settings"}].map((function(e){return o.a.createElement("li",{className:e.liClassName},o.a.createElement("a",{href:"",className:e.aClassName},o.a.createElement("div",{className:e.divClassName},o.a.createElement("img",{className:e.imgClassName,src:e.src,alt:e.alt})),o.a.createElement("p",{className:e.pClassName},e.content)))})),o.a.createElement("li",{className:"nav-menu-dropdown-item logout"},o.a.createElement(p.b,{to:"/pstagram/",className:"nav-menu-dropdown-item logout"},o.a.createElement("p",{className:"nav-dropdown-item-text logout-text"},"Log Out")))),o.a.createElement("div",{className:"nav-menu-dropdown-connector-figure"})))}}]),a}(o.a.Component)),J=(a(37),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("nav",{className:"Nav"},o.a.createElement("div",{className:"nav-items-container"},o.a.createElement("div",{className:"nav-logo"},o.a.createElement("img",{src:"images/main/logo_text.png",alt:"Pstagram text logo",className:"nav-logo"})),o.a.createElement(H,null),o.a.createElement(F,null)))}}]),a}(o.a.Component));function W(e,t){for(var a=[],n=e;n<t;n++)a.push(n);return a}function X(e){for(var t=[];0!==e.length;){var a=Math.floor(Math.random()*e.length),n=e[a];e.splice(a,1),t.push(n)}return t}a(38);var Y=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).slideStoryLeft=function(){var t=(e.state.storyItemWidth*S.length+e.state.storyLastItemRightMargin)/e.state.storySectionWidth*100,a=4*e.state.storyItemWidth/e.state.storySectionWidth*100,n=-1*e.state.storyXcoordinate+a>=t-100;n?e.setState((function(e){return{storyXcoordinate:-1*(t-100)}})):e.setState((function(e){return{storyXcoordinate:e.storyXcoordinate-a}})),n?e.setState((function(e){return{storyArrowButtonRightClassName:"story-arrow-button right hide"}})):e.setState((function(e){return{storyArrowButtonRightClassName:"story-arrow-button right"}})),e.setState({storyArrowButtonLeftClassName:"story-arrow-button left"})},e.slideStoryRight=function(){var t=(e.state.storyItemWidth*S.length+e.state.storyLastItemRightMargin)/e.state.storySectionWidth*100,a=4*e.state.storyItemWidth/e.state.storySectionWidth*100,n=100-a,o=-1*e.state.storyXcoordinate+(a-n)>=t-100,s=-1*e.state.storyXcoordinate-a<=0;o?e.setState((function(e){return{storyXcoordinate:e.storyXcoordinate+n}})):e.setState((function(e){return{storyXcoordinate:e.storyXcoordinate+a}})),s&&e.setState({storyXcoordinate:0}),s?e.setState((function(e){return{storyArrowButtonLeftClassName:"story-arrow-button left hide"}})):e.setState((function(e){return{storyArrowButtonLeftClassName:"story-arrow-button left"}})),e.setState({storyArrowButtonRightClassName:"story-arrow-button right"})},e.generateStory=function(e){return o.a.createElement("li",{className:"story-element",key:e},o.a.createElement("a",{href:"#",className:"story-element-link"},o.a.createElement("div",{className:"story-profile-pic-outer-glow"},o.a.createElement("div",{className:"story-profile-pic-mid-white"},o.a.createElement("div",{className:"story-profile-pic"},o.a.createElement("img",{className:"story-profile-pic",src:"images/main/user_followers/"+I[e],alt:"story user profile"})))),o.a.createElement("p",{className:"story-profile-id"},S[e])))},e.state={followersRandNumArr:X(W(0,S.length)),storyElements:[],storySectionWidth:610,storyItemWidth:80,storyLastItemRightMargin:14,storyArrowButtonRightClassName:"story-arrow-button right",storyArrowButtonLeftClassName:"story-arrow-button left hide",storyXcoordinate:0},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t={transform:"translate("+this.state.storyXcoordinate+"%, 0)"};return o.a.createElement("div",{className:"Story"},o.a.createElement("div",{className:this.state.storyArrowButtonLeftClassName,onClick:this.slideStoryRight},o.a.createElement("img",{className:"story-arrow-img left",src:"images/main/story_left_arrow.png",alt:"story right arrow button"})),o.a.createElement("div",{className:this.state.storyArrowButtonRightClassName,onClick:this.slideStoryLeft},o.a.createElement("img",{className:"story-arrow-img right",src:"images/main/story_right_arrow.png",alt:"story right arrow button"})),o.a.createElement("ul",{className:"story",style:t},this.state.followersRandNumArr.map((function(t){return e.generateStory(t)}))))}}]),a}(o.a.Component),G=(a(39),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).changeHeartColor=function(){var t=e.state.isLiked;e.setState(t?{isLiked:!1}:{isLiked:!0})},e.state={isLiked:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.isLiked;return o.a.createElement("li",{className:"CommentItems",key:this.props.id},o.a.createElement("a",{href:"",className:"feed-profile-id"},this.props.postedById),o.a.createElement("p",{className:"feed-comment"},this.props.content),o.a.createElement("div",{className:"feed-comment-like"},o.a.createElement("img",{className:e?"feed-comment-heart liked":"feed-comment-heart",src:e?"images/main/onclick_icons/nav_menu_heart_icon_red.png":"images/main/nav_menu_heart_icon.png",alt:"feed comment like heart icon",onClick:this.changeHeartColor})))}}]),a}(o.a.Component)),K=X(W(0,D.length)),q=[];K.forEach((function(e){var t=X(W(0,S.length)),a=t[0],n=t[1],o=X(W(0,M.length))[0],s=X(W(0,U.length))[0],i={id:e,postedByProfilePic:I[a],postedById:S[a],place:M[o],pic:D[e],mainLikerProfilePic:I[n],mainLikerId:S[n],numLikers:Math.floor(200*Math.random()+5)+" others",explanation:U[s],postedTime:Math.floor(10*Math.random()+2)+" HOURS AGO",isLiked:!1,isSaved:!1};q.push(i)}));var z=X(W(0,R.length)),V=[];z.forEach((function(e){var t={id:e,postedById:S[Math.floor(Math.random()*S.length)],content:R[e],isLiked:!1};V.push(t)}));a(40);var Q=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).componentDidMount=function(){var t=Math.floor(Math.random()*V.length),a=Math.floor(3*Math.random()+1),n=t+a>V.length?t:t+a;e.setState({commentItems:V.slice(t,n)})},e.handleCommentInput=function(t){e.setState({commentInput:t.target.value})},e.postComment=function(t){var a=e.state,n=a.commentItems,o=a.commentInput;o.length>0&&e.setState({commentItems:n.concat({id:n.length+1,postedById:e.props.currentAccountUserId,content:o,isLiked:!1}),commentInput:""})},e.postCommentOnEnter=function(t){"Enter"===t.key&&e.postComment()},e.state={commentItems:[],commentInput:""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.commentItems,a=e.commentInput,n=a.length>0;return o.a.createElement("div",{className:"Comment"},o.a.createElement("ul",{className:"feed-comments"},t.map((function(e){return o.a.createElement(G,{id:e.id,postedById:e.postedById,content:e.content,isLiked:e.isLiked,key:e.id})}))),o.a.createElement("p",{className:"feed-posted-time"},this.props.postedTime),o.a.createElement("div",{className:"feed-post-comment"},o.a.createElement("input",{className:"post-comment-box",type:"text",placeholder:"Add a comment...",onChange:this.handleCommentInput,onKeyPress:this.postCommentOnEnter,value:a}),o.a.createElement("div",{className:n?"post-button active":"post-button",onClick:this.postComment},"Post")))}}]),a}(o.a.Component),Z=(a(41),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).changeHeartColor=function(){var t=e.state.isLiked;e.setState(t?{isLiked:!1}:{isLiked:!0})},e.changeTagColor=function(){var t=e.state.isSaved;e.setState(t?{isSaved:!1}:{isSaved:!0})},e.state={tagIconSrc:"images/main/nav_menu_tag_icon.png",tagIconClassName:"feed-action-tag",isLiked:!1,isSaved:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isLiked,a=e.isSaved;return o.a.createElement("div",{className:"Feed"},o.a.createElement("div",{className:"feed-header"},o.a.createElement("div",{className:"feed-profile-pic-outer-glow"},o.a.createElement("div",{className:"feed-profile-pic-mid-white"},o.a.createElement("div",{className:"feed-profile-pic"},o.a.createElement("a",{href:"#",className:"feed-profile-pic"},o.a.createElement("img",{className:"feed-profile-pic",src:"images/main/user_followers/"+this.props.postedByProfilePic,alt:"story user profile"}))))),o.a.createElement("div",{className:"feed-profile-id-n-place"},o.a.createElement("a",{href:"",className:"feed-profile-id"},this.props.postedById),o.a.createElement("p",{className:"feed-place"},this.props.place)),o.a.createElement("div",{className:"feed-option"},o.a.createElement("img",{className:"feed-option",src:"images/main/three_dots_horizontal.png",alt:"feed option button"}))),o.a.createElement("div",{className:"feed-main"},o.a.createElement("img",{className:"feed-main-pic",src:"images/main/feed_pics/"+this.props.pic,alt:"feed"})),o.a.createElement("div",{className:"feed-actions"},o.a.createElement("div",{className:"feed-action feed-like"},o.a.createElement("img",{className:t?"feed-action-heart liked":"feed-action-heart",src:t?"images/main/onclick_icons/nav_menu_heart_icon_red.png":"images/main/nav_menu_heart_icon.png",alt:"feed like heart icon",onClick:this.changeHeartColor})),[{divClassName:"feed-action feed-comment",imgClassName:"feed-action-comment",src:"images/main/nav_menu_comment.png",alt:"see comment icon"},{divClassName:"feed-action feed-dm",imgClassName:"feed-action-dm",src:"images/main/nav_menu_dm_icon.png",alt:"dm icon"}].map((function(e){return o.a.createElement("div",{className:e.divClassName},o.a.createElement("img",{className:e.imgClassName,src:e.src,alt:e.alt}))})),o.a.createElement("div",{className:"feed-action feed-tag"},o.a.createElement("img",{className:a?"feed-action-tag liked":"feed-action-tag",src:a?"images/main/onclick_icons/nav_menu_tag_icon_black.png":"images/main/nav_menu_tag_icon.png",alt:"tag icon",onClick:this.changeTagColor}))),o.a.createElement("div",{className:"feed-likes"},o.a.createElement("div",{className:"focused-liker-img"},o.a.createElement("img",{className:"focused-liker-img",src:"images/main/user_followers/"+this.props.mainLikerProfilePic,alt:"profile of the focused person who liked the feed"})),o.a.createElement("p",{className:"likes-count"},"Liked by ",o.a.createElement("span",null,this.props.mainLikerId)," and"," ",o.a.createElement("span",null,this.props.numLikers))),o.a.createElement("div",{className:"feed-exp-box"},o.a.createElement("a",{href:"",className:"feed-profile-id"},this.props.postedById),o.a.createElement("p",{className:"feed-exp"},this.props.explanation)),o.a.createElement(Q,{postedTime:this.props.postedTime,currentAccountUserId:this.props.currentAccountUserId}))}}]),a}(o.a.Component)),$=(a(42),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).componentDidMount=function(){e.setState({feedItems:q})},e.state={feedItems:[]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state.feedItems;return o.a.createElement("div",{className:"Feeds"},t.map((function(t){return o.a.createElement(Z,{id:t.id,postedByProfilePic:t.postedByProfilePic,postedById:t.postedById,place:t.place,pic:t.pic,mainLikerProfilePic:t.mainLikerProfilePic,mainLikerId:t.mainLikerId,numLikers:t.numLikers,explanation:t.explanation,postedTime:t.postedTime,isLiked:t.isLiked,isSaved:t.isSaved,currentAccountUserId:e.props.currentAccountUserId,currentAccountUser:e.props.currentAccountUser})})))}}]),a}(o.a.Component)),ee=(a(43),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Profile"},o.a.createElement("div",{className:"account-profile-pic"},o.a.createElement("a",{href:"#",className:"account-profile-pic"},o.a.createElement("img",{src:"images/main/account_profile_pic.png",alt:"profile",className:"account-profile-pic"}))),o.a.createElement("div",{className:"account-profile-id-n-name"},o.a.createElement("a",{href:"#",className:"account-profile-id"},o.a.createElement("p",{className:"account-profile-id"},this.props.currentAccountUserId)),o.a.createElement("p",{className:"account-profile-name"},this.props.currentAccountUser)))}}]),a}(o.a.Component)),te=(a(44),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).generateSuggestions=function(e){var t=["Followed by ".concat(S[Math.floor(Math.random()*S.length)]),"Followed by ".concat(S[Math.floor(Math.random()*S.length)]," + ").concat(Math.floor(19*Math.random())+1," more"),"Suggested for you"];return o.a.createElement("li",{className:"suggestion-item",key:e},o.a.createElement("div",{className:"suggested-profile-pic"},o.a.createElement("a",{href:"#",className:"suggested-profile-pic"},o.a.createElement("img",{className:"suggested-profile-pic",src:"images/main/suggested/"+A[e],alt:"suggested user profile"}))),o.a.createElement("div",{className:"suggested-profile-id-n-followers"},o.a.createElement("a",{href:"",className:"suggested-profile-id"},O[e]),o.a.createElement("p",{className:"followed-by"},t[Math.floor(3*Math.random())])),o.a.createElement("a",{href:"#",className:"follow"},o.a.createElement("p",{className:"follow"},"Follow")))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=X(W(0,O.length)).slice(0,5).map((function(t){return e.generateSuggestions(t)}));return o.a.createElement("div",{className:"Recommend"},o.a.createElement("div",{className:"suggestions-header"},o.a.createElement("h5",{className:"suggestions-heading"},"Suggestions For You"),o.a.createElement("a",{href:"#",className:"suggestions-see-all"},"See All")),o.a.createElement("ul",{className:"suggestions-list"},t))}}]),a}(o.a.Component)),ae=(a(45),[{id:"1",urlTo:"https://github.com/pdl39",content:"About"},{id:"2",urlTo:"https://github.com/pdl39",content:"Help"},{id:"3",urlTo:"https://github.com/pdl39",content:"Press"},{id:"4",urlTo:"https://github.com/pdl39",content:"API"},{id:"5",urlTo:"https://github.com/pdl39",content:"Jobs"},{id:"6",urlTo:"https://github.com/pdl39",content:"Privacy"},{id:"7",urlTo:"https://github.com/pdl39",content:"Terms"},{id:"8",urlTo:"https://github.com/pdl39",content:"Locations"},{id:"9",urlTo:"https://github.com/pdl39",content:"Top Accounts"},{id:"10",urlTo:"https://github.com/pdl39",content:"HashTags"}]),ne=(new Date).getFullYear(),oe=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",{className:"MainFooter"},o.a.createElement("ul",{className:"footer-menus"},ae.map((function(e){return o.a.createElement("li",{className:"footer-menu",key:e.id},o.a.createElement("a",{href:e.urlTo,className:"footer-item-link",target:"_blank",rel:"noopener noreferrer"},e.content))})),o.a.createElement("li",{className:"footer-menu language"},o.a.createElement("a",null,"Language"))),o.a.createElement("p",{className:"footer-copyright"},"\xa9 ",ne," PSTAGRAM BY pdl39"))}}]),a}(o.a.Component),se=(a(46),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={currentAccountUserId:"peterdlee",currentAccountUser:"Peter D Lee"},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.currentAccountUserId,a=e.currentAccountUser;return o.a.createElement("div",{className:"Main"},o.a.createElement(J,null),o.a.createElement("section",{className:"main"},o.a.createElement("section",{className:"feeds-section"},o.a.createElement(Y,null),o.a.createElement($,{currentAccountUserId:t})),o.a.createElement("section",{className:"side-section"},o.a.createElement(ee,{currentAccountUserId:t,currentAccountUser:a}),o.a.createElement(te,null),o.a.createElement(oe,null))))}}]),a}(o.a.Component)),ie=(a(47),a(48),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(p.a,{basename:"/pstagram"},o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/pstagram",component:b}),o.a.createElement(d.a,{exact:!0,path:"/pstagram/main",component:se})))}}]),a}(o.a.Component));i.a.render(o.a.createElement(ie,null),document.getElementById("root"))}]),[[21,1,2]]]);
//# sourceMappingURL=main.ca536911.chunk.js.map