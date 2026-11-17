import type { Locale } from "@/i18n/config";

export const sharedLayoutCopy: Record<Locale, {
  mainNavigation: string;
  homeLink: string;
  footerTagline: string;
  footerMission: string;
  basedIn: string;
  poweredBy: string;
  scrollToTop: string;
  dismissWhatsApp: string;
  whatsappTooltipTitle: string;
  whatsappTooltipBody: string;
}> = {
  en: { mainNavigation: "Main navigation", homeLink: "IIFLHM home", footerTagline: "Empowering Local & Global Careers", footerMission: "Bridging the gap between Kenyan talent and opportunities in Germany, Austria and Switzerland.", basedIn: "Based in Narok, Kenya", poweredBy: "Powered by Babbage Technologies", scrollToTop: "Scroll to top", dismissWhatsApp: "Dismiss WhatsApp prompt", whatsappTooltipTitle: "Chat with us", whatsappTooltipBody: "Questions about programmes or admissions? Send us a message." },
  de: { mainNavigation: "Hauptnavigation", homeLink: "IIFLHM-Startseite", footerTagline: "Lokale und internationale Karrierewege stärken", footerMission: "Wir verbinden kenianische Talente mit Möglichkeiten in Deutschland, Österreich und der Schweiz.", basedIn: "Standort: Narok, Kenia", poweredBy: "Technologie von Babbage Technologies", scrollToTop: "Zum Seitenanfang", dismissWhatsApp: "WhatsApp-Hinweis schließen", whatsappTooltipTitle: "Schreiben Sie uns", whatsappTooltipBody: "Fragen zu Programmen oder zur Aufnahme? Senden Sie uns eine Nachricht." },
  sw: { mainNavigation: "Menyu kuu ya urambazaji", homeLink: "Ukurasa wa mwanzo wa IIFLHM", footerTagline: "Kuwezesha Kazi za Ndani na Kimataifa", footerMission: "Kuunganisha vipaji vya Kenya na fursa nchini Ujerumani, Austria na Uswisi.", basedIn: "Iko Narok, Kenya", poweredBy: "Inaendeshwa na Babbage Technologies", scrollToTop: "Rudi juu ya ukurasa", dismissWhatsApp: "Funga ujumbe wa WhatsApp", whatsappTooltipTitle: "Wasiliana nasi", whatsappTooltipBody: "Una maswali kuhusu programu au udahili? Tutumie ujumbe." },
  fr: { mainNavigation: "Navigation principale", homeLink: "Accueil IIFLHM", footerTagline: "Favoriser les carrières locales et internationales", footerMission: "Créer des passerelles entre les talents kenyans et les possibilités en Allemagne, en Autriche et en Suisse.", basedIn: "Établi à Narok, au Kenya", poweredBy: "Propulsé par Babbage Technologies", scrollToTop: "Retour en haut", dismissWhatsApp: "Fermer le message WhatsApp", whatsappTooltipTitle: "Contactez-nous", whatsappTooltipBody: "Des questions sur les programmes ou les admissions ? Envoyez-nous un message." },
  es: { mainNavigation: "Navegación principal", homeLink: "Inicio de IIFLHM", footerTagline: "Impulsamos carreras locales e internacionales", footerMission: "Conectamos el talento keniano con oportunidades en Alemania, Austria y Suiza.", basedIn: "Con sede en Narok, Kenia", poweredBy: "Desarrollado por Babbage Technologies", scrollToTop: "Volver arriba", dismissWhatsApp: "Cerrar aviso de WhatsApp", whatsappTooltipTitle: "Habla con nosotros", whatsappTooltipBody: "¿Tienes preguntas sobre los programas o las admisiones? Envíanos un mensaje." },
  nl: { mainNavigation: "Hoofdnavigatie", homeLink: "IIFLHM-startpagina", footerTagline: "Lokale en internationale carrières versterken", footerMission: "We verbinden Keniaans talent met mogelijkheden in Duitsland, Oostenrijk en Zwitserland.", basedIn: "Gevestigd in Narok, Kenia", poweredBy: "Mogelijk gemaakt door Babbage Technologies", scrollToTop: "Terug naar boven", dismissWhatsApp: "WhatsApp-melding sluiten", whatsappTooltipTitle: "Chat met ons", whatsappTooltipBody: "Vragen over programma’s of toelating? Stuur ons een bericht." },
  it: { mainNavigation: "Navigazione principale", homeLink: "Pagina iniziale IIFLHM", footerTagline: "Promuoviamo carriere locali e internazionali", footerMission: "Mettiamo in contatto i talenti kenioti con opportunità in Germania, Austria e Svizzera.", basedIn: "Con sede a Narok, Kenya", poweredBy: "Realizzato da Babbage Technologies", scrollToTop: "Torna all’inizio", dismissWhatsApp: "Chiudi l’avviso WhatsApp", whatsappTooltipTitle: "Contattaci", whatsappTooltipBody: "Hai domande sui programmi o sulle ammissioni? Inviaci un messaggio." },
  zh: { mainNavigation: "主导航", homeLink: "IIFLHM 首页", footerTagline: "助力本地与国际职业发展", footerMission: "连接肯尼亚人才与德国、奥地利和瑞士的机会。", basedIn: "位于肯尼亚纳罗克", poweredBy: "由 Babbage Technologies 提供技术支持", scrollToTop: "返回页首", dismissWhatsApp: "关闭 WhatsApp 提示", whatsappTooltipTitle: "联系我们", whatsappTooltipBody: "对课程或招生有疑问？欢迎给我们发送消息。" },
};

export function getSharedLayoutCopy(locale: Locale) {
  return sharedLayoutCopy[locale] ?? sharedLayoutCopy.en;
}
