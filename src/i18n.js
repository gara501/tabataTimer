import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
const resources = {
  en: {
    translation: {
      logo: "Breath",
      m1: "Square",
      disclaimer: `The information provided is not intended to be a substitute for professional medical advice, diagnosis or treatment.  Never disregard professional medical advice, or delay in seeking it, because of something you have read on this website.  Never rely on information on this website in place of seeking professional medical advice. I am not a doctor.  The information I provide is based on my personal experience.`,
      heading:
        "Breathing methods to heal your body, clear your mind and relax.",
      intro: {
        title: "About Breathing",
        p1: `Do you think you know how to breath in a good way? think again. Are
					you using your primary or secondary muscles to breath? Are you
					expanding your chest or your belly?. Normal breathing is relatively
					shallow and does not use the full capacity of the lungs.
					Diaphragmatic breathing is a deep breathing exercise that fully
					engages the diaphragm and increases the efficiency of the lungs. I
					recommend to read this incredible article about the`,
        p2: `anatomy of breathing.`,
        p3: "The following image ilustrates the breathing process:",
        title2: "Breathing Patterns",
        p4: `We can identify two different breathing patterns, vertical and
				horizontal, in vertical pattern we are using secondary muscles, this
				is one of the reasons to have neck pain, bad posture, vascular
				dementia and a weak diaphragm. One of the worst probles with
				vertical breath is it doesn’t allow us to expel all of our air
				completely, that deprives our body of the oxygen it needs.`,
        imgfrom: "Image extracted From",
        p5: `Instead of breathing with your shoulders and chest, a correct breath
				uses your diaphragm muscles. And when you breathe with your
				diaphragm muscles, your belly moves in and out, while your chest and
				shoulders stay still. This way to breath is called diaphragmatic
				breathing.`,
        p6: `The diaphragm is a large muscle that sits at the base of the lungs.
				When a person inhales, their diaphragm contracts and moves downward,
				creating space for the lungs to expand and fill with air. When a
				person exhales, the diaphragm relaxes and moves upward, helping move
				air out of the lungs. Diaphragmatic breathing, or “belly breathing,”
				involves fully engaging the stomach, abdominal muscles, and
				diaphragm when breathing. This means actively pulling the diaphragm
				down with each inward breath. In this way, diaphragmatic breathing
				helps the lungs fill more efficiently. Breathing is a natural
				process that usually occurs without conscious effort. However, the
				average breath tends to be shallow and does not engage the diaphragm
				very much. During diaphragmatic breathing, a person consciously
				engages their diaphragm in order to take deeper breaths. A person
				will notice their stomach rising and falling. They will also feel an
				expanding or stretching sensation in the stomach, rather than solely
				in their chest and shoulders.`,
        p7: `There are various forms of diaphragmatic breathing. Basic
				diaphragmatic breathing is the simplest form. To perform basic
				diaphragmatic breathing, follow the instructions below`,
        title3: "Diaphragmatic Breathing",
        title4: "How to do it",
        list1: {
          li1: `Lie down on a flat surface with a pillow under the head and
					pillows beneath the knees. Pillows will help keep the body in a
					comfortable position.`,
          li2: `Place one hand on the middle of the upper chest`,
          li3: `Place the other hand on the stomach, just beneath the rib cage
					but above the diaphragm.`,
          li4: `To inhale, slowly breathe in through the nose, drawing the
					breath down toward the stomach. The stomach should push upward
					against the hand, while the chest remains still.`,
          li5: `To exhale, tighten the abdominal muscles and let the stomach
					fall downward while exhaling through pursed lips. Again, the
					chest should remain still.`,
        },
        p8: `People should practice this breathing exercise for 5–10 minutes at a
				time, around three to four times each day.`,
        p9: `Once a person becomes comfortable with diaphragmatic breathing, they
				may start to practice the exercise while seated or standing. When
				practicing diaphragmatic breathing in these positions, it is
				important to keep the shoulders, head, and neck relaxed.`,
        p10: `Diaphragmatic breathing helps a person engage the diaphragm fully
				while breathing. This may provide a number of health benefits,
				including:`,
        list2: {
          li1: "strengthening the diaphragm",
          li2: "improving stability in the core muscles",
          li3: "slowing the breathing rate",
          li4: "lowering heart rate and blood pressure",
          li5: "reducing oxygen demand",
          li6: "promoting relaxation",
        },
      },
      title5: "Risks",
      p11: `Diaphragmatic breathing is not always useful as a standalone
			treatment. People should not rely on diaphragmatic breathing alone
			to treat conditions such as anxiety, asthma, or COPD.`,
      p12: `In fact, diaphragmatic breathing could actually worsen anxiety
			symptoms if a person feels that the treatment is not working. A
			person who has anxiety can practice diaphragmatic breathing, but
			they should also ask their doctor about effective anxiety
			treatments.`,
      p13: `People who have respiratory conditions such as asthma or COPD should
			be careful when first practicing diaphragmatic breathing. It may
			initially cause labored breathing and increased fatigue. People will
			need to build up the practice gradually in order to see the
			benefits.`,
      square: {
        title: "square breathing",
        p1: `Square breathing is a type of breathwork that can shift your energy, connect you more deeply with your body, calm your nervous system, and decrease stress in your body. It is also referred to as box breathing, 4×4 breathing, and 4-part breath.`,
        title2: "How to do square breathing",
        list1: {
          li1: "Begin by slowly exhaling all of your air out.",
          li2: "Then, gently inhale through your nose to a slow count of 4.",
          li3: "Hold at the top of the breath for a count of 4.",
          li4: "Then gently exhale through your mouth for a count of 4.",
          li5: "At the bottom of the breath, pause and hold for the count of 4.",
        },
        p2: "In the simulator, you can change the number of seconds, 4 is recommended.",
        simlb1: "Breaths",
        simlb2: "Breathing Speed",
        simf1: "Set number",
        simf2: "Set seconds",
      },
      double: {
        title: "2:1 Breathing",
        p1: `2-to-1 breathing helps reduce, coordinate, and stabilize the activity of the brain and the nervous
				system. Repeated for a number of cycles, this exercise triggers an innate calming response that tempers the fight-or-flight activation brought on by performance nerves.`,
        title2: "How to do 2-to-1 breathing",
        list: {
          li1: "Sit comfortably; release your shoulders, neck, and jaw.",
          li2: "Close your eyes, allow your spine to lengthen, and exhale fully.",
          li3: "To a moderate mental count, inhale silently through your nose and deeply into your abdomen.",
          li4: "Exhale through gently pursed lips for double the count (twice the duration) of your inhalation.",
          li5: "Repeat.",
        },
        p2: `Continue for 5-10 cycles or several minutes, but reinstate normal breathing if you become lightheaded. If any thoughts intrude as you breathe, let them go without judgment, and serenely refocus on your breathing and counting. Many yoga practitioners of 2-to-1 breathing recommend exhaling via the nose rather than pursed lips – I encourage you to experiment with doing so, especially if you’re adept at breath control.`,
        link: "Study about the benefits of 2:1 breathing",
      },
      wim: {
        title: "Wim hof method",
        p1: "This method was developed by Wim Hof itself, it is based is based on three powerful pillars, Breathing, cold therapy and commitment.",
        p2: "The first pillar of the wim hof method is breathing. We’re always breathing, yet we’re mostly unaware of its tremendous potential. Heightened oxygen levels hold a treasure trove of benefits, and the specialized breathing technique of the Wim Hof Method unearths them all: more energy, reduced stress levels, and an augmented immune response that swiftly deals with pathogens.",
        p3: "The cold is your warm friend and one of the three pillars of the wim hof method . Proper exposure to the cold starts a cascade of health benefits, including the buildup of brown adipose tissue and resultant fat loss, reduced inflammation that facilitates a fortified immune system, balanced hormone levels, improved sleep quality, and the production of endorphins— the feel - good chemicals in the brain that naturally elevate your mood.",
        p4: "The third pillar of the wim hof method is the foundation of the other two: both cold exposure and conscious breathing require patience and dedication in order to be fully mastered. Armed with focus and determination you are ready to explore and eventually master your own body and mind.",
        link: "More info in the oficial page.",
        title2: "Breathing",
        title3: "Cold therapy",
        title4: "Commitment",
        title5: "How to do wim hof breathing",
        title6: "Disclaimer",
        list: {
          li1: "Assume a meditation posture: sitting, lying down — whichever is most comfortable for you. Make sure you can expand your lungs freely without feeling any constriction.",
          li2: "Get air from the mouth (or nose) using the diaphragm (expand your belly).",
          li3: "Release the air naturally, try to not force the exhalation.",
          li4: "Once you reach the number of breahts, After the last exhalation, inhale one final time, as deeply as you can.",
          li5: "Hold until you feel the urge to breathe again.",
          li6: "Once you feel the urge to breath, take a big breath and hold 15 seconds.",
          li7: "Repeat the number of sets that you want.",
        },
        p5: `Be carefully, never do the exercises in the water or driving, your body need's time to adapt.`,
        sim1: "Breaths before retention",
        sim2: "Breathing speed",
        sim3: "Normal",
        sim4: "Fast",
        sim5: "BreathHold Time",
        sim6: "Stop BreathHold",
        sim7: "Full Inhale and Hold!",
      },
    },
  },
  es: {
    translation: {
      logo: "Respira",
      disclaimer: `La información proporcionada no pretende sustituir el asesoramiento, diagnóstico o tratamiento médico profesional. Nunca ignore el consejo médico profesional, ni demore en buscarlo, debido a algo que haya leído en este sitio web. Nunca confíe en la información de este sitio web en lugar de buscar asesoramiento médico profesional. Yo no soy médico. La información que proporciono se basa en mi experiencia personal.`,
      m1: "Cuadrada",
      heading:
        "Métodos de respiración para curar tu cuerpo, aclarar tu mente y relajarte.",
      intro: {
        title: "Sobre la respiración",
        p1: `¿Crees que sabes respirar bien? Piénsalo de nuevo. ¿Estás usando tus músculos primarios o secundarios para respirar? Estás
				expandiendo tu pecho o tu estómago?. La respiración de pecho es relativamente
				superficial y no utiliza toda la capacidad de los pulmones.
				La respiración diafragmática es un ejercicio de respiración profunda que
				ensancha el diafragma y aumenta la eficiencia de los pulmones.
				Recomiendo leer este increíble artículo sobre la`,
        p2: "anatomía de la respiración.",
        p3: "La siguiente imagen ilustra el proceso de la respiración:",
        title2: "Patrones de respiración",
        p4: `Podemos identificar dos patrones de respiración diferentes, vertical y
				horizontal, en el patrón vertical estamos usando músculos secundarios, esto
				es una de las razones para tener dolor de cuello, mala postura, demencia vascular
				y diafragma débil. Uno de los peores problemas con
				la respiración vertical es que no nos permite expulsar todo el aire
				completamente, esto priva a nuestro cuerpo del oxígeno que necesita y mantiene a nuestros
				pulmones con aire residual.`,
        imgfrom: "Imagen extraída de:",
        p5: `En lugar de respirar con los hombros y el pecho, una respiración correcta
				usa los músculos del diafragma. Y cuando respiras con tu diafragma, el estómago
				se mueve hacia adentro y hacia afuera, mientras que el pecho y
				los hombros se mantienen quietos. Esta forma de respirar se llama respiración diafragmática.
				`,
        p6: `El diafragma es un músculo grande que se encuentra en la base de los pulmones.
				Cuando una persona inhala, su diafragma se contrae y se mueve hacia abajo,
				creando espacio para que los pulmones se expandan y se llenen de aire. Cuando una
				persona exhala, el diafragma se relaja y se mueve hacia arriba, lo que ayuda a mover
				aire fuera de los pulmones. La respiración diafragmática o "respiración abdominal"
				implica involucrar completamente el estómago, los músculos abdominales y
				diafragma al respirar. Esto significa tirar activamente del diafragma
				hacia abajo con cada respiración interior. De esta forma, la respiración diafragmática
				ayuda a que los pulmones se llenen de aire de manera más eficiente. Respirar es un proceso natural
				que generalmente ocurre sin esfuerzo consciente. Sin embargo, la respiración promedio tiende a ser poco
				profunda y no involucra el diafragma mucho. Durante la respiración diafragmática,
				una persona consciente
				activa su diafragma para respirar más profundamente. La persona
				notará que su estómago sube y baja. También sentirá una
				sensación de expansión o estiramiento en el estómago, en lugar de únicamente
				en el pecho y los hombros.`,
        p7: `Hay varias formas de respiración diafragmática.
				la respiración diafragmática básica es la forma más simple. Para realizar la
				respiración diafragmática básica, siga las instrucciones a continuación`,
        title3: "Respiración Diafragmática",
        title4: "Como hacerlo",
        list1: {
          li1: `Acuéstese sobre una superficie plana con una almohada debajo de la cabeza y
					debajo de las rodillas. Las almohadas ayudarán a mantener el cuerpo en un
					posición cómoda.`,
          li2: `Ponga una mano en medio de la parte alta del pecho.`,
          li3: `Ponga la otra mano sobre el estómago, justo encima de las costillas sobre el diafragma.`,
          li4: `Inhale, respire por la nariz llevando el aire al estómago, el estómago debe empujar
					la mano mientras el pecho se mantiene inmóvil.`,
          li5: `Exhale, endurezca los músculos del estómago mientras expulsa el aire a través de los labios ligeramente
					apretados, de nuevo, el pecho debe mantenerse inmóvil.`,
        },
        p8: `Lo ideal es practicar este ejercicio por 5 a 10 minutos, de 3 a 4 veces al día.`,
        p9: `Una vez se sienta confortable con este patrón de respiración, podría empezar a practicar este ejercicio sentado o de píe.
				Cuando se practica la respiración diafragmática en estas posiciones es importante mantener los hombros, cabeza y cuello relajados.`,
        p10: `La respiración diafragmática, ayuda a una persona a activar su diafragma completamente al respirar, esto genera una gran cantidad
				de beneficios como:`,
        list2: {
          li1: "Fortalecimiento del diafragma",
          li2: "Mejora en la estabilidad de los músculos del core",
          li3: "Mejora en la estabilidad de los músculos del core",
          li4: "Reduce el ritmo de respiración",
          li5: "Reduce el ritmo cardíaco y la presión arterial",
          li6: "Promueve la relajación",
        },
        title5: "Riesgos",
        p11: `La respiración diafragmática no siempre es útil como único tratamiento. No se debería practicar en solitario si se tienen condiciones como ansiedad, asma o COPD.`,
        p12: `De hecho, la respiración diafragmática podría empeorar la ansiedad, si la persona siente que el tratamiento no está funcionando. Una persona con ansiedad debería consultar con su médico si puede practicar la respiración diafragmática, pero también debería preguntar a su médico sobre tratamientos efectivos contra la ansiedad.`,
        p13: `Personas con problemas respiratorios como asma o COPD deberían de tener cuidado
				al iniciar con la práctica de la respiración diafragmática. Inicialmente, podría provocar fatiga, por eso
				es ideal iniciar de forma gradual para poder observar sus beneficios.`,
      },
      square: {
        title: "Respiración cuadrada",
        p1: `La respiración cuadrada, es un tipo de respiración que puede cambiar tu energía, conectar más profundamente
				con tu cuerpo, calmar tu sistema nervioso y reducir el estrés en tu cuerpo. También es conocida como respiración en caja, 
				respiración 4x4, o patrón de respiración de 4.`,
        title2: "Como realizar la respiración cuadrada.",
        list1: {
          li1: "Empiece lentamente exhalando todo el aire de sus pulmones.",
          li2: "Entonces, gentilmente, inhale a través de su nariz, contando 4 segundos.",
          li3: "Luego, sostenga por 4 segundos el aire.",
          li4: "Luego, gentilmente, exhale contando hasta 4.",
          li5: "Al final, sin aire, sostenga ese estado por 4 segundos más.",
        },
        p2: "En el simulador podrá cambiar el número de segundos a su gusto, lo recomendado según el método, es 4 segundos.",
        simlb1: "Respiraciones",
        simlb2: "Velocidad de cada respiración",
        simf1: "Cantidad",
        simf2: "Segundos",
      },
      double: {
        title: "Respiración 2:1",
        p1: `La respiración 2-a-1 ayuda a mejorar, coordinar y estabilizar la actividad del cerebro y del sistema nervioso,
				Si se repite varias veces, este ejercicio dispara la respuesta de relajación y calma, por ende, activa el sistema parasimpático.`,
        title2: "Como realizar la respiración 2:1",
        list: {
          li1: "Siéntese cómodamente, relaje los hombros, cuello y mandíbula.",
          li2: "Cierre los ojos, estire su columna y exhale completamente.",
          li3: "Con un conteo mental moderado, inhale silenciosamente a través de la nariz e infle su abdomen (diafragmática).",
          li4: "Exhale a través de sus labios manteniéndolos ligeramente apretados, de esta forma podrá expulsar el aire lentamente, ahora efectúe un conteo del doble del tiempo que le tomó inhalar.",
          li5: "Repita.",
        },
        p2: `Continúe durante 5-10 ciclos o varios minutos, restablezca la respiración normal si se siente mareo. Si algún pensamiento se entromete mientras respira, déjelo ir sin juzgarlo y vuelva a concentrarse serenamente en su respiración y conteo. Muchos practicantes de yoga de respiración 2 a 1 recomiendan exhalar por la nariz en lugar de los labios fruncidos; te animo a que experimentes haciéndolo, especialmente si eres experto en el control de la respiración.`,
        link: "Estúdio sobre los beneficios de la respiración 2:1",
      },
      wim: {
        title: "Método Wim hof",
        p1: "Este método fue creado y desarrollado por el mismo Wim Hof, está basado en 3 pilares, respiración, terapia de frío y compromiso. ",
        p2: "El primer pilar del método wim hof es la respiración. Siempre estamos respirando, pero la mayoría de nosotros no somos conscientes de su tremendo potencial. Los niveles elevados de oxígeno contienen un tesoro de beneficios, y la técnica de respiración especializada del Método Wim Hof los descubre todos: más energía, niveles reducidos de estrés y una respuesta inmunitaria aumentada que trata rápidamente con los patógenos.",
        p3: "El frío es tu cálido amigo y uno de los tres pilares del método wim hof. La exposición adecuada al frío inicia una cascada de beneficios para la salud, incluida la acumulación de tejido adiposo marrón y la pérdida de grasa resultante, la reducción de la inflamación que facilita un sistema inmunológico fortalecido, los niveles hormonales equilibrados, la mejora de la calidad del sueño y la producción de endorfinas (la sensación) buenos químicos en el cerebro que naturalmente elevan su estado de ánimo.",
        p4: "El tercer pilar del método wim hof es la base de los otros dos: tanto la exposición al frío como la respiración consciente requieren paciencia y dedicación para dominarse por completo. Armado con concentración y determinación, está listo para explorar y eventualmente dominar su propio cuerpo y mente.",
        link: "Para mas información, visita su página oficial.",
        title2: "Respiración",
        title3: "Terapia de frío",
        title4: "Compromiso",
        title5: "Como realizar el método Wim hof",
        title6: "Disclaimer",
        list: {
          li1: "Adopte una postura de meditación: sentado, acostado, lo que le resulte más cómodo. Asegúrese de poder expandir sus pulmones libremente sin sentir ninguna constricción.",
          li2: "Saque aire de la boca (o nariz) usando el diafragma (expanda su abdomen).",
          li3: "Libere el aire de forma natural, intente no forzar la exhalación.",
          li4: "Una vez que alcance el número de respiraciones, después de la última exhalación, inhale una última vez, tan profundamente como pueda.",
          li5: "Sostenga hasta que sienta la necesidad de respirar nuevamente.",
          li6: "Una vez que sienta la necesidad de respirar, respire profundamente y aguante 15 segundos.",
          li7: "Repite el número de series que quieras.",
        },
        p5: `Tenga cuidado, nunca haga los ejercicios en el agua o mientras conduce o realiza alguna actividad que requiera toda su atención,
						inicie poco a poco, su cuerpo necesita tiempo para adaptarse.`,
        sim1: "Respiraciones antes de retener",
        sim2: "Velocidad de respiración",
        sim3: "Normal",
        sim4: "Rápida",
        sim5: "Tiempo de retención",
        sim6: "Detener retención",
        sim7: "Respire profundo y sostenga!",
      },
    },
  },
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
