const achats = [
 {date: "27/04/2026", type: "ETF_MONDE", montant: 471.58, parts: 3, label: "3 ETF Monde"},
 {date: "27/03/2026", type: "ETF_MONDE", montant: 145.36, parts: 1, label: "1 ETF Monde"},
 {date: "02/03/2026", type: "ETF_MONDE", montant: 154.14, parts: 1, label: "1 ETF Monde"},
 {date: "02/03/2026", type: "ETF_MONDE", montant: 154.20, parts: 1, label: "1 ETF Monde"},
 {date: "25/02/2026", type: "ETF_MONDE", montant: 155.11, parts: 1, label: "1 ETF Monde"}, 
 {date: "16/02/2026", type: "ETF_MONDE", montant: 152.25, parts: 1, label: "1 ETF Monde"}, 
 {date: "20/03/2026", type: "ETF_SENIOR", montant: 1048.57, parts: 13, label: "13 ETF SENIORS"} 
 ]


const metaux = [
  {date: "30/01/2026", type: "OR", loc: "Bel.", tot: 912.00, poids: 6.22, label: "⅒ M.Leaf"},
  {date: "26/01/2026", type: "OR", loc: "Bel.", tot: 0.0, poids: 15.55, label: "Arb. ⅟₄ M.Leaf"},
  {date: "19/01/2026", type: "OR", loc: "Bel.", tot: 2250.60, poids: 15.55, label: "⅒ Philh."},
  {date: "05/03/2025", type: "OR", loc: "Bel.", tot: 598.46, poids: 6.22, label: "⅒ Koala"},
  {date: "13/12/2024", type: "OR", loc: "Bel.", tot: 778.28, poids: 18.66, label: "Arb. ⅒ M.Leaf"},
  {date: "23/10/2024", type: "OR", loc: "Bel.", tot: 560.88, poids: 21.77, label: "Arb. ⅒ M.Leaf"},
  {date: "08/10/2024", type: "OR", loc: "Bel.", tot: 267.52, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "18/09/2024", type: "OR", loc: "Bel.", tot: 258.70, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "21/08/2024", type: "OR", loc: "Bel.", tot: 253.91, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "26/07/2024", type: "OR", loc: "Bel.", tot: 245.95, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "25/07/2024", type: "OR", loc: "Bel.", tot: 268.19, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "29/09/2023", type: "OR", loc: "Bel.", tot: 202.93, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "26/09/2023", type: "OR", loc: "Bel.", tot: 207.98, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "12/09/2023", type: "OR", loc: "Bel.", tot: 206.65, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "29/08/2023", type: "OR", loc: "Bel.", tot: 205.24, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "18/07/2023", type: "OR", loc: "Bel.", tot: 202.30, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "20/06/2023", type: "OR", loc: "Bel.", tot: 204.85, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "31/05/2023", type: "OR", loc: "Bel.", tot: 211.38, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "05/05/2023", type: "OR", loc: "Bel.", tot: 213.58, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "21/04/2023", type: "OR", loc: "Bel.", tot: 208.59, poids: 3.11, label: "⅒ M.Leaf"},
  {date: "01/04/2023", type: "OR", loc: "Bel.", tot: 209.06, poids: 3.11, label: "⅒ M.Leaf"},

     {date: "29/03/2020", type: "OR", loc: "Suisse", tot: 19722.90, poids: 93.31, label: "P. oz. Kang."},
     {date: "29/03/2020", type: "OR", loc: "Suisse", tot: 0.0, poids: 62.21, label: "L. Oz. Pamp"},
     {date: "29/03/2020", type: "OR", loc: "Suisse", tot: 0.0, poids: 50.00, label: "L. Pamp"},
     {date: "29/03/2020", type: "OR", loc: "Suisse", tot: 0.0, poids: 50.00, label: "L. 10g. Pamp"},
     {date: "29/03/2020", type: "OR", loc: "Suisse", tot: 0.0, poids: 40.00, label: "L. 5g. Pamp"},
     {date: "29/03/2020", type: "OR", loc: "Suisse", tot: 0.0, poids: 11.61, label: "P. Nap. 40 Fr."},
     {date: "29/03/2020", type: "OR", loc: "Suisse", tot: 0.0, poids: 10.00, label: "L. 2.5g. Pamp"},
     {date: "29/03/2020", type: "OR", loc: "Suisse", tot: 0.0, poids: 4.00, label: "L. 1g. Pamp"},
     {date: "29/03/2020", type: "OR", loc: "Suisse", tot: 0.0, poids: 2.00, label: "L. 1g. Umicore"},
     {date: "29/03/2020", type: "OR", loc: "Suisse", tot: 0.0, poids: 15.55, label: "P. ⅒ Philh."},
  {date: "29/03/2020", type: "ARGENT", loc: "Suisse", tot: 3379.88, poids: 6000.0, label: "L. 1Kg."}
 ];