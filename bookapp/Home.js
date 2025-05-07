import React, { useEffect, useState } from "react";
import {View, Text, Button, FlatList, Alert} from "react-native";
import styles from "./styles"
import MyButton from "./MyButton";

export default function Home() {
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchBooks = async () => {
            try{
                const response = await fetch("https://openlibrary.org/people/mekBot/books/want-to-read.json")
                
                if(!response.ok){
                    throw new Error("Failed to obtain response from API")
                }

                const data = await response.json()
                setBooks(data.reading_log_entries)
            }
            catch(err){
                setError(err)
            }
        }
        fetchBooks()
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Books</Text>
            </View>
            <FlatList
                data={books}
                renderItem={({item}) => (
                    <>
                    <View style={styles.line}>
                        <View style={styles.container}>
                            <Text style={styles.bookTitle}>{item.work.title}</Text>
                            <Text style={styles.bookAuthor}>{item.work.author_names}</Text>
                            <View style={styles.yearAndAdd}>
                                <Text style={styles.bookYear}>{item.work.first_publish_year}</Text>
                                {/* <Button title="Like" /> */}
                                <MyButton title={"Like"} onPress={console.log('button pressed')} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator} />
                    </>
                )}
                keyExtractor={item => item.work.key}
            />
            <Text>#content for home</Text>
        </View>
    )
}