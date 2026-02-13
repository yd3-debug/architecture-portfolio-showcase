import { useState } from 'react';
import { Gem, Building2, Users, CheckSquare, Square, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/who-we-help-hero.jpg';

const qualificationChecklist = [
  "You've grown primarily through referrals and word-of-mouth",
  "You have a proven product/service that clients love",
  "You're invisible online but competitors rank above you",
  "You're ready to invest in sustainable growth (not quick fixes)",
  "You want enterprise clients but don't know how to reach them"
];

const clientProfiles = [
  {
    icon: Gem,
    title: "The Hidden Expert",
    description: "You're the best-kept secret in your industry. Referrals keep you busy, but enterprise clients searching online can't find you."
  },
  {
    icon: Building2,
    title: "The Ready-to-Scale",
    description: "Your product is proven. Your customers love you. But you're stuck—unable to break into bigger markets or land larger contracts."
  },
  {
    icon: Users,
    title: "The Word-of-Mouth Warrior",
    description: "You've never needed marketing because your work markets itself. But you're hitting the ceiling on referral-only growth."
  }
];

const WhoWeHelp = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setCheckedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const checkedCount = checkedItems.length;

  return (
    <section className="bg-secondary/30">
      {/* FULL WIDTH HERO IMAGE - TRUE EDGE TO EDGE */}
      <div className="w-full h-[350px] md:h-[450px] lg:h-[550px]">
        <img 
          src={heroImage} 
          alt="Uncut diamond beside polished gems symbolizing hidden business potential ready for transformation" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* CONTENT BELOW */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-12 lg:py-20">
        <span className="text-primary font-medium tracking-wide uppercase text-sm mb-4 block">
          Who We Help
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-foreground mb-6">
          Built Something Great But Still a Hidden Gem?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light mb-10 max-w-3xl">
          You've grown through word of mouth. Your product speaks for itself. 
          But you're invisible online—and the enterprise clients who need you can't find you.
        </p>

        {/* Self-Qualification Checklist */}
        <div className="bg-background rounded-xl p-6 sm:p-8 border border-border mb-10 max-w-2xl">
          <h3 className="font-serif text-lg sm:text-xl mb-4 text-foreground">Does this sound like you?</h3>
          <div className="space-y-3">
            {qualificationChecklist.map((item, index) => (
              <button
                key={index}
                onClick={() => toggleItem(index)}
                className="flex items-start gap-3 w-full text-left group"
              >
                {checkedItems.includes(index) ? (
                  <CheckSquare className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                ) : (
                  <Square className="w-5 h-5 text-muted-foreground/50 mt-0.5 flex-shrink-0 group-hover:text-muted-foreground transition-colors" />
                )}
                <span className={`text-sm sm:text-base leading-relaxed ${
                  checkedItems.includes(index) ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {item}
                </span>
              </button>
            ))}
          </div>
          
          {/* Dynamic CTA based on checked count */}
          {checkedCount >= 3 && (
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-accent font-medium text-sm">✓ {checkedCount} out of 5</span>
              </div>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-charcoal hover:bg-accent transition-all duration-300 rounded-lg"
              >
                We should talk
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {clientProfiles.map((profile, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <profile.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-medium text-foreground mb-2">
                    {profile.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm font-light">
                    {profile.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg text-foreground font-serif font-medium mb-1">
            Sound familiar?
          </p>
          <p className="text-muted-foreground">
            We help hidden gems get found by the enterprise clients who need them most.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
