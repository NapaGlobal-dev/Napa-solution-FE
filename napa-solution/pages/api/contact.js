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
  // const getMailContent = (fileName, data) => {
  //   const htmlFileContent = fs
  //     .readFileSync(path.resolve(__dirname, `../../../static/${fileName}.html`))
  //     .toString();

  //   let updatedFileContent = htmlFileContent;
  //   Object.keys(data).forEach((key) => {
  //     // Data is passed to HTML through variables with prefix __  (double underscore)
  //     const htmlKey = `__${key.toUpperCase()}`;
  //     updatedFileContent = updatedFileContent.replace(htmlKey, data[key]);
  //   });
  //   return updatedFileContent;
  // }
  const mailerRes = sendMail(
    // "phuongnt99.dn@gmail.com",
    "nguyentuanquangsang1999@gmail.com",
    `Information from ${req.body.fullName} in ${req.body.companyName} `,
    `<table>
      <tr>
        <th>Company</th>
        <td>${req.body.companyName}</td>
      </tr>
      <tr>
        <th>Name</th>
        <td>${req.body.fullName}</td>
      </tr>
      <tr>
        <th>Message</th>
        <td>${req.body.message}</td>
      </tr>
      <tr>
        <th>Contact</th>
        <td>${req.body.phone}</td>
      </tr>
      <tr>
        <th>Country</th>
        <td>${req.body.companyAddress}</td>
      </tr>
     </table>
    `
  );
  res.status(200);
  res.json(mailerRes || { status: "success" });
}
