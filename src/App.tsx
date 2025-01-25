import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { FAQ } from '@/components/sections/faq';
import { Features } from '@/components/sections/features';
import { RegisterPage } from '@/pages/register';
import { TradeWorldLVDSPage } from '@/pages/trade-world-lvds';
import { SupportPage } from '@/pages/support';
import { PrivacyPage } from '@/pages/privacy';
import { TermsPage } from '@/pages/terms';
import { DisclaimerPage } from '@/pages/disclaimer';
import '@/lib/i18n';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ScrollToTop } from '@/components/scroll-to-top';
import {
  NotFoundPage,
  BadRequestPage,
  ServerErrorPage,
} from '@/components/error/error-pages';
import { useEffect } from 'react';

function HomePage() {
  const location = useLocation();
  const state = location.state as { scrollTo?: string };

  useEffect(() => {
    if (state?.scrollTo) {
      const element = document.querySelector(`#${state.scrollTo}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [state]);

  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <FAQ />
    </main>
  );
}

function App() {
  const location = useLocation();
  const currentPath = location.pathname === '/' ? '' : location.pathname;
  const currentUrl = `https://AlgoMaticTrader.ai/#${currentPath}`;

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <Helmet>
          <title>AlgoMaticTrader - Automated Trading Platform</title>
          <meta
            name="description"
            content="Experience the future of trading with AlgoMaticTrader. Advanced automation, risk management, and 24/7 reliability for consistent results."
          />

          {/* Open Graph meta tags */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:site_name" content="AlgoMaticTrader" />
          <meta
            property="og:title"
            content="AlgoMaticTrader - Automated Trading Platform"
          />
          <meta
            property="og:description"
            content="Experience the future of trading with AlgoMaticTrader. Advanced automation, risk management, and 24/7 reliability for consistent results."
          />
          <meta
            property="og:image"
            content="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&h=630&fit=crop"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:image:alt"
            content="AlgoMaticTrader - AI-Powered Trading Platform"
          />

          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@AlgoMaticTrader" />
          <meta name="twitter:url" content={currentUrl} />
          <meta
            name="twitter:title"
            content="AlgoMaticTrader - Automated Trading Platform"
          />
          <meta
            name="twitter:description"
            content="Experience the future of trading with AlgoMaticTrader. Advanced automation, risk management, and 24/7 reliability for consistent results."
          />
          <meta
            name="twitter:image"
            content="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&h=630&fit=crop"
          />
          <meta
            name="twitter:image:alt"
            content="AlgoMaticTrader - AI-Powered Trading Platform"
          />

          {/* WhatsApp specific */}
          <meta
            property="og:image:secure_url"
            content="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&h=630&fit=crop"
          />
        </Helmet>
        <ScrollToTop />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/trade-world-lvds" element={<TradeWorldLVDSPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />

            {/* Error routes */}
            <Route path="/400" element={<BadRequestPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/500" element={<ServerErrorPage />} />

            {/* Catch all route for 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
