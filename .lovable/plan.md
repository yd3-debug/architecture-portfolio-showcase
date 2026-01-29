
# Lead Magnet Download Form Implementation

## Overview
Transform the "Get the Free Playbook" button into a proper lead capture system where users must provide their contact details before downloading the PDF.

---

## What We're Building

A modal dialog that:
1. Opens when clicking "Get the Free Playbook"
2. Collects user information with validation
3. Triggers PDF download after successful submission
4. Shows a success message

---

## Form Fields

| Field | Required | Validation |
|-------|----------|------------|
| Email | Yes | Valid email format |
| First Name | Yes | Non-empty, max 50 chars |
| Last Name | Yes | Non-empty, max 50 chars |
| Company Name | No | Max 100 chars |
| Website | No | Valid URL format if provided |

---

## Files to Modify/Create

### 1. Copy PDF to Public Folder
```text
Copy: user-uploads://From-Invisible-to-Unstoppable.pdf
To: public/downloads/From-Invisible-to-Unstoppable.pdf
```

### 2. Create New Component
**File**: `src/components/PlaybookDownloadForm.tsx`

A new component containing:
- Form state management with react-hook-form
- Zod schema for validation
- Dialog wrapper with styled form
- Download trigger after submission
- Toast notification for success

### 3. Update Contact Section
**File**: `src/components/Contact.tsx`

Changes:
- Import the new PlaybookDownloadForm component
- Replace the mailto: button with the dialog trigger
- Update the button text and behavior

---

## Technical Details

### Form Validation Schema (Zod)
```text
- email: required, valid email format
- firstName: required, 1-50 characters
- lastName: required, 1-50 characters  
- companyName: optional, max 100 characters
- website: optional, valid URL if provided
```

### Download Mechanism
After form submission:
1. Create a temporary anchor element
2. Set href to the PDF path in public folder
3. Trigger click to start download
4. Remove temporary element

### Lead Data Handling
Since no backend is currently configured, options include:
- **Option A**: Log to console (for testing)
- **Option B**: Send via mailto: with form data
- **Option C**: Add Supabase later to store leads

For now, we'll implement Option B - sends an email with the lead data while triggering the download immediately.

---

## User Flow

```text
1. User clicks "Get the Free Playbook"
     |
     v
2. Modal opens with form
     |
     v
3. User fills required fields (Email, First Name, Last Name)
     |
     v
4. User clicks "Download Playbook"
     |
     v
5. Form validates
     |
     +--> Invalid: Show error messages
     |
     +--> Valid: 
           - Trigger PDF download
           - Open mailto: with lead data (for your records)
           - Show success toast
           - Close modal
```

---

## Component Structure

```text
PlaybookDownloadForm.tsx
|
+-- Dialog (from ui/dialog)
|   +-- DialogTrigger (the button)
|   +-- DialogContent
|       +-- DialogHeader
|       |   +-- DialogTitle: "Download Your Free Playbook"
|       |   +-- DialogDescription
|       +-- Form (react-hook-form)
|           +-- FormField (Email) *required
|           +-- FormField (First Name) *required
|           +-- FormField (Last Name) *required
|           +-- FormField (Company Name) optional
|           +-- FormField (Website) optional
|           +-- Submit Button
```

---

## Styling Notes

The form will match the existing design system:
- Soft gray background for the optional fields section
- Charcoal primary buttons
- Clean, professional typography
- Responsive layout for mobile

---

## Implementation Summary

| Task | File |
|------|------|
| Copy PDF to public folder | `public/downloads/From-Invisible-to-Unstoppable.pdf` |
| Create download form component | `src/components/PlaybookDownloadForm.tsx` |
| Update Contact section | `src/components/Contact.tsx` |
