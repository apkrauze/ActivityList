import React from "react";
import useStore from "../store";
import { MdCheckCircle } from 'react-icons/md'
import styles from '../styles/Home.module.css';
import {
  Text,
  Divider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  List,
  ListItem,
  Stack,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";

const SelectedActivities = () => {
  const { selectedActivities, removeActivity } = useStore();
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Button colorScheme='teal' variant='outline' onClick={onOpen} >
        Selection {selectedActivities.length}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader >Selected Activities</DrawerHeader>
          
          <DrawerBody>
            <List spacing={3}>
              {selectedActivities.map((activity) => (
                <div key={activity.name}>
                  <ListItem>
                  <ListItem as={MdCheckCircle} color='green.500' />
                  <Text fontSize='1xl'>{activity.name}</Text>
                  </ListItem>
                  {/* <Button colorScheme='red' onClick={()=>removeActivity(activity)}>X</Button> */}
                <Stack h='25px'>
                <Divider/>
                </Stack>
              </div>
              ))}
            </List>
          </DrawerBody>
              
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>

  )
}

export default SelectedActivities;

