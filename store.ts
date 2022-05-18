import { Activity } from './interfaces';
import create from 'zustand';

interface SelectedActivities { 
  selectedActivities: Activity[];
  addActivity: (activity: Activity) => void;
  removeActivity: (activity: Activity) => void;
}
  
const useStore = create<SelectedActivities>((set)=>({
  selectedActivities: [],
  addActivity: (activity: Activity) => {
    set(state => ({
      selectedActivities: [...state.selectedActivities, activity]
    }));
  },
  removeActivity: (activity: Activity) => {
    set(state => ({
      selectedActivities: state.selectedActivities.filter(a => a.name !== activity.name)
    }));
  }
}));



export default useStore;
