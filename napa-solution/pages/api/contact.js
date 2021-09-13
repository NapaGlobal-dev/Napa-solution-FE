const nodeMailer = require("nodemailer");
const adminEmail = "noreply@ezteam.net";
const adminPassword = "9jTJvxAkJ99Y6t";
const mailHost = "mail9351.maychuemail.com";
const mailPort = 465;
export default function handler(req, res) {
  const sendMail = async (to, subject, htmlContent) => {
    const transporter = nodeMailer.createTransport({
      host: mailHost,
      pool: true,
      port: mailPort,
      secure: true,
      auth: {
        user: adminEmail,
        pass: adminPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const options = {
      from: adminEmail,
      to: to,
      subject: subject,
      html: htmlContent,
    };

    return await transporter.sendMail(options, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  };
  const mailerRes = sendMail(
    req.body.email,
    req.body.message,
    `${req.body.fullName} ${req.body.companyName}`
  );
  res.status(200);
  res.json(mailerRes);
}
