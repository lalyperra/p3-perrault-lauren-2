//array of 10 strings that will show with button click
//entree.sort(); will go alphabetically
class LunchGenerator {
    constructor (){
        this.lunchArray = [
        {
            mealTitle: 'Peanut Butter and Jelly',
            mealImage: 'images/pbj.jpg',
            mealDescription: 'Jiff PB with Strawberry Jelly on white bread'
        },
        {
            mealTitle: 'Cheeseburger',
            mealImage: 'images/cheeseburger.jpg',
            mealDescription: 'Single patty with american cheese'
        },
        {
            mealTitle: 'Chicken Strips',
            mealImage: 'images/chickenStrips.jpg',
            mealDescription: '4 chicken strips with ranch sauce'
        },
        {
            mealTitle: 'Pasta Salad',
            mealImage: 'images/pastaSalad.jpg',
            mealDescription: 'Cold pasta salad with tomatoes and pepperoni'
        },
        {
            mealTitle: 'Spaghetti',
            mealImage: 'images/spaghettiMeat.jpg',
            mealDescription: 'Spaghetti with red sauce and meatballs'
        },
        {
            mealTitle: 'Grilled Cheese',
            mealImage: 'images/grilledCheese.jpg',
            mealDescription: 'Grilled white bread with American cheese'
        },
        {
            mealTitle: 'Nachos',
            mealImage: 'images/nachos.jpg',
            mealDescription: 'Nacho chips with hamburger meat and salsa'
        },
        {
            mealTitle: 'Ham and Cheese Sliders',
            mealImage: 'images/hamCheese.jpg',
            mealDescription: 'Hawaiian roles with ham and swiss cheese'
        },
        {
            mealTitle: 'Rice and Bean Burrito',
            mealImage: 'images/beanBurrito.jpg',
            mealDescription: 'Bean burrito with salsa and sour cream'
        },
        {
            mealTitle: 'Chicken Tacos',
            mealImage: 'images/tacos.jpg',
            mealDescription: 'Chicken tacos with salsa and sour cream'
        },
        ];
        
        this.footerText = this.lunchArray;

    }
    sorting(lunchItems) {
        for(let i = this.lunchArray.length-1; i > 0; i--){
            const j = Math.floor(Math.random() * 1)
            const k = this.lunchArray[i]
            this.lunchArray[i] = this.lunchArray[j]
            this.lunchArray[j] = k
        }
    }

    addText() {
        window.onload = ()=> {
            document.getElementById('button').addEventListener('click', () => {
                    this.sorting();
                    document.getElementById('mealTitle').innerHTML = this.lunchArray[0].mealTitle,
                document.getElementById('mealDescription').innerHTML = this.lunchArray[0].mealDescription,
                document.getElementById('mealImage').src = this.lunchArray[0].mealImage;
            });
        }
    }
}

export const lunchGenerator = new LunchGenerator();


