"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const apis = [
    {
        name: "Vehicle Market Value API",
        description:
            "Vehicle market value API works as an Edmunds API alternative, allows you to get instant access to any vehicle's accurate market value pricing. We compute used and new car values by analyzing millions of actual sales transactions and auction prices.",
    },
    {
        name: "VIN Decoder API",
        description:
            "Our VIN Decoder API provides comprehensive vehicle details including year, make, model, trim, engine type, transmission, and over 50+ data points from a single VIN lookup.",
    },
    {
        name: "Maintenance API",
        description:
            "Get the recommended maintenance schedule and intervals for any vehicle by VIN or year, make, and model. Perfect for building service reminder features into your application.",
    },
    {
        name: "License Plate API",
        description:
            "Decode any US license plate into a VIN and full vehicle details instantly. Supports all 50 states with near-real-time data synchronization.",
    },
    {
        name: "OCR API",
        description:
            "Capture VINs and license plate numbers from images using our advanced Optical Character Recognition API. Returns decoded text and vehicle data in a single request.",
    },
];

const codeSnippets: Record<string, Record<string, string>> = {
    Node: {
        "Vehicle Market Value API": `var request = require('request');

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
});`,
        default: `var request = require('request');

var options = {
  'method': 'GET',
  'url': 'https://api.vehicledatabases.com/{endpoint}/{vin}',
  'headers': {
    'x-AuthKey': '{X-Authkey}'
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});`,
    },
    React: {
        "Vehicle Market Value API": `import { useEffect, useState } from 'react';

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
}`,
        default: `import { useEffect, useState } from 'react';

export function ApiDataFetcher({ vin }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(\`https://api.vehicledatabases.com/{endpoint}/\${vin}\`, {
      headers: { 'x-AuthKey': '{X-Authkey}' }
    })
      .then(res => res.json())
      .then(setData);
  }, [vin]);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,
    },
    PHP: {
        default: `<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.vehicledatabases.com/{endpoint}/{vin}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    "x-AuthKey: {X-Authkey}"
  ],
]);

$response = curl_exec($curl);
curl_close($curl);

echo $response;
?>`,
    },
    Python: {
        default: `import requests

url = "https://api.vehicledatabases.com/{endpoint}/{vin}"

headers = {
    "x-AuthKey": "{X-Authkey}"
}

response = requests.get(url, headers=headers)
print(response.json())`,
    },
};

const tabs = ["Node", "React", "PHP", "Python"];

export function ApiCompareSection() {
    const [openIndex, setOpenIndex] = useState(0);
    const [activeTab, setActiveTab] = useState("Node");

    const selectedApi = apis[openIndex].name;
    const snippetMap = codeSnippets[activeTab];
    const snippet = snippetMap?.[selectedApi] ?? snippetMap?.["default"] ?? "";

    return (
        <section className="w-full" style={{ padding: "80px 0", background: "#000000" }}>
            <div className="section-content px-10 lg:px-20 flex flex-col gap-20">
                {/* Header */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <span className="font-aileron font-semibold" style={{ fontSize: 40, lineHeight: "1.2em", color: "#A9ADB5" }}>
                            Simple Documentation -
                        </span>
                        <span className="font-aileron font-semibold text-white" style={{ fontSize: 40, lineHeight: "1.2em" }}>
                            A Better Developer Experience
                        </span>
                    </div>
                    <p className="font-geist max-w-2xl" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                        Our easy and straightforward documentation provides a stellar experience to developers making API
                        integration smoother than ever.
                    </p>
                </div>

                {/* Equal-width two-column panel */}
                <div
                    className="w-full flex rounded-3xl overflow-hidden"
                    style={{ border: "1px solid #8C929D" }}
                >
                    {/* Left: API accordion list — 50% */}
                    <div className="flex flex-col" style={{ width: "50%", borderRight: "1px solid #8C929D" }}>
                        {apis.map((api, i) => (
                            <div key={api.name} style={{ borderBottom: i < apis.length - 1 ? "1px solid #8C929D" : "none" }}>
                                {/* Accordion header */}
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                    className="flex items-center justify-between gap-4 p-6 w-full text-left transition-colors hover:bg-white/5"
                                    style={{ background: "#16181A" }}
                                >
                                    <span className="font-aileron font-semibold text-white" style={{ fontSize: 20, lineHeight: "1.4em" }}>
                                        {api.name}
                                    </span>
                                    {openIndex === i ? (
                                        <ChevronUp size={20} className="text-white shrink-0" />
                                    ) : (
                                        <ChevronDown size={20} className="text-white shrink-0" />
                                    )}
                                </button>

                                {/* Accordion body */}
                                {openIndex === i && (
                                    <div className="flex flex-col gap-4 px-6 pb-6" style={{ background: "#16181A" }}>
                                        <p className="font-geist" style={{ fontSize: 16, lineHeight: "1.5em", color: "#A9ADB5" }}>
                                            {api.description}
                                        </p>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-2 font-aileron font-semibold text-base transition-opacity hover:opacity-80"
                                            style={{
                                                color: "rgba(255,255,255,0.92)",
                                                border: "1px solid rgba(255,255,255,0.92)",
                                                padding: "8px 16px",
                                                borderRadius: 8,
                                                width: "fit-content",
                                            }}
                                        >
                                            Learn more
                                            <Image src="/images/arrow-right.svg" alt="" width={13} height={13} />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right: Code viewer — 50% */}
                    <div className="flex flex-col" style={{ width: "50%", background: "#16181A" }}>
                        {/* Header bar */}
                        <div className="flex items-center gap-3 px-6 py-4" style={{ borderBottom: "1px solid #8C929D" }}>
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="font-aileron font-semibold text-base text-white ml-2">{"</>"} Code</span>
                        </div>

                        {/* Language tabs */}
                        <div className="flex items-center gap-2 px-6 py-4" style={{ borderBottom: "1px solid #8C929D" }}>
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg font-aileron font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
                                    style={
                                        activeTab === tab
                                            ? {
                                                background: "rgba(245,145,32,0.15)",
                                                border: "1px solid #F59120",
                                                color: "#F59120",
                                            }
                                            : {
                                                background: "transparent",
                                                border: "1px solid #8C929D",
                                                color: "#FFFFFF",
                                            }
                                    }
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Code block */}
                        <div className="flex flex-col flex-1 p-6">
                            <div
                                className="rounded-xl p-6 flex-1 overflow-x-auto"
                                style={{ background: "#0D0E10", minHeight: 240 }}
                            >
                                <pre
                                    className="font-geist text-white"
                                    style={{ fontSize: 13, lineHeight: "1.6em", whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                                >
                                    {snippet}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white transition-opacity hover:opacity-80"
                        style={{ background: "linear-gradient(90deg, rgba(245,145,32,1) 0%, rgba(151,71,255,1) 100%)" }}
                    >
                        View Documentation
                        <Image src="/images/arrow-white.svg" alt="" width={5} height={9} />
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-aileron font-semibold text-base text-white border border-white transition-opacity hover:opacity-80"
                    >
                        Schedule a Demo
                        <Image src="/images/calendar-icon.svg" alt="" width={13} height={13} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
