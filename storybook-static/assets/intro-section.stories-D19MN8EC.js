import{n as e}from"./chunk-Bj-mKKzh.js";import{C as t}from"./iframe-7vMKm1ug.js";import{n,t as r}from"./utils-UR68KzPb.js";import{r as i,s as a}from"./code-snippet-ByTUTbFG.js";import{n as o,t as s}from"./heading-renderer-DEQDksbS.js";import{n as c,t as l}from"./cta-button-group-CutcTu-F.js";import{n as u,t as d}from"./stat-cards-grid-BrXcCLAy.js";import{n as f,t as p}from"./feature-list-BCeX8cY6.js";import{n as m,t as h}from"./feature-card-list-Lb4g3SNW.js";import{n as g,t as _}from"./logo-grid-D6KWtNOs.js";import{n as v,t as y}from"./numbered-bullet-list-C1MFksAC.js";import{n as b,t as x}from"./visual-content-CilCZH2Q.js";function S(e){let{variant:t,theme:n=`dark`,spacingSize:i=`standard`,heading:o,headingHighlight:c,subheading:u,richText:f,secondaryRichText:m,features:g,ctas:v,media:b,sectionTwoHeading:S,tertiaryRichText:w,logos:T,quaternaryRichText:E,quinquenaryRichText:D,listHeading:O,listStyle:k=`numbers`,listItems:A}=e,j=n===`dark`,M={standard:`py-24`,large:`py-32`,compact:`py-16`},N=M[i]||M.standard,P={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,staggerChildren:.1}}},F={hidden:{opacity:0,y:10},visible:{opacity:1,y:0}};if(t===`heading-top-split`)return(0,C.jsx)(`section`,{className:r(`relative w-full overflow-hidden`,j?`bg-[#0B0B0B]`:`bg-white`,N),children:(0,C.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-12 relative z-10`,children:(0,C.jsxs)(a.div,{initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:P,className:`flex flex-col gap-12 w-full`,children:[(0,C.jsxs)(`div`,{className:`flex flex-col gap-6 max-w-4xl`,children:[u&&(0,C.jsx)(a.span,{variants:F,className:`uppercase tracking-widest text-sm font-semibold text-[#F59120]`,children:u}),(0,C.jsx)(a.div,{variants:F,children:(0,C.jsx)(s,{text:o,highlight:c,theme:n,className:`text-4xl lg:text-5xl`})}),(0,C.jsx)(a.div,{variants:F,className:r(`font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none`,!j&&`prose-neutral text-neutral-600`),dangerouslySetInnerHTML:{__html:f}})]}),(0,C.jsxs)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`,children:[(0,C.jsx)(a.div,{variants:F,className:`w-full`,children:(0,C.jsx)(x,{media:b,variant:t,theme:n})}),(0,C.jsxs)(a.div,{variants:F,className:`flex flex-col gap-8`,children:[m&&(0,C.jsx)(`div`,{className:r(`font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none`,!j&&`prose-neutral text-neutral-600`),dangerouslySetInnerHTML:{__html:m}}),v&&(0,C.jsx)(l,{ctas:v,theme:n})]})]})]})})});if(t===`mixed-content`)return(0,C.jsx)(`section`,{className:r(`relative w-full overflow-hidden`,j?`bg-[#0B0B0B]`:`bg-white`,N),children:(0,C.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-12 relative z-10`,children:(0,C.jsxs)(a.div,{initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:P,className:`w-full`,children:[(0,C.jsxs)(`div`,{className:`flex flex-col gap-2 mb-10`,children:[u&&(0,C.jsx)(a.h2,{variants:F,className:r(`text-2xl lg:text-3xl font-aileron font-bold`,j?`text-white`:`text-neutral-900`),children:u}),(0,C.jsx)(a.div,{variants:F,children:(0,C.jsx)(s,{text:o,highlight:c,theme:n,as:`h2`,className:`text-3xl lg:text-4xl`})})]}),(0,C.jsx)(a.div,{variants:F,className:r(`font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none mb-12`,!j&&`prose-neutral text-neutral-600`),dangerouslySetInnerHTML:{__html:f}}),S&&(0,C.jsxs)(`div`,{className:`flex flex-col gap-6 mb-12`,children:[(0,C.jsx)(a.h2,{variants:F,className:r(`text-2xl lg:text-3xl font-aileron font-bold`,j?`text-white`:`text-neutral-900`),children:S}),w&&(0,C.jsx)(a.div,{variants:F,className:r(`font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none`,!j&&`prose-neutral text-neutral-600`),dangerouslySetInnerHTML:{__html:w}})]}),T&&(0,C.jsx)(a.div,{variants:F,children:(0,C.jsx)(_,{logos:T})}),E&&(0,C.jsx)(a.div,{variants:F,className:r(`font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none mb-8`,!j&&`prose-neutral text-neutral-600`),dangerouslySetInnerHTML:{__html:E}}),v&&(0,C.jsx)(a.div,{variants:F,className:`mb-10`,children:(0,C.jsx)(l,{ctas:v,theme:n})}),D&&(0,C.jsx)(a.div,{variants:F,className:r(`font-geist text-[16px] lg:text-[18px] leading-relaxed opacity-80 prose prose-invert max-w-none mb-10`,!j&&`prose-neutral text-neutral-600`),dangerouslySetInnerHTML:{__html:D}}),(O||A)&&(0,C.jsxs)(a.div,{variants:F,className:`border-t border-neutral-100 pt-10 mt-12 dark:border-white/5`,children:[O&&(0,C.jsx)(`h3`,{className:r(`text-lg lg:text-xl font-aileron font-bold mb-6`,j?`text-white`:`text-neutral-900`),children:O}),(0,C.jsx)(y,{items:A||[],style:k,theme:n})]})]})})});let I=t===`centered`,L=t.includes(`split`),R=t===`split-media-left`;return(0,C.jsxs)(`section`,{className:r(`relative w-full overflow-hidden`,j?`bg-[#0B0B0B] text-white`:`bg-white text-neutral-900`,N),children:[j&&(0,C.jsx)(`div`,{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-[#F59120]/5 blur-[120px] pointer-events-none z-0`}),(0,C.jsx)(`div`,{className:`max-w-7xl mx-auto px-6 lg:px-12 relative z-10`,children:(0,C.jsxs)(`div`,{className:r(`flex flex-col gap-16 items-center`,I?`text-center`:`text-left`,L&&`lg:flex-row`,R&&`lg:flex-row-reverse`),children:[(0,C.jsxs)(a.div,{initial:`hidden`,whileInView:`visible`,viewport:{once:!0},variants:P,className:r(`flex flex-col gap-6`,L?`lg:w-1/2`:`w-full`,I&&`items-center`),children:[u&&(0,C.jsx)(a.span,{variants:F,className:`uppercase tracking-widest text-sm font-semibold text-[#F59120]`,children:u}),(0,C.jsx)(a.div,{variants:F,children:(0,C.jsx)(s,{text:o,highlight:c,theme:n,className:r(`leading-tight`,L||t===`feature-grid-split`?`text-3xl lg:text-[42px]`:`text-4xl lg:text-5xl`)})}),(0,C.jsx)(a.div,{variants:F,className:r(`font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none`,t===`text-only`&&`text-xl`,!j&&`prose-neutral text-neutral-600`),dangerouslySetInnerHTML:{__html:f}}),(0,C.jsx)(a.div,{variants:F,children:t===`feature-grid-split`&&g?(0,C.jsx)(h,{features:g,theme:n}):t===`stat-cards`&&g?(0,C.jsx)(d,{features:g,theme:n}):g&&g.length>0&&(0,C.jsx)(p,{features:g,theme:n})}),m&&(0,C.jsx)(a.div,{variants:F,className:r(`font-geist text-lg leading-relaxed opacity-70 prose prose-invert max-w-none`,!j&&`prose-neutral text-neutral-600`),dangerouslySetInnerHTML:{__html:m}}),v&&(0,C.jsx)(a.div,{variants:F,children:(0,C.jsx)(l,{ctas:v,theme:n})})]}),b&&(0,C.jsx)(a.div,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.8,delay:.2},className:r(`w-full`,L?`lg:w-1/2`:`mt-8`),children:(0,C.jsx)(x,{media:b,variant:t,theme:n})})]})})]})}var C,w=e((()=>{C=t(),i(),n(),o(),c(),u(),f(),m(),g(),v(),b(),S.__docgenInfo={description:``,methods:[],displayName:`IntroSection`,props:{variant:{required:!0,tsType:{name:`union`,raw:`| "split-media-right"
| "split-media-left"
| "centered"
| "text-only"
| "feature-split"
| "heading-top-split"
| "code-split"
| "feature-grid-split"
| "stat-cards"
| "text-stack"
| "mixed-content"`,elements:[{name:`literal`,value:`"split-media-right"`},{name:`literal`,value:`"split-media-left"`},{name:`literal`,value:`"centered"`},{name:`literal`,value:`"text-only"`},{name:`literal`,value:`"feature-split"`},{name:`literal`,value:`"heading-top-split"`},{name:`literal`,value:`"code-split"`},{name:`literal`,value:`"feature-grid-split"`},{name:`literal`,value:`"stat-cards"`},{name:`literal`,value:`"text-stack"`},{name:`literal`,value:`"mixed-content"`}]},description:``},theme:{required:!1,tsType:{name:`union`,raw:`"dark" | "light"`,elements:[{name:`literal`,value:`"dark"`},{name:`literal`,value:`"light"`}]},description:``},spacingSize:{required:!1,tsType:{name:`union`,raw:`"standard" | "large" | "compact"`,elements:[{name:`literal`,value:`"standard"`},{name:`literal`,value:`"large"`},{name:`literal`,value:`"compact"`}]},description:``},heading:{required:!0,tsType:{name:`string`},description:``},headingHighlight:{required:!1,tsType:{name:`string`},description:``},subheading:{required:!1,tsType:{name:`string`},description:``},richText:{required:!0,tsType:{name:`string`},description:``},secondaryRichText:{required:!1,tsType:{name:`string`},description:``},features:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  stat?: string;
  text: string;
  description?: string;
  icon?: string;
}`,signature:{properties:[{key:`stat`,value:{name:`string`,required:!1}},{key:`text`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`icon`,value:{name:`string`,required:!1}}]}}],raw:`{
  stat?: string;
  text: string;
  description?: string;
  icon?: string;
}[]`},description:``},ctas:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  text: string;
  href: string;
  variant?: "primary" | "outline" | "ghost";
}`,signature:{properties:[{key:`text`,value:{name:`string`,required:!0}},{key:`href`,value:{name:`string`,required:!0}},{key:`variant`,value:{name:`union`,raw:`"primary" | "outline" | "ghost"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"ghost"`}],required:!1}}]}}],raw:`{
  text: string;
  href: string;
  variant?: "primary" | "outline" | "ghost";
}[]`},description:``},media:{required:!1,tsType:{name:`IntroMedia`},description:``},sectionTwoHeading:{required:!1,tsType:{name:`string`},description:``},tertiaryRichText:{required:!1,tsType:{name:`string`},description:``},logos:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  image: { url: string; alt?: string };
  link?: string;
}`,signature:{properties:[{key:`image`,value:{name:`signature`,type:`object`,raw:`{ url: string; alt?: string }`,signature:{properties:[{key:`url`,value:{name:`string`,required:!0}},{key:`alt`,value:{name:`string`,required:!1}}]},required:!0}},{key:`link`,value:{name:`string`,required:!1}}]}}],raw:`{
  image: { url: string; alt?: string };
  link?: string;
}[]`},description:``},quaternaryRichText:{required:!1,tsType:{name:`string`},description:``},quinquenaryRichText:{required:!1,tsType:{name:`string`},description:``},listHeading:{required:!1,tsType:{name:`string`},description:``},listStyle:{required:!1,tsType:{name:`union`,raw:`"numbers" | "bullets"`,elements:[{name:`literal`,value:`"numbers"`},{name:`literal`,value:`"bullets"`}]},description:``},listItems:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ text: string }`,signature:{properties:[{key:`text`,value:{name:`string`,required:!0}}]}}],raw:`{ text: string }[]`},description:``}}}})),T,E,D,O,k,A,j;e((()=>{T=t(),w(),E={title:`UI/IntroSection`,component:S,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`split-media-right`,`split-media-left`,`centered`,`text-only`,`feature-split`,`heading-top-split`,`code-split`,`feature-grid-split`,`stat-cards`,`text-stack`,`mixed-content`]},theme:{control:`radio`,options:[`dark`,`light`]},spacingSize:{control:`select`,options:[`compact`,`standard`,`large`]}},decorators:[e=>(0,T.jsx)(`div`,{className:`w-full min-h-screen bg-[#0B0B0B]`,children:(0,T.jsx)(e,{})})]},D={args:{variant:`split-media-right`,theme:`dark`,subheading:`Vehicle Data API`,heading:`Access Professional Electric Vehicle Specifications`,headingHighlight:`Specifications`,richText:`<p>The <strong>Electric Vehicle Specifications API</strong> provides comprehensive technical data for any EV or plug-in hybrid. Access over 50+ unique data points including battery capacity, charging speeds, and real-world range.</p>`,ctas:[{text:`Try Playground`,href:`#`,variant:`primary`},{text:`Documentation`,href:`#`,variant:`outline`}],media:{type:`code-snippet`,image:`https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop`,code:`{
  "status": "success",
  "data": {
    "make": "Tesla",
    "model": "Model Y",
    "battery": "75 kWh",
    "charging": "250 kW Max"
  }
}`,alt:`Tesla Model Y Specifications`}}},O={args:{variant:`stat-cards`,theme:`dark`,heading:`Scale Your Business with Real-Time Market Intelligence`,headingHighlight:`Market Intelligence`,richText:`<p>Our APIs process millions of automotive transactions daily, providing you with the most accurate market-level pricing and demand metrics in the industry.</p>`,features:[{stat:`88%`,text:`Efficiency Boost`,description:`Automate 88% of your manual VIN data entry tasks.`},{stat:`99.9%`,text:`Data Uptime`,description:`Robust infrastructure with enterprise-grade SLA guarantee.`},{stat:`1.2s`,text:`Fast Latency`,description:`Industry-leading sub-second average response times.`}],ctas:[{text:`Get API Keys`,href:`#`,variant:`primary`}]}},k={args:{variant:`feature-grid-split`,theme:`dark`,subheading:`Enterprise Logistics`,heading:`Complete Control Over Your Commercial Fleet`,headingHighlight:`Complete Control`,richText:`<p>Bridge the gap between logistics and data. Our fleet integration tools allow you to track titles, maintenance records, and market value fluctuations across thousands of units instantly.</p>`,features:[{text:`Global Coverage`,description:`Access data for 100+ countries with localized formatting.`},{text:`Title Monitoring`,description:`Real-time alerts for salvage, theft, or lien changes.`}],media:{type:`feature-grid-card`,title:`Active Data Points per VIN:`,items:[{text:`NMVTIS Title Status`},{text:`Open Recall Checks`},{text:`Auction History`},{text:`Market Value Pricing`},{text:`Lien & Lease Records`},{text:`Owner Identification`},{text:`Safety Ratings`},{text:`Emissions Data`}]},ctas:[{text:`Schedule Demo`,href:`#`,variant:`primary`}]}},A={args:{variant:`split-media-right`,theme:`dark`,subheading:`Developer Playground`,heading:`Simple Integration. Powerful Results.`,headingHighlight:`Simple Integration`,richText:`<p>Developers love our <strong>RESTful APIs</strong> because they are built with modern JSON standards and thorough versioning. No more dealing with inconsistent XML or legacy SOAP protocols.</p>`,media:{type:`code-dashboard`,code:JSON.stringify({vin:`5TQYK30D8FS503804`,status:`success`,history:{registrations:4,accidents:0,services:12}},null,2)},ctas:[{text:`Start Coding`,href:`#`,variant:`primary`}]}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "split-media-right",
    theme: "dark",
    subheading: "Vehicle Data API",
    heading: "Access Professional Electric Vehicle Specifications",
    headingHighlight: "Specifications",
    richText: "<p>The <strong>Electric Vehicle Specifications API</strong> provides comprehensive technical data for any EV or plug-in hybrid. Access over 50+ unique data points including battery capacity, charging speeds, and real-world range.</p>",
    ctas: [{
      text: "Try Playground",
      href: "#",
      variant: "primary"
    }, {
      text: "Documentation",
      href: "#",
      variant: "outline"
    }],
    media: {
      type: "code-snippet",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop",
      code: \`{
  "status": "success",
  "data": {
    "make": "Tesla",
    "model": "Model Y",
    "battery": "75 kWh",
    "charging": "250 kW Max"
  }
}\`,
      alt: "Tesla Model Y Specifications"
    }
  }
}`,...D.parameters?.docs?.source},description:{story:`DEFAULT: SPLIT MEDIA RIGHT
Scenario: Electric Vehicle VIN Specifications`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "stat-cards",
    theme: "dark",
    heading: "Scale Your Business with Real-Time Market Intelligence",
    headingHighlight: "Market Intelligence",
    richText: "<p>Our APIs process millions of automotive transactions daily, providing you with the most accurate market-level pricing and demand metrics in the industry.</p>",
    features: [{
      stat: "88%",
      text: "Efficiency Boost",
      description: "Automate 88% of your manual VIN data entry tasks."
    }, {
      stat: "99.9%",
      text: "Data Uptime",
      description: "Robust infrastructure with enterprise-grade SLA guarantee."
    }, {
      stat: "1.2s",
      text: "Fast Latency",
      description: "Industry-leading sub-second average response times."
    }],
    ctas: [{
      text: "Get API Keys",
      href: "#",
      variant: "primary"
    }]
  }
}`,...O.parameters?.docs?.source},description:{story:`STAT CARDS
Scenario: Market Analytics & Impact`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "feature-grid-split",
    theme: "dark",
    subheading: "Enterprise Logistics",
    heading: "Complete Control Over Your Commercial Fleet",
    headingHighlight: "Complete Control",
    richText: "<p>Bridge the gap between logistics and data. Our fleet integration tools allow you to track titles, maintenance records, and market value fluctuations across thousands of units instantly.</p>",
    features: [{
      text: "Global Coverage",
      description: "Access data for 100+ countries with localized formatting."
    }, {
      text: "Title Monitoring",
      description: "Real-time alerts for salvage, theft, or lien changes."
    }],
    media: {
      type: "feature-grid-card",
      title: "Active Data Points per VIN:",
      items: [{
        text: "NMVTIS Title Status"
      }, {
        text: "Open Recall Checks"
      }, {
        text: "Auction History"
      }, {
        text: "Market Value Pricing"
      }, {
        text: "Lien & Lease Records"
      }, {
        text: "Owner Identification"
      }, {
        text: "Safety Ratings"
      }, {
        text: "Emissions Data"
      }]
    },
    ctas: [{
      text: "Schedule Demo",
      href: "#",
      variant: "primary"
    }]
  }
}`,...k.parameters?.docs?.source},description:{story:`FEATURE GRID
Scenario: Fleet Operations System`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "split-media-right",
    theme: "dark",
    subheading: "Developer Playground",
    heading: "Simple Integration. Powerful Results.",
    headingHighlight: "Simple Integration",
    richText: "<p>Developers love our <strong>RESTful APIs</strong> because they are built with modern JSON standards and thorough versioning. No more dealing with inconsistent XML or legacy SOAP protocols.</p>",
    media: {
      type: "code-dashboard",
      code: JSON.stringify({
        vin: "5TQYK30D8FS503804",
        status: "success",
        history: {
          registrations: 4,
          accidents: 0,
          services: 12
        }
      }, null, 2)
    },
    ctas: [{
      text: "Start Coding",
      href: "#",
      variant: "primary"
    }]
  }
}`,...A.parameters?.docs?.source},description:{story:`CODE DASHBOARD
Scenario: Professional VIN History REST API`,...A.parameters?.docs?.description}}},j=[`ElectricVehicleSpecs`,`MarketImpact`,`FleetOperations`,`DeveloperExperience`]}))();export{A as DeveloperExperience,D as ElectricVehicleSpecs,k as FleetOperations,O as MarketImpact,j as __namedExportsOrder,E as default};