import {
  ALTURA_TOLVA_CM,
  DISTANCIA_CRITICA_CM,
  DISTANCIA_PREVENTIVA_CM,
} from "@/types/telemetria";

interface Props {
  distanciaCm: number;
}

const aPorcentaje = (cm: number) => ((ALTURA_TOLVA_CM - cm) / ALTURA_TOLVA_CM) * 100;

export default function BarraNivel({ distanciaCm }: Props) {
  // Menor distancia = tolva más llena.
  const llenado = Math.min(100, Math.max(0, Math.round(aPorcentaje(distanciaCm))));
  const umbralCritico = Math.round(aPorcentaje(DISTANCIA_CRITICA_CM));

  const colorBarra =
    distanciaCm <= DISTANCIA_CRITICA_CM
      ? "bg-red-500"
      : distanciaCm <= DISTANCIA_PREVENTIVA_CM
        ? "bg-yellow-500"
        : "bg-green-500";

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg">
      <div className="flex justify-between items-end mb-2">
        <h2 className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Nivel de Tolva</h2>
        <span className="text-3xl font-bold text-white">{llenado}%</span>
      </div>
      <p className="text-xs text-slate-500 mb-4">Distancia lectura: {distanciaCm} cm al sensor</p>
      {/* Barra de progreso */}
      <div className="w-full bg-slate-700 rounded-full h-4 relative overflow-hidden">
        <div className={`${colorBarra} h-4 rounded-full`} style={{ width: `${llenado}%` }}></div>
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-2">
        <span>Vacío</span>
        <span>Crítico ({umbralCritico}%)</span>
      </div>
    </div>
  );
}
