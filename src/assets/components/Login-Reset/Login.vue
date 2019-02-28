<template>
    <div class="wrapper-page">
    <div class="text-center" style="margin-bottom: 30px;">
        <a href="#" class="logo-lg"><img src="../../images/clearlab.png" alt=""></a>
    </div>
    <form class="form-horizontal m-t-20" action="index.html">

        <div class="form-group row">
            <div class="col-12">
                <div class="input-group">
                    <vue-tel-input v-model="phone" class="tel" defaultCountry="in" v-mask="'+91 #### ######'"></vue-tel-input>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-12">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="mdi mdi-radar"></i></span>
                    </div>
                    <input class="form-control" type="password"  placeholder="Password">
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-12">
                <div class="checkbox checkbox-primary">
                    <input id="checkbox-signup" type="checkbox">
                    <label for="checkbox-signup">
                        Remember me
                    </label>
                </div>

            </div>
        </div>

        <div class="form-group text-right m-t-20">
            <div class="col-xs-12" style="padding-left: 0;">
                <a class="btn btn-primary btn-custom w-md waves-effect waves-light login" @click="login" :loading="loading">Log In
                </a>
            </div>
        </div>

        <div class="form-group row m-t-30">
            <div class="col-sm-9">
                <router-link :to="{name: 'reset'}" class="text-muted"><i class="fa fa-lock m-r-5"></i> Forgot your
                    password?</router-link>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
import VueTelInput from 'vue-tel-input';
import { TheMask } from 'vue-the-mask';

export default {
  name: 'Login',
  components: { VueTelInput, TheMask },
  data () {
    return {
      loading: false,
      phone: null,
      remember: null
    }
  },
  methods: {
    login () {
      this.loading = true;
      setTimeout(() => {
          this.$router.push({ path: '/', redirect: '/dashboard' })
      }, 1000);
    },
  }
}
</script>

<style scoped>
    .wrapper-page {
        background: #fff;
        padding: 25px;
    }
    .tel {
        width: 310px;
        height: 38px;
    }
    .login {
        width: 310px;
        height: 38px;
        color: #fff !important;
    }
    .input-group:focus {
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        border-color: #66afe9;
    }
    .form-control:focus {
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        border-color: #66afe9;
    }
    .input-group-prepend {
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);
        border-color: #66afe9;
    }
    .vue-tel-input{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);}
</style>

