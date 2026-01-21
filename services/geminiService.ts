// Ce service simule une intelligence artificielle spécialisée pour le SEO local et la téléphonie IA
export const initializeChat = () => {
  console.log("Simulation IA WEBAFORCE (SEO & Vocal) initialisée");
  return true;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000 + 800;

    setTimeout(() => {
      const lowerMsg = message.toLowerCase();
      let response = "";

      if (lowerMsg.includes('audit') || lowerMsg.includes('recherche') || lowerMsg.includes('analys')) {
        response = "Notre audit de visibilité est gratuit. Il analyse votre fiche Google Business et votre site pour voir pourquoi vous n'êtes pas encore dans le Top 3. Voulez-vous que je vérifie votre ville ?";
      } else if (lowerMsg.includes('maps') || lowerMsg.includes('pack') || lowerMsg.includes('local')) {
        response = "Le Local Pack est l'encadré Google qui affiche les 3 meilleurs artisans. 9 clients sur 10 choisissent leur couvreur ici. Nous utilisons des techniques de SEO local pour vous y placer durablement.";
      } else if (lowerMsg.includes('vocal') || lowerMsg.includes('réceptionniste') || lowerMsg.includes('perdu')) {
        response = "Le 'Dark Funnel' arrive quand vous manquez un appel : le client appelle immédiatement votre concurrent. Notre Réceptionniste IA décroche en moins de 2 secondes, 24h/24, pour sécuriser le prospect.";
      } else if (lowerMsg.includes('prix') || lowerMsg.includes('tarif')) {
        response = "Nous proposons un audit gratuit et un essai gratuit de l'IA. Pour l'accompagnement SEO, nos tarifs dépendent de la concurrence dans votre zone géographique. C'est un investissement rapidement rentabilisé par les nouveaux chantiers.";
      } else if (lowerMsg.includes('bonjour') || lowerMsg.includes('salut')) {
        response = "Bonjour ! Je suis l'assistant WEBAFORCE. Je peux vous aider à intégrer le Top 3 Google Maps ou à tester notre réceptionniste IA. Que préférez-vous ?";
      } else {
        response = "C'est une excellente question pour votre visibilité locale. Chez WEBAFORCE, notre mission est simple : faire de vous le couvreur le plus appelé de votre secteur. On commence par un audit gratuit ?";
      }

      resolve(response);
    }, delay);
  });
};