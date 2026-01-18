import { Gem, Building2, Users } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
            Who We Help
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built Something Great But Still a Hidden Gem?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            You've grown through word of mouth. Your product speaks for itself. 
            But you're invisible online—and the clients who need you can't find you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {clientProfiles.map((profile, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <profile.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {profile.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {profile.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-foreground font-medium mb-2">
            Sound familiar?
          </p>
          <p className="text-muted-foreground">
            We help hidden gems get found by the clients who need them most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
