=== (Obrigatório) Baixando o projeto e instalação do Node.js
Preparando o ambiente
Nosso foco é aprender Angular, porém alguns recursos do framework necessitam de um servidor web rodando localmente em sua máquina. Para que você não perca o foco do Angular e não caia em questões de infraestrutura que dizem respeito a um servidor web, disponibilizamos o projeto alurapic (baixe agora) com tudo necessário para subir um servidor web localmente, inclusive com os arquivos do angular já baixados.

É importante destacar que o uso do projeto inicial alurapic não é opcional, pois ele já possui registrado todos os endpoints que serão consumidos pela nossa aplicação em Angular. Porém, para que o servidor funcione, é necessário ter o Node.js instalado em sua máquina.

O Node.js é um ambiente JavaScript multiplataforma disponível para Linux, Mac e Windows. Para instalá-lo, siga as instruções abaixo referentes a sua plataforma:

Linux (Ubuntu)
No Ubuntu, através do terminal (permissão de administrador necessária) execute o comando abaixo:

sudo apt-get install -y nodejs
ATENÇÃO: em algumas distribuições Linux, pode haver um conflito de nomes quando o Node é instalado pelo apt-get. Neste caso específico, no lugar do binário ser node, ele passa a se chamar nodejs. Isso gera problemas, pois a instrução npm start não funcionará, pois ela procura o binário node e não nodejs. Para resolver, use a seguinte instrução no terminal para subir o servidor:

nodejs server
Ë uma pena haver essa discrepância, mas fica aqui essa dica!

Windows
Baixe o instalador clicando no grande botão install diretamente da página do Node.js. Durante a instalação, você apenas clicará botões para continuar o assistente. Não troque a pasta padrão do Node.js durante a instalação a não ser que você saiba exatamente o que está fazendo.

MAC
O homebrew é a maneira mais recomendada para instalar o Node.js em sua máquina, através do comando:

brew update
brew install node
Não usa homebrew? Sem problema, baixe o instalador clicando no grande botão install diretamente da página do Node.js.

Rodando o servidor
Depois do Node.js ter sido instalado, dentro da pasta do projeto alurapic que você descompactou anteriormente, busque todas as dependências do projeto através do seu terminal (prompt de comando, no caso do Windows) favorito com o comando.

npm install
Em menos de um minuto, todas as dependências para rodar o servidor terão sido baixadas. Para subi-lo utilizamos o comando:

npm start
Repare que seu terminal ficará aguardando indefinidamente, sinal de que o servidor está escutando. Agora é só abrir o navegador no endereço http://localhost:3000. Uma página de boas-vindas será exibida.

Curiosidade
O projeto Alurapic utiliza Express para criar endpoints REST e o NeDB, um banco de dados totalmente feito em Node.js e que não necessita qualquer configuração especial.


=== EXPLICAÇÃO

Construindo o alicerce da nossa aplicação
Frameworks MVC client-side
Quando desenvolvemos no server-side, organizamos nosso código em camadas para facilitar a manutenção, o reaproveitamento e a legibilidade de nosso código. É muito comum aplicarmos o modelo MVC (Model, View, Controller), que consiste na separação de tarefas, facilitando assim a reescrita de alguma parte e a manutenção do código.

Porém, não é raro o mesmo desenvolvedor deixar de lado essas práticas quando codifica no client-side. Mesmo aqueles que procuram organizar melhor seu código acabam criando soluções caseiras que nem sempre são bem documentadas.

Tendo como base este cenário, frameworks MVC client-side foram criados. Entre eles temos o Backbone, Ember, Knockout, CanJS, Batman, entre outros.

Angular, o framework MVC da Google
Um framework MVC no lado do cliente que tem ganhado muita atenção da comunidade é o Angular. Criado como um projeto interno da Google e liberado para o público em 2009, ele tem como foco a criação de Single Page Applications (SPA’s). Este tipo de aplicação não recarrega a página durante seu uso, dando uma experiência mais fluída para o usuário. Não se preocupe se você é novo para este tipo de aplicação, você terá a oportunidade de entender melhor seus conceitos ao logo do treinamento.

Conhecendo um pouco da nossa aplicação, o Alurapic
Durante o treinamento construiremos a aplicação Alurapic, um sistema simples de gerenciamento de imagens, permitindo que o usuário busque por aquelas que seguem determinado critério. Mas não se engane: o domínio do problema, apesar de simples, será suficiente para empregarmos grande parte do "arsenal" que o Angular nos fornece, inclusive toda aplicação funcionará em cima de um servidor web já preparado.

Preview da aplicação Preview da aplicação Preview da aplicação

Instalando e configurando toda infra necessária
Agora que você já conhece um pouco sobre a aplicação que construiremos, saiba que alguns recursos do Angular dependem de um servidor web para funcionarem, em nosso caso, um servidor local. A boa notícia é que já disponibilizamos um para você, livrando-o dos seus detalhes de configuração. Inclusive ele fará persistência de dados sem que você tenha que instalar um banco de dados específico para isso. Porém, para tudo funcionar, você precisa ter instalado o Node.js.

O arquivo do projeto, o tutorial de instalação do Node.js e as instruções de como levantar o servidor estão no primeiro exercício deste capítulo. Esta é uma boa hora de fazê-lo antes de continuar. Vamos assumir a partir deste ponto que você realizou este primeiro exercício.

Por onde começar?
Angular é um framework que roda no lado do cliente, sendo assim, como qualquer outro script, deve ser importado na página que desejamos eleger como principal da aplicação, em nosso caso, a página já existente, index.html, que está salva dentro da pasta alurapic/public (não sabe que pasta é essa? Você fez o primeiro exercício do capítulo conforme solicitado?). Primeiramente vamos dar uma olhada em sua estrutura:

<!-- public/index.html -->
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Alurapic</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    </head>
    <body>
        <div class="container">
            <h1 class="text-center">Alurapic</h1>
        </div> <!-- fim container -->        
    </body>
</html>
Repare que a página já importa o CSS do Bootstrap. Se você ainda não o conhece, fique sabendo que ele permite aplicar um visual profissional em nosso projeto, com zero de esforço, apenas adicionando classes declaradas em seu arquivo CSS. Que classes são essas? Muita calma nessa hora! Elas serão introduzidas à medida que formos evoluindo nossa aplicação, mas já podemos adiantar que a classe container centraliza todo conteúdo da página e a text-center centraliza um elemento do tipo block, em nosso caso, a tag h1.

Agora que você já entendeu o papel do Bootstrap em nosso projeto, já podemos continuar. Todas as páginas, bibliotecas, scripts e qualquer outro arquivo dentro da pasta alurapic/public serão acessíveis através do seu navegador, inclusive já temos dentro da pasta alurapic/public/js/lib todos os arquivos do Angular que importaremos à medida que formos precisando. Vamos importar o script angular.min.js, o core do Angular dentro da tag head:

<!-- public/index.html -->
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Alurapic</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <script src="js/lib/angular.min.js"></script>
    </head>
    <body>
        <div class="container">
            <h1 class="text-center">Alurapic</h1>
        </div> <!-- fim container -->        
    </body>
</html>
Pronto, mas ainda não escrevemos um código que utiliza o Angular! Para fazermos isso, primeiro precisamos criar um módulo.

Criando o alicerce da nossa aplicação, o módulo principal
A história é a seguinte: o framework nos ajuda a separar nosso código em pequenos grupos de código que podem ser combinados e reaproveitados quando necessário, esses grupos são chamados de módulos. Uma aplicação pode ter um, dez ou até mesmo mais de cinquenta módulos, tudo dependerá da complexidade da aplicação. Porém, há sempre um módulo que é o primeiro a ser inicializado assim que sua página é carregada pela primeira vez, inclusive ele também é o responsável pelo carregamento de outros módulos de que sua aplicação precisa para funcionar. É este que criaremos agora!

Vamos criar o arquivo public/js/main.js e mesmo sem escrever qualquer linha de código, vamos importá-lo sem demora na página index.html, abaixo da importação do core do Angular, para não corrermos o risco de esquecermos de importá-lo:

<!-- public/index.html -->
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Alurapic</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <script src="js/lib/angular.min.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body>
        <div class="container">
            <h1 class="text-center">Alurapic</h1>
        </div> <!-- fim container -->        
    </body>
</html>
Pronto, e agora? Como criamos nosso módulo? Bem, o Angular disponibiliza para nós no escopo global o objeto angular (nada criativo, não?) que possui uma série de funções que nos permite interagir com o framework, entre elas a função module responsável pela criação de módulos.

Você deve estar pensando "Ok, entendi que é através desse objeto global que eu crio módulos e um monte de coisas do framework, mas escopo global não é algo ruim?". Preocupação justa, mas não se preocupe! Em uma aplicação bem-feita em Angular, este é o único objeto disponível globalmente, todo restante fica confinado dentro dos módulos do Angular! Com o tempo isso ficará ainda mais claro para você.

Criando o módulo principal da aplicação:

// public/js/main.js

angular.module('alurapic', []);
Acabamos de criar nosso primeiro módulo. Perceba que a função module recebe dois parâmetros. O primeiro é o nome do módulo que desejamos criar e o segundo é uma array com todos os módulos de que nosso módulo depende. Como não avançamos ainda com o projeto, não temos nenhuma dependência ainda, porém, você não deve omitir este parâmetro. Mais tarde você entenderá o que acontece quando ele é omitido (suspense!).

Ensinando um truque novo para o navegador
Tudo certo, criamos nosso módulo, mas como o Angular saberá que deve carregá-lo? Será que importar o script public/js/main.js é suficiente? Com certeza não.

Precisamos indicar em nossa página qual será o escopo de atuação do Angular, isto é, se ele gerenciará a página inteira ou apenas parte dela. Isso é importante, porque outro framework MVC pode estar sendo utilizado (algo raro, porém pode acontecer) e não queremos que o Angular bagunce seu trabalho.

Como apenas utilizaremos o Angular, gerenciaremos a página inteira, isto, a tag html e todos seus elementos filhos! Tudo bem, mas como faremos essa associação? Através do atributo ng-app:

<!-- public/index.html -->
<!DOCTYPE html>
<html lang="pt-br" ng-app="alurapic">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Alurapic</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <script src="js/lib/angular.min.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body>
        <div class="container">
            <h1 class="text-center">Alurapic</h1>
        </div> <!-- fim container -->        
    </body>
</html>
Repare que o atributo ng-app tem como valor o nome do nosso módulo e não poderia ser diferente. Quando nossa página é carregada pela primeira vez o Angular encontrará esse atributo e carregará o módulo alurapic, tudo isso automaticamente, sem termos que nos preocupar em carregá-lo! É claro que se você esquecer de importar o arquivo main.js o Angular não será capaz de carregar o módulo, certo?

Ah, então isso é uma diretiva?
Agora, só uma coisa antes de continuarmos: o atributo ng-app existe no mundo HTML? Com certeza não, ele não faz parte da especificação da W3C. O "atributo" ng-app é na verdade uma diretiva do Angular.

Diretivas ampliam o vocabulário do navegador, ensinando-o novos truques, inclusive aprenderemos a criar nossas próprias diretivas ao longo do treinamento! Nesse caso a diretiva ng-app fornece a capacidade de nossa página carregar/iniciar o módulo principal da aplicação. Aliás, não vamos mais usar o termo página, usaremos view, termo mais correto quando estamos no universo do Angular!

Nossa primeira página dinâmica
Legal, agora, com o servidor iniciado (não lembra como iniciá-lo? Veja o primeiro exercício do capítulo) vamos acessar o endereço http://localhost:3000 e verificar o resultado. Como esperado, nada impressionante, pois apenas preparamos a infraestrutura mínima de uma aplicação em Angular, que nada faz. No máximo, podemos ver através do console do navegador (eu uso Chrome, e você?) todos os arquivos carregados:

arquivos carregados

Bom, vamos começar a dar um colorido para nossa view index.html. Vamos adicionar uma foto, você pode escolher a URL de uma específica, não precisa ser igual a minha. Na tag img, utilizaremos as classes img-responsive center-block para que ela escale corretamente nos mais diversos dispositivos:

<!DOCTYPE html>
<html lang="pt-br" ng-app="alurapic">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Alurapic</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <script src="js/lib/angular.min.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body>
        <div class="container">
            <h1 class="text-center">Alurapic</h1>
            <img class="img-responsive center-block" src="http://www.fundosanimais.com/Minis/leoes.jpg" alt="Leão">
        </div><!-- fim container -->
    </body>
</html>
imagem de animal

Bravo! Mas isso não impressiona, além do mais, se tivéssemos 100 imagens teríamos que repetir a tag img 100 vezes! Em nossa aplicação aprenderemos a cadastrar informações de imagens e a partir desses dados cadastrados montaremos dinamicamente uma lista de imagens! Só que antes de pensar em integração com o back-end, precisamos primeiro entender como o Angular fornece dados para a nossa view e como ela se constrói a partir desses dados.

Vamos realizar uma pequena mudança na tag img, alterando os atributos src e alt:

<!DOCTYPE html>
<html lang="pt-br" ng-app="alurapic">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Alurapic</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <script src="js/lib/angular.min.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body>
        <div class="container">
            <h1 class="text-center">Alurapic</h1>
            <img class="img-responsive center-block" src="{{foto.url}}" alt="{{foto.titulo}}">
        </div><!-- fim container -->
    </body>
</html>
A primeira coisa é entender que abrimos lacunas em nossa view index.html através da sintaxe {{ }}. Se temos uma view que agora possui lacunas, podemos chamá-la de template. Quando alguém envia um memorando para outra, raramente ela começa do zero, ou seja, ela adota um template, toda uma estrutura já pronta e seu único trabalho é preencher essas lacunas que variam de acordo com a situação. Isso se aplica no mundo Angular! O que acontece se visualizarmos nossa página agora? Nenhuma imagem será exibida e nenhum erro ocorrerá! Aliás, o termo lacuna é muito genérico, no mundo Angular usamos Angular Expression (AE). Combinado? Todo {{ }} que encontrarmos chamaremos de AE.

Quando temos um template que precisa de algum dado através de uma AE e não encontra, simplesmente aquela expressão fica em branco. Agora, a pergunta que não quer calar: quem, no modelo MVC é o responsável em disponibilizar dados para a views? Se você respondeu controller acertou!

Nosso primeiro controller
Precisamos criar um controller que disponibilize para a view o dado que ela precisa, no caso um objeto que contenha como chave o título e o endereço de uma foto, por exemplo { titulo: 'Leão', url : 'http://www.fundosanimais.com/Minis/leoes.jpg'}.

Lembra do nosso módulo principal da aplicação? Podemos criar um ou mais controllers diretamente nele, porém é uma boa prática declarar cada controller em arquivos separados, mesmo que eles façam parte do módulo alurapic. Vamos criar dentro de public/js/controllers/fotos-controller.js.

Criando nosso controller:

// public/js/controllers/fotos-controller.js

angular.module('alurapic').controller('FotosController', function() {
  // definição do controller aqui
});
Veja que chamamos novamente angular.module, só que dessa vez sem passar o segundo parâmetro, o array vazio. Quando fazemos isso, indicamos que queremos acessar o módulo e não criar um novo. Faz todo sentido, se queremos que nosso controller faça parte do módulo alurapic. Em seguida encadeamos uma chamada à função controller que recebe dois parâmetros. O primeiro é o nome do controller que estamos criando na convenção camelCase, o segundo uma função que define o controller.

Sabemos que o controller deve fornecer o objeto foto para a view e que esse objeto deve conter as chaves titulo e url. Faremos isso agora!

// public/js/controllers/fotos-controller.js

angular.module('alurapic').controller('FotosController', function() {

    var foto = {
        titulo : 'Leão',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

});
Excelente, agora precisamos importar o novo arquivo js que acabamos de criar em nossa view principal index.html:

<!-- public/index.html -->
<!DOCTYPE html>
<html lang="pt-br" ng-app="alurapic">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Alurapic</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <script src="js/lib/angular.min.js"></script>
        <script src="js/main.js"></script>
        <script src="js/controllers/fotos-controller.js"></script>
    </head>
    <body>
        <div class="container">
            <h1 class="text-center">Alurapic</h1>

             <img class="img-responsive center-block" src="{{foto.url}}" alt="{{foto.titulo}}">

        </div><!-- fim container -->
    </body>
</html>
Será que isso é suficiente? Não, precisamos indicar dentro da nossa view index.html qual fragmento será gerenciado pelo nosso controller. Angular permite associarmos diferentes controllers para diferentes partes de nossa view, uma maneira de separar responsabilidades. Porém, neste exemplo, queremos que o controller gerencie a tag body e todos os seus elementos filhos e fazemos isso através da diretiva ng-controller, que deve ter como valor o nome exato do controller que criamos:

<!DOCTYPE html>
<html lang="pt-br" ng-app="alurapic">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <title>Alurapic</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <script src="js/lib/angular.min.js"></script>
        <script src="js/main.js"></script>
        <script src="js/controllers/fotos-controller.js"></script>
    </head>
    <body ng-controller="FotosController">
        <div class="container">
            <h1 class="text-center">Alurapic</h1>

             <img class="img-responsive center-block" src="{{foto.url}}" alt="{{foto.titulo}}">

        </div><!-- fim container -->
    </body>
</html>
Será que funciona? Visualizando no navegador, a imagem não é exibida e também não temos uma mensagem de erro. Por quê? O objeto foto não foi criado dentro do nosso controller? Sim, mas como ele foi declarado com var dentro de uma função, ele possui escopo privado. Ah, então para resolvermos vamos remover var, fazendo com que ele caia no escopo global? Nem pensar! Porém, o Angular disponibiliza uma ponte de ligação entre o controller e a view chamada $scope e tudo que for "pendurado" neste objeto será enxergado pela view. Mas como teremos acesso a esse objeto tão especial dentro do mundo Angular? Pedindo! Como? Recebendo-o na função que declara o controller:

angular.module('alurapic').controller('FotosController', function($scope) {

});
Angular encontra na declaração do controller $scope e sabe que tem que criar um para nós. Se tivéssemos escrito o nome do parâmetro de outra maneira, o framework não o criaria. Ou seja, Angular sabe o que deve buscar de sua infraestrutura de acordo com o nome do parâmetro que recebemos em nosso controller. Agora que já temos acesso à $scope, a ponte de ligação do controller com a view, podemos pendurar os dados da foto como sua propriedade.

angular.module('alurapic').controller('FotosController', function($scope) {

    $scope.foto = {
        titulo : 'Leão',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

});
Lembre-se que tudo pendurado em $scope será acessível em nossa view, em nosso caso , através da angular expression. Duvida? Só testar e verificar o resultado.

imagem de animal

Ah, isso é data binding?
Angular possui um termo apropriado para associação de um dado disponibilizado por um controller para a view: data binding (associação/ligação de dados). Qualquer alteração no dado do controller dispara uma atualização da view sem que o desenvolvedor tenha que se preocupar ou intervir no processo.

Excelente! Conseguimos um resultado semelhante ao que tínhamos antes, com a diferença de que agora a AE (Angular Expression) de nossa view foi processada com os dados fornecidos por FotosController. Pode parecer pouco, mas isso abre a porteira para que possamos avançar ainda mais no framework da Google.

O que aprendemos neste capítulo?
o papel do modelo MVC
o objeto global angular
importação do Angular e criação do módulo principal da aplicação
as diretivas ng-app e ng-controller
Angular Expression (AE)
o conceito de template
criação de um controller
o conceito de data binding


=== Habilitando o ANGULAR em nossa página
Vejamos as seguintes afirmações sobre Angular:
1) Angular é um script como outro qualquer, por isso precisa ser importado em nossa página através da tag script.

2) A diretiva ng-app carrega e importa o módulo que desejamos carregar.

3) A diretiva ng-app possui como valor o nome do módulo que desejamos carregar assim que nossa página for carregada.

4) Um módulo pode ter de 0 a N dependências.

Com base nessas afirmações, podemos dizer que:

Angular é um script como outro qualquer, por isso precisa ser importado em nossa página através da tag script, mas isso não é suficiente. Precisamos criar um módulo (outro script) e importá-lo em nossa página. Este módulo é apelidado de principal, porque é o primeiro que será carregado pelo Angular e que pode ou não carregar outros a partir dele, isto é, suas dependências. Importar o script do módulo também não é suficiente, por quê? Se tivéssemos carregado vários scripts de módulos em nossa página, como o Angular saberia qual inicializar primeiro? É por isso que precisamos usar a diretiva ng-app, que possui como valor o nome do módulo que desejamos carregar assim que nossa página for carregada.

=== Criação de módulos
Temos:
1) angular.module('alurapic', []);

2) angular.module('alurapic');

3) angular.module('alurapic', ['calopsitaStyle']);

4) module('alurapic', []);

No que diz respeito à criação de módulos, podemos afirmar que:


Criamos um módulo através do objeto global angular. Ele recebe dois parâmetros: o primeiro é o nome do módulo e o segundo um array com suas dependências. Por mais que o o módulo não tenha dependência, precisamos passar o array vazio como parâmetro. Sua omissão indica para o Angular que desejamos acessar um módulo já criado.


=== Angular Expression
Temos as seguintes declarações sobre Angular Expression (AE):
1) Angular Expression serve para abrir lacunas em nossas views, que por sua vez passam a funcionar como templates.

2) Angular Expression possui a sintaxe {nomeDaPropriedade}.

3) Controllers podem fornecer dados para uma Angular Expression.

4) Uma Angular Expression não avaliada tem como valor null.

Usamos Angular Expressions (AE's) para abrir lacunas em views. Essa ideia de termos lacunas que precisam ser preenchidas remete à ideia de templates, que nada mais são do que um modelo com um monte de coisa pronta, mas que possui lacunas que precisam ser preenchidas para que fique completo.
A sintaxe de uma AE é {{nomeDaPropriedade}}. Mas quem fornece os dados para que essas "lacunas" sejam tapadas? Essa é a responsabilidade de um Controller no mundo MVC e também no mundo Angular. Caso não exista nenhum controller ou caso o controller não forneça os dados de que a AE precisa, Angular não emite um erro, simplesmente considera seu valor uma String em branco, como "".


=== Controller do Angular
Vejamos os seguintes códigos:
1) angular.module('contasAhReceber').controller(function($scope) { });

2) angular.module('contabilidade', []).controller('LancamentosController', function() { });

3) angular.module('estoque').controller('Provisao', function($scope) { });

4) angular.controller('CaixaCtrl', function($scope) { });

Sobre a criação de Controller em Angular, podemos afirmar sobre as alternativas apresentadas que:

Um controller pode ser criado com um módulo ou mais tarde adicionado em um módulo já existente. Por exemplo:
// criando com um módulo
angular.module('contabilidade', []).controller('LancamentosController', function() { });
A função controller recebe como primeiro parâmetro o nome do controller e como segundo a função que o define, que pode ou não receber via injeção de dependência o $scope. Lembre-se que é através dele que disponibilizamos dados para a view, adicionando propriedades dinamicamente.

Vejamos agora um exemplo criando um controller para um módulo já existente, que está perfeitamente correto:

angular.module('estoque').controller('Provisao', function($scope) { });
No exemplo anterior, como não passamos o array [] como segundo parâmetro da função module, significa que estamos criando um controller para o módulo estoque que já foi criado. Controllers podem ser criados ao mesmo tempo em que criamos módulos ou posteriormente para um módulo já criado, sendo assim, podemos criar perfeitamente um controller para um módulo já existente e foi isso que fizemos no capítulo:

angular.module('alurapic').controller('FotosController', function($scope) {

    $scope.foto = {
        titulo : 'Leão',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

});
Criamos o controller FotosController para o módulo alurapic já existente.


=== Controller e seu escopo
Temos a seguinte marcação em nossa view:
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="pt-br" ng-app="alurapic">
    <head>
       <!-- código omitido -->
    </head>
    <body ng-controller="FotosController">
        <div class="container">
            <h1 class="text-center">Alurapic</h1>

             <img class="img-responsive center-block" src="{{foto.url}}" alt="{{foto.titulo}}">

        </div><!-- fim container -->
    </body>
</html>
O controller FotosController foi associado ao elemento body e qualquer um de seus elementos filhos terão acesso a tudo o que foi adicionado no escopo do controller. Qual das opções abaixo disponibiliza corretamente foto no escopo do controller:
Quando criamos um controller, não basta declararmos variáveis com o mesmo nome das Angular Expressions dentro deles. A comunicação é feita através de $scope, um objeto que é a ligação entre o controller e a view. Qualquer propriedade adicionada neste objeto estará disponível na view e acessível através de AEs. Porém, caso o elemento que use a AE não contenha a diretiva ng-controller ou não seja filho de quem a contenha, a AE não será resolvida.

=== "Test your might!"
Temos as seguintes afirmativas:
1 - Data binding significa associação de dado, isto é, podemos associar um dado à view através de Angular Expression e qualquer mudança nesse dado refletirá na sua apresentação na view.

2 - Uma Angular Expression (AE) é somente leitura, isto é, alterações dos dados na view não se propaga para o model.

3 - Um model no Angular pode ser um objeto ou qualquer tipo literal do JavaScript, como String ou Boolean.

4 - Angular não é uma solução que se coaduna com a prática de Progressive Enhancement no que diz respeito a criação de páginas web.

Podemos afirmar que:

Uma Angular Expression (AE) é somente leitura, isto é, nossa view lê a informação no escopo do controller, mas não é capaz de atualizá-la. Este tipo de associação é chamado de one-way data binding, porque a informação flui do controller para a view e não contrário. Aliás, esse dado associado à view poder ser qualquer tipo literal do JavaScript, inclusive um objeto.
Angular não se coaduna com a prática do Progressive Enhancement, no qual criamos uma página usando um simples HTML e CSS sem JavaScript para depois então adicionar melhorias. Se por acaso alguma dessas melhorias deixarem de funcionar, não comprometerá o acesso ao conteúdo por parte do usuário. No caso do Angular, se o JavaScript estiver desligado ou se o dispositivo no qual nossa aplicação é carregada não o suporta, nada da aplicação funcionará.

=== Colocando em prática
Chegou a hora de praticar!
Neste exercício, implemente os passos que foram vistos durante esta aula para conseguir o mesmo resultado apresentado. Não consegue lembrar de tudo? Não se preocupe, apresentarei passos gerais para guiá-lo nesta tarefa. Se isso ainda não for suficiente, não se preocupe, você pode consultar o vídeo e o texto explicativo do capítulo, mas sugiro que tente primeiro sem antes consultá-los. Combinado?

No final, cole o código dos arquivos que você modificou:

1) Angular nada mais é do que um framework escrito em JavaScript e como qualquer script deve ser importado na página. Importe-o dentro da tag <head>. Lembre-se que você pode verificar através do developer tools (console do navegador) se o script foi importado, olhando a aba network (rede). Isso é importante, porque muitas vezes perdemos tempo achando que nosso código não funciona, quando na verdade é o script que não foi carregado.

2) Só carregar o Angular não é suficiente, precisamos criar o primeiro módulo da aplicação. Crie o arquivo main.js e declare o módulo. Lembre-se que esse processo é feito por intermédio do objeto global angular.

3) Um módulo criado ainda não é suficiente. Você precisa fazer com que o Angular carregue o módulo assim que sua página for carregada. Lembra da diretiva ng-app? Lembra qual tem que ser o valor atribuído à ela? Mais alguma coisa? O módulo main.js tem que ser importado também na página, certo?

4) Agora que tudo está no lugar, dentro da tag <body> você vai adicionar a marcação que existe uma foto. Não lembra da marcação? Não se preocupe, vai uma cola:

<!-- dentro do body -->
<div class="container">
   <h1 class="text-center">Alurapic</h1>
   <img class="img-responsive center-block" src="http://www.fundosanimais.com/Minis/leoes.jpg" alt="Leão">
</div><!-- fim container -->
5) Abra uma lacuna para os atributos src e alt da imagem, criando um controller que forneça os dados de que ela precisa. Lembre-se de criar um controller em um arquivo em separado usando a convenção de pastas que vimos. Ele se chamará FotosController e disponibilizará para a view um objeto foto com duas propriedades: url e titulo. Ainda lembra como um controller disponibiliza dados para a view?

6) Ainda lembra como criamos o controller para o módulo alurapic? Ainda lembra que precisamos importar o script do controller em nossa view index.html. Por fim, ainda lembra para que serve a diretiva ng-controller?

Bom estudo!

Importando o script do Angular, o módulo principal da aplicação e adicionando a diretiva ng-app:
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="pt-br" ng-app="alura">
    <head>
       <!-- código anterior omitido -->
        <script src="js/lib/angular.min.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body>
        <!-- código omitido -->        
    </body>
</html>
Abrindo uma lacuna no template index.html, através de AE (Angular Expression):

<!-- public/index.html -->
<html lang="pt-br" ng-app="alurapic">
    <head>
       <!-- código anterior omitido -->
        <script src="js/lib/angular.min.js"></script>
        <script src="js/main.js"></script>
    </head>
    <body>
        <div class="container">
            <h1 class="text-center">Alurapic</h1>
            <img class="img-responsive center-block" src="{{foto.url}}" alt="{{foto.titulo}}">
        </div><!-- fim container -->
    </body>
</html>
Criando o controller que fornecerá os dados para a view:

// public/js/controllers/fotos-controller.js
angular.module('alurapic').controller('FotosController', function($scope) {

    $scope.foto = {
        titulo : 'Leão',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

});
Importando o controller e adicionando a diretiva ng-controller:

<!-- public/index.html -->
<html lang="pt-br" ng-app="alurapic">
    <head>
       <!-- código anterior omitido -->
        <script src="js/lib/angular.min.js"></script>
        <script src="js/main.js"></script>
       <script src="js/controllers/fotos-controller.js"></script>
    </head>
    <body ng-controller="FotosController">
        <div class="container">
            <h1 class="text-center">Alurapic</h1>
            <img class="img-responsive center-block" src="{{foto.url}}" alt="{{foto.titulo}}">
        </div><!-- fim container -->
    </body>
</html>
