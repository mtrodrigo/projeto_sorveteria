import "./globals.css";


export const metadata = {
  title: "Sorveteria Gelateria",
  description: "A melhor sorveteria da região",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
