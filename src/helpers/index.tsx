import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key: string, value: object) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
};

export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
};