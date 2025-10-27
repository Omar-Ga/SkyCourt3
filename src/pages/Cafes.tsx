import { useTranslation } from 'react-i18next';
import { cafes, Cafe } from '../data/cafes';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cafes() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header show={true} />
      <main className="flex-grow pt-20">
        <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 sm:py-24">
          <img 
            src="/hero section/cafe-with-waterfall.webp" 
            alt="A beautiful cafe with a waterfall in the background" 
            className="absolute inset-0 w-full h-full object-cover opacity-30" 
            fetchpriority="high" 
            loading="eager" 
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{t('cafes.title')}</h1>
            <p className="mt-4 text-lg sm:text-xl opacity-90">
              {t('cafes_subheadline')}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {cafes.map((cafe: Cafe) => (
                <div key={cafe.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center mb-4">
                      <img className="h-20 w-20 rounded-full object-cover border-2 border-purple-500 p-1 mr-4" src={cafe.logoUrl} alt={`${t(cafe.nameKey)} logo`} />
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{t(cafe.nameKey)}</h2>
                        <p className="text-purple-600 text-sm mt-1">{t(cafe.taglineKey)}</p>
                        <p className="text-gray-500 text-sm">{cafe.phone}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {cafe.details.map((detail, index) => (
                        <img key={index} className="h-24 w-full object-cover rounded-md shadow-sm" src={detail.imageUrl} alt={`${t(cafe.nameKey)} image ${index + 1}`} />
                      ))}
                    </div>
                    <div className="mt-4 text-gray-700 text-sm space-y-1">
                      {cafe.details.map((detail, index) => (
                        <p key={index}>• {t(detail.descriptionKey)}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
