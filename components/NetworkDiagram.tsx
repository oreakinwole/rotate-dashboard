import React from 'react';
import { Box, Divider, HStack, VStack, Text } from "@chakra-ui/react";

const NetworkDiagram = () => {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" minH="200px">
        <svg width="300" height="200" viewBox="0 0 300 200">
          <circle cx="150" cy="60" r="20" fill="#4299E1" stroke="#2B6CB0" strokeWidth="2"/>
          <circle cx="80" cy="140" r="15" fill="#48BB78" stroke="#2F855A" strokeWidth="2"/>
          <circle cx="220" cy="140" r="15" fill="#48BB78" stroke="#2F855A" strokeWidth="2"/>
          <circle cx="50" cy="180" r="10" fill="#ED8936" stroke="#C05621" strokeWidth="2"/>
          <circle cx="110" cy="180" r="10" fill="#ED8936" stroke="#C05621" strokeWidth="2"/>
          <circle cx="190" cy="180" r="10" fill="#ED8936" stroke="#C05621" strokeWidth="2"/>
          <circle cx="250" cy="180" r="10" fill="#ED8936" stroke="#C05621" strokeWidth="2"/>
          
          <line x1="150" y1="80" x2="80" y2="125" stroke="#718096" strokeWidth="2"/>
          <line x1="150" y1="80" x2="220" y2="125" stroke="#718096" strokeWidth="2"/>
          <line x1="80" y1="155" x2="50" y2="170" stroke="#718096" strokeWidth="2"/>
          <line x1="80" y1="155" x2="110" y2="170" stroke="#718096" strokeWidth="2"/>
          <line x1="220" y1="155" x2="190" y2="170" stroke="#718096" strokeWidth="2"/>
          <line x1="220" y1="155" x2="250" y2="170" stroke="#718096" strokeWidth="2"/>
          
          <text x="150" y="35" textAnchor="middle" fontSize="12" fill="#2D3748">Core</text>
          <text x="80" y="125" textAnchor="middle" fontSize="10" fill="#2D3748">SW1</text>
          <text x="220" y="125" textAnchor="middle" fontSize="10" fill="#2D3748">SW2</text>
        </svg>
      </Box>
      <Divider mt={4} />
      
      <HStack spacing={8} mt={6} justify="space-between" maxW="300px">
        <HStack spacing={3} align="center">
          <Box w="40px" h="40px" borderRadius="full" bg="red.600" display="flex" alignItems="center" justifyContent="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V10C3 16 12 22 12 22S21 16 21 10V7L12 2Z" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" fill="none"/>
              <line x1="9" y1="9" x2="15" y2="15" stroke="white" strokeWidth="2"/>
              <line x1="15" y1="9" x2="9" y2="15" stroke="white" strokeWidth="2"/>
            </svg>
          </Box>
          <Text fontSize="lg" fontWeight="semibold" color="red.600">Lorem</Text>
        </HStack>
        
        <HStack spacing={3} align="center">
          <Box w="40px" h="40px" borderRadius="full" bg="orange.500" display="flex" alignItems="center" justifyContent="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V10C3 16 12 22 12 22S21 16 21 10V7L12 2Z" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" fill="none"/>
              <line x1="9" y1="9" x2="15" y2="15" stroke="white" strokeWidth="2"/>
              <line x1="15" y1="9" x2="9" y2="15" stroke="white" strokeWidth="2"/>
            </svg>
          </Box>
          <Text fontSize="lg" fontWeight="semibold" color="orange.500">Lorem</Text>
        </HStack>
        
        <HStack spacing={3} align="center">
          <Box w="40px" h="40px" borderRadius="full" bg="green.600" display="flex" alignItems="center" justifyContent="center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7V10C3 16 12 22 12 22S21 16 21 10V7L12 2Z" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
          </Box>
          <Text fontSize="lg" fontWeight="semibold" color="green.600">Lorem</Text>
        </HStack>
      </HStack>
    </>
  );
};

export default NetworkDiagram;