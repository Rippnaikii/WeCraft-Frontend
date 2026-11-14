import type { EventoTelemetria, TonoEvento } from "@/types/telemetria";

const COLOR_EVENTO: Record<TonoEvento, string> = {
  alerta: "text-yellow-400",
  critico: "text-red-400",
  normal: "text-white",
  ok: "text-green-400",
};

interface Props {
  eventos: EventoTelemetria[];
}

export default function TablaTelemetria({ eventos }: Props) {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-700">
        <h2 className="text-white font-semibold">Últimos Eventos (Telemetría)</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-400">
          <thead className="bg-slate-900/50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-6 py-3">Hora</th>
              <th className="px-6 py-3">Módulo</th>
              <th className="px-6 py-3">Evento</th>
              <th className="px-6 py-3">Acción Automática</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {eventos.map((ev) => (
              <tr key={`${ev.hora}-${ev.modulo}`} className="hover:bg-slate-700/50">
                <td className="px-6 py-4 font-mono">{ev.hora}</td>
                <td className="px-6 py-4">{ev.modulo}</td>
                <td className={`px-6 py-4 ${COLOR_EVENTO[ev.tono]}`}>{ev.evento}</td>
                <td className="px-6 py-4">{ev.accion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
