import{n as e}from"./chunk-Bj-mKKzh.js";import{C as t}from"./iframe-7vMKm1ug.js";function n({valuePrimary:e,valueGradient:t,label:n}){return(0,i.jsxs)(`div`,{className:`flex flex-col items-center gap-2 px-10 py-10 flex-1 relative overflow-hidden group`,children:[(0,i.jsxs)(`div`,{className:`flex items-center gap-0.5 transition-transform duration-300 group-hover:scale-110`,children:[(0,i.jsx)(`span`,{className:`font-aileron font-semibold text-white`,style:{fontSize:40,lineHeight:`1.2em`},children:e}),(0,i.jsx)(`span`,{className:`font-aileron font-semibold`,style:{fontSize:40,lineHeight:`1.2em`,background:`linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,backgroundClip:`text`},children:t})]}),(0,i.jsx)(`p`,{className:`font-geist text-center transition-colors duration-300 group-hover:text-white`,style:{fontSize:16,lineHeight:`1.5em`,color:`#A9ADB5`},children:n})]})}function r({stats:e=a,className:t}){return(0,i.jsx)(`section`,{className:`w-full ${t}`,style:{padding:`80px 0`,background:`#000000`},children:(0,i.jsx)(`div`,{className:`section-content px-10 lg:px-20 flex flex-col gap-0`,children:(0,i.jsx)(`div`,{className:`w-full flex items-center rounded-3xl overflow-hidden bg-[#16181A]/50`,style:{border:`1px solid #8C929D`},children:e.map((t,r)=>(0,i.jsxs)(`div`,{className:`flex-1 flex items-center h-full`,children:[(0,i.jsx)(n,{...t}),r<e.length-1&&(0,i.jsx)(`div`,{className:`w-px self-stretch my-8`,style:{background:`#8C929D`,opacity:.3}})]},t.label))})})})}var i,a,o=e((()=>{i=t(),a=[{valuePrimary:`50`,valueGradient:`M+`,label:`VINs decoded`},{valuePrimary:`1,`,valueGradient:`200+`,label:`Companies using API`},{valuePrimary:`99.`,valueGradient:`9%`,label:`API uptime SLA`},{valuePrimary:`<200`,valueGradient:`ms`,label:`Avg. response time`}],r.__docgenInfo={description:``,methods:[],displayName:`FactsSection`,props:{stats:{required:!1,tsType:{name:`Array`,elements:[{name:`StatItemProps`}],raw:`StatItemProps[]`},description:``,defaultValue:{value:`[
    { valuePrimary: "50", valueGradient: "M+", label: "VINs decoded" },
    { valuePrimary: "1,", valueGradient: "200+", label: "Companies using API" },
    { valuePrimary: "99.", valueGradient: "9%", label: "API uptime SLA" },
    { valuePrimary: "<200", valueGradient: "ms", label: "Avg. response time" },
]`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),s,c,l,u,d;e((()=>{o(),s={title:`Components/Home/FactsSection`,component:r,parameters:{layout:`fullscreen`,backgrounds:{default:`dark`}}},c={args:{}},l={args:{stats:[{valuePrimary:`100`,valueGradient:`B+`,label:`API Requests Yearly`},{valuePrimary:`250`,valueGradient:`ms`,label:`P99 Global Latency`},{valuePrimary:`4.9`,valueGradient:`/5`,label:`Developer Satisfaction`},{valuePrimary:`24/`,valueGradient:`7`,label:`Priority Support`}]}},u={args:{stats:[{valuePrimary:`100`,valueGradient:`%`,label:`Data Integrity Guarantee`}]}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    stats: [{
      valuePrimary: "100",
      valueGradient: "B+",
      label: "API Requests Yearly"
    }, {
      valuePrimary: "250",
      valueGradient: "ms",
      label: "P99 Global Latency"
    }, {
      valuePrimary: "4.9",
      valueGradient: "/5",
      label: "Developer Satisfaction"
    }, {
      valuePrimary: "24/",
      valueGradient: "7",
      label: "Priority Support"
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    stats: [{
      valuePrimary: "100",
      valueGradient: "%",
      label: "Data Integrity Guarantee"
    }]
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`CustomContent`,`SingleStat`]}))();export{l as CustomContent,c as Default,u as SingleStat,d as __namedExportsOrder,s as default};