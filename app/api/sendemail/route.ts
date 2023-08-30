// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
let nodemailer = require('nodemailer')


export  function POST(
  req: Request
) {

  const {fullname,email,subject,message}: any = req.json()


  const smtpTransport = nodemailer.createTransport({
    port: 587,
    host: "smtp-relay.sendinblue.com",
    auth: {
      user: 'info@belshawcleaningservices.com',
      pass: 'OyDHFBRJVfTS5aGM'
    }
  })
  
  const run = async ()=>{
    let sendResult = await smtpTransport.sendMail({
      from: email,
      to: 'BELSHAW CLEANING SERVICES <info@belshawcleaningservices.com>',
      subject: 'Free Quote Request',
      text: `
          Fullname: ${fullname}\n,
          Email: ${email}\n,
          message: ${message}\n,
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
                  ${fullname}
                  </td>
              </tr>

              <tr>
                  <td>
                  Email:
                  </td>
                  <td>
                  ${email}
                  </td>
              </tr>

              <tr>
                  <td>
                  Frequency of Cleaning:
                  </td>
                  <td>
                  ${message}
                  </td>
              </tr>

          </tbody>
          </table>
      `
    })

    if(sendResult){
      const res = { 
        success: true,
        message: 'Message Sent!' 
      }

      return new Response(JSON.stringify(res))
    }
}

run().catch(err => console.error(err))
  
}
