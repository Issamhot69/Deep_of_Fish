// app/components/AgentCard.tsx
import React from "react";

interface AgentProps {
  name: string;
  role: string;
  image: string;
}

export default function AgentCard({ name, role, image }: AgentProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto" />
      <h3 className="text-xl font-semibold mt-4 text-center">{name}</h3>
      <p className="text-gray-600 text-center">{role}</p>
    </div>
  );
}
