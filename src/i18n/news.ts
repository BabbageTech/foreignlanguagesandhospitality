import type { Locale } from "./config";

export interface LocalizedNewsArticle { category: string; title: string; excerpt: string }
export interface LocalizedNewsVideo { title: string; subtitle: string }
export interface NewsCopy {
  title: string; description: string; heroEyebrow: string; heroLead: string; heroAccent: string; heroDescription: string;
  archiveLabel: string; archiveTitle: string; archiveText: string; archiveCta: string;
  mediaFeatures: string; videoHub: string; videoLibrary: string; videoArchiveNote: string;
  latestStory: string; featured: string; readTime: string; readFullStory: string; readMore: string;
  browseAll: string; chronicles: string; emptyResults: string; stayConnected: string; stayInformed: string; stayText: string; contact: string;
  officialPress: string; youtubeFeature: string; playVideo: string; categoryFilter: string; minuteLabel: string; categories: Record<string, string>;
  articles: Record<number, LocalizedNewsArticle>; videos: Record<string, LocalizedNewsVideo>;
}

const copy: Record<Locale, NewsCopy> = {
  en: {
    title: "News & Media | IIFLHM", description: "Read institute announcements and media features, and view published video coverage of IIFLHM.",
    heroEyebrow: "Official Press Channel · IIFLHM", heroLead: "The", heroAccent: "Journal.", heroDescription: "Media features, institute announcements and campus stories from the IIFLHM press channel.",
    archiveLabel: "Archived announcement", archiveTitle: "September 2026 Intake Announcement", archiveText: "This is an archived notice concerning the September 2026 academic cycle. For current admissions dates and programme availability, contact the institute directly.", archiveCta: "View admissions information",
    mediaFeatures: "Media Features", videoHub: "Video Hub", videoLibrary: "Video Library", videoArchiveNote: "This video archive includes previously published media features. Availability is determined by the original publisher.",
    latestStory: "Latest Story", featured: "Featured", readTime: "read", readFullStory: "Read Full Story", readMore: "Read More",
    browseAll: "Browse All", chronicles: "Institute Chronicles", emptyResults: "No stories are currently listed in this category.", stayConnected: "Stay Connected", stayInformed: "Stay Informed.", stayText: "For current programme announcements, admissions dates or media enquiries, contact the institute directly.", contact: "Contact the Institute", officialPress: "Official Press Channel · IIFLHM", youtubeFeature: "YouTube Feature", playVideo: "Play video", categoryFilter: "Filter news by category", minuteLabel: "min",
    categories: { "All News": "All News", Admissions: "Admissions", Programs: "Programs", International: "International", Partnerships: "Partnerships", Achievements: "Achievements" },
    articles: {
      1: { category: "International", title: "Founder Profiled in German Media: Buten un Binnen & Weser-Kurier", excerpt: "German regional media coverage features the institute’s work and its focus on language learning and preparation for international education and career pathways." },
      2: { category: "Partnerships", title: "KBC Channel 1 Feature: Empowering Youth through Foreign Languages", excerpt: "Kenya Broadcasting Corporation features foreign-language learning and career pathways discussed by the institute. Refer to the original broadcast for its full context." },
      3: { category: "International", title: "Weser-Kurier: IIFLHM’s Commitment to Integration", excerpt: "A Weser-Kurier editorial feature discusses the institute’s work around cultural and professional preparation for people exploring opportunities in Germany." },
      4: { category: "Admissions", title: "September 2026 Intake Announcement", excerpt: "An archived May 2026 announcement about the institute’s September 2026 academic cycle. Contact the institute for current admissions dates and programme availability." },
    },
    videos: { yBbdXdTv2mw: { title: "KBC Channel 1 Feature: Foreign Language Training", subtitle: "Kenya Broadcasting Corporation · May 2025" }, "1nfazv_p9zA": { title: "Narok County Government Recognition", subtitle: "County media coverage · 2025" } },
  },
  de: {
    title: "Nachrichten und Medien | IIFLHM", description: "Lesen Sie Mitteilungen des Instituts und Medienberichte und sehen Sie veröffentlichte Videobeiträge über IIFLHM.",
    heroEyebrow: "Offizieller Pressekanal · IIFLHM", heroLead: "Das", heroAccent: "Journal.", heroDescription: "Medienberichte, Mitteilungen des Instituts und Campusgeschichten aus dem Pressekanal des IIFLHM.",
    archiveLabel: "Archivierte Mitteilung", archiveTitle: "Ankündigung zum Studienbeginn im September 2026", archiveText: "Dies ist eine archivierte Mitteilung zum Studienzyklus September 2026. Aktuelle Bewerbungsfristen und Programmverfügbarkeiten erfragen Sie bitte direkt beim Institut.", archiveCta: "Informationen zur Aufnahme",
    mediaFeatures: "Medienberichte", videoHub: "Videobereich", videoLibrary: "Videosammlung", videoArchiveNote: "Dieses Videoarchiv enthält zuvor veröffentlichte Medienbeiträge. Die Verfügbarkeit wird vom ursprünglichen Herausgeber bestimmt.",
    latestStory: "Neueste Geschichte", featured: "Im Fokus", readTime: "Lesezeit", readFullStory: "Ganzen Beitrag lesen", readMore: "Mehr lesen",
    browseAll: "Alle ansehen", chronicles: "Neuigkeiten des Instituts", emptyResults: "In dieser Kategorie sind derzeit keine Beiträge aufgeführt.", stayConnected: "In Kontakt bleiben", stayInformed: "Informiert bleiben.", stayText: "Bei Fragen zu aktuellen Programmen, Aufnahmeterminen oder Medienanfragen wenden Sie sich bitte direkt an das Institut.", contact: "Institut kontaktieren", officialPress: "Offizieller Pressekanal · IIFLHM", youtubeFeature: "YouTube-Beitrag", playVideo: "Video abspielen", categoryFilter: "Nachrichten nach Kategorie filtern", minuteLabel: "Min.",
    categories: { "All News": "Alle Nachrichten", Admissions: "Aufnahme", Programs: "Programme", International: "International", Partnerships: "Partnerschaften", Achievements: "Erfolge" },
    articles: {
      1: { category: "International", title: "Gründerin in deutschen Medien: Buten un Binnen und Weser-Kurier", excerpt: "Deutsche Regionalmedien berichten über die Arbeit des Instituts und seinen Schwerpunkt auf Sprachlernen sowie Vorbereitung auf internationale Bildungs- und Berufswege." },
      2: { category: "Partnerships", title: "Beitrag auf KBC Channel 1: Junge Menschen durch Fremdsprachen stärken", excerpt: "Die Kenya Broadcasting Corporation berichtet über Fremdsprachenlernen und berufliche Wege, die vom Institut vorgestellt werden. Den vollständigen Kontext finden Sie in der Originalsendung." },
      3: { category: "International", title: "Weser-Kurier: Engagement des IIFLHM für Integration", excerpt: "Ein redaktioneller Beitrag des Weser-Kurier behandelt die Arbeit des Instituts zur kulturellen und beruflichen Vorbereitung von Menschen, die Möglichkeiten in Deutschland erkunden." },
      4: { category: "Admissions", title: "Ankündigung zum Studienbeginn im September 2026", excerpt: "Archivierte Ankündigung vom Mai 2026 zum Studienzyklus September 2026. Aktuelle Aufnahmefristen und Programmverfügbarkeit bitte direkt beim Institut erfragen." },
    },
    videos: { yBbdXdTv2mw: { title: "KBC Channel 1: Fremdsprachenausbildung", subtitle: "Kenya Broadcasting Corporation · Mai 2025" }, "1nfazv_p9zA": { title: "Anerkennung durch die Bezirksverwaltung Narok", subtitle: "Berichterstattung regionaler Medien · 2025" } },
  },
  sw: {
    title: "Habari na Vyombo vya Habari | IIFLHM", description: "Soma matangazo ya taasisi na habari za vyombo vya habari, na utazame video zilizochapishwa kuhusu IIFLHM.",
    heroEyebrow: "Kituo Rasmi cha Habari · IIFLHM", heroLead: "Jarida", heroAccent: "la Taasisi.", heroDescription: "Habari za vyombo vya habari, matangazo ya taasisi na simulizi za chuoni kutoka kituo cha habari cha IIFLHM.",
    archiveLabel: "Tangazo la zamani", archiveTitle: "Tangazo la Udahili wa Septemba 2026", archiveText: "Hili ni tangazo la kumbukumbu kuhusu muhula wa Septemba 2026. Kwa tarehe za sasa za udahili na upatikanaji wa programu, wasiliana na taasisi moja kwa moja.", archiveCta: "Tazama taarifa za udahili",
    mediaFeatures: "Habari za Vyombo vya Habari", videoHub: "Maktaba ya Video", videoLibrary: "Video Zilizochapishwa", videoArchiveNote: "Mkusanyiko huu una video zilizochapishwa awali. Upatikanaji wake huamuliwa na mchapishaji wa awali.",
    latestStory: "Habari ya Hivi Karibuni", featured: "Iliyoangaziwa", readTime: "kusoma", readFullStory: "Soma Habari Kamili", readMore: "Soma Zaidi",
    browseAll: "Tazama Zote", chronicles: "Habari za Taasisi", emptyResults: "Hakuna habari zilizoorodheshwa kwa aina hii kwa sasa.", stayConnected: "Endelea Kuwasiliana", stayInformed: "Endelea Kupata Taarifa.", stayText: "Kwa matangazo ya sasa ya programu, tarehe za udahili au maswali ya vyombo vya habari, wasiliana na taasisi moja kwa moja.", contact: "Wasiliana na Taasisi", officialPress: "Kituo Rasmi cha Habari · IIFLHM", youtubeFeature: "Habari ya YouTube", playVideo: "Cheza video", categoryFilter: "Chuja habari kulingana na aina", minuteLabel: "dakika",
    categories: { "All News": "Habari Zote", Admissions: "Udahili", Programs: "Programu", International: "Kimataifa", Partnerships: "Ushirikiano", Achievements: "Mafanikio" },
    articles: {
      1: { category: "International", title: "Mwanzilishi Aangaziwa na Vyombo vya Habari vya Ujerumani: Buten un Binnen na Weser-Kurier", excerpt: "Vyombo vya habari vya kikanda nchini Ujerumani vinaangazia kazi ya taasisi na msisitizo wake katika kujifunza lugha na maandalizi ya fursa za elimu na taaluma za kimataifa." },
      2: { category: "Partnerships", title: "Habari ya KBC Channel 1: Kuwawezesha Vijana kupitia Lugha za Kigeni", excerpt: "Shirika la Utangazaji la Kenya linaangazia kujifunza lugha za kigeni na njia za taaluma zinazojadiliwa na taasisi. Tazama matangazo ya awali kwa muktadha kamili." },
      3: { category: "International", title: "Weser-Kurier: Kujitolea kwa IIFLHM katika Ujumuishaji", excerpt: "Makala ya Weser-Kurier inajadili kazi ya taasisi kuhusu maandalizi ya kitamaduni na kitaaluma kwa watu wanaochunguza fursa nchini Ujerumani." },
      4: { category: "Admissions", title: "Tangazo la Udahili wa Septemba 2026", excerpt: "Tangazo la kumbukumbu la Mei 2026 kuhusu muhula wa Septemba 2026. Wasiliana na taasisi kwa tarehe za sasa za udahili na upatikanaji wa programu." },
    },
    videos: { yBbdXdTv2mw: { title: "KBC Channel 1: Mafunzo ya Lugha za Kigeni", subtitle: "Kenya Broadcasting Corporation · Mei 2025" }, "1nfazv_p9zA": { title: "Kutambuliwa na Serikali ya Kaunti ya Narok", subtitle: "Habari za vyombo vya habari vya kaunti · 2025" } },
  },
  fr: {
    title: "Actualités et médias | IIFLHM", description: "Consultez les annonces de l’institut et les articles de presse, et regardez les vidéos publiées au sujet de l’IIFLHM.",
    heroEyebrow: "Canal de presse officiel · IIFLHM", heroLead: "Le", heroAccent: "Journal.", heroDescription: "Articles de presse, annonces de l’institut et récits du campus issus du canal de presse de l’IIFLHM.",
    archiveLabel: "Annonce archivée", archiveTitle: "Annonce de rentrée de septembre 2026", archiveText: "Cette annonce archivée concerne le cycle universitaire de septembre 2026. Pour connaître les dates d’admission et les programmes actuellement disponibles, contactez directement l’institut.", archiveCta: "Consulter les admissions",
    mediaFeatures: "Articles et reportages", videoHub: "Espace vidéo", videoLibrary: "Bibliothèque vidéo", videoArchiveNote: "Cette archive rassemble des reportages vidéo déjà publiés. Leur disponibilité dépend de leur éditeur d’origine.",
    latestStory: "Dernière actualité", featured: "À la une", readTime: "de lecture", readFullStory: "Lire l’article complet", readMore: "En savoir plus",
    browseAll: "Tout parcourir", chronicles: "Actualités de l’institut", emptyResults: "Aucun article n’est actuellement répertorié dans cette catégorie.", stayConnected: "Restez en contact", stayInformed: "Restez informé.", stayText: "Pour les annonces de programmes, les dates d’admission ou les demandes des médias, contactez directement l’institut.", contact: "Contacter l’institut", officialPress: "Canal de presse officiel · IIFLHM", youtubeFeature: "Reportage YouTube", playVideo: "Lire la vidéo", categoryFilter: "Filtrer les actualités par catégorie", minuteLabel: "min",
    categories: { "All News": "Toutes les actualités", Admissions: "Admissions", Programs: "Programmes", International: "International", Partnerships: "Partenariats", Achievements: "Réalisations" },
    articles: {
      1: { category: "International", title: "La fondatrice dans les médias allemands : Buten un Binnen et Weser-Kurier", excerpt: "Des médias régionaux allemands présentent le travail de l’institut et son intérêt pour l’apprentissage des langues et la préparation aux parcours d’études et de carrière à l’international." },
      2: { category: "Partnerships", title: "Reportage KBC Channel 1 : donner des moyens aux jeunes grâce aux langues étrangères", excerpt: "La Kenya Broadcasting Corporation présente l’apprentissage des langues étrangères et les parcours professionnels évoqués par l’institut. Consultez la diffusion originale pour son contexte complet." },
      3: { category: "International", title: "Weser-Kurier : l’engagement de l’IIFLHM en faveur de l’intégration", excerpt: "Un article du Weser-Kurier évoque le travail de l’institut autour de la préparation culturelle et professionnelle des personnes qui envisagent des possibilités en Allemagne." },
      4: { category: "Admissions", title: "Annonce de rentrée de septembre 2026", excerpt: "Annonce archivée de mai 2026 concernant le cycle de septembre 2026. Contactez l’institut pour connaître les dates d’admission et les programmes actuellement disponibles." },
    },
    videos: { yBbdXdTv2mw: { title: "KBC Channel 1 : formation aux langues étrangères", subtitle: "Kenya Broadcasting Corporation · mai 2025" }, "1nfazv_p9zA": { title: "Reconnaissance par le gouvernement du comté de Narok", subtitle: "Couverture médiatique du comté · 2025" } },
  },
  es: {
    title: "Noticias y medios | IIFLHM", description: "Consulte los anuncios del instituto y las noticias en medios, y vea los vídeos publicados sobre IIFLHM.",
    heroEyebrow: "Canal de prensa oficial · IIFLHM", heroLead: "El", heroAccent: "Diario.", heroDescription: "Reportajes, anuncios del instituto e historias del campus del canal de prensa de IIFLHM.",
    archiveLabel: "Anuncio archivado", archiveTitle: "Anuncio de ingreso de septiembre de 2026", archiveText: "Este es un aviso archivado relativo al ciclo académico de septiembre de 2026. Para conocer las fechas de admisión y la disponibilidad actual de programas, contacte directamente con el instituto.", archiveCta: "Consultar información de admisiones",
    mediaFeatures: "Reportajes en medios", videoHub: "Centro de vídeos", videoLibrary: "Biblioteca de vídeos", videoArchiveNote: "Este archivo contiene reportajes de vídeo publicados anteriormente. Su disponibilidad depende del editor original.",
    latestStory: "Última noticia", featured: "Destacado", readTime: "de lectura", readFullStory: "Leer la noticia completa", readMore: "Leer más",
    browseAll: "Ver todo", chronicles: "Crónicas del instituto", emptyResults: "Actualmente no hay noticias en esta categoría.", stayConnected: "Manténgase en contacto", stayInformed: "Manténgase informado.", stayText: "Para anuncios actuales de programas, fechas de admisión o consultas de medios, contacte directamente con el instituto.", contact: "Contactar con el instituto", officialPress: "Canal de prensa oficial · IIFLHM", youtubeFeature: "Reportaje de YouTube", playVideo: "Reproducir vídeo", categoryFilter: "Filtrar noticias por categoría", minuteLabel: "min",
    categories: { "All News": "Todas las noticias", Admissions: "Admisiones", Programs: "Programas", International: "Internacional", Partnerships: "Colaboraciones", Achievements: "Logros" },
    articles: {
      1: { category: "International", title: "La fundadora aparece en medios alemanes: Buten un Binnen y Weser-Kurier", excerpt: "Medios regionales alemanes presentan el trabajo del instituto y su enfoque en el aprendizaje de idiomas y la preparación para oportunidades educativas y profesionales internacionales." },
      2: { category: "Partnerships", title: "Reportaje de KBC Channel 1: impulsar a los jóvenes mediante idiomas extranjeros", excerpt: "Kenya Broadcasting Corporation presenta el aprendizaje de idiomas extranjeros y las vías profesionales comentadas por el instituto. Consulte la emisión original para conocer todo el contexto." },
      3: { category: "International", title: "Weser-Kurier: el compromiso de IIFLHM con la integración", excerpt: "Un artículo editorial de Weser-Kurier aborda el trabajo del instituto en la preparación cultural y profesional de personas que exploran oportunidades en Alemania." },
      4: { category: "Admissions", title: "Anuncio de ingreso de septiembre de 2026", excerpt: "Anuncio archivado de mayo de 2026 sobre el ciclo académico de septiembre de 2026. Contacte con el instituto para conocer las fechas y la disponibilidad actuales." },
    },
    videos: { yBbdXdTv2mw: { title: "KBC Channel 1: formación en idiomas extranjeros", subtitle: "Kenya Broadcasting Corporation · mayo de 2025" }, "1nfazv_p9zA": { title: "Reconocimiento del Gobierno del Condado de Narok", subtitle: "Cobertura de medios del condado · 2025" } },
  },
  nl: {
    title: "Nieuws en media | IIFLHM", description: "Lees aankondigingen van het instituut en mediaberichten en bekijk gepubliceerde videoverslagen over IIFLHM.",
    heroEyebrow: "Officieel perskanaal · IIFLHM", heroLead: "Het", heroAccent: "Journaal.", heroDescription: "Mediaberichten, aankondigingen van het instituut en campusverhalen via het perskanaal van IIFLHM.",
    archiveLabel: "Gearchiveerde aankondiging", archiveTitle: "Aankondiging instroom september 2026", archiveText: "Dit is een gearchiveerde mededeling over de academische cyclus van september 2026. Neem rechtstreeks contact op met het instituut voor actuele toelatingsdata en programma-aanbod.", archiveCta: "Toelatingsinformatie bekijken",
    mediaFeatures: "Media-aandacht", videoHub: "Videohub", videoLibrary: "Videobibliotheek", videoArchiveNote: "Dit videoarchief bevat eerder gepubliceerde mediabijdragen. De beschikbaarheid wordt bepaald door de oorspronkelijke uitgever.",
    latestStory: "Laatste verhaal", featured: "Uitgelicht", readTime: "leestijd", readFullStory: "Volledig artikel lezen", readMore: "Meer lezen",
    browseAll: "Alles bekijken", chronicles: "Nieuws uit het instituut", emptyResults: "Er staan momenteel geen berichten in deze categorie.", stayConnected: "Blijf verbonden", stayInformed: "Blijf op de hoogte.", stayText: "Neem rechtstreeks contact op met het instituut voor actuele programma-aankondigingen, toelatingsdata of mediavragen.", contact: "Contact opnemen", officialPress: "Officieel perskanaal · IIFLHM", youtubeFeature: "YouTube-reportage", playVideo: "Video afspelen", categoryFilter: "Nieuws filteren op categorie", minuteLabel: "min",
    categories: { "All News": "Al het nieuws", Admissions: "Toelating", Programs: "Programma’s", International: "Internationaal", Partnerships: "Partnerschappen", Achievements: "Prestaties" },
    articles: {
      1: { category: "International", title: "Oprichter in Duitse media: Buten un Binnen en Weser-Kurier", excerpt: "Duitse regionale media belichten het werk van het instituut en de aandacht voor taalleren en voorbereiding op internationale onderwijs- en loopbaantrajecten." },
      2: { category: "Partnerships", title: "KBC Channel 1-reportage: jongeren versterken met vreemde talen", excerpt: "Kenya Broadcasting Corporation besteedt aandacht aan het leren van vreemde talen en loopbaanroutes die door het instituut worden besproken. Bekijk de oorspronkelijke uitzending voor de volledige context." },
      3: { category: "International", title: "Weser-Kurier: inzet van IIFLHM voor integratie", excerpt: "Een redactioneel artikel van Weser-Kurier bespreekt de inzet van het instituut voor culturele en professionele voorbereiding van mensen die mogelijkheden in Duitsland verkennen." },
      4: { category: "Admissions", title: "Aankondiging instroom september 2026", excerpt: "Gearchiveerde aankondiging uit mei 2026 over de academische cyclus van september 2026. Neem contact op met het instituut voor actuele toelatingsdata en programma-aanbod." },
    },
    videos: { yBbdXdTv2mw: { title: "KBC Channel 1: vreemde-talenonderwijs", subtitle: "Kenya Broadcasting Corporation · mei 2025" }, "1nfazv_p9zA": { title: "Erkenning door de County Government van Narok", subtitle: "Verslaggeving door lokale media · 2025" } },
  },
  it: {
    title: "Notizie e media | IIFLHM", description: "Leggi gli annunci dell’istituto e gli articoli dei media, e guarda i video pubblicati su IIFLHM.",
    heroEyebrow: "Canale stampa ufficiale · IIFLHM", heroLead: "Il", heroAccent: "Giornale.", heroDescription: "Servizi dei media, annunci dell’istituto e storie del campus dal canale stampa di IIFLHM.",
    archiveLabel: "Annuncio archiviato", archiveTitle: "Annuncio di ammissione per settembre 2026", archiveText: "Questo è un avviso archiviato relativo al ciclo accademico di settembre 2026. Per conoscere le date di ammissione e la disponibilità attuale dei programmi, contatta direttamente l’istituto.", archiveCta: "Consulta le informazioni sulle ammissioni",
    mediaFeatures: "Servizi dei media", videoHub: "Area video", videoLibrary: "Raccolta video", videoArchiveNote: "Questo archivio contiene servizi video pubblicati in precedenza. La disponibilità dipende dall’editore originale.",
    latestStory: "Ultima notizia", featured: "In evidenza", readTime: "di lettura", readFullStory: "Leggi la notizia completa", readMore: "Leggi altro",
    browseAll: "Sfoglia tutto", chronicles: "Cronache dell’istituto", emptyResults: "Al momento non sono presenti notizie in questa categoria.", stayConnected: "Resta in contatto", stayInformed: "Resta informato.", stayText: "Per annunci aggiornati sui programmi, date di ammissione o richieste dei media, contatta direttamente l’istituto.", contact: "Contatta l’istituto", officialPress: "Canale stampa ufficiale · IIFLHM", youtubeFeature: "Servizio YouTube", playVideo: "Riproduci video", categoryFilter: "Filtra le notizie per categoria", minuteLabel: "min",
    categories: { "All News": "Tutte le notizie", Admissions: "Ammissioni", Programs: "Programmi", International: "Internazionale", Partnerships: "Collaborazioni", Achievements: "Risultati" },
    articles: {
      1: { category: "International", title: "La fondatrice sui media tedeschi: Buten un Binnen e Weser-Kurier", excerpt: "I media regionali tedeschi raccontano il lavoro dell’istituto e l’attenzione all’apprendimento delle lingue e alla preparazione per percorsi formativi e professionali internazionali." },
      2: { category: "Partnerships", title: "Servizio KBC Channel 1: dare opportunità ai giovani attraverso le lingue straniere", excerpt: "La Kenya Broadcasting Corporation presenta l’apprendimento delle lingue straniere e i percorsi professionali discussi dall’istituto. Consulta la trasmissione originale per il contesto completo." },
      3: { category: "International", title: "Weser-Kurier: l’impegno di IIFLHM per l’integrazione", excerpt: "Un articolo del Weser-Kurier tratta il lavoro dell’istituto nella preparazione culturale e professionale di chi esplora opportunità in Germania." },
      4: { category: "Admissions", title: "Annuncio di ammissione per settembre 2026", excerpt: "Annuncio archiviato di maggio 2026 relativo al ciclo accademico di settembre 2026. Contatta l’istituto per le date e la disponibilità attuali." },
    },
    videos: { yBbdXdTv2mw: { title: "KBC Channel 1: formazione nelle lingue straniere", subtitle: "Kenya Broadcasting Corporation · maggio 2025" }, "1nfazv_p9zA": { title: "Riconoscimento del Governo della Contea di Narok", subtitle: "Copertura dei media della contea · 2025" } },
  },
  zh: {
    title: "新闻与媒体 | IIFLHM", description: "阅读学院公告和媒体报道，并观看已发布的 IIFLHM 相关视频内容。",
    heroEyebrow: "官方新闻频道 · IIFLHM", heroLead: "学院", heroAccent: "新闻。", heroDescription: "来自 IIFLHM 新闻频道的媒体报道、学院公告和校园故事。",
    archiveLabel: "历史公告", archiveTitle: "2026 年 9 月入学公告", archiveText: "这是一则关于 2026 年 9 月学年安排的历史公告。有关当前招生日期和课程名额，请直接联系学院确认。", archiveCta: "查看招生信息",
    mediaFeatures: "媒体报道", videoHub: "视频中心", videoLibrary: "视频资料库", videoArchiveNote: "此视频资料库收录了此前发布的媒体内容。视频是否可观看由原发布方决定。",
    latestStory: "最新报道", featured: "精选内容", readTime: "阅读时间", readFullStory: "阅读完整报道", readMore: "阅读更多",
    browseAll: "浏览全部", chronicles: "学院动态", emptyResults: "此类别目前没有列出的报道。", stayConnected: "保持联系", stayInformed: "获取最新信息。", stayText: "如需了解最新课程公告、招生日期或媒体咨询，请直接联系学院。", contact: "联系学院", officialPress: "官方新闻频道 · IIFLHM", youtubeFeature: "YouTube 视频报道", playVideo: "播放视频", categoryFilter: "按类别筛选新闻", minuteLabel: "分钟",
    categories: { "All News": "全部新闻", Admissions: "招生", Programs: "课程", International: "国际", Partnerships: "合作", Achievements: "成就" },
    articles: {
      1: { category: "International", title: "创办人获德国媒体 Buten un Binnen 与 Weser-Kurier 报道", excerpt: "德国地区媒体介绍了学院的工作，重点涉及语言学习，以及为探索国际教育和职业发展途径的学习者提供准备。" },
      2: { category: "Partnerships", title: "KBC Channel 1 专题：通过外语学习助力青年发展", excerpt: "肯尼亚广播公司报道了外语学习及学院讨论的职业发展途径。完整背景请参阅原始节目。" },
      3: { category: "International", title: "Weser-Kurier：IIFLHM 对融入发展的关注", excerpt: "Weser-Kurier 的专题文章讨论了学院为探索德国机会的人士提供文化和职业准备方面的工作。" },
      4: { category: "Admissions", title: "2026 年 9 月入学公告", excerpt: "2026 年 5 月发布的历史公告，涉及 2026 年 9 月学年安排。当前招生日期和课程名额请联系学院确认。" },
    },
    videos: { yBbdXdTv2mw: { title: "KBC Channel 1：外语培训专题", subtitle: "肯尼亚广播公司 · 2025 年 5 月" }, "1nfazv_p9zA": { title: "纳罗克郡政府认可报道", subtitle: "郡级媒体报道 · 2025 年" } },
  },
};

export function getNewsCopy(locale: Locale): NewsCopy {
  return copy[locale];
}
