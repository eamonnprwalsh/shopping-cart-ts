import express from 'express';
import session from './session/session';
import { RegisterRoutes } from './build/routes';

const app = express();
const PORT = process.env.PORT || 8090;
app.use(session);
app.use(express.json());
RegisterRoutes(app);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
