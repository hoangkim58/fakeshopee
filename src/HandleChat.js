
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
            const togglePin = $(`.message__box-chat-container #${idMenuChat} .pin-icon`)
            console.log(idMenuChat)
            if (togglePin.hasClass('pin-icon--active')) {
                togglePin.hide()
                togglePin.removeClass('pin-icon--active')
                menuChatOption.hide()
                contentPin.html('Ghim cuộc trò chuyện')

            }
            else {
                togglePin.show()
                togglePin.addClass('pin-icon--active')
                contentPin.html('Bỏ ghim cuộc trò chuyện')
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

        $(`#${id} .contact-chat-menu-mark`).unbind().click(() => { handleMarkElement(id) })

    }
    function handleMarkElement(id) {
        const menuChatOption = $(`.message__box-chat-container #${id} .contact-chat-menu--show`)
        const contactChatContent = $(`#${id} .contact-chat-menu-mark .contact-chat-content`)
        const contactChatStatus = $(`.message__box-chat-container #${id} .contact-message--status`)
        const contactChatIcon = $(`#${id} .contact-chat-menu-mark i`)
        const contactMessageStatus = $(`.message__box-search-content #${id} .contact-message--status`)

        if (contactChatStatus.hasClass('contact-message--active')) {
            contactMessageStatus.hide()
            contactMessageStatus.removeClass('contact-message--active')
            contactChatIcon.addClass('fas').removeClass('far')
            contactMessageStatus.html('')
            contactChatContent.html('Đánh dấu chưa đọc')
            // contactChatContent.removeClass('mark--active')
            menuChatOption.hide()
        }
        else {
            contactMessageStatus.html('1')
            contactMessageStatus.addClass('contact-message--active')
            contactMessageStatus.show()
            contactChatContent.html('Đánh dấu đã đọc')
            contactChatIcon.removeClass('fas').addClass('far')
            // contactChatContent.addClass('mark--active')
            menuChatOption.hide()
        }
        renderNewMessageNotify()
    }
    //display someone's message 
    const isShowChatBoxContent = $('.message__box-chat-container .chat-box-content--active .message__box-search-item')
    const menuChatOption = $(`.message__box-chat-container .contact-chat-menu--show`)
    isShowChatBoxContent.click(handleDisplayMessage)
    function handleDisplayMessage() {
        menuChatOption.hide()
        const idChatBoxContent = $(this).parent().attr('id')
        const isNewMessage = $(`#${idChatBoxContent} .contact-content .contact-message--status`).hasClass('contact-message--active')
        if (isNewMessage) handleMarkElement(idChatBoxContent)

        dataMessages.filter(item => {
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
        const newData = item.message.concat(item.newMessage)

        const str = newData.map(item =>
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


    function displayNewMessage(message) {

        if (message >= 1) {
            $('.waiting-message').show()
            $('.waiting-message').html(message)
            $('.app__skinny-chat').addClass("app__skinny-chat--active")
        }
        else {
            $('.waiting-message').hide()
            $('.waiting-message').html('')
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
    
    function redirectUserChat() {
        var outSearach = $('.out-search-item')
        outSearach.click(function(){
            const idUser = $(this).attr('id') 
            dataMessages.filter(item => {
                if (`${item.shopName}-${item.id}` == `${idUser}`) {
                    hideChatContentDefault()
                    renderDisplayMessages(item)
                }
            }) 
        }) 
    }

    //handle search name user -- chat box
    $('.message__box-search-input').click((e) => {
        outSearach.hide()
        e.target.value = ''

    })
    $('.message__box-search-input').keyup(function (e) {
        const input = e.target.value.toLowerCase()
        const length = e.target.value.length

        if (length) {
            const checkInput = dataMessages.filter(item => {
                let a = item.shopName
                let x = a.slice(0, length).toLowerCase()
                if (length > 0 && input === x) {
                    const idPersonal = item.shopName + '-' + item.id
                    // console.log(idPersonal)
                    return `${item.shopName}-${item.id}`
                }
            })
            // console.log(checkInput)
            if (checkInput.length > 0) {
                const findUsers = $('.message__box-search-header .out-search')
                findUsers.html('')
                outSearach.show()
                const strRenderUsers =  checkInput.map(item => `
                    <span id='${item.shopName}-${item.id}' 
                        class="out-search-item align-items--center" 
                    >
                        <img src="${item.image}" alt="" class="contact-avatar"/>
                        <p class="contact-name">${item.shopName}</p>
                    </span>
                `)
                const renderUsers = strRenderUsers.reduce((total, current) => total + current)
                findUsers.append(renderUsers)
                redirectUserChat()
            }
        }
    })
    //filter message according to attr
    const filterContainer = $('.message__box-search-filter-container')
    $('#f-container').click(() => filterContainer.toggle())

    $('.message__box-search-filter-container .message__box-search-filter-item').click(handleFilterListMessage)
    function handleFilterListMessage() {
        const idFilter = $(this).attr('id')

        $('.message__box-search-item').hide()
        if (idFilter === 'f-all') {
            $('.contact-content  .contact-message--status').parentsUntil('.message__box-chat-container').show()

        }
        if (idFilter === 'f-read') {
            $('.contact-content  .contact-message--active').parentsUntil('.message__box-chat-container').show()
        }
        if (idFilter === 'f-pin') {
            $('.pin-icon--active').parentsUntil('.message__box-chat-container').show()
        }
        filterContainer.hide()
    }

    //chat header -- new message
    function renderNewMessageNotify() {
        const quatityNewMessage = $('.contact-message--active').length
        const notifyNewMessage = $('.notify-new-message')
        if (quatityNewMessage > 0) {
            notifyNewMessage.html(`(${quatityNewMessage})`)
            displayNewMessage(quatityNewMessage)

        }
        else {
            notifyNewMessage.html('')
            chatBtn.removeClass('app__skinny-chat--active')
            displayNewMessage(0)

        }
    }
    renderNewMessageNotify()
}
