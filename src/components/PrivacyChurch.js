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
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  ThemeProvider,
} from "@labz/ds"

const PrivacyChurch = () => {
  return (
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
                  Política de Privacidade - Igrejas e Organizações
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
              dados pessoais precisaremos de você e o que vamos fazer com cada
              um deles. Por isso, separamos abaixo os pontos mais importantes,
              que também podem ser lidos de forma bem completa e detalhada nas
              nossas
              <b> Políticas de Privacidade.</b>
            </AccordionPanel>
            <AccordionPanel pb={4}>
              Além disso, estamos sempre disponíveis para tirar qualquer dúvida
              que você tenha pelo e-mail{" "}
              <Link href="mailto:atendimento@atos6.com">
                atendimento@atos6.com
              </Link>
              , pelo telefone (21) 97272-5572 ou chat disponível na plataforma.
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
                <Link href="https://aws.amazon.com/pt/legal/" target="_blank">
                  Contratos e Políticas
                </Link>{" "}
                da AWS Amazon, principalmente as{" "}
                <Link href="https://aws.amazon.com/pt/privacy/" target="_blank">
                  Políticas de Privacidade
                </Link>
                ). Além disso, utilizamos criptografia TLS 1.2 de ponta a ponta
                e uma variedade de tecnologias e procedimentos de segurança para
                ajudar a proteger as informações dos Usuários Finais.{" "}
                <b>
                  <u>
                    Com isso, essas empresas passam a ter acesso aos seus dados,
                    somente para armazená-los, assim que você os fornece na
                    ATOS6
                  </u>
                </b>
                . Se você tiver algum problema com isso, pedimos que não
                continue utilizando a plataforma. Ainda, cumprimos com as
                sugestões e diretrizes de Segurança da Informação da ANPD para
                Startups.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>
                  2) Como faremos a segurança e processamento dos seus dados de
                  pagamento?
                </u>
              </TextBody>
              <TextBody>
                Para o processamento das informações referentes aos pagamentos,
                os seus dados serão enviados via API e trafegados pelas
                plataformas independentes{" "}
                <Link href="https://zoop.com.br/" target="_blank">
                  Zoop
                </Link>{" "}
                e a{" "}
                <Link href="https://pagar.me/" target="_blank">
                  Pagar-me
                </Link>
                , que são as instituições responsáveis pelo processamento dos
                pagamentos. Nós não teremos acesso aos seus dados bancários e
                utilizamos essas plataformas terceirizadas para que eles possam
                garantir a segurança nas transações financeiras, já que sozinhos
                não conseguiríamos.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>
                  3) Quais dados você precisa nos informar ao se cadastrar na
                  plataforma?
                </u>
              </TextBody>
              <TextBody>
                Quando as Usuárias Organizações se cadastrarem na plataforma
                iremos pedir os seguintes dados obrigatórios: Da pessoa jurídica
                (caso aplicável): Razão Social, CNPJ, endereço completo e
                quantidade de membros. Do representante legal: Nome, CPF,
                endereço e-mail e telefone celular.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>4) Com quem compartilhamos seus dados pessoais?</u>
              </TextBody>
              <TextBody>
                Nós iremos compartilhar os seus dados pessoais com as empresas
                referenciadas nestas políticas e internamente apenas com as
                pessoas estritamente necessárias para possibilitar a prestação
                do nosso serviço, como CEO, CPO, Customer Experience Head,
                Customer Success, Diretor de Negócios, Designers, Head, Head de
                People, Marketing e Tech Lead.
                <br />
                <br />
                Nós poderemos compartilhar também seus dados pessoais com os
                Usuários Finais que estiverem cadastrados na sua organização,
                para a execução do serviço da plataforma. Salvo nos casos
                citados, em caso de consentimento legal do titular dos dados
                pessoais e por força de ordem judicial ou determinação legal,
                nós não iremos compartilhar seus dados com terceiros.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>5) Como funciona o cadastro de membros (Usuários Finais)?</u>
              </TextBody>
              <TextBody>
                As Usuárias Organizações poderão fazer os cadastros ou inserir
                dados pessoais de Usuários Finais, como controladora de dados e
                com o objetivo de gestão de sua organização. Desde já, as
                Usuárias Organizações se declaram cientes de que deverão fazer o
                tratamento desses dados pessoais de maneira transparente e
                informada. A partir do momento que a Usuária Organização tiver
                acesso a esses dados, se tornará responsável pela sua segurança,
                tratamento e compartilhamento adequado, não podendo divulgá-los
                para outras finalidades, em desconformidade com a legislação
                vigente e com esta Política de Privacidade, sob pena de
                responder por todas as punições, em especial as de natureza
                cível, criminal e as aplicadas pela Autoridade Nacional de
                Proteção de Dados. Caso tenha dúvida em relação a como fazer o
                tratamento de dados pessoais de maneira correta, e de acordo com
                a legislação, nossos materiais de apoio:
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
                      Saiba o que acontece se uma igreja não se adequar a LGPD
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
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>6) Devo avisar em caso de incidentes de segurança?</u>
              </TextBody>
              <TextBody>
                A Usuária Organização deverá informar à <b>ATOS6</b> sobre
                qualquer incidente de segurança relacionado aos dados pessoais
                coletados por ela no prazo de 2 (duas) horas, para que todas as
                medidas necessárias sejam tomadas.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>7) Seus registros de acesso serão coletados?</u>
              </TextBody>
              <TextBody>
                Quando você entra na nossa Plataforma, colhemos seus registros
                de acesso, ou seja, conjunto de informações referentes à data e
                hora de uso de uma determinada aplicação de internet a partir de
                um determinado endereço IP, estas informações serão mantidas,
                sob sigilo, em ambiente controlado e de segurança, pelo prazo
                mínimo de 06 (seis) meses, nos termos da Lei n. 12.965/2014, e
                artigo 7º, II, da Lei 13709/18.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>8) Serão coletadas informações de forma indireta?</u>
              </TextBody>
              <TextBody>
                Coletamos informações de forma indireta, como endereço IP
                utilizado, cliques e tempos de visita, por meio de Pixels, para
                fins de remarketing, com base no Art. 7º, IX, Lei nº
                13.709/2018. Além disso, poderá ser coletada a localização
                relativa ao endereço de IP do Usuário para fins de métricas de
                Usuários em determinadas regiões, conforme o dispositivo legal
                citado.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>9) Registros de comunicações serão armazenados?</u>
              </TextBody>
              <TextBody>
                Nós vamos armazenar também todas as conversas que você tiver
                conosco em nossos canais de comunicação, pois isso irá melhorar
                o seu atendimento e torná-lo mais eficiente. Sem esse histórico,
                provavelmente todas as vezes que você utilizasse a plataforma
                teria que repetir o que já nos passou anteriormente.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>10) Como seus dados serão tratados?</u>
              </TextBody>
              <TextBody>
                Todos os seus dados são tratados com finalidades específicas e
                de acordo com a Lei de Proteção de Dados Pessoais. Todas essas
                informações estão descritas em uma tabela, para facilitar a sua
                visualização, nas nossas Políticas de Privacidade.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>11) Quais são seus direitos?</u>
              </TextBody>
              <TextBody>
                Mesmo que você já tenha nos fornecido seus dados pessoais, você
                possui total direito de, a qualquer momento: confirmar a
                existência de tratamento dos seus dados; acessar os seus dados;
                corrigir os seus dados; tornar anônimo os dados; bloquear ou
                eliminar os dados desnecessários, excessivos ou tratados em
                desconformidade com a Lei; pedir a portabilidade dos dados a
                outro fornecedor; eliminar dados, exceto aqueles exigidos por
                lei; obter informação sobre quem a <b>ATOS6</b> realizou uso
                compartilhado de dados; obter informação sobre a possibilidade
                de não fornecer consentimento e sobre as consequências da
                negativa; e voltar atrás e revogar o seu consentimento.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>12) Essas condições poderão mudar?</u>
              </TextBody>
              <TextBody>
                Nossa Política de Privacidade poderá mudar, mas você sempre
                poderá acessar a versão mais atualizada no nosso site. Além
                disso, se formos realizar alguma ação que a lei exija sua
                autorização, você receberá um aviso antes para poder aceitar ou
                recusar.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>13) Qual é o conteúdo das Políticas de Privacidade?</u>
              </TextBody>
              <TextBody>
                A Política de Privacidade a seguir está dividida da seguinte
                forma para facilitar o seu acesso à informação:
                <br />
                <br />
                a) Data de Disponibilização do Texto;
                <br />
                b) Explicação dos Termos Técnicos ou em Língua Estrangeira;
                <br />
                c) Privacidade do Usuário e Operadores de Dados Terceirizados;
                <br />
                d) Coleta de Dados;
                <br />
                e) Tratamento de Dados Pessoais;
                <br />
                f) Compartilhamento dos Dados Pessoais dos Usuários;
                <br />
                g) Cancelamento da Plataforma, de Contas de Acesso e Exclusão de
                Dados;
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
                  Antes de acessar a plataforma <b>ATOS6</b>, é importante que
                  você leia, entenda e aceite de forma livre, inequívoca e
                  informada estas Políticas de Privacidade.
                </u>
              </TextBody>
              <br />
              <TextBody>
                Esta plataforma, cujo nome é <b>ATOS6</b>, é de propriedade,
                mantida e operada por <b>ATOS6 TECNOLOGIA E INOVAÇÃO LTDA.</b>,
                pessoa jurídica constituída na forma de sociedade limitada,
                inscrita no CNPJ sob o no. 28.501.445/0001-74 com sede na Av.
                Rio Branco no 26, Sobreloja, Centro, Rio de Janeiro/RJ – CEP
                20.090-001.
              </TextBody>
              <br />
              <TextBody>
                O presente documento visa prestar informações sobre a coleta,
                utilização, tratamento e armazenamento dos dados fornecidos
                pelas
                <b> Usuárias Organizações</b> e está em conformidade com a Lei
                12.965/2014 (Marco Civil da Internet) e com a Lei nº 13.709/18
                (Lei Geral de Proteção de Dados).
              </TextBody>
              <br />
              <TextBody>
                Estas políticas de privacidade se referem apenas às Usuárias
                Organizações, caso seja Usuário Final,{" "}
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
                11/11/2021.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>
                  2. EXPLICAÇÃO DOS TERMOS TÉCNICOS OU EM LÍNGUA ESTRANGEIRA
                </u>
              </TextBody>

              <TextBody>
                Abaixo estão dispostos os significados das nomenclaturas
                técnicas e termos na língua inglesa:
                <br />
                <br />
                Cookies: Pequenos arquivos de texto que ficam gravados no
                computador do internauta e podem ser recuperados pelo site que o
                enviou durante a navegação. São utilizados principalmente para
                identificar e armazenar informações sobre os visitantes.
                <br />
                Criptografia: Conjunto de princípios e técnicas para cifrar a
                escrita, torná-la ininteligível para os que não tenham acesso às
                convenções combinadas.
                <br /> Encarregado: Pessoa indicada pelo controlador e operador
                para atuar como canal de comunicação entre o controlador, os
                titulares dos dados e a Autoridade Nacional de Proteção de Dados
                (ANPD).
                <br />
                IP (ou Internet Protocol): Identificação única para cada
                computador conectado a uma rede.
                <br />
                Usuário Final: Pessoa física ou jurídica que é membro,
                visitante, ou doador de uma Usuária Organização.
                <br />
                Usuária Organização: Pessoa física ou jurídica que realiza
                trabalhos para a comunidade (ex: ONGs, associações ou igrejas).
                <br />
                Usuário: Faz referência às Usuárias Organizações e aos Usuários
                Finais em conjunto.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>
                  3. PRIVACIDADE DO USUÁRIO E OPERADORES DE DADOS TERCEIRIZADOS
                </u>
              </TextBody>

              <TextBody>
                3.1. Proteger sua privacidade é muito importante para nós. Seus
                dados são transferidos de forma criptografada e armazenados em
                servidores{" "}
                <Link href="https://aws.amazon.com/pt/" target="_blank">
                  AWS Amazon
                </Link>{" "}
                e <Link href="https://www.heroku.com/">Heroku</Link>, cujo
                acesso é restrito. Além disso, utilizamos firewalls e
                certificado de segurança, dispondo de uma variedade de
                tecnologias e procedimentos de segurança para ajudar a proteger
                as informações dos Usuários. Ainda, cumprimos com as sugestões e
                diretrizes de Segurança da Informação da ANPD para Startups.
              </TextBody>
              <TextBody>
                &;;&nbsp;&nbsp;3.1.1. Esses servidores são independentes e não
                possuem relação com o presente texto. Sendo assim, recomendamos
                que você também leia os termos de uso e políticas de privacidade
                dessas plataformas e veja se concorda com todas as disposições,
                antes de utilizar nossos serviços.
              </TextBody>
              <br />
              <TextBody>
                3.2. Os servidores utilizados pela <b>ATOS6</b> são munidos de
                mecanismos aptos a assegurar a segurança de seus dados que estão
                localizados fora do Brasil, mas continuam em países que
                proporcionam grau de proteção de dados pessoais adequado,
                conforme artigo 33, I da Lei n. 13709/18.
              </TextBody>
              <br />
              <TextBody>
                3.3. Todos os registros de acesso, conjunto de informações
                referentes à data e hora de uso de uma determinada aplicação de
                internet a partir de um determinado endereço IP, serão mantidos
                pela <b>ATOS6</b>, sob sigilo, em ambiente controlado e de
                segurança, pelo prazo mínimo de 06 (seis) meses, nos termos da
                Lei n. 12.965/2014, e artigo 7º, II, da Lei 13709/18.
              </TextBody>
              <br />
              <TextBody>
                3.4. O Usuário deve se responsabilizar e se declarar exclusivo
                responsável por todas as ações, bem como por todas as
                informações e a veracidade do conteúdo que inserir na
                plataforma.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>4. COLETA DE DADOS</u>
              </TextBody>

              <TextBody>
                <u>4.1. Dados fornecidos pelo Usuário:</u>
              </TextBody>
              <TextBody>
                &nbsp;&nbsp;&nbsp; 4.1.1. Para cadastro da Usuária organização:
                Nome do representante, email, telefone.
              </TextBody>
              <TextBody>
                &nbsp;&nbsp;&nbsp;4.1.2. Para a elaboração do contrato e
                fechamento da venda: Nome da organização, endereço completo,
                CNPJ ou CPF do representante e Quantidade de membros.
              </TextBody>
              <TextBody>
                &nbsp;&nbsp;&nbsp;4.1.3. Em caso de contribuição online: Dados
                bancários.
              </TextBody>
              <br />
              <TextBody>
                3.4. O Usuário deve se responsabilizar e se declarar exclusivo
                responsável por todas as ações, bem como por todas as
                informações e a veracidade do conteúdo que inserir na
                plataforma.
              </TextBody>
              <br />
              <TextBody>
                4.2. <u>Informações que coletamos de forma indireta:</u>{" "}
                Coletamos informações de forma indireta, como endereço IP
                utilizado, cliques e tempos de visita, por meio de Pixels, para
                fins de remarketing, com base no Art. 7º, IX, Lei nº
                13.709/2018.
              </TextBody>
              <TextBody>
                &nbsp;&nbsp;&nbsp;4.2.1. Além disso, poderá ser coletada a
                localização relativa ao endereço de IP do Usuário para fins de
                métricas de Usuários em determinadas regiões, conforme o
                dispositivo legal citado do item 4.2.
              </TextBody>
              <br />
              <TextBody>
                4.3. <u>Histórico de contato</u>: A <b>ATOS6</b> armazena
                informações a respeito de todas as interações já realizadas
                entre os Usuários por meio da plataforma, como mensagens em
                e-mails, contatos telefônicos e upload de arquivos, pois isso
                irá melhorar o seu atendimento e torná-lo mais eficiente. Sem
                esse histórico, provavelmente todas as vezes que você utilizasse
                a plataforma teria que repetir o que já nos passou
                anteriormente.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>5. TRATAMENTO DE DADOS PESSOAIS</u>
              </TextBody>

              <TextBody>
                5.1. Ao aceitar a presente política de privacidade, o Usuário
                compreende que a coleta e tratamento dos dados pessoais abaixo
                são necessários para a execução do contrato com a <b>ATOS6</b>,
                conforme informações apresentadas a seguir.
              </TextBody>
              <br />
              <Table>
                <Thead>
                  <Tr fillContent>
                    <Td>Tipo de Dado Pessoa</Td>
                    <Td>Base Legal</Td>
                    <Td>Finalidade</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr fillContent>
                    <Td>
                      <TextBody size="small">
                        Nome do representante e da Organização{" "}
                      </TextBody>
                    </Td>
                    <Td>
                      <TextBody size="small">
                        Necessário para a execução de contrato ou de
                        procedimentos preliminares relacionados a contrato do
                        qual seja parte o titular, a pedido do titular dos dados
                        (Art. 7º, V, Lei nº 13.709/2018).
                      </TextBody>
                    </Td>
                    <Td>
                      <TextBody size="small">
                        Identificação do Usuário. Trata-se de dado pessoal
                        essencial para que seja possível entrar em contato com o
                        Usuário, para atender às suas solicitações e fornecer
                        respostas direcionadas.
                      </TextBody>
                    </Td>
                  </Tr>

                  <Tr fillContent>
                    <Td>
                      <TextBody size="small">
                        CPF ou CNPJ e endereço completo
                      </TextBody>
                    </Td>
                    <Td>
                      <TextBody size="small">
                        Cumprimento de obrigação legal ou regulatória pelo
                        controlador (Art. 7º, II, Lei nº 13.709/2018).
                      </TextBody>
                    </Td>
                    <Td>
                      <TextBody size="small">
                        Utilizado para a emissão de notas fiscais ao Usuário, em
                        relação aos serviços prestados pela plataforma.
                      </TextBody>
                    </Td>
                  </Tr>

                  <Tr fillContent>
                    <Td>
                      <TextBody size="small">E-mail e telefone </TextBody>
                    </Td>
                    <Td>
                      <TextBody size="small">
                        Necessário para a execução de contrato ou de
                        procedimentos preliminares relacionados a contrato do
                        qual seja parte o titular, a pedido do titular dos dados
                        (Art. 7º, V, Lei nº 13.709/2018).
                      </TextBody>
                    </Td>
                    <Td>
                      <TextBody size="small">
                        Utilizado para login e validação de cadastro na
                        plataforma, assim como meio de comunicação com o
                        Usuário, para contatos e interações ao longo da jornada
                        de uso da plataforma. Além disso, é utilizado como chave
                        de segurança em caso de perda de senha.
                      </TextBody>
                    </Td>
                  </Tr>

                  <Tr fillContent>
                    <Td>
                      <TextBody size="small">
                        IP (Internet Protocol), Localização, Fonte de
                        referência, Tipo de navegador, Duração da visita,
                        Páginas visitadas
                      </TextBody>
                    </Td>

                    <Td>
                      <TextBody size="small">
                        Cumprimento de obrigação legal ou regulatória pelo
                        controlador (Art. 7º, II, Lei nº 13.709/2018).
                      </TextBody>
                    </Td>
                    <Td>
                      <TextBody size="small">
                        Obediência ao artigo 15 da Lei n. 12.965/2014, que impõe
                        o dever da ATOS6 de manter os respectivos registros de
                        acesso a aplicações de internet, sob sigilo, em ambiente
                        controlado e de segurança, pelo prazo de 6 (seis) meses.
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
                6.1. Poderão ter acesso interno às informações dos Usuários
                apenas pessoas estritamente necessárias para a prestação do
                serviço.
              </TextBody>
              <br />
              <TextBody>
                6.2. Nós poderemos compartilhar os dados pessoais das Usuárias
                Organizações com os Usuários Finais que estiverem cadastrados na
                respectiva organização, para a execução do serviço da
                plataforma.
              </TextBody>
              <TextBody>
                &nbsp;&nbsp;&nbsp;6.2.1. A partir do momento que o Usuário Final
                tiver acesso a esses dados, se tornarão responsáveis pela
                segurança, tratamento e compartilhamento adequado dessas
                informações,{" "}
                <u>
                  não podendo divulgá-las para outras finalidades, em
                  desconformidade com a legislação vigente e com esta Política
                  de Privacidade, sob pena de responderem por todas as punições,
                  em especial as de natureza cível, criminal e as aplicadas pela
                  Autoridade Nacional de Proteção de Dados
                </u>
                .
              </TextBody>
              <br />
              <TextBody>
                6.3. As Usuárias Organizações poderão fazer os cadastros ou
                inserir dados pessoais de Usuários Finais, como controladora de
                dados e com o objetivo de gestão de sua organização. Desde já,
                as Usuárias Organizações se declaram cientes de que deverão
                fazer o tratamento desses dados pessoais de maneira transparente
                e informada.
              </TextBody>
              <TextBody>
                &nbsp;&nbsp;&nbsp;6.3.1. A partir do momento que a Usuária
                Organização tiver acesso a esses dados, se tornará responsável
                pela sua segurança, tratamento e compartilhamento adequado, não
                podendo divulgá-los para outras finalidades, em desconformidade
                com a legislação vigente e com esta Política de Privacidade, sob
                pena de responder por todas as punições, em especial as de
                natureza cível, criminal e as aplicadas pela Autoridade Nacional
                de Proteção de Dados. Caso tenha dúvida em relação a como fazer
                o tratamento de dados pessoais de maneira correta, e de acordo
                com a legislação, nossos materiais de apoio:
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
              </TextBody>
              <br />
              <TextBody>
                &nbsp;&nbsp;&nbsp;6.3.2. A Usuária Organização deverá informar à
                <b> ATOS6</b> sobre qualquer incidente de segurança relacionado
                aos dados pessoais coletados por ela no prazo de 2 (duas) horas,
                para que todas as medidas necessárias sejam tomadas.
              </TextBody>
              <br />
              <TextBody>
                6.4. Salvo nos casos informados nestas políticas, a <b>ATOS6</b>{" "}
                não compartilhará com terceiros os dados sigilosos dos Usuários,
                salvo por força de lei ou ordem judicial.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>
                  7. CANCELAMENTO DA PLATAFORMA, DE CONTAS DE ACESSO E EXCLUSÃO
                  DE DADOS
                </u>
              </TextBody>

              <TextBody>
                7.1. Cancelamento de contas de acesso pela <b>ATOS6</b>: A{" "}
                <b>ATOS6</b> poderá, a seu exclusivo critério, bloquear,
                restringir, desabilitar ou impedir o acesso de qualquer Usuário
                à plataforma sempre que for detectada uma conduta inadequada.
              </TextBody>
              <br />
              <TextBody>
                7.2. Cancelamento de contas de acesso pelo Usuário: Os Usuários
                que queiram podem solicitar diretamente o cancelamento da conta
                (login), pelo{" "}
                <Link href="mailto:atendimento@atos6.com">
                  atendimento@atos6.com
                </Link>{" "}
                e pelo chat disponível na plataforma.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>
                  7.3. Exclusão de dados: No momento do cancelamento da conta,
                  quando finda a finalidade de tratamento de dados ou diante de
                  solicitação, o Usuário terá todos os seus dados deletados
                  imediatamente e permanentemente da plataforma, exceto os dados
                  cuja manutenção seja obrigatória por lei ou regulação, os
                  dados necessários para o exercício regular de direitos em
                  processo judicial, administrativo ou arbitral, como os
                  registros de acesso (conjunto de informações referentes à data
                  e hora de uso de uma determinada aplicação de internet a
                  partir de um determinado endereço IP), que serão mantidos, sob
                  sigilo, em ambiente controlado e de segurança, pelo prazo de 6
                  (seis) meses, nos termos da Lei n. 12.965/2014 e com a base
                  legal do art. 7, II, da Lei Geral de Proteção de Dados
                  Pessoais.
                </u>
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>8. DIREITOS DO TITULAR DOS DADOS PESSOAIS</u>
              </TextBody>

              <TextBody>
                8.1. O titular de dados pessoais tem direito a obter da{" "}
                <b>ATOS6</b>, em relação aos dados por ela tratados, a qualquer
                momento e mediante requisição:
                <br />
                &nbsp;&nbsp;&nbsp;8.1.1. Confirmação da existência de tratamento
                de dados;
                <br />
                &nbsp;&nbsp;&nbsp;8.1.2. Acesso aos dados;
                <br /> &nbsp;&nbsp;&nbsp;8.1.3. Correção de dados incompletos,
                inexatos ou desatualizados;
                <br />
                &nbsp;&nbsp;&nbsp;8.1.4. Anonimização, bloqueio ou eliminação de
                dados desnecessários, excessivos ou tratados em desconformidade
                com o disposto na Lei 13.709/2018;
                <br />
                &nbsp;&nbsp;&nbsp;8.1.5. Portabilidade dos dados a outro
                fornecedor de serviço ou produto, mediante requisição expressa,
                de acordo com a regulamentação da autoridade nacional,
                observados os segredos comercial e industrial;
                <br />
                &nbsp;&nbsp;&nbsp;8.1.6. Eliminação dos dados tratados com o
                consentimento do titular, exceto nas hipóteses previstas na Lei
                13.709/2018;
                <br />
                &nbsp;&nbsp;&nbsp;8.1.7. Informação das entidades públicas e
                privadas com as quais a <b>ATOS6</b> realizou uso compartilhado
                de dados;
                <br />
                &nbsp;&nbsp;&nbsp;8.1.8. Informação sobre a possibilidade de não
                fornecer consentimento e sobre as consequências da negativa;
                <br />
                &nbsp;&nbsp;&nbsp;8.1.9. Revogação do consentimento.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>9. SEGURANÇA</u>
              </TextBody>

              <TextBody>
                9.1. A <b>ATOS6</b> tem o compromisso de preservar a
                estabilidade, segurança e funcionalidade da plataforma, por meio
                de medidas técnicas compatíveis com os padrões internacionais e
                pelo estímulo ao uso de boas práticas. Todavia nenhum serviço
                disponível na internet possui total garantia contra invasões
                ilegais. Em casos em que terceiros não autorizados invadam o
                sistema de forma ilícita, a <b>ATOS6</b> diligenciará da melhor
                forma para encontrar o responsável pela atuação ilícita, mas não
                se responsabiliza pelos danos por eles causados.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>10. MUDANÇAS NA POLÍTICA DE PRIVACIDADE</u>
              </TextBody>

              <TextBody>
                10.1. A <b>ATOS6</b> poderá unilateralmente adicionar e/ou
                modificar qualquer cláusula contida nestas Políticas de
                Privacidade. A versão atualizada valerá para o uso da plataforma
                realizado a partir de sua publicação. A continuidade de acesso
                ou utilização do site, depois da divulgação, confirmará a
                vigência das novas Políticas de Privacidade pelos Usuários.
              </TextBody>
              <br />
              <TextBody>
                10.2. Caso a mudança efetuada necessite de{" "}
                <u>consentimento do Usuário</u>, será apresentada a opção de
                aceitar de forma livre, inequívoca e informada o novo texto ou
                de recusá-lo.
              </TextBody>
              <br />
              <TextBody>
                10.3. Caso o Usuário não esteja de acordo com a alteração,
                poderá não fornecer consentimento para atos específicos ou
                poderá rescindir totalmente seu vínculo com a <b>ATOS6</b>. Essa
                rescisão não eximirá, no entanto, o Usuário de cumprir com todas
                as obrigações assumidas sob as versões precedentes das Políticas
                de Privacidade.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>11. ENCARREGADO E DISPOSIÇÕES GERAIS</u>
              </TextBody>

              <TextBody>
                11.1. A <b>ATOS6</b> indica como encarregado o Sr. Luiz Ribeiro
                Barbosa, com endereço eletrônico lgpd@atos6.com, nos termos do
                art. 41 da Lei Geral de Proteção de Dados, para aceitar
                reclamações e comunicações dos titulares e da Autoridade
                Nacional de Proteção de Dados, prestar esclarecimentos e adotar
                providências.
              </TextBody>
              <br />
              <TextBody>
                11.2. A <b>ATOS6</b> dispõe de um texto específico para regular
                a licença de uso, os direitos, deveres, garantias e disposições
                gerais: os Termos de Uso. Todos esses documentos integram
                inseparavelmente estas Políticas de Privacidade.
              </TextBody>
              <br />
              <TextBody size="bold">
                <u>12. CONTATO</u>
              </TextBody>

              <TextBody>
                12.1. A <b>ATOS6</b> disponibiliza os seguintes canais para
                receber todas as comunicações que os Usuários desejarem fazer:
                pelo chat online disponível na plataforma, pelo e-mail{" "}
                <Link href="mailto:atendimento@atos6.com">
                  atendimento@atos6.com &nbsp;
                </Link>
                ou pelo telefone (21) 97272-5572.
              </TextBody>
              <br />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </PageBody>
    </ThemeProvider>
  )
}

export default PrivacyChurch
