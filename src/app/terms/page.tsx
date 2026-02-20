import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-28 pb-24 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-muted">
            Last updated: February 21, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-base leading-relaxed text-white/70">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the HYPE! mobile application (&quot;App&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">2. Description of Service</h2>
            <p>
              HYPE! is a habit tracking and personal productivity application that provides features including but not limited to habit tracking (HabitForge), journalling, task management (CrushList), mood tracking, and related services. The App is available on iOS and Android platforms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">3. User Accounts</h2>
            <ul className="ml-5 list-disc space-y-2">
              <li>You must be at least 13 years of age to create an account and use the App.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree to provide accurate and complete information when creating your account.</li>
              <li>You are solely responsible for all activities that occur under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">4. User Data &amp; Privacy</h2>
            <p>
              Your privacy is important to us. All personal data, journal entries, habit logs, and mood data are encrypted and stored securely. We do not sell your personal data to third parties. Please refer to our <Link href="/privacy" className="text-lime underline underline-offset-2 hover:text-lime/80">Privacy Policy</Link> for detailed information on how we collect, use, and protect your data.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">5. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Use the App for any unlawful purpose or in violation of any applicable laws.</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the App.</li>
              <li>Interfere with or disrupt the integrity or performance of the App.</li>
              <li>Attempt to gain unauthorized access to the App or its related systems.</li>
              <li>Use automated scripts or bots to access the App.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the App — including but not limited to text, graphics, logos, icons, images, and software — are the exclusive property of HYPE! and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">7. Subscriptions &amp; Payments</h2>
            <ul className="ml-5 list-disc space-y-2">
              <li>Certain features of the App may require a paid subscription.</li>
              <li>Subscription fees are billed in advance on a recurring basis (monthly or annually).</li>
              <li>You may cancel your subscription at any time through your app store account settings.</li>
              <li>Refunds are handled in accordance with the policies of the Apple App Store or Google Play Store.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">8. Disclaimer of Warranties</h2>
            <p>
              The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. HYPE! does not warrant that the App will be uninterrupted, error-free, or free of harmful components. The App is not intended to provide medical, psychological, or professional health advice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, HYPE! and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App, regardless of the cause of action or the theory of liability.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">10. Termination</h2>
            <p>
              We may terminate or suspend your access to the App immediately, without prior notice, for any reason including breach of these Terms. Upon termination, your right to use the App will cease immediately. You may also delete your account at any time through the App settings.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes through the App or via email. Your continued use of the App after such changes constitutes your acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:super@sidzsol.com" className="text-lime underline underline-offset-2 hover:text-lime/80">
                super@sidzsol.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
