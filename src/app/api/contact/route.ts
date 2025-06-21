// src/app/api/contact/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

// Instantiate Resend with the API key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // This 'from' address is a requirement from Resend
      to: ["gveitners@gmail.com"], // !! REPLACE with your actual email address
      subject: `New Message from ${name} via Portfolio`,
      replyTo: email, // Set the reply-to to the user's email
      html: `<p>You have received a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      return NextResponse.json({ error: "Email failed to send." }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}