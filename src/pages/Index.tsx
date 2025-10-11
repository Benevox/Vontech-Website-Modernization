import WriteUpSection from '@/components/WriteUpSection';
import { Header } from '@/components/Header';
import { CTABanner } from '@/components/CTABanner';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <WriteUpSection />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
};

export default Index;
