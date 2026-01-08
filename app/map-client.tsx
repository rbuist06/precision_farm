"use client";

import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type Machine = {
  name: string;
  lngLat: [number, number];
  velocity: string;
  operator: string;
  talhao: string;
};

const machines: Machine[] = [
  { name: "Trator John Deere 01", lngLat: [-53.2, -30.0], velocity: "18 km/h", operator: "Zé da Roça", talhao: "Talhão A1" },
  { name: "Colheitadeira Case 02", lngLat: [-53.8, -30.5], velocity: "12 km/h", operator: "Maria do Talhão", talhao: "Talhão B2" },
  { name: "Pulverizador Jacto 03", lngLat: [-53.0, -31.0], velocity: "15 km/h", operator: "Pedro Agro", talhao: "Talhão C3" },
  { name: "Trator Massey 04", lngLat: [-53.6, -30.8], velocity: "20 km/h", operator: "Luiz Fazenda", talhao: "Talhão D4" },
];

export function MapClient() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      // Style streets-v2 foda com tua key MapTiler – tiles carregam liso pra caralho
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=U6EWOJfmq1254JNpiEbh`,
      center: [-53.5, -30.5], // centro RS foda
      zoom: 8,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");
    map.addControl(new maplibregl.ScaleControl(), "bottom-left");

    // Markers fictícios de trator brasileiro humilhando gringo
    machines.forEach((machine) => {
      new maplibregl.Marker({ color: "#22c55e" }) // verde trator foda
        .setLngLat(machine.lngLat)
        .setPopup(
          new maplibregl.Popup({ offset: 25, closeButton: false })
            .setHTML(
              `<div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-xs">
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">${machine.name}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  <strong>Operador:</strong> ${machine.operator}<br/>
                  <strong>Velocidade:</strong> ${machine.velocity}<br/>
                  <strong>Talhão:</strong> ${machine.talhao}
                </p>
              </div>`
            )
        )
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return null;
}