<h1>Requirements.css</h1>
<p>This file has the most basic properties which DarkUI use in components and layouts.
<br/>Should not be problematic for developers.
</p>

<p>Example</p>

```sh
*,
*::before,
*::after {
  box-sizing: border-box;
}
:where(*) {
  margin: 0;
  padding: 0;
}
:is(body, #root) {
  width: 100%;
  height: 100vh;
  transition: 200ms;
}

//               Creating CSS Color Variables (_colors.scss)
:root {
  @each $color, $shades in $colors {
    @each $shade, $value in $shades {
      --darkui-clr-#{$color}-#{$shade}: #{$value};
    }
  }
}
```

<h4>Additional Functionality</h4>

<p>if u will add attribute <b>undragable</b> with value <b>true</b> photo will be not dragable by mouse </p>

```sh
:where(img, picture, video, svg) {
  max-inline-size: 100%;

  &[undragable='true'] {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
}
```
