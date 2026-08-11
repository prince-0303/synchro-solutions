import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // [PLACEHOLDER] Log the submission for now. 
    // In Phase 2, connect this to Resend, Nodemailer, or a CRM.
    console.log("Contact Form Submission:", body);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error submitting form" },
      { status: 500 }
    );
  }
}
