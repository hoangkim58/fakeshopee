import {
    dataNotifyContents, dataHSLTrendings,
    dataPromotionSlideshowContainers, dataMainServices,
    dataCategorys, dataProductlists
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

    let filterEvent = 'April'
    let filterNormal = ''

    //Render product suggestion -  ***today topping items 
    renderProductList('products-today-suggestion-list', filterNormal)

    //Render product event -  ***Event items 
    renderProductList('products-event-products-list', filterEvent)

    //INSERT background event - promotion - endow
    const url = 'https://cf.shopee.vn/file/2b2b94b25c063030ee03606e35dc06ef'
    backgroundImgEvent(dataProductlists, filterEvent, url)

    // handle label for every product
    handleFilterProduction()

    function renderProductList(typeProductClassName, filterEvents) {
        const productSuggestion = document.querySelector(`.${typeProductClassName}`)

        const productSuggestionContainer = document.createElement('div')
        productSuggestionContainer.className = 'main__container-products-table-container row'
        // productSuggestionContainer.id = `${typeProductClassName}`
        // return filtered data - suitable for event
        var dataFiltered = filterdDataEvent(dataProductlists, filterEvents)
        const strOfproductSuggestionItem = dataFiltered.map((item, index) => (
            `
                <div id="${item.id}" class="main__container-products-table-item l-2 m-4 c-6" data-id=${index}>
                    <div class="p-5">
                        <div class="main__container-products-table-item-cover">
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

    function handleFilterProduction() {
        var quatitySold = document.querySelectorAll('.main__container-products-table-item .main__container-products-table-item-sold')
        var setLikeLabel = document.querySelectorAll('.main__container-products-table-item .like-label')

        //handle like-label at product list
        for (let i = 0; i < dataProductlists.length; i++) {

            if (quatitySold[i].innerHTML.slice(6, -1) >= 5000) {
                // console.log(i)
                setLikeLabel[i].innerHTML = 'Yêu thích'
                setLikeLabel[i].style.display = 'block'
            }
            if (quatitySold[i].innerHTML.slice(6, -1) >= 12000) {
                // console.log(i)
                setLikeLabel[i].innerHTML = 'Viral'
            }
            //render 1k:1000
            if (quatitySold[i].innerHTML.slice(6, -1) >= 1000) {
                let newUnit = Number.parseInt(quatitySold[i].innerHTML.slice(6, -1)) / 1000
                quatitySold[i].innerHTML = 'Đã bán ' + Math.floor(newUnit) + 'k'
            }

        }

        //filter shopmal - insert S-Mall product label
        const dataFilteredE = filterdDataEvent(dataProductlists, 'April')
        const dataFiltered = filterdDataEvent(dataProductlists, '')
        const frameProduction = '.products-today-suggestion-list'
        const frameProductionEvent = '.products-event-products-list'

        handleSMallLabel(dataFiltered, frameProduction)
        handleSMallLabel(dataFilteredE, frameProductionEvent)

        // handle flash-sale - insert label flash sale Product List
        handleFlashSaleLabel(dataFiltered, frameProduction)
        handleFlashSaleLabel(dataFilteredE, frameProductionEvent)

    }

    function handleFlashSaleLabel(data, classNameSection) {
        var setStyleProductPrice = `color: #0000008a; text-decoration-line: line-through;
            position: absolute; bottom: 33px; font-size: 1.2rem;`
        var setFSaleLabel = document.querySelectorAll(`${classNameSection} .flashsale-label-discount--scale-70`)
        var setDiscountFSale = document.querySelectorAll(`${classNameSection} span .price-product`)
        var setDiscountPriceFSale = document.querySelectorAll(`${classNameSection} span .price-discount`)

        data.filter((item) => {
            if (item.category === 'FlashSale') {
                let getIDFSaleLabel = document.getElementById(`${item.id}`).getAttribute('data-id')

                // console.log([item.id, getIDFSaleLabel, data])

                setFSaleLabel[getIDFSaleLabel].setAttribute('style', 'visibility: visible;')
                setFSaleLabel[getIDFSaleLabel].innerHTML = `${item.discount}% <span style="color: #ffff;">giảm</span>`
                setDiscountFSale[getIDFSaleLabel].setAttribute('style', `${setStyleProductPrice}`)
                setDiscountPriceFSale[getIDFSaleLabel].innerHTML = handleDiscountPrice(item.price, item.discount)

            }
        })
    }

    function handleSMallLabel(data, classNameSection) {

        var setLikeLabel = document.querySelectorAll(`${classNameSection} .main__container-products-table-item .like-label`)
        data.filter(item => {
            if (item.type === 'SMall') {
                let getIDLikeTag = document.getElementById(`${item.id}`).getAttribute('data-id')
                // console.log([item.id, getIDLikeTag, data])
                setLikeLabel[getIDLikeTag].innerHTML = 'Mall',
                    setLikeLabel[getIDLikeTag].setAttribute('style', 'background-color: #d0011b; display: block;')
            }
        })
    }


    // Flash sale ITEM LIST AREA ******************************
    renderFlashSaleItem()
    function renderFlashSaleItem() {
        const flashSaleCover = document.querySelector('.main__container-flashsale-item-cover--overflow')

        const flashSaleContainer = document.createElement('div')
        flashSaleContainer.className = 'main__container-flashsale-item-list row'
        const dataFilteredFSale = filterDataFlashSale(dataProductlists, 'FlashSale')

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
                            <div class="main__container-flashsale-sold-percent">Đã bán 69</div>
                        </div>
                    </div>
                </div>
            </a>
    `))
        renderContent(flashSaleContainer, strOfCategoryServiceItem)
        flashSaleCover.appendChild(flashSaleContainer)
    }

    ///////////////////////                    FOOTER 

    // *********************************************************************************************** 
    // Use for Product Lists
    // filter data according to specified condition --
    function filterdDataEvent(data, conditions) {
        return data.filter(item => (item.event === `${conditions}`))
    }
    function filterDataFlashSale(data, conditions) {
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
    function backgroundImgEvent(data, filterEvent, url) {
        if (filterEvent === 'April') {

            var productsItem = document.querySelectorAll('.main__container-products-table-item-header')

            const dataEventLocal = filterdDataEvent(data, filterEvent)
            const dataEventGlobal = filterdDataShip(data, 'free', 'hx', 'discount')

            dataEventLocal.map(item => (setBackgroundEvents(productsItem[item.id - 1], url)))
            dataEventGlobal.map(item => (setBackgroundEvents(productsItem[item.id - 1], url)))
        }
    }
    function setBackgroundEvents(a, backgroundEvent) {
        const bgimg = a.style.backgroundImage
        const urlEvent = `url('${backgroundEvent}')`
        const resultBackground = urlEvent.concat(',', bgimg)
        return a.style.backgroundImage = resultBackground
    }

    // render price VND 
    function renderPriceVND(price) {
        return price = (price / 1000).toFixed(3)
    }
    // Calculate promotion/endow product 
    function handleDiscountPrice(price, discount) {
        price = price * (1 - discount / 100)
        return renderPriceVND(price)
    }

    // let array = []
    // for(let i = 0; i< 20 ; i++) {
    //     array += Math.floor(Math.random()*15)  +','
    // }
    // console.log(array.split(','))
    // var x= ['14', '9', '14', '10', '0', '7', '0', '5', '10', '10', '6', '5', '11', '2', '0', '10', '5', '6', '4', '4', '']

}