import type { Locale } from "@/i18n/config";

export const academicsComponentCopy: Record<Locale, {
  general: string;
  exploreProgram: string;
  noPrograms: string;
  noProgramsDescription: string;
  talkToAdmissions: string;
  backToPrograms: string;
  programDuration: string;
  fullCourse: string;
  enrollToday: string;
  inquireDetails: string;
  instantHelp: string;
  whatsappHelp: string;
  whatYouGet: string;
}> = {
  en: { general: "General", exploreProgram: "Explore programme", noPrograms: "No programmes found", noProgramsDescription: "We could not find courses matching these criteria. Please check again later for updated programme information.", talkToAdmissions: "Talk to admissions", backToPrograms: "Back to programmes", programDuration: "Programme duration", fullCourse: "Full programme", enrollToday: "Enquire about enrolment", inquireDetails: "Ask for details", instantHelp: "Contact support", whatsappHelp: "Ask us a question on WhatsApp", whatYouGet: "Learning areas" },
  de: { general: "Allgemein", exploreProgram: "Programm ansehen", noPrograms: "Keine Programme gefunden", noProgramsDescription: "Es wurden keine Kurse gefunden, die diesen Kriterien entsprechen. Bitte informieren Sie sich später erneut über aktualisierte Programminformationen.", talkToAdmissions: "Zulassungsstelle kontaktieren", backToPrograms: "Zurück zu den Programmen", programDuration: "Programmdauer", fullCourse: "Vollständiges Programm", enrollToday: "Nach Anmeldung fragen", inquireDetails: "Details erfragen", instantHelp: "Kontakt und Unterstützung", whatsappHelp: "Stellen Sie uns eine Frage auf WhatsApp", whatYouGet: "Lernbereiche" },
  sw: { general: "Jumla", exploreProgram: "Chunguza programu", noPrograms: "Hakuna programu zilizopatikana", noProgramsDescription: "Hatukupata kozi zinazolingana na vigezo hivi. Tafadhali angalia tena baadaye kwa taarifa zilizosasishwa za programu.", talkToAdmissions: "Wasiliana na udahili", backToPrograms: "Rudi kwenye programu", programDuration: "Muda wa programu", fullCourse: "Programu kamili", enrollToday: "Ulizia kuhusu usajili", inquireDetails: "Ulizia maelezo", instantHelp: "Msaada wa mawasiliano", whatsappHelp: "Tuulize swali kupitia WhatsApp", whatYouGet: "Maeneo ya kujifunza" },
  fr: { general: "Général", exploreProgram: "Découvrir le programme", noPrograms: "Aucun programme trouvé", noProgramsDescription: "Aucun cours ne correspond à ces critères. Consultez à nouveau cette page ultérieurement pour obtenir des informations actualisées.", talkToAdmissions: "Contacter les admissions", backToPrograms: "Retour aux programmes", programDuration: "Durée du programme", fullCourse: "Programme complet", enrollToday: "Se renseigner sur l’inscription", inquireDetails: "Demander des détails", instantHelp: "Contacter l’assistance", whatsappHelp: "Posez-nous une question sur WhatsApp", whatYouGet: "Domaines d’apprentissage" },
  es: { general: "General", exploreProgram: "Explorar programa", noPrograms: "No se encontraron programas", noProgramsDescription: "No encontramos cursos que coincidan con estos criterios. Vuelve a consultar más adelante para ver información actualizada.", talkToAdmissions: "Contactar con admisiones", backToPrograms: "Volver a los programas", programDuration: "Duración del programa", fullCourse: "Programa completo", enrollToday: "Consultar inscripción", inquireDetails: "Solicitar detalles", instantHelp: "Contactar con asistencia", whatsappHelp: "Haznos una pregunta por WhatsApp", whatYouGet: "Áreas de aprendizaje" },
  nl: { general: "Algemeen", exploreProgram: "Bekijk programma", noPrograms: "Geen programma’s gevonden", noProgramsDescription: "Er zijn geen cursussen gevonden die aan deze criteria voldoen. Bekijk later opnieuw de bijgewerkte programma-informatie.", talkToAdmissions: "Neem contact op met toelatingen", backToPrograms: "Terug naar programma’s", programDuration: "Programmaduur", fullCourse: "Volledig programma", enrollToday: "Informeer naar inschrijving", inquireDetails: "Vraag details op", instantHelp: "Contact en ondersteuning", whatsappHelp: "Stel ons een vraag via WhatsApp", whatYouGet: "Leergebieden" },
  it: { general: "Generale", exploreProgram: "Esplora il programma", noPrograms: "Nessun programma trovato", noProgramsDescription: "Non abbiamo trovato corsi corrispondenti a questi criteri. Consulta nuovamente la pagina in seguito per informazioni aggiornate.", talkToAdmissions: "Contatta l’ufficio ammissioni", backToPrograms: "Torna ai programmi", programDuration: "Durata del programma", fullCourse: "Programma completo", enrollToday: "Informazioni sull’iscrizione", inquireDetails: "Richiedi dettagli", instantHelp: "Contatta l’assistenza", whatsappHelp: "Fai una domanda su WhatsApp", whatYouGet: "Aree di apprendimento" },
  zh: { general: "常规", exploreProgram: "查看课程", noPrograms: "未找到课程项目", noProgramsDescription: "没有找到符合这些条件的课程。请稍后再次查看更新后的课程信息。", talkToAdmissions: "联系招生办公室", backToPrograms: "返回课程项目", programDuration: "课程时长", fullCourse: "完整课程", enrollToday: "咨询报名", inquireDetails: "咨询详情", instantHelp: "联系支持人员", whatsappHelp: "通过 WhatsApp 向我们提问", whatYouGet: "学习领域" },
};

export function getAcademicsComponentCopy(locale: Locale) {
  return academicsComponentCopy[locale] ?? academicsComponentCopy.en;
}
