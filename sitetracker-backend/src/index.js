import "babel-core/register";
import "babel-polyfill";

import CreateApp from './main/createApp.js';
const app = new CreateApp('sitetracker', 443, true, false);
const app2 = new CreateApp('dashboard', 80, false, false);
export default app;
