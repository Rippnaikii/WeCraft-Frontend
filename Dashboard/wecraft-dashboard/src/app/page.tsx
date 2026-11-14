import BarraNivel from "@/components/BarraNivel";
import IndicadorMotor from "@/components/IndicadorMotor";
import TablaTelemetria from "@/components/TablaTelemetria";
import TarjetaEstado from "@/components/TarjetaEstado";
import datosJson from "@/data/datos.json";
import { eventosMock } from "@/data/eventos";
import type { DatosTolva } from "@/types/telemetria";

// Fase 1: datos simulados (mock). En Fase 2 se reemplaza por la API / tiempo real.
const datos = datosJson as DatosTolva;

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-slate-700">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-wider">
            WE-CRAFT <span className="text-red-500">IoT</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">Panel de Control Preventivo - Tolva Principal</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-green-400">ESP32 Conectado (En línea)</span>
        </div>
      </header>

      {/* Grid de Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <TarjetaEstado estado={datos.estado} />
        <BarraNivel distanciaCm={datos.distancia_cm} />
        <IndicadorMotor pwm={datos.pwm_motor} />
      </div>

      {/* Tabla de Telemetría Reciente */}
      <TablaTelemetria eventos={eventosMock} />
    </div>
  );
}
