"use strict";(self.webpackChunkd_3_react_docs=self.webpackChunkd_3_react_docs||[]).push([[604],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(a),h=l,s=k["".concat(p,".").concat(h)]||k[h]||u[h]||r;return a?n.createElement(s,i(i({ref:t},m),{},{components:a})):n.createElement(s,i({ref:t},m))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6186:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],o={},p="Scatter Plot",d={unversionedId:"Charts/scatter-plot",id:"Charts/scatter-plot",title:"Scatter Plot",description:"Scatter Plot example and sandbox here",source:"@site/docs/Charts/scatter-plot.mdx",sourceDirName:"Charts",slug:"/Charts/scatter-plot",permalink:"/docs/Charts/scatter-plot",editUrl:"https://github.com/oslabs-beta/d3reactor-docs/tree/dev/docs/Charts/scatter-plot.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pie Chart",permalink:"/docs/Charts/pie-chart"}},m=[{value:"Scatter Plot example and sandbox here",id:"scatter-plot-example-and-sandbox-here",children:[],level:2},{value:"Data",id:"data",children:[{value:"Single example",id:"single-example",children:[],level:3},{value:"Multi example",id:"multi-example",children:[],level:3}],level:2},{value:"Props",id:"props",children:[{value:"data",id:"data-1",children:[],level:3},{value:"xKey",id:"xkey",children:[],level:3},{value:"yKey",id:"ykey",children:[],level:3},{value:"xDataType <em>(optional)</em>",id:"xdatatype-optional",children:[],level:3},{value:"groupBy <em>(optional)</em>",id:"groupby-optional",children:[],level:3},{value:"xAxis <em>(optional)</em>",id:"xaxis-optional",children:[],level:3},{value:"yAxis <em>(optional)</em>",id:"yaxis-optional",children:[],level:3},{value:"xAxisLabel <em>(optional)</em>",id:"xaxislabel-optional",children:[],level:3},{value:"yAxisLabel <em>(optional)</em>",id:"yaxislabel-optional",children:[],level:3},{value:"xGrid <em>(optional)</em>",id:"xgrid-optional",children:[],level:3},{value:"yGrid <em>(optional)</em>",id:"ygrid-optional",children:[],level:3},{value:"legend <em>(optional)</em>",id:"legend-optional",children:[],level:3},{value:"legendLabel <em>(optional)</em>",id:"legendlabel-optional",children:[],level:3},{value:"height <em>(optional)</em>",id:"height-optional",children:[],level:3},{value:"width <em>(optional)</em>",id:"width-optional",children:[],level:3},{value:"colorScheme <em>(optional)</em>",id:"colorscheme-optional",children:[],level:3}],level:2}],u={toc:m};function k(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scatter-plot"},"Scatter Plot"),(0,r.kt)("h2",{id:"scatter-plot-example-and-sandbox-here"},"Scatter Plot example and sandbox here"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/scatter-plot-p4826?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},title:"scatter-plot",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"type:")," array","[object]"),(0,r.kt)("h3",{id:"single-example"},"Single example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'### Data Format Example Single\n[\n  {\n    "culmen_length_mm": 39.1,\n    "body_mass_g": 3750,\n  },\n  {\n    "culmen_length_mm": 36.7,\n    "body_mass_g": 3450,\n  },\n  {\n    "culmen_length_mm": 39.3,\n    "body_mass_g": 3650,\n },\n]\n')),(0,r.kt)("h3",{id:"multi-example"},"Multi example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'### Data Format Example Multi\n\n[\n {\n   "date": "Thu Feb 01 2018 00:00:00 GMT-0500 (Eastern Standard Time)",\n   "fruit": "apples",\n   "value": 10\n },\n {\n   "date": "Thu Mar 01 2018 00:00:00 GMT-0500 (Eastern Standard Time)",\n   "fruit": "apples",\n   "value": 15\n },\n {\n    "date": "Thu Feb 01 2018 00:00:00 GMT-0500 (Eastern Standard Time)",\n    "fruit": "oranges",\n    "value": 15\n  },\n  {\n    "date": "Thu Mar 01 2018 00:00:00 GMT-0500 (Eastern Standard Time)",\n    "fruit": "oranges",\n    "value": 15\n  },\n]\n')),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"data-1"},"data"),(0,r.kt)("p",null,"The data must be structured as an array of objects, each object representing a point of data. Each data point consists of an X value, a Y value, and optionally a category to group by (in the case of a multi- scatter plot). "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},"array of objects"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[{\nx: ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),",\ny: ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),",\ngroup: ",(0,r.kt)("inlineCode",{parentName:"li"},"string"),"\n}, ...]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The X value can be of type ",(0,r.kt)("inlineCode",{parentName:"em"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"em"},"Date"),", or a valid string representation of a Date.")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The Y value can be of type ",(0,r.kt)("inlineCode",{parentName:"em"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"em"},"null"),"."))),(0,r.kt)("h3",{id:"xkey"},"xKey"),(0,r.kt)("p",null,"This string is used as the accessor for your data in the X domain. ",(0,r.kt)("strong",{parentName:"p"},"This should match the property name of your data that you want to use for your X values.")," For example, if we want to show the quantity of fruit over time using the above dataset, 'date' will be our xKey value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirements"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A key corresponding to the properties in array of data objects used on x axis."))))),(0,r.kt)("h3",{id:"ykey"},"yKey"),(0,r.kt)("p",null,"This string is used as the accessor for the Y values of your data. ",(0,r.kt)("strong",{parentName:"p"},"This should match the property name of your data that you want to use for your Y values.")," For example, if we want to show the quantity of fruit using the above dataset, 'value' will be our yKey value."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirements"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yKey")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A key corresponding to the properties in array of data objects used on y axis."))))),(0,r.kt)("h3",{id:"xdatatype-optional"},"xDataType ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"By default, d3reactor will attempt to infer whether the data accessed by ",(0,r.kt)("inlineCode",{parentName:"p"},"xKey")," is a valid date. ",(0,r.kt)("em",{parentName:"p"},"(If it is, it will transform the Date into a string to create more readable X axis ticks.)"),"\nBy passing in a value to xDataType, you can manually set how you want d3reactor to interpret your data."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xDataType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"number"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"date"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The X value can be of type ",(0,r.kt)("inlineCode",{parentName:"em"},"number")," or ",(0,r.kt)("inlineCode",{parentName:"em"},"Date"),", or a valid string representation of a Date.")," ")),(0,r.kt)("h3",{id:"groupby-optional"},"groupBy ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"To create a multi- scatter plot, pass in a string to the ",(0,r.kt)("inlineCode",{parentName:"p"},"groupBy")," prop. ",(0,r.kt)("strong",{parentName:"p"},"This string should match the property name of your data that represents the distinct groups you want to show.")," For example, in the above multi example dataset, our dataset is grouped by the property name 'fruit'."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirements"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"groupBy")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A key corresponding to the properties in array of data objects used to denote groups."))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Caution"),": If your dataset is skinny \u2013 that is, if the data pointed to by your yKey property represents multiple groups \u2013 then you ",(0,r.kt)("strong",{parentName:"em"},"must")," provide a groupBy property to get the desired results. Otherwise, d3reactor doesn't know how to interpret the data."))),(0,r.kt)("h3",{id:"xaxis-optional"},"xAxis ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"Determines where to render the X axis (above or below the chart) including ticks. Passing a false will remove the X axis."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xAxis")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"top"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"bottom"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'bottom'"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"By default, the X axis will be rendered at the bottom."))),(0,r.kt)("h3",{id:"yaxis-optional"},"yAxis ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"Determines where to render the Y axis (left or right of the chart) including ticks. Passing a false will remove the Y axis."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yAxis")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"left"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"right"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'bottom'"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"By default, the Y axis will be rendered on the left."))),(0,r.kt)("h3",{id:"xaxislabel-optional"},"xAxisLabel ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"Adds a label to your X axis."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xAxisLabel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"yaxislabel-optional"},"yAxisLabel ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"Adds a label to your Y axis."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yAxisLabel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h3",{id:"xgrid-optional"},"xGrid ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"Displays horizontal grid lines on chart."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xGrid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"ygrid-optional"},"yGrid ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"Displays vertical grid lines on chart."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"yGrid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h3",{id:"legend-optional"},"legend ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"Each chart has the option to include a legend which shows the categories and corresponding colors of your data. The legend and chart are both responsive, so they will resize to make space for each other.\nThe categories reflect the list of unique values stored at the property in your dataset accessed by ",(0,r.kt)("inlineCode",{parentName:"p"},"groupBy"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"legend")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")," or ",(0,r.kt)("inlineCode",{parentName:"td"},'"top"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"bottom"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"left"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"right"')," , ",(0,r.kt)("inlineCode",{parentName:"td"},'"top-left"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"top-right"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"bottom-left"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"bottom-right"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"left-bottom"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"right-bottom"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"left-top"'),", ",(0,r.kt)("inlineCode",{parentName:"td"},'"right-top"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"If ",(0,r.kt)("inlineCode",{parentName:"em"},"true"),", the legend will default to position ",(0,r.kt)("inlineCode",{parentName:"em"},"'right'"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"What's the difference between top-right and right-top?")," Good question! top-right renders in the top right corner of the component, to the right of the chart. right-top renders in the top right corner of the component, above the chart."))),(0,r.kt)("h3",{id:"legendlabel-optional"},"legendLabel ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"This is the title at the top of the legend.\n",(0,r.kt)("em",{parentName:"p"},"If the value is an empty string (",(0,r.kt)("inlineCode",{parentName:"em"},"''"),"), the legend label will not render.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"legendLabel")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"''"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"You must specify a ",(0,r.kt)("inlineCode",{parentName:"em"},"legend")," property if you wish to use ",(0,r.kt)("inlineCode",{parentName:"em"},"legendLabel")))),(0,r.kt)("h3",{id:"height-optional"},"height ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"Sets the overall height of the chart, in pixels or percentage. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"340"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'340px'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'85%'"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"height")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string or number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100%"))))),(0,r.kt)("h3",{id:"width-optional"},"width ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"Sets the overall width of the chart, in pixels or percentage. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"340"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"'340px'")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"'85%'"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string or number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100%"))))),(0,r.kt)("h3",{id:"colorscheme-optional"},"colorScheme ",(0,r.kt)("em",{parentName:"h3"},"(optional)")),(0,r.kt)("p",null,"Sets the color scheme of the chart body. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"colorScheme")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'schemeRdYlGn',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemeRdYlBu',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemeRdGy',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemeRdBu',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemePuOr',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemePiYG',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemePRGn',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemeBrBG',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemeReds',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemePurples',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemeOranges',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemeGreys',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemeGreens',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemeBlues',")," ",(0,r.kt)("inlineCode",{parentName:"td"},"'schemeSpectral'")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'schemePurples'"))))))}k.isMDXComponent=!0}}]);