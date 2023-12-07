import Image from "next/image";
import hero from "../../public/img/hero.png";
import img1 from "../../public/img/stress.png";
import img2 from "../../public/img/less-work.png";
import img3 from "../../public/img/more-results.png";
import feature_img1 from "../../public/img/Email-Campaigns-smaller.webp";
import xy from "../../public/img/x-to-y.png";
import Slider from "./components/Slider";
import { DropdownsHelp } from "./components/Dropdowns";
import image from "../../public/next.svg";
import { DropdownsWhy } from "./components/Dropdowns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import numbersImg from "../../public/img/numbers.png";
import founderImg from "../../public/img/founder.jpg";

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
        <hr className="w-auto h-[2px] my-4 mx-20 bg-gradient-to-r from-white via-primary to-white border-0 rounded md:my-10"></hr>
        <section className="brands text-center scroller">
          <h2 className="text-3xl">Brands that work with us:</h2>
          <Slider></Slider>
        </section>
        <hr className="w-auto h-[2px] my-4 mx-20 bg-gradient-to-r from-white via-primary to-white border-0 rounded md:my-10"></hr>
        <section className="feature-one flex flex-col md:flex-row md:ml-24 justify-end items-center">
          <section className="text md:w-1/2 mx-5 text-center md:text-left md:relative md:left-40">
            <h2 className="text-4xl">
              Helped brands generate over 10M in email attributed revenue.
            </h2>
            <p>
              Why email? It means getting <b>free money</b>! Capitalise on
              existing customers without spending additionally on ads to acquire
              new ones It is <b>5x cheaper</b> to sell to an existing customer
              than to aquire a new one. Email ROI is up to <b>39x</b>! Yes, you
              read that right!
            </p>
          </section>
          <section className="img">
            <Image src={feature_img1} alt="" className="w-max"></Image>
          </section>
        </section>
        <section className="guess bg-primary pt-6 pb-10 mx-auto text-center flex flex-col">
          <h2 className="text-4xl font-black text-neutral">We don’t guess.</h2>
          <p className="text-neutral font-bold">
            We make careful calculations on how to get you from X to Y in email
            sales.
          </p>
        </section>
        <DropdownsWhy></DropdownsWhy>
        <hr className="w-auto h-[2px] my-4 mx-20 bg-gradient-to-r from-white via-primary to-white border-0 rounded md:my-10"></hr>
        <DropdownsHelp></DropdownsHelp>
        <hr className="w-auto h-[2px] my-4 mx-20 bg-gradient-to-r from-white via-primary to-white border-0 rounded md:my-10"></hr>
        <section className="averages-wrap md:px-20">
          <h2 className="text-3xl">Our 6 month averages</h2>
          <section className="wrapper flex md:flex-row flex-col gap-10 py-10 items-center justify-between">
            <section className="numbers flex gap-12 flex-wrap justify-center items-center basis-1/2">
              <p className="stat text-center">
                <p className="text-4xl font-bold text-primary">39.13%</p>
                <p className="text-xl">Increase in AOV</p>
              </p>
              <p className="stat text-center">
                <p className="text-4xl font-bold text-primary">17.27%</p>
                <p className="text-xl">Increase in customer LTV</p>
              </p>
              <p className="stat text-center">
                <p className="text-6xl font-bold text-primary my-3">106.4%</p>
                <p className="text-2xl my-2">
                  Increase in email attributed revenue
                </p>
              </p>
            </section>
            <Image src={numbersImg} alt=""></Image>
          </section>
        </section>
        <section className="about-the-founder flex md:flex-row flex-col gap-32 md:px-20 py-10 items-center justify-center bg-gradient-to-r from-primary to-slate-800 text-neutral">
          <section className="left">
            <h2 className="text-3xl text-neutral">About the founder</h2>
            <p className="text-2xl font-bold">Ilko Hristov</p>
            <ul>
              <li>Helped brands earn more than 10M through email marketing</li>
              <li>Over 6 years of experience in digital marketing</li>
              <li>Over 75k followers on social media</li>
            </ul>
            <ul className="list-none flex gap-3 justify-center">
              <li>
                <a href="/">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="w-9 h-9 text-neutral"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon
                    icon={faTiktok}
                    className="w-9 h-9 text-neutral"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-9 h-9 text-neutral"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </section>
          <Image
            src={founderImg}
            alt=""
            className="w-48 rounded-full border-neutral border-solid border-4"
          ></Image>
        </section>
        <section className="how-we-results md:mx-20">
          <h2 className="text-4xl">How do we get results</h2>
          <section className="items flex text-neutral gap-10 md:flex-row flex-col items-center">
            <section className="item bg-primary">
              <Image src={image} alt="" className=""></Image>
              <p className="text-2xl font-bold">Audit</p>
              <ul className="">
                <li className="">
                  Identify opportunities for additional email revenue
                </li>
                <li className="">Identify problems costing you money</li>
                <li className="">Suggest actionables for improvement</li>
              </ul>
            </section>
            <section className="arrow text-black text-6xl font-black">
              &gt;
            </section>
            <section className="item bg-primary">
              <Image src={image} alt="" className=""></Image>
              <p className="text-2xl font-bold">Audit</p>
              <ul className="">
                <li className="">
                  Identify opportunities for additional email revenue
                </li>
                <li className="">Identify problems costing you money</li>
                <li className="">Suggest actionables for improvement</li>
              </ul>
            </section>
            <section className="arrow text-black text-6xl font-black">
              &gt;
            </section>
            <section className="item bg-primary">
              <Image src={image} alt="" className=""></Image>
              <p className="text-2xl font-bold">Audit</p>
              <ul className="">
                <li className="">
                  Identify opportunities for additional email revenue
                </li>
                <li className="">Identify problems costing you money</li>
                <li className="">Suggest actionables for improvement</li>
              </ul>
            </section>
          </section>
        </section>
        <section className="approach">
          <h2 className="text-4xl">What&amp;s our approach?</h2>
          <section className="items">
            <section className="item">
              <p className="font-bold 4xl">Done for you</p>
              <ul>
                <li>Completely hands-off for you</li>
                <li>We build the strategy and implement</li>
                <li>You enjoy the results</li>
              </ul>
            </section>
            <section className="item">
              <p className="font-bold 4xl">Done for you</p>
              <ul>
                <li>Completely hands-off for you</li>
                <li>We build the strategy and implement</li>
                <li>You enjoy the results</li>
              </ul>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
