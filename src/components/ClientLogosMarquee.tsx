"use client";

type Client = { name: string; logo: string | null };

export default function ClientLogosMarquee({ clients }: { clients: Client[] }) {
  return (
    <div className="overflow-hidden select-none min-w-0 -mx-2 sm:mx-0" aria-hidden="true">
      <div
        className="flex w-max animate-marquee-left"
        style={{ willChange: "transform" }}
      >
        {/* First set */}
        <div className="flex items-center gap-12 sm:gap-16 px-4 shrink-0">
          {clients.map((client, i) => (
            <div
              key={`a-${i}`}
              className="flex items-center justify-center w-36 h-22 sm:w-52 sm:h-28 shrink-0 bg-white rounded-lg border border-gray-200 shadow-sm"
              title={client.name}
            >
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="max-h-14 sm:max-h-16 w-auto object-contain px-2" />
              ) : (
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{client.name}</span>
              )}
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-12 sm:gap-16 px-4 shrink-0">
          {clients.map((client, i) => (
            <div
              key={`b-${i}`}
              className="flex items-center justify-center w-36 h-22 sm:w-52 sm:h-28 shrink-0 bg-white rounded-lg border border-gray-200 shadow-sm"
              title={client.name}
            >
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="max-h-14 sm:max-h-16 w-auto object-contain px-2" />
              ) : (
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{client.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
