import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "Crypto Tracker by Marko",
  webDir: "build",
  server: {
    androidScheme: "https",
  },
};

export default config;
