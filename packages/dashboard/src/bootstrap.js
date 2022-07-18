import { createApp } from "vue";
import Dashboard from "./components/Dashboard";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
}

if (process.env.NODE_ENV === 'development') {
  const dashboardRoot = document.getElementById('_dashboard-dev-root');
  if (dashboardRoot) {
    mount(dashboardRoot);
  }
}

export { mount };