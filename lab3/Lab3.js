import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useEffect } from "react";
import { MyContextControllerProvider } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./router/Router"
const Lab3=()=>{
    const USERS = firestore().collection("USERS")
    const admin ={
        fullName: "Admin",
        email:"admin@gmail.com",
        password :"123456",
        phone: "0877410804",
        address: "Bình Dương",
        role: "admin"
    }
    useEffect(()=>{
        USERS.doc(admin.email).onSnapshot(
            u =>{
                if(!u.exists){
                    auth().createUserWithEmailAndPassword(admin.email,admin.password)
                    .then(
                        respone =>{
                            USERS.doc(admin.email).set(admin)
                            console.log("Add new account admin")
                        }
                    )
                }
                
            }
        )
    },[])
    return (
        <MyContextControllerProvider>
            <NavigationContainer>
                <Router/>
            </NavigationContainer>
        </MyContextControllerProvider>
    )
}
export default Lab3;
