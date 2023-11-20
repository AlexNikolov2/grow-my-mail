import Image from "next/image";
import image from "../../public/next.svg";

export default function Home() {
  return (
    <>
      <main className="prose">
        <section className="hero bg-primary text-neutral flex justify-around gap-20 w-full">
          <section className="hero-left">
            <h1 className="text-neutral">Expand your email market</h1>
            <h3 className="text-neutral">
              GrowMyMail is a consulting agency that helps you expand your
              presence in the Internet. We help our customers expand their reach
              via email marketing.
            </h3>
            <section className="btn">Apply here</section>
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
          <h2>What are we best at</h2>
          <section className="features-items">
            <section className="feature-item">
              <h3>Feature 1</h3>
              <p>
                This is a short text that summarises and highlights the best of
                our feature.
              </p>
            </section>
            <section className="feature-item">
              <h3>Feature 2</h3>
              <p>
                This is a short text that summarises and highlights the best of
                our feature.
              </p>
            </section>
            <section className="feature-item">
              <h3>Feature 3</h3>
              <p>
                This is a short text that summarises and highlights the best of
                our feature.
              </p>
            </section>
          </section>
          <section className="brands">
            <h2>Brands that work with us:</h2>
            <section className="brands-img">{/*images here */}</section>
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
