-- Create table for playbook download leads
CREATE TABLE public.playbook_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  company_name TEXT,
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.playbook_leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public lead form - no auth required)
CREATE POLICY "Allow anonymous inserts" 
ON public.playbook_leads 
FOR INSERT 
WITH CHECK (true);

-- Only allow authenticated admins to read leads (you'll view via Cloud dashboard)
-- For now, no SELECT policy means only you can see leads in the dashboard