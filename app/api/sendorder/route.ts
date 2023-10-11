const nodemailer = require('nodemailer');
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { data, items } = await req.json();
  const { firstname, lastname, phone, email, city } = data;

  type IT = {
    amount: string;
    name: string;
    price: string;
    qty: number;
  }[];

  const arrs: IT = items;

  try {
    const customerDetails = `
    <table>
      <tr>
        <td>First Name</td><td>${firstname}</td>
      </tr>
      <tr>
        <td>Last Name</td><td>${lastname}</td>
      </tr>
      <tr>
        <td>Phone</td><td>${phone}</td>
      </tr>
      <tr>
        <td>City</td><td>${city}</td>
      </tr>
      <tr>
        <td>Email</td><td>${email}</td>
      </tr>
    </table>
    `;

    const itemsDetails = arrs.map((v, k) => {
      return `
        <tr>
          <td>${v.qty}</td>
          <td>${v.name}</td>
          <td>${v.price}</td>
          <td>${v.amount}</td>
        </tr>
      `;
    });

    const total = arrs.reduce((a, c) => {
      return Number(a) + Number(c);
    }, 0);

    const to = 'emmanuelagyemang3@gmail.com';
    const mail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: to,
        pass: 'xffgbxdonknyxhts',
      },
    });

    const message = `
    ${customerDetails}
    <br />
      <table border="1">
        <thead>
        <tr>
        <th> Qty</th>
        <th>Description</th>
        <th>Unit Price</th>
        <th>Amount</th>
        </tr>
        </thead>
        <tbody>
          ${itemsDetails}
        </tbody>
      </table>

      <table border="1">
        <table>
        <tbody>
        <tr>
        <td></td>
        <td>TOTAL</td>
        <td></td>
        <td>${total}</td>
        </tr>
        </tbody>
        </table>
      </table>
    `;

    const options = {
      from: email,
      to: 'emmanuelagyemang3@gmail.com',
      subject: 'ORDER',
      text: message,
      html: message,
    };

    const send = mail.sendMail(options);
    if (send) {
      return NextResponse.json({
        success: true,
        message: 'Email sent',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Email could not be sent!',
      });
    }
  } catch (err) {
    console.log(err);
  }
}
