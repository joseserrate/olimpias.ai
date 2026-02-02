import type { Metadata } from 'next';
import { AppleContactForm } from '@/components/forms/AppleContactForm';
import { AppleButton } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Olimpias AI to discuss your enterprise AI needs. Book a call or send us a message.',
};

export default function AppleContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="apple-container px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-[48px] md:text-[64px] font-semibold text-[#0B0B0D] mb-8 leading-[1.05] tracking-tight">
              Let's Talk
            </h1>
            <p className="text-[21px] md:text-[24px] text-[#4A4A50] leading-[1.4] max-w-3xl mx-auto">
              Ready to transform your operations with enterprise AI? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-[#FAFAFA] py-28 md:py-36">
        <div className="apple-container px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left: Contact Info (2 columns) */}
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-[28px] font-semibold text-[#0B0B0D] mb-8 tracking-tight">
                    Contact Information
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-3">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@olimpiasai.com"
                        className="text-[17px] text-[#0B0B0D] hover:opacity-70 transition-opacity"
                      >
                        contact@olimpiasai.com
                      </a>
                    </div>
                    <div>
                      <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-3">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/59100000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[17px] text-[#0B0B0D] hover:opacity-70 transition-opacity inline-flex items-center gap-2"
                      >
                        Send a Message
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </a>
                    </div>
                    <div>
                      <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#7A7A82] mb-3">
                        Location
                      </h3>
                      <p className="text-[17px] text-[#4A4A50] leading-[1.7]">
                        Bolivia<br />
                        Serving Latin America
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="p-8 bg-white/80 backdrop-blur-xl rounded-2xl border border-[#E6E6EA]/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                  <h3 className="text-[17px] font-semibold text-[#0B0B0D] mb-6">
                    Prefer Direct Contact?
                  </h3>
                  <div className="space-y-4">
                    <AppleButton
                      variant="secondary"
                      href="mailto:contact@olimpiasai.com"
                      className="w-full"
                    >
                      Send Email
                    </AppleButton>
                    <AppleButton
                      variant="secondary"
                      href="https://wa.me/59100000000"
                      className="w-full"
                    >
                      WhatsApp
                    </AppleButton>
                  </div>
                </div>
              </div>

              {/* Right: Form (3 columns) */}
              <div className="lg:col-span-3">
                <div className="p-10 md:p-12 bg-white/80 backdrop-blur-xl rounded-3xl border border-[#E6E6EA]/50 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                  <h2 className="text-[28px] font-semibold text-[#0B0B0D] mb-8 tracking-tight">
                    Send a Message
                  </h2>
                  <AppleContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="relative bg-white py-20 md:py-24 border-t border-[#E6E6EA]">
        <div className="apple-container px-6 md:px-8 text-center">
          <p className="text-[15px] text-[#7A7A82] tracking-wide">
            We typically respond within 24 hours · All inquiries are confidential
          </p>
        </div>
      </section>
    </>
  );
}
