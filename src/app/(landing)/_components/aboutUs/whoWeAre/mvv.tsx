import Link from "next/link";

function MVVTitle() {
  return (
    <h4 className="mb-2 mt-3 flex justify-center font-oxanium text-[20px] font-bold text-struct-2 sm:mt-4 sm:text-[24px]">
      MVV
    </h4>
  );
}

function MVVContainer({ children }: React.PropsWithChildren) {
  return (
    <div className="m-3 rounded-lg px-8 shadow-[0_1px_12px_rgb(8,20,38,0.75)] sm:mx-auto sm:mb-6 sm:w-[405px] lg:m-8 lg:ml-4">
      {children}
    </div>
  );
}

function MVVContent({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-4">
      {children}
    </div>
  );
}

function Mission() {
  return (
    <div className="text-center sm:text-left">
      <h5 className="font-oxanium text-[16px] font-semibold sm:text-[22px]">
        <span className="text-struct-2">M</span>issão
      </h5>
      <p className="text-[11px] sm:text-[12px]">
        Formar estudantes mais profissionais e mais capacitados por meio da
        vivência empresarial.
      </p>
    </div>
  );
}

function Vision() {
  return (
    <div className="my-2 text-center sm:text-left">
      <h5 className="font-oxanium text-[16px] font-semibold sm:text-[22px]">
        <span className="text-struct-2">V</span>isão
      </h5>
      <p className="text-[11px] sm:text-left sm:text-[12px]">
        Proporcionar os melhores produtos e experiência ao cliente. Fortalecer a
        representatividade da EC no ambiente acadêmico e no mercado.
      </p>
    </div>
  );
}

function Values() {
  return (
    <div className="px-4 text-center sm:text-left">
      <h5 className="font-oxanium text-[16px] font-semibold sm:text-[22px]">
        <span className="text-struct-2">V</span>alores
      </h5>
      <div className="flex flex-col gap-1 p-2 text-[12px] font-bold sm:gap-2 sm:text-[16px]">
        <p>
          <span className="font-oxanium text-struct-3">S</span>
          inergia
        </p>
        <p>
          <span className="font-oxanium text-struct-3">T</span>
          ransparência
        </p>
        <p>
          <span className="font-oxanium text-struct-3">R</span>
          espeito
        </p>
        <p>
          <span className="font-oxanium text-struct-3">U</span>
          nião
        </p>
        <p>
          <span className="font-oxanium text-struct-3">C</span>
          ompromisso
        </p>
        <p>
          <span className="font-oxanium text-struct-3">T</span>
          ransformadora
        </p>
      </div>
    </div>
  );
}

function MeetOurTeamButton() {
  return (
    <Link
      href="/membros"
      className="mx-2 mb-4 mt-3 flex items-center justify-center self-start bg-fundo-3 px-2 py-1 font-oxanium text-[12px] font-bold text-struct-7 transition ease-in-out hover:bg-fundo-1 hover:text-struct-1 hover:shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] active:border-none sm:rounded-md sm:px-4 sm:text-[20px]"
    >
      conheça nossos membros
    </Link>
  );
}

export function MVV() {
  return (
    <MVVContainer>
      <MVVTitle />
      <MVVContent>
        <div>
          <Mission />
          <Vision />
        </div>
        <Values />
      </MVVContent>
      <MeetOurTeamButton />
    </MVVContainer>
  );
}
