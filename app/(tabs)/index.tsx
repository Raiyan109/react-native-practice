import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

type IProps = {
  name: string;
  email: string
}

const App = () => {
  const [users, setUsers] = useState([])
  const fetchData = async () => {
    const response = await fetch(`https://wesoftin-backend.vercel.app/users`)
    const data = await response.json()

    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={users}
          renderItem={({ item }: { item: IProps }) => {
            return (
              <View style={styles.card}>
                <Text>Name: {item.name}</Text>
                <Text>Email: {item.email}</Text>
              </View>
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 4,

  },
  card: {
    borderStyle: 'solid',
    borderColor: '#fb6f92',
    borderWidth: 2,
    gap: 4,
    backgroundColor: '#edafb8',
    padding: 16,
    borderRadius: 8
  },
  listContainer: {
    display: 'flex'
  }
})