
Vue.component('faqs', {
    template: `
        <div>
        <ul class="list-group" id="faqs-list">
            <li class="list-group-item" v-for="(faq, index) in faqs">
                <div class="read" v-if="!faq.isUpdate">
                    <span class="glyphicon glyphicon-remove pull-right" v-on:click="remove" v-bind:data-id="faq.id" v-bind:data-index="index"></span>
                    <span class="glyphicon glyphicon-pencil pull-right" v-on:click="edit" v-bind:data-id="faq.id" v-bind:data-index="index"></span>
                    <h4 class="list-item-heading">{{faq.question}}</h4>
                    <p>{{faq.answer}}</p>
                </div>
                
                <div class="update" v-if="faq.isUpdate">
                    <div class="form-group text">
                        <input type="text" class="form-control" name="faq-question" id="faq-question" v-bind:value="faq.question">
                    </div>
                    <div class="form-group textarea">
                        <textarea name="faq-answer" id="faq-answer" class="form-control">{{faq.answer}}</textarea>
                    </div>
                    <input type="submit" class="btn btn-default btn-block" value="Save" v-on:click="update" v-bind:data-index="index">
                </div>
            </li>
        </ul>
        </div>
    `,
    data() {
        return {
            faqs: [
                { id: 5, question: "Why are things like stuff?", answer: "Because", isUpdate: false },
                { id: 9, question: "How many of the things?", answer: "Ooh lots", isUpdate: false },
                { id: 11, question: "What things begin with traffic?", answer: "Traffic cops and traffic cones", isUpdate: false }
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
            this.faqs[event.target.dataset.index].isUpdate = true;
        },
        update(event) {
            this.faqs[event.target.dataset.index].question = $("#faq-question").val();
            this.faqs[event.target.dataset.index].answer = $("#faq-answer").val();

            this.faqs[event.target.dataset.index].isUpdate = false;
        }
    }
});

new Vue({
    el: '#existing-faqs'
});