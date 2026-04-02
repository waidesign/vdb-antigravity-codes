import{n as e}from"./chunk-Bj-mKKzh.js";import{n as t,t as n}from"./code-snippet-ByTUTbFG.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`UI/Intro/Sub-components/CodeSnippet`,component:n,parameters:{layout:`centered`},tags:[`autodocs`]},i={args:{variant:`default`,code:`{
  "status": "success",
  "data": {
    "vin": "5TQYK30D8FS503804",
    "make": "Tesla",
    "model": "Model Y"
  }
}`}},a={args:{variant:`with-language-selector`}},o={args:{variant:`with-image`,code:`import requests

url = "https://api.vehicledatabases.com/lookup"
response = requests.get(url, params={"vin": "..."})
print(response.json())`,image:`https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop`,alt:`Tesla Model Y Overlay`}},s={args:{variant:`with-language-selector`,minWidth:`800px`,maxHeight:`500px`}},c={args:{variant:`WithCardAndLists`,code:`{
  "year": 2023,
  "make": "Harley-Davidson",
  "model": "Road Glide Special",
  "trim": "Base",
  "price": {
    "base_msrp": 30000,
    "delivery_charges": "N/A",
    "currency": "USD"
  },
  "vehicle": {
    "class": "Class III",
    "category": "Touring"
  }
}`,items:[{label:`Year`,value:`2023`},{label:`Make`,value:`Harley-Davidson`},{label:`Model`,value:`Road Glide Special`}],sideCard:{title:`API Documentation`,description:`We stand committed to providing a seamless and efficient solution to meet the diverse needs of your business within the automotive landscape. As you peruse this documentation, anticipate a rich source of knowledge that will facilitate the effortless integration of these APIs.`,buttonText:`View Documentation`,buttonHref:`#`}}},l={args:{variant:`AdvancedVsBasic`,toggleOptions:[{id:`advanced`,label:`Advanced VIN Decoder`,code:`{
  "status": "success",
  "data": {
    "intro": {
      "vin": "WBA3A5C50FP604594"
    },
    "basic": {
      "make": "BMW",
      "model": "328I",
      "year": "2015",
      "trim": "3-SERIES",
      "body_type": "Sedan/Saloon",
      "vehicle_type": "Passenger Car",
      "doors": "4",
      "vehicle_size": "",
      "seating_capacity": ""
    },
    "engine": {
      "cylinders": "4"
    }
  }
}`},{id:`basic`,label:`Basic VIN Decoder`,code:`{
  "status": "success",
  "data": {
    "vin": "WBA3A5C50FP604594",
    "make": "BMW",
    "model": "328I",
    "year": "2015"
  }
}`}]}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    code: \`{
  "status": "success",
  "data": {
    "vin": "5TQYK30D8FS503804",
    "make": "Tesla",
    "model": "Model Y"
  }
}\`
  }
}`,...i.parameters?.docs?.source},description:{story:`DEFAULT: CLEAN CODE WINDOW
Scenario: Basic JSON output, no image, no selector.`,...i.parameters?.docs?.description}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "with-language-selector"
  }
}`,...a.parameters?.docs?.source},description:{story:`WITH LANGUAGE SELECTOR
Scenario: Full developer integration mockup with Node, React, PHP, Python tabs.`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "with-image",
    code: \`import requests\\n\\nurl = "https://api.vehicledatabases.com/lookup"\\nresponse = requests.get(url, params={"vin": "..."})\\nprint(response.json())\`,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop",
    alt: "Tesla Model Y Overlay"
  }
}`,...o.parameters?.docs?.source},description:{story:`WITH IMAGE (formerly Python)
Scenario: Code window with an overlaid vehicle image.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "with-language-selector",
    minWidth: "800px",
    maxHeight: "500px"
  }
}`,...s.parameters?.docs?.source},description:{story:`SPECIAL SIZING
Scenario: Adjusted constraints for a specific layout.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "WithCardAndLists",
    code: \`{
  "year": 2023,
  "make": "Harley-Davidson",
  "model": "Road Glide Special",
  "trim": "Base",
  "price": {
    "base_msrp": 30000,
    "delivery_charges": "N/A",
    "currency": "USD"
  },
  "vehicle": {
    "class": "Class III",
    "category": "Touring"
  }
}\`,
    items: [{
      label: "Year",
      value: "2023"
    }, {
      label: "Make",
      value: "Harley-Davidson"
    }, {
      label: "Model",
      value: "Road Glide Special"
    }],
    sideCard: {
      title: "API Documentation",
      description: "We stand committed to providing a seamless and efficient solution to meet the diverse needs of your business within the automotive landscape. As you peruse this documentation, anticipate a rich source of knowledge that will facilitate the effortless integration of these APIs.",
      buttonText: "View Documentation",
      buttonHref: "#"
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`WITH CARD AND LISTS
Scenario: Professional API dashboard view with entity details and documentation link.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "AdvancedVsBasic",
    toggleOptions: [{
      id: "advanced",
      label: "Advanced VIN Decoder",
      code: \`{
  "status": "success",
  "data": {
    "intro": {
      "vin": "WBA3A5C50FP604594"
    },
    "basic": {
      "make": "BMW",
      "model": "328I",
      "year": "2015",
      "trim": "3-SERIES",
      "body_type": "Sedan/Saloon",
      "vehicle_type": "Passenger Car",
      "doors": "4",
      "vehicle_size": "",
      "seating_capacity": ""
    },
    "engine": {
      "cylinders": "4"
    }
  }
}\`
    }, {
      id: "basic",
      label: "Basic VIN Decoder",
      code: \`{
  "status": "success",
  "data": {
    "vin": "WBA3A5C50FP604594",
    "make": "BMW",
    "model": "328I",
    "year": "2015"
  }
}\`
    }]
  }
}`,...l.parameters?.docs?.source},description:{story:`ADVANCED VS BASIC
Scenario: Comparison view between advanced and basic API responses.`,...l.parameters?.docs?.description}}},u=[`Default`,`WithLanguageSelector`,`WithImage`,`SpecialSizing`,`WithCardAndLists`,`AdvancedVsBasic`]}))();export{l as AdvancedVsBasic,i as Default,s as SpecialSizing,c as WithCardAndLists,o as WithImage,a as WithLanguageSelector,u as __namedExportsOrder,r as default};