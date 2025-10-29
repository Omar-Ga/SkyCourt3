import React from 'react';
import { useTranslation } from 'react-i18next';
import { User, Mail, MessageSquare, Send, Phone, MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactUs() {
  const { t } = useTranslation();
  const [result, setResult] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setResult(t('contact_us_sending'));
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "6f9ac6ea-31a0-4fbe-9c19-7164629b2770");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(t('contact_us_success'));
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    setIsSending(false);
  };

  return (
    <>
      <div className="grain-overlay" />
      <Header show={true} />
      <main className="flex-grow container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-black">
            {t('contact_us_title')}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {t('contact_us_subtitle')}
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white/50 p-8 sm:p-12 rounded-xl shadow-2xl backdrop-blur-lg">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact_us_name')}
                    required
                    className="pl-12 pr-4 py-3 w-full bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact_us_email')}
                    required
                    className="pl-12 pr-4 py-3 w-full bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                  />
                </div>
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  placeholder={t('contact_us_message')}
                  required
                  rows={6}
                  className="pl-12 pr-4 py-3 w-full bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 transform hover:scale-105 disabled:bg-gray-500 disabled:scale-100"
              >
                {isSending ? t('contact_us_sending') : t('contact_us_send')}
                {!isSending && <Send className="w-5 h-5" />}
              </button>
            </form>
            {result && (
              <p className="mt-6 text-center font-medium text-gray-800">{result}</p>
            )}
          </div>
        </div>

        {/* Direct Contact Methods */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light text-black mb-2">{t('contact_us_direct_title')}</h2>
            <p className="text-gray-600">{t('contact_us_direct_subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Phone Button */}
            <a
              href="tel:+201234567890"
              className="flex flex-col items-center justify-center p-6 bg-white/50 rounded-xl shadow-lg backdrop-blur-lg hover:bg-white/70 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-200 transition-colors">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{t('contact_us_phone')}</h3>
              <p className="text-sm text-gray-600">+20 123 456 7890</p>
            </a>

            {/* Email Button */}
            <a
              href="mailto:info@skycourt.com"
              className="flex flex-col items-center justify-center p-6 bg-white/50 rounded-xl shadow-lg backdrop-blur-lg hover:bg-white/70 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
                <Mail className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{t('contact_us_email_button')}</h3>
              <p className="text-sm text-gray-600">info@skycourt.com</p>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/201234567890?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20SkyCourt%20Mall"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-white/50 rounded-xl shadow-lg backdrop-blur-lg hover:bg-white/70 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-green-200 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{t('contact_us_whatsapp')}</h3>
              <p className="text-sm text-gray-600">{t('contact_us_chat_with_us')}</p>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}