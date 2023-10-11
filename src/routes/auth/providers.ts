import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  //@ts-ignore
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_PASSWORD,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
  },
});

export const sendEmail = async (email: string, subject: string, html: any) => {
  await transporter.sendMail({
    from: process.env.GOOGLE_EMAIL,
    to: email,
    subject,
    html,
  });
};
