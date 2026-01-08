"use client";

import { useEffect } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export function MapClient() {
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: "https://demotiles.maplibre.org/style.json",
      center: [-53.5, -30.5],
      zoom: 8,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");
    map.addControl(new maplibregl.ScaleControl(), "bottom-left");

    const machines = [
      { name: "Trator John Deere 01", lngLat: [-53.2, -30.0] as [number, number], velocity: "18 km/h", operator: "Zé da Roça", talhao: "Talhão A1" },
      { name: "Colheitadeira Case 02", lngLat: [-53.8, -30.5] as [number, number], velocity: "12 km/h", operator: "Maria do Talhão", talhao: "Talhão B2" },
      { name: "Pulverizador Jacto 03", lngLat: [-53.0, -31.0] as [number, number], velocity: "15 km/h", operator: "Pedro Agro", talhao: "Talhão C3" },
      { name: "Trator Massey 04", lngLat: [-53.6, -30.8] as [number, number], velocity: "20 km/h", operator: "Luiz Fazenda", talhao: "Talhão D4" },
    ];

    machines.forEach((machine) => {
      new maplibregl.Marker({ color: "#22c55e" })
        .setLngLat(machine.lngLat)
        .setPopup(
          new maplibregl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-3 bg-white dark:bg-gray-800 rounded shadow">
                <strong class="text-lg">${machine.name}</strong><br>
                Operador: ${machine.operator}<br>
                Velocidade: ${machine.velocity}<br>
                Talhão: ${machine.talhao}
              </div>
            `)
        )
        .addTo(map);
    });

    return () => map.remove();
  }, []);

  return null;
}