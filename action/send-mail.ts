"use server";
import nodemailer from "nodemailer";

type SendMailProps = {
  emailHtml: string;
  service: string;
};

export async function sendMail({ emailHtml, service }: SendMailProps) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'support@paymytax.in',
    subject: `New Service Request: ${service}`,
    html: emailHtml,
  };

  await transporter.sendMail(mailOptions);
}