import Feather from '@expo/vector-icons/Feather';

export function EyeIcon({ size = 24, color = "black", props }) {
   return <Feather name="eye" size={size} color={color} {...props} style={{ marginLeft: -20 }} />
}
