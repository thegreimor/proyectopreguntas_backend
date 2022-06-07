import nodemailer from "nodemailer"

export const emailRegistro = async (datos) => {
    
    const {email, nombre, token} = datos
    // TODO: Mover hacia variables de entorno
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Informacion del email

      const info = await transport.sendMail({
          from: '"Sistema preguntas" - <info@preguntas.com>',
          to: email,
          subject: "Confirma tu cuenta",
          text: "Confirma tu cuenta",
          html: `<p> Hola ${nombre}, debes confirmar tu cuenta desde el siguiente enlace:
          <a href="${process.env.FRONTEND_URL}/confirmar/${token}"> Confirmar cuenta</a>
          `
      })

      
}

export const emailOlvidePassword = async (datos) => {
    
    const {email, nombre, token} = datos
    // TODO: Mover hacia variables de entorno
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "a46f40b590c974",
          pass: "7517971ae352a2"
        }
      });

      // Informacion del email

      const info = await transport.sendMail({
          from: '"Sistema preguntas" - <info@preguntas.com>',
          to: email,
          subject: "Restablecer password",
          text: "Restablecer password",
          html: `<p> Hola ${nombre}, has solicitado restablecer el password
          <a href="${process.env.FRONTEND_URL}/olvide-password/${token}"> Restablecer password</a>
          `
      })

      
}