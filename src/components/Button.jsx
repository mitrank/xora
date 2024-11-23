import clsx from "clsx";
import Marker from "./Marker";

const Button = ({
  children,
  icon,
  href,
  markerFill,
  altTag = "icon",
  containerClassName = "",
  onClick = () => {},
}) => {
  const InnerContent = () => (
    <>
      <span className="relative flex items-center px-4 min-h-[60px] g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]"><Marker fill={markerFill} /></span>
        {icon && <img src={icon} alt={altTag} className="size-10 mr-5 object-contain z-10" />}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">{children}</span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "relative p-0.5 rounded-2xl shadow-500 group g5",
        containerClassName
      )}
    >
      <InnerContent />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 rounded-2xl shadow-500 group g5",
        containerClassName
      )}
      onClick={onClick}
    >
      <InnerContent />
    </button>
  );
};

export default Button;
