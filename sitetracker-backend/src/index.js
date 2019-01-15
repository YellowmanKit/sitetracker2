import "babel-core/register";
import "babel-polyfill";

import CreateApp from './main/createApp.js';
const app = new CreateApp('mlang', 3000, false, false);
export default app;
