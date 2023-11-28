import Image from "next/image";
import hero from "../../public/img/hero.png";
import img1 from "../../public/img/stress.png";
import img2 from "../../public/img/less-work.png";
import img3 from "../../public/img/more-results.png";

import image from "../../public/next.svg";

export default function Home() {
  return (
    <>
      <main className="prose">
        <section className="hero linear bg-gradient-to-r from-primary to-black text-neutral flex justify-around py-5 px-5 md:py-10 md:pb-20 md:px-20 gap-20 w-full">
          <section className="hero-left mt-16">
            <h1 className="text-neutral my-7 text-5xl">
              Boosting email conversions by an average of $3,150,900 for DTC
              brands
            </h1>
            <h3 className="text-neutral my-5">
              Most brands lose an average of $1,260,360 - $6,301,800 in email
              revenue over a period of two years. We are here to help you claim
              that revenue back + boost email conversions and customer retention
              rates even further.
            </h3>
            <section className="btn btn-secondary mt-8">Apply here</section>
          </section>
          {/*
            INSTALL CLOUDINARY-REACT
            IMPLEMENT VIDEO FROM CLOUDINARY-REACT
          */}
          <section className="hero-right hidden md:flex md:items-center">
            <Image src={hero} alt=""></Image>
          </section>
        </section>
        <section className="features text-center ">
          <h2 className="text-3xl">
            Small part of the results <br /> we’ve gotten for our clients
          </h2>
          <section className="features-items flex flex-col md:flex-row justify-center items-center gap-24">
            <section className="feature-item">
              <Image src={img1} alt="" className="w-64 h-64"></Image>
              <h3 className="font-bold text-2xl">Less stress</h3>
            </section>
            <section className="feature-item">
              <Image src={img2} alt="" className="w-64"></Image>
              <h3 className="font-bold text-2xl">Less work</h3>
            </section>
            <section className="feature-item">
              <Image src={img3} alt="" className="w-64"></Image>
              <h3 className="font-bold text-2xl">More results</h3>
            </section>
          </section>
        </section>
        <hr className="w-auto h-[2px] my-4 mx-20 bg-gradient-to-r from-white via-primary to-white border-0 rounded md:my-16"></hr>
        <section className="brands text-center scroller">
          <h2 className="text-3xl">Brands that work with us:</h2>
          <section className="brands-img">{/*images here */}</section>
        </section>
        <hr className="w-auto h-[2px] my-4 mx-20 bg-gradient-to-r from-white via-primary to-white border-0 rounded md:my-16"></hr>
        <section className="feature-one">
          <section className="text">
            <h2>
              Navigate calmer skies while getting sales on autopilot &
              increasing customer LTV.
            </h2>
            <p>
              Why email? Warning: (almost) free money! Capitalise on existing
              customers without spending additionally on ads to acquire new ones
              It is 5x cheaper to sell to an existing customer than to aquire a
              new one. Email ROI is up to 39x (yes, you read that right)
            </p>
          </section>
          <section className="img">
            <Image src={image} alt=""></Image>
          </section>
        </section>
        <section className="feature-two">
          <section className="img">
            <Image src={image} alt=""></Image>
          </section>
          <section className="text">
            <h2>Success, broken down to simple mathematics.</h2>
            <p>
              The average partner grows email sales by an average of 106,4% in
              the first 6 months of working with us. You pay for results. Not
              for set-up. Not for a swanky office. Not for bloated payroll. We
              don’t rely on luck. We engineer success based on data. We analyze
              best-performing email campaigns and opportunities and capitalize
              on those.
            </p>
          </section>
        </section>
        <section className="guess">
          <h2>We don’t guess.</h2>
          <p>
            We make careful calculations on how to get you from X to Y in email
            sales.
          </p>
        </section>
        <section className="book-a-call">
          <h2>Start your e-mail expansion</h2>
          <p>
            You wonder when to start your e-mail marketing expansion? THe right
            time is <b>NOW!</b>Book your call today and establish your marketing
            presence.
          </p>
        </section>
        <section className="crit">
          <h2>Are you a good fit? If you:</h2>
          <section className="criterias">
            <p className="text-2xl"></p>
            <p className="text-2xl"></p>
            <p className="text-2xl"></p>
          </section>
        </section>
      </main>
    </>
  );
}
