import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipe = true;
  shoppingList = false;

  onLinkClicked(clickedFeature: string) {
    if (clickedFeature === 'Recipe') {
      this.recipe = true;
      this.shoppingList = false;
    } else {
      this.recipe = false;
      this.shoppingList = true;
    }
  }
}
