import React from "react"
import {
  PageBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  Grid,
  Heading,
  ChevronUpFilledIcon,
  ChevronDownFilledIcon,
  AccordionPanel,
  TextBody,
  Link,
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  ThemeProvider,
} from "@labz/ds"

// import { isBrowser } from "../utils/isBrowser"

export default function Privacy() {
  return (
    <div>
      {typeof window !== "undefined" && <ThemeProvider /> && (
        <ThemeProvider>
          <PageBody
            width="100vw"
            padding="200px calc(100vw - 90%);"
            marginLeft="0px !important"
          >
            <Accordion allowToggle>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Grid flex="1" textAlign="center">
                        <Heading size="h5">Termos e condição de Uso</Heading>
                      </Grid>

                      {isExpanded ? (
                        <ChevronUpFilledIcon width="24px" color="#747880" />
                      ) : (
                        <ChevronDownFilledIcon width="24px" color="#747880" />
                      )}
                    </AccordionButton>

                    <AccordionPanel>
                      Leia com atenção: ao usar Atos6.com, você concorda e
                      estará sujeito a todos os termos, políticas e condições
                      gerais descritas abaixo.
                      <br />
                      <br />
                      <b>
                        <u>1. Definições</u>
                      </b>
                      <br />
                      1.1 Usuário é o cliente, representante de uma igreja ou
                      organização que compra os direitos de uso de Atos6.com
                      para manipulação de dados de seus membros;
                      <br />
                      1.2 Membro é todo indivíduo que se cadastra ou é
                      cadastrado por um usuário em Atos6.com;
                      <br />
                      1.3 Conselho Consultivo é a assembleia de usários
                      convocada para assessorar nos aperfeiçoamentos de
                      Atos6.com
                      <br />
                      <br />
                      <b>
                        <u>2. Objeto</u>
                      </b>
                      <br />
                      2.1 Atos6.com é uma ferramenta online de gestão
                      eclesiástica com foco no pastoreio de membros.
                      <br />
                      2.2 Atos6.com possibilita a interação entre os
                      cadastrados, facilitando o ministério dos líderes
                      pastorais na promoção do desenvolvimento dos fiéis e na
                      otimização dos serviços destes
                      <br />
                      2.3 Atos.com é acessado a partir do endereço{" "}
                      <Link href="http://www.atos6.com" target="_blank">
                        &nbsp;www.atos6.com
                      </Link>
                      .
                      <br />
                      <br />
                      <b>
                        <u>3. Propriedade</u>
                      </b>
                      <br />
                      3.1 Atos6.com foi desenvolvido pela Raise Sistemas Ltda.,
                      CNPJ 14.984.138/0001-87, e a propriedade do sistema é, e
                      será a qualquer tempo, da Raise Sistemas.
                      <br />
                      3.2 O Usuário concorda que o uso do Atos6.com não
                      significa, nem significará, aquisição de qualquer direito
                      sobre o mesmo, não podendo explorá-lo comercialmente ou
                      comercializá-lo.
                      <br />
                      3.3 O Usuário declara estar ciente de que o Atos6.com
                      contém informações confidenciais protegidas pela Lei de
                      Proteção sobre Propriedade Intelectual e por direitos
                      autorais.
                      <br />
                      <br />
                      <b>
                        <u>4. Serviço</u>
                      </b>
                      <br />
                      4.1 Para utilização do Atos6.com solicitamos os dados de
                      identificação do Usuário para fins legais, como emissão de
                      nota fiscal.
                      <br />
                      4.2 As tarifas para o uso de Atos6.com são pagas pelos
                      usuários e podem ser alterados a qualquer momento, desde
                      que as alterações sejam informadas previamente.
                      <br />
                      4.3 É reservado a Raise Sistemas o direito de modificar o
                      Atos6.com, acrescentar ou excluir funcionalidades,
                      acrescentar serviços, alterar layout, etc, por qualquer
                      motivo e sem aviso prévio, sem que isso implique qualquer
                      responsabilidade em relação ao Usuário ou a terceiros.
                      <br />
                      4.4 Os dados dos Usuários e dos Membros são armazenados em
                      servidores internacionais, que seguem políticas e normas
                      de segurança da informação de primeiro nível, realizando
                      cópias de segurança dos dados (backups) periodicamente e
                      preparados para recuperá-los em caso de falhas.
                      <br />
                      4.5 A Raise Sistemas também realiza diariamente cópias de
                      segurança dos dados (backups) de todos os Usuários do
                      Atos6.com e também está preparada para recuperá-los em
                      caso de falhas. Essa redundância de armazenamento
                      representa nosso segundo nível de segurança dos dados do
                      Atos6.com.
                      <br />
                      4.6 As informações inseridas no Atos6.com são de total
                      responsabilidade do Usuário ou do Membros que as inserem.
                      <br />
                      4.7 O Usuário se compromete a utilizar o Atos6.com em
                      conformidade com lei e regulamento local, estadual e
                      federal.
                      <br />
                      4.8 O Usuário se compromete a não utilizar o Atos6.com
                      para meios ilícitos ou que prejudique interesse de
                      terceiros, respeitando a ética, a moral e os bons
                      costumes.
                      <br />
                      4.9 Para acessar sua conta do Atos6.com, o Usuário
                      compromete-se a utilizar uma senha forte (difícil de ser
                      descoberta) e não divulgá-la para outras pessoas, sendo
                      responsável por sua confidencialidade.
                      <br />
                      4.10 O Usuário ou Membro declara expressamente ser
                      responsável por sua conta no Atos6.com, protegida por
                      senha que pode ser modificada a qualquer tempo pelo
                      usuário ou membro e aceita voluntariamente que o uso do
                      software ocorra sob sua única e exclusiva
                      responsabilidade.
                      <br />
                      4.11 Por ser um portal que permite o cadastramento de
                      informações por igrejas e organizações, a Raise Sistemas
                      não se responsabiliza por consequências advindas de
                      informações falsas ou errôneas a respeito de eventos e
                      projetos divulgadas no Website ou problemas relativos à
                      organização desses sob a responsabilidade dos Usuários.
                      <br />
                      <br />
                      <b>
                        <u>5. Conselho Consultivo</u>
                      </b>
                      <br />
                      5.1 Cada Usuário tem direito a um acento no Conselho
                      Consultivo.
                      <br />
                      5.2 Cabe ao Conselho Consultivo assessorar a Raise
                      Sistemas nas decisões a serem tomadas por esta nos
                      assuntos de interação entre os Usuários como
                      transferências de membros de uma organização ou igreja
                      para outra, dados que podem ser visualizados ou editados
                      pelos membros e outros assuntos de política de pastoreio
                      de membros.
                      <br />
                      5.3 Cabe à Raise Sistemas convocar as assembleias do
                      Conselho Consultivo.
                      <br />
                      <br />
                      <b>
                        <u>6. Garantias e Responsabilidade</u>
                      </b>
                      <br />
                      6.1 O uso do Atos6.com é fornecido sem garantia implícita
                      ou expressa quanto a erros, perda de informações ou
                      qualquer outro evento causado pela má utilização por parte
                      do Usuário ou do Membro.
                      <br />
                      6.2 O Usuário declara estar ciente que a Raise Sistemas
                      não tem, nem terá, qualquer responsabilidade, perante ao
                      Usuário, aos Membros ou a terceiros, pelos prejuízos,
                      danos patrimoniais ou morais de qualquer natureza
                      resultante da má utilização do Atos6.com.
                      <br />
                      <br />
                      <b>
                        <u>7. Foro</u>{" "}
                      </b>
                      <br />
                      7.1 As Partes desenvolverão todos os esforços no sentido
                      de resolver, amigavelmente, todas as controvérsias ou
                      divergências que, porventura, forem decorrentes deste
                      Termo.
                      <br />
                      7.2 Não obstante o disposto no item anterior, o Usuário,
                      ao aceitar este Termo, concorda em eleger o foro da
                      comarca do Rio de Janeiro, no Estado do Rio de Janeiro,
                      como competente para dirimir qualquer dúvida ou
                      controvérsia porventura oriunda deste Termo e/ou da
                      utilização do Sistema e, expressamente, renuncia a
                      qualquer outro.
                      <br />
                      <br />
                      <b>
                        <u>8. Disposições Finais</u>{" "}
                      </b>
                      <br />
                      8.1 O Usuário e o Membro concordam em receber, via e-mail,
                      informativos do Atos6.com e da Raise Sistemas.
                      <br />
                      8.2 Os termos e condições poderão ser atualizados e
                      modificados a qualquer tempo, independente de notificação
                      prévia, cabendo ao Usuário manter-se atualizado através do
                      endereço
                      <Link href="http://www.atos6.com" target="_blank">
                        &nbsp;www.atos6.com
                      </Link>
                      .
                      <br />
                      8.3 O Usuário aceita que a Raise Sistemas poderá, ao seu
                      critério, alterar a prestação de serviços do Atos6.com,
                      interromper temporária ou definitivamente, mediante aviso
                      prévio ao Usuário.
                      <br />
                      8.4 A violação de qualquer condição estabelecida neste
                      termo ensejará a imediata exclusão do Usuário do cadastro
                      do Atos6.com, ficando a partir de então suspenso qualquer
                      acesso do Usuário às áreas restritas do Website, sem
                      prejuízo do direito da Raise Sistemas e dos terceiros
                      prejudicados de exigirem a reparação dos danos
                      eventualmente causados independentemente de prévia
                      notificação formal.
                      <br />
                      8.5 O Usuário será o único, direto e exclusivo responsável
                      por todos os danos, infrações, descumprimento legais e
                      atos de qualquer natureza, que venha a causar a terceiros
                      ou outros quando da utilização do sistema objeto deste
                      instrumento. Na hipótese da Raise Sistemas vir a ser
                      demandada em juízo por dano ocasionado pelo Usuário,
                      ser-lhe-á lícito alegar sua ilegitimidade passiva,
                      nomeá-lo à autoria, denunciá-lo à lide etc., enfim,
                      praticar todos os atos necessários para exercer seu
                      direito de regresso, servindo o presente instrumento como
                      título executivo extrajudicial de todos e quaisquer
                      valores eventualmente despendidos pela Raise Sistemas para
                      fazer frente a indenizações, despesas judiciais etc.,
                      sendo que estes deverão ser atualizados na forma da lei.
                      <br />
                      8.6 O Usuário declara que leu e concordou com todos os
                      termos acima citados. © copyright - todos os diretos
                      reservados Raise
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Grid flex="1" textAlign="center">
                        <Heading size="h5">
                          Política de Privacidade - Igrejas e Organizações
                        </Heading>
                      </Grid>
                      {isExpanded ? (
                        <ChevronUpFilledIcon width="24px" color="#747880" />
                      ) : (
                        <ChevronDownFilledIcon width="24px" color="#747880" />
                      )}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Grid flex="1" textAlign="start">
                        <TextBody size="bold">
                          PARA VOCÊ ENTENDER MELHOR O QUE FAZEMOS COM AS SUAS
                          INFORMAÇÕES
                        </TextBody>
                      </Grid>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      Fizemos o máximo para explicar de forma clara e simples
                      quais dados pessoais precisaremos de você e o que vamos
                      fazer com cada um deles. Por isso, separamos abaixo os
                      pontos mais importantes, que também podem ser lidos de
                      forma bem completa e detalhada nas nossas
                      <b> Políticas de Privacidade.</b>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      Além disso, estamos sempre disponíveis para tirar qualquer
                      dúvida que você tenha pelo e-mail{" "}
                      <Link href="mailto:atendimento@atos6.com">
                        atendimento@atos6.com
                      </Link>
                      , pelo telefone (21) 97272-5572 ou chat disponível na
                      plataforma.
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <TextBody size="bold">
                        <u>1) Como faremos a segurança de seus dados?</u>
                      </TextBody>
                      <TextBody>
                        Para garantir a sua segurança, seus dados pessoais são
                        transferidos de forma criptografada e armazenados em{" "}
                        <Link href="https://aws.amazon.com/pt/" target="_blank">
                          AWS Amazon
                        </Link>{" "}
                        - responsável pelo armazenamento e segurança (indicamos
                        fortemente que você leia os{" "}
                        <Link
                          href="https://aws.amazon.com/pt/legal/"
                          target="_blank"
                        >
                          Contratos e Políticas
                        </Link>{" "}
                        da AWS Amazon, principalmente as{" "}
                        <Link
                          href="https://aws.amazon.com/pt/privacy/"
                          target="_blank"
                        >
                          Políticas de Privacidade
                        </Link>
                        ). Além disso, utilizamos criptografia TLS 1.2 de ponta
                        a ponta e uma variedade de tecnologias e procedimentos
                        de segurança para ajudar a proteger as informações dos
                        Usuários Finais.{" "}
                        <b>
                          <u>
                            Com isso, essas empresas passam a ter acesso aos
                            seus dados, somente para armazená-los, assim que
                            você os fornece na ATOS6
                          </u>
                        </b>
                        . Se você tiver algum problema com isso, pedimos que não
                        continue utilizando a plataforma. Ainda, cumprimos com
                        as sugestões e diretrizes de Segurança da Informação da
                        ANPD para Startups.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          2) Como faremos a segurança e processamento dos seus
                          dados de pagamento?
                        </u>
                      </TextBody>
                      <TextBody>
                        Para o processamento das informações referentes aos
                        pagamentos, os seus dados serão enviados via API e
                        trafegados pelas plataformas independentes{" "}
                        <Link href="https://zoop.com.br/" target="_blank">
                          Zoop
                        </Link>{" "}
                        e a{" "}
                        <Link href="https://pagar.me/" target="_blank">
                          Pagar-me
                        </Link>
                        , que são as instituições responsáveis pelo
                        processamento dos pagamentos. Nós não teremos acesso aos
                        seus dados bancários e utilizamos essas plataformas
                        terceirizadas para que eles possam garantir a segurança
                        nas transações financeiras, já que sozinhos não
                        conseguiríamos.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          3) Quais dados você precisa nos informar ao se
                          cadastrar na plataforma?
                        </u>
                      </TextBody>
                      <TextBody>
                        Quando as Usuárias Organizações se cadastrarem na
                        plataforma iremos pedir os seguintes dados obrigatórios:
                        Da pessoa jurídica (caso aplicável): Razão Social, CNPJ,
                        endereço completo e quantidade de membros. Do
                        representante legal: Nome, CPF, endereço e-mail e
                        telefone celular.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>4) Com quem compartilhamos seus dados pessoais?</u>
                      </TextBody>
                      <TextBody>
                        Nós iremos compartilhar os seus dados pessoais com as
                        empresas referenciadas nestas políticas e internamente
                        apenas com as pessoas estritamente necessárias para
                        possibilitar a prestação do nosso serviço, como CEO,
                        CPO, Customer Experience Head, Customer Success, Diretor
                        de Negócios, Designers, Head, Head de People, Marketing
                        e Tech Lead.
                        <br />
                        <br />
                        Nós poderemos compartilhar também seus dados pessoais
                        com os Usuários Finais que estiverem cadastrados na sua
                        organização, para a execução do serviço da plataforma.
                        Salvo nos casos citados, em caso de consentimento legal
                        do titular dos dados pessoais e por força de ordem
                        judicial ou determinação legal, nós não iremos
                        compartilhar seus dados com terceiros.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          5) Como funciona o cadastro de membros (Usuários
                          Finais)?
                        </u>
                      </TextBody>
                      <TextBody>
                        As Usuárias Organizações poderão fazer os cadastros ou
                        inserir dados pessoais de Usuários Finais, como
                        controladora de dados e com o objetivo de gestão de sua
                        organização. Desde já, as Usuárias Organizações se
                        declaram cientes de que deverão fazer o tratamento
                        desses dados pessoais de maneira transparente e
                        informada. A partir do momento que a Usuária Organização
                        tiver acesso a esses dados, se tornará responsável pela
                        sua segurança, tratamento e compartilhamento adequado,
                        não podendo divulgá-los para outras finalidades, em
                        desconformidade com a legislação vigente e com esta
                        Política de Privacidade, sob pena de responder por todas
                        as punições, em especial as de natureza cível, criminal
                        e as aplicadas pela Autoridade Nacional de Proteção de
                        Dados. Caso tenha dúvida em relação a como fazer o
                        tratamento de dados pessoais de maneira correta, e de
                        acordo com a legislação, nossos materiais de apoio:
                      </TextBody>
                      <ul style={{ marginLeft: "20px" }}>
                        <br />
                        <li>
                          <Link
                            href="https://blog.atos6.com/2020/10/07/a-lgpd-afeta-a-minha-igreja/"
                            target="_blank"
                          >
                            Como a LGPD afeta a minha Igreja?
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.youtube.com/watch?v=hQlc8ya5vZo"
                            target="_blank"
                          >
                            Impacto da LGPD nas Igrejas
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://blog.atos6.com/2020/10/15/veja-como-a-lgpd-afeta-as-igrejas/"
                            target="_blank"
                          >
                            Veja como a LGPD afeta as igrejas
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://blog.atos6.com/2020/10/16/saiba-o-que-acontece-se-a-igreja-nao-se-adequar-a-lgpd-2/"
                            target="_blank"
                          >
                            Saiba o que acontece se uma igreja não se adequar a
                            LGPD
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://blog.atos6.com/2020/10/16/como-adequar-sua-igreja-a-lgpd-3/"
                            target="_blank"
                          >
                            Como adequar sua igreja à LGPD
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://blog.atos6.com/2020/11/10/os-6-beneficios-da-lgpd-para-igrejas/"
                            target="_blank"
                          >
                            Os benefícios da LGPD para igrejas
                          </Link>
                        </li>
                      </ul>
                      <br />
                      <br />
                      <TextBody size="bold">
                        <u>
                          6) Devo avisar em caso de incidentes de segurança?
                        </u>
                      </TextBody>
                      <TextBody>
                        A Usuária Organização deverá informar à <b>ATOS6</b>{" "}
                        sobre qualquer incidente de segurança relacionado aos
                        dados pessoais coletados por ela no prazo de 2 (duas)
                        horas, para que todas as medidas necessárias sejam
                        tomadas.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>7) Seus registros de acesso serão coletados?</u>
                      </TextBody>
                      <TextBody>
                        Quando você entra na nossa Plataforma, colhemos seus
                        registros de acesso, ou seja, conjunto de informações
                        referentes à data e hora de uso de uma determinada
                        aplicação de internet a partir de um determinado
                        endereço IP, estas informações serão mantidas, sob
                        sigilo, em ambiente controlado e de segurança, pelo
                        prazo mínimo de 06 (seis) meses, nos termos da Lei n.
                        12.965/2014, e artigo 7º, II, da Lei 13709/18.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>8) Serão coletadas informações de forma indireta?</u>
                      </TextBody>
                      <TextBody>
                        Coletamos informações de forma indireta, como endereço
                        IP utilizado, cliques e tempos de visita, por meio de
                        Pixels, para fins de remarketing, com base no Art. 7º,
                        IX, Lei nº 13.709/2018. Além disso, poderá ser coletada
                        a localização relativa ao endereço de IP do Usuário para
                        fins de métricas de Usuários em determinadas regiões,
                        conforme o dispositivo legal citado.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>9) Registros de comunicações serão armazenados?</u>
                      </TextBody>
                      <TextBody>
                        Nós vamos armazenar também todas as conversas que você
                        tiver conosco em nossos canais de comunicação, pois isso
                        irá melhorar o seu atendimento e torná-lo mais
                        eficiente. Sem esse histórico, provavelmente todas as
                        vezes que você utilizasse a plataforma teria que repetir
                        o que já nos passou anteriormente.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>10) Como seus dados serão tratados?</u>
                      </TextBody>
                      <TextBody>
                        Todos os seus dados são tratados com finalidades
                        específicas e de acordo com a Lei de Proteção de Dados
                        Pessoais. Todas essas informações estão descritas em uma
                        tabela, para facilitar a sua visualização, nas nossas
                        Políticas de Privacidade.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>11) Quais são seus direitos?</u>
                      </TextBody>
                      <TextBody>
                        Mesmo que você já tenha nos fornecido seus dados
                        pessoais, você possui total direito de, a qualquer
                        momento: confirmar a existência de tratamento dos seus
                        dados; acessar os seus dados; corrigir os seus dados;
                        tornar anônimo os dados; bloquear ou eliminar os dados
                        desnecessários, excessivos ou tratados em
                        desconformidade com a Lei; pedir a portabilidade dos
                        dados a outro fornecedor; eliminar dados, exceto aqueles
                        exigidos por lei; obter informação sobre quem a{" "}
                        <b>ATOS6</b> realizou uso compartilhado de dados; obter
                        informação sobre a possibilidade de não fornecer
                        consentimento e sobre as consequências da negativa; e
                        voltar atrás e revogar o seu consentimento.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>12) Essas condições poderão mudar?</u>
                      </TextBody>
                      <TextBody>
                        Nossa Política de Privacidade poderá mudar, mas você
                        sempre poderá acessar a versão mais atualizada no nosso
                        site. Além disso, se formos realizar alguma ação que a
                        lei exija sua autorização, você receberá um aviso antes
                        para poder aceitar ou recusar.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          13) Qual é o conteúdo das Políticas de Privacidade?
                        </u>
                      </TextBody>
                      <TextBody>
                        A Política de Privacidade a seguir está dividida da
                        seguinte forma para facilitar o seu acesso à informação:
                        <br />
                        <br />
                        a) Data de Disponibilização do Texto;
                        <br />
                        b) Explicação dos Termos Técnicos ou em Língua
                        Estrangeira;
                        <br />
                        c) Privacidade do Usuário e Operadores de Dados
                        Terceirizados;
                        <br />
                        d) Coleta de Dados;
                        <br />
                        e) Tratamento de Dados Pessoais;
                        <br />
                        f) Compartilhamento dos Dados Pessoais dos Usuários;
                        <br />
                        g) Cancelamento da Plataforma, de Contas de Acesso e
                        Exclusão de Dados;
                        <br />
                        h) Direitos do Titular dos Dados Pessoais;
                        <br />
                        i) Segurança;
                        <br />
                        j) Mudanças na Política de Privacidade;
                        <br />
                        k) Encarregado e Disposições Gerais;
                        <br />
                        l) Contato.
                      </TextBody>
                      <Grid flex="1" textAlign="center">
                        <Heading size="h5">POLÍTICAS DE PRIVACIDADE</Heading>
                      </Grid>
                      <br />
                      <TextBody>
                        <u>
                          Antes de acessar a plataforma <b>ATOS6</b>, é
                          importante que você leia, entenda e aceite de forma
                          livre, inequívoca e informada estas Políticas de
                          Privacidade.
                        </u>
                      </TextBody>
                      <br />
                      <TextBody>
                        Esta plataforma, cujo nome é <b>ATOS6</b>, é de
                        propriedade, mantida e operada por{" "}
                        <b>ATOS6 TECNOLOGIA E INOVAÇÃO LTDA.</b>, pessoa
                        jurídica constituída na forma de sociedade limitada,
                        inscrita no CNPJ sob o no. 28.501.445/0001-74 com sede
                        na Av. Rio Branco no 26, Sobreloja, Centro, Rio de
                        Janeiro/RJ – CEP 20.090-001.
                      </TextBody>
                      <br />
                      <TextBody>
                        O presente documento visa prestar informações sobre a
                        coleta, utilização, tratamento e armazenamento dos dados
                        fornecidos pelas
                        <b> Usuárias Organizações</b> e está em conformidade com
                        a Lei 12.965/2014 (Marco Civil da Internet) e com a Lei
                        nº 13.709/18 (Lei Geral de Proteção de Dados).
                      </TextBody>
                      <br />
                      <TextBody>
                        Estas políticas de privacidade se referem apenas às
                        Usuárias Organizações, caso seja Usuário Final,{" "}
                        <Link
                          href="https://home.atos6.com/privacy_user"
                          target="_blank"
                        >
                          clique aqui
                        </Link>
                        .
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>1. DATA DE DISPONIBILIZAÇÃO DO TEXTO</u>
                      </TextBody>

                      <TextBody>
                        O presente documento foi redigido e disponibilizado em
                        12/11/2021.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          2. EXPLICAÇÃO DOS TERMOS TÉCNICOS OU EM LÍNGUA
                          ESTRANGEIRA
                        </u>
                      </TextBody>

                      <TextBody>
                        Abaixo estão dispostos os significados das nomenclaturas
                        técnicas e termos na língua inglesa:
                        <br />
                        <br />
                        Cookies: Pequenos arquivos de texto que ficam gravados
                        no computador do internauta e podem ser recuperados pelo
                        site que o enviou durante a navegação. São utilizados
                        principalmente para identificar e armazenar informações
                        sobre os visitantes.
                        <br />
                        Criptografia: Conjunto de princípios e técnicas para
                        cifrar a escrita, torná-la ininteligível para os que não
                        tenham acesso às convenções combinadas.
                        <br /> Encarregado: Pessoa indicada pelo controlador e
                        operador para atuar como canal de comunicação entre o
                        controlador, os titulares dos dados e a Autoridade
                        Nacional de Proteção de Dados (ANPD).
                        <br />
                        IP (ou Internet Protocol): Identificação única para cada
                        computador conectado a uma rede.
                        <br />
                        Usuário Final: Pessoa física ou jurídica que é membro,
                        visitante, ou doador de uma Usuária Organização.
                        <br />
                        Usuária Organização: Pessoa física ou jurídica que
                        realiza trabalhos para a comunidade (ex: ONGs,
                        associações ou igrejas).
                        <br />
                        Usuário: Faz referência às Usuárias Organizações e aos
                        Usuários Finais em conjunto.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          3. PRIVACIDADE DO USUÁRIO E OPERADORES DE DADOS
                          TERCEIRIZADOS
                        </u>
                      </TextBody>

                      <TextBody>
                        3.1. Proteger sua privacidade é muito importante para
                        nós. Seus dados são transferidos de forma criptografada
                        e armazenados em servidores{" "}
                        <Link href="https://aws.amazon.com/pt/" target="_blank">
                          AWS Amazon
                        </Link>{" "}
                        e <Link href="https://www.heroku.com/">Heroku</Link>,
                        cujo acesso é restrito. Além disso, utilizamos firewalls
                        e certificado de segurança, dispondo de uma variedade de
                        tecnologias e procedimentos de segurança para ajudar a
                        proteger as informações dos Usuários. Ainda, cumprimos
                        com as sugestões e diretrizes de Segurança da Informação
                        da ANPD para Startups.
                      </TextBody>
                      <TextBody>
                        &nbsp;&nbsp;&nbsp;3.1.1. Esses servidores são
                        independentes e não possuem relação com o presente
                        texto. Sendo assim, recomendamos que você também leia os
                        termos de uso e políticas de privacidade dessas
                        plataformas e veja se concorda com todas as disposições,
                        antes de utilizar nossos serviços.
                      </TextBody>
                      <br />
                      <TextBody>
                        3.2. Os servidores utilizados pela <b>ATOS6</b> são
                        munidos de mecanismos aptos a assegurar a segurança de
                        seus dados que estão localizados fora do Brasil, mas
                        continuam em países que proporcionam grau de proteção de
                        dados pessoais adequado, conforme artigo 33, I da Lei n.
                        13709/18.
                      </TextBody>
                      <br />
                      <TextBody>
                        3.3. Todos os registros de acesso, conjunto de
                        informações referentes à data e hora de uso de uma
                        determinada aplicação de internet a partir de um
                        determinado endereço IP, serão mantidos pela{" "}
                        <b>ATOS6</b>, sob sigilo, em ambiente controlado e de
                        segurança, pelo prazo mínimo de 06 (seis) meses, nos
                        termos da Lei n. 12.965/2014, e artigo 7º, II, da Lei
                        13709/18.
                      </TextBody>
                      <br />
                      <TextBody>
                        3.4. O Usuário deve se responsabilizar e se declarar
                        exclusivo responsável por todas as ações, bem como por
                        todas as informações e a veracidade do conteúdo que
                        inserir na plataforma.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>4. COLETA DE DADOS</u>
                      </TextBody>

                      <TextBody>
                        <u>4.1. Dados fornecidos pelo Usuário:</u>
                      </TextBody>
                      <TextBody>
                        &nbsp;&nbsp;&nbsp; 4.1.1. Para cadastro da Usuária
                        organização: Nome do representante, email, telefone.
                      </TextBody>
                      <TextBody>
                        &nbsp;&nbsp;&nbsp;4.1.2. Para a elaboração do contrato e
                        fechamento da venda: Nome da organização, endereço
                        completo, CNPJ ou CPF do representante e Quantidade de
                        membros.
                      </TextBody>
                      <TextBody>
                        &nbsp;&nbsp;&nbsp;4.1.3. Em caso de contribuição online:
                        Dados bancários.
                      </TextBody>
                      <br />
                      <TextBody>
                        3.4. O Usuário deve se responsabilizar e se declarar
                        exclusivo responsável por todas as ações, bem como por
                        todas as informações e a veracidade do conteúdo que
                        inserir na plataforma.
                      </TextBody>
                      <br />
                      <TextBody>
                        4.2. <u>Informações que coletamos de forma indireta:</u>{" "}
                        Coletamos informações de forma indireta, como endereço
                        IP utilizado, cliques e tempos de visita, por meio de
                        Pixels, para fins de remarketing, com base no Art. 7º,
                        IX, Lei nº 13.709/2018.
                      </TextBody>
                      <TextBody>
                        &nbsp;&nbsp;&nbsp;4.2.1. Além disso, poderá ser coletada
                        a localização relativa ao endereço de IP do Usuário para
                        fins de métricas de Usuários em determinadas regiões,
                        conforme o dispositivo legal citado do item 4.2.
                      </TextBody>
                      <br />
                      <TextBody>
                        4.3. <u>Histórico de contato</u>: A <b>ATOS6</b>{" "}
                        armazena informações a respeito de todas as interações
                        já realizadas entre os Usuários por meio da plataforma,
                        como mensagens em e-mails, contatos telefônicos e upload
                        de arquivos, pois isso irá melhorar o seu atendimento e
                        torná-lo mais eficiente. Sem esse histórico,
                        provavelmente todas as vezes que você utilizasse a
                        plataforma teria que repetir o que já nos passou
                        anteriormente.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>5. TRATAMENTO DE DADOS PESSOAIS</u>
                      </TextBody>

                      <TextBody>
                        5.1. Ao aceitar a presente política de privacidade, o
                        Usuário compreende que a coleta e tratamento dos dados
                        pessoais abaixo são necessários para a execução do
                        contrato com a <b>ATOS6</b>, conforme informações
                        apresentadas a seguir.
                      </TextBody>
                      <br />
                      <Table>
                        <Thead>
                          <Tr>
                            <Td>Tipo de Dado Pessoa</Td>
                            <Td>Base Legal</Td>
                            <Td>Finalidade</Td>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>
                              <TextBody size="small">
                                Nome do representante e da Organização{" "}
                              </TextBody>
                            </Td>
                            <Td>
                              <TextBody size="small">
                                Necessário para a execução de contrato ou de
                                procedimentos preliminares relacionados a
                                contrato do qual seja parte o titular, a pedido
                                do titular dos dados (Art. 7º, V, Lei nº
                                13.709/2018).
                              </TextBody>
                            </Td>
                            <Td>
                              <TextBody size="small">
                                Identificação do Usuário. Trata-se de dado
                                pessoal essencial para que seja possível entrar
                                em contato com o Usuário, para atender às suas
                                solicitações e fornecer respostas direcionadas.
                              </TextBody>
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>
                              <TextBody size="small">
                                CPF ou CNPJ e endereço completo
                              </TextBody>
                            </Td>
                            <Td>
                              <TextBody size="small">
                                Cumprimento de obrigação legal ou regulatória
                                pelo controlador (Art. 7º, II, Lei nº
                                13.709/2018).
                              </TextBody>
                            </Td>
                            <Td>
                              <TextBody size="small">
                                Utilizado para a emissão de notas fiscais ao
                                Usuário, em relação aos serviços prestados pela
                                plataforma.
                              </TextBody>
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>
                              <TextBody size="small">
                                E-mail e telefone{" "}
                              </TextBody>
                            </Td>
                            <Td>
                              <TextBody size="small">
                                Necessário para a execução de contrato ou de
                                procedimentos preliminares relacionados a
                                contrato do qual seja parte o titular, a pedido
                                do titular dos dados (Art. 7º, V, Lei nº
                                13.709/2018).
                              </TextBody>
                            </Td>
                            <Td>
                              <TextBody size="small">
                                Utilizado para login e validação de cadastro na
                                plataforma, assim como meio de comunicação com o
                                Usuário, para contatos e interações ao longo da
                                jornada de uso da plataforma. Além disso, é
                                utilizado como chave de segurança em caso de
                                perda de senha.
                              </TextBody>
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>
                              <TextBody size="small">
                                IP (Internet Protocol), Localização, Fonte de
                                referência, Tipo de navegador, Duração da
                                visita, Páginas visitadas
                              </TextBody>
                            </Td>

                            <Td>
                              <TextBody size="small">
                                Cumprimento de obrigação legal ou regulatória
                                pelo controlador (Art. 7º, II, Lei nº
                                13.709/2018).
                              </TextBody>
                            </Td>
                            <Td>
                              <TextBody size="small">
                                Obediência ao artigo 15 da Lei n. 12.965/2014,
                                que impõe o dever da ATOS6 de manter os
                                respectivos registros de acesso a aplicações de
                                internet, sob sigilo, em ambiente controlado e
                                de segurança, pelo prazo de 6 (seis) meses.
                              </TextBody>
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                      <br />
                      <TextBody size="bold">
                        <u>6. COMPARTILHAMENTO DOS DADOS DOS USUÁRIOS</u>
                      </TextBody>

                      <TextBody>
                        6.1. Poderão ter acesso interno às informações dos
                        Usuários apenas pessoas estritamente necessárias para a
                        prestação do serviço.
                      </TextBody>
                      <br />
                      <TextBody>
                        6.2. Nós poderemos compartilhar os dados pessoais das
                        Usuárias Organizações com os Usuários Finais que
                        estiverem cadastrados na respectiva organização, para a
                        execução do serviço da plataforma.
                      </TextBody>
                      <TextBody>
                        &nbsp;&nbsp;&nbsp;6.2.1. A partir do momento que o
                        Usuário Final tiver acesso a esses dados, se tornarão
                        responsáveis pela segurança, tratamento e
                        compartilhamento adequado dessas informações,{" "}
                        <u>
                          não podendo divulgá-las para outras finalidades, em
                          desconformidade com a legislação vigente e com esta
                          Política de Privacidade, sob pena de responderem por
                          todas as punições, em especial as de natureza cível,
                          criminal e as aplicadas pela Autoridade Nacional de
                          Proteção de Dados
                        </u>
                        .
                      </TextBody>
                      <br />
                      <TextBody>
                        6.3. As Usuárias Organizações poderão fazer os cadastros
                        ou inserir dados pessoais de Usuários Finais, como
                        controladora de dados e com o objetivo de gestão de sua
                        organização. Desde já, as Usuárias Organizações se
                        declaram cientes de que deverão fazer o tratamento
                        desses dados pessoais de maneira transparente e
                        informada.
                      </TextBody>
                      <TextBody>
                        &nbsp;&nbsp;&nbsp;6.3.1. A partir do momento que a
                        Usuária Organização tiver acesso a esses dados, se
                        tornará responsável pela sua segurança, tratamento e
                        compartilhamento adequado, não podendo divulgá-los para
                        outras finalidades, em desconformidade com a legislação
                        vigente e com esta Política de Privacidade, sob pena de
                        responder por todas as punições, em especial as de
                        natureza cível, criminal e as aplicadas pela Autoridade
                        Nacional de Proteção de Dados. Caso tenha dúvida em
                        relação a como fazer o tratamento de dados pessoais de
                        maneira correta, e de acordo com a legislação, nossos
                        materiais de apoio:
                      </TextBody>
                      <br />
                      <br />
                      <ul>
                        <li>Como a LGPD afeta a minha Igreja?</li>
                        <li>
                          <Link
                            href="https://www.youtube.com/watch?v=hQlc8ya5vZo"
                            target="_blank"
                          >
                            Impacto da LGPD nas Igrejas
                          </Link>
                        </li>
                      </ul>
                      <br />
                      <TextBody>
                        &nbsp;&nbsp;&nbsp;6.3.2. A Usuária Organização deverá
                        informar à<b> ATOS6</b> sobre qualquer incidente de
                        segurança relacionado aos dados pessoais coletados por
                        ela no prazo de 2 (duas) horas, para que todas as
                        medidas necessárias sejam tomadas.
                      </TextBody>
                      <br />
                      <TextBody>
                        6.4. Salvo nos casos informados nestas políticas, a{" "}
                        <b>ATOS6</b> não compartilhará com terceiros os dados
                        sigilosos dos Usuários, salvo por força de lei ou ordem
                        judicial.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          7. CANCELAMENTO DA PLATAFORMA, DE CONTAS DE ACESSO E
                          EXCLUSÃO DE DADOS
                        </u>
                      </TextBody>

                      <TextBody>
                        7.1. Cancelamento de contas de acesso pela <b>ATOS6</b>:
                        A <b>ATOS6</b> poderá, a seu exclusivo critério,
                        bloquear, restringir, desabilitar ou impedir o acesso de
                        qualquer Usuário à plataforma sempre que for detectada
                        uma conduta inadequada.
                      </TextBody>
                      <br />
                      <TextBody>
                        7.2. Cancelamento de contas de acesso pelo Usuário: Os
                        Usuários que queiram podem solicitar diretamente o
                        cancelamento da conta (login), pelo{" "}
                        <Link href="mailto:atendimento@atos6.com">
                          atendimento@atos6.com
                        </Link>{" "}
                        e pelo chat disponível na plataforma.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          7.3. Exclusão de dados: No momento do cancelamento da
                          conta, quando finda a finalidade de tratamento de
                          dados ou diante de solicitação, o Usuário terá todos
                          os seus dados deletados imediatamente e
                          permanentemente da plataforma, exceto os dados cuja
                          manutenção seja obrigatória por lei ou regulação, os
                          dados necessários para o exercício regular de direitos
                          em processo judicial, administrativo ou arbitral, como
                          os registros de acesso (conjunto de informações
                          referentes à data e hora de uso de uma determinada
                          aplicação de internet a partir de um determinado
                          endereço IP), que serão mantidos, sob sigilo, em
                          ambiente controlado e de segurança, pelo prazo de 6
                          (seis) meses, nos termos da Lei n. 12.965/2014 e com a
                          base legal do art. 7, II, da Lei Geral de Proteção de
                          Dados Pessoais.
                        </u>
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>8. DIREITOS DO TITULAR DOS DADOS PESSOAIS</u>
                      </TextBody>

                      <TextBody>
                        8.1. O titular de dados pessoais tem direito a obter da{" "}
                        <b>ATOS6</b>, em relação aos dados por ela tratados, a
                        qualquer momento e mediante requisição:
                        <br />
                        &nbsp;&nbsp;&nbsp;8.1.1. Confirmação da existência de
                        tratamento de dados;
                        <br />
                        &nbsp;&nbsp;&nbsp;8.1.2. Acesso aos dados;
                        <br /> &nbsp;&nbsp;&nbsp;8.1.3. Correção de dados
                        incompletos, inexatos ou desatualizados;
                        <br />
                        &nbsp;&nbsp;&nbsp;8.1.4. Anonimização, bloqueio ou
                        eliminação de dados desnecessários, excessivos ou
                        tratados em desconformidade com o disposto na Lei
                        13.709/2018;
                        <br />
                        &nbsp;&nbsp;&nbsp;8.1.5. Portabilidade dos dados a outro
                        fornecedor de serviço ou produto, mediante requisição
                        expressa, de acordo com a regulamentação da autoridade
                        nacional, observados os segredos comercial e industrial;
                        <br />
                        &nbsp;&nbsp;&nbsp;8.1.6. Eliminação dos dados tratados
                        com o consentimento do titular, exceto nas hipóteses
                        previstas na Lei 13.709/2018;
                        <br />
                        &nbsp;&nbsp;&nbsp;8.1.7. Informação das entidades
                        públicas e privadas com as quais a <b>ATOS6</b> realizou
                        uso compartilhado de dados;
                        <br />
                        &nbsp;&nbsp;&nbsp;8.1.8. Informação sobre a
                        possibilidade de não fornecer consentimento e sobre as
                        consequências da negativa;
                        <br />
                        &nbsp;&nbsp;&nbsp;8.1.9. Revogação do consentimento.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>9. SEGURANÇA</u>
                      </TextBody>

                      <TextBody>
                        9.1. A <b>ATOS6</b> tem o compromisso de preservar a
                        estabilidade, segurança e funcionalidade da plataforma,
                        por meio de medidas técnicas compatíveis com os padrões
                        internacionais e pelo estímulo ao uso de boas práticas.
                        Todavia nenhum serviço disponível na internet possui
                        total garantia contra invasões ilegais. Em casos em que
                        terceiros não autorizados invadam o sistema de forma
                        ilícita, a <b>ATOS6</b> diligenciará da melhor forma
                        para encontrar o responsável pela atuação ilícita, mas
                        não se responsabiliza pelos danos por eles causados.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>10. MUDANÇAS NA POLÍTICA DE PRIVACIDADE</u>
                      </TextBody>

                      <TextBody>
                        10.1. A <b>ATOS6</b> poderá unilateralmente adicionar
                        e/ou modificar qualquer cláusula contida nestas
                        Políticas de Privacidade. A versão atualizada valerá
                        para o uso da plataforma realizado a partir de sua
                        publicação. A continuidade de acesso ou utilização do
                        site, depois da divulgação, confirmará a vigência das
                        novas Políticas de Privacidade pelos Usuários.
                      </TextBody>
                      <br />
                      <TextBody>
                        10.2. Caso a mudança efetuada necessite de{" "}
                        <u>consentimento do Usuário</u>, será apresentada a
                        opção de aceitar de forma livre, inequívoca e informada
                        o novo texto ou de recusá-lo.
                      </TextBody>
                      <br />
                      <TextBody>
                        10.3. Caso o Usuário não esteja de acordo com a
                        alteração, poderá não fornecer consentimento para atos
                        específicos ou poderá rescindir totalmente seu vínculo
                        com a <b>ATOS6</b>. Essa rescisão não eximirá, no
                        entanto, o Usuário de cumprir com todas as obrigações
                        assumidas sob as versões precedentes das Políticas de
                        Privacidade.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>11. ENCARREGADO E DISPOSIÇÕES GERAIS</u>
                      </TextBody>

                      <TextBody>
                        11.1. A <b>ATOS6</b> indica como encarregado o Sr. Luiz
                        Ribeiro Barbosa, com endereço eletrônico lgpd@atos6.com,
                        nos termos do art. 41 da Lei Geral de Proteção de Dados,
                        para aceitar reclamações e comunicações dos titulares e
                        da Autoridade Nacional de Proteção de Dados, prestar
                        esclarecimentos e adotar providências.
                      </TextBody>
                      <br />
                      <TextBody>
                        11.2. A <b>ATOS6</b> dispõe de um texto específico para
                        regular a licença de uso, os direitos, deveres,
                        garantias e disposições gerais: os Termos de Uso. Todos
                        esses documentos integram inseparavelmente estas
                        Políticas de Privacidade.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>12. CONTATO</u>
                      </TextBody>

                      <TextBody>
                        12.1. A <b>ATOS6</b> disponibiliza os seguintes canais
                        para receber todas as comunicações que os Usuários
                        desejarem fazer: pelo chat online disponível na
                        plataforma, pelo e-mail{" "}
                        <Link href="mailto:atendimento@atos6.com">
                          atendimento@atos6.com
                        </Link>{" "}
                        ou pelo telefone (21) 97272-5572.
                      </TextBody>
                      <br />
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton>
                      <Grid flex="1" textAlign="center">
                        <Heading size="h5">
                          {" "}
                          Política de Privacidade - Usuário Final
                        </Heading>
                      </Grid>
                      {isExpanded ? (
                        <ChevronUpFilledIcon width="24px" color="#747880" />
                      ) : (
                        <ChevronDownFilledIcon width="24px" color="#747880" />
                      )}
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Grid flex="1" textAlign="start">
                        <TextBody size="bold">
                          PARA VOCÊ ENTENDER MELHOR O QUE FAZEMOS COM AS SUAS
                          INFORMAÇÕES
                        </TextBody>
                      </Grid>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      Fizemos o máximo para explicar de forma clara e simples
                      quais dados pessoais precisaremos de você e o que vamos
                      fazer com cada um deles. Por isso, separamos abaixo os
                      pontos mais importantes, que também podem ser lidos de
                      forma bem completa e detalhada nas nossas
                      <b> Políticas de Privacidade</b>.
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      Além disso, estamos sempre disponíveis para tirar qualquer
                      dúvida que você tenha pelo e-mail{" "}
                      <Link href="mailto:atendimento@atos6.com">
                        atendimento@atos6.com
                      </Link>
                      , pelo telefone (21) 97272-5572 ou chat disponível na
                      plataforma.
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <TextBody size="bold">
                        <u>1) Como faremos a segurança de seus dados?</u>
                      </TextBody>
                      <TextBody>
                        Para garantir a sua segurança, seus dados pessoais são
                        transferidos de forma criptografada e armazenados em
                        servidores cloud (em nuvem) fornecidos pela{" "}
                        <Link href="https://aws.amazon.com/pt/" target="_blank">
                          AWS Amazon
                        </Link>
                        ,{" "}
                        <Link href="https://www.heroku.com/" target="_blank">
                          Heroku
                        </Link>
                        ,{" "}
                        <Link href="https://wasabi.com/" target="_blank">
                          Wasabi
                        </Link>{" "}
                        e&nbsp;
                        <Link href="https://cloudinary.com/" target="_blank">
                          Cloudinary
                        </Link>{" "}
                        - responsáveis pelo armazenamento e segurança (indicamos
                        fortemente que você leia os{" "}
                        <Link
                          href="https://aws.amazon.com/pt/legal/"
                          target="_blank"
                        >
                          Contratos e Políticas
                        </Link>{" "}
                        da AWS Amazon, principalmente as suas{" "}
                        <Link
                          href="https://aws.amazon.com/pt/privacy/"
                          target="_blank"
                        >
                          Políticas de Privacidade
                        </Link>
                        ,
                        <Link
                          href="https://www.salesforce.com/company/privacy/"
                          target="_blank"
                        >
                          &nbsp;Políticas de Privacidade
                        </Link>{" "}
                        da Heroku,{" "}
                        <Link
                          href="https://www.wasabi.net.br/sac-politica-de-privacidade"
                          target="_blank"
                        >
                          Políticas de Privacidade da Wasabi
                        </Link>{" "}
                        e as{" "}
                        <Link
                          href="https://cloudinary.com/privacy"
                          target="_blank"
                        >
                          Políticas de Privacidade
                        </Link>{" "}
                        da Cloudinary). Além disso, utilizamos criptografia TLS
                        1.2 e TSL 1.3 de ponta a ponta e uma variedade de
                        tecnologias e procedimentos de segurança para ajudar a
                        proteger as informações dos Usuários Finais.{" "}
                        <u>
                          <b>
                            Com isso, essas empresas passam a ter acesso aos
                            seus dados, somente para armazená-los, assim que
                            você os fornece na ATOS6
                          </b>
                        </u>
                        . Se você tiver algum problema com isso, pedimos que não
                        continue utilizando a plataforma.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          2) Como faremos a segurança e processamento dos seus
                          dados de pagamento?
                        </u>
                      </TextBody>
                      <TextBody>
                        Para o processamento das informações referentes aos
                        pagamentos, os seus dados serão enviados via API e
                        trafegados pelas plataformas independentes{" "}
                        <Link href="https://zoop.com.br/" target="_blank">
                          Zoop
                        </Link>{" "}
                        e a{" "}
                        <Link href="https://pagar.me/" target="_blank">
                          Pagar-me
                        </Link>
                        , que são as instituições responsáveis pelo
                        processamento dos pagamentos. Nós não teremos acesso aos
                        seus dados bancários e utilizamos essas plataformas
                        terceirizadas para que eles possam garantir a segurança
                        nas transações financeiras, já que sozinhos não
                        conseguiríamos.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          3) Quais dados você precisa nos informar ao se
                          cadastrar na plataforma?
                        </u>
                      </TextBody>
                      <TextBody>
                        A forma de cadastro dos Usuários Finais, dados
                        requeridos e a forma de tratamento destes dados serão
                        determinados pela Organização controladora destes dados
                        pessoais, ou seja, a quem compete as decisões referentes
                        ao tratamento de dados pessoais. A<b> ATOS6</b>, como
                        operadora de dados, apenas é a ferramenta para esta
                        gestão.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          4) Quem é o responsável pelo tratamento dos seus dados
                          pessoais?
                        </u>
                      </TextBody>
                      <TextBody>
                        A <b>ATOS6</b> é operadora do tratamento de dados
                        pessoais dos Usuários Finais que acessam o ambiente
                        digital por meio da plataforma. A<b> ATOS6</b> apenas
                        oferece ferramentas de gestão para a Organização
                        controladora e realiza todo o tratamento de dados com
                        base nas decisões da Organização controladora. No caso
                        descrito, estas Organizações são controladoras do
                        tratamento de dados pessoais dos Usuários Finais que
                        acessam as ferramentas de gestão, por meio da plataforma
                        da <b>ATOS6</b>.
                        <br />
                        <br />A <b>ATOS6</b> não realiza qualquer tipo de
                        tratamento dos dados inseridos pelos Usuários Finais nas
                        ferramentas de gestão utilizadas pela Organização
                        controladora para finalidades próprias.
                        <br />
                        <br />A <b>ATOS6</b>, em algumas situações, pode ser
                        considerada controladora do tratamento, principalmente
                        no que diz respeito aos dados coletados para prestar o
                        serviço à Organização controladora, elaborar os
                        contratos e basear suas estratégias de marketing com a
                        Organização controladora, conforme estas Políticas de
                        Privacidade.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>5) Com quem compartilhamos seus dados pessoais?</u>
                      </TextBody>
                      <TextBody>
                        A Organização como controladora do tratamento de dados
                        dos Usuários Finais, têm acesso e poder de decisão sobre
                        o tratamento das informações que estes inserirem nas
                        ferramentas de gestão.
                        <br />
                        <br />A Organização controladora se declara ciente que é
                        a responsável pela segurança, tratamento e
                        compartilhamento adequado dessas informações, não
                        podendo realizar seu tratamento em desconformidade com a
                        legislação vigente ou com estas Políticas de
                        Privacidade, sob pena de responderem por todas as
                        punições, em especial as de natureza cível, criminal e
                        as aplicadas pela Autoridade Nacional de Proteção de
                        Dados.
                        <br />
                        <br />
                        Além disso, nós iremos compartilhar os dados pessoais
                        dos Usuários apenas com as empresas referenciadas nestas
                        políticas e internamente apenas com as pessoas
                        estritamente necessárias para possibilitar a prestação
                        do nosso serviço, como CEO, CPO, Customer Experience
                        Head, Customer Success, Diretor de Negócios, Designers,
                        Head, Head de People, Marketing e Tech Lead. Salvo nos
                        casos citados, em caso de consentimento legal do titular
                        dos dados pessoais e por força de ordem judicial ou
                        determinação legal, nós não iremos compartilhar seus
                        dados com terceiros.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>6) Seus registros de acesso serão coletados?</u>
                      </TextBody>
                      <TextBody>
                        Quando você entra na nossa plataforma, colhemos seus
                        registros de acesso, ou seja, conjunto de informações
                        referentes à data e hora de uso de uma determinada
                        aplicação de internet a partir de um determinado
                        endereço IP, estas informações serão mantidas pela
                        <b> ATOS6</b>, sob sigilo, em ambiente controlado e de
                        segurança, pelo prazo mínimo de 06 (seis) meses, nos
                        termos da Lei n. 12.965/2014, e artigo 7º, II, da Lei n.
                        13.709/18.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>7) Existe coleta indireta de dados?</u>
                      </TextBody>
                      <TextBody>
                        Além disso, coletamos sua localização e informações de
                        forma indireta via navegação e cookies para rastrear o
                        número de IP, localização, duração da visita e páginas
                        visitadas, logs de acesso, identificador de dispositivo,
                        Pixel Tag e outras informações coletadas pelo{" "}
                        <Link
                          href="https://analytics.google.com/analytics/web/provision/#/provision"
                          target="_blank"
                        >
                          Google Analytics
                        </Link>
                        .
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>8) Registros de comunicações serão armazenados?</u>
                      </TextBody>
                      <TextBody>
                        Nós vamos armazenar todas as conversas que você tiver
                        conosco em nossos canais de comunicação, principalmente
                        pelo chat online da
                        <Link
                          href="https://www.portalintercom.org.br/"
                          target="_blank"
                        >
                          &nbsp;Intercom
                        </Link>
                        , pois isso irá melhorar o seu atendimento e torná-lo
                        mais eficiente. Sem esse histórico, provavelmente todas
                        as vezes que você utilizasse a plataforma teria que
                        repetir o que já nos passou anteriormente.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>9) Como seus dados serão tratados?</u>
                      </TextBody>
                      <TextBody>
                        Todos os seus dados são tratados com finalidades
                        específicas e de acordo com a Lei de Proteção de Dados
                        Pessoais. Todas essas informações estão descritas em uma
                        tabela, para facilitar a sua visualização, nas nossas
                        Políticas de Privacidade.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>10) Quais são seus direitos?</u>
                      </TextBody>
                      <TextBody>
                        Mesmo que você já tenha nos fornecido seus dados
                        pessoais, você possui total direito de, a qualquer
                        momento: confirmar a existência de tratamento dos seus
                        dados; acessar os seus dados; corrigir os seus dados;
                        tornar anônimo, bloquear ou eliminar os dados
                        desnecessários, excessivos ou tratados em
                        desconformidade com a Lei; pedir a portabilidade dos
                        dados a outro fornecedor; eliminar dados, exceto aqueles
                        exigidos por lei; obter informação sobre quem a{" "}
                        <b>ATOS6</b> realizou uso compartilhado de dados; obter
                        informação sobre a possibilidade de não fornecer
                        consentimento e sobre as consequências da negativa; e
                        voltar atrás e revogar o seu consentimento. Como o nosso
                        serviço é prestado para as organizações controladoras e
                        temos um contrato em vigor, é preciso que a empresa
                        autorize alguma dessas ações antes que possamos
                        atendê-las, ok?
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>11) Essas condições poderão mudar?</u>
                      </TextBody>
                      <TextBody>
                        Nossa Política de Privacidade poderá mudar, mas você
                        sempre poderá acessar a versão mais atualizada na nossa
                        plataforma. Além disso, se formos realizar alguma ação
                        que a lei exija sua autorização, você receberá um aviso
                        antes para poder aceitar ou recusar.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          12) Qual é o conteúdo das Políticas de Privacidade?
                        </u>
                      </TextBody>
                      <TextBody>
                        A Política de Privacidade a seguir está dividida da
                        seguinte forma para facilitar o seu acesso à informação:
                        <br />
                        a) Data de Disponibilização do Texto;
                        <br />
                        b) Explicação dos Termos Técnicos ou em Língua
                        Estrangeira;
                        <br />
                        c) Privacidade do Usuário e Operadores de Dados
                        Terceirizados;
                        <br />
                        d) Coleta de Dados;
                        <br />
                        e) Compartilhamento dos Dados Pessoais dos Usuários;
                        <br />
                        f) Cancelamento da Plataforma, de Contas de Acesso e
                        Exclusão de Dados;
                        <br />
                        g) Direitos do Titular dos Dados Pessoais;
                        <br />
                        h) Segurança;
                        <br />
                        i) Mudanças na Política de Privacidade;
                        <br />
                        j) Encarregado e Disposições Gerais;
                        <br />
                        k) Contato.
                        <br />
                        <br />
                      </TextBody>
                      <Grid flex="1" textAlign="center">
                        <Heading size="h5">POLÍTICAS DE PRIVACIDADE</Heading>
                      </Grid>
                      <TextBody>
                        <br />
                        <u>
                          Antes de acessar a plataforma <b>ATOS6</b>, é
                          importante que você leia, entenda e aceite de forma
                          livre, inequívoca e informada estas Políticas de
                          Privacidade.
                        </u>
                        <br />
                        <br />
                        Esta plataforma, cujo nome é <b>ATOS6</b>, é de
                        propriedade, mantida e operada por{" "}
                        <b>ATOS6 TECNOLOGIA E INOVAÇÃO LTDA</b>, pessoa jurídica
                        constituída na forma de sociedade limitada, inscrita no
                        CNPJ sob o nº 28.501.445/0001-74 com sede na Av. Rio
                        Branco no 26, Sobreloja, Centro, Rio de Janeiro/RJ – CEP
                        20.090-001.
                        <br />
                        <br />O presente documento visa prestar informações
                        sobre a coleta, utilização, tratamento e armazenamento
                        dos dados fornecidos pelos Usuários Finais e está em
                        conformidade com a Lei 12.965/2014 (Marco Civil da
                        Internet) e com a Lei nº 13.709/18 (Lei Geral de
                        Proteção de Dados).
                        <br />
                        <br />
                        Estas políticas de privacidade se referem apenas às
                        Usuárias Finais, caso seja Usuária Organização,{" "}
                        <Link
                          href="https://home.atos6.com/privacy_church"
                          target="_blank"
                        >
                          clique aqui
                        </Link>
                        .
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>1. DATA DE DISPONIBILIZAÇÃO DO TEXTO</u>
                      </TextBody>
                      <TextBody>
                        1.1. O presente documento foi redigido e disponibilizado
                        em 12/11/2021.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          2. EXPLICAÇÃO DOS TERMOS TÉCNICOS OU EM LÍNGUA
                          ESTRANGEIRA
                        </u>
                      </TextBody>
                      <TextBody>
                        2.1. Abaixo estão dispostos os significados das
                        nomenclaturas técnicas e termos na língua inglesa:
                      </TextBody>
                      <br />
                      <ul style={{ marginLeft: "20px" }}>
                        <li>
                          Controlador: Pessoa natural ou jurídica, de direito
                          público ou privado, a quem competem as decisões
                          referentes ao tratamento de dados pessoais;
                        </li>

                        <li>
                          Cookies: Pequenos arquivos de texto que ficam gravados
                          no computador do internauta e podem ser recuperados
                          pelo site que o enviou durante a navegação. São
                          utilizados principalmente para identificar e armazenar
                          informações sobre os visitantes.
                        </li>

                        <li>
                          Criptografia: Conjunto de princípios e técnicas para
                          cifrar a escrita, torná-la ininteligível para os que
                          não tenham acesso às convenções combinadas.
                        </li>

                        <li>
                          Dado pessoal: Informação relacionada a pessoa natural
                          identificada ou identificável;
                        </li>
                        <li>
                          {" "}
                          Dado pessoal sensível: Dado pessoal sobre origem
                          racial ou étnica, convicção religiosa, opinião
                          política, filiação a sindicato ou a organização de
                          caráter religioso, filosófico ou político, dado
                          referente à saúde ou à vida sexual, dado genético ou
                          biométrico, quando vinculado a uma pessoa natural;
                        </li>
                        <li>
                          Encarregado: Pessoa indicada pelo controlador e
                          operador para atuar como canal de comunicação entre o
                          controlador, os titulares dos dados e a Autoridade
                          Nacional de Proteção de Dados (ANPD).
                        </li>
                        <li>
                          IP (ou Internet Protocol): Identificação única para
                          cada computador conectado a uma rede.
                        </li>
                        <li>
                          Operador: Pessoa natural ou jurídica, de direito
                          público ou privado, que realiza o tratamento de dados
                          pessoais em nome do controlador;
                        </li>
                        <li>
                          Tratamento de dados: Toda operação realizada com dados
                          pessoais, como as que se referem a coleta, produção,
                          recepção, classificação, utilização, acesso,
                          reprodução, transmissão, distribuição, processamento,
                          arquivamento, armazenamento, eliminação, avaliação ou
                          controle da informação, modificação, comunicação,
                          transferência, difusão ou extração.
                        </li>
                        <br />
                      </ul>
                      2.2. São os tipos de Usuários da plataforma:
                      <ul style={{ marginLeft: "20px" }}>
                        <li>
                          Usuário Final: Pessoa física ou jurídica que é membro,
                          visitante, ou doador de uma Usuária Organização.
                        </li>

                        <li>
                          Usuária Organização: Pessoa física ou jurídica que
                          realiza trabalhos para a comunidade (ex: ONGs,
                          associações ou igrejas).
                        </li>

                        <li>
                          Estes Usuários, em conjunto, serão chamados apenas de
                          Usuários.
                        </li>
                      </ul>
                      <br />
                      <TextBody size="bold">
                        <u>
                          3. PRIVACIDADE DO USUÁRIO E OPERADORES DE DADOS
                          TERCEIRIZADOS
                        </u>
                      </TextBody>
                      <TextBody>
                        3.1. Proteger sua privacidade é muito importante para
                        nós. Seus dados pessoais são transferidos de forma
                        criptografada e armazenados em servidores cloud (em
                        nuvem) fornecidos pela{" "}
                        <Link href="https://aws.amazon.com/pt/" target="_blank">
                          AWS Amazon
                        </Link>{" "}
                        , <Link href="https://www.heroku.com/">Heroku</Link>
                        ,&nbsp;
                        <Link href="https://wasabi.com/" target="_blank">
                          Wasabi
                        </Link>{" "}
                        e{" "}
                        <Link href="https://cloudinary.com/" target="_blank">
                          Cloudinary
                        </Link>
                        , cujo acesso é restrito. Além disso, utilizamos
                        criptografia TLS 1.2 e TSL 1.3 de ponta a ponta e uma
                        variedade de tecnologias e procedimentos de segurança
                        para ajudar a proteger as informações dos Usuários
                        Finais.
                      </TextBody>
                      <TextBody>
                        &nbsp;&nbsp;&nbsp;3.1.1. Essas empresas são
                        independentes e não possuem relação com o presente
                        texto. Sendo assim, recomendamos que você também leia os
                        termos de uso e políticas de privacidade dessa
                        plataforma e veja se concorda com todas as disposições,
                        antes de utilizar nossos serviços.
                      </TextBody>
                      <TextBody>
                        &nbsp;&nbsp;&nbsp;3.1.2. Para o processamento das
                        informações referentes aos pagamentos, os seus dados
                        serão enviados via API e trafegados pelas plataformas
                        independentes&nbsp;
                        <Link href="https://zoop.com.br/" target="_blank">
                          Zoop
                        </Link>{" "}
                        e a&nbsp;
                        <Link href="https://pagar.me/" target="_blank">
                          Pagar-me
                        </Link>
                        &nbsp;, que são as instituições responsáveis pelo
                        processamento dos pagamentos. Nós não teremos acesso aos
                        seus dados bancários e utilizamos essas plataformas
                        terceirizadas para que eles possam garantir a segurança
                        nas transações financeiras, já que sozinhos não
                        conseguiríamos. Também recomendamos que você leia as{" "}
                        <Link
                          href="https://zoop.com.br/politica/cookies/"
                          target="_blank"
                        >
                          Política de Cookies
                        </Link>
                        ,{" "}
                        <Link
                          href="https://zoop.com.br/politica/privacidade"
                          target="_blank"
                        >
                          Política de Privacidade
                        </Link>{" "}
                        e{" "}
                        <Link
                          href="https://zoop.com.br/politica/seguranca-da-informacao-e-cibernetica/"
                          target="_blank"
                        >
                          Política de Segurança da Informação e Cibernética
                        </Link>{" "}
                        da{" "}
                        <Link href="https://zoop.com.br/" target="_blank">
                          Zoop
                        </Link>
                        , bem como os{" "}
                        <Link
                          href="https://pagar.me/documentos/termos-de-uso.pdf"
                          target="_blank"
                        >
                          Termos de Uso
                        </Link>
                        ,{" "}
                        <Link
                          href="https://privacidade.pagar.me/"
                          target="_blank"
                        >
                          Políticas de Privacidade
                        </Link>{" "}
                        e{" "}
                        <Link
                          href="https://pagar.me/documentos/politica-institucional-pld-cft.pdf"
                          target="_blank"
                        >
                          Política Institucional de PLD-CFT
                        </Link>{" "}
                        da
                        <Link href="https://pagar.me/" target="_blank">
                          {" "}
                          Pagar-me
                        </Link>{" "}
                        antes de realizar pagamentos.
                      </TextBody>
                      <br />
                      <TextBody>
                        3.2. Os servidores utilizados pela <b>ATOS6</b> são
                        munidos de mecanismos aptos a assegurar a segurança de
                        seus dados que estão localizados fora do Brasil nos
                        Estados Unidos, e têm o objetivo de prestar os serviços
                        contratados de forma segura e eficaz.
                      </TextBody>
                      <br />
                      <TextBody>
                        3.3. Todos os registros de acesso, conjunto de
                        informações referentes à data e hora de uso de uma
                        determinada aplicação de internet a partir de um
                        determinado endereço IP, serão mantidos pela{" "}
                        <b>ATOS6</b>, sob sigilo, em ambiente controlado e de
                        segurança, pelo prazo mínimo de 06 (seis) meses, nos
                        termos da Lei n. 12.965/2014, e artigo 7º, II, da Lei
                        13709/18.
                      </TextBody>
                      <br />
                      <TextBody>
                        3.4 O Usuário deve se responsabilizar e se declarar
                        exclusivo responsável por todas as ações, bem como por
                        todas as informações e a veracidade do conteúdo que
                        inserir na plataforma.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>4. COLETA DE DADOS</u>
                      </TextBody>
                      <TextBody>
                        <u>4.1. Dados fornecidos pelo Usuário Final:</u> A forma
                        de cadastro dos Usuários Finais, dados requeridos e a
                        forma de tratamento destes dados, serão determinados
                        pela Organização controladora destes dados pessoais, ou
                        seja, a quem compete as decisões referentes ao
                        tratamento de dados pessoais. A <b>ATOS6</b>, como
                        operadora de dados, apenas é a ferramenta para esta
                        gestão.
                      </TextBody>
                      <br />
                      <TextBody>
                        <u>4.2. Informações que coletamos de forma indireta:</u>{" "}
                        coletamos sua localização e informações de forma
                        indireta via navegação e cookies para rastrear o número
                        de IP, localização, duração da visita e páginas
                        visitadas, logs de acesso, identificador de dispositivo,
                        Pixel Tag e outras informações coletadas pelo{" "}
                        <Link
                          href="https://analytics.google.com/analytics/web/provision/#/provision"
                          target="_blank"
                        >
                          Google Analytics.
                        </Link>
                      </TextBody>
                      <br />
                      <TextBody>
                        <u>4.3. Histórico de contato:</u> A ATOS6 armazena
                        informações a respeito de todas as interações já
                        realizadas entre os Usuários por meio da plataforma,
                        como mensagens em e-mails, contatos telefônicos, upload
                        de arquivos e chat online da{" "}
                        <Link
                          href="https://www.portalintercom.org.br/"
                          target="_blank"
                        >
                          Intercon
                        </Link>
                        , pois isso irá melhorar o seu atendimento e torná-lo
                        mais eficiente. Sem esse histórico, provavelmente todas
                        as vezes que você utilizasse a plataforma teria que
                        repetir o que já nos passou anteriormente.
                      </TextBody>
                      <br />
                      <TextBody>
                        4.4.{" "}
                        <u>
                          <b>Agentes de Tratamento:</b>
                        </u>{" "}
                        A <b>ATOS6</b> é operadora do tratamento de dados
                        pessoais dos Usuários Finais que acessam o ambiente
                        digital por meio da plataforma. A <b>ATOS6</b> apenas
                        oferece ferramentas de gestão para a Organização
                        controladora e realiza todo o tratamento de dados com
                        base nas decisões da Organização controladora. No caso
                        descrito, estas Organizações são controladoras do
                        tratamento de dados pessoais dos Usuários Finais que
                        acessam as ferramentas de gestão, por meio da plataforma
                        da <b>ATOS6</b>.
                        <br />
                        &nbsp;&nbsp;&nbsp;4.4.1. A <b>ATOS6</b> não realiza
                        qualquer tipo de tratamento dos dados inseridos pelos
                        Usuários Finais nas ferramentas de gestão utilizadas
                        pela Organização controladora para finalidades próprias.
                        <br />
                        &nbsp;&nbsp;&nbsp;4.4.2. A <b>ATOS6</b>, em algumas
                        situações, pode ser considerada controladora do
                        tratamento, principalmente no que diz respeito aos dados
                        coletados para prestar o serviço à Organização
                        controladora, elaborar os contratos e basear suas
                        estratégias de marketing com a Organização controladora,
                        conforme estas Políticas de Privacidade.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>5. COMPARTILHAMENTO DOS DADOS DOS USUÁRIOS </u>
                      </TextBody>
                      <TextBody>
                        5.1. Poderão ter acesso interno às informações dos
                        Usuários apenas pessoas estritamente necessárias para a
                        prestação do serviço, como CEO, CPO, Customer Experience
                        Head, Customer Success, Diretor de Negócios, Designers,
                        Head, Head de People, Marketing e Tech Lead.
                      </TextBody>
                      <br />
                      <TextBody>
                        5.2. Os dados dos Usuários serão compartilhados pela
                        ATOS6 com as seguintes empresas e para as seguintes
                        finalidades:
                        <br />
                        &nbsp;&nbsp;&nbsp;5.2.1.{" "}
                        <Link href="https://aws.amazon.com/pt/" target="_blank">
                          AWS Amazon
                        </Link>
                        : uma vez que os dados pessoais ficam armazenados em
                        seus servidores;
                        <br />
                        &nbsp;&nbsp;&nbsp;5.2.2.{" "}
                        <Link href="https://www.heroku.com/" target="_blank">
                          Heroku
                        </Link>
                        : uma vez que os dados pessoais ficam armazenados em
                        seus servidores;
                        <br />
                        &nbsp;&nbsp;&nbsp;5.2.3.{" "}
                        <Link href="https://wasabi.com/" target="_blank">
                          Wasabi
                        </Link>
                        : uma vez que os dados pessoais ficam armazenados em
                        seus servidores;
                        <br />
                        &nbsp;&nbsp;&nbsp;5.2.4.{" "}
                        <Link href="https://cloudinary.com/" target="_blank">
                          Cloudnary
                        </Link>
                        : uma vez que os dados pessoais ficam armazenados em
                        seus servidores;
                        <br />
                        &nbsp;&nbsp;&nbsp;5.2.5.{" "}
                        <Link
                          href="https://connect.wirecard.com.br/login?redirectTo=%2Foauth%2Fauthorize%3Fclient_id%3DAPP-LO6ABONGP853%26redirect_uri%3Dhttps%253A%252F%252Fconta.wirecard.com.br%252Foauth%252Fcallback%26response_type%3Dcode%26scope%3DAPP_ADMIN"
                          target="_blank"
                        >
                          Wirecard
                        </Link>
                        : uma vez que são responsáveis pelo processamento dos
                        pagamentos;
                        <br />
                        &nbsp;&nbsp;&nbsp;5.2.6.{" "}
                        <Link href="https://pagar.me/" target="_blank">
                          Pagar-me
                        </Link>
                        : uma vez que são responsáveis pelo processamento dos
                        pagamentos;
                        <br />
                        &nbsp;&nbsp;&nbsp;5.2.7.{" "}
                        <Link
                          href="https://analytics.google.com/analytics/web/provision/#/provision"
                          target="_blank"
                        >
                          Google Analytics
                        </Link>
                        : uma vez que são responsáveis pela coleta indireta de
                        dados;
                        <br />
                        &nbsp;&nbsp;&nbsp;5.2.8.{" "}
                        <Link
                          href="https://www.portalintercom.org.br/"
                          target="_blank"
                        >
                          Intercom
                        </Link>
                        : uma vez que são responsáveis pelo armazenamento das
                        conversas via chat on-line.
                        <br />
                        &nbsp;&nbsp;&nbsp;5.2.9. A partir do momento que estas
                        empresas tiverem acesso a estes dados, se tornarão
                        responsáveis pela segurança, tratamento e
                        compartilhamento adequado dessas informações,{" "}
                        <u>
                          não podendo divulgá-las para outras finalidades, em
                          desconformidade com a legislação vigente ou com estas
                          Políticas de Privacidade, sob pena de responderem por
                          todas as punições, em especial as de natureza cível,
                          criminal e as aplicadas pela Autoridade Nacional de
                          Proteção de Dados.
                        </u>
                        <br />
                        5.3.{" "}
                        <b>
                          <u>Acesso pela controladora</u>
                        </b>
                        : A Organização como controladora do tratamento de dados
                        dos Usuários Finais, têm acesso e poder de decisão sobre
                        o tratamento das informações que estes inserirem nas
                        ferramentas de gestão.
                        <br />
                        &nbsp;&nbsp;&nbsp;5.3.1. A Organização controladora se
                        declara ciente que é a responsável pela segurança,
                        tratamento e compartilhamento adequado dessas
                        informações, não podendo realizar seu tratamento em
                        desconformidade com a legislação vigente ou com estas
                        Políticas de Privacidade, sob pena de responderem por
                        todas as punições, em especial as de natureza cível,
                        criminal e as aplicadas pela Autoridade Nacional de
                        Proteção de Dados. 5.4. Salvo nos casos citados, em caso
                        de consentimento legal do titular dos dados pessoais e
                        por força de ordem judicial ou determinação legal, nós
                        não iremos compartilhar seus dados com terceiros.
                        <br />
                        <br />
                        5.4. Salvo nos casos citados, em caso de consentimento
                        legal do titular dos dados pessoais e por força de ordem
                        judicial ou determinação legal, nós não iremos
                        compartilhar seus dados com terceiros.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>
                          CANCELAMENTO DA PLATAFORMA, DE CONTAS DE ACESSO E
                          EXCLUSÃO DE DADOS
                        </u>
                      </TextBody>
                      <TextBody>
                        6.1. Cancelamento de contas de acesso pela <b>ATOS6</b>:
                        A <b>ATOS6</b> poderá, a seu exclusivo critério, ou a
                        pedido da Usuária Organização, bloquear, restringir,
                        desabilitar ou impedir o acesso de qualquer Usuário à
                        plataforma sempre que for detectada uma conduta
                        inadequada.
                      </TextBody>
                      <br />
                      <TextBody>
                        6.2. Cancelamento de contas de acesso pelo Usuário
                        Final: Os Usuários que queiram podem solicitar
                        diretamente o cancelamento da conta (login) para a
                        Organização controladora.
                      </TextBody>
                      <br />
                      <TextBody>
                        <u>
                          <b>
                            6.3. Exclusão de dados: No momento do cancelamento
                            da conta, quando finda a finalidade de tratamento de
                            dados ou diante de solicitação, o Usuário terá todos
                            os seus dados deletados imediatamente e
                            permanentemente da plataforma, exceto os dados cuja
                            manutenção seja obrigatória por lei ou regulação, os
                            dados necessários para o exercício regular de
                            direitos em processo judicial, administrativo ou
                            arbitral, como os registros de acesso (conjunto de
                            informações referentes à data e hora de uso de uma
                            determinada aplicação de internet a partir de um
                            determinado endereço IP), que serão mantidos, sob
                            sigilo, em ambiente controlado e de segurança, pelo
                            prazo de 6 (seis) meses, nos termos da Lei n.
                            12.965/2014 e com a base legal do art. 7, II, da Lei
                            Geral de Proteção de Dados Pessoais.
                          </b>
                        </u>
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>7. DIREITOS DO TITULAR DOS DADOS PESSOAIS</u>
                      </TextBody>
                      <TextBody>
                        7.1. O titular de dados pessoais tem direito a obter da{" "}
                        <b>ATOS6</b>, em relação aos dados por ela tratados, a
                        qualquer momento e mediante requisição:
                        <br />
                        &nbsp;&nbsp;&nbsp;7.1.1. Confirmação da existência de
                        tratamento de dados;
                        <br />
                        &nbsp;&nbsp;&nbsp;7.1.2. Acesso aos dados;
                        <br />
                        &nbsp;&nbsp;&nbsp;7.1.3. Correção de dados incompletos,
                        inexatos ou desatualizados;
                        <br />
                        &nbsp;&nbsp;&nbsp;7.1.4. Anonimização, bloqueio ou
                        eliminação de dados desnecessários, excessivos ou
                        tratados em desconformidade com o disposto na Lei
                        13.709/2018;
                        <br />
                        &nbsp;&nbsp;&nbsp;7.1.5. Portabilidade dos dados a outro
                        fornecedor de serviço ou produto, mediante requisição
                        expressa, de acordo com a regulamentação da autoridade
                        nacional, observados os segredos comercial e industrial;{" "}
                        <br />
                        &nbsp;&nbsp;&nbsp;7.1.6. Eliminação dos dados tratados
                        com o consentimento do titular, exceto nas hipóteses
                        previstas na Lei 13.709/2018; <br />
                        &nbsp;&nbsp;&nbsp;7.1.7. Informação das entidades
                        públicas e privadas com as quais a <b>ATOS6</b> realizou
                        uso compartilhado de dados;
                        <br />
                        &nbsp;&nbsp;&nbsp;7.1.8. Informação sobre a
                        possibilidade de não fornecer consentimento e sobre as
                        consequências da negativa;
                        <br />
                        &nbsp;&nbsp;&nbsp;7.1.9. Revogação do consentimento.
                        <br />
                        <br />
                        7.2. Em função do serviço da ATOS6 ser prestado para a
                        Organização controladora e existir um contrato em vigor,
                        eventuais solicitações poderão precisar de autorização
                        da Organização controladora para que possam ser
                        realizadas.
                        <br />
                      </TextBody>
                      <br />
                      <br />
                      <TextBody size="bold">
                        <u>8. SEGURANÇA</u>
                      </TextBody>
                      <TextBody>
                        8.1. A <b>ATOS6</b> tem o compromisso de preservar a
                        estabilidade, segurança e funcionalidade da plataforma,
                        por meio de medidas técnicas compatíveis com os padrões
                        internacionais e pelo estímulo ao uso de boas práticas.
                        Todavia nenhum serviço disponível na internet possui
                        total garantia contra invasões ilegais. Em casos em que
                        terceiros não autorizados invadam o sistema de forma
                        ilícita, a <b>ATOS6</b> diligenciará da melhor forma
                        para encontrar o responsável pela atuação ilícita, mas
                        não se responsabiliza pelos danos por eles causados.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>9. MUDANÇAS NA POLÍTICA DE PRIVACIDADE</u>
                      </TextBody>
                      <TextBody>
                        9.1. A ATOS6 poderá unilateralmente adicionar e/ou
                        modificar qualquer cláusula contida nestas Políticas de
                        Privacidade. A versão atualizada valerá para o uso da
                        plataforma realizada a partir de sua publicação. A
                        continuidade de acesso ou utilização do site, depois da
                        divulgação, confirmará a vigência das novas Políticas de
                        Privacidade pelos Usuários.
                        <br />
                        <br />
                        9.2. Caso a mudança efetuada necessite de consentimento
                        do Usuário, será apresentada a opção de aceitar de forma
                        livre, inequívoca e informada o novo texto ou recusá-lo.
                        <br />
                        <br />
                        9.3. Caso o Usuário não esteja de acordo com a
                        alteração, poderá não fornecer consentimento para atos
                        específicos ou poderá rescindir totalmente seu vínculo
                        com a <b>ATOS6</b>. Essa rescisão não eximirá, no
                        entanto, o Usuário de cumprir com todas as obrigações
                        assumidas sob as versões precedentes das Políticas de
                        Privacidade.
                      </TextBody>
                      <br />
                      <TextBody size="bold">
                        <u>10. ENCARREGADO E DISPOSIÇÕES GERAIS</u>
                      </TextBody>
                      <TextBody>
                        10.1. A <b>ATOS6</b> indica como encarregado o Sr. Luiz
                        Ribeiro Barbosa, com endereço eletrônico{" "}
                        <Link
                          href="mailto:luiz@raisesistemas.com.br"
                          target="_blank"
                        >
                          luiz@raisesistemas.com.br
                        </Link>
                        , nos termos do art. 41 da Lei Geral de Proteção de
                        Dados, para aceitar reclamações e comunicações dos
                        titulares e da Autoridade Nacional de Proteção de Dados,
                        prestar esclarecimentos e adotar providências.
                      </TextBody>
                      <br />
                      <TextBody>
                        10.2. A <b>ATOS6</b> dispõe de um texto específico para
                        regular a licença de uso, os direitos, deveres,
                        garantias e disposições gerais: os Termos de Uso. Todos
                        esses documentos integram inseparavelmente estas
                        Políticas de Privacidade.
                      </TextBody>
                      <br />
                      <br />
                      <TextBody size="bold">
                        <u>11. CONTATO</u>
                      </TextBody>
                      <br />
                      <TextBody>
                        11.1. A ATOS6 disponibiliza os seguintes canais para
                        receber todas as comunicações que os Usuários desejarem
                        fazer: pelo chat online disponível na plataforma, pelo
                        e-mail{" "}
                        <Link
                          href="mailto:atendimento@atos6.com"
                          target="_blank"
                        >
                          atendimento@atos6.com
                        </Link>{" "}
                        ou pelo telefone (21) 97272-5572.
                      </TextBody>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </PageBody>
        </ThemeProvider>
      )}
    </div>
  )
}
