"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const Hook = dynamic(
  async () => {
    const mod = await import("@subModules/notification/index");
    return mod.Hook;
  },
  {
    ssr: false,
  }
);

export default function Notification() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(Boolean(window.document));
    return () => {
      setShow(false);
    };
  }, []);
  return <>{show && <Hook />}</>;
}
