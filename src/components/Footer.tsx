import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const legalDocuments = [
    {
      title: "Privacy Policy",
      content: `
        <h3>Privacy Policy</h3>
        <p><strong>Effective Date:</strong> January 1, 2024</p>
        
        <h4>1. Information We Collect</h4>
        <p>We collect information you provide directly to us, such as when you contact us through our website, request our services, or communicate with us via email or phone.</p>
        
        <h4>2. How We Use Your Information</h4>
        <ul>
          <li>To respond to your inquiries and provide our services</li>
          <li>To communicate with you about our business architecture services</li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations</li>
        </ul>
        
        <h4>3. Information Sharing</h4>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
        
        <h4>4. Data Security</h4>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h4>5. Contact Us</h4>
        <p>If you have questions about this Privacy Policy, please contact us at contact@businessarchitecture.com</p>
      `
    },
    {
      title: "Terms of Service",
      content: `
        <h3>Terms of Service</h3>
        <p><strong>Effective Date:</strong> January 1, 2024</p>
        
        <h4>1. Acceptance of Terms</h4>
        <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h4>2. Service Description</h4>
        <p>We provide business architecture consulting services, including but not limited to:</p>
        <ul>
          <li>Enterprise architecture design</li>
          <li>Process optimization consulting</li>
          <li>Digital transformation planning</li>
          <li>Custom application development</li>
        </ul>
        
        <h4>3. Client Responsibilities</h4>
        <p>Clients are responsible for providing accurate information, timely feedback, and necessary access to systems and personnel as required for project completion.</p>
        
        <h4>4. Intellectual Property</h4>
        <p>All deliverables and methodologies remain the intellectual property of the service provider unless otherwise agreed in writing.</p>
        
        <h4>5. Limitation of Liability</h4>
        <p>Our liability is limited to the fees paid for the specific services that gave rise to the claim.</p>
      `
    },
    {
      title: "Cookie Policy",
      content: `
        <h3>Cookie Policy</h3>
        <p><strong>Last Updated:</strong> January 1, 2024</p>
        
        <h4>What Are Cookies</h4>
        <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience.</p>
        
        <h4>Types of Cookies We Use</h4>
        <ul>
          <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
        </ul>
        
        <h4>Managing Cookies</h4>
        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.</p>
      `
    },
    {
      title: "Service Level Agreement",
      content: `
        <h3>Service Level Agreement (SLA)</h3>
        <p><strong>Effective Date:</strong> January 1, 2024</p>
        
        <h4>1. Service Availability</h4>
        <p>We commit to maintaining 99.5% availability for consultation services during business hours (Monday-Friday, 9 AM - 6 PM PST).</p>
        
        <h4>2. Response Times</h4>
        <ul>
          <li><strong>Initial Inquiry:</strong> Within 24 hours</li>
          <li><strong>Project Updates:</strong> Within 48 hours</li>
          <li><strong>Emergency Support:</strong> Within 4 hours</li>
        </ul>
        
        <h4>3. Deliverable Timelines</h4>
        <p>All project deliverables will be completed according to agreed timelines, with regular status updates provided to clients.</p>
        
        <h4>4. Quality Assurance</h4>
        <p>All deliverables undergo thorough quality review before client presentation, ensuring adherence to industry best practices.</p>
      `
    },
    {
      title: "Data Protection",
      content: `
        <h3>Data Protection & GDPR Compliance</h3>
        <p><strong>Last Updated:</strong> January 1, 2024</p>
        
        <h4>Your Rights Under GDPR</h4>
        <ul>
          <li><strong>Right to Access:</strong> Request access to your personal data</li>
          <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
          <li><strong>Right to Portability:</strong> Request transfer of your data</li>
          <li><strong>Right to Object:</strong> Object to processing of your data</li>
        </ul>
        
        <h4>Data Processing</h4>
        <p>We process personal data lawfully, fairly, and transparently, collecting only what is necessary for our business purposes.</p>
        
        <h4>Data Retention</h4>
        <p>Personal data is retained only as long as necessary for the purposes for which it was collected or as required by law.</p>
        
        <h4>Contact Our DPO</h4>
        <p>For data protection inquiries, contact our Data Protection Officer at dpo@businessarchitecture.com</p>
      `
    },
    {
      title: "Professional Standards",
      content: `
        <h3>Professional Standards & Code of Ethics</h3>
        
        <h4>Professional Conduct</h4>
        <p>We adhere to the highest standards of professional conduct, maintaining integrity, objectivity, and competence in all client engagements.</p>
        
        <h4>Confidentiality</h4>
        <p>All client information is treated with strict confidentiality. We maintain non-disclosure agreements and implement security measures to protect sensitive business information.</p>
        
        <h4>Conflict of Interest</h4>
        <p>We identify and manage potential conflicts of interest, ensuring our recommendations are always in the best interest of our clients.</p>
        
        <h4>Continuous Learning</h4>
        <p>We commit to ongoing professional development and staying current with industry best practices, technologies, and methodologies.</p>
        
        <h4>Quality Standards</h4>
        <p>All work products meet or exceed industry standards and are delivered with comprehensive documentation and support materials.</p>
      `
    }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-professional">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-xl">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Business Architecture</h3>
                  <p className="text-sm text-white/70">Strategic Solutions</p>
                </div>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Transforming businesses through strategic architecture, process optimization, 
                and innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Enterprise Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Process Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Digital Transformation</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Organizational Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Growth Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Risk Management</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">White Papers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Architecture Frameworks</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Best Practices</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Industry Insights</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Technical Documentation</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4 text-white/70">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>contact@businessarchitecture.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Documents Section */}
          <div className="border-t border-white/10 pt-16">
            <h4 className="text-2xl font-bold mb-8 text-center">Legal Documents & Policies</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {legalDocuments.map((doc, index) => (
                <details key={index} className="group">
                  <summary className="cursor-pointer p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200">
                    <h5 className="font-semibold text-lg">{doc.title}</h5>
                    <p className="text-sm text-white/70 mt-1">Click to view details</p>
                  </summary>
                  <div className="mt-4 p-6 bg-white/5 rounded-xl">
                    <div 
                      className="text-sm text-white/80 space-y-4 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mb-3 [&>h4]:font-medium [&>h4]:mb-2 [&>ul]:pl-5 [&>ul]:space-y-1 [&>li]:list-disc [&>p]:mb-3 [&>p]:leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: doc.content }}
                    />
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/70 text-sm">
                © {currentYear} Business Architecture Strategic Solutions. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <a href="#" className="hover:text-white transition-colors duration-200">Accessibility</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Sitemap</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Legal Notice</a>
                <a href="#" className="hover:text-white transition-colors duration-200">Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;