import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  try {
    const transporter = nodemailer.createTransport({
        host: "admin.scoopreview.com", // Your SMTP server
        port: 465, // Secure SSL port
        secure: true, // True for 465, false for 587
        auth: {
          user: "newsletter@admin.scoopreview.com", // Your email
          pass: "Ayan@786", // Use actual email password
        },
      });
    

    // Email content
    const mailOptions = {
      from: "newsletter@admin.scoopreview.com", // Sender's email
      to: "reviewsnguide@gmail.com", // Receiver's email
      subject: "New Newsletter Subscription",
      text: `A new user has subscribed with the email: ${email}`,
      html: `<p>A new user has subscribed with the email: <strong>${email}</strong></p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: "Subscription successful!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Error sending email" });
  }
}
