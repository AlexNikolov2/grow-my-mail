"use client";

import Image from "next/image";
import { useState } from "react";

export function DropdownsWhy() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const toggleElement = (index: number) => {
    setOpenedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const items = [
    {
      title: "Predictability",
      content:
        "The average partner is proven to grow email sales by 106.4% in the first 6 months of working with us.",
    },
    {
      title: "Pay for results",
      content:
        "Not for set-up. Not for an office. Not for 50 employees. Our philosophy: we make a lot of money when you make a lot of money.",
    },
    {
      title: "Safety and security",
      content:
        "Relax as we alleviate the stress of managing an in-house team and the financial uncertainties of hiring and turnover. We provide you with access to top-tier, world-class talent that's second to none, removing the risk and ensuring your peace of mind.",
    },
    {
      title: "Steady growth",
      content:
        "We’ll evolve at a pace you can keep up with; we won’t make a revolution where we scale you up too quickly and you break the logistic chain.",
    },
    {
      title: "Success, driven by math",
      content:
        "We don’t rely on luck. We engineer success based on data. We analyze best-performing email campaigns and opportunities and capitalize on those. ",
    },
    {
      title: "Magic! (not quite)",
      content:
        "We actually read the numbers in your Shopify and Klaviyo accounts and make careful calculations on how to get you from X to Y in email sales. And then we just do it. Some people call it magic, we call it financial intelligence.",
    },
    {
      title: "Focused",
      content:
        "Our focus is laser sharp. Some clients get offended, but we don’t offer our services to everyone. We’ve got a very specific ideal client type and only offer our services if we are 100% certain that we can help. ",
    },
  ];

  return (
    <section className="dropdown-wrap mx-20">
      <h2 className="text-4xl">Why us?</h2>
      <section className="dropdown-items-wrap flex gap-10 justify-between">
        <section className="items-all font-bold flex-grow">
          {items.map((item, index) => (
            <section
              key={index}
              className={`item-dropdown text-2xl border-primary ${
                openedIndex === index ? "active" : ""
              }`}
              onClick={() => toggleElement(index)}
            >
              {item.title}
            </section>
          ))}
        </section>
        <section className="items-display lg:w-[900px]">
          <section className="item-display-wrap">
            {items.map((item, index) => (
              <section
                key={index}
                className={`item-display box-border my-2 mx-4 ${
                  openedIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-3xl font-bold">{item.title}</p>
                <p className="text-xl">{item.content}</p>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
}

{
  /*return (
    <section className="dropdown-wrap mx-20">
      <h2 className="text-4xl">Why us?</h2>
      <section className="dropdown-items-wrap flex gap-10 justify-between">
        <section className="items-all font-bold flex-grow">
          <section
            className="item-dropdown text-2xl border-primary"
            onClick={toggleElement}
          >
            Predictability
          </section>
          <section
            className="item-dropdown text-2xl border-primary"
            onClick={toggleElement}
          >
            Pay for results
          </section>
          <section
            className="item-dropdown text-2xl border-primary"
            onClick={toggleElement}
          >
            Safety and security
          </section>
          <section
            className="item-dropdown text-2xl border-primary"
            onClick={toggleElement}
          >
            Steady growth
          </section>
          <section
            className="item-dropdown text-2xl border-primary"
            onClick={toggleElement}
          >
            Success, driven by math
          </section>
          <section
            className="item-dropdown text-2xl border-primary"
            onClick={toggleElement}
          >
            Magic! (not quite)
          </section>
          <section
            className="item-dropdown text-2xl border-primary"
            onClick={toggleElement}
          >
            Focused
          </section>
        </section>
        <section className="items-display max-w-[900px]">
          <section className="item-display-wrap">
            <section
              className={
                "item-display box-border my-2 mx-4 " +
                (isOpened ? "block" : "hidden")
              }
            >
              <p className="text-3xl font-bold">Predictability</p>
              <p className="text-xl">
                The average partner is proven to grow email sales by 106,4% in
                the first 6 months of working with us.
              </p>
            </section>
            <section
              className={
                "item-display box-border my-2 mx-4 " +
                (isOpened ? "block" : "hidden")
              }
            >
              <p className="text-3xl">Pay for results</p>
              <p className="text-xl">
                Not for set-up.
                <br /> Not for an office. <br /> Not for 50 employees.
                <br /> Our philosophy: we make a lot of money when you make a
                lot of money
              </p>
            </section>

            <section
              className={
                "item-display box-border my-2 mx-4 " +
                (isOpened ? "block" : "hidden")
              }
            >
              <p className="text-3xl">Safety and security</p>
              <p className="text-xl">
                Relax as we alleviate the stress of managing an in-house team
                and the financial uncertainties of hiring and turnover.
              </p>
              <p className="text-xl">
                We provide you with access to top-tier, world-class talent
                that&apos;s second to none, removing the risk and ensuring your
                peace of mind.
              </p>
            </section>
            <section
              className={
                "item-display box-border my-2 mx-4 " +
                (isOpened ? "block" : "hidden")
              }
            >
              <p className="text-3xl">Steady growth</p>
              <p className="text-xl">
                We’ll evolve at a pace you can keep up with; we won’t make a
                revolution where we scale you up too quickly and you break the
                logistic chain.
              </p>
            </section>
            <section
              className={
                "item-display box-border my-2 mx-4 " +
                (isOpened ? "block" : "hidden")
              }
            >
              <p className="text-3xl">Success, driven by math</p>
              <p className="text-xl">
                <p>We don’t rely on luck.</p>
                <p>We engineer success based on data.</p>
                <p>
                  We analyze best-performing email campaigns and opportunities
                  and capitalize on those.
                </p>
              </p>
            </section>
            <section
              className={
                "item-display box-border my-2 mx-4 " +
                (isOpened ? "block" : "hidden")
              }
            >
              <p className="text-3xl">Magic! (not quite)</p>
              <p className="text-xl">
                The average partner is proven to grow email sales by 106,4% in
                the first 6 months of working with us.
              </p>
            </section>
            <section
              className={
                "item-display box-border my-2 mx-4 " +
                (isOpened ? "block" : "hidden")
              }
            >
              <p className="text-3xl">Focused</p>
              <p className="text-xl">
                The average partner is proven to grow email sales by 106,4% in
                the first 6 months of working with us.
              </p>
            </section>
          </section>
        </section>
      </section>
    </section>
    }
  );*/
}
export function DropdownsHelp() {
  return (
    <section className="dropdown-wrap">
      <h2>Why us?</h2>
      <section className="dropdown-items-wrap">
        <section className="items-all">
          <section className="item-dropdown">Predictability</section>
          <section className="item-dropdown">Pay for results</section>
          <section className="item-dropdown">Safety and security</section>
          <section className="item-dropdown">Steady growth</section>
          <section className="item-dropdown">Success, driven by math</section>
          <section className="item-dropdown">Magic! (not quite)</section>
          <section className="item-dropdown">Focused</section>
        </section>
        <section className="item-display">
          <section className="item-display-wrap">
            <section className="item-display">
              <p className="text-3xl">Predictability</p>
              <p className="text-xl">
                The average partner is proven to grow email sales by 106,4% in
                the first 6 months of working with us.
              </p>
            </section>
            <section className="item-display">
              <p className="text-3xl">Pay for results</p>
              <p className="text-xl">
                Not for set-up.
                <br /> Not for an office. <br /> Not for 50 employees.
                <br /> Our philosophy: we make a lot of money when you make a
                lot of money
              </p>
            </section>

            <section className="item-display">
              <p className="text-3xl">Safety and security</p>
              <p className="text-xl">
                Relax as we alleviate the stress of managing an in-house team
                and the financial uncertainties of hiring and turnover.
              </p>
              <p className="text-xl">
                We provide you with access to top-tier, world-class talent
                that&apos;s second to none, removing the risk and ensuring your
                peace of mind.
              </p>
            </section>
            <section className="item-display">
              <p className="text-3xl">Steady growth</p>
              <p className="text-xl">
                We’ll evolve at a pace you can keep up with; we won’t make a
                revolution where we scale you up too quickly and you break the
                logistic chain.
              </p>
            </section>
            <section className="item-display">
              <p className="text-3xl">Success, driven by math</p>
              <p className="text-xl">
                <p>We don’t rely on luck.</p>
                <p>We engineer success based on data.</p>
                <p>
                  We analyze best-performing email campaigns and opportunities
                  and capitalize on those.
                </p>
              </p>
            </section>
            <section className="item-display">
              <p className="text-3xl">Magic! (not quite)</p>
              <p className="text-xl">
                The average partner is proven to grow email sales by 106,4% in
                the first 6 months of working with us.
              </p>
            </section>
            <section className="item-display">
              <p className="text-3xl">Focused</p>
              <p className="text-xl">
                The average partner is proven to grow email sales by 106,4% in
                the first 6 months of working with us.
              </p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
