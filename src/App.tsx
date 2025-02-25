import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { FAQ } from '@/components/sections/faq';
import { Features } from '@/components/sections/features';
import { SignInPage } from '@/pages/auth/sign-in';
import { SignUpPage } from '@/pages/auth/sign-up';

import { PartnerFormPage } from '@/pages/partner-form';
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
import { AuriPage } from './pages/auri';
import { MindOfAuriPage } from '@/pages/mind-of-auri';
import { ClerkProvider } from '@clerk/clerk-react';
import { ProtectedRoute } from './components/auth/protected-route';
import { Toaster } from '@/components/ui/toaster';
import { RedirectIfAuthenticated } from './components/auth/redirect-if-authenticated';
import { DashboardPage } from './pages/dashboard';
import { DashboardLayout } from './components/layout/dashboard-layout';
import { DefaultLayout } from './components/layout/default-layout';
import { AuthProvider } from './components/auth/auth-provider';

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

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
  const currentUrl = `https://AlgoMaticTrader.com/#${currentPath}`;

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="algmatic-ui-theme">
          <AuthProvider>
            <div className="relative min-h-screen flex flex-col font-sans">
              <Helmet>
                <title>Auri - Automated Trading Platform</title>
                <meta
                  name="description"
                  content="Experience the future of trading with Auri. Advanced automation, risk management, and 24/7 reliability for consistent results."
                />

                {/* Open Graph meta tags */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:site_name" content="Auri" />
                <meta
                  property="og:title"
                  content="Auri - Automated Trading Platform"
                />
                <meta
                  property="og:description"
                  content="Experience the future of trading with Auri. Advanced automation, risk management, and 24/7 reliability for consistent results."
                />
                <meta
                  property="og:image"
                  content="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&h=630&fit=crop"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                  property="og:image:alt"
                  content="Auri - AI-Powered Trading Platform"
                />

                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@Auri" />
                <meta name="twitter:url" content={currentUrl} />
                <meta
                  name="twitter:title"
                  content="Auri - Automated Trading Platform"
                />
                <meta
                  name="twitter:description"
                  content="Experience the future of trading with Auri. Advanced automation, risk management, and 24/7 reliability for consistent results."
                />
                <meta
                  name="twitter:image"
                  content="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&h=630&fit=crop"
                />
                <meta
                  name="twitter:image:alt"
                  content="Auri - AI-Powered Trading Platform"
                />

                {/* WhatsApp specific */}
                <meta
                  property="og:image:secure_url"
                  content="https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=1200&h=630&fit=crop"
                />
              </Helmet>
              <ScrollToTop />
              <Routes>
                {/* Public routes with DefaultLayout */}
                <Route element={<DefaultLayout />}>
                  <Route
                    index
                    element={
                      <RedirectIfAuthenticated>
                        <AuriPage />
                      </RedirectIfAuthenticated>
                    }
                  />
                  <Route
                    path="/sign-up"
                    element={
                      <RedirectIfAuthenticated>
                        <SignUpPage />
                      </RedirectIfAuthenticated>
                    }
                  />
                  <Route
                    path="/sign-in"
                    element={
                      <RedirectIfAuthenticated>
                        <SignInPage />
                      </RedirectIfAuthenticated>
                    }
                  />
                  <Route path="/disclaimer" element={<DisclaimerPage />} />
                  <Route path="/features" element={<HomePage />} />
                  <Route path="/mind-of-auri" element={<MindOfAuriPage />} />
                  <Route path="/partner-form" element={<PartnerFormPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                </Route>

                {/* Protected routes with DashboardLayout */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <DashboardLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<DashboardPage />} />
                  {/* Add other dashboard routes here */}
                </Route>

                {/* Error routes */}
                <Route path="/400" element={<BadRequestPage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="/500" element={<ServerErrorPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ClerkProvider>
  );
}

export default App;
