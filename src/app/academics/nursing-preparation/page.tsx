import { headers } from "next/headers";
import { defaultLocale, isLocale, type Locale } from "@/i18n/config";
import type { Metadata } from "next";
import { getLocalizedPageMetadata } from "@/lib/localized-page-metadata";

const copy: Record<Locale, { eyebrow: string; title: string; intro: string; note: string }> = {
  en: { eyebrow: "IIFLHM · Academic programme", title: "Nursing Career Preparation", intro: "This program equips aspiring nurses with the academic and language preparation needed for international healthcare careers, especially in Europe.", note: "Programme details, entry requirements, recognition and professional registration depend on the receiving institution and destination country. Contact admissions to confirm current information before making plans." },
  de: { eyebrow: "IIFLHM · Akademisches Programm", title: "Vorbereitung auf eine Karriere in der Pflege", intro: "Dieses Programm bietet angehenden Pflegekräften die akademische und sprachliche Vorbereitung, die sie für internationale Karrieren im Gesundheitswesen benötigen, insbesondere in Europa.", note: "Programmdetails, Zulassungsvoraussetzungen, Anerkennung und berufliche Registrierung hängen von der aufnehmenden Institution und dem Zielland ab. Bitte bestätigen Sie aktuelle Informationen vor Ihrer Planung bei der Zulassungsstelle." },
  sw: { eyebrow: "IIFLHM · Programu ya Kitaaluma", title: "Maandalizi ya Kazi ya Uuguzi", intro: "Programu hii huwapa wanaotarajia kuwa wauguzi maandalizi ya kitaaluma na lugha yanayohitajika kwa taaluma za afya za kimataifa, hasa barani Ulaya.", note: "Maelezo ya programu, masharti ya kujiunga, utambuzi wa sifa na usajili wa kitaaluma hutegemea taasisi husika na nchi lengwa. Wasiliana na idara ya udahili kuthibitisha taarifa za sasa kabla ya kupanga." },
  fr: { eyebrow: "IIFLHM · Programme académique", title: "Préparation à une carrière en soins infirmiers", intro: "Ce programme apporte aux futurs infirmiers et infirmières la préparation académique et linguistique nécessaire aux carrières internationales dans le secteur de la santé, notamment en Europe.", note: "Les détails du programme, les conditions d’admission, la reconnaissance et l’inscription professionnelle dépendent de l’établissement d’accueil et du pays de destination. Contactez les admissions pour confirmer les informations à jour avant toute démarche." },
  es: { eyebrow: "IIFLHM · Programa académico", title: "Preparación para una carrera de enfermería", intro: "Este programa proporciona a los futuros profesionales de enfermería la preparación académica y lingüística necesaria para desarrollar carreras internacionales en el sector sanitario, especialmente en Europa.", note: "Los detalles del programa, los requisitos de ingreso, el reconocimiento y el registro profesional dependen de la institución receptora y del país de destino. Consulte con admisiones la información vigente antes de hacer planes." },
  nl: { eyebrow: "IIFLHM · Academisch programma", title: "Voorbereiding op een carrière in de verpleegkunde", intro: "Dit programma biedt toekomstige verpleegkundigen de academische en taalkundige voorbereiding die nodig is voor internationale carrières in de gezondheidszorg, vooral in Europa.", note: "Programmagegevens, toelatingseisen, erkenning en beroepsregistratie zijn afhankelijk van de ontvangende instelling en het bestemmingsland. Neem vóór het maken van plannen contact op met de toelatingsafdeling om de actuele informatie te bevestigen." },
  it: { eyebrow: "IIFLHM · Programma accademico", title: "Preparazione alla carriera infermieristica", intro: "Questo programma offre agli aspiranti infermieri la preparazione accademica e linguistica necessaria per intraprendere carriere internazionali nel settore sanitario, soprattutto in Europa.", note: "I dettagli del programma, i requisiti di ammissione, il riconoscimento e l’iscrizione professionale dipendono dall’istituto di destinazione e dal Paese. Contatta l’ufficio ammissioni per verificare le informazioni aggiornate prima di pianificare." },
  zh: { eyebrow: "IIFLHM · 学术课程", title: "护理职业准备", intro: "本课程为有志从事护理工作的学员提供学术与语言方面的准备，帮助其了解国际医疗卫生领域的职业发展，尤其是欧洲地区。", note: "课程详情、入学要求、资格认可和职业注册取决于接收机构及目的地国家。制定计划前，请联系招生部门确认最新信息。" },
};

export async function generateMetadata(): Promise<Metadata> {
  return getLocalizedPageMetadata("nursingPreparation", "/academics/nursing-preparation", "/images/academics/german-pathway.jpg");
}

export default async function NursingPrepPage() {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const t = copy[locale];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-[#E30613] mb-4">{t.eyebrow}</p>
      <h1 className="text-3xl md:text-5xl font-black text-[#0A2540] mb-6">{t.title}</h1>
      <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">{t.intro}</p>
      <div className="mt-10 border-l-4 border-[#F2C12C] bg-slate-50 p-6 md:p-8">
        <p className="text-sm md:text-base text-slate-700 leading-relaxed">{t.note}</p>
      </div>
    </section>
  );
}
