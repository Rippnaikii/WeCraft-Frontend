import type { EventoTelemetria } from "@/types/telemetria";

// Fase 1: eventos simulados (mock), los mismos del boceto HTML.
// En Fase 2 vendrán del backend / ESP32.
export const eventosMock: EventoTelemetria[] = [
  {
    hora: "11:28:45 AM",
    modulo: "ControladorCentral",
    evento: "Nivel sube a 85%",
    accion: "Ajuste PWM -> 40%",
    tono: "alerta",
  },
  {
    hora: "11:25:12 AM",
    modulo: "SensorNivel",
    evento: "Nivel estable 50%",
    accion: "Mantiene PWM -> 100%",
    tono: "normal",
  },
  {
    hora: "11:00:00 AM",
    modulo: "Sistema",
    evento: "Inicio de Turno",
    accion: "Calibración OK",
    tono: "ok",
  },
];
