import clsx from "clsx";
import { useState } from "react";
import { Element } from "react-scroll";
import { plans } from "../constants";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-md:mb-11 max-w-lg text-center text-p4 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl p-2 backdrop-blur-[6px] border-[3px] border-s4/25 bg-s1/50 max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", isMonthly && "text-p4")}
                onClick={() => setIsMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !isMonthly && "text-p4")}
                onClick={() => setIsMonthly(false)}
              >
                Annual
              </button>

              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !isMonthly && "translate-x-full"
                )}
              />
            </div>

            <div className="pricing-bg">
              <img
                src="images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>

          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <PricingCard {...plan} index={index} isMonthly={isMonthly} />
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;