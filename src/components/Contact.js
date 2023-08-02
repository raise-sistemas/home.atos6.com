import React from "react"
import Chart from "../images/chart-analysis.png"
import Chat from "../images/chat.png"
import Envelope from "../images/envelope.png"
import Hand from "../images/hand-graving-smartphone.png"
import "../css/contact.scss"

export default function Contact() {
  return (
    <div id="contact-container">
      <div id="contact-header">
        <h3>CONTATO</h3>
        <hr />
      </div>

      <div id="contact-body">
        <div>
          <img alt="Data chart in computer monitor" src={Chart} />
          <h5>Central de Ajuda</h5>
          <p>
            <strong>
              Para tutoriais, dúvidas e dicas de utilização sobre nossa
              plataforma,
            </strong>{" "}
            <a href="https://intercom.help/atosseis" target="blank">
              <span>
                <strong>
                  acesse a qualquer momento nossa central de ajuda.
                </strong>
              </span>
            </a>
          </p>
        </div>
        <div>
          <img alt="Chat baloon" src={Chat} />
          <h5>Chat Online</h5>
          <p>
            Deseja um contato mais rápido?{" "}
            <strong>Acesse em horário comercial nosso chat online! </strong>
          </p>
        </div>
        <div>
          <img alt="Hand holding a cellphone" src={Hand} />
          <h5>(21) 96669-6468</h5>
          <p>
            <strong>Deseja nos ligar?&nbsp;</strong>Entre em contato pelo
            telefone,{" "}
            <strong>de segunda à sexta das 9h às 12h e das 13h às 18h.</strong>
          </p>
        </div>
        <div>
          <img alt="Email envelope" src={Envelope} />
          <h5>atendimento@atos6.com</h5>
          <p>
            Nos envie um email a qualquer momento&nbsp;que{" "}
            <strong>responderemos até o próximo dia útil.</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
