
Vue.component('task-list', {
    template: `
        <ul>
            <task v-for="task in tasks">{{ task.task }}</task>
        </ul>
    `,
    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: true },
                { task: 'Collect mail', complete: false },
                { task: 'Buy pet food', complete: false },
                { task: 'Wash car', complete: false },
                { task: 'Buy birthday card', complete: false },
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#example'
});