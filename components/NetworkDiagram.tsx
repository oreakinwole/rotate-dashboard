import React from 'react';
import { Box, Divider, HStack, VStack, Text } from "@chakra-ui/react";
import { NetworkD } from './NetworkD';
const NetworkDiagram = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" minH="200px">
        <NetworkD />
      </Box>
      <Divider mt={4} />

      <HStack spacing={8} mt={6} justify="space-between" maxW="300px">
        <HStack spacing={3} align="center">
          <Box w="40px" h="40px" borderRadius="full" bg="red.600" display="flex" alignItems="center" justifyContent="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V10C3 16 12 22 12 22S21 16 21 10V7L12 2Z" stroke="white" strokeWidth="2" fill="none" />
              <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" fill="none" />
              <line x1="9" y1="9" x2="15" y2="15" stroke="white" strokeWidth="2" />
              <line x1="15" y1="9" x2="9" y2="15" stroke="white" strokeWidth="2" />
            </svg>
          </Box>
          <Text fontSize="lg" fontWeight="semibold" color="red.600">Lorem</Text>
        </HStack>

        <HStack spacing={3} align="center">
          <Box w="40px" h="40px" borderRadius="full" bg="orange.500" display="flex" alignItems="center" justifyContent="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V10C3 16 12 22 12 22S21 16 21 10V7L12 2Z" stroke="white" strokeWidth="2" fill="none" />
              <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" fill="none" />
              <line x1="9" y1="9" x2="15" y2="15" stroke="white" strokeWidth="2" />
              <line x1="15" y1="9" x2="9" y2="15" stroke="white" strokeWidth="2" />
            </svg>
          </Box>
          <Text fontSize="lg" fontWeight="semibold" color="orange.500">Lorem</Text>
        </HStack>

        <HStack spacing={3} align="center">
          <Box w="40px" h="40px" borderRadius="full" bg="green.600" display="flex" alignItems="center" justifyContent="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V10C3 16 12 22 12 22S21 16 21 10V7L12 2Z" stroke="white" strokeWidth="2" fill="none" />
              <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </Box>
          <Text fontSize="lg" fontWeight="semibold" color="green.600">Lorem</Text>
        </HStack>
      </HStack>
    </>
  );
};

export default NetworkDiagram;