import { atom } from 'recoil';

const modeState = atom<boolean>({
  key: 'modeState',
  default: localStorage.getItem('modeState') === 'true', // Assuming 'true' as default if nothing is stored
  effects: [
    ({ setSelf, onSet }) => {
      // Load the initial value from localStorage when the atom is initialized
      const savedMode = localStorage.getItem('modeState');
      if (savedMode !== null) {
        setSelf(savedMode === 'true');
      }

      // Update localStorage whenever the atom's state changes
      onSet((newValue, _, isReset) => {
        if (isReset) {
          // Handle the reset case by removing the item or setting it to a default value
          localStorage.removeItem('modeState');
        } else if (typeof newValue === 'boolean') {
          localStorage.setItem('modeState', newValue.toString());
        }
      });
    },
  ],
});

export default { modeState };
