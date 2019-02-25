<template>
    <navbar>
        <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">
            &#9776;
        </button>
        <a class="navbar-brand" href="#"></a>
        <ul class="nav navbar-nav d-md-down-none">
            <li class="nav-item">
                <a class="nav-link navbar-toggler sidebar-toggler" href="#" @click="sidebarMinimize"><i
                        class="fa fa-bars"></i></a>
            </li>
        </ul>
        <ul class="nav navbar-nav ml-auto profile">
            <dropdown size="nav" class="nav-item">
                <span slot="button">
                  <img src="../../images/avatar-1.jpg" class="img-avatar">
                  <span class="d-md-down-none">Ihor Lazarev</span>
                </span>
                <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                    <div class="dropdown-header text-center"><strong></strong></div>

                    <router-link :to="'/account/profile'" class="dropdown-item"><i class="fa fa-user"></i>
                    </router-link>
                    <div class="divider"></div>
                    <a class="dropdown-item" @click="logout()"><i class="fa fa-lock"></i></a>
                </div>
            </dropdown>
        </ul>
    </navbar>
</template>
<script>

    import navbar from './Navbar'
    import { dropdown } from 'vue-strap'


    export default {
        name: 'header',
        components: {
            navbar,
            dropdown
        },
        data () {
            return {
            }
        },
        methods: {
            sidebarToggle (e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-hidden')
            },
            sidebarMinimize (e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-minimized')
            },
            mobileSidebarToggle (e) {
                e.preventDefault()
                document.body.classList.toggle('sidebar-mobile-show')
            }
        }
    }
</script>
