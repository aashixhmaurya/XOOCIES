const vscode = require('vscode');
const https = require('https');

function activate(context) {
    const myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 1000);
    context.subscriptions.push(myStatusBarItem);

    function updateCookies() {
        const config = vscode.workspace.getConfiguration('xoocies');
        const API_KEY = config.get('apiKey');

        if (!API_KEY) {
            myStatusBarItem.text = `🍪 Set API Key`;
            myStatusBarItem.tooltip = "Click to set your Hackatime API Key in Settings";
            myStatusBarItem.show();
            return;
        }

        const options = {
            hostname: 'hackatime.hackclub.com',
            path: '/api/hackatime/v1/users/current/statusbar/today',
            headers: {
                'Authorization': `Basic ${Buffer.from(API_KEY).toString('base64')}`
            }
        };

        const req = https.get(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode !== 200) {
                    myStatusBarItem.text = `$(error) Auth Error`;
                    return;
                }

                try {
                    const json = JSON.parse(data);
                    let grandTotal = null;

                    if (json.data && json.data.grand_total) {
                        grandTotal = json.data.grand_total;
                    } else if (json.data && Array.isArray(json.data) && json.data.length > 0) {
                        grandTotal = json.data[0].grand_total;
                    }

                    if (grandTotal) {
                        const totalSeconds = grandTotal.total_seconds;
                        const cookies = Math.floor((totalSeconds / 3600) * 10);
                        myStatusBarItem.text = `🍪 ${cookies} Cookies`;
                        myStatusBarItem.tooltip = `Hackatime Time: ${grandTotal.text}`;
                    }
                } catch (e) {
                    myStatusBarItem.text = `$(error) Data Error`;
                }
                myStatusBarItem.show();
            });
        });

        req.on("error", () => {
            myStatusBarItem.text = `$(error) Offline`;
            myStatusBarItem.show();
        });

        req.end();
    }

    const interval = setInterval(updateCookies, 60000);
    context.subscriptions.push({ dispose: () => clearInterval(interval) });

    updateCookies();

    vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration('xoocies.apiKey')) {
            updateCookies();
        }
    });
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};