Vue.component('tabs', {
    template: `
        <div>
            <div class="tabs">
              <ul>
                <li v-for="tab in tabs" v-bind:class="{ 'is-active': tab.isActive }">
                    <a v-bind:href="tab.href" v-on:click="selectTab(tab)">{{ tab.name }}</a>
                </li>
              </ul>
            </div>
            <div class="tab-details">
                <slot></slot>
            </div>
        </div>
    `,
    data() {
        return {
            tabs: []
        };
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(clickedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name === clickedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    props: {
        name: {
            required: true
        },
        selected: {
            default: false
        }
    }, 
    template: `
        <div v-show="isActive"><slot></slot></div>
    `,
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/[^\w\d]+/g, '-');
        }
    },
    mounted() {
        this.isActive = this.selected
    }
});

new Vue({
    el: '#example'
});