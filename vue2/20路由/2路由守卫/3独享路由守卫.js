/**
 * 在某个路由项里面进行配置，即为某个路由独享的路由守卫
 * 
 * 且独享路由守卫只有前置路由守卫，没有后置路由守卫
 * 
 * routes: [
        {
            path: "/",
            component: () => import("../components/console/Login/LoginRegister"),
            meta: {
              title: "DataEasy登录注册页"
            },
            beforeEnter: (to, from, next) => {
                console.log("woc")
                next()
            }
        },
    ]
 */