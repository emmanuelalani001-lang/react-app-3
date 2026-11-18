function Footer({ className }) {
  return (
    <>
      <footer className={`${className} h-15 bg-blue-400 w-full mt-auto`}>
        <div className="flex items-center text-white text-sm justify-center h-full">
          © 2026 TodoApp. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
