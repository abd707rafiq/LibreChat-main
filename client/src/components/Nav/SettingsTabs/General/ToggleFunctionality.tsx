import { useRecoilState } from 'recoil';
import { Switch } from '~/components/ui';
import store from '~/store'; // Update the import path to wherever your appModeState is defined

export default function ToggleFunctionality() {
  const [appMode, setAppMode] = useRecoilState<boolean>(store.modeState); // Adjust the import path as needed

  const handleCheckedChange = (value: boolean) => {
    // Set the app mode based on the switch value
    setAppMode(value ? true : false);
  };

  // Determine if the switch should be checked based on the appMode
  const isSwitchChecked = appMode === true;

  return (
    <div className="flex items-center justify-between">
      <div>Toggle mode</div>
      <Switch
        id="toggleAppMode"
        checked={isSwitchChecked}
        onCheckedChange={handleCheckedChange}
        className="ml-4 mt-2"
        data-testid="toggleAppMode"
      />
    </div>
  );
}
