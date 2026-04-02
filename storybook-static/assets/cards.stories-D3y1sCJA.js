import{n as e,s as t}from"./chunk-Bj-mKKzh.js";import{C as n,K as r}from"./iframe-7vMKm1ug.js";import{n as i,t as a}from"./image-BaFwxYJM.js";import{t as o}from"./link-DE88cQkS.js";import{S as s,T as c,a as l,b as u,c as d,d as ee,f as te,h as ne,l as f,n as p,o as re,p as ie,r as ae,s as oe,t as se,v as ce,w as le,y as ue}from"./lucide-react-ATbUwpNu.js";import{n as de,t as m}from"./utils-UR68KzPb.js";import{a as fe,i as pe,r as me,t as he}from"./button-CkPIebK5.js";import{a as ge,c as _e,i as ve,n as ye,o as be,r as xe,s as Se,t as Ce}from"./code-snippet-ByTUTbFG.js";import{r as we,t as Te}from"./flexible-table-CJ5nNs5m.js";function Ee({value:e,max:t=100,size:n=`md`,variant:r=`brand`,label:i,showValue:a,className:o}){let s=Math.min(100,Math.max(0,e/t*100));return(0,h.jsxs)(`div`,{className:m(`w-full`,o),children:[(i||a)&&(0,h.jsxs)(`div`,{className:`flex justify-between items-center mb-1.5`,children:[i&&(0,h.jsx)(`span`,{className:`text-xs text-neutral-400`,children:i}),a&&(0,h.jsxs)(`span`,{className:`text-xs font-medium text-neutral-300`,children:[Math.round(s),`%`]})]}),(0,h.jsx)(`div`,{className:m(`w-full rounded-full bg-neutral-800 overflow-hidden`,Oe[n]),children:(0,h.jsx)(`div`,{className:m(`h-full rounded-full transition-all duration-500 ease-out`,ke[r]),style:{width:`${s}%`},role:`progressbar`,"aria-valuenow":e,"aria-valuemax":t})})]})}function De({value:e,size:t=80,strokeWidth:n=6,variant:r=`brand`,label:i,className:a}){let o=(t-n)/2,s=2*Math.PI*o,c=s-Math.min(100,Math.max(0,e))/100*s;return(0,h.jsxs)(`div`,{className:m(`relative inline-flex items-center justify-center`,a),children:[(0,h.jsxs)(`svg`,{width:t,height:t,style:{transform:`rotate(-90deg)`},children:[(0,h.jsx)(`circle`,{cx:t/2,cy:t/2,r:o,fill:`none`,stroke:`#2D2F35`,strokeWidth:n}),(0,h.jsx)(`circle`,{cx:t/2,cy:t/2,r:o,fill:`none`,stroke:Ae[r],strokeWidth:n,strokeDasharray:s,strokeDashoffset:c,strokeLinecap:`round`,style:{transition:`stroke-dashoffset 0.5s ease`}})]}),i&&(0,h.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center text-sm font-semibold text-neutral-200`,children:i})]})}var h,Oe,ke,Ae,je=e((()=>{h=n(),de(),Oe={sm:`h-1`,md:`h-2`,lg:`h-3`},ke={brand:`bg-gradient-to-r from-brand-primary to-brand-secondary`,success:`bg-green-500`,error:`bg-red-500`,info:`bg-blue-500`},Ae={brand:`#F59120`,success:`#51D75A`,error:`#D2272F`},Ee.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{value:{required:!0,tsType:{name:`number`},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"brand" | "success" | "error" | "info"`,elements:[{name:`literal`,value:`"brand"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"info"`}]},description:``,defaultValue:{value:`"brand"`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},showValue:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}},De.__docgenInfo={description:``,methods:[],displayName:`CircularProgress`,props:{value:{required:!0,tsType:{name:`number`},description:``},size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`80`,computed:!1}},strokeWidth:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`6`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"brand" | "success" | "error"`,elements:[{name:`literal`,value:`"brand"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"error"`}]},description:``,defaultValue:{value:`"brand"`,computed:!1}},label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}}));function Me({label:e,orientation:t=`horizontal`,className:n}){return t===`vertical`?(0,g.jsx)(`div`,{className:m(`w-px bg-neutral-700/60 self-stretch`,n)}):e?(0,g.jsxs)(`div`,{className:m(`flex items-center gap-3 w-full`,n),children:[(0,g.jsx)(`div`,{className:`flex-1 h-px bg-neutral-700/60`}),(0,g.jsx)(`span`,{className:`text-xs text-neutral-500 whitespace-nowrap`,children:e}),(0,g.jsx)(`div`,{className:`flex-1 h-px bg-neutral-700/60`})]}):(0,g.jsx)(`div`,{className:m(`h-px w-full bg-neutral-700/60`,n)})}var g,Ne=e((()=>{g=n(),de(),Me.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{label:{required:!1,tsType:{name:`string`},description:``},orientation:{required:!1,tsType:{name:`union`,raw:`"horizontal" | "vertical"`,elements:[{name:`literal`,value:`"horizontal"`},{name:`literal`,value:`"vertical"`}]},description:``,defaultValue:{value:`"horizontal"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),_,Pe,Fe,Ie=e((()=>{_=n(),Pe=t(r()),se(),de(),Fe=(0,Pe.forwardRef)(({className:e,label:t,helperText:n,error:r,leftIcon:i,rightIcon:a,onClear:o,variant:s,type:c,...l},u)=>{let[d,ne]=(0,Pe.useState)(!1),f=c===`password`||s===`password`,p=s===`search`,ie=f?d?`text`:`password`:p?`search`:c;return(0,_.jsxs)(`div`,{className:`flex flex-col gap-1.5 w-full`,children:[t&&(0,_.jsxs)(`label`,{className:`text-sm font-medium text-neutral-300`,children:[t,l.required&&(0,_.jsx)(`span`,{className:`text-red-400 ml-1`,children:`*`})]}),(0,_.jsxs)(`div`,{className:`relative flex items-center`,children:[(i||p)&&(0,_.jsx)(`div`,{className:`absolute left-3 text-neutral-500 pointer-events-none`,children:p?(0,_.jsx)(re,{className:`h-4 w-4`}):i}),(0,_.jsx)(`input`,{ref:u,type:ie,className:m(`w-full rounded-lg border bg-[#171717] light:bg-neutral-800 text-neutral-100 placeholder:text-neutral-600 transition-all duration-200`,`px-3 py-2.5 text-sm`,`border-neutral-700 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none`,`disabled:opacity-50 disabled:cursor-not-allowed`,r&&`border-red-500 focus:border-red-400 focus:ring-red-500/20`,(i||p)&&`pl-9`,(a||f||o)&&`pr-9`,e),...l}),(0,_.jsxs)(`div`,{className:`absolute right-3 flex items-center gap-1.5`,children:[o&&l.value&&(0,_.jsx)(`button`,{type:`button`,onClick:o,className:`text-neutral-500 hover:text-neutral-300 transition-colors`,children:(0,_.jsx)(ae,{className:`h-4 w-4`})}),f&&(0,_.jsx)(`button`,{type:`button`,onClick:()=>ne(!d),className:`text-neutral-500 hover:text-neutral-300 transition-colors`,children:d?(0,_.jsx)(te,{className:`h-4 w-4`}):(0,_.jsx)(ee,{className:`h-4 w-4`})}),!f&&a&&(0,_.jsx)(`div`,{className:`text-neutral-500`,children:a})]})]}),r?(0,_.jsx)(`p`,{className:`text-xs text-red-400`,children:r}):n?(0,_.jsx)(`p`,{className:`text-xs text-neutral-500`,children:n}):null]})}),Fe.displayName=`Input`,Fe.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},leftIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},rightIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onClear:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},variant:{required:!1,tsType:{name:`union`,raw:`"default" | "search" | "password"`,elements:[{name:`literal`,value:`"default"`},{name:`literal`,value:`"search"`},{name:`literal`,value:`"password"`}]},description:``}}}})),v,Le,Re,ze=e((()=>{v=n(),Le=t(r()),de(),Re=(0,Le.forwardRef)(({className:e,label:t,helperText:n,error:r,showCount:i,maxLength:a,value:o,...s},c)=>{let l=typeof o==`string`?o.length:0;return(0,v.jsxs)(`div`,{className:`flex flex-col gap-1.5 w-full`,children:[t&&(0,v.jsxs)(`label`,{className:`text-sm font-medium text-neutral-300`,children:[t,s.required&&(0,v.jsx)(`span`,{className:`text-red-400 ml-1`,children:`*`})]}),(0,v.jsx)(`textarea`,{ref:c,value:o,maxLength:a,className:m(`w-full rounded-lg border bg-[#171717] light:bg-neutral-800 text-neutral-100 placeholder:text-neutral-600`,`px-3 py-2.5 text-sm resize-y min-h-[100px] transition-all duration-200`,`border-neutral-700 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 focus:outline-none`,`disabled:opacity-50 disabled:cursor-not-allowed scrollbar-thin`,r&&`border-red-500 focus:border-red-400 focus:ring-red-500/20`,e),...s}),(0,v.jsxs)(`div`,{className:`flex justify-between items-center`,children:[(0,v.jsx)(`div`,{children:r?(0,v.jsx)(`p`,{className:`text-xs text-red-400`,children:r}):n?(0,v.jsx)(`p`,{className:`text-xs text-neutral-500`,children:n}):null}),i&&a&&(0,v.jsxs)(`span`,{className:m(`text-xs ml-auto`,l>=a?`text-red-400`:`text-neutral-600`),children:[l,`/`,a]})]})]})}),Re.displayName=`Textarea`,Re.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{label:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},showCount:{required:!1,tsType:{name:`boolean`},description:``},maxLength:{required:!1,tsType:{name:`number`},description:``}}}}));function Be({className:e,variant:t,hoverable:n,children:r,...i}){return(0,b.jsx)(`div`,{className:m(Ke({variant:t,hoverable:n}),e),...i,children:r})}function Ve({className:e,...t}){return(0,b.jsx)(`div`,{className:m(`flex flex-col space-y-1.5 p-5 sm:p-6`,e),...t})}function y({className:e,...t}){return(0,b.jsx)(`h3`,{className:m(`text-xl md:text-2xl font-aileron font-bold text-white leading-tight`,e),...t})}function He({className:e,...t}){return(0,b.jsx)(`p`,{className:m(`text-sm text-neutral-400 leading-relaxed`,e),...t})}function Ue({className:e,...t}){return(0,b.jsx)(`div`,{className:m(`p-5 sm:p-6 pt-0`,e),...t})}function We({className:e,...t}){return(0,b.jsx)(`div`,{className:m(`flex items-center gap-3 px-6 sm:px-8 py-5 border-t border-white/[0.08]`,e),...t})}function Ge(e){let{variant:t,className:n,hoverable:r=!0}=e,a=m(`relative overflow-hidden group h-full`,t===`h3BodyRedirect`&&`cursor-pointer transition-transform duration-300 hover:-translate-y-1`,n);return(0,b.jsx)(Be,{variant:t===`borderlessCardWithIcon`?`ghost`:`dark`,hoverable:r&&t!==`h3BodyRedirect`&&t!==`borderlessCardWithIcon`,className:a,children:(()=>{switch(e.variant){case`h3Body`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-4`,children:[(0,b.jsx)(y,{className:`text-2xl font-bold`,children:e.heading}),(0,b.jsx)(w,{content:e.richText})]});case`iconBodyInline`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex items-start gap-6`,children:[(0,b.jsx)(C,{name:e.icon,className:`shrink-0`}),(0,b.jsx)(`div`,{className:`flex flex-col gap-1 pt-1.5`,children:(0,b.jsx)(w,{content:e.richText})})]});case`iconBodyNormal`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-6`,children:[(0,b.jsx)(C,{name:e.icon}),(0,b.jsx)(`div`,{className:`flex flex-col gap-4`,children:(0,b.jsx)(w,{content:e.richText})})]});case`WithFeaturedImage`:return(0,b.jsxs)(`div`,{className:`flex flex-col h-full`,children:[(0,b.jsx)(`div`,{className:`relative w-full aspect-video bg-neutral-900 overflow-hidden rounded-t-[32px]`,children:(0,b.jsx)(`img`,{src:e.image,alt:e.heading,className:`w-full h-full object-cover`})}),(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-4`,children:[(0,b.jsx)(y,{className:`text-xl font-bold`,children:e.heading}),(0,b.jsx)(w,{content:e.richText})]})]});case`h3BodyRedirect`:return(0,b.jsx)(S.default,{href:e.link,className:`block h-full`,children:(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-4`,children:[(0,b.jsxs)(`div`,{className:`flex items-center justify-between gap-4`,children:[(0,b.jsx)(y,{className:`text-2xl font-bold`,children:e.heading}),(0,b.jsx)(`div`,{className:`flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] group-hover:border-brand-primary/30 transition-colors`,children:(0,b.jsx)(le,{className:`w-5 h-5 text-neutral-500 group-hover:text-brand-primary transition-colors`})})]}),(0,b.jsx)(w,{content:e.richText})]})});case`iconH3BodyCTA`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-8 items-start h-full`,children:[(0,b.jsx)(C,{name:e.icon}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsx)(y,{className:`text-2xl font-bold`,children:e.heading}),(0,b.jsx)(w,{content:e.richText})]}),(0,b.jsx)(`div`,{className:`mt-auto`,children:(0,b.jsx)(S.default,{href:e.cta.href,children:(0,b.jsx)(he,{variant:e.cta.variant||`secondary`,size:`sm`,className:`rounded-xl px-6`,children:e.cta.label})})})]});case`iconBodyProgressBody`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-8`,children:[(0,b.jsx)(C,{name:e.icon}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,b.jsx)(w,{content:e.richText}),(0,b.jsxs)(`div`,{className:`space-y-4`,children:[(0,b.jsx)(Ee,{value:e.progress,variant:`brand`,size:`md`}),e.bottomText&&(0,b.jsx)(w,{content:e.bottomText})]})]})]});case`logoBodyDividerBody`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-8`,children:[(0,b.jsx)(`div`,{className:`h-10 w-auto flex items-center`,children:(0,b.jsx)(`img`,{src:e.logo,alt:`Logo`,className:`h-full object-contain filter brightness-0 invert opacity-60`})}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,b.jsx)(w,{content:e.richText}),(0,b.jsx)(Me,{className:`opacity-10`}),(0,b.jsx)(w,{content:e.bottomText})]})]});case`bodyOnly`:return(0,b.jsx)(`div`,{className:`p-8 lg:p-10`,children:(0,b.jsx)(w,{content:e.richText})});case`h3BodyListsBodyCTA`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-8 h-full`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsx)(y,{className:`text-2xl font-bold`,children:e.heading}),(0,b.jsx)(w,{content:e.richText})]}),(0,b.jsx)(`ul`,{className:`flex flex-col gap-4`,children:e.listItems.map((e,t)=>(0,b.jsxs)(`li`,{className:`flex items-start gap-4`,children:[(0,b.jsx)(Je,{size:20,className:`mt-0.5`}),(0,b.jsx)(`span`,{className:`text-base text-neutral-400 leading-snug`,children:e.text})]},t))}),e.cta&&(0,b.jsx)(`div`,{className:`mt-auto pt-4`,children:(0,b.jsx)(S.default,{href:e.cta.href,children:(0,b.jsx)(he,{variant:`primary`,className:`rounded-xl px-8`,children:e.cta.label})})})]});case`twoColumnH3BodyListsBodyImage`:return(0,b.jsxs)(`div`,{className:`flex flex-col lg:flex-row h-full`,children:[(0,b.jsxs)(`div`,{className:`flex-1 p-8 lg:p-12 xl:p-16 flex flex-col gap-10`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,b.jsx)(y,{className:`text-3xl lg:text-4xl font-bold`,children:e.heading}),(0,b.jsx)(w,{content:e.richText,className:`text-base`})]}),(0,b.jsx)(`ul`,{className:`grid grid-cols-1 md:grid-cols-2 gap-6`,children:e.listItems.map((e,t)=>(0,b.jsxs)(`li`,{className:`flex items-start gap-3`,children:[(0,b.jsx)(`div`,{className:`flex items-center justify-center w-5 h-5 rounded-full bg-brand-primary/10 mt-0.5 shrink-0`,children:(0,b.jsx)(u,{className:`w-3 h-3 text-brand-primary`})}),(0,b.jsx)(`span`,{className:`text-sm text-neutral-400 leading-snug`,children:e.text})]},t))})]}),(0,b.jsx)(`div`,{className:`w-full lg:w-2/5 min-h-[400px] relative bg-neutral-900 border-l border-white/[0.05]`,children:(0,b.jsx)(`img`,{src:e.image,alt:e.heading,className:`absolute inset-0 w-full h-full object-cover`})})]});case`iconHeadingInline`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-6`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,b.jsx)(C,{name:e.icon,className:`w-12 h-12`}),(0,b.jsx)(y,{className:`text-2xl font-bold`,children:e.heading})]}),(0,b.jsx)(w,{content:e.richText})]});case`headingAndImageStack`:return(0,b.jsxs)(`div`,{className:`flex flex-col h-full`,children:[(0,b.jsx)(`div`,{className:`p-8 lg:p-10 flex flex-col items-center`,children:(0,b.jsx)(y,{className:`text-2xl font-bold text-center`,children:e.heading})}),(0,b.jsx)(`div`,{className:`px-8 lg:px-10 pb-8 lg:pb-10 mt-auto`,children:(0,b.jsx)(`div`,{className:`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.05] bg-neutral-900 shadow-inner`,children:(0,b.jsx)(`img`,{src:e.image,alt:e.heading,className:`absolute inset-0 w-full h-full object-cover`})})})]});case`testimonial`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-8 h-full`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-4 flex-1`,children:[(0,b.jsx)(`h4`,{className:`text-xl font-bold leading-snug text-white`,children:e.title}),(0,b.jsx)(w,{content:e.richText})]}),(0,b.jsxs)(`div`,{className:`flex items-center gap-4 pt-4 border-t border-white/[0.05]`,children:[e.avatar?(0,b.jsx)(`img`,{src:e.avatar,alt:e.author,className:`w-12 h-12 rounded-full object-cover grayscale opacity-80`}):(0,b.jsx)(`div`,{className:`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-black`,style:{background:e.accentColor||`#F59120`},children:e.author.charAt(0)}),(0,b.jsxs)(`div`,{className:`flex flex-col`,children:[(0,b.jsx)(`span`,{className:`font-aileron font-bold text-lg text-white leading-none mb-1`,children:e.author}),(0,b.jsx)(`span`,{className:`text-sm text-neutral-500 font-medium`,children:e.role})]})]})]});case`testimonialSpecial`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-12 flex flex-col gap-8 h-full`,children:[(0,b.jsx)(`svg`,{width:`32`,height:`24`,viewBox:`0 0 32 24`,fill:`none`,className:`text-white/20`,children:(0,b.jsx)(`path`,{d:`M0 24V14.4C0 10.64 1.2 7.44 3.6 4.8C6.08 2.08 9.28 0.48 13.2 0V4.8C11.04 5.2 9.24 6.2 7.8 7.8C6.44 9.32 5.72 11.12 5.6 13.2H10.4V24H0ZM18.4 24V14.4C18.4 10.56 19.64 7.32 22.12 4.68C24.68 2.04 27.92 0.48 31.84 0V4.8C29.6 5.2 27.76 6.2 26.32 7.8C24.96 9.32 24.24 11.12 24.16 13.2H28.96V24H18.4Z`,fill:`currentColor`})}),(0,b.jsx)(`div`,{className:`flex-1`,children:(0,b.jsx)(`p`,{className:`font-aileron font-bold text-white text-xl leading-relaxed`,children:e.richText})}),(0,b.jsxs)(`div`,{className:`flex items-center gap-4 pt-6 border-t border-white/[0.05]`,children:[e.avatar&&(0,b.jsx)(`img`,{src:e.avatar,alt:e.author,className:`w-14 h-14 rounded-full object-contain bg-white/[0.03] p-2`}),(0,b.jsxs)(`div`,{className:`flex flex-col`,children:[(0,b.jsx)(`span`,{className:`font-aileron font-bold text-white text-lg`,children:e.author}),(0,b.jsx)(`span`,{className:`font-aileron font-semibold text-neutral-500 text-sm`,children:e.role})]})]})]});case`apiTestCard`:return(0,b.jsx)(`div`,{className:`p-8 lg:p-12 h-full`,children:(0,b.jsx)(Qe,{})});case`technical`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-12 flex flex-col gap-10`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-5`,children:[(0,b.jsx)(C,{name:e.icon}),(0,b.jsx)(y,{className:`text-2xl lg:text-3xl font-bold`,children:e.heading})]}),e.subheading&&(0,b.jsxs)(`div`,{className:`space-y-6`,children:[(0,b.jsx)(`h4`,{className:`text-xs font-bold uppercase tracking-[0.2em] text-neutral-500`,children:e.subheading}),e.codeSnippet&&(0,b.jsx)(Ce,{code:e.codeSnippet,variant:`default`,minWidth:`100%`,maxWidth:`100%`,maxHeight:`400px`})]}),e.subheading2&&(0,b.jsx)(`h4`,{className:`text-xs font-bold uppercase tracking-widest text-neutral-500`,children:e.subheading2}),e.tableData&&e.tableData.length>0&&(0,b.jsx)(`div`,{className:`mt-6 font-geist`,children:(0,b.jsx)(Te,{data:e.tableData,labelColumnWidth:140,showFirstColumnHeader:!0,columns:Object.keys(e.tableData[0]).map(e=>({key:e,label:e.charAt(0).toUpperCase()+e.slice(1).replace(/_/g,` `)}))})}),e.richText&&(0,b.jsx)(w,{content:e.richText,className:`mt-8`})]});case`SlidingCards`:{let[t,n]=(0,x.useState)({left:0,right:0}),[r,i]=(0,x.useState)(0),[a,o]=(0,x.useState)(!1),s=(0,x.useRef)(null),c=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=()=>{if(s.current&&c.current){let e=s.current.offsetWidth,t=c.current.scrollWidth;n({left:-(t-e+80),right:0})}};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[e.items]);let l=be(0),u=ge(l,{stiffness:300,damping:30});(0,x.useEffect)(()=>l.on(`change`,e=>{if(t.left!==0){let n=Math.abs(e)/Math.abs(t.left);i(Number.isNaN(n)?0:Math.min(Math.max(n,0),1))}}),[t.left,l]);let d=e=>{ve(l,e===0?0:t.left,{type:`spring`,stiffness:300,damping:30})};return(0,b.jsxs)(`div`,{className:`w-full flex flex-col gap-12`,ref:s,children:[(0,b.jsx)(`div`,{className:`w-full overflow-hidden cursor-grab active:cursor-grabbing px-4 sm:px-0`,children:(0,b.jsx)(Se.div,{ref:c,drag:`x`,dragConstraints:t,style:{x:u},onDragStart:()=>o(!0),onDragEnd:()=>o(!1),className:`flex items-center gap-6 py-4 pl-10 lg:pl-20`,children:e.items.map((e,t)=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-4 p-8 sm:p-10 rounded-[32px] shrink-0 transition-all duration-300`,style:{background:`#16181A`,border:`1px solid #8C929D`,width:`min(380px, 85vw)`,height:`280px`},children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsx)(qe,{name:e.icon,size:24}),(0,b.jsx)(`h4`,{className:`font-aileron font-semibold text-white text-lg`,children:e.title})]}),(0,b.jsx)(`p`,{className:`font-geist text-neutral-400 text-sm leading-relaxed`,children:e.description})]},t))})}),(0,b.jsx)(`div`,{className:`flex items-center justify-center gap-3`,children:[0,1].map(e=>(0,b.jsx)(`button`,{onClick:()=>d(e),className:`relative h-1.5 rounded-full overflow-hidden bg-[#26282B] transition-all duration-300`,style:{width:`80px`},children:(0,b.jsx)(Se.div,{className:`absolute inset-0 origin-left`,style:{background:`linear-gradient(90deg, #F59120 0%, #9747FF 100%)`,scaleX:e===0?Math.max(0,1-r*2):Math.max(0,(r-.5)*2)}})},e))})]})}case`H3BodyLinkText`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-6 h-full border-0`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsx)(y,{className:`text-2xl font-bold leading-tight`,children:(e=>e.split(/(\{orange:.*?\})/g).map((e,t)=>e.startsWith(`{orange:`)&&e.endsWith(`}`)?(0,b.jsx)(`span`,{className:`text-[#F59120]`,children:e.slice(8,-1)},t):e))(e.heading)}),(0,b.jsx)(w,{content:e.richText,className:`text-neutral-400`})]}),(0,b.jsx)(`div`,{className:`mt-auto pt-2`,children:(0,b.jsxs)(S.default,{href:e.linkHref,className:`inline-flex items-center gap-2 text-sm font-aileron font-bold text-white hover:text-brand-primary transition-colors group/link`,children:[e.linkText||`Learn more`,(0,b.jsx)(le,{size:16,className:`text-neutral-500 group-hover/link:text-brand-primary transition-colors`})]})})]});case`RelatedAPI`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full h-full`,children:[(0,b.jsxs)(`div`,{className:`flex-1 flex flex-col gap-10`,children:[(0,b.jsx)(y,{className:`text-2xl lg:text-3xl font-bold leading-tight max-w-md`,children:e.heading}),(0,b.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:e.apis.map((e,t)=>(0,b.jsx)(S.default,{href:e.href,children:(0,b.jsx)(he,{variant:`secondary`,size:`md`,className:`rounded-xl border-white font-aileron font-bold transition-opacity hover:opacity-80 active:opacity-70`,rightIcon:(0,b.jsx)(le,{size:16,className:`text-white/50`}),children:e.label})},t))})]}),(0,b.jsxs)(`div`,{className:`w-full lg:w-[45%] aspect-square relative flex items-center justify-center`,children:[(0,b.jsx)(`div`,{className:`absolute inset-0 bg-brand-primary/10 blur-[100px] rounded-full opacity-30`}),(0,b.jsx)(`img`,{src:`/assets/related_api_illustration.png`,alt:`Process Illustration`,className:`relative z-10 w-full h-full object-contain`})]})]});case`queryForm`:return(0,b.jsxs)(`div`,{className:`p-10 lg:p-16 flex flex-col gap-12 lg:gap-16`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col items-center text-center gap-3`,children:[e.subheading&&(0,b.jsx)(`span`,{className:`text-sm font-bold uppercase tracking-[0.3em] text-brand-primary`,children:e.subheading}),(0,b.jsx)(`h3`,{className:`text-3xl lg:text-[42px] leading-tight font-aileron font-bold text-white`,children:e.heading})]}),(0,b.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative`,children:[(0,b.jsx)(`div`,{className:`hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2`}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,b.jsx)(`h4`,{className:`text-lg font-bold text-white/90`,children:e.formLabel}),(0,b.jsx)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-6`,children:e.formFields.map(e=>(0,b.jsx)(`div`,{className:m(e.fullWidth||e.type===`textarea`?`sm:col-span-2`:``),children:e.type===`textarea`?(0,b.jsx)(Re,{label:e.label,placeholder:e.placeholder,required:e.required,rows:4,className:`bg-transparent border-neutral-700`}):(0,b.jsx)(Fe,{label:e.label,type:e.type,placeholder:e.placeholder,required:e.required,className:`bg-transparent border-neutral-700`})},e.name))}),(0,b.jsx)(`div`,{className:`pt-2`,children:(0,b.jsx)(he,{variant:`primary`,size:`lg`,className:`rounded-xl px-8 py-7 gap-3 font-aileron font-bold text-base`,rightIcon:(0,b.jsx)(l,{size:18}),children:e.submitLabel})})]}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-10 lg:pt-2`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[e.description&&(0,b.jsx)(`p`,{className:`text-neutral-300 text-lg leading-relaxed font-geist`,children:e.description}),e.media&&(0,b.jsx)(`div`,{className:`relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50`,children:e.media.type===`video`?(0,b.jsx)(`video`,{src:e.media.url,poster:e.media.posterUrl,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:`w-full h-full object-cover`}):(0,b.jsx)(i,{src:e.media.url,alt:e.media.alt||``,fill:!0,className:`object-cover`})})]}),(0,b.jsx)(`div`,{className:`flex flex-col gap-4 mt-auto`,children:e.sidebarCtas?.map((e,t)=>{let n=e.icon?p[e.icon]:null;return(0,b.jsx)(S.default,{href:e.href,className:`w-full`,children:(0,b.jsx)(he,{variant:e.variant||`secondary`,size:`lg`,className:`w-full justify-center gap-3 rounded-xl font-aileron font-bold py-7 text-base transition-all hover:scale-[1.01]`,leftIcon:n?(0,b.jsx)(n,{size:20}):null,children:e.label})},t)})})]})]})]});case`borderlessCardWithIcon`:return(0,b.jsxs)(`div`,{className:`flex flex-col gap-10 items-start`,children:[(0,b.jsx)(C,{name:e.icon}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,b.jsx)(y,{className:`text-3xl lg:text-[40px] font-aileron font-bold`,children:e.heading}),(0,b.jsx)(w,{content:e.richText,className:`text-lg lg:text-xl text-neutral-400`})]})]});case`IconH3InlineAndBody`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-10 flex flex-col gap-6`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,b.jsx)(qe,{name:e.icon,size:32}),(0,b.jsx)(y,{className:`text-2xl font-bold`,children:e.heading})]}),(0,b.jsx)(w,{content:e.richText,className:`text-base text-neutral-400`})]});case`TwoColumnsLists`:return(0,b.jsxs)(`div`,{className:`p-8 lg:p-12 flex flex-col gap-10 w-full h-full`,children:[(0,b.jsx)(`h3`,{className:`font-aileron font-semibold text-xl text-white/95 leading-tight`,children:e.heading}),(0,b.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10`,children:[(0,b.jsx)(`div`,{className:`flex flex-col gap-10`,children:e.listLeft.map((e,t)=>(0,b.jsxs)(`div`,{className:`flex items-start gap-4 group/item`,children:[(0,b.jsx)(Je,{size:24,className:`mt-1`}),(0,b.jsx)(`span`,{className:`font-aileron font-semibold text-lg lg:text-xl text-white/90 leading-tight`,children:e.text})]},t))}),(0,b.jsx)(`div`,{className:`flex flex-col gap-10`,children:e.listRight.map((e,t)=>(0,b.jsxs)(`div`,{className:`flex items-start gap-4 group/item`,children:[(0,b.jsx)(Je,{size:24,className:`mt-1`}),(0,b.jsx)(`span`,{className:`font-aileron font-semibold text-lg lg:text-xl text-white/90 leading-tight`,children:e.text})]},t))})]})]});case`HeadingAndBodyUnderLists`:return(0,b.jsxs)(`div`,{className:`flex flex-col w-full h-full divide-y divide-white/10`,children:[(0,b.jsxs)(`div`,{className:`p-8 lg:p-16 xl:p-20 relative overflow-hidden flex flex-col gap-12`,children:[(0,b.jsx)(`div`,{className:`absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-brand-primary/20 blur-[100px] rounded-full pointer-events-none`}),(0,b.jsx)(`div`,{className:`absolute bottom-[-20%] right-[-5%] w-[250px] h-[250px] bg-brand-secondary/20 blur-[80px] rounded-full pointer-events-none`}),(0,b.jsx)(`h3`,{className:`font-aileron font-semibold text-xl text-white/95 leading-tight relative z-10`,children:e.heading}),(0,b.jsx)(`div`,{className:`grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10`,children:e.lists.map((e,t)=>(0,b.jsx)(`div`,{className:`flex flex-col gap-8`,children:e.map((e,t)=>(0,b.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,b.jsx)(Je,{size:20,className:`mt-0.5`}),(0,b.jsx)(`span`,{className:`font-aileron font-semibold text-lg lg:text-xl text-white/90 leading-tight`,children:e.text})]},t))},t))})]}),(0,b.jsxs)(`div`,{className:`p-8 lg:p-12 flex flex-col gap-4 bg-white/[0.01] relative z-10`,children:[(0,b.jsx)(`h4`,{className:`font-aileron font-semibold text-2xl text-white/95 leading-tight`,children:e.footerHeading}),(0,b.jsx)(w,{content:e.footerRichText,className:`text-base text-white/60 leading-relaxed font-geist`})]})]});case`VideoCard`:return(0,b.jsxs)(`div`,{className:`relative w-full h-full min-h-[600px] flex flex-col justify-between p-8 lg:p-16 xl:p-20 overflow-hidden group`,children:[(0,b.jsxs)(`div`,{className:`absolute inset-0 z-0`,children:[(0,b.jsx)(`img`,{src:e.thumbnail,alt:e.heading,className:`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}),(0,b.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity`})]}),(0,b.jsxs)(`div`,{className:`relative z-10 flex flex-col gap-6 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,b.jsx)(`h2`,{className:`font-aileron font-semibold text-3xl md:text-4xl lg:text-5xl text-white/95 leading-tight`,children:e.heading}),(0,b.jsx)(`p`,{className:`font-aileron font-semibold text-2xl md:text-3xl lg:text-4xl text-white/60 leading-tight`,children:e.subheading})]}),(0,b.jsxs)(S.default,{href:e.videoHref,className:`inline-flex items-center gap-3 transition-colors hover:text-brand-primary`,children:[(0,b.jsx)(`span`,{className:`font-aileron font-semibold text-lg text-white/90 underline decoration-white/20 hover:decoration-brand-primary/50 transition-colors`,children:`View Video`}),(0,b.jsx)(ne,{className:`w-6 h-6 text-white/90`})]})]}),(0,b.jsx)(`div`,{className:`relative z-10 max-w-2xl mt-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200`,children:(0,b.jsx)(`p`,{className:`font-geist text-base lg:text-lg text-white/60 leading-relaxed`,children:e.description})})]});case`HowItWorkMain`:return(0,b.jsxs)(`div`,{className:`w-full flex flex-col lg:flex-row gap-16 lg:gap-20 xl:gap-24 p-8 lg:p-16 xl:p-20 items-start`,children:[(0,b.jsxs)(`div`,{className:`flex-1 flex flex-col gap-10 max-w-2xl`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsxs)(`h2`,{className:`font-aileron font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight`,children:[(0,b.jsx)(`span`,{className:`text-white block`,children:e.heading}),(0,b.jsx)(`span`,{className:`text-white/40 block mt-1`,children:e.subheading})]}),(0,b.jsx)(`p`,{className:`font-geist text-lg text-white/50 leading-relaxed max-w-xl`,children:(e=>e.split(/(US|Canada|Europe)/g).map((e,t)=>(0,b.jsx)(`span`,{className:[`US`,`Canada`,`Europe`].includes(e)?`text-white font-semibold`:``,children:e},t)))(e.description)})]}),(0,b.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:e.ctas.map((e,t)=>(0,b.jsxs)(S.default,{href:e.href,className:m(`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-aileron font-semibold text-base transition-all active:scale-95`,e.variant===`primary-gradient`?`bg-gradient-to-r from-[#f59120] to-[#9747ff] text-white shadow-lg shadow-orange-500/10 hover:opacity-90`:`border border-white/90 text-white hover:bg-white/5`),children:[e.label,e.variant===`primary-gradient`?(0,b.jsx)(ce,{className:`w-4 h-4`}):(0,b.jsx)(ie,{className:`w-4 h-4`})]},t))})]}),(0,b.jsxs)(`div`,{className:`w-full lg:w-[520px] flex flex-col rounded-[1.5rem] relative`,children:[(0,b.jsxs)(`div`,{className:`grid grid-cols-2`,children:[(0,b.jsxs)(`div`,{className:`p-[24px] flex flex-col gap-6 relative group h-[200px] border-r border-[#000000]/90 rounded-[1.5rem_0_0_0]`,style:{background:`linear-gradient(294deg, #6F6F6F 0%, #171717 100%)`},children:[(0,b.jsx)(`div`,{className:`absolute inset-0 pointer-events-none opacity-20`,style:{backgroundImage:`repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)`}}),(0,b.jsxs)(`div`,{className:`relative z-10 flex flex-col gap-8 h-full`,children:[(0,b.jsx)(`div`,{className:`w-8 h-8 rounded-lg flex items-center justify-center font-aileron font-bold text-base text-white`,style:{background:`linear-gradient(90deg, #F59120 0%, #9747FF 100%)`},children:`1`}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-2 mt-auto`,children:[(0,b.jsx)(`h4`,{className:`font-aileron font-semibold text-xl text-white`,children:e.steps[0]?.title}),(0,b.jsx)(`p`,{className:`font-geist text-sm text-white/50 leading-relaxed`,children:e.steps[0]?.description})]})]})]}),(0,b.jsxs)(`div`,{className:`p-[24px] flex flex-col gap-6 relative group h-[200px] rounded-[0_1.5rem_0_0]`,style:{background:`linear-gradient(65deg, #6F6F6F 0%, #171717 100%)`},children:[(0,b.jsx)(`div`,{className:`absolute inset-0 pointer-events-none opacity-20`,style:{backgroundImage:`repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)`}}),(0,b.jsxs)(`div`,{className:`relative z-10 flex flex-col gap-8 h-full`,children:[(0,b.jsx)(`div`,{className:`w-8 h-8 rounded-lg flex items-center justify-center font-aileron font-bold text-base text-white`,style:{background:`linear-gradient(90deg, #F59120 0%, #9747FF 100%)`},children:`2`}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-2 mt-auto`,children:[(0,b.jsx)(`h4`,{className:`font-aileron font-semibold text-xl text-white`,children:e.steps[1]?.title}),(0,b.jsx)(`p`,{className:`font-geist text-sm text-white/50 leading-relaxed`,children:e.steps[1]?.description})]})]})]})]}),(0,b.jsxs)(`div`,{className:`p-[24px] relative group h-[180px] border-t border-[#171717] rounded-[0_0_1.5rem_1.5rem]`,style:{background:`linear-gradient(181deg, #6F6F6F 0.75%, #171717 99.25%)`},children:[(0,b.jsx)(`div`,{className:`absolute inset-0 pointer-events-none opacity-20`,style:{backgroundImage:`repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)`}}),(0,b.jsxs)(`div`,{className:`relative z-10 flex flex-col gap-8 h-full`,children:[(0,b.jsx)(`div`,{className:`w-8 h-8 rounded-lg flex items-center justify-center font-aileron font-bold text-base text-white`,style:{background:`linear-gradient(90deg, #F59120 0%, #9747FF 100%)`},children:`3`}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-2 mt-auto`,children:[(0,b.jsx)(`h4`,{className:`font-aileron font-semibold text-xl text-white`,children:e.steps[2]?.title}),(0,b.jsx)(`p`,{className:`font-geist text-sm text-white/50 leading-relaxed`,children:e.steps[2]?.description})]})]})]})]})]});case`DownloadApp`:return(0,b.jsxs)(`div`,{className:`w-full grid grid-cols-1 md:grid-cols-2 rounded-[32px] overflow-hidden`,style:{background:`#16181A`,border:`1px solid #8C929D`},children:[(0,b.jsx)(`div`,{className:`relative aspect-square md:aspect-auto overflow-hidden bg-black/20 flex items-center justify-center p-4`,children:e.media.type===`video`?(0,b.jsx)(`video`,{src:e.media.src,poster:e.media.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:`w-full h-full object-contain rounded-2xl`}):(0,b.jsx)(`div`,{className:`relative w-full h-full`,children:(0,b.jsx)(i,{src:e.media.src,alt:e.heading,fill:!0,className:`object-contain p-4 transition-transform duration-700 hover:scale-105`})})}),(0,b.jsxs)(`div`,{className:`p-8 lg:p-12 flex flex-col justify-center gap-8`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,b.jsx)(`h2`,{className:`font-aileron font-semibold text-3xl lg:text-4xl leading-tight text-white`,children:e.heading}),(0,b.jsx)(`div`,{className:`font-geist text-lg text-white/70 leading-relaxed space-y-4`,children:e.body})]}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,b.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,b.jsxs)(S.default,{href:e.googlePlayUrl,className:`bg-white hover:bg-white/90 transition-colors px-6 py-3 rounded-xl flex items-center gap-3 group shadow-lg`,children:[(0,b.jsx)(f,{className:`w-6 h-6 text-black group-hover:scale-110 transition-transform`}),(0,b.jsxs)(`div`,{className:`flex flex-col leading-none`,children:[(0,b.jsx)(`span`,{className:`text-[10px] text-black/60 font-semibold uppercase tracking-wider`,children:`Get it on`}),(0,b.jsx)(`span`,{className:`text-xl text-black font-bold`,children:`Google Play`})]})]}),(0,b.jsxs)(S.default,{href:e.appStoreUrl,className:`bg-white hover:bg-white/90 transition-colors px-6 py-3 rounded-xl flex items-center gap-3 group shadow-lg`,children:[(0,b.jsx)(c,{className:`w-6 h-6 text-black group-hover:scale-110 transition-transform`}),(0,b.jsxs)(`div`,{className:`flex flex-col leading-none`,children:[(0,b.jsx)(`span`,{className:`text-[10px] text-black/60 font-semibold uppercase tracking-wider`,children:`Download on the`}),(0,b.jsx)(`span`,{className:`text-xl text-black font-bold`,children:`App Store`})]})]})]}),e.secondaryText&&(0,b.jsxs)(`div`,{className:`flex flex-col gap-4 border-l-2 border-white/10 pl-4 py-1`,children:[(0,b.jsx)(`p`,{className:`font-geist text-base text-white/50 italic`,children:e.secondaryText}),(e.ukGooglePlayUrl||e.ukAppStoreUrl)&&(0,b.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[e.ukGooglePlayUrl&&(0,b.jsxs)(S.default,{href:e.ukGooglePlayUrl,className:`bg-black hover:bg-black/90 border border-white/10 transition-colors px-4 py-2 rounded-lg flex items-center gap-2 group`,children:[(0,b.jsx)(f,{className:`w-5 h-5 text-white group-hover:scale-110 transition-transform`}),(0,b.jsxs)(`div`,{className:`flex flex-col leading-none`,children:[(0,b.jsx)(`span`,{className:`text-[8px] text-white/60 font-semibold uppercase tracking-wider`,children:`Get it on`}),(0,b.jsx)(`span`,{className:`text-base text-white font-bold`,children:`Google Play`})]})]}),e.ukAppStoreUrl&&(0,b.jsxs)(S.default,{href:e.ukAppStoreUrl,className:`bg-black hover:bg-black/90 border border-white/10 transition-colors px-4 py-2 rounded-lg flex items-center gap-2 group`,children:[(0,b.jsx)(c,{className:`w-5 h-5 text-white group-hover:scale-110 transition-transform`}),(0,b.jsxs)(`div`,{className:`flex flex-col leading-none`,children:[(0,b.jsx)(`span`,{className:`text-[8px] text-white/60 font-semibold uppercase tracking-wider`,children:`Download on the`}),(0,b.jsx)(`span`,{className:`text-base text-white font-bold`,children:`App Store`})]})]})]})]})]})]})]});case`HeadingBodyImageCTAStack`:return(0,b.jsxs)(`div`,{className:`w-full flex flex-col items-center text-center p-8 lg:p-12 gap-8 rounded-[32px]`,style:{background:`#16181A`,border:`1px solid #8C929D`},children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-4 max-w-2xl`,children:[(0,b.jsx)(`h2`,{className:`font-aileron font-semibold text-3xl lg:text-4xl text-white`,children:e.heading}),(0,b.jsx)(`p`,{className:`font-geist text-lg text-white/70 leading-relaxed`,children:e.body})]}),(0,b.jsxs)(`div`,{className:`relative w-full aspect-[4/3] max-w-md mx-auto group`,children:[(0,b.jsx)(`div`,{className:`absolute top-0 left-0 w-[85%] h-[85%] rounded-2xl overflow-hidden border border-white/5 shadow-2xl opacity-40 group-hover:opacity-60 transition-opacity`,children:(0,b.jsx)(i,{src:e.image,alt:``,fill:!0,className:`object-cover`})}),(0,b.jsx)(`div`,{className:`absolute bottom-0 right-0 w-[85%] h-[85%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2`,children:(0,b.jsx)(i,{src:e.image,alt:e.heading,fill:!0,className:`object-cover`})})]}),(0,b.jsx)(S.default,{href:e.cta.href,className:`inline-flex items-center px-8 py-3 rounded-xl border border-[#8C929D] text-white font-aileron font-semibold hover:bg-white hover:text-black transition-all duration-300`,children:e.cta.label})]});case`CardGrid`:return(0,b.jsx)(`div`,{className:`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`,children:e.items.map((e,t)=>(0,b.jsxs)(`div`,{className:`flex flex-col gap-6 p-10 rounded-3xl flex-1 h-full transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,1)] hover:-translate-y-1`,style:{background:`#16181A`,border:`1px solid #8C929D`},children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-2 flex-1`,children:[(0,b.jsx)(`h3`,{className:`font-aileron font-semibold text-2xl`,style:{lineHeight:`1.333em`,background:`linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,backgroundClip:`text`},children:e.title}),(0,b.jsx)(`p`,{className:`font-geist text-base`,style:{lineHeight:`1.5em`,color:`#A9ADB5`},children:e.description})]}),(0,b.jsxs)(S.default,{href:e.href,className:`inline-flex items-center gap-2 font-aileron font-semibold text-base text-white group transition-opacity hover:opacity-80 active:opacity-60`,children:[`Learn more`,(0,b.jsx)(i,{src:`/images/arrow-right.svg`,alt:``,width:13,height:13,className:`group-hover:translate-x-1 transition-transform brightness-200`})]})]},`${e.title}-${t}`))});default:return null}})()})}var b,x,S,Ke,qe,Je,C,w,Ye,Xe,Ze,Qe,$e=e((()=>{b=n(),x=t(r()),S=t(o()),se(),xe(),fe(),de(),a(),me(),je(),Ne(),ye(),we(),Ie(),ze(),Ke=pe(`rounded-[32px] border transition-all duration-300`,{variants:{variant:{default:`bg-[#16181A] border-[#8C929D] light:border-neutral-700`,elevated:`bg-[#16181A] border-[#8C929D] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]`,glass:`glass border-[#8C929D]`,bordered:`bg-transparent border-[#8C929D]`,brand:`bg-[#16181A] border-[#8C929D] shadow-[0_0_20px_rgba(245,145,32,0.08)]`,dark:`bg-[#16181A] border-[#8C929D]`,ghost:`bg-transparent border-transparent shadow-none rounded-none p-0`},hoverable:{true:`hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,1)] cursor-pointer hover:-translate-y-1`,false:``}},defaultVariants:{variant:`default`,hoverable:!1}}),qe=({name:e,size:t=28,className:n})=>{let r=p[e];return r?(0,b.jsxs)(`div`,{className:m(`inline-flex items-center justify-center shrink-0`,n),children:[(0,b.jsx)(r,{size:t,style:{stroke:`url(#brand-gradient)`,strokeWidth:2.5}}),(0,b.jsx)(`svg`,{width:`0`,height:`0`,className:`absolute`,children:(0,b.jsx)(`defs`,{children:(0,b.jsxs)(`linearGradient`,{id:`brand-gradient`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,b.jsx)(`stop`,{offset:`0%`,stopColor:`#F59120`}),(0,b.jsx)(`stop`,{offset:`100%`,stopColor:`#9747FF`})]})})})]}):null},Je=({size:e=22,className:t})=>(0,b.jsx)(s,{size:e,className:m(`text-[#27AE60] shrink-0 fill-[#27AE60]/10`,t)}),C=({name:e,className:t})=>{let n=p[e];return n?(0,b.jsxs)(`div`,{className:m(`relative flex items-center justify-center w-14 h-14 rounded-2xl border border-white/5 bg-white/[0.03] overflow-hidden`,t),children:[(0,b.jsx)(`div`,{className:`absolute inset-0 opacity-10 blur-xl`,style:{background:`linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)`}}),(0,b.jsx)(`div`,{className:`relative z-10 w-7 h-7`,style:{background:`linear-gradient(90deg, #F59120 0%, #9747FF 100%)`,WebkitBackgroundClip:`text`,backgroundClip:`text`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,b.jsx)(n,{className:`w-full h-full`,style:{stroke:`url(#brand-gradient)`,strokeWidth:2.5}})}),(0,b.jsx)(`svg`,{width:`0`,height:`0`,className:`absolute`,children:(0,b.jsx)(`defs`,{children:(0,b.jsxs)(`linearGradient`,{id:`brand-gradient`,x1:`0%`,y1:`0%`,x2:`100%`,y2:`0%`,children:[(0,b.jsx)(`stop`,{offset:`0%`,stopColor:`#F59120`}),(0,b.jsx)(`stop`,{offset:`100%`,stopColor:`#9747FF`})]})})})]}):null},w=({content:e,className:t})=>(0,b.jsx)(`div`,{className:m(`font-geist text-sm text-neutral-400 leading-relaxed prose prose-invert prose-p:my-1`,t),dangerouslySetInnerHTML:{__html:e}}),Ye=[`Basic VIN Decode`,`Auction History API`,`Classic VIN Decoder`,`Electric Vehicle Specifications`,`Europe VIN Decode`,`License Plate OCR`,`Market Value by VIN`,`Premium VIN Decode`,`Sales History`,`Title Check`,`UK Registration Decode`,`US Plate Decode`,`US Truck Plate Decode`,`Vehicle Maintenance by VIN`,`Vehicle Recalls`,`Vehicle Repair by VIN`,`Vehicle Warranty`,`VIN OCR`,`VIN Suggestion`,`YMM Specifications`],Xe={"Basic VIN Decode":{input:`vin`,label:`VIN Number`,exampleValue:`1HGBH41JXMN109186`,endpoint:`/vin-decoder/v3/{vin}`},"Auction History API":{input:`vin`,label:`VIN Number`,exampleValue:`1G1ZT51806F209019`,endpoint:`/auction-history/v2/{vin}`},"Classic VIN Decoder":{input:`vin`,label:`VIN Number`,exampleValue:`1G1ZT51806F209019`,endpoint:`/classic-vin-decoder/v1/{vin}`},"Electric Vehicle Specifications":{input:`vin`,label:`VIN Number`,exampleValue:`5YJ3E1EA7KF328931`,endpoint:`/ev-specs/v1/{vin}`},"Europe VIN Decode":{input:`vin`,label:`VIN Number`,exampleValue:`WBAFR7C57BC603689`,endpoint:`/europe-vin-decoder/v1/{vin}`},"License Plate OCR":{input:`plate`,label:`License Plate`,exampleValue:`ABC1234`,endpoint:`/ocr/license-plate/{plate}`},"Market Value by VIN":{input:`vin`,label:`VIN Number`,exampleValue:`1HGBH41JXMN109186`,endpoint:`/market-value/v2/{vin}`},"Premium VIN Decode":{input:`vin`,label:`VIN Number`,exampleValue:`1HGBH41JXMN109186`,endpoint:`/vin-decoder/premium/v1/{vin}`},"Sales History":{input:`vin`,label:`VIN Number`,exampleValue:`1G1ZT51806F209019`,endpoint:`/sales-history/v1/{vin}`},"Title Check":{input:`vin`,label:`VIN Number`,exampleValue:`1HGBH41JXMN109186`,endpoint:`/title-check/v1/{vin}`},"UK Registration Decode":{input:`plate`,label:`UK Registration`,exampleValue:`AB12CDE`,endpoint:`/uk-registration/v1/{plate}`},"US Plate Decode":{input:`plate`,label:`License Plate`,exampleValue:`ABC-1234`,endpoint:`/us-plate/v2/{plate}`},"US Truck Plate Decode":{input:`plate`,label:`Truck Plate`,exampleValue:`TK12345`,endpoint:`/us-truck-plate/v1/{plate}`},"Vehicle Maintenance by VIN":{input:`vin`,label:`VIN Number`,exampleValue:`1HGBH41JXMN109186`,endpoint:`/maintenance/v3/{vin}`},"Vehicle Recalls":{input:`vin`,label:`VIN Number`,exampleValue:`1HGBH41JXMN109186`,endpoint:`/recalls/v1/{vin}`},"Vehicle Repair by VIN":{input:`vin`,label:`VIN Number`,exampleValue:`1HGBH41JXMN109186`,endpoint:`/repair/v1/{vin}`},"Vehicle Warranty":{input:`vin`,label:`VIN Number`,exampleValue:`1HGBH41JXMN109186`,endpoint:`/warranty/v1/{vin}`},"VIN OCR":{input:`vin`,label:`VIN (from image)`,exampleValue:`1HGBH41JXMN109186`,endpoint:`/ocr/vin/{vin}`},"VIN Suggestion":{input:`vin`,label:`Partial VIN`,exampleValue:`1HGBH4`,endpoint:`/vin-suggestion/v1/{vin}`},"YMM Specifications":{input:`ymm`,label:`Year / Make / Model`,exampleValue:`2021/Honda/Civic`,endpoint:`/ymm-specs/v1/{year}/{make}/{model}`}},Ze={"Basic VIN Decode":{status:`success`,data:{vin:`1HGBH41JXMN109186`,year:2021,make:`Honda`,model:`Civic`,trim:`EX`,engine:`1.5L Turbocharged I4`,transmission:`CVT`,drivetrain:`FWD`,fuel_type:`Gasoline`,body_style:`Sedan`,doors:4,country:`United States`}},default:{status:`success`,data:{result:`Sample response data returned`,api:`Vehicle Databases API`,message:`Sign up to get real API responses with your free 15 credits.`}}},Qe=()=>{let[e,t]=(0,x.useState)(!1),[n,r]=(0,x.useState)(`Basic VIN Decode`),[i,a]=(0,x.useState)(`1HGBH41JXMN109186`),[o,s]=(0,x.useState)(!1),[c,l]=(0,x.useState)(Ze[`Basic VIN Decode`]),u=(0,x.useRef)(null);(0,x.useEffect)(()=>{function e(e){u.current&&!u.current.contains(e.target)&&t(!1)}return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let ee=e=>{r(e),t(!1),a(Xe[e]?.exampleValue??``),l(null)},te=async()=>{s(!0),l(null),await new Promise(e=>setTimeout(e,900)),l(Ze[n]??Ze.default),s(!1)},ne=Xe[n];return(0,b.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col md:flex-row md:items-center justify-between gap-6`,children:[(0,b.jsx)(`p`,{className:`font-aileron font-semibold text-lg text-white/70 max-w-sm`,children:`Select an API from the dropdown menu to begin testing:`}),(0,b.jsxs)(`div`,{className:`relative`,ref:u,style:{minWidth:280},children:[(0,b.jsxs)(`button`,{type:`button`,onClick:()=>t(e=>!e),className:`flex items-center gap-3 px-6 py-3 rounded-2xl w-full text-left transition-all border border-white/[0.08] bg-white/[0.03] hover:border-brand-primary/50 group shadow-lg`,children:[(0,b.jsx)(`span`,{className:`font-aileron font-bold text-base text-white flex-1 truncate`,children:n}),(0,b.jsx)(`div`,{className:m(`transition-transform duration-300`,e?`rotate-180`:``),children:(0,b.jsx)(ue,{size:20,className:`text-neutral-500 group-hover:text-white`})})]}),(0,b.jsx)(_e,{children:e&&(0,b.jsx)(Se.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},className:`absolute top-full left-0 right-0 mt-3 rounded-2xl overflow-hidden z-50 shadow-2xl bg-[#121212] border border-white/[0.12] backdrop-blur-xl`,children:(0,b.jsx)(`div`,{className:`max-h-72 overflow-y-auto scrollbar-thin p-1`,children:Ye.map(e=>(0,b.jsx)(`button`,{type:`button`,onClick:()=>ee(e),className:m(`w-full text-left px-5 py-3 font-aileron font-semibold text-sm transition-all rounded-xl`,e===n?`bg-brand-primary/10 text-brand-primary`:`text-neutral-400 hover:bg-white/[0.05] hover:text-white`),children:e},e))})})})]})]}),(0,b.jsx)(Me,{className:`opacity-10`}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,b.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,b.jsx)(`span`,{className:`font-aileron text-xs font-bold uppercase tracking-[0.2em] text-neutral-500`,children:`Endpoint`}),(0,b.jsxs)(`div`,{className:`flex items-center gap-3 px-5 py-3 rounded-2xl font-geist text-sm border border-white/[0.08] bg-white/[0.03]`,children:[(0,b.jsx)(`span`,{className:`text-brand-primary font-bold`,children:`GET`}),(0,b.jsx)(`span`,{className:`text-white/70`,children:`https://api.vehicledatabases.com`}),(0,b.jsx)(`span`,{className:`text-white`,children:ne?.endpoint})]})]}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,b.jsx)(`label`,{className:`font-aileron text-xs font-bold uppercase tracking-[0.2em] text-neutral-500`,children:ne?.label??`Input`}),(0,b.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-4`,children:[(0,b.jsx)(`input`,{type:`text`,value:i,onChange:e=>a(e.target.value),placeholder:ne?.exampleValue,className:`flex-1 px-5 py-3 rounded-2xl font-geist text-sm text-white outline-none transition-all placeholder:text-neutral-600 border border-white/[0.08] bg-white/[0.03] focus:border-brand-primary/40 focus:bg-white/[0.05]`}),(0,b.jsxs)(`button`,{type:`button`,onClick:te,disabled:o||!i.trim(),className:`flex items-center justify-center gap-3 px-8 py-3 rounded-2xl font-aileron font-bold text-sm text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-30 disabled:cursor-not-allowed group`,style:{background:`linear-gradient(90deg, #F59120 0%, #9747FF 100%)`},children:[o?(0,b.jsx)(d,{size:18,className:`animate-spin`}):(0,b.jsx)(oe,{size:18,className:`fill-current transition-transform group-hover:scale-110`}),o?`Testing...`:`Test API`]})]})]}),(0,b.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,b.jsx)(`span`,{className:`font-aileron text-xs font-bold uppercase tracking-[0.2em] text-neutral-500`,children:`Response`}),(0,b.jsx)(`div`,{className:`rounded-[24px] min-h-[200px] overflow-hidden`,children:o?(0,b.jsxs)(`div`,{className:`flex flex-col items-center justify-center min-h-[200px] gap-4 rounded-3xl border border-white/[0.08] bg-white/[0.03]`,children:[(0,b.jsx)(d,{size:32,className:`animate-spin text-brand-primary`}),(0,b.jsx)(`span`,{className:`text-neutral-500 font-aileron font-semibold`,children:`Fetching response…`})]}):c?(0,b.jsx)(Ce,{code:JSON.stringify(c,null,2),variant:`default`,minWidth:`100%`,maxWidth:`100%`,maxHeight:`400px`}):(0,b.jsx)(`div`,{className:`flex items-center justify-center min-h-[200px] rounded-3xl border border-dashed border-white/[0.1] bg-white/[0.01]`,children:(0,b.jsxs)(`p`,{className:`text-neutral-500 font-aileron font-semibold text-center px-10 leading-relaxed`,children:[`Hit `,(0,b.jsx)(`span`,{className:`text-brand-primary px-1`,children:`Test API`}),` to see the live integration result.`]})})})]})]})]})},Be.__docgenInfo={description:``,methods:[],displayName:`Card`,composes:[`VariantProps`]},Ve.__docgenInfo={description:``,methods:[],displayName:`CardHeader`},y.__docgenInfo={description:``,methods:[],displayName:`CardTitle`},He.__docgenInfo={description:``,methods:[],displayName:`CardDescription`},Ue.__docgenInfo={description:``,methods:[],displayName:`CardContent`},We.__docgenInfo={description:``,methods:[],displayName:`CardFooter`},Ge.__docgenInfo={description:``,methods:[],displayName:`Cards`,props:{className:{required:!1,tsType:{name:`string`},description:``},variant:{required:!0,tsType:{name:`union`,raw:`| "h3Body"
| "iconBodyInline"
| "iconBodyNormal"
| "WithFeaturedImage"
| "h3BodyRedirect"
| "iconH3BodyCTA"
| "iconBodyProgressBody"
| "logoBodyDividerBody"
| "bodyOnly"
| "h3BodyListsBodyCTA"
| "twoColumnH3BodyListsBodyImage"
| "iconHeadingInline"
| "headingAndImageStack"
| "testimonial"
| "testimonialSpecial"
| "apiTestCard"
| "technical"
| "queryForm"
| "borderlessCardWithIcon"
| "IconH3InlineAndBody"
| "SlidingCards"
| "H3BodyLinkText"
| "RelatedAPI"
| "TwoColumnsLists"
| "HeadingAndBodyUnderLists"
| "VideoCard"
| "HowItWorkMain"
| "DownloadApp"
| "HeadingBodyImageCTAStack"
| "CardGrid"`,elements:[{name:`literal`,value:`"h3Body"`},{name:`literal`,value:`"iconBodyInline"`},{name:`literal`,value:`"iconBodyNormal"`},{name:`literal`,value:`"WithFeaturedImage"`},{name:`literal`,value:`"h3BodyRedirect"`},{name:`literal`,value:`"iconH3BodyCTA"`},{name:`literal`,value:`"iconBodyProgressBody"`},{name:`literal`,value:`"logoBodyDividerBody"`},{name:`literal`,value:`"bodyOnly"`},{name:`literal`,value:`"h3BodyListsBodyCTA"`},{name:`literal`,value:`"twoColumnH3BodyListsBodyImage"`},{name:`literal`,value:`"iconHeadingInline"`},{name:`literal`,value:`"headingAndImageStack"`},{name:`literal`,value:`"testimonial"`},{name:`literal`,value:`"testimonialSpecial"`},{name:`literal`,value:`"apiTestCard"`},{name:`literal`,value:`"technical"`},{name:`literal`,value:`"queryForm"`},{name:`literal`,value:`"borderlessCardWithIcon"`},{name:`literal`,value:`"IconH3InlineAndBody"`},{name:`literal`,value:`"SlidingCards"`},{name:`literal`,value:`"H3BodyLinkText"`},{name:`literal`,value:`"RelatedAPI"`},{name:`literal`,value:`"TwoColumnsLists"`},{name:`literal`,value:`"HeadingAndBodyUnderLists"`},{name:`literal`,value:`"VideoCard"`},{name:`literal`,value:`"HowItWorkMain"`},{name:`literal`,value:`"DownloadApp"`},{name:`literal`,value:`"HeadingBodyImageCTAStack"`},{name:`literal`,value:`"CardGrid"`}]},description:``},hoverable:{required:!1,tsType:{name:`boolean`},description:``}}}})),et,tt,T,E,D,O,k,A,j,M,nt,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,rt;e((()=>{$e(),et={title:`UI/Components/Cards`,component:Ge,parameters:{layout:`centered`},tags:[`autodocs`]},tt=`<p>Unlock comprehensive vehicle history and detailed specifications with our industry-leading API solutions.</p>`,T={args:{variant:`h3Body`,heading:`Full History Reports`,richText:tt}},E={args:{variant:`iconBodyInline`,icon:`Database`,richText:tt}},D={args:{variant:`iconBodyNormal`,icon:`ShieldCheck`,richText:tt}},O={args:{variant:`WithFeaturedImage`,heading:`Technical Documentation`,image:`https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800`,richText:tt}},k={args:{variant:`h3BodyRedirect`,heading:`View API Reference`,richText:`<p>Explore our documentation and start integrating in minutes with our developer-friendly tools.</p>`,link:`#`}},A={args:{variant:`iconH3BodyCTA`,icon:`Zap`,heading:`Instant Lookup`,richText:`<p>Get real-time data for any VIN with our high-performance lookup engine.</p>`,cta:{label:`Get Started`,href:`#`,variant:`primary`}}},j={args:{variant:`iconBodyProgressBody`,icon:`Activity`,richText:`<p>Processing your vehicle data request. This usually takes just a few seconds.</p>`,progress:75,bottomText:`<p>Estimated time remaining: 2 seconds</p>`}},M={args:{variant:`logoBodyDividerBody`,logo:`https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg`,richText:`<p>Official data provider for authorized BMW service centers and dealerships nationwide.</p>`,bottomText:`<p>Verified Partner Since 2021</p>`}},nt={args:{variant:`bodyOnly`,richText:`<p><strong>Pro Tip:</strong> Use the sandbox environment to test your integration before going live with production data.</p>`}},N={args:{variant:`h3BodyListsBodyCTA`,heading:`Premium Enterprise Plan`,richText:`<p>Everything you need to scale your vehicle data operations globally.</p>`,listItems:[{text:`Unlimited daily lookups`},{text:`Priority support 24/7`},{text:`Custom API endpoints`},{text:`Whitelabel dashboard`}],cta:{label:`Contact Sales`,href:`#`}}},P={args:{variant:`twoColumnH3BodyListsBodyImage`,heading:`Advanced VIN Decoding`,richText:`<p>Our advanced decoder breaks down every complex aspect of a vehicle's history, from factory options to service records.</p>`,listItems:[{text:`Standard Equipment Data`},{text:`Optional Features List`},{text:`Recall & Safety Alerts`},{text:`Odometer History Check`},{text:`Auction Sales Records`},{text:`Market Value Estimates`}],image:`https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800`}},F={args:{variant:`headingAndImageStack`,heading:`Vehicle Intelligence API`,image:`https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800`}},I={args:{variant:`borderlessCardWithIcon`,icon:`Layers`,heading:`API Testing Platform for Everyone`,richText:`Easily test APIs, receive JSON responses, and visualize them in a user-friendly interface. Our platform caters to both developers and non-technical users.`}},L={args:{variant:`IconH3InlineAndBody`,icon:`DatabaseZap`,heading:`Fast Response Times`,richText:`Easily manage your active plans and subscriptions through our intuitive interface. Upgrade, downgrade, or modify your plan with just a few clicks.`}},R={args:{variant:`iconHeadingInline`,icon:`ShieldAlert`,heading:`Safety Recalls`,richText:`<p>Stay informed about any safety concerns or manufacturer recalls affecting this vehicle model.</p>`}},z={args:{variant:`testimonial`,title:`Easy to use, Excellent service`,richText:`<p>Great service, their apis have allowed my business to quickly get up and running, with minimal development costs. Someone is also always at hand whether it be Whatsapp or over the phone to help with any issues. Would 100% recommend</p>`,author:`Lionel Yarbol`,role:`CEO at Yarbol Logistics`,accentColor:`#F9BD24`}},B={args:{variant:`testimonialSpecial`,richText:`Vehicle Databases has been an outstanding partner for our platform. Their API is fast, reliable, and delivers consistently high-quality vehicle data, which is critical for the accuracy and trust our users expect.`,author:`Todd Matherne`,role:`Founder, VinDetecta`,avatar:`/images/vindetecta-logo.svg`}},V={args:{variant:`apiTestCard`}},H={args:{variant:`technical`,icon:`Code2`,heading:`Vehicle Model Lookup`,subheading:`GET /v1/vin-decode/{vin}`,codeSnippet:`{
  "status": "success",
  "data": {
    "make": "BMW",
    "model": "328i",
    "year": 2015
  }
}`,subheading2:`Response Schema Details`,tableData:[{field:`make`,type:`string`,description:`The manufacturer name`},{field:`model`,type:`string`,description:`The vehicle model name`},{field:`year`,type:`number`,description:`The manufacturing year`}],richText:`<p>For full schema details, please refer to the core documentation.</p>`}},U={args:{variant:`queryForm`,subheading:`Get in touch`,heading:`Have more questions?`,formLabel:`Send in a query`,submitLabel:`Submit Query`,description:`Book a demo to connect directly with our team and explore how we can best serve your needs.`,media:{type:`image`,url:`https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`,alt:`Premium sports car`},formFields:[{name:`firstName`,label:`First Name`,placeholder:`First Name`,type:`text`,fullWidth:!0},{name:`email`,label:`Email Address`,placeholder:`Email Address`,type:`email`},{name:`phone`,label:`Contact Number`,placeholder:`Contact Number`,type:`tel`},{name:`message`,label:`Message`,placeholder:`Message`,type:`textarea`,fullWidth:!0}],sidebarCtas:[{label:`Book a Demo`,href:`#`,variant:`secondary`,icon:`Calendar`},{label:`Chat us on Whatsapp`,href:`#`,variant:`whatsapp`,icon:`MessageSquare`}]}},W={args:{variant:`SlidingCards`,items:[{icon:`Zap`,title:`Fast Response Times`,description:`Easily manage your active plans and subscriptions through our intuitive interface. Upgrade, downgrade, or modify your plan with just a few clicks.`},{icon:`Layers`,title:`Scalability`,description:`Our infrastructure adapts effortlessly to changing demands, maintaining top performance and reliability.`},{icon:`ShieldCheck`,title:`99.99% Uptime`,description:`Data is sourced from trusted manufacturer and industry datasets.`},{icon:`Database`,title:`Unmatched Data`,description:`Optimized for quick lookups and no unpredictable slowdowns or bottlenecks.`},{icon:`Layout`,title:`Easy Integration`,description:`Integration takes less than 10 minutes. Zero technical knowledge required.`}]}},G={args:{variant:`H3BodyLinkText`,heading:`{orange:VIN Decoding} APIs`,richText:`Fetch full vehicle information by VIN or YMM to get the complete specs, engine information, color options, packages, and more for any car.`,linkText:`Learn more`,linkHref:`#`}},K={args:{variant:`RelatedAPI`,heading:`Related APIs You Might Be Interested In:`,apis:[{label:`Motorcycle Decoder API`,href:`#`},{label:`Vehicle Specifications API`,href:`#`},{label:`Electric Vehicle Specifications API`,href:`#`},{label:`Explore More APIs`,href:`#`}]}},q={args:{variant:`TwoColumnsLists`,heading:`VIN Decoder APIs are widely used in:`,listLeft:[{text:`Auto dealerships`,icon:`BadgeCheck`},{text:`Insurance companies`,icon:`BadgeCheck`},{text:`Vehicle marketplaces`,icon:`BadgeCheck`},{text:`Fleet and rental services`,icon:`BadgeCheck`}],listRight:[{text:`Government and compliance platforms`,icon:`BadgeCheck`},{text:`Aftermarket parts sellers`,icon:`BadgeCheck`},{text:`Mobility and transportation startups`,icon:`BadgeCheck`}]}},J={args:{variant:`HeadingAndBodyUnderLists`,heading:`The Europe VIN Decoding API returns:`,lists:[[{text:`Make`},{text:`Model`},{text:`Model year`},{text:`Body style`}],[{text:`Vehicle class`},{text:`Vehicle type`},{text:`Manufacturer`},{text:`Country`}],[{text:`Region`},{text:`Vehicle specifications`},{text:`Standard equipment`},{text:`Optional equipment`}]],footerHeading:`Europe VIN Decoding API`,footerRichText:`
      <p>The US VIN Decoder API is designed for vehicles manufactured for or sold in the United States and Canada. It supports standard 17-character VINs and covers vehicles from 1980 to the present.</p>
      <p>European vehicles follow different standards than US vehicles, and decoding them properly requires a different approach. The Europe VIN Decoding API is designed specifically for European-market vehicles and supports VINs from 1980 to the present.</p>
      <p>It is commonly used by businesses handling European registrations, imports, and cross-border vehicle data.</p>
      <p>Using a Europe-specific VIN API helps avoid missing or incorrect data that often occurs when European VINs are decoded using US-only systems.</p>
    `}},Y={args:{variant:`VideoCard`,thumbnail:`/images/video-thumbnail.jpg`,heading:`Detailed Vehicle Specifications`,subheading:`in seconds with VIN Decoder API`,videoHref:`#`,description:`The Vehicle Databases VIN Decoder API allows businesses or individuals to identify a vehicle’s make, model, year, engine, and key specifications using a standard 17-digit VIN. It’s fast, reliable, and designed to work across global markets, making it easy to power your products (e.g., websites, apps, and internal systems) with trusted vehicle data. Our VIN Decoder API translates a 17-digit VIN into accurate vehicle information, built for consistency at scale.`}},X={args:{variant:`HowItWorkMain`,heading:`How`,subheading:`the VIN Decoder API works?`,description:`We offer different endpoints based on the region. Region-Specific Endpoints: US, Canada, and Europe—optimized for each market. We are actively working on adding support for other regions & improving our VIN decoding technology.`,ctas:[{label:`Get Started`,href:`#`,variant:`primary-gradient`},{label:`Read Docs`,href:`#`,variant:`secondary-border`}],steps:[{title:`Send VIN`,description:`via API request (Simple GET request).`},{title:`Receive JSON`,description:`with structured vehicle data.`},{title:`Integrate instantly`,description:`into your app, website, or internal system`}]}},Z={args:{variant:`DownloadApp`,heading:`Experience Our License Plate Decoding API Live in Action`,body:`The VIN decoder and vehicle History app uses the License plate decoder API from Vehicle Databases to provide License plate decoding and vehicle history reports to vehicle shoppers, sellers, and dealerships with US license plates. Download the app from the App store and Play store to see how it works.`,media:{type:`image`,src:`/images/video-thumbnail.jpg`},googlePlayUrl:`#`,ukGooglePlayUrl:`#`,ukAppStoreUrl:`#`,appStoreUrl:`#`,secondaryText:`For UK users Smart Car Check App provides this functionality. Download the app from the App store and Play store.`}},Q={args:{variant:`HeadingBodyImageCTAStack`,heading:`Sales listing history API`,body:`If you want to get access to the previous sales history of any vehicle across the UK, USA and Canada, we've got you covered. Signing up for our sales history API will provide you with sales listing data. You can easily look up sales history with a VIN.`,image:`/images/video-thumbnail.jpg`,cta:{label:`Learn about Sales Listing History API`,href:`#`}}},$={args:{variant:`CardGrid`,items:[{title:`VIN Decoding APIs`,description:`Fetch full vehicle information by VIN or YMM to get the complete specs, engine information, color options, packages, and more for any car.`,href:`#`},{title:`OCR APIs`,description:`OCR APIs capture VINs & License plates and converts to text in seconds.`,href:`#`},{title:`License Plate Decoding APIs`,description:`Decode the US license plate into VIN, then break down the vehicle information attached to it.`,href:`#`},{title:`Market Value APIs`,description:`Fetch the vehicle's market value estimation for private parties, trade-ins, or dealers by VIN.`,href:`#`},{title:`Maintenance API`,description:`Get the recommended maintenance schedule and details by VIN or year, make, and model.`,href:`#`},{title:`Repair API`,description:`Get full information on the vehicle's warranty records by VIN.`,href:`#`}]}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "h3Body",
    heading: "Full History Reports",
    richText: MOCK_TEXT
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "iconBodyInline",
    icon: "Database",
    richText: MOCK_TEXT
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "iconBodyNormal",
    icon: "ShieldCheck",
    richText: MOCK_TEXT
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "WithFeaturedImage",
    heading: "Technical Documentation",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    richText: MOCK_TEXT
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "h3BodyRedirect",
    heading: "View API Reference",
    richText: "<p>Explore our documentation and start integrating in minutes with our developer-friendly tools.</p>",
    link: "#"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "iconH3BodyCTA",
    icon: "Zap",
    heading: "Instant Lookup",
    richText: "<p>Get real-time data for any VIN with our high-performance lookup engine.</p>",
    cta: {
      label: "Get Started",
      href: "#",
      variant: "primary"
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "iconBodyProgressBody",
    icon: "Activity",
    richText: "<p>Processing your vehicle data request. This usually takes just a few seconds.</p>",
    progress: 75,
    bottomText: "<p>Estimated time remaining: 2 seconds</p>"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "logoBodyDividerBody",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    richText: "<p>Official data provider for authorized BMW service centers and dealerships nationwide.</p>",
    bottomText: "<p>Verified Partner Since 2021</p>"
  }
}`,...M.parameters?.docs?.source}}},nt.parameters={...nt.parameters,docs:{...nt.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "bodyOnly",
    richText: "<p><strong>Pro Tip:</strong> Use the sandbox environment to test your integration before going live with production data.</p>"
  }
}`,...nt.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "h3BodyListsBodyCTA",
    heading: "Premium Enterprise Plan",
    richText: "<p>Everything you need to scale your vehicle data operations globally.</p>",
    listItems: [{
      text: "Unlimited daily lookups"
    }, {
      text: "Priority support 24/7"
    }, {
      text: "Custom API endpoints"
    }, {
      text: "Whitelabel dashboard"
    }],
    cta: {
      label: "Contact Sales",
      href: "#"
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "twoColumnH3BodyListsBodyImage",
    heading: "Advanced VIN Decoding",
    richText: "<p>Our advanced decoder breaks down every complex aspect of a vehicle's history, from factory options to service records.</p>",
    listItems: [{
      text: "Standard Equipment Data"
    }, {
      text: "Optional Features List"
    }, {
      text: "Recall & Safety Alerts"
    }, {
      text: "Odometer History Check"
    }, {
      text: "Auction Sales Records"
    }, {
      text: "Market Value Estimates"
    }],
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "headingAndImageStack",
    heading: "Vehicle Intelligence API",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "borderlessCardWithIcon",
    icon: "Layers",
    heading: "API Testing Platform for Everyone",
    richText: "Easily test APIs, receive JSON responses, and visualize them in a user-friendly interface. Our platform caters to both developers and non-technical users."
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "IconH3InlineAndBody",
    icon: "DatabaseZap",
    heading: "Fast Response Times",
    richText: "Easily manage your active plans and subscriptions through our intuitive interface. Upgrade, downgrade, or modify your plan with just a few clicks."
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "iconHeadingInline",
    icon: "ShieldAlert",
    heading: "Safety Recalls",
    richText: "<p>Stay informed about any safety concerns or manufacturer recalls affecting this vehicle model.</p>"
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "testimonial",
    title: "Easy to use, Excellent service",
    richText: "<p>Great service, their apis have allowed my business to quickly get up and running, with minimal development costs. Someone is also always at hand whether it be Whatsapp or over the phone to help with any issues. Would 100% recommend</p>",
    author: "Lionel Yarbol",
    role: "CEO at Yarbol Logistics",
    accentColor: "#F9BD24"
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "testimonialSpecial",
    richText: "Vehicle Databases has been an outstanding partner for our platform. Their API is fast, reliable, and delivers consistently high-quality vehicle data, which is critical for the accuracy and trust our users expect.",
    author: "Todd Matherne",
    role: "Founder, VinDetecta",
    avatar: "/images/vindetecta-logo.svg"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "apiTestCard"
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "technical",
    icon: "Code2",
    heading: "Vehicle Model Lookup",
    subheading: "GET /v1/vin-decode/{vin}",
    codeSnippet: \`{
  "status": "success",
  "data": {
    "make": "BMW",
    "model": "328i",
    "year": 2015
  }
}\`,
    subheading2: "Response Schema Details",
    tableData: [{
      field: "make",
      type: "string",
      description: "The manufacturer name"
    }, {
      field: "model",
      type: "string",
      description: "The vehicle model name"
    }, {
      field: "year",
      type: "number",
      description: "The manufacturing year"
    }],
    richText: "<p>For full schema details, please refer to the core documentation.</p>"
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "queryForm",
    subheading: "Get in touch",
    heading: "Have more questions?",
    formLabel: "Send in a query",
    submitLabel: "Submit Query",
    description: "Book a demo to connect directly with our team and explore how we can best serve your needs.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Premium sports car"
    },
    formFields: [{
      name: "firstName",
      label: "First Name",
      placeholder: "First Name",
      type: "text",
      fullWidth: true
    }, {
      name: "email",
      label: "Email Address",
      placeholder: "Email Address",
      type: "email"
    }, {
      name: "phone",
      label: "Contact Number",
      placeholder: "Contact Number",
      type: "tel"
    }, {
      name: "message",
      label: "Message",
      placeholder: "Message",
      type: "textarea",
      fullWidth: true
    }],
    sidebarCtas: [{
      label: "Book a Demo",
      href: "#",
      variant: "secondary",
      icon: "Calendar"
    }, {
      label: "Chat us on Whatsapp",
      href: "#",
      variant: "whatsapp",
      icon: "MessageSquare"
    }]
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "SlidingCards",
    items: [{
      icon: "Zap",
      title: "Fast Response Times",
      description: "Easily manage your active plans and subscriptions through our intuitive interface. Upgrade, downgrade, or modify your plan with just a few clicks."
    }, {
      icon: "Layers",
      title: "Scalability",
      description: "Our infrastructure adapts effortlessly to changing demands, maintaining top performance and reliability."
    }, {
      icon: "ShieldCheck",
      title: "99.99% Uptime",
      description: "Data is sourced from trusted manufacturer and industry datasets."
    }, {
      icon: "Database",
      title: "Unmatched Data",
      description: "Optimized for quick lookups and no unpredictable slowdowns or bottlenecks."
    }, {
      icon: "Layout",
      title: "Easy Integration",
      description: "Integration takes less than 10 minutes. Zero technical knowledge required."
    }]
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "H3BodyLinkText",
    heading: "{orange:VIN Decoding} APIs",
    richText: "Fetch full vehicle information by VIN or YMM to get the complete specs, engine information, color options, packages, and more for any car.",
    linkText: "Learn more",
    linkHref: "#"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "RelatedAPI",
    heading: "Related APIs You Might Be Interested In:",
    apis: [{
      label: "Motorcycle Decoder API",
      href: "#"
    }, {
      label: "Vehicle Specifications API",
      href: "#"
    }, {
      label: "Electric Vehicle Specifications API",
      href: "#"
    }, {
      label: "Explore More APIs",
      href: "#"
    }]
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "TwoColumnsLists",
    heading: "VIN Decoder APIs are widely used in:",
    listLeft: [{
      text: "Auto dealerships",
      icon: "BadgeCheck"
    }, {
      text: "Insurance companies",
      icon: "BadgeCheck"
    }, {
      text: "Vehicle marketplaces",
      icon: "BadgeCheck"
    }, {
      text: "Fleet and rental services",
      icon: "BadgeCheck"
    }],
    listRight: [{
      text: "Government and compliance platforms",
      icon: "BadgeCheck"
    }, {
      text: "Aftermarket parts sellers",
      icon: "BadgeCheck"
    }, {
      text: "Mobility and transportation startups",
      icon: "BadgeCheck"
    }]
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "HeadingAndBodyUnderLists",
    heading: "The Europe VIN Decoding API returns:",
    lists: [[{
      text: "Make"
    }, {
      text: "Model"
    }, {
      text: "Model year"
    }, {
      text: "Body style"
    }], [{
      text: "Vehicle class"
    }, {
      text: "Vehicle type"
    }, {
      text: "Manufacturer"
    }, {
      text: "Country"
    }], [{
      text: "Region"
    }, {
      text: "Vehicle specifications"
    }, {
      text: "Standard equipment"
    }, {
      text: "Optional equipment"
    }]],
    footerHeading: "Europe VIN Decoding API",
    footerRichText: \`
      <p>The US VIN Decoder API is designed for vehicles manufactured for or sold in the United States and Canada. It supports standard 17-character VINs and covers vehicles from 1980 to the present.</p>
      <p>European vehicles follow different standards than US vehicles, and decoding them properly requires a different approach. The Europe VIN Decoding API is designed specifically for European-market vehicles and supports VINs from 1980 to the present.</p>
      <p>It is commonly used by businesses handling European registrations, imports, and cross-border vehicle data.</p>
      <p>Using a Europe-specific VIN API helps avoid missing or incorrect data that often occurs when European VINs are decoded using US-only systems.</p>
    \`
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "VideoCard",
    thumbnail: "/images/video-thumbnail.jpg",
    heading: "Detailed Vehicle Specifications",
    subheading: "in seconds with VIN Decoder API",
    videoHref: "#",
    description: "The Vehicle Databases VIN Decoder API allows businesses or individuals to identify a vehicle’s make, model, year, engine, and key specifications using a standard 17-digit VIN. It’s fast, reliable, and designed to work across global markets, making it easy to power your products (e.g., websites, apps, and internal systems) with trusted vehicle data. Our VIN Decoder API translates a 17-digit VIN into accurate vehicle information, built for consistency at scale."
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "HowItWorkMain",
    heading: "How",
    subheading: "the VIN Decoder API works?",
    description: "We offer different endpoints based on the region. Region-Specific Endpoints: US, Canada, and Europe—optimized for each market. We are actively working on adding support for other regions & improving our VIN decoding technology.",
    ctas: [{
      label: "Get Started",
      href: "#",
      variant: "primary-gradient"
    }, {
      label: "Read Docs",
      href: "#",
      variant: "secondary-border"
    }],
    steps: [{
      title: "Send VIN",
      description: "via API request (Simple GET request)."
    }, {
      title: "Receive JSON",
      description: "with structured vehicle data."
    }, {
      title: "Integrate instantly",
      description: "into your app, website, or internal system"
    }]
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "DownloadApp",
    heading: "Experience Our License Plate Decoding API Live in Action",
    body: "The VIN decoder and vehicle History app uses the License plate decoder API from Vehicle Databases to provide License plate decoding and vehicle history reports to vehicle shoppers, sellers, and dealerships with US license plates. Download the app from the App store and Play store to see how it works.",
    media: {
      type: "image",
      src: "/images/video-thumbnail.jpg"
    },
    googlePlayUrl: "#",
    ukGooglePlayUrl: "#",
    ukAppStoreUrl: "#",
    appStoreUrl: "#",
    secondaryText: "For UK users Smart Car Check App provides this functionality. Download the app from the App store and Play store."
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "HeadingBodyImageCTAStack",
    heading: "Sales listing history API",
    body: "If you want to get access to the previous sales history of any vehicle across the UK, USA and Canada, we've got you covered. Signing up for our sales history API will provide you with sales listing data. You can easily look up sales history with a VIN.",
    image: "/images/video-thumbnail.jpg",
    cta: {
      label: "Learn about Sales Listing History API",
      href: "#"
    }
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "CardGrid",
    items: [{
      title: "VIN Decoding APIs",
      description: "Fetch full vehicle information by VIN or YMM to get the complete specs, engine information, color options, packages, and more for any car.",
      href: "#"
    }, {
      title: "OCR APIs",
      description: "OCR APIs capture VINs & License plates and converts to text in seconds.",
      href: "#"
    }, {
      title: "License Plate Decoding APIs",
      description: "Decode the US license plate into VIN, then break down the vehicle information attached to it.",
      href: "#"
    }, {
      title: "Market Value APIs",
      description: "Fetch the vehicle's market value estimation for private parties, trade-ins, or dealers by VIN.",
      href: "#"
    }, {
      title: "Maintenance API",
      description: "Get the recommended maintenance schedule and details by VIN or year, make, and model.",
      href: "#"
    }, {
      title: "Repair API",
      description: "Get full information on the vehicle's warranty records by VIN.",
      href: "#"
    }]
  }
}`,...$.parameters?.docs?.source}}},rt=`H3Body.IconBodyInline.IconBodyNormal.WithFeaturedImage.H3BodyRedirect.IconH3BodyCTA.IconBodyProgressBody.LogoBodyDividerBody.BodyOnly.H3BodyListsBodyCTA.TwoColumnH3BodyListsBodyImage.HeadingAndImageStack.BorderlessCardWithIcon.IconH3InlineAndBody.IconHeadingInline.Testimonial.TestimonialSpecial.ApiTestCard.Technical.QueryForm.SlidingCards.H3BodyLinkText.RelatedAPI.TwoColumnsLists.HeadingAndBodyUnderLists.VideoCard.HowItWorkMain.DownloadApp.HeadingBodyImageCTAStack.CardGrid`.split(`.`)}))();export{V as ApiTestCard,nt as BodyOnly,I as BorderlessCardWithIcon,$ as CardGrid,Z as DownloadApp,T as H3Body,G as H3BodyLinkText,N as H3BodyListsBodyCTA,k as H3BodyRedirect,J as HeadingAndBodyUnderLists,F as HeadingAndImageStack,Q as HeadingBodyImageCTAStack,X as HowItWorkMain,E as IconBodyInline,D as IconBodyNormal,j as IconBodyProgressBody,A as IconH3BodyCTA,L as IconH3InlineAndBody,R as IconHeadingInline,M as LogoBodyDividerBody,U as QueryForm,K as RelatedAPI,W as SlidingCards,H as Technical,z as Testimonial,B as TestimonialSpecial,P as TwoColumnH3BodyListsBodyImage,q as TwoColumnsLists,Y as VideoCard,O as WithFeaturedImage,rt as __namedExportsOrder,et as default};