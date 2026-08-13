"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE_ENDPOINT } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({
  subject,
  submitLabel = "Enviar",
  motivoOptions,
  successMessage = "¡Gracias! Recibimos tu mensaje y nuestro equipo se va a comunicar con vos pronto.",
}: {
  subject: string;
  submitLabel?: string;
  motivoOptions?: string[];
  successMessage?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-ink/15 bg-white/70 p-6 text-sm leading-relaxed text-ink">
        {successMessage}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <input type="hidden" name="_subject" value={subject} />

      <Field label="Nombre y apellido" name="nombre" autoComplete="name" required />
      <Field
        label="Correo electrónico"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <Field
        label="Teléfono o WhatsApp"
        name="telefono"
        type="tel"
        autoComplete="tel"
        required
      />
      <Field label="País y ciudad" name="ubicacion" required />

      {motivoOptions && (
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink sm:col-span-2">
          Motivo de la consulta
          <select
            name="motivo"
            required
            defaultValue=""
            className="rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm font-normal text-ink focus:border-ember-dark focus:outline-none"
          >
            <option value="" disabled>
              Elegí una opción
            </option>
            {motivoOptions.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
      )}

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink sm:col-span-2">
        Mensaje
        <textarea
          name="mensaje"
          required
          rows={5}
          className="rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm font-normal text-ink focus:border-ember-dark focus:outline-none"
        />
      </label>

      <label className="flex items-start gap-2.5 text-xs leading-relaxed text-muted sm:col-span-2">
        <input
          type="checkbox"
          name="consentimiento"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink/30"
        />
        Acepto que INBREP trate los datos enviados en este formulario para responder mi
        consulta.
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ember-dark px-6 py-3 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-ember disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : submitLabel}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-ember-dark">
            No pudimos enviar tu mensaje. Probá de nuevo o escribinos por WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
      {label}
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="rounded-xl border border-ink/15 bg-paper px-4 py-2.5 text-sm font-normal text-ink focus:border-ember-dark focus:outline-none"
      />
    </label>
  );
}
