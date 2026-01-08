"use client";

import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export function MapClient() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      // Satellite top foda, recente pra caralho (ESRI World Imagery atualizado)
      style: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      center: [-53.5, -30.5], // centro RS (muda depois pro teu talhão)
      zoom: 12, // zoom inicial mais perto pra ver satélite detalhado
      maxZoom: 19, // limite teste top (detalhe pra krl)
      minZoom: 6,
    });

    // Controles foda
    map.addControl(new maplibregl.NavigationControl(), "top-right");
    map.addControl(new maplibregl.ScaleControl(), "bottom-left");

    // Attribution obrigatória pra ESRI (não remover, senão bloqueia)
    map.on("load", () => {
      map.addSource("esri", {
        type: "raster",
        tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
        tileSize: 256,
      });
      map.addLayer({
        id: "esri-layer",
        type: "raster",
        source: "esri",
      });
    });

    return () => map.remove();
  }, []);

  return null;
}