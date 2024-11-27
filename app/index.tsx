import { Image, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Input from "@/components/Input";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{
        light: Colors.light.tint,
        dark: Colors.dark.tint,
      }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-ui-lab-logo.png")}
          style={[styles.reactLogo, {
            tintColor: colors.text,
          }]}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to UI Lab!</ThemedText>
        <HelloWave />
      </ThemedView>

      {/* Input Component usage */}

      <ThemedText type="title">Usecases of the Input</ThemedText>
      <ThemedText type="small">
        Change Light/Dark theme to change input by theme
      </ThemedText>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">value</ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Input
          placeholder="Enter you name"
          value="Parth"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">defaultValue</ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Input
          placeholder="Enter you name"
          defaultValue="Parth"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">Label</ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Input
          label="Name"
          placeholder="Enter you name"
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">isLoading</ThemedText>
        <ThemedText type="default">boolean</ThemedText>
        <Input placeholder="Loading state" isLoading />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">isDisabled</ThemedText>
        <ThemedText type="default">boolean</ThemedText>
        <Input placeholder="Disabled input" isDisabled />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">isReadOnly</ThemedText>
        <ThemedText type="default">boolean</ThemedText>
        <Input placeholder="Read-only input" value="Read-only value" isReadOnly />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">secureTextEntry</ThemedText>
        <ThemedText type="default">boolean</ThemedText>
        <Input placeholder="Enter your password" secureTextEntry />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">secureTextIconColor</ThemedText>
        <ThemedText type="default">string</ThemedText>
        <Input placeholder="Enter your password" secureTextEntry secureTextIconColor="red" />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">validationRules</ThemedText>
        <ThemedText type="default">ValidationRule[]</ThemedText>
        <Input
          placeholder="Enter your email"
          validationRules={[
            { validate: (value) => value.length > 5, errorMessage: 'Email is too short' },
            { validate: (value) => value.includes('@'), errorMessage: 'Email must contain "@"' },
          ]}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">onValidationComplete</ThemedText>
        <ThemedText type="default">(isValid: boolean) =&gt; void</ThemedText>
        <Input
          placeholder="Enter value"
          validationRules={[
            { validate: (val) => val.length > 5, errorMessage: 'Too short' },
          ]}
          onValidationComplete={(isValid) =>
            console.log('Validation completed:', isValid)
          }
        />
      </ThemedView>


      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">leftIcon</ThemedText>
        <ThemedText type="default">React.ReactNode</ThemedText>
        <Input
          placeholder="Enter text"
          leftIcon={<Ionicons name="person" size={20} color="gray" />}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">rightIcon</ThemedText>
        <ThemedText type="default">React.ReactNode</ThemedText>
        <Input
          placeholder="Enter text"
          rightIcon={<Ionicons name="checkmark" size={20} color="green" />}
        />
      </ThemedView>

      <ThemedView style={{ gap: 10, paddingBottom: 10 }}>
        <ThemedText type="subtitle">variant</ThemedText>
        <ThemedText type="default">'ghost' | 'outlined' | 'underline'</ThemedText>
        <Input placeholder="Ghost variant" variant="ghost" />
        <Input placeholder="Outlined variant" variant="outlined" />
        <Input placeholder="Underline variant" variant="underline" />
      </ThemedView>


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
