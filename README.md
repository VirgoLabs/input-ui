# Input Component

This is a versatile and customizable **Input** component for React Native, suitable for use in any project built with Expo or React Native. It supports multiple variants, validation, icons, and accessibility features, making it a robust choice for input fields in your application.

## Features

- Multiple input variants (`underline`, `outlined`, `ghost`) for flexible design.
- Built-in validation support with custom rules and error messages.
- Dynamic theming for light and dark mode.
- Icons on the left or right, with customizable behavior.
- Secure text entry (e.g., password fields) with toggle visibility.
- Loading and disabled states for interactive and non-interactive fields.
- Full support for additional props of the native `TextInput`.

## Installation

To use the **Input Component**, ensure the following dependencies are installed:

```bash
npm install react-native
npm install @expo/vector-icons
```

If you're using Expo, the `Ionicons` package should already be included. Otherwise, install it via:

```bash
npm install @expo/vector-icons
```

Copy the `Input` component code into your project, along with the `Colors.ts` file for dynamic theming.

## Usage

Here’s an example of how to use the **Input Component**:

```tsx
import React from "react";
import { View } from "react-native";
import Input from "@/components/Input";

const App = () => {
    const handleValidation = (isValid: boolean) => {
        console.log(`Input valid: ${isValid}`);
    };

    return (
        <View style={{ padding: 20 }}>
            <Input
                label="Username"
                placeholder="Enter your username"
                validationRules={[
                    { validate: (value) => value.length > 0, errorMessage: "Field cannot be empty" },
                    { validate: (value) => value.length >= 3, errorMessage: "Minimum 3 characters required" },
                ]}
                secureTextEntry={false}
                onValidationComplete={handleValidation}
                variant="outlined"
                leftIcon={<Ionicons name="person" size={20} color="gray" />}
                rightIcon={<Ionicons name="checkmark-circle" size={20} color="green" />}
            />
        </View>
    );
};

export default App;
```

## Input Props

| Prop                 | Type                      | Default Value   | Description                                                                                  |
|----------------------|---------------------------|-----------------|----------------------------------------------------------------------------------------------|
| `label`              | `string`                  | `null`          | Label displayed above the input field.                                                       |
| `value`              | `string`                  | `""`            | The value of the input field.                                                                |
| `defaultValue`       | `string`                  | `""`            | Initial default value of the input field.                                                    |
| `validationRules`    | `ValidationRule[]`        | `[]`            | Array of validation rules with functions and error messages.                                 |
| `isLoading`          | `boolean`                 | `false`         | Shows a loading spinner if `true`.                                                          |
| `isDisabled`         | `boolean`                 | `false`         | Makes the input field non-editable and disabled if `true`.                                   |
| `isReadOnly`         | `boolean`                 | `false`         | Makes the input field read-only if `true`.                                                   |
| `variant`            | `"underline" \| "outlined" \| "ghost"` | `"underline"` | Style variant of the input field.                                                           |
| `leftIcon`           | `React.ReactNode`         | `null`          | Icon to display on the left of the input field.                                              |
| `rightIcon`          | `React.ReactNode`         | `null`          | Icon to display on the right of the input field.                                             |
| `secureTextEntry`    | `boolean`                 | `false`         | Toggles secure text input (e.g., password fields).                                           |
| `secureTextIconColor`| `string`                  | `"gray"`        | Color of the toggle icon for secure text visibility.                                         |
| `onValidationComplete` | `(isValid: boolean) => void` | `null`      | Callback invoked when validation is completed.                                               |
| `style`              | `ViewStyle`               | `null`          | Custom styles for the input container.                                                      |
| `textStyle`          | `TextStyle`               | `null`          | Custom styles for the input text.                                                           |

## Example Usage with All Props

```tsx
<Input
    label="Password"
    placeholder="Enter your password"
    secureTextEntry={true}
    validationRules={[
        { validate: (value) => value.length >= 6, errorMessage: "Password must be at least 6 characters long" },
    ]}
    variant="outlined"
    isLoading={false}
    isDisabled={false}
    leftIcon={<Ionicons name="lock-closed" size={20} color="gray" />}
    rightIcon={<Ionicons name="eye" size={20} color="gray" />}
    secureTextIconColor="blue"
    onValidationComplete={(isValid) => console.log(`Validation Status: ${isValid}`)}
    style={{ marginBottom: 20 }}
/>
```

## Styling and Variants

### Variants

- **`underline`**: A minimal style with only an underline.
- **`outlined`**: Input field with a border around it.
- **`ghost`**: Input field with no border or background.

### Theming

This component supports light and dark themes dynamically using the `useColorScheme` hook. The colors can be customized via the `Colors.ts` file.

### Icons

Icons from the `Ionicons` library can be added on either side of the input field. Combine them with actions like toggling secure text visibility.

## Contributing

Feel free to contribute by forking the repository, making your changes, and submitting a pull request. All suggestions and improvements are welcome!

## License

This **Input Component** is licensed under the MIT License. See [LICENSE](./LICENSE) for more details.
