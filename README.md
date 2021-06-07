# MouseTextboxAngular

An angular 11.0+ directive that puts a textbox beside the cursor.

## Demo
https://raewintan.github.io/angular-mouse-textbox-demo/

##Usage

**Step 1:** Install angular-mouse-textbox

```sh
npm install angular-mouse-textbox --save
```
**Step 2:** Import angular-mouse-textbox module into your app module
```ts
....
import {AngularMouseTextboxModule} from 'angular-mouse-textbox';

....

@NgModule({
  ....
  imports: [
    ....
    AngularMouseTextboxModule,  
  ],
  ....

})
export class AppModule { }
```

**Step3:** Add HTML code
```html
<div [mousetextbox]="true" [textIn] = "'SOME STUFF'" [zindex]=3></div>
```

**Step4:** Add CSS code at the styles.css at the root of your project
```css
/*You may not see this used in the html code. But the directive uses this css class to set the style of the textbox element*/
.mousetextbox {
  margin: 10px;
  position:fixed;
}
```

## API

| Attribute      | Type   | Description
|----------------|--------|------------
| mousetextbox | boolean | to show textbox at cursor or not
| zindex | number | css z-index property. This takes precedence over the z-index property set in the .mousetextbox class in your styles.css file
| textIn | string | Text to appear at your cursor when [mousetextbox]=true
