import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email, token) => {
  const verificationUrl = `${process.env.BACKEND_URL}/api/auth/verify/${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Vérifiez votre adresse email — App Quiz',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 30px;">
        <h2 style="color: #007bff;">Bienvenue sur App Quiz !</h2>
        <p>Merci de vous être inscrit. Cliquez sur le bouton ci-dessous pour activer votre compte :</p>
        <a href="${verificationUrl}" style="
          display: inline-block;
          margin-top: 20px;
          padding: 14px 28px;
          background-color: #007bff;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
        ">Vérifier mon email</a>
        <p style="margin-top: 30px; color: #999; font-size: 13px;">
          Si vous n'avez pas créé de compte, ignorez cet email.<br/>
          Ce lien est valable 24 heures.
        </p>
      </div>
    `,
  });
};
