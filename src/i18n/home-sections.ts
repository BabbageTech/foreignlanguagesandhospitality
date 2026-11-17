import type { Locale } from "./config";

/** Localized copy for every remaining homepage section. Names, programme labels and attributed student quotations are translated without changing their underlying claims. */
export const homeSections: Record<Locale, {
  empowering: { title: string; intro: string; interactive: string; interactiveDesc: string; teacher: string; teacherDesc: string; vision: string; visionBody: string; mission: string; missionBody: string };
  programs: { title: string; subtitle: string; explore: string; cards: { category: string; title: string; description: string; items: string[] }[] };
  why: { title: string; subtitle: string; benefits: { title: string; desc: string }[] };
  testimonials: { eyebrow: string; title: string; action: string; roles: string[]; quotes: string[] };
  faq: { title: string; subtitle: string; sideTitle: string; sideBody: string; language: string; learning: string; admissions: string; guidance: string; questions: { q: string; a: string }[]; ask: string };
}> = {
  en: {
    empowering: { title: "Empowering Future Leaders in Hospitality", intro: "We are dedicated to providing education in hospitality and languages, preparing students for careers in the global hospitality industry. Our programmes combine subject knowledge with practical learning activities.", interactive: "Interactive Learning", interactiveDesc: "Hands-on classroom experience with modern tools.", teacher: "Teacher Discussion", teacherDesc: "Teachers and students sharing knowledge through discussion.", vision: "Our Vision", visionBody: "To be a renowned institution recognized for excellence in Language Training and Hospitality Management, shaping globally competent professionals who contribute to international understanding and industry growth.", mission: "Our Mission", missionBody: "To equip individuals with practical language skills and hospitality expertise that empower them to thrive in global environments, foster cultural understanding, and enhance career opportunities in the international job market." },
    programs: { title: "Our Professional Programmes", subtitle: "Explore courses in languages, hospitality, tourism and digital skills.", explore: "Explore Courses", cards: [
      { category: "Communication", title: "School of Languages", description: "Develop communication skills in global languages and explore international learning and career pathways.", items: ["German Language (A1–B2)", "French (DELF Preparation)", "Spanish Courses", "Mandarin Chinese Training"] },
      { category: "Services", title: "Hospitality Management", description: "Explore catering, food service and accommodation operations through programme-based learning.", items: ["Craft Certificate in Catering and Accommodation", "Operational Safety", "Food Production Systems", "Customer Care Mastery"] },
      { category: "Expeditions", title: "Travel & Tourism", description: "Build knowledge related to tour guiding, travel operations and destination services.", items: ["Craft in Tour Guide & Travel Operations", "Destination Management", "Travel Agency Logistics", "Sustainable Eco-Tourism"] },
      { category: "Technology", title: "Computing & ICT", description: "Explore digital skills and technical subjects relevant to today's connected world.", items: ["Web Development & Design", "Artificial Intelligence", "Cybersecurity Essentials", "Networking"] }
    ] },
    why: { title: "Why Choose Our Institution?", subtitle: "Explore language, hospitality, tourism and digital-skills learning, with programme information and guidance from the institute.", benefits: [
      { title: "Programme Information", desc: "Explore language, hospitality, tourism and digital-skills training. Ask admissions about the specific qualification and any external recognition attached to a course." },
      { title: "Practical Learning", desc: "Explore programme content that combines subject knowledge with practical learning activities. Request the current course outline before enrolling." },
      { title: "Expert Faculty", desc: "Learn with instructors and professionals who bring subject knowledge and practical experience to lessons." },
      { title: "International Pathway Guidance", desc: "Explore education and career pathways connected with Germany, Austria and Switzerland. Admission, employer selection and visa decisions remain subject to individual eligibility." },
      { title: "Career Preparation", desc: "The institute lists CV preparation, interview practice and pathway guidance among its support areas. Confirm current services with admissions." },
      { title: "Learning Facilities", desc: "Ask the institute about the facilities and learning resources available for your chosen programme." }
    ] },
    testimonials: { eyebrow: "Student Voices", title: "Student Experiences and Journeys", action: "Begin Your Journey", roles: ["Nursing Ausbildung", "Dairy Farm Ausbildung", "Social Work", "Undergraduate Student", "Undergraduate Student", "Professional Chef"], quotes: [
      "If you want to be a nurse in Germany, you must at least have attained a B1 Level. I came through the International Institute of Foreign Languages and Hospitality Management.",
      "Learning the German language will help you connect and find your way to Germany. I came through this institute from Narok South.",
      "Learning German at B1 or B2 level made my Anerkennung process much smoother. The institute played a key role in my journey.",
      "The support from the International Institute enabled me to pursue my master's degree in Germany.",
      "The German language training I received was essential for my university admission. It laid the foundation for my success.",
      "From Transmara to Germany as a chef — the skills and training from this institute transformed my future completely."
    ] },
    faq: { title: "Admissions & Placement FAQ", subtitle: "Answers to common questions as you explore study and career pathways.", sideTitle: "Guidance for Your Next Step", sideBody: "We provide programme information and guidance as you explore language learning, education and career pathways abroad.", language: "Language", learning: "Learning pathways", admissions: "Admissions", guidance: "Programme guidance", ask: "Ask us a question", questions: [
      { q: "What are the admission requirements?", a: "Entry requirements depend on the programme and any external training provider. Contact admissions with your academic background to confirm the current criteria." },
      { q: "Are there scholarship opportunities available?", a: "Ask admissions whether any fee assistance is currently available. Funding, employer sponsorship and Ausbildung opportunities are subject to separate eligibility and selection processes and are not guaranteed." },
      { q: "How long are the programmes?", a: "Course duration varies by language level, programme and current timetable. Contact admissions for the latest course outline and schedule." },
      { q: "Do you offer internship or job placements?", a: "The institute may provide career information and preparation. Internships, job offers, employer partnerships and immigration outcomes must be confirmed for each specific pathway and are not guaranteed." },
      { q: "Can I study while working?", a: "Learning modes and class schedules depend on the course and current availability. Ask admissions about onsite, online or flexible options for your chosen programme." },
      { q: "What career support services do you provide?", a: "The institute lists CV preparation, Bewerbung coaching, interview preparation and pathway guidance among its support areas. Confirm which services are currently available for your programme; visa decisions are made by the relevant authorities." },
      { q: "Are the programmes internationally recognized?", a: "Some course information references CEFR proficiency levels. CEFR is a framework, not an awarding body; certificate recognition depends on the examination provider and the specific qualification." }
    ] }
  },
  de: {
    empowering: { title: "Die Führungskräfte von morgen im Gastgewerbe stärken", intro: "Wir engagieren uns für Bildung in den Bereichen Gastgewerbe und Sprachen und bereiten Lernende auf Tätigkeiten in der internationalen Hospitality-Branche vor. Unsere Programme verbinden Fachwissen mit praktischen Lernaktivitäten.", interactive: "Interaktives Lernen", interactiveDesc: "Praxisnaher Unterricht mit modernen Hilfsmitteln.", teacher: "Austausch im Unterricht", teacherDesc: "Lehrkräfte und Lernende teilen Wissen im gemeinsamen Austausch.", vision: "Unsere Vision", visionBody: "Eine angesehene Institution zu sein, die für Exzellenz in Sprachtraining und Hospitality Management steht und global kompetente Fachkräfte fördert, die zum internationalen Verständnis und zur Branchenentwicklung beitragen.", mission: "Unsere Mission", missionBody: "Menschen mit praktischen Sprachkenntnissen und Hospitality-Kompetenzen auszustatten, damit sie sich in globalen Umgebungen entfalten, kulturelles Verständnis fördern und ihre beruflichen Chancen auf dem internationalen Arbeitsmarkt verbessern können." },
    programs: { title: "Unsere beruflichen Programme", subtitle: "Entdecken Sie Kurse in Sprachen, Hospitality, Tourismus und digitalen Kompetenzen.", explore: "Kurse entdecken", cards: [
      { category: "Kommunikation", title: "Sprachschule", description: "Entwickeln Sie Kommunikationsfähigkeiten in internationalen Sprachen und entdecken Sie Bildungs- und Berufswege.", items: ["Deutsch (A1–B2)", "Französisch (DELF-Vorbereitung)", "Spanischkurse", "Mandarin-Chinesisch"] },
      { category: "Dienstleistungen", title: "Hospitality Management", description: "Entdecken Sie Catering, Gastronomie und Beherbergungsbetrieb im Rahmen der angebotenen Programme.", items: ["Craft Certificate in Catering and Accommodation", "Betriebliche Sicherheit", "Lebensmittelproduktion", "Kundenbetreuung"] },
      { category: "Reisen", title: "Reise & Tourismus", description: "Erwerben Sie Kenntnisse zu Reiseleitung, Reisebetrieb und Destinationsdienstleistungen.", items: ["Craft in Tour Guide & Travel Operations", "Destinationsmanagement", "Reisebürologistik", "Nachhaltiger Ökotourismus"] },
      { category: "Technologie", title: "Informatik & IKT", description: "Entdecken Sie digitale Kompetenzen und technische Themen der vernetzten Welt.", items: ["Webentwicklung & Design", "Künstliche Intelligenz", "Grundlagen der Cybersicherheit", "Netzwerktechnik"] }
    ] },
    why: { title: "Warum unsere Institution wählen?", subtitle: "Entdecken Sie Sprach-, Hospitality-, Tourismus- und Digitalprogramme sowie Informationen und Beratung des Instituts.", benefits: [
      { title: "Informationen zu Programmen", desc: "Entdecken Sie Schulungen in Sprachen, Hospitality, Tourismus und digitalen Kompetenzen. Erfragen Sie bei der Zulassungsstelle den konkreten Abschluss und eine mögliche externe Anerkennung." },
      { title: "Praxisorientiertes Lernen", desc: "Entdecken Sie Programme, die Fachwissen mit praktischen Lernaktivitäten verbinden. Fordern Sie vor der Anmeldung den aktuellen Lehrplan an." },
      { title: "Erfahrene Lehrkräfte", desc: "Lernen Sie mit Lehrkräften und Fachleuten, die Fachwissen und praktische Erfahrung in den Unterricht einbringen." },
      { title: "Beratung zu internationalen Wegen", desc: "Informieren Sie sich über Bildungs- und Berufswege mit Bezug zu Deutschland, Österreich und der Schweiz. Zulassung, Arbeitgeberauswahl und Visaentscheidungen hängen von der individuellen Eignung ab." },
      { title: "Berufsvorbereitung", desc: "Das Institut nennt Lebenslaufvorbereitung, Interviewtraining und Beratung zu Bildungswegen als Unterstützungsbereiche. Erfragen Sie die aktuell verfügbaren Leistungen." },
      { title: "Lernräume und Ausstattung", desc: "Erfragen Sie beim Institut, welche Einrichtungen und Lernressourcen für Ihr gewünschtes Programm zur Verfügung stehen." }
    ] },
    testimonials: { eyebrow: "Stimmen der Lernenden", title: "Erfahrungen und Wege unserer Lernenden", action: "Beginnen Sie Ihren Weg", roles: ["Ausbildung in der Pflege", "Ausbildung auf einem Milchviehbetrieb", "Soziale Arbeit", "Studentin/Student", "Studentin/Student", "Professioneller Koch"], quotes: [
      "Wenn Sie in Deutschland Pflegefachkraft werden möchten, sollten Sie mindestens das Niveau B1 erreicht haben. Ich kam über das International Institute of Foreign Languages and Hospitality Management.",
      "Deutsch zu lernen hilft Ihnen, Kontakte zu knüpfen und Ihren Weg nach Deutschland zu finden. Ich kam aus Narok South über dieses Institut.",
      "Deutschkenntnisse auf B1- oder B2-Niveau haben meinen Anerkennungsprozess deutlich erleichtert. Das Institut spielte auf meinem Weg eine wichtige Rolle.",
      "Die Unterstützung des International Institute ermöglichte mir, mein Masterstudium in Deutschland anzustreben.",
      "Der Deutschunterricht, den ich erhielt, war für meine Universitätszulassung wichtig und bildete eine Grundlage für meinen Erfolg.",
      "Von Transmara nach Deutschland als Koch – die Fähigkeiten und die Ausbildung dieses Instituts haben meine Zukunft verändert."
    ] },
    faq: { title: "Häufige Fragen zu Zulassung und Vermittlung", subtitle: "Antworten auf häufige Fragen zu Bildungs- und Berufswegen.", sideTitle: "Beratung für Ihren nächsten Schritt", sideBody: "Wir informieren und beraten Sie zu Sprachkursen, Bildung und beruflichen Wegen im Ausland.", language: "Sprache", learning: "Lernwege", admissions: "Zulassung", guidance: "Programmberatung", ask: "Stellen Sie uns eine Frage", questions: [
      { q: "Welche Zulassungsvoraussetzungen gelten?", a: "Die Voraussetzungen hängen vom Programm und gegebenenfalls vom externen Bildungsträger ab. Wenden Sie sich mit Ihrem Bildungsabschluss an die Zulassungsstelle, um die aktuellen Kriterien zu erfahren." },
      { q: "Gibt es Stipendien?", a: "Fragen Sie bei der Zulassungsstelle nach aktuell verfügbaren Gebührenhilfen. Förderungen, Arbeitgeberfinanzierung und Ausbildungsmöglichkeiten unterliegen eigenen Auswahl- und Eignungsverfahren und sind nicht garantiert." },
      { q: "Wie lange dauern die Programme?", a: "Die Dauer hängt vom Sprachniveau, Programm und aktuellen Stundenplan ab. Erfragen Sie den aktuellen Kursplan und Zeitrahmen." },
      { q: "Bieten Sie Praktika oder Arbeitsvermittlung an?", a: "Das Institut kann Informationen und Vorbereitung zur Karriere anbieten. Praktika, Stellenangebote, Arbeitgeberpartnerschaften und Einwanderungsergebnisse müssen für jeden Weg einzeln bestätigt werden und sind nicht garantiert." },
      { q: "Kann ich neben der Arbeit lernen?", a: "Lernform und Stundenplan hängen vom Kurs und der Verfügbarkeit ab. Fragen Sie nach Präsenz-, Online- oder flexiblen Optionen." },
      { q: "Welche Karriereunterstützung gibt es?", a: "Das Institut nennt Lebenslaufvorbereitung, Bewerbungstraining, Interviewvorbereitung und Beratung zu Bildungswegen. Erfragen Sie die aktuell verfügbaren Leistungen; Visaentscheidungen treffen die zuständigen Behörden." },
      { q: "Sind die Programme international anerkannt?", a: "Einige Kursinformationen beziehen sich auf CEFR-Sprachniveaus. Der CEFR ist ein Referenzrahmen und keine Prüfungsstelle; die Anerkennung hängt vom Prüfungsanbieter und der konkreten Qualifikation ab." }
    ] }
  },
  sw: {
    empowering: { title: "Kuwawezesha Viongozi wa Baadaye katika Sekta ya Ukarimu", intro: "Tumejitolea kutoa elimu katika huduma za ukarimu na lugha, na kuwaandaa wanafunzi kwa taaluma katika sekta ya ukarimu ya kimataifa. Programu zetu huunganisha maarifa ya masomo na shughuli za vitendo.", interactive: "Kujifunza kwa Ushirikiano", interactiveDesc: "Uzoefu wa vitendo darasani kwa kutumia zana za kisasa.", teacher: "Majadiliano ya Mwalimu", teacherDesc: "Walimu na wanafunzi wakibadilishana maarifa kupitia majadiliano.", vision: "Dira Yetu", visionBody: "Kuwa taasisi inayotambulika kwa ubora katika mafunzo ya lugha na Usimamizi wa Ukarimu, na kuandaa wataalamu wenye uwezo wa kimataifa wanaochangia uelewano wa kimataifa na ukuaji wa sekta.", mission: "Dhamira Yetu", missionBody: "Kuwapa watu ujuzi wa vitendo wa lugha na utaalamu wa ukarimu ili waweze kufanikiwa katika mazingira ya kimataifa, kukuza uelewano wa tamaduni na kuongeza fursa za kazi katika soko la ajira la kimataifa." },
    programs: { title: "Programu Zetu za Kitaaluma", subtitle: "Chunguza kozi za lugha, ukarimu, utalii na ujuzi wa kidijitali.", explore: "Chunguza Kozi", cards: [
      { category: "Mawasiliano", title: "Shule ya Lugha", description: "Kuza ujuzi wa mawasiliano katika lugha za kimataifa na uchunguze njia za elimu na taaluma.", items: ["Lugha ya Kijerumani (A1–B2)", "Kifaransa (Maandalizi ya DELF)", "Kozi za Kihispania", "Mafunzo ya Kichina cha Mandarin"] },
      { category: "Huduma", title: "Usimamizi wa Ukarimu", description: "Chunguza upishi, huduma ya chakula na shughuli za malazi kupitia programu za masomo.", items: ["Cheti cha Ufundi katika Upishi na Malazi", "Usalama Kazini", "Mifumo ya Uzalishaji wa Chakula", "Huduma Bora kwa Wateja"] },
      { category: "Safari", title: "Usafiri na Utalii", description: "Jenga maarifa kuhusu uongozi wa watalii, shughuli za usafiri na huduma za maeneo ya utalii.", items: ["Ufundi wa Uongozi wa Watalii na Shughuli za Usafiri", "Usimamizi wa Maeneo ya Utalii", "Uendeshaji wa Wakala wa Usafiri", "Utalii Endelevu wa Ikolojia"] },
      { category: "Teknolojia", title: "Kompyuta na TEHAMA", description: "Chunguza ujuzi wa kidijitali na masomo ya kiufundi yanayohitajika katika dunia iliyounganishwa.", items: ["Utengenezaji na Ubunifu wa Tovuti", "Akili Bandia", "Misingi ya Usalama wa Mtandao", "Mitandao ya Kompyuta"] }
    ] },
    why: { title: "Kwa Nini Uchague Taasisi Yetu?", subtitle: "Chunguza masomo ya lugha, ukarimu, utalii na ujuzi wa kidijitali, pamoja na taarifa na mwongozo wa programu kutoka taasisi.", benefits: [
      { title: "Taarifa za Programu", desc: "Chunguza mafunzo ya lugha, ukarimu, utalii na ujuzi wa kidijitali. Uliza ofisi ya udahili kuhusu sifa maalumu na utambuzi wowote wa nje wa kozi." },
      { title: "Kujifunza kwa Vitendo", desc: "Chunguza programu zinazounganisha maarifa ya somo na shughuli za vitendo. Omba muhtasari wa sasa wa kozi kabla ya kujiandikisha." },
      { title: "Wakufunzi Wenye Uzoefu", desc: "Jifunze pamoja na wakufunzi na wataalamu wanaoleta maarifa ya somo na uzoefu wa vitendo darasani." },
      { title: "Mwongozo wa Njia za Kimataifa", desc: "Chunguza njia za elimu na taaluma zinazohusiana na Ujerumani, Austria na Uswisi. Udahili, uteuzi wa mwajiri na maamuzi ya visa hutegemea sifa za mtu binafsi." },
      { title: "Maandalizi ya Kazi", desc: "Taasisi inaorodhesha maandalizi ya CV, mazoezi ya mahojiano na mwongozo wa njia za taaluma kama maeneo ya usaidizi. Thibitisha huduma zinazopatikana sasa." },
      { title: "Vifaa vya Kujifunzia", desc: "Uliza taasisi kuhusu vifaa na rasilimali za kujifunzia zinazopatikana kwa programu unayochagua." }
    ] },
    testimonials: { eyebrow: "Sauti za Wanafunzi", title: "Uzoefu na Safari za Wanafunzi", action: "Anza Safari Yako", roles: ["Ausbildung ya Uuguzi", "Ausbildung ya Shamba la Maziwa", "Kazi ya Jamii", "Mwanafunzi wa Shahada", "Mwanafunzi wa Shahada", "Mpishi Mtaalamu"], quotes: [
      "Ukitaka kuwa muuguzi nchini Ujerumani, unapaswa kuwa umefikia angalau kiwango cha B1. Nilipitia International Institute of Foreign Languages and Hospitality Management.",
      "Kujifunza Kijerumani kutakusaidia kuwasiliana na kupata njia yako ya kwenda Ujerumani. Nilipitia taasisi hii kutoka Narok Kusini.",
      "Kujifunza Kijerumani katika kiwango cha B1 au B2 kulifanya mchakato wangu wa Anerkennung kuwa rahisi zaidi. Taasisi ilichangia sana safari yangu.",
      "Msaada kutoka International Institute uliniwezesha kufuatilia masomo ya shahada ya uzamili nchini Ujerumani.",
      "Mafunzo ya Kijerumani niliyopata yalikuwa muhimu kwa udahili wangu wa chuo kikuu na yaliweka msingi wa mafanikio yangu.",
      "Kutoka Transmara hadi Ujerumani kama mpishi — ujuzi na mafunzo kutoka taasisi hii vilibadilisha mustakabali wangu."
    ] },
    faq: { title: "Maswali Yanayoulizwa Kuhusu Udahili na Uwekaji", subtitle: "Majibu ya maswali ya kawaida unapochunguza masomo na njia za taaluma.", sideTitle: "Mwongozo wa Hatua Yako Inayofuata", sideBody: "Tunatoa taarifa na mwongozo wa programu unapochunguza kujifunza lugha, elimu na njia za taaluma nje ya nchi.", language: "Lugha", learning: "Njia za kujifunza", admissions: "Udahili", guidance: "Mwongozo wa programu", ask: "Tuulize swali", questions: [
      { q: "Masharti ya kujiunga ni yapi?", a: "Masharti hutegemea programu na mtoa mafunzo wa nje ikiwa yupo. Wasiliana na ofisi ya udahili ukiwa na taarifa za elimu yako ili kuthibitisha vigezo vya sasa." },
      { q: "Je, kuna nafasi za ufadhili wa masomo?", a: "Uliza ofisi ya udahili kama msaada wa ada unapatikana kwa sasa. Ufadhili, udhamini wa mwajiri na nafasi za Ausbildung hutegemea vigezo na michakato tofauti ya uteuzi na hazijahakikishwa." },
      { q: "Programu huchukua muda gani?", a: "Muda wa kozi hutofautiana kulingana na kiwango cha lugha, programu na ratiba ya sasa. Wasiliana na udahili kupata muhtasari na ratiba ya hivi karibuni." },
      { q: "Je, mnatoa nafasi za mafunzo kazini au ajira?", a: "Taasisi inaweza kutoa taarifa na maandalizi ya taaluma. Mafunzo kazini, ajira, ushirikiano na waajiri na matokeo ya uhamiaji lazima yathibitishwe kwa kila njia na hayajahakikishwa." },
      { q: "Je, ninaweza kusoma ninapofanya kazi?", a: "Njia za kujifunza na ratiba hutegemea kozi na upatikanaji wa sasa. Uliza kuhusu chaguo la ana kwa ana, mtandaoni au ratiba inayobadilika." },
      { q: "Mnatoa huduma gani za kusaidia taaluma?", a: "Taasisi inaorodhesha maandalizi ya CV, mafunzo ya Bewerbung, maandalizi ya mahojiano na mwongozo wa njia za taaluma. Thibitisha huduma zinazopatikana; maamuzi ya visa hufanywa na mamlaka husika." },
      { q: "Je, programu zinatambuliwa kimataifa?", a: "Baadhi ya taarifa za kozi zinarejelea viwango vya CEFR. CEFR ni mfumo wa viwango, si chombo cha kutoa tuzo; utambuzi wa cheti hutegemea mtoa mtihani na sifa husika." }
    ] }
  },
  fr: {
    empowering: { title: "Former les futurs leaders de l’hôtellerie", intro: "Nous nous engageons à proposer une formation en hôtellerie et en langues afin de préparer les étudiants aux métiers du secteur hôtelier international. Nos programmes associent connaissances disciplinaires et activités pratiques.", interactive: "Apprentissage interactif", interactiveDesc: "Une expérience pratique en classe avec des outils modernes.", teacher: "Échanges pédagogiques", teacherDesc: "Enseignants et étudiants partagent leurs connaissances par le dialogue.", vision: "Notre vision", visionBody: "Être un établissement reconnu pour l’excellence de la formation linguistique et du management hôtelier, en formant des professionnels compétents à l’échelle mondiale qui contribuent à la compréhension internationale et au développement du secteur.", mission: "Notre mission", missionBody: "Donner aux personnes des compétences linguistiques pratiques et une expertise en hôtellerie pour évoluer dans des environnements internationaux, favoriser la compréhension interculturelle et améliorer leurs perspectives professionnelles sur le marché mondial." },
    programs: { title: "Nos programmes professionnels", subtitle: "Découvrez des formations en langues, hôtellerie, tourisme et compétences numériques.", explore: "Découvrir les cours", cards: [
      { category: "Communication", title: "École de langues", description: "Développez vos compétences de communication dans des langues internationales et explorez des parcours d’études et de carrière.", items: ["Allemand (A1–B2)", "Français (préparation au DELF)", "Cours d’espagnol", "Formation au chinois mandarin"] },
      { category: "Services", title: "Management hôtelier", description: "Découvrez la restauration, le service alimentaire et les opérations d’hébergement dans le cadre des programmes proposés.", items: ["Certificat professionnel en restauration et hébergement", "Sécurité opérationnelle", "Systèmes de production alimentaire", "Maîtrise du service client"] },
      { category: "Voyages", title: "Voyages et tourisme", description: "Développez vos connaissances en guidage touristique, opérations de voyage et services de destination.", items: ["Formation de guide touristique et opérations de voyage", "Gestion des destinations", "Logistique d’agence de voyages", "Écotourisme durable"] },
      { category: "Technologie", title: "Informatique et TIC", description: "Explorez les compétences numériques et les sujets techniques du monde connecté.", items: ["Développement web et design", "Intelligence artificielle", "Fondamentaux de la cybersécurité", "Réseaux informatiques"] }
    ] },
    why: { title: "Pourquoi choisir notre établissement ?", subtitle: "Découvrez les formations en langues, hôtellerie, tourisme et compétences numériques, ainsi que les informations et conseils de l’institut.", benefits: [
      { title: "Informations sur les programmes", desc: "Découvrez les formations en langues, hôtellerie, tourisme et compétences numériques. Demandez aux admissions la qualification précise et toute reconnaissance externe associée au cours." },
      { title: "Apprentissage pratique", desc: "Découvrez des programmes qui associent connaissances théoriques et activités pratiques. Demandez le plan de cours actuel avant l’inscription." },
      { title: "Formateurs expérimentés", desc: "Apprenez auprès de formateurs et de professionnels qui apportent leurs connaissances et leur expérience pratique aux cours." },
      { title: "Conseils sur les parcours internationaux", desc: "Explorez les parcours d’études et de carrière liés à l’Allemagne, à l’Autriche et à la Suisse. Admission, sélection par un employeur et décisions de visa dépendent de l’éligibilité individuelle." },
      { title: "Préparation professionnelle", desc: "L’institut cite la préparation du CV, l’entraînement aux entretiens et les conseils d’orientation parmi ses domaines d’accompagnement. Confirmez les services actuellement disponibles." },
      { title: "Espaces d’apprentissage", desc: "Renseignez-vous auprès de l’institut sur les équipements et ressources disponibles pour le programme choisi." }
    ] },
    testimonials: { eyebrow: "Paroles d’étudiants", title: "Expériences et parcours des étudiants", action: "Commencer votre parcours", roles: ["Ausbildung en soins infirmiers", "Ausbildung en exploitation laitière", "Travail social", "Étudiant de premier cycle", "Étudiante de premier cycle", "Chef professionnel"], quotes: [
      "Pour devenir infirmier ou infirmière en Allemagne, il faut au moins avoir atteint le niveau B1. Je suis passé par l’International Institute of Foreign Languages and Hospitality Management.",
      "Apprendre l’allemand vous aidera à créer des liens et à trouver votre chemin vers l’Allemagne. Je suis passé par cet institut depuis Narok South.",
      "L’apprentissage de l’allemand au niveau B1 ou B2 a grandement facilité ma procédure d’Anerkennung. L’institut a joué un rôle important dans mon parcours.",
      "Le soutien de l’International Institute m’a permis d’envisager des études de master en Allemagne.",
      "La formation en allemand que j’ai reçue a été essentielle pour mon admission à l’université et a posé les bases de ma réussite.",
      "De Transmara à l’Allemagne comme chef cuisinier : les compétences et la formation de cet institut ont complètement transformé mon avenir."
    ] },
    faq: { title: "FAQ sur les admissions et l’accompagnement", subtitle: "Des réponses aux questions fréquentes sur les études et les parcours professionnels.", sideTitle: "Des conseils pour votre prochaine étape", sideBody: "Nous fournissons des informations et des conseils sur les langues, les études et les parcours professionnels à l’étranger.", language: "Langues", learning: "Parcours d’apprentissage", admissions: "Admissions", guidance: "Conseils sur les programmes", ask: "Posez-nous une question", questions: [
      { q: "Quelles sont les conditions d’admission ?", a: "Les conditions dépendent du programme et de tout organisme de formation externe. Contactez les admissions avec votre parcours scolaire pour confirmer les critères actuels." },
      { q: "Des bourses sont-elles disponibles ?", a: "Demandez aux admissions si une aide aux frais est actuellement disponible. Les financements, parrainages d’employeurs et possibilités d’Ausbildung dépendent de critères et sélections distincts et ne sont pas garantis." },
      { q: "Quelle est la durée des programmes ?", a: "La durée varie selon le niveau linguistique, le programme et l’emploi du temps actuel. Contactez les admissions pour obtenir le plan de cours et le calendrier à jour." },
      { q: "Proposez-vous des stages ou des placements professionnels ?", a: "L’institut peut fournir des informations et une préparation professionnelle. Stages, offres d’emploi, partenariats employeurs et résultats migratoires doivent être confirmés pour chaque parcours et ne sont pas garantis." },
      { q: "Puis-je étudier tout en travaillant ?", a: "Les modes d’apprentissage et les horaires dépendent du cours et des disponibilités. Demandez les options en présentiel, en ligne ou flexibles." },
      { q: "Quels services d’accompagnement professionnel proposez-vous ?", a: "L’institut mentionne la préparation du CV, le coaching Bewerbung, la préparation aux entretiens et les conseils d’orientation. Confirmez les services disponibles ; les décisions de visa relèvent des autorités compétentes." },
      { q: "Les programmes sont-ils reconnus à l’international ?", a: "Certaines informations de cours font référence aux niveaux du CECR. Le CECR est un cadre de référence, pas un organisme certificateur ; la reconnaissance dépend de l’organisme d’examen et de la qualification concernée." }
    ] }
  },
  es: {
    empowering: { title: "Impulsamos a los futuros líderes de la hostelería", intro: "Nos dedicamos a ofrecer formación en hostelería e idiomas para preparar al alumnado para carreras en el sector hostelero internacional. Nuestros programas combinan conocimientos con actividades prácticas.", interactive: "Aprendizaje interactivo", interactiveDesc: "Experiencia práctica en el aula con herramientas modernas.", teacher: "Debate con docentes", teacherDesc: "Docentes y estudiantes comparten conocimientos mediante el diálogo.", vision: "Nuestra visión", visionBody: "Ser una institución reconocida por la excelencia en formación lingüística y gestión hostelera, formando profesionales con competencias globales que contribuyan al entendimiento internacional y al crecimiento del sector.", mission: "Nuestra misión", missionBody: "Proporcionar competencias lingüísticas prácticas y conocimientos de hostelería para desenvolverse en entornos globales, fomentar el entendimiento cultural y ampliar las oportunidades profesionales en el mercado laboral internacional." },
    programs: { title: "Nuestros programas profesionales", subtitle: "Explora cursos de idiomas, hostelería, turismo y competencias digitales.", explore: "Explorar cursos", cards: [
      { category: "Comunicación", title: "Escuela de Idiomas", description: "Desarrolla habilidades de comunicación en idiomas internacionales y explora itinerarios educativos y profesionales.", items: ["Alemán (A1–B2)", "Francés (preparación DELF)", "Cursos de español", "Formación en chino mandarín"] },
      { category: "Servicios", title: "Gestión Hotelera", description: "Explora restauración, servicio de alimentos y operaciones de alojamiento mediante los programas disponibles.", items: ["Certificado técnico en restauración y alojamiento", "Seguridad operativa", "Sistemas de producción alimentaria", "Atención al cliente"] },
      { category: "Viajes", title: "Viajes y Turismo", description: "Desarrolla conocimientos sobre guías turísticos, operaciones de viaje y servicios de destinos.", items: ["Formación en guía turístico y operaciones de viaje", "Gestión de destinos", "Logística de agencias de viajes", "Ecoturismo sostenible"] },
      { category: "Tecnología", title: "Informática y TIC", description: "Explora competencias digitales y materias técnicas relevantes en un mundo conectado.", items: ["Desarrollo y diseño web", "Inteligencia artificial", "Fundamentos de ciberseguridad", "Redes informáticas"] }
    ] },
    why: { title: "¿Por qué elegir nuestra institución?", subtitle: "Explora formación en idiomas, hostelería, turismo y competencias digitales, junto con información y orientación del instituto.", benefits: [
      { title: "Información sobre programas", desc: "Explora formación en idiomas, hostelería, turismo y competencias digitales. Consulta con admisiones la cualificación concreta y cualquier reconocimiento externo asociado al curso." },
      { title: "Aprendizaje práctico", desc: "Descubre programas que combinan conocimientos con actividades prácticas. Solicita el plan de estudios vigente antes de matricularte." },
      { title: "Docentes con experiencia", desc: "Aprende con docentes y profesionales que aportan conocimientos especializados y experiencia práctica a las clases." },
      { title: "Orientación sobre itinerarios internacionales", desc: "Explora itinerarios educativos y profesionales relacionados con Alemania, Austria y Suiza. La admisión, selección de empleadores y decisiones de visado dependen de la elegibilidad individual." },
      { title: "Preparación profesional", desc: "El instituto incluye preparación de CV, práctica de entrevistas y orientación de itinerarios entre sus áreas de apoyo. Confirma los servicios disponibles actualmente." },
      { title: "Instalaciones de aprendizaje", desc: "Consulta con el instituto qué instalaciones y recursos de aprendizaje están disponibles para el programa elegido." }
    ] },
    testimonials: { eyebrow: "Voces del alumnado", title: "Experiencias y trayectorias del alumnado", action: "Comienza tu trayectoria", roles: ["Ausbildung de enfermería", "Ausbildung en granja lechera", "Trabajo social", "Estudiante universitario", "Estudiante universitaria", "Chef profesional"], quotes: [
      "Si quieres ser enfermero en Alemania, debes haber alcanzado al menos el nivel B1. Pasé por el International Institute of Foreign Languages and Hospitality Management.",
      "Aprender alemán te ayudará a conectar y encontrar tu camino hacia Alemania. Llegué a través de este instituto desde Narok Sur.",
      "Aprender alemán en el nivel B1 o B2 facilitó mucho mi proceso de Anerkennung. El instituto desempeñó un papel importante en mi trayectoria.",
      "El apoyo del International Institute me permitió plantearme cursar un máster en Alemania.",
      "La formación en alemán que recibí fue esencial para mi admisión universitaria y sentó las bases de mi éxito.",
      "De Transmara a Alemania como chef: las habilidades y la formación de este instituto transformaron por completo mi futuro."
    ] },
    faq: { title: "Preguntas frecuentes sobre admisiones y orientación", subtitle: "Respuestas a preguntas habituales al explorar estudios e itinerarios profesionales.", sideTitle: "Orientación para tu próximo paso", sideBody: "Ofrecemos información y orientación sobre idiomas, educación e itinerarios profesionales en el extranjero.", language: "Idiomas", learning: "Itinerarios de aprendizaje", admissions: "Admisiones", guidance: "Orientación sobre programas", ask: "Haznos una pregunta", questions: [
      { q: "¿Cuáles son los requisitos de admisión?", a: "Los requisitos dependen del programa y de cualquier proveedor externo de formación. Contacta con admisiones e indica tu formación académica para confirmar los criterios vigentes." },
      { q: "¿Hay becas disponibles?", a: "Pregunta a admisiones si existe alguna ayuda para las tasas. La financiación, el patrocinio de empleadores y las oportunidades de Ausbildung tienen procesos de elegibilidad y selección independientes y no están garantizados." },
      { q: "¿Cuánto duran los programas?", a: "La duración varía según el nivel de idioma, el programa y el horario vigente. Contacta con admisiones para obtener el plan y calendario actualizados." },
      { q: "¿Ofrecen prácticas o colocación laboral?", a: "El instituto puede ofrecer información y preparación profesional. Las prácticas, ofertas de empleo, alianzas con empleadores y resultados migratorios deben confirmarse para cada itinerario y no están garantizados." },
      { q: "¿Puedo estudiar mientras trabajo?", a: "Las modalidades y horarios dependen del curso y de la disponibilidad. Consulta las opciones presenciales, en línea o flexibles." },
      { q: "¿Qué servicios de apoyo profesional ofrecen?", a: "El instituto menciona preparación de CV, asesoramiento Bewerbung, preparación de entrevistas y orientación. Confirma los servicios disponibles; las decisiones de visado corresponden a las autoridades competentes." },
      { q: "¿Los programas tienen reconocimiento internacional?", a: "Algunos cursos hacen referencia a niveles del MCER. El MCER es un marco de referencia, no un organismo certificador; el reconocimiento depende del proveedor del examen y de la cualificación concreta." }
    ] }
  },
  nl: {
    empowering: { title: "Toekomstige leiders in hospitality versterken", intro: "Wij zetten ons in voor onderwijs in hospitality en talen en bereiden studenten voor op een loopbaan in de internationale hospitalitysector. Onze programma's combineren vakkennis met praktische leeractiviteiten.", interactive: "Interactief leren", interactiveDesc: "Praktijkervaring in de klas met moderne hulpmiddelen.", teacher: "Gesprek met docenten", teacherDesc: "Docenten en studenten delen kennis door samen in gesprek te gaan.", vision: "Onze visie", visionBody: "Een gerenommeerde instelling zijn die bekendstaat om uitmuntend taalonderwijs en hospitalitymanagement, en wereldwijd competente professionals opleidt die bijdragen aan internationaal begrip en groei van de sector.", mission: "Onze missie", missionBody: "Mensen praktische taalvaardigheden en hospitalitykennis bieden, zodat zij in internationale omgevingen kunnen floreren, cultureel begrip bevorderen en hun kansen op de internationale arbeidsmarkt vergroten." },
    programs: { title: "Onze professionele programma's", subtitle: "Ontdek cursussen in talen, hospitality, toerisme en digitale vaardigheden.", explore: "Cursussen bekijken", cards: [
      { category: "Communicatie", title: "Talenschool", description: "Ontwikkel communicatievaardigheden in internationale talen en verken internationale studie- en loopbaanmogelijkheden.", items: ["Duitse taal (A1–B2)", "Frans (DELF-voorbereiding)", "Spaanse cursussen", "Mandarijn-Chinese training"] },
      { category: "Dienstverlening", title: "Hospitalitymanagement", description: "Verken catering, maaltijdservice en accommodatiebeheer binnen de aangeboden programma's.", items: ["Vakcertificaat Catering en Accommodatie", "Operationele veiligheid", "Voedselproductiesystemen", "Klantgerichtheid"] },
      { category: "Reizen", title: "Reizen & Toerisme", description: "Ontwikkel kennis over gidswerk, reisactiviteiten en bestemmingsdiensten.", items: ["Vakopleiding Gids en Reisactiviteiten", "Bestemmingsbeheer", "Logistiek van reisbureaus", "Duurzaam ecotoerisme"] },
      { category: "Technologie", title: "Computing & ICT", description: "Verken digitale vaardigheden en technische onderwerpen voor de verbonden wereld.", items: ["Webontwikkeling & ontwerp", "Kunstmatige intelligentie", "Basisprincipes cyberbeveiliging", "Computernetwerken"] }
    ] },
    why: { title: "Waarom onze instelling kiezen?", subtitle: "Ontdek taal-, hospitality-, toerisme- en digitale opleidingen, met programma-informatie en begeleiding van het instituut.", benefits: [
      { title: "Programma-informatie", desc: "Ontdek opleidingen in talen, hospitality, toerisme en digitale vaardigheden. Vraag bij toelating naar de specifieke kwalificatie en eventuele externe erkenning van een cursus." },
      { title: "Praktijkgericht leren", desc: "Ontdek programma's die vakkennis combineren met praktische leeractiviteiten. Vraag vóór inschrijving om het actuele cursusoverzicht." },
      { title: "Ervaren docenten", desc: "Leer met docenten en professionals die vakkennis en praktijkervaring in de lessen inbrengen." },
      { title: "Begeleiding bij internationale trajecten", desc: "Verken studie- en loopbaantrajecten die verband houden met Duitsland, Oostenrijk en Zwitserland. Toelating, werkgeversselectie en visumbesluiten zijn afhankelijk van individuele geschiktheid." },
      { title: "Loopbaanvoorbereiding", desc: "Het instituut noemt cv-voorbereiding, sollicitatiegesprek-oefening en trajectbegeleiding als ondersteuningsgebieden. Bevestig welke diensten momenteel beschikbaar zijn." },
      { title: "Leerfaciliteiten", desc: "Vraag het instituut welke faciliteiten en leermiddelen beschikbaar zijn voor het programma van uw keuze." }
    ] },
    testimonials: { eyebrow: "Studenten aan het woord", title: "Ervaringen en trajecten van studenten", action: "Begin uw traject", roles: ["Verpleegkundige Ausbildung", "Ausbildung melkveebedrijf", "Sociaal werk", "Student bacheloropleiding", "Student bacheloropleiding", "Professionele chef-kok"], quotes: [
      "Als je verpleegkundige wilt worden in Duitsland, moet je minimaal niveau B1 hebben bereikt. Ik kwam via het International Institute of Foreign Languages and Hospitality Management.",
      "Duits leren helpt je contacten te leggen en je weg naar Duitsland te vinden. Ik kwam vanuit Narok South via dit instituut.",
      "Duits leren op B1- of B2-niveau maakte mijn Anerkennung-proces veel eenvoudiger. Het instituut speelde een belangrijke rol in mijn traject.",
      "De ondersteuning van het International Institute stelde mij in staat een masteropleiding in Duitsland na te streven.",
      "De Duitse taaltraining die ik kreeg, was essentieel voor mijn toelating tot de universiteit en legde de basis voor mijn succes.",
      "Van Transmara naar Duitsland als chef-kok: de vaardigheden en training van dit instituut hebben mijn toekomst volledig veranderd."
    ] },
    faq: { title: "Veelgestelde vragen over toelating en begeleiding", subtitle: "Antwoorden op veelgestelde vragen over studie- en loopbaantrajecten.", sideTitle: "Begeleiding bij uw volgende stap", sideBody: "Wij bieden programma-informatie en begeleiding bij taalstudie, onderwijs en loopbaantrajecten in het buitenland.", language: "Talen", learning: "Leertrajecten", admissions: "Toelating", guidance: "Programma-advies", ask: "Stel ons een vraag", questions: [
      { q: "Wat zijn de toelatingseisen?", a: "De toelatingseisen zijn afhankelijk van het programma en eventuele externe opleidingsaanbieders. Neem contact op met toelating en geef uw opleidingsachtergrond door om de actuele criteria te bevestigen." },
      { q: "Zijn er studiebeurzen beschikbaar?", a: "Vraag bij toelating of er momenteel financiële ondersteuning voor collegegeld beschikbaar is. Financiering, sponsoring door werkgevers en Ausbildung-mogelijkheden hebben afzonderlijke voorwaarden en selectieprocedures en zijn niet gegarandeerd." },
      { q: "Hoe lang duren de programma's?", a: "De duur verschilt per taalniveau, programma en actueel rooster. Neem contact op met toelating voor het meest recente cursusoverzicht en rooster." },
      { q: "Biedt u stages of arbeidsbemiddeling?", a: "Het instituut kan loopbaaninformatie en voorbereiding bieden. Stages, vacatures, werkgeverspartnerschappen en immigratie-uitkomsten moeten per traject worden bevestigd en zijn niet gegarandeerd." },
      { q: "Kan ik studeren terwijl ik werk?", a: "Leervormen en lestijden zijn afhankelijk van de cursus en beschikbaarheid. Vraag naar klassikale, online of flexibele mogelijkheden." },
      { q: "Welke loopbaanondersteuning biedt u?", a: "Het instituut noemt cv-voorbereiding, Bewerbung-coaching, sollicitatievoorbereiding en trajectbegeleiding. Bevestig welke diensten beschikbaar zijn; visumbesluiten worden door de bevoegde autoriteiten genomen." },
      { q: "Zijn de programma's internationaal erkend?", a: "Sommige cursusinformatie verwijst naar CEFR-taalniveaus. CEFR is een referentiekader, geen exameninstantie; erkenning hangt af van de examenaanbieder en de specifieke kwalificatie." }
    ] }
  },
  it: {
    empowering: { title: "Dare forza ai futuri leader dell’ospitalità", intro: "Ci impegniamo a offrire formazione nel settore dell’ospitalità e delle lingue, preparando gli studenti a carriere nel comparto alberghiero internazionale. I nostri programmi combinano conoscenze disciplinari e attività pratiche.", interactive: "Apprendimento interattivo", interactiveDesc: "Esperienza pratica in aula con strumenti moderni.", teacher: "Confronto con i docenti", teacherDesc: "Docenti e studenti condividono conoscenze attraverso il dialogo.", vision: "La nostra visione", visionBody: "Essere un istituto rinomato per l’eccellenza nella formazione linguistica e nella gestione dell’ospitalità, formando professionisti competenti a livello globale che contribuiscano alla comprensione internazionale e alla crescita del settore.", mission: "La nostra missione", missionBody: "Fornire competenze linguistiche pratiche e conoscenze nel settore dell’ospitalità per prosperare in contesti globali, promuovere la comprensione culturale e ampliare le opportunità professionali nel mercato internazionale." },
    programs: { title: "I nostri programmi professionali", subtitle: "Scopri i corsi di lingue, ospitalità, turismo e competenze digitali.", explore: "Esplora i corsi", cards: [
      { category: "Comunicazione", title: "Scuola di lingue", description: "Sviluppa competenze comunicative nelle lingue internazionali ed esplora percorsi di studio e carriera.", items: ["Lingua tedesca (A1–B2)", "Francese (preparazione DELF)", "Corsi di spagnolo", "Formazione in cinese mandarino"] },
      { category: "Servizi", title: "Gestione dell’ospitalità", description: "Esplora catering, servizio di ristorazione e gestione delle strutture ricettive attraverso i programmi disponibili.", items: ["Certificato professionale in catering e alloggio", "Sicurezza operativa", "Sistemi di produzione alimentare", "Eccellenza nel servizio clienti"] },
      { category: "Viaggi", title: "Viaggi e turismo", description: "Sviluppa conoscenze relative alla guida turistica, alle operazioni di viaggio e ai servizi di destinazione.", items: ["Formazione per guide turistiche e operazioni di viaggio", "Gestione delle destinazioni", "Logistica delle agenzie di viaggio", "Ecoturismo sostenibile"] },
      { category: "Tecnologia", title: "Informatica e ICT", description: "Esplora competenze digitali e argomenti tecnici rilevanti nel mondo connesso.", items: ["Sviluppo e progettazione web", "Intelligenza artificiale", "Fondamenti di cybersecurity", "Reti informatiche"] }
    ] },
    why: { title: "Perché scegliere il nostro istituto?", subtitle: "Scopri la formazione in lingue, ospitalità, turismo e competenze digitali, con informazioni e orientamento sui programmi.", benefits: [
      { title: "Informazioni sui programmi", desc: "Scopri la formazione in lingue, ospitalità, turismo e competenze digitali. Chiedi all’ufficio ammissioni informazioni sulla qualifica specifica e su eventuali riconoscimenti esterni." },
      { title: "Apprendimento pratico", desc: "Scopri programmi che uniscono conoscenze disciplinari e attività pratiche. Richiedi il programma didattico aggiornato prima dell’iscrizione." },
      { title: "Docenti esperti", desc: "Impara con docenti e professionisti che portano in aula conoscenze specialistiche ed esperienza pratica." },
      { title: "Orientamento ai percorsi internazionali", desc: "Esplora percorsi di studio e carriera collegati a Germania, Austria e Svizzera. Ammissione, selezione del datore di lavoro e decisioni sui visti dipendono dall’idoneità individuale." },
      { title: "Preparazione professionale", desc: "L’istituto indica la preparazione del CV, le esercitazioni per i colloqui e l’orientamento tra le aree di supporto. Conferma i servizi attualmente disponibili." },
      { title: "Strutture per l’apprendimento", desc: "Chiedi all’istituto quali strutture e risorse didattiche sono disponibili per il programma scelto." }
    ] },
    testimonials: { eyebrow: "Voci degli studenti", title: "Esperienze e percorsi degli studenti", action: "Inizia il tuo percorso", roles: ["Ausbildung infermieristica", "Ausbildung in azienda lattiero-casearia", "Servizio sociale", "Studente universitario", "Studentessa universitaria", "Chef professionista"], quotes: [
      "Se vuoi diventare infermiere in Germania, devi aver raggiunto almeno il livello B1. Ho frequentato l’International Institute of Foreign Languages and Hospitality Management.",
      "Imparare il tedesco ti aiuterà a creare contatti e a trovare la tua strada verso la Germania. Sono arrivato tramite questo istituto da Narok South.",
      "Studiare tedesco al livello B1 o B2 ha reso molto più semplice il mio processo di Anerkennung. L’istituto ha avuto un ruolo importante nel mio percorso.",
      "Il supporto dell’International Institute mi ha permesso di intraprendere il percorso verso un master in Germania.",
      "La formazione in tedesco che ho ricevuto è stata essenziale per l’ammissione all’università e ha posto le basi del mio successo.",
      "Da Transmara alla Germania come chef: le competenze e la formazione dell’istituto hanno trasformato completamente il mio futuro."
    ] },
    faq: { title: "Domande frequenti su ammissioni e orientamento", subtitle: "Risposte alle domande più comuni sui percorsi di studio e professionali.", sideTitle: "Orientamento per il tuo prossimo passo", sideBody: "Forniamo informazioni e orientamento su lingue, istruzione e percorsi professionali all’estero.", language: "Lingue", learning: "Percorsi di apprendimento", admissions: "Ammissioni", guidance: "Orientamento sui programmi", ask: "Inviaci una domanda", questions: [
      { q: "Quali sono i requisiti di ammissione?", a: "I requisiti dipendono dal programma e da eventuali enti formativi esterni. Contatta l’ufficio ammissioni indicando il tuo percorso scolastico per confermare i criteri aggiornati." },
      { q: "Sono disponibili borse di studio?", a: "Chiedi all’ufficio ammissioni se sono disponibili agevolazioni sulle rette. Finanziamenti, sponsorizzazioni dei datori di lavoro e opportunità Ausbildung hanno criteri e selezioni separate e non sono garantiti." },
      { q: "Quanto durano i programmi?", a: "La durata varia in base al livello linguistico, al programma e all’orario attuale. Contatta l’ufficio ammissioni per il piano del corso e il calendario aggiornati." },
      { q: "Offrite tirocini o inserimenti lavorativi?", a: "L’istituto può fornire informazioni e preparazione professionale. Tirocini, offerte di lavoro, collaborazioni con datori di lavoro ed esiti migratori devono essere confermati per ogni percorso e non sono garantiti." },
      { q: "Posso studiare mentre lavoro?", a: "Le modalità e gli orari dipendono dal corso e dalla disponibilità. Chiedi informazioni sulle opzioni in presenza, online o flessibili." },
      { q: "Quali servizi di supporto professionale offrite?", a: "L’istituto indica preparazione del CV, coaching Bewerbung, preparazione ai colloqui e orientamento. Conferma i servizi disponibili; le decisioni sui visti spettano alle autorità competenti." },
      { q: "I programmi sono riconosciuti a livello internazionale?", a: "Alcune informazioni sui corsi fanno riferimento ai livelli QCER. Il QCER è un quadro di riferimento, non un ente certificatore; il riconoscimento dipende dall’ente d’esame e dalla qualifica specifica." }
    ] }
  },
  zh: {
    empowering: { title: "培养酒店与服务行业的未来领袖", intro: "我们致力于提供酒店服务与语言教育，帮助学生为国际酒店服务行业的职业发展做好准备。课程将学科知识与实践学习活动相结合。", interactive: "互动式学习", interactiveDesc: "借助现代工具开展课堂实践学习。", teacher: "师生交流", teacherDesc: "教师与学生通过讨论分享知识。", vision: "我们的愿景", visionBody: "成为在语言培训和酒店管理领域享有声誉的机构，培养具备全球胜任力的专业人才，促进国际理解和行业发展。", mission: "我们的使命", missionBody: "帮助学习者掌握实用语言技能和酒店服务专业知识，使其能够适应全球化环境、促进文化理解，并拓展国际就业市场中的职业机会。" },
    programs: { title: "我们的专业课程", subtitle: "了解语言、酒店服务、旅游和数字技能课程。", explore: "查看课程", cards: [
      { category: "沟通", title: "语言学院", description: "提升国际语言沟通能力，了解国际学习与职业发展路径。", items: ["德语（A1–B2）", "法语（DELF备考）", "西班牙语课程", "普通话培训"] },
      { category: "服务", title: "酒店管理", description: "通过相关课程了解餐饮、食品服务和住宿运营。", items: ["餐饮与住宿职业证书", "运营安全", "食品生产系统", "客户服务技能"] },
      { category: "旅行", title: "旅游与旅行", description: "学习导游服务、旅行运营和旅游目的地服务相关知识。", items: ["导游与旅行运营职业课程", "旅游目的地管理", "旅行社运营物流", "可持续生态旅游"] },
      { category: "科技", title: "计算机与信息通信技术", description: "了解互联世界所需的数字技能和技术领域知识。", items: ["网页开发与设计", "人工智能", "网络安全基础", "计算机网络"] }
    ] },
    why: { title: "为什么选择本机构？", subtitle: "了解语言、酒店服务、旅游和数字技能课程，以及本机构提供的课程信息与指导。", benefits: [
      { title: "课程信息", desc: "了解语言、酒店服务、旅游和数字技能培训。请向招生部门确认具体资格以及课程是否具有外部认可。" },
      { title: "实践学习", desc: "了解将学科知识与实践活动相结合的课程。报名之前请索取最新课程大纲。" },
      { title: "专业教师", desc: "在教师和专业人士的指导下学习，他们将专业知识与实践经验融入课堂。" },
      { title: "国际发展路径指导", desc: "了解与德国、奥地利和瑞士相关的教育与职业路径。录取、雇主选择和签证决定均取决于个人资格。" },
      { title: "职业准备", desc: "本机构列出的支持领域包括简历准备、面试练习和发展路径指导。请确认目前实际提供的服务。" },
      { title: "学习设施", desc: "请向本机构咨询所选课程可使用的设施和学习资源。" }
    ] },
    testimonials: { eyebrow: "学生心声", title: "学生经历与成长历程", action: "开启您的学习之旅", roles: ["护理 Ausbildung", "奶牛场 Ausbildung", "社会工作", "本科学生", "本科学生", "专业厨师"], quotes: [
      "如果您想在德国成为护士，至少需要达到B1水平。我曾就读于International Institute of Foreign Languages and Hospitality Management。",
      "学习德语有助于建立联系并找到前往德国的发展方向。我来自Narok South，通过这所机构开启了这段经历。",
      "学习达到B1或B2水平的德语，让我的Anerkennung认证流程顺利了许多。这所机构在我的经历中发挥了重要作用。",
      "International Institute提供的支持使我能够在德国继续攻读硕士学位。",
      "我接受的德语培训对大学录取至关重要，也为我的成功奠定了基础。",
      "从Transmara到德国成为一名厨师——这所机构提供的技能和培训彻底改变了我的未来。"
    ] },
    faq: { title: "招生与就业指导常见问题", subtitle: "帮助您了解学习和职业发展路径的常见问题解答。", sideTitle: "为您的下一步提供指导", sideBody: "在您了解语言学习、教育和海外职业发展路径时，我们提供课程信息与指导。", language: "语言", learning: "学习路径", admissions: "招生", guidance: "课程指导", ask: "向我们提问", questions: [
      { q: "入学要求是什么？", a: "入学要求取决于具体课程以及是否涉及外部培训机构。请向招生部门提供您的教育背景，以确认当前标准。" },
      { q: "是否提供奖学金机会？", a: "请向招生部门咨询目前是否有学费资助。资金支持、雇主赞助和Ausbildung机会均有各自的资格与选拔流程，不能保证获得。" },
      { q: "课程需要多长时间？", a: "课程时长因语言等级、课程内容和当前课表而异。请联系招生部门获取最新课程大纲和时间安排。" },
      { q: "是否提供实习或就业安置？", a: "本机构可能提供职业信息和准备指导。实习、工作机会、雇主合作以及移民结果必须针对每条具体路径单独确认，不能保证。" },
      { q: "我可以一边工作一边学习吗？", a: "学习方式和上课时间取决于课程及当前名额。请咨询面授、在线或灵活学习选项。" },
      { q: "提供哪些职业支持服务？", a: "本机构列出的支持领域包括简历准备、Bewerbung求职辅导、面试准备和发展路径指导。请确认目前提供的服务；签证决定由相关主管部门作出。" },
      { q: "课程是否获得国际认可？", a: "部分课程信息提及CEFR语言等级。CEFR是语言能力参考框架，并非颁证机构；证书认可情况取决于考试机构和具体资格。" }
    ] }
  }
};
