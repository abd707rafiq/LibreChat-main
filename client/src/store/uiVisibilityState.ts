import { atom } from 'recoil';

// Define an interface for the atom's value to ensure type safety
interface kind {
  hideHeader: boolean;
  hideSidePanel: boolean;
}

const uiVisibilityState = atom<kind>({
  key: 'uiVisibilityState', // Unique key in the context of your Recoil state
  default: {
    hideHeader: localStorage.getItem('hideHeader') === 'true',
    hideSidePanel: localStorage.getItem('hideSidePanel') === 'true',
  }, // Correctly setting the default state as an object
  effects: [
    ({ setSelf, onSet }) => {
      // No changes needed here, just ensure you're handling an object of type UIVisibilityState
      const savedHeaderVisibility = localStorage.getItem('hideHeader');
      const savedPanelVisibility = localStorage.getItem('hideSidePanel');

      if (savedHeaderVisibility != null || savedPanelVisibility != null) {
        setSelf({
          hideHeader: savedHeaderVisibility === 'true',
          hideSidePanel: savedPanelVisibility === 'true',
        });
      }

      // Subscribe to changes in the atom's state to update localStorage
      onSet((newValue) => {
        if (typeof newValue === 'object' && newValue !== null) {
          const { hideHeader, hideSidePanel } = newValue;
          localStorage.setItem('hideHeader', hideHeader.toString());
          localStorage.setItem('hideSidePanel', hideSidePanel.toString());
        }
      });
    },
  ],
});

export { uiVisibilityState };
