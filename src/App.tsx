import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useTimeAtJob } from './hooks/useTimeAtJob';

function App() {
  const { theme, toggleTheme } = useTheme();
  const timeAtJob = useTimeAtJob();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 bg-white min-h-screen text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
        <div className="absolute top-8 right-8">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-900 dark:bg-white w-8 h-8 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} className="text-gray-900" /> : <Moon size={16} className="text-white" />}
          </button>
        </div>

        <main className="container mx-auto px-8 max-w-3xl flex-grow py-32">
          <div className="space-y-32">
            <section className="space-y-8">
              <h1 className="text-3xl font-bold opacity-0 animate-fade-in">
                Hi, I'm Alejandro.
              </h1>
              <div className="space-y-6">
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed opacity-0 animate-fade-in animation-delay-100">
                  I've been working as a Data & AI Technical Sales Engineer at IBM for the last {timeAtJob.days} days, {timeAtJob.hours} hours, {timeAtJob.minutes} minutes, and {timeAtJob.seconds} seconds.
                </p>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed opacity-0 animate-fade-in animation-delay-200">
                  I am based in Miami. Keep up with me on{' '}
                  <a href="https://www.linkedin.com/in/alejandroobrador" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
                    LinkedIn
                  </a>{' '}
                  or{' '}
                  <a href="https://www.instagram.com/aleobrador1" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
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
                    <a href="https://www.mastec.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
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
                    <a href="https://it.fiu.edu" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      FIU
                    </a>
                  </h3>
                  <div>
                    <p className="text-xl font-normal mb-2">IT Support & Programming Assistant</p>
                    <p className="text-sm text-gray-400">2021-2021</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in animation-delay-500">
                  <h3 className="text-xl font-normal">
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                      Rdio
                    </a>
                  </h3>
                  <div>
                    <p className="text-xl font-normal mb-2">UX Design Co-op</p>
                    <p className="text-sm text-gray-400">2014</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
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