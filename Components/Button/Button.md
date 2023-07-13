
> [!dwadwa] About
> Contents

```tsx
import { Button } from '@darkui-team/darkui'
```

## 1.0 Usage
```tsx
<Button>My First Button</Button>
<Button inittime={10000} onClick={()=>skipAd()} isTimmered>Skip ad</Button>
<Button inittime={15000} onClick={()=>Accept()} onNotClick={()=>Deny()} isTimmered>Accept Match</Button>
```

### 1.1 variant
Setup component variant of style.
### primary
### bordered
### flat
### ghost



### 1.2 size
Prebuilded sizes for button (Mix of sizeWidth and sizeHeight)

####  1.2.1 sizeWidth
Changing width size of Button
#### 1.2.2 sizeHeight
Changing height size of button

### 1.3 fontSize
Changing font size at Button

### 1.4 ripple
Ripple Effect after click

### 1.5 cooldown
Cooldown time between click

### 1.6 inittime
State of timer

### 1.7 isTimmered

set Timer type on Timmered. With this u can make 2 types of button.

#### 1.7.1 Scenarios

##### A) If have only onClick
After time will do action onClick
```tsx
<Button inittime={10000} onClick={()=>skipAd()} isTimmered>Skip ad</Button>
```

##### B) With onClick and onNotClick
If user will click in time -> onClick
After time -> onNotClick
```tsx
<Button inittime={15000} onClick={()=>Accept()} onNotClick={()=>Deny()} isTimmered>
	Join to  Match
</Button>
```



### 1.8 isLoading
Set loading state of button.
### 1.9 loadingType
set loadingType
### 1.9.1 default
### 1.9.2 spinner
### 1.9.3 Points [+ opacity])
### 1.9.4 Gradient







## 2.0 Usage of Component
[Button component | Orbit](https://orbit.kiwi/components/action/button/)

## 3.0 Do and Donts


## 4.0 API reference


### 4.1 Props

| **PROPERTY**       | **TYPE**                   | **DEFAULT**                                                       |
| ------------------ | -------------------------- | ----------------------------------------------------------------- |
| variant?           | [[Types#^83349c\|variant]] | 'primary'                                                         |
| size?              | [[sizes]]                      | md                                                                |
| sizeWidth?         | sizes                      | -                                                                 |
| sizeHeight?        | sizes                      | -                                                                 |
| fontSize?          | fontSizes                  | -                                                                 |
| ripple?            | boolean                    | true                                                              |
| cooldown?          | number                     | 0                                                                 |
| inittime?          | Tinittime                  | { value: 0, timeUnit: 'ms', type: 'cooldown', refreshTime: 1000 } |
| isTimmered?        | boolean,'true','false'     | false                                                             |
| isLoading?         | boolean,'true','false'     | false                                                             |
| onNotClick?        | Function                   | -                                                                 |
| loadingType?       | loadingTypes               |                                                                   |
| color?             | colors                     |                                                                   |
| border?            | border                     |                                                                   |
| shape?             | shape                           |                                                                   |
| animation?         |                            |                                                                   |
| animationDuration? |                            |                                                                   |
| tag                | `DynamicType<T>`             | 'button'                                                          |
| asset              |                            |                                                                   |
| children           |                            | 'Button'                                                          |
| tabIndex           |                            | 0                                                                 |
| disabled                   |                            |                                                                   |




### 4.2 Accessibility Props

| **PROPERTY** | **TYPE** | **DEFAULT** |
| ------------ | -------- | ----------- |
|              |          |             |
|              |          |             |

### 4.3 Keyboard interactions

| NAME  | DESCRIPTION                          | 
| ----- | ------------------------------------ |
| tab   | Move focus on the element or outside |
| enter | Trigger the component action         |
| space | Trigger the component action         |













# IN SOON
## AnimationsL
### onHover
### active