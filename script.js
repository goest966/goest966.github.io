document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'goest' && password === '966') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('webhookForm').style.display = 'block';
        document.getElementById('formTitle').innerText = '디스코드 웹훅 메시지 전송';
    } else {
        document.getElementById('alertMessage').innerText = '아이디 또는 비밀번호가 잘못됩니다.';
    }
});

document.getElementById('webhookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    const fileInput = document.getElementById('file');
    const webhookUrl = 'https://discord.com/api/webhooks/1305107877207347200/pNXNeISGYgP7UmlX2yRwnkGao_Y8f9CiVE0AlHh8Qpi3evEmvsZp3vG2U1ipi4r5jMZc';

    const formData = new FormData();

    if (message) {
        formData.append('content', message);
    }

    if (fileInput.files.length > 0) {
        formData.append('file', fileInput.files[0]);
    }

    fetch(webhookUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('alertMessageWebhook').innerText = '메시지 및/또는 파일이 성공적으로 전송되었습니다!';
            document.getElementById('alertMessageWebhook').style.color = 'green';
        } else {
            document.getElementById('alertMessageWebhook').innerText = '전송에 실패했습니다.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('alertMessageWebhook').innerText = '전송 중 오류가 발생했습니다.';
    });
});
