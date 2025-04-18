import Link from "next/link";

type ActionCounterProps = {
  href: string;
  label?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  counter: number;
};
const ActionCounter = ({ href, label, Icon, counter = 0 }: ActionCounterProps) => (
  <Link
    href={href}
    className="relative flex items-center gap-[3px] xs:px-[10px] xs:py-[4px] max-xs:p-[6px] xl:text-[12px] text-[11px] text-main-black text-nowrap font-medium border border-custom-slate-400 lg:rounded-[30px] xs:rounded-[20px] rounded-[50%] bg-main-white transition-color duration-200 hover:text-main-white hover:bg-main-black"
  >
    <span className="max-xs:hidden">{label}</span>
    <Icon className="xs:h-[18px] xs:w-[18px] h-[21px] w-[21px]" />
    {counter > 0 && (
      <span className="absolute flex justify-center items-center md:h-[18px] md:w-[18px] h-[15px] w-[15px] md:top-[-12px] top-[-6px] right-[-4px] md:text-[12px] text-[10px] text-main-white bg-custom-red font-semibold rounded-[50%]">
        {counter}
      </span>
    )}
  </Link>
);

export default ActionCounter;
