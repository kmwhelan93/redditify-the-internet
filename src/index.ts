import { hello } from "./hello";
import "./main.css";
import "./extra.scss";

const name: string = `Mr. Mike`;
console.log(hello(name));

document.body.innerHTML = `
<div class="content">
  <h1>Welcome to FuseBox!</h1>
</div>`;