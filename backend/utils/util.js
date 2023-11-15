const nodemailer = require("nodemailer");

const isEmpty = (value) =>
  value === undefined ||
  value === "undefined" ||
  value === null ||
  value === "null" ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

const errorResponse = (message, statusCode, res) => {
  return res.status(statusCode).json({
    success: false,
    error: message,
  });
};

const forgotMessage = (resetUrl, user) => {
  return `
          <body 
            style="
              color: rgb(68, 68, 68);
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            "
          >
            <h2 class="title" style="text-align: center">Reset Your Password</h2>
            <p>
              Tap the link below to reset your account password. If you didn't request a
              new password, you can safely delete this email.
      
            </p>
            <div style="text-align: center">
              <a
                class="reset-btn"
                style="
                  color: white;
                  font-weight: 900;
                  text-decoration: none;
                  text-transform: uppercase;
                  padding: 10px;
                  background: #0d6efd;
                "
                target="blank"
                href="${resetUrl}"
              >
                Confirm
              </a>
            </div>
            <p>
              If that doesn't work, copy and paste the following link in your browser:
            </p>
            <div class="text-link">
              <a target="blank" href="${resetUrl}"> ${resetUrl} </a>
            </div>
      
            <p class="footer" style="font-size: small; font-style: italic">
              <span>Thank you,</span> <br />
              <span>Zappt Team</span>
            </p>
          </body>
      `;
};

const sendEmail = (options) => {
  const smtpTransparent = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: false,
    requireTLS: true,
    logger: true,
    debug: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Zappt Team " <${process.env.SMTP_USER}>`,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  return smtpTransparent.sendMail(mailOptions);
};

module.exports = {
  isEmpty,
  errorResponse,
  forgotMessage,
  sendEmail,
};
