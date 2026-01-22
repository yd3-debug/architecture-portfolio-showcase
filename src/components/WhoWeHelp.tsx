import { Gem, Building2, Users } from 'lucide-react';
import businessImage from '@/assets/business-service.jpg';

const clientProfiles = [
  {
    icon: Gem,
    title: "The Hidden Expert",
    description: "You're the best-kept secret in your industry. Referrals keep you busy, but you're missing out on clients who are searching online for exactly what you offer."
  },
  {
    icon: Building2,
    title: "The Ready-to-Scale",
    description: "Your product is proven. Your customers love you. But you don't know how to reach enterprise clients, bigger markets, or get in front of established businesses."
  },
  {
    icon: Users,
    title: "The Word-of-Mouth Warrior",
    description: "You've never needed marketing because your work markets itself. But you know there's a ceiling on referral-only growth—and you're hitting it."
  }
];

const WhoWeHelp = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-0 items-center">
          {/* Left-bleeding image */}
          <div className="relative h-[300px] md:h-[500px] lg:h-[700px] order-2 lg:order-1">
            <div className="absolute inset-0 lg:-left-24 xl:-left-32">
              <img 
                src={businessImage} 
                alt="Strategic business consultation" 
                className="w-full h-full object-cover rounded-r-2xl lg:rounded-l-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-secondary/30 lg:rounded-l-none rounded-r-2xl" />
            </div>
          </div>

          {/* Right content */}
          <div className="px-6 md:px-12 lg:px-16 py-12 lg:py-0 order-1 lg:order-2">
            <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
              Who We Help
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Built Something Great But Still a Hidden Gem?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              You've grown through word of mouth. Your product speaks for itself. 
              But you're invisible online—and the clients who need you can't find you.
            </p>

            <div className="space-y-6">
              {clientProfiles.map((profile, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <profile.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {profile.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {profile.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-lg text-foreground font-medium mb-1">
                Sound familiar?
              </p>
              <p className="text-muted-foreground">
                We help hidden gems get found by the clients who need them most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
