'use client'

import { useEffect, useState } from "react";
import { getPdfs } from "@/services/getPdfs";
import { PdfType } from "@/types/Topic";

export function usePdfs() {
  const [pdfs, setPdfs] = useState<PdfType[]>([]);

  useEffect(() => {
    getPdfs()
    .then((res) => {
      setPdfs(res);
    })
    .catch((err) => {
      console.error(err);
    })
  }, []);

  return pdfs;
}
