import { PWM_MAX } from "@/types/telemetria";

interface Props {
  /** Valor PWM crudo del ESP32 (0–255). */
  pwm: number;
}

export default function IndicadorMotor({ pwm }: Props) {
  const porcentaje = Math.min(100, Math.max(0, Math.round((pwm / PWM_MAX) * 100)));
  const estadoMotor = porcentaje === 0 ? "Detenido" : porcentaje >= 95 ? "Velocidad Normal" : "Ralentizado";

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg">
      <h2 className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-2">Motor Alimentador</h2>
      <div className="mt-4">
        <p className="text-3xl font-bold text-white mb-1">{estadoMotor}</p>
        <div className="flex items-center justify-between bg-slate-900 rounded px-3 py-2 mt-3">
          <span className="text-sm text-slate-400">Ciclo de Trabajo (PWM)</span>
          <span className="font-mono text-lg text-blue-400">{porcentaje}%</span>
        </div>
      </div>
    </div>
  );
}
