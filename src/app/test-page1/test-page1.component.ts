import { Component } from '@angular/core';

@Component({
  selector: 'app-test-page1',
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.css']
})
export class TestPage1Component {

  public numberValue:number = 0;
  onClickIncrementValue(){
    this.numberValue++;
  }
  onInputChanged($event:Event){
    console.log("input changed", $event)
  }
}
