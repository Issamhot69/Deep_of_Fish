import Image from "next/image";

const flags = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
];

export default function FlagSelector() {
  return (
    <div className="flex space-x-2 ml-4">
      {flags.map(flag => (
        <Image
          key={flag.code}
          src={`/images/flags/${flag.code}.png`}
          alt={flag.label}
          width={24}
          height={24}
          className="cursor-pointer hover:scale-110 transition-transform"
        />
      ))}
    </div>
  );
}
