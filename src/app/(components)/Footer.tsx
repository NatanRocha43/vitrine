'use client';

export default function Footer() {
  return (
    <footer className="bg-neutral-100 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-neutral-500 text-sm select-none">
        &copy; {new Date().getFullYear()} Natan Front-end. Todos os direitos reservados.
      </div>
    </footer>
  );
}
