
//render Notify Header "bell"
const dataNotifyContents = [
    {
        image: 'https://cf.shopee.vn/file/cc1d084fccd73620e6317b13c46aa10e_tn',
        title: '{Đủ Tháng} Sim 4G Viettel D500 Và D900 Trọn Gói 1 Năm',
        description: `Chuyên cung cấp sim 4G và sim nghe gọi trong và ngoài nước,
            thiết bị mạng và phụ kiện công nghệ cam kết sản phẩm chính
            hãng bảo hành tối thiểu 12 tháng trở lên 1 đổi 1.`,
    },
    {
        image: 'https://cf.shopee.vn/file/11f74046de41bf7a5618ba85936f5703_tn',
        title: 'Thời tới rồi! Sắm đồ NỬA GIÁ lúc 12H',
        description: `😘 Bao la mặt hàng giảm 50%
            ☄️ Săn thêm voucher giảm 50% nữa
            💥 Cứ mua là lời - Ngại gì không mua!`,
    },
    {
        image: 'https://cf.shopee.vn/file/be5db69ffdcfad7d1680e8d9702efbd6_tn',
        title: ' Hạng thành viên ơi, 6K Xu đang đợi',
        description: `🚛 Mã freeship cho đơn từ 0đ! ⏰ Hết hạn lúc 24-11-2021!
            👉 Mã đã có sẵn trong ví! 😤 Không xài, hết hạn, đừng tiếc đó!`,
    },
    {
        image: 'https://cf.shopee.vn/file/d78e8d258b56838cf94a10c116a3c556_tn',
        title: 'Đơn hàng đã hoàn tất',
        description: `Đơn hàng 2645342165004656948  đã hoàn thành.`,
    },
]
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
const dataHSLTrendings = [
    'Dầu gội Pantene ngăn rụng tóc',
    'Tua Vít Sửa Điện Thoại',
    'Áo Thun Nam Có Cổ',
    'Loa Bluetooth Mini',
    'Máy Mp4',
    'Thẻ cào Mobifone', 'Áo Thun Nam Có Cổ',
    'Loa Bluetooth Mini',
    'Máy Mp4',
    'Thẻ cào Mobifone',

]
renderHSLTrending()
function renderHSLTrending() {

    const headerSearchLookerTrending = document.querySelector('.header__search-looker-trending')
    const HSLTrending = document.createElement('div')
    HSLTrending.className = 'header__search-looker-trending-container'
    const strOfHSLTrending = dataHSLTrendings.map(item => `<div class='header__search-looker-item'>${item}</div>`)
    renderContent(HSLTrending, strOfHSLTrending)
    headerSearchLookerTrending.appendChild(HSLTrending)
}

// promotion-slideshow-container
const dataPromotionSlideshowContainers = [
    {
        id: 1,
        url: 'https://cf.shopee.vn/file/6317cc3c9555da115f0cc6f4900899d3_xxhdpi',
        image: 'https://cf.shopee.vn/file/6317cc3c9555da115f0cc6f4900899d3_xxhdpi',
        title: ''
    },
    {
        id: 2,
        url: 'https://cf.shopee.vn/file/3af5f35d15916372dda506833f7a09b1_xxhdpi',
        image: 'https://cf.shopee.vn/file/3af5f35d15916372dda506833f7a09b1_xxhdpi',
        title: ''
    },
    {
        id: 3,
        url: 'https://cf.shopee.vn/file/9dbe8de7df382c775daa56dca3f95ec7_xxhdpi',
        image: 'https://cf.shopee.vn/file/9dbe8de7df382c775daa56dca3f95ec7_xxhdpi',
        title: ''
    },
    {
        id: 4,
        url: 'https://cf.shopee.vn/file/c5069cb8f03fccf190dabb24d26a364d_xxhdpi',
        image: 'https://cf.shopee.vn/file/c5069cb8f03fccf190dabb24d26a364d_xxhdpi',
        title: ''
    },
    {
        id: 5,
        url: 'https://cf.shopee.vn/file/07f6fdafeacef1ba731f7c0fa973223d_xxhdpi',
        image: 'https://cf.shopee.vn/file/07f6fdafeacef1ba731f7c0fa973223d_xxhdpi',
        title: ''
    },
    {
        id: 6,
        url: 'https://cf.shopee.vn/file/6317cc3c9555da115f0cc6f4900899d3_xxhdpi',
        image: 'https://cf.shopee.vn/file/6317cc3c9555da115f0cc6f4900899d3_xxhdpi',
        title: ''
    },
    {
        id: 7,
        url: 'https://cf.shopee.vn/file/09e1b4c5cfc4fd28d80077efb135e399_xxhdpi',
        image: 'https://cf.shopee.vn/file/09e1b4c5cfc4fd28d80077efb135e399_xxhdpi',
        title: ''
    },
]
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
const dataMainServices = [
    {
        id: '1',
        title: 'Bảo vệ sức khỏe',
        url: 'https://cf.shopee.vn/file/3820374516083447a858e6f303441170_xhdpi',
        image: 'https://cf.shopee.vn/file/3820374516083447a858e6f303441170_xhdpi',
    },
    {
        id: '2',
        title: 'Gì Cũng Rẻ - Mua Là Freeship',
        url: 'https://cf.shopee.vn/file/3820374516083447a858e6f303441170_xhdpi',
        image: '	https://cf.shopee.vn/file/3820374516083447a858e6f303441170_xhdpi',
    },
    {
        id: '3',
        title: 'Khung Giờ Săn Sale',
        url: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
        image: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi',
    },
    {
        id: '4',
        title: 'Freeship Xtra',
        url: 'https://cf.shopee.vn/file/07ee4296b0a33885418670f2e3ffeca0_xhdpi',
        image: 'https://cf.shopee.vn/file/07ee4296b0a33885418670f2e3ffeca0_xhdpi',
    },
    {
        id: '5',
        title: 'Hoàn Xu 50% - Lên Đến 50K',
        url: 'https://cf.shopee.vn/file/9da9a3acb5520d601f86a90434f455a5_xhdpi',
        image: 'https://cf.shopee.vn/file/9da9a3acb5520d601f86a90434f455a5_xhdpi',
    },
    {
        id: '6',
        title: 'Hàng Hiệu -50%',
        url: 'https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi',
        image: 'https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi',
    },
    {
        id: '7',
        title: 'Hàng Quốc Tế - Deal x9K',
        url: '	https://cf.shopee.vn/file/29961f92098bc9153b88332110a91c87_xhdpi',
        image: '	https://cf.shopee.vn/file/29961f92098bc9153b88332110a91c87_xhdpi',
    },
    {
        id: '8',
        title: 'Nạp Thẻ & Dịch Vụ',
        url: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi',
        image: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi',
    },
    {
        id: '9',
        title: 'Deal Sốc Từ 1K',
        url: 'https://cf.shopee.vn/file/96385a65fa50800e096bb790fa5c1dba_xhdpi',
        image: 'https://cf.shopee.vn/file/96385a65fa50800e096bb790fa5c1dba_xhdpi',
    },
    {
        id: '10',
        title: 'Chọn 6 Số Trúng Tiền Triệu',
        url: 'https://cf.shopee.vn/file/ed849a82e8c66bbff8ec0f2869c6fbb7_xhdpi',
        image: 'https://cf.shopee.vn/file/ed849a82e8c66bbff8ec0f2869c6fbb7_xhdpi',
    },
]

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

const dataCategorys = [
    {
        id: '1',
        title: 'Thời Trang Nam',
        url: '	https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
        image: '	https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    },
    {
        id: '2',
        title: 'Điện Thoại & Phụ Kiện',
        url: 'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
        image: 'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
    },
    {
        id: '3',
        title: 'Thiết Bị Điện Tử',
        url: 'https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn',
        image: 'https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn',
    }, 
    {
        id: '4',
        title: 'Máy Tính & Laptop',
        url: 'https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn',
        image: 'https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn',
    }, 
    {
        id: '5',
        title: 'Máy Ảnh & Máy Quay Phim',
        url: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
        image: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    }, 
    {
        id: '6',
        title: 'Đồng Hồ',
        url: 'https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn',
        image: 'https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn',
    }, 
    {
        id: '7',
        title: 'Giày Dép Nam',
        url: 'https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
        image: 'https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
    }, 
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn',
        image: 'https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn',
        image: 'https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn',
        image: 'https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn',
        image: 'https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn',
        image: 'https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn',
        image: 'https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
        image: 'https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn',
        image: 'https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn',
        image: 'https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn',
        image: 'https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn',
        image: 'https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn',
        image: 'https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn',
        image: 'https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn',
        image: 'https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn',
        image: 'https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn',
        image: 'https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn',
        image: 'https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn',
        image: 'https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn',
    },
    {
        id: '8',
        title: '',
        url: 'https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn',
        image: 'https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn',
    }, 
]

renderCategoryServices()
function renderCategoryServices() {
    const categoryServices = document.querySelector('.main__container-category-cover')

    const categoryServicesContainer = document.createElement('div')
    categoryServicesContainer.className = 'main__container-category-container row'
    const strOfCategoryServiceItem = dataCategorys.map(item => (
        `<div class="main__container-category-item l-1-2 c-1-2" title="${item.id}">
            <div class="main__container-category-item-sub">
                <div class="main__container-category-item-img"
                    style="background-image: url('${item.image}');">
                </div>
                <div class="main__container-category-item-name">
                    ${item.title}
                </div>
            </div>
        </div>
    `))
    renderContent(categoryServicesContainer, strOfCategoryServiceItem) 
    categoryServices.appendChild(categoryServicesContainer)
}



// renderContent of Farent tag
function renderContent(tagFarent, strContent) {
    tagFarent.innerHTML = strContent.reduce((total, cur) => total + cur)
}

