import { atom, atomFamily, selector } from "recoil";
import { recoilPersist } from "recoil-persist";
import axios from "axios";
import { domainName } from "../../utils/domainName";
const { persistAtom } = recoilPersist();

export const buttonState = atom({
  key: "buttonState", // Home Section
  default: true,
});

export const dropdownStateFamily = atomFamily({
  key: "dropdownStateFamily", // FAQ Section
  default: false,
});

export const cartState = atom({
  key: "cartState",
  default: [
    {
      id: 1,
      productName: "Velocity Tweaks Basic Utility",
      price: 9.99,
      quantity: 0,
    },
    {
      id: 2,
      productName: "Velocity Tweaks Premium Utility",
      price: 29.9,
      count: 0,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const cartStateDB = atom({
  key: "cartStateDB",
  default: null,
  effects: [
    ({ setSelf }) => {
      let ignore = false;

      const fetchCartData = async () => {
        try {
          const response = await axios.get(domainName + "/cart/cart-fix", {
            withCredentials: true,
          });
          if (!ignore) {
            // console.log("cartStateDB", response.data.items);

            const x = response.data.items;

            if (response.data.items.length === 0) {
              return setSelf([]);
            }

            x.forEach((item) => {
              if (item.productName === "WittCepter Product 1") {
                item.price = 9.99;
              }
              if (item.productName === "WittCepter Product 2") {
                item.price = 29.99;
              }
            });


            setSelf(response.data.items); // Populate atom with fetched data
          }
        } catch (error) {
          if (!ignore) {
            setSelf([]); // Handle error case, e.g., setting to empty array
            console.error("Error fetching cart data:", error);
          }
        }
      };
      fetchCartData();

      // Cleanup function to prevent state updates if component unmounts
      return () => {
        ignore = true;
      };
    },
  ],
});

export const cartLengthSelector = selector({
  key: "cartLengthSelector",
  get: ({ get }) => {
    const cart = get(cartStateDB);
    return cart ? cart.length : 0; // Return 0 if cart is null or empty
  },
});

export const cartNotiState = atom({
  key: "cartNotiState",
  default: cartLengthSelector
});


export const contactFormState = atom({
  key: "contactFormState",
  default: [],
});

export const reviewValueState = atom({
  key: "reviewValueState",
  default: 3,
});

export const disableButtonState = atom({
  key: "disableButtonState",
  default: false,
});

export const reviewValueStateNullSelector = selector({
  key: "reviewValueStateNullSelector",
  get: ({ get }) => {
    let reviewState = get(reviewValueState);
    if (reviewState === null) {
      return true;
    } else {
      return false;
    }
  },
});

export const authStateAtom = atom({
  key: "authStateAtom",
  default: null,
  effects: [
    ({ setSelf }) => {
      let ignore = false;
      const checkAuth = async () => {
        try {
          const response = await axios.get(domainName + "/auth/check-auth", {
            withCredentials: true,
          });
          if (!ignore) {
            setSelf(response.data.authenticated);
          }
        } catch (error) {
          if (!ignore) {
            setSelf(false);
          }
        }

        return () => {
          ignore = true;
        };
      };
      checkAuth();
    },
  ],
});

export const loggedInUserDropDownAtom = atom({
  key: "loggedInUserDropDownAtom",
  default: {
    name: null,
    email: null,
    photo: null,
  },
  effects: [
    ({ setSelf }) => {
      let ignore = false;
      const getUserData = async () => {
        try {
          const response = await axios.get(domainName + "/home/userinfo", {
            withCredentials: true,
          });
          if (!ignore) {
            setSelf({
              name: response.data.user.name,
              email: response.data.user.email,
              photo: response.data.user.photo,
            });
          }
        } catch (error) {
          if (!ignore) {
            setSelf({
              name: null,
              email: null,
              photo: null,
            });
          }
        }

        return () => {
          ignore = true;
        };
      };
      getUserData();
    },
  ],
});

export const dropDownStateAtom = atom({
  key: "dropDownStateAtom",
  default: false,
});

// logout needs to call its api and if ok response set Auth state to false
