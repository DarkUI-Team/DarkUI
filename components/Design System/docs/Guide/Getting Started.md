<h1>Getting started</h1>

<p>Welcome in DarkUI documentation!
<br>With DarkUI your websites will look beatiful and work fast.
<br>There everything start, so lets go!</p>

<h4>Installation</h4>

<p>On start your project we have to download and configure DarkUI.
<br>There is some steps:
<br/>First what we have to do it's <b>Download DarkUI</b> using npm or yarn </p>

```sh
npm @darkui-team/darkui
```

```sh
yarn add @darkui-team/darkui
```

<h4>Setup</h4>

<p>To Setup our Design System we have to import our Context Provider and </p>

<h4>Configuration</h4>

<p>After setup we have to configure our Design System to work properly.<br>
DarkUI it's not styling only components. It can style other thing too (like selection colors etc.)
</p>

<h4>Requirements</h4>
<p>This SCSS file is requirement to correct work. 
<br/>If you want to know what's inside check `Api/Files/Requirement.css`</p>

```sh
import { Requirements } from "darkui";
Requirements();
```

<h5>Normalize.css</h5>

<p>DarkUI have own build in Normalize.css file which will Reset and Normalize in every browser CSS Styles to look same.<br/>

You can load builded Normalize.css or import your own!<br/>
To setup builded Normalize u have to import him and execute.</p>

```sh
import { Normalize } from "darkui";
Normalize();
```

<h4>DarkUI style.css</h4>
<p>Dark UI has own style.css which change ::selector colors and other pseudoclass etc.</p>
