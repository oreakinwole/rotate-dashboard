"use client"

import {
  Box,
  VStack,
  Text,
  Heading,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  IconButton,
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { fetchVulnerabilityData } from "../lib/mockApi"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useColorMode } from "@chakra-ui/react"

export function MainContent() {
  const bgColor = useColorModeValue("white", "gray.800")
  const borderColor = useColorModeValue("gray.200", "gray.700")
  const { colorMode, toggleColorMode } = useColorMode()

  const { data: vulnerabilityData, isLoading } = useQuery({
    queryKey: ["vulnerability"],
    queryFn: fetchVulnerabilityData,
  })

  if (isLoading) {
    return (
      <Box flex={1} p={6}>
        <Text>Loading...</Text>
      </Box>
    )
  }

  return (
    <Box
       w="385px"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      overflow="auto"
      role="main"
      aria-label="Main content"
    >
      <VStack spacing={6} align="stretch" p={6}>
        <Flex justify="flex-end" align="center">
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="sm"
          />
        </Flex>

        <Box>
          <Heading as="h1" size="lg" mb={4} color="brand.600">
            Description
          </Heading>
          <Text fontSize="sm" lineHeight="1.6" color="gray.600">
            {vulnerabilityData?.description}
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4} color="brand.600">
            Extra
          </Heading>
          <Text fontSize="sm" lineHeight="1.6" color="gray.600" mb={6}>
            {vulnerabilityData?.extra}
          </Text>

          <TableContainer>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th border="none" px={0} py={2} fontSize="xs" fontWeight="normal" color="gray.500">
                    Property
                  </Th>
                  <Th border="none" px={0} py={2} fontSize="xs" fontWeight="normal" color="gray.500">
                    Value
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {vulnerabilityData?.details.map((detail, index) => (
                  <Tr key={index}>
                    <Td border="none" px={0} py={2} fontSize="sm" color="gray.700">
                      {detail.label}
                    </Td>
                    <Td border="none" px={0} py={2} fontSize="sm" color="gray.700">
                      {detail.value || "-"}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </VStack>
    </Box>
  )
}