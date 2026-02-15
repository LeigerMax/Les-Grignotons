"use client";
import { useState } from 'react'

export default function CertificateModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="mt-4 mb-2 flex items-center justify-center mx-auto focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Voir le certificat HK"
      >
        <img
          src="/certificat-spw.webp"
          alt="Certificat HK55220001"
          className="h-30 w-auto rounded shadow-md border border-gray-300 hover:shadow-lg transition duration-200"
        />
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setOpen(false)}
        >
          <div className="relative">
            <img
              src="/certificat-spw.webp"
              alt="Certificat HK55220001"
              className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl border border-primary"
            />
            <button
              className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 text-gray-700 hover:text-primary focus:outline-none"
              onClick={e => { e.stopPropagation(); setOpen(false); }}
              aria-label="Fermer"
            >
              <span style={{fontSize: '1.5rem'}}>×</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
