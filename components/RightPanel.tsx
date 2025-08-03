"use client"

import { Box, VStack, Text, Heading, useColorModeValue, HStack, Badge, Flex, Circle, SimpleGrid, Divider, Center } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { fetchVulnerabilityData } from "../lib/mockApi"
import NetworkDiagram from "./NetworkDiagram"
import { Server } from 'lucide-react';

export function RightPanel() {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const criticalColor = useColorModeValue("red.500", "red.300")
  const highColor = useColorModeValue("orange.500", "orange.300")
  const mediumColor = useColorModeValue("yellow.500", "yellow.300")
  const lowColor = useColorModeValue("green.500", "green.300")

  const { data: vulnerabilityData, isLoading } = useQuery({
    queryKey: ["vulnerability"],
    queryFn: fetchVulnerabilityData,
  })

  if (isLoading) {
    return (
      <Box w="400px" bg={bgColor} p={6}>
        <Text>Loading...</Text>
      </Box>
    )
  }

  const assets = [
    { name: "Loremipsumdolorsit", ip: "192.168.1.1", risk: "Critical" },
    { name: "Loremipsumdolorsit002", ip: "192.168.1.2", risk: "Critical" }
  ]

  const riskSummary = {
    critical: 2,
    high: 0,
    medium: 0,
    low: 0
  }

  const totalRisk = Object.values(vulnerabilityData?.riskMetrics || {}).reduce((a, b) => a + b, 0)

  return (
    <Box flex={1} bg={bgColor} p={6} overflow="auto" role="complementary" aria-label="Risk assessment panel">
      <Text fontSize="xl" fontWeight="bold" color="green.500" mb={6}>
       Lorem Lorem Lorem
      </Text>

      <VStack spacing={6} align="stretch">
        <Box borderRadius="xl" p={4} bg={bgColor} border="1px" borderColor={borderColor}>
          <NetworkDiagram />
        </Box>

        <HStack spacing={4} align="stretch">
          <Box flex={1} bg={bgColor} borderRadius="xl" border="1px" borderColor={borderColor} p={4}>
            <HStack mb={4} justify="space-between">
              <Badge colorScheme="gray" px={3} py={1} borderRadius="full">Asset</Badge>
              <Badge colorScheme="gray" px={3} py={1} borderRadius="full">Contextual Risk</Badge>
            </HStack>

            <VStack spacing={3}>
              {assets.map((asset, index) => (
                <HStack key={index} w="full" justify="space-between" p={3} borderRadius="lg" bg={useColorModeValue("gray.50", "gray.700")}>
                  <HStack>
                    
                    <ServerIcon />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="medium" fontSize="sm">{asset.name}</Text>
                      <Text fontSize="xs" color="gray.500">{asset.ip}</Text>
                    </VStack>
                  </HStack>
                  <Badge colorScheme="red" borderRadius="full" px={4} py={1}>
                    {asset.risk}
                  </Badge>
                </HStack>
              ))}
            </VStack>

            <HStack justify="center" mt={4} color="gray.500" fontSize="sm">
              <Text>Showing 1-2 of 2</Text>
            </HStack>
          </Box>

          <Box flex={1} bg={bgColor} borderRadius="xl" border="1px" borderColor={borderColor} p={6}>
            <Heading size="md" mb={6}>Contextual Risk</Heading>

            <Flex justify="space-between" align="center">
              <VStack align="start" spacing={3}>
                <HStack>
                  <Circle size="3" bg="red.500" />
                  <Text fontWeight="bold" fontSize="lg">{riskSummary.critical}</Text>
                  <Text color="gray.600">Critical</Text>
                </HStack>
                <HStack>
                  <Circle size="3" bg="orange.500" />
                  <Text fontWeight="bold" fontSize="lg">{riskSummary.high}</Text>
                  <Text color="gray.600">High</Text>
                </HStack>
                <HStack>
                  <Circle size="3" bg="yellow.500" />
                  <Text fontWeight="bold" fontSize="lg">{riskSummary.medium}</Text>
                  <Text color="gray.600">Medium</Text>
                </HStack>
                <HStack>
                  <Circle size="3" bg="green.500" />
                  <Text fontWeight="bold" fontSize="lg">{riskSummary.low}</Text>
                  <Text color="gray.600">Low</Text>
                </HStack>
              </VStack>

              <Box position="relative">
                <Circle size="120px" border="8px" borderColor="red.500" display="flex" alignItems="center" justifyContent="center">
                  <Text fontSize="4xl" fontWeight="bold" color="gray.700">
                    {riskSummary.critical}
                  </Text>
                </Circle>
              </Box>
            </Flex>
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
}

function ServerIcon() {
  return (
      <Box
        w="40px"
        h="40px"
        bg="blue.100"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="sm"
      >
        <Server size={20} color="#3182CE" strokeWidth={2} />
      </Box>
  );
}