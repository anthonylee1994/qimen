import {defineConfig} from "vite";
import {VitePWA} from "vite-plugin-pwa";
import React from "@vitejs/plugin-react";
import Legacy from "@vitejs/plugin-legacy";
import TSConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": "/src",
        },
    },
    plugins: [
        React(),
        TSConfigPaths(),
        VitePWA({
            registerType: "autoUpdate",
        }),
        Legacy({
            targets: ["cover 95%"],
        }),
    ],
    base: "./",
});
