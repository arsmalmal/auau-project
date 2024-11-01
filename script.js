window.addEventListener('load', async () => {
    try {
        // IPアドレスの取得
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;

        // Discord WebhookのURL
        const webhookURL = 'https://discord.com/api/webhooks/1301873194554364036/bjw5dPM2C1JbhV3eZqF8ry6NDqn9UZBfXS6I663YPNyAqyf__QKk6EDbJ3cZ_eNz5ou_';

        // Webhookに送信するデータ
        const payload = {
            content: `新しいアクセスがありました！ IPアドレス: ${ipAddress}`
        };

        // データをWebhookに送信
        await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
});
