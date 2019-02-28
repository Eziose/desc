<template>
  <div class="wrapper" v-if="!$route.meta.public">
    <div class="topbar">

      <!-- LOGO -->
      <div class="topbar-left">
        <div class="text-center">
          <a href="index.html" class="logo"><i class="mdi mdi-radar"></i> <span>HealthyRay</span></a>
        </div>
      </div>

      <!-- Button mobile view to collapse sidebar menu -->
      <nav class="navbar-custom">

        <ul class="list-inline float-right mb-0">

          <li class="list-inline-item notification-list hide-phone">
            <a class="nav-link waves-light waves-effect" href="#" id="btn-fullscreen">
              <i class="mdi mdi-crop-free noti-icon"></i>
            </a>
          </li>

          <li class="list-inline-item notification-list">
            <a class="nav-link right-bar-toggle waves-light waves-effect" href="#">
              <i class="mdi mdi-dots-horizontal noti-icon"></i>
            </a>
          </li>

          <li class="list-inline-item dropdown notification-list">
            <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button"
               aria-haspopup="false" aria-expanded="false">
              <i class="mdi mdi-bell noti-icon"></i>
              <span class="badge badge-pink noti-icon-badge">4</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg" aria-labelledby="Preview">
              <!-- item-->
              <div class="dropdown-item noti-title">
                <h5 class="font-16"><span class="badge badge-danger float-right">5</span>Notification</h5>
              </div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <div class="notify-icon bg-success"><i class="mdi mdi-comment-account"></i></div>
                <p class="notify-details">Robert S. Taylor commented on Admin<small class="text-muted">1 min ago</small></p>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <div class="notify-icon bg-info"><i class="mdi mdi-account"></i></div>
                <p class="notify-details">New user registered.<small class="text-muted">1 min ago</small></p>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <div class="notify-icon bg-danger"><i class="mdi mdi-airplane"></i></div>
                <p class="notify-details">Carlos Crouch liked <b>Admin</b><small class="text-muted">1 min ago</small></p>
              </a>

              <!-- All-->
              <a href="javascript:void(0);" class="dropdown-item notify-item notify-all">
                View All
              </a>

            </div>
          </li>

          <li class="list-inline-item dropdown notification-list">
            <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button"
               aria-haspopup="false" aria-expanded="false">
              <img src="../src/assets/images/users/avatar-1.jpg" alt="user" class="rounded-circle">
            </a>
            <div class="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview">
              <!-- item-->
              <div class="dropdown-item noti-title">
                <h5 class="text-overflow"><small>Welcome ! John</small> </h5>
              </div>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-account"></i> <span>Profile</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-settings"></i> <span>Settings</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-lock-open"></i> <span>Lock Screen</span>
              </a>

              <!-- item-->
              <a href="javascript:void(0);" class="dropdown-item notify-item">
                <i class="mdi mdi-logout"></i> <span>Logout</span>
              </a>

            </div>
          </li>

        </ul>

        <ul class="list-inline menu-left mb-0">
          <li class="float-left">
            <button class="button-menu-mobile open-left waves-light waves-effect" @click="humb" id="sidebarCollapse">
              <i class="mdi mdi-menu"></i>
            </button>
          </li>
          <li class="hide-phone app-search">
            <form role="search" class="">
              <input type="text" placeholder="Search..." class="form-control">
              <a href="" class="search-icon"><i class="fa fa-search"></i></a>
            </form>
          </li>
        </ul>

      </nav>

    </div>
    <div class="left side-menu" id="sidebar">
      <div class="sidebar-inner slimscrollleft">
        <!--- Divider -->
        <div id="sidebar-menu">
          <ul>
            <li class="menu-title">Main</li>

            <li>
              <router-link :to="{name: 'Dashboard'}" class="waves-effect waves-primary">
                <i class="ti-home"></i><span> Dashboard </span>
              </router-link>
            </li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect waves-primary">
                <i class="ti-shine"></i><span> Apps </span>
                <span class="badge badge-pink pull-right">New</span>
              </a>
              <ul class="list-unstyled">
                <li><a href="apps-kanban.html">Kanban Board</a></li>
                <li><a href="apps-companies.html">Companies</a></li>
                <li><a href="apps-filemanager.html">File Manager</a></li>
                <li><a href="apps-tickets.html">Tickets</a></li>
                <li><a href="apps-calendar.html">Calendar</a></li>
                <li><a href="apps-team.html">Team Members</a></li>
              </ul>
            </li>

            <li class="has_sub nav-item nav-dropdown">
              <a href="javascript:void(0);" class="waves-effect waves-primary nav-link nav-dropdown-toggle" @click="submenu">
                <i class="ti-email"></i><span> Mail </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="list-unstyled nav-dropdown-items">
                <li class="nav-item"><a href="mail-inbox.html">Inbox</a></li>
                <li class="nav-item"><a href="mail-compose.html">Compose Mail</a></li>
                <li class="nav-item"><a href="mail-read.html">View Mail</a></li>
              </ul>
            </li>
            <li class="has_sub">
              <a class="waves-effect waves-primary" @click="submenu">
                <i class="ti-paint-bucket"></i> <span> UI Kit </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="list-unstyled">
                <li><router-link :to="{name: 'buttons'}">Buttons</router-link></li>
                <li><router-link :to="{name: 'cards'}">Cards</router-link></li>
                <li><a href="ui-portlets.html">Portlets</a></li>
                <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
                <li><a href="ui-tabs.html">Tabs & Accordions</a></li>
                <li><a href="ui-modals.html">Modals</a></li>
                <li><a href="ui-progressbars.html">Progress Bars</a></li>
                <li><a href="ui-notification.html">Notification</a></li>
                <li><a href="ui-bootstrap.html">BS Elements</a></li>
              </ul>
            </li>

            <li>
              <router-link :to="{name: 'Typography'}" class="waves-effect waves-primary">
                <i class="ti-infinite"></i><span> Typography </span>
              </router-link>
            </li>

            <li class="has_sub" >
              <a href="javascript:void(0);" class="waves-effect waves-primary" @click="submenu">
                <i class="ti-light-bulb"></i>Components
                <span class="menu-arrow"></span>
              </a>
              <ul class="list-unstyled">
                <li><a href="components-grid.html">Grid</a></li>
                <li><a href="components-carousel.html">Carousel</a></li>
                <li><a href="components-widgets.html">Widgets</a></li>
                <li><a href="components-nestable-list.html">Nesteble</a></li>
                <li><a href="components-range-sliders.html">Range Sliders </a></li>
                <li><a href="components-sweet-alert.html">Sweet Alerts </a></li>
              </ul>
            </li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect waves-primary" @click="submenu">
                <i class="ti-pencil-alt"></i><span> Forms </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="list-unstyled">
                <li><router-link :to="{name: 'formElements'}">General Elements</router-link></li>
                <li><router-link :to="{name: 'formAdvanced'}">Advanced Form</router-link></li>
                <li><a href="form-validation.html">Form Validation</a></li>
                <li><a href="form-wizard.html">Form Wizard</a></li>
                <li><a href="form-wysiwig.html">WYSIWYG Editor</a></li>
                <li><a href="form-summernote.html">Summernote</a></li>
                <li><a href="form-uploads.html">Multiple File Upload</a></li>
                <li><a href="form-xeditable.html">X-editable</a></li>
              </ul>
            </li>

            <li class="menu-title">More</li>

            <li class="has_sub">
              <router-link :to="{name: 'table'}" class="waves-effect waves-primary">
                <i class="ti-menu-alt"></i><span> Tables </span>
              </router-link>
            </li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect waves-primary" @click="submenu">
                <i class="ti-stats-up"></i><span> Charts </span>
                <span class="badge badge-primary pull-right">8</span>
              </a>
              <ul class="list-unstyled">
                <li><a href="chart-flot.html">Flot Chart</a></li>
                <li><a href="chart-morris.html">Morris Chart</a></li>
                <li><a href="chart-chartist.html">Chartist chart</a></li>
                <li><a href="chart-nvd3.html">Nvd3 charts</a></li>
                <li><a href="chart-chartjs.html">Chartjs charts</a></li>
                <li><a href="chart-peity.html">Peity Charts</a></li>
                <li><a href="chart-sparkline.html">Sparkline Charts</a></li>
                <li><a href="chart-other.html">Other Chart</a></li>
              </ul>
            </li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect waves-primary" @click="submenu">
                <i class="ti-map"></i><span> Maps </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="list-unstyled">
                <li><a href="map-google.html"> Google Maps</a></li>
                <li><a href="map-vector.html"> Vector Maps</a></li>
                <li><a href="map-mapael.html"> Mapael Maps</a></li>
              </ul>
            </li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect waves-primary" @click="submenu">
                <i class="ti-spray"></i> <span> Icons </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="list-unstyled">
                <li><a href="icons-materialdesign.html">Material Design</a></li>
                <li><a href="icons-themifyicon.html">Themify Icons</a></li>
                <li><a href="icons-ionicons.html">Ion Icons</a></li>
                <li><a href="icons-fontawesome.html">Font awesome</a></li>
                <li><a href="icons-weather.html">Weather Icons</a></li>
              </ul>
            </li>

            <li class="menu-title">Extras</li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect waves-primary" @click="submenu">
                <i class="ti-files"></i><span> Pages </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="list-unstyled">
                <li><a href="pages-blank.html">Blank Page</a></li>
                <li><a href="pages-login.html">Login</a></li>
                <li><a href="pages-register.html">Register</a></li>
                <li><a href="pages-recoverpw.html">Recover Password</a></li>
                <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                <li><a href="pages-confirmmail.html">Confirm Mail</a></li>
                <li><a href="pages-404.html">404 Error</a></li>
                <li><a href="pages-500.html">500 Error</a></li>
              </ul>
            </li>

            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect waves-primary" @click="submenu">
                <i class="ti-gift"></i><span> Extras </span>
                <span class="badge badge-success pull-right">10</span>
              </a>
              <ul class="list-unstyled">
                <li><a href="extras-profile.html">Profile</a></li>
                <li><a href="extras-timeline.html">Timeline</a></li>
                <li><a href="extras-invoice.html">Invoice</a></li>
                <li><a href="extras-email-template.html">Email template</a></li>
                <li><a href="extras-maintenance.html">Maintenance</a></li>
                <li><a href="extras-coming-soon.html">Coming-soon</a></li>
                <li><a href="extras-gallery.html">Gallery</a></li>
                <li><a href="extras-pricing.html">Pricing</a></li>
                <li><a href="extras-faq.html">FAQ</a></li>
                <li><a href="extras-treeview.html">Treeview</a></li>
              </ul>
            </li>
            <li class="has_sub">
              <a href="javascript:void(0);" class="waves-effect">
                <i class="ti-share"></i><span>Multi Level </span>
                <span class="menu-arrow"></span>
              </a>
              <ul>
                <li class="has_sub">
                  <a href="javascript:void(0);" class="waves-effect"><span>Menu Level 1.1</span>  <span class="menu-arrow"></span></a>
                  <ul>
                    <li><a href="javascript:void(0);"><span>Menu Level 2.1</span></a></li>
                    <li><a href="javascript:void(0);"><span>Menu Level 2.2</span></a></li>
                    <li><a href="javascript:void(0);"><span>Menu Level 2.3</span></a></li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);"><span>Menu Level 1.2</span></a>
                </li>
              </ul>
            </li>
          </ul>


          <div class="clearfix"></div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="content-page">
      <!-- Start content -->
      <div class="content">
          <router-view></router-view>
      </div>
    </div>
  </div>
  <div class="wrapper" v-else-if="$route.meta.public">
    <Login v-if="$route.name === 'login'"></Login>
    <Reset v-if="$route.name === 'reset'"></Reset>
    <NotFound v-if="$route.name === '404'"></NotFound>
    <Error v-if="$route.name === '500'"></Error>
    <Denny v-if="$route.name === '403'"></Denny>
  </div>
</template>

<script>
import Login from '../src/assets/components/Login-Reset/Login'
import Reset from '../src/assets/components/Login-Reset/Reset'
import NotFound from '../src/assets/components/Pages/404'
import Error from '../src/assets/components/Pages/Error'
import Denny from '../src/assets/components/Pages/Denny'

export default {
  name: 'app',
  components: {Login, Reset, NotFound, Error, Denny},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isLoading: false,
      currentRoute: window.location.pathname
    }
  },
  mounted () {
  },
  methods: {
    cards () {
      console.log('click')
      this.$router.push({name: 'cards'})
    },
    submenu (e) {
      e.stopPropagation()
      if ( $(e.target).hasClass('waves-effect')) {
        $(e.target).children('.menu-arrow').toggleClass('sumbenu-arrow')
        $(e.target).siblings().toggleClass('submenu')
      } else {
        console.log($(e.target))
        $(e.target).toggleClass('sumbenu-arrow')
        $(e.target).parent().siblings().toggleClass('submenu')
      }
    },
    humb () {
       $('#sidebar').toggleClass('active');
       $('.content-page').toggleClass('content-page-close');
    }
  }
}
</script>
<style scoped>
  /*
      DEMO STYLE
  */

  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
  body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
  }

  a,
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
  }
  .submenu {
    display: block !important;
  }
  .sumbenu-arrow {
    -webkit-transform: rotate(90deg) !important;
    transform: rotate(90deg) !important;
  }
  .navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
  }

  .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
  }

  /* ---------------------------------------------------
      SIDEBAR STYLE
  ----------------------------------------------------- */

  .wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  #sidebar {
    transition: all 0.3s;
  }
  #sidebar-menu {
    overflow: auto;
    height: 100%;
    padding-top: 0;
    padding-bottom: 75px;
  }
  #sidebar.active {
    margin-left: -250px;
  }

  #sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
  }

  #sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
  }

  #sidebar ul p {
    color: #fff;
    padding: 10px;
  }

  #sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
  }

  #sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
  }

  #sidebar ul li.active>a,
  a[aria-expanded="true"] {
    color: #fff;
  }

  a[data-toggle="collapse"] {
    position: relative;
  }

  .dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  ul ul a {
    font-size: 0.9em !important;
  }

  ul.CTAs {
    padding: 20px;
  }

  ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  a.download {
    background: #fff;
    color: #7386D5;
  }

  a.article,
  a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
  }

  /* ---------------------------------------------------
      CONTENT STYLE
  ----------------------------------------------------- */

  #content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
  }

  /* ---------------------------------------------------
      MEDIAQUERIES
  ----------------------------------------------------- */

  @media (min-width: 320px) and (max-width: 768px) {
    #sidebar {
      margin-left: -250px;
    }
    #sidebar.active {
      margin-left: 0;
    }
    #sidebarCollapse span {
      display: none;
    }
  }
  .search-icon {
    color: #fff !important;
  }
  .content-page-close {
    margin-left: 0;
    transition: all 0.5s ease-in-out;
  }
  #sidebar-menu ul ul a{
    color: rgba(255, 255, 255, 0.5);
    display: block;
    padding: 10px 20px 10px 50px;
    font-size: 0.9rem
  }
</style>

