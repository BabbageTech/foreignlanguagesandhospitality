import type { Locale } from "./config";

export interface StudentVoiceItem { role: string; location: string; quote: string }
export interface StudentVoicesCopy {
  title: string; description: string; eyebrow: string; heroLead: string; heroAccent: string; heroText: string;
  facilities: string; chefSpotlight: string; studentStories: string; quoteStories: string; journeyTitle: string; apply: string;
  videoClose: string; videoDialogTitle: string; playVideo: string; experienceNote: string; testimonials: Record<number, StudentVoiceItem>;
}

const copy: Record<Locale, StudentVoicesCopy> = {
  en: {
    title: "Student Voices | IIFLHM", description: "Read student and alumni experiences shared with IIFLHM, and view the available video stories.",
    eyebrow: "Student and Alumni Experiences", heroLead: "Our", heroAccent: "Stories.", heroText: "Personal accounts from learners and alumni describing their experiences — from Narok to Germany and from classrooms to professional workplaces.",
    facilities: "Inside Our Facilities", chefSpotlight: "Chef Spotlight", studentStories: "Video Stories", quoteStories: "More Student Voices", journeyTitle: "Explore Your Next Step", apply: "View Admissions Information", videoClose: "Close video", videoDialogTitle: "Student video", playVideo: "Play video", experienceNote: "These are individual experiences shared by students and alumni. They do not guarantee admission, qualification recognition, visa approval or employment. Requirements and outcomes vary by institution, employer and individual circumstances.",
    testimonials: {
      1: { role: "Undergraduate Student", location: "Flensburg University, Germany", quote: "Studying in Germany has been a life-changing experience. The comprehensive language training and cultural immersion through IIFLHM broadened my global outlook and communication skills immensely. I arrived in Germany confident — because I was prepared." },
      2: { role: "Student Studying in Germany", location: "Germany", quote: "Studying in Germany has been an incredible journey. I strongly encourage others to learn languages through IIFLHM — it helped me adapt, communicate, and thrive in a completely new environment." },
      3: { role: "Professional Chef", location: "Germany", quote: "Coming from Kenya to Germany, my journey has been truly life-changing. IIFLHM gave me the language skills and hospitality training that opened doors to work abroad. I'm now working in Germany as a chef, and I strongly urge others to take this opportunity — it can transform your future." },
      4: { role: "Nursing Ausbildung", location: "Berlin, Germany", quote: "If you want to be a nurse in Germany, you must at least have attained B1 level. I came through IIFLHM and that training made all the difference. The teachers were patient and the programme was thorough." },
      5: { role: "Social Work", location: "Flensburg University", quote: "Learning German at B1 or B2 level made my Anerkennung process much smoother. The institute played a key role in my journey and I am grateful for every lesson." },
      6: { role: "Dairy Farm Ausbildung", location: "Lilienthal, Germany", quote: "Learning the German language will help you connect and find your way to Germany. I came through this institute from Narok South. If I can do it, you can do it." },
    },
  },
  de: {
    title: "Stimmen von Studierenden | IIFLHM", description: "Lesen Sie Erfahrungen von Studierenden und Alumni, die sie mit IIFLHM geteilt haben, und sehen Sie verfügbare Videobeiträge.",
    eyebrow: "Erfahrungen von Studierenden und Alumni", heroLead: "Unsere", heroAccent: "Geschichten.", heroText: "Persönliche Berichte von Lernenden und Alumni über ihre Erfahrungen – von Narok bis Deutschland und vom Unterricht bis zum Berufsleben.",
    facilities: "Einblicke in unsere Einrichtungen", chefSpotlight: "Koch im Porträt", studentStories: "Videogeschichten", quoteStories: "Weitere Stimmen von Studierenden", journeyTitle: "Entdecken Sie Ihren nächsten Schritt", apply: "Informationen zur Aufnahme", videoClose: "Video schließen", videoDialogTitle: "Studentenvideo", playVideo: "Video abspielen", experienceNote: "Dies sind persönliche Erfahrungen von Studierenden und Alumni. Sie garantieren weder Zulassung noch Anerkennung von Qualifikationen, Visa oder Beschäftigung. Voraussetzungen und Ergebnisse unterscheiden sich je nach Institution, Arbeitgeber und persönlicher Situation.",
    testimonials: {
      1: { role: "Bachelorstudentin", location: "Universität Flensburg, Deutschland", quote: "Das Studium in Deutschland war eine lebensverändernde Erfahrung. Der umfassende Sprachunterricht und das Eintauchen in die Kultur durch IIFLHM haben meinen globalen Horizont und meine Kommunikationsfähigkeiten erheblich erweitert. Ich kam selbstbewusst in Deutschland an, weil ich vorbereitet war." },
      2: { role: "Studierender in Deutschland", location: "Deutschland", quote: "Das Studium in Deutschland ist eine großartige Reise. Ich empfehle anderen ausdrücklich, über IIFLHM Sprachen zu lernen – es hat mir geholfen, mich anzupassen, zu kommunizieren und in einer völlig neuen Umgebung zurechtzufinden." },
      3: { role: "Beruflicher Koch", location: "Deutschland", quote: "Meine Reise von Kenia nach Deutschland hat mein Leben wirklich verändert. IIFLHM hat mir Sprachkenntnisse und eine Ausbildung im Hospitality-Bereich vermittelt, die mir Wege zur Arbeit im Ausland eröffnet haben. Heute arbeite ich in Deutschland als Koch und ermutige andere, diese Möglichkeit zu erkunden – sie kann die Zukunft verändern." },
      4: { role: "Pflegeausbildung", location: "Berlin, Deutschland", quote: "Wer in Deutschland in der Pflege arbeiten möchte, muss mindestens das Niveau B1 erreicht haben. Ich kam über IIFLHM, und diese Ausbildung hat einen großen Unterschied gemacht. Die Lehrkräfte waren geduldig und das Programm war gründlich." },
      5: { role: "Soziale Arbeit", location: "Universität Flensburg", quote: "Deutschkenntnisse auf B1- oder B2-Niveau haben meinen Anerkennungsprozess deutlich erleichtert. Das Institut spielte eine wichtige Rolle auf meinem Weg, und ich bin für jede Unterrichtsstunde dankbar." },
      6: { role: "Ausbildung in der Milchwirtschaft", location: "Lilienthal, Deutschland", quote: "Deutsch zu lernen hilft dabei, Kontakte zu knüpfen und den eigenen Weg nach Deutschland zu finden. Ich kam aus Narok South über dieses Institut. Wenn ich es schaffen konnte, kannst du es auch schaffen." },
    },
  },
  sw: {
    title: "Sauti za Wanafunzi | IIFLHM", description: "Soma uzoefu wa wanafunzi na wahitimu walioutoa kwa IIFLHM, na utazame simulizi za video zilizopo.",
    eyebrow: "Uzoefu wa Wanafunzi na Wahitimu", heroLead: "Simulizi", heroAccent: "Zetu.", heroText: "Maelezo binafsi kutoka kwa wanafunzi na wahitimu kuhusu uzoefu wao — kutoka Narok hadi Ujerumani na kutoka darasani hadi maeneo ya kazi.",
    facilities: "Ndani ya Vifaa Vyetu", chefSpotlight: "Makala Maalumu ya Mpishi", studentStories: "Simulizi za Video", quoteStories: "Sauti Nyingine za Wanafunzi", journeyTitle: "Chunguza Hatua Yako Inayofuata", apply: "Tazama Taarifa za Udahili", videoClose: "Funga video", videoDialogTitle: "Video ya mwanafunzi", playVideo: "Cheza video", experienceNote: "Huu ni uzoefu binafsi ulioshirikiwa na wanafunzi na wahitimu. Hauhakikishi udahili, utambuzi wa sifa, kupewa visa au ajira. Vigezo na matokeo hutofautiana kulingana na taasisi, mwajiri na hali ya mtu binafsi.",
    testimonials: {
      1: { role: "Mwanafunzi wa Shahada ya Kwanza", location: "Chuo Kikuu cha Flensburg, Ujerumani", quote: "Kusoma nchini Ujerumani kumekuwa uzoefu uliobadilisha maisha yangu. Mafunzo ya kina ya lugha na kujifunza utamaduni kupitia IIFLHM kulipanua sana mtazamo wangu wa kimataifa na ujuzi wa mawasiliano. Nilifika Ujerumani nikiwa na ujasiri kwa sababu nilikuwa nimejiandaa." },
      2: { role: "Mwanafunzi Anayesoma Ujerumani", location: "Ujerumani", quote: "Kusoma nchini Ujerumani kumekuwa safari ya kipekee. Ninawahimiza wengine wajifunze lugha kupitia IIFLHM — ilinisaidia kuzoea, kuwasiliana na kufanikiwa katika mazingira mapya kabisa." },
      3: { role: "Mpishi Mtaalamu", location: "Ujerumani", quote: "Safari yangu kutoka Kenya hadi Ujerumani imebadilisha maisha yangu. IIFLHM ilinipa ujuzi wa lugha na mafunzo ya ukarimu yaliyonifungulia milango ya kufanya kazi nje ya nchi. Sasa ninafanya kazi Ujerumani kama mpishi, na ninawahimiza wengine kuchunguza fursa hii — inaweza kubadilisha maisha yako ya baadaye." },
      4: { role: "Mafunzo ya Uuguzi (Ausbildung)", location: "Berlin, Ujerumani", quote: "Ukitaka kuwa muuguzi nchini Ujerumani, unapaswa kuwa umefikia angalau kiwango cha B1. Nilipitia IIFLHM na mafunzo hayo yalifanya tofauti kubwa. Walimu walikuwa wavumilivu na programu ilikuwa ya kina." },
      5: { role: "Kazi za Jamii", location: "Chuo Kikuu cha Flensburg", quote: "Kujifunza Kijerumani hadi kiwango cha B1 au B2 kulifanya mchakato wangu wa Anerkennung kuwa rahisi zaidi. Taasisi ilikuwa na nafasi muhimu katika safari yangu na ninashukuru kwa kila somo." },
      6: { role: "Mafunzo ya Ufundi wa Ufugaji wa Maziwa", location: "Lilienthal, Ujerumani", quote: "Kujifunza Kijerumani kutakusaidia kuwasiliana na kupata njia yako ya kwenda Ujerumani. Nilipitia taasisi hii kutoka Narok Kusini. Kama niliweza, nawe unaweza." },
    },
  },
  fr: {
    title: "Témoignages d’étudiants | IIFLHM", description: "Découvrez les expériences d’étudiants et d’anciens étudiants partagées avec l’IIFLHM, ainsi que les témoignages vidéo disponibles.",
    eyebrow: "Expériences des étudiants et anciens étudiants", heroLead: "Nos", heroAccent: "histoires.", heroText: "Des récits personnels d’apprenants et d’anciens étudiants — de Narok à l’Allemagne, des salles de cours aux lieux de travail.",
    facilities: "Au cœur de nos installations", chefSpotlight: "Portrait d’un chef", studentStories: "Témoignages vidéo", quoteStories: "Autres témoignages", journeyTitle: "Explorez votre prochaine étape", apply: "Consulter les admissions", videoClose: "Fermer la vidéo", videoDialogTitle: "Vidéo d’étudiant", playVideo: "Lire la vidéo", experienceNote: "Il s’agit d’expériences individuelles partagées par des étudiants et des anciens étudiants. Elles ne garantissent ni admission, ni reconnaissance de diplôme, ni visa, ni emploi. Les conditions et résultats varient selon l’établissement, l’employeur et la situation personnelle.",
    testimonials: {
      1: { role: "Étudiante de premier cycle", location: "Université de Flensburg, Allemagne", quote: "Étudier en Allemagne a changé ma vie. La formation linguistique complète et l’immersion culturelle grâce à l’IIFLHM ont considérablement élargi ma vision du monde et mes compétences en communication. Je suis arrivée en Allemagne avec confiance, parce que j’étais préparée." },
      2: { role: "Étudiant en Allemagne", location: "Allemagne", quote: "Étudier en Allemagne est une aventure incroyable. J’encourage vivement les autres à apprendre les langues avec l’IIFLHM : cela m’a aidé à m’adapter, à communiquer et à m’épanouir dans un environnement entièrement nouveau." },
      3: { role: "Chef professionnel", location: "Allemagne", quote: "Mon parcours du Kenya vers l’Allemagne a véritablement changé ma vie. L’IIFLHM m’a apporté des compétences linguistiques et une formation en hôtellerie qui m’ont ouvert des possibilités de travail à l’étranger. Je travaille maintenant en Allemagne comme chef et j’encourage les autres à explorer cette possibilité : elle peut transformer leur avenir." },
      4: { role: "Formation professionnelle en soins infirmiers", location: "Berlin, Allemagne", quote: "Pour devenir infirmier en Allemagne, il faut avoir atteint au moins le niveau B1. Je suis passé par l’IIFLHM et cette formation a fait toute la différence. Les enseignants étaient patients et le programme était complet." },
      5: { role: "Travail social", location: "Université de Flensburg", quote: "Apprendre l’allemand jusqu’au niveau B1 ou B2 a facilité mon processus d’Anerkennung. L’institut a joué un rôle important dans mon parcours et je suis reconnaissante pour chaque leçon." },
      6: { role: "Formation professionnelle en élevage laitier", location: "Lilienthal, Allemagne", quote: "Apprendre l’allemand vous aidera à communiquer et à trouver votre voie vers l’Allemagne. Je suis passé par cet institut depuis le sud de Narok. Si j’ai pu le faire, vous le pouvez aussi." },
    },
  },
  es: {
    title: "Voces de estudiantes | IIFLHM", description: "Conozca las experiencias de estudiantes y antiguos alumnos compartidas con IIFLHM y vea los testimonios en vídeo disponibles.",
    eyebrow: "Experiencias de estudiantes y antiguos alumnos", heroLead: "Nuestras", heroAccent: "historias.", heroText: "Relatos personales de estudiantes y antiguos alumnos sobre sus experiencias: de Narok a Alemania y de las aulas a los lugares de trabajo.",
    facilities: "Dentro de nuestras instalaciones", chefSpotlight: "Protagonista: un chef", studentStories: "Historias en vídeo", quoteStories: "Más voces de estudiantes", journeyTitle: "Explore su próximo paso", apply: "Ver información de admisiones", videoClose: "Cerrar vídeo", videoDialogTitle: "Vídeo de estudiante", playVideo: "Reproducir vídeo", experienceNote: "Estas son experiencias individuales compartidas por estudiantes y antiguos alumnos. No garantizan admisión, reconocimiento de títulos, aprobación de visado ni empleo. Los requisitos y resultados varían según la institución, el empleador y las circunstancias personales.",
    testimonials: {
      1: { role: "Estudiante de grado", location: "Universidad de Flensburg, Alemania", quote: "Estudiar en Alemania ha sido una experiencia que cambió mi vida. La formación lingüística integral y la inmersión cultural a través de IIFLHM ampliaron enormemente mi visión global y mis habilidades de comunicación. Llegué a Alemania con confianza porque estaba preparada." },
      2: { role: "Estudiante en Alemania", location: "Alemania", quote: "Estudiar en Alemania ha sido un viaje increíble. Animo a otros a aprender idiomas a través de IIFLHM: me ayudó a adaptarme, comunicarme y desenvolverme en un entorno completamente nuevo." },
      3: { role: "Chef profesional", location: "Alemania", quote: "Mi viaje de Kenia a Alemania ha cambiado mi vida. IIFLHM me proporcionó habilidades lingüísticas y formación en hostelería que me abrieron oportunidades para trabajar en el extranjero. Ahora trabajo en Alemania como chef y animo a otros a explorar esta oportunidad: puede transformar su futuro." },
      4: { role: "Formación profesional en enfermería", location: "Berlín, Alemania", quote: "Si quiere ser enfermero en Alemania, debe haber alcanzado al menos el nivel B1. Pasé por IIFLHM y esa formación marcó la diferencia. Los profesores fueron pacientes y el programa fue completo." },
      5: { role: "Trabajo social", location: "Universidad de Flensburg", quote: "Aprender alemán hasta el nivel B1 o B2 hizo que mi proceso de Anerkennung fuera mucho más sencillo. El instituto desempeñó un papel importante en mi trayectoria y agradezco cada lección." },
      6: { role: "Formación profesional en explotación lechera", location: "Lilienthal, Alemania", quote: "Aprender alemán le ayudará a conectar con otras personas y encontrar su camino hacia Alemania. Llegué a través de este instituto desde el sur de Narok. Si yo pude hacerlo, usted también puede." },
    },
  },
  nl: {
    title: "Studenten aan het woord | IIFLHM", description: "Lees ervaringen van studenten en alumni die met IIFLHM zijn gedeeld en bekijk de beschikbare vide verhalen.",
    eyebrow: "Ervaringen van studenten en alumni", heroLead: "Onze", heroAccent: "verhalen.", heroText: "Persoonlijke verhalen van studenten en alumni over hun ervaringen — van Narok naar Duitsland en van klaslokalen naar de werkvloer.",
    facilities: "Binnen onze faciliteiten", chefSpotlight: "Chef in de schijnwerpers", studentStories: "Videoverhalen", quoteStories: "Meer studentenverhalen", journeyTitle: "Ontdek uw volgende stap", apply: "Toelatingsinformatie bekijken", videoClose: "Video sluiten", videoDialogTitle: "Studentenvideo", playVideo: "Video afspelen", experienceNote: "Dit zijn persoonlijke ervaringen die door studenten en alumni zijn gedeeld. Ze garanderen geen toelating, erkenning van kwalificaties, visumgoedkeuring of werk. Eisen en resultaten verschillen per instelling, werkgever en persoonlijke situatie.",
    testimonials: {
      1: { role: "Bachelorstudent", location: "Universiteit van Flensburg, Duitsland", quote: "Studeren in Duitsland heeft mijn leven veranderd. De uitgebreide taaltraining en culturele onderdompeling via IIFLHM hebben mijn internationale blik en communicatievaardigheden sterk verbreed. Ik kwam zelfverzekerd in Duitsland aan, omdat ik goed was voorbereid." },
      2: { role: "Student in Duitsland", location: "Duitsland", quote: "Studeren in Duitsland is een geweldige reis geweest. Ik moedig anderen sterk aan om via IIFLHM talen te leren: het heeft me geholpen me aan te passen, te communiceren en mijn weg te vinden in een volledig nieuwe omgeving." },
      3: { role: "Professionele chef-kok", location: "Duitsland", quote: "Mijn reis van Kenia naar Duitsland heeft mijn leven veranderd. IIFLHM gaf me taalvaardigheden en hospitalitytraining die mogelijkheden openden om in het buitenland te werken. Ik werk nu in Duitsland als chef-kok en moedig anderen aan deze mogelijkheid te verkennen: ze kan uw toekomst veranderen." },
      4: { role: "Verpleegkundige Ausbildung", location: "Berlijn, Duitsland", quote: "Als u verpleegkundige in Duitsland wilt worden, moet u ten minste niveau B1 hebben bereikt. Ik kwam via IIFLHM en die training maakte een groot verschil. De docenten waren geduldig en het programma was grondig." },
      5: { role: "Maatschappelijk werk", location: "Universiteit van Flensburg", quote: "Duits leren tot niveau B1 of B2 maakte mijn Anerkennung-proces veel eenvoudiger. Het instituut speelde een belangrijke rol in mijn traject en ik ben dankbaar voor elke les." },
      6: { role: "Ausbildung melkveehouderij", location: "Lilienthal, Duitsland", quote: "Duits leren helpt u contact te leggen en uw weg naar Duitsland te vinden. Ik kwam via dit instituut vanuit Zuid-Narok. Als ik het kan, kunt u het ook." },
    },
  },
  it: {
    title: "Voci degli studenti | IIFLHM", description: "Leggi le esperienze di studenti ed ex studenti condivise con IIFLHM e guarda le testimonianze video disponibili.",
    eyebrow: "Esperienze di studenti ed ex studenti", heroLead: "Le nostre", heroAccent: "storie.", heroText: "Racconti personali di studenti ed ex studenti sulle loro esperienze: da Narok alla Germania e dalle aule ai luoghi di lavoro.",
    facilities: "All’interno delle nostre strutture", chefSpotlight: "Il profilo di uno chef", studentStories: "Storie in video", quoteStories: "Altre voci degli studenti", journeyTitle: "Scopri il tuo prossimo passo", apply: "Consulta le informazioni sulle ammissioni", videoClose: "Chiudi il video", videoDialogTitle: "Video dello studente", playVideo: "Riproduci video", experienceNote: "Queste sono esperienze individuali condivise da studenti ed ex studenti. Non garantiscono ammissione, riconoscimento dei titoli, approvazione del visto o occupazione. Requisiti e risultati variano in base all’istituzione, al datore di lavoro e alle circostanze personali.",
    testimonials: {
      1: { role: "Studentessa universitaria", location: "Università di Flensburg, Germania", quote: "Studiare in Germania è stata un’esperienza che mi ha cambiato la vita. La formazione linguistica completa e l’immersione culturale attraverso IIFLHM hanno ampliato notevolmente la mia visione globale e le mie capacità comunicative. Sono arrivata in Germania con fiducia perché ero preparata." },
      2: { role: "Studente in Germania", location: "Germania", quote: "Studiare in Germania è stato un viaggio incredibile. Incoraggio vivamente gli altri a imparare le lingue attraverso IIFLHM: mi ha aiutato ad adattarmi, comunicare e vivere al meglio in un ambiente completamente nuovo." },
      3: { role: "Chef professionista", location: "Germania", quote: "Il mio percorso dal Kenya alla Germania mi ha davvero cambiato la vita. IIFLHM mi ha dato competenze linguistiche e formazione nell’ospitalità che mi hanno aperto opportunità di lavoro all’estero. Ora lavoro in Germania come chef e incoraggio gli altri a esplorare questa opportunità: può trasformare il vostro futuro." },
      4: { role: "Formazione professionale infermieristica", location: "Berlino, Germania", quote: "Se vuoi diventare infermiere in Germania, devi aver raggiunto almeno il livello B1. Ho seguito il percorso tramite IIFLHM e quella formazione ha fatto la differenza. Gli insegnanti erano pazienti e il programma era approfondito." },
      5: { role: "Servizio sociale", location: "Università di Flensburg", quote: "Imparare il tedesco fino al livello B1 o B2 ha reso molto più semplice il mio processo di Anerkennung. L’istituto ha avuto un ruolo importante nel mio percorso e sono grata per ogni lezione." },
      6: { role: "Formazione professionale in allevamento lattiero-caseario", location: "Lilienthal, Germania", quote: "Imparare il tedesco ti aiuterà a entrare in contatto con gli altri e a trovare la tua strada verso la Germania. Sono arrivato tramite questo istituto da Narok South. Se ci sono riuscito io, puoi farcela anche tu." },
    },
  },
  zh: {
    title: "学生心声 | IIFLHM", description: "阅读 IIFLHM 学生和校友分享的个人经历，并观看现有的视频故事。",
    eyebrow: "学生与校友经历", heroLead: "我们的", heroAccent: "故事。", heroText: "来自学生和校友的个人分享，讲述他们从纳罗克到德国、从课堂到职业工作环境的经历。",
    facilities: "走进我们的培训设施", chefSpotlight: "厨师专题", studentStories: "视频故事", quoteStories: "更多学生心声", journeyTitle: "探索您的下一步", apply: "查看招生信息", videoClose: "关闭视频", videoDialogTitle: "学生视频", playVideo: "播放视频", experienceNote: "以下内容为学生和校友分享的个人经历，不构成录取、学历认可、签证获批或就业保证。具体要求和结果因院校、雇主及个人情况而异。",
    testimonials: {
      1: { role: "本科生", location: "德国弗伦斯堡大学", quote: "在德国学习是一次改变人生的经历。通过 IIFLHM 接受全面的语言培训并融入当地文化，极大拓宽了我的国际视野并提升了沟通能力。因为做好了准备，我充满信心地抵达德国。" },
      2: { role: "在德国学习的学生", location: "德国", quote: "在德国学习是一段令人难忘的旅程。我强烈鼓励其他人通过 IIFLHM 学习语言——这帮助我适应新环境、与人沟通，并在全新的环境中发展。" },
      3: { role: "专业厨师", location: "德国", quote: "我从肯尼亚来到德国，这段旅程真正改变了我的生活。IIFLHM 提供的语言技能和酒店服务培训为我打开了海外工作的机会。现在我在德国担任厨师，我也鼓励其他人了解这一机会——它可能改变您的未来。" },
      4: { role: "护理职业培训（Ausbildung）", location: "德国柏林", quote: "如果您想在德国从事护理工作，至少需要达到 B1 水平。我通过 IIFLHM 接受了培训，这带来了很大帮助。老师很有耐心，课程也很全面。" },
      5: { role: "社会工作", location: "弗伦斯堡大学", quote: "学习德语达到 B1 或 B2 水平，让我的 Anerkennung（资格认可）流程顺利了许多。学院在我的经历中发挥了重要作用，我感谢每一堂课。" },
      6: { role: "奶牛养殖职业培训", location: "德国利连塔尔", quote: "学习德语有助于您与他人建立联系，并找到前往德国的途径。我来自纳罗克南部，通过这所学院接受了培训。如果我能做到，您也可以。" },
    },
  },
};

export function getStudentVoicesCopy(locale: Locale): StudentVoicesCopy {
  return copy[locale];
}
