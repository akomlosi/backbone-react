/**
 * App entry point
 */

window.app = {};

// Polyfill
import "../node_modules/babel-core/polyfill";

import Application from "./Application";

new Application();
