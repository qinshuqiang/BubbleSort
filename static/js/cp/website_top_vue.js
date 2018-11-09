new Vue({
    el: "#website_top",
    data() {
        return {
            hide: false,
            show: true,
            top_weclome_text: "欢迎来到深圳市福加福科技有限公司",
            navigation_a_gssy: "公司首页",
            navigation_a_cplb: "产品列表",
            navigation_a_hyzx: "行业资讯",
            navigation_a_qyln: "企业理念",
            navigation_a_gywm: "关于我们",
            navigation_a_lxwm: "联系我们",
            products: [{
                    name: "手机壳",
                    p_a: "手机壳xxxxxxxx",
                    p_b: "手机壳xxxxxxxxxxxx",
                    img: "/static/img/banners/test.png"
                },
                {
                    name: "车载周边",
                    p_a: "车载周边xxxxxxxx",
                    p_b: "车载周边xxxxxxxxxxxx",
                    img: "/static/img/banners/test.png"
                },
                {
                    name: "移动电源",
                    p_a: "移动电源xxxxxxxx",
                    p_b: "移动电源xxxxxxxxxxxx",
                    img: "/static/img/banners/test.png"
                },
                {
                    name: "智能手表",
                    p_a: "智能手表xxxxxxxx",
                    p_b: "智能手表xxxxxxxxxxxx",
                    img: "/static/img/banners/test.png"
                },
                {
                    name: "手机支架",
                    p_a: "手机支架xxxxxxxx",
                    p_b: "手机支架xxxxxxxxxxxx",
                    img: "/static/img/banners/test.png"
                }
            ],
            products_specific: [{
                    img: "/static/img/products/PhoneCase/carbon_fiber_phone_case/01.png"
                },
                {
                    img: "/static/img/products/PhoneCase/carbon_fiber_phone_case/02.png"
                },
                {
                    img: "/static/img/products/PhoneCase/carbon_fiber_phone_case/03.png"
                },
                {
                    img: "/static/img/products/PhoneCase/carbon_fiber_phone_case/04.png"
                },
                {
                    img: "/static/img/products/PhoneCase/carbon_fiber_phone_case/05.png"
                }
            ]
        }
    },
})