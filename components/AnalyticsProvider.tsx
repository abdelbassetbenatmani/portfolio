"use client";

import { Analytics } from "trackcel";

export default function AnalyticsProvider() {
  return (
    <Analytics
      projectId="cmbp0vepf0002lk03q03u7iji"
      apiKey="sk_live_e567766719bf4fe58b1d5f9f8089839f" 
      debug={true}
      disableInDevelopment={true}
    />
  );
}