

# Store Playbook Leads in Database

## Overview

Set up a database to permanently store lead information from playbook downloads. You'll be able to view, export, and manage all leads through your Lovable Cloud dashboard.

---

## What You'll Get

- All leads saved automatically when someone downloads the playbook
- Access to view and export leads from your dashboard
- No more relying on mailto: emails (which can be missed)
- Historical tracking of all downloads with timestamps

---

## Setup Required

Before I can implement the database storage, you'll need to enable Lovable Cloud:

1. Click the **Cloud** button in the top navigation
2. Enable Lovable Cloud for your project
3. This creates a Supabase database for your project

Once enabled, I'll create the leads table and update the form.

---

## Database Table Structure

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Unique identifier |
| email | Text | Lead's email (required) |
| first_name | Text | First name (required) |
| last_name | Text | Last name (required) |
| company_name | Text | Company (optional) |
| website | Text | Website URL (optional) |
| created_at | Timestamp | When they downloaded |

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/PlaybookDownloadForm.tsx` | Add Supabase insert call to save lead data |
| `src/integrations/supabase/client.ts` | Auto-generated when Cloud is enabled |

---

## Updated User Flow

```text
User submits form
      |
      v
1. Validate form data
      |
      v
2. Save lead to database (NEW)
      |
      v
3. Trigger PDF download
      |
      v
4. Show success toast
      |
      v
5. Close modal
```

---

## Next Step

**Please enable Lovable Cloud** by clicking the Cloud button in the top navigation. Once you've done that, let me know and I'll create the table and update the code.

