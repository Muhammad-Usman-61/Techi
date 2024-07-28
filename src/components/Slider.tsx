import { useEffect, useRef } from "react";

const Slider = () => {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    let index = 0;

    const addHoverClass = () => {
      if (cards.length === 0) return;

      cards[index].classList.add("card-hover");
      cards[index].classList.remove("not-hover");

      timerRef.current = setTimeout(() => {
        cards[index].classList.remove("card-hover");
        index = (index + 1) % cards.length;
        timerRef.current = setTimeout(addHoverClass); // Call the function again after 0 second
      }, 2500); // Remove class after 1 second
    };

    const removeHoverClass = () => {
      cards[index].classList.add("not-hover");
    };

    addHoverClass(); // Start the loop

    const handleMouseEnter = () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current); // Stop the loop
        removeHoverClass(); // Remove the hover class
      }
    };

    const handleMouseLeave = () => {
      addHoverClass(); // Resume the loop
      cards[index].classList.remove("not-hover");
    };

    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cards">
        <div className="card">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960 "
            loading="eager"
            alt="Lorem ipsum dolor sit amet"
            className="features-card-bg-img double"
          />
          <div>
            <h1>This is first slide</h1>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.motor1.com/images/mgl/mrz1e/s1/coolest-cars-feature.webp"
            loading="eager"
            alt="Lorem ipsum dolor sit amet"
            className="features-card-bg-img double"
          />
        </div>
        <div className="card">
          <img
            src="https://cdn.motor1.com/images/mgl/JO94P6/s1/most-expensive-cars-in-the-world.webp"
            loading="eager"
            alt="Lorem ipsum dolor sit amet"
            className="features-card-bg-img double"
          />
        </div>
        <div className="card">
          <img
            src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg"
            loading="eager"
            alt="Lorem ipsum dolor sit amet"
            className="features-card-bg-img double"
          />
        </div>
      </div>
      <main>
        <div
          id="w-node-_58bf3b80-bb47-7849-a330-fc6680ff1de8-b9f1e46f"
          className="features-col double"
        >
          <div className="features-card double">
            <img
              src="https://assets-global.website-files.com/6614ea976ddd1f3bb9f1e470/661e552715000443ff0efc02_features-image-1.jpg"
              loading="eager"
              width="720"
              alt="Lorem ipsum dolor sit amet"
              className="features-card-bg-img double"
            />
            <svg
              className="features-clip-path-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="0px"
              height="0px"
              viewBox="0 0 840 840"
              fill="none"
            >
              <defs>
                <clipPath
                  id="clip-path-features-1-nocolor"
                  clipPathUnits="objectBoundingBox"
                >
                  <path
                    d="M0.16003452380952382,0h0.8161559523809524c0.013149999999999998,0,0.023809523809523808,0.021320238095238093,0.023809523809523808,0.047619047619047616v0.8285714285714286c0,0.026298809523809526,-0.01065952380952381,0.047619047619047616,-0.023809523809523808,0.047619047619047616h-0.27930238095238097c-0.004945238095238095,0,-0.009767857142857142,0.003079761904761905,-0.013797619047619048,0.008811904761904762l-0.04118095238095238,0.05856666666666666c-0.004029761904761905,0.0057321428571428575,-0.008852380952380952,0.008811904761904762,-0.013797619047619048,0.008811904761904762h-0.6043023809523809c-0.013149999999999998,0,-0.023809523809523808,-0.021320238095238093,-0.023809523809523808,-0.047619047619047616v-0.6484654761904762c0,-0.01313452380952381,0.0027119047619047617,-0.025685714285714287,0.007495238095238096,-0.03468452380952381l0.136225,-0.25629642857142854c0.004416666666666667,-0.008308333333333334,0.010251190476190476,-0.012934523809523809,0.016314285714285715,-0.012934523809523809z"
                    fill="black"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="features-col mobile-set-order-first">
          <div className="features-card">
            <svg
              className="features-card-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 422 422"
              fill="none"
            >
              <path
                d="M1 401L1 21C1 9.95431 9.95432 1 21 1L185.986 1C191.184 1 196.178 3.02358 199.909 6.64202L224.273 30.2672C228.004 33.8856 232.998 35.9092 238.196 35.9092L327.804 35.9092C333.002 35.9092 337.996 33.8856 341.727 30.2672L366.091 6.64201C369.822 3.02357 374.816 1 380.014 1L401 1C412.046 1 421 9.9543 421 21L421 401C421 412.046 412.046 421 401 421L21 421C9.95431 421 1 412.046 1 401Z"
                fill="url(#paint0_linear_103_8358)"
                stroke="url(#paint1_linear_103_8358)"
                stroke-opacity="0.5"
                vector-effect="non-scaling-stroke"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_103_8358"
                  x1="11"
                  y1="8.00001"
                  x2="414"
                  y2="412"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E7F9FF"></stop>
                  <stop offset="1" stop-color="#BFE0FE"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_103_8358"
                  x1="1"
                  y1="1"
                  x2="430.561"
                  y2="493.569"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3800F4" stop-opacity="0.2"></stop>
                  <stop offset="1" stop-color="#3800F4"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="features-card-content">
              <img
                src="https://assets-global.website-files.com/6614ea976ddd1f3bb9f1e470/661e58cb0e0745fa0372f1ff_features-controler.png"
                loading="lazy"
                width="278.5"
                alt=""
                className="features-deco-image-controller"
              />
              <h2 className="h-small">free-to-PLay-to-earn</h2>
              <p className="p-small dark">
                Turn your passion for gaming into $STR8X.
              </p>
            </div>
            <svg
              className="features-clip-path-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="0px"
              height="0px"
              viewBox="0 0 422 422"
              fill="none"
            >
              <defs>
                <clipPath
                  id="clip-path-features-2"
                  clipPathUnits="objectBoundingBox"
                >
                  <path
                    d="M0.002718222748815166,0.9502369668246445v-0.9004739336492891c0,-0.026175355450236967,0.021218009478672986,-0.04739336492890995,0.04739336492890995,-0.04739336492890995h0.3909620853080569c0.012317535545023697,0,0.02415165876777251,0.004796208530805687,0.03299289099526066,0.013369668246445499l0.05773459715639811,0.055983412322274884c0.00884123222748815,0.008575829383886256,0.020675355450236965,0.013369668246445499,0.03299289099526066,0.013369668246445499h0.2123436018957346c0.012315165876777251,0,0.02414928909952607,-0.004793838862559242,0.03299289099526066,-0.013369668246445499l0.057732227488151655,-0.055983412322274884c0.00884123222748815,-0.00857345971563981,0.020675355450236965,-0.013369668246445499,0.03299289099526066,-0.013369668246445499h0.049729857819905215c0.026175355450236967,0,0.04739336492890995,0.021218009478672986,0.04739336492890995,0.04739336492890995v0.9004739336492891c0,0.026175355450236967,-0.021218009478672986,0.04739336492890995,-0.04739336492890995,0.04739336492890995h-0.9004739336492891c-0.026175355450236967,0,-0.04739336492890995,-0.021218009478672986,-0.04739336492890995,-0.04739336492890995z"
                    fill="#ECFCFF"
                    fill-opacity="0.75"
                  ></path>
                  <path
                    d="M0.002718222748815166,0.9502369668246445v-0.9004739336492891c0,-0.026175355450236967,0.021218009478672986,-0.04739336492890995,0.04739336492890995,-0.04739336492890995h0.3909620853080569c0.012317535545023697,0,0.02415165876777251,0.004796208530805687,0.03299289099526066,0.013369668246445499l0.05773459715639811,0.055983412322274884c0.00884123222748815,0.008575829383886256,0.020675355450236965,0.013369668246445499,0.03299289099526066,0.013369668246445499h0.2123436018957346c0.012315165876777251,0,0.02414928909952607,-0.004793838862559242,0.03299289099526066,-0.013369668246445499l0.057732227488151655,-0.055983412322274884c0.00884123222748815,-0.00857345971563981,0.020675355450236965,-0.013369668246445499,0.03299289099526066,-0.013369668246445499h0.049729857819905215c0.026175355450236967,0,0.04739336492890995,0.021218009478672986,0.04739336492890995,0.04739336492890995v0.9004739336492891c0,0.026175355450236967,-0.021218009478672986,0.04739336492890995,-0.04739336492890995,0.04739336492890995h-0.9004739336492891c-0.026175355450236967,0,-0.04739336492890995,-0.021218009478672986,-0.04739336492890995,-0.04739336492890995z"
                    fill="url(#paint0_linear_103_8345)"
                    fill-opacity="0.2"
                  ></path>
                  <path
                    d="M0.002718222748815166,0.9502369668246445v-0.9004739336492891c0,-0.026175355450236967,0.021218009478672986,-0.04739336492890995,0.04739336492890995,-0.04739336492890995h0.3909620853080569c0.012317535545023697,0,0.02415165876777251,0.004796208530805687,0.03299289099526066,0.013369668246445499l0.05773459715639811,0.055983412322274884c0.00884123222748815,0.008575829383886256,0.020675355450236965,0.013369668246445499,0.03299289099526066,0.013369668246445499h0.2123436018957346c0.012315165876777251,0,0.02414928909952607,-0.004793838862559242,0.03299289099526066,-0.013369668246445499l0.057732227488151655,-0.055983412322274884c0.00884123222748815,-0.00857345971563981,0.020675355450236965,-0.013369668246445499,0.03299289099526066,-0.013369668246445499h0.049729857819905215c0.026175355450236967,0,0.04739336492890995,0.021218009478672986,0.04739336492890995,0.04739336492890995v0.9004739336492891c0,0.026175355450236967,-0.021218009478672986,0.04739336492890995,-0.04739336492890995,0.04739336492890995h-0.9004739336492891c-0.026175355450236967,0,-0.04739336492890995,-0.021218009478672986,-0.04739336492890995,-0.04739336492890995z"
                    stroke="url(#paint1_linear_103_8345)"
                    stroke-opacity="0.5"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default Slider;
