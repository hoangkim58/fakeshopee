
export default function handleBtn() {
    const chatBtn = $('.app__skinny-chat')
    const chatBoxContainer = $('.message__box-container--status')
    const chatBox = $('.message__box-area ')
    const btnMinimizeTag = $('.btn-minimize')
    const btnMinimize = $('.btn-minimize i')
    const chatContent = $('.chat-content--show')
    let message = 1;
    // chatBoxContainer.hide()
    chatBtn.click(handleChatBox)
    function handleChatBox() {

        $('.app__skinny-chat').removeClass("app__skinny-chat--active")
        $('.waiting-message').hide()
        chatBoxContainer.show()
    }

    const btnClose = $('.btn-close')
    btnClose.click(messageBoxClose)
    function messageBoxClose() {
        chatBoxContainer.addClass('d-none')
        chatBoxContainer.hide()

    }

    // handle toggle minimize/maximize chatbox-content
    btnMinimizeTag.click(messageBoxMinimize)
    function messageBoxMinimize() {
        const isIconLeft = btnMinimize.hasClass('fa-caret-left')
        if (isIconLeft) {
            chatContent.hide()
            btnMinimize.removeClass('fa-caret-left').addClass('fa-caret-right')
        }
        else {
            chatContent.show()
            btnMinimize.removeClass('fa-caret-right').addClass('fa-caret-left')
        }

    }

    const menuChat = $('.contact-chat-menu')
    menuChat.click(handleClickMenuChat)
    function handleClickMenuChat() {
        const idMenuChat = $(this).attr('id')
        const menuChatOption = $(`.message__box-chat-container #${idMenuChat} .contact-chat-menu--show`)
        menuChatOption.show()

        const chatBoxContainer = $(`.message__box-search-content #${idMenuChat} `)

        menuChatOption.mouseleave(function () {
            menuChatOption.hide()
        })
        $(`#${idMenuChat} .contact-chat-menu-pin`).unbind().click(function () {
            const contentPin = $(`#${idMenuChat} .contact-chat-menu-pin .contact-chat-content`)
            const contactChatIcon = $(`#${idMenuChat} .contact-chat-menu-pin i`)
            const togglePin = $(`.message__box-search-content #${idMenuChat} .pin-icon--active`)
            if (contentPin.hasClass('pin--active')) {
                togglePin.hide()
                contentPin.removeClass('pin--active')
                menuChatOption.hide()
            }
            else {
                togglePin.show()
                contentPin.html('Bỏ ghim cuộc trò chuyện')
                contentPin.addClass('pin--active')
                menuChatOption.hide()
            }
        })
        $(`#${idMenuChat} .contact-chat-menu-mark`).unbind().click(function () {
            const contactChatContent = $(`#${idMenuChat} .contact-chat-menu-mark .contact-chat-content`)
            const contactChatIcon = $(`#${idMenuChat} .contact-chat-menu-mark i`)
            const contactMessageStatus = $(`.message__box-search-content #${idMenuChat} .contact-message--status`)
            if (contactChatContent.hasClass('mark--active')) {
                contactMessageStatus.hide()
                contactMessageStatus.html(message)
                contactChatIcon.addClass('fas').removeClass('far')
                contactChatContent.html('Đánh dấu chưa đọc')
                contactChatContent.removeClass('mark--active')
                menuChatOption.hide()
            }
            else {
                contactMessageStatus.show()
                contactMessageStatus.html(message)
                contactChatContent.html('Đánh dấu đã đọc')
                contactChatIcon.removeClass('fas').addClass('far')
                contactChatContent.addClass('mark--active')
                menuChatOption.hide()
            }

        })

        $(`#${idMenuChat} .contact-chat-menu-trash`).click(function () {
            if (chatBoxContainer) {
                chatBoxContainer.remove()
                menuChatOption.hide()

            }
        })

    }

    function handleMarkReadablbe() {

    }
    function deleteOnesMessage(id) {
        const chatBoxContainer = $(`.message__box-search-content #${id} `)
        if (chatBoxContainer) {
            chatBoxContainer.remove()
        }
    }

    displayNewMessage(message)
    function displayNewMessage(message) {
        if (message >= 1) {
            $('.waiting-message').show()
            $('.waiting-message').html(message)
            $('.app__skinny-chat').addClass("app__skinny-chat--active")
        }
    }
}
