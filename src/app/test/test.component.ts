import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name: string = "RockStar";
  public siteUrl = window.location.href;
  public type = typeof(this.siteUrl);
  public myId = "testId";
  public isDisabled: boolean = false;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;

  public styleBindColor = "purple";
  public styles = {
    color: "orange",
    fontStyle: "italic"
  }

  public classes = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-italic": this.isSpecial
  }

  public color = "cyan";
  public colors = [ "red", "green", "blue", "wooden" ];

  constructor() { }

  ngOnInit() {
  }

  greetUser(event) {
    console.log(event);

    // alert("Hello " + this.name);
  }

  logger(value) {
    console.log(value);
  }

}
