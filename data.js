const DATA = {
  portfolio: {
    or_suisse_g: 338.68,
    or_belgique_g: 130.62,
    argent_g: 6000,

    or_suisse_cost: 19722.90,
    or_belgique_cost: 8467.05,
    argent_cost: 3379.88
  },

  etf: {
    monde: { parts: 8, buy: 1232.64 },
    seniors: { parts: 13, buy: 1048.57 },
    juniors: { parts: 0, buy: 0 }
  }
};

// ⚠️ IMPORTANT
// Les parts ETF sont gérées ici (source de vérité)
// Le Google Sheet doit être mis à jour pour rester cohérent avec l’historique