var socket = io.connect('http://192.168.18.5:3800', {
    forceNew: true
})

socket.on('messages', (data) => {
    console.log(data)
    render(data)
})

function render(data) {
    var html = data.map((message, index) => {
        return (`
            <div class="message">
                <strong>${message.author}</strong>
                <small>${message.date}</small>
                <p>${message.text}</p>
            </div>
        `)
    }).join(' ')
    var div_messages = document.getElementById('messages');
    div_messages.innerHTML = html;
    div_messages.scrollTop = div_messages.scrollHeight
}

function addMessage(e) {
    message = {
        author: document.getElementById('author').value,
        text: document.getElementById('text').value,
        date: new Date().toLocaleString()
    };

    socket.emit('add-message', message)
    
    document.getElementById('text').value = ''
    return false
}