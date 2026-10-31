import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCms } from '../context/CmsContext';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CMSAdminPage() {
  const { isAuthenticated, login } = useCms();
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(passwordInput);
    if (success) {
      // Redirect straight to live homepage where in-place editing toolbar is active
      navigate('/');
    } else {
      setError('Invalid Passkey. Please verify and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#001659] flex items-center justify-center p-6 font-body">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 sm:p-10 border border-white/10">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#ff5e14] text-white rounded-md mx-auto flex items-center justify-center font-heading font-black text-2xl mb-3 shadow-lg">
            DC
          </div>
          <h1 className="font-heading font-black text-2xl text-[#001659]">
            DeBaldiet CMS Portal
          </h1>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-heading">
            Live In-Place Site Editor
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#001659] mb-2">
              Administrator Passkey
            </label>
            <div className="relative">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter access code..."
                autoFocus
                className="w-full h-12 pl-4 pr-10 bg-[#f8f9fa] border border-[#d2d4d8] rounded-sm text-sm focus:outline-none focus:border-[#001659] focus:bg-white transition-all"
              />
              <Lock className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            </div>
            <p className="text-[11px] text-gray-400 mt-1.5">
              Default Master Passkey: <code className="text-[#ff5e14]">debaldiet2026!</code>
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full h-12 bg-[#001659] hover:bg-[#ff5e14] text-white font-heading font-bold text-sm uppercase tracking-wider transition-colors duration-200 rounded-sm shadow-md flex items-center justify-center space-x-2"
          >
            <span>Enter In-Place Editor</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-gray-500">
          <a href="/" className="hover:text-[#001659]">
            ← Return to Live Site
          </a>
          <span className="flex items-center space-x-1 text-emerald-600">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Encrypted Session</span>
          </span>
        </div>
      </div>
    </div>
  );
}
