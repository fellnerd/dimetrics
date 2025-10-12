import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

interface PageLayoutProps {
  children: React.ReactNode;
  backgroundColor?: "white" | "black" | "gray";
  textColor?: "white" | "black" | "gray";
  className?: string;
}

export function PageLayout({
  children,
  backgroundColor = "white",
  textColor = "black",
  className = "",
}: PageLayoutProps) {
  const backgroundClasses = {
    white: "bg-white",
    black: "bg-black",
    gray: "bg-gray-50",
  };

  const textClasses = {
    white: "text-white",
    black: "text-black",
    gray: "text-gray-900",
  };

  return (
    <div
      className={`min-h-screen ${backgroundClasses[backgroundColor]} ${textClasses[textColor]} ${className}`}
    >
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
