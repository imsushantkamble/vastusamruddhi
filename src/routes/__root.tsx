import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteChrome } from "../components/site/SiteChrome";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-sm tracking-[0.3em] text-primary uppercase">VASTUSAMRUDDHI</p>
        <h1 className="mt-4 font-display text-7xl text-gradient-green">404</h1>
        <h2 className="mt-2 text-xl font-medium">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The path you seek does not align. Return home to continue your journey.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border px-6 py-3 text-sm font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VASTUSAMRUDDHI — Vedic Vastu Consultation Experts Since 2008" },
      {
        name: "description",
        content:
          "VASTUSAMRUDDHI by Shri Ravindra & Smt. Riddhi Jadhav offers premium Vedic Vastu, Astrology, Numerology & Scientific Logo consultation across India and abroad. Non-demolition remedies, 46000+ happy clients.",
      },
      { name: "author", content: "VASTUSAMRUDDHI" },
      { name: "keywords", content: "Vastu consultant, Vedic Vastu, Vastu Shastra, Astrology, Numerology, Scientific Logo Design, Navi Mumbai Vastu, Ravindra Jadhav, Riddhi Jadhav, Vastusamruddhi" },
      { name: "theme-color", content: "#1B5E20" },
      { property: "og:title", content: "VASTUSAMRUDDHI — Vedic Vastu Consultation Experts" },
      { property: "og:description", content: "Transform your home, office and business through ancient Vedic wisdom. 18+ years, 46000+ happy clients." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "VASTUSAMRUDDHI" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Poppins:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "VASTUSAMRUDDHI",
          image: "/favicon.ico",
          description: "Vedic Vastu, Astrology, Numerology & Scientific Logo consultation since 2008.",
          founder: [
            { "@type": "Person", name: "Shri Ravindra Jadhav" },
            { "@type": "Person", name: "Smt. Riddhi Jadhav" },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No.3, Sai Sangat CHS, Sector-3, Sanpada",
            addressLocality: "Navi Mumbai",
            postalCode: "400705",
            addressCountry: "IN",
          },
          telephone: ["+91 9987260919", "+91 9967537718"],
          email: "vastusamruddhiweb@gmail.com",
          sameAs: ["https://www.instagram.com/_.vastusamruddhi", "https://g.page/r/vastusamruddhi/review"],
          foundingDate: "2008",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteChrome>
        <Outlet />
      </SiteChrome>
    </QueryClientProvider>
  );
}
