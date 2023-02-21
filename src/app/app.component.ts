import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // Values to display components with buttons
  showParentToChild = false;
  showParentToChildSetter = false;
  showParentToChildOnChanges = false;
  showChildToParent = false;
  showParentToChildLocalVar = false;
  showParentToViewChild = false;
  showBidirectionalService = false;

  // Functions to toggle components with buttons
  toggleParentToChild() {
    this.showParentToChild = !this.showParentToChild;
    console.log(`DEBUG: showParentToChild = ${this.showParentToChild}`)
  }
  toggleParentToChildSetter() {
    this.showParentToChildSetter = !this.showParentToChildSetter;
  }
  toggleParentToChildOnChanges() {
    this.showParentToChildOnChanges = !this.showParentToChildOnChanges;
  }
  toggleChildToParent() {
    this.showChildToParent = !this.showChildToParent;
  }
  toggleParentToChildLocalVar() {
    this.showParentToChildLocalVar = !this.showParentToChildLocalVar;
  }
  toggleParentToViewChild() {
    this.showParentToViewChild = !this.showParentToViewChild;
  }
  toggleBidirectionalService() {
    this.showBidirectionalService = !this.showBidirectionalService;
  }
 }
