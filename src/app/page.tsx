import Image from "next/image";
import image from "../../public/next.svg";

export default function Home() {
  return (
    <>
      <main className="prose">
        <section className="hero">
          <section className="hero-left">
            <h1>Expand your email market</h1>
            <h3>
              GrowMyMail is a consulting agency that helps you expand your
              presence in the Internet. We help our customers expand their reach
              via email marketing.
            </h3>
          </section>
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
          <section className="feature-one"></section>
          <section className="feature-two"></section>
          <section className="book-a-call"></section>
        </section>
      </main>
    </>
  );
}
