import Footer from "@/components/Footer";

export const metadata = {
  title: "Abdullah | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
