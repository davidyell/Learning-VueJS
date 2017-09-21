
Vue.component('faqs', {
    template: `
        <div id="faqs">
            <ul class="list-group" id="faqs-list">
                <faq v-for="(faq, index) in faqs" 
                    v-bind:key="faq.id" 
                    v-bind:id="faq.id" 
                    v-bind:question="faq.question"
                    v-bind:answer="faq.answer"
                    v-bind:index="index"
                    >
                    {{ faq }}
                </faq>
            </ul>
            
            <div class="add">
                <div class="form-group text">
                    <input type="text" class="form-control" name="faq-question" id="faq-question" v-model="newFaq.question">
                </div>
                <div class="form-group textarea">
                    <textarea name="faq-answer" id="faq-answer" class="form-control" v-model="newFaq.answer"></textarea>
                </div>
                <input type="submit" class="btn btn-default btn-block" value="Add" v-on:click="create">
            </div>
        </div>
    `,
    data() {
        return {
            faqs: [
                { id: 5, question: "Why are things like stuff?", answer: "Because", isUpdate: false },
                { id: 9, question: "How many of the things?", answer: "Ooh lots", isUpdate: false },
                { id: 11, question: "What things begin with traffic?", answer: "Traffic cops and traffic cones", isUpdate: false },
                { id: 14, question: "Why are Trout the king of fish?", answer: "We'll they're not Koi about it", isUpdate: false }
            ],
            newFaq: {
                id: null,
                question: "",
                answer: "",
                isUpdate: false
            },
            sortorder: []
        }
    },
    methods: {
        create(event) {
            // -> Would ajax to remote data store to save

            // Clone the object instead of passing by reference
            let faq = JSON.parse(JSON.stringify(this.newFaq));
            this.faqs.push(faq);

            this.newFaq.question = "";
            this.newFaq.answer = "";
        },
        save(event) {
            // -> Would ajax to remote data store to save
            this.faqs[event.target.dataset.index].isUpdate = false;
        }
    },
    mounted() {
        let component = this;

        Sortable.create(document.getElementById("faqs-list"), {
            onSort: function (event) {
                let result = [],
                    items = event.to.children;

                for (let i = 0; i < items.length; i++) {
                    result.push(items[i].dataset.id);
                }

                component.sortorder = result;
            }
        });
    }
});

Vue.component('faq', {
    template: `
        <li class="list-group-item" v-bind:data-id="id">
            <div class="read" v-if="!isUpdate">
                <span class="glyphicon glyphicon-remove pull-right" v-on:click="remove" v-bind:data-id="id" v-bind:data-index="index"></span>
                <span class="glyphicon glyphicon-pencil pull-right" v-on:click="update" v-bind:data-id="id" v-bind:data-index="index"></span>
                <h4 class="list-item-heading">{{question}}</h4>
                <p>{{answer}}</p>
            </div>
            
            <div class="update" v-if="isUpdate">
                <div class="form-group text">
                    <input type="text" class="form-control" name="faq-question" id="faq-question" v-model="question">
                </div>
                <div class="form-group textarea">
                    <textarea name="faq-answer" id="faq-answer" class="form-control" v-model="answer"></textarea>
                </div>
                <input type="submit" class="btn btn-default btn-block" value="Update" v-on:click="save" v-bind:data-index="index">
            </div>
        </li>
    `,
    props: {
        id: {
            required: false
        },
        question: {
            required: true
        },
        answer: {
            required: true
        },
        index: {},
        isUpdate: {
            default: false
        }
    },
    methods: {
        remove(event) {
            // -> Would ajax to remote data store to delete
            this.faqs.splice(event.target.dataset.index, 1);
        },
        update(event) {
            this.faqs[event.target.dataset.index].isUpdate = true;
        },
    }
});

new Vue({
    el: '#existing-faqs'
});