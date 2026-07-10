"use client";

import { Bot } from "lucide-react";
import { useState } from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          fixed
          bottom-6
          right-6
          bg-blue-600
          text-white
          p-4
          rounded-full
          shadow-xl
          z-50
        "
      >
        <Bot size={28} />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold">
                AI Travel Assistant
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-xl"
              >
                ✕
              </button>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Destination"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Budget (₹)"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="date"
                className="w-full border rounded-xl p-4"
              />

              <select
                className="w-full border rounded-xl p-4"
              >
                <option>1 Traveller</option>
                <option>2 Travellers</option>
                <option>Family</option>
              </select>

              <button
                type="submit"
                className="
                  w-full
                  bg-blue-600
                  text-white
                  py-4
                  rounded-xl
                "
              >
                Get AI Recommendation
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}