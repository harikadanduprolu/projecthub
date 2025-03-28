
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, Users, Search, Lightbulb, MessageSquare, DollarSign } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-black/80 backdrop-blur-lg shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl gradient-text font-space-grotesk">ProCollab</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/projects" className="text-content-primary hover:text-neon-blue transition-colors">
              Projects
            </Link>
            <Link to="/teams" className="text-content-primary hover:text-neon-blue transition-colors">
              Teams
            </Link>
            <Link to="/mentors" className="text-content-primary hover:text-neon-blue transition-colors">
              Mentors
            </Link>
            <Link to="/funding" className="text-content-primary hover:text-neon-blue transition-colors">
              Funding
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-neon-purple hover:bg-neon-purple/80 text-white">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="absolute top-full left-0 right-0 bg-surface-dark/95 backdrop-blur-xl shadow-lg border-t border-white/10 py-6 px-4 animate-slide-down">
          <div className="flex flex-col gap-6">
            <Link 
              to="/projects" 
              className="flex items-center gap-3 text-content-primary hover:text-neon-purple transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Search size={18} />
              <span>Projects</span>
            </Link>
            <Link 
              to="/teams" 
              className="flex items-center gap-3 text-content-primary hover:text-neon-purple transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Users size={18} />
              <span>Teams</span>
            </Link>
            <Link 
              to="/mentors" 
              className="flex items-center gap-3 text-content-primary hover:text-neon-purple transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Lightbulb size={18} />
              <span>Mentors</span>
            </Link>
            <Link 
              to="/funding" 
              className="flex items-center gap-3 text-content-primary hover:text-neon-purple transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <DollarSign size={18} />
              <span>Funding</span>
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Link to="/login" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue/10">
                  Log In
                </Button>
              </Link>
              <Link to="/signup" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
