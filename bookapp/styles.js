import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        // alignItems: "center",
        // justifyContent: "center",
    },
    line : {
        margin:10,
    },
    title: {
        padding:15,
        height: 70,
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: "lightgray",
    },
    bookTitle : {
        fontFamily: "Times New Roman",
        textAlign: "left",
        fontSize: 20,
    },
    bookAuthor: {
        fontStyle:"italic"
    },
    bookYear: {
        width: 50,
        fontWeight:"200"
    },
    buttonText: {
        textAlign:"center",
        alignContent: "right",
        color: "black",
    },
    button: {
        alignContent: "right",
        width: 60,
        // borderColor: "orange",
        color: "black",
        borderWidth: 2,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    yearAndAdd: {
        flex: 1,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between"
    },
})