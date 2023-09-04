const nodemailer = require('nodemailer');
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { fullname, email, subject, message } = await req.json();

  try {
    const to = 'emmanuelagyemang3@gmail.com';
    const mail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: to,
        pass: 'xffgbxdonknyxhts',
      },
    });

    const options = {
      from: email,
      to: 'emag38@yahoo.com',
      subject,
      text: message,
      html: message,
    };

    const send = mail.sendMail(options)
    if(send){
      return NextResponse.json({
        success: true,
        message: 'Email sent',
      });
    }
    else{
      return NextResponse.json({
        success: false,
        message: 'Email could not be sent!',
      });
    }
  } catch (err) {
    console.log(err);
  }


}
