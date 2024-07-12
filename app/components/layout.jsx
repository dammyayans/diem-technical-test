import Footer from './ui/footer';
import Navbar from './ui/navbar';

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100dvh-27rem)] lg:min-h-[calc(100dvh-30rem)] container p-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
