!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t){e.exports=window.wp.element},function(e,t,n){var a=n(4),r=n(5),l=n(6),c=n(8);e.exports=function(e,t){return a(e)||r(e,t)||l(e,t)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,s=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(s)throw r}}return l}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var a=n(7);e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(0),c=n(2),s=function(e){var t,n=e.department,a=e.setAttributes,s=e.label,o=e.disabled,i=void 0!==o&&o,u=Object(l.useState)([]),b=r()(u,2),d=b[0],p=b[1];if(void 0===n){var m=Object(l.useState)("---"),f=r()(m,2);f[0],t=f[1],a({department:"---"})}else{var O=Object(l.useState)(n),j=r()(O,2);j[0],t=j[1]}return Object(l.useEffect)((function(){fetch("/wp-json/ucscgutenbergblocks/v1/departmentcode").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);p(t)}))}),[]),Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{style:{width:"max-content"}},d.length>0&&Object(l.createElement)(c.SelectControl,{label:s,value:n,options:d,onChange:function(e){a({department:e}),t(e)},disabled:i}),!d.length&&Object(l.createElement)("span",null,"Subject Dropdown Loading...")))},o=function(e){var t,n=e.subject,a=e.setAttributes,s=e.label,o=e.disabled,i=void 0!==o&&o,u=Object(l.useState)([]),b=r()(u,2),d=b[0],p=b[1];if(void 0===n){var m=Object(l.useState)("---"),f=r()(m,2);f[0],t=f[1],a({subject:"---"})}else{var O=Object(l.useState)(n),j=r()(O,2);j[0],t=j[1]}return Object(l.useEffect)((function(){fetch("/wp-json/ucscgutenbergblocks/v1/subjectcode").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);p(t)}))}),[]),Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{style:{width:"max-content"}},d.length>0&&Object(l.createElement)(c.SelectControl,{label:s,value:n,options:d,onChange:function(e){a({subject:e}),t(e)},disabled:i}),!d.length&&Object(l.createElement)("span",null,"Subject Dropdown Loading...")))},i=function(){wp.blocks.registerBlockType("ucscblocks/coursecatalog",{title:"Course Catalog",icon:"book-alt",category:"common",attributes:{subjectOrDept:{type:"string"},department:{type:"string"},subject:{type:"string"}},edit:function(e){var t,n,a=e.setAttributes,i=e.attributes,u=i.department,b=i.subject,d=i.subjectOrDept;if(void 0===d){var p=Object(l.useState)("dept"),m=r()(p,2);t=m[0],n=m[1],a({subjectOrDept:"dept"})}else{var f=Object(l.useState)(d),O=r()(f,2);t=O[0],n=O[1]}return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(c.Panel,{header:"Course Catalog Block"},Object(l.createElement)(c.PanelBody,{title:"Set Department or Subject",initialOpen:!0},Object(l.createElement)("div",{className:"vertical_radio"},Object(l.createElement)(c.RadioControl,{selected:t,onChange:function(e){n(e),a({subjectOrDept:e})},options:[{label:"Department",value:"dept"},{label:"Subject",value:"subject"}]})),Object(l.createElement)("hr",null),Object(l.createElement)(s,{label:"Departments",department:u,setAttributes:a,disabled:"dept"!==d}),Object(l.createElement)(o,{label:"Subjects",subject:b,setAttributes:a,disabled:"subject"!==d}))))},save:function(e){return null}})},u=function(e){var t,n=e.department,a=e.setAttributes,s=e.label,o=e.disabled,i=void 0!==o&&o,u=Object(l.useState)([]),b=r()(u,2),d=b[0],p=b[1];if(void 0===n){var m=Object(l.useState)("---"),f=r()(m,2);f[0],t=f[1],a({department:"---"})}else{var O=Object(l.useState)(n),j=r()(O,2);j[0],t=j[1]}return Object(l.useEffect)((function(){fetch("/wp-json/ucscgutenbergblocks/v1/cddepartmentcode").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);p(t)}))}),[]),Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{style:{width:"max-content"}},d.length>0&&Object(l.createElement)(c.SelectControl,{label:s,value:n,options:d,onChange:function(e){a({department:e}),t(e)},disabled:i}),!d.length&&Object(l.createElement)("span",null,"Department Dropdown Loading...")))},b=function(e){var t,n=e.division,a=e.setAttributes,s=e.label,o=e.disabled,i=void 0!==o&&o,u=Object(l.useState)([]),b=r()(u,2),d=b[0],p=b[1];if(void 0===n){var m=Object(l.useState)("---"),f=r()(m,2);f[0],t=f[1],a({division:"---"})}else{var O=Object(l.useState)(n),j=r()(O,2);j[0],t=j[1]}return Object(l.useEffect)((function(){fetch("/wp-json/ucscgutenbergblocks/v1/divisioncode").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);p(t)}))}),[]),Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{style:{width:"max-content"}},d.length>0&&Object(l.createElement)(c.SelectControl,{label:s,value:n,options:d,onChange:function(e){a({division:e}),t(e)},disabled:i}),!d.length&&Object(l.createElement)("span",null,"Divisions Dropdown Loading...")))},d=function(e){var t,n,a=e.pageLayout,s=e.setAttributes;if(void 0===a){var o=Object(l.useState)("list"),i=r()(o,2);t=i[0],n=i[1],s({pageLayout:"list"})}else{var u=Object(l.useState)(a),b=r()(u,2);t=b[0],n=b[1]}return Object(l.createElement)("div",{className:"vertical_radio"},Object(l.createElement)(c.RadioControl,{selected:t,onChange:function(e){n(e),s({pageLayout:e})},options:[{label:"List Layout",value:"list"},{label:"Tiled Layout",value:"tiled"},{label:"Table Layout",value:"table"}]}))},p=function(e){var t=e.setAttributes,n=e.currentAttributes,a=e.arrOfLabels,r=e.flexCheckboxes,s=e.attributeStr,o=e.checkedByDefault,i=[];if(a.map((function(e){return i.push({label:e})})),void 0===n){var u={};a.map((function(e){u[e]=void 0!==o&&o.includes(e)}));var b={};b[s]=JSON.stringify(u),t(b)}return i.map((function(e){if(void 0===n)e.arrCheckedState=void 0===o?Object(l.useState)(!1):Object(l.useState)(o.includes(e.label));else{var t=JSON.parse(n);e.arrCheckedState=Object(l.useState)(t[e.label])}})),Object(l.createElement)("div",{className:r?"flex-checkboxes":""},i.map((function(e){return Object(l.createElement)(c.CheckboxControl,{label:e.label,checked:e.arrCheckedState[0],onChange:function(a){e.arrCheckedState[1](a);var r=JSON.parse(n);r[e.label]=a;var l={};l[s]=JSON.stringify(r),t(l)}})})))},m=function(e){var t=e.setAttributes,n=e.strFacultyTypes,a=e.strStaffTypes,r=e.strGradTypes;return Object(l.createElement)("div",{className:"flex-labels"},Object(l.createElement)("h5",null,"Faculty Types"),Object(l.createElement)(p,{setAttributes:t,currentAttributes:n,arrOfLabels:["All","Regular Faculty","Lecturer","Emeriti","Research Professor","Researcher","Adjunct Faculty","Visiting Scholar","Graduate Student Instructor","Retired"],attributeStr:"strFacultyTypes"}),Object(l.createElement)("h5",null,"Staff Types"),Object(l.createElement)(p,{setAttributes:t,currentAttributes:a,arrOfLabels:["Regular Staff","Researcher","Postdoctoral Scholar"],attributeStr:"strStaffTypes",flexCheckboxes:!0}),Object(l.createElement)("h5",null,"Graduate Students"),Object(l.createElement)(p,{setAttributes:t,currentAttributes:r,arrOfLabels:["Grad Students"],attributeStr:"strGradTypes"}))},f=function(e){var t,n,a=e.setAttributes,s=e.linkToProfile,o=e.strInformationTypes;if(void 0===s){var i=Object(l.useState)(!0),u=r()(i,2);t=u[0],n=u[1],a({linkToProfile:!0})}else{var b=Object(l.useState)(s),d=r()(b,2);t=d[0],n=d[1]}return Object(l.createElement)("div",null,Object(l.createElement)("h5",null,"Link Name to Individual Profile?"),Object(l.createElement)("p",null,Object(l.createElement)("i",null,"In a small number of cases, units do not want a person's name to link to a more detailed profile page.")),Object(l.createElement)("div",{className:"vertical_radio"},Object(l.createElement)(c.RadioControl,{selected:t,onChange:function(e){n("true"===e),a({linkToProfile:"true"===e})},options:[{label:"Yes",value:!0},{label:"No",value:!1}]})),Object(l.createElement)("div",{className:"flex-labels"},Object(l.createElement)("h5",null,"List Layout Information to Display"),Object(l.createElement)(p,{setAttributes:a,currentAttributes:o,arrOfLabels:["Pronouns","Photo","Title","Department","Phone","Email","Fax","Website","Office Location","Office Hours","Mailstop","Mailing Address","Faculty Areas of Expertise","Summary of Expertise"],attributeStr:"strInformationTypes",checkedByDefault:["Photo","Title","Department","Phone","Email","Website","Office Location","Office Hours"]})))},O=function(e){var t,n,a=e.setAttributes,s=e.linkToProfile,o=e.strInformationTypesTable;if(void 0===s){var i=Object(l.useState)(!0),u=r()(i,2);t=u[0],n=u[1],a({linkToProfile:!0})}else{var b=Object(l.useState)(s),d=r()(b,2);t=d[0],n=d[1]}return Object(l.createElement)("div",null,Object(l.createElement)("h5",null,"Link Name to Individual Profile?"),Object(l.createElement)("p",null,Object(l.createElement)("i",null,"In a small number of cases, units do not want a person's name to link to a more detailed profile page.")),Object(l.createElement)("div",{className:"vertical_radio"},Object(l.createElement)(c.RadioControl,{selected:t,onChange:function(e){n("true"===e),a({linkToProfile:"true"===e})},options:[{label:"Yes",value:!0},{label:"No",value:!1}]})),Object(l.createElement)("div",{className:"flex-labels"},Object(l.createElement)("h5",null,"List Layout Information to Display"),Object(l.createElement)(p,{setAttributes:a,currentAttributes:o,arrOfLabels:["Pronouns","Title","Department","Phone","Email","Fax","Website","Office Location","Office Hours","Mailstop","Mailing Address","Faculty Areas of Expertise","Summary of Expertise"],attributeStr:"strInformationTypesTable",checkedByDefault:["Title","Department","Phone","Email"]})))},j=function(e){var t,n,a,s,o,i,d,p,j,v,y,E,h,g=e.setAttributes,S=e.automatedFeeds,C=e.cruzidList,T=e.strFacultyTypes,x=e.strStaffTypes,A=e.strGradTypes,k=e.manualAdd,D=e.addCruzids,w=e.excludeCruzids,L=e.displayDeptartmentAffiliates,P=e.linkToProfile,I=e.strInformationTypes,_=e.strInformationTypesTable,F=e.pageLayout,N=e.division,z=e.department,B=e.deptOrDiv;if(void 0===S){var M=Object(l.useState)(!0),R=r()(M,2);t=R[0],n=R[1],g({automatedFeeds:!0})}else{var G=Object(l.useState)(S),J=r()(G,2);t=J[0],n=J[1]}if(void 0===k){var H=Object(l.useState)(!1),U=r()(H,2);a=U[0],s=U[1],g({manualAdd:!1})}else{var W=Object(l.useState)(k),Y=r()(W,2);a=Y[0],s=Y[1]}if(void 0===C){var q=Object(l.useState)(""),K=r()(q,2);o=K[0],i=K[1],g({cruzidList:""})}else{var V=Object(l.useState)(C),$=r()(V,2);o=$[0],i=$[1]}if(void 0===D){var Q=Object(l.useState)(""),X=r()(Q,2);d=X[0],p=X[1],g({addCruzids:""})}else{var Z=Object(l.useState)(D),ee=r()(Z,2);d=ee[0],p=ee[1]}if(void 0===w){var te=Object(l.useState)(""),ne=r()(te,2);j=ne[0],v=ne[1],g({excludeCruzids:""})}else{var ae=Object(l.useState)(w),re=r()(ae,2);j=re[0],v=re[1]}if(void 0===L){var le=Object(l.useState)(!1),ce=r()(le,2);y=ce[0],E=ce[1],g({displayDeptartmentAffiliates:!1})}else{var se=Object(l.useState)(L),oe=r()(se,2);y=oe[0],E=oe[1]}if(void 0===B){var ie=Object(l.useState)("dept"),ue=r()(ie,2);ue[0],h=ue[1],g({deptOrDiv:"dept"})}else{var be=Object(l.useState)(B),de=r()(be,2);de[0],h=de[1]}return Object(l.createElement)("div",null,Object(l.createElement)("div",{className:"vertical_radio"},Object(l.createElement)(c.RadioControl,{selected:t,onChange:function(e){n("true"===e),g({automatedFeeds:"true"===e})},options:[{label:"Use Automated Feed(s)",value:!0},{label:"Create My Own List of People to Display",value:!1}]})),!t&&Object(l.createElement)("div",null,Object(l.createElement)("h5",null,"List Individuals (Enter CruzIDs separated by commas)"),Object(l.createElement)("p",null,Object(l.createElement)("i",null,"List individuals in the order you'd like them to appear on the page.")),Object(l.createElement)(c.TextareaControl,{value:o,onChange:function(e){i(e),g({cruzidList:e})}})),t&&Object(l.createElement)("div",null,Object(l.createElement)("h5",null,"Set Department or Division"),Object(l.createElement)("div",{className:"vertical_radio"},Object(l.createElement)(c.RadioControl,{selected:B,options:[{label:"Department",value:"dept"},{label:"Division",value:"div"}],onChange:function(e){g({deptOrDiv:e}),h(e)}}),Object(l.createElement)("hr",null),Object(l.createElement)(u,{label:"Department",department:z,setAttributes:g,disabled:!("dept"===B)}),Object(l.createElement)(b,{label:"Division",division:N,setAttributes:g,disabled:!("div"===B)})),Object(l.createElement)(m,{setAttributes:g,strFacultyTypes:T,strStaffTypes:x,strGradTypes:A}),Object(l.createElement)("h5",null,"Manually Add or Exclude Individuals from the feed?"),Object(l.createElement)("div",{className:"vertical_radio"},Object(l.createElement)(c.RadioControl,{selected:a,onChange:function(e){s("true"===e),g({manualAdd:"true"===e})},options:[{label:"Yes",value:!0},{label:"No",value:!1}]})),a&&Object(l.createElement)("div",null,Object(l.createElement)("h5",null,"Add Individuals to the Feed. (Enter CruzIDs separated by commas)"),Object(l.createElement)(c.TextareaControl,{value:d,onChange:function(e){p(e),g({addCruzids:e})}}),Object(l.createElement)("h5",null,"Exclude Individuals from the Feed. (Enter CruzIDs separated by commas)"),Object(l.createElement)(c.TextareaControl,{value:j,onChange:function(e){v(e),g({excludeCruzids:e})}})),"dept"===B&&Object(l.createElement)("div",null,Object(l.createElement)("h5",null,"Display Department Affiliates? (Rare for administrative units.)"),Object(l.createElement)("p",null,Object(l.createElement)("i",null,"For example, a faculty member is officially associated with the History Department but is also affiliated with College Nine because they teach a College Nine Core Course.")),Object(l.createElement)("div",{className:"flex-labels"},Object(l.createElement)(c.CheckboxControl,{label:"Display Affiliates",checked:y,onChange:function(e){E(e),g({displayDeptartmentAffiliates:e})}})))),"table"!==F?Object(l.createElement)(f,{setAttributes:g,linkToProfile:P,strInformationTypes:I}):Object(l.createElement)(O,{setAttributes:g,linkToProfile:P,strInformationTypesTable:_}))},v=function(){wp.blocks.registerBlockType("ucscblocks/campusdirectory",{title:"Campus Directory",icon:"welcome-learn-more",category:"common",attributes:{pageLayout:{type:"string"},automatedFeeds:{type:"boolean"},cruzidList:{type:"string"},strFacultyTypes:{type:"string"},strStaffTypes:{type:"string"},strGradTypes:{type:"string"},manualAdd:{type:"boolean"},addCruzids:{type:"string"},excludeCruzids:{type:"string"},displayDeptartmentAffiliates:{type:"boolean"},linkToProfile:{type:"boolean"},strInformationTypes:{type:"string"},strInformationTypesTable:{type:"string"},department:{type:"string"},division:{type:"string"},deptOrDiv:{type:"string"}},edit:function(e){var t=e.setAttributes,n=e.attributes,a=n.pageLayout,s=n.automatedFeeds,o=n.cruzidList,i=n.strFacultyTypes,u=n.strStaffTypes,b=n.strGradTypes,p=n.manualAdd,m=n.addCruzids,f=n.excludeCruzids,O=n.displayDeptartmentAffiliates,v=n.linkToProfile,y=n.strInformationTypes,E=n.strInformationTypesTable,h=n.department,g=n.division,S=n.deptOrDiv,C=Object(l.useState)(!0),T=r()(C,2),x=T[0],A=T[1],k=Object(l.useState)({}),D=r()(k,2),w=D[0],L=D[1];return Object(l.useEffect)((function(){fetch("/wp-json/ucscgutenbergblocks/v1/campusdirectoryrequirements").then((function(e){return e.text()})).then((function(e){var t=JSON.parse(e);t.ldap_pass||A(!1),L(t)}))}),[]),Object(l.createElement)(l.Fragment,null,x&&Object(l.createElement)(c.Panel,{className:"directory-block",header:"Directory Block"},Object(l.createElement)(c.PanelBody,{title:"Layout Type",initialOpen:!0},Object(l.createElement)(c.PanelRow,null,Object(l.createElement)(d,{setAttributes:t,pageLayout:a}))),Object(l.createElement)(c.PanelBody,{title:"People and Information to Display",initialOpen:!0},Object(l.createElement)(c.PanelRow,null,Object(l.createElement)(j,{setAttributes:t,automatedFeeds:s,cruzidList:o,strFacultyTypes:i,strStaffTypes:u,strGradTypes:b,manualAdd:p,addCruzids:m,excludeCruzids:f,displayDeptartmentAffiliates:O,linkToProfile:v,strInformationTypes:y,strInformationTypesTable:E,pageLayout:a,division:g,department:h,deptOrDiv:S})))),!x&&Object(l.createElement)(l.Fragment,null,Object(l.createElement)("h2",null,"This Block is not Configured Correctly"),!w.ldap_pass&&w.multisite&&Object(l.createElement)(l.Fragment,null,Object(l.createElement)("h4",null,"The LDAP password can be set at the network level ",Object(l.createElement)("a",{target:"_blank",href:"/wp-admin/network/settings.php?page=ucsc-gutenberg-blocks-network-settings"},"here.")),Object(l.createElement)("h6",null,"Or the LDAP password can be set at the site level below.")),!w.ldap_pass&&Object(l.createElement)("h4",null,"The LDAP password needs to be set here ",Object(l.createElement)("a",{target:"_blank",href:"/wp-admin/options-general.php?page=ucsc_gutenberg_blocks_settings_page"},"here."))))},save:function(e){return null}})},y=function(){wp.blocks.registerBlockType("ucscblocks/classschedule",{title:"Class Schedule",icon:"schedule",category:"common",attributes:{subjectOrDept:{type:"string"},department:{type:"string"},subject:{type:"string"}},edit:function(e){var t,n,a=e.setAttributes,i=e.attributes,u=i.department,b=i.subject,d=i.subjectOrDept;if(void 0===d){var p=Object(l.useState)("dept"),m=r()(p,2);t=m[0],n=m[1],a({subjectOrDept:"dept"})}else{var f=Object(l.useState)(d),O=r()(f,2);t=O[0],n=O[1]}return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(c.Panel,{header:"Class Schedule Block"},Object(l.createElement)(c.PanelBody,{title:"Set Department or Subject",initialOpen:!0},Object(l.createElement)("div",{className:"vertical_radio"},Object(l.createElement)(c.RadioControl,{selected:t,onChange:function(e){n(e),a({subjectOrDept:e})},options:[{label:"Department",value:"dept"},{label:"Subject",value:"subject"}]})),Object(l.createElement)("hr",null),Object(l.createElement)(s,{label:"Departments",department:u,setAttributes:a,disabled:"dept"!==d}),Object(l.createElement)(o,{label:"Subjects",subject:b,setAttributes:a,disabled:"subject"!==d}))))},save:function(e){return null}})},E=n(3),h=function(){wp.blocks.registerBlockType("ucscblocks/accordion",{title:"Accordion",icon:"menu",category:"common",attributes:{openOnPageLoad:{type:"boolean"},title:{type:"string"}},edit:function(e){var t=e.setAttributes,n=e.attributes;return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(E.InspectorControls,{key:"setting"},Object(l.createElement)(c.Panel,null,Object(l.createElement)(c.PanelBody,null,Object(l.createElement)(c.CheckboxControl,{label:"Open on page load",checked:n.openOnPageLoad,onChange:function(e){return t({openOnPageLoad:e})}})))),Object(l.createElement)("details",{className:"ucsc-accordion",open:"true"},Object(l.createElement)("summary",null,Object(l.createElement)("input",{placeholder:"Accordion Item Title",value:n.title,onKeyUp:function(e){e.preventDefault()},onChange:function(e){return t({title:e.target.value})}})),Object(l.createElement)(E.InnerBlocks,null)))},save:function(){return Object(l.createElement)("div",null,Object(l.createElement)(E.InnerBlocks.Content,null))}})};i(),v(),y(),h()}]);