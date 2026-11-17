import type { Locale } from "./config";

export interface LegalPageCopy { title: string; description: string; body: string }
export interface LegalPagesCopy { privacy: LegalPageCopy; terms: LegalPageCopy }

const copy: Record<Locale, LegalPagesCopy> = {
  en: {
    privacy: { title: "Privacy Notice (Interim) | IIFLHM", description: "Interim privacy notice; the complete institutional policy is pending approval.", body: "This page is an interim notice, not a complete privacy policy. The institute has not yet supplied an institution-approved explanation of its data practices, including the purposes, lawful basis, recipients, retention periods, and your privacy rights. Before submitting personal information or supporting documents through this website, contact the institute to ask how your information will be handled." },
    terms: { title: "Terms Notice (Interim) | IIFLHM", description: "Interim terms notice; complete institution-approved terms are pending.", body: "This page is an interim notice, not a complete set of terms and conditions. Institution-approved terms covering applications, admissions, fees, cancellations, services, intellectual property, and other contractual matters have not been supplied. Contact the institute for the applicable written terms before relying on website information or making a commitment." },
  },
  de: {
    privacy: { title: "Datenschutzhinweis (vorläufig) | IIFLHM", description: "Vorläufiger Datenschutzhinweis; die vollständige institutionelle Erklärung steht noch aus.", body: "Diese Seite ist ein vorläufiger Hinweis und keine vollständige Datenschutzerklärung. Das Institut hat noch keine institutionell genehmigte Erläuterung seiner Datenverarbeitung bereitgestellt, einschließlich Zwecke, Rechtsgrundlagen, Empfänger, Speicherfristen und Ihrer Datenschutzrechte. Bevor Sie über diese Website personenbezogene Daten oder Nachweise übermitteln, fragen Sie das Institut, wie Ihre Angaben verarbeitet werden." },
    terms: { title: "Hinweis zu Bedingungen (vorläufig) | IIFLHM", description: "Vorläufiger Hinweis zu Bedingungen; vollständige genehmigte Bedingungen stehen noch aus.", body: "Diese Seite ist ein vorläufiger Hinweis und keine vollständigen Geschäfts- oder Nutzungsbedingungen. Vom Institut genehmigte Bedingungen zu Bewerbungen, Zulassung, Gebühren, Stornierungen, Leistungen, geistigem Eigentum und weiteren Vertragsfragen liegen noch nicht vor. Fragen Sie vor einer Entscheidung oder Verpflichtung beim Institut nach den geltenden schriftlichen Bedingungen." },
  },
  sw: {
    privacy: { title: "Taarifa ya Faragha ya Muda | IIFLHM", description: "Taarifa ya muda ya faragha; sera kamili ya taasisi inasubiri idhini.", body: "Ukurasa huu ni taarifa ya muda, si sera kamili ya faragha. Taasisi bado haijatoa maelezo yaliyoidhinishwa kuhusu namna inavyoshughulikia data, ikijumuisha madhumuni, msingi wa kisheria, wapokeaji, muda wa kuhifadhi na haki zako za faragha. Kabla ya kutuma taarifa binafsi au nyaraka kupitia tovuti hii, wasiliana na taasisi kuuliza jinsi taarifa zako zitakavyoshughulikiwa." },
    terms: { title: "Taarifa ya Muda ya Vigezo na Masharti | IIFLHM", description: "Taarifa ya muda kuhusu masharti; masharti kamili yaliyoidhinishwa yanasubiri kutolewa.", body: "Ukurasa huu ni taarifa ya muda, si seti kamili ya vigezo na masharti. Masharti yaliyoidhinishwa na taasisi kuhusu maombi, udahili, ada, kughairi, huduma, haki miliki na masuala mengine ya kimkataba bado hayajatolewa. Kabla ya kutegemea taarifa za tovuti au kufanya ahadi, wasiliana na taasisi upate masharti husika yaliyoandikwa." },
  },
  fr: {
    privacy: { title: "Avis de confidentialité provisoire | IIFLHM", description: "Avis de confidentialité provisoire ; la politique complète attend l’approbation de l’institut.", body: "Cette page est un avis provisoire et non une politique de confidentialité complète. L’institut n’a pas encore fourni d’explication approuvée de ses pratiques en matière de données, notamment les finalités, la base juridique, les destinataires, les durées de conservation et vos droits. Avant d’envoyer des données personnelles ou des pièces justificatives via ce site, contactez l’institut pour demander comment elles seront traitées." },
    terms: { title: "Avis provisoire sur les conditions | IIFLHM", description: "Avis provisoire sur les conditions ; les conditions complètes approuvées sont en attente.", body: "Cette page est un avis provisoire et non un ensemble complet de conditions. Les conditions approuvées par l’institut concernant les candidatures, les admissions, les frais, les annulations, les services, la propriété intellectuelle et les autres questions contractuelles n’ont pas encore été fournies. Demandez à l’institut les conditions écrites applicables avant de vous fier aux informations du site ou de prendre un engagement." },
  },
  es: {
    privacy: { title: "Aviso de privacidad provisional | IIFLHM", description: "Aviso de privacidad provisional; la política institucional completa está pendiente de aprobación.", body: "Esta página es un aviso provisional, no una política de privacidad completa. El instituto aún no ha facilitado una explicación aprobada de sus prácticas de datos, incluidos los fines, la base jurídica, los destinatarios, los plazos de conservación y sus derechos de privacidad. Antes de enviar datos personales o documentos justificativos a través de este sitio web, contacte con el instituto para preguntar cómo se tratará su información." },
    terms: { title: "Aviso provisional sobre términos | IIFLHM", description: "Aviso provisional sobre términos; los términos completos aprobados están pendientes.", body: "Esta página es un aviso provisional, no un conjunto completo de términos y condiciones. Aún no se han facilitado las condiciones aprobadas por el instituto sobre solicitudes, admisiones, tarifas, cancelaciones, servicios, propiedad intelectual y otras cuestiones contractuales. Solicite al instituto las condiciones escritas aplicables antes de confiar en la información del sitio o asumir un compromiso." },
  },
  nl: {
    privacy: { title: "Voorlopige privacyverklaring | IIFLHM", description: "Voorlopige privacykennisgeving; het volledige instellingsbeleid wacht op goedkeuring.", body: "Deze pagina is een voorlopige kennisgeving en geen volledig privacybeleid. Het instituut heeft nog geen goedgekeurde uitleg verstrekt over zijn gegevensverwerking, waaronder doeleinden, rechtsgrondslag, ontvangers, bewaartermijnen en uw privacyrechten. Neem voordat u persoonsgegevens of bewijsstukken via deze website verstuurt contact op met het instituut om te vragen hoe uw gegevens worden verwerkt." },
    terms: { title: "Voorlopige kennisgeving voorwaarden | IIFLHM", description: "Voorlopige kennisgeving over voorwaarden; de volledige goedgekeurde voorwaarden volgen nog.", body: "Deze pagina is een voorlopige kennisgeving en geen volledige algemene voorwaarden. Door het instituut goedgekeurde voorwaarden over aanvragen, toelating, kosten, annuleringen, diensten, intellectueel eigendom en andere contractuele zaken zijn nog niet verstrekt. Vraag het instituut om de toepasselijke schriftelijke voorwaarden voordat u op website-informatie vertrouwt of een verplichting aangaat." },
  },
  it: {
    privacy: { title: "Informativa provvisoria sulla privacy | IIFLHM", description: "Informativa provvisoria sulla privacy; la politica completa dell’istituto è in attesa di approvazione.", body: "Questa pagina è un’informativa provvisoria, non una politica sulla privacy completa. L’istituto non ha ancora fornito una spiegazione approvata delle proprie pratiche relative ai dati, comprese finalità, base giuridica, destinatari, periodi di conservazione e diritti alla privacy. Prima di inviare dati personali o documenti tramite questo sito, contatta l’istituto per chiedere come saranno trattate le tue informazioni." },
    terms: { title: "Avviso provvisorio sui termini | IIFLHM", description: "Avviso provvisorio sui termini; i termini completi approvati sono in attesa.", body: "Questa pagina è un’informativa provvisoria, non un insieme completo di termini e condizioni. Non sono ancora stati forniti termini approvati dall’istituto riguardanti candidature, ammissioni, tariffe, cancellazioni, servizi, proprietà intellettuale e altre questioni contrattuali. Chiedi all’istituto i termini scritti applicabili prima di fare affidamento sulle informazioni del sito o assumere impegni." },
  },
  zh: {
    privacy: { title: "临时隐私说明 | IIFLHM", description: "临时隐私说明；完整的机构隐私政策尚待批准。", body: "本页面为临时说明，并非完整的隐私政策。学院尚未提供经机构批准的数据处理说明，包括处理目的、法律依据、接收方、保存期限以及您的隐私权利。通过本网站提交个人信息或证明文件前，请联系学院询问您的信息将如何处理。" },
    terms: { title: "临时条款说明 | IIFLHM", description: "临时条款说明；完整且经机构批准的条款尚待提供。", body: "本页面为临时说明，并非完整的条款与条件。学院尚未提供经批准的申请、录取、费用、取消、服务、知识产权及其他合同事项条款。在依赖网站信息或作出承诺之前，请向学院索取适用的书面条款。" },
  },
};

const interimLabels: Record<Locale, string> = {
  en: "Interim notice — institutional approval pending",
  de: "Vorläufiger Hinweis — institutionelle Freigabe ausstehend",
  sw: "Taarifa ya muda — idhini ya taasisi inasubiriwa",
  fr: "Avis provisoire — approbation de l’institut en attente",
  es: "Aviso provisional — pendiente de aprobación institucional",
  nl: "Voorlopige kennisgeving — institutionele goedkeuring in afwachting",
  it: "Avviso provvisorio — approvazione dell’istituto in attesa",
  zh: "临时说明 — 尚待机构批准",
};

export function getLegalPageCopy(locale: Locale, page: "privacy" | "terms"): LegalPageCopy {
  return copy[locale][page];
}

export function getLegalInterimLabel(locale: Locale): string {
  return interimLabels[locale];
}
