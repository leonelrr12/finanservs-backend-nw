const jwt = require('jsonwebtoken')
const axios = require('axios')
const nodemailer = require('nodemailer')

const appRoutes = require('express').Router()
const config = require('../utils/config')
const logger = require('../utils/logger')
const bcrypt = require('bcryptjs')

appRoutes.get('/', (request, response) => {
  response.send('Hola Mundo!!!')
})

appRoutes.get('/today-is', (request, response) => {
  const dt1 = new Date()
  const dt2 = new Intl.DateTimeFormat('es-ES',{dateStyle: 'full'}).format(dt1)
  response.json({ hoyes: dt2 })
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

appRoutes.post('/user', async (request, response) => {
    let sql = "INSERT INTO referidos (id_ref,email,nombre,apellidos,celular,hash)"
    sql += " value (?,?,?,?,?,?)"
    
    console.log(request.body);
    const {id_ref,email,nombre,apellidos,celular,password} = request.body
    try {
      const hash = await bcrypt.hash(password, 10)
      const params = [id_ref,email,nombre,apellidos,celular,hash]
  
      config.cnn.query(sql, params, (error, results, next) => {
        if (error) {
          logger.error('Error SQL:', error.message)
          response.status(500)
        } 
        response.send('Ok!')
      })
    } catch (error) {
      logger.error('Error hash:', error.message)
    }
})
  
appRoutes.post('/login',  (request, response) => {
    let sql = "SELECT id,id_ref,email,nombre,apellidos,celular,hash"
     sql += " FROM referidos a"
     sql += " WHERE email=?"
   
     const { email, password } = request.body
     const params = [ email ]
   
     config.cnn.query(sql, params, async (error, rows, fields) => {
       if (error) {
         logger.error('Error SQL:', error.message)
         response.status(500)
       } 
       if (rows && rows.length > 0) {   
         const {id, hash, id_ref, email, nombre} = rows[0]  
         const validPass = await bcrypt.compare(password, hash)
         if(validPass){
            const userForToken = {
                username: email,
                idUser: id,
            }
            const token = jwt.sign(userForToken, process.env.SECRET)
            response.status(200).json({ idUser: id, email, id_ref, token })
         } else {
           console.log(hash);
           logger.error('Error Seguridad:', 'Credenciales Inválidas ...!')
           response.status(200).json({message: 'Credenciales Inválidas ...!', token: ''})
         }
       } else {
         logger.error('Error Seguridad:', 'Usuario no existe ...! ' + email)
         response.json({message: 'Usuario no existe ...!', token: ''})
       }
     })
})

appRoutes.put('/chgpwd', async (request, response) => {
    let sql = "UPDATE referidos SET hash=?"
    sql += " WHERE email=?"
  
    const { email, password } = request.body
    const hash = await bcrypt.hash(password, 10)
    const params = [hash, email]
  
    config.cnn.query(sql, params, (error, results) => {
      if (error) {
        logger.error('Error SQL:', error.message)
        response.status(500)
      } 
      response.send('Ok!')
    })
})

appRoutes.get('/afiliados/:id', (request, response) => {
    let sql = "SELECT id, nombre, apellidos, email, celular, dateCreated"
    sql += " FROM referidos"
    sql += " WHERE id_ref=?"

    const { id } = request.params
    const params = [ id ]
  
    config.cnn.query(sql, params, (error, results) => {
      if (error) {
        logger.error('Error SQL:', error.message)
        response.status(500)
      } 
        if (results && results.length > 0) {
            response.json(results)
        } else {
            response.json([])
        }
    })
})

appRoutes.get('/referido/:id', (request, response) => {
  let sql = "SELECT nombre, apellidos"
  sql += " FROM referidos"
  sql += " WHERE id=?"

  const { id } = request.params
  const params = [ id ]

  config.cnn.query(sql, params, (error, results) => {
    if (error) {
      logger.error('Error SQL:', error.message)
      response.status(500)
    } 
      if (results && results.length > 0) {
          response.json(results)
      } else {
          response.json([])
      }
  })
})

appRoutes.get('/sponsor/:id', (request, response) => {
    let sql = "SELECT nombre, apellidos, email, celular"
    sql += " FROM referidos"
    sql += " WHERE id in ("
    sql += " SELECT id_ref FROM referidos"
    sql += " WHERE id=? )"

    const { id } = request.params
    const params = [ id ]
  
    config.cnn.query(sql, params, (error, results) => {
      if (error) {
        logger.error('Error SQL:', error.message)
        response.status(500)
      } 
        if (results && results.length > 0) {
            response.json(results)
        } else {
            response.json([])
        }
    })
})
  
module.exports = appRoutes