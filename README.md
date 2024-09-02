# Number Guess Game
[React-native-Core-Components:](https://reactnative.dev/docs/components-and-apis)

- Project
[Lesson:](https://github.com/academind/react-native-practical-guide-code/tree/05-adaptive-uis/code/06-platform-specific-code)


### box shadow:
- android: elevation:
- iso: shadowColor: , shadowOpacity: , shadowOffset:, shadowRadius:


### Margin
For the same amount space
- marginVertical: top and bottom
- marginHorizontal: left and right

### `Pressable` instated of `Touchable` recommended.

### android button wave effect
android_ripple={{color: }}
view container need to be outside as a container.


### array of styles:
anything pressable, we can use [] of styles in it.

### keep the button size same we can use view container for every button separately.
and give style.
flex: one
flex: 1, how does it work?
- if it is a row - then whole space from width.
- if it is a column - then whole space from height.
- if there are two elements in the container, then these will share the space.


### View = only takes space as much as its content needs. = must remember.
for whole screens = we can use flex: 1


`linear gradient = we will use = expo`

[EXPO Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

we will use = expo install instead of ``npm install``
because it will install a fitting version for our project.
~ `npx expo install expo-linear-gradient`


image from: Unsplash

#### parseInt() = convert the string to a number.
#### isNaN() = its find out - is it a number or not = true or false.
#### Alert Api
 Alert.alert('Title,' 'message,' [configure the button]);

#### SafeAreaView: use it to keep away from — Notch

### style as a prop
we can use an array of styles when we use style as a prop.
in the Array style, the first item will be default style and second item for over wright style.

```function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}```



### Expo Vector Icon
[Expo Icon:](https://docs.expo.dev/guides/icons/)
[BuiltIn-Icon](https://icons.expo.fyi/Index)
- Ionicons - is good icon - choose from filter

  ``<Ionicons name="md-remove" size={}  color=''/>``

 ### Expo font:
 https://docs.expo.dev/versions/latest/sdk/font/



  1. `expo install expo-font`

  import { useFont} from 'expo-font'

  [how to use expo font](https://docs.expo.dev/develop/user-interface/fonts/)

  2. also we need to install for font.
  ``expo install expo-splash-screen``

 `import * as SplashScreen from 'expo-splash-screen';

###How to create circle image:
``height: 200
width:100
borderRadius: 100``
- image height and width will be same and BorderRadius will be half of them(height and width)

Make Image Centre:
two options:
1. Image and text container:
 ```rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },```

2. image container:

```marginVertical: 36,
   marginLeft: 'auto',
   marginRight: 'auto',```

HighLight a word in Text:
we will use an extra Text component around the word which we want to highlight.

Text inside the Text gets the font size from the parent Text component.

### Map for list item
{guessRounds.map((guessRound) => (<Text key={guessRound}>{guessRound}</Text>))}


### FlatList
``<FlatList
data={guessRounds}
renderItem={(itemData) => <Text key={itemData.item.value}>{itemData.item.value}</Text>}
keyExtractor={(item) => item}/>``


``<FlatList
data={guessRounds}
renderItem={(itemData) => <Text key={itemData.item}>{itemData.item}</Text>}
keyExtractor={(item) => item}/>``



## Designing and tailoring the user interface for various platforms and devices.
1. Execute Platform-specific code
2. Adjust different Device Sizes
3. Building Adaptive Components

Note: this affects spaces so:
- this will work with
1. Margin
2. Padding
3. fontSize
4. borderRadius

### width and height with % and width value
`maxWidth: '80%'
width: 300`
// we will take 300px only if there is enough space. otherwise, it will be max 80% of the available space.
// this measurement will always be with the parent container that holds the elements.


### Dimension api. 
this works with only width or height
it comes with get() and it includes string either screen or window
- window excludes the status bar / screen includes the status bar.
``const deviceWidth = Dimensions.get('window').``

we use this with if condition or ternary operator.
`padding: deviceWidth < 450 ? 12 : 24`


### For Image: Dimensions Api

hard coded of the image width is not a good idea. because we don't know which in device app will be running.
like:
` imageContainer: {
     width: '300',
     height: '300',
   },
   image: {
       width: '100%',
       height: '100%',
     },
`

if it is says:
width: '50%',
height: '50%',
here amounts are same but actually there are different in values. so % value is the good option here.
so we need to use had coded value here with dimension api.

Better use:
` imageContainer: {
width: deviceWidth < 380 ? 150 : 300,
height: deviceWidth < 380? 150 : 300,
borderRadius: deviceWidth < 380 ? 75 : 150,
   },
   image: {
       width: '100%',
       height: '100%',
     },
`


## Rotating App

- change in the App.json
 `"orientation": "default"`,
   instead of`"orientation": "portrait,"`

   change the Orientation: to default. then the app will rotate.

   any code for device orientation should go in to the component function,
   otherwise it will only once the comparison first starts after that it will not work.

   in that case, we always use `useWindowDimension` hook for orientation not the dimension.
   `const {width, height} = useWindowDimension()`

  - this hook will watch the dimension when the device is rotated.
    `const {width, height} = useWindowDimension()
    const marginTopDistance = height < 380? 30 : 100;`

    ` style={[styles.rootContainer, { marginTop: marginTopDistance }]}`


    ### KeyboardAvoidingView
    this will help to up the content when the keyboard in the screen for landscape
 needs to wrap all the content inside the component JSX
    also need to wrap ScrollView on the top.


`
 <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">

      < Other jsx>

      </KeyboardAvoidingView>
</ScrollView>
`


``const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

``

  ## Making UI for image in landscape mode
```
 const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  ```


  ## platform Api
    // borderWidth: 2,
   // borderWidth: Platform.OS === 'ios' ? 2 : 1,

   The Best way to use Platform:
    ``borderWidth: Platform.select({ ios: 0, android: 2 }),``


    we also can write a Platform specific file.
    for example:
    Title.ios.js
    Title.android.js


    ### expo status bar

platform specific