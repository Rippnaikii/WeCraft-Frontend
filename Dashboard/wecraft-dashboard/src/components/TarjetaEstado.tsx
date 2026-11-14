import type { EstadoSistema } from "@/types/telemetria";

type Nivel = "verde" | "amarillo" | "rojo";

interface Config {
  nivel: Nivel;
  titulo: string;
  descripcion: string;
}

const CONFIG: Record<EstadoSistema, Config> = {
  NORMAL: { nivel: "verde", titulo: "FLUJO NORMAL", descripcion: "Operación estable" },
  ALERTA: { nivel: "amarillo", titulo: "ALERTA PREVENTIVA", descripcion: "Balance de masa activado" },
  PREVENTIVO: { nivel: "amarillo", titulo: "ALERTA PREVENTIVA", descripcion: "Balance de masa activado" },
  CRITICO: { nivel: "rojo", titulo: "RIESGO DE REBALSE", descripcion: "Velocidad mínima del alimentador" },
};

// Clases completas (no concatenadas) para que Tailwind las detecte.
const ESTILOS: Record<Nivel, { fondoIcono: string; icono: string; texto: string }> = {
  verde: { fondoIcono: "bg-green-500/20", icono: "text-green-500", texto: "text-green-500" },
  amarillo: { fondoIcono: "bg-yellow-500/20", icono: "text-yellow-500", texto: "text-yellow-500" },
  rojo: { fondoIcono: "bg-red-500/20", icono: "text-red-500", texto: "text-red-500" },
};

const ICONO_ALERTA =
  "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z";
const ICONO_OK = "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z";

interface Props {
  estado: EstadoSistema;
}

export default function TarjetaEstado({ estado }: Props) {
  const cfg = CONFIG[estado] ?? CONFIG.CRITICO; // estado desconocido → fallo seguro
  const e = ESTILOS[cfg.nivel];

  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-lg flex flex-col justify-between">
      <h2 className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-2">Estado del Sistema</h2>
      <div className="flex items-center space-x-4 mt-2">
        <div className={`${e.fondoIcono} p-4 rounded-full`}>
          <svg className={`w-8 h-8 ${e.icono}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={cfg.nivel === "verde" ? ICONO_OK : ICONO_ALERTA}
            ></path>
          </svg>
        </div>
        <div>
          <p className={`text-2xl font-bold ${e.texto}`}>{cfg.titulo}</p>
          <p className="text-xs text-slate-400">{cfg.descripcion}</p>
        </div>
      </div>
    </div>
  );
}
