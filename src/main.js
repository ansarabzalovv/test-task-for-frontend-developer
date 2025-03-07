/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from "./plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");