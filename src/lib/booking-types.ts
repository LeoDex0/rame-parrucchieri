// Shared constants & types for the booking form.
// Kept in a plain module (not the "use server" actions file) because a
// server-actions file may only export async functions — co-locating a
// constant array or a type export there throws a 500 in dev.

export const SERVIZI_OPTIONS = [
  { value: "taglio", label: "Taglio" },
  { value: "colore", label: "Colore" },
  { value: "trattamento", label: "Trattamento ricostituente" },
  { value: "styling", label: "Styling / piega" },
  { value: "altro", label: "Non so ancora / altro" },
] as const;

export type ServizioValue = (typeof SERVIZI_OPTIONS)[number]["value"];

export type BookingFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"nome" | "telefono" | "servizio", string>>;
};

export const initialBookingState: BookingFormState = {
  status: "idle",
  message: "",
};
