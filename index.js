const e = require('express');
var fs = require('fs');


const usuario = [
   
{colaborador:"xxxxxxx",gestor:"xxxxxxx",emaildoColaborador:"xxxxxxx"},
]

let html =  `
INSERT INTO [dbo].[Notifications]
([To]
,[From]
,[Origin]
,[Message]
,[IsHtml]
,[Created]
,[Status]
,[Subject])
VALUES
('[EMAIL]',
'NULL',
'FeedbackNotificationToLeadership',
'USER, MANAGER, EMAIL',
1,
GETDATE(),
1,
'Etapa de Feedback | Ciclo encerrado' )
` ;

const generateQuerys = () => {

    for (let i = 0; i < usuario.length; i++) {
        let query = html
        query = query.replace('[USER]', usuario[i].colaborador);
        query = query.replace('[MANAGER]', usuario[i].gestor)
        query = query.replace('[EMAIL]', usuario[i].emaildoColaborador);

        fs.appendFile(`STEP 2 = EMAIL PARA COLABORADOR.txt`, query, function( err) {
            if (err) {
                return console.log(err);
            }
        })
    }

    
}

generateQuerys();

const teste = () => {
    console.log(html.replace('[EMAIL]', 'teste'));
}

// teste()

