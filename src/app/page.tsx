import Image from "next/image";
import hero from "../../public/img/hero.png";
import img1 from "../../public/img/stress.png";
import img2 from "../../public/img/less-work.png";
import img3 from "../../public/img/more-results.png";
import feature_img1 from "../../public/img/Email-Campaigns-smaller.webp";
import Slider from "./components/Slider";
import { DropdownsHelp } from "./components/Dropdowns";
import { DropdownsWhy } from "./components/Dropdowns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import numbersImg from "../../public/img/numbers.png";
import founderImg from "../../public/img/founder.jpg";
import { VideoTestimonials } from "./components/VideoTestimonials";
import chief_nutrition from "../../public/img/chief_nutrition.webp";
import { faClock, faX } from "@fortawesome/free-solid-svg-icons";
import EmailMarketing from "../../public/img/email-narketing.png";
import CalendlyComponent from "./components/Calendly";
import audit from "../../public/img/audit.png";
import plan from "../../public/img/plan.png";
import execution from "../../public/img/execution.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import googlePartner from "../../public/img/Google_Vectors-Wrapper.svg";
import shopifyPartner from "../../public/img/Shopify_Vectors-Wrapper.svg";
import klaviyoPartner from "../../public/img/klaviyo-partner-badge-light.svg";
import Link from "next/link";
import Carrousel from "./components/Carrousel";
import clock from '../../public/img/clock.png';
import plane from '../../public/img/plane.png';
import { link } from "fs";


export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="prose">
        <section className="hero linear bg-gradient-to-r from-primary to-black text-neutral flex justify-around py-5 px-5 md:py-10 md:pb-20 md:px-20 gap-20 w-full">
          <section className="hero-left mt-16">
            <h1 className="text-neutral my-7 text-3xl sm:text-5xl">
              We help DTC/eCommerce brands boost retention revenue by an average of $3,150,900
            </h1>
            <h3 className="text-neutral my-5">
              Most brands lose an average of $1,260,360 - $6,301,800 in retention revenue over a period of two years. We are here to help you claim that revenue back + boost retention and customer lifetime value even further.
            </h3>
            <section className="partners flex flex-wrap gap-5">
              <Image src={googlePartner} alt=""></Image>
              <Image src={shopifyPartner} alt=""></Image>
              <Image src={klaviyoPartner} alt="" className="w-24"></Image>
            </section>
            <section className="btn btn-secondary mt-8" ><Link href="#calendly">Get a free demo</Link></section>
          </section>
          <section className="hero-right hidden md:flex md:items-center min-w-[33%]">
            <iframe
              height="300"
              src="https://www.loom.com/embed/bb9785347d7f489fb8f89ea5ea18a395?sid=ec486bec-857f-469b-8010-b89a50234868"
              frameBorder="0"
              allowFullScreen
              className="xl:w-[500px] w-full"
            ></iframe>
          </section>
        </section>
        <Carrousel></Carrousel>
        <hr className="w-auto h-[2px] my-4 mx-20 bg-gradient-to-r from-white via-primary to-white border-0 rounded md:my-10"></hr>
        <section className="brands text-center scroller">
          <h2 className="text-3xl">Brands that work with us:</h2>
          <Slider></Slider>
        </section>
        <hr className="w-auto h-[2px] my-4 mx-20 bg-gradient-to-r from-white via-primary to-white border-0 rounded md:my-10"></hr>
        <section className="feature-one flex flex-col md:flex-row md:ml-24 justify-end items-center">
          <section className="text md:w-1/2 mx-5 text-center md:text-left md:relative md:left-40">
            <h2 className="text-4xl">
              Why retention marketing?
            </h2>

            <p>Capitalise on existing customers without spending additionally on ads to acquire new ones.</p>
            <section className="benefits ">
              <section className="benefit flex flex-col sm:flex-row gap-5 items-center">
                <p className="left bg-primary p-5 text-neutral font-black rounded-2xl">5x</p>
                <p className="right  text-xl">It is 5x cheaper to sell to an existing customer than to aquire a new one</p>
              </section>
              <section className="benefit flex flex-col sm:flex-row gap-5 items-center">
                <p className="left bg-primary p-5 text-neutral font-black rounded-2xl">45x</p>
                <p className="right  text-xl">Retention ROI is up to 45x (yes, you read that right)</p>
              </section>
              <section className="benefit flex flex-col sm:flex-row gap-5 items-center">
                <p className="left bg-primary p-5 text-neutral font-black rounded-2xl">94.6%</p>
                <p className="right  text-xl">94.6% Average gross margins (compared to advertising)</p>
              </section>
            </section>
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
        <section className="moto bg-primary text-neutral text-center py-5 md:px-20 flex flex-col lg:flex-row justify-between items-center">
          <Image src={clock} alt="" className="w-56 h-56"></Image>
          <section className="center">
            <h2 className="text-3xl text-neutral">Our motto:</h2>
            <p className="text-6xl">DELEGATE AND ELEVATE.</p>
            <p className="text-lg">
              Claim back the 720h+ you would spend on email each year.
            </p>
            <p className="text-lg">
              Fly new hights at an average of 106,4% in the first six months of
              working with us.
            </p>
          </section>
          <Image src={plane} alt="" className="w-56 h-56"></Image>
        </section>
        <DropdownsHelp></DropdownsHelp>
        <hr className="w-auto h-[2px] my-4 mx-20 bg-gradient-to-r from-white via-primary to-white border-0 rounded md:my-10"></hr>
        <section className="averages-wrap md:px-20">
          <h2 className="text-3xl">Our 6 month averages</h2>
          <section className="wrapper flex md:flex-row flex-col gap-10 py-10 items-center justify-between">
            <section className="numbers flex flex-col gap-12 flex-wrap justify-center items-center basis-1/2">
              <p className="stat text-center m-1">
                <p className="text-4xl font-bold text-primary my-1">39.13%</p>
                <p className="text-xl">Increase in AOV</p>
              </p>
              <p className="stat text-center m-1">
                <p className="text-4xl font-bold text-primary my-1">17.27%</p>
                <p className="text-xl">Increase in customer LTV</p>
              </p>
              <p className="stat text-center">
                <p className="text-6xl font-bold text-primary my-3">106.4%</p>
                <p className="text-2xl my-2">
                  Increase in email attributed revenue
                </p>
              </p>
            </section>
            <Image
              src={numbersImg}
              alt=""
              className="max-w-[280px] md:max-w-md"
            ></Image>
          </section>
        </section>
        <section className="about-the-founder flex md:flex-row flex-col gap-32 md:px-20 py-10 items-center justify-center bg-gradient-to-r from-primary to-slate-800 text-neutral">
          <section className="left ">
            <h2 className="text-3xl text-neutral text-center md:text-left">
              About the founder
            </h2>
            <p className="text-2xl font-bold text-center md:text-left">
              Ilko Hristov
            </p>
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
        <section className="how-we-results md:mx-20 text-center lg:text-left">
          <h2 className="text-4xl">How do we get results</h2>
          <section className="items flex text-neutral gap-10 lg:flex-row flex-col items-stretch mx-5 md:mx-0">
            <section className="item bg-primary">
              <Image src={audit} alt="" className="w-1/2 mx-auto"></Image>
              <p className="text-2xl font-bold">Audit</p>
              <ul className="">
                <li className="">
                  Identify opportunities for additional email revenue
                </li>
                <li className="">Identify problems costing you money</li>
                <li className="">Suggest actionables for improvement</li>
              </ul>
            </section>
            <section className="arrow text-black text-6xl font-black my-auto">
              &gt;
            </section>
            <section className="item bg-primary">
              <Image src={plan} alt="" className="w-1/2 mx-auto"></Image>
              <p className="text-2xl font-bold">Plan</p>
              <ul className="">
                <li className="">Lay out the next 90 days</li>
                <li className="">Campaign calendar</li>
                <li className="">Flow/ automations calendar</li>
              </ul>
            </section>
            <section className="arrow text-black text-6xl font-black my-auto">
              &gt;
            </section>
            <section className="item bg-primary">
              <Image src={execution} alt="" className="w-1/2 mx-auto"></Image>
              <p className="text-2xl font-bold">Execution</p>
              <ul className="">
                <li className="">Technical Build-up</li>
                <li className="">Copy/Design</li>
                <li className="">3-Step Quality Check</li>
              </ul>
            </section>
          </section>
        </section>
        <section className="approach bg-gradient-to-r from-primary to-slate-900 text-neutral my-10 py-6 md:px-20">
          <h2 className="text-4xl text-neutral text-center">
            What&apos;s our approach?
          </h2>
          <section className="items flex justify-center gap-10 lg:flex-row flex-col items-center md:items-stretch">
            <section className="item border-neutral rounded-2xl border-4">
              <p className="font-bold 4xl">Done for you</p>
              <ul>
                <li>Completely hands-off for you</li>
                <li>We build the strategy and implement</li>
                <li>You enjoy the results</li>
              </ul>
            </section>
            <p className="text-7xl font-black">OR</p>
            <section className="item border-neutral rounded-2xl border-4 max-w-[350px]">
              <p className="font-bold 4xl">Done with you</p>
              <ul>
                <li>60% hands-off for you</li>
                <li>
                  We build the strategy and help your internal team implement
                </li>
                <li>You enjoy the results</li>
              </ul>
            </section>
          </section>
          <section className="btn btn-secondary my-10 mx-auto">
            <Link href={'#calendly'} className="no-underline text-neutral text-xl font-bold">Apply to work with us</Link>
          </section>
        </section>
        <VideoTestimonials></VideoTestimonials>
        <hr className="w-auto h-[2px] my-4 mx-20 bg-gradient-to-r from-white via-primary to-white border-0 rounded md:my-10"></hr>
        <section className="case-study md:mx-20 my-10 flex xl:flex-row flex-col justify-around items-center gap-10">
          <Image src={chief_nutrition} alt="" className="rounded-3xl"></Image>
          <section className="right flex flex-col gap-20 text-center md:text-left">
            <section className="title">
              <h2 className="text-4xl">CASE STUDY: CHIEF NUTRITION</h2>
              <h3 className="flex gap-10">
                <FontAwesomeIcon
                  icon={faClock}
                  className="w-6 text-primary"
                ></FontAwesomeIcon>{" "}
                6 months
              </h3>
            </section>
            <section className="results flex flex-col xl:flex-row gap-5 justify-center md:justify-around">
              <section className="result w-[250px]">
                <p className="text-4xl my-3 text-primary font-black">6822%</p>
                <p>Increase in email sales vs. previous year</p>
              </section>
              <section className="result w-[250px]">
                <p className="text-4xl my-3 text-primary font-black">$362K</p>
                <p>Email attributed revenue</p>
              </section>
              <section className="result w-[250px]">
                <p className="text-4xl my-3 text-primary font-black">100%</p>
                <p>
                  Doubled email attributed revenue in the first 2 months of our
                  partnership.
                </p>
              </section>
            </section>
          </section>
        </section>
        <section className="good-fit md:px-20 text-center bg-gradient-to-b from-primary-100 via-primary-300 to-primary-500 flex justify-center items-center py-10 flex-col">
          <h2 className="text-4xl text-neutral">Are we a good fit?</h2>
          <p className="text-neutral">
            If you can answer &quot;YES&quot; on 2 out of the 3 questions, then
            don&apos;t wait! Apply to work with us right now!
          </p>
          <section className="items flex justify-center gap-12 xl:flex-row flex-col ">
            <section className="item md:max-w-[400px] max-w-[300px] bg-neutral shadow-black shadow-2xl flex flex-col items-center justify-center">
              <p className="text-xl font-bold">Question #1:</p>
              <p>Are you an established business that </p>
              <ol className="text=left">
                <li className="text=left">
                  Generates $50k+ in monthly recurring revenue (MRR)?
                </li>
                <li className="text=left">Has 10k+ email subscribers?</li>
                <li className="text=left">
                  Drives traffic 50k+ unique website visitors/pm?
                </li>
              </ol>
            </section>
            <section className="item md:max-w-[400px] max-w-[300px]  bg-neutral shadow-black shadow-2xl flex flex-col items-center justify-center">
              <p className="text-xl font-bold">Question #2:</p>
              <p>
                Are you logistically prepared to handle an average of 106,4%
                increase in email revenue in the next 6 months?
              </p>
            </section>
            <section className="item md:max-w-[400px] max-w-[300px] bg-neutral shadow-black shadow-2xl flex flex-col items-center justify-center">
              <p className="text-xl font-bold">Question #3:</p>
              <p>
                Are you excited for long-term email success, backed by a loyal
                email partner?
              </p>
            </section>
          </section>
          <section className="btn btn-secondary my-10">
            <Link href={'#calendly'} className="no-underline text-neutral text-xl font-bold">Apply to work with us</Link>
          </section>
        </section>
        <section className="email-marketing bg-primary text-neutral flex md:flex-row flex-col justify-center items-center md:px-20 py-10">
          <section className="left text-center md:text-left">
            <p className="text-xl">Our service:</p>
            <h2 className="text-5xl text-neutral my-2">RETENTION MARKETING.</h2>
            <section className="wewont">
              <p>We won&apos;t :</p>
              <ul className="list-none text-center">
                <li className="flex gap-5 items-center">
                  <FontAwesomeIcon
                    icon={faX}
                    className="text-red-600 w-10 h-10 border-red-600 p-1 border-1 border-solid"
                  ></FontAwesomeIcon>
                  <p>Manage your social media</p>
                </li>
                <li className="flex gap-5 items-center">
                  <FontAwesomeIcon
                    icon={faX}
                    className="text-red-600 w-10 h-10 border-red-600 p-1 border-1 border-solid"
                  ></FontAwesomeIcon>
                  <p>Run your FB ads</p>
                </li>
                <li className="flex gap-5 items-center">
                  <FontAwesomeIcon
                    icon={faX}
                    className="text-red-600 w-10 h-10 border-red-600 p-1 border-1 border-solid"
                  ></FontAwesomeIcon>
                  <p>Optimise your website</p>
                </li>
              </ul>
              <p className="text-2xl font-bold text-center">
                We&apos;ll do retention marketing and we&apos;ll do it like no one
                else.
              </p>
            </section>
          </section>
          <section className="right flex justify-center items-center">
            <Image src={EmailMarketing} alt="Email" className="w-3/4"></Image>
          </section>
        </section>
        <section id="calendly">
          <CalendlyComponent url="https://calendly.com/ayanashfaq1590/consultancy-call"></CalendlyComponent>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
