import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ message: 'Invalid submission' }, { status: 400 });
    }

    // Validate required fields
    const requiredFields = ['name', 'email', 'organization', 'role', 'problemCategory', 'improvementGoals'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Log the submission (in production, you would save to database or send email)
    console.log('Contact form submission:', {
      name: body.name,
      email: body.email,
      organization: body.organization,
      role: body.role,
      problemCategory: body.problemCategory,
      improvementGoals: body.improvementGoals,
      timeframe: body.timeframe,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: In production, implement one of these:
    // 1. Send email via SendGrid/Resend
    // 2. Save to database (Supabase/PostgreSQL)
    // 3. Send to Airtable/Google Sheets
    // 4. Send to CRM (HubSpot)
    
    // For now, just return success
    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
