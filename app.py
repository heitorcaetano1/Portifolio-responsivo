from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from dotenv import load_dotenv
import os

load_dotenv

app = Flask(__name__)
app.secret_key = 'hcCode'

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 587,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.getenv("email"),
    "MAIL_PASSWORD": os.getenv("semha"),
}
app.config.update(mail_settings)
mail = Mail(app)

@app.route('/')
def index():
    return render_template('index.html')

class Contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem


@app.route('/send', methods=['GET', 'POST'])
def enviar_email():
    if request.method == 'POST':
        formcontato = Contato(
                request.form["nome"],
                request.form["email"],
                request.form["mensagem"]
        )

        msg =Message(
            subject=f'{formcontato.nome} te enviou uma mensagem no portifolio',
            sender=app.config.get("MAIL_USERNAME"),
            recipients=['heitordev2@gmail.com', app.config.get("MAIL_USERNAME")],
            body=f'''
            {formcontato.nome} com o e-mail {formcontato.email}, te enviou a seguinte mensagem:{formcontato.mensagem}
        
            {formcontato.mensagem}
            '''
         )
        mail.send(msg)
        flash('Mensagem enviada com sucesso!')
    return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
