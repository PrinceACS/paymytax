"use client";
import Image from "next/image";
import React from "react";

interface TestimonialCardProps {
  avatarSrc: string;
  avatarFallbackText: string;
  name: string;
  title: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatarSrc,
  avatarFallbackText,
  name,
  title,
  content,
}) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center mr-4">
          <Image
            src={avatarSrc}
            alt={avatarFallbackText}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default TestimonialCard;
