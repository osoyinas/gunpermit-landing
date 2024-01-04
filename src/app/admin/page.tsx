import { PdfList } from "@/components/admin/PdfList";
import  UploadPDF from "@/components/admin/UploadPDF";

export default function page() {
  return (
    <>
    <h1>PDF upload</h1>
    <PdfList/>
    <UploadPDF/>
    </>

  );
}