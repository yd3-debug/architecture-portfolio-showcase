import { useState, useEffect } from 'react';
import { X, Settings } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'custom');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-white/10">
      <div className="container-professional py-8">
        {!showPreferences ? (
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-serif text-lg font-light text-white mb-2">We use cookies</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed max-w-2xl">
                We use cookies to enhance your browsing experience and analyze our traffic.{' '}
                <a href="/legal/cookie-policy" className="text-white/80 hover:text-white border-b border-white/30 hover:border-white/60 transition-all">
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4 lg:flex-shrink-0">
              <button
                onClick={() => setShowPreferences(true)}
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-light transition-all"
              >
                <Settings className="w-4 h-4" />
                Preferences
              </button>
              <button 
                onClick={handleRejectAll}
                className="text-white/60 hover:text-white text-sm font-light transition-all"
              >
                Reject
              </button>
              <button 
                onClick={handleAcceptAll}
                className="text-white text-sm font-light border-b border-white/40 hover:border-white transition-all pb-0.5"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-light text-white">Cookie Preferences</h3>
              <button
                onClick={() => setShowPreferences(false)}
                className="text-white/60 hover:text-white transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 border border-white/10 rounded">
                <div>
                  <h4 className="text-white font-light text-sm">Essential Cookies</h4>
                  <p className="text-sm text-white/50 font-light">Required for basic functionality</p>
                </div>
                <span className="text-xs text-white/40 font-light">Always Active</span>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-white/10 rounded">
                <div>
                  <h4 className="text-white font-light text-sm">Analytics Cookies</h4>
                  <p className="text-sm text-white/50 font-light">Help us improve performance</p>
                </div>
                <input 
                  type="checkbox" 
                  defaultChecked 
                  className="w-4 h-4 rounded border-white/20 bg-transparent checked:bg-white checked:border-white"
                />
              </div>
              
              <div className="flex items-center justify-between p-4 border border-white/10 rounded">
                <div>
                  <h4 className="text-white font-light text-sm">Marketing Cookies</h4>
                  <p className="text-sm text-white/50 font-light">Used for relevant advertisements</p>
                </div>
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-white/20 bg-transparent checked:bg-white checked:border-white"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4 justify-end">
              <button 
                onClick={handleRejectAll}
                className="text-white/60 hover:text-white text-sm font-light transition-all"
              >
                Reject All
              </button>
              <button 
                onClick={handleSavePreferences}
                className="text-white text-sm font-light border-b border-white/40 hover:border-white transition-all pb-0.5"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
