import Button from "./Button";

const FeatureCard = ({ id, icon, caption, title, text, button }) => {
  return (
    <div
      key={id}
      className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
    >
      <div className="w-full flex justify-start items-start">
        <div className="-ml-3 mb-12 flex flex-col items-center justify-center">
          <div className="w-0.5 h-16 bg-s3" />
          <img src={icon} className="size-28 object-contain" alt={title} />
        </div>
      </div>

      <p className="caption mb-5 max-md:mb-6">{caption}</p>
      <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
        {title}
      </h2>
      <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>

      <Button icon={button.icon}>{button.title}</Button>
    </div>
  );
};

export default FeatureCard;
