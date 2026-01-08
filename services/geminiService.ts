// Ce service simule une intelligence artificielle spécialisée pour les couvreurs
export const initializeChat = () => {
  console.log("Simulation IA WEBAFORCE (Artisans) initialisée");
  return true;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000 + 800;

    setTimeout(() => {
      const lowerMsg = message.toLowerCase();
      let response = "";

      if (lowerMsg.includes('prix') || lowerMsg.includes('tarif') || lowerMsg.includes('combien')) {
        response = "Nos solutions sont adaptées à la taille de votre entreprise. Nous ne facturons pas au forfait mais à la performance générée. Pour un couvreur indépendant, le retour sur investissement est souvent visible dès le premier devis sauvé ! Souhaitez-vous un audit de vos appels manqués ?";
      } else if (lowerMsg.includes('vocal') || lowerMsg.includes('téléphone')) {
        response = "L'Agent Vocal est notre outil le plus puissant pour les couvreurs. Il décroche quand vous êtes sur le toit, qualifie l'urgence (fuite ou rénovation complète) et prend les coordonnées. Vous recevez un résumé par SMS immédiatement.";
      } else if (lowerMsg.includes('rdv') || lowerMsg.includes('agenda')) {
        response = "Je peux me synchroniser avec Google Calendar ou Outlook. Je propose uniquement vos créneaux libres pour les visites de métrage. Cela vous évite les allers-retours au téléphone pendant vos journées de travail.";
      } else if (lowerMsg.includes('couverture') || lowerMsg.includes('toit') || lowerMsg.includes('charpente')) {
        response = "Absolument, nous connaissons bien les spécificités de votre métier. Notre IA sait faire la différence entre une demande de nettoyage de toiture et une réfection complète de charpente.";
      } else if (lowerMsg.includes('bonjour') || lowerMsg.includes('salut')) {
        response = "Bonjour ! Je suis l'assistant WEBAFORCE. Je suis là pour aider les couvreurs et charpentiers à ne plus rater aucun client. Comment puis-je vous aider aujourd'hui ?";
      } else {
        response = "C'est un point important pour votre activité. Chez WEBAFORCE, on s'assure que chaque prospect qui cherche un couvreur dans votre secteur tombe sur vous et obtienne une réponse immédiate. On en discute par téléphone ?";
      }

      resolve(response);
    }, delay);
  });
};