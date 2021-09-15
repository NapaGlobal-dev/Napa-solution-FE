const nodeMailer = require("nodemailer");
const OAUTH_CLIENTID =
  "97425185563-fvie07qrr1p881apmfir38hk4jlubpcj.apps.googleusercontent.com";
const OAUTH_CLIENT_SECRET = "-dKLdJNLip5Xmb8-gFqMpa3n";
const MAIL_USERNAME = "napaglobalwebsite@gmail.com";
const MAIL_PASSWORD = "napa@123";
const ACCESS_TOKEN =
  "ya29.a0ARrdaM811hK-USQUTXg_GCRzlBgvpQ-ack2JYxDnY-0w79EQ3lIQrHAFfKVR3pd-xr2POj2Oua58B49_s1kE2a135FWPHaxKrMMv73pLOKkYPyTk4qXJZEx3bKSr6qyUpVaKTLeIMyQMTnMudtqHRaKdfTLF";
const OAUTH_REFRESH_TOKEN =
  "1//04T_jlMSR5uyGCgYIARAAGAQSNwF-L9IrlF90MoTEAL2fcich0Q66Jlyar94eZL0eYV1qmiW2X7EqFm0aGK9BPvhLKvK7iUD-x-s";
export default function handler(req, res) {
  const sendMail = async (to, subject, htmlContent) => {
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: MAIL_USERNAME,
        pass: MAIL_PASSWORD,
        clientId: OAUTH_CLIENTID,
        clientSecret: OAUTH_CLIENT_SECRET,
        refreshToken: OAUTH_REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
    });
    const options = {
      from: MAIL_USERNAME,
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
    "phuongnt99.dn@gmail.com",
    // "nguyentuanquangsang1999@gmail.com",
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
