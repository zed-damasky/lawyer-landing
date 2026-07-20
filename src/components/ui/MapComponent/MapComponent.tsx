import { useEffect, useRef, useState } from "react";
import maplibregl, { type LngLatLike, type Map } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapProps } from "@/typesAndInterfaces/mapComponent";

export function MapComponent({
  center,
  zoom = 14.4,
  title,
  entranceImage,
  className,
}: MapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<Map | null>(null);
  const markerRef = useRef<maplibregl.Marker | null>(null);

  const isOverMarkerRef = useRef(false);
  const isOverPopupRef = useRef(false);

  const [isMounted, setIsMounted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const syncPopupVisibility = () => {
    setShowPopup(isOverMarkerRef.current || isOverPopupRef.current);
  };

  useEffect(() => {
    if (!isMounted || !mapContainerRef.current || mapInstanceRef.current)
      return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: {
        version: 8,
        sources: {
          osm: {
            type: "raster",
            tiles: [
              "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
              "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
            ],
            tileSize: 256,
            attribution: "© OpenStreetMap contributors",
          },
        },
        layers: [{ id: "osm-tiles", type: "raster", source: "osm" }],
      },
      center: [center[1], center[0]] as LngLatLike,
      zoom,
      attributionControl: false,
      dragRotate: false,
      touchZoomRotate: false,
    });

    map.on("load", () => map.resize());
    map.addControl(
      new maplibregl.NavigationControl({ showCompass: false }),
      "top-right",
    );

    const el = document.createElement("div");
    el.className = "cursor-pointer transition-transform";
    el.style.transformOrigin = "center center";
    el.innerHTML = `
      <div class="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
        <div class="w-2.5 h-2.5 bg-dark rounded-full" />
      </div>
    `;

    const marker = new maplibregl.Marker({ element: el, anchor: "bottom" })
      .setLngLat([center[1], center[0]] as LngLatLike)
      .addTo(map);

    el.addEventListener("mouseenter", () => {
      isOverMarkerRef.current = true;
      syncPopupVisibility();
    });
    el.addEventListener("mouseleave", () => {
      isOverMarkerRef.current = false;
      syncPopupVisibility();
    });

    mapInstanceRef.current = map;
    markerRef.current = marker;

    const handleResize = () => map.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      marker?.remove();
      map?.remove();
      mapInstanceRef.current = null;
      markerRef.current = null;
    };
  }, [isMounted, center, zoom, title, entranceImage]);

  const handlePopupMouseEnter = () => {
    isOverPopupRef.current = true;
    syncPopupVisibility();
  };

  const handlePopupMouseLeave = () => {
    isOverPopupRef.current = false;
    syncPopupVisibility();
  };

  if (!isMounted) {
    return (
      <div
        className={`bg-dark-light ${className}`}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ width: "100%", height: "100%" }}
    >
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />

      {/* Popup overlay */}
      {showPopup && (
        <div
          className="absolute bottom-4 right-4 z-10 w-80 bg-dark-light text-white rounded-xl shadow-2xl overflow-hidden pointer-events-auto"
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handlePopupMouseLeave}
        >
          {title && (
            <p className="text-sm font-medium px-4 pt-3 pb-2 pointer-events-none select-none">
              {title}
            </p>
          )}
          {entranceImage && (
            <div className="px-4 pb-3">
              <img
                src={entranceImage}
                alt="Вход в офис"
                className="w-full h-auto object-cover rounded-lg pointer-events-none select-none"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
