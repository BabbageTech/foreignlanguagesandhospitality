import type { Locale } from "./config";

/** Homepage hero, intake and closing CTA copy. Programme names and institutional claims are not altered. */
const copy = {
  en: {
    slides: [
      ["A Warm Welcome to Our Campus", "Students and staff at the school gate, reflecting unity, support, and a vibrant learning community."],
      ["Our Proud Students", "Meet our diverse student community, united by ambition and a commitment to learning."],
      ["Inspiring German Language Lessons", "A teacher guides students through interactive German lessons that bring culture and communication to life."],
      ["Dedicated Student Support", "Our reception team assists students with enquiries and provides guidance with care and professionalism."],
      ["Hospitality Excellence", "A vibrant hospitality meal presentation reflecting practical skills and attention to detail."],
      ["A Supportive Learning Environment", "Students take part in classroom learning that encourages knowledge-sharing and inclusion."],
      ["Future Chef in Training", "A culinary arts student in uniform, showing professionalism and enthusiasm for kitchen practice."],
      ["Collaborative Learning", "Students share ideas and work together to build communication and teamwork skills."]
    ],
    apply: "Apply Now", brochure: "Download Brochure", programs: "Explore Programmes",
    intakeTitle: "Explore Upcoming Intakes", intakeBody: "Get a glimpse of our vibrant learning community and programmes. Contact the admissions team to confirm available programme start dates.",
    videoFallback: "Your browser does not support the video tag.",
    ctaEyebrow: "Explore Your Next Step", ctaTitle: "Enrol Now and Transform Your Global Future", ctaBody: "Explore language, hospitality and career-preparation programmes. Contact the institute for current admissions and intake information.", enquire: "Make an Enquiry"
  },
  de: {
    slides: [
      ["Herzlich willkommen auf unserem Campus", "Studierende und Mitarbeitende am Schuleingang stehen für Gemeinschaft, Unterstützung und eine lebendige Lernumgebung."],
      ["Unsere engagierten Studierenden", "Lernen Sie unsere vielfältige Studierendengemeinschaft kennen, die durch Ehrgeiz und Lernbereitschaft verbunden ist."],
      ["Inspirierender Deutschunterricht", "Eine Lehrkraft begleitet Studierende durch interaktiven Deutschunterricht und vermittelt Sprache und Kultur."],
      ["Engagierte Unterstützung für Studierende", "Unser Empfangsteam beantwortet Fragen und bietet Unterstützung mit Sorgfalt und Professionalität."],
      ["Exzellenz im Gastgewerbe", "Eine ansprechend präsentierte Mahlzeit zeigt praktische Fähigkeiten und Liebe zum Detail."],
      ["Eine unterstützende Lernumgebung", "Studierende nehmen an Unterricht teil, der Wissensaustausch und Inklusion fördert."],
      ["Kochfachkraft in Ausbildung", "Ein Studierender der Kochkunst zeigt in Uniform Professionalität und Begeisterung für die Küchenpraxis."],
      ["Gemeinsam lernen", "Studierende tauschen Ideen aus und stärken ihre Kommunikations- und Teamfähigkeiten."]
    ],
    apply: "Jetzt bewerben", brochure: "Broschüre herunterladen", programs: "Studienangebote entdecken",
    intakeTitle: "Kommende Kursstarts entdecken", intakeBody: "Erhalten Sie einen Einblick in unsere lebendige Lerngemeinschaft und unsere Programme. Erfragen Sie beim Zulassungsteam die verfügbaren Starttermine.",
    videoFallback: "Ihr Browser unterstützt das Videoelement nicht.",
    ctaEyebrow: "Entdecken Sie Ihren nächsten Schritt", ctaTitle: "Starten Sie jetzt und gestalten Sie Ihre internationale Zukunft", ctaBody: "Entdecken Sie Sprach-, Hospitality- und Berufsvorbereitungsprogramme. Kontaktieren Sie das Institut für aktuelle Informationen zu Zulassung und Kursbeginn.", enquire: "Anfrage senden"
  },
  sw: {
    slides: [
      ["Karibu katika Kampasi Yetu", "Wanafunzi na wafanyakazi mlangoni mwa shule wanaonesha umoja, usaidizi na jumuiya hai ya kujifunza."],
      ["Wanafunzi Wetu Tunaowajivunia", "Kutana na jumuiya yetu ya wanafunzi yenye asili mbalimbali, inayounganishwa na bidii na kujitolea kujifunza."],
      ["Mafunzo ya Kijerumani Yanayohamasisha", "Mwalimu anawaongoza wanafunzi katika masomo shirikishi ya Kijerumani yanayounganisha lugha na utamaduni."],
      ["Usaidizi wa Wanafunzi kwa Kujitolea", "Timu yetu ya mapokezi huwasaidia wanafunzi kwa maswali na mwongozo kwa uangalifu na weledi."],
      ["Ubora katika Huduma za Ukarimu", "Uwasilishaji wa chakula unaoonesha ujuzi wa vitendo na umakini kwa maelezo."],
      ["Mazingira Rafiki ya Kujifunzia", "Wanafunzi hushiriki masomo yanayohimiza kubadilishana maarifa na ujumuishaji."],
      ["Mpishi wa Baadaye Katika Mafunzo", "Mwanafunzi wa sanaa ya upishi akiwa sare, akionesha weledi na shauku ya kazi ya jikoni."],
      ["Kujifunza kwa Ushirikiano", "Wanafunzi hubadilishana mawazo na kufanya kazi pamoja ili kuimarisha mawasiliano na ushirikiano."]
    ],
    apply: "Tuma Ombi Sasa", brochure: "Pakua Brosha", programs: "Chunguza Programu",
    intakeTitle: "Chunguza Vipindi Vijavyo vya Udahili", intakeBody: "Pata muhtasari wa jumuiya yetu hai ya kujifunza na programu zetu. Wasiliana na timu ya udahili kuthibitisha tarehe zinazopatikana za kuanza programu.",
    videoFallback: "Kivinjari chako hakitumii kipengele cha video.",
    ctaEyebrow: "Chunguza Hatua Yako Inayofuata", ctaTitle: "Jiunge Sasa na Ujenge Mustakabali Wako wa Kimataifa", ctaBody: "Chunguza programu za lugha, ukarimu na maandalizi ya taaluma. Wasiliana na taasisi kupata taarifa za sasa za udahili na kuanza masomo.", enquire: "Tuma Swali"
  },
  fr: {
    slides: [
      ["Bienvenue sur notre campus", "Les étudiants et le personnel à l’entrée illustrent l’unité, l’entraide et une communauté d’apprentissage dynamique."],
      ["Nos étudiants, notre fierté", "Découvrez notre communauté étudiante diverse, unie par l’ambition et le goût de l’apprentissage."],
      ["Des cours d’allemand inspirants", "Un enseignant accompagne les étudiants dans des cours interactifs qui donnent vie à la langue et à la culture."],
      ["Un accompagnement attentif des étudiants", "Notre équipe d’accueil répond aux demandes et guide les étudiants avec attention et professionnalisme."],
      ["L’excellence en hôtellerie", "Une présentation culinaire dynamique témoigne de compétences pratiques et du souci du détail."],
      ["Un environnement d’apprentissage bienveillant", "Les étudiants participent à des cours qui encouragent le partage des connaissances et l’inclusion."],
      ["Futur chef en formation", "Un étudiant en arts culinaires en uniforme fait preuve de professionnalisme et de passion pour la cuisine."],
      ["Apprendre ensemble", "Les étudiants échangent des idées et développent leurs compétences en communication et en équipe."]
    ],
    apply: "Postuler maintenant", brochure: "Télécharger la brochure", programs: "Découvrir les programmes",
    intakeTitle: "Découvrez les prochaines rentrées", intakeBody: "Découvrez notre communauté d’apprentissage et nos programmes. Contactez l’équipe des admissions pour confirmer les dates de début disponibles.",
    videoFallback: "Votre navigateur ne prend pas en charge la vidéo.",
    ctaEyebrow: "Explorez votre prochaine étape", ctaTitle: "Inscrivez-vous et construisez votre avenir international", ctaBody: "Découvrez nos programmes de langues, d’hôtellerie et de préparation professionnelle. Contactez l’institut pour connaître les admissions et dates de rentrée actuelles.", enquire: "Nous contacter"
  },
  es: {
    slides: [
      ["Te damos la bienvenida a nuestro campus", "Estudiantes y personal en la entrada reflejan unidad, apoyo y una comunidad de aprendizaje activa."],
      ["Nuestros estudiantes, nuestro orgullo", "Conoce a nuestra diversa comunidad estudiantil, unida por la ambición y el compromiso con el aprendizaje."],
      ["Clases de alemán inspiradoras", "Un docente guía a los estudiantes en clases interactivas que acercan la lengua y la cultura."],
      ["Apoyo dedicado al estudiante", "Nuestro equipo de recepción atiende consultas y ofrece orientación con atención y profesionalidad."],
      ["Excelencia en hostelería", "Una presentación gastronómica dinámica refleja habilidades prácticas y atención al detalle."],
      ["Un entorno de aprendizaje acogedor", "Los estudiantes participan en clases que fomentan el intercambio de conocimientos y la inclusión."],
      ["Futuro chef en formación", "Un estudiante de artes culinarias con uniforme demuestra profesionalidad y pasión por la cocina."],
      ["Aprendizaje colaborativo", "Los estudiantes comparten ideas y trabajan juntos para desarrollar la comunicación y el trabajo en equipo."]
    ],
    apply: "Solicitar admisión", brochure: "Descargar folleto", programs: "Explorar programas",
    intakeTitle: "Descubre las próximas convocatorias", intakeBody: "Conoce nuestra activa comunidad de aprendizaje y nuestros programas. Contacta con admisiones para confirmar las fechas de inicio disponibles.",
    videoFallback: "Tu navegador no admite la reproducción de vídeo.",
    ctaEyebrow: "Explora tu próximo paso", ctaTitle: "Inscríbete y transforma tu futuro internacional", ctaBody: "Explora programas de idiomas, hostelería y preparación profesional. Contacta con el instituto para obtener información actualizada sobre admisiones e inicios.", enquire: "Realizar una consulta"
  },
  nl: {
    slides: [
      ["Welkom op onze campus", "Studenten en medewerkers bij de schoolpoort staan voor verbondenheid, ondersteuning en een levendige leergemeenschap."],
      ["Onze trotse studenten", "Maak kennis met onze diverse studentengemeenschap, verbonden door ambitie en leergierigheid."],
      ["Inspirerende lessen Duits", "Een docent begeleidt studenten tijdens interactieve lessen waarin taal en cultuur tot leven komen."],
      ["Toegewijde studentbegeleiding", "Ons ontvangstteam beantwoordt vragen en begeleidt studenten met zorg en professionaliteit."],
      ["Uitmuntendheid in hospitality", "Een verzorgde maaltijdpresentatie weerspiegelt praktische vaardigheden en oog voor detail."],
      ["Een stimulerende leeromgeving", "Studenten nemen deel aan lessen die kennisdeling en inclusie bevorderen."],
      ["Toekomstige chef in opleiding", "Een student culinaire kunsten toont in uniform professionaliteit en passie voor keukenwerk."],
      ["Samen leren", "Studenten wisselen ideeën uit en versterken hun communicatie- en samenwerkingsvaardigheden."]
    ],
    apply: "Nu aanmelden", brochure: "Brochure downloaden", programs: "Opleidingen bekijken",
    intakeTitle: "Bekijk komende instroommomenten", intakeBody: "Krijg een indruk van onze levendige leergemeenschap en opleidingen. Neem contact op met de toelatingsafdeling om beschikbare startdata te bevestigen.",
    videoFallback: "Uw browser ondersteunt de videotag niet.",
    ctaEyebrow: "Ontdek uw volgende stap", ctaTitle: "Schrijf u in en geef uw internationale toekomst vorm", ctaBody: "Ontdek taal-, hospitality- en loopbaanvoorbereidingsprogramma’s. Neem contact op met het instituut voor actuele informatie over toelating en startdata.", enquire: "Een vraag stellen"
  },
  it: {
    slides: [
      ["Benvenuti nel nostro campus", "Studenti e personale all’ingresso della scuola rappresentano unità, sostegno e una comunità di apprendimento vivace."],
      ["I nostri studenti, il nostro orgoglio", "Scopri la nostra comunità studentesca, diversa e unita dall’ambizione e dalla voglia di imparare."],
      ["Lezioni di tedesco stimolanti", "Un insegnante guida gli studenti in lezioni interattive che avvicinano lingua e cultura."],
      ["Un supporto attento agli studenti", "Il nostro team di accoglienza risponde alle richieste e offre orientamento con cura e professionalità."],
      ["Eccellenza nell’ospitalità", "Una presentazione gastronomica vivace riflette competenze pratiche e attenzione ai dettagli."],
      ["Un ambiente di apprendimento accogliente", "Gli studenti partecipano a lezioni che promuovono la condivisione delle conoscenze e l’inclusione."],
      ["Futuro chef in formazione", "Uno studente di arti culinarie in uniforme dimostra professionalità e passione per la cucina."],
      ["Apprendimento collaborativo", "Gli studenti condividono idee e lavorano insieme per sviluppare comunicazione e collaborazione."]
    ],
    apply: "Candidati ora", brochure: "Scarica la brochure", programs: "Scopri i programmi",
    intakeTitle: "Scopri i prossimi periodi di ammissione", intakeBody: "Scopri la nostra vivace comunità di apprendimento e i nostri programmi. Contatta l’ufficio ammissioni per confermare le date di inizio disponibili.",
    videoFallback: "Il browser non supporta il tag video.",
    ctaEyebrow: "Scopri il tuo prossimo passo", ctaTitle: "Iscriviti e trasforma il tuo futuro internazionale", ctaBody: "Scopri i programmi di lingua, ospitalità e preparazione professionale. Contatta l’istituto per informazioni aggiornate su ammissioni e date di inizio.", enquire: "Richiedi informazioni"
  },
  zh: {
    slides: [
      ["欢迎来到我们的校园", "校门口的学生与教职员工展现了团结、互助和充满活力的学习社区。"],
      ["我们引以为傲的学生", "认识我们多元化的学生群体，他们怀着抱负并积极投入学习。"],
      ["启发思考的德语课程", "教师通过互动式德语课程引导学生，在课堂中呈现语言与文化的魅力。"],
      ["贴心的学生支持服务", "接待团队认真、专业地回应学生咨询并提供所需指引。"],
      ["卓越的酒店与餐饮服务", "丰富的餐饮展示体现了实践技能和对细节的关注。"],
      ["支持型学习环境", "学生参与课堂学习，在包容的氛围中交流知识。"],
      ["正在培养中的未来厨师", "烹饪艺术专业学生身着制服，展现专业精神和对厨房实践的热情。"],
      ["协作式学习", "学生分享想法、共同合作，培养沟通与团队协作能力。"]
    ],
    apply: "立即申请", brochure: "下载课程手册", programs: "浏览课程项目",
    intakeTitle: "了解即将开课的课程", intakeBody: "了解我们充满活力的学习社区和课程项目。请联系招生团队确认目前可选的开课日期。",
    videoFallback: "您的浏览器不支持视频播放。",
    ctaEyebrow: "探索下一步", ctaTitle: "立即报名，开启国际化未来", ctaBody: "了解语言、酒店管理和职业准备课程。请联系学院获取最新招生及开课信息。", enquire: "咨询详情"
  }
} satisfies Record<Locale, {
  slides: [string, string][]; apply: string; brochure: string; programs: string;
  intakeTitle: string; intakeBody: string; videoFallback: string;
  ctaEyebrow: string; ctaTitle: string; ctaBody: string; enquire: string;
}>;

export function getHomeCopy(locale: Locale) { return copy[locale] ?? copy.en; }
