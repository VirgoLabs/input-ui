import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Variant = 'ghost' | 'outlined' | 'underline';

interface ValidationRule {
  validate: (value: string) => boolean;
  errorMessage: string;
}

interface InputProps extends TextInputProps {
  label?: string;
  value?: string | undefined;
  defaultValue?: string | undefined;
  validationRules?: ValidationRule[];
  isLoading?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  variant?: Variant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  secureTextEntry?: boolean;
  secureTextIconColor?: string;
  onValidationComplete?: (isValid: boolean) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  defaultValue,
  validationRules = [],
  isLoading = false,
  isDisabled = false,
  isReadOnly = false,
  variant = 'underline',
  leftIcon,
  rightIcon,
  secureTextEntry = false,
  secureTextIconColor = 'gray',
  onValidationComplete,
  ...props
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const [text, setText] = useState(
    !props.onChangeText &&
    defaultValue || value || '');
  const [error, setError] = useState<string | null>(null);
  const [secureText, setSecureText] = useState(secureTextEntry || false);

  const handleValidation = (value: string) => {
    const validationErrors = validationRules
      .filter((rule) => !rule.validate(value))
      .map((rule) => rule.errorMessage);

    if (validationErrors.length > 0) {
      setError(validationErrors.join(' '));
      onValidationComplete?.(false);
    } else {
      setError(null);
      onValidationComplete?.(true);
    }
  };

  const handleChangeText = (value: string) => {
    setText(value);
    handleValidation(value);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={[styles.label, { color: colors.text }]}>{label}</Text>}

      <View
        style={[
          styles.inputWrapper, {
            borderColor: colors.tint
          },
          styles[`${variant}Wrapper`],
          error && styles.inputWrapperError,
          isDisabled && styles.inputWrapperDisabled
        ]}
      >
        {leftIcon && (
          <View style={[styles.icon, { opacity: isDisabled ? 0.5 : 1 }]}>
            {leftIcon}
          </View>
        )}

        <TextInput
          style={[styles.input, { color: isDisabled ? 'gray' : colors.text }]}
          value={!props.onChangeText ? text : value}
          onChangeText={handleChangeText}
          secureTextEntry={secureText}
          placeholderTextColor={colors.tabIconDefault}
          editable={!isDisabled}
          readOnly={isReadOnly || isDisabled}
          {...props}
        />

        {isLoading ? (
          <ActivityIndicator style={styles.icon} size="small" color="gray" />
        ) : (
          rightIcon && (
            <TouchableOpacity style={[styles.icon, { opacity: isDisabled ? 0.5 : 1 }]}>
              {rightIcon}
            </TouchableOpacity>
          )
        )}

        {secureTextEntry && !(isDisabled) && (
          <TouchableOpacity
            onPress={() => setSecureText(!secureText)}
            style={styles.iconWrapper}
            disabled={isDisabled}
          >
            <Ionicons
              name={secureText ? 'eye-off' : 'eye'}
              size={20}
              color={secureTextIconColor}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 8 },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  outlinedWrapper: {
    borderWidth: 2,
    backgroundColor: 'transparent'
  },
  ghostWrapper: {
    borderWidth: 0,
    backgroundColor: 'transparent'
  },
  underlineWrapper: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  inputWrapperError: {
    borderColor: 'red'
  },
  inputWrapperDisabled: {
    borderColor: 'gray',
  },
  input: { flex: 1, height: 40, fontSize: 16 },
  iconWrapper: { marginLeft: 10 },
  icon: { marginHorizontal: 8 },
  errorText: { color: 'red', marginTop: 4, fontSize: 14 },
});

export default Input;
