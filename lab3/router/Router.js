import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Customer from "../screens/Customer";
import Admin from "../screens/Admin";
import ChangePassword from "../screens/ChangePassword";
import ForgotPass from "../screens/ForgotPassword";
import {logout, useMyContextController} from '../store';
import CustomerAdmin from "../screens/CustomerAdmin";
import AppointmentDetail from "../screens/AppointmentDetail";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import ProfileAllUser from "../screens/ProfileAllUser";
import UpdateService from "../screens/UpdateService";
const Stack = createStackNavigator();
const Router = ({navigation}) => {
    const [controller, dispatch] = useMyContextController();
  const {userLogin} = controller;
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerMode: 'none'}}
    >
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: "Register",
          headerMode: "screen",
          headerStyle: { backgroundColor: "#ff1493" },
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#fff" },
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Admin" component={Admin} />
      <Stack.Screen name="CustomerAdmin" component={CustomerAdmin} />
      <Stack.Screen
        name="ChangePass"
        component={ChangePassword}
        options={{
          headerTitle: "Change Password",
          headerMode: "screen",
          headerStyle: { backgroundColor: "#ff1493" },
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#fff" },
        }}
      />
      <Stack.Screen
        name="AppointmentDetail"
        component={AppointmentDetail}
        options={{
          headerTitle: "Appointment Detail",
          headerMode: "screen",
          headerStyle: { backgroundColor: "#ff1493" },
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#fff" },
        }}
      />
      <Stack.Screen name="Customer" component={Customer} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "Profile",
          headerMode: "screen",
          headerStyle: { backgroundColor: "#ff1493" },
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#fff" },
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerTitle: "Edit Profile",
          headerMode: "screen",
          headerStyle: { backgroundColor: "#ff1493" },
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#fff" },
        }}
      />
      <Stack.Screen
        name="ProfileAllUser"
        component={ProfileAllUser}
        options={{
          headerTitle: "Profile",
          headerMode: "screen",
          headerStyle: { backgroundColor: "#ff1493" },
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#fff" },
        }}
      />
      <Stack.Screen
        name="UpdateService"
        component={UpdateService}
        options={{
          headerTitle: "Update Service",
          headerMode: "screen",
          headerStyle: { backgroundColor: "#ff1493" },
          headerTintColor: "#fff",
          headerTitleStyle: { color: "#fff" },
        }}
      />
    </Stack.Navigator>
  );
};
export default Router;
