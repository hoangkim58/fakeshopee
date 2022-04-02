
export default function handleDOM() {
    document.addEventListener('DOMContentLoaded', function () {

        var isisClickSlideshowPromotionPrev = document.querySelector(".slideshow-carousel__arrow-prev")
        var isisClickSlideshowPromotionNext = document.querySelector(".slideshow-carousel__arrow-next")
        var clickSlideshowPromotionPosition = document.querySelector(".main__container-promotion-slideshow-container")
        var isClickTodaySuggestion = document.querySelector('.today-suggestion');
        var isClickTodayEvent = document.querySelector('.today-event');
        var isTodayEventList = document.querySelector('.products-event-products-list')
        var isTodaySuggestionList = document.querySelector('.products-today-suggestion-list')
        var isClickCatalogArrowPosition = document.querySelector(".main__container-category-cover")
        var isClickCatalogArrowPrev = document.querySelector(".catalog-carousel__arrow-prev")
        var isClickCatalogArrowNext = document.querySelector(".catalog-carousel__arrow-next")
        let temp = 0;

        // slideshow-promotion
        var quatitySlideshowDot = document.querySelectorAll('.carousel__dot-container').length
        var imgSlideshowPromotion = document.querySelectorAll('.main__container-promotion-item')
        var quatitySlideShowPromotion = document.querySelectorAll('.main__container-promotion-item').length
        isisClickSlideshowPromotionPrev.addEventListener("click", isClickSlideshowPromotionPrev)
        isisClickSlideshowPromotionNext.addEventListener("click", isClickSlideshowPromotionNext)

        // add div carousel-dot
        var carouselDotContainer = document.querySelector('.carousel__dot-container')
        for (let i = 0; i < quatitySlideShowPromotion; i++) {
            var div = document.createElement("div")
            carouselDotContainer.appendChild(div)
            var add = document.querySelectorAll('.carousel__dot-container div')[i]
            add.setAttribute('data-value', [i])
            add.classList.add('carousel__dot')
            add.classList.add('slideshow-carousel__dot')
            if (i === 0) add.classList.add('carousel__dot--active')
        }

        //active dot carousel slideshow promotion
        var slideshowDot = document.querySelectorAll('.slideshow-carousel__dot')
        let numSlideshowPomotion = 0;

        const addSlideshowDot = (num) => {
            slideshowDot[num].classList.add('carousel__dot--active')
        }

        const removeSlideshowDot = (num) => {
            slideshowDot[num].classList.remove('carousel__dot--active')
        }

        var setPositionBannersTopPromotion = (num) => {
            clickSlideshowPromotionPosition.setAttribute("style", `right: ${num}00%;`)
        }

        //  wanna be change Banners Page, press on DotPosition  
        carouselDotContainer.addEventListener('click', isClickDotPositionSlide)

        function isClickDotPositionSlide() {
            for (let i = 0; i < quatitySlideShowPromotion; i++) {

                var currentDotPosition = document.querySelectorAll('.carousel__dot-container .carousel__dot')[i]

                currentDotPosition.addEventListener('click', function () {
                    removeSlideshowDot(numSlideshowPomotion)
                    numSlideshowPomotion = i
                    // reset time automation
                    clearInterval(timeAutomaticOfBanners)
                    timeAutomaticOfBanners = setInterval(setTimeAutomaticOfBanners, 2000);
                    setPositionBannersTopPromotion(i)
                    addSlideshowDot(i)

                })
            }
        }

        // setTime automation 
        const setTimeAutomaticOfBanners = () => {
            if (numSlideshowPomotion < quatitySlideShowPromotion - 1) {
                numSlideshowPomotion++;
                removeSlideshowDot(numSlideshowPomotion - 1)
                addSlideshowDot(numSlideshowPomotion)
                setPositionBannersTopPromotion(numSlideshowPomotion)

            }
            else {
                numSlideshowPomotion = 0;
                removeSlideshowDot(quatitySlideShowPromotion - 1)
                addSlideshowDot(numSlideshowPomotion)
                setPositionBannersTopPromotion(numSlideshowPomotion)
            }
        }

        let timeAutomaticOfBanners = setInterval(setTimeAutomaticOfBanners, 2000);
        clearInterval(timeAutomaticOfBanners)
        // Run when have over 2 element production slideshow
        if (quatitySlideShowPromotion > 1) timeAutomaticOfBanners = setInterval(setTimeAutomaticOfBanners, 2000);
        // button Prev arrow banners top promotion
        function isClickSlideshowPromotionPrev() {

            // reset timeBanners
            clearInterval(timeAutomaticOfBanners)
            timeAutomaticOfBanners = setInterval(setTimeAutomaticOfBanners, 2000);

            if (numSlideshowPomotion <= 0) {
                numSlideshowPomotion = quatitySlideShowPromotion - 1
                removeSlideshowDot(0)
                addSlideshowDot(numSlideshowPomotion)
                setPositionBannersTopPromotion(numSlideshowPomotion)

            }
            else if (numSlideshowPomotion <= quatitySlideShowPromotion) {
                numSlideshowPomotion--;
                removeSlideshowDot(numSlideshowPomotion + 1)
                addSlideshowDot(numSlideshowPomotion)
                setPositionBannersTopPromotion(numSlideshowPomotion)

            }
        }

        // button Next arrow banners top promotion 
        function isClickSlideshowPromotionNext() {

            // reset timeBanners 
            clearInterval(timeAutomaticOfBanners)
            timeAutomaticOfBanners = setInterval(setTimeAutomaticOfBanners, 2000);


            if (numSlideshowPomotion < quatitySlideShowPromotion - 1) {
                numSlideshowPomotion++;
                removeSlideshowDot(numSlideshowPomotion - 1)
                addSlideshowDot(numSlideshowPomotion)
                setPositionBannersTopPromotion(numSlideshowPomotion)

            }
            else {
                numSlideshowPomotion = 0;
                removeSlideshowDot(quatitySlideShowPromotion - 1)
                addSlideshowDot(numSlideshowPomotion)
                setPositionBannersTopPromotion(0)
            }
        }

        // flashsale__clock-Group
        flashSaleClock(2, 0)

        // format time: hours/minute
        function flashSaleClock(a, b) {

            var timeInput = (a * 60 + b) * 60


            const time = setInterval(() => {
                if (timeInput >= 0) {
                    var hoursInt = Math.floor(timeInput / 60 / 60)
                    var hours = timeInput / 60 / 60 - hoursInt

                    var minutesInt = Math.floor(hours * 60)
                    var minutes = hours * 60 - Math.floor(hours * 60)

                    var secondsInt = (minutes * 60).toFixed(0)

                    timeInput--
                    // console.log([hoursInt, minutesInt, secondsInt])
                    renderFlashSale(hoursInt, minutesInt, secondsInt)

                }
                else {
                    clearInterval(time)
                }
            }, 1000);

        }

        function renderFlashSale(a, b, c) {
            var FlashSaleContainer = document.querySelector('.main__container-flashsale-header-clock')

            var Hour = ('0' + a).slice(-2)
            var Minute = ('0' + b).slice(-2)
            var Second = ('0' + c).slice(-2)
            FlashSaleContainer.innerHTML = `${Hour} : ${Minute} : ${Second}`

        }



        //flashsale carousel arrow
        let positionOfFlashsaleShow = 0;
        var flashsaleListContainer = document.querySelector('.main__container-flashsale-item-list')
        var flashsaleCarouselArrowPrev = document.querySelector('.flashsale-carousel__arrow-prev')
        var flashsaleCarouselArrowNext = document.querySelector('.flashsale-carousel__arrow-next')
        var quatityOfFlashsaleList = flashsaleListContainer.childElementCount
        var quatityframeOfFlashsaleList = Math.ceil(quatityOfFlashsaleList / 6)

        flashsaleCarouselArrowPrev.setAttribute('style', 'visibility: hidden;')
        flashsaleCarouselArrowNext.addEventListener('click', isflashsaleCarouselArrowNext)
        function isflashsaleCarouselArrowNext() {
            // console.log('ok next')
            if (positionOfFlashsaleShow < quatityframeOfFlashsaleList) {
                flashsaleCarouselArrowPrev.setAttribute('style', 'visibility: visible;')
                positionOfFlashsaleShow++
                flashsaleListContainer.setAttribute('style', `right: ${positionOfFlashsaleShow}00%`)
                if (positionOfFlashsaleShow === quatityframeOfFlashsaleList - 1) {
                    flashsaleCarouselArrowNext.setAttribute('style', 'visibility: hidden;')
                }
                return positionOfFlashsaleShow
            }
        }

        flashsaleCarouselArrowPrev.addEventListener('click', isflashsaleCarouselArrowPrev)
        function isflashsaleCarouselArrowPrev() {
            if (positionOfFlashsaleShow === quatityframeOfFlashsaleList - 1) {
                flashsaleCarouselArrowNext.setAttribute('style', 'visibility: visible;')
            }
            if (positionOfFlashsaleShow === 1) {
                flashsaleCarouselArrowPrev.setAttribute('style', 'visibility: hidden;')
            }
            if (positionOfFlashsaleShow < quatityframeOfFlashsaleList) {
                // console.log(positionOfFlashsaleShow)
                positionOfFlashsaleShow--
                flashsaleListContainer.setAttribute('style', `right: ${positionOfFlashsaleShow}00%`)
                return positionOfFlashsaleShow
            }
            else {

            }
        }

        // @ ?? ?? //
        isClickCatalogArrowPrev.addEventListener("click", ClickCatalogArrowPrev)
        function ClickCatalogArrowPrev() {
            isClickCatalogArrowPosition.setAttribute("style", "right:0;")
            isClickCatalogArrowPrev.classList.add('transition-visible--hidden')
            isClickCatalogArrowNext.classList.remove('transition-visible--hidden')
        }

        isClickCatalogArrowNext.addEventListener("click", ClickCatalogArrowNext)
        function ClickCatalogArrowNext() {
            isClickCatalogArrowPosition.setAttribute("style", "right:30%;")
            isClickCatalogArrowNext.classList.add('transition-visible--hidden')
            isClickCatalogArrowPrev.classList.remove('transition-visible--hidden')

        }

        isClickTodaySuggestion.addEventListener("click", clickTodaySuggestion)
        function clickTodaySuggestion() {
            isClickTodaySuggestion.querySelector('.header__tab').classList.add('header__tab--active')
            isClickTodayEvent.querySelector('.header__tab').classList.remove('header__tab--active')

            isTodayEventList.setAttribute("style", "display: none;")
            isTodaySuggestionList.setAttribute("style", "display: block;")
        }

        isClickTodayEvent.addEventListener("click", clickTodayEvent)
        function clickTodayEvent() {
            isClickTodayEvent.querySelector('.header__tab').classList.add('header__tab--active')
            isClickTodaySuggestion.querySelector('.header__tab').classList.remove('header__tab--active')

            isTodaySuggestionList.setAttribute("style", "display: none")
            isTodayEventList.setAttribute("style", "display: block;")
        }

        // Shop Mall
        // add div carousel-dot
        var shopMallContainerr = document.querySelector('.sm-carousel__dot-container')
        var inSlideShowShopMall = document.querySelector('.main__container-sm-body-slideshow-overflow')
        var quatitySlideShowShopMall = inSlideShowShopMall.querySelectorAll('.main__container-sm-body-slideshow').length

        for (let i = 0; i < quatitySlideShowShopMall; i++) {
            var div = document.createElement("div")
            shopMallContainerr.appendChild(div)
            var add = document.querySelectorAll('.sm-carousel__dot-container div')[i]
            add.setAttribute('data-value', [i])
            add.classList.add('carousel__dot')
            add.classList.add('slideshow-carousel__dot')
        }

        // Shop mall slideshow carousel arrow
        var clickShopMallArrowPrev = document.querySelector('.sm-slideshow-carousel__arrow-prev')
        var clickShopMallArrowNext = document.querySelector('.sm-slideshow-carousel__arrow-next')
        let numOfSlideShopMall = 0;
        clickShopMallArrowPrev.addEventListener('click', isClickShopMallArrowPrev)
        clickShopMallArrowNext.addEventListener('click', isClickShopMallArrowNext)

        // click Dot carousel access clicked_dot
        function clickDotCarouselAccess(num) {
            for (let i = 0; i < quatitySlideShowShopMall; i++) {
                var isClickDotOfSMSlideshow = document.querySelectorAll('.sm-carousel__dot-container .carousel__dot')[i]
                isClickDotOfSMSlideshow.addEventListener('click', function () {

                    inSlideShowShopMall.setAttribute('style', `left: ${-i}00%`)

                    //clear Interval sm slideshow
                    clearInterval(setTimeShopMallSlideShow)

                    removeShopMallDot(num)
                    num = i
                    addShopMallDot(i)

                    //set Interval sm slideshow
                    setTimeShopMallSlideShow = setInterval(timeShopMallSlideShow, 3000)
                })
            }
        }

        // set time automatic carousel 
        var setTimeShopMallSlideShow = setInterval(timeShopMallSlideShow, 3000)
        function timeShopMallSlideShow() {

            clickDotCarouselAccess(numOfSlideShopMall)

            if (numOfSlideShopMall < quatitySlideShowShopMall - 1) {
                removeShopMallDot(numOfSlideShopMall)
                numOfSlideShopMall++
                inSlideShowShopMall.setAttribute('style', `left: ${-numOfSlideShopMall}00%`)
                addShopMallDot(numOfSlideShopMall)
            }
            else {
                numOfSlideShopMall = 0
                removeShopMallDot(quatitySlideShowShopMall - 1)
                addShopMallDot(0)
                inSlideShowShopMall.setAttribute('style', `left: 0%`)
            }
        }

        function isClickShopMallArrowPrev() {

            //clearInterval sm slideshow
            clearInterval(setTimeShopMallSlideShow)
            setTimeShopMallSlideShow = setInterval(timeShopMallSlideShow, 3000)

            if (numOfSlideShopMall === 0) {

                removeShopMallDot(0)
                addShopMallDot(quatitySlideShowShopMall - 1)
                numOfSlideShopMall = quatitySlideShowShopMall - 1
                inSlideShowShopMall.setAttribute('style', `left: ${-(quatitySlideShowShopMall - 1)}00%`)
            }
            else if (numOfSlideShopMall < quatitySlideShowShopMall) {
                removeShopMallDot(numOfSlideShopMall)
                numOfSlideShopMall--
                addShopMallDot(numOfSlideShopMall)
                inSlideShowShopMall.setAttribute('style', `left: ${-numOfSlideShopMall}00%`)
            }
        }
        function isClickShopMallArrowNext() {

            //clearInterval sm slideshow
            clearInterval(setTimeShopMallSlideShow)
            setTimeShopMallSlideShow = setInterval(timeShopMallSlideShow, 3000)

            document.querySelector('.main__container-sm-body-slideshow-container').clearInte
            if (numOfSlideShopMall < quatitySlideShowShopMall - 1) {
                removeShopMallDot(numOfSlideShopMall)
                numOfSlideShopMall++
                addShopMallDot(numOfSlideShopMall)
                inSlideShowShopMall.setAttribute('style', `left: ${-numOfSlideShopMall}00%`)
            }
            else {
                inSlideShowShopMall.setAttribute('style', `left: 0%`)
                removeShopMallDot(quatitySlideShowShopMall - 1)
                addShopMallDot(0)
                return numOfSlideShopMall = 0
            }
        }

        var addShopMallDot = (s) => {
            document.querySelectorAll('.sm-carousel__dot-container div')[s].classList.add('carousel__dot--active')
        }
        var removeShopMallDot = (s) => {
            document.querySelectorAll('.sm-carousel__dot-container div')[s].classList.remove('carousel__dot--active')
        }
        addShopMallDot(0)

        // Shop Mall inside items arrow 
        var shopMallInSideContainer = $('.sm-item')
        var clickShopMallInsidePrev = $('.sm-carousel__arrow-prev')
        var clickShopMallInsideNext = $('.sm-carousel__arrow-next')
        var quatityOfColumnItems = shopMallInSideContainer.css('width').slice(0, -2)
        var quatityOfFrame = Number.parseInt(quatityOfColumnItems)
        var quatityOfFrameItems = Math.ceil(quatityOfFrame / 800)
        let quatityOfFrameItem = 0;

        var clickShopMallArrowStatus = (DefineArrow, status) => {
            DefineArrow.css(`visibility`, `${status}`)
        }
        // 
        clickShopMallArrowStatus(clickShopMallInsidePrev, 'hidden')

        clickShopMallInsidePrev.click(isClickShopMallInsidePrev)
        function isClickShopMallInsidePrev() {
            if (quatityOfFrameItem < quatityOfFrameItems) {
                quatityOfFrameItem--
                shopMallInSideContainer.css('right', `${quatityOfFrameItem * 100}%`)
                clickShopMallArrowStatus(clickShopMallInsideNext, 'visible')
                console.log(quatityOfFrameItem)

                if (quatityOfFrameItem === 0) {
                    clickShopMallArrowStatus(clickShopMallInsidePrev, 'hidden')
                }
                console.log(quatityOfFrameItem)
            }
        }

        clickShopMallInsideNext.click(isClickShopMallInsideNext)
        function isClickShopMallInsideNext() {
            if (quatityOfFrameItem < quatityOfFrameItems - 1) {
                
                quatityOfFrameItem++
                shopMallInSideContainer.css('right', `${quatityOfFrameItem * 100}%`)
                // console.log(quatityOfFrameItem)
                if (quatityOfFrameItem === quatityOfFrameItems - 1) {

                    shopMallInSideContainer.css('right', `${quatityOfFrameItem * 100}%`) 
                    clickShopMallArrowStatus(clickShopMallInsideNext, 'hidden')
                    console.log(quatityOfFrameItem)
                }
                console.log(quatityOfFrameItem)
            }
            clickShopMallArrowStatus(clickShopMallInsidePrev, 'visible')
        }


    })
}