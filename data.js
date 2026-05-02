const DATA = {
  portfolio: {
    or_suisse_g: 0.0,
    or_belgique_g: 32.66,
    argent_g: 500.0,

    or_suisse_cost: 0.0,
    or_belgique_cost: 2988.05,
    argent_cost: 0.0
  },

  etf: {
    monde: { parts: 0, buy: 0.0 },
    seniors: { parts: 0, buy: 0.0 },
    juniors: { parts: 0, buy: 0.0 }
  }
};

// ⚠️ IMPORTANT
// Les parts ETF sont gérées ici (source de vérité)
// Le Google Sheet doit être mis à jour pour rester cohérent avec l’historique