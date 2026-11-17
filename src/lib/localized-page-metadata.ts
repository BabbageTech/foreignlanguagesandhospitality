import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isLocale, localeConfig, type Locale } from "@/i18n/config";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Reviewed page-level SEO copy for the currently migrated high-traffic and programme-detail routes.
 * Non-English versions remain noindex through proxy.ts until translation and institutional QA are approved.
 */
const pageMetadata = {
  home: {
    en: ["International Institute of Foreign Languages & Hospitality Management | Narok, Kenya", "Language courses, hospitality management training and career-preparation programmes in Kenya."],
    de: ["International Institute of Foreign Languages & Hospitality Management | Narok, Kenia", "Sprachkurse, Ausbildung im Hotel- und Gastgewerbe sowie berufliche Vorbereitung in Kenia."],
    sw: ["International Institute of Foreign Languages & Hospitality Management | Narok, Kenya", "Kozi za lugha, mafunzo ya usimamizi wa ukarimu na maandalizi ya taaluma nchini Kenya."],
    fr: ["International Institute of Foreign Languages & Hospitality Management | Narok, Kenya", "Cours de langues, formation en gestion hôtelière et préparation professionnelle au Kenya."],
    es: ["International Institute of Foreign Languages & Hospitality Management | Narok, Kenia", "Cursos de idiomas, formación en gestión hotelera y preparación profesional en Kenia."],
    nl: ["International Institute of Foreign Languages & Hospitality Management | Narok, Kenia", "Taallessen, opleidingen in hospitalitymanagement en loopbaanvoorbereiding in Kenia."],
    it: ["International Institute of Foreign Languages & Hospitality Management | Narok, Kenya", "Corsi di lingua, formazione in gestione dell’ospitalità e preparazione professionale in Kenya."],
    zh: ["International Institute of Foreign Languages & Hospitality Management | 肯尼亚纳罗克", "提供语言课程、酒店管理培训及肯尼亚职业发展准备课程。"],
  },
  about: {
    en: ["About the Institute", "Learn about the International Institute of Foreign Languages & Hospitality Management, its language and hospitality programmes, and how to contact the institute."],
    de: ["Über das Institut", "Erfahren Sie mehr über das International Institute of Foreign Languages & Hospitality Management, seine Sprach- und Hospitality-Programme sowie die Kontaktmöglichkeiten."],
    sw: ["Kuhusu Taasisi", "Fahamu kuhusu International Institute of Foreign Languages & Hospitality Management, programu zake za lugha na ukarimu, na jinsi ya kuwasiliana na taasisi."],
    fr: ["À propos de l’institut", "Découvrez l’International Institute of Foreign Languages & Hospitality Management, ses formations en langues et en hôtellerie, ainsi que ses coordonnées."],
    es: ["Sobre el instituto", "Conozca el International Institute of Foreign Languages & Hospitality Management, sus programas de idiomas y hostelería y cómo ponerse en contacto con el instituto."],
    nl: ["Over het instituut", "Lees meer over het International Institute of Foreign Languages & Hospitality Management, de taal- en hospitalityopleidingen en de contactmogelijkheden."],
    it: ["Informazioni sull’istituto", "Scopri l’International Institute of Foreign Languages & Hospitality Management, i suoi corsi di lingua e ospitalità e come contattare l’istituto."],
    zh: ["关于学院", "了解 International Institute of Foreign Languages & Hospitality Management、其语言与酒店管理课程，以及联系学院的方式。"],
  },
  academics: {
    en: ["Academic Programmes", "Explore language courses, hospitality management, travel and tourism, ICT and digital skills, and German-language learning at IIFLHM."],
    de: ["Studien- und Ausbildungsprogramme", "Entdecken Sie Sprachkurse, Hospitality Management, Reisen und Tourismus, IKT und digitale Kompetenzen sowie Deutschkurse am IIFLHM."],
    sw: ["Programu za Masomo", "Chunguza kozi za lugha, usimamizi wa ukarimu, usafiri na utalii, TEHAMA na ujuzi wa kidijitali, pamoja na kujifunza Kijerumani katika IIFLHM."],
    fr: ["Programmes de formation", "Découvrez les cours de langues, la gestion hôtelière, le tourisme, les technologies de l’information et l’apprentissage de l’allemand à l’IIFLHM."],
    es: ["Programas académicos", "Explore los cursos de idiomas, la gestión hotelera, los viajes y el turismo, las TIC y las competencias digitales, y el aprendizaje de alemán en IIFLHM."],
    nl: ["Opleidingsprogramma’s", "Ontdek taalcursussen, hospitalitymanagement, reizen en toerisme, ICT en digitale vaardigheden, en Duitse taallessen bij IIFLHM."],
    it: ["Programmi formativi", "Scopri i corsi di lingua, la gestione dell’ospitalità, viaggi e turismo, ICT e competenze digitali, e lo studio del tedesco presso IIFLHM."],
    zh: ["学术课程", "了解 IIFLHM 提供的语言课程、酒店管理、旅游与观光、信息通信技术及数字技能课程，以及德语学习。"],
  },
  hospitalityManagement: {
    en: ["Hospitality Management Training", "Explore the Craft Certificate in Catering and Accommodation, its hospitality operations content and current admissions information."],
    de: ["Ausbildung im Hospitality Management", "Informationen zum Craft Certificate in Catering and Accommodation, zu den Lerninhalten im Gastgewerbe und zur aktuellen Zulassung."],
    sw: ["Mafunzo ya Usimamizi wa Ukarimu", "Pata maelezo kuhusu Craft Certificate in Catering and Accommodation, maeneo ya mafunzo ya ukarimu na taarifa za sasa za udahili."],
    fr: ["Formation en gestion hôtelière", "Découvrez le Craft Certificate in Catering and Accommodation, ses domaines d’apprentissage en hôtellerie et les informations actuelles sur les admissions."],
    es: ["Formación en gestión hotelera", "Conozca el Craft Certificate in Catering and Accommodation, sus áreas de aprendizaje en hostelería y la información actual de admisiones."],
    nl: ["Opleiding hospitalitymanagement", "Lees over het Craft Certificate in Catering and Accommodation, de leergebieden binnen hospitality en actuele toelatingsinformatie."],
    it: ["Formazione in gestione dell’ospitalità", "Scopri il Craft Certificate in Catering and Accommodation, le aree formative nell’ospitalità e le informazioni aggiornate sulle ammissioni."],
    zh: ["酒店与餐饮管理培训", "了解 Craft Certificate in Catering and Accommodation、酒店服务学习领域及当前招生信息。"],
  },
  travelTourism: {
    en: ["Travel & Tourism Management", "Explore the Craft Certificate in Tour Guiding and Travel Operations and its travel, tourism and communication learning areas."],
    de: ["Management für Reisen und Tourismus", "Informationen zum Craft Certificate in Tour Guiding and Travel Operations und zu Lernbereichen in Reiseverkehr, Tourismus und Kommunikation."],
    sw: ["Usimamizi wa Usafiri na Utalii", "Pata maelezo kuhusu Craft Certificate in Tour Guiding and Travel Operations na maeneo ya kujifunza kuhusu safari, utalii na mawasiliano."],
    fr: ["Gestion des voyages et du tourisme", "Découvrez le Craft Certificate in Tour Guiding and Travel Operations et ses domaines d’apprentissage liés aux voyages, au tourisme et à la communication."],
    es: ["Gestión de viajes y turismo", "Conozca el Craft Certificate in Tour Guiding and Travel Operations y sus áreas de aprendizaje sobre viajes, turismo y comunicación."],
    nl: ["Management van reizen en toerisme", "Lees over het Craft Certificate in Tour Guiding and Travel Operations en de leergebieden rond reizen, toerisme en communicatie."],
    it: ["Gestione dei viaggi e del turismo", "Scopri il Craft Certificate in Tour Guiding and Travel Operations e le aree formative relative a viaggi, turismo e comunicazione."],
    zh: ["旅游与旅行管理", "了解 Craft Certificate in Tour Guiding and Travel Operations，以及旅行、旅游和沟通方面的学习领域。"],
  },
  languages: {
    en: ["Language Courses", "Explore the language courses currently listed by IIFLHM, including German, English, French, Spanish, Mandarin Chinese, Arabic, Kiswahili and Japanese."],
    de: ["Sprachkurse", "Entdecken Sie die bei IIFLHM aufgeführten Sprachkurse, darunter Deutsch, Englisch, Französisch, Spanisch, Mandarin, Arabisch, Kiswahili und Japanisch."],
    sw: ["Kozi za Lugha", "Chunguza kozi za lugha zilizoorodheshwa na IIFLHM, zikiwemo Kijerumani, Kiingereza, Kifaransa, Kihispania, Mandarin, Kiarabu, Kiswahili na Kijapani."],
    fr: ["Cours de langues", "Découvrez les cours de langues répertoriés par l’IIFLHM, notamment l’allemand, l’anglais, le français, l’espagnol, le mandarin, l’arabe, le kiswahili et le japonais."],
    es: ["Cursos de idiomas", "Explore los cursos de idiomas incluidos en IIFLHM, como alemán, inglés, francés, español, mandarín, árabe, suajili y japonés."],
    nl: ["Taalcursussen", "Bekijk de taalcursussen die bij IIFLHM vermeld staan, waaronder Duits, Engels, Frans, Spaans, Mandarijn, Arabisch, Kiswahili en Japans."],
    it: ["Corsi di lingua", "Scopri i corsi di lingua elencati da IIFLHM, tra cui tedesco, inglese, francese, spagnolo, mandarino, arabo, swahili e giapponese."],
    zh: ["语言课程", "了解 IIFLHM 列出的语言课程，包括德语、英语、法语、西班牙语、普通话、阿拉伯语、斯瓦希里语和日语。"],
  },
  ict: {
    en: ["ICT & Digital Innovation", "Explore ICT learning areas in web development, data analytics, cybersecurity and mobile application development at IIFLHM."],
    de: ["IKT und digitale Innovation", "Entdecken Sie Lernbereiche in Webentwicklung, Datenanalyse, Cybersicherheit und mobiler Anwendungsentwicklung am IIFLHM."],
    sw: ["TEHAMA na Ubunifu wa Kidijitali", "Chunguza maeneo ya kujifunza kuhusu utengenezaji wa tovuti, uchanganuzi wa data, usalama wa mtandao na programu za simu katika IIFLHM."],
    fr: ["TIC et innovation numérique", "Découvrez les domaines de formation en développement web, analyse de données, cybersécurité et applications mobiles à l’IIFLHM."],
    es: ["TIC e innovación digital", "Explore las áreas de aprendizaje en desarrollo web, análisis de datos, ciberseguridad y aplicaciones móviles en IIFLHM."],
    nl: ["ICT en digitale innovatie", "Ontdek de leergebieden webontwikkeling, data-analyse, cyberbeveiliging en mobiele appontwikkeling bij IIFLHM."],
    it: ["TIC e innovazione digitale", "Scopri le aree formative di sviluppo web, analisi dei dati, sicurezza informatica e applicazioni mobili presso IIFLHM."],
    zh: ["信息通信技术与数字创新", "了解 IIFLHM 的网页开发、数据分析、网络安全和移动应用开发学习领域。"],
  },
  germanLanguage: {
    en: ["German Language Courses", "Explore German proficiency levels and external examination information for study, work and everyday communication in German-speaking countries."],
    de: ["Deutschkurse", "Informieren Sie sich über Deutsch-Niveaustufen und externe Prüfungen für Studium, Beruf und Alltag in deutschsprachigen Ländern."],
    sw: ["Kozi za Lugha ya Kijerumani", "Chunguza viwango vya Kijerumani na taarifa za mitihani ya nje kwa masomo, kazi na mawasiliano ya kila siku katika nchi zinazozungumza Kijerumani."],
    fr: ["Cours de langue allemande", "Découvrez les niveaux d’allemand et les informations sur les examens externes pour les études, le travail et la vie quotidienne dans les pays germanophones."],
    es: ["Cursos de alemán", "Explora los niveles de alemán y la información sobre exámenes externos para estudiar, trabajar y comunicarte en países germanohablantes."],
    nl: ["Duitse taalcursussen", "Bekijk Duitse taalniveaus en informatie over externe examens voor studie, werk en dagelijks contact in Duitstalige landen."],
    it: ["Corsi di lingua tedesca", "Scopri i livelli di tedesco e le informazioni sugli esami esterni per studio, lavoro e vita quotidiana nei Paesi di lingua tedesca."],
    zh: ["德语课程", "了解德语水平及外部考试信息，以支持在德语国家学习、工作和日常交流。"],
  },
  nursingPreparation: {
    en: ["Nursing Career Preparation", "Read about the institute-listed academic and language preparation pathway. Entry, recognition and professional registration depend on receiving institutions and destination-country authorities."],
    de: ["Vorbereitung auf eine Karriere in der Pflege", "Informationen zum aufgeführten akademischen und sprachlichen Vorbereitungspfad. Zulassung, Anerkennung und berufliche Registrierung hängen von aufnehmenden Einrichtungen und Behörden des Ziellandes ab."],
    sw: ["Maandalizi ya Kazi ya Uuguzi", "Pata maelezo kuhusu njia ya maandalizi ya kitaaluma na lugha iliyoorodheshwa na taasisi. Udahili, utambuzi na usajili hutegemea taasisi na mamlaka za nchi lengwa."],
    fr: ["Préparation à une carrière en soins infirmiers", "Découvrez le parcours de préparation académique et linguistique répertorié par l’institut. L’admission, la reconnaissance et l’inscription professionnelle dépendent des établissements et autorités du pays de destination."],
    es: ["Preparación para una carrera de enfermería", "Conoce la vía de preparación académica y lingüística incluida por el instituto. La admisión, el reconocimiento y el registro profesional dependen de las instituciones y autoridades del país de destino."],
    nl: ["Voorbereiding op een carrière in de verpleegkunde", "Lees over het door het instituut vermelde academische en taalkundige voorbereidingstraject. Toelating, erkenning en beroepsregistratie zijn afhankelijk van ontvangende instellingen en autoriteiten in het bestemmingsland."],
    it: ["Preparazione alla carriera infermieristica", "Scopri il percorso di preparazione accademica e linguistica indicato dall’istituto. Ammissione, riconoscimento e registrazione professionale dipendono dagli enti riceventi e dalle autorità del Paese di destinazione."],
    zh: ["护理职业准备", "了解学院列出的学术与语言准备路径。入学、资格认可和职业注册取决于接收机构及目的地国家主管部门。"],
  },
  admissions: {
    en: ["Admissions", "Explore admissions at the International Institute of Foreign Languages & Hospitality Management in Narok, Kenya. Contact the institute to confirm current intake dates."],
    de: ["Bewerbung und Aufnahme", "Informieren Sie sich über die Aufnahme am International Institute of Foreign Languages & Hospitality Management in Narok, Kenia. Aktuelle Aufnahmetermine erfahren Sie direkt beim Institut."],
    sw: ["Udahili", "Pata maelezo kuhusu udahili katika International Institute of Foreign Languages & Hospitality Management, Narok, Kenya. Wasiliana na taasisi kuthibitisha tarehe za udahili zinazofuata."],
    fr: ["Admissions", "Découvrez les modalités d’admission à l’International Institute of Foreign Languages & Hospitality Management à Narok, au Kenya. Contactez l’institut pour confirmer les prochaines dates d’admission."],
    es: ["Admisiones", "Conozca el proceso de admisión del International Institute of Foreign Languages & Hospitality Management en Narok, Kenia. Contacte con el instituto para confirmar las próximas fechas de ingreso."],
    nl: ["Toelating", "Lees meer over de toelating bij het International Institute of Foreign Languages & Hospitality Management in Narok, Kenia. Neem contact op met het instituut om de komende instroomdata te bevestigen."],
    it: ["Ammissioni", "Scopri le modalità di ammissione all’International Institute of Foreign Languages & Hospitality Management a Narok, in Kenya. Contatta l’istituto per confermare le prossime date di ingresso."],
    zh: ["招生申请", "了解位于肯尼亚纳罗克的 International Institute of Foreign Languages & Hospitality Management 的招生流程。请联系学院确认最新入学日期。"],
  },
  contact: {
    en: ["Contact the Institute", "Contact IIFLHM in Narok, Kenya, for information about language courses, hospitality training, technology programmes and admissions."],
    de: ["Kontakt zum Institut", "Kontaktieren Sie IIFLHM in Narok, Kenia, für Informationen zu Sprachkursen, Hospitality-Ausbildung, Technologieprogrammen und Aufnahme."],
    sw: ["Wasiliana na Taasisi", "Wasiliana na IIFLHM, Narok, Kenya, kupata taarifa kuhusu kozi za lugha, mafunzo ya ukarimu, programu za teknolojia na udahili."],
    fr: ["Contacter l’institut", "Contactez l’IIFLHM à Narok, au Kenya, pour obtenir des informations sur les cours de langues, l’hôtellerie, les programmes technologiques et les admissions."],
    es: ["Contactar con el instituto", "Contacte con IIFLHM en Narok, Kenia, para obtener información sobre cursos de idiomas, hostelería, tecnología y admisiones."],
    nl: ["Contact met het instituut", "Neem contact op met IIFLHM in Narok, Kenia, voor informatie over taalcursussen, hospitality, technologieprogramma’s en toelating."],
    it: ["Contatta l’istituto", "Contatta IIFLHM a Narok, in Kenya, per informazioni sui corsi di lingua, ospitalità, tecnologia e ammissioni."],
    zh: ["联系学院", "联系位于肯尼亚纳罗克的 IIFLHM，了解语言课程、酒店服务培训、技术课程和招生信息。"],
  },
} satisfies Record<string, Record<Locale, [string, string]>>;

const openGraphLocales: Record<Locale, string> = {
  en: "en_KE", de: "de_DE", sw: "sw_KE", fr: "fr_FR",
  es: "es_ES", nl: "nl_NL", it: "it_IT", zh: "zh_CN",
};

export function getLocalizedAlternates(pathname: string, locale: Locale): NonNullable<Metadata["alternates"]> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.website;
  const localizedPath = locale === defaultLocale ? pathname : `/${locale}${pathname === "/" ? "" : pathname}`;
  return { canonical: new URL(localizedPath, siteUrl).toString() };
}

export async function getLocalizedPageMetadata(
  page: keyof typeof pageMetadata,
  pathname: string,
  image = "/images/hero-bg.jpg",
): Promise<Metadata> {
  const requestHeaders = await headers();
  const requested = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  const locale: Locale = isLocale(requested) ? requested : defaultLocale;
  const [title, description] = pageMetadata[page][locale];
  const alternates = getLocalizedAlternates(pathname, locale);
  const canonical = String(alternates.canonical);

  return {
    title: { absolute: `${title} | ${SITE_CONFIG.shortName}` },
    description,
    alternates,
    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      url: canonical,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: SITE_CONFIG.shortName }],
      siteName: SITE_CONFIG.shortName,
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
