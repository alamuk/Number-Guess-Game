# Number Guess Game
[React-native-Core-Components:](https://reactnative.dev/docs/components-and-apis)
[lesson:](https://github.com/academind/react-native-practical-guide-code/tree/05-adaptive-uis/code/06-platform-specific-code)


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


### linear gradient = we will use = expo

[EXPO Gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

we will use = expo install instead of ``npm install``
because it will install a fitting version for our project.
~ npx expo install expo-linear-gradient


image from: Unsplash

#### parseInt() = convert the string to a number.
#### isNaN() = its find out - is it a number or not = true or false.
#### Alert Api
 // Alert.alert('Title,' 'message,' [configure the button]);

#### SafeAreaView: use for keep away from — Notch