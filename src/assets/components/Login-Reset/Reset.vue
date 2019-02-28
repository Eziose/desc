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

            <div class="form-group text-right m-t-20">
                <div class="col-xs-12" style="padding-left: 0;">
                    <a class="btn btn-primary btn-custom w-md waves-effect waves-light login" @click="reset" :reset="isReset">Reset
                    </a>
                </div>
            </div>

            <div class="form-group row m-t-30">
                <div class="col-sm-12 text-center">
                    <router-link :to="{name: 'login'}" class="text-muted go-back">Go back to login page</router-link>
                </div>
            </div>
        </form>
    </div>
</template>


<script>
import VueTelInput from 'vue-tel-input';
import { TheMask } from 'vue-the-mask';

export default {
    name: "Reset",
    components: { VueTelInput, TheMask },
    data () {
        return {
            isReset: false,
            phone: null
        };
    },
    methods: {
        reset () {
            this.isReset = true;
            setTimeout(() => {
                this.$router.push('/login');
            }, 1000);
        }
    },
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
    .go-back:hover {
        cursor: pointer;
        color: #333 !important;
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