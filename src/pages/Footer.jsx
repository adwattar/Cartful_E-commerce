import {
  Github,
  Linkedin,
  Mail,
  Instagram
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 text-center mt-[-40px]">
      <p className="text-sm">
        👨‍💻 This website was fully developed by   
        <span className="text-white font-semibold"> Ahmed Moatamed  </span>  
        using React and Tailwind.
      </p>
      <p className="text-xs mt-1 text-gray-500">© {new Date().getFullYear()} – جميع الحقوق محفوظة</p>

      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/ahmed" target="_blank" className="hover:text-white transition">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com/in/ahmed" target="_blank" className="hover:text-white transition">
          <Linkedin size={20} />
        </a>
        <a href="mailto:ahmed@example.com" className="hover:text-white transition">
          <Mail size={20} />
        </a>
        <a href="https://instagram.com/ahmed" target="_blank" className="hover:text-white transition">
          <Instagram size={20} />
        </a>
      </div>
    </footer>
  );
}
