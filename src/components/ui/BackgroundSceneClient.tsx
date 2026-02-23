"use client";
import dynamic from "next/dynamic";

export const BackgroundSceneClient = dynamic(() => import("./BackgroundScene").then(mod => mod.BackgroundScene), { ssr: false });
