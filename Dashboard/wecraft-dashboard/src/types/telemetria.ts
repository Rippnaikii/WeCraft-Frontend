/**
 * Contrato de datos enviado por el ESP32 (ver datos.json).
 * ALERTA/PREVENTIVO = amarillo, CRITICO = rojo, NORMAL = verde.
 */
export type EstadoSistema = "NORMAL" | "ALERTA" | "PREVENTIVO" | "CRITICO";

export interface DatosTolva {
  /** Distancia sensor → mineral (cm). Menor distancia = tolva más llena. */
  distancia_cm: number;
  /** Duty PWM del motor, 0–255 (8 bits). */
  pwm_motor: number;
  estado: EstadoSistema;
  "%pila": number;
  timestamp?: string;
}

export type TonoEvento = "alerta" | "critico" | "normal" | "ok";

export interface EventoTelemetria {
  hora: string;
  modulo: string;
  evento: string;
  accion: string;
  tono: TonoEvento;
}

/**
 * Distancia (cm) sensor→fondo con la tolva vacía. Con 100 cm los umbrales
 * coinciden con el diseño: 15 cm = 85 % (preventivo) y 10 cm = 90 % (crítico).
 * Ajustar a la altura real del prototipo.
 */
export const ALTURA_TOLVA_CM = 100;
/** Bajo esta distancia el controlador baja el PWM (riesgo de rebalse). */
export const DISTANCIA_CRITICA_CM = 10;
/** Bajo esta distancia comienza la ralentización preventiva. */
export const DISTANCIA_PREVENTIVA_CM = 15;
export const PWM_MAX = 255;
