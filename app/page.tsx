'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to "/dashboard" after component mounts
    router.push("/dashboard");
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return null; // No need to render anything in this component
}

