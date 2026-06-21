import Footer from "@/components/Footer";

export const metadata = {
  title: "Abdullah Naeem | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
