export default function DirectorshipContainer({name, children}: {name: string, children: React.ReactNode[]}) {
  return (
    <div
        className="m-12 flex h-fit w-[1130px] flex-col items-center justify-center max-[1194px]:w-[500px] max-[564px]:w-[280px]"
      >
        <p className="text-center font-oxanium text-[32px] font-bold text-struct-3 max-[1194px]:text-[30px] max-[564px]:text-[28px]">
          {name}
        </p>
        <div className="flex h-fit w-full flex-wrap items-center justify-center">
          {children}
        </div>
    </div>
  )
}