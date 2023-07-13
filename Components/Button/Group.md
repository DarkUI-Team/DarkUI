
> [!Note] About
> `Button.Group` it's function which will make group from buttons inserted as children.
> 
> All props passed in `Button.group` will be inherited by children, you overwrite that by passing props in child

> [!Danger] NOTE!
> To use `Button.Group` you have to import `Button`.

## Usage

```tsx
<Button.Group variant="flat" color="danger">
	<Button>First Button</Button>
	<Button>Second Button</Button>
	<Button variant="primary">Third Button</Button>  {//<--- Overwriten}
</Button.Group>
```

## API reference

### Props

| PROPERT | TYPE             | DEFAULT |
| ------- | ---------------- | ------- |
| tag     | `DynamicType<T>` | 'menu'  |

[[Button#^783072|Rest same as button]]

### Accessibility Props

| **PROPERTY** | **TYPE** | **DEFAULT** |
| ------------ | -------- | ----------- |
|              |          |             |
|              |          |             |

### Keyboard interactions

| NAME  | DESCRIPTION                          | 
| ----- | ------------------------------------ |
| tab   | Move focus on the element or outside |
| enter | Trigger the component action         |
| space | Trigger the component action         |




