import { TouchableOpacity, StyleSheet } from "react-native"

import { Icons } from "../common/Icons"

export const FilterButton = () => {

  const handleOpen = async () => {
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleOpen}>
      <Icons.Filter color="#fff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#007AFF',
    backgroundColor: '#007AFF'
  }
})