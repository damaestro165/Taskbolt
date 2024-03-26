import {
  Box,
  Button,
  Circle,
  Divider,
  GridItem,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CreateIcon from '../assets/Icons/CreateIcon';
import FourdotIcon from '../assets/Icons/FourdotIcon';
import { AiOutlinePlus } from 'react-icons/ai';
import TaskItem from './TaskItem';
import {  Droppable } from 'react-beautiful-dnd';
import CreateTask from './CreateTask';



const SectionCard = ({title, index, id, taskItem}) => {


  const onDragEnd = () =>{};
  
  return (
    < >
      <GridItem className=' w-[19.75rem] rounded-lg p-4 border-[.07rem] h-fit flex flex-col gap-4 '>
        <HStack spacing={5}>
          <Text fontWeight='extrabold'> {title}</Text>
          <Circle size='2rem' bg='#DCDCDC' fontWeight='extrabold'>
            {taskItem.length}
          </Circle>
          <Spacer />
          <CreateIcon boxSize={6} />
          <FourdotIcon boxSize={6} />
        </HStack>
        <Divider borderWidth='.1rem' />
        <Droppable droppableId={title}>
         {(provided) =>  <Box {...provided.droppableProps}  ref={provided.innerRef}>
          {
              taskItem.map((item, i) => <TaskItem key={item.id} title={item.title} id={item.id} description={item.description} index= {i} /> )
          }
          
          {provided.placeholder}
          </Box>}
        </Droppable>
       <CreateTask id={id}/>
      </GridItem>
    </>
  );
};

export default SectionCard;
