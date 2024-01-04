import type { PdfType } from "@/types/Topic";

export function PdfItem({ pdf }: { pdf: PdfType }) {
  return (
    <li className="p-4 flex flex-col border border-black rounded-md w-auto">
      <h2>{pdf.name}</h2>
      <h3>{pdf.topic.name}</h3>
      <h3>Preguntas: {pdf.topic.questions}</h3>
      <h4>{pdf.created_at}</h4>
      <div>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-xs mt-2">
          Eliminar
        </button>
      </div>
    </li>
  );
}
