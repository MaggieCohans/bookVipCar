import SearchScreen from "../src/views/Search";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-i18next', () => ({
      useTranslation: () => ({ t: (en: any) => en })
}));
describe("Test Search Screen", () => {
      it("render search screen exactly", async () => {
            const navigation = {
                  navigate: jest.fn(),
            };
            const screen = render(
                  <Provider store={store}>
                        <NavigationContainer>
                              <SearchScreen navigation={navigation} />
                        </NavigationContainer>
                  </Provider>);
            const { getByText } = screen;
            expect(getByText("Pick-up Date")).toBeOnTheScreen();
            expect(getByText("Drop-off Date")).toBeOnTheScreen();
            expect(getByText("Place To Rent")).toBeOnTheScreen();
            expect(getByText("Seating Capacity")).toBeOnTheScreen();
            expect(getByText("Place To Rent")).toBeOnTheScreen();
            const btnSearch = getByText('Search Car');
            fireEvent.press(btnSearch);
            await waitFor(() => expect(navigation.navigate).toHaveBeenCalledWith("ListCar", [{ "brand": "Minivans（7席シート）", "deleteFlag": "0", "endDate": "2022-12-30T17:00:00.000000Z", "id": 13, "imagePath": "https://bookvipcar.vjitp.com/uploads/img/car-category/minivans.png", "licensePlates": "BVC7-013", "partnerId": "0", "partnerPrice": null, "price": "1750000", "priceSpecialDay": "1750000", "provinceId": "1", "seats": "7", "startDate": "2022-07-31T17:00:00.000000Z", "status": "1", "transmission": "Manual" }]));
      })
});