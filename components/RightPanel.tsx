"use client"

import { Box, VStack, Text, Heading, useColorModeValue, HStack, Badge, Flex, Circle } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { fetchVulnerabilityData } from "../lib/mockApi"
import NetworkDiagram from "./NetworkDiagram"
import { RiskChart } from "./RiskChart"

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

  const totalRisk = Object.values(vulnerabilityData?.riskMetrics || {}).reduce((a, b) => a + b, 0)

  return (
    <Box flex={1} bg={bgColor} p={6} overflow="auto" role="complementary" aria-label="Risk assessment panel">
      <Text fontSize="2xl" fontWeight="bold" color="green.600" mb={4}>
        Lorem Lorem Lorem
      </Text>
      <VStack spacing={6} align="stretch">
        <Box

          borderRadius="md"
          p={4}
          bg={useColorModeValue("brand.50", "brand.900")}
        >
          <NetworkDiagram />
        </Box>


      </VStack>
    </Box>
  )
}
