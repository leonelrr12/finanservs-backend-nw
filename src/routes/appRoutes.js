const appRoutes = require('express').Router()
const axios = require('axios')
const nodemailer = require('nodemailer')

const config = require('../utils/config')

appRoutes.get('/', (request, response) => {
  response.send('Hola Mundo!!!')
})

appRoutes.get('/today-is', (request, response) => {
  const dt1 = new Date()
  const dt2 = new Intl.DateTimeFormat('es-ES',{dateStyle: 'full'}).format(dt1)
  response.json({ hoyes: dt2 })
})

appRoutes.post('/clientify-token', async (req, res) => {

  axios({
    method: "post",
    url: "https://api.clientify.net/v1/api-auth/obtain_token/", 
    data: {
      "username": "rsanchez2565@gmail.com",
      "password": "Acsorat25"
    },
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(result => res.json(result.data))
  .catch(error => console.log('error', error))
})

appRoutes.post('/email', async (req, res) => {

  const { email: euser, asunto, mensaje, telefono, monto, nombre, banco } = req.body

  let emails = null
  await axios.get(`http://localhost:3001/api/entities_f/${banco}`)
  .then(res => {
    const result = res.data
    emails = result[0].emails
  }).catch(() => {
    emails = null
  })

  if(emails === undefined) emails = null
  if(!emails) {
    console.log("Debe configurar lista de Emails en la Entidad Financiera.")
    return
  }
  emails += ",rsanchez2565@gmail.com"

  nodemailer.createTestAccount(( err, account ) => {
    const htmlEmail = `
      <h3>Nuevo Prospecto desde Finanservs.com</h3>
      <ul>
        <li>Email: ${euser}</li>
        <li>Nombre: ${nombre}</li>
        <li>Teléfono: ${telefono}</li>
        <li>Monto Solicitado: ${monto}</li>
      </ul>
      <h3>Mensaje</h3>
      <p>${mensaje}</p>
    `
  
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: config.EMAIL_PORT,
      auth: {
        user: config.EMAIL_USER, 
        pass: config.EMAIL_PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    let mailOptions = {
      from: config.EMAIL_FROM,
      to: emails,
      subject: asunto,
      text: mensaje,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, ( err, info ) => {
      if(err) {
        return console.error("Estamos aqui", err)
      }
      console.log("Mensaje enviado: %s", info.envelope)
      console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info))
    })
  })

})

module.exports = appRoutes