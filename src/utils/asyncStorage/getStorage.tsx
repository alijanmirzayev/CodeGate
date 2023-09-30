import AsyncStorage from "@react-native-async-storage/async-storage";

export const GET_ASYNC_STORAGE = {
    token: async () => {
        try {
            const token = await AsyncStorage.getItem("token");
            if (token !== null) {
                return JSON.parse(token);
            }
            else {
                return null;
            }
        } catch (error) {
            return null;
        }
    },
}