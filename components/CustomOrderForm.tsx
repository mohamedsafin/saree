"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";

const types = ["Deity vastram / pavadai", "Bulk sarees", "Bulk veshtis & angavastrams", "Something else"];

export default function CustomOrderForm() {
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const phone = String(f.get("phone") ?? "").trim();
    if (!name || !phone) {
      setError("Add your name and phone number so we can reply.");
      return;
    }
    setError("");
    const lines = [
      "Vanakkam! I'd like to place a custom order.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Order type: ${f.get("type")}`,
      f.get("size") && `Idol height / sizes: ${f.get("size")}`,
      f.get("qty") && `Quantity: ${f.get("qty")}`,
      f.get("date") && `Needed by: ${f.get("date")}`,
      f.get("notes") && `Details: ${f.get("notes")}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <label>
          <span>Your name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Phone or WhatsApp</span>
          <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
        </label>
      </div>
      <label>
        <span>What do you need?</span>
        <select name="type" defaultValue={types[0]}>
          {types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <div className="form__row">
        <label>
          <span>Idol height or sizes</span>
          <input name="size" placeholder="e.g. 14 inch" />
        </label>
        <label>
          <span>Quantity</span>
          <input name="qty" type="number" min="1" placeholder="1" />
        </label>
      </div>
      <label>
        <span>Needed by</span>
        <input name="date" type="date" />
      </label>
      <label>
        <span>Colours, border and anything else</span>
        <textarea name="notes" rows={4} placeholder="e.g. Red silk with a gold temple border, for Navaratri" />
      </label>
      {error && (
        <p className="form__error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="button button--block">
        Send on WhatsApp
      </button>
      <p className="form__hint">This opens WhatsApp with your details filled in, ready to send.</p>
    </form>
  );
}
