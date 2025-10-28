import React from 'react';
import { useTranslation } from 'react-i18next';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DirectContactOptions from '../components/DirectContactOptions';

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

        <DirectContactOptions />
      </main>
      <Footer />
    </>
  );
}