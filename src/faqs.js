
Vue.component('faqs', {
    template: `
        <ul class="list-group" id="faqs-list">
            <li class="list-group-item" v-for="(faq, index) in faqs">
                <span class="glyphicon glyphicon-remove pull-right" v-on:click="remove" v-bind:data-id="faq.id" v-bind:data-index="index"></span>
                <span class="glyphicon glyphicon-pencil pull-right" v-on:click="edit" v-bind:data-id="faq.id" v-bind:data-index="index"></span>
                <h4 class="list-item-heading">{{faq.question}}</h4>
                <p>{{faq.answer}}</p>
            </li>
        </ul>
    `,
    data() {
        return {
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
            // TODO: Can this jQuery be removed?
            $(event.target).siblings("h4").hide();
            $(event.target).siblings("p").hide();

            // TODO: This should really append a VueJS component I think, for the v-bind stuff, and the v-on:click for saving
            $(event.target).parent("li").append(
                $("<input>", { type: "text", id: "question", value: this.faqs[event.target.dataset.index].question }).after($("<br>")),
                $("<input>", { type: "text", id: "answer", value: this.faqs[event.target.dataset.index].answer }),
                $("<button>", { type: "submit", html: "Save" })
            );
        }
    }
});

new Vue({
    el: '#existing-faqs'
});