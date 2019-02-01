import "babel-core/register";
import "babel-polyfill";

import CreateApp from './main/createApp.js';
const app = new CreateApp('sitetracker', 443, true, false);
const app2 = new CreateApp('dashboard', 80, false, false);
//const app = new CreateApp('sitetracker', 3000, false, false);
//const app2 = new CreateApp('dashboard', 3002, false, false);
export default app;
