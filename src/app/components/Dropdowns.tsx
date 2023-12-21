"use client";

import Image from "next/image";
import { useState } from "react";

export function DropdownsWhy() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(0);

  const toggleElement = (index: number) => {
    setOpenedIndex((prevIndex) => (prevIndex = index));
  };

  const items = [
    {
      title: "Predictability",
      content:
        "The average partner is proven to grow retention sales by 106.4% in the first 6 months of working with us.",
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
        "We don’t rely on luck. We engineer success based on data. We analyze best-performing  campaigns and opportunities and capitalize on those. ",
    },
    {
      title: "Magic! (not quite)",
      content:
        "We actually read the numbers in your Shopify and Klaviyo accounts and make careful calculations on how to get you from X to Y in retention sales. And then we just do it. Some people call it magic, we call it financial intelligence.",
    },
    {
      title: "Focused",
      content:
        "Our focus is laser sharp. Some clients get offended, but we don’t offer our services to everyone. We’ve got a very specific ideal client type and only offer our services if we are 100% certain that we can help. ",
    },
  ];

  return (
    <section className="dropdown-wrap mx-5 md:mx-20 my-10">
      <h2 className="text-4xl">Why us?</h2>
      <section className="dropdown-items-wrap flex md:flex-row flex-col gap-10 justify-between">
        <section className="items-all font-bold flex-grow">
          {items.map((item, index) => (
            <section
              key={index}
              className={`item-dropdown text-2xl bg-primary text-neutral ${openedIndex === index ? "active" : ""
                }`}
              onClick={() => toggleElement(index)}
            >
              {item.title}
            </section>
          ))}
        </section>
        <section className="items-display lg:w-[900px] bg-gradient-to-br from-primary to-black">
          <section className="item-display-wrap ">
            {items.map((item, index) => (
              <section
                key={index}
                className={`item-display box-border my-2 mx-4 text-neutral ${openedIndex === index ? "block" : "hidden"
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

export function DropdownsHelp() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(0);

  const toggleElement = (index: number) => {
    setOpenedIndex((prevIndex) => (prevIndex = index));
  };

  const items = [
    {
      title: "Reduce churn/ CPA",
      content:
        " imagine this: you’ve spent 90$ to acquire a customer, and then no one looks after them; no emails sent; so when you send a message to them in 6 months, they are as cold as Alaska! So you need to spend another $90 to aquire them; when if you nurtured them, not only would you not have to spend these $90 again, but you could make 2-3 extra sales from these folks that otherwise died off… Looking at a larger scale: 12 months, 10k customers, $90 per customer aquision,  $900k spent in aquisition... Would you rather spent another $900k in acquisition, or $50-100k in marketing to get these people to buy again?",
    },
    {
      title: "Recover lost sales",
      content:
        "7/10 people leave checkout without buying. 99% of them lost forever without a proper email strategy; on 10k folks reaching checkout over 12 months, 7k will leave without checking out. If Average Order Value is $150, that’s over $1M in lost revenue.",
    },
    {
      title: "Get out of spam",
      content:
        "if your open rate is below 25% - your emails probably end up in spam or promotions. A healthy open rate should not fall below 30-35%. In fact, we aim for our client’s open rates to be at least 40%. Why is this important? If you’ve got a 10% open rate, rather than 40% open rate, 4x less people saw your email, so you made up to 4x less money. If that 10% opened email made $5k in sales, you lost up to $15k you could have made if the open rate was 40%. If you are sending 5 email campaigns per month, that’s up to 80k in lost revenue per month, or up to $960k in lost revenue over a year. ",
    },
    {
      title: "Increase customer LTV",
      content:
        "Our partners increased LTV by an average of 17.27% in the first six months of working with us. Our research shows that the average lifetime value of a customer is 1.39 orders. If we take a real life scenario, 1.39 + 17.27% = 1.63. That’s 0.24 difference. On 10 000 orders per year, that’s 2400 lost orders. If AOV is $150, that’s 360k in lost revenue per year. Our aim is to get that number up to 2.0 (and above). 2.0 - 1.39 = 0,61. On 10 000 orders per year, that’s 6100 lost orders. If AOV (average order value) is $150, that’s $915k in lost revenue per year. The way we increase customer lifetime value is by encouraging repeat purchases and upselling clients through a combination of automations (flows) and email campaigns. ",
    },
    {
      title: "Increase AOV",
      content:
        "Our partners increased AOV by an average of 39.13% in the first six months of working with us. Let’s take a real life scenario: Say your average order value is $100. On 10k orders, that’s $1M in revenue. If we were to increase the Average Order Value by 39.13% ($139,1), that’s $391k in additional revenue from the same customers that you don’t have to spend any extra money on! If we take that number up to $150 (not impossible), you will be making 50% more revenue from the same customers without having to spend anything additionally for acquisition. We increase the AOV by using a combination of proven strategies in email campaigns and automations. ",
    },
    {
      title: "Increase retention",
      content:
        "According to an internal research we have conducted, 47% of one time buyers never buy again, and 31% of second time buyers never buy again. That’s 78% of your customers lost after the first or second sale! If we go back to our first example, 10k customers, $90 per acquisition, $900k in acquisition cost, 78% of 900k is $702k in acquisition that you have to spend again to get those 78% to buy again. We use a combination of simple tactics to get people to become loyal customers, thus saving you hundreds of thousands of dollars in additional acquisition costs.",
    },
    {
      title: "Increase customer satisfaction",
      content:
        "Proper email marketing creates deeper customer relationships. Happier customers are on average 17% more likely to refer your business to a friend. If you got 10k happy customers this year, they could bring another 1700 customers. AOV is $150, that’s $255k in potential revenue per year. Next year, you got another 10k new customers + 1700 referred customers - 11,7k happy customers, ready to refer 1989 new customers ($298,350 in potential revenue) - and so it compounds over the years. Year 5: 21,924 new customers; potential revenue of about $3,288,672. In Year 20: 231,056 new customers; potential revenue of about $34,658,399",
    },
  ];

  return (
    <section className="dropdown-wrap mx-5 md:mx-20">
      <h2 className="text-4xl">How we can help:</h2>
      <section className="dropdown-items-wrap flex md:flex-row flex-col gap-10 justify-between">
        <section className="items-all font-bold flex-grow">
          {items.map((item, index) => (
            <section
              key={index}
              className={`item-dropdown text-2xl bg-primary text-neutral ${openedIndex === index ? "active" : ""
                }`}
              onClick={() => toggleElement(index)}
            >
              {item.title}
            </section>
          ))}
        </section>
        <section className="items-display lg:w-[900px] bg-gradient-to-br from-primary to-black">
          <section className="item-display-wrap">
            {items.map((item, index) => (
              <section
                key={index}
                className={`item-display box-border my-2 mx-4 text-neutral ${openedIndex === index ? "block" : "hidden"
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
