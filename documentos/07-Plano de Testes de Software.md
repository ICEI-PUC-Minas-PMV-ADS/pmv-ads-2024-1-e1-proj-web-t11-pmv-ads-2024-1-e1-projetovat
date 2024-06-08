# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t11-pmv-ads-2024-1-e1-projetovat/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t11-pmv-ads-2024-1-e1-projetovat/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

<br>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

<br>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar as imagens da tela inicial</td>
  <td>
   <ul>
   <li>RF-01: Na tela inicial deve ter um conjunto de fotos das ONG's.</li>
   <li>RF-02: Na tela principal deverá ter relatos dos voluntários.</li>
   <li>RF-03: Na tela principal deverá destacar projetos atuais.</li>
   <li>RF-04: A tela inicial deve apresentar fotos e informações sobre as ONG's.</li>
   <li>RF-05: Na tela inicial deverá ter um ícone de perfil para o usuário ser capaz de efetuar o login.</li>
   </ul>
  </td>
  <td>Verificar se existe alguma inconformidade nas imagens e no ícone da página principal.</td>
  <td>
   <ol>
    <li>Acessar o site e conferir todas as imagens e o ícone da tela inicial.</li>
   </ol>
   </td>
  <td>Todas as imagens devem estar nos lugares corretos e perfeitamente visíveis.</td>
  <td>Giovanni</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02:  Verificar a tela de contato</td>
  <td>
   <ul>
    <li> RF-06: O site deve ter uma tela de contato.</li>
   </ul>
  </td>
  <td> Verificar a existência e o funcionamento da tela de contato.</td>
  <td>
   <ol>
    <li>Acessar o site.</li>
    <li>Visualizar a tela inicial e clicar em “Contatos” e verificar a sua existência e se está funcionando.</li>
   </ol>
   </td>
  <td>A tela deve existir e estar estruturada.</td>
  <td>Giovanni</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Verificar a tela de administrador</td>
  <td>
   <ul>
    <li> RF-07: O sistema deve ter um perfil de administrador para gerir as informações relacionadas ao Projeto VAT.</li>
   </ul>
  </td>
  <td> Verificar se o site possui uma tela de administrador e se é possível visualizar os dados do projeto.</td>
  <td>
   <ol>
    <li>Acessar o site.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a tela inicial e clicar em “Administrador”.</li>
    <li>Verificar se é possível visualizar os dados armazenados no LocalStorage.</li>
   </ol>
   </td>
  <td>A tela deve existir e exibir os dados corretamente.</td>
  <td>Ariane</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar as telas de cadastros (voluntários e ONG’s)</td>
  <td>
   <ul>
    <li>RF-08: A aplicação deve permitir aos usuários e ONG's cadastrarem uma conta.</li>
   </ul>
  </td>
  <td>Verificar se ao preencher todos os campos os cadastros estão sendo feitos corretamente.</td>
  <td>
   <ol>
    <li>Acessar o site.</li>
    <li>Visualizar a tela inicial.</li>
    <li>Clicar no ícone de perfil (será redirecionado para tela de login).</li>
    <li>Clicar em "Cadastre-se" (será redirecionado para tela de "Cadastro de Voluntário").</li>
    <li>Preencher todos os campos do formulário e clicar em "Cadastrar".</li>
    <li>Retornar para a tela de login.</li>
    <li>Clicar em "Cadastre-se" (será redirecionado para tela de "Cadastro de Voluntário").</li>
    <li>Clicar em "Entrar como ONG”.</li>
    <li>Preencher todos os campos do formulário e clicar em "Cadastrar".</li>
   </ol>
   </td>
  <td>As informações fornecidas deverão ser validadas e ao clicar em "Cadastrar" deverá aparecer a mensagem "Cadastro realizado com sucesso!" e "Instituição  cadastrada com sucesso!".</td>
  <td>Rebeca</td>
 </tr>
</table>

<br>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar a tela de login</td>
  <td>
   <ul>
   <li>RF-09: No campo de login deverá pedir e-mail ou telefone e senha.</li>
   <li>RF-10: Na tela de login deverá ter o “esqueceu a senha?” no qual redirecionará para uma nova página para recuperação de senha.</li>
   <li>RF-11: Na tela de login deve ter a opção de se cadastrar.</li>
   </ul>
  </td>
  <td>Verificar se o login é feito corretamente.</td>
  <td>
   <ol>
    <li>Acessar o site.</li>
    <li>Visualizar a tela inicial.</li>
    <li>Clicar no ícone de perfil (será redirecionado para tela de login).</li>
    <li>Verificar se ao clicar em “Esqueceu a senha?” o usuário é redirecionado para a tela de redefinição de senha.</li>
    <li>Retornar para a tela de login.</li>
    <li>Clicar em “Cadastra-se” e verificar se o usuário é redirecionado para a tela de cadastro.</li>
   </ol>
   </td>
  <td>Visualizar todas as páginas corretamente e ser redirecionado para as respectivas telas.</td>
  <td>Ariane e Letícia</td>
 </tr>

<br>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-06: Verificar a tela de doação</td>
  <td>
   <ul>
   <li> RF-12: A plataforma deve ter a opção do usuário doar dinheiro para uma ONG ou Instituição e apresentar uma tela de doação.</li>
   </ul>
  </td>
  <td> Verificar se a plataforma permite que o usuário faça uma doação de dinheiro para uma ONG.</td>
  <td>
   <ol>
    <li>Acessar o site com um login de usuário válido.</li>
    <li>Visualizar a tela inicial e clicar em “Doe agora”.</li>
    <li> Confirmar se existe a tela de doação.</li>
    <li>Inserir o valor a ser doado na tela de doação e o nome da Instituição Social.</li>
    <li>Confirmar a doação.</li>
    <li>Verificar a exibição da mensagem de confirmação da doação bem-sucedida.</li>
    <li>Ser direcionado para tela de pagamento.</li>
   </ol>
   </td>
  <td> A tela de doação deve estar acessível e funcionando corretamente. O usuário deve conseguir escrever o valor da sua doação e o nome da Instituição Social que deseja ajudar. Ao confirmar, o usuário deve ser redirecionado para a tela de pagamento.</td>
  <td>Leticia</td>
 </tr>
</table>

<br>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-07: Verificar a tela de pagamento</td>
  <td>
   <ul>
   <li> RF-13: O site deve ter uma tela de pagamento, onde o usuário poderá escolher entre as opções de pagamento por cartão de crédito/débito ou PIX.</li>
   </ul>
  </td>
  <td> Verificar se a tela de pagamento existe e se ela permite que o usuário escolha a forma de pagamento.</td>
  <td>
   <ol>
    <li>Acessar o site com um login de usuário válido.</li>
    <li>Visualizar a tela inicial e clicar em “Doe agora”.</li>
    <li> Confirmar se existe a tela de doação.</li>
    <li>Inserir o valor a ser doado na tela de doação e o nome da Instituição Social.</li>
    <li>Confirmar a doação.</li>
    <li>Verificar a exibição da mensagem de confirmação da doação bem-sucedida.</li>
    <li>Ser direcionado para tela de pagamento.</li>
   </ol>
   </td>
  <td> A tela de pagamento deve estar acessível e funcionando corretamente. O usuário deve conseguir escolher entre as opções de cartão de crédito/débito ou PIX. Ao escolher uma das opções, o usuário deve conseguir visualizar a tela e interagir com os dados corretamente.</td>
  <td>Ariane</td>
 </tr>
</table>

<br>
 
 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
  <tr>
  <td>CT-08: Verificar a tela de redefinição de senha</td>
  <td>
   <ul>
   <li>RF-14: O sistema deve fornecer uma tela de redefinição de senha, na qual os usuários possam alterar sua senha. A tela deve permitir o redirecionamento para a página inicial ou de login.</li>
   </ul>
  </td>
  <td>Verificar se todos os campos estão preenchidos corretamente.</td>
  <td>
   <ol>
    <li>Acessar o site.</li>
    <li>Clicar no ícone de perfil (será redirecionado para tela de login).</li>
    <li>Clicar em "Esqueceu sua senha?”.</li>
   </ul>
   </ol>
   </td>
  <td>Após todos os campos serem inseridos corretamente, irá aparecer o pop-up com a informação "Cadastrado com Sucesso", após a alteração de senha terá a opção de voltar a página inicial.</td>
  <td>Thais</td>
 </tr>
</table>
