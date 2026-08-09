"use server";

import type { BookingFormState } from "@/lib/booking-types";

// This is a pitch mockup with no real booking backend yet — the action
// validates input and returns a success/error state for the UI. Wiring it
// to email/CRM/WhatsApp Business is a follow-up once the salon signs off.
export async function submitBooking(
  _prevState: BookingFormState,
  formData: FormData
): Promise<BookingFormState> {
  const nome = String(formData.get("nome") ?? "").trim();
  const telefono = String(formData.get("telefono") ?? "").trim();
  const servizio = String(formData.get("servizio") ?? "").trim();
  const preferenza = String(formData.get("preferenza") ?? "").trim();
  const messaggio = String(formData.get("messaggio") ?? "").trim();

  const fieldErrors: BookingFormState["fieldErrors"] = {};

  if (nome.length < 2) {
    fieldErrors.nome = "Inserisci il tuo nome.";
  }

  const digits = telefono.replace(/[^0-9]/g, "");
  if (digits.length < 8) {
    fieldErrors.telefono = "Inserisci un numero di telefono valido.";
  }

  if (!servizio) {
    fieldErrors.servizio = "Seleziona un servizio.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Controlla i campi evidenziati e riprova.",
      fieldErrors,
    };
  }

  // Simulate the latency of a real submission (mail/CRM call) so the
  // pending state in the UI is visible and honest.
  await new Promise((resolve) => setTimeout(resolve, 500));

  console.log("[Rame Parrucchieri] Nuova richiesta di prenotazione:", {
    nome,
    telefono,
    servizio,
    preferenza,
    messaggio,
  });

  return {
    status: "success",
    message:
      "Richiesta inviata. Vi ricontatteremo il prima possibile per confermare data e orario.",
  };
}
