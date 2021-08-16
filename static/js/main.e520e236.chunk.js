(this["webpackJsonpthe-meal-db"]=this["webpackJsonpthe-meal-db"]||[]).push([[0],{137:function(e,t,a){},138:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(50),s=a.n(c),i=(a(137),a(125)),l=a(24),j=a(49),o=a(10),d=a(184),b=a(46),u=(a(138),a(190)),h=a(183),O=a(192),x=a(188),m=a(124),p=a(15),g=a.n(p),f=a(29),v=a(23),M=a(16),C=a.n(M),I=[],y={categories:I,hasCategories:!1,isLoading:!0,error:null},L=a(2),N=function(){var e=function(){var e=Object(n.useState)(y),t=Object(v.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){!function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{C.a.get("https://themealdb.com/api/json/v2/9973533/categories.php").then((function(e){var t=e.data.categories,a=t.length;r({categories:t,hasCategories:a,isLoading:!1,error:null})}))}catch(t){C.a.isCancel(t)||r({categories:I,hasCategories:!1,isLoading:!1,error:t})}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(l.a)({},a)}(),t=e.categories,a=e.isLoading,r=Object(o.f)();return Object(L.jsxs)("div",{className:"categories-container",children:[Object(L.jsx)(u.a,{as:"h1",children:"Categories"}),a&&Object(L.jsx)(h.a,{active:!0,inline:"centered",className:"categories-loader"}),!a&&Object(L.jsx)(O.a,{children:t.map((function(e){return Object(L.jsx)(O.a.Column,{mobile:16,tablet:8,computer:3,children:Object(L.jsxs)(x.a,{onClick:c.bind(null,e.strCategory),children:[Object(L.jsx)(m.a,{src:e.strCategoryThumb,wrapped:!0,ui:!0}),Object(L.jsx)(x.a.Content,{children:Object(L.jsx)(x.a.Header,{children:e.strCategory})})]})},e.idCategory)}))})]});function c(e){r.push({pathname:"/categories/".concat(e)})}},w=[],H={latestMeals:w,hasLatestMeals:!1,isLoading:!0,error:null},D=a(186),k=a(90),E=(a(165),function(){var e=function(){var e=Object(n.useState)(H),t=Object(v.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){!function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{C.a.get("https://themealdb.com/api/json/v2/9973533/latest.php").then((function(e){var t=e.data.meals,a=t.length;r({latestMeals:t,hasLatestMeals:a,isLoading:!1,error:null})}))}catch(t){C.a.isCancel(t)||r({latestMeals:w,hasLatestMeals:!1,isLoading:!1,error:t})}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(l.a)({},a)}(),t=e.latestMeals,a=e.isLoading;return Object(L.jsxs)("div",{className:"latest-meals-container",children:[Object(L.jsx)(u.a,{as:"h1",children:"Latest Meals"}),a&&Object(L.jsx)(h.a,{active:!0,inline:"centered",className:"categories-loader"}),!a&&Object(L.jsx)(D.a.Group,{children:t.map((function(e){return Object(L.jsxs)(D.a,{children:[Object(L.jsx)(D.a.Image,{size:"small",src:e.strMealThumb}),Object(L.jsxs)(D.a.Content,{children:[Object(L.jsx)(D.a.Header,{as:"a",children:e.strMeal}),Object(L.jsx)(k.a,{as:"a",color:"grey",content:e.strCategory}),Object(L.jsx)(D.a.Meta,{children:e.strArea}),Object(L.jsx)(D.a.Description,{children:e.strInstructions}),Object(L.jsx)(D.a.Extra,{children:e.strYoutube&&Object(L.jsx)("a",{href:e.strYoutube,rel:"noreferrer",target:"_blank",children:Object(L.jsx)(b.a,{color:"red",name:"youtube",size:"big"})})})]}),Object(L.jsx)("hr",{})]},e.idMeal)}))})]})}),T={},R={randomMeal:T,hasRandomMeal:!1,isLoading:!0,error:null},S=(a(166),function(){var e=function(){var e=Object(n.useState)(R),t=Object(v.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){!function(){var e=Object(f.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{C.a.get("https://themealdb.com/api/json/v2/9973533/random.php").then((function(e){var t=e.data.meals[0],a=t.length;r({randomMeal:t,hasRandomMeal:a,isLoading:!1,error:null})}))}catch(t){C.a.isCancel(t)||r({randomMeal:T,hasRandomMeal:!1,isLoading:!1,error:t})}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(l.a)({},a)}(),t=e.randomMeal,a=e.isLoading;return Object(L.jsxs)("div",{className:"random-meal-container",children:[Object(L.jsx)(u.a,{as:"h1",children:"Random Meals"}),a&&Object(L.jsx)(h.a,{active:!0,inline:"centered",className:"categories-loader"}),!a&&Object(L.jsx)(D.a.Group,{children:Object(L.jsxs)(D.a,{children:[Object(L.jsx)(D.a.Image,{size:"big",src:t.strMealThumb}),Object(L.jsxs)(D.a.Content,{children:[Object(L.jsx)(D.a.Header,{as:"a",children:t.strMeal}),Object(L.jsx)(k.a,{as:"a",color:"grey",content:t.strCategory}),Object(L.jsx)(D.a.Meta,{children:t.strArea}),Object(L.jsx)(D.a.Description,{children:t.strInstructions}),Object(L.jsx)(D.a.Extra,{children:t.strYoutube&&Object(L.jsx)("a",{href:t.strYoutube,rel:"noreferrer",target:"_blank",children:Object(L.jsx)(b.a,{color:"red",name:"youtube",size:"big"})})})]}),Object(L.jsx)("hr",{})]},t.idMeal)})]})}),F=function(){return Object(L.jsxs)("div",{className:"browse-country-container",children:[Object(L.jsx)(u.a,{as:"h1",children:"Browse Country"}),Object(L.jsx)("p",{children:"2 DO"})]})},z=[],B={meals:z,hasMeals:!1,isLoading:!0,error:null},Y=(a(167),a(185)),G=a(187),A={},_={mealDetails:A,hasMealDetails:!1,isLoading:!0,error:null},J=(a(168),function(e){var t=e.mealId,a=e.open,c=e.openDialog,s=e.closeDialog,i=function(e){var t=Object(n.useState)(_),a=Object(v.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){e&&function(){var t=Object(f.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{C.a.get("https://themealdb.com/api/json/v2/9973533/lookup.php?i="+e).then((function(e){var t=e.data.meals[0],a=e.data.meals.length;c({mealDetails:t,hasMealDetails:a,isLoading:!1,error:null})}))}catch(a){C.a.isCancel(a)||c({mealDetails:A,hasMealDetails:!1,isLoading:!1,error:a})}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),Object(l.a)({},r)}(t),j=i.mealDetails,o=i.isLoading;return Object(L.jsxs)(r.a.Fragment,{children:[o&&Object(L.jsx)(h.a,{active:!0,inline:"centered",className:"meal-details-loader"}),!o&&Object(L.jsxs)(Y.a,{closeIcon:!0,open:a,onClose:s,onOpen:c,className:"meal-details-dialog",children:[Object(L.jsx)(u.a,{content:j.strMeal}),Object(L.jsx)(Y.a.Content,{children:Object(L.jsx)(D.a.Group,{children:Object(L.jsxs)(D.a,{children:[Object(L.jsx)(D.a.Image,{size:"large",src:j.strMealThumb}),Object(L.jsxs)(D.a.Content,{children:[Object(L.jsx)(D.a.Header,{as:"a",children:"Instructions"}),j.strYoutube&&Object(L.jsx)("a",{href:j.strYoutube,rel:"noreferrer",target:"_blank",children:Object(L.jsx)(b.a,{color:"red",name:"youtube",size:"big"})}),Object(L.jsx)(D.a.Meta,{children:j.strArea}),Object(L.jsx)(D.a.Description,{children:j.strInstructions}),Object(L.jsx)(D.a.Header,{as:"a",children:"Ingredients"}),Object(L.jsx)(D.a.Description,{children:Object(L.jsx)(G.a,{children:Object(L.jsxs)(O.a,{columns:3,divided:!0,children:[Object(L.jsxs)(O.a.Row,{children:[Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient1}),j.strMeasure1]})}),Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient2}),j.strMeasure2]})}),Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient3}),j.strMeasure3]})})]}),Object(L.jsxs)(O.a.Row,{children:[Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient4}),j.strMeasure4]})}),Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient5}),j.strMeasure5]})}),Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient6}),j.strMeasure6]})})]}),Object(L.jsxs)(O.a.Row,{children:[Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient7}),j.strMeasure7]})}),Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient8}),j.strMeasure8]})}),Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient9}),j.strMeasure9]})})]}),Object(L.jsxs)(O.a.Row,{children:[Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient10}),j.strMeasure10]})}),Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient11}),j.strMeasure11]})}),Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient12}),j.strMeasure12]})})]}),Object(L.jsxs)(O.a.Row,{children:[Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient13}),j.strMeasure13]})}),Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient14}),j.strMeasure14]})}),Object(L.jsx)(O.a.Column,{children:Object(L.jsxs)(G.a.Item,{children:[Object(L.jsx)(G.a.Header,{children:j.strIngredient15}),j.strMeasure15]})})]})]})})}),Object(L.jsx)(D.a.Extra,{})]})]})})})]})]})}),P=[{path:"/",exact:!0,label:"Categories",icon:"list ul",isNaviItem:!0,component:N},{path:"/categories/:id",exact:!0,isNaviItem:!1,component:function(){var e=Object(o.g)().id,t=function(e){var t=Object(n.useState)(B),a=Object(v.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){!function(){var t=Object(f.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{C.a.get("https://themealdb.com/api/json/v2/9973533/filter.php?c="+e).then((function(e){var t=e.data.meals,a=t.length;c({meals:t,hasMeals:a,isLoading:!1,error:null})}))}catch(a){C.a.isCancel(a)||c({meals:z,hasMeals:!1,isLoading:!1,error:a})}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),Object(l.a)({},r)}(e),a=t.meals,c=t.isLoading,s=Object(n.useState)(""),i=Object(v.a)(s,2),j=i[0],d=i[1],p=r.a.useState(!1),M=Object(v.a)(p,2),I=M[0],y=M[1],N=Object(o.f)();return Object(L.jsxs)(r.a.Fragment,{children:[Object(L.jsxs)("div",{className:"category-container",children:[Object(L.jsxs)(u.a,{as:"h1",children:[e,Object(L.jsxs)("div",{className:"back-link",onClick:function(){N.push({pathname:"/"})}.bind(null,null),children:[Object(L.jsx)(b.a,{name:"angle left"}),Object(L.jsx)("span",{children:"back to categories"})]})]}),c&&Object(L.jsx)(h.a,{active:!0,inline:"centered",className:"category-loader"}),!c&&Object(L.jsx)(O.a,{children:a.map((function(e){return Object(L.jsx)(O.a.Column,{mobile:16,tablet:8,computer:2,children:Object(L.jsxs)(x.a,{onClick:w.bind(null,e.idMeal),children:[Object(L.jsx)(m.a,{src:e.strMealThumb,wrapped:!0,ui:!0}),Object(L.jsx)(x.a.Content,{children:Object(L.jsx)(x.a.Header,{children:e.strMeal})})]})},e.idMeal)}))})]}),I&&Object(L.jsx)(J,{mealId:j,open:I,openDialog:function(){y(!0)},closeDialog:function(){d(""),y(!1)}})]});function w(e){d(e),y(!0)}}},{path:"/latestMeals",exact:!0,label:"Latest Meals",icon:"food",isNaviItem:!0,component:E},{path:"/randomMeals",exact:!0,label:"Random Meals",icon:"random",isNaviItem:!0,component:S},{path:"/browseCountry",exact:!0,label:"Browse Country",icon:"globe",isNaviItem:!0,component:F}],q=function(){return Object(L.jsx)("nav",{children:Object(L.jsx)(d.a,{fluid:!0,color:"red",vertical:!0,icon:"labeled",className:"app-nav",children:P.map((function(e){return e.isNaviItem?Object(L.jsx)(o.a,{exact:e.exact,path:e.path,children:function(t){var a=t.match;return Object(L.jsxs)(d.a.Item,{as:j.b,to:e.path,active:!!a,children:[Object(L.jsx)(b.a,{name:e.icon}),e.label]})}},e.path):null}))})})},K=(a(169),a(189)),Q=(a(170),function(){return Object(L.jsxs)("div",{className:"not-found-page",children:[Object(L.jsx)("div",{className:"error",children:"404"}),Object(L.jsx)("div",{className:"page-msg",children:"Oops! This page Could Not Be Found"}),Object(L.jsx)(j.b,{to:"/",children:Object(L.jsxs)(K.a,{basic:!0,color:"blue",children:[Object(L.jsx)(b.a,{name:"list ul"}),"GO TO CATEGORIES"]})})]})}),U=a.p+"static/media/meal_logo.9ee959da.png";function V(e){var t=[];return e.forEach((function(e){e.routes?(t.push(Object(l.a)(Object(l.a)({},e),{},{exact:!0})),t.push.apply(t,Object(i.a)(V(e.routes)))):t.push(e)})),t}var W=function(){return Object(L.jsx)(r.a.Fragment,{children:Object(L.jsxs)(j.a,{basename:"/the-meal-db",children:[Object(L.jsx)(q,{}),Object(L.jsx)("header",{children:Object(L.jsx)(u.a,{as:"h2",image:U,content:"The Meal DB","data-cy":"pageTitle"})}),Object(L.jsx)("div",{className:"container",children:Object(L.jsxs)(o.c,{children:[V(P).map((function(e){return Object(L.jsx)(o.a,{path:e.path,exact:e.exact,component:e.component},e.path)})),Object(L.jsx)(o.a,{component:Q})]})})]})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,194)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};a(171);s.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(W,{})}),document.getElementById("root")),X()}},[[172,1,2]]]);
//# sourceMappingURL=main.e520e236.chunk.js.map