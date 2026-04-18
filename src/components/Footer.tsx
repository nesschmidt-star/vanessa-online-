import { Instagram, Youtube, Linkedin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:row items-center justify-between gap-6 text-[12px] text-muted font-medium tracking-wide">
          <div className="flex flex-col md:row items-center gap-4">
            <div className="font-bold text-brand-dark tracking-tighter uppercase whitespace-nowrap">
              VANESSA <span className="text-brand">SCHMIDT</span>
            </div>
            <span>&copy; 2026 Vanessa Schmidt Nutricionista Ltda.</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#flexslim" className="hover:text-brand-dark transition-colors font-bold text-brand">FlexSlim</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Termos</a>
            <a href="#" className="hover:text-brand-dark transition-colors">CRN 9, 18829</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
