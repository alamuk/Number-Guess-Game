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


### FlatList
  <FlatList
          data={guessRounds}
          renderItem={(itemData) => <Text key={itemData.item.value}>{itemData.item.value}</Text>}
           keyExtractor={(item) => item}
        />


        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <Text key={itemData.item}>{itemData.item}</Text>}
           keyExtractor={(item) => item}
        />