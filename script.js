// get saved messages
var messages = JSON.parse(localStorage.getItem('messages') || '[]');

// show messages 
if (messages.length == 0) {
    document.getElementById('messages-list').innerHTML = '<p style="text-align: center; color: #999;">no messages yet</p>';
} else {
    for (var i = 0; i < messages.length; i++) {
        var div = document.createElement('div');
        div.className = 'message';
        div.innerHTML = messages[i].name + ' - ' + messages[i].message;
        document.getElementById('messages-list').appendChild(div);
    }
}

// handle forms
document.getElementById('guestbook-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    
    if (name == '' || message == '') {
        return;
    }
    
    // save message
    var allMessages = JSON.parse(localStorage.getItem('messages') || '[]');
    allMessages.unshift({name: name, message: message});
    localStorage.setItem('messages', JSON.stringify(allMessages));
    
    // show message
    var div = document.createElement('div');
    div.className = 'message';
    div.innerHTML = name + ' - ' + message;
    document.getElementById('messages-list').insertBefore(div, document.getElementById('messages-list').firstChild);
    
    // clear form
    document.getElementById('guestbook-form').reset();
    
    // remove
    var p = document.getElementById('messages-list').querySelector('p');
    if (p) p.remove();
});
