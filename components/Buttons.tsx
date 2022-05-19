import { Button } from "@chakra-ui/react";
import { useState, FC } from "react";
import { Activity } from "../interfaces";
import useStore from "../store";
import styles from '../styles/Home.module.css';

interface ButtonsProps {
  activity: Activity;
}

const Buttons: FC<ButtonsProps> = ({ activity }) => {
  const [added, setAdded] = useState(false);
  const { addActivity, removeActivity } = useStore();
  return (
    <div className={styles.buttons}>
      {added ? (
        <Button
          colorScheme="red"
          onClick={() => {
            removeActivity(activity);
            setAdded(false);
          }}
        >
          X
        </Button>
      ) : (
        <Button
          colorScheme="green"
          onClick={() => {
            addActivity(activity);
            setAdded(true);
          }}
        >
          +
        </Button>
      )}
    </div>
  );
};

export default Buttons;
