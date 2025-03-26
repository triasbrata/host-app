"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Hook = dynamic(
  async () => {
    try {
      return await import("@subModules/company/index");
    } catch (error) {
      console.error(error);
      return await import("@/app/components/no-module");
    }
  },
  {
    ssr: false,
  }
);

export default function Company() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(Boolean(window.document));
    return () => {
      setShow(false);
    };
  }, []);
  return <>{show && <Hook />}</>;
}
