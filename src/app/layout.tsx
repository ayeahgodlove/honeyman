import { DevtoolsProvider } from "@providers/devtools";
import { useNotificationProvider } from "@refinedev/antd";
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import { cookies } from "next/headers";
import React, { Suspense } from "react";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ColorModeContextProvider } from "@contexts/color-mode";
import { authProvider, authProviderServer } from "@providers/auth-provider";
import { dataProvider } from "@providers/data-provider";
import "@refinedev/antd/dist/reset.css";

import ClientProvider from "@contexts/provider";
import "../styles/main.scss";
import "../styles/app.css";
import { useDashboardMenu } from "@utils/dashboard-menus";
import { SocketProvider } from "@contexts/socket-provider.context";

export const metadata: Metadata = {
  title: "Refine",
  description: "Generated by create refine app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  const defaultMode = theme?.value === "dark" ? "dark" : "light";
  const data = await getData();
  const { dashboardMenus, filterMenuItemsByRole } = useDashboardMenu();
  const userRoles = data.user ? data.user?.roles.map((ur: any) => ur.name) : [];

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Suspense>
          <RefineKbarProvider>
            <AntdRegistry>
              <ClientProvider>
                <ColorModeContextProvider defaultMode={defaultMode}>
                  <SocketProvider>
                    <DevtoolsProvider>
                      <Refine
                        routerProvider={routerProvider}
                        dataProvider={dataProvider}
                        notificationProvider={useNotificationProvider}
                        authProvider={authProvider}
                        resources={filterMenuItemsByRole(
                          dashboardMenus,
                          userRoles
                        )}
                        options={{
                          syncWithLocation: true,
                          warnWhenUnsavedChanges: true,
                          useNewQueryKeys: true,
                          projectId: "JVzy3N-QCyo8k-c3ejgO",
                          breadcrumb: true,
                          liveMode: "auto",
                        }}
                      >
                        {children}
                        <RefineKbar />
                      </Refine>
                    </DevtoolsProvider>
                  </SocketProvider>
                </ColorModeContextProvider>
              </ClientProvider>
            </AntdRegistry>
          </RefineKbarProvider>
        </Suspense>
        <script
          src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=64bc51e851d39e9358ee467b"
          type="text/javascript"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://assets-global.website-files.com/64bc51e851d39e9358ee467b/js/webflow.fd77f6562.js"
          type="text/javascript"
        ></script>
      </body>
    </html>
  );
}

async function getData() {
  const user = await fetchUserIdentity(authProviderServer);
  return {
    user,
  };
}

async function fetchUserIdentity(authProvider: any) {
  if (authProvider && typeof authProvider.getIdentity === "function") {
    try {
      const userIdentity = await authProvider.getIdentity();
      if (userIdentity) {
        return userIdentity;
      } else {
        return null;
      }
    } catch (error) {
      return error;
    }
  } else {
    return null;
  }
}
