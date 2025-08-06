import { US } from "country-flag-icons/react/3x2";
import { BR } from "country-flag-icons/react/3x2";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
  const [isEnglish, setEnglish] = useState(false);

  const handleToggle = () => {
    setEnglish((prev) => !prev); 
  };

  return (
    <div className="flex gap-2 items-center">
      {isEnglish ? (
        <button
          onClick={handleToggle}
          className={cn(
            "cursor-pointer fixed max-sm:hidden top-5 left-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
          )}
        >
          <BR title="Português" className="w-8" />
        </button>
      ) : (
        <button
          onClick={handleToggle}
          className={cn(
            "cursor-pointer fixed max-sm:hidden top-5 left-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
          )}
        >
          <US title="English" className="w-8 rounded-" />
        </button>
      )}
    </div>
  );
};
