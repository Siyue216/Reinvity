import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/schemas/contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = result.data;

    if (data._gotcha) {
      return NextResponse.json(
        { error: 'Spam detected' },
        { status: 400 }
      );
    }

    // Log the inquiry (replace with email service, CRM, or database in production)
    console.log('=== New Contact Inquiry ===', {
      type: data.inquiryType,
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      website: data.website,
      budget: data.budget,
      timeline: data.timeline,
      descriptionPreview: data.description.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry received successfully. We will be in touch within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
