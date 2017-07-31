Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" v-on:blur="onCouponApplied">',
    methods: {
        onCouponApplied() {
            this.$emit('applied');
        }
    }
});

new Vue({
    el: '#example',
    data: {
        couponApplied: false
    },
    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});