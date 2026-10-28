import "./globals.css";

export const metadata = {
  title: "AI LaunchPad | Build Your First AI Project in 60 Minutes",
  description: "Discover what you can build with AI, even if you are just getting started. Join a free, beginner-friendly online workshop designed for engineering students.",
  keywords: ["AI Workshop", "Engineering Students", "AI LaunchPad", "First AI Project", "Python", "JavaScript", "NxtWave Growth Project"],
  authors: [{ name: "AI LaunchPad Initiative" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070913",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
