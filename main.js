const { app, BrowserWindow, Menu } = require('electron'); 

// CREATING MAIN WINDOW
var mainWindow;
async function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // autoHideMenuBar: true,
    });

    // USING await BECAUSE IT CAN TAKE SOME TIME TO RENDER THE FILE
    await mainWindow.loadFile('src/pages/editor/index.html');
}

// ARQUIVO
var file = {};

// CRIANDO UM NOVO ARQUIVO
function createNewFile() {
    file = {
        name: 'novo-arquivo.txt',
        content: '',
        saved: false,
        path: app.getPath('documents')+'/novo-arquivo.txt'  // QUANDO CRIAR OUTRO ARQUIVO, A JANELA VAI ABRIR NA PASTA DE DOCUMENTOS E TERÁ POR PADRÃO O NOME novo-arquivo.txt
    };
    // console.log(file); // para visualizar o caminho dos documentos
}

// TEMPLATE MENU
const templateMenu = [
    {
        label: 'Arquivo',
        submenu: [
            {
                label: 'Novo',
                click() {
                    createNewFile();
                }
            },
            {
                label: 'Abrir'
            },
            {
                label: 'Salvar'
            },
            {
                label: 'Salvar Como'
            },
            {
                label: 'Fechar',
                role: process.platform === 'darwin' ? 'close' : 'quit' // se for macOS, será close, caso não, será quit
            }
        ]
    }
];

// MENU -> IT BUILDS A MENU BASED ON A TEMPLATE
const menu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(menu);

// WHEN READY, THIS IS GOING TO CALL THE createWindow FUNCTION
app.whenReady().then(createWindow);

// IF THE USER IS USING macOS, THIS WILL FORCE THE WINDOW TO OPEN
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length == 0) {
        createWindow();
    }
})