import { View, Text, FlatList, SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'

type IUser = {
  name: string;
  email: string
}

const App = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  const fetchData = async () => {
    setIsLoading(true)
    const response = await fetch(`https://wesoftin-backend.vercel.app/users`)
    const data = await response.json()

    setUsers(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size='large' color={'#370617'} />
        <Text> Loading...</Text>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={users}
          renderItem={({ item }: { item: IUser }) => {
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
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#f4f1de',
    paddingTop: 3,
    justifyContent: 'center',
    alignItems: 'center'
  }
})