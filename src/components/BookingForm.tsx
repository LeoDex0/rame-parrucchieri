"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { submitBooking } from "@/app/prenota/actions";
import { SERVIZI_OPTIONS, initialBookingState } from "@/lib/booking-types";

function fieldClasses(hasError?: string) {
  return `w-full border-b bg-transparent py-3 text-lg text-noir outline-none transition-colors placeholder:text-noir/35 focus:border-noir ${
    hasError ? "border-red-500" : "border-noir/25"
  }`;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-noir px-8 py-4 text-sm font-medium tracking-wide text-avorio transition-colors hover:bg-ottone hover:text-noir disabled:cursor-wait disabled:opacity-60 sm:w-auto"
    >
      {pending ? "Invio in corso…" : "Invia la richiesta"}
    </button>
  );
}

export default function BookingForm() {
  const [state, formAction] = useActionState(submitBooking, initialBookingState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 border border-ottone/40 bg-ottone/10 p-8">
        <CheckCircle2 size={32} strokeWidth={1.5} className="text-ottone-2" />
        <p className="font-display text-2xl italic">Richiesta inviata.</p>
        <p className="text-noir/70">{state.message}</p>
        <p className="text-sm text-noir/50">
          Per qualsiasi urgenza potete comunque chiamarci al{" "}
          <a href="tel:0541255210" className="underline underline-offset-2">
            0541 55210
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-7">
      <div>
        <label htmlFor="nome" className="eyebrow mb-2 block text-noir/50">
          Nome e cognome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Il tuo nome"
          className={fieldClasses(state.fieldErrors?.nome)}
        />
        {state.fieldErrors?.nome && (
          <p className="mt-2 text-sm text-red-600">{state.fieldErrors.nome}</p>
        )}
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="telefono" className="eyebrow mb-2 block text-noir/50">
            Telefono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            required
            placeholder="333 123 4567"
            className={fieldClasses(state.fieldErrors?.telefono)}
          />
          {state.fieldErrors?.telefono && (
            <p className="mt-2 text-sm text-red-600">{state.fieldErrors.telefono}</p>
          )}
        </div>

        <div>
          <label htmlFor="preferenza" className="eyebrow mb-2 block text-noir/50">
            Giorno preferito (facoltativo)
          </label>
          <input
            id="preferenza"
            name="preferenza"
            type="text"
            placeholder="Es. sabato mattina"
            className={fieldClasses()}
          />
        </div>
      </div>

      <div>
        <label htmlFor="servizio" className="eyebrow mb-2 block text-noir/50">
          Servizio desiderato
        </label>
        <select
          id="servizio"
          name="servizio"
          required
          defaultValue=""
          className={`${fieldClasses(state.fieldErrors?.servizio)} appearance-none`}
        >
          <option value="" disabled>
            Seleziona un servizio
          </option>
          {SERVIZI_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {state.fieldErrors?.servizio && (
          <p className="mt-2 text-sm text-red-600">{state.fieldErrors.servizio}</p>
        )}
      </div>

      <div>
        <label htmlFor="messaggio" className="eyebrow mb-2 block text-noir/50">
          Messaggio (facoltativo)
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={3}
          placeholder="Raccontaci cosa hai in mente…"
          className={`${fieldClasses()} resize-none`}
        />
      </div>

      {state.status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} strokeWidth={1.75} />
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
