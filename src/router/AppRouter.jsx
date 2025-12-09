import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Consultations from "../pages/Consultations";
import Wallet from "../pages/Wallet";
import Schedule from "../pages/Schedule";
import Forum from "../pages/Forum";
import DownloadApp from "../pages/DownloadApp";
import Faq from "../pages/Faq";
import Testimonials from "../pages/Testimonials";
import JoinNow from "../pages/JoinNow";
import Onboarding from "../pages/Onboarding"; // <-- NEW PAGE

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/join-now" element={<JoinNow />} />
      <Route path="/consultations" element={<Consultations />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/download-app" element={<DownloadApp />} />

      {/* 404 fallback */}
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center text-2xl text-[#2F5E3A]">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
  );
}
