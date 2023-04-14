import gracefulShutdown from "http-graceful-shutdown";
import app from "./app";
import { initIO } from "./libs/socket";
import { StartAllWhatsAppsSessions } from "./services/WbotServices/StartAllWhatsAppsSessions";
import { logger } from "./utils/logger";

const PORTA = process.env.PORT || "3000";

const server = app.listen(PORTA, () => {
  logger.info(`Server started on port: ${PORTA}`);
});

app.get('/', (req, res) => {
  res.send('Serviços do RecebaAI | API')
})

app.get('/healthcheck', (req, res) => {
  res.status(200).send('Ok');
})


initIO(server);
StartAllWhatsAppsSessions();
gracefulShutdown(server);
