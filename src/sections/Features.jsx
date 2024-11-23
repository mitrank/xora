import { Element } from "react-scroll";
import { details, features } from "../constants";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map((feature) => (
              <FeatureCard {...feature} />
            ))}

            <ul className="relative flex justify-around flex-grow px-[5%] -mb-[2px] -mx-[2px] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  <div className="absolute top-0 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />

                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-100 shadow-500 size-20">
                    <img
                      src={icon}
                      className="size-17/20 object-contain z-20"
                      alt={title}
                    />
                  </div>

                  <h3 className="relative uppercase text-center base-small z-2 max-w-36 mx-auto my-0">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
