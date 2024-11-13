import { Lato } from "next/font/google";
import "@/public/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NewNavbar from "@/components/NewNavbar/NewNavbar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const roboto = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Removed `500`
});
export const metadata = {
  icon: "./favicon.ico",
  title: "ZDViewer-3D Design tool in the browser with real-time collaboration",
  description:
    "ZDViewer is a free 3D design software with real-time collaboration to create web interactive experiences in the browser. Easy 3d modeling, animation, textures, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NewNavbar />
        {children}
        <SpeedInsights />
        <ToastContainer limit={2} autoClose={1000} />
      </body>
    </html>
  );
}
