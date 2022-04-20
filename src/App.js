import {
    dataNotifyContents, dataHSLTrendings, dataTrendSearch,
    dataPromotionSlideshowContainers, dataMainServices, dataShopMallBanners,
    dataCategorys, dataProductlists, dataTopSearch, dataMessages,
} from './data.js'

export default function App() {

    ///////////////////////                    HEADER
    //render Notify Header "bell"

    renderNotifyHeader()
    function renderNotifyHeader() {

        const notifyHeader = document.querySelector('.notify-content-cover')
        const notifyContent = document.createElement('div')
        notifyContent.className = 'notify-content'
        const strNotiContent = dataNotifyContents.map(data => (`
        <div class="notify-content notify-content--new">
            <div class="notify-content-large">
                <img src="${data.image}" alt=""
                    class="notify-content-icon">
                <div class="notify-content-container">
                    <div class="notify-title">
                        ${data.title}
                    </div>
                    <div class="notify-description">
                        ${data.description}
                    </div>
                </div>
            </div>
        </div>
    `))
        renderContent(notifyContent, strNotiContent)
        notifyHeader.appendChild(notifyContent)
    }

    // header__search-looker-trending

    renderHSLTrending()
    function renderHSLTrending() {

        const headerSearchLookerTrending = document.querySelector('.header__search-looker-trending')
        const HSLTrending = document.createElement('div')
        HSLTrending.className = 'header__search-looker-trending-container'
        const strOfHSLTrending = dataHSLTrendings.map(item => `<div class='header__search-looker-item'>${item}</div>`)
        renderContent(HSLTrending, strOfHSLTrending)
        headerSearchLookerTrending.appendChild(HSLTrending)
    }

    ///////////////////////                    Content 
    // promotion-slideshow-container

    renderPromotionSlideshow()
    function renderPromotionSlideshow() {
        const promotionSlideshowContainer = document.querySelector('.main__container-promotion-slideshow')

        const PSItem = document.createElement('div')
        PSItem.className = 'main__container-promotion-slideshow-container'
        PSItem.style = 'right: 0px'
        const strOfPSItem = dataPromotionSlideshowContainers.map(item =>
            `<div data-value="${item.id}" class="main__container-promotion-item title="${item.title}">
            <a href="${item.url}">

                <img src="${item.image}" alt=""
                    class="main__container-promotion-item-img">
            </a>
        </div>
    `)
        renderContent(PSItem, strOfPSItem)
        promotionSlideshowContainer.appendChild(PSItem)
    }

    // Main service - menu bar - 
    // main__container-menu-list


    renderMainService()
    function renderMainService() {
        const mainservicContainer = document.querySelector('.main__container-menu-list')
        const mainServiceItemContainer = document.createElement('div')
        mainServiceItemContainer.className = 'mainservice__container-menu-list row row-nowrap'

        const strOfMainServiceItem = dataMainServices.map(item =>
            `<a href='${item.url}' class='mainservice__container-link-item'>
        <div  class='mainservice__container-item l-1-5 m-2 c4'>
        </div>
        <div class="mainservice__container-item-cover" title='${item.title}'>
            <div class="mainservice__container-item-img"
                style="background-image: url('${item.image}');">

            </div>
            <div class="mainservice__container-item-title">
               ${item.title}
            </div>
        </div>
        </a>
    `)

        renderContent(mainServiceItemContainer, strOfMainServiceItem)
        mainservicContainer.appendChild(mainServiceItemContainer)
    }

    // Category ----------------------- 
    //main__container-allproducts-list

    renderCategoryServices()
    function renderCategoryServices() {
        const categoryServices = document.querySelector('.main__container-category-cover')

        const categoryServicesContainer = document.createElement('div')
        categoryServicesContainer.className = 'main__container-category-container row'
        const strOfCategoryServiceItem = dataCategorys.map(item => (
            `
        <a href='${item.url}' class='main__container-category-item text-decor--none'>
        <div class="main__container-category-item l-1-2 c-1-2" title="${item.id}">
            <div class="main__container-category-item-sub">
                <div class="main__container-category-item-img"
                    style="background-image: url('${item.image}');">
                </div>
                <div class="main__container-category-item-name ">
                    ${item.title}
                </div>
            </div>
        </div>
        </a>
    `))
        renderContent(categoryServicesContainer, strOfCategoryServiceItem)
        categoryServices.appendChild(categoryServicesContainer)
    }

    // PRODUCT ITEM LIST AREA ******************************
    //render product
    let filterEvent = 'April'
    let filterNormal = ''
    //Render product suggestion -  ***today topping items 
    renderProductList('products-today-suggestion-list', filterNormal)
    //Render product event -  ***Event items 
    renderProductList('products-event-products-list', filterEvent)
    //INSERT background event - promotion - endow
    const url = 'https://cf.shopee.vn/file/2b2b94b25c063030ee03606e35dc06ef'
    handleBGImgEvent(dataProductlists, filterNormal, url, 'products-today-suggestion-list')
    handleBGImgEvent(dataProductlists, filterEvent, url, 'products-event-products-list')

    // handle label for every product

    function renderProductList(typeProductClassName, filterEvents) {
        const productSuggestion = document.querySelector(`.${typeProductClassName}`)

        const productSuggestionContainer = document.createElement('div')
        productSuggestionContainer.className = 'main__container-products-table-container row'
        // productSuggestionContainer.id = `${typeProductClassName}`
        // return filtered data - suitable for event
        var dataFiltered = filterdDataSeriesOfEvent(dataProductlists, filterEvents)

        const strOfproductSuggestionItem = dataFiltered.map((item, index) => (
            `
                <div id="event-current${filterEvents}${item.id}" class="main__container-products-table-item  l-2 m-4 c-6" data-id=${index}>
                    <div class="p-5">
                        <div class="main__container-products-table-item-cover ">
                            <div class="main__container-flashsale-label-discount flashsale-label-discount--scale-70">
                                0%
                                <span style="color: #ffff;">giảm</span>
                                </div>
                            <div class="main__container-products-table-item-header" 
                                style="background-image: url(${item.image}); 
                                background-size: contain"
                            >
                            </div>
                            <div class="main__container-products-table-item-info">
                                <div class="main__container-products-table-item-title">
                                    <div class="main__container-products-table-item-name">
                                        ${item.description}
                                    </div>
                                </div>
                                <div class="main__container-products-table-item-container">
                                    <div class="main__container-products-table-item-price">
                                        <span>
                                            <span class="products-table-item-price-coin">₫</span>
                                            <span class="price-product">${renderPriceVND(item.price)}</span> 
                                            <span class="price-discount"></span>
                                        </span>
                                    </div>
                                    <div class="main__container-products-table-item-sold">Đã bán ${item.sold} </div>
                                </div>
                            </div>
                        </div>
                        <span class="like-label"></span>
                    </div>
                </div>
            `)
        )
        renderContent(productSuggestionContainer, strOfproductSuggestionItem)
        productSuggestion.appendChild(productSuggestionContainer)

    }

    function handleFilterProduction(data, classNameSection) {
        var quatitySold = $(`.${classNameSection} .main__container-products-table-item-sold`)
        var setLikeLabel = $(`.${classNameSection} .main__container-products-table-item .like-label`)

        //handle like-label at product list 
        for (let i = 0; i < data.length - 1; i++) {
            // console.log(quatitySold[i].innerHTML)
            var priceStr = quatitySold[i].innerHTML.slice(6, -1)
            var priceInteger = Number.parseInt(priceStr)

            //render 1k:1000
            if (priceInteger >= 1000) {
                let newUnit = Number.parseInt(quatitySold[i].innerHTML.slice(6, -1))
                quatitySold[i].innerHTML = 'Đã bán ' + renderSoldProduct(newUnit);

            }
            if (priceInteger >= 2000) {

                setLikeLabel.eq(i).html('Yêu thích')
                setLikeLabel.eq(i).show()
            }
            if (priceInteger >= 5000) {
                setLikeLabel.eq(i).html('Yêu thích +')
            }
            if (priceInteger >= 12000) setLikeLabel.eq(i).html('Viral')
            if (priceInteger >= 50000) {
                setLikeLabel.eq(i).html('Official')
                setLikeLabel.eq(i).css('background-color', ' #9332bb')
            }
            // console.log(i, classNameSection)
        }


    }

    //********* ********* ********* ********* ********* ********* ********* *********
    // handle show label for product item 
    //filter shopmal - insert S-Mall product label
    const dataFilteredEvent = filterdDataSeriesOfEvent(dataProductlists, 'April')
    const frameProduction = 'products-today-suggestion-list'
    const frameProductionEvent = 'products-event-products-list'

    handleShowLabelItems(dataProductlists, frameProduction, filterNormal)
    handleShowLabelItems(dataFilteredEvent, frameProductionEvent, filterEvent)
    function handleShowLabelItems(data, classNameSection, filter) {
        // console.log('ok')

        handleFilterProduction(data, classNameSection)
        handleFlashSaleLabel(data, classNameSection, filter)
        handleSMallLabel(data, classNameSection, filter)
    }

    // fix jquery
    function handleFlashSaleLabel(data, classNameSection, filterEvents) {
        var setFSaleLabel = $(`.${classNameSection} .flashsale-label-discount--scale-70`)
        var setDiscountFSale = $(`.${classNameSection} span .price-product`)
        var setDiscountPriceFSale = $(`.${classNameSection} span .price-discount`)
        const dataFilteredFSale = filterdDataSeriesOfEvent(data, 'FlashSale')
        // console.log(data)

        // console.log(dataFilteredFSale, classNameSection)  
        dataFilteredFSale.map((item, index) => {
            let getIDFSaleLabel = $(`.main__container-products-table-container #event-current${filterEvents}${item.id}`).attr('data-id')
            // console.log(getIDFSaleLabel, item.id, classNameSection)
            setFSaleLabel.eq(getIDFSaleLabel).show()
            setFSaleLabel.eq(getIDFSaleLabel).html(`${item.discount}% <span style="color: #ffff;">giảm</span>`)
            setDiscountFSale.eq(getIDFSaleLabel).addClass('price-product--active')
            setDiscountPriceFSale.eq(getIDFSaleLabel).html(handleDiscountPrice(item.price, item.discount))
        })

    }

    function handleSMallLabel(data, classNameSection, filterEvents) {

        var setLikeLabel = $(`.${classNameSection} .main__container-products-table-item .like-label`)
        // console.log(setLikeLabel)
        data.filter((item, index) => {
            if (item.category === 'SMall') {
                let getIDLikeTag = $(`.main__container-products-table-container #event-current${filterEvents}${item.id}`).attr('data-id')
                // console.log([ getIDLikeTag, item.id], index)
                setLikeLabel.eq(getIDLikeTag).show()
                setLikeLabel.eq(getIDLikeTag).html('Mall')
                setLikeLabel.eq(getIDLikeTag).css({ 'background-color': '#d0011b', 'display': ' block;' })
            }
        })
    }


    // Flash sale ITEM LIST AREA ******************************
    renderFlashSaleItem()
    function renderFlashSaleItem() {
        const flashSaleCover = document.querySelector('.main__container-flashsale-item-cover--overflow')

        const flashSaleContainer = document.createElement('div')
        flashSaleContainer.className = 'main__container-flashsale-item-list row'
        const dataFilteredFSale = filterdDataSeriesOfEvent(dataProductlists, 'FlashSale')

        const strOfCategoryServiceItem = dataFilteredFSale.map(item => (
            `
            <a href="#" class="text-decor--none" style="width: 100%; height:100%">
                <div class="main__container-flashsale-item l-2">
                    <div class="main__container-flashsale-label-discount">
                        ${item.discount}%
                        <span style="color: #ffff;">giảm</span>
                    </div>
                    <div class="main__container-flashsale-item-container">
                        <div class="main__container-flashsale-item-img"
                            style="background-image: url('${item.image}')">

                        </div>
                    </div>
                    <div class="main__container-flashsale-price-container">
                        <div class="main__container-flashsale-item-price text-decor--none">
                            <span class="currency-unit">₫</span>
                            ${handleDiscountPrice(item.price, item.discount)}
                        </div>
                        <div class="main__container-flashsale-sold-product">
                            <div class="main__container-flashsale-sold-percent"
                                style="background-size: ${calcPercent(item.order, item.available)}% ;"
                            >
                                Đã bán ${item.order}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
    `))
        renderContent(flashSaleContainer, strOfCategoryServiceItem)
        flashSaleCover.appendChild(flashSaleContainer)
    }
    // Shop Mall Banners LIST AREA ****************************** 
    renderShopMallSlideshow()
    function renderShopMallSlideshow() {
        const shopMallContainer = document.querySelector('.main__container-sm-body-slideshow-container')

        const shopMallItems = document.createElement('div')
        shopMallItems.className = 'main__container-sm-body-slideshow-overflow'
        const strOfPSItem = dataShopMallBanners.map(item =>
            `<div class="main__container-sm-body-slideshow"
                style="background-image: url(${item.image})">
            </div>`
        )
        renderContent(shopMallItems, strOfPSItem)
        shopMallContainer.appendChild(shopMallItems)
    }
    // Shop Mall ITEM LIST AREA ******************************
    renderShollMallItem()
    function renderShollMallItem() {
        const shollMallCover = document.querySelector('.main__container-sm-insidebody-outline')

        const shollMallContainer = document.createElement('div')
        shollMallContainer.className = 'main__container-sm-insidebody-container sm-insidebody-container--width sm-item row'
        const dataFilteredSMall = filterDataCategory(dataProductlists, 'SMall')
        const strOfCategoryServiceItem = dataFilteredSMall.map(item => (
            `
            <div class="main__container-sm-body-item l-3 m-3 c-4">
                <div class="main__container-sm-body-brand"
                    style="background-image: url('${item.image}');">
                    <div class="main__container-sm-body-brand-name">
                        ${item.description}
                    </div>
                </div> 
            </div>
        `))
        renderContent(shollMallContainer, strOfCategoryServiceItem)
        shollMallCover.appendChild(shollMallContainer)
    }
    handleRenderShollMallItem()
    function handleRenderShollMallItem() {
        const dataSMallLenght = filterDataCategory(dataProductlists, 'SMall').length
        const width = Math.ceil((dataSMallLenght / 2)) * 200
        $('.main__container-sm-insidebody-cover .sm-item').css({ 'width': `${width}`, 'right': `0%` })
    }


    //Render top searched product
    renderTrendSearchItem()
    function renderTrendSearchItem() {
        const topSearchCover = document.querySelector('.main__container-trends-search-bound')
        const topSearchContainer = document.createElement('div')
        topSearchContainer.className = 'main__container-trends-search-container row'

        const strOfTopSearchItem = dataTrendSearch.map(item => (
            `
            <div class="main__container-trends-search-item l-2-4">
                <div class="main__container-trends-search-title">
                    <div class="main__container-trends-search-title-label">
                        ${item.description}
                    </div>
                    <div class="main__container-trends-search-title-sold">
                        ${renderSoldProduct(item.sold)}+ sản phẩm
                    </div>
                </div>
                <div class="main__container-trends-search-img"
                    style="background-image: url('${item.image}')">
                </div>
            </div>
        `))
        renderContent(topSearchContainer, strOfTopSearchItem)
        topSearchCover.appendChild(topSearchContainer)
    }
    //Render top searched product
    renderTopSearchItem()
    function renderTopSearchItem() {
        const topSearchCover = document.querySelector('.main__container-top-search-bound')
        const topSearchContainer = document.createElement('div')
        topSearchContainer.className = 'main__container-top-search-container row'

        const strOfTopSearchItem = dataTopSearch.map(item => (
            `<div class="main__container-top-search-item l-2">
                <div class="main__container-top-search-item-img"
                    style="background-image: url('${item.image}')">
                    <div class="main__container-top-search-item-label-top">
                        <!-- Top -->
                    </div>
                    <div class="main__container-top-search-item-sold">
                    ${renderSoldProduct(item.sold)}+ /tháng
                    </div>
                </div>
                <div class="main__container-top-search-item-name">
                    ${item.description}
                </div>
            </div>
        `))
        renderContent(topSearchContainer, strOfTopSearchItem)
        topSearchCover.appendChild(topSearchContainer)
    }


    ///////////////////////                    FOOTER 
    renderChatBox()
    function renderChatBox() {
        const chatBoxCover = document.querySelector('.message__box-search-content')
        const chatBoxContainer = document.createElement('div')
        chatBoxContainer.className = 'message__box-chat-container'

        const strOfChatBox = dataMessages.map(item => (
            `    <div id ='${item.shopName}-${item.id}' class="chat-box-content--active message__box-search-item">
                    <div class="message__box-search-item message__box-list-container">
                        <div class="pin-icon-container">
                            <i class="fas fa-thumbtack pin-icon"></i>
                        </div>
                        <img src="${item.image}" class="contact-avatar"></img>
                        <span class="contact-content ">
                            <div class="contact-name d-flex"> 
                                <span > ${item.shopName}</span>
                                <span class="contact-message--status ${isNewMessage(item.status)} ">${item.newMessage.length}</span>
                            </div>
                            <div class="contact-chat-content">
                                ${renderLastestMessage(item.message, item.input, item.newMessage)}  
                            </div>
                        </span>
                    </div>
                    <span id ="${item.shopName}-${item.id}" class="contact-chat-menu"><i class="fas fa-ellipsis-h"></i></span>
                </div>
                <div class="contact-mark-option" id ='${item.shopName}-${item.id}' style='position: absolute;'>
                <div class="contact-chat-menu--show">
                    <span class="contact-chat-menu-pin contact-chat-menu-icon">
                        <i class="fas fa-thumbtack menu-chat-icon"></i>
                        <p class="contact-chat-content">Ghim trò chuyện</p>
                    </span>
                    <span class="contact-chat-menu-mark contact-chat-menu-icon">
                        <i class=" ${handleMarkClassOldMessage(item.status)} fa-comment-alt menu-chat-icon"></i>
                        <p class="contact-chat-content"> ${handleMarkContentOldMessage(item.status)}</p>
                    </span>
                    <span class="contact-chat-menu-trash contact-chat-menu-icon">
                        <i class="fas fa-trash-alt menu-chat-icon"></i>
                        <p class="contact-chat-content">Xóa trò chuyện</p>
                    </span>
                </div>
            </div>
        `))
        renderContent(chatBoxContainer, strOfChatBox)
        chatBoxCover.appendChild(chatBoxContainer)
    }
    // *********************************************************************************************** 
    // Use for Product Lists
    // filter data according to specified condition --

    function filterdDataSeriesOfEvent(data, conditions) {

        return data.filter(item => {
            const eventAttr = item.event.split(' ')
            for (let i = 0; i < eventAttr.length; i++) {
                if (eventAttr[i] === conditions) {
                    return item
                }
            }
        })
    }

    function renderLastestMessage(message, input, newMessage) {
        const newMessageArray = message.concat(input, newMessage)
        return newMessageArray[newMessageArray.length - 1].content
    }

    function filterDataCategory(data, conditions) {
        return data.filter(item => (item.category === `${conditions}`))
    }

    /// find Data with multiple keywords
    function filterdDataShip(data, ...rest) {
        let Data = []
        for (let i = 0; i < rest.length; i++) {
            Data = Data.concat(data.filter(item => (item.ship === `${rest[i]}`)))
        }
        return Data
    }

    // renderContent of Farent tag
    function renderContent(tagFarent, strContent) {
        tagFarent.innerHTML = strContent.reduce((total, cur) => total + cur)
    }

    // Data - Event name - specified url
    function handleBGImgEvent(data, filterEvent, url, classNameSection) {
        if (filterEvent === 'April') {

            var productsItem = $(`${classNameSection} .main__container-products-table-container .main__container-products-table-item-header`)

            const dataEventLocal = filterdDataSeriesOfEvent(data, filterEvent)
            const dataEventGlobal = filterdDataShip(data, 'free', 'hx', 'discount')

            dataEventLocal.map(item => (setBackgroundEvents(productsItem.eq(item.id - 1), url)))
            dataEventGlobal.map(item => (setBackgroundEvents(productsItem.eq(item.id - 1), url)))
        }
    }
    function setBackgroundEvents(setProductItem, backgroundEvent) {
        const imgBackground = setProductItem.css('background-image')
        const urlEvent = `url('${backgroundEvent}')`
        const resultBackground = urlEvent.concat(',', imgBackground)
        return setProductItem.css("background-image", `${resultBackground}`);
    }

    // render quatity of sold product
    // console.log(renderSoldProduct(11235))
    function renderSoldProduct(sold) {
        if (sold >= 1000) {
            const renderSold = (sold / 1000).toFixed(1)
            return sold = `${renderSold}k`
        }
        else return `${sold}`
    }
    // render price VND 
    function renderPriceVND(price) {
        if (price >= 1000000) {
            const milionUnit = Math.floor(price / 1000000)
            const hundredUnit = Math.floor(price - milionUnit * 1000000)
            const rest = (hundredUnit / 1000).toFixed(3)
            return price = `${milionUnit}.${rest}`
        }
        if (price < 1000000 && price >= 1000) {

            return price = (price / 1000).toFixed(3)
        }
    }
    // Calculate promotion/endow product 
    function handleDiscountPrice(price, discount) {
        price = price * (1 - discount / 100)
        return renderPriceVND(price)
    }
    function calcPercent(a, b) {
        return Math.floor((a / b) * 100)
    }
    function isNewMessage(a) {
        if (a) {
            return 'contact-message--active'
        }
        else return ''
    }
    function handleMarkClassOldMessage(conditions) {
        if (conditions) {
            return 'far'
        } else {
            return 'fas'
        }
    }
    function handleMarkContentOldMessage(conditions) {
        if (conditions) {
            return 'Đánh dấu đã đọc'
        } else {
            return 'Đánh dấu chưa đọc'
        }
    }

    // handle Commercial
    const hideCommercial = () => {
        $('.app__skinny-commercial').hide()

    }

    const handleCommercial = () => {
        $('.commercial-container').click(() => {
            hideCommercial()
        })
        $('.commercial-item').on('click', function (e) {
            e.stopPropagation();
        });
        $('.btn__close-commercial').click(() => {
            hideCommercial()
        })
    }
    handleCommercial()

    //
    const handleShow = () => {

        $('.message__box-chat-container').click((e) => {
            // console.log(e)
        })
        // $('.message__box-search-item').scroll((e) => {
        //     e.stopPropagation();
        // })
    }
    handleShow()
    
    $('.offfical-content-message-overflow').scrollTop( 0, 300 );
    $('.offfical-content-message-overflow').click((e) => {
        const t = $('.offfical-content-message-overflow').height()
    })

  
    // random, data 
    // let array = []
    // for(let i = 0; i< 58 ; i++) {
    //     array += Math.floor(Math.random()*200)  +','
    // }
    // console.log(array.split(','))
    // var x= []


} 
