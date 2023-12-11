"use client";

import React, { useEffect } from "react";

const CalendlyComponent = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div className="calendly-inline-widget h-[675px]" data-url={url}></div>
  );
};

export default CalendlyComponent;
