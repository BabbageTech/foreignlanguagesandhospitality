import type { Locale } from "./config";

export interface GalleryCopy {
  title: string;
  description: string;
  eyebrow: string;
  sectionTitle: string;
  subtitle: string;
  all: string;
  filterLabel: string;
  categories: Record<string, string>;
  empty: string;
  openItem: string;
  close: string;
  recordLabel: string;
  itemTitles: Record<number, string>;
}

const copy: Record<Locale, GalleryCopy> = {
  en: {
    title: "Gallery | IIFLHM",
    description: "Explore photographs of campus learning, hospitality training facilities, students and institute events at IIFLHM.",
    eyebrow: "Our Moments", sectionTitle: "Campus & Student Life", subtitle: "A glimpse into learning, growth, and experiences at IIFLHM",
    all: "All", filterLabel: "Filter gallery by category", categories: { Classes: "Classes", Facilities: "Facilities", Students: "Students", Events: "Events" },
    empty: "No entries found in the gallery", openItem: "Open image:", close: "Close", recordLabel: "Gallery category:",
    itemTitles: { 1: "Language Class Session", 2: "Hospitality Training Kitchen", 3: "Students Group", 4: "Language Lab", 5: "Cultural Event", 6: "Campus Community" },
  },
  de: {
    title: "Galerie | IIFLHM", description: "Entdecken Sie Fotos vom Lernen auf dem Campus, den Hospitality-Ausbildungsräumen, Studierenden und Veranstaltungen des IIFLHM.",
    eyebrow: "Unsere Momente", sectionTitle: "Campus und Studierendenleben", subtitle: "Ein Einblick in Lernen, Entwicklung und Erfahrungen am IIFLHM",
    all: "Alle", filterLabel: "Galerie nach Kategorie filtern", categories: { Classes: "Unterricht", Facilities: "Einrichtungen", Students: "Studierende", Events: "Veranstaltungen" },
    empty: "Keine Einträge in der Galerie gefunden", openItem: "Bild öffnen:", close: "Schließen", recordLabel: "Galeriekategorie:",
    itemTitles: { 1: "Sprachunterricht", 2: "Ausbildungsküche für Hospitality", 3: "Studierendengruppe", 4: "Sprachlabor", 5: "Kulturveranstaltung", 6: "Campusgemeinschaft" },
  },
  sw: {
    title: "Picha | IIFLHM", description: "Tazama picha za masomo chuoni, vifaa vya mafunzo ya ukarimu, wanafunzi na matukio ya taasisi ya IIFLHM.",
    eyebrow: "Matukio Yetu", sectionTitle: "Chuo na Maisha ya Wanafunzi", subtitle: "Muhtasari wa kujifunza, kukua na uzoefu katika IIFLHM",
    all: "Zote", filterLabel: "Chuja picha kulingana na aina", categories: { Classes: "Madarasa", Facilities: "Vifaa", Students: "Wanafunzi", Events: "Matukio" },
    empty: "Hakuna picha zilizopatikana kwenye ghala", openItem: "Fungua picha:", close: "Funga", recordLabel: "Aina ya picha:",
    itemTitles: { 1: "Kipindi cha Darasa la Lugha", 2: "Jiko la Mafunzo ya Ukarimu", 3: "Kikundi cha Wanafunzi", 4: "Maabara ya Lugha", 5: "Tukio la Kitamaduni", 6: "Jumuiya ya Chuo" },
  },
  fr: {
    title: "Galerie | IIFLHM", description: "Découvrez des photos des cours sur le campus, des installations de formation en hôtellerie, des étudiants et des événements de l’IIFLHM.",
    eyebrow: "Nos moments", sectionTitle: "Campus et vie étudiante", subtitle: "Un aperçu de l’apprentissage, du développement et des expériences à l’IIFLHM",
    all: "Tout", filterLabel: "Filtrer la galerie par catégorie", categories: { Classes: "Cours", Facilities: "Installations", Students: "Étudiants", Events: "Événements" },
    empty: "Aucune entrée trouvée dans la galerie", openItem: "Ouvrir l’image :", close: "Fermer", recordLabel: "Catégorie de la galerie :",
    itemTitles: { 1: "Séance de cours de langue", 2: "Cuisine de formation en hôtellerie", 3: "Groupe d’étudiants", 4: "Laboratoire de langues", 5: "Événement culturel", 6: "Communauté du campus" },
  },
  es: {
    title: "Galería | IIFLHM", description: "Explore fotografías de las clases en el campus, las instalaciones de formación en hostelería, los estudiantes y los eventos de IIFLHM.",
    eyebrow: "Nuestros momentos", sectionTitle: "Campus y vida estudiantil", subtitle: "Una mirada al aprendizaje, el crecimiento y las experiencias en IIFLHM",
    all: "Todo", filterLabel: "Filtrar la galería por categoría", categories: { Classes: "Clases", Facilities: "Instalaciones", Students: "Estudiantes", Events: "Eventos" },
    empty: "No se encontraron imágenes en la galería", openItem: "Abrir imagen:", close: "Cerrar", recordLabel: "Categoría de la galería:",
    itemTitles: { 1: "Sesión de clase de idiomas", 2: "Cocina de formación en hostelería", 3: "Grupo de estudiantes", 4: "Laboratorio de idiomas", 5: "Evento cultural", 6: "Comunidad del campus" },
  },
  nl: {
    title: "Galerij | IIFLHM", description: "Bekijk foto’s van lessen op de campus, hospitality-trainingsfaciliteiten, studenten en evenementen van IIFLHM.",
    eyebrow: "Onze momenten", sectionTitle: "Campus en studentenleven", subtitle: "Een indruk van leren, groeien en ervaringen bij IIFLHM",
    all: "Alles", filterLabel: "Galerij filteren op categorie", categories: { Classes: "Lessen", Facilities: "Faciliteiten", Students: "Studenten", Events: "Evenementen" },
    empty: "Geen afbeeldingen gevonden in de galerij", openItem: "Afbeelding openen:", close: "Sluiten", recordLabel: "Galerijcategorie:",
    itemTitles: { 1: "Taalles", 2: "Hospitality-trainingskeuken", 3: "Studentengroep", 4: "Taallaboratorium", 5: "Cultureel evenement", 6: "Campusgemeenschap" },
  },
  it: {
    title: "Galleria | IIFLHM", description: "Esplora le fotografie delle lezioni nel campus, delle strutture di formazione nell’ospitalità, degli studenti e degli eventi IIFLHM.",
    eyebrow: "I nostri momenti", sectionTitle: "Campus e vita studentesca", subtitle: "Uno sguardo all’apprendimento, alla crescita e alle esperienze presso IIFLHM",
    all: "Tutte", filterLabel: "Filtra la galleria per categoria", categories: { Classes: "Lezioni", Facilities: "Strutture", Students: "Studenti", Events: "Eventi" },
    empty: "Nessuna immagine trovata nella galleria", openItem: "Apri immagine:", close: "Chiudi", recordLabel: "Categoria della galleria:",
    itemTitles: { 1: "Lezione di lingua", 2: "Cucina per la formazione nell’ospitalità", 3: "Gruppo di studenti", 4: "Laboratorio linguistico", 5: "Evento culturale", 6: "Comunità del campus" },
  },
  zh: {
    title: "校园图片库 | IIFLHM", description: "浏览 IIFLHM 校园课堂、酒店服务培训设施、学生生活及学院活动的照片。",
    eyebrow: "校园瞬间", sectionTitle: "校园与学生生活", subtitle: "了解 IIFLHM 的学习、成长与校园体验",
    all: "全部", filterLabel: "按类别筛选图片", categories: { Classes: "课堂", Facilities: "教学设施", Students: "学生", Events: "活动" },
    empty: "图片库中暂无内容", openItem: "打开图片：", close: "关闭", recordLabel: "图片类别：",
    itemTitles: { 1: "语言课堂", 2: "酒店服务培训厨房", 3: "学生合影", 4: "语言实验室", 5: "文化活动", 6: "校园社群" },
  },
};

export function getGalleryCopy(locale: Locale): GalleryCopy {
  return copy[locale];
}
