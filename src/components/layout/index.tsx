import { Footer } from "./footer";
import { Header } from "./header";

interface IProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-5xl px-4 py-2 mx-auto">
      <Header />
      <main className="my-8 md:my-16 flex-1">{children}</main>
      <Footer />
    </div>
  );
};
