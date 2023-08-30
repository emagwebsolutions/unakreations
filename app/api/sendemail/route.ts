import { NextResponse } from 'next/server';

let nodemailer = require('nodemailer');

export async function POST(req: Request) {
  const body: any = await req.json();

  const smtpTransport = nodemailer.createTransport({
    port: 587,
    host: 'smtp-relay.brevo.com',
    auth: {
      user: 'codinister@gmail.com',
      pass: 'N2LWRJgZOjVKbYIx',
    },
  });

  let sendResult = await smtpTransport.sendMail({
    from: body.email,
    to: 'emag38@yahoo.com',
    subject: body.subject,
    text: `
          Fullname: ${body.fullname}\n,
          Email: ${body.email}\n,
          message: ${body.message}\n,
      `,
    html: `
          <table border="1" cellpadding="12">
          <thead>
          <tr>
          <th colspan="2">FREE QUOTE REQUEST</th>
          </tr>
          </thead>
          <tbody>
              <tr>
                  <td>
                  Fullname:
                  </td>
                  <td>
                  ${body.fullname}
                  </td>
              </tr>

              <tr>
                  <td>
                  Email:
                  </td>
                  <td>
                  ${body.email}
                  </td>
              </tr>

              <tr>
                  <td>
                  Frequency of Cleaning:
                  </td>
                  <td>
                  ${body.message}
                  </td>
              </tr>

          </tbody>
          </table>
      `,
  });

  if (sendResult) {
    return NextResponse.json({
      message: 'Message Sent!',
    });
  }
  else{
    console.log('An error occured!')
  }
}
