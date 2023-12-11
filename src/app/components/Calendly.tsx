"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <section className="calendly flex xl:flex-row flex-col md:mx-20 items-center justify-between">
      <section className="text">
        <h2 className="text-3xl">
          Get Your Free 15-Minute Email Strategy Demo with Hayder
        </h2>
        <p className="text-xl font-bold">
          Stop the $90 leak per customer. Warm them up with emails that turn
          leads into loyalty.
        </p>
        <p>
          {" "}
          In just a quarter-hour, you&apos;ll get clear next steps for driving
          steady and dependable online success for your business via email
          marketing.
        </p>
        <section className="list-1">
          <p>
            <b>Perfect for businesses ready to:</b>
          </p>
          <ul className="list-none">
            <li className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faCheck} className="text-green-700" />
              Scale beyond $50k/month.
            </li>
            <li className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faCheck} className="text-green-700" />
              Partner with a trusted email marketing team for the long term.
            </li>
            <li className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faCheck} className="text-green-700" />
              Leverage proven expertise and witness tangible, trackable results.
            </li>
          </ul>
        </section>
        <section className="list-2">
          <p>
            <b>Perfect for businesses ready to:</b>
          </p>
          <ul className="list-none">
            <li className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faCheck} className="text-green-700" />
              Scale beyond $50k/month.
            </li>
            <li className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faCheck} className="text-green-700" />
              Partner with a trusted email marketing team for the long term.
            </li>
            <li className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faCheck} className="text-green-700" />
              Leverage proven expertise and witness tangible, trackable results.
            </li>
          </ul>
        </section>
      </section>
      <div
        className="calendly-inline-widget xl:min-w-[1024px] h-[675px]"
        data-url={url}
      ></div>
    </section>
  );
};

export default CalendlyComponent;
