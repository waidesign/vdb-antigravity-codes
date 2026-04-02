import{n as e,s as t}from"./chunk-Bj-mKKzh.js";import{C as n,K as r}from"./iframe-7vMKm1ug.js";import{n as i,t as a}from"./image-BaFwxYJM.js";import{t as o}from"./link-DE88cQkS.js";import{_ as s,p as c,t as l,y as u}from"./lucide-react-ATbUwpNu.js";import{n as d,t as f}from"./utils-UR68KzPb.js";import{r as p,t as m}from"./button-CkPIebK5.js";function h(e){let{variant:t}=e,[n,r]=(0,x.useState)(0),a=t===`docAccordion`?e.languages||[`Node`,`React`,`PHP`,`Python`]:[],[o,s]=(0,x.useState)(a?.[0]||``);return(0,y.jsx)(`section`,{className:`w-full py-24 lg:py-36 bg-black overflow-hidden`,children:(0,y.jsx)(`div`,{className:`mx-auto max-w-7xl`,children:(()=>{switch(t){case`docAccordion`:{let{items:t,heading:a,subheading:l,description:u,languages:d,ctas:p}=e,h=d||[`Node`,`React`,`PHP`,`Python`],g=t[n],_=g?.snippets?.[o]||g?.snippets?.default||``;return(0,y.jsxs)(`div`,{className:`section-content px-10 lg:px-20 flex flex-col gap-20`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-4 text-center items-center`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 max-w-4xl`,children:[l&&(0,y.jsx)(`span`,{className:`font-aileron font-semibold text-neutral-400 text-3xl lg:text-[40px] leading-tight text-center`,children:l}),(0,y.jsx)(`h2`,{className:`font-aileron font-semibold text-white text-3xl lg:text-[40px] leading-tight text-center`,children:a})]}),u&&(0,y.jsx)(`p`,{className:`font-geist max-w-2xl text-neutral-400 text-base lg:text-lg leading-relaxed`,children:u})]}),(0,y.jsxs)(`div`,{className:`w-full flex flex-col lg:flex-row rounded-[32px] overflow-hidden border border-[#8C929D] bg-[#16181A]`,children:[(0,y.jsx)(`div`,{className:`flex flex-col w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[#8C929D]`,children:t.map((e,i)=>(0,y.jsxs)(`div`,{className:f(`transition-colors`,i<t.length-1&&`border-b border-[#8C929D]`,n===i?`bg-white/5`:`bg-transparent hover:bg-white/5`),children:[(0,y.jsxs)(`button`,{type:`button`,onClick:()=>r(i),className:`flex items-center justify-between gap-4 p-8 w-full text-left group`,children:[(0,y.jsx)(`span`,{className:f(`font-aileron font-semibold text-xl transition-colors`,n===i?`text-white`:`text-neutral-400 group-hover:text-white`),children:e.title}),(0,y.jsx)(v,{isOpen:n===i})]}),n===i&&(0,y.jsxs)(`div`,{className:`flex flex-col gap-8 px-8 pb-8`,children:[(0,y.jsx)(`p`,{className:`font-geist text-neutral-400 text-base leading-relaxed`,children:e.description}),e.link&&(0,y.jsx)(b.default,{href:e.link.href,className:`w-fit`,children:(0,y.jsx)(m,{variant:`secondary`,className:`rounded-lg h-auto py-2.5 px-6 font-aileron font-semibold text-base transition-all group border-white/20 hover:border-white/90`,rightIcon:(0,y.jsx)(c,{size:16,className:`text-white/70 group-hover:text-white transition-colors`}),children:e.link.label})})]})]},e.id))}),(0,y.jsxs)(`div`,{className:`flex flex-col w-full lg:w-1/2 bg-[#16181A]`,children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-4 px-8 py-6 border-b border-[#8C929D]`,children:[(0,y.jsxs)(`div`,{className:`flex gap-2`,children:[(0,y.jsx)(`div`,{className:`w-3 h-3 rounded-full bg-[#FF5F56]`}),(0,y.jsx)(`div`,{className:`w-3 h-3 rounded-full bg-[#FFBD2E]`}),(0,y.jsx)(`div`,{className:`w-3 h-3 rounded-full bg-[#27C93F]`})]}),(0,y.jsxs)(`span`,{className:`font-aileron font-semibold text-base text-white`,children:[`</>`,` Code`]})]}),(0,y.jsx)(`div`,{className:`flex items-center flex-wrap gap-2 px-8 py-5 border-b border-[#8C929D] bg-neutral-900/10`,children:h.map(e=>(0,y.jsx)(`button`,{type:`button`,onClick:()=>s(e),className:f(`px-5 py-2.5 rounded-lg font-aileron font-semibold text-sm transition-all focus:outline-none`,o===e?`bg-brand-primary/10 border border-brand-primary text-brand-primary shadow-[0_0_15px_rgba(245,145,32,0.1)]`:`bg-transparent border border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-white`),children:e},e))}),(0,y.jsx)(`div`,{className:`flex flex-1 p-8`,children:(0,y.jsx)(`div`,{className:`bg-[#0D0E10] border border-white/5 rounded-2xl p-8 flex-1 overflow-x-auto min-h-[350px] shadow-inner`,children:(0,y.jsx)(`pre`,{className:`font-geist text-white text-[13px] leading-[1.7em] whitespace-pre-wrap break-words`,children:_})})})]})]}),p&&(0,y.jsx)(`div`,{className:`flex items-center justify-center gap-6 flex-wrap`,children:p.map((e,t)=>(0,y.jsx)(b.default,{href:e.href,className:`w-full sm:w-auto`,children:(0,y.jsx)(m,{variant:e.variant||`primary`,size:`lg`,className:`w-full sm:w-auto px-10 rounded-xl font-aileron font-bold shadow-lg`,rightIcon:e.icon?(0,y.jsx)(i,{src:e.icon.src,alt:``,width:e.icon.width,height:e.icon.height}):null,children:e.label})},t))})]})}case`accordionGrid`:return(0,y.jsxs)(`div`,{className:`section-content px-10 lg:px-20 flex flex-col gap-20`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-4 text-center items-center`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2 max-w-4xl`,children:[e.subheading&&(0,y.jsx)(`span`,{className:`font-aileron font-semibold text-neutral-400 text-3xl lg:text-[40px] leading-tight`,children:e.subheading}),(0,y.jsx)(`h2`,{className:`font-aileron font-semibold text-white text-3xl lg:text-[40px] leading-tight`,children:e.heading})]}),e.description&&(0,y.jsx)(`p`,{className:`font-geist max-w-2xl text-neutral-400 text-base lg:text-lg leading-relaxed`,children:e.description})]}),(0,y.jsx)(`div`,{className:`w-full grid grid-cols-1 lg:grid-cols-2 gap-10`,children:e.columns.map((e,t)=>(0,y.jsx)(`div`,{className:`flex flex-col gap-8`,children:e.items.map(e=>(0,y.jsx)(_,{item:e},e.id))},t))})]});case`FAQAccordion`:return(0,y.jsx)(`div`,{className:`section-content px-10 lg:px-20 flex flex-col`,children:e.items.map((t,n)=>(0,y.jsx)(g,{item:t,isLast:n===e.items.length-1},t.id))});default:return null}})()})})}function g({item:e,isLast:t}){let[n,r]=(0,x.useState)(!1);return(0,y.jsxs)(`div`,{className:f(`flex flex-col transition-colors group`,!t&&`border-b border-[#8C929D]/20`,`bg-transparent`),children:[(0,y.jsxs)(`button`,{type:`button`,className:`flex items-center justify-between gap-8 py-8 px-4 text-left w-full focus:outline-none`,onClick:()=>r(!n),children:[(0,y.jsx)(`span`,{className:f(`font-geist font-semibold text-xl lg:text-2xl transition-colors`,n?`text-white`:`text-neutral-300 group-hover:text-white`),children:e.question}),n?(0,y.jsx)(s,{size:24,className:`text-white shrink-0`}):(0,y.jsx)(u,{size:24,className:`text-neutral-500 group-hover:text-white/70 shrink-0`})]}),n&&(0,y.jsx)(`div`,{className:`px-4 pb-8 animate-in fade-in slide-in-from-top-2 duration-300`,children:(0,y.jsx)(`p`,{className:`font-geist text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-4xl`,children:e.answer||`Contact our support team for detailed information about this topic.`})})]})}function _({item:e}){let[t,n]=(0,x.useState)(!1);return(0,y.jsxs)(`div`,{className:f(`rounded-[20px] border transition-all duration-300`,t?`bg-neutral-900 border-[#8C929D] shadow-[0_0_20px_rgba(255,255,255,0.02)]`:`bg-[#16181A] border-[#8C929D]/30 hover:border-[#8C929D]/60`),children:[(0,y.jsxs)(`button`,{type:`button`,onClick:()=>n(!t),className:`w-full flex items-center justify-between p-8 text-left group`,children:[(0,y.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,y.jsx)(`h3`,{className:`font-aileron font-semibold text-xl text-white leading-tight`,children:e.title}),(0,y.jsx)(`span`,{className:`font-geist text-sm text-neutral-500 font-medium`,children:e.subtitle})]}),(0,y.jsx)(v,{isOpen:t})]}),t&&(0,y.jsx)(`div`,{className:`px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300`,children:(0,y.jsx)(`div`,{className:`border border-[#8C929D]/30 rounded-[24px] p-8 lg:p-10 flex flex-col gap-8 lg:gap-10 bg-black/10`,children:e.content.map((e,t)=>(0,y.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[e.type===`text`&&(0,y.jsx)(`p`,{className:f(`font-geist text-base leading-[1.6em]`,e.isBold?`font-bold text-white`:`text-neutral-400`,e.isHighlight&&`text-[#9747FF] font-semibold`),children:e.content}),e.type===`list`&&(0,y.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[e.title&&(0,y.jsx)(`span`,{className:`font-geist font-bold text-sm text-white uppercase tracking-wider`,children:e.title}),(0,y.jsx)(`ul`,{className:`flex flex-col gap-3`,children:e.items.map((e,t)=>(0,y.jsxs)(`li`,{className:`flex gap-4 text-[15px] text-neutral-400 font-geist leading-[1.6em]`,children:[(0,y.jsx)(`span`,{className:`text-brand-primary text-xl translate-y-[-2px]`,children:`•`}),e]},t))})]})]},t))})})]})}function v({isOpen:e,className:t}){return(0,y.jsx)(`div`,{className:f(`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0`,e?`border-[#8C929D] bg-white/10 rotate-180 shadow-[0_0_15px_rgba(255,255,255,0.05)]`:`border-[#8C929D]/30 bg-black/40 group-hover:border-[#8C929D]/60 group-hover:bg-white/5`,t),children:(0,y.jsx)(u,{size:22,className:f(`transition-colors duration-300`,e?`text-white`:`text-neutral-500 group-hover:text-white/70`)})})}var y,b,x,S=e((()=>{y=n(),a(),b=t(o()),l(),x=t(r()),d(),p(),h.__docgenInfo={description:``,methods:[],displayName:`Accordions`}})),C,w,T,E,D;e((()=>{S(),C={title:`Home/Sections/Accordions`,component:h,parameters:{layout:`fullscreen`}},w={args:{variant:`docAccordion`,subheading:`Simple Documentation -`,heading:`A Better Developer Experience`,description:`Our easy and straightforward documentation provides a stellar experience to developers making API integration smoother than ever.`,languages:[`Node`,`React`,`PHP`,`Python`],items:[{id:`market-value`,title:`Vehicle Market Value API`,description:`Vehicle market value API works as an Edmunds API alternative, allows you to get instant access to any vehicle's accurate market value pricing. We compute used and new car values by analyzing millions of actual sales transactions and auction prices.`,link:{label:`Learn more`,href:`#`},snippets:{Node:`var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://api.vehicledatabases.com/market-value/v2/{vin}',
  'headers': {
    'x-AuthKey': '{X-Authkey}'
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});`,React:`import { useEffect, useState } from 'react';

export function MarketValue({ vin }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(\`https://api.vehicledatabases.com/market-value/v2/\${vin}\`, {
      headers: { 'x-AuthKey': '{X-Authkey}' }
    })
      .then(res => res.json())
      .then(setData);
  }, [vin]);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,PHP:`<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.vehicledatabases.com/market-value/v2/{vin}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    "x-AuthKey: {X-Authkey}"
  ],
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;
?>`,Python:`import requests

url = "https://api.vehicledatabases.com/market-value/v2/{vin}"

headers = {
    "x-AuthKey": "{X-Authkey}"
}

response = requests.get(url, headers=headers)
print(response.json())`}},{id:`vin-decoder`,title:`VIN Decoder API`,description:`Our VIN Decoder API provides comprehensive vehicle details including year, make, model, trim, engine type, transmission, and over 50+ data points from a single VIN lookup.`,link:{label:`Learn more`,href:`#`},snippets:{default:`var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://api.vehicledatabases.com/vin-decoder/v1/{vin}',
  'headers': {
    'x-AuthKey': '{X-Authkey}'
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});`}},{id:`maintenance`,title:`Maintenance API`,description:`Get the recommended maintenance schedule and intervals for any vehicle by VIN or year, make, and model. Perfect for building service reminder features into your application.`,link:{label:`Learn more`,href:`#`},snippets:{default:`// Maintenance API Data Fetcher`}},{id:`license-plate`,title:`License Plate API`,description:`Decode any US license plate into a VIN and full vehicle details instantly. Supports all 50 states with near-real-time data synchronization.`,link:{label:`Learn more`,href:`#`},snippets:{default:`// License Plate API Data Fetcher`}},{id:`ocr`,title:`OCR API`,description:`Capture VINs and license plate numbers from images using our advanced Optical Character Recognition API. Returns decoded text and vehicle data in a single request.`,link:{label:`Learn more`,href:`#`},snippets:{default:`// OCR API Data Fetcher`}}],ctas:[{label:`View Documentation`,href:`#`,variant:`primary`,icon:{src:`/images/arrow-white.svg`,width:8,height:12}},{label:`Schedule a Demo`,href:`#`,variant:`secondary`,icon:{src:`/images/calendar-icon.svg`,width:14,height:14}}]}},T={args:{variant:`accordionGrid`,subheading:`Automotive Industry -`,heading:`Powerful Usage for Every Business`,description:`Explore how our high-performance vehicle data APIs can transform your business operations and customer experience.`,columns:[{items:[{id:`flow-1`,title:`Improve Customer Experience with Instant Vehicle Data`,subtitle:`Flow 1`,content:[{type:`list`,title:`VIN Decoder APIs instantly return:`,items:[`Make, model, year, and trim`,`Engine, transmission, and drivetrain`,`Factory specs and vehicle features`]},{type:`list`,title:`Business benefits:`,items:[`Faster user onboarding`,`Reduced form friction`,`Higher conversion rates`,`Increased platform trust`]},{type:`text`,content:`Best for: Automotive marketplaces, insurance apps, dealer portals, and inspection platforms.`,isHighlight:!0}]},{id:`flow-3`,title:`Enable Smarter Pricing, Valuation & Risk Decisions`,subtitle:`Flow 3`,content:[{type:`text`,content:`Access real-time market values and historical pricing data to make informed financial decisions.`},{type:`list`,title:`Key features:`,items:[`Market value estimation`,`Historical pricing trends`,`Regional price adjustments`]}]},{id:`flow-5`,title:`Power Smarter Marketing & Personalization`,subtitle:`Flow 5`,content:[{type:`text`,content:`Deliver highly relevant marketing messages based on the exact vehicle specifications of your customers.`}]}]},{items:[{id:`flow-2`,title:`Automate Vehicle Identification & Reduce Manual Work`,subtitle:`Flow 2`,content:[{type:`text`,content:`VIN decoding removes the need for long manual data entry forms by auto-filling vehicle information.`},{type:`list`,title:`Operational advantages:`,items:[`Lower data errors`,`Faster processing workflows`,`Lower support and labor costs`,`Improved internal efficiency`]},{type:`list`,title:`Business benefits:`,items:[`Faster user onboarding`,`Reduced form friction`,`Higher conversion rates`,`Increased platform trust`]},{type:`text`,content:`Ideal for: Fleet operators, rental services, car marketplaces, and registration platforms.`,isHighlight:!0}]},{id:`flow-4`,title:`Prevent Fraud & Verify Vehicle Identity`,subtitle:`Flow 4`,content:[{type:`text`,content:`Cross-reference VIN data with government and insurance records to verify vehicle authenticity.`}]},{id:`flow-6`,title:`Reduce Development Time & Accelerate Product Launch`,subtitle:`Flow 6`,content:[{type:`text`,content:`Our easy-to-integrate REST APIs allow developers to build vehicle-centric features in days, not months.`}]}]}]}},E={args:{variant:`FAQAccordion`,items:[{id:`1`,question:`What is Vehicle Databases?`,answer:`Vehicle Databases provides accurate vehicle data and VIN decoding APIs. Our API database helps businesses access essential vehicle information, streamline development, and enhance their products.`},{id:`2`,question:`How to use car API?`,answer:`Using our car API is simple. Once you have an API key, you can make RESTful requests to our endpoints with a VIN or vehicle parameters to receive structured JSON data.`},{id:`3`,question:`How can Vehicle Databases benefit my company?`,answer:`It streamlines inventory management, powers search filters, and provides accurate technical specifications for automotive platforms, leading to better user experiences.`},{id:`4`,question:`Why choose Vehicle Databases?`,answer:`We offer the most comprehensive and up-to-date dataset for US vehicles, with high uptime, low latency, and a developer-friendly API.`},{id:`5`,question:`What is an automotive database?`,answer:`An automotive database is a structured collection of technical data about vehicles, including makes, models, years, specifications, and VIN-related information.`}]}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "docAccordion",
    subheading: "Simple Documentation -",
    heading: "A Better Developer Experience",
    description: "Our easy and straightforward documentation provides a stellar experience to developers making API integration smoother than ever.",
    languages: ["Node", "React", "PHP", "Python"],
    items: [{
      id: "market-value",
      title: "Vehicle Market Value API",
      description: "Vehicle market value API works as an Edmunds API alternative, allows you to get instant access to any vehicle's accurate market value pricing. We compute used and new car values by analyzing millions of actual sales transactions and auction prices.",
      link: {
        label: "Learn more",
        href: "#"
      },
      snippets: {
        Node: \`var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://api.vehicledatabases.com/market-value/v2/{vin}',
  'headers': {
    'x-AuthKey': '{X-Authkey}'
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});\`,
        React: \`import { useEffect, useState } from 'react';

export function MarketValue({ vin }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(\\\`https://api.vehicledatabases.com/market-value/v2/\\\${vin}\\\`, {
      headers: { 'x-AuthKey': '{X-Authkey}' }
    })
      .then(res => res.json())
      .then(setData);
  }, [vin]);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}\`,
        PHP: \`<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.vehicledatabases.com/market-value/v2/{vin}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    "x-AuthKey: {X-Authkey}"
  ],
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;
?>\`,
        Python: \`import requests

url = "https://api.vehicledatabases.com/market-value/v2/{vin}"

headers = {
    "x-AuthKey": "{X-Authkey}"
}

response = requests.get(url, headers=headers)
print(response.json())\`
      }
    }, {
      id: "vin-decoder",
      title: "VIN Decoder API",
      description: "Our VIN Decoder API provides comprehensive vehicle details including year, make, model, trim, engine type, transmission, and over 50+ data points from a single VIN lookup.",
      link: {
        label: "Learn more",
        href: "#"
      },
      snippets: {
        default: \`var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://api.vehicledatabases.com/vin-decoder/v1/{vin}',
  'headers': {
    'x-AuthKey': '{X-Authkey}'
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});\`
      }
    }, {
      id: "maintenance",
      title: "Maintenance API",
      description: "Get the recommended maintenance schedule and intervals for any vehicle by VIN or year, make, and model. Perfect for building service reminder features into your application.",
      link: {
        label: "Learn more",
        href: "#"
      },
      snippets: {
        default: \`// Maintenance API Data Fetcher\`
      }
    }, {
      id: "license-plate",
      title: "License Plate API",
      description: "Decode any US license plate into a VIN and full vehicle details instantly. Supports all 50 states with near-real-time data synchronization.",
      link: {
        label: "Learn more",
        href: "#"
      },
      snippets: {
        default: \`// License Plate API Data Fetcher\`
      }
    }, {
      id: "ocr",
      title: "OCR API",
      description: "Capture VINs and license plate numbers from images using our advanced Optical Character Recognition API. Returns decoded text and vehicle data in a single request.",
      link: {
        label: "Learn more",
        href: "#"
      },
      snippets: {
        default: \`// OCR API Data Fetcher\`
      }
    }],
    ctas: [{
      label: "View Documentation",
      href: "#",
      variant: "primary",
      icon: {
        src: "/images/arrow-white.svg",
        width: 8,
        height: 12
      }
    }, {
      label: "Schedule a Demo",
      href: "#",
      variant: "secondary",
      icon: {
        src: "/images/calendar-icon.svg",
        width: 14,
        height: 14
      }
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "accordionGrid",
    subheading: "Automotive Industry -",
    heading: "Powerful Usage for Every Business",
    description: "Explore how our high-performance vehicle data APIs can transform your business operations and customer experience.",
    columns: [{
      items: [{
        id: "flow-1",
        title: "Improve Customer Experience with Instant Vehicle Data",
        subtitle: "Flow 1",
        content: [{
          type: "list",
          title: "VIN Decoder APIs instantly return:",
          items: ["Make, model, year, and trim", "Engine, transmission, and drivetrain", "Factory specs and vehicle features"]
        }, {
          type: "list",
          title: "Business benefits:",
          items: ["Faster user onboarding", "Reduced form friction", "Higher conversion rates", "Increased platform trust"]
        }, {
          type: "text",
          content: "Best for: Automotive marketplaces, insurance apps, dealer portals, and inspection platforms.",
          isHighlight: true
        }]
      }, {
        id: "flow-3",
        title: "Enable Smarter Pricing, Valuation & Risk Decisions",
        subtitle: "Flow 3",
        content: [{
          type: "text",
          content: "Access real-time market values and historical pricing data to make informed financial decisions."
        }, {
          type: "list",
          title: "Key features:",
          items: ["Market value estimation", "Historical pricing trends", "Regional price adjustments"]
        }]
      }, {
        id: "flow-5",
        title: "Power Smarter Marketing & Personalization",
        subtitle: "Flow 5",
        content: [{
          type: "text",
          content: "Deliver highly relevant marketing messages based on the exact vehicle specifications of your customers."
        }]
      }]
    }, {
      items: [{
        id: "flow-2",
        title: "Automate Vehicle Identification & Reduce Manual Work",
        subtitle: "Flow 2",
        content: [{
          type: "text",
          content: "VIN decoding removes the need for long manual data entry forms by auto-filling vehicle information."
        }, {
          type: "list",
          title: "Operational advantages:",
          items: ["Lower data errors", "Faster processing workflows", "Lower support and labor costs", "Improved internal efficiency"]
        }, {
          type: "list",
          title: "Business benefits:",
          items: ["Faster user onboarding", "Reduced form friction", "Higher conversion rates", "Increased platform trust"]
        }, {
          type: "text",
          content: "Ideal for: Fleet operators, rental services, car marketplaces, and registration platforms.",
          isHighlight: true
        }]
      }, {
        id: "flow-4",
        title: "Prevent Fraud & Verify Vehicle Identity",
        subtitle: "Flow 4",
        content: [{
          type: "text",
          content: "Cross-reference VIN data with government and insurance records to verify vehicle authenticity."
        }]
      }, {
        id: "flow-6",
        title: "Reduce Development Time & Accelerate Product Launch",
        subtitle: "Flow 6",
        content: [{
          type: "text",
          content: "Our easy-to-integrate REST APIs allow developers to build vehicle-centric features in days, not months."
        }]
      }]
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "FAQAccordion",
    items: [{
      id: "1",
      question: "What is Vehicle Databases?",
      answer: "Vehicle Databases provides accurate vehicle data and VIN decoding APIs. Our API database helps businesses access essential vehicle information, streamline development, and enhance their products."
    }, {
      id: "2",
      question: "How to use car API?",
      answer: "Using our car API is simple. Once you have an API key, you can make RESTful requests to our endpoints with a VIN or vehicle parameters to receive structured JSON data."
    }, {
      id: "3",
      question: "How can Vehicle Databases benefit my company?",
      answer: "It streamlines inventory management, powers search filters, and provides accurate technical specifications for automotive platforms, leading to better user experiences."
    }, {
      id: "4",
      question: "Why choose Vehicle Databases?",
      answer: "We offer the most comprehensive and up-to-date dataset for US vehicles, with high uptime, low latency, and a developer-friendly API."
    }, {
      id: "5",
      question: "What is an automotive database?",
      answer: "An automotive database is a structured collection of technical data about vehicles, including makes, models, years, specifications, and VIN-related information."
    }]
  }
}`,...E.parameters?.docs?.source}}},D=[`DeveloperExperience`,`AccordionGrid`,`FAQ`]}))();export{T as AccordionGrid,w as DeveloperExperience,E as FAQ,D as __namedExportsOrder,C as default};