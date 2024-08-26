import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { Main } from "@/pages/landing/main";
import { Dashboard, Auth } from "@/layouts";
import { NsfwDetection } from "@/pages/landing/nsfw-detection";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/nsfw-detection" element={<NsfwDetection />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
