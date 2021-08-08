var app = new Vue({
    el : '#app',
    data : {
        title : "Task list",
        inputNewTask : "",
        items : [
            {text : "Remember childhood and run after butterflies with a hitch"},
            {text : "Go to the forest for berries and mushrooms"},
            {text : "Run barefoot through the grass"},
            {text : "Have a picnic with friends on the riverbank or in the woods"},
            {text : "Bake potatoes at the stake"},
            {text : "Swim in a river or lake"},
        ]
    },
    methods : {
        addItem: function(){
            if(this.inputNewTask != ""){
                this.items.push({text : this.inputNewTask})
                this.inputNewTask = "";
            }
        },
        deleteItem: function(index){
            this.items.splice(index, 1);
        }
    }
});
