import Image from "next/image";
import image from "../../public/next.svg";

export default function Home() {
  return (
    <>
      <main className="prose">
        <section className="hero">
          <section className="hero-left">
            <h1>Boosting email conversions by an average of $3,150,900 for DTC brands</h1>
            <h3>
              Most brands lose an average of $1,260,360 - $6,301,800 in email revenue over a period of two years. We are here to help you claim that revenue back + boost email conversions and customer retention rates even further.
            </h3>
          </section>
          {/*
            INSTALL CLOUDINARY-REACT
            IMPLEMENT VIDEO FROM CLOUDINARY-REACT
          */}
          <section className="hero-right">
            <Image src={image} alt=""></Image>
          </section>
        </section>
        <section className="features">
          <h2>Small part of the results we’ve gotten for our clients</h2>
          <section className="features-items">
            <section className="feature-item">
              <h3>Less stress</h3>
            </section>
            <section className="feature-item">
              <h3>Less work</h3>
            </section>
            <section className="feature-item">
              <h3>More results</h3>
            </section>
          </section>
          <section className="feature-one">
            <section className="text">
              <h2>Increasing your e-mail reach</h2>
              <p>
                Grow My Mail improves the email marketing of every client!
                Those, who decide to trust us, experience huge grow in their
                e-mail market reach. Our team uses the best approaches to
                improve the market stats of those, who use GrowMyMail.
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
              <h2>Increasing your e-mail reach</h2>
              <p>
                Grow My Mail improves the email marketing of every client!
                Those, who decide to trust us, experience huge grow in their
                e-mail market reach. Our team uses the best approaches to
                improve the market stats of those, who use GrowMyMail.
              </p>
            </section>
          </section>
          <section className="book-a-call">
            <h2>Start your e-mail expansion</h2>
            <p>
              You wonder when to start your e-mail marketing expansion? THe
              right time is <b>NOW!</b>Book your call today and establish your
              marketing presence.
            </p>
            <button>Book your call</button>
          </section>
        </section>
      </main>
    </>
  );
}
