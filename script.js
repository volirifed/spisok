const TodoItemNewTest = {
    props: ['todo'],
    template: '<li>{{ todo }}</li>'
}

const wachExample = Vue.createApp({
    data() {
        return{
            watchInput:'',
            groceryList: [
                 'Meat',
                 'Vegetables',
                 'Fish'
            ]
        }
    },
    watch: {
         watchInput(inputValue) {
            this.wachInput = inputValue;
         }
    },
    methods: {
        getAnswer() {
            axios
               .get('https://jsonplaceholder.typicode.com/todos/1')
               .then(response => console.log(response.data))
               .catch(error => error)
        },
         addTodo(value) {
             this.groceryList.push(this.wachInput)
        },
         deleteItem(){
             this.groceryList.splice(this.groceryList.length -1 , 1);
        },

         sortList() {
            this.groceryList.sort();
        }
    },
    components: {
        TodoItemNewTest 
    }    
}).mount('#example')