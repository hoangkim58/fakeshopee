import {dataMessages} from './data.js'

export default function handleBtn() {
    const chatBtn = $('.app__skinny-chat')
    let message = 1;
    
    chatBtn.click(handleChatBox)
    function handleChatBox() {
        
        $('.app__skinny-chat').removeClass("app__skinny-chat--active")
        $('.waiting-message').hide()
        $('.message__box-area ').show()
    }

    displayMessage(message)
    function displayMessage(message) {
        if (message >= 1) {
            $('.waiting-message').show()
            $('.waiting-message').html(message)
            $('.app__skinny-chat').addClass("app__skinny-chat--active")
        }
    }
}
