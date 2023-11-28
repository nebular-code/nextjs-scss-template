var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(
  user: any,
  pass: any,
  subject: any,
  toEmail: any,
  otpText: any
) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: user,
      pass: pass,
    },
  });

  var mailOptions = {
    from: user,
    to: toEmail,
    subject: subject,
    text: otpText,
  };

  await new Promise((resolve: any, reject: any) => {
    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        reject(error);
      } else {
        resolve(true);
      }
    });
  });
}
