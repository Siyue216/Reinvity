'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Loader2, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { contactSchema, type ContactFormData, INQUIRY_TYPES, BUDGET_OPTIONS, TIMELINE_OPTIONS } from '@/lib/schemas/contact';

const STEPS = [
  { id: 1, label: 'Inquiry Type' },
  { id: 2, label: 'Project Details' },
  { id: 3, label: 'Confirmation' },
];

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const inputClasses =
  'h-12 rounded-lg border-border bg-background px-4 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring text-base';

export function ContactForm() {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [errors, setErrors] = React.useState<FormErrors>({});

  const [formData, setFormData] = React.useState<ContactFormData>({
    inquiryType: '' as ContactFormData['inquiryType'],
    name: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    description: '',
    budget: '' as ContactFormData['budget'],
    timeline: '' as ContactFormData['timeline'],
    _gotcha: '',
  });

  const updateField = <K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (stepNum: number): boolean => {
    const step1Keys = ['inquiryType'] as const;
    const step2Keys = ['name', 'company', 'email', 'phone', 'website', 'description', 'budget', 'timeline'] as const;

    let keys: readonly string[];

    if (stepNum === 1) {
      keys = step1Keys;
    } else if (stepNum === 2) {
      keys = step2Keys;
    } else {
      return true;
    }

    const partialSchema = contactSchema.pick(keys);
    const result = partialSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const submissionData = { ...formData };
      const result = contactSchema.safeParse(submissionData);

      if (!result.success) {
        const fieldErrors: FormErrors = {};
      result.error.issues.forEach((err) => {
          const field = err.path[0] as keyof ContactFormData;
          if (!fieldErrors[field]) {
            fieldErrors[field] = err.message;
          }
        });
        setErrors(fieldErrors);
        setIsSubmitting(false);
        return;
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form. Please try again.');
      }

      setStep(3);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Step Indicator */}
      <div className="flex items-center justify-center mb-12">
        {STEPS.map((s, i) => (
          <React.Fragment key={s.id}>
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 ${
                  step > s.id
                    ? 'bg-primary text-primary-foreground'
                    : step === s.id
                    ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                    : 'bg-surface-elevated text-muted-foreground'
                }`}
              >
                {step > s.id ? <Check className="w-5 h-5" /> : s.id}
              </div>
              <span
                className={`hidden sm:block text-sm font-medium ${
                  step >= s.id ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-16 sm:w-24 h-0.5 mx-3 transition-colors duration-300 ${
                  step > s.id ? 'bg-primary' : 'bg-border'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">What can we help you with?</h3>
              <p className="text-muted-foreground">Select the type of inquiry that best describes your needs</p>
            </div>

            <RadioGroup
              value={formData.inquiryType}
              onValueChange={(v) => updateField('inquiryType', v as ContactFormData['inquiryType'])}
              className="grid gap-3"
            >
              {INQUIRY_TYPES.map((type) => (
                <RadioGroupItem key={type.value} value={type.value}>
                  <div>
                    <div className="font-medium text-foreground">{type.label}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{type.description}</div>
                  </div>
                </RadioGroupItem>
              ))}
            </RadioGroup>
            {errors.inquiryType && (
              <p className="text-sm text-destructive">{errors.inquiryType}</p>
            )}

            <div className="flex justify-end pt-4">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Next Step
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Tell us about your project</h3>
              <p className="text-muted-foreground">We&apos;ll get back to you within 24 hours</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className={inputClasses}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  className={inputClasses}
                />
                {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@acme.com"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={inputClasses}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website URL</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://acme.com"
                value={formData.website}
                onChange={(e) => updateField('website', e.target.value)}
                className={inputClasses}
              />
              {errors.website && <p className="text-sm text-destructive">{errors.website}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                placeholder="Tell us about your project, goals, and requirements (minimum 50 characters)..."
                value={formData.description}
                onChange={(e) => updateField('description', e.target.value)}
                className="min-h-[140px] rounded-lg border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring text-base resize-y"
              />
              <div className="flex justify-between items-center">
                {errors.description ? (
                  <p className="text-sm text-destructive">{errors.description}</p>
                ) : (
                  <span />
                )}
                <span className="text-xs text-muted-foreground">{formData.description.length}/2000</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget">Estimated Budget *</Label>
                <Select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => updateField('budget', e.target.value as ContactFormData['budget'])}
                  className={inputClasses}
                >
                  <option value="" disabled>Select a range</option>
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </Select>
                {errors.budget && <p className="text-sm text-destructive">{errors.budget}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline *</Label>
                <Select
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => updateField('timeline', e.target.value as ContactFormData['timeline'])}
                  className={inputClasses}
                >
                  <option value="" disabled>Select timeline</option>
                  {TIMELINE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </Select>
                {errors.timeline && <p className="text-sm text-destructive">{errors.timeline}</p>}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-surface transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {submitError && (
              <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive">
                {submitError}
              </div>
            )}
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="text-center space-y-8 py-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mx-auto"
            >
              <Check className="w-10 h-10 text-primary" />
            </motion.div>

            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-foreground">Thank you, {formData.name.split(' ')[0]}!</h3>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                We&apos;ve received your inquiry and will be in touch within <strong>24 hours</strong>.
              </p>
            </div>

            <div className="border-t border-border pt-8 space-y-4">
              <p className="text-sm text-muted-foreground">
                Want to talk sooner? Book a free discovery call directly:
              </p>
              <a
                href="https://calendly.com/reinvity/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Honeypot - invisible to users, persists across all steps */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this empty</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData._gotcha}
          onChange={(e) => updateField('_gotcha', e.target.value)}
        />
      </div>
    </div>
  );
}
