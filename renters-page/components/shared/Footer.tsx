
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">سكاي كورت مول</h3>
            <p className="text-gray-400">
              أكبر وجهة تجارية على الساحل الشمالي، نقدم تجربة تسوق وترفيه فريدة.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">المتاجر</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الفعاليات</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">الوظائف</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-2 text-gray-400">
              <li>الكيلو 136، سيدي عبدالرحمن</li>
              <li>الساحل الشمالي، مصر</li>
              <li>هاتف: +20 123 456 7890</li>
              <li>بريد: info@skycourtmall.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform hover:scale-110"><FaWhatsapp size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} سكاي كورت مول. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
