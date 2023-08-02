import React from "react"
import {
  PageBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  Grid,
  Heading,
  AccordionPanel,
  TextBody,
  Link,
  ThemeProvider,
} from "@labz/ds"

const PrivacyUser = () => {
  return (
    <div>
      {typeof window !== "undefined" && <ThemeProvider /> && (
        <ThemeProvider>
          <PageBody
            width="100vw"
            padding="200px calc(100vw - 90%);"
            marginLeft="0px !important"
          >
            <Accordion defaultIndex={[0]}>
              <AccordionItem>
                <AccordionButton>
                  <Grid flex="1" textAlign="center">
                    <Heading size="h5">
                      Política de Privacidade - Usuário Final
                    </Heading>
                  </Grid>
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
                  Fizemos o máximo para explicar de forma clara e simples quais
                  dados pessoais precisaremos de você e o que vamos fazer com
                  cada um deles. Por isso, separamos abaixo os pontos mais
                  importantes, que também podem ser lidos de forma bem completa
                  e detalhada nas nossas
                  <b> Políticas de Privacidade</b>.
                </AccordionPanel>
                <AccordionPanel pb={4}>
                  Além disso, estamos sempre disponíveis para tirar qualquer
                  dúvida que você tenha pelo e-mail{" "}
                  <Link href="mailto:atendimento@atos6.com">
                    atendimento@atos6.com
                  </Link>
                  , pelo telefone (21) 96669-6468 ou chat disponível na
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
                    <Link href="https://cloudinary.com/privacy" target="_blank">
                      Políticas de Privacidade
                    </Link>{" "}
                    da Cloudinary). Além disso, utilizamos criptografia TLS 1.2
                    e TSL 1.3 de ponta a ponta e uma variedade de tecnologias e
                    procedimentos de segurança para ajudar a proteger as
                    informações dos Usuários Finais.{" "}
                    <u>
                      <b>
                        Com isso, essas empresas passam a ter acesso aos seus
                        dados, somente para armazená-los, assim que você os
                        fornece na ATOS6
                      </b>
                    </u>
                    . Se você tiver algum problema com isso, pedimos que não
                    continue utilizando a plataforma.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>
                      2) Como faremos a segurança e processamento dos seus dados
                      de pagamento?
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
                    , que são as instituições responsáveis pelo processamento
                    dos pagamentos. Nós não teremos acesso aos seus dados
                    bancários e utilizamos essas plataformas terceirizadas para
                    que eles possam garantir a segurança nas transações
                    financeiras, já que sozinhos não conseguiríamos.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>
                      3) Quais dados você precisa nos informar ao se cadastrar
                      na plataforma?
                    </u>
                  </TextBody>
                  <TextBody>
                    A forma de cadastro dos Usuários Finais, dados requeridos e
                    a forma de tratamento destes dados serão determinados pela
                    Organização controladora destes dados pessoais, ou seja, a
                    quem compete as decisões referentes ao tratamento de dados
                    pessoais. A<b> ATOS6</b>, como operadora de dados, apenas é
                    a ferramenta para esta gestão.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>
                      4) Quem é o responsável pelo tratamento dos seus dados
                      pessoais?
                    </u>
                  </TextBody>
                  <TextBody>
                    A <b>ATOS6</b> é operadora do tratamento de dados pessoais
                    dos Usuários Finais que acessam o ambiente digital por meio
                    da plataforma. A<b> ATOS6</b> apenas oferece ferramentas de
                    gestão para a Organização controladora e realiza todo o
                    tratamento de dados com base nas decisões da Organização
                    controladora. No caso descrito, estas Organizações são
                    controladoras do tratamento de dados pessoais dos Usuários
                    Finais que acessam as ferramentas de gestão, por meio da
                    plataforma da <b>ATOS6</b>.
                    <br />
                    <br />A <b>ATOS6</b> não realiza qualquer tipo de tratamento
                    dos dados inseridos pelos Usuários Finais nas ferramentas de
                    gestão utilizadas pela Organização controladora para
                    finalidades próprias.
                    <br />
                    <br />A <b>ATOS6</b>, em algumas situações, pode ser
                    considerada controladora do tratamento, principalmente no
                    que diz respeito aos dados coletados para prestar o serviço
                    à Organização controladora, elaborar os contratos e basear
                    suas estratégias de marketing com a Organização
                    controladora, conforme estas Políticas de Privacidade.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>5) Com quem compartilhamos seus dados pessoais?</u>
                  </TextBody>
                  <TextBody>
                    A Organização como controladora do tratamento de dados dos
                    Usuários Finais, têm acesso e poder de decisão sobre o
                    tratamento das informações que estes inserirem nas
                    ferramentas de gestão.
                    <br />
                    <br />A Organização controladora se declara ciente que é a
                    responsável pela segurança, tratamento e compartilhamento
                    adequado dessas informações, não podendo realizar seu
                    tratamento em desconformidade com a legislação vigente ou
                    com estas Políticas de Privacidade, sob pena de responderem
                    por todas as punições, em especial as de natureza cível,
                    criminal e as aplicadas pela Autoridade Nacional de Proteção
                    de Dados.
                    <br />
                    <br />
                    Além disso, nós iremos compartilhar os dados pessoais dos
                    Usuários apenas com as empresas referenciadas nestas
                    políticas e internamente apenas com as pessoas estritamente
                    necessárias para possibilitar a prestação do nosso serviço,
                    como CEO, CPO, Customer Experience Head, Customer Success,
                    Diretor de Negócios, Designers, Head, Head de People,
                    Marketing e Tech Lead. Salvo nos casos citados, em caso de
                    consentimento legal do titular dos dados pessoais e por
                    força de ordem judicial ou determinação legal, nós não
                    iremos compartilhar seus dados com terceiros.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>6) Seus registros de acesso serão coletados?</u>
                  </TextBody>
                  <TextBody>
                    Quando você entra na nossa plataforma, colhemos seus
                    registros de acesso, ou seja, conjunto de informações
                    referentes à data e hora de uso de uma determinada aplicação
                    de internet a partir de um determinado endereço IP, estas
                    informações serão mantidas pela
                    <b> ATOS6</b>, sob sigilo, em ambiente controlado e de
                    segurança, pelo prazo mínimo de 06 (seis) meses, nos termos
                    da Lei n. 12.965/2014, e artigo 7º, II, da Lei n. 13.709/18.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>7) Existe coleta indireta de dados?</u>
                  </TextBody>
                  <TextBody>
                    Além disso, coletamos sua localização e informações de forma
                    indireta via navegação e cookies para rastrear o número de
                    IP, localização, duração da visita e páginas visitadas, logs
                    de acesso, identificador de dispositivo, Pixel Tag e outras
                    informações coletadas pelo{" "}
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
                    conosco em nossos canais de comunicação, principalmente pelo
                    chat online da
                    <Link
                      href="https://www.portalintercom.org.br/"
                      target="_blank"
                    >
                      &nbsp;Intercom
                    </Link>
                    , pois isso irá melhorar o seu atendimento e torná-lo mais
                    eficiente. Sem esse histórico, provavelmente todas as vezes
                    que você utilizasse a plataforma teria que repetir o que já
                    nos passou anteriormente.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>9) Como seus dados serão tratados?</u>
                  </TextBody>
                  <TextBody>
                    Todos os seus dados são tratados com finalidades específicas
                    e de acordo com a Lei de Proteção de Dados Pessoais. Todas
                    essas informações estão descritas em uma tabela, para
                    facilitar a sua visualização, nas nossas Políticas de
                    Privacidade.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>10) Quais são seus direitos?</u>
                  </TextBody>
                  <TextBody>
                    Mesmo que você já tenha nos fornecido seus dados pessoais,
                    você possui total direito de, a qualquer momento: confirmar
                    a existência de tratamento dos seus dados; acessar os seus
                    dados; corrigir os seus dados; tornar anônimo, bloquear ou
                    eliminar os dados desnecessários, excessivos ou tratados em
                    desconformidade com a Lei; pedir a portabilidade dos dados a
                    outro fornecedor; eliminar dados, exceto aqueles exigidos
                    por lei; obter informação sobre quem a <b>ATOS6</b> realizou
                    uso compartilhado de dados; obter informação sobre a
                    possibilidade de não fornecer consentimento e sobre as
                    consequências da negativa; e voltar atrás e revogar o seu
                    consentimento. Como o nosso serviço é prestado para as
                    organizações controladoras e temos um contrato em vigor, é
                    preciso que a empresa autorize alguma dessas ações antes que
                    possamos atendê-las, ok?
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>11) Essas condições poderão mudar?</u>
                  </TextBody>
                  <TextBody>
                    Nossa Política de Privacidade poderá mudar, mas você sempre
                    poderá acessar a versão mais atualizada na nossa plataforma.
                    Além disso, se formos realizar alguma ação que a lei exija
                    sua autorização, você receberá um aviso antes para poder
                    aceitar ou recusar.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>12) Qual é o conteúdo das Políticas de Privacidade?</u>
                  </TextBody>
                  <TextBody>
                    A Política de Privacidade a seguir está dividida da seguinte
                    forma para facilitar o seu acesso à informação:
                    <br />
                    a) Data de Disponibilização do Texto;
                    <br />
                    b) Explicação dos Termos Técnicos ou em Língua Estrangeira;
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
                      Antes de acessar a plataforma <b>ATOS6</b>, é importante
                      que você leia, entenda e aceite de forma livre, inequívoca
                      e informada estas Políticas de Privacidade.
                    </u>
                    <br />
                    <br />
                    Esta plataforma, cujo nome é <b>ATOS6</b>, é de propriedade,
                    mantida e operada por{" "}
                    <b>ATOS6 TECNOLOGIA E INOVAÇÃO LTDA</b>, pessoa jurídica
                    constituída na forma de sociedade limitada, inscrita no CNPJ
                    sob o nº 28.501.445/0001-74 com sede na Av. Rio Branco no
                    26, Sobreloja, Centro, Rio de Janeiro/RJ – CEP 20.090-001.
                    <br />
                    <br />O presente documento visa prestar informações sobre a
                    coleta, utilização, tratamento e armazenamento dos dados
                    fornecidos pelos Usuários Finais e está em conformidade com
                    a Lei 12.965/2014 (Marco Civil da Internet) e com a Lei nº
                    13.709/18 (Lei Geral de Proteção de Dados).
                    <br />
                    <br />
                    Estas políticas de privacidade se referem apenas às Usuárias
                    Finais, caso seja Usuária Organização,{" "}
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
                    1.1. O presente documento foi redigido e disponibilizado em
                    12/11/2021.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>
                      2. EXPLICAÇÃO DOS TERMOS TÉCNICOS OU EM LÍNGUA ESTRANGEIRA
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
                      público ou privado, a quem competem as decisões referentes
                      ao tratamento de dados pessoais;
                    </li>

                    <li>
                      Cookies: Pequenos arquivos de texto que ficam gravados no
                      computador do internauta e podem ser recuperados pelo site
                      que o enviou durante a navegação. São utilizados
                      principalmente para identificar e armazenar informações
                      sobre os visitantes.
                    </li>

                    <li>
                      Criptografia: Conjunto de princípios e técnicas para
                      cifrar a escrita, torná-la ininteligível para os que não
                      tenham acesso às convenções combinadas.
                    </li>

                    <li>
                      Dado pessoal: Informação relacionada a pessoa natural
                      identificada ou identificável;
                    </li>
                    <li>
                      {" "}
                      Dado pessoal sensível: Dado pessoal sobre origem racial ou
                      étnica, convicção religiosa, opinião política, filiação a
                      sindicato ou a organização de caráter religioso,
                      filosófico ou político, dado referente à saúde ou à vida
                      sexual, dado genético ou biométrico, quando vinculado a
                      uma pessoa natural;
                    </li>
                    <li>
                      Encarregado: Pessoa indicada pelo controlador e operador
                      para atuar como canal de comunicação entre o controlador,
                      os titulares dos dados e a Autoridade Nacional de Proteção
                      de Dados (ANPD).
                    </li>
                    <li>
                      IP (ou Internet Protocol): Identificação única para cada
                      computador conectado a uma rede.
                    </li>
                    <li>
                      Operador: Pessoa natural ou jurídica, de direito público
                      ou privado, que realiza o tratamento de dados pessoais em
                      nome do controlador;
                    </li>
                    <li>
                      Tratamento de dados: Toda operação realizada com dados
                      pessoais, como as que se referem a coleta, produção,
                      recepção, classificação, utilização, acesso, reprodução,
                      transmissão, distribuição, processamento, arquivamento,
                      armazenamento, eliminação, avaliação ou controle da
                      informação, modificação, comunicação, transferência,
                      difusão ou extração.
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
                      Usuária Organização: Pessoa física ou jurídica que realiza
                      trabalhos para a comunidade (ex: ONGs, associações ou
                      igrejas).
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
                    3.1. Proteger sua privacidade é muito importante para nós.
                    Seus dados pessoais são transferidos de forma criptografada
                    e armazenados em servidores cloud (em nuvem) fornecidos pela{" "}
                    <Link href="https://aws.amazon.com/pt/" target="_blank">
                      AWS Amazon
                    </Link>{" "}
                    , <Link href="https://www.heroku.com/">Heroku</Link>,&nbsp;
                    <Link href="https://wasabi.com/" target="_blank">
                      Wasabi
                    </Link>{" "}
                    e{" "}
                    <Link href="https://cloudinary.com/" target="_blank">
                      Cloudinary
                    </Link>
                    , cujo acesso é restrito. Além disso, utilizamos
                    criptografia TLS 1.2 e TSL 1.3 de ponta a ponta e uma
                    variedade de tecnologias e procedimentos de segurança para
                    ajudar a proteger as informações dos Usuários Finais.
                  </TextBody>
                  <TextBody>
                    &nbsp;&nbsp;&nbsp;3.1.1. Essas empresas são independentes e
                    não possuem relação com o presente texto. Sendo assim,
                    recomendamos que você também leia os termos de uso e
                    políticas de privacidade dessa plataforma e veja se concorda
                    com todas as disposições, antes de utilizar nossos serviços.
                  </TextBody>
                  <TextBody>
                    &nbsp;&nbsp;&nbsp;3.1.2. Para o processamento das
                    informações referentes aos pagamentos, os seus dados serão
                    enviados via API e trafegados pelas plataformas
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
                    terceirizadas para que eles possam garantir a segurança nas
                    transações financeiras, já que sozinhos não conseguiríamos.
                    Também recomendamos que você leia as{" "}
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
                    <Link href="https://privacidade.pagar.me/" target="_blank">
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
                    3.2. Os servidores utilizados pela <b>ATOS6</b> são munidos
                    de mecanismos aptos a assegurar a segurança de seus dados
                    que estão localizados fora do Brasil nos Estados Unidos, e
                    têm o objetivo de prestar os serviços contratados de forma
                    segura e eficaz.
                  </TextBody>
                  <br />
                  <TextBody>
                    3.3. Todos os registros de acesso, conjunto de informações
                    referentes à data e hora de uso de uma determinada aplicação
                    de internet a partir de um determinado endereço IP, serão
                    mantidos pela <b>ATOS6</b>, sob sigilo, em ambiente
                    controlado e de segurança, pelo prazo mínimo de 06 (seis)
                    meses, nos termos da Lei n. 12.965/2014, e artigo 7º, II, da
                    Lei 13709/18.
                  </TextBody>
                  <br />
                  <TextBody>
                    3.4 O Usuário deve se responsabilizar e se declarar
                    exclusivo responsável por todas as ações, bem como por todas
                    as informações e a veracidade do conteúdo que inserir na
                    plataforma.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>4. COLETA DE DADOS</u>
                  </TextBody>
                  <TextBody>
                    <u>4.1. Dados fornecidos pelo Usuário Final:</u> A forma de
                    cadastro dos Usuários Finais, dados requeridos e a forma de
                    tratamento destes dados, serão determinados pela Organização
                    controladora destes dados pessoais, ou seja, a quem compete
                    as decisões referentes ao tratamento de dados pessoais. A{" "}
                    <b>ATOS6</b>, como operadora de dados, apenas é a ferramenta
                    para esta gestão.
                  </TextBody>
                  <br />
                  <TextBody>
                    <u>4.2. Informações que coletamos de forma indireta:</u>{" "}
                    coletamos sua localização e informações de forma indireta
                    via navegação e cookies para rastrear o número de IP,
                    localização, duração da visita e páginas visitadas, logs de
                    acesso, identificador de dispositivo, Pixel Tag e outras
                    informações coletadas pelo{" "}
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
                    informações a respeito de todas as interações já realizadas
                    entre os Usuários por meio da plataforma, como mensagens em
                    e-mails, contatos telefônicos, upload de arquivos e chat
                    online da{" "}
                    <Link
                      href="https://www.portalintercom.org.br/"
                      target="_blank"
                    >
                      Intercon
                    </Link>
                    , pois isso irá melhorar o seu atendimento e torná-lo mais
                    eficiente. Sem esse histórico, provavelmente todas as vezes
                    que você utilizasse a plataforma teria que repetir o que já
                    nos passou anteriormente.
                  </TextBody>
                  <br />
                  <TextBody>
                    4.4.{" "}
                    <u>
                      <b>Agentes de Tratamento:</b>
                    </u>{" "}
                    A <b>ATOS6</b> é operadora do tratamento de dados pessoais
                    dos Usuários Finais que acessam o ambiente digital por meio
                    da plataforma. A <b>ATOS6</b> apenas oferece ferramentas de
                    gestão para a Organização controladora e realiza todo o
                    tratamento de dados com base nas decisões da Organização
                    controladora. No caso descrito, estas Organizações são
                    controladoras do tratamento de dados pessoais dos Usuários
                    Finais que acessam as ferramentas de gestão, por meio da
                    plataforma da <b>ATOS6</b>.
                    <br />
                    &nbsp;&nbsp;&nbsp;4.4.1. A <b>ATOS6</b> não realiza qualquer
                    tipo de tratamento dos dados inseridos pelos Usuários Finais
                    nas ferramentas de gestão utilizadas pela Organização
                    controladora para finalidades próprias.
                    <br />
                    &nbsp;&nbsp;&nbsp;4.4.2. A <b>ATOS6</b>, em algumas
                    situações, pode ser considerada controladora do tratamento,
                    principalmente no que diz respeito aos dados coletados para
                    prestar o serviço à Organização controladora, elaborar os
                    contratos e basear suas estratégias de marketing com a
                    Organização controladora, conforme estas Políticas de
                    Privacidade.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>5. COMPARTILHAMENTO DOS DADOS DOS USUÁRIOS </u>
                  </TextBody>
                  <TextBody>
                    5.1. Poderão ter acesso interno às informações dos Usuários
                    apenas pessoas estritamente necessárias para a prestação do
                    serviço, como CEO, CPO, Customer Experience Head, Customer
                    Success, Diretor de Negócios, Designers, Head, Head de
                    People, Marketing e Tech Lead.
                  </TextBody>
                  <br />
                  <TextBody>
                    5.2. Os dados dos Usuários serão compartilhados pela ATOS6
                    com as seguintes empresas e para as seguintes finalidades:
                    <br />
                    &nbsp;&nbsp;&nbsp;5.2.1.{" "}
                    <Link href="https://aws.amazon.com/pt/" target="_blank">
                      AWS Amazon
                    </Link>
                    : uma vez que os dados pessoais ficam armazenados em seus
                    servidores;
                    <br />
                    &nbsp;&nbsp;&nbsp;5.2.2.{" "}
                    <Link href="https://www.heroku.com/" target="_blank">
                      Heroku
                    </Link>
                    : uma vez que os dados pessoais ficam armazenados em seus
                    servidores;
                    <br />
                    &nbsp;&nbsp;&nbsp;5.2.3.{" "}
                    <Link href="https://wasabi.com/" target="_blank">
                      Wasabi
                    </Link>
                    : uma vez que os dados pessoais ficam armazenados em seus
                    servidores;
                    <br />
                    &nbsp;&nbsp;&nbsp;5.2.4.{" "}
                    <Link href="https://cloudinary.com/" target="_blank">
                      Cloudnary
                    </Link>
                    : uma vez que os dados pessoais ficam armazenados em seus
                    servidores;
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
                    responsáveis pela segurança, tratamento e compartilhamento
                    adequado dessas informações,{" "}
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
                    : A Organização como controladora do tratamento de dados dos
                    Usuários Finais, têm acesso e poder de decisão sobre o
                    tratamento das informações que estes inserirem nas
                    ferramentas de gestão.
                    <br />
                    &nbsp;&nbsp;&nbsp;5.3.1. A Organização controladora se
                    declara ciente que é a responsável pela segurança,
                    tratamento e compartilhamento adequado dessas informações,
                    não podendo realizar seu tratamento em desconformidade com a
                    legislação vigente ou com estas Políticas de Privacidade,
                    sob pena de responderem por todas as punições, em especial
                    as de natureza cível, criminal e as aplicadas pela
                    Autoridade Nacional de Proteção de Dados. 5.4. Salvo nos
                    casos citados, em caso de consentimento legal do titular dos
                    dados pessoais e por força de ordem judicial ou determinação
                    legal, nós não iremos compartilhar seus dados com terceiros.
                    <br />
                    <br />
                    5.4. Salvo nos casos citados, em caso de consentimento legal
                    do titular dos dados pessoais e por força de ordem judicial
                    ou determinação legal, nós não iremos compartilhar seus
                    dados com terceiros.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>
                      CANCELAMENTO DA PLATAFORMA, DE CONTAS DE ACESSO E EXCLUSÃO
                      DE DADOS
                    </u>
                  </TextBody>
                  <TextBody>
                    6.1. Cancelamento de contas de acesso pela <b>ATOS6</b>: A{" "}
                    <b>ATOS6</b> poderá, a seu exclusivo critério, ou a pedido
                    da Usuária Organização, bloquear, restringir, desabilitar ou
                    impedir o acesso de qualquer Usuário à plataforma sempre que
                    for detectada uma conduta inadequada.
                  </TextBody>
                  <br />
                  <TextBody>
                    6.2. Cancelamento de contas de acesso pelo Usuário Final: Os
                    Usuários que queiram podem solicitar diretamente o
                    cancelamento da conta (login) para a Organização
                    controladora.
                  </TextBody>
                  <br />
                  <TextBody>
                    <u>
                      <b>
                        6.3. Exclusão de dados: No momento do cancelamento da
                        conta, quando finda a finalidade de tratamento de dados
                        ou diante de solicitação, o Usuário terá todos os seus
                        dados deletados imediatamente e permanentemente da
                        plataforma, exceto os dados cuja manutenção seja
                        obrigatória por lei ou regulação, os dados necessários
                        para o exercício regular de direitos em processo
                        judicial, administrativo ou arbitral, como os registros
                        de acesso (conjunto de informações referentes à data e
                        hora de uso de uma determinada aplicação de internet a
                        partir de um determinado endereço IP), que serão
                        mantidos, sob sigilo, em ambiente controlado e de
                        segurança, pelo prazo de 6 (seis) meses, nos termos da
                        Lei n. 12.965/2014 e com a base legal do art. 7, II, da
                        Lei Geral de Proteção de Dados Pessoais.
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
                    eliminação de dados desnecessários, excessivos ou tratados
                    em desconformidade com o disposto na Lei 13.709/2018;
                    <br />
                    &nbsp;&nbsp;&nbsp;7.1.5. Portabilidade dos dados a outro
                    fornecedor de serviço ou produto, mediante requisição
                    expressa, de acordo com a regulamentação da autoridade
                    nacional, observados os segredos comercial e industrial;{" "}
                    <br />
                    &nbsp;&nbsp;&nbsp;7.1.6. Eliminação dos dados tratados com o
                    consentimento do titular, exceto nas hipóteses previstas na
                    Lei 13.709/2018; <br />
                    &nbsp;&nbsp;&nbsp;7.1.7. Informação das entidades públicas e
                    privadas com as quais a <b>ATOS6</b> realizou uso
                    compartilhado de dados;
                    <br />
                    &nbsp;&nbsp;&nbsp;7.1.8. Informação sobre a possibilidade de
                    não fornecer consentimento e sobre as consequências da
                    negativa;
                    <br />
                    &nbsp;&nbsp;&nbsp;7.1.9. Revogação do consentimento.
                    <br />
                    <br />
                    7.2. Em função do serviço da ATOS6 ser prestado para a
                    Organização controladora e existir um contrato em vigor,
                    eventuais solicitações poderão precisar de autorização da
                    Organização controladora para que possam ser realizadas.
                    <br />
                  </TextBody>
                  <br />
                  <br />
                  <TextBody size="bold">
                    <u>8. SEGURANÇA</u>
                  </TextBody>
                  <TextBody>
                    8.1. A <b>ATOS6</b> tem o compromisso de preservar a
                    estabilidade, segurança e funcionalidade da plataforma, por
                    meio de medidas técnicas compatíveis com os padrões
                    internacionais e pelo estímulo ao uso de boas práticas.
                    Todavia nenhum serviço disponível na internet possui total
                    garantia contra invasões ilegais. Em casos em que terceiros
                    não autorizados invadam o sistema de forma ilícita, a{" "}
                    <b>ATOS6</b> diligenciará da melhor forma para encontrar o
                    responsável pela atuação ilícita, mas não se responsabiliza
                    pelos danos por eles causados.
                  </TextBody>
                  <br />
                  <TextBody size="bold">
                    <u>9. MUDANÇAS NA POLÍTICA DE PRIVACIDADE</u>
                  </TextBody>
                  <TextBody>
                    9.1. A ATOS6 poderá unilateralmente adicionar e/ou modificar
                    qualquer cláusula contida nestas Políticas de Privacidade. A
                    versão atualizada valerá para o uso da plataforma realizada
                    a partir de sua publicação. A continuidade de acesso ou
                    utilização do site, depois da divulgação, confirmará a
                    vigência das novas Políticas de Privacidade pelos Usuários.
                    <br />
                    <br />
                    9.2. Caso a mudança efetuada necessite de consentimento do
                    Usuário, será apresentada a opção de aceitar de forma livre,
                    inequívoca e informada o novo texto ou recusá-lo.
                    <br />
                    <br />
                    9.3. Caso o Usuário não esteja de acordo com a alteração,
                    poderá não fornecer consentimento para atos específicos ou
                    poderá rescindir totalmente seu vínculo com a <b>ATOS6</b>.
                    Essa rescisão não eximirá, no entanto, o Usuário de cumprir
                    com todas as obrigações assumidas sob as versões precedentes
                    das Políticas de Privacidade.
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
                    , nos termos do art. 41 da Lei Geral de Proteção de Dados,
                    para aceitar reclamações e comunicações dos titulares e da
                    Autoridade Nacional de Proteção de Dados, prestar
                    esclarecimentos e adotar providências.
                  </TextBody>
                  <br />
                  <TextBody>
                    10.2. A <b>ATOS6</b> dispõe de um texto específico para
                    regular a licença de uso, os direitos, deveres, garantias e
                    disposições gerais: os Termos de Uso. Todos esses documentos
                    integram inseparavelmente estas Políticas de Privacidade.
                  </TextBody>
                  <br />
                  <br />
                  <TextBody size="bold">
                    <u>11. CONTATO</u>
                  </TextBody>
                  <br />
                  <TextBody>
                    11.1. A ATOS6 disponibiliza os seguintes canais para receber
                    todas as comunicações que os Usuários desejarem fazer: pelo
                    chat online disponível na plataforma, pelo e-mail{" "}
                    <Link href="mailto:atendimento@atos6.com" target="_blank">
                      atendimento@atos6.com
                    </Link>{" "}
                    ou pelo telefone (21) 96669-6468.
                  </TextBody>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </PageBody>
        </ThemeProvider>
      )}
    </div>
  )
}

export default PrivacyUser
