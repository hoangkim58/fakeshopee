
import { dataMessages } from './data.js'

export default function handleChat() {
    const chatBtn = $('.app__skinny-chat')
    const chatBoxContainer = $('.message__box-container--status')
    const chatBox = $('.message__box-area ')
    const btnMinimizeTag = $('.btn-minimize')
    const btnMinimize = $('.btn-minimize i')
    const chatContent = $('.chat-content--show')
    let message = 1;

    // chatBoxContainer.hide()
    $('.chat-box-text').click(function () {
        chatBoxContainer.hide()
    })

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
        const menuChatOptionRest = $(`.message__box-chat-container .contact-chat-menu--show`)
        menuChatOptionRest.hide()
        menuChatOption.show()

        const chatBoxContainer = $(`.message__box-search-content #${idMenuChat} `)

        menuChatOption.mouseleave(function () {
            menuChatOption.hide()
        })

        // pin element
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
        // mark element 
        markElement(idMenuChat)
        // delete element
        $(`#${idMenuChat} .contact-chat-menu-trash`).click(function () {
            if (chatBoxContainer) {
                chatBoxContainer.remove()
                menuChatOption.hide()
                showChatContentDefault()

            }
        })

    }

    // mark element  
    function markElement(id) {

        $(`#${id} .contact-chat-menu-mark`).unbind().click(function () {
            const menuChatOption = $(`.message__box-chat-container #${id} .contact-chat-menu--show`)
            const contactChatContent = $(`#${id} .contact-chat-menu-mark .contact-chat-content`)
            const contactChatIcon = $(`#${id} .contact-chat-menu-mark i`)
            const contactMessageStatus = $(`.message__box-search-content #${id} .contact-message--status`)
            if (contactChatContent.hasClass('mark--active')) {
                contactMessageStatus.hide()
                contactMessageStatus.html(message)
                contactMessageStatus.removeClass('contact-message--active')
                contactChatIcon.addClass('fas').removeClass('far')
                contactChatContent.html('Đánh dấu chưa đọc')
                contactChatContent.removeClass('mark--active')
                menuChatOption.hide()
            }
            else {
                contactMessageStatus.addClass('contact-message--active')
                contactMessageStatus.show()
                contactMessageStatus.html(message)
                contactChatContent.html('Đánh dấu đã đọc')
                contactChatIcon.removeClass('fas').addClass('far')
                contactChatContent.addClass('mark--active')
                menuChatOption.hide()
            }

        })
    }
    //display someone's message 
    const isShowChatBoxContent = $('.message__box-chat-container .chat-box-content--active .message__box-search-item')
    isShowChatBoxContent.click(handleDisplayMessage)
    function handleDisplayMessage() {
        const idChatBoxContent = $(this).parent().attr('id')
        markElement(idChatBoxContent)
        // const idMenuChat = $(this).attr('id')
        const dataMessage = dataMessages.filter(item => {
            if (`${item.shopName}-${item.id}` === `${idChatBoxContent}`) {
                renderDisplayMessages(item)
            }
        })
        // console.log(dataMessage)
        hideChatContentDefault()
    }

    function renderDisplayMessages(item) {
        const setId = $('.chat-content--show .chat-content-container--active').attr('id', `${item.shopName}-${item.id}`)
        const setImg = $('.chat-content--show .chat-content-container--active img').attr('src', `${item.image}`)
        const setName = $('.chat-content--show .chat-content-container--active .offfical-content-name').html(`${item.shopName}`)
        const contentContainer = $('.chat-content--show .chat-content-container--active .offfical-content-message-boundary')
        const str = item.content.map(item =>
            `
            <div class="offfical-content-message-container">
                <div class="offfical-content-message contact-chat-content">
                    ${item}
                </div>  
                <span id ="" class="" style="margin-top: 8px; padding: 0 8px; color: #999; padding-left: 8px;">
                    <i class="fas fa-ellipsis-h"></i></span>
            </div> 
            `
        )
        contentContainer.html('')
        contentContainer.append(str)
    }

    displayNewMessage(message)
    function displayNewMessage(message) {
        if (message >= 1) {
            $('.waiting-message').show()
            $('.waiting-message').html(message)
            $('.app__skinny-chat').addClass("app__skinny-chat--active")
        }
    }



    // hide chat content default 
    function hideChatContentDefault() {
        $('.message__box-search .chat-content-container--default').hide()
        $('.message__box-search .chat-content-container--active').show()
    }
    // show chat content default 
    function showChatContentDefault() {
        $('.message__box-search .chat-content-container--default').show()
        $('.message__box-search .chat-content-container--active').hide()
    }

    // ***** text area 
    var outSearach = $('.out-search')
    outSearach.click(() => {
        const id = outSearach.attr('id')

        outSearach.hide()
        dataMessages.filter(item => {
            if (`${item.shopName}-${item.id}` == `${id}`) {
                hideChatContentDefault()
                renderDisplayMessages(item)
            }
        })
    })
    $('.message__box-search-input').click((e) => {
        outSearach.hide()
        e.target.value = ''

    })
    $('.message__box-search-input').keypress(function (e) {
        const input = e.target.value.toLowerCase()
        const length = e.target.value.length
        // console.log(input.length)
        if (length) {

            const checkInput = dataMessages.filter(item => {
                let a = item.shopName
                let x = a.slice(0, length).toLowerCase()
                if (length > 0 && input === x) {
                    const idPersonal = item.shopName + '-' + item.id
                    // console.log(idPersonal) 
                    outSearach.show()
                    outSearach.attr('id', `${item.shopName}-${item.id}`)
                    $('.out-search img').attr('src', `${item.image}`)
                    $('.out-search p').html(`${item.shopName}`)
                }
            })
        }
        else {
            outSearach.hide()
        }
    })
    //chat header -- new message
    renderNewMessageNotify()
    function renderNewMessageNotify() {
        const isNew = $('.contact-message--active').length
        if(isNew) {
            console.log(isNew)
        }
    }
}
