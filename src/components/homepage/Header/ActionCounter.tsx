import Link from "next/link";

type ActionCounterProps = {
  href: string;
  label?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  counter: number;
};
const ActionCounter = ({ href, label, Icon, counter }: ActionCounterProps) => (
  <Link
    href={href}
    className="relative flex items-center gap-[2px] xl:text-[12px] text-[11px] text-custom-gray-darker text-nowrap font-medium rounded-[50px] border border-transparent transition-color duration-200 hover:text-main-black hover:scale-[1.15]"
  >
    <span className="max-md:hidden">{label}</span>
    <Icon className="h-[18px] w-[18px]" />
    {counter > 0 && (
      <span className="absolute flex justify-center items-center md:h-[18px] md:w-[18px] h-[15px] w-[15px] md:top-[-12px] top-[-10px] right-[-8px] md:text-[12px] text-[10px] text-main-white bg-custom-red font-semibold rounded-[50%]">
        {counter}
      </span>
    )}
  </Link>
);

export default ActionCounter;
