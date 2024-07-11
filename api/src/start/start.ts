// Script de lancement de l'application
import express, { Express } from "express";
import { PORT } from "../secret";
import rootRouter from "../app/routers";
import { PrismaClient } from "@prisma/client"
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from 'path';
import paymentRoutes from "../app/routers/payment";

const app: Express = express();

app.use('/api/market_place/v1/bills', paymentRoutes)

// Middleware pour analyser les demandes JSON
app.use(express.json());

//TODO Faire une redirection de /
// Utilisation du routeur principal
app.use("/api/market_place/v1", rootRouter);

export const prismaClient = new PrismaClient({
  log: ['query']
})

// Middleware pour servir la documentation Swagger
const swaggerDocument = YAML.load(path.resolve(__dirname, '../swaggerConfig.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}\n`);
    console.log(`If host locally, GET on http://localhost:${PORT}/api/market_place/v1\n\n`);
    console.log("AUTH\n");
    console.log(`POST on http://localhost:${PORT}/api/market_place/v1/\n`);
    console.log(`POST on http://localhost:${PORT}/api/market_place/v1/auth/signup\n`);
    console.log(`POST on http://localhost:${PORT}/api/market_place/v1/auth/login\n`);
    console.log(`POST on http://localhost:${PORT}/api/market_place/v1/auth/logout\n`);
    console.log(`GET on http://localhost:${PORT}/api/market_place/v1/auth/confirm-email\n`);
});
