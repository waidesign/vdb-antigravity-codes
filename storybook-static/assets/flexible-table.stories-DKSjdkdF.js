import{n as e}from"./chunk-Bj-mKKzh.js";import{C as t}from"./iframe-7vMKm1ug.js";import{n,r,t as i}from"./flexible-table-CJ5nNs5m.js";var a,o,s,c,l,u,d,f;e((()=>{a=t(),r(),o={title:`UI/FlexibleTable`,component:i,parameters:{layout:`padded`,docs:{description:{component:"A premium dark-themed comparison table inspired by the Figma design. Features a rounded pill header row, alternating stripe rows with correct border colours, and a `TableXIcon` helper for marking unavailable features."}}},tags:[`autodocs`]},s=[{key:`feature`,label:`Feature`},{key:`basic`,label:`Basic VIN Decode API`,render:e=>e.basic===`X`?(0,a.jsx)(n,{}):(0,a.jsx)(`span`,{children:e.basic})},{key:`premium`,label:`Premium VIN Decode API`,render:e=>(0,a.jsx)(`span`,{children:e.premium})}],c=[{feature:`Core Vehicle ID`,basic:`Make, Model, Year, Trim, Body Type`,premium:`Everything in Basic`},{feature:`Engine & Drivetrain`,basic:`Engine, Transmission, Fuel Type, Drive Type`,premium:`Full powertrain specs`},{feature:`Technical Specs`,basic:`Basic dimensions`,premium:`Complete specs, weights, suspension, interiors`},{feature:`Pricing Data`,basic:`X`,premium:`MSRP, invoice, total price`},{feature:`Fuel & Efficiency`,basic:`X`,premium:`City / Highway / Combined, Green scores`},{feature:`EV / Hybrid Data`,basic:`X`,premium:`Battery, range, powertrain`},{feature:`Safety Ratings`,basic:`X`,premium:`NHTSA & IIHS`},{feature:`Options & Packages`,basic:`X`,premium:`OEM options, packages, colors`},{feature:`Warranty Info`,basic:`X`,premium:`Manufacturer coverage`},{feature:`Regions`,basic:`US, Canada`,premium:`US, Canada, Europe`},{feature:`VIN Coverage`,basic:`1980–Present`,premium:`1980–Present`}],l={args:{columns:s,data:c}},u={args:{columns:s,data:[],isLoading:!0}},d={args:{columns:s,data:[],emptyMessage:`No data available for this API.`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: vinData
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    isLoading: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: [],
    emptyMessage: "No data available for this API."
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Loading`,`Empty`]}))();export{l as Default,d as Empty,u as Loading,f as __namedExportsOrder,o as default};