import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Profile",
    component: () =>
        import ("../views/Profile.vue"),
    children: [{
            path: "",
            name: "Bio",
            component: () =>
                import ("../components/ProfileBio.vue")
        },
        {
            path: "repos",
            name: "Repos",
            component: () =>
                import ("../components/ProfileRepos.vue")
        },
        {
            path: "certifications",
            name: "Certifications",
            component: () =>
                import ("../components/Certificates.vue"),
            children: [{
                    path: "/",
                    name: "CertificationsList",
                    component: () =>
                        import ("../components/CertificationsList.vue")
                },
                {
                    path: "/certifications/:code",
                    name: "CertificationsList",
                    component: () =>
                        import ("../components/CertificationDoc.vue")
                }
            ]
        }
    ]
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;