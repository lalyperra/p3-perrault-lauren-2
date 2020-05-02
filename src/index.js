import "./main.css";
import { headerText } from "./modules/header";
import { footerContent } from "./modules/footer";
import { lunchGenerator } from "./modules/lunch-generator";

// Create a method for this class called APP renderTemplate()
//Inside of this method, utilize ES6 template strings to build out an index.html structure 
class App {
    constructor() {
        lunchGenerator.addText();
        footerContent.addText();
        this.renderTemplate();
        }
        
        renderTemplate() {
        const template = ` 
            <div>
            <h1> School Lunch Generator</h1>
                <h2>What's in Your Food Tray?</h2>
                <button onclick="myFunction1()">View Entrees (random order)</button>

                <p id="entree"> </p>

                <h2>Sides</h2>
                <div class="row">
                    <figure class="column"> <img src="images/carrots.jpeg" alt="carrots">
                        <figcaption>Crunchy Carrots</figcaption>
                    </figure>

                        <figure class="column"> <img src="images/fruitCup.jpg" alt="fruit cup">
                            <figcaption>Fresh Fruit Cup</figcaption>
                     </figure>

                            <figure class="column"> <img src="images/laysChips.jpg" alt="chips">
                                <figcaption>Lays Chips</figcaption>
                     </figure>

                </div>
                `;

        document.body.innerHTML = template;
     }
}

const lunchApp = new App();
lunchApp.renderTemplate();
