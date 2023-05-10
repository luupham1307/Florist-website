export default function Container({ children }) {
  return (
    <div className=" sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1410px] mx-auto px-[15px]">
      {children}
    </div>
  );
}
