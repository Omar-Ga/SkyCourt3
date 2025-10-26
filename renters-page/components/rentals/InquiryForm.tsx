
import React, { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const InquiryForm = forwardRef<HTMLDivElement>((props, ref) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;

    if (!name || !email || !phone) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section ref={ref} className="relative py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/formbg/1920/1080')" }}>
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="relative container mx-auto px-6">
        <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">ابدأ رحلتك التجارية معنا</h2>
            <p className="mt-4 text-lg">املأ النموذج أدناه وسيقوم فريق المبيعات بالتواصل معك قريباً.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: 'easeOut' }}
             className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20"
          >
            {submitted ? (
              <div className="text-center text-white py-12">
                <h3 className="text-3xl font-bold">شكراً لك!</h3>
                <p className="mt-2">تم استلام استفسارك بنجاح. سنتواصل معك قريباً.</p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {error && <p className="text-red-300 bg-red-800/50 p-3 rounded-lg">الرجاء ملء جميع الحقول المطلوبة.</p>}
                <input type="text" name="name" placeholder="الاسم الكامل / اسم الشركة" required className="w-full bg-white/20 border-0 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-highlight outline-none" />
                <input type="email" name="email" placeholder="البريد الإلكتروني" required className="w-full bg-white/20 border-0 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-highlight outline-none" />
                <input type="tel" name="phone" placeholder="رقم الهاتف" required className="w-full bg-white/20 border-0 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-highlight outline-none" />
                <select name="activity" className="w-full bg-white/20 border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-highlight outline-none appearance-none">
                    <option>نوع النشاط التجاري</option>
                    <option>ملابس</option>
                    <option>مطاعم ومقاهي</option>
                    <option>إلكترونيات</option>
                    <option>ترفيه</option>
                    <option>أخرى</option>
                </select>
                <textarea name="message" placeholder="رسالة إضافية" rows={4} className="w-full bg-white/20 border-0 rounded-lg p-3 text-white placeholder-gray-300 focus:ring-2 focus:ring-highlight outline-none"></textarea>
                <button type="submit" className="w-full bg-highlight text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-700 transition-colors duration-300">إرسال الاستفسار</button>
            </form>
            )}
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: 'easeOut' }}
             className="text-white space-y-6"
          >
              <h3 className="text-2xl font-bold">تواصل مباشر مع إدارة المبيعات والتسويق</h3>
              <a href="https://wa.me/201234567890?text=مرحبا، أرغب في الاستفسار عن التأجير" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-green-500 p-4 rounded-lg hover:bg-green-600 transition-colors">
                  <FaWhatsapp size={32} />
                  <span className="font-semibold text-lg">تحدث معنا عبر واتساب</span>
              </a>
              <a href="tel:+201234567890" className="flex items-center gap-4 hover:text-gray-300 transition-colors">
                  <FaPhone size={24} />
                  <span>+20 123 456 7890</span>
              </a>
              <a href="mailto:sales@skycourtmall.com" className="flex items-center gap-4 hover:text-gray-300 transition-colors">
                  <FaEnvelope size={24} />
                  <span>sales@skycourtmall.com</span>
              </a>
              <div className="flex items-center gap-4">
                  <FaMapMarkerAlt size={24} />
                  <span>مول سكاي كورت - الساحل الشمالي</span>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default InquiryForm;
