import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() clickedLink = new EventEmitter<string>();

  onRecipeClick() {
    this.clickedLink.emit('Recipe');
  }

  onShoppingListClick() {
    this.clickedLink.emit('Shopping');
  }

}
