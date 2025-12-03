// Ce service simule une intelligence artificielle pour la démo frontend
// sans nécessiter de clé API ni de backend.

export const initializeChat = () => {
  console.log("Simulation IA initialisée");
  return true;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  return new Promise((resolve) => {
    // Simulation d'un délai de "réflexion" naturel (entre 1s et 2.5s)
    const delay = Math.random() * 1500 + 1000;

    setTimeout(() => {
      const lowerMsg = message.toLowerCase();
      let response = "";

      // Logique de réponse simulée (Mock Intelligence)
      if (lowerMsg.includes('prix') || lowerMsg.includes('tarif') || lowerMsg.includes('coût') || lowerMsg.includes('combien')) {
        response = "Nos offres débutent à 297€/mois pour le pack Essentiel. Le pack Croissance (recommandé) est à 497€/mois et inclut l'IA conversationnelle complète. Souhaitez-vous un audit gratuit de vos besoins ?";
      } else if (lowerMsg.includes('vocal') || lowerMsg.includes('téléphone') || lowerMsg.includes('appel')) {
        response = "Notre Agent Vocal est capable de répondre au téléphone 24/7, de qualifier vos prospects et de prendre des rendez-vous directement dans votre agenda. Vous pouvez le tester en appelant le +33 1 23 45 67 89.";
      } else if (lowerMsg.includes('rdv') || lowerMsg.includes('rendez-vous') || lowerMsg.includes('dispo')) {
        response = "Je peux gérer votre agenda de manière 100% autonome. Pour WEBAFORCE, je peux vous proposer un créneau de consultation ce mardi à 14h ou mercredi à 10h. Qu'est-ce qui vous convient le mieux ?";
      } else if (lowerMsg.includes('humain') || lowerMsg.includes('personne')) {
        response = "Je suis une intelligence artificielle très avancée, mais je peux transférer la conversation à un membre de l'équipe WEBAFORCE si nécessaire. Cependant, je suis pleinement qualifiée pour configurer votre compte dès maintenant.";
      } else if (lowerMsg.includes('bonjour') || lowerMsg.includes('salut')) {
        response = "Bonjour ! Je suis l'assistant virtuel de WEBAFORCE. Prêt à automatiser votre croissance ?";
      } else {
        // Réponse par défaut contextuelle
        response = "C'est une excellente question. Chez WEBAFORCE, nous utilisons des processus automatisés pour résoudre ce genre de défi et augmenter votre rentabilité. Souhaitez-vous voir une démonstration concrète ?";
      }

      resolve(response);
    }, delay);
  });
};