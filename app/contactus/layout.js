import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "ZDViewer-Contact to do great",
  description:
    "ZDViewer is a free 3D design software with real-time collaboration to create web interactive experiences in the browser. Easy 3d modeling, animation, textures, and more.",
};

export default function ContactLayout({ children }) {
  return (
    <main>
      <ToastContainer />
      {children}
    </main>
  );
}
