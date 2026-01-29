import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FileText, Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(255, 'Email must be less than 255 characters'),
  firstName: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .trim(),
  lastName: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .trim(),
  companyName: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  website: z
    .string()
    .url('Please enter a valid URL')
    .max(255, 'Website must be less than 255 characters')
    .optional()
    .or(z.literal('')),
});

type FormData = z.infer<typeof formSchema>;

const PlaybookDownloadForm = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      companyName: '',
      website: '',
    },
  });

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = '/downloads/From-Invisible-to-Unstoppable.pdf';
    link.download = 'From-Invisible-to-Unstoppable.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const saveLeadToDatabase = async (data: FormData) => {
    const { error } = await supabase.from('playbook_leads').insert({
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      company_name: data.companyName || null,
      website: data.website || null,
    });
    
    if (error) {
      console.error('Failed to save lead:', error);
      throw error;
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Save lead to database
      await saveLeadToDatabase(data);
      
      // Trigger download
      triggerDownload();
      
      // Show success toast
      toast({
        title: 'Download started!',
        description: 'Your playbook is downloading. Check your downloads folder.',
      });
      
      // Reset form and close dialog
      form.reset();
      setOpen(false);
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-medium text-white bg-charcoal hover:bg-accent transition-all duration-300 rounded-lg">
          <FileText className="w-4 h-4" />
          Get the Free Playbook
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl sm:text-2xl text-charcoal">
            Download Your Free Playbook
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Enter your details to get the Enterprise Visibility Playbook—the exact framework we use to help consultancies land bigger contracts.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            {/* Required Fields */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-charcoal">
                    Email <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@company.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal">
                      First Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal">
                      Last Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Optional Fields */}
            <div className="pt-2 space-y-4">
              <p className="text-xs text-muted-foreground">Optional</p>
              
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal">Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal">Website</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://yourcompany.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 text-sm font-medium text-white bg-charcoal hover:bg-accent transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              <Download className="w-4 h-4" />
              {isSubmitting ? 'Preparing Download...' : 'Download Playbook'}
            </button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PlaybookDownloadForm;
