import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    messaage: string;
}

// Simple in-memory storage for demo purposes
const submissions: ContactFormData[] = []
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData

    // Validate input
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify admin
    // For now, just store in memory and log
    submissions.push({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
    })

    console.log('[Contact Form] New submission:', {
      ...body,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // For demo purposes only - in production, add authentication
  return NextResponse.json({
    totalSubmissions: submissions.length,
    submissions: submissions,
  })
}
