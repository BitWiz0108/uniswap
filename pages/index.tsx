import { useState } from "react";
import { useRouter } from "next/router";

import Button from "@/components/Button";

export default function Home() {
  const router = useRouter();

  const [showButton, setShowButton] = useState<boolean>(false);

  const handleVideoEnd = () => {
    setShowButton(true);
  };

  return (
    <div className="w-full h-screen overflow-x-hidden overflow-y-auto">
      <div className="relative w-full h-screen min-h-[640px] pb-24 lg:pb-36 flex flex-col justify-center items-center">
        <div className="absolute left-0 top-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -left-4 -top-4 -right-4 -bottom-4">
            <video
              muted
              autoPlay
              playsInline
              className="w-full h-full object-cover"
              src="/videos/sample.mp4"
              onEnded={handleVideoEnd}
            />
          </div>
        </div>
        {showButton && (
          <div className="z-10">
            <Button
              label="Go to the site"
              onClick={() => router.push("/site")}
            />
          </div>
        )}
      </div>
    </div>
  );
}
