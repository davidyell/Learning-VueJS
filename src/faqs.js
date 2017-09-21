
Vue.component('faqs', {
    template: `
        <div>
        <ul class="list-group" id="faqs-list">
            <li class="list-group-item" v-for="(faq, index) in faqs">
                <div class="read" v-if="!isUpdate">
                    <span class="glyphicon glyphicon-remove pull-right" v-on:click="remove" v-bind:data-id="faq.id" v-bind:data-index="index"></span>
                    <span class="glyphicon glyphicon-pencil pull-right" v-on:click="edit" v-bind:data-id="faq.id" v-bind:data-index="index"></span>
                    <h4 class="list-item-heading">{{faq.question}}</h4>
                    <p>{{faq.answer}}</p>
                </div>
                
                <div class="update" v-if="isUpdate">
                    <p><input type="text" name="faq-question" id="faq-question" v-bind:value="faq.question"></p>
                    <p><textarea name="faq-answer" id="faq-answer">{{faq.answer}}</textarea></p>
                    <p><input type="submit" value="Save"></p>
                </div>
            </li>
        </ul>
        </div>
    `,
    data() {
        return {
            isUpdate: false,
            faqs: [
                { id: 5, question: "Why are things like stuff?", answer: "Because" },
                { id: 9, question: "How many of the things?", answer: "Ooh lots" },
                { id: 11, question: "What things begin with traffic?", answer: "Traffic cops and traffic cones" }
            ]
        }
    },
    methods: {
        remove(event) {
            // TODO: Would be an ajax event to delete from db, on success would change VueJS data
            this.faqs.splice(event.target.dataset.index, 1);
        },
        edit(event) {
            // TODO: Would be an ajax event
            this.isUpdate = true;
        }
    }
});

new Vue({
    el: '#existing-faqs'
});