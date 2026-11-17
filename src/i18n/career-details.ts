import type { Locale } from "./config";

export type CareerDetailKind = "apprenticeship" | "undergraduate" | "masters";
export interface CareerDetailCard { title: string; description: string }
export interface CareerDetail {
  title: string; description: string; eyebrow: string; hero: string; accent: string; heroText: string;
  status?: string; back: string; section: string; sectionText: string;
  cards?: CareerDetailCard[]; leftTitle?: string; left?: CareerDetailCard[]; rightTitle?: string; right?: string[]; cardBadges?: string[];
  documentsTitle?: string; documents?: string[]; languageTitle?: string; languages?: CareerDetailCard[];
  financeTitle?: string; financeText?: string; financeNoteTitle?: string; financeNote?: string;
  ctaTitle: string; ctaText: string; cta: string; bullets?: string[];
}
export const careerDetails: Record<Locale, Record<CareerDetailKind, CareerDetail>> = {
  "en": {
    "apprenticeship": {
      "title": "Healthcare Apprenticeships in Germany | IIFLHM",
      "description": "Explore healthcare vocational-training pathways in Germany. Requirements, remuneration and eligibility depend on the training provider and employer.",
      "eyebrow": "Vocational training in Germany",
      "hero": "Healthcare",
      "accent": "Apprenticeships",
      "heroText": "Explore nursing and medical-radiology vocational-training pathways. Programme availability, admission and recognition requirements must be confirmed with the relevant provider.",
      "status": "Ask admissions about current availability",
      "back": "Back to Career Opportunities",
      "section": "Your pathway to global healthcare",
      "sectionText": "Explore healthcare vocational-training routes in Germany and discuss current eligibility requirements with the admissions team.",
      "cards": [
        {
          "title": "Training and remuneration",
          "description": "Some Ausbildung routes may include remuneration. Terms, duration and eligibility depend on the specific employer and training agreement."
        },
        {
          "title": "Structured training",
          "description": "Many vocational pathways combine practical workplace learning with theoretical instruction; the structure depends on the programme."
        },
        {
          "title": "Career preparation",
          "description": "Build relevant language and professional skills. Employment outcomes depend on individual eligibility and employer selection; placement is not guaranteed."
        }
      ],
      "leftTitle": "Academic eligibility",
      "left": [
        {
          "title": "German language proficiency",
          "description": "The required level and accepted certificate depend on the training provider and employer. Confirm current criteria with admissions."
        },
        {
          "title": "Academic qualifications",
          "description": "Academic eligibility varies by pathway and employer. Ask admissions to review the requirements for your chosen route."
        }
      ],
      "rightTitle": "Personal qualities",
      "right": [
        "Interest in patient care",
        "Willingness to learn German",
        "Cultural adaptability",
        "Communication and teamwork"
      ],
      "ctaTitle": "Ready to explore this pathway?",
      "ctaText": "Ask IIFLHM about German-language preparation and interview preparation. Admission, training agreements, visas and employment decisions are made by the relevant providers, employers and authorities.",
      "cta": "Contact the Institute"
    },
    "undergraduate": {
      "title": "Undergraduate Studies in Germany | IIFLHM",
      "description": "Explore undergraduate study pathways in Germany for Kenyan applicants. Entry, language, tuition and funding requirements vary by institution and programme.",
      "eyebrow": "Study in Germany",
      "hero": "Undergraduate",
      "accent": "Study Pathways",
      "heroText": "Explore Bachelor’s programmes in Germany. Tuition, semester contributions and entry requirements vary by institution, state and course.",
      "back": "Back to Career Opportunities",
      "section": "Your gateway to global education",
      "sectionText": "Explore study options and the academic, language and financial requirements that may apply to Kenyan applicants.",
      "cards": [
        {
          "title": "Direct admission",
          "description": "Direct-entry eligibility depends on the applicant’s qualification, subject choices and the university’s admission rules. Confirm the current assessment for your KCSE results with the institution."
        },
        {
          "title": "Preparatory admission",
          "description": "Some applicants may need a preparatory route such as Studienkolleg. Whether it is required depends on prior education and the chosen university."
        }
      ],
      "leftTitle": "Eligibility overview",
      "left": [
        {
          "title": "Academic",
          "description": "KCSE Certificate. Admission thresholds and subject requirements vary by university and programme. Check the current criteria with the institution."
        },
        {
          "title": "Language",
          "description": "Language requirements depend on the language of instruction and the university."
        },
        {
          "title": "Financial",
          "description": "Proof of funding may be required. Amounts and accepted documents change; confirm current rules with the responsible German mission."
        }
      ],
      "rightTitle": "Application considerations",
      "right": [
        "Compare programme entry requirements",
        "Check the language of instruction",
        "Review application deadlines",
        "Confirm current funding and visa requirements"
      ],
      "ctaTitle": "Ready to take the next step?",
      "ctaText": "University applications in Germany involve institution-specific deadlines and documentation. IIFLHM can provide guidance on the process; final admission and visa decisions are made by the university and relevant authorities.",
      "cta": "Book a career consultation",
      "bullets": [
        "Course selection guidance",
        "Application-document guidance",
        "Language preparation"
      ],
      "cardBadges": [
        "University-specific entry assessment",
        "Preparatory study may be required"
      ]
    },
    "masters": {
      "title": "Master’s Degree Programmes in Germany | IIFLHM",
      "description": "Explore postgraduate study in Germany. Admission, language, document and financial requirements vary by university, programme and applicant.",
      "eyebrow": "Postgraduate study in Germany",
      "hero": "Postgraduate",
      "accent": "Master’s Degrees",
      "heroText": "Explore postgraduate study options in Germany and the preparation that may be required by your chosen university.",
      "back": "Back to Career Opportunities",
      "section": "Prepare for postgraduate study",
      "sectionText": "Requirements differ across universities and programmes. Use this overview as a starting checklist and confirm the current rules with each institution and the relevant authorities.",
      "documentsTitle": "Essential documents",
      "documents": [
        "Valid passport",
        "Degree certificate and academic transcripts",
        "Curriculum vitae (CV)",
        "Letter of motivation",
        "Recommendation letters, if required",
        "APS certificate, if required for the application",
        "Proof of language proficiency required by the programme"
      ],
      "languageTitle": "Language proficiency",
      "languages": [
        {
          "title": "English-taught programmes",
          "description": "Provide evidence of English proficiency as required by the chosen university and programme."
        },
        {
          "title": "German-taught programmes",
          "description": "Provide evidence of German proficiency as required by the chosen university and programme."
        }
      ],
      "financeTitle": "Financial and visa requirements",
      "financeText": "Applicants may need to provide proof of sufficient funding. Accepted evidence and required amounts can change; confirm current requirements with the responsible German mission before applying.",
      "financeNoteTitle": "Check current requirements",
      "financeNote": "Do not rely on historic figures. Confirm the amount and accepted proof directly with the relevant German mission before submitting an application.",
      "ctaTitle": "Discuss your postgraduate plans",
      "ctaText": "IIFLHM can help you understand preparation and application steps. Admission decisions are made by the receiving university, and visa decisions are made by the responsible authorities.",
      "cta": "Book a Master’s consultation"
    }
  },
  "de": {
    "apprenticeship": {
      "title": "Ausbildungen im Gesundheitswesen in Deutschland | IIFLHM",
      "description": "Informieren Sie sich über berufliche Ausbildungswege im Gesundheitswesen in Deutschland. Voraussetzungen, Vergütung und Eignung hängen vom Träger und Arbeitgeber ab.",
      "eyebrow": "Berufsausbildung in Deutschland",
      "hero": "Ausbildungen im",
      "accent": "Gesundheitswesen",
      "heroText": "Entdecken Sie Ausbildungswege in der Pflege und medizinischen Radiologie. Verfügbarkeit, Zulassung und Anerkennung müssen beim jeweiligen Anbieter bestätigt werden.",
      "status": "Fragen Sie die Studienberatung nach aktuellen Möglichkeiten",
      "back": "Zurück zu den Karrierewegen",
      "section": "Ihr Weg in das internationale Gesundheitswesen",
      "sectionText": "Informieren Sie sich über berufliche Ausbildungswege im Gesundheitswesen in Deutschland und klären Sie die aktuellen Voraussetzungen mit der Studienberatung.",
      "cards": [
        {
          "title": "Ausbildung und Vergütung",
          "description": "Einige Ausbildungsgänge können eine Vergütung vorsehen. Bedingungen, Dauer und Anspruch richten sich nach Arbeitgeber und Ausbildungsvertrag."
        },
        {
          "title": "Strukturierte Ausbildung",
          "description": "Viele berufliche Ausbildungswege verbinden praktische Arbeit mit theoretischem Unterricht. Die konkrete Struktur hängt vom jeweiligen Programm ab."
        },
        {
          "title": "Berufliche Vorbereitung",
          "description": "Entwickeln Sie Sprachkenntnisse und berufliche Kompetenzen. Eine Beschäftigung oder Vermittlung wird nicht garantiert."
        }
      ],
      "leftTitle": "Schulische Voraussetzungen",
      "left": [
        {
          "title": "Deutschkenntnisse",
          "description": "Das erforderliche Niveau und anerkannte Zertifikate hängen vom Ausbildungsträger und Arbeitgeber ab. Bitte bestätigen Sie die aktuellen Kriterien."
        },
        {
          "title": "Schulische Qualifikationen",
          "description": "Die Voraussetzungen unterscheiden sich je nach Ausbildungsweg und Arbeitgeber. Lassen Sie Ihre Eignung für den gewünschten Weg prüfen."
        }
      ],
      "rightTitle": "Persönliche Eigenschaften",
      "right": [
        "Interesse an der Patientenversorgung",
        "Bereitschaft, Deutsch zu lernen",
        "Kulturelle Anpassungsfähigkeit",
        "Kommunikation und Teamarbeit"
      ],
      "ctaTitle": "Möchten Sie diesen Weg erkunden?",
      "ctaText": "Informieren Sie sich bei IIFLHM über Deutschunterricht und die Vorbereitung auf Gespräche. Zulassung, Ausbildungsverträge, Visa und Beschäftigung werden von den zuständigen Anbietern, Arbeitgebern und Behörden entschieden.",
      "cta": "Institut kontaktieren"
    },
    "undergraduate": {
      "title": "Bachelorstudium in Deutschland | IIFLHM",
      "description": "Informieren Sie sich über Bachelorstudiengänge in Deutschland. Zulassungs-, Sprach-, Studiengebühren- und Finanzierungsbedingungen unterscheiden sich je nach Hochschule und Studiengang.",
      "eyebrow": "Studieren in Deutschland",
      "hero": "Bachelor-",
      "accent": "Studienwege",
      "heroText": "Entdecken Sie Bachelorstudiengänge in Deutschland. Studiengebühren, Semesterbeiträge und Zulassungsvoraussetzungen variieren je nach Hochschule, Bundesland und Studiengang.",
      "back": "Zurück zu den Karrierewegen",
      "section": "Ihr Zugang zu internationaler Bildung",
      "sectionText": "Informieren Sie sich über Studienmöglichkeiten sowie akademische, sprachliche und finanzielle Voraussetzungen für Bewerberinnen und Bewerber aus Kenia.",
      "cards": [
        {
          "title": "Direkte Zulassung",
          "description": "Die direkte Zulassung hängt von Schulabschluss, Fächerwahl und den Zulassungsregeln der Hochschule ab. Lassen Sie Ihre KCSE-Ergebnisse aktuell prüfen."
        },
        {
          "title": "Zulassung über einen Vorbereitungsweg",
          "description": "Manche Bewerber benötigen möglicherweise einen Vorbereitungskurs wie das Studienkolleg. Ob dies erforderlich ist, hängt von der bisherigen Ausbildung und der gewählten Hochschule ab."
        }
      ],
      "leftTitle": "Überblick über die Voraussetzungen",
      "left": [
        {
          "title": "Akademisch",
          "description": "KCSE-Zertifikat. Notengrenzen und Fachanforderungen unterscheiden sich je nach Hochschule und Studiengang."
        },
        {
          "title": "Sprache",
          "description": "Die Sprachanforderungen richten sich nach der Unterrichtssprache und der Hochschule."
        },
        {
          "title": "Finanzen",
          "description": "Ein Finanzierungsnachweis kann erforderlich sein. Beträge und akzeptierte Nachweise können sich ändern; informieren Sie sich bei der zuständigen deutschen Auslandsvertretung."
        }
      ],
      "rightTitle": "Wichtige Bewerbungspunkte",
      "right": [
        "Zulassungsvoraussetzungen vergleichen",
        "Unterrichtssprache prüfen",
        "Bewerbungsfristen beachten",
        "Aktuelle Finanzierungs- und Visabestimmungen bestätigen"
      ],
      "ctaTitle": "Bereit für den nächsten Schritt?",
      "ctaText": "Bewerbungen an deutschen Hochschulen haben hochschulspezifische Fristen und Unterlagen. IIFLHM kann zum Ablauf informieren; über Zulassung und Visa entscheiden die Hochschulen und zuständigen Behörden.",
      "cta": "Beratung zu Karrierewegen buchen",
      "bullets": [
        "Beratung zur Studienwahl",
        "Informationen zu Bewerbungsunterlagen",
        "Sprachliche Vorbereitung"
      ],
      "cardBadges": [
        "Hochschulspezifische Zulassungsprüfung",
        "Ein Vorbereitungskurs kann erforderlich sein"
      ]
    },
    "masters": {
      "title": "Masterstudium in Deutschland | IIFLHM",
      "description": "Informieren Sie sich über ein Masterstudium in Deutschland. Zulassungs-, Sprach-, Dokumenten- und Finanzierungsanforderungen variieren je nach Hochschule, Studiengang und Person.",
      "eyebrow": "Masterstudium in Deutschland",
      "hero": "Postgraduales",
      "accent": "Masterstudium",
      "heroText": "Entdecken Sie Masterstudienmöglichkeiten in Deutschland und die Vorbereitung, die Ihre Wunschhochschule verlangen kann.",
      "back": "Zurück zu den Karrierewegen",
      "section": "Bereiten Sie Ihr Masterstudium vor",
      "sectionText": "Die Anforderungen unterscheiden sich je nach Hochschule und Studiengang. Nutzen Sie diese Übersicht als erste Checkliste und bestätigen Sie die aktuellen Regeln bei den jeweiligen Stellen.",
      "documentsTitle": "Wichtige Unterlagen",
      "documents": [
        "Gültiger Reisepass",
        "Abschlusszeugnis und akademische Leistungsnachweise",
        "Lebenslauf",
        "Motivationsschreiben",
        "Empfehlungsschreiben, falls erforderlich",
        "APS-Zertifikat, falls für die Bewerbung erforderlich",
        "Erforderlicher Sprachnachweis"
      ],
      "languageTitle": "Sprachkenntnisse",
      "languages": [
        {
          "title": "Englischsprachige Studiengänge",
          "description": "Englischnachweise gemäß den Anforderungen der gewählten Hochschule und des Studiengangs vorlegen."
        },
        {
          "title": "Deutschsprachige Studiengänge",
          "description": "Deutschnachweise gemäß den Anforderungen der gewählten Hochschule und des Studiengangs vorlegen."
        }
      ],
      "financeTitle": "Finanz- und Visabestimmungen",
      "financeText": "Bewerber müssen möglicherweise ausreichende finanzielle Mittel nachweisen. Anerkannte Nachweise und erforderliche Beträge können sich ändern; bestätigen Sie die aktuellen Anforderungen vor der Bewerbung bei der zuständigen deutschen Auslandsvertretung.",
      "financeNoteTitle": "Aktuelle Anforderungen prüfen",
      "financeNote": "Verlassen Sie sich nicht auf frühere Beträge. Bestätigen Sie Betrag und akzeptierte Nachweise direkt bei der zuständigen deutschen Auslandsvertretung.",
      "ctaTitle": "Besprechen Sie Ihre Masterpläne",
      "ctaText": "IIFLHM kann Sie über Vorbereitung und Bewerbungsschritte informieren. Über die Zulassung entscheidet die aufnehmende Hochschule, über Visa entscheiden die zuständigen Behörden.",
      "cta": "Masterberatung buchen"
    }
  },
  "sw": {
    "apprenticeship": {
      "title": "Mafunzo ya Ufundi wa Afya Ujerumani | IIFLHM",
      "description": "Fahamu njia za mafunzo ya ufundi katika sekta ya afya nchini Ujerumani. Vigezo, malipo na ustahiki hutegemea taasisi ya mafunzo na mwajiri.",
      "eyebrow": "Mafunzo ya ufundi Ujerumani",
      "hero": "Mafunzo ya Ufundi",
      "accent": "wa Afya",
      "heroText": "Chunguza njia za mafunzo ya uuguzi na radiolojia ya tiba. Upatikanaji, udahili na utambuzi wa sifa lazima uthibitishwe na mtoa mafunzo husika.",
      "status": "Uliza kitengo cha udahili kuhusu nafasi zilizopo sasa",
      "back": "Rudi kwenye Fursa za Kazi",
      "section": "Njia yako kuelekea huduma za afya za kimataifa",
      "sectionText": "Chunguza njia za mafunzo ya ufundi wa afya nchini Ujerumani na ujadili vigezo vya sasa na timu ya udahili.",
      "cards": [
        {
          "title": "Mafunzo na malipo",
          "description": "Baadhi ya programu za Ausbildung zinaweza kutoa malipo. Masharti, muda na ustahiki hutegemea mwajiri na mkataba wa mafunzo."
        },
        {
          "title": "Mafunzo yenye mpangilio",
          "description": "Njia nyingi za ufundi huunganisha mafunzo ya vitendo kazini na masomo ya nadharia; muundo hutegemea programu."
        },
        {
          "title": "Maandalizi ya taaluma",
          "description": "Jenga ujuzi wa lugha na taaluma. Ajira au kupangiwa kazi hakuhakikishwi; matokeo hutegemea ustahiki na uteuzi wa mwajiri."
        }
      ],
      "leftTitle": "Vigezo vya kitaaluma",
      "left": [
        {
          "title": "Uwezo wa lugha ya Kijerumani",
          "description": "Kiwango na cheti kinachokubaliwa hutegemea mtoa mafunzo na mwajiri. Thibitisha vigezo vya sasa na kitengo cha udahili."
        },
        {
          "title": "Sifa za elimu",
          "description": "Vigezo vya elimu hutofautiana kulingana na njia na mwajiri. Omba tathmini ya sifa zako kwa njia unayochagua."
        }
      ],
      "rightTitle": "Sifa binafsi",
      "right": [
        "Kuvutiwa na huduma kwa wagonjwa",
        "Utayari wa kujifunza Kijerumani",
        "Uwezo wa kuzoea tamaduni",
        "Mawasiliano na kazi ya timu"
      ],
      "ctaTitle": "Uko tayari kuchunguza njia hii?",
      "ctaText": "Uliza IIFLHM kuhusu maandalizi ya lugha ya Kijerumani na mahojiano. Udahili, mikataba ya mafunzo, visa na ajira huamuliwa na watoa mafunzo, waajiri na mamlaka husika.",
      "cta": "Wasiliana na Taasisi"
    },
    "undergraduate": {
      "title": "Masomo ya Shahada ya Kwanza Ujerumani | IIFLHM",
      "description": "Chunguza njia za masomo ya shahada ya kwanza Ujerumani. Vigezo vya kujiunga, lugha, ada na ufadhili hutofautiana kwa taasisi na programu.",
      "eyebrow": "Kusoma Ujerumani",
      "hero": "Njia za Masomo",
      "accent": "ya Shahada",
      "heroText": "Chunguza programu za shahada ya kwanza nchini Ujerumani. Ada, michango ya muhula na vigezo vya kujiunga hutofautiana kwa taasisi, jimbo na kozi.",
      "back": "Rudi kwenye Fursa za Kazi",
      "section": "Lango lako la elimu ya kimataifa",
      "sectionText": "Chunguza chaguo za masomo na mahitaji ya kitaaluma, lugha na fedha yanayoweza kuwahusu waombaji kutoka Kenya.",
      "cards": [
        {
          "title": "Udahili wa moja kwa moja",
          "description": "Ustahiki hutegemea sifa za mwombaji, masomo aliyochagua na kanuni za chuo kikuu. Thibitisha tathmini ya sasa ya matokeo yako ya KCSE na taasisi."
        },
        {
          "title": "Udahili kupitia maandalizi",
          "description": "Baadhi ya waombaji wanaweza kuhitaji njia ya maandalizi kama Studienkolleg. Hitaji hili hutegemea elimu ya awali na chuo kilichochaguliwa."
        }
      ],
      "leftTitle": "Muhtasari wa ustahiki",
      "left": [
        {
          "title": "Kitaaluma",
          "description": "Cheti cha KCSE. Viwango vya alama na masomo yanayotakiwa hutofautiana kwa chuo na programu."
        },
        {
          "title": "Lugha",
          "description": "Mahitaji ya lugha hutegemea lugha ya kufundishia na chuo kikuu."
        },
        {
          "title": "Fedha",
          "description": "Uthibitisho wa fedha unaweza kuhitajika. Kiasi na nyaraka zinazokubaliwa hubadilika; thibitisha masharti ya sasa na ubalozi husika wa Ujerumani."
        }
      ],
      "rightTitle": "Mambo ya kuzingatia kwenye maombi",
      "right": [
        "Linganisha vigezo vya kujiunga",
        "Angalia lugha ya kufundishia",
        "Kagua tarehe za mwisho za maombi",
        "Thibitisha masharti ya sasa ya fedha na visa"
      ],
      "ctaTitle": "Uko tayari kuchukua hatua inayofuata?",
      "ctaText": "Maombi ya vyuo vikuu Ujerumani yana tarehe na nyaraka maalumu kwa kila taasisi. IIFLHM inaweza kutoa mwongozo wa mchakato; maamuzi ya udahili na visa hufanywa na vyuo na mamlaka husika.",
      "cta": "Panga ushauri wa taaluma",
      "bullets": [
        "Mwongozo wa kuchagua kozi",
        "Mwongozo wa nyaraka za maombi",
        "Maandalizi ya lugha"
      ],
      "cardBadges": [
        "Tathmini ya udahili ya chuo husika",
        "Mafunzo ya maandalizi yanaweza kuhitajika"
      ]
    },
    "masters": {
      "title": "Masomo ya Shahada ya Uzamili Ujerumani | IIFLHM",
      "description": "Chunguza masomo ya uzamili Ujerumani. Vigezo vya udahili, lugha, nyaraka na fedha hutofautiana kwa chuo, programu na mwombaji.",
      "eyebrow": "Masomo ya uzamili Ujerumani",
      "hero": "Masomo ya",
      "accent": "Uzamili",
      "heroText": "Chunguza fursa za masomo ya uzamili Ujerumani na maandalizi yanayoweza kuhitajika na chuo unachochagua.",
      "back": "Rudi kwenye Fursa za Kazi",
      "section": "Jiandae kwa masomo ya uzamili",
      "sectionText": "Mahitaji hutofautiana kati ya vyuo na programu. Tumia muhtasari huu kama orodha ya kuanzia na uthibitishe masharti ya sasa na kila taasisi na mamlaka husika.",
      "documentsTitle": "Nyaraka muhimu",
      "documents": [
        "Pasipoti halali",
        "Cheti cha shahada na nakala za matokeo",
        "Wasifu (CV)",
        "Barua ya motisha",
        "Barua za mapendekezo, zikihitajika",
        "Cheti cha APS, ikiwa kinahitajika kwa maombi",
        "Uthibitisho wa kiwango cha lugha kinachotakiwa"
      ],
      "languageTitle": "Ustadi wa lugha",
      "languages": [
        {
          "title": "Programu zinazofundishwa kwa Kiingereza",
          "description": "Toa uthibitisho wa Kiingereza kulingana na mahitaji ya chuo na programu uliyochagua."
        },
        {
          "title": "Programu zinazofundishwa kwa Kijerumani",
          "description": "Toa uthibitisho wa Kijerumani kulingana na mahitaji ya chuo na programu uliyochagua."
        }
      ],
      "financeTitle": "Mahitaji ya fedha na visa",
      "financeText": "Waombaji wanaweza kuhitajika kuthibitisha kuwa wana fedha za kutosha. Nyaraka zinazokubaliwa na kiasi kinachohitajika vinaweza kubadilika; thibitisha masharti ya sasa na ubalozi husika wa Ujerumani kabla ya kuomba.",
      "financeNoteTitle": "Thibitisha masharti ya sasa",
      "financeNote": "Usitumie kiasi cha zamani. Thibitisha kiasi na nyaraka zinazokubaliwa moja kwa moja na ubalozi husika wa Ujerumani kabla ya kuwasilisha maombi.",
      "ctaTitle": "Jadili mipango yako ya uzamili",
      "ctaText": "IIFLHM inaweza kukuelekeza kuhusu maandalizi na hatua za maombi. Uamuzi wa udahili hufanywa na chuo kinachopokea maombi, na maamuzi ya visa hufanywa na mamlaka husika.",
      "cta": "Panga ushauri wa uzamili"
    }
  },
  "fr": {
    "apprenticeship": {
      "title": "Formations professionnelles en santé en Allemagne | IIFLHM",
      "description": "Découvrez les parcours de formation professionnelle dans le secteur de la santé en Allemagne. Les conditions, la rémunération et l’éligibilité dépendent de l’organisme et de l’employeur.",
      "eyebrow": "Formation professionnelle en Allemagne",
      "hero": "Formations en",
      "accent": "santé",
      "heroText": "Découvrez les parcours de formation en soins infirmiers et en radiologie médicale. La disponibilité, l’admission et la reconnaissance doivent être confirmées auprès de l’organisme concerné.",
      "status": "Renseignez-vous auprès des admissions sur les places actuellement disponibles",
      "back": "Retour aux possibilités de parcours",
      "section": "Votre parcours vers les métiers de la santé à l’international",
      "sectionText": "Découvrez les formations professionnelles en santé en Allemagne et échangez avec l’équipe des admissions sur les conditions en vigueur.",
      "cards": [
        {
          "title": "Formation et rémunération",
          "description": "Certaines formations Ausbildung peuvent être rémunérées. Les conditions, la durée et l’éligibilité dépendent de l’employeur et du contrat de formation."
        },
        {
          "title": "Formation structurée",
          "description": "De nombreux parcours associent apprentissage pratique en milieu professionnel et enseignement théorique ; l’organisation dépend du programme."
        },
        {
          "title": "Préparation professionnelle",
          "description": "Développez vos compétences linguistiques et professionnelles. L’emploi et le placement ne sont pas garantis."
        }
      ],
      "leftTitle": "Conditions académiques",
      "left": [
        {
          "title": "Maîtrise de l’allemand",
          "description": "Le niveau requis et les certificats acceptés dépendent de l’organisme de formation et de l’employeur. Confirmez les critères actuels auprès des admissions."
        },
        {
          "title": "Qualifications scolaires",
          "description": "Les conditions varient selon le parcours et l’employeur. Demandez une évaluation pour le parcours choisi."
        }
      ],
      "rightTitle": "Qualités personnelles",
      "right": [
        "Intérêt pour les soins aux patients",
        "Volonté d’apprendre l’allemand",
        "Adaptabilité culturelle",
        "Communication et travail en équipe"
      ],
      "ctaTitle": "Prêt à explorer ce parcours ?",
      "ctaText": "Renseignez-vous auprès de l’IIFLHM sur la préparation en allemand et aux entretiens. L’admission, les contrats, les visas et l’emploi relèvent des organismes, employeurs et autorités compétents.",
      "cta": "Contacter l’institut"
    },
    "undergraduate": {
      "title": "Études de premier cycle en Allemagne | IIFLHM",
      "description": "Découvrez les parcours de premier cycle en Allemagne. Les conditions d’admission, de langue, de frais et de financement varient selon l’établissement et le programme.",
      "eyebrow": "Étudier en Allemagne",
      "hero": "Études de",
      "accent": "premier cycle",
      "heroText": "Découvrez les licences en Allemagne. Les frais de scolarité, contributions semestrielles et conditions d’admission varient selon l’établissement, le Land et le cursus.",
      "back": "Retour aux possibilités de parcours",
      "section": "Votre passerelle vers l’enseignement supérieur international",
      "sectionText": "Découvrez les études possibles et les exigences académiques, linguistiques et financières applicables aux candidats kenyans.",
      "cards": [
        {
          "title": "Admission directe",
          "description": "L’admissibilité dépend des diplômes, des matières suivies et des règles de l’université. Faites vérifier les critères actuels applicables à vos résultats KCSE."
        },
        {
          "title": "Admission avec préparation",
          "description": "Certains candidats peuvent devoir suivre une préparation telle que le Studienkolleg. Cela dépend de leur formation antérieure et de l’université choisie."
        }
      ],
      "leftTitle": "Aperçu des conditions",
      "left": [
        {
          "title": "Études",
          "description": "Certificat KCSE. Les seuils de notes et matières exigées varient selon l’université et le programme."
        },
        {
          "title": "Langue",
          "description": "Les exigences linguistiques dépendent de la langue d’enseignement et de l’université."
        },
        {
          "title": "Financement",
          "description": "Une preuve de financement peut être demandée. Les montants et justificatifs acceptés évoluent ; vérifiez les règles actuelles auprès de la représentation allemande compétente."
        }
      ],
      "rightTitle": "Points à considérer pour la candidature",
      "right": [
        "Comparer les conditions d’admission",
        "Vérifier la langue d’enseignement",
        "Consulter les dates limites",
        "Confirmer les exigences actuelles de financement et de visa"
      ],
      "ctaTitle": "Prêt à passer à l’étape suivante ?",
      "ctaText": "Les candidatures aux universités allemandes suivent des calendriers et des exigences documentaires propres à chaque établissement. L’IIFLHM peut expliquer les démarches ; les décisions d’admission et de visa appartiennent aux universités et autorités compétentes.",
      "cta": "Demander un entretien d’orientation",
      "bullets": [
        "Conseils pour choisir un cursus",
        "Conseils sur les documents de candidature",
        "Préparation linguistique"
      ],
      "cardBadges": [
        "Évaluation d’admission propre à chaque université",
        "Une formation préparatoire peut être nécessaire"
      ]
    },
    "masters": {
      "title": "Études de master en Allemagne | IIFLHM",
      "description": "Découvrez les études de troisième cycle en Allemagne. Les exigences d’admission, de langue, de documents et de financement varient selon l’université, le programme et le candidat.",
      "eyebrow": "Études de master en Allemagne",
      "hero": "Études de",
      "accent": "master",
      "heroText": "Découvrez les possibilités de master en Allemagne et la préparation éventuellement demandée par votre université.",
      "back": "Retour aux possibilités de parcours",
      "section": "Préparer vos études de master",
      "sectionText": "Les exigences varient selon les universités et les programmes. Utilisez cet aperçu comme liste initiale et confirmez les règles actuelles auprès de chaque établissement et des autorités compétentes.",
      "documentsTitle": "Documents essentiels",
      "documents": [
        "Passeport en cours de validité",
        "Diplôme et relevés de notes",
        "Curriculum vitæ (CV)",
        "Lettre de motivation",
        "Lettres de recommandation, si demandées",
        "Certificat APS, si nécessaire pour la candidature",
        "Justificatif du niveau linguistique exigé"
      ],
      "languageTitle": "Compétences linguistiques",
      "languages": [
        {
          "title": "Programmes en anglais",
          "description": "Fournissez la preuve de maîtrise de l’anglais exigée par l’université et le programme choisis."
        },
        {
          "title": "Programmes en allemand",
          "description": "Fournissez la preuve de maîtrise de l’allemand exigée par l’université et le programme choisis."
        }
      ],
      "financeTitle": "Exigences financières et de visa",
      "financeText": "Les candidats peuvent devoir prouver qu’ils disposent de ressources suffisantes. Les justificatifs acceptés et les montants requis peuvent changer ; vérifiez les exigences actuelles auprès de la représentation allemande compétente avant de déposer votre demande.",
      "financeNoteTitle": "Vérifier les exigences actuelles",
      "financeNote": "Ne vous fiez pas aux anciens montants. Confirmez directement auprès de la représentation allemande compétente le montant et les justificatifs acceptés.",
      "ctaTitle": "Parlons de votre projet de master",
      "ctaText": "L’IIFLHM peut vous informer sur la préparation et les démarches de candidature. L’admission relève de l’université d’accueil et les visas des autorités compétentes.",
      "cta": "Demander un entretien master"
    }
  },
  "es": {
    "apprenticeship": {
      "title": "Formación profesional sanitaria en Alemania | IIFLHM",
      "description": "Explore itinerarios de formación profesional sanitaria en Alemania. Los requisitos, la remuneración y la elegibilidad dependen del centro formativo y del empleador.",
      "eyebrow": "Formación profesional en Alemania",
      "hero": "Formación",
      "accent": "sanitaria",
      "heroText": "Explore itinerarios de formación en enfermería y radiología médica. La disponibilidad, admisión y reconocimiento deben confirmarse con el proveedor correspondiente.",
      "status": "Consulte con admisiones la disponibilidad actual",
      "back": "Volver a las oportunidades profesionales",
      "section": "Su camino hacia la atención sanitaria internacional",
      "sectionText": "Explore las vías de formación sanitaria en Alemania y consulte con admisiones los requisitos vigentes.",
      "cards": [
        {
          "title": "Formación y remuneración",
          "description": "Algunas vías Ausbildung pueden incluir remuneración. Las condiciones, duración y elegibilidad dependen del empleador y del contrato formativo."
        },
        {
          "title": "Formación estructurada",
          "description": "Muchas vías combinan aprendizaje práctico en el trabajo e instrucción teórica; la estructura depende del programa."
        },
        {
          "title": "Preparación profesional",
          "description": "Desarrolle competencias lingüísticas y profesionales. No se garantiza empleo ni colocación."
        }
      ],
      "leftTitle": "Requisitos académicos",
      "left": [
        {
          "title": "Dominio del alemán",
          "description": "El nivel y los certificados aceptados dependen del proveedor y del empleador. Confirme los criterios actuales con admisiones."
        },
        {
          "title": "Cualificaciones académicas",
          "description": "Los requisitos varían según la vía y el empleador. Solicite una revisión para la opción elegida."
        }
      ],
      "rightTitle": "Cualidades personales",
      "right": [
        "Interés por la atención al paciente",
        "Disposición para aprender alemán",
        "Adaptabilidad cultural",
        "Comunicación y trabajo en equipo"
      ],
      "ctaTitle": "¿Listo para explorar esta vía?",
      "ctaText": "Consulte con IIFLHM sobre la preparación lingüística y para entrevistas. La admisión, los contratos, los visados y el empleo dependen de los proveedores, empleadores y autoridades competentes.",
      "cta": "Contactar con el instituto"
    },
    "undergraduate": {
      "title": "Estudios de grado en Alemania | IIFLHM",
      "description": "Explore opciones de estudios de grado en Alemania. Los requisitos de acceso, idioma, matrícula y financiación varían según la institución y el programa.",
      "eyebrow": "Estudiar en Alemania",
      "hero": "Estudios de",
      "accent": "grado",
      "heroText": "Explore programas de grado en Alemania. La matrícula, las contribuciones semestrales y los requisitos de acceso varían según la institución, el estado federado y el curso.",
      "back": "Volver a las oportunidades profesionales",
      "section": "Su puerta a la educación internacional",
      "sectionText": "Explore opciones de estudio y los requisitos académicos, lingüísticos y económicos que pueden aplicarse a solicitantes de Kenia.",
      "cards": [
        {
          "title": "Admisión directa",
          "description": "La elegibilidad depende de las titulaciones, las asignaturas cursadas y las normas de la universidad. Confirme la evaluación vigente de sus resultados KCSE."
        },
        {
          "title": "Admisión con preparación",
          "description": "Algunos solicitantes pueden necesitar una vía preparatoria como Studienkolleg. Depende de los estudios previos y de la universidad elegida."
        }
      ],
      "leftTitle": "Resumen de elegibilidad",
      "left": [
        {
          "title": "Académico",
          "description": "Certificado KCSE. Los umbrales de notas y las asignaturas exigidas varían según la universidad y el programa."
        },
        {
          "title": "Idioma",
          "description": "Los requisitos lingüísticos dependen del idioma de enseñanza y de la universidad."
        },
        {
          "title": "Financiación",
          "description": "Puede exigirse prueba de fondos. Los importes y documentos aceptados cambian; confirme las normas actuales con la misión alemana competente."
        }
      ],
      "rightTitle": "Aspectos de la solicitud",
      "right": [
        "Comparar requisitos de acceso",
        "Comprobar el idioma de enseñanza",
        "Revisar los plazos de solicitud",
        "Confirmar los requisitos actuales de financiación y visado"
      ],
      "ctaTitle": "¿Listo para dar el siguiente paso?",
      "ctaText": "Las solicitudes universitarias en Alemania tienen plazos y documentación específicos. IIFLHM puede orientar sobre el proceso; la universidad y las autoridades competentes deciden sobre admisión y visados.",
      "cta": "Solicitar orientación profesional",
      "bullets": [
        "Orientación para elegir estudios",
        "Orientación sobre documentos",
        "Preparación lingüística"
      ],
      "cardBadges": [
        "Evaluación de acceso específica de cada universidad",
        "Puede ser necesaria una formación preparatoria"
      ]
    },
    "masters": {
      "title": "Estudios de máster en Alemania | IIFLHM",
      "description": "Explore estudios de posgrado en Alemania. Los requisitos de admisión, idioma, documentación y financiación varían según la universidad, el programa y el solicitante.",
      "eyebrow": "Estudios de posgrado en Alemania",
      "hero": "Estudios de",
      "accent": "máster",
      "heroText": "Explore opciones de máster en Alemania y la preparación que puede exigir la universidad elegida.",
      "back": "Volver a las oportunidades profesionales",
      "section": "Prepárese para estudios de máster",
      "sectionText": "Los requisitos varían entre universidades y programas. Utilice este resumen como lista inicial y confirme las normas vigentes con cada institución y las autoridades competentes.",
      "documentsTitle": "Documentos esenciales",
      "documents": [
        "Pasaporte válido",
        "Título universitario y expediente académico",
        "Currículum vitae (CV)",
        "Carta de motivación",
        "Cartas de recomendación, si se solicitan",
        "Certificado APS, si se exige para la solicitud",
        "Prueba del nivel lingüístico requerido"
      ],
      "languageTitle": "Competencia lingüística",
      "languages": [
        {
          "title": "Programas en inglés",
          "description": "Presente la prueba de inglés exigida por la universidad y el programa elegidos."
        },
        {
          "title": "Programas en alemán",
          "description": "Presente la prueba de alemán exigida por la universidad y el programa elegidos."
        }
      ],
      "financeTitle": "Requisitos financieros y de visado",
      "financeText": "Es posible que los solicitantes deban demostrar fondos suficientes. Los justificantes aceptados y las cantidades pueden cambiar; confirme los requisitos vigentes con la misión alemana competente antes de solicitar.",
      "financeNoteTitle": "Compruebe los requisitos vigentes",
      "financeNote": "No se base en cifras antiguas. Confirme directamente con la misión alemana competente la cantidad y los justificantes aceptados.",
      "ctaTitle": "Hablemos de sus planes de máster",
      "ctaText": "IIFLHM puede orientar sobre la preparación y los pasos de solicitud. La universidad receptora decide la admisión y las autoridades competentes deciden sobre los visados.",
      "cta": "Solicitar asesoramiento para máster"
    }
  },
  "nl": {
    "apprenticeship": {
      "title": "Zorgopleidingen in Duitsland | IIFLHM",
      "description": "Ontdek beroepsopleidingsroutes in de Duitse gezondheidszorg. Voorwaarden, vergoeding en toelating hangen af van de opleidingsinstelling en werkgever.",
      "eyebrow": "Beroepsopleiding in Duitsland",
      "hero": "Beroepsopleidingen",
      "accent": "in de zorg",
      "heroText": "Ontdek opleidingsroutes voor verpleegkunde en medische radiologie. Beschikbaarheid, toelating en erkenning moeten bij de betreffende aanbieder worden bevestigd.",
      "status": "Vraag de toelatingsafdeling naar de actuele mogelijkheden",
      "back": "Terug naar carrièremogelijkheden",
      "section": "Uw route naar internationale gezondheidszorg",
      "sectionText": "Ontdek beroepsopleidingen in de Duitse gezondheidszorg en bespreek de actuele toelatingseisen met het toelatingsteam.",
      "cards": [
        {
          "title": "Opleiding en vergoeding",
          "description": "Sommige Ausbildung-trajecten kunnen een vergoeding bieden. Voorwaarden, duur en geschiktheid hangen af van de werkgever en de opleidingsovereenkomst."
        },
        {
          "title": "Gestructureerde opleiding",
          "description": "Veel beroepsroutes combineren praktijkleren op de werkplek met theoretisch onderwijs; de opzet verschilt per programma."
        },
        {
          "title": "Voorbereiding op een beroep",
          "description": "Ontwikkel taalvaardigheid en professionele competenties. Werk of plaatsing wordt niet gegarandeerd."
        }
      ],
      "leftTitle": "Onderwijseisen",
      "left": [
        {
          "title": "Duitse taalvaardigheid",
          "description": "Het vereiste niveau en geaccepteerde certificaten hangen af van opleider en werkgever. Bevestig de actuele criteria bij toelating."
        },
        {
          "title": "Onderwijskwalificaties",
          "description": "De eisen verschillen per traject en werkgever. Vraag een beoordeling aan voor de gekozen route."
        }
      ],
      "rightTitle": "Persoonlijke eigenschappen",
      "right": [
        "Interesse in patiëntenzorg",
        "Bereidheid om Duits te leren",
        "Cultureel aanpassingsvermogen",
        "Communicatie en teamwork"
      ],
      "ctaTitle": "Wilt u deze route verkennen?",
      "ctaText": "Vraag IIFLHM naar voorbereiding in het Duits en op gesprekken. Toelating, opleidingsovereenkomsten, visa en werk worden beslist door de bevoegde aanbieders, werkgevers en autoriteiten.",
      "cta": "Neem contact op met het instituut"
    },
    "undergraduate": {
      "title": "Bachelorstudies in Duitsland | IIFLHM",
      "description": "Ontdek bachelorstudies in Duitsland. Toelatings-, taal-, collegegeld- en financieringseisen verschillen per instelling en opleiding.",
      "eyebrow": "Studeren in Duitsland",
      "hero": "Bachelor-",
      "accent": "studieroutes",
      "heroText": "Ontdek bacheloropleidingen in Duitsland. Collegegeld, semesterbijdragen en toelatingseisen verschillen per instelling, deelstaat en opleiding.",
      "back": "Terug naar carrièremogelijkheden",
      "section": "Uw toegang tot internationaal onderwijs",
      "sectionText": "Ontdek studiemogelijkheden en de academische, taalkundige en financiële eisen die voor kandidaten uit Kenia kunnen gelden.",
      "cards": [
        {
          "title": "Directe toelating",
          "description": "Toelating hangt af van diploma’s, vakkenpakket en de regels van de universiteit. Laat de actuele beoordeling van uw KCSE-resultaten bevestigen."
        },
        {
          "title": "Toelating via een voorbereidend traject",
          "description": "Sommige kandidaten hebben mogelijk een voorbereidend traject zoals Studienkolleg nodig. Dit hangt af van de vooropleiding en de gekozen universiteit."
        }
      ],
      "leftTitle": "Overzicht van toelatingseisen",
      "left": [
        {
          "title": "Academisch",
          "description": "KCSE-certificaat. Cijferdrempels en vereiste vakken verschillen per universiteit en opleiding."
        },
        {
          "title": "Taal",
          "description": "Taalvereisten hangen af van de onderwijstaal en de universiteit."
        },
        {
          "title": "Financieel",
          "description": "Een bewijs van financiële middelen kan vereist zijn. Bedragen en geaccepteerde documenten veranderen; controleer de actuele regels bij de bevoegde Duitse vertegenwoordiging."
        }
      ],
      "rightTitle": "Aandachtspunten voor de aanvraag",
      "right": [
        "Vergelijk toelatingseisen",
        "Controleer de onderwijstaal",
        "Bekijk aanvraagdeadlines",
        "Bevestig actuele financiële en visumvereisten"
      ],
      "ctaTitle": "Klaar voor de volgende stap?",
      "ctaText": "Aanvragen bij Duitse universiteiten hebben instellingsspecifieke deadlines en documenten. IIFLHM kan uitleg geven over het proces; universiteiten en bevoegde autoriteiten nemen de uiteindelijke toelatings- en visumbesluiten.",
      "cta": "Loopbaanadvies aanvragen",
      "bullets": [
        "Advies bij studiekeuze",
        "Begeleiding bij aanvraagdocumenten",
        "Taalvoorbereiding"
      ],
      "cardBadges": [
        "Toelatingsbeoordeling per universiteit",
        "Een voorbereidende opleiding kan nodig zijn"
      ]
    },
    "masters": {
      "title": "Masterstudies in Duitsland | IIFLHM",
      "description": "Ontdek postdoctorale studie in Duitsland. Toelatings-, taal-, document- en financieringseisen verschillen per universiteit, opleiding en kandidaat.",
      "eyebrow": "Masterstudie in Duitsland",
      "hero": "Postdoctorale",
      "accent": "masterstudies",
      "heroText": "Ontdek mastermogelijkheden in Duitsland en de voorbereiding die uw gekozen universiteit kan vereisen.",
      "back": "Terug naar carrièremogelijkheden",
      "section": "Bereid u voor op een masterstudie",
      "sectionText": "De eisen verschillen per universiteit en opleiding. Gebruik dit overzicht als eerste checklist en bevestig de actuele regels bij iedere instelling en bevoegde autoriteit.",
      "documentsTitle": "Essentiële documenten",
      "documents": [
        "Geldig paspoort",
        "Diploma en cijferlijsten",
        "Curriculum vitae (cv)",
        "Motivatiebrief",
        "Aanbevelingsbrieven, indien vereist",
        "APS-certificaat, indien vereist voor de aanvraag",
        "Bewijs van het vereiste taalniveau"
      ],
      "languageTitle": "Taalvaardigheid",
      "languages": [
        {
          "title": "Engelstalige opleidingen",
          "description": "Lever bewijs van Engelse taalvaardigheid volgens de eisen van de gekozen universiteit en opleiding."
        },
        {
          "title": "Duitstalige opleidingen",
          "description": "Lever bewijs van Duitse taalvaardigheid volgens de eisen van de gekozen universiteit en opleiding."
        }
      ],
      "financeTitle": "Financiële en visumvereisten",
      "financeText": "Kandidaten moeten mogelijk aantonen dat zij over voldoende middelen beschikken. Geaccepteerd bewijs en vereiste bedragen kunnen veranderen; bevestig de actuele eisen vóór de aanvraag bij de bevoegde Duitse vertegenwoordiging.",
      "financeNoteTitle": "Controleer de actuele eisen",
      "financeNote": "Vertrouw niet op historische bedragen. Bevestig het bedrag en geaccepteerde bewijs rechtstreeks bij de bevoegde Duitse vertegenwoordiging.",
      "ctaTitle": "Bespreek uw masterplannen",
      "ctaText": "IIFLHM kan informatie geven over voorbereiding en aanvraagstappen. De ontvangende universiteit beslist over toelating en de bevoegde autoriteiten over visa.",
      "cta": "Masteradvies aanvragen"
    }
  },
  "it": {
    "apprenticeship": {
      "title": "Formazione professionale sanitaria in Germania | IIFLHM",
      "description": "Scopri i percorsi di formazione professionale nel settore sanitario in Germania. Requisiti, retribuzione e idoneità dipendono dall’ente formativo e dal datore di lavoro.",
      "eyebrow": "Formazione professionale in Germania",
      "hero": "Formazione",
      "accent": "sanitaria",
      "heroText": "Scopri i percorsi formativi in infermieristica e radiologia medica. Disponibilità, ammissione e riconoscimento devono essere confermati presso l’ente competente.",
      "status": "Chiedi all’ufficio ammissioni informazioni sulla disponibilità attuale",
      "back": "Torna alle opportunità professionali",
      "section": "Il tuo percorso verso la sanità internazionale",
      "sectionText": "Esplora i percorsi di formazione sanitaria in Germania e verifica i requisiti aggiornati con il team ammissioni.",
      "cards": [
        {
          "title": "Formazione e retribuzione",
          "description": "Alcuni percorsi Ausbildung possono prevedere una retribuzione. Condizioni, durata e idoneità dipendono dal datore di lavoro e dal contratto formativo."
        },
        {
          "title": "Formazione strutturata",
          "description": "Molti percorsi combinano apprendimento pratico sul posto di lavoro e insegnamento teorico; la struttura dipende dal programma."
        },
        {
          "title": "Preparazione professionale",
          "description": "Sviluppa competenze linguistiche e professionali. L’assunzione o il collocamento non sono garantiti."
        }
      ],
      "leftTitle": "Requisiti accademici",
      "left": [
        {
          "title": "Conoscenza del tedesco",
          "description": "Il livello richiesto e i certificati accettati dipendono dall’ente formativo e dal datore di lavoro. Conferma i criteri aggiornati con l’ufficio ammissioni."
        },
        {
          "title": "Titoli di studio",
          "description": "I requisiti variano in base al percorso e al datore di lavoro. Richiedi una verifica per il percorso scelto."
        }
      ],
      "rightTitle": "Qualità personali",
      "right": [
        "Interesse per l’assistenza ai pazienti",
        "Disponibilità a imparare il tedesco",
        "Adattabilità culturale",
        "Comunicazione e lavoro di squadra"
      ],
      "ctaTitle": "Vuoi esplorare questo percorso?",
      "ctaText": "Chiedi a IIFLHM informazioni sulla preparazione linguistica e ai colloqui. Ammissione, contratti formativi, visti e lavoro dipendono dagli enti, dai datori di lavoro e dalle autorità competenti.",
      "cta": "Contatta l’istituto"
    },
    "undergraduate": {
      "title": "Studi universitari di primo livello in Germania | IIFLHM",
      "description": "Esplora i percorsi di laurea in Germania. Requisiti di ammissione, lingua, tasse e finanziamento variano in base all’istituzione e al corso.",
      "eyebrow": "Studiare in Germania",
      "hero": "Percorsi di",
      "accent": "laurea",
      "heroText": "Esplora i corsi di laurea in Germania. Tasse, contributi semestrali e requisiti di ammissione variano in base all’istituzione, al Land e al corso.",
      "back": "Torna alle opportunità professionali",
      "section": "La tua porta verso l’istruzione internazionale",
      "sectionText": "Esplora le opzioni di studio e i requisiti accademici, linguistici e finanziari che possono riguardare i candidati kenioti.",
      "cards": [
        {
          "title": "Ammissione diretta",
          "description": "L’idoneità dipende dai titoli, dalle materie studiate e dalle regole dell’università. Verifica i criteri aggiornati applicabili ai tuoi risultati KCSE."
        },
        {
          "title": "Ammissione con preparazione",
          "description": "Alcuni candidati potrebbero aver bisogno di un percorso preparatorio come lo Studienkolleg. Dipende dagli studi precedenti e dall’università scelta."
        }
      ],
      "leftTitle": "Panoramica dei requisiti",
      "left": [
        {
          "title": "Accademici",
          "description": "Certificato KCSE. Soglie di voto e materie richieste variano in base all’università e al programma."
        },
        {
          "title": "Lingua",
          "description": "I requisiti linguistici dipendono dalla lingua di insegnamento e dall’università."
        },
        {
          "title": "Finanziari",
          "description": "Può essere richiesta una prova delle risorse economiche. Importi e documenti accettati cambiano; verifica le regole aggiornate presso la rappresentanza tedesca competente."
        }
      ],
      "rightTitle": "Aspetti della candidatura",
      "right": [
        "Confrontare i requisiti di ammissione",
        "Verificare la lingua di insegnamento",
        "Controllare le scadenze",
        "Confermare gli attuali requisiti finanziari e per il visto"
      ],
      "ctaTitle": "Pronto per il prossimo passo?",
      "ctaText": "Le candidature alle università tedesche prevedono scadenze e documenti specifici per ogni istituzione. IIFLHM può fornire indicazioni sul processo; le decisioni finali su ammissione e visto spettano alle università e alle autorità competenti.",
      "cta": "Richiedi una consulenza professionale",
      "bullets": [
        "Orientamento nella scelta del corso",
        "Indicazioni sui documenti di candidatura",
        "Preparazione linguistica"
      ],
      "cardBadges": [
        "Valutazione di ammissione specifica dell’università",
        "Potrebbe essere necessario un percorso preparatorio"
      ]
    },
    "masters": {
      "title": "Studi di laurea magistrale in Germania | IIFLHM",
      "description": "Esplora gli studi post-laurea in Germania. Requisiti di ammissione, lingua, documenti e finanziamento variano in base all’università, al programma e al candidato.",
      "eyebrow": "Studi post-laurea in Germania",
      "hero": "Studi",
      "accent": "magistrali",
      "heroText": "Esplora le opportunità di laurea magistrale in Germania e la preparazione eventualmente richiesta dall’università scelta.",
      "back": "Torna alle opportunità professionali",
      "section": "Preparati agli studi magistrali",
      "sectionText": "I requisiti variano tra università e programmi. Usa questa panoramica come lista iniziale e conferma le regole aggiornate presso ogni istituzione e autorità competente.",
      "documentsTitle": "Documenti essenziali",
      "documents": [
        "Passaporto valido",
        "Diploma di laurea e certificati degli esami",
        "Curriculum vitae (CV)",
        "Lettera motivazionale",
        "Lettere di referenza, se richieste",
        "Certificato APS, se richiesto per la candidatura",
        "Prova della competenza linguistica richiesta"
      ],
      "languageTitle": "Competenza linguistica",
      "languages": [
        {
          "title": "Programmi in inglese",
          "description": "Fornisci la prova di conoscenza dell’inglese richiesta dall’università e dal programma scelti."
        },
        {
          "title": "Programmi in tedesco",
          "description": "Fornisci la prova di conoscenza del tedesco richiesta dall’università e dal programma scelti."
        }
      ],
      "financeTitle": "Requisiti finanziari e per il visto",
      "financeText": "Ai candidati potrebbe essere richiesto di dimostrare risorse economiche sufficienti. Le prove accettate e gli importi richiesti possono cambiare; verifica i requisiti aggiornati presso la rappresentanza tedesca competente prima di presentare domanda.",
      "financeNoteTitle": "Verifica i requisiti aggiornati",
      "financeNote": "Non fare affidamento su importi storici. Conferma direttamente presso la rappresentanza tedesca competente l’importo e le prove accettate.",
      "ctaTitle": "Parliamo dei tuoi progetti di master",
      "ctaText": "IIFLHM può fornire indicazioni sulla preparazione e sulle fasi della candidatura. L’ammissione è decisa dall’università ospitante e i visti dalle autorità competenti.",
      "cta": "Richiedi una consulenza magistrale"
    }
  },
  "zh": {
    "apprenticeship": {
      "title": "德国医疗卫生职业培训 | IIFLHM",
      "description": "了解德国医疗卫生领域的职业培训途径。具体要求、报酬和申请资格取决于培训机构及雇主。",
      "eyebrow": "德国职业培训",
      "hero": "医疗卫生",
      "accent": "职业培训",
      "heroText": "了解护理和医学放射相关职业培训途径。项目名额、录取及资格认可要求须向相关培训机构确认。",
      "status": "请向招生部门咨询目前的项目名额",
      "back": "返回职业发展机会",
      "section": "迈向国际医疗卫生职业之路",
      "sectionText": "了解德国医疗卫生职业培训途径，并与招生团队确认当前适用的申请条件。",
      "cards": [
        {
          "title": "培训与报酬",
          "description": "部分 Ausbildung 培训项目可能提供报酬。具体条件、期限和资格取决于雇主及培训协议。"
        },
        {
          "title": "系统化培训",
          "description": "许多职业培训途径将工作实践与理论教学结合，具体安排取决于项目。"
        },
        {
          "title": "职业准备",
          "description": "提升相关语言能力和专业技能。就业或岗位安排不作保证。"
        }
      ],
      "leftTitle": "学业资格要求",
      "left": [
        {
          "title": "德语能力",
          "description": "所需语言等级及认可证书取决于培训机构和雇主。请向招生部门确认最新标准。"
        },
        {
          "title": "学历资格",
          "description": "学历要求因培训途径和雇主而异。请咨询所选途径的具体要求。"
        }
      ],
      "rightTitle": "个人素质",
      "right": [
        "对患者护理有兴趣",
        "愿意学习德语",
        "具备跨文化适应能力",
        "沟通与团队合作能力"
      ],
      "ctaTitle": "准备好了解这一途径了吗？",
      "ctaText": "请向 IIFLHM 咨询德语学习及面试准备。录取、培训协议、签证和就业由相关机构、雇主及主管部门决定。",
      "cta": "联系学院"
    },
    "undergraduate": {
      "title": "德国本科阶段学习 | IIFLHM",
      "description": "了解德国本科阶段学习途径。入学、语言、学费和资金要求因院校及课程而异。",
      "eyebrow": "赴德国学习",
      "hero": "本科阶段",
      "accent": "学习途径",
      "heroText": "了解德国本科课程。学费、学期费用及入学要求因院校、联邦州和课程而异。",
      "back": "返回职业发展机会",
      "section": "通往国际教育的大门",
      "sectionText": "了解学习选择，以及可能适用于肯尼亚申请者的学术、语言和财务要求。",
      "cards": [
        {
          "title": "直接录取",
          "description": "是否符合直接录取条件取决于申请者的学历、所学科目及大学录取规定。请向院校确认适用于 KCSE 成绩的最新评估标准。"
        },
        {
          "title": "预科途径录取",
          "description": "部分申请者可能需要先参加 Studienkolleg 等预备课程。是否需要取决于既往教育背景和所选大学。"
        }
      ],
      "leftTitle": "资格要求概览",
      "left": [
        {
          "title": "学术要求",
          "description": "KCSE 证书。成绩门槛和科目要求因大学及课程而异。"
        },
        {
          "title": "语言要求",
          "description": "语言要求取决于授课语言和大学规定。"
        },
        {
          "title": "财务要求",
          "description": "可能需要提供资金证明。金额和认可文件可能变化，请向主管德国使领馆确认最新规定。"
        }
      ],
      "rightTitle": "申请注意事项",
      "right": [
        "比较各课程的入学要求",
        "确认授课语言",
        "查看申请截止日期",
        "核实最新资金及签证要求"
      ],
      "ctaTitle": "准备好迈出下一步了吗？",
      "ctaText": "德国大学申请有各自的截止日期和材料要求。IIFLHM 可提供申请流程方面的指导；最终录取和签证决定由大学及相关主管部门作出。",
      "cta": "预约职业咨询",
      "bullets": [
        "课程选择指导",
        "申请材料指导",
        "语言准备"
      ],
      "cardBadges": [
        "由各大学进行具体入学评估",
        "可能需要参加预科课程"
      ]
    },
    "masters": {
      "title": "德国硕士阶段学习 | IIFLHM",
      "description": "了解德国研究生阶段学习。录取、语言、文件及资金要求因大学、课程和申请者而异。",
      "eyebrow": "德国硕士阶段学习",
      "hero": "研究生",
      "accent": "硕士课程",
      "heroText": "了解德国硕士学习选择，以及所选大学可能要求的申请准备。",
      "back": "返回职业发展机会",
      "section": "为硕士阶段学习做好准备",
      "sectionText": "各大学和课程的要求不同。请将此概览作为初步清单，并向各院校及主管部门确认最新规定。",
      "documentsTitle": "重要申请文件",
      "documents": [
        "有效护照",
        "学位证书及成绩单",
        "个人简历（CV）",
        "动机信",
        "推荐信（如有要求）",
        "APS 证书（如申请要求）",
        "课程要求的语言能力证明"
      ],
      "languageTitle": "语言能力",
      "languages": [
        {
          "title": "英语授课课程",
          "description": "按照所选大学和课程的要求提供英语能力证明。"
        },
        {
          "title": "德语授课课程",
          "description": "按照所选大学和课程的要求提供德语能力证明。"
        }
      ],
      "financeTitle": "财务及签证要求",
      "financeText": "申请者可能需要证明具备足够的资金。认可的证明材料和所需金额可能变化；申请前请向主管德国使领馆确认最新要求。",
      "financeNoteTitle": "核实最新要求",
      "financeNote": "请勿依赖历史金额。请直接向主管德国使领馆确认所需金额及认可的证明材料。",
      "ctaTitle": "讨论您的硕士学习计划",
      "ctaText": "IIFLHM 可介绍准备工作和申请步骤。录取由接收院校决定，签证由主管部门决定。",
      "cta": "预约硕士课程咨询"
    }
  }
};

export function getCareerDetailCopy(locale: Locale, kind: CareerDetailKind): CareerDetail {
  return careerDetails[locale][kind];
}
