import { atom, atomFamily, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

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
      price: 10.0,
      count: 0,
    },
    {
      id: 2,
      productName: "Velocity Tweaks Standard Utility",
      price: 20.0,
      count: 0,
    },
    {
      id: 3,
      productName: "Velocity Tweaks Premium Utility",
      price: 30.0,
      count: 0,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});

export const cartNotificationSelector = selector({
  key: "cartNotificationSelector",
  get: ({ get }) => {
    const cartStateVal = get(cartState);
    let cartNotis = 0;

    cartStateVal.forEach((d) => {
      if (d.count > 0) {
        cartNotis++;
      }
    });

    return cartNotis;
  },
});

export const contactFormState = atom({
  key: 'contactFormState',
  default: []
})


export const reviewValueState = atom({
  key: 'reviewValueState',
  default: 3
})

export const disableButtonState = atom({
  key: 'disableButtonState',
  default: false
});


export const reviewValueStateNullSelector = selector({
  key: 'reviewValueStateNullSelector',
  get: ({get})=>{
    let reviewState = get(reviewValueState)
    if(reviewState === null)
    {
      return true 
    }
    else
    {
      return false
    }
  }
})