import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 bg-gradient-to-br from-primary via-primary-light to-primary-soft">
        <div className="container-professional">
          <div className="text-center text-white w-full">
            <Link 
              to="/" 
              className="inline-flex items-center text-white/80 hover:text-white mb-4 sm:mb-6 group text-sm"
            >
              <ArrowLeft className="mr-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Home
            </Link>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-3 sm:mb-4 md:mb-6">
              Terms of Service
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="container-professional max-w-4xl">
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
            <div className="mb-8 text-sm text-muted-foreground">
              <strong>Effective Date:</strong> January 1, 2024 | <strong>Last Updated:</strong> January 1, 2024
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using our website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We provide comprehensive business solutions and services, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Business architecture and strategic consulting</li>
                  <li>Web design and development</li>
                  <li>Business growth strategy and market positioning</li>
                  <li>Digital transformation and process optimization</li>
                  <li>Brand development and market structuring</li>
                  <li>Ongoing strategic partnership and support</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Providing accurate and complete information necessary for project execution</li>
                  <li>Timely feedback and approval of deliverables</li>
                  <li>Necessary access to systems, data, and personnel as required</li>
                  <li>Compliance with agreed project timelines and milestones</li>
                  <li>Payment of fees according to agreed terms</li>
                  <li>Maintaining confidentiality of proprietary methodologies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Fees are due according to the agreed payment schedule</li>
                  <li>Late payments may incur interest charges of 1.5% per month</li>
                  <li>All expenses must be pre-approved by the client</li>
                  <li>Refunds are subject to the terms outlined in individual contracts</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All methodologies, frameworks, templates, and proprietary tools remain the intellectual property of the service provider. Client-specific deliverables and recommendations become the property of the client upon full payment, unless otherwise agreed in writing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">6. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality regarding all client information and business operations. Both parties agree to execute appropriate non-disclosure agreements and implement necessary security measures to protect sensitive information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our total liability for any claim arising from our services is limited to the fees paid for the specific services that gave rise to the claim. We shall not be liable for indirect, incidental, consequential, or punitive damages.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the agreement with 30 days written notice. Upon termination, all work product completed to date will be delivered, and final payment will be due within 30 days.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of [State/Country], and any disputes shall be resolved through binding arbitration.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions regarding these terms, please contact us at:
                </p>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> contact@yektad.com
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

export default TermsOfService;