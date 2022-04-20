
import { dataMessages } from './data.js'

export default function handleFakeChat() {
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
        modifyMessageBox(isIconLeft)
    }
    function modifyMessageBox(checkStatus) {
        if (checkStatus) {
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

        $('.message__box-chat-container .contact-mark-option').show()
        menuChatOptionRest.hide()
        menuChatOption.show()
        $(this).addClass('color--active')
        const chatBoxContainer = $(`.message__box-search-content #${idMenuChat} `)


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
        const idChatBoxContent = $(this).parent().attr('id')
        const messageItem = $(`.message__box-chat-container .chat-box-content--active`)
        const isNewMessage = $(`#${idChatBoxContent} .contact-content .contact-message--status`).hasClass('contact-message--active')
        //remove message status 
        $(`.message__box-chat-container .chat-box-content--active `).removeClass('click--active')
        //
        $(this).parent().addClass('click--active')

        if (isNewMessage) handleMarkElement(idChatBoxContent)

        dataMessages.filter(item => {
            if (`${item.shopName}-${item.id}` === `${idChatBoxContent}`) {
                renderDisplayMessages(item)
            }
        })
        //check content box show or hide() and render content box

        modifyMessageBox()
        hideChatContentDefault()
        showLastestContent()
    }

    function renderDisplayMessages(item) {
        const setId = $('.chat-content--show .chat-content-container--active').attr('id', `${item.shopName}-${item.id}`)
        const setImg = $('.chat-content--show .chat-content-container--active img').attr('src', `${item.image}`)
        const setName = $('.chat-content--show .chat-content-container--active .offfical-content-name').html(`${item.shopName}`)
        const contentContainer = $('.chat-content--show .chat-content-container--active .offfical-content-message-overflow')
        contentContainer.attr('id', `${item.shopName}-${item.id}`)

        const newData = item.message.concat(item.input, item.newMessage)
        const arrangeData = sortByTime(newData)
        const str = arrangeData.map(item => {
            if (item.type == 'import') {

                return `
                <div class="offfical-content-message-container" >
                    <div class="offfical-content-message contact-chat-content" title =${item.time}  >
                        ${item.content}
                    </div>  
                    <span id ="" class="" style="margin-top: 8px; padding: 0 8px; color: #999; padding-left: 8px;">
                        <i class="fas fa-ellipsis-h"></i></span>
                </div> 
            `}
            else {
                return `
                <div class="offfical-content-message-container"  style="justify-content: flex-end; ">
                    <div class="offfical-content-message contact-chat-content" 
                        title =${item.time} 
                        style = 'background-color: #61afdf; color: white;' 
                    >
                        ${item.content}
                    </div>  
                    <span id ="" class="" style="margin-top: 8px; padding: 0 8px; color: #999; padding-left: 8px;">
                        <i class="fas fa-ellipsis-h"></i></span>
                </div>
                `
            }
        })
        contentContainer.html('')
        contentContainer.append(str)
        return newData
    }

    function sortByTime(data) {
        const arr = data.sort(function (a, b) {
            var keyA = new Date(a.time),
                keyB = new Date(b.time);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        })
        return arr
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
        outSearach.click(function () {
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
    $('.message__box-search-input').on('click', (e) => {
        outSearach.hide()
        e.target.value = ''

    })
    $('.out-search').on('click', () => {
        outSearach.hide()
        console.log('ok')
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
                const strRenderUsers = checkInput.map(item => `
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
    //filter message by attr
    const filterContainer = $('.message__box-search-filter-container')
    $('#f-container').click(() => {
        filterContainer.show()


    })

    $('#f-container').click((e) => {
        e.stopPropagation()
    })
    $('.contact-chat-menu').click((e) => {
        e.stopPropagation()
    })
    $(window).click(() => {

        filterContainer.hide()
        $('.out-search').hide()
        $('.message__box-chat-container .contact-mark-option').hide()
    })


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
    renderNewMessageNotify()
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
    // send message 
    handleClickMessage()
    function handleClickMessage() {
        let inputValue = '';
        const enterMessageFrame = $('.enter-message')
        const year = new Date().getFullYear()
        const month = new Date().getMonth() + 1
        const date = new Date().getDate()
        const timeAt = year + ':' + month + ':' + date

        // const timeAt = new Date()
        console.log(timeAt)
        enterMessageFrame.change(function (e) {
            inputValue = e.target.value
            const container = $('.offfical-content-message-boundary')
            const xxx = $('.offfical-content-message-boundary .offfical-content-message-overflow')
            const idChatBoxContent = xxx.attr('id')
            dataMessages.filter(item => {
                if (`${item.shopName}-${item.id}` === `${idChatBoxContent}`) {
                    if (item.input) {
                        item.input.push({ content: inputValue, type: 'export', time: timeAt })
                    }
                    else {
                        item.input = [inputValue]
                    }
                }
            })
            console.log(dataMessages)

            const handleSubmit = (inputValue) => {

                if (inputValue) {

                    // render message
                    dataMessages.filter(item => {
                        if (`${item.shopName}-${item.id}` === `${idChatBoxContent}`) {
                            renderDisplayMessages(item)
                        }
                    })
                }
                e.target.value = ''
                enterMessageFrame.focus()
                showLastestContent()

                return dataMessages
            }

            // submit by enter key
            $('.enter-message').on('keyup', (e) => {
                if (e.keyCode === 13) {
                    handleSubmit(inputValue)
                }
            })

            // click btn-send submit
            $('.btn-send').one('click', () => { handleSubmit(inputValue) })
        })

    }

    function showLastestContent() {

        const contentHeight = $('.offfical-content-message-overflow').height()
        $('.offfical-content-message-boundary').scrollTop(contentHeight)
    }

    // //media querry 
    // var jmediaquery = window.matchMedia("(max-width: 700px)")
    // if (jmediaquery.matches) { 

    // }
    // else {
    //     // window width is less than 480px
    // }
}
