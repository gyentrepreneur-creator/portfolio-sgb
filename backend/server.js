// Version minimale (slide 5) : on vérifie juste que le serveur démarre.
// Le vrai server.js (cors, routes /api, 404) arrive à la slide 7.
import express from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.json({ message: "API Portfolio SGB opérationnelle" });
});

app.listen(PORT, () => console.log(`API sur http://localhost:${PORT}`));
