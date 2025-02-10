import { IConsultationBodyRequest } from "@features/Consultation";
import nodemailer from "nodemailer";

async function sendRequestConsultationToEmail(data: IConsultationBodyRequest) {
  const name = data?.full_name;
  const phone = data?.phone_number;
  const service = data?.theme;
  
  const formattedBody = `
    <html>
      <body>
        <p>Ф.И.О.: ${name}</p>
        <p>Номер телефона: ${phone}</p>
        <p>Интересующая услуга: ${service}</p>
      </body>
    </html>
  `;
  
  const transporter = nodemailer.createTransport({
    host: process.env.HOTMAIL_HOST,
    port: process.env.HOTMAIL_PORT,
    secure: true, // true для 465, false для других портов
    auth: {
      user: process.env.HOTMAIL_USER, // Ваша почта mail.ru
      pass: process.env.HOTMAIL_PASS, // Ваш пароль от почты
    },
  });
  
  return await transporter.sendMail({
    from: process.env.HOTMAIL_USER,
    to: process.env.HOTMAIL_USER,
    subject: "Заявка на консультацию",
    html: formattedBody,
  });
}

export default async function lead(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(200).json({ message: "Разрешены только POST-запросы" });
  }
  
  const r2 = await sendRequestConsultationToEmail({ ...req.body });
  if (r2?.messageId) {
    res.json({ ok: true });
  } else {
    res.json({ ok: false, message: "Сообщение не отправлено" });
  }
}
