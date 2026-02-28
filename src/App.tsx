import React, { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useTimeAtJob } from './hooks/useTimeAtJob';

type Page = 'home' | 'work' | 'contact';

function App() {
  const { theme, toggleTheme } = useTheme();
  const timeAtJob = useTimeAtJob();
  const [page, setPage] = useState<Page>('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const goToPage = (nextPage: Page) => {
    setPage(nextPage);
    setMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 bg-white min-h-screen text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
        <div className="absolute top-8 left-8 z-20">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded-full bg-transparent border border-gray-300/60 dark:border-gray-600/60 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

          {menuOpen && (
            <div className="mt-3 w-40 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg p-2">
              <button
                onClick={() => goToPage('home')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  page === 'home'
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => goToPage('work')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  page === 'work'
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                Work
              </button>
              <button
                onClick={() => goToPage('contact')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  page === 'contact'
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                Contact
              </button>
            </div>
          )}
        </div>

        <div className="absolute top-8 right-8 z-20">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-900 dark:bg-white w-8 h-8 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} className="text-gray-900" /> : <Moon size={16} className="text-white" />}
          </button>
        </div>

        <main className="container mx-auto px-8 max-w-3xl flex-grow py-32">
          {page === 'home' && (
            <div className="space-y-32">
              <section className="space-y-8">
                <h1 className="text-3xl font-bold opacity-0 animate-fade-in">Hi, I'm Alejandro.</h1>
                <div className="space-y-6">
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed opacity-0 animate-fade-in animation-delay-100">
                    I've been working as a Data & AI Technical Sales Engineer at IBM for the last {timeAtJob.days} days, {timeAtJob.hours} hours, {timeAtJob.minutes} minutes, and {timeAtJob.seconds} seconds.
                  </p>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed opacity-0 animate-fade-in animation-delay-200">
                    I am based in Orlando. Keep up with me on{' '}
                    <a
                      href="https://www.linkedin.com/in/alejandroobrador"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
                    >
                      LinkedIn
                    </a>{' '}
                    or{' '}
                    <a
                      href="https://www.instagram.com/aleobrador1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
                    >
                      Instagram
                    </a>
                    .
                  </p>
                </div>
              </section>

              <section className="space-y-12">
                <h2 className="text-sm text-gray-400 dark:text-gray-500 font-normal tracking-widest opacity-0 animate-fade-in animation-delay-300">
                  PREVIOUSLY
                </h2>
                <div className="space-y-16">
                  <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in animation-delay-300">
                    <h3 className="text-xl font-normal">
                      <a
                        href="https://www.mastec.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                      >
                        MasTec Energy
                      </a>
                    </h3>
                    <div>
                      <p className="text-xl font-normal mb-2">IT Specialist</p>
                      <p className="text-sm text-gray-400">2021-2022</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in animation-delay-400">
                    <h3 className="text-xl font-normal">
                      <a
                        href="https://it.fiu.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                      >
                        FIU
                      </a>
                    </h3>
                    <div>
                      <p className="text-xl font-normal mb-2">IT Support & Programming Assistant</p>
                      <p className="text-sm text-gray-400">2021-2021</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {page === 'work' && (
            <section className="space-y-6 opacity-0 animate-fade-in animation-delay-100">
              <h1 className="text-3xl font-bold">Work</h1>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">Building something. Come back soon.</p>
            </section>
          )}

          {page === 'contact' && (
            <section className="space-y-10 opacity-0 animate-fade-in animation-delay-100">
              <h1 className="text-3xl font-bold">Contact</h1>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                The best way to reach me is through the channels below.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hello@alejandroobrador.com"
                  className="block border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
                >
                  <p className="text-sm text-gray-400 dark:text-gray-500 tracking-widest mb-1">EMAIL</p>
                  <p className="text-lg">hello@alejandroobrador.com</p>
                </a>

                <a
                  href="https://www.linkedin.com/in/alejandroobrador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
                >
                  <p className="text-sm text-gray-400 dark:text-gray-500 tracking-widest mb-1">LINKEDIN</p>
                  <p className="text-lg">linkedin.com/in/alejandroobrador</p>
                </a>

                <a
                  href="https://www.instagram.com/aleobrador1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors"
                >
                  <p className="text-sm text-gray-400 dark:text-gray-500 tracking-widest mb-1">INSTAGRAM</p>
                  <p className="text-lg">@aleobrador1</p>
                </a>
              </div>
            </section>
          )}
        </main>

        <footer className="py-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Made with <span className="text-red-500 dark:text-red-400">&#10084;</span> by Alejandro.{' '}
          <a
            href="https://github.com/aobrador/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
          >
            GitHub Repository
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
