import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-full-screen hero-overlay bg-gradient-to-br from-primary via-primary-light to-primary-soft">
        <div className="container-professional flex items-center h-full">
          <div className="text-center text-white w-full">
            <Link 
              to="/" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 group"
            >
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Link>
            <h1 className="heading-hero mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Learn about how we use cookies to enhance your browsing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-professional max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 text-sm text-muted-foreground">
              <strong>Last Updated:</strong> January 1, 2024
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better, faster, and safer experience by remembering your preferences and improving website functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      These cookies are necessary for the website to function properly. They enable basic features like page navigation, access to secure areas, and form submissions.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Session management</li>
                      <li>Security authentication</li>
                      <li>Form data persistence</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Analytics Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Page visit tracking</li>
                      <li>User behavior analysis</li>
                      <li>Performance monitoring</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Preference Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      These cookies remember your settings and preferences to provide a personalized experience.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Language preferences</li>
                      <li>Theme settings</li>
                      <li>Display customizations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      These cookies are used to deliver relevant advertisements and track the effectiveness of our marketing campaigns.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                      <li>Targeted advertising</li>
                      <li>Campaign performance</li>
                      <li>Social media integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use third-party services that place cookies on your device. These include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                  <li><strong>Google Ads:</strong> For advertising and remarketing purposes</li>
                  <li><strong>Social Media:</strong> For social sharing and engagement tracking</li>
                  <li><strong>Customer Support:</strong> For live chat and support services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have control over the cookies we use. You can manage your cookie preferences in several ways:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Browser Settings</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer. Please note that disabling cookies may affect website functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cookie Preferences</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You can update your cookie preferences at any time through our cookie banner or by contacting us directly.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Cookie Retention</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are retained for different periods depending on their type:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain until their expiration date or manual deletion</li>
                  <li><strong>Analytics Cookies:</strong> Typically retained for 12-24 months</li>
                  <li><strong>Preference Cookies:</strong> Retained for 12 months or until changed</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by updating the "Last Updated" date at the top of this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our use of cookies, please contact us at:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> contact@maintivo.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookiePolicy;