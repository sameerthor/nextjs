import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) => {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const getRequiredEnv = (name) => {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
};

const getTransporter = () => {
  const port = Number(getRequiredEnv("MAIL_PORT"));

  return nodemailer.createTransport({
    host: getRequiredEnv("MAIL_HOST"),
    port,
    secure: port === 465,
    auth: {
      user: getRequiredEnv("MAIL_USERNAME"),
      pass: getRequiredEnv("MAIL_PASSWORD"),
    },
  });
};

const getFromAddress = () => {
  const fromName = process.env.MAIL_FROM_NAME || "ScoopReview";
  const fromAddress = getRequiredEnv("MAIL_FROM_ADDRESS");

  return `"${fromName}" <${fromAddress}>`;
};

const createSubscriberTemplate = (email) => {
  const safeEmail = escapeHtml(email);

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Welcome to ScoopReview</title>
      </head>
      <body style="margin:0;padding:0;background:#f4f7f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f7f6;padding:28px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 18px 45px rgba(15,23,42,0.12);">
                <tr>
                  <td style="background:linear-gradient(135deg,#0b2620,#247e6a);padding:34px 32px;text-align:center;">
                    <div style="font-size:28px;font-weight:800;letter-spacing:-0.5px;color:#ffffff;">Scoop<span style="color:#7ee0ca;">Review</span></div>
                    <p style="margin:12px 0 0;color:#d7f5ee;font-size:15px;line-height:1.6;">Thanks for joining our newsletter.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:34px 32px;">
                    <h1 style="margin:0 0 14px;font-size:24px;line-height:1.25;color:#111827;">You are on the list.</h1>
                    <p style="margin:0 0 18px;font-size:16px;line-height:1.7;color:#475569;">
                      Welcome to ScoopReview. We will send you honest brand reviews, practical buying guides, and handpicked deal updates.
                    </p>
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:24px 0;background:#f0faf7;border:1px solid #ccece3;border-radius:14px;">
                      <tr>
                        <td style="padding:18px 20px;">
                          <p style="margin:0;color:#247e6a;font-size:13px;text-transform:uppercase;font-weight:700;letter-spacing:0.08em;">Subscribed Email</p>
                          <p style="margin:7px 0 0;color:#111827;font-size:16px;font-weight:700;">${safeEmail}</p>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#64748b;">
                      Keep an eye on your inbox. The good stuff should feel useful, not noisy.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="background:#05070f;padding:22px 32px;text-align:center;">
                    <p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.6;">
                      ScoopReview makes shopping easier with reviews, guides, and savings.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};

const createAdminTemplate = (email) => {
  const safeEmail = escapeHtml(email);

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;background:#f8fafc;padding:24px;color:#111827;">
      <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;padding:24px;">
        <h2 style="margin:0 0 12px;color:#0b2620;">New newsletter subscription</h2>
        <p style="margin:0 0 16px;color:#475569;">A user subscribed from the ScoopReview footer form.</p>
        <p style="margin:0;padding:14px 16px;background:#f0faf7;border-radius:10px;color:#111827;">
          <strong>Email:</strong> ${safeEmail}
        </p>
      </div>
    </div>
  `;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const email = String(req.body?.email || "").trim().toLowerCase();

  if (!email || !emailPattern.test(email)) {
    return res.status(400).json({
      message: "Please enter a valid email address.",
      error: "Please enter a valid email address.",
    });
  }

  try {
    const transporter = getTransporter();
    const from = getFromAddress();
    const adminEmail = getRequiredEnv("ADMIN_EMAIL");

    await Promise.all([
      transporter.sendMail({
        from,
        to: adminEmail,
        replyTo: email,
        subject: "New ScoopReview newsletter subscription",
        text: `A new user subscribed to the ScoopReview newsletter: ${email}`,
        html: createAdminTemplate(email),
      }),
      transporter.sendMail({
        from,
        to: email,
        subject: "Thanks for subscribing to ScoopReview",
        text: `Thanks for subscribing to ScoopReview with ${email}. We will send you honest reviews, buying guides, and deal updates.`,
        html: createSubscriberTemplate(email),
      }),
    ]);

    return res.status(200).json({
      message: "Thanks for subscribing. Please check your inbox.",
      success: "Thanks for subscribing. Please check your inbox.",
    });
  } catch (error) {
    console.error("Newsletter subscription failed:", error.message);
    return res.status(500).json({
      message: "Subscription failed. Please try again later.",
      error: "Subscription failed. Please try again later.",
    });
  }
}
