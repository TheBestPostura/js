import { Router } from "./components/router/router.mjs";
import routes from "./router.mjs";

const router = new Router(routes);
router.init();