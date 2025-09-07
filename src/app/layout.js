import "./globals.css";

export const metadata = {
    metadataBase: new URL('https://cv.cdn1.dev'),
    title: "Страница разработчика",
    description: "Страница разработчика",
    openGraph: {
        locale: 'ru_RU',
        type: 'website',
        title: "Страница разработчика",
        description: "Страница разработчика",
        url: 'https://cv.cdn1.dev/'
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
