import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Identidad, historia, misión, visión, valores, equipo, declaración de fe y respaldo ministerial del Instituto Bíblico Renacer Pentecostal.",
};

const SUBSECTIONS = [
  { title: "Historia de INBREP", anchor: "#historia" },
  { title: "¿Por qué Renacer Pentecostal?", anchor: "#renacer-pentecostal" },
  { title: "Misión y visión", anchor: "#mision-vision" },
  { title: "Nuestros valores", anchor: "#valores" },
  { title: "Equipo fundador", anchor: "#equipo" },
  { title: "Declaración de fe", anchor: "#declaracion-de-fe" },
];

const VALUES = [
  {
    title: "Fidelidad bíblica",
    desc: "Reconocemos las Escrituras como la autoridad fundamental para nuestra fe, enseñanza y vida. Procuramos estudiarlas responsablemente, atendiendo a su contexto, género, propósito y mensaje.",
  },
  {
    title: "Excelencia académica",
    desc: "Promovemos el estudio serio, la rigurosidad, el pensamiento crítico, la claridad y la mejora continua en todos nuestros procesos formativos.",
  },
  {
    title: "Profunda vida espiritual",
    desc: "Creemos que el conocimiento de Dios debe conducirnos a una relación más profunda con Él y a una vida transformada por el Espíritu Santo.",
  },
  {
    title: "Servicio",
    desc: "Estudiamos para servir. Ponemos nuestros conocimientos, dones y recursos al servicio de Cristo, de la Iglesia y de nuestras comunidades.",
  },
  {
    title: "Accesibilidad",
    desc: "Trabajamos para reducir las barreras que impiden acceder a una formación bíblica y teológica de calidad.",
  },
  {
    title: "Comunidad",
    desc: "Aprendemos mejor cuando caminamos junto a otros. Valoramos la comunión, el acompañamiento, la escucha y el trabajo compartido.",
  },
  {
    title: "Integridad",
    desc: "Buscamos actuar con honestidad, responsabilidad, transparencia y coherencia entre aquello que creemos, enseñamos y vivimos.",
  },
  {
    title: "Fe y perseverancia",
    desc: "Confiamos en Dios, enfrentamos los desafíos con esperanza y perseveramos en el llamado que Él nos ha dado.",
  },
  {
    title: "Trabajo en equipo",
    desc: "Reconocemos que los mejores proyectos se construyen mediante la colaboración, el respeto y la participación de personas con diferentes dones y experiencias.",
  },
];

const EQUIPO_FUNDADOR = [
  "Daniel Poblete Pérez",
  "Miguel Poblete Gallardo",
  "Diana Vidal",
  "Gabriel Garay",
  "Joel Domínguez",
];

const DECLARACION = [
  {
    title: "Las Escrituras",
    body: [
      "Creemos que la Biblia, compuesta por el Antiguo y el Nuevo Testamento, es la Palabra de Dios inspirada y constituye la autoridad suprema para nuestra fe y nuestra vida.",
      "Afirmamos su veracidad, suficiencia y autoridad, y creemos que las Escrituras deben ser estudiadas responsablemente, atendiendo a su contexto, género, propósito y mensaje, bajo la iluminación del Espíritu Santo.",
      "Toda enseñanza, experiencia y práctica cristiana debe ser examinada a la luz de la Palabra de Dios.",
    ],
  },
  {
    title: "Dios",
    body: [
      "Creemos en un solo Dios, eterno, santo, soberano, creador y sustentador de todas las cosas.",
      "Este único Dios existe eternamente en tres personas: Padre, Hijo y Espíritu Santo, iguales en divinidad y dignidad y, a la vez, personalmente distinguibles.",
      "Creemos, adoramos y servimos al Dios trino revelado en las Escrituras.",
    ],
  },
  {
    title: "Jesucristo",
    body: [
      "Creemos que Jesucristo es verdadero Dios y verdadero hombre, el Hijo eterno de Dios.",
      "Afirmamos su concepción por obra del Espíritu Santo y nacimiento virginal, su vida sin pecado, sus obras y milagros, su muerte expiatoria y vicaria en la cruz, su resurrección corporal, su ascensión y exaltación a la diestra del Padre.",
      "Creemos que Cristo intercede por su pueblo y que volverá personal y gloriosamente para consumar el Reino de Dios.",
      "Sólo en Jesucristo encontramos reconciliación con Dios, perdón y vida eterna.",
    ],
  },
  {
    title: "El Espíritu Santo",
    body: [
      "Creemos que el Espíritu Santo es plenamente Dios y la tercera persona de la Trinidad.",
      "Él convence de pecado, regenera, habita en los creyentes, santifica, guía, consuela y capacita a la Iglesia para vivir y participar de la misión de Dios.",
      "Creemos en la obra presente del Espíritu Santo, en la manifestación de su fruto y en la vigencia de los dones espirituales concedidos para la edificación del Cuerpo de Cristo y el servicio.",
    ],
  },
  {
    title: "La humanidad y el pecado",
    body: [
      "Creemos que la humanidad fue creada por Dios a su imagen y semejanza, dotada de dignidad y llamada a vivir en comunión con Él y bajo su voluntad.",
      "El pecado produjo una ruptura profunda en esa relación y afectó integralmente la condición humana. Como consecuencia, ninguna persona puede restaurarse a sí misma ni alcanzar la salvación por sus propios méritos.",
      "Toda persona necesita la gracia redentora de Dios manifestada en Jesucristo.",
    ],
  },
  {
    title: "La salvación",
    body: [
      "Creemos que la salvación es obra de la gracia de Dios y que solamente es posible por medio de Jesucristo.",
      "La recibimos mediante la fe, acompañada de arrepentimiento y una respuesta personal al evangelio. No es resultado de obras o méritos humanos.",
      "Por medio de Cristo somos perdonados, justificados, regenerados, adoptados como hijos de Dios y llamados a una nueva vida.",
      "El Espíritu Santo continúa obrando en el creyente, transformándolo progresivamente a la imagen de Cristo y capacitándolo para una vida de santidad, obediencia y servicio.",
    ],
  },
  {
    title: "La vida cristiana",
    body: [
      "Creemos que todo creyente es llamado a vivir en comunión constante con Dios mediante la oración, las Escrituras, la adoración y la vida comunitaria.",
      "La santidad no consiste solamente en determinadas prácticas externas, sino en una vida progresivamente transformada por el Espíritu Santo, cuyo carácter se hace visible mediante su fruto.",
      "La vida cristiana implica fe, perseverancia, obediencia, amor y dependencia continua de la gracia de Dios.",
    ],
  },
  {
    title: "La plenitud del Espíritu y sus dones",
    body: [
      "En continuidad con nuestra herencia pentecostal, creemos que el creyente debe buscar una vida llena del Espíritu Santo y abierta a su obra y dirección.",
      "Creemos que Dios continúa capacitando sobrenaturalmente a su Iglesia y distribuyendo dones espirituales para la edificación del Cuerpo de Cristo, el testimonio del evangelio y el cumplimiento de su misión.",
      "Afirmamos el valor bíblico de los dones espirituales, incluyendo las lenguas, la profecía, la sanidad y las demás manifestaciones señaladas en el Nuevo Testamento, entendiendo que su ejercicio debe estar siempre sujeto a las enseñanzas de las Escrituras, al amor y a la edificación de la Iglesia.",
    ],
  },
  {
    title: "La sanidad divina",
    body: [
      "Creemos que Dios continúa obrando sobrenaturalmente y que la Iglesia puede acudir a Él en oración por las necesidades físicas, emocionales y espirituales de las personas.",
      "Oramos por sanidad confiando en el poder, la sabiduría y la soberanía de Dios.",
      "Reconocemos también la medicina y el conocimiento científico como recursos legítimos para el cuidado de la vida y la salud.",
    ],
  },
  {
    title: "La Iglesia",
    body: [
      "Creemos que la Iglesia es el pueblo de Dios y el Cuerpo de Cristo, formado por todos aquellos que han sido reconciliados con Dios mediante la fe en Jesucristo.",
      "La Iglesia está llamada a adorar a Dios, edificar a los creyentes, anunciar el evangelio, hacer discípulos y participar activamente en la misión de Dios en el mundo.",
      "Valoramos profundamente la iglesia local como espacio de comunidad, discipulado, servicio, cuidado pastoral, misión y crecimiento espiritual.",
    ],
  },
  {
    title: "Bautismo y Cena del Señor",
    body: [
      "Reconocemos el bautismo en agua y la Cena del Señor como ordenanzas dadas por Cristo a su Iglesia.",
      "Entendemos el bautismo como testimonio público de fe e identificación con la muerte y resurrección de Jesucristo.",
      "Celebramos la Cena del Señor como memoria y proclamación de la obra redentora de Cristo, participando en ella con gratitud mientras esperamos su regreso.",
    ],
  },
  {
    title: "Nuestra esperanza futura",
    body: [
      "Creemos en el regreso personal, visible y glorioso de Jesucristo, en la resurrección de los muertos, el juicio final y la consumación definitiva del Reino de Dios.",
      "Creemos en la vida eterna de quienes están en Cristo y en la realidad del juicio y la separación definitiva de Dios.",
      "Esperamos, conforme a la promesa de las Escrituras, la restauración final de todas las cosas, los nuevos cielos y la nueva tierra, donde Dios habitará eternamente con su pueblo.",
      "Esta esperanza nos llama a vivir en santidad, fidelidad, misión y expectativa hasta la venida del Señor.",
    ],
  },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Somos INBREP"
        lead="Crecemos en su Palabra con el poder de su Espíritu: una Comunidad Educativa Interdenominacional dedicada a la formación bíblica, teológica y ministerial."
      />

      {/* Subnav de subsecciones */}
      <div className="border-b border-ink/10 bg-paper">
        <div className="container-page flex flex-wrap gap-x-6 gap-y-2 py-4 text-sm font-medium text-muted">
          {SUBSECTIONS.map((s) => (
            <a key={s.title} href={s.anchor} className="hover:text-ember-dark">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Quiénes somos / ¿Por qué una institución teológica? */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Nuestra razón de ser</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
              ¿Por qué una institución teológica?
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              Somos una comunidad internacional formada por pastores,
              teólogos, educadores, profesionales, líderes y servidores de
              diferentes países y tradiciones del cristianismo protestante.
              Nuestro propósito es acercar una formación de calidad a
              quienes desean comprender profundamente las Escrituras, pensar
              responsablemente su fe y servir con fidelidad a Cristo, a la
              Iglesia y a sus comunidades.
            </p>
          </div>

          <div className="space-y-5 leading-relaxed text-ink-2/90">
            <p>
              El servicio ministerial exige cada vez más en el mundo actual.
              Así como la ciencia y la tecnología avanzan con rapidez,
              también crecen —de manera proporcional— las necesidades de
              nuestras comunidades de fe.
            </p>
            <p>
              En la era del acceso inmediato al conocimiento, la Iglesia está
              expuesta a un caudal constante de información: contenidos que
              enriquecen, pero también corrientes y cuestionamientos que se
              oponen a la fe que profesamos. Esto alcanza a todas las edades.
              Por eso, hoy se nos demanda desarrollar una capacidad crítica
              para analizar, reflexionar y discernir lo que consumimos.
            </p>
            <p>
              La brecha entre la preparación de la Iglesia y las necesidades
              reales aumenta. Frente a este diagnóstico, nuestra propuesta
              educativa es integral y utiliza la tecnología para acercar la
              Biblia y la teología no solamente a pastores, ministros y
              equipos de liderazgo, sino también a maestros, servidores,
              adultos, padres de familia y creyentes que desean crecer.
            </p>
            <p>
              Presentamos con alegría una comunidad educativa
              interdenominacional al servicio del desarrollo, la edificación
              y el crecimiento del Cuerpo de Cristo. INBREP fue pensado para
              unir excelencia académica y profunda vida espiritual.
            </p>
            <p>
              Queremos formar personas que anuncien el evangelio y edifiquen
              a otros con fundamentos claros y saludables, respaldados en la
              sana doctrina y llenos del Espíritu Santo.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section id="historia" className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page">
          <Eyebrow tone="ember">Nuestra historia</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Historia de INBREP
          </h2>
          <div className="mt-8 space-y-5 leading-relaxed text-ink/80 lg:max-w-3xl">
            <p>
              El Instituto Bíblico Renacer Pentecostal fue fundado en 2024 a
              partir de una inquietud compartida: acercar formación bíblica,
              teológica y ministerial de calidad a personas que no siempre
              pueden acceder a una institución formal.
            </p>
            <p>
              La iniciativa fue impulsada desde Valparaíso, Chile, por el
              pastor Daniel Poblete Pérez, quien convocó a Miguel Poblete
              Gallardo y a un equipo de colaboradores para comenzar a darle
              forma al proyecto.
            </p>
            <p>
              INBREP nació desde el comienzo como una experiencia
              internacional. Chilenos y argentinos aprendieron a trabajar
              juntos, conectados por una misma convicción: la Iglesia
              necesita espacios de formación accesibles, responsables y
              espiritualmente comprometidos.
            </p>
            <p>
              Durante 2024 comenzó la primera experiencia formativa con un
              pequeño grupo de estudiantes, entre ellos pastores, líderes y
              miembros de iglesias que respondieron al llamado de prepararse
              para servir con mayores y mejores herramientas.
            </p>
            <p>
              Con el crecimiento del proyecto se incorporaron Diana Vidal,
              Gabriel Garay y Joel Domínguez al equipo fundador,
              consolidando una comunidad integrada por personas con
              experiencias académicas, ministeriales y profesionales
              diversas.
            </p>
            <p>
              INBREP es una institución independiente. No pertenece a una
              denominación ni fue creado para representar exclusivamente a
              una tradición eclesial. Hoy nos definimos como una Comunidad
              Educativa Interdenominacional abierta al encuentro y al
              aprendizaje dentro del cristianismo protestante.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Por qué Renacer Pentecostal? */}
      <section id="renacer-pentecostal" className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Nuestro nombre</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
              ¿Por qué Renacer Pentecostal?
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Nuestro nombre expresa nuestra historia, nuestra esperanza y
                nuestra visión. Creemos que un verdadero renacer pentecostal
                no se limita a una experiencia emocional ni a una identidad
                denominacional. Está profundamente relacionado con el
                regreso a las Escrituras, la oración, la obra del Espíritu
                Santo, la santidad, la comunión, el testimonio y la misión.
              </p>
              <p>
                Anhelamos contribuir a un renacimiento bíblico y teológico
                dentro de las comunidades pentecostales. Queremos acompañar
                la formación de nuevas generaciones capaces de conocer
                profundamente aquello que creen, explicar su fe con claridad
                y vivirla con madurez.
              </p>
              <p>
                Nuestra identidad pentecostal no nos encierra. Nos invita a
                reconocer la obra de Dios en toda su Iglesia y a aprender de
                otras tradiciones cristianas.
              </p>
            </div>
          </div>

          <div>
            <Eyebrow tone="ember">Nuestra comunidad</Eyebrow>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
              Pentecostales e interdenominacionales
            </h2>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                En INBREP participan profesores y estudiantes procedentes de
                diferentes tradiciones del cristianismo protestante.
              </p>
              <p>
                No buscamos que todos piensen exactamente de la misma manera
                ni pretendemos ocultar las diferencias teológicas. Queremos
                aprender a estudiarlas, comprenderlas y dialogar sobre ellas
                con fidelidad bíblica, humildad, respeto y amor cristiano.
              </p>
              <p>
                Creemos que la teología se construye en comunidad y que los
                aportes de todo el Cuerpo de Cristo pueden ayudarnos a
                crecer, servir mejor y parecernos más a Jesús.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y visión */}
      <section id="mision-vision" className="bg-sun py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-ink/15 bg-white/70 p-8">
            <Eyebrow>Nuestra misión</Eyebrow>
            <p className="mt-5 leading-relaxed text-ink/80">
              Acercar formación bíblica, teológica y ministerial de calidad a
              personas e iglesias de Sudamérica, especialmente a quienes
              encuentran barreras geográficas, económicas, personales o
              ministeriales para acceder a instituciones formales.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Formamos estudiantes, maestros, líderes, pastores y servidores
              para que conozcan profundamente las Escrituras, desarrollen
              pensamiento crítico, articulen responsablemente su fe y sirvan
              a la iglesia local y a sus comunidades.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Nuestra misión también incluye acompañar activamente a las
              iglesias mediante programas, recursos, capacitación y proyectos
              que fortalezcan su tarea educativa, pastoral y misionera.
            </p>
          </div>

          <div className="rounded-3xl border border-ink/15 bg-white/70 p-8">
            <Eyebrow tone="ember">Nuestra visión</Eyebrow>
            <p className="mt-5 leading-relaxed text-ink/80">
              Convertirnos en una institución académica referente en el Cono
              Sur, reconocida por su fidelidad bíblica, excelencia académica,
              accesibilidad, vida espiritual y compromiso con la Iglesia.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Soñamos con contribuir al crecimiento de la Iglesia en toda
              Sudamérica mediante la formación de nuevas generaciones de
              cristianos, maestros, líderes, pastores, plantadores,
              misioneros y teólogos preparados para servir responsablemente
              en sus propios contextos.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Queremos construir una comunidad internacional capaz de
              producir conocimiento, desarrollar recursos, acompañar
              iglesias y generar iniciativas que bendigan a la sociedad y
              participen activamente en la misión de Dios.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="container-page py-16 sm:py-20">
        <Eyebrow>Lo que nos guía</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Nuestros valores
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-ink/10 bg-paper p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-semibold text-ember-dark">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipo fundador */}
      <section id="equipo" className="bg-mint py-16 text-ink sm:py-20">
        <div className="container-page">
          <Eyebrow>Nuestra gente</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold sm:text-4xl">
            Equipo fundador
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink/70">
            INBREP fue construido mediante el trabajo, la oración y el
            servicio de un equipo internacional integrado por:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {EQUIPO_FUNDADOR.map((nombre) => (
              <div
                key={nombre}
                className="flex flex-col items-center gap-3 rounded-2xl border border-ink/15 bg-white/70 p-6 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ember-dark/10 font-display text-lg font-bold text-ember-dark">
                  {nombre
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <span className="text-sm font-semibold">{nombre}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl leading-relaxed text-ink/70">
            Cada integrante aporta experiencias ministeriales, académicas,
            pedagógicas, profesionales y comunitarias que enriquecen la vida
            de la institución. A este equipo se suman docentes,
            colaboradores, iglesias, ministerios y aliados que comparten el
            deseo de acercar formación bíblica y teológica de calidad a más
            personas.
          </p>
        </div>
      </section>

      {/* Declaración de Fe */}
      <section id="declaracion-de-fe" className="container-page py-16 sm:py-20">
        <Eyebrow tone="ember">Nuestras convicciones</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Declaración de Fe
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted">
          La siguiente declaración expresa las convicciones cristianas
          fundamentales que orientan nuestra identidad, nuestra enseñanza y
          nuestra vida comunitaria.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-x-12">
          {DECLARACION.map((art, i) => (
            <article key={art.title} className="border-t border-ink/10 pt-6">
              <h3 className="font-display text-lg font-semibold text-ink">
                {i + 1}. {art.title}
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                {art.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 max-w-3xl space-y-4 rounded-3xl border border-ink/10 bg-paper p-8 leading-relaxed text-muted shadow-sm">
          <h3 className="font-display text-lg font-semibold text-ink">
            Una comunidad, diferentes tradiciones, un mismo Señor
          </h3>
          <p>
            Reconocemos que dentro del cristianismo protestante existen
            diferentes interpretaciones sobre asuntos teológicos secundarios.
            En INBREP estas diferencias pueden ser estudiadas y discutidas
            responsablemente sin quebrantar nuestra unidad.
          </p>
          <p>
            Queremos que nuestros estudiantes conozcan las distintas
            tradiciones, aprendan a evaluarlas bíblica y teológicamente,
            formulen sus propias convicciones y desarrollen la capacidad de
            dialogar con otros cristianos con humildad y respeto.
          </p>
          <p>
            No buscamos formar personas que simplemente repitan nuestras
            respuestas. Queremos formar cristianos capaces de conocer las
            Escrituras, pensar teológicamente y servir fielmente a Cristo y a
            su Iglesia.
          </p>
        </div>
      </section>

      {/* Respaldo ministerial */}
      <section className="bg-sun py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <Eyebrow>Respaldo ministerial</Eyebrow>
          <p className="mt-5 leading-relaxed text-ink/80">
            INBREP cuenta actualmente con el respaldo de{" "}
            <strong className="font-semibold">
              Ministerio Cristiano Tu Casa y Familia, Chile
            </strong>
            .
          </p>
          <p className="mt-3 leading-relaxed text-ink/80">
            Continuamos trabajando en el desarrollo de nuevas alianzas,
            vínculos institucionales y procesos que fortalezcan académica y
            ministerialmente nuestra comunidad educativa.
          </p>
        </div>
      </section>

      <section className="container-page pb-20 pt-16">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-teal-dark px-6 py-12 text-center text-cream sm:px-12">
          <h2 className="max-w-xl text-balance font-display text-2xl font-semibold sm:text-3xl">
            Sumate a esta comunidad educativa interdenominacional
          </h2>
          <Button href="/admision" variant="primary">
            Quiero estudiar en INBREP
          </Button>
        </div>
      </section>
    </>
  );
}
