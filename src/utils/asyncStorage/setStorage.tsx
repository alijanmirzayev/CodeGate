import AsyncStorage from "@react-native-async-storage/async-storage";

export const SAVE_ASYNC_STORAGE = {
    token: async (token: string) => {
        try {
            await AsyncStorage.setItem("token", JSON.stringify(token));
            return token;
        } catch (error) {
            console.log('Err: SAVE_ASYNC_STORAGE.token', error);
            return null
        }
    },
}