import "./globals.css";
import Topo from "./componets/Topo";
import Rodape from "./componets/Rodape";

export const metadata = {
  title: "Sorveteria Gelateria",
  description: "A melhor sorveteria da região",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
